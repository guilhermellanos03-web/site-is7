(function () {
  "use strict";
  var _v = window.IS7v2;

  var STARTERS = [
    { label: "Quero um site",        msg: "Olá, vim pelo site da IS7 e quero criar um site profissional para meu negócio!" },
    { label: "Quero uma loja virtual", msg: "Olá, vim pelo site da IS7 e quero criar uma loja virtual com pedidos pelo WhatsApp!" },
    { label: "Quero tráfego pago",   msg: "Olá, vim pelo site da IS7 e quero investir em Google Ads / Meta Ads para o meu negócio!" },
    { label: "Ver preços",           msg: "Olá, vim pelo site da IS7 e quero saber os preços dos serviços!" },
  ];

  const ChatBot = function ChatBot() {
    var { Icon, wa } = _v;
    var [open, setOpen] = React.useState(false);

    return (
      <>
        {/* Trigger button — bottom-left, not to conflict with WhatsApp FAB at bottom-right */}
        <button
          onClick={function () { setOpen(function (v) { return !v; }); }}
          aria-label={open ? "Fechar chat" : "Abrir chat"}
          style={{
            position: "fixed", left: 22, bottom: 22, zIndex: 79,
            width: 52, height: 52, borderRadius: 9999,
            background: "var(--surface-2)",
            border: "1px solid var(--line-2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 8px 24px -8px rgba(0,0,0,.5)",
            transition: "transform .25s, background .25s",
          }}
          onMouseEnter={function (e) { e.currentTarget.style.transform = "scale(1.08)"; }}
          onMouseLeave={function (e) { e.currentTarget.style.transform = "scale(1)"; }}
        >
          <Icon name={open ? "x" : "message-square"} size={20} color="var(--accent-bright)" />
        </button>

        {/* Chat panel */}
        {open && (
          <div style={{
            position: "fixed", left: 22, bottom: 84, zIndex: 79,
            width: 300, borderRadius: 20,
            background: "var(--surface)",
            border: "1px solid var(--line-2)",
            boxShadow: "0 24px 50px -16px rgba(0,0,0,.7)",
            overflow: "hidden",
            animation: "panel-in .25s ease",
          }}>
            {/* Header */}
            <div style={{
              background: "var(--grad)",
              padding: "16px 18px",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{
                width: 36, height: 36, borderRadius: 9999,
                background: "rgba(255,255,255,.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 14, color: "#fff" }}>iS7</span>
              </span>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "#fff" }}>IS7 Marketing</p>
                <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,.75)" }}>● Online agora</p>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: 18 }}>
              <div style={{
                background: "var(--surface-2)", borderRadius: "12px 12px 12px 2px",
                padding: "12px 14px", marginBottom: 16,
              }}>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--fg)" }}>
                  Olá! Sou da equipe IS7. 👋<br />
                  Como posso te ajudar hoje?
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {STARTERS.map(function (s, i) {
                  return (
                    <a
                      key={i}
                      href={wa(s.msg)}
                      target="_blank" rel="noreferrer"
                      onClick={function () { setOpen(false); }}
                      style={{
                        display: "block", padding: "10px 14px",
                        borderRadius: 10, border: "1px solid var(--line-2)",
                        fontSize: 13.5, color: "var(--fg)",
                        background: "var(--bg-2)",
                        transition: "border-color .2s, background .2s",
                      }}
                      onMouseEnter={function (e) { e.currentTarget.style.borderColor = "rgba(145,69,230,.4)"; e.currentTarget.style.background = "rgba(145,69,230,.08)"; }}
                      onMouseLeave={function (e) { e.currentTarget.style.borderColor = "var(--line-2)"; e.currentTarget.style.background = "var(--bg-2)"; }}
                    >
                      {s.label} →
                    </a>
                  );
                })}
              </div>

              <p style={{ margin: "14px 0 0", fontSize: 11, color: "var(--fg-dim)", textAlign: "center" }}>
                Resposta pelo WhatsApp em minutos
              </p>
            </div>
          </div>
        )}
      </>
    );
  };

  Object.assign(window.IS7v2, { ChatBot });
})();
