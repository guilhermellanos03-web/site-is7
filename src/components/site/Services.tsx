import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Rocket, Search, MessageSquare } from "lucide-react";

const services = [
  { icon: Globe, title: "Criação de Sites", desc: "Sites institucionais completos e profissionais." },
  { icon: Rocket, title: "Landing Pages", desc: "Páginas de alta conversão para campanhas." },
  { icon: Search, title: "Otimização para Google", desc: "SEO técnico e boas práticas de velocidade." },
  { icon: MessageSquare, title: "Integração com WhatsApp", desc: "Atenda seus clientes em um clique." },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="container">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Serviços</h2>
          <p className="text-muted-foreground mt-2">Soluções sob medida para o seu negócio crescer online.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover-scale">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-accent/15 text-accent inline-flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;