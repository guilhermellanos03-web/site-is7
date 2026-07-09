// Icones inline (paths do Lucide) pra nao depender de pacote externo.

import type { ReactElement } from "react";

type IconProps = { className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const WhatsAppIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const PhoneIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...S} className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ClockIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const StarIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const ZapIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const ShieldIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const WalletIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

export const PinIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const CarIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

export const TruckIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <path d="M10 17h4V5H2v12h3" />
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export const BikeIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
  </svg>
);

export const FuelIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <line x1="3" y1="22" x2="15" y2="22" />
    <line x1="4" y1="9" x2="14" y2="9" />
    <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
    <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
  </svg>
);

export const BatteryIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <rect x="2" y="7" width="16" height="10" rx="2" />
    <line x1="22" y1="11" x2="22" y2="13" />
    <line x1="6" y1="11" x2="6" y2="13" />
    <line x1="10" y1="11" x2="10" y2="13" />
    <line x1="14" y1="11" x2="14" y2="13" />
  </svg>
);

export const CheckIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...S} className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ChevronDownIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...S} className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const GoogleIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path fill="#FFC107" d="M43.6 20H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-4z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 40.4 44 36 44 24c0-1.3-.1-2.7-.4-4z" />
  </svg>
);

const icones: Record<string, (p: IconProps) => ReactElement> = {
  car: CarIcon,
  truck: TruckIcon,
  bike: BikeIcon,
  fuel: FuelIcon,
  battery: BatteryIcon,
  clock: ClockIcon,
  zap: ZapIcon,
  star: StarIcon,
  shield: ShieldIcon,
  wallet: WalletIcon,
  pin: PinIcon,
};

export const Icone = ({ nome, className }: { nome: string; className?: string }) => {
  const C = icones[nome] ?? ClockIcon;
  return <C className={className} />;
};
