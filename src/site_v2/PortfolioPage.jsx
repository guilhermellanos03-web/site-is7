const { Logo, Icon, Eyebrow, Reveal, wa, WAPP, useLightbox, PortfolioLightbox } = window.IS7v2;
const ALL_CASES = window.IS7_CASES || [];

/* ---------- Browser chrome bar ---------- */
const BrowserBarFull = ({ domain }) => (
  <div style={{
    background: "var(--surface)", borderBottom: "1px solid var(--line)",
    padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, flexShrink: 0,
  }}>
    <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "block" }} />
      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", display: "block" }} />
      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA42", display: "block" }} />
    </div>
    <div style={{
      flex: 1, background: "var(--bg-2)", borderRadius: 6,
      padding: "4px 10px", fontSize: 10, color: "var(--fg-dim)",
      fontFamily: "'JetBrains Mono','Fira Code',monospace",
      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
    }}>
      {domain || "is7mkt.com.br"}
    </div>
  </div>
);

/* ---------- Portfolio Card (full) ---------- */
const CaseCardFull = ({ c, i, onOpen }) => (
  <Reveal delay={(i % 3) * 80} className="card card-hover"
    style={{ overflow: "hidden", display: "flex", flexDirection: "column", padding: 0, cursor: "pointer" }}
    onClick={() => onOpen && onOpen(c)}>

    {/* Browser chrome */}
    <BrowserBarFull domain={c.domain} />

    {/* Screenshot */}
    <div style={{ height: 230, overflow: "hidden", position: "relative", background: c.grad || "var(--surface-2)", flexShrink: 0 }}>
      {c.img ? (
        <img src={c.img} alt={c.name} loading="lazy" className="case-img"
             style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto", display: "block" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 64, letterSpacing: ".04em", color: "rgba(255,255,255,.85)" }}>{c.mono}</span>
        </div>
      )}
      {/* Hover overlay */}
      <div className="case-hover-hint" style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(7,10,20,.6)", opacity: 0, transition: "opacity .22s", backdropFilter: "blur(2px)",
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--grad)", padding: "10px 20px", borderRadius: 9999, fontSize: 13, fontWeight: 600, color: "#fff" }}>
          <Icon name="monitor" size={15} /> Ver projeto
        </span>
      </div>
    </div>

    {/* Info row */}
    <div style={{ padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, borderTop: "1px solid var(--line)" }}>
      <div>
        <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16 }}>{c.name}</p>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--fg-muted)", display: "flex", alignItems: "center", gap: 6 }}>
          <span className="tag tag-accent" style={{ fontSize: 10, padding: "1px 7px" }}>{c.tag}</span>
          <span style={{ color: "var(--fg-dim)" }}>{c.meta}</span>
        </p>
      </div>
      <span style={{ width: 34, height: 34, borderRadius: 9999, border: "1px solid var(--line-2)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
        <Icon name="arrow-up-right" size={16} color="var(--accent-bright)" />
      </span>
    </div>
  </Reveal>
);

/* ---------- Header (portfolio page) ---------- */
const PortfolioHeader = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn(); window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap hdr-row">
        <a href="IS7 Site.html" aria-label="IS7"><Logo size={26} /></a>
        <nav className="nav">
          <a href="IS7 Site.html">Início</a>
          <a href="IS7 Site.html#servicos">Serviços</a>
          <a href="IS7 Site.html#sobre">Sobre</a>
          <a href="IS7 Site.html#contato">Contato</a>
        </nav>
        <a href={wa("Olá! Vi o portfólio da IS7 e quero saber mais.")} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: "12px 24px", fontSize: 14 }}>
          Fale conosco
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
      {open && (
        <div className="mobile-panel">
          <a href="IS7 Site.html" onClick={() => setOpen(false)}>Início</a>
          <a href="IS7 Site.html#servicos" onClick={() => setOpen(false)}>Serviços</a>
          <a href="IS7 Site.html#sobre" onClick={() => setOpen(false)}>Sobre</a>
          <a href="IS7 Site.html#contato" onClick={() => setOpen(false)}>Contato</a>
          <a href={wa("Olá! Vi o portfólio e quero saber mais.")} target="_blank" rel="noreferrer"
             className="btn btn-primary" style={{ width: "100%", marginTop: 16 }}>Fale conosco</a>
        </div>
      )}
    </header>
  );
};

/* ---------- Page ---------- */
const PortfolioPage = () => {
  React.useEffect(() => { document.body.classList.add("js-anim"); }, []);

  return (
    <React.Fragment>
      <PortfolioHeader />
      <main>
        {/* Hero */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: 140, paddingBottom: 72 }}>
          <div className="glow glow-purple" style={{ width: 500, height: 500, top: -200, left: "50%", transform: "translateX(-50%)", opacity: .5 }} />
          <div className="gridlines" />
          <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <Reveal><Eyebrow center>Portfólio</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h1 className="display" style={{ margin: "20px auto 0", maxWidth: 800, fontSize: "clamp(36px,5.5vw,68px)" }}>
                Projetos reais, <span className="grad-text">no ar e vendendo</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead" style={{ maxWidth: 560, margin: "22px auto 0" }}>
                Sites, lojas virtuais e presença digital. Cada projeto feito sob medida para o negócio do cliente.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Stats strip */}
        <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}>
          <div className="wrap" style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { val: "+80", label: "Projetos entregues" },
              { val: "15+", label: "Estados atendidos" },
              { val: "5.0", label: "Nota no Google" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} style={{ textAlign: "center" }}>
                <span className="stat-num" style={{ fontSize: 36 }}>{s.val}</span>
                <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--fg-muted)" }}>{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Grid with lightbox */}
        <PortfolioGrid />

        {/* CTA */}
        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="glow glow-purple" style={{ width: 400, height: 400, top: -100, left: "50%", transform: "translateX(-50%)", opacity: .45 }} />
          <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 640 }}>
            <Reveal>
              <Eyebrow center>Próximo projeto</Eyebrow>
              <h2 className="h2" style={{ marginTop: 16 }}>Quer o seu negócio <span className="grad-text">nesta lista?</span></h2>
              <p className="lead" style={{ marginTop: 16 }}>Diagnóstico gratuito da sua presença digital. Sem compromisso.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 32 }}>
                <a href={wa("Olá! Vi o portfólio da IS7 e quero um projeto para minha empresa.")} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                  Falar com a IS7 <Icon name="arrow-right" size={18} />
                </a>
                <a href="IS7 Site.html" className="btn btn-ghost btn-lg">Voltar ao site</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--line)", padding: "36px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Logo size={22} />
          <p style={{ margin: 0, fontSize: 12, color: "var(--fg-dim)" }}>© 2026 IS7 · Todos os direitos reservados</p>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a className="fab" href={wa("Olá! Vi o portfólio e quero saber mais.")} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" style={{ width: 30, height: 30, fill: "#04210F" }}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z"/></svg>
      </a>
    </React.Fragment>
  );
};

/* Grid section with lightbox wired in */
const PortfolioGrid = () => {
  const [active, setActive] = useLightbox();
  return (
    <section className="section">
      <div className="wrap">
        <div className="grid-portfolio">
          {ALL_CASES.map((c, i) => <CaseCardFull key={i} c={c} i={i} onOpen={setActive} />)}
        </div>
      </div>
      {active && <PortfolioLightbox c={active} onClose={() => setActive(null)} />}
      <style>{`
        .case-img { transition: transform 5s linear; }
        @media (hover: hover) { .card-hover:hover .case-img { transform: translateY(calc(-100% + 230px)); } }
        .card-hover:hover .case-hover-hint { opacity: 1 !important; }
      `}</style>
    </section>
  );
};

window.IS7v2 = Object.assign(window.IS7v2 || {}, { PortfolioPage });
