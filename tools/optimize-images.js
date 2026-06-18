#!/usr/bin/env node
/*
 * optimize-images.js — comprime as imagens pesadas de assets/ (uso pontual).
 * Os screenshots do portfolio vinham com 3-4MB cada (~28MB no total), o que
 * deixava o upload SFTP da Hostinger instavel e o site lento no mobile.
 * Redimensiona pra uma largura web razoavel e re-encoda. Mantem os nomes.
 *
 * Rodar local (sharp via --no-save), commitar as imagens menores. O CI nao
 * precisa do sharp.  Uso: node tools/optimize-images.js
 */
"use strict";
var fs = require("fs");
var path = require("path");
var sharp = require("sharp");

var ROOT = path.join(__dirname, "..");
var TARGETS = [
  { dir: "assets/portfolio", ext: ".png", maxW: 1200 },
  { dir: "assets/lead_site", ext: ".png", maxW: 1200 },
];

function fmt(n) { return (n / 1024).toFixed(0) + "KB"; }

(async function () {
  var totalBefore = 0, totalAfter = 0;

  for (var t of TARGETS) {
    var dir = path.join(ROOT, t.dir);
    if (!fs.existsSync(dir)) continue;
    for (var f of fs.readdirSync(dir)) {
      var full = path.join(dir, f);
      var lower = f.toLowerCase();
      var isPng = lower.endsWith(".png");
      var isJpg = lower.endsWith(".jpg") || lower.endsWith(".jpeg");
      if (!isPng && !isJpg) continue;

      var before = fs.statSync(full).size;
      var buf = fs.readFileSync(full);
      var img = sharp(buf).resize({ width: t.maxW, withoutEnlargement: true });
      var out = isPng
        ? await img.png({ compressionLevel: 9, palette: true, quality: 78 }).toBuffer()
        : await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();

      // so substitui se ficou menor
      if (out.length < before) { fs.writeFileSync(full, out); }
      var after = Math.min(out.length, before);
      totalBefore += before; totalAfter += after;
      console.log(t.dir + "/" + f + ": " + fmt(before) + " -> " + fmt(after));
    }
  }

  // foto do Guilherme (jpg)
  var foto = path.join(ROOT, "assets/portfolio/guilherme-foto.jpg");
  if (fs.existsSync(foto)) {
    var b = fs.statSync(foto).size;
    var o = await sharp(fs.readFileSync(foto)).resize({ width: 900, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    if (o.length < b) fs.writeFileSync(foto, o);
    totalBefore += b; totalAfter += Math.min(o.length, b);
    console.log("assets/portfolio/guilherme-foto.jpg: " + fmt(b) + " -> " + fmt(Math.min(o.length, b)));
  }

  console.log("\nTOTAL: " + fmt(totalBefore) + " -> " + fmt(totalAfter));
})();
