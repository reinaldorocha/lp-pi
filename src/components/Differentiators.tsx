import React from "react";
import { Check, X, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export default function Differentiators() {
  const comparisonRows = [
    {
      feature: "Duração das Aulas",
      ourVal: "Aulas dinâmicas e cirúrgicas de 10 a 15 minutos focadas no edital.",
      compVal: "Vídeos cansativos de 2 horas cheios de enrolação acadêmica.",
      ourIcon: Check,
      compIcon: X,
    },
    {
      feature: "Bizus e Mnemônicos",
      ourVal: "Bizus prontos, gatilhos mentais e mnemônicos para fixação rápida.",
      compVal: "Sem material de memorização ativa, apenas a lei seca crua.",
      ourIcon: Check,
      compIcon: X,
    },
    {
      feature: "Linguagem do Curso",
      ourVal: "Legislação traduzida de forma simples, lógica e descomplicada.",
      compVal: "Linguagem jurídica ('juridiquês') complexa de difícil absorção.",
      ourIcon: Check,
      compIcon: X,
    },
    {
      feature: "Foco do Material",
      ourVal: "100% estruturado e gravado especificamente para a PMPI.",
      compVal: "Cursos genéricos e reaproveitados de outros concursos estaduais.",
      ourIcon: Check,
      compIcon: X,
    },
    {
      feature: "Suporte e Atualização",
      ourVal: "Garantia de atualizações normativas constantes com as leis de 2024.",
      compVal: "Material estático, sem atualizações e suporte a dúvidas nulo.",
      ourIcon: Check,
      compIcon: X,
    }
  ];

  return (
    <section 
      id="diferenciais"
      className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-orange-500 tracking-widest uppercase bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-3.5 py-1.5 rounded-full">
            POR QUE ESCOLHER O PMPI BIZURADA?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
            Compare e veja a diferença na sua preparação
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Pare de perder tempo com métodos tradicionais ultrapassados. Desenvolvemos uma metodologia focada em memorização acelerada para garantir que você gabarite Legislação.
          </p>
        </div>

        {/* Comparison Table Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-850">
                <th className="py-5 px-6 font-display font-bold text-sm text-slate-400 uppercase tracking-wider w-1/4">Recurso</th>
                <th className="py-5 px-6 font-display font-black text-sm text-white uppercase tracking-wider w-3/8 bg-pmpi-orange-500/5">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-pmpi-orange-500" />
                    <span>O Nosso Curso</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-display font-bold text-sm text-slate-400 uppercase tracking-wider w-3/8">
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-slate-500" />
                    <span>Cursos Tradicionais</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-850 last:border-none">
                  <td className="py-5 px-6 font-display font-bold text-slate-200 text-sm">{row.feature}</td>
                  
                  {/* Our Offer Column */}
                  <td className="py-5 px-6 bg-pmpi-orange-500/5 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-900/50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="font-sans font-semibold text-slate-200 leading-relaxed">{row.ourVal}</span>
                    </div>
                  </td>
                  
                  {/* Competitor Column */}
                  <td className="py-5 px-6 text-sm text-slate-400">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-950 border border-rose-900/50 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-rose-400" />
                      </div>
                      <span className="font-sans leading-relaxed">{row.compVal}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Layout (Cards) */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
          {comparisonRows.map((row, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-850 rounded-2xl p-5 shadow-lg space-y-4">
              <h3 className="font-display font-black text-white text-sm uppercase tracking-wider border-b border-slate-850 pb-2">
                {row.feature}
              </h3>
              
              {/* Us */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-pmpi-orange-500 uppercase tracking-wider block">O Nosso Curso</span>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-950 border border-emerald-900/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                  </div>
                  <p className="text-xs font-semibold text-slate-200 leading-relaxed">{row.ourVal}</p>
                </div>
              </div>

              {/* Competitors */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Cursos Tradicionais</span>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-rose-950 border border-rose-900/50 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 text-rose-400" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{row.compVal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Repeated CTA Block */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("valores");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            id="differentiators-cta-button"
            className="font-display font-bold text-base text-white py-4 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-lg shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-[11px] text-slate-500 font-mono">
            ★ Pare de estudar de forma genérica e garanta seu diferencial competitivo
          </span>
        </div>

      </div>
    </section>
  );
}
