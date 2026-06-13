(function () {
  "use strict";
  var _v = window.IS7v2;

  // Instagram — posts reais via Behold (guilherme.is7)
  var IG_AVATAR = "https://cdn2.behold.pictures/CY8U1E0lbNYFtqkZ8Cj4lANgm4d2/17841460136562134/profile.webp";
  var IG_URL    = "https://instagram.com/guilherme.is7";

  var IG_POSTS = [
    { permalink: "https://www.instagram.com/p/DYsW8cVlhOr/", img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODAzMzU3MjgyODgwNzQwNyIsImgiOiIxZWU1OHJuIn0.jpg?class=originalSmall" },
    { permalink: "https://www.instagram.com/p/DYOFC6RjZSZ/", img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODEwNDU4MDQyNDk0Njg4MCIsImgiOiIxYXFwZHMxIn0.jpg?class=originalSmall" },
    { permalink: "https://www.instagram.com/p/DX1lEy4iFgi/", img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODA3OTI0NjgzMjQzMjYwMCIsImgiOiIxeWF4YmV2In0.jpg?class=originalSmall" },
    { permalink: "https://www.instagram.com/p/DXzAWOpDNyw/", img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxNzk3MzY4MDEzOTAyMDg5MyIsImgiOiJvaXNndXQifQ.jpg?class=originalSmall" },
    { permalink: "https://www.instagram.com/p/DXwbogrEwbU/", img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODExNTk1NTkwNTY4NzAxMCIsImgiOiJkYnE2aCJ9.jpg?class=originalSmall" },
    { permalink: "https://www.instagram.com/p/DXt2sYIER-K/", img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODA2NTMyMjUwMzY5NTEzNiIsImgiOiJocDI2cjgifQ.jpg?class=originalSmall" },
  ];

  const Instagram = function Instagram() {
    var { Icon, Eyebrow, Reveal } = _v;
    return (
      <section className="section-tight">
        <div className="wrap">
          <Reveal style={{ marginBottom: 28 }}>
            <Eyebrow center>Instagram</Eyebrow>
            <h2 className="h2" style={{ textAlign: "center", marginTop: 10, marginBottom: 24 }}>
              Acompanhe nos bastidores
            </h2>

            {/* Perfil */}
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              <img
                src={IG_AVATAR}
                alt="@guilherme.is7"
                style={{ width: 62, height: 62, borderRadius: 9999, objectFit: "cover", border: "2px solid var(--line-2)", flexShrink: 0 }}
              />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>@guilherme.is7</span>
                </div>
                <div style={{ display: "flex", gap: 14, fontSize: 13, color: "var(--fg-muted)" }}>
                  <span><strong style={{ color: "var(--fg)" }}>6</strong> publicações</span>
                  <span><strong style={{ color: "var(--fg)" }}>883</strong> seguidores</span>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.4 }}>
                  Assessoria de marketing digital para empresas de serviço
                </p>
              </div>
            </div>
          </Reveal>

          {/* Grid de posts */}
          <div className="ig-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
            {IG_POSTS.map(function (p, i) {
              return (
                <a
                  key={i}
                  href={p.permalink}
                  target="_blank" rel="noreferrer"
                  style={{ display: "block", aspectRatio: "1", borderRadius: 8, overflow: "hidden" }}
                >
                  <img
                    src={p.img}
                    alt={"Post " + (i + 1)}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .35s, opacity .25s" }}
                    onMouseEnter={function (e) { e.currentTarget.style.transform = "scale(1.07)"; e.currentTarget.style.opacity = ".85"; }}
                    onMouseLeave={function (e) { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = "1"; }}
                  />
                </a>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Icon name="instagram" size={17} /> Seguir no Instagram
            </a>
          </div>
        </div>
        <style>{`@media(max-width:620px){ .ig-grid{ grid-template-columns:repeat(3,1fr) !important; } }`}</style>
      </section>
    );
  };

  Object.assign(window.IS7v2, { Instagram });
})();
