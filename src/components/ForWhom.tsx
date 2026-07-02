import React, { useState } from "react";
import { User, Briefcase, Award, AlertCircle, Clock, CheckSquare } from "lucide-react";

export default function ForWhom() {
  const [selectedProfile, setSelectedProfile] = useState<number>(0);

  const profiles = [
    {
      title: "Está Começando do Zero",
      subtitle: "Iniciantes no concurso da PMPI",
      icon: User,
      pain: "A legislação institucional piauiense parece um emaranhado complexo de leis estaduais, decretos e siglas incompreensíveis.",
      solution: "Nosso curso explica tudo a partir da base, traduzindo termos jurídicos e estruturando os conceitos em esquemas lógicos passo a passo."
    },
    {
      title: "Trabalha e Estuda",
      subtitle: "Tempo escasso e rotinas densas",
      icon: Briefcase,
      pain: "Voltar do trabalho cansado e ter que ler 150 páginas de lei seca sem entender o que é mais cobrado pelas bancas organizadoras.",
      solution: "Aulas cirúrgicas de 10 minutos, áudios focados, mapas mentais prontos e PDFs ultra-resumidos para otimizar cada minuto livre."
    },
    {
      title: "Já foi Reprovado em Concursos",
      subtitle: "Buscando ajustar os detalhes",
      icon: AlertCircle,
      pain: "Ficar de fora das vagas ou da redação por causa de apenas 2 ou 3 questões de Legislação que acabaram pesando na nota final.",
      solution: "Foco absoluto em pegadinhas, exceções legais e novidades (como as leis de 2024), garantindo os pontos que te colocarão dentro das vagas."
    },
    {
      title: "Quer Organizar os Estudos",
      subtitle: "Estudantes em busca de direcionamento",
      icon: CheckSquare,
      pain: "Perder horas organizando pastas, conferindo se a lei na internet está atualizada ou se determinado decreto foi revogado.",
      solution: "Tópicos de estudo focados estritamente no edital, com materiais consolidados e 100% atualizados para você apenas sentar e estudar."
    }
  ];

  return (
    <section 
      id="para-quem"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-pmpi-gold-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            PARA QUEM É O CURSO?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Identifique Seu Perfil de Preparação
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Nós entendemos as dificuldades de preparar-se para carreiras policiais. Desenvolvemos o material para sanar as dores de diferentes realidades de estudo.
          </p>
        </div>

        {/* Profile Grid Layout with Selector Interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Selector List - Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {profiles.map((profile, index) => {
               const Icon = profile.icon;
               const isSelected = selectedProfile === index;
               return (
                 <button
                   key={index}
                   onClick={() => setSelectedProfile(index)}
                   id={`profile-selector-button-${index}`}
                   className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                     isSelected 
                       ? "bg-brand-card border-pmpi-gold-500/60 shadow-md" 
                       : "bg-brand-card/30 border-slate-900 hover:border-slate-800 hover:bg-brand-card/60"
                   }`}
                 >
                   <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                     isSelected ? "bg-pmpi-gold-500 text-slate-950" : "bg-slate-900 text-slate-400"
                   }`}>
                     <Icon className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="font-display font-bold text-sm sm:text-base text-slate-100">
                       {profile.title}
                     </h4>
                     <p className="text-[11px] text-slate-400 mt-0.5">{profile.subtitle}</p>
                   </div>
                 </button>
               );
            })}
          </div>

          {/* Solution Focus Card - Right Column */}
          <div className="lg:col-span-7 bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pmpi-gold-500/5 rounded-full filter blur-xl"></div>
            
            {/* Displaying selected profile details */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-mono text-[9px] font-bold text-pmpi-gold-400 uppercase tracking-widest block mb-4">
                Como nos adaptamos a você:
              </span>

              <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-6">
                {profiles[selectedProfile].title}
              </h3>

              {/* Pain Point */}
              <div className="mb-6 pb-6 border-b border-slate-900">
                <span className="text-[10px] text-rose-400 font-sans font-bold uppercase tracking-wider block mb-2">❌ O Obstáculo Comum:</span>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {profiles[selectedProfile].pain}
                </p>
              </div>

              {/* Solution */}
              <div>
                <span className="text-[10px] text-emerald-400 font-sans font-bold uppercase tracking-wider block mb-2">✔ Nossa Solução Bizurada:</span>
                <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {profiles[selectedProfile].solution}
                </p>
              </div>
            </div>

            {/* Micro reassurance badge */}
            <div className="mt-8 pt-6 border-t border-slate-900 flex items-center gap-2.5 text-xs text-slate-400 font-mono">
              <Clock className="w-4 h-4 text-pmpi-gold-500 shrink-0" />
              <span>O curso se molda à sua disponibilidade, independentemente do tempo diário.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
