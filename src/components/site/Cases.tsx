import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import tribboImg from "@/assets/portfolio-tribbo.png";
import nutriImg from "@/assets/portfolio-nutri.png";
import advImg from "@/assets/portfolio-adv.png";
import barbeiroImg from "@/assets/portfolio-barbeiro.png";

const cases = [
  { img: tribboImg, name: "Tribbo Street", location: "SJP/PR", service: "Site institucional", alt: "Screenshot do site Tribbo Street Estética Automotiva" },
  { img: nutriImg, name: "Nutri Rafaela Gualberto", location: "Curitiba/PR", service: "Site institucional", alt: "Screenshot do site Nutricionista Rafaela Gualberto" },
  { img: advImg, name: "Luã de Assis", location: "Advocacia Tributária", service: "Projeto desenvolvido", alt: "Screenshot do site Luã de Assis Advocacia Tributária" },
  { img: barbeiroImg, name: "Barbearia Velozo", location: "Barbearia", service: "Projeto desenvolvido", alt: "Screenshot do site Barbearia Velozo" },
];

export const Cases = () => {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-brand-purple font-medium text-sm tracking-widest uppercase mb-3">Portfólio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] font-heading">
              Alguns trabalhos desenvolvidos.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cases.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="overflow-hidden h-56 sm:h-64">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 bg-white">
                  <p className="font-bold text-[#0A1628] text-sm font-heading">
                    {c.name} <span className="text-[#B0B0B0] font-normal">— {c.location}</span>
                  </p>
                  <Badge className="mt-2 text-xs bg-brand-purple/10 text-brand-purple border-brand-purple/20 hover:bg-brand-purple/20">
                    {c.service}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/cases"
              className="inline-block border-2 border-brand-purple text-brand-purple px-8 py-3 rounded-full font-semibold hover:bg-brand-purple hover:text-white transition-all duration-300"
            >
              Ver todos os projetos →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Cases;
