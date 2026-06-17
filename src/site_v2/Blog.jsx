const { Icon, Eyebrow, Reveal, wa } = window.IS7v2;

/* ─────────────────────────────────────────────────────────────
   INSTAGRAM FEED — live via Behold API with hardcoded fallback
   ───────────────────────────────────────────────────────────── */
const FEED_ID = "SNO1nnTWh9gUznjFD59u";
const IG_URL  = "https://www.instagram.com/guilherme.is7/";

const FALLBACK_POSTS = [
  {
    id: "18033572828807407",
    permalink: "https://www.instagram.com/p/DYsW8cVlhOr/",
    img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODAzMzU3MjgyODgwNzQwNyIsImgiOiIxZWU1OHJuIn0.jpg?class=originalMedium",
    caption: "Quando o cliente pesquisa seu serviço no Google, ele vê 10 opções. Não liga pra todas. Liga pro primeiro que aparece.",
    likes: 4, isCarousel: true,
  },
  {
    id: "18104580424946880",
    permalink: "https://www.instagram.com/p/DYOFC6RjZSZ/",
    img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODEwNDU4MDQyNDk0Njg4MCIsImgiOiIxYXFwZHMxIn0.jpg?class=originalMedium",
    caption: "Perfil da Empresa no Google desatualizado é pior que não ter Perfil da Empresa no Google. Foto antiga. Horário errado. Sem posts há 6 meses.",
    likes: 3, isCarousel: true,
  },
  {
    id: "18079246832432600",
    permalink: "https://www.instagram.com/p/DX1lEy4iFgi/",
    img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODA3OTI0NjgzMjQzMjYwMCIsImgiOiIxeWF4YmV2In0.jpg?class=originalMedium",
    caption: "Enquanto você pensa, seu concorrente age. Ele já tem site profissional. Ele já aparece no Google. Ele já recebe ligações.",
    likes: 1, isCarousel: true,
  },
  {
    id: "17973680139020893",
    permalink: "https://www.instagram.com/p/DXzAWOpDNyw/",
    img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxNzk3MzY4MDEzOTAyMDg5MyIsImgiOiJvaXNndXQifQ.jpg?class=originalMedium",
    caption: "Seu site tem essas 5 coisas? Se não tem, ele tá bonito mas não tá vendendo.",
    likes: 2, isCarousel: true,
  },
  {
    id: "18115955905687010",
    permalink: "https://www.instagram.com/p/DXwbogrEwbU/",
    img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODExNTk1NTkwNTY4NzAxMCIsImgiOiJkYnE2aCJ9.jpg?class=originalMedium",
    caption: "Seu site carrega em quantos segundos? Se demora mais de 3, você já perdeu 53% dos visitantes.",
    likes: 1, isCarousel: true,
  },
  {
    id: "18065322503695136",
    permalink: "https://www.instagram.com/p/DXt2sYIER-K/",
    img: "https://hop.behold.pictures/eyJ1IjoiQ1k4VTFFMGxiTllGdHFrWjhDajRsQU5nbTRkMiIsImYiOiJTTk8xbm5UV2g5Z1V6bmpGRDU5dSIsInAiOiIxODA2NTMyMjUwMzY5NTEzNiIsImgiOiJocDI2cjgifQ.jpg?class=originalMedium",
    caption: "96% dos brasileiros pesquisam no Google antes de ligar. O que eles encontram sobre o seu negócio?",
    likes: 2, isCarousel: true,
  },
];

const normalizePost = (p) => ({
  id:        p.id,
  permalink: p.permalink,
  img:       (p.sizes && p.sizes.medium && p.sizes.medium.mediaUrl) || (p.children && p.children[0] && p.children[0].sizes && p.children[0].sizes.medium && p.children[0].sizes.medium.mediaUrl) || p.mediaUrl,
  caption:   p.prunedCaption || p.caption || "",
  likes:     p.likeCount || 0,
  isCarousel: p.mediaType === "CAROUSEL_ALBUM",
});

const InstagramPost = ({ post, index }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Reveal delay={(index % 3) * 60}>
      <a href={post.permalink} target="_blank" rel="noreferrer"
         className="ig-card"
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         style={{ display: "block", position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "1/1", background: "var(--surface-2)" }}>
        <img src={post.img} alt={post.caption.slice(0, 60)} loading="lazy"
             style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .4s ease", transform: hovered ? "scale(1.07)" : "scale(1)" }} />
        {/* hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(7,10,20,.0) 0%, rgba(7,10,20,.88) 100%)",
          opacity: hovered ? 1 : 0, transition: "opacity .3s",
          display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 16,
        }}>
          <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,.92)", lineHeight: 1.5,
                      display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {post.caption}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
            {post.isCarousel && (
              <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,.7)" }}>
                <Icon name="layers" size={13} />carrossel
              </span>
            )}
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,.7)", marginLeft: "auto" }}>
              <Icon name="heart" size={13} />{post.likes}
            </span>
          </div>
        </div>
        {/* carousel indicator */}
        {post.isCarousel && !hovered && (
          <span style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,.5)", borderRadius: 6, padding: "3px 7px", display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name="layers" size={13} color="white" />
          </span>
        )}
      </a>
    </Reveal>
  );
};

const Instagram = () => {
  const [posts, setPosts] = React.useState(FALLBACK_POSTS);

  React.useEffect(() => {
    fetch(`https://feeds.behold.so/${FEED_ID}`)
      .then(r => r.json())
      .then(data => { if (Array.isArray(data) && data.length) setPosts(data.slice(0, 6).map(normalizePost)); })
      .catch(() => {/* keep fallback */});
  }, []);

  return (
    <section id="instagram" className="section" style={{ background: "var(--bg)" }}>
      <div className="glow glow-purple" style={{ width: 380, height: 380, bottom: -120, left: -120, opacity: .35 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Reveal style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <a href={IG_URL} target="_blank" rel="noreferrer" style={{ flexShrink: 0 }}>
              <div style={{ width: 64, height: 64, borderRadius: 9999, background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", padding: 2 }}>
                <img src="https://cdn2.behold.pictures/CY8U1E0lbNYFtqkZ8Cj4lANgm4d2/17841460136562134/profile.webp"
                     alt="Guilherme IS7" style={{ width: "100%", height: "100%", borderRadius: 9999, objectFit: "cover", border: "2px solid var(--bg)" }} />
              </div>
            </a>
            <div>
              <Eyebrow style={{ marginBottom: 4 }}>Instagram</Eyebrow>
              <a href={IG_URL} target="_blank" rel="noreferrer"
                 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 20, color: "var(--fg)", textDecoration: "none" }}>
                @guilherme.is7
              </a>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--fg-muted)" }}>Dicas diárias de marketing digital para empresas</p>
            </div>
          </div>
          <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <Icon name="instagram" size={17} /> Seguir no Instagram
          </a>
        </Reveal>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="ig-grid">
          {posts.map((p, i) => <InstagramPost key={p.id || i} post={p} index={i} />)}
        </div>

        <Reveal style={{ textAlign: "center", marginTop: 32 }}>
          <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Ver todos os posts <Icon name="external-link" size={16} />
          </a>
        </Reveal>
      </div>
      <style>{`
        @media(max-width:680px){ .ig-grid{ grid-template-columns:repeat(3,1fr) !important; } .ig-grid > *:nth-child(n+4){ display:none !important; } }
        [data-theme="light"] .ig-card img{ filter:none; }
      `}</style>
    </section>
  );
};

window.IS7v2 = Object.assign(window.IS7v2, { Instagram });
