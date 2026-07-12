import React from "react";
import { Scale, ArrowRight } from "lucide-react";

export default function Syllabus() {
  const legislations = [
    {
      index: "01",
      title: "Estatuto da Polícia Militar do Piauí (PMPI)",
      subtitle: "Lei Estadual nº 3.808, de 16 de julho de 1981",
      badge: "Legislação Estadual",
    },
    {
      index: "02",
      title: "Código de Ética e Disciplina dos Militares do Estado do Piauí",
      subtitle: "Lei Estadual nº 7.725, de 17 de janeiro de 2022",
      badge: "Legislação Estadual",
    },
    {
      index: "03",
      title: "Constituição do Estado do Piauí (Dispositivos Militares)",
      subtitle: "Dispositivos aplicáveis aos Militares do Estado na Carta de 1989",
      badge: "Constitucional Estadual",
    },
    {
      index: "04",
      title: "Lei de Organização Básica da PMPI",
      subtitle: "Lei Estadual nº 3.529, de 20 de outubro de 1977",
      badge: "Legislação Estadual",
    },
    {
      index: "05",
      title: "Lei de Vencimentos dos Policiais Militares do Piauí",
      subtitle: "Lei Estadual nº 5.378, de 10 de fevereiro de 2004",
      badge: "Legislação Estadual",
    },
    {
      index: "06",
      title: "Lei de Promoção de Praças da PMPI",
      subtitle: "Lei Complementar Estadual nº 68, de 23 de março de 2006",
      badge: "Legislação Estadual",
    },
    {
      index: "07",
      title: "Regulamento de Promoção de Praças da PMPI",
      subtitle: "Decreto Estadual nº 12.422, de 18 de novembro de 2006",
      badge: "Decreto Estadual",
    },
    {
      index: "08",
      title: "Decreto-Lei de Reorganização das Polícias Militares e Corpos de Bombeiros Militares",
      subtitle: "Decreto-Lei Federal nº 667, de 02 de julho de 1969",
      badge: "Legislação Federal",
    },
    {
      index: "09",
      title: "Lei Orgânica Nacional das Polícias Militares e dos Corpos de Bombeiros Militares",
      subtitle: "Lei Federal nº 14.751, de 12 de dezembro de 2023",
      badge: "Legislação Federal",
    },
    {
      index: "10",
      title: "Regulamento para as Polícias Militares e Corpos de Bombeiros (R-200)",
      subtitle: "Decreto Federal nº 88.777, de 30 de setembro de 1983",
      badge: "Decreto Federal",
    },
  ];

  return (
    <section 
      id="modulos"
      className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden text-slate-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-orange-500 tracking-widest uppercase bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-3.5 py-1.5 rounded-full">
            CONTEÚDO PROGRAMÁTICO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
            Grade de Conteúdo Atualizada
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Abordamos 100% da legislação prevista no edital da Polícia Militar do Piauí de forma lógica, sem rodeios e focada na sua aprovação.
          </p>
        </div>

        {/* Content List Layout */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {legislations.map((leg) => (
            <div
              key={leg.index}
              className="rounded-2xl border border-slate-850 bg-slate-950/50 p-5 sm:p-6 hover:border-slate-800 hover:bg-slate-950/80 hover:shadow-lg hover:shadow-slate-950/40 transition-all duration-300 flex items-start gap-4 sm:gap-6 relative group overflow-hidden"
            >
              {/* Left subtle accent strip on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pmpi-orange-500 to-pmpi-orange-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              
              {/* Big bold number */}
              <div className="font-mono text-2xl sm:text-3xl font-black text-pmpi-orange-500/20 group-hover:text-pmpi-orange-500/40 transition-colors duration-300 shrink-0 select-none">
                {leg.index}
              </div>

              {/* Legislation Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="font-mono text-[9px] font-extrabold text-pmpi-orange-500 tracking-wider bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-2 py-0.5 rounded uppercase">
                    {leg.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-pmpi-orange-500 transition-colors duration-300 leading-snug">
                  {leg.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed font-medium">
                  {leg.subtitle}
                </p>
              </div>

              {/* Icon Decoration */}
              <div className="hidden sm:flex self-center p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 group-hover:text-pmpi-orange-500 group-hover:border-pmpi-orange-500/30 transition-all duration-300 shrink-0">
                <Scale className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Repeated CTA button */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("valores");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            id="syllabus-cta-button"
            className="font-display font-bold text-base text-white py-4 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-lg shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-[11px] text-slate-550 font-mono">
            ★ Estude com foco 100% direcionado ao conteúdo do seu edital
          </span>
        </div>

      </div>
    </section>
  );
}
