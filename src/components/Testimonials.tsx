import React from "react";
import { Star, ShieldCheck, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Renato Sousa",
      role: "Aprovado PMPI / Teresina - PI",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      text: "Excelente didática. Eu tinha muita dificuldade em memorizar o Estatuto da PMPI porque a lei de 1981 é super confusa. Os esquemas e mnemônicos do curso abriram minha mente de um jeito único. Fui aprovado!"
    },
    {
      id: 2,
      name: "Mariana Cavalcante",
      role: "Classificada PMPI / Picos - PI",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      text: "Material extremamente organizado. O cronograma do curso é perfeito para quem trabalha o dia todo e tem poucas horas livres. Você estuda o que realmente cai, sem perder tempo com enrolações."
    },
    {
      id: 3,
      name: "Jefferson Lima",
      role: "Concurseiro PMPI / Parnaíba - PI",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
      text: "Finalmente consegui compreender a legislação sem precisar decorar tudo. O professor explica os principais prazos e competências de forma esquematizada. As questões comentadas ajudaram demais!"
    },
    {
      id: 4,
      name: "Camila Guimarães",
      role: "Focada em Segurança Pública / Floriano - PI",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
      text: "A nova Lei Orgânica de 2022 e os regulamentos recentes foram o grande diferencial. Outros cursinhos genéricos ignoram estes detalhes e a banca foca justamente neles. Vale cada centavo!"
    }
  ];

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
            Veja o depoimento sincero de quem usou o nosso método simplificado para superar o bloqueio com as leis secas e conquistar o diferencial competitivo na prova.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-750 shadow-lg transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-pmpi-orange-500">
                  <Star className="w-4 h-4 fill-pmpi-orange-500 text-pmpi-orange-500" />
                  <Star className="w-4 h-4 fill-pmpi-orange-500 text-pmpi-orange-500" />
                  <Star className="w-4 h-4 fill-pmpi-orange-500 text-pmpi-orange-500" />
                  <Star className="w-4 h-4 fill-pmpi-orange-500 text-pmpi-orange-500" />
                  <Star className="w-4 h-4 fill-pmpi-orange-500 text-pmpi-orange-500" />
                </div>

                {/* Text */}
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* User profile details */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-800"
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-100">{rev.name}</h4>
                  <p className="text-[10px] text-slate-450 mt-0.5 font-medium">{rev.role}</p>
                </div>
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
