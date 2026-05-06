import { MapPin, BarChart3, MousePointerClick } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: MapPin,
    number: "01",
    title: "Posicionamento",
    desc: "Apareça nas primeiras posições do Google quando alguém pesquisar pelo seu serviço. Otimização completa do Google Meu Negócio e presença orgânica duradoura.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Tráfego",
    desc: "Atraia visitantes qualificados para o seu negócio todos os dias. Estratégias de Google Ads e posicionamento orgânico para gerar fluxo constante de clientes.",
  },
  {
    icon: MousePointerClick,
    number: "03",
    title: "Conversão",
    desc: "De nada adianta aparecer se não vender. Criamos sites e páginas profissionais focados em transformar visitantes em clientes reais.",
  },
];

export const Method = () => {
  return (
    <section id="metodo" className="py-20 bg-[#F8F9FA]">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-brand-purple font-medium text-sm tracking-widest uppercase mb-3">O Método IS7</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] font-heading">
              Como colocamos sua empresa no Google
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
              >
                <span className="absolute top-4 left-4 text-5xl font-extrabold text-[#0A1628]/10 leading-none select-none font-heading">
                  {pillar.number}
                </span>
                <pillar.icon className="w-10 h-10 text-brand-purple mb-4 relative z-10" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-[#0A1628] mb-3 relative z-10 font-heading">{pillar.title}</h3>
                <p className="text-[#B0B0B0] leading-relaxed text-sm relative z-10">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Method;
