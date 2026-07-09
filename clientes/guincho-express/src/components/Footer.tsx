import { servicos, site, telLink, waPadrao } from "../site";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export const Footer = () => (
  <footer className="border-t border-white/5 bg-black">
    <div className="wrap grid gap-10 py-14 md:grid-cols-3">
      <div>
        <img
          src="/img/logo-guincho-express.png"
          alt={`Logo ${site.nome}`}
          className="h-16 w-auto"
          loading="lazy"
        />
        <p className="mt-4 max-w-xs text-sm text-chrome-muted">
          Guincho e socorro automotivo 24h em {site.cidade} e região. Transporte
          seguro do seu veículo, com agilidade e preço justo.
        </p>
      </div>

      <div>
        <b className="font-display text-sm uppercase tracking-wider text-white">Serviços</b>
        <ul className="mt-4 space-y-2 text-sm text-chrome-muted">
          {servicos.map((s) => (
            <li key={s.titulo}>{s.titulo}</li>
          ))}
          <li>Atendimento 24h, 365 dias</li>
        </ul>
      </div>

      <div>
        <b className="font-display text-sm uppercase tracking-wider text-white">Contato</b>
        <ul className="mt-4 space-y-3 text-sm text-chrome-muted">
          <li>
            <a
              href={waPadrao}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-wa"
            >
              <WhatsAppIcon className="h-4 w-4 text-wa" />
              WhatsApp: {site.telefoneDisplay}
            </a>
          </li>
          <li>
            <a href={telLink} className="flex items-center gap-2 hover:text-primary-light">
              <PhoneIcon className="h-4 w-4 text-primary-light" />
              {site.telefoneDisplay}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
            {site.endereco}
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/5 py-6 text-center text-xs text-chrome-dim">
      <p>
        © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
      </p>
      <p className="mt-1">CNPJ: {site.cnpj}</p>
      <p className="mt-1">
        Desenvolvido por{" "}
        <a
          href="https://is7mkt.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-light hover:underline"
        >
          IS7
        </a>
      </p>
    </div>
  </footer>
);
