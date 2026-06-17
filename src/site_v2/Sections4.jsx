const { Icon, Eyebrow, Reveal, wa } = window.IS7v2;

const CLIENTS = [
  "Curadoria by Nanda", "MK Vinhos", "Degustare Food Truck",
  "Tribbo Street", "Nutri Rafaela", "Barbearia Velozo",
  "Luã Advogado", "Angelo Car", "Soft FAFA",
  "Estética Davi", "Kaue Personal", "Chaveiro Marcos",
];

const ClientDot = ({ name }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
    <span style={{ width: 36, height: 36, borderRadius: 10, background: "var(--grad)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 14, color: "#fff" }}>
      {name.charAt(0)}
    </span>
    <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16, whiteSpace: "nowrap", color: "var(--fg)" }}>{name}</span>
  </div>
);

const Sep = () => (
  <span style={{ width: 6, height: 6, borderRadius: 9999, background: "var(--accent)", opacity: .5, flexShrink: 0 }} />
);

const ClientsStrip = () => (
  <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", overflow: "hidden" }}>
    <div style={{ textAlign: "center", marginBottom: 14 }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--fg-dim)" }}>Empresas que confiam na IS7</span>
    </div>
    <div className="marquee-mask">
      <div className="marquee">
        {[...CLIENTS, ...CLIENTS].map((n, i) => (
          <React.Fragment key={i}><ClientDot name={n} /><Sep /></React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

const BEFORE = [
  "Invisível no Google: seu concorrente aparece, você não",
  "Site desatualizado ou sem site, passando imagem de empresa largada",
  "Sem saber de onde vêm (ou não vêm) os clientes",
  "Dinheiro investido sem estratégia e sem retorno",
  "Atendendo qualquer cliente por falta de posicionamento",
];
const AFTER = [
  "Aparecer na primeira página quando alguém procura pelo seu serviço",
  "Site rápido que converte visita em contato e contato em cliente",
  "Relatórios claros mostrando exatamente o que deu retorno",
  "Tráfego qualificado que traz quem realmente quer comprar",
  "Posicionamento forte que atrai o cliente certo para o seu negócio",
];

const BeforeAfter = () => (
  <section className="section" style={{ background: "var(--bg-2)" }}>
    <div className="glow glow-blue" style={{ width: 400, height: 400, top: 0, right: -200, opacity: .4 }} />
    <div className="wrap">
      <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
        <Eyebrow center>A diferença na prática</Eyebrow>
        <h2 className="h2" style={{ marginTop: 14 }}>Sem IS7 × <span className="grad-text">Com IS7</span></h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 940, margin: "0 auto" }} className="ba-grid">
        <Reveal className="card" style={{ padding: 32, borderColor: "rgba(239,68,68,.22)", background: "rgba(239,68,68,.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ width: 32, height: 32, borderRadius: 9999, background: "rgba(239,68,68,.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="x" size={16} color="#F87171" strokeWidth={2.5} />
            </span>
            <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18 }}>Sem IS7</span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {BEFORE.map((t, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.5 }}>
                <Icon name="x" size={15} color="#F87171" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />{t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="card" style={{ padding: 32, borderColor: "rgba(145,69,230,.38)", background: "linear-gradient(160deg, rgba(145,69,230,.08), rgba(59,108,255,.06))" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ width: 32, height: 32, borderRadius: 9999, background: "var(--grad)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="check" size={16} color="#fff" strokeWidth={2.5} />
            </span>
            <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Com IS7</span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {AFTER.map((t, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "var(--fg)", lineHeight: 1.5 }}>
                <Icon name="check" size={15} color="var(--accent-bright)" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />{t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal style={{ textAlign: "center", marginTop: 36 }}>
        <a href={wa("Olá! Quero transformar a presença digital da minha empresa com a IS7.")} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
          Quero isso para minha empresa <Icon name="arrow-right" size={18} />
        </a>
      </Reveal>
    </div>
    <style>{`@media(max-width:680px){ .ba-grid{ grid-template-columns:1fr !important; } }`}</style>
  </section>
);

const DELIVERABLES = [
  { icon: "palette",        title: "Identidade visual",    desc: "Logo, cores e tipografia para a sua marca ter uma cara profissional." },
  { icon: "monitor",        title: "Site profissional",    desc: "Desenvolvido do zero, rápido, responsivo e otimizado para converter." },
  { icon: "trending-up",    title: "Tráfego pago (Ads)",   desc: "Campanhas de Google Ads gerenciadas com foco em retorno real." },
  { icon: "shopping-bag",   title: "Loja virtual",         desc: "Vitrine completa com catálogo, identidade própria e pedido no WhatsApp." },
  { icon: "headset",        title: "Suporte nas vendas",   desc: "Acompanhamento ativo das vendas, ajustamos estratégias para crescimento constante." },
  { icon: "users",          title: "Consultas estratégicas", desc: "Sessões regulares para alinhar ações, revisar resultados e planejar próximos passos." },
  { icon: "file-bar-chart", title: "Relatórios mensais",   desc: "Dados claros sobre visitas, cliques e resultados todo mês." },
  { icon: "whatsapp",       title: "Suporte via WhatsApp",  desc: "Atendimento próximo e rápido, sem burocracia." },
];

const Deliverables = () => (
  <section className="section">
    <div className="glow glow-purple" style={{ width: 360, height: 360, bottom: -100, left: -120, opacity: .45 }} />
    <div className="wrap">
      <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
        <Eyebrow center>O que você recebe</Eyebrow>
        <h2 className="h2" style={{ marginTop: 14 }}>Tudo que sua empresa precisa para <span className="grad-text">crescer online</span>.</h2>
        <p className="lead" style={{ marginTop: 16 }}>Não vendemos pacote fechado. Montamos a combinação certa para o momento da sua empresa.</p>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, maxWidth: 1100, margin: "0 auto" }} className="del-grid">
        {DELIVERABLES.map((d, i) => (
          <Reveal key={i} delay={(i % 4) * 60} className="card card-hover" style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="chip" style={{ width: 44, height: 44 }}>
              {d.icon === "whatsapp" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent-bright)" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              ) : (
                <Icon name={d.icon} size={20} color="var(--accent-bright)" strokeWidth={1.9} />
              )}
            </span>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16, margin: 0 }}>{d.title}</h3>
            <p style={{ margin: 0, fontSize: 13.5, color: "var(--fg-muted)", lineHeight: 1.55 }}>{d.desc}</p>
          </Reveal>
        ))}
      </div>
      <Reveal style={{ textAlign: "center", marginTop: 40 }}>
        <a href={wa("Olá! Quero saber o que a IS7 pode montar para a minha empresa.")} target="_blank" rel="noreferrer" className="btn btn-primary">
          Montar meu plano personalizado <Icon name="arrow-right" size={18} />
        </a>
      </Reveal>
    </div>
    <style>{`@media(max-width:900px){ .del-grid{ grid-template-columns:repeat(2,1fr) !important; } } @media(max-width:480px){ .del-grid{ grid-template-columns:1fr !important; } }`}</style>
  </section>
);

window.IS7v2 = Object.assign(window.IS7v2, { ClientsStrip, BeforeAfter, Deliverables });
