#!/usr/bin/env node
/*
 * build.js — compila a fonte editavel (src/) num site otimizado (dist/)
 * --------------------------------------------------------------------------
 * A fonte usa componentes JSX carregados via Babel no navegador (otimo pra
 * editar, mas compila no cliente => mais lento). Este build transpila os JSX
 * com Babel em Node e gera HTML autossuficiente: CSS e JS ja compilados e
 * embutidos, sem Babel no navegador. React/ReactDOM/lucide continuam via CDN.
 *
 * Resultado: edita-se em src/ (JSX legivel) e publica-se dist/ (rapido), sem
 * nunca precisar do Claude Design. Roda local (npm run build) e no CI.
 *
 * Uso: node tools/build.js
 */
"use strict";
var fs = require("fs");
var path = require("path");
var babel = require("@babel/core");

var ROOT = path.join(__dirname, "..");
var SRC = path.join(ROOT, "src");
var DIST = path.join(ROOT, "dist");

// Paginas a compilar: { template em src/, saida em dist/ }
var PAGES = [
  { in: "index.html", out: "index.html" },
];
// portfolio entra quando src/portfolio.html existir (nome limpo: /portfolio)
if (fs.existsSync(path.join(SRC, "portfolio.html"))) {
  PAGES.push({ in: "portfolio.html", out: "portfolio.html" });
}

// Recursos extras copiados pra dist (referenciados por URL no HTML).
// landing-pages.html e modelo-home.html sao paginas estaticas puras (sem JSX),
// ja otimizadas: vao para dist como estao. O modelo e noindex de proposito.
var COPY = ["assets", "robots.txt", "sitemap.xml", ".htaccess", "landing-pages.html", "modelo-home.html", "blog", "llms.txt"];

function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function copyRec(src, dst) {
  var st = fs.statSync(src);
  if (st.isDirectory()) {
    fs.mkdirSync(dst, { recursive: true });
    fs.readdirSync(src).forEach(function (f) { copyRec(path.join(src, f), path.join(dst, f)); });
  } else {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
  }
}

function transpile(code, filename) {
  return babel.transformSync(code, {
    filename: filename,
    presets: [[require("@babel/preset-react"), { runtime: "classic" }]],
    babelrc: false,
    configFile: false,
    compact: false,
  }).code;
}

// Le um arquivo da fonte (caminho relativo a src/)
function readSrc(rel) { return fs.readFileSync(path.join(SRC, rel), "utf8"); }

function buildPage(page) {
  var html = readSrc(page.in);

  // 1) Inline do CSS (site_v2/site.css)
  html = html.replace(
    /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+\.css)["'][^>]*\/?>/gi,
    function (m, href) {
      try {
        var css = readSrc(href);
        return "<style>\n" + css + "\n</style>";
      } catch (e) { return m; } // CSS externo (fonts) fica como esta
    }
  );

  // 2) Processa cada <script ...>...</script>
  html = html.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    function (full, attrs, inner) {
      var srcM = attrs.match(/\bsrc=["']([^"']+)["']/i);
      var src = srcM ? srcM[1] : null;
      var isBabel = /type=["']text\/babel["']/i.test(attrs);

      // CDN (http/https): remove Babel; React/ReactDOM viram copia local em
      // /vendor (menos uma origem de terceiros = FCP/LCP melhores e sem SPOF).
      if (src && /^https?:\/\//i.test(src)) {
        if (/babel/i.test(src)) return ""; // nao precisa mais
        if (/react-dom/i.test(src)) return '<script src="vendor/react-dom.production.min.js"></script>';
        if (/react/i.test(src)) return '<script src="vendor/react.production.min.js"></script>';
        return full;
      }

      // tweaks-panel: ferramenta de dev, fora do build
      if (src && /tweaks-panel/i.test(src)) return "";

      // Script local com src (JSX ou JS comum): inline do conteudo.
      // Os componentes JSX declaram const no topo lendo de window.IS7v2; quando
      // viram <script> normal esses const colidiriam no escopo global. Por isso
      // os scripts JSX/babel sao isolados num IIFE (eles se comunicam via
      // window.IS7v2). JS comum (cases.js, image-slot.js) fica como esta, pois
      // ja foi escrito pra escopo global.
      if (src) {
        var isJsx = isBabel || /\.jsx$/i.test(src);
        var code = isJsx ? transpile(readSrc(src), src) : readSrc(src);
        return "<script>\n" + (isJsx ? "(function(){\n" + code + "\n})();" : code) + "\n</script>";
      }

      // Script inline
      if (isBabel) {
        return "<script>\n(function(){\n" + transpile(inner, page.in + "#inline") + "\n})();\n</script>";
      }
      return full; // inline comum (ex.: anti-flash do tema) fica
    }
  );

  fs.mkdirSync(DIST, { recursive: true });
  fs.writeFileSync(path.join(DIST, page.out), html);
  console.log("[build] " + page.in + " -> dist/" + page.out + " (" + (html.length / 1024).toFixed(0) + " KB)");
}

// --- run ---
rmrf(DIST);
fs.mkdirSync(DIST, { recursive: true });
PAGES.forEach(buildPage);
COPY.forEach(function (rel) {
  var from = path.join(ROOT, rel);
  if (fs.existsSync(from)) { copyRec(from, path.join(DIST, rel)); console.log("[build] copiado: " + rel); }
});

// React auto-hospedado: copia os UMD de node_modules pra dist/vendor
var VENDOR = [
  ["node_modules/react/umd/react.production.min.js", "vendor/react.production.min.js"],
  ["node_modules/react-dom/umd/react-dom.production.min.js", "vendor/react-dom.production.min.js"],
];
VENDOR.forEach(function (pair) {
  var from = path.join(ROOT, pair[0]);
  if (fs.existsSync(from)) { copyRec(from, path.join(DIST, pair[1])); console.log("[build] vendor: " + pair[1]); }
  else console.warn("[build] AVISO: " + pair[0] + " nao encontrado (rode npm ci)");
});

// Pre-render commitado: a Vercel nao tem Chromium, entao o snapshot e gerado
// localmente (npm run prerender:save) e commitado em prerendered/. No build da
// Vercel (env VERCEL=1) ele substitui o HTML compilado: conteudo no primeiro
// paint (FCP/LCP) sem depender de navegador no CI.
// Para atualizar apos mudar src/: npm run build && npm run prerender:save
if (process.env.VERCEL) {
  var PRE = path.join(ROOT, "prerendered");
  if (fs.existsSync(PRE)) {
    fs.readdirSync(PRE).forEach(function (f) {
      if (f.endsWith(".html")) { fs.copyFileSync(path.join(PRE, f), path.join(DIST, f)); console.log("[build] prerendered aplicado: " + f); }
    });
  }
}
console.log("[build] concluido em dist/");
