import { CheckCircle2 } from "lucide-react";

const items = [
  {
    title: "Apareça no Google em poucos dias",
    description: "Seus clientes encontram sua empresa facilmente."
  },
  {
    title: "Mais contatos no WhatsApp",
    description: "A página direciona o visitante direto para conversa."
  },
  {
    title: "Design responsivo",
    description: "Funciona perfeitamente no celular e no computador."
  },
  {
    title: "Sem mensalidades obrigatórias",
    description: "Você paga uma vez e o site é seu."
  }
];

export const Benefits = () => (
  <section id="beneficios" className="py-20">
    <div className="container">
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Por que escolher a IS7?</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-6 rounded-lg border bg-card">
            <CheckCircle2 className="text-accent shrink-0" />
            <div>
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;