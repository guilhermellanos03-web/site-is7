(function () {
  "use strict";
  var _v = window.IS7v2;

  const PortfolioLightbox = function PortfolioLightbox({ project, c, onClose }) {
    var { Icon, wa } = _v;
    // Accept either 'project' or 'c' prop (portfolio page uses 'c')
    project = project || c;

    // Close on ESC
    React.useEffect(function () {
      function onKey(e) { if (e.key === "Escape") onClose(); }
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return function () {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }, []);

    if (!project) return null;

    var waMsg = "Olá, vi o site da " + project.name + " no portfólio da IS7 e quero algo similar!";

    return (
      <div
        onClick={function (e) { if (e.target === e.currentTarget) onClose(); }}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(5,8,20,.88)",
          backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 20,
        }}
      >
        <div style={{
          width: "100%", maxWidth: 900,
          background: "var(--surface)",
          borderRadius: 20,
          border: "1px solid var(--line-2)",
          overflow: "hidden",
          display: "flex", flexDirection: "column",
          maxHeight: "90vh",
          boxShadow: "0 40px 80px -20px rgba(0,0,0,.8)",
        }}>
          {/* Browser bar */}
          <div style={{
            background: "var(--bg-2)",
            padding: "10px 16px",
            display: "flex", alignItems: "center", gap: 10,
            borderBottom: "1px solid var(--line)",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", gap: 6 }}>
              <button onClick={onClose} style={{ width: 12, height: 12, borderRadius: 9999, background: "rgba(248,113,113,.85)", border: 0, cursor: "pointer", padding: 0 }} title="Fechar" />
              <span style={{ width: 12, height: 12, borderRadius: 9999, background: "rgba(250,204,21,.6)", display: "block" }} />
              <span style={{ width: 12, height: 12, borderRadius: 9999, background: "rgba(74,222,128,.5)", display: "block" }} />
            </div>
            <div style={{
              flex: 1, background: "rgba(255,255,255,.06)", borderRadius: 8, height: 28,
              display: "flex", alignItems: "center", padding: "0 10px", gap: 6,
            }}>
              <Icon name="lock" size={10} color="var(--fg-muted)" />
              <span style={{ fontSize: 12, color: "var(--fg-muted)", fontFamily: "var(--mono)" }}>
                {project.domain || project.name.toLowerCase().replace(/\s+/g, "") + ".com.br"}
              </span>
            </div>
            {project.domain && (
              <a
                href={"https://" + project.domain}
                target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--accent-bright)", fontSize: 12, fontWeight: 600 }}
              >
                Abrir site <Icon name="external-link" size={13} color="var(--accent-bright)" />
              </a>
            )}
            <button onClick={onClose} style={{ background: "transparent", border: 0, color: "var(--fg-muted)", cursor: "pointer", padding: 4, display: "flex" }}>
              <Icon name="x" size={18} />
            </button>
          </div>

          {/* Content: iframe or screenshot */}
          <div style={{ flex: 1, overflow: "auto", minHeight: 0 }}>
            {project.url ? (
              <iframe
                src={project.url}
                style={{ width: "100%", height: "100%", minHeight: 480, border: 0 }}
                title={project.name}
              />
            ) : project.img ? (
              <div style={{ overflow: "auto", maxHeight: "60vh" }}>
                <img src={project.img} alt={project.name} style={{ width: "100%", display: "block" }} />
              </div>
            ) : (
              <div style={{
                minHeight: 280, background: project.grad || "var(--surface-2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 72, color: "rgba(255,255,255,.7)", letterSpacing: ".06em" }}>
                  {project.mono || project.name[0]}
                </span>
              </div>
            )}
          </div>

          {/* Footer bar */}
          <div style={{
            padding: "14px 20px",
            borderTop: "1px solid var(--line)",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
            flexShrink: 0, flexWrap: "wrap",
          }}>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 16 }}>{project.name}</p>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: "var(--fg-muted)" }}>{project.meta}</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="tag tag-accent">{project.tag}</span>
              <a
                href={wa(waMsg)}
                target="_blank" rel="noreferrer"
                className="btn btn-wa"
                style={{ padding: "9px 18px", fontSize: 13 }}
              >
                <Icon name="message-circle" size={15} color="#04210F" /> Quero assim
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  Object.assign(window.IS7v2, { PortfolioLightbox });
})();
