import React from "react";
import { Video, BookOpen, Map, Zap, LayoutGrid, FileText, RefreshCw, FolderCheck, ArrowRight } from "lucide-react";

export default function WhyCourse() {
  const benefits = [
    {
      title: "Videoaulas Objetivas",
      description: "Vídeos direto ao ponto, sem enrolação. Cada artigo importante é dissecado em aulas de curta duração, fáceis de assimilar.",
      icon: Video,
      badge: "Teoria & Prática",
      color: "from-blue-500/10 to-blue-600/5",
      border: "hover:border-blue-500/30"
    },
    {
      title: "Lei Seca Explicada",
      description: "Traduzimos o 'juridiquês' cansativo da legislação estadual para uma linguagem simples, lógica e focada na sua aprovação.",
      icon: BookOpen,
      badge: "Fácil Compreensão",
      color: "from-pmpi-gold-500/10 to-pmpi-gold-600/5",
      border: "hover:border-pmpi-gold-500/30"
    },
    {
      title: "Mapas Mentais Prontos",
      description: "Esquemas visuais completos para você revisar de forma ultrarrápida as hierarquias, regras e limites institucionais.",
      icon: Map,
      badge: "Revisão Visual",
      color: "from-emerald-500/10 to-emerald-600/5",
      border: "hover:border-emerald-500/30"
    },
    {
      title: "Bizus Estratégicos",
      description: "Gatilhos mentais e mnemônicos exclusivos para você memorizar prazos, competências e punições sem decoreba inútil.",
      icon: Zap,
      badge: "Mnemônicos",
      color: "from-purple-500/10 to-purple-600/5",
      border: "hover:border-purple-500/30"
    },
    {
      title: "Esquemas de Decisão",
      description: "Fluxogramas de processos disciplinares, trâmites de promoção e sanções para você não confundir nada na prova.",
      icon: LayoutGrid,
      badge: "Fluxogramas",
      color: "from-cyan-500/10 to-cyan-600/5",
      border: "hover:border-cyan-500/30"
    },
    {
      title: "Resumos em PDF",
      description: "Materiais resumidos de alta qualidade, prontos para impressão ou leitura rápida no celular antes de dormir.",
      icon: FileText,
      badge: "Material de Apoio",
      color: "from-pink-500/10 to-pink-600/5",
      border: "hover:border-pink-500/30"
    },
    {
      title: "Atualizações Inclusas",
      description: "Qualquer nova alteração legislativa ou regulamento publicado até a data da prova será incluído sem custos adicionais.",
      icon: RefreshCw,
      badge: "Garantia de Atualização",
      color: "from-amber-500/10 to-amber-600/5",
      border: "hover:border-amber-500/30"
    },
    {
      title: "Organização por Módulos",
      description: "Estude exatamente na ordem do edital da PMPI. Sua preparação organizada do início ao fim sem desperdício de tempo.",
      icon: FolderCheck,
      badge: "Foco no Edital",
      color: "from-teal-500/10 to-teal-600/5",
      border: "hover:border-teal-500/30"
    }
  ];

  return (
    <section 
      id="beneficios"
      className="py-24 bg-brand-dark border-t border-slate-900 relative overflow-hidden"
    >
      {/* Visual blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pmpi-blue-900/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            POR QUE ESTUDAR CONOSCO?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            A Solução Definitiva para Dominar a Legislação da PMPI
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Esqueça as leituras infinitas e monótonas de leis secas de 100 páginas. Nosso método combina a melhor didática visual e foco cirúrgico no que as bancas realmente cobram.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-brand-card border border-brand-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pmpi-blue-950/20 hover:border-pmpi-gold-500/35"
              >
                {/* Accent Top Dot */}
                <div className="absolute top-4 right-4 bg-slate-900 text-slate-400 text-[9px] font-mono px-2 py-0.5 rounded border border-slate-800">
                  {benefit.badge}
                </div>

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-pmpi-gold-500 group-hover:bg-pmpi-gold-500/20 transition-colors mb-6">
                  <IconComponent className="w-6 h-6 text-pmpi-gold-500 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-base text-slate-100 mb-2 group-hover:text-pmpi-gold-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Corner highlight line */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-pmpi-blue-600/0 to-transparent group-hover:via-pmpi-blue-600/50 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside Benefits */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400 font-mono">
            Não perca tempo tentando decifrar leis sozinho.
            <a 
              href="#modulos" 
              className="text-pmpi-gold-500 hover:text-pmpi-gold-400 inline-flex items-center gap-1 font-bold ml-1 group transition-colors"
            >
              Ver os módulos do edital
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
