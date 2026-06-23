/* PropostaApp.jsx — template de proposta IS7 para segmentos locais.
   Lê window.IS7_SEG para o segmento ativo. Requer:
   - site_v2/site.css
   - site_v2/Primitives.jsx (Icon, Logo, Eyebrow, Reveal, StatNumber, wa, WAPP)
   - proposta/segmentos.js (window.IS7_SEGMENTOS)
   - lojas_virtuais/image-slot.js
*/

const { Icon, Logo, Eyebrow, Reveal, StatNumber, wa, WAPP } = window.IS7v2;
const SEG = window.IS7_SEGMENTOS[window.IS7_SEG] || {};
const WA_CTA = wa(`Olá! Vi a proposta da IS7 para ${SEG.label || "minha empresa"} e quero saber mais.`);

/* ---- shared micro-components ---- */
const Stars = () => (
  <span className="stars">{[0,1,2,3,4].map(i=><Icon key={i} name="star" size={15} color="#FBBF24" fill="#FBBF24" strokeWidth={0}/>)}</span>
);

/* ---- Gauge (Google PageSpeed-style) ---- */
const Gauge = ({ score, label }) => {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const ran = React.useRef(false);
  const color = score >= 90 ? "#22C55E" : score >= 50 ? "#F97316" : "#EF4444";
  const R = 52; const C = 2 * Math.PI * R;
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const run = () => {
      if (ran.current) return; ran.current = true;
      const t0 = Date.now();
      const iv = setInterval(() => {
        const p = Math.min(1, (Date.now()-t0)/1400);
        const v = score*(1-Math.pow(1-p,3));
        setVal(v);
        if (p>=1){ clearInterval(iv); setVal(score); }
      }, 28);
    };
    if (el.getBoundingClientRect().top < window.innerHeight) { run(); return; }
    const obs = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run();obs.disconnect();}}),{threshold:.4});
    obs.observe(el);
    const safety = setTimeout(()=>{ if(!ran.current) run(); },3000);
    return ()=>{ obs.disconnect(); clearTimeout(safety); };
  },[score]);
  const dash = (val/100)*C;
  return (
    <div ref={ref} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
      <svg width={130} height={130} viewBox="0 0 130 130">
        <circle cx={65} cy={65} r={R} fill="none" stroke="rgba(255,255,255,.10)" strokeWidth={9}/>
        <circle cx={65} cy={65} r={R} fill="none" stroke={color} strokeWidth={9}
          strokeDasharray={`${dash} ${C}`} strokeLinecap="round"
          transform="rotate(-90 65 65)"/>
        <text x={65} y={65} textAnchor="middle" dominantBaseline="middle"
          fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight={800} fontSize={28}>
          {Math.round(val)}
        </text>
      </svg>
      <span style={{fontSize:13,fontWeight:600,color:"var(--fg-muted)",textAlign:"center",maxWidth:110}}>{label}</span>
    </div>
  );
};

/* ================================================================
   SECTIONS
================================================================ */

/* ---- HEADER ---- */
const Header = () => {
  const [sc,setSc] = React.useState(false);
  const [open,setOpen] = React.useState(false);
  React.useEffect(()=>{
    const fn=()=>setSc(window.scrollY>16); fn();
    window.addEventListener("scroll",fn,{passive:true});
    return()=>window.removeEventListener("scroll",fn);
  },[]);
  return (
    <header className={`hdr ${sc?"scrolled":""}`}>
      <div className="wrap hdr-row">
        <a href="IS7 Site.html" aria-label="IS7"><Logo size={24}/></a>
        <nav className="nav">
          <a href="#metodo">Método</a>
          <a href="#projetos">Projetos</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#investimento">Investimento</a>
        </nav>
        <a href={WA_CTA} target="_blank" rel="noreferrer" className="btn btn-primary" style={{padding:"11px 22px",fontSize:14}}>
          Falar com IS7
        </a>
      </div>
      {open&&<div className="mobile-panel">
        {[["#metodo","Método"],["#projetos","Projetos"],["#depoimentos","Depoimentos"],["#investimento","Investimento"]].map(([h,l])=>(
          <a key={h} href={h} onClick={()=>setOpen(false)}>{l}</a>
        ))}
        <a href={WA_CTA} target="_blank" rel="noreferrer" className="btn btn-primary" style={{width:"100%",marginTop:16}}>Falar com IS7</a>
      </div>}
    </header>
  );
};

/* ---- HERO ---- */
const Hero = () => (
  <section id="topo" style={{position:"relative",overflow:"hidden",minHeight:"88vh",display:"flex",alignItems:"center",paddingTop:56,paddingBottom:88}}>
    <div className="glow glow-purple" style={{width:580,height:580,top:-200,left:"50%",transform:"translateX(-50%)"}}/>
    <div className="glow glow-blue" style={{width:400,height:400,bottom:-180,right:-100}}/>
    <div className="gridlines"/>
    <div className="wrap" style={{position:"relative",zIndex:2,textAlign:"center"}}>
      <Reveal style={{display:"flex",justifyContent:"center",marginBottom:22}}>
        <Eyebrow center>{SEG.heroEyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={70}>
        <h1 className="display" style={{maxWidth:900,margin:"0 auto",fontSize:"clamp(38px,5.8vw,76px)"}}>
          {SEG.heroH1 && SEG.heroH1.map((line, i) => (
            <React.Fragment key={i}>
              {i === SEG.heroAccent
                ? <><span className="grad-text">{line}</span><br/></>
                : <>{line}{i < SEG.heroH1.length-1 ? <br/> : null}</>
              }
            </React.Fragment>
          ))}
        </h1>
      </Reveal>
      <Reveal delay={140}>
        <p className="lead" style={{maxWidth:620,margin:"26px auto 0"}}>{SEG.heroSub}</p>
      </Reveal>
      <Reveal delay={210}>
        <div style={{display:"flex",flexWrap:"wrap",gap:14,justifyContent:"center",marginTop:36}}>
          <a href={WA_CTA} target="_blank" rel="noreferrer" className="btn btn-wa btn-lg">
            <svg viewBox="0 0 32 32" style={{width:20,height:20,fill:"#04210F",flexShrink:0}}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z"/></svg>
            {SEG.heroCTA}
          </a>
          <a href="#investimento" className="btn btn-ghost btn-lg">Ver investimento</a>
        </div>
      </Reveal>
      <Reveal delay={280}>
        <div style={{display:"flex",flexWrap:"wrap",gap:22,justifyContent:"center",marginTop:36,paddingTop:32,borderTop:"1px solid var(--line)"}}>
          {[["check-circle","+ 80 projetos entregues"],["star","5.0 no Google"],["map-pin","15+ estados atendidos"]].map(([ic,l])=>(
            <span key={l} style={{display:"flex",alignItems:"center",gap:7,fontSize:14,color:"var(--fg-muted)"}}>
              <Icon name={ic} size={15} color="var(--accent-bright)" strokeWidth={2}/>{l}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---- STATS ---- */
const Stats = () => (
  <section className="section-tight" style={{background:"var(--bg-2)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
    <div className="wrap">
      <div className="grid-stats">
        {[
          {p:"R$ ",v:500,s:" mil+",l:"Tráfego gerado no Google para clientes"},
          {p:"",  v:6,  s:"+",   l:"Anos de experiência em marketing digital"},
          {p:"",  v:15, s:"+",   l:"Estados com clientes atendidos no Brasil"},
          {p:"+", v:90, s:"",    l:"Nota média de desempenho dos sites entregues"},
        ].map((s,i)=>(
          <Reveal key={i} delay={i*80} className="card" style={{padding:"28px 18px",textAlign:"center"}}>
            <StatNumber prefix={s.p} value={s.v} suffix={s.s} size={34}/>
            <p style={{margin:"10px 0 0",fontSize:13.5,color:"var(--fg-muted)",lineHeight:1.5}}>{s.l}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---- PAIN POINTS ---- */
const Pain = () => (
  <section className="section" style={{background:"var(--bg)"}}>
    <div className="glow glow-purple" style={{width:320,height:320,top:40,left:-120,opacity:.45}}/>
    <div className="wrap" style={{maxWidth:800}}>
      <Reveal style={{textAlign:"center",marginBottom:48}}>
        <Eyebrow center>Você se identifica?</Eyebrow>
        <h2 className="h2" style={{marginTop:14}}>O problema de <span className="grad-text">não aparecer no Google</span>.</h2>
      </Reveal>
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {SEG.painPoints && SEG.painPoints.map((t,i)=>(
          <Reveal key={i} delay={i*70} className="card" style={{padding:"20px 24px",display:"flex",alignItems:"center",gap:16,borderColor:"rgba(239,68,68,.18)",background:"rgba(239,68,68,.04)"}}>
            <span style={{width:34,height:34,borderRadius:9999,background:"rgba(239,68,68,.14)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <Icon name="x" size={16} color="#F87171" strokeWidth={2.5}/>
            </span>
            <p style={{margin:0,fontSize:15,color:"var(--fg-muted)",lineHeight:1.5}}>{t}</p>
          </Reveal>
        ))}
      </div>
      <Reveal style={{textAlign:"center",marginTop:40}}>
        <p style={{fontSize:17,fontFamily:"var(--serif)",fontWeight:700,color:"var(--fg)"}}>A IS7 resolve isso — com método comprovado e resultado mensurável.</p>
      </Reveal>
    </div>
  </section>
);

/* ---- METHOD ---- */
const Method = () => (
  <section id="metodo" className="section" style={{background:"var(--bg-2)",borderTop:"1px solid var(--line)"}}>
    <div className="glow glow-blue" style={{width:340,height:340,top:80,right:-140,opacity:.4}}/>
    <div className="wrap">
      <Reveal style={{textAlign:"center",maxWidth:640,margin:"0 auto 52px"}}>
        <Eyebrow center>Como colocamos sua empresa no Google</Eyebrow>
        <h2 className="h2" style={{marginTop:14}}>Um método completo e <span className="grad-text">comprovado</span>.</h2>
      </Reveal>
      <div className="grid-services">
        {SEG.methodology && SEG.methodology.map((m,i)=>(
          <Reveal key={i} delay={i*80} className="card card-hover" style={{padding:30,display:"flex",flexDirection:"column",gap:14,position:"relative"}}>
            <span style={{position:"absolute",top:16,right:20,fontFamily:"var(--mono)",fontSize:13,color:"var(--fg-dim)",letterSpacing:".1em"}}>0{i+1}</span>
            <span className="chip"><Icon name={m.icon} size={24} color="var(--accent-bright)" strokeWidth={1.9}/></span>
            <h3 className="h3" style={{fontWeight:800,fontSize:19}}>{m.title}</h3>
            <p style={{margin:0,fontSize:14.5,color:"var(--fg-muted)",lineHeight:1.65}}>{m.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---- PORTFOLIO ---- */
const Portfolio = () => (
  <section id="projetos" className="section">
    <div className="wrap">
      <Reveal style={{textAlign:"center",maxWidth:600,margin:"0 auto 48px"}}>
        <Eyebrow center>Alguns trabalhos desenvolvidos</Eyebrow>
        <h2 className="h2" style={{marginTop:14}}>Projetos reais de <span className="grad-text">{SEG.label}</span>.</h2>
      </Reveal>
      <div className="grid-portfolio" style={{maxWidth:1000,margin:"0 auto"}}>
        {SEG.portfolio && SEG.portfolio.map((p,i)=>(
          <Reveal key={p.id} delay={(i%3)*70} className="card" style={{overflow:"hidden",display:"flex",flexDirection:"column"}}>
            <div style={{height:220,background:"var(--surface-2)",position:"relative"}}>
              <image-slot id={p.id} shape="rect" anchor="top" placeholder={`Print — ${p.caption}`}
                style={{width:"100%",height:"100%",display:"block"}}/>
              <span className="tag tag-accent" style={{position:"absolute",top:10,left:10,backdropFilter:"blur(6px)",background:"rgba(7,10,20,.55)"}}>{p.tag}</span>
            </div>
            <div style={{padding:"16px 18px"}}>
              <p style={{margin:0,fontFamily:"var(--serif)",fontWeight:700,fontSize:16}}>{p.caption}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---- PAGESPEED ---- */
const PageSpeed = () => (
  <section className="section" style={{background:"var(--bg-2)",borderTop:"1px solid var(--line)"}}>
    <div className="glow glow-purple" style={{width:360,height:360,top:0,right:-140,opacity:.4}}/>
    <div className="wrap">
      <Reveal style={{textAlign:"center",maxWidth:620,margin:"0 auto 52px"}}>
        <Eyebrow center>Desempenho técnico</Eyebrow>
        <h2 className="h2" style={{marginTop:14}}>Sites com <span className="grad-text">nota máxima</span> no Google.</h2>
        <p className="lead" style={{marginTop:14}}>Nossos sites são auditados pelo Google PageSpeed Insights — e entregamos sempre acima de 90 em todas as métricas que importam para ranquear.</p>
      </Reveal>

      {/* Gauges */}
      <Reveal style={{display:"flex",flexWrap:"wrap",gap:32,justifyContent:"center",marginBottom:48}}>
        {[
          {score:97, label:"Performance"},
          {score:98, label:"Acessibilidade"},
          {score:100,label:"Boas práticas"},
          {score:100,label:"SEO"},
        ].map((g,i)=>(
          <Gauge key={i} score={g.score} label={g.label}/>
        ))}
      </Reveal>

      {/* Screenshot slot */}
      <Reveal style={{maxWidth:820,margin:"0 auto"}}>
        <div className="card" style={{padding:10,borderColor:"rgba(145,69,230,.3)"}}>
          <div style={{background:"var(--surface-2)",borderRadius:14,overflow:"hidden",position:"relative",paddingTop:"44%"}}>
            <image-slot id={`pagespeed-${SEG.key}`} shape="rect" anchor="top"
              placeholder="Arraste aqui o print do Google PageSpeed do site"
              style={{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}/>
          </div>
          <p style={{margin:"12px 0 4px",textAlign:"center",fontSize:13,color:"var(--fg-dim)",fontFamily:"var(--mono)",letterSpacing:".1em",textTransform:"uppercase"}}>
            Relatório real do Google PageSpeed Insights
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---- REVIEWS ---- */
const Reviews = () => {
  const REVIEWS = [
    {name:"Allan Ferraz",  initial:"A", count:"11 avaliações",text:"Atendimento rápido e conciso, meu site ficou lindo e agora tô recebendo clientes melhores investindo menos do que antes."},
    {name:"André Vicente", initial:"A", count:"3 avaliações", text:"Alcancei resultados expressivos e grandes feitos graças às estratégias criadas por essa assessoria."},
    {name:"Vinicius Cortiano",initial:"V",count:"4 avaliações",text:"Trabalho de qualidade e excelente atendimento!"},
  ];
  return (
    <section id="depoimentos" className="section">
      <div className="glow glow-blue" style={{width:320,height:320,top:60,right:-100,opacity:.4}}/>
      <div className="wrap">
        <Reveal style={{textAlign:"center",marginBottom:48}}>
          <Eyebrow center>O que dizem nossos clientes</Eyebrow>
          <h2 className="h2" style={{marginTop:14,fontSize:"clamp(40px,5.5vw,64px)"}}>EXCELENTE</h2>
          <div style={{display:"flex",justifyContent:"center",gap:4,marginTop:10}}>
            {[0,1,2,3,4].map(i=><Icon key={i} name="star" size={22} color="#FBBF24" fill="#FBBF24" strokeWidth={0}/>)}
          </div>
          <p className="muted" style={{marginTop:8}}>5.0 · 25+ avaliações no Google</p>
        </Reveal>
        <div className="grid-reviews">
          {REVIEWS.map((r,i)=>(
            <Reveal key={i} delay={i*80} className="card" style={{padding:24,display:"flex",flexDirection:"column",gap:14}}>
              <Stars/>
              <p style={{margin:0,fontSize:15,lineHeight:1.65}}>"{r.text}"</p>
              <div style={{display:"flex",alignItems:"center",gap:11,marginTop:"auto",paddingTop:10,borderTop:"1px solid var(--line)"}}>
                <span style={{width:38,height:38,borderRadius:9999,background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--serif)",fontWeight:800,color:"#fff"}}>{r.initial}</span>
                <div>
                  <p style={{margin:0,fontSize:14,fontWeight:600}}>{r.name}</p>
                  <p style={{margin:0,fontSize:12,color:"var(--fg-dim)"}}>{r.count}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{textAlign:"center",marginTop:36}}>
          <a href="https://maps.app.goo.gl/EuyiNkJ55Y8NJL7EA" target="_blank" rel="noreferrer" className="btn btn-ghost">
            Ver no Google <Icon name="external-link" size={16}/>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

/* ---- ABOUT ---- */
const About = () => (
  <section className="section" style={{background:"var(--bg-2)",borderTop:"1px solid var(--line)"}}>
    <div className="wrap" style={{maxWidth:900}}>
      <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:48,alignItems:"center"}} className="about-grid">
        <Reveal>
          <div className="card" style={{padding:8,borderRadius:20,borderColor:"rgba(145,69,230,.35)",width:240}}>
            <image-slot id="guilherme-proposta" shape="rect" anchor="top"
              placeholder="Foto do Guilherme"
              style={{width:"100%",aspectRatio:"4/5",display:"block",borderRadius:14}}/>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>Quem está por trás</Eyebrow>
          <h2 className="h2" style={{marginTop:14,fontSize:"clamp(26px,3.4vw,40px)"}}>Guilherme Llanos</h2>
          <p style={{margin:"6px 0 0",fontFamily:"var(--mono)",fontSize:13,color:"var(--accent-bright)",letterSpacing:".1em"}}>Fundador da IS7 Mídias Digitais</p>
          <p style={{margin:"20px 0 0",fontSize:15.5,color:"var(--fg-muted)",lineHeight:1.7}}>
            "Trabalhei com marketing para mais de 17 grupos, gerenciando mais de R$500 mil em Google Ads. Meu foco é simples: colocar negócios locais nas primeiras posições do Google e garantir que cada real investido traga retorno real."
          </p>
          <div style={{display:"flex",gap:14,marginTop:26,flexWrap:"wrap"}}>
            {[["map-pin","Curitiba/PR"],["calendar-days","6+ anos"],["users","15+ estados"]].map(([ic,l])=>(
              <span key={l} className="tag" style={{padding:"8px 14px",fontSize:12.5}}>
                <Icon name={ic} size={13} color="var(--accent-bright)"/>{l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
    <style>{`@media(max-width:700px){ .about-grid{ grid-template-columns:1fr !important; } .about-grid > *:first-child{ width:180px !important; } }`}</style>
  </section>
);

/* ---- HOW IT WORKS ---- */
const HowItWorks = () => (
  <section className="section">
    <div className="glow glow-purple" style={{width:300,height:300,bottom:-80,left:-100,opacity:.4}}/>
    <div className="wrap" style={{maxWidth:780}}>
      <Reveal style={{textAlign:"center",marginBottom:52}}>
        <Eyebrow center>Como funciona após a aprovação</Eyebrow>
        <h2 className="h2" style={{marginTop:14}}>Processo simples. <span className="grad-text">Resultado completo.</span></h2>
      </Reveal>
      <div style={{display:"flex",flexDirection:"column",gap:20}}>
        {[
          {n:"01",icon:"credit-card",  title:"Pagamento",          desc:"Pagamento de 50% na aprovação e 50% na entrega. Pix, cartão de crédito ou boleto — sem complicação."},
          {n:"02",icon:"users",        title:"Reunião de Alinhamento", desc:"Agendamos uma reunião para entender a fundo o seu negócio, região de atendimento, serviços e diferenciais. Tudo isso vira combustível para a estratégia."},
          {n:"03",icon:"trending-up",  title:"Gestão por 1 Mês",   desc:"Publicamos, otimizamos, monitoramos e ajustamos. Você acompanha os resultados e recebe um relatório claro ao final do mês."},
        ].map((s,i)=>(
          <Reveal key={i} delay={i*80} className="card" style={{padding:"22px 26px",display:"flex",gap:20,alignItems:"flex-start"}}>
            <div style={{width:44,height:44,borderRadius:9999,background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--serif)",fontWeight:800,fontSize:16,color:"#fff",flexShrink:0}}>{s.n}</div>
            <div>
              <h3 style={{fontFamily:"var(--serif)",fontWeight:700,fontSize:19,margin:"0 0 8px",display:"flex",alignItems:"center",gap:10}}>
                <Icon name={s.icon} size={17} color="var(--accent-bright)" strokeWidth={2}/>{s.title}
              </h3>
              <p style={{margin:0,fontSize:15,color:"var(--fg-muted)",lineHeight:1.65}}>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---- PRICING ---- */
const PLANS = [
  {
    id: "mensal",
    label: "Mensal",
    months: 1,
    price: 590,
    total: null,
    badge: null,
    desc: "Sem contrato",
    highlight: false,
  },
  {
    id: "trimestral",
    label: "Trimestral",
    months: 3,
    price: 490,
    total: 1470,
    badge: "17% off",
    desc: "3 meses",
    highlight: false,
  },
  {
    id: "semestral",
    label: "Semestral",
    months: 6,
    price: 420,
    total: 2520,
    badge: "29% off",
    desc: "6 meses",
    highlight: false,
  },
  {
    id: "anual",
    label: "Anual",
    months: 12,
    price: 350,
    total: 4200,
    badge: "Melhor valor",
    desc: "12 meses",
    highlight: true,
  },
];

const INCLUDES = [
  "Site profissional otimizado",
  "Perfil da Empresa no Google configurado",
  "Gestão de Google Ads",
  "Relatório mensal de resultados",
  "1 campanha ativa no mês",
  "Suporte via WhatsApp",
  "Até 2 rodadas de ajuste",
  "Copywriting dos anúncios",
];

const Pricing = () => {
  const [selected, setSelected] = React.useState("anual");
  const plan = PLANS.find(p => p.id === selected);
  const waCTA = wa(`Olá! Vi a proposta da IS7 e quero contratar o plano ${plan.label} de R$${plan.price}/mês.`);

  return (
    <section id="investimento" className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)" }}>
      <div className="glow glow-blue" style={{ width: 400, height: 400, top: -120, left: "50%", transform: "translateX(-50%)", opacity: .5 }} />
      <div className="wrap" style={{ maxWidth: 760, position: "relative", zIndex: 2, textAlign: "center" }}>
        <Reveal>
          <Eyebrow center>Investimento</Eyebrow>
          <h2 className="h2" style={{ marginTop: 14 }}>Quanto mais tempo, <span className="grad-text">mais barato fica</span>.</h2>
          <p className="lead" style={{ marginTop: 14, maxWidth: 520, margin: "14px auto 0" }}>
            Escolha o plano que melhor se encaixa no momento da sua empresa.
          </p>
        </Reveal>

        {/* Plan selector */}
        <Reveal delay={80}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center",
            margin: "36px auto 28px", padding: "6px", background: "var(--surface)",
            border: "1px solid var(--line)", borderRadius: 16, maxWidth: 480,
          }}>
            {PLANS.map(p => (
              <button key={p.id} onClick={() => setSelected(p.id)} style={{
                flex: 1, minWidth: 90, padding: "10px 14px", borderRadius: 10, border: "none",
                cursor: "pointer", fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14,
                transition: "all .25s",
                background: selected === p.id
                  ? (p.highlight ? "var(--grad)" : "var(--surface-2)")
                  : "transparent",
                color: selected === p.id ? "#fff" : "var(--fg-muted)",
                boxShadow: selected === p.id ? "0 4px 14px -4px rgba(145,69,230,.4)" : "none",
              }}>
                {p.label}
                {p.badge && (
                  <span style={{
                    display: "block", fontSize: 10, fontWeight: 700,
                    color: selected === p.id ? "rgba(255,255,255,.75)" : "var(--accent-bright)",
                    marginTop: 2, letterSpacing: ".04em",
                  }}>{p.badge}</span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Price card */}
        <Reveal delay={120}>
          <div className="card" style={{
            padding: "40px 36px",
            borderColor: plan.highlight ? "rgba(145,69,230,.5)" : "var(--line-2)",
            background: plan.highlight
              ? "linear-gradient(160deg, rgba(145,69,230,.10), rgba(59,108,255,.06))"
              : "var(--surface)",
            transition: "all .3s",
          }}>
            {/* Price display */}
            <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 28, marginBottom: 28 }}>
              {plan.highlight && (
                <span style={{
                  display: "inline-block", marginBottom: 12,
                  background: "var(--grad)", color: "#fff",
                  fontSize: 12, fontWeight: 700, letterSpacing: ".1em",
                  padding: "5px 14px", borderRadius: 9999,
                }}>MELHOR VALOR</span>
              )}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                <div style={{ textAlign: "left" }}>
                  <p style={{ margin: "0 0 2px", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--fg-dim)" }}>por mês</p>
                  <div style={{ display: "inline-flex", alignItems: "baseline", gap: 4, fontFamily: "var(--serif)", fontWeight: 900, letterSpacing: "-.04em" }}>
                    <span style={{ fontSize: 22, background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>R$</span>
                    <span style={{ fontSize: "clamp(56px,8vw,84px)", background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>{plan.price}</span>
                  </div>
                </div>
                {plan.total && (
                  <div style={{ textAlign: "left", borderLeft: "1px solid var(--line-2)", paddingLeft: 16 }}>
                    <p style={{ margin: 0, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-dim)" }}>total</p>
                    <p style={{ margin: "4px 0 0", fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, color: "var(--fg)" }}>R$ {plan.total.toLocaleString("pt-BR")}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--fg-dim)" }}>em {plan.months}x de R${plan.price}</p>
                  </div>
                )}
              </div>
              {!plan.total && (
                <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--fg-muted)" }}>Sem fidelidade, cancela quando quiser</p>
              )}
            </div>

            {/* Includes */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px", textAlign: "left" }}>
              {INCLUDES.map((it, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--fg-muted)" }}>
                  <Icon name="check" size={15} color="var(--accent-bright)" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />{it}
                </li>
              ))}
            </ul>

            <a href={waCTA} target="_blank" rel="noreferrer" className="btn btn-wa" style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 15 }}>
              <svg viewBox="0 0 32 32" style={{ width: 20, height: 20, fill: "#04210F", flexShrink: 0 }}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z" /></svg>
              Contratar plano {plan.label} — R${plan.price}/mês
            </a>
            <p style={{ marginTop: 12, fontSize: 12, color: "var(--fg-dim)" }}>
              Resposta em até 1h nos dias úteis · (41) 98743-0349
            </p>
          </div>
        </Reveal>

        {/* Savings comparison */}
        <Reveal delay={160}>
          <p style={{ marginTop: 20, fontSize: 13, color: "var(--fg-dim)" }}>
            No plano anual você economiza <strong style={{ color: "var(--accent-bright)" }}>R$ 2.880</strong> comparado ao mensal.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ---- FAQ ---- */
const FaqItem = ({item,open,onToggle}) => {
  const ref = React.useRef(null);
  return (
    <div className={`faq-item ${open?"open":""}`}>
      <button className="faq-q" onClick={onToggle}>
        <span>{item.q}</span>
        <span className="faq-ic"><Icon name="plus" size={16} color={open?"#fff":"var(--accent-bright)"}/></span>
      </button>
      <div className="faq-a" style={{maxHeight:open&&ref.current?ref.current.scrollHeight+24:0}}>
        <div className="inner" ref={ref}>{item.a}</div>
      </div>
    </div>
  );
};

const FAQS_SHARED = [
  {q:"Vocês atendem fora de Curitiba?", a:"Sim! Já assessoramos clientes em mais de 15 estados. Todo o atendimento é online, com a mesma proximidade e atenção."},
  {q:"Preciso ter site para fazer Google Ads?", a:"Para a melhor conversão, sim. Um site rápido com botão de chamada direta aumenta muito a taxa de contato. Incluímos o site no nosso pacote."},
  {q:"Como acompanho os resultados?", a:"Você recebe um relatório mensal claro com visitas, cliques, chamadas e conversões. E pode nos chamar no WhatsApp a qualquer momento para tirar dúvidas."},
];

const Faq = () => {
  const allFaqs = [...(SEG.faq||[]), ...FAQS_SHARED];
  const [open,setOpen] = React.useState(0);
  return (
    <section className="section">
      <div className="wrap" style={{maxWidth:780}}>
        <Reveal style={{textAlign:"center",marginBottom:48}}>
          <Eyebrow center>Perguntas frequentes</Eyebrow>
          <h2 className="h2" style={{marginTop:14}}>Dúvidas respondidas.</h2>
        </Reveal>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {allFaqs.map((item,i)=>(
            <Reveal key={i} delay={i*40}>
              <FaqItem item={item} open={open===i} onToggle={()=>setOpen(open===i?-1:i)}/>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---- FINAL CTA ---- */
const FinalCTA = () => (
  <section className="section" style={{background:"var(--bg-2)",borderTop:"1px solid var(--line)",position:"relative",overflow:"hidden"}}>
    <div className="glow glow-purple" style={{width:500,height:500,top:-160,left:"50%",transform:"translateX(-50%)",opacity:.55}}/>
    <div className="wrap" style={{position:"relative",zIndex:2,textAlign:"center",maxWidth:680}}>
      <Reveal>
        <Eyebrow center>Pronto para começar?</Eyebrow>
        <h2 className="h2" style={{marginTop:16}}>
          Coloque seu <span className="grad-text">{SEG.label}</span><br/>no topo do Google hoje.
        </h2>
        <p className="lead" style={{marginTop:18,maxWidth:520,margin:"18px auto 0"}}>
          Entre em contato agora e receba uma análise gratuita da presença digital da sua empresa.
        </p>
        <div style={{display:"flex",flexWrap:"wrap",gap:14,justifyContent:"center",marginTop:36}}>
          <a href={WA_CTA} target="_blank" rel="noreferrer" className="btn btn-wa btn-lg">
            <svg viewBox="0 0 32 32" style={{width:20,height:20,fill:"#04210F",flexShrink:0}}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z"/></svg>
            Quero minha análise gratuita
          </a>
          <a href="IS7 Site.html" className="btn btn-ghost btn-lg">Conhecer a IS7</a>
        </div>
        <p className="dim" style={{marginTop:22,fontSize:13}}>(41) 98743-0349 · guilherme@is7mkt.com.br</p>
      </Reveal>
    </div>
  </section>
);

/* ---- FOOTER ---- */
const Footer = () => (
  <footer style={{background:"var(--bg)",borderTop:"1px solid var(--line)",padding:"28px 0"}}>
    <div className="wrap" style={{display:"flex",flexWrap:"wrap",gap:16,alignItems:"center",justifyContent:"space-between"}}>
      <a href="IS7 Site.html"><Logo size={20}/></a>
      <p style={{margin:0,fontSize:12,color:"var(--fg-dim)"}}>CNPJ 50.201.864/0001-40 · IS7 Mídias Digitais · Curitiba/PR</p>
      <a href={WAPP} target="_blank" rel="noreferrer" style={{fontSize:12,color:"var(--fg-dim)"}}>(41) 98743-0349</a>
    </div>
  </footer>
);

/* ---- FAB ---- */
const Fab = () => (
  <a className="fab" href={WA_CTA} target="_blank" rel="noreferrer" aria-label="WhatsApp">
    <svg viewBox="0 0 32 32" style={{width:30,height:30,fill:"#04210F"}}><path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z"/></svg>
  </a>
);

/* ---- APP ---- */
const useReveal = () => {
  React.useEffect(()=>{
    document.body.classList.add("js-anim");
    const trigger = el=>el.classList.add("in");
    const obs = new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){trigger(e.target);o.unobserve(e.target);}}),{threshold:.12});
    const check=()=>document.querySelectorAll(".reveal").forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight*.92) trigger(el); else obs.observe(el);
    });
    check(); const t=setInterval(check,400); setTimeout(()=>clearInterval(t),5000);
    return()=>{obs.disconnect();clearInterval(t);};
  },[]);
};

const PropostaApp = () => {
  useReveal();
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Hero/>
        <Stats/>
        <Pain/>
        <Method/>
        <Portfolio/>
        <PageSpeed/>
        <Reviews/>
        <About/>
        <HowItWorks/>
        <Pricing/>
        <Faq/>
        <FinalCTA/>
      </main>
      <Footer/>
      <Fab/>
    </React.Fragment>
  );
};

window.PropostaApp = PropostaApp;
