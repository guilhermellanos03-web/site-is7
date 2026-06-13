(function () {
  "use strict";
  var _v = window.IS7v2;

  // ── About ─────────────────────────────────────────────────────────────────
  var ABOUT_CHIPS = [
    { icon: "map-pin",       label: "Curitiba / PR" },
    { icon: "package",       label: "+80 Projetos" },
    { icon: "calendar-days", label: "6+ Anos" },
  ];

  const About = function About() {
    var { Icon, Eyebrow, Reveal, wa } = _v;
    return (
      <section id="sobre" className="section">
        <div className="wrap">
          <div className="grid-2">
            {/* Photo side */}
            <Reveal style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
              <div style={{ position: "relative", width: 320, maxWidth: "100%" }}>
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
                {/* Name badge sobreposto na foto */}
                <div style={{
                  position: "absolute", bottom: 20, left: 16, right: 16,
                  background: "rgba(8,10,24,.82)", backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,.10)",
                  borderRadius: 14, padding: "13px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                  boxShadow: "0 8px 32px -8px rgba(0,0,0,.5)",
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 9999,
                    background: "var(--grad)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: 16, fontWeight: 800, color: "#fff",
                  }}>G</div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "#fff" }}>Guilherme Llanos</p>
                    <p style={{ margin: "2px 0 0", fontSize: 12, color: "rgba(255,255,255,.55)" }}>Gestor · IS7 Marketing</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text side */}
            <Reveal delay={60}>
              <Eyebrow>Quem está por trás</Eyebrow>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 20 }}>
                Gente de verdade cuidando do seu <span className="grad-text">resultado.</span>
              </h2>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
                À frente da IS7 está <strong style={{ color: "var(--fg)" }}>Guilherme Llanos</strong>, gestor com mais de 6 anos de experiência em marketing digital, de Curitiba para todo o Brasil.
              </p>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                Com foco em resultado real, Guilherme lidera uma operação que já ajudou dezenas de empresas a aparecerem no Google, terem sites que convertem e venderem mais pela internet. O acompanhamento é próximo, as estratégias são ajustadas continuamente e o compromisso sempre é com o crescimento do cliente.
              </p>
              {/* Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                {ABOUT_CHIPS.map(function (c, i) {
                  return (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      background: "var(--surface)", border: "1px solid var(--line-2)",
                      borderRadius: 9999, padding: "8px 16px",
                      fontSize: 12, fontWeight: 700, letterSpacing: ".06em",
                      color: "var(--fg-muted)", textTransform: "uppercase",
                    }}>
                      <Icon name={c.icon} size={13} color="var(--accent-bright)" />
                      {c.label}
                    </div>
                  );
                })}
              </div>
              <a
                href={wa("Olá Guilherme, vim pelo site da IS7 e quero conversar sobre meu negócio!")}
                target="_blank" rel="noreferrer"
                className="btn btn-primary"
              >
                Conversar com a IS7 <Icon name="arrow-right" size={17} />
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
      a: "O investimento varia conforme o projeto. Cada orçamento é personalizado de acordo com o que o seu negócio precisa. Entre em contato e receba uma proposta sem compromisso.",
    },
    {
      q: "Atende clientes fora de Curitiba?",
      a: "Sim! Atendemos todo o Brasil. O processo é 100% online, do briefing à entrega. Tudo funciona via WhatsApp e Google Meet.",
    },
    {
      q: "O site fica bonito no celular?",
      a: "Todos os nossos sites são desenvolvidos mobile-first: pensados primeiro para o celular, depois para o computador. Testamos em vários dispositivos antes da entrega.",
    },
    {
      q: "Preciso pagar hospedagem separada?",
      a: "Não. Domínio e hospedagem por 1 ano já estão inclusos na criação do site. Depois do primeiro ano, a renovação é feita diretamente com a plataforma de hospedagem.",
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
      <section id="faq" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="grid-2">
            <Reveal>
              <Eyebrow>Dúvidas</Eyebrow>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 20 }}>Perguntas frequentes</h2>
              <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.65, marginBottom: 32 }}>
                Ainda tem dúvidas? Fale com a gente pelo WhatsApp. Respondemos em minutos.
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
