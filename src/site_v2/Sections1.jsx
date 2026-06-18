const { Icon, Eyebrow, Reveal, StatNumber, wa } = window.IS7v2;

const STATS = [
  { prefix: "R$ ", value: 500, suffix: " mil+", label: "Investidos em Google Ads" },
  { prefix: "",    value: 6,   suffix: "+",      label: "Anos de experiência" },
  { prefix: "+",   value: 80,  suffix: "",       label: "Projetos entregues" },
  { prefix: "+",   value: 95,  suffix: "",       label: "Nota média dos sites" },
];

const Stats = () => (
  <section className="section-tight" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
    <div className="wrap">
      <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
        <Eyebrow center>Em números</Eyebrow>
        <h2 className="h2" style={{ marginTop: 14 }}>Experiência que dá segurança</h2>
      </Reveal>
      <div className="grid-stats">
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 90} className="card" style={{ padding: "30px 18px", textAlign: "center" }}>
            <StatNumber prefix={s.prefix} value={s.value} suffix={s.suffix} size={34} />
            <p style={{ margin: "12px 0 0", fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.5 }}>{s.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const SERVICES = [
  { n: "01", icon: "search",       title: "Posicionamento no Google", desc: "Sua empresa nas primeiras posições quando alguém procura pelo seu serviço. Perfil da Empresa no Google otimizado e presença orgânica que dura.", bullets: ["Perfil da Empresa no Google", "SEO local", "Avaliações 5 estrelas"] },
  { n: "02", icon: "monitor",      title: "Sites profissionais", desc: "Sites rápidos, bonitos e otimizados para SEO, feitos para aparecer no Google e converter visita em cliente. No computador e no celular.", bullets: ["Otimizado para SEO", "Otimizado para celular", "Nota +90 de desempenho"] },
  { n: "03", icon: "shopping-bag", title: "Lojas virtuais", desc: "Vitrine profissional com pedido direto no WhatsApp. Sua marca pronta para vender online, sem mensalidade de plataforma.", bullets: ["Catálogo completo", "Pedido no WhatsApp", "Identidade própria"] },
  { n: "04", icon: "trending-up",  title: "Tráfego pago", desc: "Campanhas de Google Ads que trazem clientes qualificados todos os dias. Cada real investido trabalhando para o seu negócio.", bullets: ["Google Ads", "Públicos certos", "Relatórios claros"] },
];

const ServiceCard = ({ s, i }) => (
  <Reveal delay={(i % 2) * 90} className="card card-hover" style={{ padding: 30, display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden" }}>
    <span style={{ position: "absolute", top: 18, right: 22, fontFamily: "var(--mono)", fontSize: 13, color: "var(--fg-dim)", letterSpacing: ".1em" }}>{s.n}</span>
    <span className="chip"><Icon name={s.icon} size={24} color="var(--accent-bright)" strokeWidth={1.9} /></span>
    <h3 className="h3" style={{ fontWeight: 800 }}>{s.title}</h3>
    <p style={{ margin: 0, fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.6 }}>{s.desc}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 2 }}>
      {s.bullets.map((b, j) => (
        <span key={j} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "var(--fg-muted)" }}>
          <Icon name="check" size={13} color="var(--accent-bright)" strokeWidth={2.5} />{b}
        </span>
      ))}
    </div>
  </Reveal>
);

const Services = () => (
  <section id="servicos" className="section">
    <div className="glow glow-purple" style={{ width: 380, height: 380, top: 120, left: -200, opacity: .5 }} />
    <div className="wrap">
      <Reveal style={{ maxWidth: 640, marginBottom: 52 }}>
        <Eyebrow>O que fazemos</Eyebrow>
        <h2 className="h2" style={{ marginTop: 16 }}>Uma assessoria completa para o seu negócio <span className="grad-text">crescer online</span>.</h2>
        <p className="lead" style={{ marginTop: 18 }}>Do primeiro clique no Google até a venda fechada, cuidamos de toda a sua presença digital com estratégia, suporte e resultado.</p>
      </Reveal>
      <div className="grid-services">
        {SERVICES.map((s, i) => <ServiceCard key={i} s={s} i={i} />)}
      </div>
      <Reveal style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
        <a href={wa("Olá! Quero entender qual serviço é ideal para a minha empresa.")} target="_blank" rel="noreferrer" className="btn btn-primary">
          Descobrir o ideal para mim <Icon name="arrow-right" size={18} />
        </a>
      </Reveal>
    </div>
  </section>
);

window.IS7v2 = Object.assign(window.IS7v2, { Stats, Services });
