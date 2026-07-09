import { depoimentos, site } from "../site";
import { Estrelas, SeloGoogle } from "./Hero";
import { GoogleIcon } from "./Icons";

export const Avaliacoes = () => (
  <section id="avaliacoes" className="section bg-ink-soft">
    <div className="wrap text-center">
      <span className="eyebrow">Avaliações Reais</span>
      <h2 className="h2">
        Nota {site.nota} no Google. Veja o Que Nossos Clientes Dizem
      </h2>

      <div className="mt-6 flex justify-center">
        <SeloGoogle />
      </div>

      <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
        {depoimentos.map((d, i) => (
          <div key={i} className="card">
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 font-display font-bold text-primary-light">
                {d.nome.charAt(0)}
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white">
                  <GoogleIcon className="h-3.5 w-3.5" />
                </span>
              </span>
              <span>
                <b className="block text-sm text-white">{d.nome}</b>
                <span className="text-xs text-chrome-dim">{d.tempo}</span>
              </span>
            </div>
            <div className="mt-3">
              <Estrelas />
            </div>
            <p className="mt-3 text-sm text-chrome-muted">"{d.texto}"</p>
          </div>
        ))}
      </div>

      <a
        href={site.linkGoogle}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-10 border border-white/15 bg-ink-card text-chrome hover:border-white/30"
      >
        <GoogleIcon className="h-5 w-5" />
        Ver Todas as Avaliações no Google
      </a>
    </div>
  </section>
);
