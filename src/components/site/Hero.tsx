import IS7Logo from "./IS7Logo";
import AnimatedSection from "./AnimatedSection";
import { Star, Globe, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="bg-[#F8F9FA] min-h-[85vh] flex items-center overflow-hidden">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <IS7Logo size="large" className="mb-8 block" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 font-heading">
                <span className="text-[#0A1628]">O método que coloca</span>
                <br />
                <span className="text-brand-purple">sua empresa no Google.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#B0B0B0] max-w-xl mb-10 leading-relaxed">
                Seu negócio encontrado por quem já está procurando. Posicionamento estratégico no Google que gera clientes todos os dias.
              </p>
              <a
                href="#metodo"
                className="inline-block bg-brand-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity hover-scale"
              >
                Quero conhecer o método
              </a>
            </div>
          </AnimatedSection>

          {/* Mockup visual */}
          <div className="hidden md:flex items-center justify-center relative">
            <div className="animate-hero-float relative z-10" style={{ animationDelay: "0s" }}>
              <div className="w-[340px] bg-[#0A1628] rounded-2xl shadow-2xl overflow-hidden border border-white/10 rotate-[-2deg]">
                <div className="bg-[#0f1d33] px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded-md h-5 ml-2 flex items-center px-2">
                    <Globe className="w-3 h-3 text-white/40 mr-1" />
                    <span className="text-[10px] text-white/40">seusite.com.br</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-white/15 rounded w-3/4" />
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-5/6" />
                  <div className="mt-4 h-8 bg-brand-purple/60 rounded-full w-1/2" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-16 bg-white/5 rounded-lg" />
                    <div className="h-16 bg-white/5 rounded-lg" />
                    <div className="h-16 bg-white/5 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-hero-float absolute -bottom-4 -left-4 z-20" style={{ animationDelay: "1s" }}>
              <div className="w-[180px] bg-[#0A1628] rounded-3xl shadow-2xl overflow-hidden border border-white/10 rotate-[3deg]">
                <div className="bg-[#0f1d33] px-3 py-1.5 flex items-center justify-center">
                  <span className="text-[9px] text-white/50">Google Meu Negócio</span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3 h-3 text-brand-purple" />
                    <span className="text-[10px] text-white/70 font-semibold">Sua Empresa</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[9px] text-white/50">5.0 — 25+ avaliações</p>
                  <div className="h-2 bg-white/10 rounded w-full mt-2" />
                  <div className="h-2 bg-white/10 rounded w-4/5" />
                  <div className="h-6 bg-brand-purple/50 rounded-full w-3/4 mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
