import React from "react";
import { GraduationCap, Target, ShieldCheck, TrendingUp, ListOrdered, Layers, Sparkles, Gauge, Calendar } from "lucide-react";

export default function Differentiators() {
  const diffs = [
    {
      title: "Professor Especialista",
      desc: "Instrução por policial penal, mentor de carreiras policiais experiente e focado especificamente na banca do Piauí.",
      icon: GraduationCap,
    },
    {
      title: "Foco Exclusivo na PMPI",
      desc: "Não é um curso adaptado de outro estado. 100% gravado, editado e estruturado especificamente para a Polícia Militar do Piauí.",
      icon: Target,
    },
    {
      title: "Conteúdo 100% Atualizado",
      desc: "Inclui a nova Lei Orgânica 7.725/2022, Lei de Proteção Social 7.772/2022, as modificações de 2024 (Lei 8.430) e os novos Decretos.",
      icon: ShieldCheck,
    },
    {
      title: "Aulas Objetivas de Alta Fixação",
      desc: "Vídeos focados em tópicos específicos de 10 a 15 minutos, ideais para concurseiros com rotinas cansativas ou pouco tempo.",
      icon: TrendingUp,
    },
    {
      title: "Explicação Artigo por Artigo",
      desc: "Esclarecemos cada dispositivo legal de maneira simples, revelando o que a lei realmente quer dizer e como será cobrado.",
      icon: ListOrdered,
    },
    {
      title: "Esquemas Visuais de Decisão",
      desc: "Fluxogramas e diagramas de hierarquias, processos disciplinares e penalidades para você memorizar sem misturar as regras.",
      icon: Layers,
    },
    {
      title: "Material Rápido de Revisão",
      desc: "Acesso a PDFs condensados e mnemônicos rápidos de véspera para fixar as diretrizes-chave nos dias anteriores à prova.",
      icon: Sparkles,
    },
    {
      title: "Estudo Acelerado",
      desc: "Nossa metodologia economiza até 80% do tempo gasto em leituras redundantes da lei seca, maximizando a eficiência diária.",
      icon: Gauge,
    },
    {
      title: "Cronograma Sugerido Incluso",
      desc: "Roteiro detalhado indicando exatamente quais módulos estudar e quando revisar, conforme seu tempo diário disponível.",
      icon: Calendar,
    }
  ];

  return (
    <section 
      id="diferenciais"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-10 right-1/4 w-[250px] h-[250px] bg-pmpi-gold-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            DIFERENCIAIS EXCLUSIVOS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Por Que Fazer Este Curso e Não Outro?
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Nós não cobramos apenas teoria. Desenvolvemos uma estrutura focada em alta performance para garantir que você pontue o máximo possível na matéria de Legislação.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {diffs.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div 
                key={index}
                className="bg-brand-card border border-brand-border hover:border-pmpi-gold-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-md group"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-pmpi-gold-500/10 transition-all">
                  <Icon className="w-5 h-5 text-pmpi-gold-500 group-hover:scale-110 transition-all" />
                </div>

                <h3 className="font-display font-black text-base sm:text-lg text-slate-100 mb-2">
                  {diff.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
