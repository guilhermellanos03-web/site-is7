import { TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "R$ 500 mil+", desc: "Investidos em Google Ads gerenciados" },
  { number: "6+", desc: "Anos de experiência em marketing digital" },
  { number: "15+", desc: "Estados com clientes atendidos no Brasil" },
  { number: "+90", desc: "Nota média de desempenho nos sites entregues" },
];

export const AuthorityStats = () => {
  return (
    <section className="bg-[#0A1628] py-20">
      <div className="container">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center space-y-3"
                style={{
                  background: "rgba(123, 47, 190, 0.1)",
                  border: "1px solid rgba(123, 47, 190, 0.3)",
                }}
              >
                <div className="mx-auto w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand-purple" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{stat.number}</p>
                <p className="text-sm text-[#B0B0B0] leading-snug">{stat.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AuthorityStats;
