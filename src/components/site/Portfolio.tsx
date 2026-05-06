import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

const items = [
  { src: p1, alt: "Mockup de site institucional em notebook", title: "Site Institucional" },
  { src: p2, alt: "Mockup de landing page em smartphone e notebook", title: "Landing Page" },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Alguns projetos criados</h2>
          <p className="text-muted-foreground mt-2">Veja exemplos de páginas que entregamos.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.title} className="rounded-lg overflow-hidden border bg-card hover-scale">
              <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-56 object-cover" />
              <figcaption className="p-4 text-sm text-muted-foreground">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;