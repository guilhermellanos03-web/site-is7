#!/usr/bin/env node
/*
 * corrige-sri.js — confere e corrige os hashes de integridade (SRI) dos
 * scripts de CDN das paginas de proposta.
 * --------------------------------------------------------------------------
 * Por que existe: as 4 paginas de proposta carregam React, ReactDOM e Babel do
 * unpkg com atributo integrity. Os hashes de react e react-dom estavam
 * ERRADOS, o navegador recusava os scripts por falha de integridade e a
 * proposta abria EM BRANCO — justo a pagina que vai pro cliente fechar
 * negocio. O Babel passava, o que dava a falsa impressao de que a pagina
 * carregava.
 *
 * O script baixa cada URL, calcula o sha384 real e corrige o que estiver
 * divergente. Rodar sempre que trocar a versao de alguma lib de CDN.
 *
 * Uso: node tools/corrige-sri.js [--conferir]
 *   --conferir: so relata, nao escreve (bom pra checar antes de publicar)
 */
"use strict";
var fs = require("fs");
var path = require("path");
var crypto = require("crypto");

var ROOT = path.join(__dirname, "..");
var SO_CONFERIR = process.argv.includes("--conferir");

var ARQUIVOS = [
  "proposta-index.html",
  "IS7 Proposta Assessoria.html",
  "IS7 Proposta Guincho.html",
  "IS7 Proposta Chaveiro.html",
];

// <script src="URL" integrity="sha384-..." ...>  (a ordem dos atributos varia)
var RE = /<script\b[^>]*\bsrc="(https:\/\/[^"]+)"[^>]*\bintegrity="(sha384-[^"]+)"[^>]*>/g;

async function sha384(url) {
  var r = await fetch(url);
  if (!r.ok) throw new Error(url + " -> HTTP " + r.status);
  var buf = Buffer.from(await r.arrayBuffer());
  return "sha384-" + crypto.createHash("sha384").update(buf).digest("base64");
}

(async function () {
  var cache = {};
  var totalErrado = 0;

  for (var nome of ARQUIVOS) {
    var full = path.join(ROOT, nome);
    if (!fs.existsSync(full)) { console.log("  (ausente) " + nome); continue; }
    var html = fs.readFileSync(full, "utf8");
    var achados = [...html.matchAll(RE)];
    if (!achados.length) { console.log("  (sem SRI) " + nome); continue; }

    console.log("\n" + nome);
    var novo = html;
    for (var m of achados) {
      var url = m[1], declarado = m[2];
      if (!cache[url]) cache[url] = await sha384(url);
      var real = cache[url];
      var curto = url.split("/").pop();
      if (declarado === real) {
        console.log("  ok      " + curto);
      } else {
        totalErrado++;
        console.log("  ERRADO  " + curto);
        console.log("          declarado: " + declarado.slice(0, 30) + "...");
        console.log("          real:      " + real.slice(0, 30) + "...");
        novo = novo.split(declarado).join(real);
      }
    }
    if (!SO_CONFERIR && novo !== html) fs.writeFileSync(full, novo);
  }

  console.log("\n" + (totalErrado
    ? totalErrado + " hash(es) divergente(s)" + (SO_CONFERIR ? " — rode sem --conferir pra corrigir" : " corrigido(s)")
    : "todos os hashes conferem"));
  if (SO_CONFERIR && totalErrado) process.exit(1);
})().catch(function (e) { console.error(e.message); process.exit(1); });
