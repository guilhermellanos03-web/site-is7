#!/usr/bin/env node
/*
 * patch-mobile.js
 * --------------------------------------------------------------------------
 * O export "Standalone HTML" do Claude Design empacota o site num bundle: o
 * documento real fica num <script type="__bundler/template"> (string JSON,
 * slash de fechamento como /) e os estilos dos componentes sao aplicados
 * inline via JS (ex.: #topo recebe min-height:92vh inline). No mobile isso
 * gera varios problemas. Como o CSS dos componentes esta comprimido no bundle,
 * nao da pra editar a fonte: injetamos <style> com !important, que vence ate
 * estilo inline.
 *
 * Sao DUAS injecoes:
 *   1) no <head> do TEMPLATE (antes de /head) -> aplica no site renderizado
 *      Corrige: overflow horizontal (zoom-out), vao do hero, colunas tortas
 *      dos numeros (grid-stats) e limita o Instagram a 3 posts no mobile.
 *   2) no <head> EXTERNO (antes de </head> cru) -> aplica na tela de loading
 *      Corrige: o logo "iS7" que aparecia esticado/pixelado em tela cheia
 *      enquanto o bundle de ~4MB descompacta.
 *
 * Idempotente (so injeta se ainda nao houver). Roda local e no GitHub Actions,
 * entao QUALQUER novo export do Claude Design e corrigido no deploy.
 *
 * Uso: node tools/patch-mobile.js [caminho-do-html]
 */
"use strict";
var fs = require("fs");
var path = require("path");

var file = process.argv[2] || path.join(__dirname, "..", "index.html");

// 1) CSS aplicado no site renderizado (template head). Escopo @media: nao toca desktop.
var siteCss = [
  "@media(max-width:768px){",
  "html,body{overflow-x:clip!important;max-width:100%!important}",                       // mata overflow / zoom-out
  "#topo{min-height:auto!important;padding-top:96px!important;padding-bottom:56px!important}", // tira o vao do hero
  ".grid-stats{grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important}",            // colunas dos numeros iguais (minmax evita coluna esticada por palavra larga)
  ".ig-grid>*:nth-child(n+4){display:none!important}",                                   // Instagram: so 3 posts no mobile
  "}",
].join("");
var siteStyle = '<style id="is7-mobile-fix">' + siteCss + "</style>";

// 2) CSS aplicado na tela de loading (head externo).
var loadCss = [
  "#__bundler_thumbnail{background:#070A14!important}",
  "#__bundler_thumbnail svg{width:96px!important;height:96px!important;object-fit:contain!important}",
  "#__bundler_loading{display:none!important}",
].join("");
var loadStyle = '<style id="is7-loading-fix">' + loadCss + "</style>";

var html = fs.readFileSync(file, "utf8");

if (html.indexOf("is7-mobile-fix") !== -1) {
  console.log("[patch-mobile] ja aplicado, nada a fazer: " + file);
  process.exit(0);
}

// --- Injecao 1: no head do template (slash escapado como /) ---
var tplMarker = "<\\u002Fhead>";
if (html.indexOf(tplMarker) === -1) {
  console.error("[patch-mobile] head do template nao encontrado em " + file + " (export inesperado?)");
  process.exit(1);
}
// encode para caber dentro da string JSON do template (escapa as aspas do atributo)
var encSite = JSON.stringify(siteStyle);
encSite = encSite.slice(1, encSite.length - 1);
html = html.replace(tplMarker, encSite + tplMarker);

// --- Injecao 2: no head externo (</head> cru, unico no arquivo) ---
var outerMarker = "</head>";
if (html.indexOf(outerMarker) !== -1) {
  html = html.replace(outerMarker, loadStyle + outerMarker);
} else {
  console.warn("[patch-mobile] head externo nao encontrado (loading nao ajustado)");
}

fs.writeFileSync(file, html);
console.log("[patch-mobile] correcoes mobile + loading injetadas em " + file);
