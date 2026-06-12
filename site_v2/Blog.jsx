(function () {
  "use strict";
  var _v = window.IS7v2;

  // Instagram section — links to profile (Behold API optional)
  const Instagram = function Instagram() {
    var { Icon, Eyebrow, Reveal, wa } = _v;
    var posts = [1, 2, 3, 4, 5, 6];
    return (
      <section className="section-tight">
        <div className="wrap">
          <Reveal style={{ textAlign: "center", marginBottom: 36 }}>
            <Eyebrow center>Instagram</Eyebrow>
            <h2 className="h2" style={{ marginTop: 10, marginBottom: 16 }}>
              Acompanhe nos bastidores
            </h2>
            <p style={{ color: "var(--fg-muted)", fontSize: 15, marginBottom: 24 }}>
              Dicas, cases e novidades sobre marketing digital.
            </p>
            <a
              href="https://instagram.com/is7mkt"
              target="_blank" rel="noreferrer"
              className="btn btn-ghost"
            >
              <Icon name="instagram" size={17} /> @is7mkt
            </a>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
            {posts.map(function (_, i) {
              return (
                <a
                  key={i}
                  href="https://instagram.com/is7mkt"
                  target="_blank" rel="noreferrer"
                  style={{
                    aspectRatio: "1",
                    borderRadius: 10,
                    background: i % 2 === 0
                      ? "linear-gradient(135deg,rgba(145,69,230,.25),rgba(59,108,255,.2))"
                      : "linear-gradient(135deg,rgba(59,108,255,.2),rgba(145,69,230,.18))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden",
                    transition: "transform .3s, filter .3s",
                  }}
                  onMouseEnter={function (e) { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.filter = "brightness(1.15)"; }}
                  onMouseLeave={function (e) { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "brightness(1)"; }}
                >
                  <Icon name="instagram" size={22} color="rgba(255,255,255,.3)" />
                </a>
              );
            })}
          </div>
        </div>
        <style>{`@media(max-width:620px){ #instagram-grid{ grid-template-columns:repeat(3,1fr) !important; } }`}</style>
      </section>
    );
  };

  Object.assign(window.IS7v2, { Instagram });
})();
