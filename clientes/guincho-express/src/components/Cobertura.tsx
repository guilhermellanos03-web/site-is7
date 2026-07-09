import { cidades, site } from "../site";
import { BotaoWhatsApp } from "./Botoes";
import { PinIcon } from "./Icons";

export const Cobertura = () => (
  <section id="cobertura" className="section">
    <div className="wrap">
      <div className="text-center">
        <span className="eyebrow">Área de Atendimento</span>
        <h2 className="h2">
          Atendemos {site.cidade} e Toda a Região
        </h2>
        <p className="sub">
          Cobertura completa na cidade e nas rodovias da região. Rápidos onde
          você estiver.
        </p>
      </div>

      <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-display font-bold text-white">
            <PinIcon className="h-5 w-5 text-primary-light" />
            Bairros e Cidades Atendidas
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {cidades.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-ink-card px-4 py-1.5 text-sm text-chrome"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="card mt-6">
            <b className="font-display text-sm text-white">Nossa Base</b>
            <p className="mt-1 text-sm text-chrome-muted">{site.endereco}</p>
            <p className="mt-3 text-sm text-chrome-muted">
              Atendemos toda {site.cidade} e regiões vizinhas. Em caso de dúvida
              sobre cobertura, é só chamar que a gente resolve.
            </p>
          </div>

          <BotaoWhatsApp
            texto="Verificar Atendimento na Minha Área"
            msg={`Olá! Vocês atendem na minha região? Estou em `}
            className="btn-wa mt-6"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src={site.mapsEmbed}
            title={`Mapa da área de atendimento da ${site.nome} em ${site.cidade}`}
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);
