const { Logo, Icon, wa } = window.IS7v2;

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "IS7 Portfolio.html", label: "Portfólio" },
  { href: "#sobre",    label: "Sobre" },
  { href: "#faq",      label: "FAQ" },
  { href: "#contato",  label: "Contato" },
];

const ThemeToggle = ({ theme, setTheme }) => (
  <button
    className="theme-toggle"
    aria-label="Alternar tema"
    onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
  >
    <Icon name={theme === "dark" ? "sun" : "moon"} size={17} />
  </button>
);

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(() =>
    typeof localStorage !== "undefined" ? (localStorage.getItem("is7-theme") || "dark") : "dark"
  );

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("is7-theme", theme);
  }, [theme]);

  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap hdr-row">
        <a href="#topo" aria-label="IS7"><Logo size={26} /></a>
        <nav className="nav">
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a href={wa("Olá! Quero falar com a IS7 sobre presença digital.")} target="_blank" rel="noreferrer" className="btn btn-primary hide-sm" style={{ padding: "12px 24px", fontSize: 14 }}>
            Fale conosco
          </a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            <Icon name={open ? "x" : "menu"} size={24} />
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-panel">
          {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
            <a href={wa("Olá! Quero falar com a IS7 sobre presença digital.")} target="_blank" rel="noreferrer"
               className="btn btn-primary" style={{ flex: 1 }}>Fale conosco</a>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      )}
    </header>
  );
};

const WhatsAppFab = () => (
  <a className="fab" href={wa("Olá! Vim pelo site da IS7 e quero saber mais.")} target="_blank" rel="noreferrer" aria-label="WhatsApp">
    <svg viewBox="0 0 32 32" style={{ width: 30, height: 30, fill: "#04210F" }}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z"/></svg>
  </a>
);

window.IS7v2 = Object.assign(window.IS7v2, { Header, WhatsAppFab });
