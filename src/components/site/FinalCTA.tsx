import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

export const FinalCTA = () => {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "", segmento: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.whatsapp.trim()) return;
    const msg = encodeURIComponent(
      `Olá, vim pelo site, gostaria de saber mais!\n\nNome: ${form.nome}\nE-mail: ${form.email}\nWhatsApp: ${form.whatsapp}${form.segmento ? `\nSegmento: ${form.segmento}` : ""}`
    );
    window.open(`https://wa.me/5541987430349?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-[#0A1628]">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 font-heading">
              Pronto para aparecer no Google?
            </h2>
            <p className="text-[#B0B0B0] text-lg">
              Entre em contato agora e receba um diagnóstico gratuito da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8 flex flex-col items-center justify-center text-center"
              style={{
                background: "rgba(123, 47, 190, 0.1)",
                border: "1px solid rgba(123, 47, 190, 0.3)",
              }}
            >
              <svg viewBox="0 0 32 32" className="w-12 h-12 fill-white mb-4">
                <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.058 31.116l5.944-1.91A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0zm9.314 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.972-7.822-6.8-8.06-7.116-.228-.316-1.916-2.554-1.916-4.872 0-2.318 1.214-3.456 1.644-3.928.39-.428 1.022-.624 1.63-.624.196 0 .372.01.53.018.468.02.702.048 1.012.784.386.918 1.326 3.236 1.442 3.472.118.236.236.55.078.866-.148.326-.278.53-.514.808-.236.278-.458.492-.694.792-.216.26-.46.538-.196.996.264.45 1.174 1.936 2.522 3.136 1.732 1.54 3.192 2.02 3.642 2.236.35.168.766.128 1.04-.168.348-.382.78-.998 1.218-1.606.314-.434.708-.49 1.098-.332.396.148 2.508 1.182 2.938 1.398.43.216.716.324.822.504.104.18.104 1.042-.286 2.142z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Fale pelo WhatsApp</h3>
              <p className="text-[#B0B0B0] text-sm mb-6">Resposta rápida e direta com nosso especialista.</p>
              <a
                href="https://wa.me/5541987430349?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity hover-scale"
              >
                Falar com especialista
              </a>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(123, 47, 190, 0.1)",
                border: "1px solid rgba(123, 47, 190, 0.3)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-2 text-center font-heading">Deixe seus dados</h3>
              <p className="text-[#B0B0B0] text-sm mb-6 text-center">Entraremos em contato em breve.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  required
                  maxLength={100}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  required
                  maxLength={255}
                />
                <Input
                  placeholder="WhatsApp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  required
                  maxLength={20}
                />
                <Input
                  placeholder="Segmento da empresa (ex: clínica, restaurante)"
                  value={form.segmento}
                  onChange={(e) => setForm({ ...form, segmento: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  maxLength={100}
                />
                <Button
                  type="submit"
                  className="w-full bg-brand-purple text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Quero meu diagnóstico gratuito
                </Button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;
