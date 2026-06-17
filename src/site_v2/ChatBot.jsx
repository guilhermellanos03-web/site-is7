const { Icon, wa } = window.IS7v2;

/* ─────────────────────────────────────────────────────────────
   ChatBot — versão simples (sem IA).
   Abre um painel com mensagem de boas-vindas e atalhos que levam
   direto pro WhatsApp. Pronto para produção; a IA completa pode
   ser plugada depois substituindo este componente.
   ───────────────────────────────────────────────────────────── */

const WELCOME_MSG = "Olá! 👋 Sou o atendimento da IS7. Me conta o que você precisa que a gente continua pelo WhatsApp — resposta rápida e diagnóstico gratuito.";

const QUICK = [
  { label: "Quero aparecer no Google", msg: "Olá! Quero que minha empresa apareça no Google. Pode me ajudar?" },
  { label: "Preciso de um site",       msg: "Olá! Preciso de um site profissional para a minha empresa." },
  { label: "Quero uma loja virtual",   msg: "Olá! Tenho interesse em montar uma loja virtual." },
  { label: "Agendar diagnóstico",      msg: "Olá! Quero agendar um diagnóstico gratuito da minha presença digital." },
];

const chatStyles = {
  overlay: {
    position: "fixed", bottom: 90, left: 24, zIndex: 9998,
    width: 360, maxWidth: "calc(100vw - 32px)",
    display: "flex", flexDirection: "column",
    background: "linear-gradient(180deg, #0E1426 0%, #0A0F1E 100%)",
    border: "1px solid rgba(145,69,230,.3)",
    borderRadius: 22, overflow: "hidden",
    boxShadow: "0 20px 60px -16px rgba(0,0,0,.7), 0 0 40px -10px rgba(145,69,230,.2)",
    animation: "chat-in .3s cubic-bezier(.16,1,.3,1) both",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    padding: "18px 20px", display: "flex", alignItems: "center", gap: 12,
    background: "linear-gradient(135deg, rgba(145,69,230,.15), rgba(59,108,255,.1))",
    borderBottom: "1px solid rgba(255,255,255,.06)",
  },
  avatar: {
    width: 40, height: 40, borderRadius: 12,
    background: "linear-gradient(135deg, #9145E6, #3B6CFF)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#fff", fontSize: 16,
    flexShrink: 0,
  },
  body: {
    padding: "18px 16px 8px",
    display: "flex", flexDirection: "column", gap: 14,
  },
  botBubble: {
    padding: "12px 16px",
    background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "4px 18px 18px 18px",
    fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,.88)",
    alignSelf: "flex-start",
  },
  footer: {
    padding: "12px 16px 16px",
    display: "flex", flexDirection: "column", gap: 8,
  },
  waBtn: {
    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
    width: "100%", padding: "13px 16px", borderRadius: 12,
    background: "#25D366", color: "#04210F", fontWeight: 700, fontSize: 14.5,
    border: "none", cursor: "pointer", textDecoration: "none",
    fontFamily: "inherit",
  },
  fab: {
    position: "fixed", bottom: 24, left: 24, zIndex: 9999,
    width: 56, height: 56, borderRadius: 16,
    background: "linear-gradient(135deg, #9145E6, #3B6CFF)",
    border: "none", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 8px 28px -4px rgba(145,69,230,.5)",
    transition: "transform .2s, box-shadow .2s",
  },
  badge: {
    position: "absolute", top: -4, right: -4,
    width: 18, height: 18, borderRadius: 9999,
    background: "#EF4444", border: "2px solid #0A0F1E",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 10, fontWeight: 700, color: "#fff",
  },
};

const ChatBot = () => {
  const [open, setOpen] = React.useState(false);
  const [unread, setUnread] = React.useState(1);

  React.useEffect(() => { if (open) setUnread(0); }, [open]);

  return (
    <React.Fragment>
      {open && (
        <div style={chatStyles.overlay}>
          {/* Header */}
          <div style={chatStyles.header}>
            <div style={chatStyles.avatar}>IS7</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "#fff" }}>Atendimento IS7</p>
              <p style={{ margin: "2px 0 0", fontSize: 12, color: "rgba(255,255,255,.5)" }}>Resposta rápida no WhatsApp</p>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 10, width: 34, height: 34, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }} aria-label="Fechar">
              <Icon name="x" size={16} color="rgba(255,255,255,.5)" />
            </button>
          </div>

          {/* Welcome + quick options */}
          <div style={chatStyles.body}>
            <div style={chatStyles.botBubble}>{WELCOME_MSG}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {QUICK.map((q, i) => (
                <a key={i} href={wa(q.msg)} target="_blank" rel="noreferrer" style={{
                  background: "rgba(145,69,230,.1)", border: "1px solid rgba(145,69,230,.25)",
                  borderRadius: 9999, padding: "8px 14px", color: "var(--accent-bright, #A78BFA)",
                  fontSize: 12.5, fontWeight: 500, cursor: "pointer", textDecoration: "none",
                }}>{q.label}</a>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div style={chatStyles.footer}>
            <a href={wa("Olá! Vim pelo site da IS7 e quero saber mais.")} target="_blank" rel="noreferrer" style={chatStyles.waBtn}>
              <svg viewBox="0 0 32 32" style={{ width: 19, height: 19, fill: "#04210F" }}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.824 32 16S24.826 0 16.004 0z"/></svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(o => !o)}
        style={chatStyles.fab}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        aria-label="Atendimento"
      >
        {open ? <Icon name="x" size={24} color="#fff" /> : <Icon name="message-circle" size={24} color="#fff" />}
        {!open && unread > 0 && <span style={chatStyles.badge}>{unread}</span>}
      </button>

      <style>{`
        @keyframes chat-in {
          from { opacity: 0; transform: translateY(16px) scale(.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </React.Fragment>
  );
};

window.IS7v2 = Object.assign(window.IS7v2, { ChatBot });
