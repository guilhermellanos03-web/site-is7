import AnimatedSection from "./AnimatedSection";

const InstagramFeed = () => (
  <section className="py-20 bg-[#F8F9FA]">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-10">
          <p className="text-brand-purple font-medium text-sm tracking-widest uppercase mb-3">
            INSTAGRAM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] font-heading">
            Acompanhe nosso conteúdo
          </h2>
          <p className="text-[#666] mt-2">
            Dicas diárias de marketing digital para seu negócio
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex justify-center">
          <div
            className="elfsight-app-8cda35fe-20cd-4225-80d0-b46beb7e3350 w-full"
            data-elfsight-app-lazy
          />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default InstagramFeed;
