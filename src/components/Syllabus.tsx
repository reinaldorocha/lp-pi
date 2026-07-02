import React, { useState } from "react";
import { Plus, Minus, Video, FileText, Layers, Lightbulb, CheckCircle2, ChevronRight, BookOpenCheck } from "lucide-react";
import { SyllabusModule } from "../types";

export default function Syllabus() {
  const [activeModuleId, setActiveModuleId] = useState<string>("mod-1");

  const modules: SyllabusModule[] = [
    {
      id: "mod-1",
      number: "MÓDULO 01",
      title: "Constituição Estadual do Piauí",
      description: "Análise focada de todos os dispositivos constitucionais relativos à segurança pública e aos militares estaduais do Piauí.",
      articles: "Artigos selecionados sobre segurança pública e militares estaduais",
      topics: [
        "Direitos e garantias constitucionais dos militares do Piauí",
        "Atribuições e limites da Polícia Militar na Constituição Estadual",
        "Regras de previdência, remuneração e acumulação de cargos",
        "Relação de subordinação e competências federativas"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-2",
      number: "MÓDULO 02",
      title: "Lei nº 3.529/1977",
      description: "A clássica Lei de Organização Básica da Polícia Militar do Estado do Piauí, compreendendo sua estrutura tradicional.",
      articles: "Histórico e competências orgânicas tradicionais",
      topics: [
        "Missões institucionais e destinação da corporação",
        "Órgãos de direção, execução e apoio na estrutura clássica",
        "Comando-Geral e atribuições do Estado-Maior",
        "Distribuição de efetivo e classificação tradicional de unidades"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-3",
      number: "MÓDULO 03",
      title: "Lei Estadual nº 3.808/1981",
      description: "O Estatuto dos Policiais Militares do Estado do Piauí. O coração da legislação institucional, campeão de questões em provas.",
      articles: "Disposições gerais, direitos, deveres, prerrogativas e punições",
      topics: [
        "Provimento, ingresso, hierarquia, disciplina e círculos hierárquicos",
        "Deveres e obrigações militares (valor, ética e compromisso)",
        "Direitos dos militares (férias, licenças, vencimentos e promoções)",
        "Situações jurídicas (agregado, excedente, desertor, ausente e reserva)"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-4",
      number: "MÓDULO 04",
      title: "Lei Complementar nº 28/2003",
      description: "Código de Ética e Disciplina dos Militares do Estado do Piauí. Regula a conduta, transgressões e conselhos de julgamento.",
      articles: "Deveres éticos, transgressões e procedimentos disciplinares",
      topics: [
        "Classificação das transgressões disciplinares (Leves, Médias e Graves)",
        "Atenuantes e agravantes na dosimetria das punições",
        "Procedimentos recursais e prazos regimentais de defesa",
        "Funcionamento do Conselho de Disciplina e do Conselho de Justificação"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-5",
      number: "MÓDULO 05",
      title: "Lei Complementar nº 59/2005",
      description: "Regulamento de Promoção de Praças da PMPI. Entenda os critérios de merecimento, antiguidade e bravura.",
      articles: "Critérios de ascensão profissional para soldados, cabos e sargentos",
      topics: [
        "Diferença entre promoção por Antiguidade, Merecimento e Bravura",
        "Promoção 'Post Mortem' e em ressarcimento de preterição",
        "Comissão de Promoção de Praças (CPP): composição e atribuições",
        "Quadros de acesso e limites de vagas regulamentares"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-6",
      number: "MÓDULO 06",
      title: "Lei Complementar nº 68/2006",
      description: "Regulamento de Promoção de Oficiais da PMPI. Regras para ascensão na carreira de comando.",
      articles: "Plano de carreira e promoções do oficialato",
      topics: [
        "Requisitos essenciais para ingresso nos quadros de acesso",
        "Funcionamento da Comissão de Promoção de Oficiais (CPO)",
        "Promoções por escolha e merecimento especial",
        "Cálculo de vagas e regras de transição na carreira de oficial"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-7",
      number: "MÓDULO 07",
      title: "Lei nº 7.725/2022",
      description: "Nova Lei de Organização Básica atualizada. Reestrutura a PMPI para os desafios de segurança pública modernos.",
      articles: "Nova organização dos Comandos de Policiamento",
      topics: [
        "Nova divisão administrativa e órgãos de execução",
        "Descentralização do policiamento: Comandos de Policiamento de Áreas (CPAs)",
        "Atribuições modernas dos comandos setoriais",
        "Adequação do efetivo e novos regimentos internos"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-8",
      number: "MÓDULO 08",
      title: "Lei nº 7.772/2022",
      description: "Sistema de Proteção Social dos Militares do Estado do Piauí. Regula a inatividade e pensão militar pós-reforma federal.",
      articles: "Previdência, pensão por morte e regras de reserva remunerada",
      topics: [
        "Regras de transição para transferência à reserva remunerada",
        "Alíquotas e contribuições de proteção social",
        "Direito a pensão e dependentes na nova legislação",
        "Garantias de reajuste e paridade com ativos"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-9",
      number: "MÓDULO 09",
      title: "Lei nº 8.430/2024",
      description: "Alterações recentes e de grande impacto na legislação institucional. Foco máximo em novidades que serão cobradas.",
      articles: "Novas redações de artigos tradicionais",
      topics: [
        "Ajustes nos direitos e deveres dos militares",
        "Mudanças nos procedimentos de apuração de transgressões",
        "Regras mais estritas de governança interna da PMPI",
        "Projeções de cobrança pelas bancas organizadoras"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    },
    {
      id: "mod-10",
      number: "MÓDULO 10",
      title: "Decreto nº 27.156/2024 e Regulamentos",
      description: "Novos regulamentos atualizados aprovados recentemente pelo Executivo estadual e normas remanescentes do edital.",
      articles: "Consolidação de decretos e portarias regulamentares",
      topics: [
        "Normas de conduta operacional diária",
        "Regulamentação de fardamento, insígnias e solenidades",
        "Procedimentos de apuração sumária e sindicâncias",
        "Diretrizes integradas de policiamento integrado no Piauí"
      ],
      features: { videoaulas: true, pdfs: true, resumos: true, bizus: true, questoes: true }
    }
  ];

  const handleToggle = (id: string) => {
    setActiveModuleId(activeModuleId === id ? "" : id);
  };

  const activeModule = modules.find(m => m.id === activeModuleId);

  return (
    <section 
      id="modulos"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      {/* Background design dots */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-pmpi-gold-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-pmpi-blue-900/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            GRADE CURRICULAR COMPLETA
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            O Que Você Vai Aprender no Curso
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-350 mt-4 leading-relaxed">
            Abordamos 100% da legislação prevista no edital, dividida em módulos esquematizados para facilitar seu cronograma de estudos.
          </p>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Modules Navigation Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {modules.map((mod) => {
              const isOpen = activeModuleId === mod.id;
              return (
                <div
                  key={mod.id}
                  className={`rounded-xl transition-all duration-300 ${
                    isOpen 
                      ? "bg-pmpi-gold-500/10 border-pmpi-gold-500/30 shadow-md" 
                      : "bg-brand-card border-brand-border hover:border-slate-800 hover:bg-slate-900/40"
                  } border`}
                >
                  <button
                    onClick={() => handleToggle(mod.id)}
                    className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                    id={`module-accordion-button-${mod.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-wider">
                        {mod.number}
                      </span>
                      <h3 className="font-display font-bold text-sm sm:text-base text-slate-100 group-hover:text-pmpi-gold-400">
                        {mod.title}
                      </h3>
                    </div>
                    <div>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-pmpi-gold-500 shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content for Mobile/Tablet */}
                  {isOpen && (
                    <div className="px-4 pb-5 pt-1 border-t border-slate-800/60 lg:hidden">
                      <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                        {mod.description}
                      </p>
                      
                      {/* Subtopics */}
                      <div className="mb-4">
                        <span className="text-[10px] text-pmpi-gold-400 font-mono font-bold block mb-2">TÓPICOS CHAVE COBRADOS:</span>
                        <ul className="space-y-1.5">
                          {mod.topics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-slate-350">
                              <ChevronRight className="w-3.5 h-3.5 text-pmpi-gold-500 mt-0.5 shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Feature Badges checklist */}
                      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800/55">
                        {Object.entries(mod.features).map(([key, active]) => (
                          <div key={key} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${active ? 'text-emerald-400' : 'text-slate-500'}`} />
                            <span className="capitalize">{key === 'pdfs' ? 'PDFs' : key === 'questoes' ? 'Questões' : key}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Premium Desktop Preview Card */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            {activeModule ? (
              <div className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-xl relative overflow-hidden">
                {/* Background layout badge */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pmpi-gold-500/5 rounded-full filter blur-xl"></div>
                
                <span className="font-mono text-[10px] font-bold text-pmpi-gold-400 bg-pmpi-gold-500/10 border border-pmpi-gold-500/20 px-2.5 py-1 rounded">
                  DETALHES DO MÓDULO • {activeModule.number}
                </span>

                <h3 className="font-display font-extrabold text-xl text-white mt-4 mb-2">
                  {activeModule.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed mb-6">
                  {activeModule.description}
                </p>

                {/* Subtopics List */}
                <div className="mb-6">
                  <span className="text-[10px] text-pmpi-gold-400 font-mono font-bold uppercase tracking-wider block mb-3">
                    Conteúdo Programático Bizurado:
                  </span>
                  <ul className="space-y-2.5">
                    {activeModule.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-350 font-medium">
                        <div className="w-1.5 h-1.5 bg-pmpi-gold-500 rounded-full mt-1.5 shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials included checklist */}
                <div className="border-t border-slate-800 pt-6">
                  <span className="text-[10px] text-slate-400 font-mono block mb-4">RECURSOS JÁ DISPONÍVEIS:</span>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Video, label: "Videoaulas Ativas", key: "videoaulas" },
                      { icon: FileText, label: "PDFs Detalhados", key: "pdfs" },
                      { icon: Layers, label: "Bizus & Resumos", key: "resumos" },
                      { icon: BookOpenCheck, label: "Questões Comentadas", key: "questoes" }
                    ].map((feat) => {
                      const isAvailable = activeModule.features[feat.key as keyof typeof activeModule.features];
                      const Icon = feat.icon;
                      return (
                        <div 
                          key={feat.key} 
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                            isAvailable 
                              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                              : 'bg-slate-900 border-slate-800 text-slate-500'
                          }`}
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          <span className="text-[11px] font-semibold font-sans">{feat.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Advice Quote */}
                <div className="mt-6 bg-pmpi-gold-500/10 border border-pmpi-gold-500/20 rounded-xl p-3 flex items-start gap-2.5">
                  <Lightbulb className="w-5 h-5 text-pmpi-gold-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-300 leading-relaxed">
                    <strong>Foco da banca:</strong> {activeModule.articles}. Nossos professores mapearam os pontos exatos que caíram nos últimos concursos para otimizar suas revisões.
                  </p>
                </div>

              </div>
            ) : (
              <div className="bg-brand-card border border-brand-border rounded-2xl p-8 text-center text-slate-400 flex flex-col justify-center items-center h-80">
                <BookOpenCheck className="w-12 h-12 text-slate-500 mb-3" />
                <p className="font-sans text-sm">Selecione um módulo à esquerda para ver os detalhes da preparação.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
