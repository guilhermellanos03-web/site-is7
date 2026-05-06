import { Search, Globe, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Análise do seu negócio",
    description: "Entendemos seu público e definimos as palavras-chave ideais."
  },
  {
    icon: Globe,
    title: "Criação da página otimizada",
    description: "Desenvolvemos um site moderno, rápido e responsivo."
  },
  {
    icon: MessageCircle,
    title: "Publicação e conexão com seu WhatsApp",
    description: "Seus clientes podem falar com você de forma imediata."
  }
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simples, rápido e eficiente</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Nós cuidamos de tudo para que sua empresa tenha presença profissional no Google, sem complicação.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-accent/15 text-accent inline-flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;