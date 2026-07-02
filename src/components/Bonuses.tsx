import React from "react";
import { ClipboardCheck, CalendarClock, Map, FileText, RefreshCcw, Sparkles } from "lucide-react";

export default function Bonuses() {
  const bonuses = [
    {
      title: "Bônus 1: Checklist de Revisão",
      value: "R$ 47,00",
      desc: "Uma planilha e PDF interativo para você acompanhar de forma exata quais leis e artigos já revisou, quais faltam fixar e qual sua taxa de acerto em simulados.",
      icon: ClipboardCheck,
    },
    {
      title: "Bônus 2: Cronograma Pronto de Estudos",
      value: "R$ 67,00",
      desc: "O plano de ataque passo a passo para esgotar a legislação institucional em 4 semanas. Saiba exatamente o que fazer em cada dia de estudo.",
      icon: CalendarClock,
    },
    {
      title: "Bônus 3: Kit de Mapas Mentais",
      value: "R$ 97,00",
      desc: "Mais de 30 diagramas e esquemas visuais prontos para download. Excelente para revisar hierarquias de comandos e limites disciplinares de forma rápida.",
      icon: Map,
    },
    {
      title: "Bônus 4: Caderno de Resumos Exclusivos",
      value: "R$ 49,00",
      desc: "A lei seca condensada in pequenos tópicos cirúrgicos. Ideal para ler no celular na fila do banco ou nos minutos que antecedem o início do trabalho.",
      icon: FileText,
    },
    {
      title: "Bônus 5: Atualizações Garantidas",
      value: "Inestimável",
      desc: "Qualquer alteração, decreto ou complemento normativo publicado pelo Comando da PMPI ou Governador até a data da prova será adicionado sem custo.",
      icon: RefreshCcw,
    }
  ];

  return (
    <section 
      id="bonus"
      className="py-24 bg-brand-dark border-t border-slate-900 relative overflow-hidden"
    >
      {/* Decorative vector */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-pmpi-gold-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            PACOTE DE PRESENTES EXCLUSIVOS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Destrave Bônus de Valor Inestimável
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Ao se matricular hoje, você não leva apenas o curso de legislação completo. Você recebe de presente ferramentas estratégicas de revisão acelerada.
          </p>
        </div>

        {/* Bonus List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div 
                key={index}
                className="bg-brand-card border border-brand-border hover:border-pmpi-gold-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group shadow-md"
              >
                {/* Free Badge */}
                <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-emerald-400 uppercase">
                  GRÁTIS
                </div>

                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-pmpi-gold-500 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-100 mb-2">
                    {bonus.title}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {bonus.desc}
                  </p>
                </div>

                {/* Value display at bottom */}
                <div className="mt-6 pt-4 border-t border-slate-850 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Valor Unitário:</span>
                  <span className="text-rose-450 line-through font-bold">{bonus.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Value Summary Box */}
        <div className="mt-12 bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 rounded-full p-2">
              <Sparkles className="w-6 h-6 text-pmpi-gold-500 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-black text-base text-white">Soma Total dos Bônus Acima</h4>
              <p className="font-sans text-xs text-slate-400">Toda essa infraestrutura adicional saindo de graça para você hoje.</p>
            </div>
          </div>
          <div className="font-mono text-right">
            <span className="text-slate-500 text-xs block line-through leading-none">R$ 260,00</span>
            <span className="text-pmpi-gold-400 text-2xl font-black block mt-1">R$ 0,00</span>
          </div>
        </div>

      </div>
    </section>
  );
}
