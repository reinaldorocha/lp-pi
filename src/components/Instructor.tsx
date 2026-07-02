import React from "react";
import { ShieldAlert, BookOpen, Award, CheckCircle } from "lucide-react";

export default function Instructor() {
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "1.4k+", label: "Alunos Mentorados" },
    { value: "4", label: "Aprovações Policiais" },
    { value: "94%", label: "Aprovação em Legislação" }
  ];

  return (
    <section 
      id="professor"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pmpi-gold-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Instructor Image Frame - Left Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              {/* Outer decorative glow */}
              <div className="absolute inset-0 bg-pmpi-gold-500/10 rounded-3xl filter blur-xl transform rotate-6"></div>
              
              {/* Image Frame with gold borders */}
              <div className="absolute inset-0 bg-brand-card rounded-3xl border-2 border-brand-border p-4 shadow-2xl flex flex-col justify-between items-center text-center overflow-hidden">
                
                {/* Styled Vector Avatar Placeholder representing a police mentor */}
                <div className="w-40 h-40 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center relative overflow-hidden mt-6">
                  {/* Outer circle layout */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pmpi-gold-500/10 to-transparent"></div>
                  
                  {/* SVG Drawing of a generic male instructor in suit/shirt */}
                  <svg className="w-28 h-28 text-slate-500 mt-6" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12c0 2.637 1.043 5.03 2.735 6.784.148.154.21.366.198.577l-.21 3.522a.75.75 0 001.071.714l3.123-1.562a.75.75 0 00.597-.042A9.707 9.707 0 0012 21.75c1.886 0 3.654-.535 5.16-1.464a.75.75 0 01.761-.013l3.053 1.526a.75.75 0 001.072-.714l-.21-3.411a.75.75 0 00-.151-.577zM12 5.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 14.25c-4.14 0-7.5 2.24-7.5 5v.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-.25c0-2.76-3.36-5-7.5-5z" clipRule="evenodd" />
                  </svg>
                  
                  {/* Absolute Badge inside avatar */}
                  <div className="absolute bottom-2 bg-pmpi-gold-500 text-slate-950 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase">
                    POLICIAL PENAL
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-display font-black text-lg text-white">Prof. Silva Júnior</h4>
                  <p className="font-mono text-[10px] text-slate-400 tracking-wider">Mentoria de Elite</p>
                </div>

                {/* Secure Trust Seal inside Frame */}
                <div className="w-full bg-slate-950 py-2.5 px-4 rounded-xl border border-slate-850 flex items-center justify-center gap-2">
                  <Award className="w-4 h-4 text-pmpi-gold-500" />
                  <span className="font-mono text-[9px] text-slate-350 tracking-wider uppercase font-bold">PROFESSOR ESPECIALISTA</span>
                </div>

              </div>
            </div>
          </div>

          {/* Instructor Bio & Statistics - Right Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full self-start">
              SOBRE O PROFESSOR
            </span>
            <h2 className="font-display font-black text-3xl text-white mt-4 tracking-tight leading-tight mb-6">
              Estude com Quem Conhece a Estrada do Sucesso
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
              Diferente de professores puramente acadêmicos, Silva Júnior vive e respira a rotina das carreiras policiais. Atuando como <strong className="text-pmpi-gold-400 font-bold">Policial Penal</strong> e mentor técnico de concursos há anos, possui amplo portfólio de materiais táticos aprovados e uma didática visual reconhecida.
            </p>

            <p className="font-sans text-sm sm:text-base text-slate-400 mb-8 leading-relaxed">
              O material foi construído de forma empírica: analisando cada padrão de questão das bancas, filtrando o que realmente tem chance de ser cobrado e estruturando mnemônicos rápidos de véspera para garantir sua farda na PMPI.
            </p>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-850">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-brand-card border border-brand-border rounded-xl p-4 text-center">
                  <span className="font-mono font-black text-lg sm:text-xl text-pmpi-gold-400 block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 uppercase font-mono block leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
