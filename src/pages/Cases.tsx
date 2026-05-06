import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import AnimatedSection from "@/components/site/AnimatedSection";

import tribboImg from "@/assets/portfolio-tribbo.png";
import nutriImg from "@/assets/portfolio-nutri.png";
import advImg from "@/assets/portfolio-adv.png";
import barbeiroImg from "@/assets/portfolio-barbeiro.png";
import degustareImg from "@/assets/portfolio-degustare.png";

type Niche = "Todos" | "Food Truck" | "Estética Automotiva" | "Nutricionista" | "Advocacia" | "Barbearia";

const projects: { img: string; name: string; niche: Niche; city: string; url?: string }[] = [
  { img: degustareImg, name: "Degustare Food Truck", niche: "Food Truck", city: "Curitiba — PR" },
  { img: tribboImg, name: "Tribbo Street", niche: "Estética Automotiva", city: "São José dos Pinhais — PR" },
  { img: nutriImg, name: "Nutri Rafaela Gualberto", niche: "Nutricionista", city: "Curitiba — PR" },
  { img: advImg, name: "Luã de Assis", niche: "Advocacia", city: "Curitiba — PR" },
  { img: barbeiroImg, name: "Barbearia Velozo", niche: "Barbearia", city: "Curitiba — PR" },
];

const niches: Niche[] = ["Todos", "Food Truck", "Estética Automotiva", "Nutricionista", "Advocacia", "Barbearia"];
const nicheIcons: Record<Niche, string> = {
  "Todos": "🗂️", "Food Truck": "🍔", "Estética Automotiva": "🚗",
  "Nutricionista": "🥗", "Advocacia": "⚖️", "Barbearia": "✂️",
};

const WAPP_LINK = "https://wa.me/5541987430349?text=Ol%C3%A1!%20Vim%20pelo%20portf%C3%B3lio%20da%20IS7.%20Gostaria%20de%20saber%20mais.";

const Cases = () => {
  const [active, setActive] = useState<Niche>("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.niche === active);

  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0A0E2E] py-20">
          <div className="container text-center px-4">
            <p className="text-[#B91CC8] font-semibold text-xs tracking-widest uppercase mb-3">PORTFÓLIO</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Sites desenvolvidos pela IS7
            </h1>
            <p className="text-[#9AA0B4] text-lg max-w-2xl mx-auto">
              Projetos reais entregues para empresas de todo o Brasil.
              Cada site feito para converter visitante em cliente.
            </p>
          </div>
        </section>

        <section className="bg-[#0D1235] py-6 sticky top-0 z-10 border-b border-white/5">
          <div className="container px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {niches.map((n) => (
                <button
                  key={n}
                  onClick={() => setActive(n)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === n
                      ? "bg-[#B91CC8] text-white shadow-lg shadow-purple-900/30"
                      : "bg-white/5 text-[#9AA0B4] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {nicheIcons[n]} {n}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0A0E2E]">
          <div className="container px-4">
            <p className="text-center text-[#9AA0B4] text-sm mb-10">
              {filtered.length} projeto{filtered.length !== 1 ? "s" : ""}{" "}
              {active !== "Todos" ? `em ${active}` : "no total"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {filtered.map((p, i) => (
                <AnimatedSection key={`${p.name}-${i}`}>
                  <div className="rounded-2xl overflow-hidden bg-[#0D1235] border border-white/5 hover:-translate-y-1 hover:border-[#B91CC8]/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={p.img}
                        alt={`Site ${p.name}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute top-3 left-3 bg-[#B91CC8] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {nicheIcons[p.niche]} {p.niche}
                      </span>
                    </div>
                    <div className="p-5 flex items-start justify-between">
                      <div>
                        <p className="font-bold text-white text-base">{p.name}</p>
                        <p className="text-[#9AA0B4] text-sm mt-1">📍 {p.city}</p>
                      </div>
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#B91CC8] text-xs font-medium hover:underline shrink-0 ml-4 mt-1"
                        >
                          Ver site →
                        </a>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0D1235] border-t border-white/5">
          <div className="container text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quer um site assim para sua empresa?
            </h2>
            <p className="text-[#9AA0B4] mb-8 max-w-xl mx-auto">
              Entre em contato agora e receba um diagnóstico gratuito da sua presença no Google.
            </p>
            <a
              href={WAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#B91CC8] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-base"
            >
              💬 Falar com especialista
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cases;
