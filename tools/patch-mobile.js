#!/usr/bin/env node
/*
 * patch-mobile.js
 * --------------------------------------------------------------------------
 * O export "Standalone HTML" do Claude Design empacota o site dentro de um
 * bundle: o documento real fica em um <script type="__bundler/template"> como
 * string JSON, e os estilos dos componentes sao aplicados inline via JS
 * (ex.: #topo recebe min-height:92vh inline). No mobile isso causa:
 *   - vao gigante no hero (92vh + flex centralizado com pouco conteudo)
 *   - overflow horizontal -> a pagina "espalha" e da pra dar zoom out
 *
 * Como o CSS dos componentes esta comprimido no bundle, nao da pra editar a
 * fonte. A solucao e injetar um <style> com !important DENTRO do template,
 * logo antes do </head>. Um <style> com !important vence ate estilo inline.
 *
 * Este script e idempotente (so injeta se ainda nao existir) e roda tanto
 * localmente quanto no GitHub Actions, entao QUALQUER novo export do Claude
 * Design e corrigido automaticamente no deploy.
 *
 * Uso: node tools/patch-mobile.js [caminho-do-html]
 */
"use strict";
var fs = require("fs");
var path = require("path");

var file = process.argv[2] || path.join(__dirname, "..", "index.html");

// CSS de correcao mobile. Escopo em @media para nao tocar no desktop.
var css = [
  "@media(max-width:768px){",
  "html,body{overflow-x:clip!important;max-width:100%!important}",      // mata o overflow / zoom-out
  "#topo{min-height:auto!important;padding-top:96px!important;padding-bottom:56px!important}", // tira o vao do hero
  "}",
].join("");

var style = '<style id="is7-mobile-fix">' + css + "</style>";

var html = fs.readFileSync(file, "utf8");

if (html.indexOf("is7-mobile-fix") !== -1) {
  console.log("[patch-mobile] ja aplicado, nada a fazer: " + file);
  process.exit(0);
}

// O template escapa o </head> de fechamento como </head>.
var marker = "<\\u002Fhead>";
if (html.indexOf(marker) === -1) {
  console.error("[patch-mobile] template <head> nao encontrado em " + file + " (export inesperado?)");
  process.exit(1);
}

// JSON.stringify garante o escape correto das aspas do atributo dentro da
// string JSON do template; tiramos as aspas externas que ele adiciona.
var encoded = JSON.stringify(style);
encoded = encoded.slice(1, encoded.length - 1);

html = html.replace(marker, encoded + marker);
fs.writeFileSync(file, html);
console.log("[patch-mobile] correcao mobile injetada em " + file);
