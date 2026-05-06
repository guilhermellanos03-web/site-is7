export const WhatWeDo = () => {
  const services = [
    {
      title: "Criação de páginas de vendas",
      description: "Nossas páginas de vendas são feitas por uma equipe profissional e experiente, pronta para traduzir a alma da sua empresa em uma só página! Nossas páginas de vendas são desenvolvidas através do WordPress e Elementor pro, tudo que há de mais atual e profissional no mercado! Além de tudo, oferecemos hospedagem por um ano sem nenhum custo adicional."
    },
    {
      title: "Google meu negócio",
      description: "Saiba a maneira correta de aparecer no Google, explorando as oportunidades e se tornando destaque da sua região! Nossa equipe especializada sabe e aponta os principais aspectos para o bom e correto posicionamento no Google meu negócio. Aparecendo nas pesquisas e no Maps!"
    },
    {
      title: "Consultoria",
      description: "Além de tudo, fornecemos durante um mês uma consultoria de como manter e gerenciar sua empresa no Google. Tudo isso por um único serviço, no qual os resultados aparecem para sempre!"
    }
  ];

  const mainServices = [
    "Criação de páginas de vendas.",
    "Posicionamento Google meu negócio.", 
    "Consultoria."
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            O que
            <br />
            fazemos?
          </h2>
          <p className="text-lg mb-12">
            Conheça <strong>quais são</strong> os nossos <strong>serviços</strong> e como eles podem{" "}
            <strong>transformar a sua empresa!</strong>
          </p>
          
          <div className="space-y-4 mb-16">
            {mainServices.map((service, index) => (
              <div key={index} className="text-lg">
                – {service}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;