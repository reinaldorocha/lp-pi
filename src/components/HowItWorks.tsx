import React from "react";
import { CreditCard, MailOpen, Compass, Monitor, RotateCw, CheckSquare, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Matrícula Segura",
      desc: "Faça sua inscrição em ambiente 100% protegido via Pix, Cartão ou Boleto.",
      icon: CreditCard,
    },
    {
      step: "02",
      title: "Liberação Imediata",
      desc: "Receba seus dados de login em menos de 2 minutos diretamente no seu e-mail.",
      icon: MailOpen,
    },
    {
      step: "03",
      title: "Acesso à Plataforma",
      desc: "Navegue em nosso portal moderno e otimizado pelo notebook, tablet ou celular.",
      icon: Monitor,
    },
    {
      step: "04",
      title: "Estudo Direcionado",
      desc: "Assista às videoaulas curtas explicando cada artigo da legislação.",
      icon: Compass,
    },
    {
      step: "05",
      title: "Revisão e Bizus",
      desc: "Fixe as regras mais cobradas e prazos críticos com nossos mapas e resumos.",
      icon: RotateCw,
    },
    {
      step: "06",
      title: "Simulação Ativa",
      desc: "Resolva dezenas de questões comentadas passo a passo na plataforma.",
      icon: CheckSquare,
    },
    {
      step: "07",
      title: "Sua Farda e Posse!",
      desc: "Aproveite a vantagem competitiva para garantir sua vaga e assumir seu cargo.",
      icon: Award,
    }
  ];

  return (
    <section 
      id="como-funciona"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-0 left-10 w-64 h-64 bg-pmpi-gold-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            PIPELINE DE APRENDIZADO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Como Funciona Sua Preparação?
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Sem segredos ou complicação. Desenhamos um caminho simples e eficaz do momento da matrícula até sua nomeação.
          </p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative">
          {/* Horizontal Connection Line (Desktop) */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-slate-800 hidden xl:block -translate-y-[40px] z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center group-hover:border-pmpi-gold-500 group-hover:bg-slate-900/60 transition-all duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-pmpi-gold-500 group-hover:scale-110 transition-transform" />
                    </div>
                    {/* Small tag badge */}
                    <span className="absolute -bottom-1 -right-1 bg-pmpi-gold-500 text-slate-950 font-mono font-bold text-[10px] w-6 h-6 rounded-full flex items-center justify-center border border-slate-950">
                      {step.step}
                    </span>
                  </div>

                  {/* Text details */}
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-100 mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-[170px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
