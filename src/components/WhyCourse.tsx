import React from "react";
import { Video, Sparkles, CheckCircle2, Smartphone, ShieldCheck, PlayCircle, ArrowRight } from "lucide-react";

export default function WhyCourse() {
  const benefits = [
    {
      title: "Aulas objetivas",
      description: "Vídeos direto ao ponto. Cada artigo importante é dissecado em explicações de curta duração para facilitar seu aprendizado.",
      icon: Video,
    },
    {
      title: "Sem enrolação",
      description: "Conteúdo 100% focado na aprovação. Sem teorias acadêmicas inúteis ou perda de tempo com o que não vai cair.",
      icon: Sparkles,
    },
    {
      title: "Atualizado conforme edital",
      description: "Material totalmente atualizado com as leis recentes de 2026 e todos os novos decretos estaduais exigidos.",
      icon: CheckCircle2,
    },
    {
      title: "Estude no celular",
      description: "Nossa plataforma é moderna e 100% otimizada para celulares, tablets e computadores. Estude onde e quando quiser.",
      icon: Smartphone,
    },
    {
      title: "Acesso imediato",
      description: "Receba seus dados de login em menos de 2 minutos diretamente no seu e-mail logo após a confirmação do pagamento.",
      icon: ShieldCheck,
    },
    {
      title: "Assista quantas vezes quiser",
      description: "Total flexibilidade. Assista às aulas quantas vezes precisar e tire suas dúvidas de forma simples na plataforma.",
      icon: PlayCircle,
    }
  ];

  return (
    <section 
      id="beneficios"
      className="py-12 bg-slate-900 border-t border-slate-950 relative overflow-hidden text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-orange-500 tracking-widest uppercase bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-3.5 py-1.5 rounded-full">
            BENEFÍCIOS EXCLUSIVOS DO CURSO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
            Tudo o que você precisa para dominar a Legislação da PMPI
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Elimine as leituras cansativas de leis secas de 100 páginas. Nosso método combina videoaulas objetivas com foco cirúrgico nas questões da prova.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-950 border border-slate-850 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-slate-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 mb-5 text-pmpi-orange-500">
                    <IconComponent className="w-6 h-6 shrink-0" />
                  </div>

                  {/* Info */}
                  <h3 className="font-display font-bold text-base text-slate-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Repeated CTA Block for high conversion */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("valores");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            id="benefits-cta-button"
            className="font-display font-bold text-base text-white py-4 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-lg shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-[11px] text-slate-500 font-mono">
            ★ Garantia incondicional de 7 dias com reembolso imediato
          </span>
        </div>

      </div>
    </section>
  );
}
