import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section 
      id="depoimentos"
      className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-orange-500 tracking-widest uppercase bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-3.5 py-1.5 rounded-full">
            QUEM USA, RECOMENDA
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
            Prova social de concurseiros reais
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Veja os depoimentos de quem usou o nosso método para gabaritar e ser aprovado.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: 1,
              url: "https://profjonathanrocha.com.br/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-13-at-21.24.22-1.jpeg",
              alt: "Depoimento Aluno PMPI 1"
            },
            {
              id: 2,
              url: "https://profjonathanrocha.com.br/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-13-at-21.24.21.jpeg",
              alt: "Depoimento Aluno PMPI 2"
            },
            {
              id: 3,
              url: "https://profjonathanrocha.com.br/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-13-at-21.24.22.jpeg",
              alt: "Depoimento Aluno PMPI 3"
            },
            {
              id: 4,
              url: "https://profjonathanrocha.com.br/wp-content/uploads/2025/01/6666666666666DEPOIMENTO299-e1738108765116.png",
              alt: "Depoimento Aluno PMPI 4"
            }
          ].map((img) => (
            <div 
              key={img.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-2 overflow-hidden hover:border-pmpi-orange-500/30 hover:scale-[1.02] shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  src={img.url}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction Rating Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-900/50 rounded-full px-5 py-2.5 text-xs text-emerald-400 font-sans font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Taxa de satisfação de <strong>98.4%</strong> entre nossos alunos ativos</span>
          </div>
        </div>

        {/* Repeated CTA Block */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("valores");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            id="testimonials-cta-button"
            className="font-display font-bold text-base text-white py-4 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-lg shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-[11px] text-slate-550 font-mono">
            ★ Junte-se a centenas de futuros soldados e oficiais da PMPI
          </span>
        </div>

      </div>
    </section>
  );
}
