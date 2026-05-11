import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import AuthorityStats from "@/components/site/AuthorityStats";
import BrazilMap from "@/components/site/BrazilMap";
import Method from "@/components/site/Method";
import Cases from "@/components/site/Cases";
import GoogleReviews from "@/components/site/GoogleReviews";
import BlogSection from "@/components/site/BlogSection";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'IS7 Mídias Digitais',
  url: '/',
  logo: '/favicon.ico',
  telephone: '+5541987430349',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://wa.me/5541987430349',
    'https://www.instagram.com/guilherme.is7mkt/',
  ],
  description:
    'Especialistas em Google Meu Negócio e criação de sites profissionais para empresas locais em todo o Brasil. Método IS7: Posicionamento, Tráfego e Conversão.',
};

const Index = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main>
        <Hero />
        <AuthorityStats />
        <BrazilMap />
        <Method />
        <Cases />
        <GoogleReviews />
        <BlogSection />
        <FinalCTA />
      </main>
      <Footer />
      
    </>
  );
};

export default Index;
