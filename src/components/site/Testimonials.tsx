import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Avaliações reais do Google Meu Negócio da IS7
const googleReviews = [
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

export const Testimonials = () => (
  <section className="py-16">
    <div className="container">
      <header className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">O que nossos clientes dizem</h2>
        
        {/* Google Branding Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-1 text-google-yellow mb-2">
            <Star className="h-6 w-6" fill="currentColor" />
            <Star className="h-6 w-6" fill="currentColor" />
            <Star className="h-6 w-6" fill="currentColor" />
            <Star className="h-6 w-6" fill="currentColor" />
            <Star className="h-6 w-6" fill="currentColor" />
          </div>
          <p className="text-muted-foreground mb-4">Com base em <span className="font-semibold">25+ avaliações</span></p>
          <div className="text-4xl font-semibold leading-none" aria-label="Google">
            <span className="text-google-blue">G</span>
            <span className="text-google-red">o</span>
            <span className="text-google-yellow">o</span>
            <span className="text-google-blue">g</span>
            <span className="text-google-green">l</span>
            <span className="text-google-red">e</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {googleReviews.map((review) => (
              <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-1 text-google-yellow mb-2">
                      <Star className="h-4 w-4" fill="currentColor" />
                      <Star className="h-4 w-4" fill="currentColor" />
                      <Star className="h-4 w-4" fill="currentColor" />
                      <Star className="h-4 w-4" fill="currentColor" />
                      <Star className="h-4 w-4" fill="currentColor" />
                    </div>
                    <p className="text-sm text-muted-foreground flex-1">"{review.text}"</p>
                    <div className="mt-auto">
                      <p className="font-medium">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.reviewCount}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      
      <p className="text-xs text-muted-foreground mt-6 text-center">Avaliações reais do Google Meu Negócio.</p>
    </div>
  </section>
);

export default Testimonials;