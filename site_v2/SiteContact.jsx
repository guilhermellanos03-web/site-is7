(function () {
  "use strict";
  var _v = window.IS7v2;

  const Contact = function Contact() {
    var { Icon, Eyebrow, Reveal, wa } = _v;
    var [form, setForm] = React.useState({ nome: "", email: "", whatsapp: "", servico: "", mensagem: "" });
    var [sent, setSent] = React.useState(false);

    function set(k) {
      return function (e) { setForm(function (f) { return Object.assign({}, f, { [k]: e.target.value }); }); };
    }

    function handleSubmit(e) {
      e.preventDefault();
      var msg = "Olá, vim pelo site da IS7!\n\n"
        + "Nome: " + form.nome + "\n"
        + "E-mail: " + form.email + "\n"
        + "WhatsApp: " + form.whatsapp + "\n"
        + "Interesse: " + form.servico + "\n"
        + (form.mensagem ? "\nMensagem: " + form.mensagem : "")
        + "\n\nQuero saber mais!";
      window.open(wa(msg), "_blank");
      setSent(true);
    }

    var info = [
      { icon: "message-circle", label: "WhatsApp", value: "+55 (41) 98743-0349", href: wa("Olá, vim pelo site da IS7!") },
      { icon: "mail",           label: "E-mail",   value: "suporte@is7mkt.com.br", href: "mailto:suporte@is7mkt.com.br" },
      { icon: "map-pin",        label: "Localização", value: "Curitiba — PR", href: null },
    ];

    return (
      <section id="contato" className="section">
        <div className="wrap">
          <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow center>Contato</Eyebrow>
            <h2 className="h2" style={{ marginTop: 12 }}>Pronto para começar?</h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
              Descreva seu projeto e receba uma proposta personalizada em até 24 horas.
            </p>
          </Reveal>

          <div className="grid-2">
            {/* Form */}
            <Reveal>
              <div className="card" style={{ padding: 36 }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <span style={{ fontSize: 48 }}>🎉</span>
                    <h3 style={{ marginTop: 16, marginBottom: 8 }}>Mensagem enviada!</h3>
                    <p style={{ color: "var(--fg-muted)" }}>Abrimos o WhatsApp com seus dados. Responderemos em breve!</p>
                    <button
                      onClick={function () { setSent(false); setForm({ nome: "", email: "", whatsapp: "", servico: "", mensagem: "" }); }}
                      className="btn btn-ghost"
                      style={{ marginTop: 20 }}
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 13, color: "var(--fg-muted)", marginBottom: 6 }}>Nome completo *</label>
                        <input className="inp" value={form.nome} onChange={set("nome")} placeholder="Seu nome" required />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 13, color: "var(--fg-muted)", marginBottom: 6 }}>WhatsApp *</label>
                        <input className="inp" value={form.whatsapp} onChange={set("whatsapp")} placeholder="(41) 9 0000-0000" required />
                      </div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontSize: 13, color: "var(--fg-muted)", marginBottom: 6 }}>E-mail</label>
                      <input className="inp" type="email" value={form.email} onChange={set("email")} placeholder="seu@email.com.br" />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontSize: 13, color: "var(--fg-muted)", marginBottom: 6 }}>Serviço de interesse *</label>
                      <select className="inp" value={form.servico} onChange={set("servico")} required style={{ cursor: "pointer", appearance: "auto" }}>
                        <option value="">Selecione um serviço</option>
                        <option>Site profissional</option>
                        <option>Loja virtual</option>
                        <option>Tráfego pago (Google/Meta)</option>
                        <option>Google Meu Negócio</option>
                        <option>Pacote completo</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={{ display: "block", fontSize: 13, color: "var(--fg-muted)", marginBottom: 6 }}>Mensagem (opcional)</label>
                      <textarea className="inp" value={form.mensagem} onChange={set("mensagem")} placeholder="Conte um pouco sobre seu negócio..." rows={3} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Enviar pelo WhatsApp <Icon name="arrow-right" size={17} />
                    </button>
                    <p style={{ textAlign: "center", fontSize: 12, color: "var(--fg-dim)", marginTop: 14 }}>
                      Ao enviar, você será direcionado para o WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={60}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {info.map(function (item, i) {
                  return (
                    <div key={i} className="card" style={{ padding: 24, display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{
                        width: 46, height: 46, borderRadius: 12,
                        background: "rgba(145,69,230,.15)", border: "1px solid rgba(145,69,230,.25)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <Icon name={item.icon} size={20} color="var(--accent-bright)" />
                      </span>
                      <div>
                        <p style={{ margin: 0, fontSize: 12, color: "var(--fg-dim)", fontFamily: "var(--mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noreferrer" style={{ fontSize: 15, fontWeight: 600, color: "var(--fg)", marginTop: 3, display: "block" }}>{item.value}</a>
                        ) : (
                          <p style={{ margin: "3px 0 0", fontSize: 15, fontWeight: 600 }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* CTA box */}
                <div style={{
                  borderRadius: 20, padding: 28, background: "var(--grad)",
                  position: "relative", overflow: "hidden",
                }}>
                  <p style={{ margin: 0, fontSize: 18, fontWeight: 700, fontFamily: "var(--serif)", color: "#fff", marginBottom: 8 }}>Atendimento rápido</p>
                  <p style={{ margin: "0 0 20px", fontSize: 14, color: "rgba(255,255,255,.85)", lineHeight: 1.6 }}>
                    Respondemos no WhatsApp em menos de 1 hora durante o horário comercial.
                  </p>
                  <a
                    href={wa("Olá, vim pelo site da IS7 e quero conversar!")}
                    target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", borderRadius: 9999, padding: "10px 18px", color: "#fff", fontSize: 14, fontWeight: 600 }}
                  >
                    <Icon name="message-circle" size={16} color="#fff" /> Abrir chat
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@media(max-width:620px){ .contact-form-grid{ grid-template-columns:1fr !important; } }`}</style>
      </section>
    );
  };

  Object.assign(window.IS7v2, { Contact });
})();
