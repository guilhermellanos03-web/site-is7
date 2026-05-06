const WAPP_LINK = "https://api.whatsapp.com/send?phone=5541984481619&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20da%20IS7!";

export const WhatWeOffer = () => {
  const offers = [
    {
      title: "Mais vendas e clientes",
      description: "Nada melhor do que aumentar as vendas, os clientes e principalmente o faturamento. Nossa missão é através da qualidade do nosso serviço proporcionar o destaque para a empresa dos nossos clientes!"
    },
    {
      title: "Melhor posicionamento", 
      description: "Saiba a forma correta de aparecer para os seus clientes, como se comunicar graficamente e textualmente com o seu público."
    },
    {
      title: "Excelência no mercado digital",
      description: "O marketing digital é muito falado, mas poucos sabem como utiliza-lo ao seu favor. Sabemos como fazer com que as ferramentas digitais contribuam para o crescimento do seu negócio."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">
          O que a IS7 pode te oferecer?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {offers.map((offer, index) => (
            <div key={index} className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-primary">{offer.title}</h3>
              <p className="text-gray-600 leading-relaxed">{offer.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={WAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            Quero alavancar meu negócio!
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;