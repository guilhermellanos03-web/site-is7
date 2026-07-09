import { site } from "../site";
import { BotaoWhatsApp } from "./Botoes";

export const Header = () => (
  <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-ink/90 backdrop-blur">
    <div className="wrap flex h-16 items-center justify-between">
      <a href="#inicio" className="flex items-center gap-3">
      <img
        src="/img/logo-guincho-express.png"
        alt={`Logo ${site.nome}`}
        className="h-11 w-auto"
      />
        <span className="hidden font-display text-sm font-bold uppercase tracking-wide text-white sm:block">
          {site.nome}
          <span className="block text-[11px] font-semibold normal-case tracking-normal text-primary-light">
            24h em {site.cidade} e região
          </span>
        </span>
      </a>
      <BotaoWhatsApp
        texto="Solicitar Socorro"
        className="btn-wa !px-5 !py-2.5 !text-xs sm:!text-sm"
      />
    </div>
  </header>
);
