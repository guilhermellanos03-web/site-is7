#!/usr/bin/env node
/*
 * build-proposta.js — monta o pacote do subdominio proposta.is7mkt.com.br
 * --------------------------------------------------------------------------
 * As paginas de proposta sao client-facing (enviadas direto pra clientes),
 * entao ficam como JSX-Babel (compilam no navegador) — sem o peso de
 * pre-render do site principal. Este script junta as paginas + dependencias
 * em dist-proposta/, com nomes/URLs limpas (/guincho, /chaveiro, /assessoria)
 * e back-links apontando pro site principal.
 *
 * Uso: node tools/build-proposta.js   (depois zipar dist-proposta/)
 */
"use strict";
var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");
var OUT = path.join(ROOT, "dist-proposta");

function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function copyRec(src, dst) {
  var st = fs.statSync(src);
  if (st.isDirectory()) { fs.mkdirSync(dst, { recursive: true }); fs.readdirSync(src).forEach(function (f) { copyRec(path.join(src, f), path.join(dst, f)); }); }
  else { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(src, dst); }
}
function read(p) { return fs.readFileSync(p, "utf8"); }
function write(p, c) { fs.writeFileSync(p, c); }

rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });

// 1) paginas (renomeadas pra URL limpa)
var PAGES = [
  ["proposta-index.html", "index.html"],
  ["IS7 Proposta Guincho.html", "guincho.html"],
  ["IS7 Proposta Chaveiro.html", "chaveiro.html"],
  ["IS7 Proposta Assessoria.html", "assessoria.html"],
];
PAGES.forEach(function (pair) {
  var html = read(path.join(ROOT, pair[0]));
  // back-link pro site principal (outro dominio)
  html = html.replace(/href="IS7 Site\.html"/g, 'href="https://is7mkt.com.br/"');
  // links do indice pros segmentos -> URL limpa
  html = html.replace(/href="IS7 Proposta Guincho\.html"/g, 'href="/guincho"');
  html = html.replace(/href="IS7 Proposta Chaveiro\.html"/g, 'href="/chaveiro"');
  html = html.replace(/href="IS7 Proposta Assessoria\.html"/g, 'href="/assessoria"');
  write(path.join(OUT, pair[1]), html);
  console.log("[proposta] " + pair[0] + " -> " + pair[1]);
});

// 2) dependencias (pastas). site_v2 e lojas_virtuais vem de src/ (versao nova:
// SiteCore exporta StatNumber e usa icones inline, mesma logo do site principal).
var DEPS = [
  ["src/site_v2", "site_v2"],
  ["src/lojas_virtuais", "lojas_virtuais"],
  ["proposta", "proposta"],
  ["assets", "assets"],
];
DEPS.forEach(function (pair) {
  var from = path.join(ROOT, pair[0]);
  if (fs.existsSync(from)) { copyRec(from, path.join(OUT, pair[1])); console.log("[proposta] copiado: " + pair[1] + "/"); }
});

// PropostaApp.jsx tambem tem back-link pro site principal
var appPath = path.join(OUT, "proposta", "PropostaApp.jsx");
if (fs.existsSync(appPath)) {
  write(appPath, read(appPath).replace(/"IS7 Site\.html"/g, '"https://is7mkt.com.br/"').replace(/href="IS7 Site\.html"/g, 'href="https://is7mkt.com.br/"'));
}

// 3) .htaccess (URLs limpas + https) — reaproveita o do site principal
var ht = path.join(ROOT, ".htaccess");
if (fs.existsSync(ht)) { copyRec(ht, path.join(OUT, ".htaccess")); console.log("[proposta] copiado: .htaccess"); }

console.log("[proposta] concluido em dist-proposta/");
