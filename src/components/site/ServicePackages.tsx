export const ServicePackages = () => {
  const packages = [
    {
      title: "Consultoria",
      features: [
        "Com profissionais experientes no mercado!",
        "Recomendações.",
        "Fórmula de como aparecer no Google.",
        "Assistência 24 hrs 7 dias por semana.",
        "Durante 1 mês.",
        "Sem custo adicional."
      ]
    },
    {
      title: "Página de vendas",
      features: [
        "Hospedagem.",
        "Domínio.", 
        "Elementor Pro.",
        "SEO.",
        "+90 de avaliação no google.",
        "Configuração técnica.",
        "Webdesign.",
        "Copywriting."
      ]
    },
    {
      title: "Google",
      features: [
        "Criação do Google meu negócio.",
        "Imagens.",
        "Telefone.",
        "Aparecendo na pesquisa e no Maps.",
        "Posicionamento orgânico.",
        "Configuração técnica.",
        "Copywriting."
      ]
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cuidamos de TUDO para você!
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Para começar do ZERO!
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">{pkg.title}</h3>
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-accent mr-2">-</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;