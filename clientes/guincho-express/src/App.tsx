import { BotoesFlutuantes } from "./components/Botoes";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
import { ComoFunciona } from "./components/ComoFunciona";
import { Diferenciais } from "./components/Diferenciais";
import { Cobertura } from "./components/Cobertura";
import { Avaliacoes } from "./components/Avaliacoes";
import { CtaFinal } from "./components/CtaFinal";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Sobre />
        <Servicos />
        <ComoFunciona />
        <Diferenciais />
        <Cobertura />
        <Avaliacoes />
        <CtaFinal />
      </main>
      <Footer />
      <BotoesFlutuantes />
    </>
  );
}
