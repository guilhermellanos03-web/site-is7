// IS7 Site v2 — primitives. All exports land on window.IS7v2 so Babel-standalone
// file order stays stable. Icon (lucide), Logo (gradient wordmark), Eyebrow,
// Reveal (capture-safe scroll reveal via React state), useCountUp, WhatsApp helpers.

const WAPP = "https://wa.me/5541987430349";
const wa = (msg) => `${WAPP}?text=${encodeURIComponent(msg)}`;

const Icon = ({ name, size = 24, strokeWidth = 2, color = "currentColor", fill = "none", style = {} }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": strokeWidth, fill } });
    }
  }, [name, size, strokeWidth, fill]);
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
