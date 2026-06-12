(function () {
  "use strict";
  var _v = window.IS7v2;

  // ── About ─────────────────────────────────────────────────────────────────
  var HIGHLIGHTS = [
    { icon: "sparkles",     text: "Especialista em performance digital e SEO" },
    { icon: "package",      text: "80+ sites e lojas virtuais entregues" },
    { icon: "bar-chart",    text: "Gestão de tráfego no Google e Meta Ads" },
    { icon: "shield-check", text: "Suporte pós-entrega e manutenção mensal" },
  ];

  const About = function About() {
    var { Icon, Eyebrow, Reveal, wa } = _v;
    return (
      <section id="sobre" className="section">
        <div className="wrap">
          <div className="grid-2">
            {/* Photo side */}
            <Reveal style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
              <div style={{ position: "relative", width: 320 }}>
                <div style={{
                  borderRadius: 24, overflow: "hidden",
                  border: "1px solid var(--line-2)",
                  boxShadow: "0 30px 60px -20px rgba(0,0,0,.6)",
                }}>
                  <img
                    src="assets/portfolio/guilherme-foto.jpg"
                    alt="Guilherme Llanos"
                    style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4" }}
                  />
                </div>
                {/* Badge */}
                <div className="about-badge" style={{
                  position: "absolute", bottom: -16, right: -16,
                  background: "var(--surface)", border: "1px solid var(--line-2)",
                  borderRadius: 16, padding: "14px 20px",
                  boxShadow: "0 16px 40px -12px rgba(0,0,0,.5)",
                }}>
                  <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 22, lineHeight: 1 }}>6+ anos</p>
                  <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--fg-muted)" }}>de experiência</p>
                </div>
              </div>
            </Reveal>

            {/* Text side */}
            <Reveal delay={60}>
              <Eyebrow>Quem está por trás</Eyebrow>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 8 }}>Guilherme Llanos</h2>
              <p className="tag tag-accent" style={{ marginBottom: 24, display: "inline-flex" }}>Fundador · IS7 Marketing Digital</p>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 12 }}>
                Mais de 6 anos criando sites e gerenciando tráfego pago para pequenas e médias empresas em todo o Brasil.
              </p>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                Já entregamos mais de 80 projetos digitais e gerenciamos mais de R$ 500 mil em anúncios —
                sempre com foco em resultado real para quem contrata.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
                {HIGHLIGHTS.map(function (h, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{
                        width: 38, height: 38, borderRadius: 10,
                        background: "rgba(145,69,230,.15)",
                        border: "1px solid rgba(145,69,230,.25)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <Icon name={h.icon} size={17} color="var(--accent-bright)" />
                      </span>
                      <span style={{ fontSize: 15, color: "var(--fg)" }}>{h.text}</span>
                    </div>
                  );
                })}
              </div>
              <a
                href={wa("Olá Guilherme, vim pelo site da IS7 e quero conversar sobre meu negócio!")}
                target="_blank" rel="noreferrer"
                className="btn btn-primary"
              >
                Falar com o Guilherme <Icon name="arrow-right" size={17} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    );
  };

  // ── FAQ ───────────────────────────────────────────────────────────────────
  var FAQS = [
    {
      q: "Quanto tempo leva para criar meu site?",
      a: "Entre 5 e 15 dias úteis, dependendo da complexidade. Sites de uma página ficam prontos em menos de uma semana após a aprovação do briefing.",
    },
    {
      q: "Quanto custa criar um site?",
      a: "Sites a partir de R$ 600, com domínio e hospedagem inclusos por 1 ano. Lojas virtuais têm orçamento específico conforme o tamanho do catálogo e funcionalidades.",
    },
    {
      q: "Atende clientes fora de Curitiba?",
      a: "Sim! Atendemos todo o Brasil. O processo é 100% online — do briefing à entrega final, tudo funciona via WhatsApp e Google Meet.",
    },
    {
      q: "O site fica bonito no celular?",
      a: "Todos os nossos sites são desenvolvidos mobile-first: pensados primeiro para o celular, depois para o computador. Testamos em vários dispositivos antes da entrega.",
    },
    {
      q: "Preciso pagar hospedagem separada?",
      a: "Não. Nos nossos pacotes de criação, o domínio e a hospedagem por 1 ano já estão inclusos no valor. Depois do primeiro ano, a renovação anual é acessível.",
    },
    {
      q: "Têm suporte depois da entrega?",
      a: "Sim, oferecemos suporte técnico por 30 dias após a entrega. Depois, você pode contratar um plano de manutenção mensal para atualizações contínuas.",
    },
  ];

  const FaqItem = function FaqItem({ faq, index }) {
    var { Icon } = _v;
    var [open, setOpen] = React.useState(false);
    return (
      <div className={"faq-item" + (open ? " open" : "")}>
        <button className="faq-q" onClick={function () { setOpen(function (v) { return !v; }); }}>
          <span>{faq.q}</span>
          <span className="faq-ic">
            <Icon name="plus" size={14} color={open ? "#fff" : "var(--fg-muted)"} />
          </span>
        </button>
        <div className="faq-a" style={{ maxHeight: open ? 400 : 0 }}>
          <div className="inner">{faq.a}</div>
        </div>
      </div>
    );
  };

  const Faq = function Faq() {
    var { Eyebrow, Reveal, wa, Icon } = _v;
    return (
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="grid-2">
            <Reveal>
              <Eyebrow>Dúvidas</Eyebrow>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 20 }}>Perguntas frequentes</h2>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.65, marginBottom: 32 }}>
                Ainda tem dúvidas? Fale diretamente com a gente pelo WhatsApp — respondemos na hora.
              </p>
              <a
                href={wa("Olá, tenho uma dúvida sobre os serviços da IS7!")}
                target="_blank" rel="noreferrer"
                className="btn btn-wa"
              >
                <Icon name="message-circle" size={17} color="#04210F" /> Tirar dúvidas
              </a>
            </Reveal>
            <Reveal delay={60}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {FAQS.map(function (faq, i) {
                  return <FaqItem key={i} faq={faq} index={i} />;
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    );
  };

  Object.assign(window.IS7v2, { About, Faq });
})();
