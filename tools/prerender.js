#!/usr/bin/env node
/*
 * prerender.js — pre-renderiza as paginas do dist/ com um navegador headless.
 * --------------------------------------------------------------------------
 * O site e montado pelo React no navegador (a pagina "se desenha" depois do JS),
 * o que o PageSpeed penaliza no mobile. Este script abre cada pagina num
 * Chromium headless, deixa o React montar, rola pra disparar as animacoes e os
 * contadores, e grava o HTML JA MONTADO de volta no arquivo. Assim o conteudo
 * aparece no primeiro paint (FCP/LCP rapidos). O JS continua junto, entao a
 * interatividade (tema, FAQ, lightbox, etc.) segue funcionando.
 *
 * Rodar depois do build:  node tools/build.js && node tools/prerender.js
 */
"use strict";
var http = require("http");
var fs = require("fs");
var path = require("path");
var puppeteer = require("puppeteer");

var DIST = path.join(__dirname, "..", "dist");
var PORT = 4173;

var MIME = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".xml": "application/xml",
};

function serve() {
  return http.createServer(function (req, res) {
    var url = decodeURIComponent(req.url.split("?")[0]);
    if (url === "/") url = "/index.html";
    if (url === "/portfolio") url = "/portfolio.html";
    var file = path.join(DIST, url);
    if (!file.startsWith(DIST) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404); res.end("404"); return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
}

async function prerenderPage(browser, route, outFile) {
  var page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto("http://localhost:" + PORT + route, { waitUntil: "networkidle2", timeout: 60000 });
  // espera o React montar
  await page.waitForFunction(function () {
    var r = document.getElementById("root");
    return r && r.children.length > 0;
  }, { timeout: 30000 });

  // rola a pagina toda pra disparar reveals e contadores, depois volta ao topo
  await page.evaluate(async function () {
    await new Promise(function (resolve) {
      var y = 0, step = 400;
      var t = setInterval(function () {
        window.scrollTo(0, y); y += step;
        if (y > document.body.scrollHeight) { clearInterval(t); window.scrollTo(0, 0); resolve(); }
      }, 60);
    });
  });
  await new Promise(function (r) { setTimeout(r, 1200); });

  // estado limpo pro snapshot: tudo visivel; widget Elfsight fica vazio (carrega no cliente)
  await page.evaluate(function () {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    document.querySelectorAll('[class*="elfsight-app-"]').forEach(function (el) { el.innerHTML = ""; });
    window.scrollTo(0, 0);
  });

  var html = await page.evaluate(function () { return "<!doctype html>\n" + document.documentElement.outerHTML; });
  fs.writeFileSync(path.join(DIST, outFile), html);
  console.log("[prerender] " + route + " -> dist/" + outFile + " (" + (html.length / 1024).toFixed(0) + " KB)");
  await page.close();
}

(async function () {
  var server = serve();
  await new Promise(function (r) { server.listen(PORT, r); });
  var browser;
  try {
    browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  } catch (e) {
    // Ambientes sem Chromium (ex.: build da Vercel) nao conseguem pre-renderizar.
    // O dist/ compilado pelo build.js ja funciona sem esta etapa (ela so melhora
    // FCP/LCP), entao avisa e segue em vez de derrubar o build inteiro.
    server.close();
    console.warn("[prerender] AVISO: Chromium indisponivel, etapa pulada (" + e.message.split("\n")[0] + ")");
    return;
  }
  try {
    await prerenderPage(browser, "/index.html", "index.html");
    if (fs.existsSync(path.join(DIST, "portfolio.html"))) {
      await prerenderPage(browser, "/portfolio.html", "portfolio.html");
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log("[prerender] concluido");
})().catch(function (e) { console.error(e); process.exit(1); });
