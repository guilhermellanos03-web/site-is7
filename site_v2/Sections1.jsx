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
    var { Icon, Eyebrow, Reveal, wa } = _v;
    var before = [
      "Invisível no Google: seu concorrente aparece, você não",
      "Site desatualizado ou sem site, passando imagem de empresa largada",
      "Sem saber de onde vêm (ou não vêm) os clientes",
      "Dinheiro em impulsionar post que não converte",
      "Atendendo qualquer cliente por falta de posicionamento",
    ];
    var after = [
      "Aparecer na primeira página quando alguém procura pelo seu serviço",
      "Site rápido que converte visita em contato e contato em cliente",
      "Relatórios claros mostrando exatamente o que deu retorno",
      "Tráfego qualificado que traz quem realmente quer comprar",
      "Posicionamento forte que atrai o cliente certo para o seu negócio",
    ];
    return (
      <section className="section-tight" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow center>A diferença na prática</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>
              Sem IS7 × <span className="grad-text">Com IS7</span>
            </h2>
          </Reveal>

          <div className="ba-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Sem IS7 */}
            <Reveal delay={0} className="card" style={{ padding: 28, background: "rgba(220,38,38,.04)", border: "1px solid rgba(220,38,38,.15)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{
                  width: 30, height: 30, borderRadius: 9999,
                  background: "rgba(220,38,38,.12)", border: "1px solid rgba(220,38,38,.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon name="x" size={14} color="rgba(220,38,38,.9)" />
                </span>
                <span style={{ fontWeight: 700, fontSize: 15, color: "rgba(220,38,38,.9)" }}>Sem IS7</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {before.map(function (item, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: "rgba(220,38,38,.8)", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✕</span>
                      <span style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.55 }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Com IS7 */}
            <Reveal delay={80} className="card" style={{ padding: 28, background: "rgba(145,69,230,.05)", border: "1px solid rgba(145,69,230,.25)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{
                  width: 30, height: 30, borderRadius: 9999,
                  background: "rgba(145,69,230,.18)", border: "1px solid rgba(145,69,230,.35)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon name="check" size={14} color="var(--accent-bright)" />
                </span>
                <span style={{ fontWeight: 700, fontSize: 15, color: "var(--accent-bright)" }}>Com IS7</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {after.map(function (item, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: "var(--accent-bright)", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 14, color: "var(--fg)", lineHeight: 1.55 }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href={wa("Olá, vim pelo site da IS7 e quero isso para minha empresa!")}
              target="_blank" rel="noreferrer"
              className="btn btn-primary"
            >
              Quero isso para minha empresa <Icon name="arrow-right" size={17} />
            </a>
          </Reveal>
        </div>
        <style>{`@media(max-width:640px){
          .ba-grid{ grid-template-columns:1fr !important; }
        }`}</style>
      </section>
    );
  };

  // ── Deliverables ─────────────────────────────────────────────────────────
  var DELIVERABLES = [
    { icon: "palette",        title: "Identidade visual",      text: "Logo, cores e tipografia para a sua marca ter uma cara profissional." },
    { icon: "monitor",        title: "Site profissional",      text: "Desenvolvido do zero, rápido, responsivo e otimizado para converter." },
    { icon: "trending-up",    title: "Tráfego pago (Ads)",     text: "Campanhas de Google Ads gerenciadas com foco em retorno real." },
    { icon: "shopping-bag",   title: "Loja virtual",           text: "Vitrine completa com catálogo, identidade própria e pedido no WhatsApp." },
    { icon: "headphones",     title: "Suporte nas vendas",     text: "Acompanhamento ativo das vendas, ajustamos estratégias para crescimento constante." },
    { icon: "users",     title: "Reuniões estratégicas",  text: "Sessões regulares para alinhar ações, revisar resultados e planejar próximos passos." },
    { icon: "file-text", title: "Relatórios mensais",     text: "Dados claros sobre visitas, cliques e resultados todo mês." },
    { icon: "whatsapp",  title: "Suporte via WhatsApp",   text: "Atendimento próximo e rápido, sem burocracia." },
  ];

  const Deliverables = function Deliverables() {
    var { Icon, Eyebrow, Reveal, wa } = _v;
    return (
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow center>O que você recebe</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>
              Tudo que sua empresa precisa para <span className="grad-text">crescer online.</span>
            </h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: 520, margin: "16px auto 0" }}>
              Não vendemos pacote fechado. Montamos a combinação certa para o momento da sua empresa.
            </p>
          </Reveal>

          <div className="deliv-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {DELIVERABLES.map(function (d, i) {
              return (
                <Reveal key={i} delay={i * 50} className="card" style={{ padding: 24 }}>
                  <div className="chip" style={{ marginBottom: 16, width: 40, height: 40 }}>
                    {d.icon === "whatsapp" ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    ) : (
                      <Icon name={d.icon} size={18} color="var(--accent-bright)" />
                    )}
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700 }}>{d.title}</h3>
                  <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.6 }}>{d.text}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href={wa("Olá, vim pelo site da IS7 e quero montar meu plano personalizado!")}
              target="_blank" rel="noreferrer"
              className="btn btn-primary"
            >
              Montar meu plano personalizado <Icon name="arrow-right" size={17} />
            </a>
          </Reveal>
        </div>
        <style>{`@media(max-width:768px){ .deliv-grid{ grid-template-columns:repeat(2,1fr) !important; } }`}</style>
      </section>
    );
  };

  Object.assign(window.IS7v2, { Stats, Services, BeforeAfter, Deliverables });
})();
