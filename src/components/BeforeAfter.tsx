import React from "react";
import { XCircle, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function BeforeAfter() {
  const painPoints = [
    "Ler a lei sem entender, tentando decorar termos formais que parecem grego.",
    "Perder tempo procurando materiais desatualizados em fóruns e grupos de WhatsApp.",
    "Estudar apostilas genéricas repletas de erros jurídicos e sem foco na PMPI.",
    "Sentir frustração por errar questões de legislação simples por mero detalhe.",
    "Chegar na semana da prova com a sensação de não ter absorvido nada da matéria."
  ];

  const rewardPoints = [
    "Saber exatamente o que revisar, focando no que realmente cai nas provas.",
    "Entender a legislação por completo através de explicações dinâmicas e didáticas.",
    "Memorizar com facilidade prazos, hierarquias e sanções por meio de mnemônicos.",
    "Ganhar velocidade na resolução de questões, poupando minutos valiosos de prova.",
    "Chegar no dia da prova confiante de que dominou 100% da legislação institucional."
  ];

  return (
    <section 
      id="antes-depois"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pmpi-gold-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            DRAMÁTICA MUDANÇA DE DESEMPENHO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Sua Transformação na Preparação
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Veja como sua rotina de estudos vai mudar drasticamente ao trocar apostilas estáticas e cansativas pelo método bizurado completo.
          </p>
        </div>

        {/* Comparison Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* PAIN CARD: Antes */}
          <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-rose-500/15 pb-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
                  <XCircle className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-rose-400 uppercase">A PREPARAÇÃO ATUAL</span>
                  <h3 className="font-display font-black text-lg text-white">Como Você Estuda Hoje (E se Cansa)</h3>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-400 mb-6 italic leading-relaxed">
                Sem o direcionamento estratégico correto, estudar para o concurso da PMPI acaba se tornando uma rotina estressante e pouco produtiva:
              </p>

              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500/75 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-500/15 text-[11px] font-mono text-rose-400 font-semibold">
              ❌ Esse caminho custa tempo, gera cansaço e pode levar à reprovação.
            </div>
          </div>

          {/* REWARD CARD: Depois */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Soft gold light flare */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-pmpi-gold-500/5 rounded-full filter blur-xl"></div>
            
            <div>
              <div className="flex items-center gap-3 border-b border-emerald-500/15 pb-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">MÉTODO PMPI BIZURADA</span>
                  <h3 className="font-display font-black text-lg text-white">Como Será Sua Rotina Daqui para Frente</h3>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-400 mb-6 italic leading-relaxed">
                Ao destravar nosso método dinâmico, você otimiza seus estudos e acelera o caminho para fardar na Polícia Militar do Piauí:
              </p>

              <ul className="space-y-4">
                {rewardPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed font-semibold">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-500/15 text-[11px] font-mono text-emerald-450 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-pmpi-gold-500" />
              ✔ Economia de até 80% de tempo com aprovação acelerada.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
