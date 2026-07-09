import { servicos } from "../site";
import { BotaoWhatsApp } from "./Botoes";
import { Icone } from "./Icons";

export const Servicos = () => (
  <section id="servicos" className="section bg-ink-soft">
    <div className="wrap text-center">
      <span className="eyebrow">Nossos Serviços</span>
      <h2 className="h2">O Que Podemos Fazer Por Você</h2>
      <p className="sub">
        Atendemos qualquer emergência automotiva com agilidade e segurança.
      </p>

      <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((s) => (
          <div key={s.titulo} className="card flex flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary-light">
              <Icone nome={s.icone} />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-white">{s.titulo}</h3>
            <p className="mt-2 flex-1 text-sm text-chrome-muted">{s.desc}</p>
            <BotaoWhatsApp
              texto="Solicitar Agora"
              msg={`Olá! Preciso de ${s.titulo.toLowerCase()} em Uberlândia.`}
              className="btn-outline-wa mt-5 !text-xs"
            />
          </div>
        ))}

        <div className="card flex flex-col items-center justify-center border-dashed text-center">
          <p className="font-display font-bold text-white">
            Não encontrou o que precisa?
          </p>
          <p className="mt-1 text-sm text-chrome-muted">
            Fale com a gente, resolvemos junto com você.
          </p>
          <BotaoWhatsApp texto="Falar com Atendente 24h" className="btn-wa mt-5 !text-xs" />
        </div>
      </div>
    </div>
  </section>
);
