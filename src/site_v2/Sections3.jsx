const { Icon, Eyebrow, Reveal, wa } = window.IS7v2;

/* ---------------- ABOUT ---------------- */
const HIGHLIGHTS = [
  { icon: "map-pin", label: "Curitiba / PR" },
  { icon: "briefcase", label: "+100 projetos" },
  { icon: "calendar-days", label: "5+ anos" },
];

const About = () => (
  <section id="sobre" className="section" style={{ background: "var(--bg-2)" }}>
    <div className="wrap">
      <div className="grid-2" style={{ gap: 64 }}>
        <Reveal style={{ position: "relative" }}>
          <div className="glow glow-purple" style={{ width: 320, height: 320, top: -40, left: -40, opacity: .55 }} />
          <div className="card" style={{ position: "relative", padding: 10, borderRadius: 24, overflow: "hidden" }}>
            <img
              src="assets/portfolio/guilherme-foto.webp"
              alt="Guilherme Llanos, Gestor IS7"
              style={{ width: "100%", aspectRatio: "4/5", display: "block", borderRadius: 16, objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <div className="card about-badge" style={{ position: "absolute", bottom: -22, right: -16, padding: "16px 20px", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 12 }}>
            <span className="chip" style={{ width: 40, height: 40 }}><Icon name="badge-check" size={20} color="var(--accent-bright)" /></span>
            <div><p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>Guilherme Llanos</p><p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)" }}>Gestor · IS7 Marketing</p></div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Quem está por trás</Eyebrow>
          <h2 className="h2" style={{ marginTop: 16 }}>Gente de verdade cuidando do seu <span className="grad-text">resultado</span>.</h2>
          <p className="lead" style={{ marginTop: 20 }}>
            À frente da IS7 está <strong style={{ color: "var(--fg)" }}>Guilherme Llanos</strong>, gestor com mais de 5 anos de experiência em marketing digital, de Curitiba para todo o Brasil.
          </p>
          <p style={{ marginTop: 16, color: "var(--fg-muted)", fontSize: 15.5, lineHeight: 1.7 }}>
            Com foco em resultado real, Guilherme lidera uma operação que já ajudou dezenas de empresas a aparecerem no Google, terem sites que convertem e venderem mais pela internet. O acompanhamento é próximo, as estratégias são ajustadas continuamente e o compromisso sempre é com o crescimento do cliente.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
            {HIGHLIGHTS.map((h, i) => (
              <span key={i} className="tag" style={{ padding: "9px 15px", fontSize: 12.5 }}>
                <Icon name={h.icon} size={14} color="var(--accent-bright)" />{h.label}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href={wa("Olá, Guilherme! Quero conversar sobre a presença digital da minha empresa.")} target="_blank" rel="noreferrer" className="btn btn-primary">
              Conversar com a IS7 <Icon name="arrow-right" size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ---------------- FAQ ---------------- */
const QA = [
  { q: "Em quanto tempo minha empresa começa a aparecer no Google?", a: "Depende do ponto de partida, mas com o Perfil da Empresa no Google otimizado os primeiros resultados costumam aparecer já nas primeiras semanas. O posicionamento orgânico é construído de forma contínua e duradoura." },
  { q: "Vocês atendem empresas fora de Curitiba?", a: "Sim! Somos de Curitiba, mas atendemos clientes em todo o Brasil. Todo o atendimento pode ser feito de forma online, com a mesma proximidade." },
  { q: "Vocês fazem site e loja virtual também?", a: "Fazemos. Criamos sites profissionais e lojas virtuais com identidade própria, otimizados para celular e prontos para transformar visitas em clientes, com pedido direto no WhatsApp quando faz sentido." },
  { q: "O que está incluído na assessoria da IS7?", a: "A assessoria cuida do marketing do seu negócio de ponta a ponta: posicionamento no Google e Perfil da Empresa no Google, criação e manutenção de site ou loja virtual, identidade visual, tráfego pago quando faz sentido e acompanhamento próximo com relatórios mensais. Você tem um time inteiro olhando pela sua presença digital." },
  { q: "Como funciona o primeiro contato?", a: "É só chamar no WhatsApp. Fazemos um diagnóstico gratuito da sua presença digital, entendemos o seu objetivo e montamos uma proposta sob medida, sem compromisso." },
];

const FaqItem = ({ item, open, onToggle }) => {
  const ref = React.useRef(null);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="faq-ic"><Icon name="plus" size={16} color={open ? "#fff" : "var(--accent-bright)"} /></span>
      </button>
      <div className="faq-a" style={{ maxHeight: open && ref.current ? ref.current.scrollHeight + 24 : 0 }}>
        <div className="inner" ref={ref}>{item.a}</div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="section">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow center>Perguntas frequentes</Eyebrow>
          <h2 className="h2" style={{ marginTop: 14 }}>Ainda com dúvidas?</h2>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {QA.map((item, i) => (
            <Reveal key={i} delay={i * 50}>
              <FaqItem item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
        <Reveal style={{ textAlign: "center", marginTop: 36 }}>
          <p className="muted" style={{ marginBottom: 16 }}>Não achou sua pergunta?</p>
          <a href={wa("Olá! Tenho uma dúvida sobre os serviços da IS7.")} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Perguntar no WhatsApp <Icon name="message-circle" size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

window.IS7v2 = Object.assign(window.IS7v2, { About, Faq });
