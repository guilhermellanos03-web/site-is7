// IS7 — Portfolio Lightbox v2 — Full iframe / screenshot browser experience

const { Icon, wa } = window.IS7v2;

const useLightbox = () => {
  const [active, setActive] = React.useState(null);
  React.useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);
  return [active, setActive];
};

const PortfolioLightbox = ({ c, onClose }) => {
  const hasUrl = !!c.url;
  const hasImg = !!c.img;
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9990,
        background: "rgba(2,4,12,.92)", backdropFilter: "blur(12px)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "20px 20px 0",
        animation: "lb-in .2s ease both",
      }}>

      {/* Botao fechar flutuante — alvo grande, garante a saida no mobile */}
      <button onClick={onClose} aria-label="Fechar" className="lb-close-float" style={{
        position: "fixed", top: 14, right: 14, zIndex: 10001,
        width: 46, height: 46, borderRadius: 9999,
        border: "1px solid rgba(255,255,255,.22)",
        background: "rgba(10,14,30,.9)", backdropFilter: "blur(8px)",
        display: "none", alignItems: "center", justifyContent: "center",
        cursor: "pointer", boxShadow: "0 8px 24px -6px rgba(0,0,0,.6)",
      }}>
        <Icon name="x" size={24} color="#fff" />
      </button>

      {/* Browser window */}
      <div style={{
        width: "100%", maxWidth: 1100,
        height: "calc(100vh - 80px)",
        display: "flex", flexDirection: "column",
        borderRadius: "14px 14px 0 0",
        overflow: "hidden",
        boxShadow: "0 40px 100px -20px rgba(0,0,0,.9)",
        border: "1px solid rgba(255,255,255,.08)",
        borderBottom: "none",
        animation: "lb-slide .32s cubic-bezier(.16,1,.3,1) both",
      }}>

        {/* Chrome bar */}
        <div style={{
          background: "#161B2E",
          borderBottom: "1px solid rgba(255,255,255,.07)",
          padding: "10px 16px",
          display: "flex", alignItems: "center", gap: 10,
          flexShrink: 0,
        }}>
          {/* Traffic lights */}
          <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
            <button onClick={onClose} title="Fechar" style={{
              width: 12, height: 12, borderRadius: "50%", background: "#FF5F57",
              border: "none", cursor: "pointer", padding: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "filter .15s",
            }}
              onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.3)"}
              onMouseLeave={e => e.currentTarget.style.filter = "none"}>
            </button>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E", display: "block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28CA42", display: "block" }} />
          </div>

          {/* URL bar */}
          <div style={{
            flex: 1, background: "rgba(255,255,255,.06)",
            borderRadius: 7, padding: "5px 12px",
            display: "flex", alignItems: "center", gap: 7,
          }}>
            <Icon name="lock" size={10} color="rgba(255,255,255,.3)" />
            <span style={{
              fontSize: 11, color: "rgba(255,255,255,.45)",
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>
              {c.domain || "is7mkt.com.br"}
            </span>
          </div>

          {/* CTA button */}
          <a
            href={wa(`Olá! Vi o projeto ${c.name} no portfólio da IS7 e quero um site assim.`)}
            target="_blank" rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "var(--grad)", borderRadius: 7,
              padding: "5px 14px", fontSize: 11, fontWeight: 700,
              color: "#fff", textDecoration: "none", flexShrink: 0,
              whiteSpace: "nowrap",
            }}>
            Quero assim <Icon name="arrow-right" size={11} />
          </a>

          {/* Close */}
          <button onClick={onClose} style={{
            width: 30, height: 30, borderRadius: 7,
            border: "1px solid rgba(255,255,255,.1)",
            background: "rgba(255,255,255,.05)", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <Icon name="x" size={14} color="rgba(255,255,255,.5)" />
          </button>
        </div>

        {/* Content: iframe or scrollable screenshot */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative", background: c.grad || "#0A0E2E" }}>

          {hasUrl ? (
            <>
              {!loaded && (
                <div style={{
                  position: "absolute", inset: 0, zIndex: 2,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  background: "#0A0E2E", gap: 16,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "3px solid rgba(255,255,255,.1)",
                    borderTopColor: "var(--accent)",
                    animation: "lb-spin 1s linear infinite",
                  }} />
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>Carregando {c.domain}…</span>
                </div>
              )}
              <iframe
                src={c.url}
                title={c.name}
                onLoad={() => setLoaded(true)}
                style={{
                  width: "100%", height: "100%",
                  border: "none", display: "block",
                  opacity: loaded ? 1 : 0, transition: "opacity .3s",
                }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </>
          ) : hasImg ? (
            /* Scrollable screenshot — fundo branco pra parecer um navegador
               (screenshots curtos nao ficam num vao escuro) */
            <div style={{ width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", background: "#fff", textAlign: "center" }}>
              <img
                src={c.img}
                alt={c.name}
                style={{ width: "100%", maxWidth: 1100, display: "inline-block", verticalAlign: "top" }}
              />
            </div>
          ) : (
            /* Mono fallback */
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: c.grad }}>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 900, fontSize: 120, color: "rgba(255,255,255,.12)", letterSpacing: ".06em" }}>{c.mono}</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom label strip */}
      <div style={{
        width: "100%", maxWidth: 1100,
        background: "rgba(22,27,46,.97)",
        borderTop: "1px solid rgba(255,255,255,.07)",
        padding: "12px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backdropFilter: "blur(8px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="tag tag-accent" style={{ fontSize: 10 }}>{c.tag}</span>
          <span style={{ fontSize: 13, fontWeight: 700, fontFamily: "var(--serif)", color: "var(--fg)" }}>{c.name}</span>
          <span style={{ fontSize: 12, color: "var(--fg-dim)" }}>·</span>
          <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>{c.meta}</span>
        </div>
        <a
          href={wa(`Olá! Vi o projeto ${c.name} no portfólio da IS7 e gostaria de saber mais.`)}
          target="_blank" rel="noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 600, color: "var(--accent-bright)",
            textDecoration: "none",
          }}>
          Falar com a IS7 <Icon name="arrow-up-right" size={13} />
        </a>
      </div>

      <style>{`
        @keyframes lb-in    { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lb-slide { from { transform: translateY(24px) scale(.98); opacity: 0 } to { transform: none; opacity: 1 } }
        @keyframes lb-spin  { to { transform: rotate(360deg) } }
        @media (max-width: 600px) {
          .lb-cta-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
};

window.IS7v2 = Object.assign(window.IS7v2, { useLightbox, PortfolioLightbox });
