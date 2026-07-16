const { Logo, Icon, Eyebrow, Reveal, StatNumber, wa } = window.IS7v2;

const Stars = ({ size = 16 }) => (
  <span className="stars">{[0,1,2,3,4].map(i => <Icon key={i} name="star" size={size} color="#FBBF24" fill="#FBBF24" strokeWidth={0} />)}</span>
);

const TrustRow = ({ center }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 26, alignItems: "center", justifyContent: center ? "center" : "flex-start", marginTop: 34 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <Stars />
      <span style={{ fontSize: 14, color: "var(--fg-muted)" }}><strong style={{ color: "var(--fg)" }}>5.0</strong> no Google · 29 avaliações</span>
    </div>
    <span style={{ width: 1, height: 22, background: "var(--line-2)" }} className="hide-sm" />
    <span style={{ fontSize: 14, color: "var(--fg-muted)" }} className="hide-sm"><strong style={{ color: "var(--fg)" }}>+100</strong> projetos entregues</span>
    <span style={{ width: 1, height: 22, background: "var(--line-2)" }} className="hide-sm" />
    <span style={{ fontSize: 14, color: "var(--fg-muted)" }} className="hide-sm"><strong style={{ color: "var(--fg)" }}>5 anos</strong> de mercado</span>
  </div>
);

const CTAs = ({ center }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36, justifyContent: center ? "center" : "flex-start" }}>
    <a href={wa("Olá! Quero um diagnóstico gratuito da presença digital da minha empresa.")} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
      Falar com especialista <Icon name="arrow-right" size={18} />
    </a>
    <a href="#cases" className="btn btn-ghost btn-lg">Ver nossos cases</a>
  </div>
);

/* ─── Animated particles for hero background ─── */
const Particle = ({ x, y, size, delay, dur, color }) => (
  <span style={{
    position: "absolute", left: `${x}%`, top: `${y}%`,
    width: size, height: size, borderRadius: "50%",
    background: color, opacity: 0,
    animation: `particle-float ${dur}s ease-in-out ${delay}s infinite`,
    pointerEvents: "none",
  }} />
);

const Constellation = () => {
  const dots = React.useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    x: 5 + Math.random() * 90, y: 5 + Math.random() * 90,
    s: 1.5 + Math.random() * 2.5, d: Math.random() * 6,
    dur: 4 + Math.random() * 5, o: 0.15 + Math.random() * 0.35, c: i % 3,
  })), []);
  return (
    <div className="hide-sm" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {dots.map((d, i) => (
        <span key={i} style={{
          position: "absolute", left: `${d.x}%`, top: `${d.y}%`,
          width: d.s, height: d.s, borderRadius: "50%",
          background: d.c === 0 ? "var(--accent-bright)" : d.c === 1 ? "var(--accent-2)" : "var(--fg-dim)",
          opacity: d.o, animation: `star-twinkle ${d.dur}s ease-in-out ${d.d}s infinite`,
        }} />
      ))}
    </div>
  );
};

/* ─── Orbit ring decoration ─── */
const OrbitRing = ({ size, top, left, dur, opacity = 0.12 }) => (
  <div className="hide-sm" style={{
    position: "absolute", top, left, width: size, height: size,
    border: `1px solid rgba(145,69,230,${opacity})`, borderRadius: "50%",
    animation: `orbit-spin ${dur}s linear infinite`,
    pointerEvents: "none", zIndex: 0,
  }}>
    <span style={{
      position: "absolute", top: 0, left: "50%", transform: "translate(-50%,-50%)",
      width: 6, height: 6, borderRadius: "50%", background: "var(--accent-bright)", opacity: 0.6,
    }} />
  </div>
);

const FLOAT_CHIPS = [
  { label: "Google", icon: "map-pin", pos: { top: "16%", left: "6%" }, delay: "0s", cls: "float" },
  { label: "Sites profissionais", icon: "monitor", pos: { top: "24%", right: "5%" }, delay: ".8s", cls: "float-2" },
  { label: "Lojas virtuais", icon: "shopping-bag", pos: { bottom: "20%", left: "9%" }, delay: "1.4s", cls: "float-2" },
  { label: "Tráfego pago", icon: "trending-up", pos: { bottom: "16%", right: "8%" }, delay: ".4s", cls: "float" },
];

const HeroA = () => (
  <section id="topo" style={{ position: "relative", overflow: "hidden", minHeight: "92vh", display: "flex", alignItems: "center", paddingTop: 40, paddingBottom: 72 }}>
    <div className="glow glow-purple" style={{ width: 560, height: 560, top: -180, left: "50%", transform: "translateX(-50%)", animation: "glow-morph 12s ease-in-out infinite" }} />
    <div className="glow glow-blue" style={{ width: 420, height: 420, bottom: -160, right: -80, animation: "drift 16s ease-in-out infinite, glow-morph 14s ease-in-out 2s infinite reverse" }} />
    <div className="gridlines" />
    <Constellation />
    <OrbitRing size={600} top="-10%" left="55%" dur={40} opacity={0.08} />
    <OrbitRing size={380} top="60%" left="-5%" dur={30} opacity={0.06} />
    {FLOAT_CHIPS.map((c, i) => (
      <div key={i} className={`${c.cls} hide-sm`} style={{ position: "absolute", zIndex: 1, animationDelay: c.delay, ...c.pos }}>
        <div className="card chip-float-card" style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 16px", borderRadius: 9999, background: "rgba(14,20,38,.7)", backdropFilter: "blur(6px)" }}>
          <span className="chip" style={{ width: 28, height: 28, borderRadius: 8 }}><Icon name={c.icon} size={15} color="var(--accent-bright)" /></span>
          <span style={{ fontSize: 13.5, fontWeight: 600 }}>{c.label}</span>
        </div>
      </div>
    ))}
    <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
      <Reveal style={{ display: "flex", justifyContent: "center" }}>
        <Eyebrow center>Assessoria de marketing digital</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display" style={{ margin: "22px auto 0", maxWidth: 980 }}>
          Performance e <span className="grad-text">posicionamento</span> para a sua empresa.
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="lead" style={{ maxWidth: 600, margin: "26px auto 0" }}>
          Posicionamento no Google, sites profissionais, lojas virtuais e tráfego pago. Tudo que o seu negócio precisa para ser encontrado e escolher os melhores clientes.
        </p>
      </Reveal>
      <Reveal delay={240}><CTAs center /></Reveal>
      <Reveal delay={320} style={{ display: "flex", justifyContent: "center" }}><TrustRow center /></Reveal>
    </div>
    <style>{`
      @keyframes particle-float{
        0%,100%{ opacity:0; transform:translateY(0) scale(1); }
        20%{ opacity:.6; }
        50%{ opacity:.4; transform:translateY(-40px) scale(1.2); }
        80%{ opacity:.6; }
      }
      @keyframes orbit-spin{ from{ transform:rotate(0deg); } to{ transform:rotate(360deg); } }
    `}</style>
  </section>
);

const MiniReview = () => (
  <div className="card glass-dark" style={{ padding: 16, background: "rgba(14,20,38,.85)", backdropFilter: "blur(8px)", display: "flex", flexDirection: "column", gap: 8, width: 230 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 30, height: 30, borderRadius: 9999, background: "var(--grad)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 13, color: "#fff" }}>A</span>
      <div><p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Allan Ferraz</p><Stars size={11} /></div>
    </div>
    <p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.5 }}>"Meu site ficou lindo e agora recebo clientes melhores investindo menos."</p>
  </div>
);

const ResultPanel = () => (
  <div className="card glass-dark" style={{ padding: 22, background: "linear-gradient(160deg, rgba(19,26,48,.95), rgba(14,20,38,.95))" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Resultados</span>
      <span className="tag tag-accent">ao vivo</span>
    </div>
    <div style={{ display: "grid", gap: 16 }}>
      <div>
        <StatNumber prefix="+" value={312} suffix="%" />
        <p style={{ margin: "4px 0 0", fontSize: 12.5, color: "var(--fg-muted)" }}>Visitas vindas do Google</p>
      </div>
      <hr className="hair" />
      <div>
        <StatNumber value={29} suffix="+" />
        <p style={{ margin: "4px 0 0", fontSize: 12.5, color: "var(--fg-muted)" }}>Avaliações 5.0 estrelas</p>
      </div>
    </div>
    <div style={{ marginTop: 18, height: 54, display: "flex", alignItems: "flex-end", gap: 6 }}>
      {[34,46,40,58,52,72,66,88].map((h, i) => (
        <span key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 4, background: i > 5 ? "var(--grad)" : "rgba(145,69,230,.28)" }} />
      ))}
    </div>
  </div>
);

const HeroB = () => (
  <section id="topo" style={{ position: "relative", overflow: "hidden", paddingTop: 56, paddingBottom: 88 }}>
    <div className="glow glow-purple" style={{ width: 520, height: 520, top: -200, left: -120, animation: "glow-morph 12s ease-in-out infinite" }} />
    <div className="glow glow-blue" style={{ width: 460, height: 460, bottom: -200, right: -120, animation: "drift 18s ease-in-out infinite, glow-morph 14s ease-in-out 2s infinite reverse" }} />
    <Constellation />
    <div className="gridlines" />
    <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 40, alignItems: "center" }} className="hero-b-grid">
        <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "relative", width: "100%" }}>
            <div className="card" style={{ padding: 8, borderRadius: 24, overflow: "hidden", borderColor: "rgba(145,69,230,.35)" }}>
              <image-slot id="hero-founder" shape="rect" anchor="top"
                placeholder="Foto do Guilherme"
                style={{ width: "100%", aspectRatio: "3/4", display: "block", borderRadius: 18 }}></image-slot>
            </div>
            <div className="float" style={{ position: "absolute", bottom: -14, right: -14, zIndex: 2 }}>
              <div className="card glass-dark" style={{ padding: "10px 14px", background: "rgba(14,20,38,.92)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 9 }}>
                <span style={{ width: 32, height: 32, borderRadius: 9999, background: "var(--grad)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 800, color: "#fff", fontSize: 13 }}>G</span>
                <div>
                  <p style={{ margin: 0, fontSize: 12.5, fontWeight: 700, lineHeight: 1.2 }}>Guilherme Llanos</p>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--fg-muted)" }}>Fundador · IS7</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal><Eyebrow>Assessoria de marketing digital</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ fontSize: "clamp(34px,4.4vw,58px)", marginTop: 20 }}>
              Presença digital que <span className="grad-text">conecta você</span> aos clientes certos.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ maxWidth: 440, marginTop: 18 }}>
              Colocamos sua empresa no Google, criamos sites e lojas que vendem e trazemos tráfego qualificado todo dia.
            </p>
          </Reveal>
          <Reveal delay={240}><CTAs /></Reveal>
          <Reveal delay={320}><TrustRow /></Reveal>
        </div>
        <Reveal delay={200} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <ResultPanel />
          <MiniReview />
        </Reveal>
      </div>
    </div>
    <style>{`@media(max-width:900px){ .hero-b-grid{ grid-template-columns:1fr !important; } .hero-b-grid > *:first-child, .hero-b-grid > *:last-child{ display:none; } }`}</style>
  </section>
);

const Hero = ({ variant }) => (variant === "B" ? <HeroB /> : <HeroA />);

window.IS7v2 = Object.assign(window.IS7v2, { Hero, Stars });
