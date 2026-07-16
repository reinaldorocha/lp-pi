import React, { useState, useEffect } from "react";
import { Check, Award, ArrowRight, Star, Sparkles, ShieldCheck } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 43, seconds: 15 });

  useEffect(() => {
    const storageKey = "pmpi_countdown_end_time";
    let endTime = localStorage.getItem(storageKey);

    if (!endTime) {
      const durationMs = (2 * 60 * 60 + 43 * 60 + 15) * 1000;
      endTime = Date.now() + durationMs + "";
      localStorage.setItem(storageKey, endTime);
    }

    const interval = setInterval(() => {
      let diff = parseInt(endTime || "0") - Date.now();
      if (diff <= 0) {
        const durationMs = (2 * 60 * 60 + 35 * 60) * 1000;
        endTime = Date.now() + durationMs + "";
        localStorage.setItem(storageKey, endTime);
        diff = durationMs;
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero"
      className="relative min-h-screen pt-32 pb-20 bg-slate-950 flex flex-col justify-center overflow-hidden text-slate-100"
    >
      {/* Decorative Grid Lines - Apple & Stripe Inspired */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-slate-900 to-slate-950 opacity-60"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]"></div>
        {/* Subtle blur flares */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-pmpi-orange-500/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Launch Alert Badge */}
            <div className="inline-flex items-center gap-1.5 self-start bg-gradient-to-r from-pmpi-orange-500/20 to-pmpi-orange-600/20 border border-pmpi-orange-500/30 rounded-full px-4 py-1.5 mb-6 text-xs text-pmpi-orange-300 font-extrabold shadow-sm tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-pmpi-orange-500 animate-pulse" />
              <span>CURSO ISOLADO EM QUESTÕES • LEGISLAÇÃO</span>
            </div>

            {/* Giant, ultra-clear Title with PMPI Crest */}
            <div className="flex items-center gap-5 sm:gap-6 mb-2">
              <div className="relative">
                <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tighter leading-none select-none text-glow">
                  PMPI
                </h1>
                <div className="absolute -top-3 -right-3 sm:-right-6 bg-pmpi-orange-500 text-white font-mono text-[9px] font-black px-2 py-0.5 rounded-md uppercase rotate-12 tracking-wide shadow-md">
                  100% ATUALIZADO
                </div>
              </div>
              
              {/* Institutional PMPI Logo */}
              <div className="relative shrink-0 flex items-center justify-center p-1.5 px-2 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm shadow-lg hover:border-pmpi-orange-500/30 transition-all duration-300">
                <img 
                  src="https://profjonathanrocha.com.br/wp-content/uploads/2026/02/PMpi-187x300.webp" 
                  alt="Brasão PMPI" 
                  className="w-[100px] h-[150px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <h2 className="font-display font-black text-sm sm:text-base lg:text-lg text-pmpi-orange-400 tracking-wider uppercase mb-5">
              POLÍCIA MILITAR DO ESTADO DO PIAUÍ
            </h2>

            {/* Sub-headline: direct benefit */}
            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Esqueça PDFs gigantescos e aulas monótonas. Domine todo conteúdo programático do seu edital com foco 100% em questões comentadas de forma bizurada. Sua farda começa aqui.
            </p>

            {/* Rating and Social Proof ABOVE the button */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-pmpi-orange-500">
                <Star className="w-4 h-4 fill-pmpi-orange-500" />
                <Star className="w-4 h-4 fill-pmpi-orange-500" />
                <Star className="w-4 h-4 fill-pmpi-orange-500" />
                <Star className="w-4 h-4 fill-pmpi-orange-500" />
                <Star className="w-4 h-4 fill-pmpi-orange-500" />
              </div>
              <span className="text-xs font-semibold text-slate-350">
                Avaliação 4.9/5 • Método do Prof. Jonathan Rocha
              </span>
            </div>

            {/* Orange Large Button CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onCtaClick}
                id="hero-cta-button-vaga"
                className="font-display font-bold text-base text-white py-4.5 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 via-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-xl shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bullet trust factors from Image 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-8 text-xs sm:text-sm text-slate-200 font-sans font-bold border-t border-slate-900 pt-6">
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>CONTEÚDO BIZURADO</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>100% ATUALIZADO PÓS-EDITAL</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>ESQUEMATIZADO E OBJETIVO</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>TEORIA APLICADA EM QUESTÕES</span>
              </div>
            </div>

            {/* Countdown Urgency Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping shrink-0"></div>
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                    Oferta Especial com 50% de Desconto
                  </h4>
                  <p className="text-[11px] text-slate-400 font-sans">
                    As vagas de lançamento com valor promocional expiram em:
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <div className="flex flex-col items-center">
                  <span className="bg-slate-950 text-white font-mono font-bold text-sm px-2 py-0.5 rounded border border-slate-800 shadow-sm">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] font-mono text-slate-500 mt-1 uppercase">horas</span>
                </div>
                <span className="text-slate-550 font-bold mb-4">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-slate-950 text-white font-mono font-bold text-sm px-2 py-0.5 rounded border border-slate-800 shadow-sm">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] font-mono text-slate-500 mt-1 uppercase">min</span>
                </div>
                <span className="text-slate-550 font-bold mb-4">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-slate-950 text-white font-mono font-bold text-sm px-2 py-0.5 rounded border border-slate-800 shadow-sm">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] font-mono text-slate-500 mt-1 uppercase">seg</span>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Visuals - Apple Inspired Mockup Window */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Subtle shadow glow */}
            <div className="absolute w-[300px] h-[300px] bg-pmpi-orange-500/5 rounded-full filter blur-[60px] pointer-events-none"></div>

            {/* Apple Mac-like Browser Frame Mockup */}
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Mockup Platform Content */}
              <div className="p-5 bg-slate-900 flex flex-col text-left">
                
                {/* Video Pitch Header with Striking Title */}
                <div className="text-center mb-4">
                  <span className="text-glow-blue font-mono text-[9px] bg-pmpi-orange-500/10 border border-pmpi-orange-500/25 text-pmpi-orange-400 px-2.5 py-1 rounded-full uppercase font-bold tracking-wider inline-block mb-1.5">
                    Apresentação Oficial
                  </span>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-white leading-snug">
                    Como Gabaritar a Legislação da PMPI Estudando o que Realmente Cai
                  </h3>
                </div>

                {/* Video Player Box */}
                <div className="relative rounded-xl bg-slate-950 aspect-[16/10] overflow-hidden border border-slate-850 shadow-inner shadow-pmpi-orange-500/5">
                  <iframe
                    className="absolute inset-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/sHsRzxUn3Sk?rel=0&controls=0"
                    title="Vídeo de Apresentação Oficial - PMPI Bizurada"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}