import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import IS7Logo from "./IS7Logo";

const WAPP_LINK = "https://wa.me/5541987430349?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20m%C3%A9todo%20IS7!";

const navItems = [
  { href: "/#inicio", label: "Início" },
  { href: "/#metodo", label: "O Método" },
  { href: "/cases", label: "Cases", isRoute: true },
  { href: "/blog", label: "Blog", isRoute: true },
  { href: "/#contato", label: "Contato" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0A1628] border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" aria-label="IS7 Início">
          <IS7Logo size="small" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors duration-300 ${
                  scrolled ? "text-white/70 hover:text-white" : "text-[#0A1628]/70 hover:text-[#0A1628]"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 ${
                  scrolled ? "text-white/70 hover:text-white" : "text-[#0A1628]/70 hover:text-[#0A1628]"
                }`}
              >
                {item.label}
              </a>
            )
          )}
          <a
            href={WAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-purple text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Fale conosco
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A1628] px-6 py-4 space-y-3">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="block text-white py-2"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white py-2"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href={WAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="block bg-brand-purple text-white px-6 py-3 rounded-full text-center font-semibold"
          >
            Fale conosco
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
