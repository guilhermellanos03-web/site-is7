import { site } from "../site";
import { BotaoLigar, BotaoWhatsApp } from "./Botoes";
import { CheckIcon } from "./Icons";

const selos = [
  "Resposta imediata",
  "Sem taxas ocultas",
  `Nota ${site.nota} no Google`,
  "Atendimento 24h",
];

export const CtaFinal = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-ink to-ink" />
    <div className="wrap relative section text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-wa/30 bg-wa/10 px-4 py-1.5 text-xs font-semibold text-wa">
        Disponível agora, 24h por dia, 7 dias por semana
      </span>
      <h2 className="mt-6 font-display text-3xl font-black text-white md:text-5xl">
        Precisa de Socorro Agora?
      </h2>
      <p className="mt-2 font-display text-lg font-bold text-primary-light">
        Estamos prontos pra te ajudar!
      </p>
      <p className="sub">
        Não fique parado na estrada. Um toque e a {site.nome} está a caminho.
        Atendimento rápido, profissional e preço justo.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <BotaoWhatsApp />
        <BotaoLigar texto={`Ligar: ${site.telefoneDisplay}`} />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {selos.map((s) => (
          <span key={s} className="flex items-center gap-1.5 text-xs text-chrome-muted">
            <CheckIcon className="h-4 w-4 text-wa" />
            {s}
          </span>
        ))}
      </div>
    </div>
  </section>
);
