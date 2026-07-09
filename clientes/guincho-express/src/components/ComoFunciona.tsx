import { passos } from "../site";
import { BotaoWhatsApp } from "./Botoes";

export const ComoFunciona = () => (
  <section className="section">
    <div className="wrap text-center">
      <span className="eyebrow">Como Funciona</span>
      <h2 className="h2">Simples, Rápido e Sem Burocracia</h2>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {passos.map((p, i) => (
          <div key={p.titulo} className="relative">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-xl font-extrabold text-white shadow-lg shadow-primary/30">
              {i + 1}
            </span>
            <h3 className="mt-4 font-display font-bold text-white">{p.titulo}</h3>
            <p className="mt-2 text-sm text-chrome-muted">{p.desc}</p>
          </div>
        ))}
      </div>

      <BotaoWhatsApp texto="Solicitar Atendimento Agora" className="btn-wa mt-12" />
    </div>
  </section>
);
