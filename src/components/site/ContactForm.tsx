import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PHONE = "5541987430349";

export const ContactForm = () => {
  const [form, setForm] = useState({ nome: "", email: "", contato: "", objetivo: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.contato.trim()) return;
    const msg = encodeURIComponent(
      `Olá, vim pelo site, gostaria de saber mais!\n\nNome: ${form.nome}\nE-mail: ${form.email}\nContato: ${form.contato}${form.objetivo ? `\nObjetivo: ${form.objetivo}` : ""}`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">
            Como nos contratar?
          </h2>
          <p className="text-lg">
            Deixe seus <strong>dados abaixo</strong>, <strong>ou</strong> pressione o{" "}
            <strong>botão de WhatsApp</strong> para falar com um dos{" "}
            <strong>nossos especialistas</strong>.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <Input
                type="text"
                placeholder="Nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-lg"
                required
                maxLength={100}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-lg"
                maxLength={255}
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Contato (WhatsApp)"
                value={form.contato}
                onChange={(e) => setForm({ ...form, contato: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-lg"
                required
                maxLength={20}
              />
            </div>
            <div>
              <Textarea
                placeholder="Objetivo"
                value={form.objetivo}
                onChange={(e) => setForm({ ...form, objetivo: e.target.value })}
                className="w-full p-4 border border-gray-300 rounded-lg min-h-[120px]"
                maxLength={500}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-lg text-lg font-medium"
            >
              Enviar pelo WhatsApp
            </Button>
          </form>

          <div className="text-center mt-8">
            <a
              href={`https://wa.me/${PHONE}?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais!`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Quero falar com o especialista!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;