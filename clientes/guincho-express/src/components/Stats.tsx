import { site } from "../site";
import { StarIcon } from "./Icons";

const stats = [
  { valor: "24h", rotulo: "Todos os dias, o ano inteiro" },
  { valor: site.nota, rotulo: "Nota no Google", estrela: true },
  { valor: `${site.totalAvaliacoes}`, rotulo: "Avaliações verificadas" },
  { valor: `${site.cidade}`, rotulo: "e toda a região" },
];

export const Stats = () => (
  <section className="border-y border-white/5 bg-ink-soft">
    <div className="wrap grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.rotulo} className="text-center">
          <div className="flex items-center justify-center gap-1.5 font-display text-3xl font-extrabold text-white md:text-4xl">
            {s.valor}
            {s.estrela && <StarIcon className="h-6 w-6 text-star" />}
          </div>
          <div className="mt-1 text-xs text-chrome-muted md:text-sm">{s.rotulo}</div>
        </div>
      ))}
    </div>
  </section>
);
