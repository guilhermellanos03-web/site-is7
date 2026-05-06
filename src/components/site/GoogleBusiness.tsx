import { Star, ExternalLink, MapPin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const GMAPS_URL = "https://maps.app.goo.gl/EuyiNkJ55Y8NJL7EA?g_st=ipc";

// Avaliações reais do Google Meu Negócio da IS7
const realReviews = [
  {
    name: "Vinicius Cortiano",
    text: "Trabalho de qualidade e excelente atendimento!",
    reviewCount: "4 avaliações"
  },
  {
    name: "Allan Ferraz", 
    text: "Atendimento rápido e conciso, meu site ficou lindo e agora tô recebendo clientes melhores investindo menos do que antes.",
    reviewCount: "11 avaliações"
  },
  {
    name: "André Vicente",
    text: "Graças as mudanças de direcionamento e grandes estratégias criadas por essa agência, alcancei resultados expressivos e grandes feitos.",
    reviewCount: "3 avaliações"
  },
  {
    name: "Carol Lopes",
    text: "Profissionais de qualidade e confiança.",
    reviewCount: "1 avaliação"
  },
  {
    name: "Geovanna Xavier",
    text: "Ótimos serviços, entregam o que prometem com muita agilidade e pontualidade. Recomendo!!",
    reviewCount: "7 avaliações"
  },
  {
    name: "Julia Morita",
    text: "Excelente.",
    reviewCount: "1 avaliação"
  }
];

export const GoogleBusiness = () => {
  return (
    <section id="google" aria-label="Google Meu Negócio" className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <header className="mb-12 text-center">
          <p className="uppercase tracking-widest text-primary-foreground/80 text-sm">Clientes que comprovaram</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-2">EXCELENTE</h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-google-yellow">
            <Star className="h-6 w-6" fill="currentColor" />
            <Star className="h-6 w-6" fill="currentColor" />
            <Star className="h-6 w-6" fill="currentColor" />
            <Star className="h-6 w-6" fill="currentColor" />
            <Star className="h-6 w-6" fill="currentColor" />
          </div>
          <p className="mt-2 text-primary-foreground/85">Com base em <span className="font-semibold">25+ avaliações</span></p>
          <div className="mt-3 text-4xl font-semibold leading-none" aria-label="Google">
            <span className="text-google-blue">G</span>
            <span className="text-google-red">o</span>
            <span className="text-google-yellow">o</span>
            <span className="text-google-blue">g</span>
            <span className="text-google-green">l</span>
            <span className="text-google-red">e</span>
          </div>
          <div className="mt-6">
            <Button asChild variant="brand">
              <a href={GMAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Ver no Google <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realReviews.slice(0, 3).map((review, index) => (
            <article key={review.name} className="p-6 rounded-lg border bg-card h-full">
              <div className="flex items-center gap-1 text-google-yellow mb-3">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <p className="text-sm text-card-foreground mb-4">"{review.text}"</p>
              <div className="mt-auto">
                <p className="text-sm font-medium text-card-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.reviewCount}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-xs text-primary-foreground/70 mt-6 text-center">Avaliações reais do Google Meu Negócio.</p>
      </div>
    </section>
  );
};

export default GoogleBusiness;