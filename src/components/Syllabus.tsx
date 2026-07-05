import React, { useState } from "react";
import { Plus, Minus, Video, FileText, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Syllabus() {
  const [activeModuleId, setActiveModuleId] = useState<string>("mod-1");

  const modules = [
    {
      id: "mod-1",
      number: "MÓDULO 01",
      title: "Estatuto dos Policiais Militares (PMPI)",
      description: "Estudo aprofundado dos direitos, prerrogativas, deveres, obrigações e da carreira dos policiais militares piauenses.",
      topics: [
        "Lei Estadual nº 3.808, de 16/07/1981 (Estatuto da PMPI)",
        "Análise artigo por artigo com foco em pegadinhas de prova",
        "Questões comentadas e bizus de memorização rápida"
      ]
    },
    {
      id: "mod-2",
      number: "MÓDULO 02",
      title: "Código de Ética e Disciplina Militar",
      description: "As diretrizes éticas, transgressões disciplinares, sanções aplicáveis e recursos assegurados aos militares do Piauí.",
      topics: [
        "Lei Estadual nº 7.725, de 17/01/2022 (Novo Código de Ética)",
        "Classificação e rito das transgressões (Leve, Média e Grave)",
        "Conselhos de Justificação, Disciplina e processo ético"
      ]
    },
    {
      id: "mod-3",
      number: "MÓDULO 03",
      title: "Lei de Organização Básica (LOB)",
      description: "A engrenagem e a estruturação dos órgãos de direção, apoio e execução da Polícia Militar piauiense.",
      topics: [
        "Lei Estadual nº 3.529, de 20/10/1977 (LOB da PMPI)",
        "Comando-Geral e divisão de competências",
        "Atribuições institucionais e subordinação direta"
      ]
    },
    {
      id: "mod-4",
      number: "MÓDULO 04",
      title: "Lei de Promoção de Praças",
      description: "O plano de carreira das praças da PMPI, estabelecendo os critérios e requisitos para as promoções.",
      topics: [
        "Lei Complementar Estadual nº 68, de 23/03/2006",
        "Princípios de promoção (Antiguidade, Merecimento, Bravura)",
        "Interstícios e condições de elegibilidade"
      ]
    },
    {
      id: "mod-5",
      number: "MÓDULO 05",
      title: "Código de Vencimentos da PMPI",
      description: "A remuneração dos militares, incluindo subsídios, indenizações, gratificações e outros direitos pecuniários.",
      topics: [
        "Lei Estadual nº 5.378, de 10/02/2004",
        "Direitos remuneratórios ativos e de inatividade",
        "Ajuda de custo, diárias e adicionais constitucionais"
      ]
    },
    {
      id: "mod-6",
      number: "MÓDULO 06",
      title: "Lei Orgânica Nacional das Polícias Militares",
      description: "As diretrizes federais e a padronização das normas gerais de organização e garantias das PMs no Brasil.",
      topics: [
        "Lei Federal nº 14.751, de 12/12/2023",
        "Novas prerrogativas e garantias nacionais dos militares",
        "Requisitos de ingresso e transição legislativa"
      ]
    },
    {
      id: "mod-7",
      number: "MÓDULO 07",
      title: "Decreto-Lei de Reorganização das PMs e CBMs",
      description: "A norma que reorganiza as polícias militares e corpos de bombeiros como forças auxiliares e reserva do Exército.",
      topics: [
        "Decreto-Lei Federal nº 667, de 02/07/1969",
        "Subordinação operacional e regramento de armamentos",
        "Disposições federais de controle e fiscalização"
      ]
    },
    {
      id: "mod-8",
      number: "MÓDULO 08",
      title: "Regulamento das Polícias Militares (R-200)",
      description: "Detalhamento operacional da coordenação, subordinação e do controle das forças auxiliares estaduais.",
      topics: [
        "Decreto Federal nº 88.777, de 30/09/1983",
        "Emprego conjunto, planejamento e diretrizes de defesa territorial",
        "Conceitos fundamentais de ordem pública e policiamento"
      ]
    },
    {
      id: "mod-9",
      number: "MÓDULO 09",
      title: "Constituição do Estado do Piauí (Seção Militar)",
      description: "O regramento constitucional reservado às corporações militares estaduais na carta constitucional do Piauí.",
      topics: [
        "Artigos específicos da Constituição Estadual aplicáveis aos Militares",
        "Limitações constitucionais, direitos e proibições (sindicalização/greve)",
        "Jurisdição e Justiça Militar Estadual"
      ]
    },
    {
      id: "mod-10",
      number: "MÓDULO 10",
      title: "Regulamento de Promoção de Praças",
      description: "O decreto regulamentar que detalha o processamento operacional e as comissões de promoção.",
      topics: [
        "Decreto Estadual nº 12.422, de 18/11/2006",
        "Atribuições da Comissão de Promoção de Praças (CPP)",
        "Ritos de recursos, pontuações e quadros de acesso"
      ]
    }
  ];

  const handleToggle = (id: string) => {
    setActiveModuleId(activeModuleId === id ? "" : id);
  };

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
            Grade completa desenvolvida sob medida
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Abordamos 100% da legislação prevista no edital da Polícia Militar do Piauí de forma lógica, sem rodeios e focada na sua aprovação.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {modules.map((mod) => {
            const isOpen = activeModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? "bg-slate-950 border-slate-750 shadow-lg" 
                    : "bg-slate-955/40 border-slate-850 hover:border-slate-800 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => handleToggle(mod.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  id={`module-accordion-button-${mod.id}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <span className="font-mono text-xs font-extrabold text-pmpi-orange-500 tracking-wider">
                      {mod.number}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {mod.title}
                    </h3>
                  </div>
                  <div className="ml-4 p-1 rounded-full bg-slate-900 text-slate-400 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated accordion panel */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-slate-850 animate-fade-in text-slate-100">
                    <p className="font-sans text-sm text-slate-300 leading-relaxed mb-5">
                      {mod.description}
                    </p>
                    
                    {/* Topics Sub-list */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                      <span className="text-[10px] text-slate-200 font-mono font-bold uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-pmpi-orange-500" />
                        O que você vai dominar neste módulo:
                      </span>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {mod.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-xs text-slate-350">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources badge indicators */}
                    <div className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-sans">
                      <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-850">
                        <Video className="w-3.5 h-3.5 text-pmpi-orange-500" /> Videoaulas Explicativas
                      </span>
                      <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-850">
                        <FileText className="w-3.5 h-3.5 text-pmpi-orange-500" /> Esquemas em PDF
                      </span>
                    </div>
                  </div>
                )}
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
