const { Logo, Icon, Eyebrow, Reveal, wa, WAPP } = window.IS7v2;

const Contact = () => {
  const [form, setForm] = React.useState({ nome: "", whatsapp: "", segmento: "" });
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section id="contato" className="section" style={{ position: "relative", overflow: "hidden", background: "var(--bg-2)" }}>
      <div className="glow glow-purple" style={{ width: 480, height: 480, top: -160, left: "50%", transform: "translateX(-50%)", opacity: .5 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
          <Eyebrow center>Vamos começar</Eyebrow>
          <h2 className="h2" style={{ marginTop: 16 }}>Pronto para vender mais <span className="grad-text">pela internet?</span></h2>
          <p className="lead" style={{ marginTop: 16 }}>Receba um diagnóstico gratuito da presença digital da sua empresa. Sem compromisso, com gente de verdade.</p>
        </Reveal>

        <div className="grid-2" style={{ maxWidth: 940, margin: "0 auto", gap: 24, alignItems: "stretch" }}>
          <Reveal className="card wa-card" style={{ padding: 36, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center", background: "linear-gradient(160deg, rgba(37,211,102,.10), rgba(14,20,38,.6))", borderColor: "rgba(37,211,102,.3)" }}>
            <span style={{ width: 64, height: 64, borderRadius: 9999, background: "rgba(37,211,102,.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg viewBox="0 0 32 32" style={{ width: 32, height: 32, fill: "var(--wa)" }}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z"/></svg>
            </span>
            <h3 className="h3" style={{ fontWeight: 800 }}>Fale agora pelo WhatsApp</h3>
            <p className="muted" style={{ margin: "10px 0 24px", fontSize: 14.5 }}>Resposta rápida, direta com nosso especialista. O jeito mais ágil de começar.</p>
            <a href={wa("Olá! Quero meu diagnóstico gratuito com a IS7.")} target="_blank" rel="noreferrer" className="btn btn-wa btn-lg">Chamar no WhatsApp</a>
          </Reveal>

          <Reveal delay={100} className="card" style={{ padding: 36 }}>
            <h3 className="h3" style={{ fontWeight: 800, textAlign: "center" }}>Prefere que a gente te chame?</h3>
            <p className="muted" style={{ margin: "10px 0 24px", fontSize: 14.5, textAlign: "center" }}>Deixe seus dados e entramos em contato.</p>
            {sent ? (
              <div style={{ textAlign: "center", padding: "28px 0" }}>
                <span style={{ width: 56, height: 56, borderRadius: 9999, background: "var(--grad)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}><Icon name="check" size={26} color="#fff" strokeWidth={3} /></span>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 17 }}>Recebemos seus dados!</p>
                <p className="muted" style={{ margin: "6px 0 0", fontSize: 14 }}>Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input className="inp" placeholder="Seu nome" required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
                <input className="inp" type="tel" placeholder="WhatsApp" required value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} />
                <input className="inp" placeholder="Segmento (ex: clínica, loja, restaurante)" value={form.segmento} onChange={e => setForm({ ...form, segmento: e.target.value })} />
                <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 4 }}>Quero meu diagnóstico gratuito</button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const FOOT = {
  servicos: [["#servicos", "Posicionamento no Google"], ["#servicos", "Sites profissionais"], ["#servicos", "Lojas virtuais"], ["#servicos", "Tráfego pago"]],
  links: [["#cases", "Cases"], ["#sobre", "Sobre"], ["#faq", "FAQ"], ["#contato", "Contato"]],
};

const Footer = () => (
  <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", paddingTop: 64, paddingBottom: 30 }}>
    <div className="wrap">
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr", gap: 40 }} className="foot-grid">
        <div>
          <Logo size={30} />
          <p className="muted" style={{ maxWidth: 280, margin: "16px 0 20px", fontSize: 14, lineHeight: 1.65 }}>
            Assessoria de marketing digital em Curitiba. Presença digital e suporte nas vendas para o seu negócio crescer de verdade.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {[["instagram", "https://www.instagram.com/guilherme.is7/"], ["message-circle", WAPP], ["mail", "mailto:guilherme@is7mkt.com.br"]].map(([ic, href], i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" style={{ width: 40, height: 40, borderRadius: 9999, border: "1px solid var(--line-2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg-muted)" }}>
                <Icon name={ic} size={17} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-bright)", marginBottom: 16 }}>Serviços</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
            {FOOT.servicos.map(([h, l], i) => <li key={i}><a href={h} className="muted" style={{ fontSize: 14 }}>{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-bright)", marginBottom: 16 }}>Navegação</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
            {FOOT.links.map(([h, l], i) => <li key={i}><a href={h} className="muted" style={{ fontSize: 14 }}>{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-bright)", marginBottom: 16 }}>Contato</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11, fontSize: 14 }}>
            <li><a href={WAPP} target="_blank" rel="noreferrer" className="muted">(41) 98743-0349</a></li>
            <li><a href="mailto:guilherme@is7mkt.com.br" className="muted">guilherme@is7mkt.com.br</a></li>
            <li><a href="https://www.instagram.com/guilherme.is7/" target="_blank" rel="noreferrer" className="muted">@guilherme.is7</a></li>
          </ul>
        </div>
      </div>
      <hr className="hair" style={{ margin: "44px 0 22px" }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ margin: 0, fontSize: 12, color: "var(--fg-dim)" }}>CNPJ 50.201.864/0001-40 · IS7 Mídias Digitais</p>
        <p style={{ margin: 0, fontSize: 12, color: "var(--fg-dim)" }}>© 2026 IS7 · Todos os direitos reservados</p>
      </div>
    </div>
    <style>{`@media (max-width:820px){ .foot-grid{ grid-template-columns:1fr 1fr !important; gap:32px !important; } } @media (max-width:480px){ .foot-grid{ grid-template-columns:1fr !important; } }`}</style>
  </footer>
);

window.IS7v2 = Object.assign(window.IS7v2, { Contact, Footer });
