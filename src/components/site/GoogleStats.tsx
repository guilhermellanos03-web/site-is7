const WAPP_LINK = "https://api.whatsapp.com/send?phone=5541984481619&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20da%20IS7!";

export const GoogleStats = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Mais de</h2>
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold mb-4">5</div>
          <div className="text-8xl md:text-9xl font-bold mb-4">bilhões</div>
        </div>
        <p className="text-xl mb-12">De usuários estão no Google.</p>
        
        <a 
          href={WAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
        >
          Quero saber mais!
        </a>
      </div>
    </section>
  );
};

export default GoogleStats;