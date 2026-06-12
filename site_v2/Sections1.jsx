(function () {
  "use strict";
  var _v = window.IS7v2;

  // ── Stats ────────────────────────────────────────────────────────────────
  var STATS = [
    { icon: "megaphone",     value: 500, prefix: "R$", suffix: "mil+", label: "Gerenciados em tráfego pago" },
    { icon: "calendar-days", value: 6,   suffix: "+",                  label: "Anos de experiência em marketing digital" },
    { icon: "package",       value: 80,  prefix: "+",                  label: "Projetos entregues em todo o Brasil" },
    { icon: "gauge",         value: 95,  prefix: "+",                  label: "Nota média de desempenho dos sites" },
  ];

  const StatCard = function StatCard({ s }) {
    var { useCountUp } = _v;
    var ref = React.useRef(null);
    var [active, setActive] = React.useState(false);
    React.useEffect(function () {
      var el = ref.current;
      if (!el) return;
      var obs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { setActive(true); obs.disconnect(); }
      }, { threshold: 0.3 });
      obs.observe(el);
      return function () { obs.disconnect(); };
    }, []);
    var count = useCountUp(s.value, 1600, active);
    return (
      <div ref={ref} className="card" style={{ padding: "20px 18px", textAlign: "center" }}>
        <p className="stat-num" style={{ marginBottom: 6 }}>
          {s.prefix || ""}{count}{s.suffix || ""}
        </p>
        <p className="muted" style={{ margin: 0, fontSize: 13, lineHeight: 1.4 }}>{s.label}</p>
      </div>
    );
  };

  const Stats = function Stats() {
    var { Reveal, Eyebrow } = _v;
    return (
      <section className="section-tight" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
            <Eyebrow center>Em números</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>Experiência que dá segurança</h2>
          </Reveal>
          <div className="grid-stats">
            {STATS.map(function (s, i) { return <StatCard key={i} s={s} />; })}
          </div>
        </div>
      </section>
    );
  };

  // ── Services ─────────────────────────────────────────────────────────────
  var SERVICES = [
    {
      icon: "search", num: "01",
      title: "Posicionamento no Google",
      text: "Sua empresa nas primeiras posições quando alguém procura pelo seu serviço. Google Meu Negócio otimizado e presença orgânica que dura.",
      tags: ["Google Meu Negócio", "SEO local", "Avaliações 5 estrelas"],
    },
    {
      icon: "monitor", num: "02",
      title: "Sites profissionais",
      text: "Sites rápidos, bonitos e feitos para converter visita em cliente. Sua marca com a cara que ela merece, no computador e no celular.",
      tags: ["Design sob medida", "Otimizado para celular", "Nota +90 de desempenho"],
    },
    {
      icon: "shopping-bag", num: "03",
      title: "Lojas virtuais",
      text: "Vitrine profissional com pedido direto no WhatsApp. Sua marca pronta para vender online, sem mensalidade de plataforma.",
      tags: ["Catálogo completo", "Pedido no WhatsApp", "Identidade própria"],
    },
    {
      icon: "trending-up", num: "04",
      title: "Tráfego pago",
      text: "Campanhas de Google Ads que trazem clientes qualificados todos os dias. Cada real investido trabalhando para o seu negócio.",
      tags: ["Google Ads", "Públicos certos", "Relatórios claros"],
    },
  ];

  const Services = function Services() {
    var { Icon, Eyebrow, Reveal, wa } = _v;
    return (
      <section id="servicos" className="section">
        <div className="wrap">
          <Reveal style={{ marginBottom: 48 }}>
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12, maxWidth: 560 }}>Uma assessoria completa para o seu negócio <span className="grad-text">crescer online.</span></h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: 560 }}>
              Do primeiro clique no Google até a venda fechada, cuidamos de toda a sua presença digital com estratégia, suporte e resultado.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {SERVICES.map(function (s, i) {
              return (
                <Reveal key={i} delay={i * 60} className="card card-hover" style={{ padding: 28, position: "relative" }}>
                  <span style={{
                    position: "absolute", top: 18, right: 20,
                    fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-dim)", letterSpacing: ".06em",
                  }}>{s.num}</span>
                  <div className="chip" style={{ marginBottom: 18, width: 44, height: 44 }}>
                    <Icon name={s.icon} size={20} color="var(--accent-bright)" />
                  </div>
                  <h3 className="h3" style={{ marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.65, margin: "0 0 18px" }}>{s.text}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
                    {s.tags.map(function (tag, ti) {
                      return (
                        <span key={ti} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--fg-muted)" }}>
                          <span style={{ color: "var(--accent-bright)", fontSize: 11 }}>✓</span> {tag}
                        </span>
                      );
                    })}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href={wa("Olá, vim pelo site da IS7 e quero descobrir o ideal para meu negócio!")}
              target="_blank" rel="noreferrer"
              className="btn btn-primary"
            >
              Descobrir o ideal para mim <Icon name="arrow-right" size={17} />
            </a>
          </Reveal>
        </div>
        <style>{`@media(max-width:640px){ #servicos .grid-2col{ grid-template-columns:1fr !important; } }`}</style>
      </section>
    );
  };

  // ── BeforeAfter ───────────────────────────────────────────────────────────
  const BeforeAfter = function BeforeAfter() {
    var { Icon, Eyebrow, Reveal } = _v;
    var before = [
      "Invisível no Google",
      "Sem site profissional",
      "Perdendo clientes para a concorrência",
      "Sem como medir resultados",
    ];
    var after = [
      "Aparece no topo do Google",
      "Site profissional e responsivo",
      "Recebendo contatos pelo WhatsApp",
      "Dashboard com métricas reais",
    ];
    return (
      <section className="section-tight" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow center>Transformação</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>A diferença que a IS7 faz</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Before */}
            <Reveal delay={0} className="card" style={{ padding: 32 }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(248,113,113,.85)", marginBottom: 20 }}>Antes</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {before.map(function (item, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: 9999, background: "rgba(248,113,113,.12)",
                        border: "1px solid rgba(248,113,113,.25)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <Icon name="minus" size={12} color="rgba(248,113,113,.8)" />
                      </span>
                      <span style={{ fontSize: 15, color: "var(--fg-muted)" }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
            {/* After */}
            <Reveal delay={80} className="card" style={{ padding: 32, border: "1px solid rgba(145,69,230,.25)" }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-bright)", marginBottom: 20 }}>Com a IS7</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {after.map(function (item, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: 9999, background: "rgba(145,69,230,.15)",
                        border: "1px solid rgba(145,69,230,.3)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <Icon name="check" size={12} color="var(--accent-bright)" />
                      </span>
                      <span style={{ fontSize: 15, color: "var(--fg)" }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:620px){#before-after-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    );
  };

  // ── Deliverables ─────────────────────────────────────────────────────────
  var DELIVERABLES = [
    "Design responsivo (mobile + desktop)",
    "SEO on-page básico (meta tags, Google)",
    "Integração com WhatsApp",
    "Google Analytics instalado",
    "SSL (https) incluso",
    "Velocidade 90+ no PageSpeed",
    "Formulário de contato",
    "Domínio + hospedagem por 1 ano",
  ];

  const Deliverables = function Deliverables() {
    var { Icon, Eyebrow, Reveal, wa } = _v;
    return (
      <section className="section">
        <div className="wrap">
          <div className="grid-2">
            <Reveal>
              <Eyebrow>O que está incluso</Eyebrow>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 16 }}>
                Tudo o que seu site precisa
              </h2>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.65, marginBottom: 36 }}>
                Do design ao domínio, cada detalhe técnico já está coberto.
                Você foca no negócio — a IS7 cuida do digital.
              </p>
              <a
                href={wa("Olá, vim pelo site da IS7 e quero saber o que está incluso no site!")}
                target="_blank" rel="noreferrer"
                className="btn btn-primary"
              >
                Ver planos e preços <Icon name="arrow-right" size={17} />
              </a>
            </Reveal>
            <Reveal delay={60}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {DELIVERABLES.map(function (d, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: 9999, background: "rgba(145,69,230,.18)",
                        border: "1px solid rgba(145,69,230,.30)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                      }}>
                        <Icon name="check" size={12} color="var(--accent-bright)" />
                      </span>
                      <span style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.5 }}>{d}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:620px){.deliv-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    );
  };

  Object.assign(window.IS7v2, { Stats, Services, BeforeAfter, Deliverables });
})();
