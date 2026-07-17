#!/usr/bin/env node
/*
 * proposta-pdf.cjs — gera um PDF leve e otimizado pra mobile a partir de uma
 * pagina de proposta ja compilada (dist-proposta/*.html).
 *
 * Por que um render dedicado (e nao "imprimir a pagina"):
 *  - As paginas usam glows com blur(110px), gridlines e backdrop-filter. No PDF
 *    isso vira camada raster gigante -> arquivo pesado e leitura travada no
 *    celular. Aqui essas decoracoes sao removidas na versao de impressao.
 *  - As fontes (Montserrat/Inter/JetBrains Mono) sao embutidas em base64 a
 *    partir de @fontsource, entao o PDF sai com a tipografia certa mesmo sem
 *    rede (o Google Fonts nao carrega em ambiente offline/CI).
 *  - Pagina unica continua (altura = conteudo): rolagem suave, sem quebra
 *    cortando card no meio nem faixas de cor partidas.
 *
 * Uso: node tools/proposta-pdf.cjs <html_de_entrada> <pdf_de_saida> [larguraPx]
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { chromium } = require("/opt/node22/lib/node_modules/playwright/index.js");

const IN = process.argv[2] || "dist-proposta/index.html";
const OUT = process.argv[3] || "/tmp/Proposta-IS7.pdf";
const WIDTH = parseInt(process.argv[4] || "860", 10);
const CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const ROOT = path.join(__dirname, "..");

// ---- Fontes embutidas (só os pesos usados) ----
const FONTS = [
  ["Montserrat", 700, "@fontsource/montserrat/files/montserrat-latin-700-normal.woff2"],
  ["Montserrat", 800, "@fontsource/montserrat/files/montserrat-latin-800-normal.woff2"],
  ["Montserrat", 900, "@fontsource/montserrat/files/montserrat-latin-900-normal.woff2"],
  ["Inter", 400, "@fontsource/inter/files/inter-latin-400-normal.woff2"],
  ["Inter", 500, "@fontsource/inter/files/inter-latin-500-normal.woff2"],
  ["Inter", 600, "@fontsource/inter/files/inter-latin-600-normal.woff2"],
  ["Inter", 700, "@fontsource/inter/files/inter-latin-700-normal.woff2"],
  ["JetBrains Mono", 400, "@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2"],
  ["JetBrains Mono", 500, "@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2"],
];
function fontFaceCss() {
  return FONTS.map(([fam, wght, rel]) => {
    const p = path.join(ROOT, "node_modules", rel);
    if (!fs.existsSync(p)) { console.warn("[pdf] fonte ausente:", rel); return ""; }
    const b64 = fs.readFileSync(p).toString("base64");
    return `@font-face{font-family:'${fam}';font-style:normal;font-weight:${wght};font-display:block;src:url(data:font/woff2;base64,${b64}) format('woff2');}`;
  }).join("\n");
}

// CSS de impressao: remove o que pesa/atrapalha e trava o estado final
const PRINT_CSS = `
  /* decoracoes pesadas fora do PDF */
  .glow,.gridlines{ display:none !important; }
  *{ backdrop-filter:none !important; -webkit-backdrop-filter:none !important; }
  *,*::before,*::after{ animation:none !important; transition:none !important; }
  .reveal{ opacity:1 !important; transform:none !important; }
  /* header sem sticky e sem hamburguer */
  .hdr{ position:static !important; background:transparent !important; border-bottom:1px solid var(--line) !important; }
  .nav-toggle{ display:none !important; }
  /* hero sem altura de viewport (elimina o vazio embaixo) */
  #hero-proposta{ min-height:auto !important; padding-top:44px !important; padding-bottom:56px !important; }
  /* nada de corte feio no meio dos blocos */
  .card,.faq-item{ break-inside:avoid; }
  /* imagens nao estouram a largura da pagina */
  img{ max-width:100% !important; height:auto !important; }
  html,body{ background:#070A14 !important; }
`;

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME });
  const page = await browser.newPage({ viewport: { width: WIDTH, height: 1200 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  const fileUrl = "file://" + path.resolve(ROOT, IN);
  await page.goto(fileUrl, { waitUntil: "load", timeout: 30000 });

  // injeta fontes + css de impressao
  await page.addStyleTag({ content: fontFaceCss() + "\n" + PRINT_CSS });

  // espera React montar
  await page.waitForFunction(() => {
    const r = document.getElementById("root");
    return r && r.children.length > 0;
  }, { timeout: 20000 });

  // rola a pagina toda pra disparar contadores/gauges, volta ao topo
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0; const step = 500;
      const t = setInterval(() => {
        window.scrollTo(0, y); y += step;
        if (y > document.body.scrollHeight) { clearInterval(t); window.scrollTo(0, 0); res(); }
      }, 55);
    });
  });
  await page.waitForTimeout(2600); // count-up + gauges terminam

  // estado final: reveals visiveis, reviews em grade (sem scroll horizontal), esconde interativos
  await page.evaluate(() => {
    document.body.classList.remove("js-anim");
    document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in"));
    // remove textos de "site interativo" que nao fazem sentido em PDF
    document.querySelectorAll("p,span,a").forEach((el) => {
      const t = (el.textContent || "").trim().toLowerCase();
      if (t === "clique em qualquer site para ver a página completa") el.style.display = "none";
    });
    // reviews: o carrossel horizontal vira grade que mostra todos os cards
    document.querySelectorAll("div").forEach((d) => {
      const st = d.getAttribute("style") || "";
      if (/overflow-x:\s*auto/i.test(st) && d.children.length > 2) {
        d.style.overflowX = "visible";
        d.style.flexWrap = "wrap";
        d.style.justifyContent = "center";
        d.style.cursor = "default";
      }
    });
    // aguarda as fontes embutidas ficarem prontas antes do PDF
    return document.fonts && document.fonts.ready;
  });
  await page.waitForTimeout(400);

  // pagina unica continua: altura = conteudo
  const height = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight));
  await page.emulateMedia({ media: "screen" });
  await page.pdf({
    path: OUT,
    width: WIDTH + "px",
    height: height + "px",
    printBackground: true,
    pageRanges: "1",
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  const kb = (fs.statSync(OUT).size / 1024).toFixed(0);
  console.log(`[pdf] ${OUT} | ${WIDTH}x${height}px | ${kb} KB | JS errors: ${errors.length ? errors.join(" | ") : "none"}`);
})();
