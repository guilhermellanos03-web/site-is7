#!/usr/bin/env node
/*
 * print-portfolio.js — captura o print de pagina inteira dos sites do portfolio.
 * --------------------------------------------------------------------------
 * Abre cada site num Chromium headless, rola ate o fim (pra disparar o que
 * carrega no scroll: imagem lazy, animacao de entrada, contador), tira o print
 * da pagina INTEIRA e salva em webp otimizado dentro de assets/portfolio/.
 *
 * Por que existe: os prints do portfolio precisam ser da pagina toda, com
 * largura igual entre si. Feito na mao, cada um sai de um tamanho — foi assim
 * que Curadoria (909x540) e Nutri (1600x761) entraram capturando so a primeira
 * dobra, enquanto os outros pegavam o site completo.
 *
 * Uso:
 *   node tools/print-portfolio.js dominio.com.br [outro.com.br ...]
 *   node tools/print-portfolio.js --todos      (le os dominios do cases.js)
 *
 * O nome do arquivo sai do dominio: tribbostreet.com.br -> tribbostreet.webp
 */
"use strict";
var fs = require("fs");
var path = require("path");
var puppeteer = require("puppeteer");
var sharp = require("sharp");

var ROOT = path.join(__dirname, "..");
var SAIDA = path.join(ROOT, "assets", "portfolio");

var LARGURA = 1600;      // mesma largura dos prints que ja estao bons
var ALTURA_MAX = 9000;   // trava pra site infinito nao gerar arquivo gigante

// Aceita tanto "cliente.com.br" quanto "https://cliente.vercel.app/".
// Sem isso a URL completa virava nome de arquivo tipo "https---cliente".
function host(entrada) {
  try { return new URL(/^https?:\/\//.test(entrada) ? entrada : "https://" + entrada).hostname; }
  catch (e) { return String(entrada); }
}

function slug(entrada) {
  var h = host(entrada).replace(/^www\./, "");
  // vercel.app: o nome util e o subdominio (mk-vinhos.vercel.app -> mk-vinhos)
  var partes = h.split(".");
  var base = h.endsWith(".vercel.app") ? partes[0] : partes[0];
  return base.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
}

function dominiosDoCases() {
  var txt = fs.readFileSync(path.join(ROOT, "src", "site_v2", "cases.js"), "utf8");
  var out = [], m, re = /domain:\s*"([^"]+)"/g;
  while ((m = re.exec(txt))) out.push(m[1]);
  return out;
}

async function capturar(browser, dominio) {
  var url = /^https?:\/\//.test(dominio) ? dominio : "https://" + dominio;
  var page = await browser.newPage();
  await page.setViewport({ width: LARGURA, height: 1000, deviceScaleFactor: 1 });
  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 45000 });
  } catch (e) {
    await page.close();
    return { dominio: dominio, erro: e.message.split("\n")[0] };
  }

  // rola ate o fim pra acordar lazy-load e animacao de entrada, depois volta
  await page.evaluate(async function () {
    await new Promise(function (r) {
      var y = 0, passo = 600;
      var t = setInterval(function () {
        window.scrollTo(0, y); y += passo;
        if (y > document.body.scrollHeight) { clearInterval(t); window.scrollTo(0, 0); r(); }
      }, 80);
    });
  });
  await new Promise(function (r) { setTimeout(r, 1500); });

  var png = await page.screenshot({ fullPage: true, type: "png", captureBeyondViewport: true });
  var alturaReal = (await sharp(png).metadata()).height;
  await page.close();

  var img = sharp(png);
  if (alturaReal > ALTURA_MAX) img = img.extract({ left: 0, top: 0, width: LARGURA, height: ALTURA_MAX });

  var webp = await img.webp({ quality: 84, effort: 5 }).toBuffer();
  var meta = await sharp(webp).metadata();
  var arquivo = path.join(SAIDA, slug(dominio) + ".webp");
  fs.mkdirSync(SAIDA, { recursive: true });
  fs.writeFileSync(arquivo, webp);

  return {
    dominio: dominio,
    arquivo: "assets/portfolio/" + slug(dominio) + ".webp",
    tamanho: meta.width + "x" + meta.height,
    peso: (webp.length / 1024).toFixed(0) + "KB",
    cortado: alturaReal > ALTURA_MAX,
  };
}

(async function () {
  var args = process.argv.slice(2);
  var alvos = args[0] === "--todos" ? dominiosDoCases() : args;
  if (!alvos.length) {
    console.error("Uso: node tools/print-portfolio.js <dominio> [...]  |  --todos");
    process.exit(1);
  }

  var browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  var ok = 0, falha = 0;
  try {
    for (var i = 0; i < alvos.length; i++) {
      var r = await capturar(browser, alvos[i]);
      if (r.erro) { console.log("  FALHOU  " + r.dominio + "  -> " + r.erro); falha++; }
      else { console.log("  OK      " + r.dominio + "  -> " + r.arquivo + "  " + r.tamanho + "  " + r.peso + (r.cortado ? "  (cortado em " + ALTURA_MAX + "px)" : "")); ok++; }
    }
  } finally {
    await browser.close();
  }
  console.log("\n" + ok + " capturado(s), " + falha + " falha(s).");
  if (ok) console.log("Lembre de apontar o campo img: do cases.js pros arquivos novos.");
})().catch(function (e) { console.error(e); process.exit(1); });
