#!/usr/bin/env node
/*
 * optimize-images.js — converte os screenshots pesados pra WebP (uso pontual).
 * WebP da otima qualidade com tamanho pequeno (PNG paleta estragava gradientes).
 * Converte assets/portfolio/*.png e assets/lead_site/*.png -> .webp e remove o
 * .png original. Recompacta a foto do Guilherme (jpg). Mantem logos/favicon.
 *
 * Depois rodar: atualizar as refs .png -> .webp em src/site_v2/cases.js.
 * Rodar local (sharp via --no-save). Uso: node tools/optimize-images.js
 */
"use strict";
var fs = require("fs");
var path = require("path");
var sharp = require("sharp");

var ROOT = path.join(__dirname, "..");
var SHOT_DIRS = ["assets/portfolio", "assets/lead_site"];

function fmt(n) { return (n / 1024).toFixed(0) + "KB"; }

(async function () {
  var before = 0, after = 0;
  for (var dirRel of SHOT_DIRS) {
    var dir = path.join(ROOT, dirRel);
    if (!fs.existsSync(dir)) continue;
    for (var f of fs.readdirSync(dir)) {
      if (!f.toLowerCase().endsWith(".png")) continue;
      var src = path.join(dir, f);
      var b = fs.statSync(src).size;
      var webp = await sharp(fs.readFileSync(src))
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 84, effort: 5 })
        .toBuffer();
      var outName = f.replace(/\.png$/i, ".webp");
      fs.writeFileSync(path.join(dir, outName), webp);
      fs.unlinkSync(src); // remove o png original
      before += b; after += webp.length;
      console.log(dirRel + "/" + f + " -> " + outName + ": " + fmt(b) + " -> " + fmt(webp.length));
    }
  }
  // foto do Guilherme (mantem jpg, recompacta com mais qualidade)
  var foto = path.join(ROOT, "assets/portfolio/guilherme-foto.jpg");
  if (fs.existsSync(foto)) {
    var fb = fs.statSync(foto).size;
    var jb = await sharp(fs.readFileSync(foto)).resize({ width: 900, withoutEnlargement: true }).jpeg({ quality: 88, mozjpeg: true }).toBuffer();
    if (jb.length < fb) fs.writeFileSync(foto, jb);
    before += fb; after += Math.min(jb.length, fb);
    console.log("assets/portfolio/guilherme-foto.jpg: " + fmt(fb) + " -> " + fmt(Math.min(jb.length, fb)));
  }
  console.log("\nTOTAL: " + fmt(before) + " -> " + fmt(after));
})();
