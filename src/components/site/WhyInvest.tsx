const WAPP_LINK = "https://api.whatsapp.com/send?phone=5541984481619&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20da%20IS7!";

export const WhyInvest = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-12">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Por que investir?</h2>
          
          <div className="space-y-6 text-center">
            <p className="text-lg">
              O <strong>Google</strong> é a <strong>maior rede de pesquisa do mundo!</strong> Já pensou usar disso{" "}
              <strong>a favor do seu negócio?</strong>
            </p>
            
            <p className="text-lg">
              Nós, da <strong>IS7</strong> desenvolvemos um{" "}
              <strong>método especializado em Google,</strong> trazendo três pilares para o funcionamento, a{" "}
              <strong>página de vendas</strong>, o <strong>Google meu negócio</strong> e uma{" "}
              <strong>consultoria personalizada.</strong> Tudo isso desenvolvido por{" "}
              <strong>equipes com experiência e conhecimento em mercado digital</strong>.
            </p>
            
            <p className="text-lg">
              É uma <strong>divulgação comprovada</strong> para <strong>gerar visibilidade,</strong>{" "}
              <strong>alavancar</strong> as <strong>vendas</strong> e o seu <strong>negócio!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;