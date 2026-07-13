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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Launch Alert Badge */}
        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pmpi-orange-500/20 to-pmpi-orange-600/20 border border-pmpi-orange-500/30 rounded-full px-4 py-1.5 mb-8 text-xs text-pmpi-orange-300 font-extrabold shadow-sm tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-pmpi-orange-500 animate-pulse" />
          <span>CURSO ISOLADO EM QUESTÕES • LEGISLAÇÃO</span>
        </div>

        {/* Giant, ultra-clear Title with PMPI Crest */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-6 justify-center">
          <div className="relative">
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tighter leading-none select-none text-glow">
              PMPI
            </h1>
            <div className="absolute -top-3 -right-3 sm:-right-6 bg-pmpi-orange-500 text-white font-mono text-[9px] font-black px-2 py-0.5 rounded-md uppercase rotate-12 tracking-wide shadow-md">
              100% ATUALIZADO
            </div>
          </div>
          
          {/* Institutional PMPI Logo */}
          <div className="relative shrink-0 flex items-center justify-center p-2 px-3 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm shadow-xl hover:border-pmpi-orange-500/30 transition-all duration-300">
            <img 
              src="https://profjonathanrocha.com.br/wp-content/uploads/2026/02/PMpi-187x300.webp" 
              alt="Brasão PMPI" 
              className="w-[120px] h-[150px] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <h2 className="font-display font-black text-base sm:text-lg lg:text-xl text-pmpi-orange-400 tracking-wider uppercase mb-6">
          POLÍCIA MILITAR DO ESTADO DO PIAUÍ
        </h2>

        {/* Sub-headline: direct benefit */}
        <p className="font-sans text-base sm:text-lg text-slate-200 max-w-3xl mb-8 leading-relaxed">
          Esqueça PDFs gigantescos e aulas monótonas. Domine todo conteúdo programático do seu edital com foco 100% em questões comentadas de forma bizurada. Sua farda começa aqui.
        </p>

        {/* Rating and Social Proof ABOVE the button */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="flex text-pmpi-orange-500">
            <Star className="w-4.5 h-4.5 fill-pmpi-orange-500" />
            <Star className="w-4.5 h-4.5 fill-pmpi-orange-500" />
            <Star className="w-4.5 h-4.5 fill-pmpi-orange-500" />
            <Star className="w-4.5 h-4.5 fill-pmpi-orange-500" />
            <Star className="w-4.5 h-4.5 fill-pmpi-orange-500" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-300">
            Avaliação 4.9/5 • Método do Prof. Jonathan Rocha
          </span>
        </div>

        {/* Orange Large Button CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
          <button
            onClick={onCtaClick}
            id="hero-cta-button-vaga"
            className="w-full sm:w-auto font-display font-bold text-lg text-white py-4.5 px-12 rounded-full bg-gradient-to-r from-pmpi-orange-500 via-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-2xl shadow-pmpi-orange-500/25 hover:scale-103 active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet trust factors from Image 3 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8 mb-10 text-xs sm:text-sm text-slate-200 font-sans font-bold border-y border-slate-900 py-6 w-full max-w-3xl justify-center">
          <div className="flex items-center justify-center gap-2.5">
            <Check className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>CONTEÚDO BIZURADO</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Check className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>100% PÓS-EDITAL</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Check className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>ESQUEMATIZADO</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Check className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>TEORIA EM QUESTÕES</span>
          </div>
        </div>

        {/* Countdown Urgency Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-2xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping shrink-0"></div>
            <div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider">
                Oferta Especial com 50% de Desconto
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-400 font-sans mt-0.5">
                As vagas de lançamento com valor promocional expiram em:
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col items-center">
              <span className="bg-slate-950 text-white font-mono font-bold text-base px-2.5 py-1 rounded-md border border-slate-800 shadow-sm">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-mono text-slate-500 mt-1 uppercase font-semibold">horas</span>
            </div>
            <span className="text-slate-600 font-bold mb-4 text-lg">:</span>
            <div className="flex flex-col items-center">
              <span className="bg-slate-950 text-white font-mono font-bold text-base px-2.5 py-1 rounded-md border border-slate-800 shadow-sm">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-mono text-slate-500 mt-1 uppercase font-semibold">min</span>
            </div>
            <span className="text-slate-600 font-bold mb-4 text-lg">:</span>
            <div className="flex flex-col items-center">
              <span className="bg-slate-950 text-white font-mono font-bold text-base px-2.5 py-1 rounded-md border border-slate-800 shadow-sm">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-mono text-slate-500 mt-1 uppercase font-semibold">seg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
