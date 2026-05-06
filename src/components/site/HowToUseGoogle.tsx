import { Search, Globe, Target } from "lucide-react";

export const HowToUseGoogle = () => {
  const methods = [
    {
      icon: Target,
      title: "Posicionamento no Google",
      description: "Se posicione da maneira correta no Google, aparecendo para o seu público e explorando as ferramentas ao seu favor."
    },
    {
      icon: Globe,
      title: "Página de vendas", 
      description: "Nada melhor que uma página feita para vender, captar e comunicar da forma mais assertiva e eficiente possível para o seu negócio!"
    },
    {
      icon: Search,
      title: "Práticas recomendadas",
      description: "O algoritmo do Google recomenda e analisa como seus usuários devem se comportar para obter destaque, temos a fórmula secreta para extrair isso ao máximo!"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Como usar o google para aumentar a
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            visibilidade e faturamento?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {methods.map((method, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{method.title}</h3>
              <p className="text-gray-600 leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseGoogle;