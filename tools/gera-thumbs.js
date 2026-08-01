#!/usr/bin/env node
/*
 * gera-thumbs.js — versao leve dos prints do portfolio, pros CARDS.
 * --------------------------------------------------------------------------
 * Por que existe: os prints sao capturados a 1600px de largura (precisa disso
 * pro lightbox, onde a pessoa le o site inteiro). Mas nos cards eles aparecem
 * com uns 350px. O navegador baixava 4x mais pixels do que usava: a home
 * pesava 2.231 KB, dos quais 2.181 KB eram esses 6 prints.
 *
 * Este script gera assets/portfolio/card/<nome>.webp a 720px — o suficiente
 * pra ficar nitido em tela retina de celular (2x) e no grid do desktop.
 * O arquivo original continua intacto e e o que o lightbox carrega.
 *
 * Uso: node tools/gera-thumbs.js
 */
"use strict";
var fs = require("fs");
var path = require("path");
var sharp = require("sharp");

var ROOT = path.join(__dirname, "..");
var ORIGEM = path.join(ROOT, "assets", "portfolio");
var DESTINO = path.join(ORIGEM, "card");
var LARGURA = 720;

(async function () {
  fs.mkdirSync(DESTINO, { recursive: true });

  var arquivos = fs.readdirSync(ORIGEM).filter(function (f) {
    return /\.webp$/i.test(f) && fs.statSync(path.join(ORIGEM, f)).isFile();
  });

  var antes = 0, depois = 0, n = 0;
  for (var f of arquivos) {
    var src = path.join(ORIGEM, f);
    var meta = await sharp(src).metadata();
    // so vale reduzir o que e maior que o alvo
    if (meta.width <= LARGURA) { console.log("  (ja pequeno) " + f); continue; }

    var buf = await sharp(src)
      .resize({ width: LARGURA, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();

    fs.writeFileSync(path.join(DESTINO, f), buf);
    var a = fs.statSync(src).size;
    antes += a; depois += buf.length; n++;
    console.log(
      "  " + f.padEnd(34) +
      (a / 1024).toFixed(0).padStart(5) + "KB -> " +
      (buf.length / 1024).toFixed(0).padStart(4) + "KB  (-" +
      (100 - buf.length / a * 100).toFixed(0) + "%)"
    );
  }

  console.log("\n" + n + " thumb(s) geradas em assets/portfolio/card/");
  if (n) console.log("TOTAL: " + (antes / 1024).toFixed(0) + "KB -> " + (depois / 1024).toFixed(0) +
    "KB  (economia de " + ((antes - depois) / 1024).toFixed(0) + "KB)");
})().catch(function (e) { console.error(e); process.exit(1); });
