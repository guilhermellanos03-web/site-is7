import { Link } from "react-router-dom";
import IS7Logo from "./IS7Logo";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#metodo", label: "O Método" },
  { href: "/cases", label: "Cases", isRoute: true },
  { href: "/blog", label: "Blog", isRoute: true },
  { href: "#contato", label: "Contato" },
];

export const Footer = () => (
  <footer className="bg-[#0A1628] py-14 border-t border-white/10">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className="space-y-4">
          <IS7Logo size="default" />
          <p className="text-[#B0B0B0] text-sm leading-relaxed max-w-xs">
            Especialistas em posicionamento digital no Google.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-heading">Links</h4>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link to={link.href} className="text-[#B0B0B0] text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="text-[#B0B0B0] text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-heading">Contato</h4>
          <ul className="space-y-2 text-sm text-[#B0B0B0]">
            <li>
              <a href="https://wa.me/5541987430349?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais!" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                WhatsApp: (41) 98743-0349
              </a>
            </li>
            <li>
              <a href="mailto:guilherme@is7mkt.com.br" className="hover:text-white transition-colors">
                Email: guilherme@is7mkt.com.br
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/guilherme.is7mkt/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Instagram: @guilherme.is7mkt
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-xs">CNPJ: 50.201.864/0001-40</p>
        <p className="text-white/50 text-xs">Todos os direitos reservados — IS7 Mídias Digitais</p>
      </div>
    </div>
  </footer>
);

export default Footer;
