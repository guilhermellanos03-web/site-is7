(function () {
  "use strict";
  var _v = window.IS7v2;

  // ── Clients strip (marquee) ───────────────────────────────────────────────
  var CLIENTS = [
    "Angelo Car", "Barbearia Velozo", "Curadoria by Nanda",
    "Degustare Food Truck", "Tribbo Street", "RC Soft Service",
    "Luã Advogado", "Chaveiro Assistência 24h", "MK Vinhos",
    "Estética Davi", "Kaue Personal", "Nutri Rafaela",
  ];

  const ClientsStrip = function ClientsStrip() {
    var items = CLIENTS.concat(CLIENTS);
    return (
      <section className="section-tight" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
        <div className="marquee-mask">
          <div className="marquee">
            {items.map(function (c, i) {
              return (
                <span key={i} style={{
                  fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18,
                  color: "var(--fg-dim)", letterSpacing: "-.01em", whiteSpace: "nowrap",
                  display: "flex", alignItems: "center", gap: 56,
                }}>
                  {c}
                  <span style={{ width: 6, height: 6, borderRadius: 9999, background: "var(--accent)", opacity: .7 }} />
                </span>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // ── Footer ────────────────────────────────────────────────────────────────
  const Footer = function Footer() {
    var { Icon, Logo, wa } = _v;
    var links = [
      { href: "#topo", label: "Início" },
      { href: "#servicos", label: "Serviços" },
      { href: "#portfolio", label: "Portfólio" },
      { href: "#sobre", label: "Sobre" },
      { href: "#contato", label: "Contato" },
    ];

    return (
      <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", padding: "64px 0 32px" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <Logo size="large" />
              <p style={{ marginTop: 16, fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.65, maxWidth: 260 }}>
                Assessoria de marketing digital para pequenas e médias empresas.
                Sites, lojas e tráfego pago que geram resultado real.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <a
                  href="https://instagram.com/guilherme.is7"
                  target="_blank" rel="noreferrer"
                  style={{ width: 36, height: 36, borderRadius: 9999, background: "rgba(255,255,255,.06)", border: "1px solid var(--line-2)", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Icon name="instagram" size={16} color="var(--fg-muted)" />
                </a>
                <a
                  href={wa("Olá, vim pelo site da IS7!")}
                  target="_blank" rel="noreferrer"
                  style={{ width: 36, height: 36, borderRadius: 9999, background: "rgba(255,255,255,.06)", border: "1px solid var(--line-2)", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Icon name="message-circle" size={16} color="var(--fg-muted)" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-dim)", marginBottom: 20 }}>Navegação</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(function (l) {
                  return (
                    <a key={l.href} href={l.href} style={{ fontSize: 14, color: "var(--fg-muted)", transition: "color .2s" }}
                      onMouseEnter={function (e) { e.currentTarget.style.color = "var(--fg)"; }}
                      onMouseLeave={function (e) { e.currentTarget.style.color = "var(--fg-muted)"; }}
                    >
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-dim)", marginBottom: 20 }}>Contato</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a
                  href={wa("Olá!")}
                  target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--fg-muted)" }}
                >
                  <Icon name="message-circle" size={15} color="var(--wa)" />
                  +55 (41) 98743-0349
                </a>
                <a
                  href="mailto:suporte@is7mkt.com.br"
                  style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--fg-muted)" }}
                >
                  <Icon name="mail" size={15} color="var(--accent-bright)" />
                  suporte@is7mkt.com.br
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon name="map-pin" size={15} color="var(--fg-dim)" />
                  <span style={{ fontSize: 14, color: "var(--fg-muted)" }}>Curitiba, PR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hair" />
          <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ margin: 0, fontSize: 13, color: "var(--fg-dim)" }}>
              © {new Date().getFullYear()} IS7 Marketing Digital · CNPJ 50.201.864/0001-40
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "var(--fg-dim)" }}>
              is7mkt.com.br
            </p>
          </div>
        </div>
        <style>{`
          @media(max-width:700px){
            footer .wrap > div:first-child{ grid-template-columns:1fr !important; }
          }
        `}</style>
      </footer>
    );
  };

  // ── WhatsApp FAB ──────────────────────────────────────────────────────────
  const WhatsAppFab = function WhatsAppFab() {
    var { wa } = _v;
    return (
      <a
        href={wa("Olá, vim pelo site da IS7 e quero saber mais!")}
        target="_blank" rel="noreferrer"
        className="fab"
        aria-label="Falar no WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    );
  };

  Object.assign(window.IS7v2, { ClientsStrip, Footer, WhatsAppFab });
})();
