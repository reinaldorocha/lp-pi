import React from "react";
import { Award, ShieldCheck, ArrowRight } from "lucide-react";

export default function Guarantee() {
  return (
    <section 
      id="garantia" 
      className="py-12 bg-slate-900 border-t border-slate-950 relative overflow-hidden text-slate-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bordered Guarantee Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center gap-10">
          
          {/* Visual Seal of 7 Days */}
          <div className="relative shrink-0 flex justify-center items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-900 border-4 border-pmpi-orange-500 flex flex-col items-center justify-center relative shadow-lg">
              <span className="font-display font-black text-4xl sm:text-5xl text-pmpi-orange-500 leading-none">7</span>
              <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase mt-1">DIAS</span>
            </div>
            {/* Soft decorative ring */}
            <div className="absolute -inset-2 bg-pmpi-orange-500/5 rounded-full filter blur-sm"></div>
          </div>

          {/* Guarantee Copywriting */}
          <div className="text-left flex-1">
            <span className="font-mono text-xs font-bold text-pmpi-orange-500 tracking-wider uppercase block mb-2">
              RISCO ZERO COMPLETO
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-pmpi-orange-500 shrink-0" />
              Garantia de Satisfação de 7 Dias
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
              O risco é todo nosso. Matricule-se hoje, assista às primeiras videoaulas, baixe os resumos esquematizados e resolva os exercícios. Se em até 7 dias você entender que o método não é ideal para você, basta solicitar o reembolso. Devolvemos 100% do seu dinheiro, de forma automática e imediata. Sem burocracia, sem perguntas e sem pegadinhas.
            </p>
          </div>

        </div>

        {/* Repeated CTA Block */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("valores");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            id="guarantee-cta-button"
            className="font-display font-bold text-base text-white py-4 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-lg shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-[11px] text-slate-550 font-mono">
            ★ Garantia incondicional amparada pelo Código de Defesa do Consumidor
          </span>
        </div>

      </div>
    </section>
  );
}
