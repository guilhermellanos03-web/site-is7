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

  // ── Floating card chip ────────────────────────────────────────────────────
  const ChipCard = function ChipCard({ icon, label, value, delay, style }) {
    var { Icon } = _v;
    return (
      <div
        className={"float chip-float-card" + (delay ? " float-2" : "")}
        style={Object.assign({
          position: "absolute",
          background: "rgba(14,20,38,.92)",
          border: "1px solid rgba(145,69,230,.30)",
          borderRadius: 16,
          padding: "12px 16px",
          backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", gap: 10,
          minWidth: 160,
          boxShadow: "0 20px 40px -12px rgba(0,0,0,.6)",
        }, style || {})}
      >
        <span style={{
          width: 36, height: 36, borderRadius: 10,
          background: "linear-gradient(135deg,rgba(145,69,230,.3),rgba(59,108,255,.2))",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <Icon name={icon} size={18} color="var(--accent-bright)" />
        </span>
        <div>
          <p style={{ margin: 0, fontSize: 18, fontFamily: "var(--serif)", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{value}</p>
          <p style={{ margin: 0, fontSize: 11, color: "var(--fg-muted)", marginTop: 2 }}>{label}</p>
        </div>
      </div>
    );
  };

  // ── Hero variant A ────────────────────────────────────────────────────────
  const HeroA = function HeroA() {
    var { Eyebrow, Reveal, wa, Icon } = _v;
    return (
      <section id="topo" className="section" style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        {/* Gridlines */}
        <div className="gridlines" />
        {/* Glows */}
        <div className="glow glow-purple" style={{ width: 480, height: 480, top: -80, left: "10%", opacity: .55 }} />
        <div className="glow glow-blue" style={{ width: 360, height: 360, top: 120, right: "5%", opacity: .35 }} />

        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>

            {/* Left — text */}
            <Reveal>
              <Eyebrow>Marketing Digital · Curitiba</Eyebrow>
              <h1 className="display" style={{ marginTop: 20, marginBottom: 28, color: "var(--fg)" }}>
                Sua empresa<br />
                encontrada,{" "}
                <span className="grad-text">escolhida</span><br />
                <span className="grad-text">e contratada</span><br />
                todos os dias.
              </h1>
              <p className="lead" style={{ marginBottom: 40, maxWidth: 520 }}>
                Sites, lojas virtuais e tráfego pago que colocam seu negócio na frente de quem já está procurando o que você oferece.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 40 }}>
                <a
                  href={wa("Olá, vim pelo site da IS7 e quero criar meu site!")}
                  target="_blank" rel="noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Quero meu site agora
                  <Icon name="arrow-right" size={18} />
                </a>
                <a href="#portfolio" className="btn btn-ghost btn-lg">
                  Ver portfólio
                </a>
              </div>

              {/* Trust row */}
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Stars n={5} size={15} />
                  <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                    <strong style={{ color: "var(--fg)" }}>5.0</strong> no Google
                  </span>
                </div>
                <span style={{ width: 1, height: 16, background: "var(--line-2)" }} />
                <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                  <strong style={{ color: "var(--fg)" }}>80+</strong> projetos entregues
                </span>
                <span style={{ width: 1, height: 16, background: "var(--line-2)" }} />
                <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                  <strong style={{ color: "var(--fg)" }}>6+ anos</strong> de experiência
                </span>
              </div>
            </Reveal>

            {/* Right — floating cards mockup */}
            <div className="hide-sm" style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Browser card */}
              <div className="float browser" style={{
                width: 320,
                boxShadow: "0 30px 60px -20px rgba(0,0,0,.7)",
                transform: "rotate(-2deg)",
                position: "relative", zIndex: 5,
              }}>
                <div className="browser-bar">
                  <span className="browser-dot" style={{ background: "rgba(248,113,113,.8)" }} />
                  <span className="browser-dot" style={{ background: "rgba(250,204,21,.8)" }} />
                  <span className="browser-dot" style={{ background: "rgba(74,222,128,.8)" }} />
                  <div style={{
                    flex: 1, background: "rgba(255,255,255,.08)", borderRadius: 6, height: 20,
                    marginLeft: 8, display: "flex", alignItems: "center", padding: "0 8px", gap: 4,
                  }}>
                    <Icon name="lock" size={9} color="rgba(255,255,255,.4)" />
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,.4)" }}>seunegocio.com.br</span>
                  </div>
                </div>
                <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                  {/* Hero bar */}
                  <div style={{ height: 80, background: "linear-gradient(135deg,rgba(145,69,230,.25),rgba(59,108,255,.2))", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ height: 8, background: "rgba(255,255,255,.5)", borderRadius: 4, width: 100, margin: "0 auto 6px" }} />
                      <div style={{ height: 6, background: "rgba(255,255,255,.25)", borderRadius: 4, width: 70, margin: "0 auto" }} />
                    </div>
                  </div>
                  {/* Card rows */}
                  {[1,2,3].map(function(i){
                    return (
                      <div key={i} style={{ display: "flex", gap: 8 }}>
                        <div style={{ height: 6, background: "rgba(255,255,255,.2)", borderRadius: 4, flex: 1 }} />
                        <div style={{ height: 6, background: "rgba(255,255,255,.1)", borderRadius: 4, width: "40%" }} />
                      </div>
                    );
                  })}
                  {/* CTA button */}
                  <div style={{ height: 28, background: "var(--grad)", borderRadius: 8, marginTop: 4, opacity: .85 }} />
                </div>
              </div>

              {/* Floating chip — sites */}
              <ChipCard
                icon="check-circle"
                value="Site no ar!"
                label="Entregue em 7 dias"
                style={{ top: 20, right: -10, zIndex: 10 }}
              />

              {/* Floating chip — leads */}
              <ChipCard
                icon="message-circle"
                value="12 leads"
                label="Contatos esta semana"
                delay
                style={{ bottom: 20, left: -10, zIndex: 10 }}
              />
            </div>
          </div>
        </div>

        {/* Mobile hero */}
        <style>{`
          @media(max-width:980px){
            #topo .display{ font-size:clamp(32px,7vw,48px) !important; }
            #topo > .wrap > div{ grid-template-columns:1fr !important; }
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
