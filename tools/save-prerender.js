#!/usr/bin/env node
/*
 * save-prerender.js — copia os snapshots de dist/ para prerendered/.
 * --------------------------------------------------------------------------
 * Antes isso era um encadeado de "mkdir -p && cp" dentro do package.json, que
 * so funciona em shell POSIX: no Windows o npm roda os scripts pelo cmd.exe,
 * onde "mkdir -p" falha (e o -p vira nome de pasta) e derruba a cadeia inteira.
 * Em Node o mesmo passo roda igual nos tres sistemas.
 *
 * Uso: node tools/save-prerender.js  (normalmente via npm run prerender:save)
 */
"use strict";
var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");
var DIST = path.join(ROOT, "dist");
var OUT = path.join(ROOT, "prerendered");

var PAGES = ["index.html", "portfolio.html"];

fs.mkdirSync(OUT, { recursive: true });

var saved = 0;
PAGES.forEach(function (f) {
  var from = path.join(DIST, f);
  if (!fs.existsSync(from)) return; // pagina opcional (ex.: portfolio ainda nao existe)
  fs.copyFileSync(from, path.join(OUT, f));
  console.log("[prerender:save] " + f + " -> prerendered/" + f);
  saved++;
});

if (!saved) {
  console.error("[prerender:save] ERRO: nenhum snapshot em dist/. Rode 'npm run build' antes.");
  process.exit(1);
}
