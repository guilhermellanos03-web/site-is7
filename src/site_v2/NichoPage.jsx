// IS7 — pagina de portfolio por nicho (privada).
//
// Reaproveitada por src/<nicho>.html: a pagina so declara window.IS7_NICHO
// com os dados do segmento e chama <NichoPage/>. Assim cada nicho novo custa
// um arquivo de dados, nao uma pagina inteira copiada.
//
// PRIVADA de proposito (decisao do Guilherme, 27/07/2026): essas paginas sao
// enviadas por link direto pro prospect daquele ramo. Nao entram no menu, nao
// entram no sitemap e levam noindex — um cliente de odontologia nao precisa
// descobrir que a IS7 tambem e "a agencia dos guinchos".

const { Logo, Icon, Eyebrow, Reveal, wa, thumb, onErroThumb } = window.IS7v2;

const NichoPage = () => {
  const N = window.IS7_NICHO || {};
  const CASES = N.cases || [];

  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme] = React.useState(() =>
    typeof localStorage !== "undefined" ? (localStorage.getItem("is7-theme") || "dark") : "dark"
  );

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn(); window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("is7-theme", theme);
  }, [theme]);

  const { useLightbox, PortfolioLightbox } = window.IS7v2;
  const [active, setActive] = useLightbox();

  const msgPadrao = N.waMsg || `Olá! Vi o portfólio da IS7 para ${N.label} e quero um site assim.`;

  return (
    <React.Fragment>
      <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap hdr-row">
          <a href="/" aria-label="IS7"><Logo size={26} /></a>
          <nav className="nav">
            <a href="/">Início</a>
            <a href="/#servicos">Serviços</a>
            <a href="/#contato">Contato</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button className="theme-toggle" aria-label="Alternar tema"
              onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}>
              <Icon name={theme === "dark" ? "sun" : "moon"} size={17} />
            </button>
            <a href={wa(msgPadrao)} target="_blank" rel="noreferrer" className="btn btn-primary"
               style={{ padding: "12px 24px", fontSize: 14 }}>
              Fale conosco
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="nicho-hero">
        <div className="glow glow-purple" style={{ width: 500, height: 500, top: -200, left: "50%", transform: "translateX(-50%)", animation: "glow-morph 12s ease-in-out infinite" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <Reveal><Eyebrow center>{N.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h1 className="display" style={{ maxWidth: 760, margin: "18px auto 0" }}
                dangerouslySetInnerHTML={{ __html: N.h1 || "" }} />
          </Reveal>
          <Reveal delay={120}>
            <p className="lead" style={{ maxWidth: 620, margin: "20px auto 0" }}>{N.lead}</p>
          </Reveal>
          {N.provas && (
            <Reveal delay={180}>
              <div className="nicho-provas">
                {N.provas.map((p, i) => (
                  <span key={i}><strong>{p.n}</strong> {p.l}</span>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Grid */}
      <section style={{ paddingBottom: 72 }}>
        <div className="wrap">
          <div className="nicho-grid">
            {CASES.map((c, i) => (
              <Reveal key={c.name} delay={(i % 2) * 80} as="article" className="nicho-card"
                      onClick={() => setActive({ ...c, waMsg: c.waMsg || msgPadrao })}>
                <div className="nicho-bar">
                  <div className="nicho-dots">
                    <span style={{ background: "#FF5F57" }} />
                    <span style={{ background: "#FFBD2E" }} />
                    <span style={{ background: "#28CA42" }} />
                  </div>
                  <div className="nicho-url">{c.domain || c.name}</div>
                </div>
                <div className="nicho-thumb">
                  <img src={thumb(c.img)} onError={onErroThumb} alt={`Site desenvolvido para ${c.name}`} loading="lazy" className="nicho-img" />
                  <div className="nicho-hint">
                    <span style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--grad)", padding: "10px 18px", borderRadius: 9999, fontSize: 13.5, fontWeight: 600, color: "#fff" }}>
                      <Icon name="monitor" size={16} /> Ver projeto
                    </span>
                  </div>
                </div>
                <div className="nicho-body">
                  <div className="nicho-head">
                    <div>
                      <h2 className="nicho-name">{c.name}</h2>
                      <p className="nicho-meta">{c.meta}</p>
                    </div>
                    <span className="tag tag-accent" style={{ fontSize: 10, flexShrink: 0 }}>{c.tag}</span>
                  </div>
                  <p className="nicho-summary">{c.summary}</p>
                  <ul className="nicho-lista">
                    {(c.delivered || []).slice(0, 4).map((d, j) => (
                      <li key={j}><Icon name="check" size={13} color="var(--accent-bright)" strokeWidth={2.6} /><span>{d}</span></li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* O que todo site do segmento leva */}
      {N.entregaveis && (
        <section className="nicho-entrega">
          <div className="wrap">
            <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
              <Eyebrow center>O que todo projeto leva</Eyebrow>
              <h2 className="h2" style={{ marginTop: 14 }} dangerouslySetInnerHTML={{ __html: N.entregaveisTitulo || "" }} />
            </Reveal>
            <div className="nicho-entrega-grid">
              {N.entregaveis.map((e, i) => (
                <Reveal key={i} delay={(i % 3) * 70} className="card" style={{ padding: 24 }}>
                  <span className="chip" style={{ width: 42, height: 42, borderRadius: 12 }}>
                    <Icon name={e.icon} size={20} color="var(--accent-bright)" />
                  </span>
                  <h3 style={{ fontSize: 16.5, fontWeight: 700, margin: "14px 0 6px" }}>{e.t}</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--fg-muted)" }}>{e.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="nicho-cta">
        <div className="glow glow-blue" style={{ width: 400, height: 400, top: -120, left: "50%", transform: "translateX(-50%)", opacity: .35 }} />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <Eyebrow center>{N.ctaEyebrow || "Quer um assim?"}</Eyebrow>
            <h2 className="h2" style={{ marginTop: 16 }} dangerouslySetInnerHTML={{ __html: N.ctaTitulo || "" }} />
            <p className="lead" style={{ maxWidth: 520, margin: "18px auto 0" }}>{N.ctaLead}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 30 }}>
              <a href={wa(msgPadrao)} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                {N.ctaBotao || "Quero meu diagnóstico"} <Icon name="arrow-right" size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "28px 0", textAlign: "center" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "space-between", alignItems: "center" }}>
          <Logo size={22} />
          <p style={{ margin: 0, fontSize: 12, color: "var(--fg-dim)" }}>© 2026 IS7 · Todos os direitos reservados</p>
        </div>
      </footer>

      {active && <PortfolioLightbox c={active} onClose={() => setActive(null)} />}

      <a className="fab" href={wa(msgPadrao)} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" style={{ width: 30, height: 30, fill: "#04210F" }}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z"/></svg>
      </a>
    </React.Fragment>
  );
};

window.IS7v2 = Object.assign(window.IS7v2, { NichoPage });
