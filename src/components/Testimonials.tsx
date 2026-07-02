import React from "react";
import { Star, MessageSquareCode, ShieldCheck } from "lucide-react";
import { Testimony } from "../types";

export default function Testimonials() {
  const reviews: Testimony[] = [
    {
      id: 1,
      name: "Renato Sousa",
      role: "Aprovado PMPI / Teresina - PI",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      text: "Excelente didática. Estava com muita dificuldade no Estatuto da PMPI, pois a redação da lei seca de 1981 é super confusa. Os esquemas do curso abriram minha mente de um jeito único."
    },
    {
      id: 2,
      name: "Mariana Cavalcante",
      role: "Estudante Carreiras Policiais / Picos - PI",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      text: "Material muito organizado. O cronograma de 4 semanas é perfeito para quem trabalha o dia todo igual a mim. Você sabe exatamente o que precisa estudar cada dia sem perder tempo."
    },
    {
      id: 3,
      name: "Jefferson Lima",
      role: "Concurseiro PMPI / Parnaíba - PI",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      text: "Finalmente consegui entender a legislação! O professor explica artigo por artigo e destaca as principais pegadinhas. As questões simuladas com gabarito comentado ajudam demais na fixação."
    },
    {
      id: 4,
      name: "Camila Guimarães",
      role: "Focada em Segurança Pública / Floriano - PI",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      text: "As atualizações de 2024 e o Decreto 27.156 foram o grande diferencial para mim. Outros cursos nem comentam estas novidades e a banca certamente vai focar nelas. Recomendo fortemente!"
    }
  ];

  return (
    <section 
      id="depoimentos"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-0 right-10 w-64 h-64 bg-pmpi-gold-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            RESULTADOS REAIS E DEPOIMENTOS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            O Que Dizem Nossos Alunos
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Comprove como concurseiros de todo o Piauí estão superando as dificuldades da legislação e garantindo vantagem competitiva na prova.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col justify-between hover:border-pmpi-gold-500/40 shadow-md transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-pmpi-gold-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-pmpi-gold-500 text-pmpi-gold-500" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* User profile details */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-850">
                <img
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-pmpi-gold-500/50"
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white">{rev.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Social Proof Stat inside reviews */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 rounded-full px-5 py-2 text-xs text-pmpi-gold-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-pmpi-gold-500 shrink-0" />
            <span>Satisfação de <strong className="text-white font-bold">98.4%</strong> baseada em feedbacks internos de simulados.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
