// IS7 Site v2 — primitives. All exports land on window.IS7v2 so Babel-standalone
// file order stays stable. Icon (lucide), Logo (gradient wordmark), Eyebrow,
// Reveal (capture-safe scroll reveal via React state), useCountUp, WhatsApp helpers.

const WAPP = "https://wa.me/5541987430349";
const wa = (msg) => `${WAPP}?text=${encodeURIComponent(msg)}`;

// Icones inline (SVG) — substitui a lib lucide (~324KB) por so o que usamos.
// Renderizam sincronamente (sem flash, sem JS extra). Paths no padrao lucide.
const ICONS = {
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  "badge-check": '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  "briefcase": '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  "calendar-days": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "credit-card": '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  "file-bar-chart": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M12 18v-4"/><path d="M8 18v-2"/><path d="M16 18v-6"/>',
  "headset": '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  "heart": '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  "instagram": '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  "layers": '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
  "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  "menu": '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  "monitor": '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
  "moon": '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  "palette": '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
  "plus": '<path d="M5 12h14"/><path d="M12 5v14"/>',
  "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "shopping-bag": '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  "sun": '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  "trending-up": '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
};

const Icon = ({ name, size = 24, strokeWidth = 2, color = "currentColor", fill = "none", style = {} }) => {
  const inline = ICONS[name];
  // Fallback: se o icone nao esta no mapa inline E o lucide estiver carregado
  // (paginas de proposta), usa o lucide. O site principal nao carrega lucide,
  // mas todos os icones dele estao no mapa.
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!inline && typeof window !== "undefined" && window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      ref.current.appendChild(i);
      window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": strokeWidth, stroke: color, fill } });
    }
  }, [name, size, strokeWidth, color, fill, inline]);
  if (inline) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
        strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
        style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
        aria-hidden="true" dangerouslySetInnerHTML={{ __html: inline }} />
    );
  }
  return <span ref={ref} style={{ display: "inline-flex", color, lineHeight: 0, ...style }} aria-hidden="true" />;
};

const Logo = ({ size = 26 }) => (
  <img
    src="assets/is7-logo-roxa.png"
    alt="IS7"
    className="site-logo"
    style={{ height: size * 2.2, width: "auto", display: "block" }}
  />
);

const Eyebrow = ({ children, center = false, style = {} }) => (
  <span className={`eyebrow ${center ? "center" : ""}`} style={style}>{children}</span>
);

// Capture-safe reveal: hidden state only applies when body.js-anim is set AND
// the element hasn't yet entered the viewport. State lives in React so a parent
// re-render (e.g. from tweaks) can't strip the "in" class.
const Reveal = ({ children, className = "", style = {}, delay = 0, as = "div", ...rest }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) { setShown(true); return; }
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setShown(true); obs.disconnect(); } }),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}
         style={{ transitionDelay: shown ? `${delay}ms` : "0ms", ...style }}
         {...rest}>
      {children}
    </Tag>
  );
};

// Count-up: animates 0→target when the element scrolls into view. Uses a
// timer-based tween (Date.now) so it advances reliably even where rAF is
// throttled; a mount-level safety timer guarantees the final value always lands.
const useCountUp = (target, { duration = 1600, decimals = 0 } = {}) => {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  const done = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    let iv = null;
    const finish = () => { if (iv) clearInterval(iv); iv = null; setVal(target); };
    const run = () => {
      if (done.current) return; done.current = true;
      const t0 = Date.now();
      iv = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(target * eased);
        if (p >= 1) finish();
      }, 32);
    };
    let obs = null;
    if (el && el.getBoundingClientRect().top < window.innerHeight) run();
    else if (el) {
      obs = new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) { run(); obs.disconnect(); } }),
        { threshold: 0.35 }
      );
      obs.observe(el);
    }
    // Safety net: never leave the figure stuck at 0.
    const safety = setTimeout(() => { if (!done.current) run(); }, 2600);
    return () => { if (iv) clearInterval(iv); if (obs) obs.disconnect(); clearTimeout(safety); };
  }, [target, duration]);
  const display = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString("pt-BR");
  return [ref, display];
};

// Animated stat figure: parses prefix/number/suffix so "R$ 500 mil+" counts the 500.
const StatNumber = ({ prefix = "", value, suffix = "", decimals = 0, size }) => {
  const [ref, display] = useCountUp(value, { decimals });
  return <span ref={ref} className="stat-num" style={size ? { fontSize: size } : undefined}>{prefix}{display}{suffix}</span>;
};

window.IS7v2 = { Icon, Logo, Eyebrow, Reveal, useCountUp, StatNumber, WAPP, wa };
