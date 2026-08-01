// IS7 — gera a imagem de compartilhamento (og:image) em 1200x630.
//
// POR QUE EXISTE: as paginas apontavam pra assets/is7-logo-grad.png, que e a
// logo ROXA antiga (40% dos pixels) e quadrada (813x846). Toda vez que o
// Guilherme mandava o link no WhatsApp — o canal principal dele — o prospect
// via a marca velha, cortada nas laterais pelo recorte 1.91:1 do preview.
//
// POR QUE COM PUPPETEER, E NAO COM SHARP: o texto precisa sair na Montserrat
// de verdade e no mesmo gradiente do site. Montando o card em HTML a gente
// reusa a fonte e os tokens reais, em vez de aproximar num SVG com a fonte
// que o librsvg tiver instalada.
//
//   node tools/gera-og.js
//
// Roda de novo sempre que a marca ou o slogan mudarem.

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const RAIZ = path.join(__dirname, "..");
const SAIDA = path.join(RAIZ, "assets", "is7-og.png");
const SAIDA_LOGO = path.join(RAIZ, "assets", "is7-logo-azul.png");
const SIMBOLO = path.join(RAIZ, "assets", "is7-simbolo.webp");

// 1200x630 e o formato que WhatsApp, Google, LinkedIn e Facebook recortam sem
// cortar nada. Abaixo de 300px de largura o WhatsApp mostra so a miniatura.
const L = 1200, A = 630;

const simboloBase64 = fs.readFileSync(SIMBOLO).toString("base64");

const HTML = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:${L}px;height:${A}px;background:#070A14;overflow:hidden;position:relative;
       font-family:'Inter',system-ui,sans-serif}
  /* mesmo glow do hero do site, so que fixo — aqui nao ha layout pra deslocar */
  .glow{position:absolute;border-radius:50%;filter:blur(90px)}
  .g1{width:620px;height:620px;background:rgba(59,108,255,.34);top:-190px;right:-120px}
  .g2{width:460px;height:460px;background:rgba(47,79,216,.26);bottom:-220px;left:-100px}
  .quadro{position:absolute;inset:0;padding:76px 84px;display:flex;flex-direction:column;
          justify-content:center;gap:26px;z-index:2}
  .marca{display:flex;align-items:center;gap:20px}
  .simbolo{width:74px;height:93px;flex-shrink:0;
           background:linear-gradient(118deg,#2F4FD8 0%,#3B6CFF 55%,#4A7BFF 100%);
           -webkit-mask:url(data:image/webp;base64,${simboloBase64}) no-repeat center / contain;
                   mask:url(data:image/webp;base64,${simboloBase64}) no-repeat center / contain}
  .nome{font-family:'Montserrat',sans-serif;font-weight:800;font-size:30px;color:#F4F6FB;
        letter-spacing:-.4px;line-height:1.15}
  .nome span{display:block;font-family:'Inter',sans-serif;font-weight:500;font-size:15px;
             color:#98A1BC;letter-spacing:.3px;margin-top:5px}
  /* No WhatsApp o preview chega com uns 300px de largura — 1/4 do tamanho
     real. Titulo curto em corpo grande e o que continua legivel ali; 3 linhas
     de texto menor viram borrao. */
  h1{font-family:'Montserrat',sans-serif;font-weight:800;font-size:66px;line-height:1.12;
     color:#F4F6FB;letter-spacing:-2px;max-width:930px}
  h1 b{font-weight:800;background:linear-gradient(118deg,#3B6CFF 0%,#5B8CFF 100%);
       -webkit-background-clip:text;background-clip:text;color:transparent}
  .linha{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
  .pill{font-size:16px;color:#C5CBE0;background:rgba(59,108,255,.13);
        border:1px solid rgba(91,140,255,.32);padding:9px 19px;border-radius:9999px}
  .rodape{position:absolute;left:84px;bottom:56px;display:flex;align-items:center;gap:13px;z-index:2}
  .rodape .url{font-family:'Montserrat',sans-serif;font-weight:600;font-size:19px;color:#5B8CFF}
  .rodape .sep{width:4px;height:4px;border-radius:50%;background:#3B4463}
  .rodape .zap{font-size:16px;color:#98A1BC}
  .barra{position:absolute;left:0;right:0;bottom:0;height:6px;
         background:linear-gradient(90deg,#2F4FD8 0%,#3B6CFF 55%,#4A7BFF 100%);z-index:3}
</style></head><body>
  <div class="glow g1"></div><div class="glow g2"></div>
  <div class="quadro">
    <div class="marca">
      <div class="simbolo"></div>
      <div class="nome">IS7 Marketing Digital<span>Curitiba · Paraná</span></div>
    </div>
    <h1>Sites que vendem e<br><b>presença no Google.</b></h1>
    <div class="linha">
      <span class="pill">Criação de sites</span>
      <span class="pill">Perfil da Empresa no Google</span>
      <span class="pill">Lojas virtuais</span>
    </div>
  </div>
  <div class="rodape">
    <span class="url">is7mkt.com.br</span>
    <span class="sep"></span>
    <span class="zap">(41) 98743-0349</span>
  </div>
  <div class="barra"></div>
</body></html>`;

// A LOGO e uma peca separada do banner de compartilhamento, e nao da pra usar
// uma no lugar da outra. No JSON-LD, "image" e a imagem representativa da
// pagina (banner serve), mas "logo" do publisher o Google usa nos resultados
// e no Discover esperando a marca isolada — um banner com titulo e telefone
// dentro sai ilegivel no tamanho em que ele exibe.
const LADO = 512;
const HTML_LOGO = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0}
  body{width:${LADO}px;height:${LADO}px;background:#070A14;
       display:flex;align-items:center;justify-content:center}
  .simbolo{width:232px;height:292px;
           background:linear-gradient(118deg,#2F4FD8 0%,#3B6CFF 55%,#4A7BFF 100%);
           -webkit-mask:url(data:image/webp;base64,${simboloBase64}) no-repeat center / contain;
                   mask:url(data:image/webp;base64,${simboloBase64}) no-repeat center / contain}
</style></head><body><div class="simbolo"></div></body></html>`;

(async () => {
  const navegador = await puppeteer.launch({ headless: "new" });
  const pag = await navegador.newPage();

  await pag.setViewport({ width: L, height: A, deviceScaleFactor: 1 });
  await pag.setContent(HTML, { waitUntil: "networkidle0" });
  // networkidle0 cobre o download da folha do Google Fonts, mas nao garante que
  // os glifos ja foram aplicados — sem isso o print sai na fonte de sistema.
  await pag.evaluate(() => document.fonts.ready);
  await pag.screenshot({ path: SAIDA, type: "png" });

  // "load", nao "networkidle0": esta pagina nao busca nada na rede (o simbolo
  // vai embutido como data URI), entao o idle nunca chega e o setContent
  // estoura o timeout de 30s.
  await pag.setViewport({ width: LADO, height: LADO, deviceScaleFactor: 1 });
  await pag.setContent(HTML_LOGO, { waitUntil: "load" });
  await pag.screenshot({ path: SAIDA_LOGO, type: "png" });

  await navegador.close();

  for (const [rotulo, arq] of [["og", SAIDA], ["logo", SAIDA_LOGO]]) {
    const kb = (fs.statSync(arq).size / 1024).toFixed(0);
    console.log(`[${rotulo}] ${path.relative(RAIZ, arq)} — ${kb} KB`);
  }
})();
