import { site } from "../site";
import { BotaoLigar, BotaoWhatsApp } from "./Botoes";
import { ChevronDownIcon, GoogleIcon, StarIcon } from "./Icons";

export const Estrelas = ({ className = "h-4 w-4" }: { className?: string }) => (
  <span className="inline-flex gap-0.5 text-star">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className={className} />
    ))}
  </span>
);

export const SeloGoogle = () => (
  <a
    href={site.linkGoogle}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-5 py-2.5 backdrop-blur transition-colors hover:border-white/25"
  >
    <GoogleIcon className="h-6 w-6" />
    <span className="flex flex-col items-start leading-tight">
      <span className="flex items-center gap-2">
        <Estrelas />
        <b className="text-sm text-white">{site.nota} no Google</b>
      </span>
      <span className="text-xs text-chrome-muted">
        {site.totalAvaliacoes} avaliações verificadas
      </span>
    </span>
  </a>
);

export const Hero = () => (
  <section id="inicio" className="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url(/img/hero-guincho.webp)" }}
      role="img"
      aria-label={`Caminhão plataforma da ${site.nome} transportando um veículo em ${site.cidade}`}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />

    <div className="wrap relative py-20 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-wa/30 bg-wa/10 px-4 py-1.5 text-xs font-semibold text-wa">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
        </span>
        Disponível Agora, Atendimento 24 Horas
      </span>

      <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
        Guincho <span className="text-primary-light">24h</span> em {site.cidade} e Região
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-base text-chrome md:text-lg">
        Pane, acidente, bateria ou pane seca. Nossa plataforma chega rápido onde
        você estiver, a qualquer hora do dia ou da noite.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <BotaoWhatsApp />
        <BotaoLigar />
      </div>

      <div className="mt-8">
        <SeloGoogle />
      </div>
    </div>

    <a
      href="#sobre"
      aria-label="Rolar para a próxima seção"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-chrome-dim"
    >
      <ChevronDownIcon />
    </a>
  </section>
);
