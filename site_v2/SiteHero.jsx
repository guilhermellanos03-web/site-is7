(function () {
  "use strict";
  var _v = window.IS7v2;

  // ── Stars ────────────────────────────────────────────────────────────────
  const Stars = function Stars({ n, size }) {
    n = n || 5; size = size || 14;
    return (
      <span className="stars" style={{ fontSize: size }}>
        {"★★★★★".slice(0, n)}
      </span>
    );
  };

  // ── Hero variant A ────────────────────────────────────────────────────────
  var chipFloat = {
    display: "flex", alignItems: "center", gap: 10,
    background: "var(--surface)",
    border: "1px solid var(--line-2)",
    borderRadius: 50,
    padding: "11px 18px",
    backdropFilter: "blur(14px)",
    boxShadow: "0 8px 32px -8px rgba(0,0,0,.35)",
    whiteSpace: "nowrap",
  };

  const HeroA = function HeroA() {
    var { Eyebrow, Reveal, wa, Icon } = _v;
    return (
      <section id="topo" style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div className="gridlines" />
        <div className="glow glow-purple" style={{ width: 640, height: 640, top: -120, left: "50%", transform: "translateX(-50%)", opacity: .5 }} />
        <div className="glow glow-blue"   style={{ width: 320, height: 320, bottom: 0,   right: "8%",  opacity: .22 }} />

        {/* Floating service chips — desktop only */}
        <div className="hide-sm float" style={{ position: "absolute", top: "22%", left: "4%", zIndex: 5 }}>
          <div style={chipFloat}>
            <Icon name="map-pin" size={16} color="var(--accent-bright)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg)" }}>Google</span>
          </div>
        </div>
        <div className="hide-sm float-2" style={{ position: "absolute", bottom: "22%", left: "4%", zIndex: 5 }}>
          <div style={chipFloat}>
            <Icon name="shopping-bag" size={16} color="var(--accent-bright)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg)" }}>Lojas virtuais</span>
          </div>
        </div>
        <div className="hide-sm float-2" style={{ position: "absolute", top: "22%", right: "4%", zIndex: 5 }}>
          <div style={chipFloat}>
            <Icon name="monitor" size={16} color="var(--accent-bright)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg)" }}>Sites profissionais</span>
          </div>
        </div>
        <div className="hide-sm float" style={{ position: "absolute", bottom: "22%", right: "4%", zIndex: 5 }}>
          <div style={chipFloat}>
            <Icon name="trending-up" size={16} color="var(--accent-bright)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg)" }}>Tráfego pago</span>
          </div>
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <Eyebrow center>Assessoria de Marketing Digital</Eyebrow>
            <h1 className="display" style={{ marginTop: 20, marginBottom: 28, color: "var(--fg)", maxWidth: 800, margin: "20px auto 28px" }}>
              Performance e posicionamento<br />
              para a sua empresa
            </h1>
            <p className="lead" style={{ maxWidth: 560, margin: "0 auto 40px" }}>
              Google, sites profissionais, lojas virtuais e tráfego pago. Tudo que o seu negócio precisa para ser encontrado e escolher os melhores clientes.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 40, justifyContent: "center" }}>
              <a
                href={wa("Olá, vim pelo site da IS7 e quero falar com um especialista!")}
                target="_blank" rel="noreferrer"
                className="btn btn-primary btn-lg"
              >
                Falar com especialista
                <Icon name="arrow-right" size={18} />
              </a>
              <a href="#portfolio" className="btn btn-ghost btn-lg">
                Ver nossos cases
              </a>
            </div>

            {/* Trust row */}
            <div className="trust-bar" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Stars n={5} size={15} />
                <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                  <strong style={{ color: "var(--fg)" }}>5.0</strong> no Google · 30 avaliações
                </span>
              </div>
              <span className="trust-sep" style={{ width: 1, height: 16, background: "var(--line-2)" }} />
              <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                <strong style={{ color: "var(--fg)" }}>+100</strong> projetos entregues
              </span>
              <span className="trust-sep" style={{ width: 1, height: 16, background: "var(--line-2)" }} />
              <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                <strong style={{ color: "var(--fg)" }}>5 anos</strong> de mercado
              </span>
            </div>
          </Reveal>
        </div>

        <style>{`
          @media(max-width:980px){
            #topo .display{ font-size:clamp(28px,7vw,44px) !important; }
          }
          @media(max-width:620px){
            #topo .trust-sep{ display:none !important; }
            #topo .trust-bar{ gap:10px !important; }
            #topo .btn-lg{ width:100%; justify-content:center; }
          }
        `}</style>
      </section>
    );
  };

  // ── Hero variant B (showcase split) ──────────────────────────────────────
  const HeroB = function HeroB() {
    return <HeroA />;
  };

  const Hero = function Hero({ variant }) {
    return variant === "B" ? <HeroB /> : <HeroA />;
  };

  Object.assign(window.IS7v2, { Hero, Stars });
})();
