const { Icon, Eyebrow, Reveal, Stars, wa } = window.IS7v2;

/* ---------------- PORTFOLIO / CASES (main site — 6 featured) ---------------- */
const FEATURED = (window.IS7_CASES || []).slice(0, 6);

/* Browser chrome bar — dots + URL */
const BrowserBar = ({ domain }) => (
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
      fontFamily: "var(--mono, monospace)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
    }}>
      {domain || "is7mkt.com.br"}
    </div>
  </div>
);

const CaseCard = ({ c, i, onOpen }) => (
  <Reveal delay={(i % 3) * 80} className="card card-hover"
    style={{ overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", padding: 0 }}
    onClick={() => onOpen(c)}>

    {/* Browser chrome */}
    <BrowserBar domain={c.domain} />

    {/* Screenshot area */}
    <div style={{ height: 200, overflow: "hidden", position: "relative", background: c.grad || "var(--surface-2)", flexShrink: 0 }}>
      {c.img ? (
        <img src={c.img} alt={c.name} loading="lazy" className="case-img"
             style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto", display: "block" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 56, letterSpacing: ".04em", color: "rgba(255,255,255,.92)" }}>{c.mono}</span>
        </div>
      )}
      {/* hover overlay */}
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
    <div style={{ padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, borderTop: "1px solid var(--line)" }}>
      <div>
        <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 700, fontSize: 15 }}>{c.name}</p>
        <p style={{ margin: "3px 0 0", fontSize: 12, color: "var(--fg-muted)", display: "flex", alignItems: "center", gap: 6 }}>
          <span className="tag tag-accent" style={{ fontSize: 10, padding: "1px 7px" }}>{c.tag}</span>
          <span style={{ color: "var(--fg-dim)" }}>{c.meta}</span>
        </p>
      </div>
      <span style={{ width: 32, height: 32, borderRadius: 9999, border: "1px solid var(--line-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name="arrow-up-right" size={15} color="var(--accent-bright)" />
      </span>
    </div>
  </Reveal>
);

const Portfolio = () => {
  const { useLightbox, PortfolioLightbox } = window.IS7v2;
  const [active, setActive] = useLightbox();
  const total = (window.IS7_CASES || []).length;
  return (
    <section id="cases" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <Reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
          <div style={{ maxWidth: 560 }}>
            <Eyebrow>Projetos desenvolvidos</Eyebrow>
            <h2 className="h2" style={{ marginTop: 16 }}>Projetos reais, <span className="grad-text">no ar e vendendo</span>.</h2>
          </div>
          <a href="/portfolio" className="link-arrow hide-sm">Ver portfólio completo <Icon name="arrow-right" size={16} /></a>
        </Reveal>
        <div className="grid-portfolio">
          {FEATURED.map((c, i) => <CaseCard key={i} c={c} i={i} onOpen={setActive} />)}
        </div>
        <Reveal style={{ textAlign: "center", marginTop: 36 }}>
          <a href="/portfolio" className="btn btn-ghost">
            Ver portfólio completo <Icon name="arrow-right" size={16} />
          </a>
        </Reveal>
      </div>
      {active && <PortfolioLightbox c={active} onClose={() => setActive(null)} />}
      <style>{`
        .case-img { transition: transform 4s linear; }
        @media (hover: hover) { .card-hover:hover .case-img { transform: translateY(calc(-100% + 200px)); } }
        .card-hover:hover .case-hover-hint { opacity: 1 !important; }
      `}</style>
    </section>
  );
};

/* ---------------- GOOGLE REVIEWS CAROUSEL ---------------- */
// Avaliacoes reais do Google, curadas: as que falam de SITE/resultado primeiro.
// (sem fotos por pessoa, como no widget; sem a avaliacao que cita "preco")
const REVIEWS = [
  { name: "Maycon Zeclhynski",      time: "há 2 semanas", initial: "M", color: "#4285F4", text: "Trabalho excelente na construção do site e LP! Recomendo!" },
  { name: "Joao Victor",            time: "há 1 mês",     initial: "J", color: "#34A853", text: "Meu site ficou perfeito! Recomendo muito, ótimo suporte!" },
  { name: "Allan Ferraz",           time: "há 3 meses",   initial: "A", color: "#EA4335", text: "Atendimento rápido e conciso, meu site ficou lindo e agora tô recebendo clientes melhores investindo menos do que antes." },
  { name: "Rafael Almeida",         time: "há 2 semanas", initial: "R", color: "#FBBC05", text: "Fizeram meu site, a cara da empresa ficou outra. Muito bom." },
  { name: "VICTOR Hugo",            time: "há 1 mês",     initial: "V", color: "#9145E6", text: "Solicitei um serviço para um site e foi ótimo o atendimento!" },
  { name: "André Vicente",          time: "há 3 meses",   initial: "A", color: "#4285F4", text: "Graças às mudanças de direcionamento e grandes estratégias criadas por essa agência, alcancei resultados expressivos." },
  { name: "Victor Hugo",            time: "há 3 meses",   initial: "V", color: "#34A853", text: "Uma empresa séria que me gerou confiança e ótimos resultados. Guilherme é um excelente profissional que traz o direcionamento certo para investir melhor e ter retorno." },
  { name: "Eduardo Henrique",       time: "há 3 meses",   initial: "E", color: "#EA4335", text: "Me surpreendeu bem mais do que eu esperava. Nota 1000!" },
  { name: "Geovanna Xavier",        time: "há 8 meses",   initial: "G", color: "#FBBC05", text: "Ótimos serviços, entregam o que prometem com muita agilidade e pontualidade. Recomendo!!" },
  { name: "Luã De Assis",           time: "há 3 meses",   initial: "L", color: "#9145E6", text: "Excelente! Recomendo o trabalho de olhos fechados. Grande profissional." },
  { name: "Jonas Neto",             time: "há 2 semanas", initial: "J", color: "#4285F4", text: "Serviço impecável." },
  { name: "Alexandre Freitas",      time: "há 3 meses",   initial: "A", color: "#34A853", text: "Fui atendido pelo Guilherme, muito prestativo e atencioso. Recomendo!" },
];

const GoogleG = () => (
  <svg width="11" height="11" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const GoogleWord = ({ size = 20 }) => (
  <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: size, lineHeight: 1, letterSpacing: "-.01em" }} aria-label="Google">
    <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
  </span>
);

const ReviewCard = ({ r }) => (
  <div className="card" style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 10, borderRadius: 16, height: "100%" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: r.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, color: "#fff", fontFamily: "var(--serif)" }}>{r.initial}</div>
        <div style={{ position: "absolute", bottom: -2, right: -2, width: 17, height: 17, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,.25)" }}>
          <GoogleG />
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontWeight: 700, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.name}</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ fontSize: 11, color: "var(--fg-dim)" }}>{r.time}</div>
      </div>
    </div>
    <Stars size={13} />
    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "var(--fg-muted)", flex: 1 }}>{r.text}</p>
  </div>
);

const Reviews = () => {
  const scroller = React.useRef(null);

  // arrastar pra rolar (desktop); no mobile o swipe nativo ja funciona
  React.useEffect(() => {
    const el = scroller.current; if (!el) return;
    let down = false, startX = 0, startLeft = 0, moved = false;
    const md = (e) => { down = true; moved = false; startX = e.pageX; startLeft = el.scrollLeft; el.classList.add("dragging"); };
    const mm = (e) => { if (!down) return; const dx = e.pageX - startX; if (Math.abs(dx) > 4) moved = true; el.scrollLeft = startLeft - dx; };
    const up = () => { down = false; el.classList.remove("dragging"); };
    // evita "clicar" num card logo apos arrastar
    const ck = (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } };
    el.addEventListener("mousedown", md);
    el.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", up);
    el.addEventListener("click", ck, true);
    return () => { el.removeEventListener("mousedown", md); el.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", up); el.removeEventListener("click", ck, true); };
  }, []);

  const nudge = (dir) => { const el = scroller.current; if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" }); };

  return (
    <section className="section">
      <div className="glow glow-blue" style={{ width: 360, height: 360, top: 80, right: -160, opacity: .35 }} />
      <div className="wrap" style={{ maxWidth: 1100, position: "relative", zIndex: 2 }}>

        {/* Eyebrow + titulo */}
        <Reveal style={{ textAlign: "center", marginBottom: 24 }}>
          <Eyebrow center>O que dizem nossos clientes</Eyebrow>
          <h2 className="h2" style={{ marginTop: 14 }}>Avaliações reais no <span className="grad-text">Google</span></h2>
        </Reveal>

        {/* Resumo (estilo Google) */}
        <Reveal>
          <div className="card" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "6px 14px", padding: "18px 24px", borderRadius: 16, marginBottom: 20, textAlign: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><GoogleWord size={22} /> <span style={{ fontWeight: 700, fontSize: 16 }}>Avaliações</span></span>
            <span style={{ width: 1, height: 18, background: "var(--line-2)" }} className="hide-sm" />
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 24, fontWeight: 900, fontFamily: "var(--serif)" }}>5,0</span>
              <Stars size={18} />
              <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>(29)</span>
            </span>
          </div>
        </Reveal>

        {/* Carrossel arrastavel */}
        <div className="rev-scroller" ref={scroller}>
          {REVIEWS.map((r, i) => (
            <div className="rev-item" key={i}><ReviewCard r={r} /></div>
          ))}
        </div>

        {/* Controles + CTA */}
        <Reveal style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
          <button onClick={() => nudge(-1)} aria-label="Anterior" className="rev-nav"><Icon name="chevron-left" size={18} color="var(--fg-muted)" /></button>
          <button onClick={() => nudge(1)} aria-label="Próximas" className="rev-nav"><Icon name="chevron-right" size={18} color="var(--fg-muted)" /></button>
          <a href="https://maps.app.goo.gl/EuyiNkJ55Y8NJL7EA?g_st=ipc" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ marginLeft: 4 }}>
            Ver todas no Google <Icon name="external-link" size={15} />
          </a>
        </Reveal>
      </div>

      <style>{`
        .rev-scroller{ display:flex; gap:16px; overflow-x:auto; scroll-snap-type:x mandatory; padding:4px; -webkit-overflow-scrolling:touch; scrollbar-width:none; cursor:grab; }
        .rev-scroller::-webkit-scrollbar{ display:none; }
        .rev-scroller.dragging{ cursor:grabbing; }
        .rev-scroller.dragging *{ user-select:none; }
        .rev-item{ flex:0 0 320px; max-width:82vw; scroll-snap-align:start; }
        .rev-nav{ width:40px; height:40px; border-radius:50%; border:1px solid var(--line-2); background:var(--surface); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:border-color .2s, background .2s; }
        .rev-nav:hover{ border-color:var(--accent-bright); }
        @media(max-width:600px){ .rev-item{ flex-basis:80vw; } }
      `}</style>
    </section>
  );
};

window.IS7v2 = Object.assign(window.IS7v2, { Portfolio, CaseCard, Reviews });
