(function () {
  "use strict";
  var _v = window.IS7v2;

  const Header = function Header() {
    var { Icon, Logo, wa } = _v;
    var [scrolled, setScrolled] = React.useState(false);
    var [open, setOpen] = React.useState(false);
    var [theme, setTheme] = React.useState(function () {
      return (typeof localStorage !== "undefined" && localStorage.getItem("is7-theme")) || "dark";
    });

    React.useEffect(function () {
      var fn = function () { setScrolled(window.scrollY > 16); };
      fn();
      window.addEventListener("scroll", fn, { passive: true });
      return function () { window.removeEventListener("scroll", fn); };
    }, []);

    React.useEffect(function () {
      document.documentElement.setAttribute("data-theme", theme);
      if (typeof localStorage !== "undefined") localStorage.setItem("is7-theme", theme);
    }, [theme]);

    var links = [
      { href: "#servicos", label: "Serviços" },
      { href: "#portfolio", label: "Portfólio" },
      { href: "#sobre", label: "Sobre" },
      { href: "#faq", label: "FAQ" },
      { href: "#contato", label: "Contato" },
    ];

    var closeMenu = function () { setOpen(false); };

    return (
      <header className={"hdr" + (scrolled ? " scrolled" : "")}>
        <div className="wrap">
          <div className="hdr-row">
            <a href="#topo" style={{ textDecoration: "none" }}>
              <Logo />
            </a>

            <nav className="nav">
              {links.map(function (l) {
                return (
                  <a key={l.href} href={l.href}>{l.label}</a>
                );
              })}
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button
                className="theme-toggle"
                onClick={function () { setTheme(function (t) { return t === "dark" ? "light" : "dark"; }); }}
                aria-label="Alternar tema"
              >
                <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
              </button>

              <a
                href={wa("Olá, vim pelo site da IS7 e quero saber mais sobre os serviços!")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary hide-sm"
                style={{ padding: "10px 20px", fontSize: 14 }}
              >
                Falar com a IS7
              </a>

              <button
                className="nav-toggle"
                onClick={function () { setOpen(function (v) { return !v; }); }}
                aria-label="Menu"
              >
                <Icon name={open ? "x" : "menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="mobile-panel">
            {links.map(function (l) {
              return (
                <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
              );
            })}
            <a
              href={wa("Olá, vim pelo site da IS7 e quero saber mais sobre os serviços!")}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="btn btn-primary"
              style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
            >
              Falar com a IS7
            </a>
          </div>
        )}
      </header>
    );
  };

  Object.assign(window.IS7v2, { Header });
})();
