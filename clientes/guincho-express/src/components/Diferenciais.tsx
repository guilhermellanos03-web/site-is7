import { diferenciais, site } from "../site";
import { Icone } from "./Icons";

export const Diferenciais = () => (
  <section className="section bg-ink-soft">
    <div className="wrap text-center">
      <span className="eyebrow">Nossos Diferenciais</span>
      <h2 className="h2">Por Que Escolher a {site.nome}?</h2>
      <p className="sub">Confiança e agilidade quando você mais precisa.</p>

      <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
        {diferenciais.map((d) => (
          <div key={d.titulo} className="card flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary-light">
              <Icone nome={d.icone} className="h-5 w-5" />
            </span>
            <span>
              <b className="block font-display text-sm text-white">{d.titulo}</b>
              <span className="mt-1 block text-sm text-chrome-muted">{d.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
