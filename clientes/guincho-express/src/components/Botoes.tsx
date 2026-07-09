// Botoes padrao do site: WhatsApp (verde) e Ligar (laranja), fixos e nas secoes.

import { site, telLink, waLink, waPadrao } from "../site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export const BotaoWhatsApp = ({
  texto = "Chamar no WhatsApp",
  msg,
  className = "btn-wa",
}: {
  texto?: string;
  msg?: string;
  className?: string;
}) => (
  <a
    href={msg ? waLink(msg) : waPadrao}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    <WhatsAppIcon className="h-5 w-5" />
    {texto}
  </a>
);

export const BotaoLigar = ({
  texto = `Ligar Agora: ${site.telefoneDisplay}`,
  className = "btn-call",
}: {
  texto?: string;
  className?: string;
}) => (
  <a href={telLink} className={className}>
    <PhoneIcon className="h-5 w-5" />
    {texto}
  </a>
);

// FABs fixos no canto inferior direito, telefone em cima, WhatsApp embaixo
export const BotoesFlutuantes = () => (
  <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
    <a
      href={telLink}
      aria-label={`Ligar para ${site.nome}`}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-black/40 transition-transform hover:scale-110"
    >
      <PhoneIcon className="h-5 w-5" />
    </a>
    <a
      href={waPadrao}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chamar ${site.nome} no WhatsApp`}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-xl shadow-black/40 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  </div>
);
