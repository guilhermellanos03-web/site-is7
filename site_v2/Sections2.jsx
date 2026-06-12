(function () {
  "use strict";
  var _v = window.IS7v2;

  // ── Portfolio ─────────────────────────────────────────────────────────────
  const PortfolioCard = function PortfolioCard({ c, onOpen, delay }) {
    var { Icon, Reveal } = _v;
    return (
      <Reveal delay={delay} as="article" className="card card-hover" style={{ overflow: "hidden", cursor: "pointer" }} onClick={function () { onOpen(c); }}>
        {/* Thumbnail with hover-scroll */}
        <div style={{ height: 200, position: "relative", overflow: "hidden", background: c.grad || "var(--surface-2)" }}>
          {c.img ? (
            <img
              src={c.img} alt={c.name} loading="lazy"
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", height: "auto",
                minHeight: "100%",
                objectFit: "cover", objectPosition: "top center",
                transition: "transform 4s linear",
              }}
              onMouseEnter={function (e) { e.currentTarget.style.transform = "translateY(calc(-100% + 200px))"; }}
              onMouseLeave={function (e) { e.currentTarget.style.transform = "translateY(0)"; }}
            />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 52, letterSpacing: ".06em", color: "rgba(255,255,255,.7)" }}>{c.mono}</span>
            </div>
          )}
          {/* Tag */}
          <span className="tag tag-accent" style={{ position: "absolute", top: 10, left: 10, backdropFilter: "blur(6px)" }}>{c.tag}</span>
          {c.pages > 1 && (
            <span className="tag" style={{ position: "absolute", top: 10, right: 10, backdropFilter: "blur(6px)" }}>{c.pages} pág.</span>
          )}
          {/* Hover overlay */}
          <div style={{
            position: "absolute", inset: 0, background: "rgba(5,8,20,.6)", backdropFilter: "blur(2px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: 0, transition: "opacity .25s",
          }}
            onMouseEnter={function (e) { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={function (e) { e.currentTarget.style.opacity = "0"; }}
          >
            <span style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "var(--grad)", padding: "9px 18px", borderRadius: 9999,
              fontSize: 13.5, fontWeight: 600, color: "#fff",
            }}>
              <Icon name="expand" size={15} /> Ver detalhes
            </span>
          </div>
        </div>
        {/* Info */}
        <div style={{ padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16 }}>{c.name}</p>
            <p style={{ margin: "3px 0 0", fontSize: 13, color: "var(--fg-muted)" }}>{c.meta}</p>
          </div>
          <span style={{
            width: 34, height: 34, borderRadius: 9999,
            border: "1px solid var(--line-2)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <Icon name="expand" size={15} color="var(--accent-bright)" />
          </span>
        </div>
      </Reveal>
    );
  };

  const Portfolio = function Portfolio() {
    var { Eyebrow, Reveal } = _v;
    var [active, setActive] = React.useState(null);
    var cases = (window.IS7_CASES || []).slice(0, 6);

    return (
      <section id="portfolio" className="section">
        <div className="wrap">
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow center>Portfólio</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>Projetos reais, <span className="grad-text">no ar e vendendo.</span></h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: 520, margin: "16px auto 0" }}>
              Cada projeto foi desenvolvido com foco em performance, SEO e conversão.
            </p>
          </Reveal>

          <div className="grid-portfolio">
            {cases.map(function (c, i) {
              return <PortfolioCard key={c.name} c={c} onOpen={setActive} delay={i * 50} />;
            })}
          </div>

          <Reveal style={{ textAlign: "center", marginTop: 44 }}>
            <a href="portfolio.html" className="btn btn-ghost">
              Ver portfólio completo <span style={{ marginLeft: 4 }}>→</span>
            </a>
          </Reveal>
        </div>

        {/* Lightbox — lazy reference so order of script loading doesn't matter */}
        {active && (() => {
          var LB = window.IS7v2.PortfolioLightbox;
          return LB ? <LB project={active} onClose={function () { setActive(null); }} /> : null;
        })()}
      </section>
    );
  };

  // ── Reviews ───────────────────────────────────────────────────────────────
  var REVIEWS = [
    { name: "Allan Ferraz",      ago: "há 2 meses",  color: "#4285F4", text: "Atendimento rápido e conciso, meu site ficou lindo e agora tô recebendo clientes melhores investindo menos do que antes." },
    { name: "André Vicente",     ago: "há 3 meses",  color: "#34A853", text: "Graças às mudanças de direcionamento e grandes estratégias criadas por essa agência, alcancei resultados expressivos e grandes feitos." },
    { name: "Vinicius Cortiano", ago: "há 4 meses",  color: "#EA4335", text: "Trabalho de qualidade e excelente atendimento! Recomendo muito para quem precisa de presença digital profissional." },
    { name: "Tiago Monteiro",    ago: "há 5 meses",  color: "#4285F4", text: "Site entregue no prazo, exatamente como combinado. Já recebi vários contatos pelo formulário na primeira semana." },
    { name: "Camila Rodrigues",  ago: "há 6 meses",  color: "#34A853", text: "Super recomendo! Equipe muito atenciosa e o resultado ficou muito melhor do que esperava. Processo simples e rápido." },
    { name: "Fernando Lima",     ago: "há 7 meses",  color: "#FBBC05", text: "Ótimo custo-benefício. Site profissional com domínio e hospedagem inclusos por um preço muito acessível." },
    { name: "Patrícia Souza",    ago: "há 8 meses",  color: "#9145E6", text: "Atendimento rápido, processo fácil e site lindo. Do briefing à entrega foi tudo muito bem organizado." },
    { name: "Carlos Mendes",     ago: "há 9 meses",  color: "#EA4335", text: "Profissionalismo do início ao fim. O site ficou exatamente com o visual que eu queria e o suporte foi excelente." },
  ];

  var GoogleLogoSVG = (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  var GoogleBadgeSVG = (
    <svg width="10" height="10" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  const ReviewCard = function ReviewCard({ r }) {
    return (
      <div className="card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 0 }}>
        {/* Header: avatar + name + time */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 9999,
              background: r.color, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18,
            }}>
              {r.name[0]}
            </div>
            <div style={{
              position: "absolute", bottom: -2, right: -2,
              width: 18, height: 18, borderRadius: 9999,
              background: "#fff", border: "1.5px solid #e0e0e0",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {GoogleBadgeSVG}
            </div>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontWeight: 700, fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>{r.ago}</span>
          </div>
        </div>
        {/* Stars */}
        <div style={{ display: "flex", gap: 1, marginBottom: 10 }}>
          {"★★★★★".split("").map(function (s, i) {
            return <span key={i} style={{ color: "#FBBC05", fontSize: 15 }}>{s}</span>;
          })}
        </div>
        {/* Text */}
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "var(--fg-muted)" }}>{r.text}</p>
      </div>
    );
  };

  const Reviews = function Reviews() {
    var { Eyebrow, Reveal } = _v;
    var [page, setPage] = React.useState(0);
    var perPage = 4;
    var pages = Math.ceil(REVIEWS.length / perPage);
    var visible = REVIEWS.slice(page * perPage, page * perPage + perPage);

    return (
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
            <Eyebrow center>O que dizem nossos clientes</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>
              Mais de 30 avaliações <span className="grad-text">verificadas no Google</span>
            </h2>
          </Reveal>

          {/* Google Avaliações header card */}
          <Reveal style={{ marginBottom: 24 }}>
            <div className="card" style={{ padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {GoogleLogoSVG}
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>Google Avaliações</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>Avaliações verificadas</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 30, lineHeight: 1 }}>5.0</span>
                <div>
                  <div style={{ color: "#FBBC05", fontSize: 18, letterSpacing: 2 }}>★★★★★</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>30 avaliações</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Cards grid — 4 colunas */}
          <div className="rev-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 28 }}>
            {visible.map(function (r, i) {
              return (
                <Reveal key={page + "-" + i} delay={i * 60}>
                  <ReviewCard r={r} />
                </Reveal>
              );
            })}
          </div>

          {/* Paginação + botão */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {Array.from({ length: pages }).map(function (_, i) {
                return (
                  <button
                    key={i}
                    onClick={function () { setPage(i); }}
                    style={{
                      width: i === page ? 24 : 8, height: 8,
                      borderRadius: 9999,
                      background: i === page ? "var(--accent)" : "var(--line-2)",
                      border: 0, cursor: "pointer", padding: 0,
                      transition: "width .3s, background .3s",
                    }}
                    aria-label={"Página " + (i + 1)}
                  />
                );
              })}
              <button
                onClick={function () { setPage(function (p) { return (p + 1) % pages; }); }}
                style={{
                  width: 36, height: 36, borderRadius: 9999,
                  border: "1px solid var(--line-2)", background: "var(--surface)",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--fg)", marginLeft: 4,
                }}
                aria-label="Próxima página"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
            <a
              href="https://maps.app.goo.gl/EuyiNkJ55Y8NJL7EA?g_st=ipc"
              target="_blank" rel="noreferrer"
              className="btn btn-ghost"
            >
              Ver todas no Google ↗
            </a>
          </div>
        </div>
        <style>{`
          @media(max-width:900px){ .rev-grid{ grid-template-columns:repeat(2,1fr) !important; } }
          @media(max-width:480px){ .rev-grid{ grid-template-columns:1fr !important; } }
        `}</style>
      </section>
    );
  };

  Object.assign(window.IS7v2, { Portfolio, Reviews });
})();
