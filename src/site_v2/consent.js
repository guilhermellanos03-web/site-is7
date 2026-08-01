/* IS7 — Google Consent Mode v2 + banner de cookies (LGPD)
 * ---------------------------------------------------------------------------
 * CONFIGURACAO: os IDs ficam nas duas constantes abaixo. Com as duas vazias,
 * nada carrega e o banner nem aparece.
 *
 * COMO FUNCIONA
 * A tag do Google carrega junto com a pagina, mas nasce com o consentimento
 * NEGADO. Nesse estado ela nao grava cookie e nao manda identificador nenhum —
 * so um ping anonimo, que o Google usa pra estimativa. Quando o visitante
 * aceita, disparamos um "consent update" e ela passa a medir normalmente.
 *
 * POR QUE ASSIM, E NAO BLOQUEANDO TUDO
 * Bloquear o carregamento inteiro tambem e valido (e ate mais rigido), mas
 * quebra a verificacao do Google: o robo dele abre o site, nao clica em
 * "Aceitar", nao acha a tag e reporta "tag nao detectada" pra sempre. O Consent
 * Mode v2 e a resposta oficial do Google pra esse conflito e mantem a exigencia
 * da LGPD de nao rastrear antes do aceite (art. 7 e 8).
 *
 * O Meta Pixel NAO tem equivalente confiavel de consent mode, entao ele
 * continua carregando so DEPOIS do aceite.
 *
 * A escolha fica em localStorage e pode ser refeita com IS7Consent.abrir().
 */
(function () {
  "use strict";

  var GA_ID = "G-HMCYNX4DFH";  // GA4 — IS7 Marketing Digital
  var PIXEL_ID = "";           // opcional: ID do Meta Pixel (so numeros)

  var CHAVE = "is7-consent";   // "aceito" | "recusado"
  if (!GA_ID && !PIXEL_ID) return;

  function ler() { try { return localStorage.getItem(CHAVE); } catch (e) { return null; } }
  function gravar(v) { try { localStorage.setItem(CHAVE, v); } catch (e) {} }

  /* ---------- gtag base ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  var jaAceitou = ler() === "aceito";

  if (GA_ID) {
    // O default TEM que vir antes do config, senao o primeiro hit sai sem a
    // flag e o Google o trata como nao-consentido de forma permanente.
    // wait_for_update segura o envio por 500ms, dando tempo do "update"
    // chegar quando a pessoa ja tinha aceitado numa visita anterior.
    gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    if (jaAceitou) liberarGoogle();

    gtag("js", new Date());
    gtag("config", GA_ID);

    // Guarda: se a tag ja estiver na pagina (ex.: alguem colou o snippet do
    // Google no HTML tambem), nao carrega de novo.
    // O gtag.js tem ~159 KB e concorre com o primeiro paint se baixar junto
    // com a pagina. Como o consentimento ja foi declarado acima (denied) e o
    // dataLayer guarda os eventos ate ele chegar, nada se perde esperando o
    // load — so o desempenho melhora. Timeout de seguranca pro caso de o
    // evento load nao disparar.
    var jaPediu = false;
    function baixarGtag() {
      if (jaPediu) return;
      jaPediu = true;
      if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
      document.head.appendChild(s);
    }
    if (document.readyState === "complete") baixarGtag();
    else window.addEventListener("load", baixarGtag, { once: true });
    setTimeout(baixarGtag, 5000);
  }

  function liberarGoogle() {
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  }

  /* ---------- clique em WhatsApp vira evento no GA4 ----------
     O site tem ~15 CTAs de WhatsApp e nenhum era medido: o GA4 so via
     pageview, entao nao dava pra saber qual pagina, secao ou botao gera
     contato. Um listener delegado cobre todos de uma vez, inclusive os que
     ainda vao ser criados. Sem consentimento o gtag ignora o envio, entao
     nao ha vazamento. */
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href*="wa.me"]');
    if (!a || typeof window.gtag !== "function") return;
    var secao = a.closest("section");
    gtag("event", "clique_whatsapp", {
      pagina: location.pathname,
      secao: (secao && (secao.id || secao.className)) || "sem-secao",
      texto: (a.innerText || a.getAttribute("aria-label") || "").trim().slice(0, 60),
    });
  }, true);

  /* ---------- Meta Pixel: so apos aceite ---------- */
  var pixelCarregado = false;
  function carregarPixel() {
    if (!PIXEL_ID || pixelCarregado) return;
    pixelCarregado = true;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }
  if (jaAceitou) carregarPixel();

  /* ---------- banner ---------- */
  var caixa = null;
  function fechar() { if (caixa) { caixa.remove(); caixa = null; } }

  function aceitar() {
    gravar("aceito"); fechar();
    if (GA_ID) liberarGoogle();
    carregarPixel();
  }
  function recusar() { gravar("recusado"); fechar(); } // segue negado, nada a fazer

  function montar() {
    if (caixa) return;
    caixa = document.createElement("div");
    caixa.className = "is7-cookie";
    caixa.setAttribute("role", "dialog");
    caixa.setAttribute("aria-live", "polite");
    caixa.setAttribute("aria-label", "Aviso de cookies");
    caixa.innerHTML =
      '<p class="is7-cookie-txt">Usamos cookies para entender como as pessoas chegam ao site e melhorar o que mostramos. ' +
      'Você escolhe — o site funciona normalmente dos dois jeitos.</p>' +
      '<div class="is7-cookie-btns">' +
        '<button type="button" class="is7-cookie-no">Recusar</button>' +
        '<button type="button" class="is7-cookie-ok">Aceitar</button>' +
      '</div>';
    caixa.querySelector(".is7-cookie-ok").addEventListener("click", aceitar);
    caixa.querySelector(".is7-cookie-no").addEventListener("click", recusar);
    document.body.appendChild(caixa);
  }

  /* ---------- estilo (usa os tokens do site) ---------- */
  var css = document.createElement("style");
  css.textContent =
    ".is7-cookie{position:fixed;left:16px;bottom:16px;z-index:9995;max-width:390px;" +
    "background:var(--surface,#0E1426);border:1px solid var(--line-2,rgba(255,255,255,.14));" +
    "border-radius:16px;padding:18px 20px;box-shadow:0 20px 50px -18px rgba(0,0,0,.75);" +
    "font-family:var(--sans,system-ui);animation:is7-cookie-in .3s ease both}" +
    "@keyframes is7-cookie-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}" +
    ".is7-cookie-txt{margin:0 0 14px;font-size:13.5px;line-height:1.6;color:var(--fg-muted,#98A1BC)}" +
    ".is7-cookie-btns{display:flex;gap:10px;justify-content:flex-end}" +
    ".is7-cookie-btns button{font-family:inherit;font-size:13.5px;font-weight:600;cursor:pointer;" +
    "padding:10px 20px;border-radius:9999px;min-height:44px;transition:filter .2s,border-color .2s}" +
    ".is7-cookie-no{background:transparent;border:1px solid var(--line-2,rgba(255,255,255,.14));color:var(--fg-muted,#98A1BC)}" +
    ".is7-cookie-no:hover{border-color:var(--accent-bright,#5B8CFF);color:var(--fg,#F4F6FB)}" +
    ".is7-cookie-ok{background:var(--grad,#3B6CFF);border:1px solid transparent;color:#fff}" +
    ".is7-cookie-ok:hover{filter:brightness(1.08)}" +
    /* no celular o FAB do WhatsApp fica embaixo a direita: o banner ocupa a
       largura toda e sobe um pouco pra nao cobrir o botao */
    "@media(max-width:600px){.is7-cookie{left:12px;right:12px;bottom:92px;max-width:none}}";
  document.head.appendChild(css);

  /* ---------- inicio ---------- */
  function iniciar() {
    var escolha = ler();
    if (escolha === "aceito" || escolha === "recusado") return; // ja decidiu
    montar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }

  // Link "Cookies" no rodape pode chamar: onclick="IS7Consent.abrir()"
  window.IS7Consent = {
    abrir: function () { try { localStorage.removeItem(CHAVE); } catch (e) {} montar(); },
    estado: ler,
  };
})();
