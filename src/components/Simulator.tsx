import React, { useState } from "react";
import { Award, CheckCircle, XCircle, ChevronRight, HelpCircle, RefreshCw, Sparkles, ArrowRight } from "lucide-react";
import { QuizQuestion } from "../types";

export default function Simulator() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      module: "MÓDULO 03: ESTATUTO DA PMPI (Lei 3.808/1981)",
      statement: "Nos termos da Lei Estadual nº 3.808/1981 (Estatuto dos Policiais Militares do Estado do Piauí), a Polícia Militar do Piauí é considerada uma instituição permanente, organizada com base na hierarquia e na disciplina, classificada juridicamente como:",
      options: [
        "A) Força auxiliar e reserva das Forças Armadas.",
        "B) Força auxiliar e reserva do Exército Brasileiro.",
        "C) Força autônoma vinculada ao Ministério da Defesa.",
        "D) Órgão autônomo de segurança pública subordinado à União."
      ],
      correctIndex: 1,
      explanation: "🎯 GABARITO: B. Segundo o Art. 2º do Estatuto, a PMPI é força auxiliar e reserva do EXÉRCITO (e não das Forças Armadas como um todo). As bancas de concurso adoram trocar 'Exército' por 'Forças Armadas' para confundir o candidato desatento!"
    },
    {
      id: 2,
      module: "MÓDULO 04: CÓDIGO DE ÉTICA (LC 28/2003)",
      statement: "De acordo com a Lei Complementar nº 28/2003 (Código de Ética e Disciplina dos Militares do Estado do Piauí), as transgressões disciplinares militares são legalmente classificadas apenas como:",
      options: [
        "A) Leves, Médias, Graves e Gravíssimas.",
        "B) Levíssimas, Leves, Médias e Graves.",
        "C) Leves, Médias e Graves.",
        "D) Simples, Especiais e Qualificadas."
      ],
      correctIndex: 2,
      explanation: "🎯 GABARITO: C. O Código de Ética do Piauí (Art. 12) estabelece apenas TRÊS classificações para transgressão disciplinar: LEVES, MÉDIAS e GRAVES. Não existe transgressão 'Levíssima' nem 'Gravíssima' nesta norma estadual. Mantenha os olhos abertos!"
    },
    {
      id: 3,
      module: "MÓDULO 02: ORGANIZAÇÃO BÁSICA",
      statement: "No que tange à estrutura organizacional e subordinação jurídica da Polícia Militar do Piauí (PMPI), a corporação está diretamente subordinada a quem?",
      options: [
        "A) Ao Governador do Estado.",
        "B) Ao Secretário de Segurança Pública.",
        "C) Ao Comandante-Geral do Exército.",
        "D) Ao Delegado-Geral de Polícia Civil."
      ],
      correctIndex: 0,
      explanation: "🎯 GABARITO: A. Conforme a legislação constitucional e orgânica da PMPI, ela é diretamente subordinada ao GOVERNADOR DO ESTADO. A subordinação administrativa-operacional pode envolver a pasta de Segurança, mas a chefia suprema e subordinação direta constitucional é do Governador."
    }
  ];

  const handleOptionSelect = (index: number) => {
    if (hasSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || hasSubmitted) return;
    setHasSubmitted(true);
    if (selectedOption === questions[currentQuestionIndex].correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <section 
      id="simulador"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-pmpi-blue-600/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            SIMULADO INTERATIVO PMPI
          </span>
          <h2 className="font-display font-black text-3xl text-white mt-4 tracking-tight">
            Teste Seus Conhecimentos Agora
          </h2>
          <p className="font-sans text-sm text-slate-300 mt-2 max-w-2xl mx-auto">
            Resolva estas 3 questões reais elaboradas no padrão do concurso da PMPI e comprove como a didática direta do curso facilita seu entendimento.
          </p>
        </div>

        {/* Quiz Frame */}
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 shadow-xl relative">
          
          {!quizCompleted ? (
            <div>
              {/* Progress bar */}
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-6">
                <span>QUESTÃO {currentQuestionIndex + 1} DE {questions.length}</span>
                <span className="text-pmpi-gold-400 font-bold">{questions[currentQuestionIndex].module}</span>
              </div>

              {/* Question Statement */}
              <p className="font-sans text-sm sm:text-base font-bold text-slate-100 leading-relaxed mb-8">
                {questions[currentQuestionIndex].statement}
              </p>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {questions[currentQuestionIndex].options.map((option, idx) => {
                  let optionStyle = "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900";
                  
                  if (selectedOption === idx) {
                    optionStyle = "border-pmpi-gold-500 bg-pmpi-gold-500/10 text-pmpi-gold-400 font-semibold";
                  }

                  if (hasSubmitted) {
                    if (idx === questions[currentQuestionIndex].correctIndex) {
                      optionStyle = "border-emerald-500 bg-emerald-500/15 text-emerald-400 font-semibold";
                    } else if (selectedOption === idx) {
                      optionStyle = "border-rose-500 bg-rose-500/15 text-rose-400 line-through";
                    } else {
                      optionStyle = "border-slate-900 bg-slate-900/30 text-slate-500";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={hasSubmitted}
                      id={`quiz-option-${idx}`}
                      className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm flex items-center justify-between cursor-pointer ${optionStyle}`}
                    >
                      <span>{option}</span>
                      {hasSubmitted && idx === questions[currentQuestionIndex].correctIndex && (
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                      )}
                      {hasSubmitted && selectedOption === idx && idx !== questions[currentQuestionIndex].correctIndex && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and explanations */}
              {hasSubmitted && (
                <div className="bg-pmpi-gold-500/5 border border-pmpi-gold-500/15 rounded-xl p-5 mb-8 animate-fade-in">
                  <div className="flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-pmpi-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-slate-100 mb-1.5 uppercase tracking-wider">
                        Explicação do Especialista:
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {questions[currentQuestionIndex].explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-850">
                {!hasSubmitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                    id="quiz-submit-button"
                    className="font-display font-bold text-xs sm:text-sm text-slate-950 px-6 py-3 rounded-full bg-gradient-to-r from-pmpi-gold-400 via-pmpi-gold-500 to-pmpi-gold-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer hover:brightness-110 shadow-lg shadow-pmpi-gold-500/10"
                  >
                    Responder Questão
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    id="quiz-next-button"
                    className="font-display font-bold text-xs sm:text-sm text-slate-950 px-6 py-3 rounded-full bg-gradient-to-r from-pmpi-gold-400 via-pmpi-gold-500 to-pmpi-gold-600 transition-all flex items-center gap-2 cursor-pointer hover:brightness-110 shadow-lg shadow-pmpi-gold-500/10"
                  >
                    {currentQuestionIndex < questions.length - 1 ? "Próxima Questão" : "Ver Meu Resultado"}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            // Results screen
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-pmpi-gold-500" />
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-2">
                Simulado Concluído!
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Você acertou <strong className="text-pmpi-gold-400 text-base">{score} de {questions.length}</strong> questões demonstrativas.
              </p>

              {/* Score breakdown description */}
              <div className="max-w-md mx-auto bg-slate-900/40 border border-slate-800 rounded-xl p-5 mb-8">
                {score === questions.length ? (
                  <p className="font-sans text-xs sm:text-sm text-emerald-400 leading-relaxed">
                    🎉 <strong>Excelente desempenho!</strong> Você já possui uma ótima base de interpretação. Com as videoaulas e mapas mentais do curso completo, você garantirá o gabarito absoluto da Legislação na sua prova!
                  </p>
                ) : score >= 1 ? (
                  <p className="font-sans text-xs sm:text-sm text-amber-400 leading-relaxed">
                    💪 <strong>Bom começo!</strong> Mas lembre-se: as bancas da PMPI não perdoam detalhes ou pegadinhas de prazo e termos específicos. Nosso curso possui mais de 150 questões comentadas similares para você treinar exaustivamente.
                  </p>
                ) : (
                  <p className="font-sans text-xs sm:text-sm text-rose-400 leading-relaxed">
                    ⚠️ <strong>Alerta de atenção!</strong> Estudar legislação sem método é muito difícil. Não se preocupe: no curso bizurado nós mostramos cada artigo de forma esquematizada, artigo por artigo, facilitando sua fixação.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="font-sans font-semibold text-xs text-slate-300 hover:text-white flex items-center gap-2 py-3 px-5 rounded-full border border-slate-800 hover:border-slate-700 transition-all bg-transparent cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  Tentar Novamente
                </button>
                
                <a
                  href="#valores"
                  className="font-display font-bold text-xs sm:text-sm text-slate-950 py-3.5 px-6 rounded-full bg-gradient-to-r from-pmpi-gold-400 via-pmpi-gold-500 to-pmpi-gold-600 shadow-md shadow-pmpi-gold-500/10 hover:brightness-110 flex items-center gap-1.5 cursor-pointer"
                >
                  Quero Acessar o Curso Completo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
