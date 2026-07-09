import { site } from "../site";
import { CheckIcon } from "./Icons";

const pontos = [
  {
    titulo: "Disponível 24/7",
    desc: "Atendimento a qualquer hora, todos os dias da semana.",
  },
  {
    titulo: "Transporte sob plataforma",
    desc: "Seu veículo vai embarcado, sem arrasto e sem risco de dano.",
  },
  {
    titulo: "Atendimento direto com o motorista",
    desc: "Você fala com quem vai te atender, sem intermediário.",
  },
];

export const Sobre = () => (
  <section id="sobre" className="section">
    <div className="wrap grid items-center gap-10 md:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/img/guincho-servico.webp"
          alt={`Caminhão plataforma da ${site.nome} transportando um carro em ${site.cidade}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <span className="eyebrow">Quem Somos</span>
        <h2 className="h2">
          {site.nome}, <span className="text-primary-light">agilidade</span> e
          compromisso 24h
        </h2>
        <p className="mt-4 text-chrome-muted">
          A {site.nome} atende {site.cidade} e região com guincho e socorro
          automotivo 24 horas. Quando você precisa de ajuda, nossa equipe está
          pronta pra chegar até você com rapidez, seja de madrugada, fim de
          semana ou feriado.
        </p>
        <p className="mt-3 text-chrome-muted">
          Trabalhamos com caminhão plataforma pra transportar carros, SUVs e
          motos com segurança, sem arranhões e sem estresse.
        </p>
        <ul className="mt-6 space-y-4">
          {pontos.map((p) => (
            <li key={p.titulo} className="flex gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-light">
                <CheckIcon />
              </span>
              <span>
                <b className="block text-sm text-white">{p.titulo}</b>
                <span className="text-sm text-chrome-muted">{p.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
