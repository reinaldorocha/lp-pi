import React from "react";
import { Check, ArrowRight, Compass, Shield, BookOpen, Clock } from "lucide-react";

export default function ForWhom() {
  const targets = [
    {
      title: "Quem vai iniciar",
      description: "Comece do zero absoluto com explicações traduzidas do 'juridiquês' para uma linguagem simples, lógica e de fácil memorização.",
      icon: Compass,
    },
    {
      title: "Quem já estuda",
      description: "Destrave seu desempenho dominando as principais pegadinhas das bancas, exceções legais e as novidades normativas de 2026.",
      icon: Shield,
    },
    {
      title: "Quem quer revisar",
      description: "Ganhe velocidade e fixe os prazos, hierarquias e competências críticas através de nossos bizus consolidados.",
      icon: BookOpen,
    },
    {
      title: "Quem tem pouco tempo",
      description: "Aproveite cada minuto do seu dia com videoaulas curtas de 30 minutos que se adaptam à rotina de quem trabalha e estuda.",
      icon: Clock,
    }
  ];

  return (
    <section 
      id="para-quem"
      className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-orange-500 tracking-widest uppercase bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-3.5 py-1.5 rounded-full">
            SERÁ QUE É PARA VOCÊ?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
            Idealizado para todos os níveis de preparação
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Independentemente de como está a sua rotina atual de estudos, nosso método foi desenhado para maximizar a sua retenção de conteúdo com o menor esforço possível.
          </p>
        </div>

        {/* Bento-style targets grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {targets.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-slate-750 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-pmpi-orange-500 mb-4">
                    <Check className="w-5 h-5 shrink-0" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">Ideal para</span>
                  </div>
                  
                  <h3 className="font-display font-black text-lg text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span>Método 100% Compatível</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Repeated CTA button */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("valores");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            id="forwhom-cta-button"
            className="font-display font-bold text-base text-white py-4 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-lg shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-[11px] text-slate-500 font-mono">
            ★ Comece a estudar agora mesmo pelo computador ou celular
          </span>
        </div>

      </div>
    </section>
  );
}
