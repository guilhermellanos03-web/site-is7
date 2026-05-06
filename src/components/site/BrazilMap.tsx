import AnimatedSection from "./AnimatedSection";

const highlightedStates = [
  "SP", "PR", "SC", "RS", "RJ", "MG", "GO", "BA", "CE", "DF"
];

const states: Record<string, { path: string; cx: number; cy: number }> = {
  AM: { path: "M80,80 L180,60 L200,100 L180,150 L100,160 Z", cx: 140, cy: 110 },
  PA: { path: "M200,70 L300,60 L320,120 L280,160 L200,150 Z", cx: 260, cy: 110 },
  MA: { path: "M300,80 L350,70 L360,120 L320,130 Z", cx: 330, cy: 100 },
  CE: { path: "M360,70 L400,65 L405,100 L370,110 Z", cx: 382, cy: 88 },
  RN: { path: "M400,70 L420,68 L420,90 L405,95 Z", cx: 410, cy: 80 },
  PB: { path: "M400,95 L425,92 L425,108 L400,110 Z", cx: 412, cy: 100 },
  PE: { path: "M380,110 L425,108 L425,125 L380,128 Z", cx: 402, cy: 118 },
  AL: { path: "M405,128 L425,125 L428,140 L408,142 Z", cx: 416, cy: 134 },
  SE: { path: "M400,142 L420,140 L418,155 L400,155 Z", cx: 410, cy: 148 },
  BA: { path: "M320,130 L410,142 L400,220 L310,200 Z", cx: 365, cy: 175 },
  MG: { path: "M290,200 L380,195 L390,260 L300,270 Z", cx: 340, cy: 235 },
  ES: { path: "M390,230 L420,225 L420,260 L395,262 Z", cx: 405, cy: 245 },
  RJ: { path: "M370,265 L410,260 L405,285 L370,282 Z", cx: 390, cy: 272 },
  SP: { path: "M290,270 L370,265 L365,310 L285,315 Z", cx: 328, cy: 290 },
  PR: { path: "M270,315 L355,310 L345,345 L265,348 Z", cx: 310, cy: 330 },
  SC: { path: "M280,348 L340,345 L335,375 L278,377 Z", cx: 308, cy: 362 },
  RS: { path: "M260,377 L330,375 L310,430 L250,425 Z", cx: 290, cy: 400 },
  MS: { path: "M230,270 L290,270 L285,330 L225,335 Z", cx: 258, cy: 300 },
  GO: { path: "M250,210 L310,200 L300,270 L240,275 Z", cx: 275, cy: 240 },
  DF: { path: "M300,225 L315,222 L315,238 L300,240 Z", cx: 308, cy: 231 },
  MT: { path: "M150,160 L250,150 L250,250 L160,260 Z", cx: 200, cy: 205 },
  TO: { path: "M270,130 L320,125 L310,200 L260,210 Z", cx: 290, cy: 165 },
  PI: { path: "M320,85 L360,80 L360,135 L320,130 Z", cx: 340, cy: 108 },
  RO: { path: "M100,160 L180,150 L180,220 L110,230 Z", cx: 140, cy: 190 },
  AC: { path: "M40,170 L100,160 L110,210 L50,215 Z", cx: 75, cy: 190 },
  RR: { path: "M120,20 L170,15 L180,60 L130,65 Z", cx: 150, cy: 40 },
  AP: { path: "M250,20 L290,15 L300,60 L260,65 Z", cx: 275, cy: 40 },
};

export const BrazilMap = () => {
  return (
    <section className="bg-[#0A1628] py-20 overflow-hidden">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 font-heading">
            Clientes em todo o Brasil
          </h2>
          <p className="text-[#B0B0B0] text-center max-w-xl mx-auto mb-12">
            Da região sul ao nordeste, o método IS7 já gerou resultados para empresas em todo o país.
          </p>

          <div className="flex justify-center">
            <svg viewBox="0 0 470 460" className="w-full max-w-md" aria-label="Mapa do Brasil com estados atendidos">
              {Object.entries(states).map(([code, { path, cx, cy }]) => {
                const isHighlighted = highlightedStates.includes(code);
                return (
                  <g key={code}>
                    <path
                      d={path}
                      fill={isHighlighted ? "#7B2FBE" : "#1a2744"}
                      stroke="#0A1628"
                      strokeWidth="1.5"
                      opacity={isHighlighted ? 1 : 0.5}
                      className="transition-all duration-300"
                    />
                    {isHighlighted && (
                      <>
                        <circle cx={cx} cy={cy} r="6" fill="white" opacity="0.9" />
                        <circle cx={cx} cy={cy} r="3" fill="#7B2FBE" />
                      </>
                    )}
                    <text
                      x={cx}
                      y={cy + (isHighlighted ? 18 : 4)}
                      textAnchor="middle"
                      fill="white"
                      fontSize="9"
                      fontWeight={isHighlighted ? "700" : "400"}
                      opacity={isHighlighted ? 1 : 0.5}
                    >
                      {code}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BrazilMap;
