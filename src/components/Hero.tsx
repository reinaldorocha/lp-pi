import React, { useState, useEffect } from "react";
import { Check, Play, Volume2, Award, ArrowRight, Star, Sparkles, ShieldCheck } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 43, seconds: 15 });
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  const demoSlides = [
    {
      title: "Estatuto da PMPI - Artigo 2º",
      lawText: "Art 2º - A Polícia Militar do Estado do Piauí é uma instituição permanente, organizada com base na hierarquia e na disciplina, considerada força auxiliar e reserva do Exército...",
      bizu: "🚨 BIZU DE PROVA: A banca adora trocar 'reserva do Exército' por 'reserva das Forças Armadas'. Memorize: é especificamente do EXÉRCITO!",
    },
    {
      title: "Lei de Organização Básica - Artigo 1º",
      lawText: "Art 1º - A Polícia Militar do Estado do Piauí (PMPI), subordinada ao Governador do Estado, destina-se à preservação da ordem pública e à polícia ostensiva...",
      bizu: "🎯 PEGADINHA COMUM: A subordinação é direta ao GOVERNADOR DO ESTADO, e não à Secretaria de Segurança Pública diretamente nas questões de pegadinha.",
    },
    {
      title: "Código de Ética - Transgressões",
      lawText: "Art 12 - Transgressão disciplinar é qualquer violação dos deveres e das obrigações militares, classificada como Leve, Média ou Grave...",
      bizu: "💡 ESQUEMA DE MEMORIZAÇÃO: L-M-G (Leve, Média, Grave). Não existe transgressão 'Levíssima' ou 'Gravíssima' no Código do Piauí!",
    }
  ];

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
            <div className="inline-flex items-center gap-1.5 self-start bg-slate-900 border border-slate-800 rounded-full px-3.5 py-1.5 mb-6 text-xs text-slate-300 font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-pmpi-orange-500 animate-pulse" />
              <span>EDITAL ATUALIZADO • LEGISLAÇÃO COMPLETA</span>
            </div>

            {/* Giant, ultra-clear Title */}
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-5">
              Passe no concurso da PMPI estudando apenas a legislação institucional que realmente cai.
            </h1>

            {/* Sub-headline: direct benefit */}
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Esqueça PDFs gigantescos e aulas monótonas de 2 horas. Domine as leis, estatutos e decretos exigidos através de videoaulas curtas de 15 minutos, esquemas de memorização e bizus diretos ao ponto.
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
              <span className="text-xs font-semibold text-slate-300">
                Avaliação 4.9/5 • Mais de 1.420 concurseiros aprovados
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

            {/* Bullet trust factors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-8 text-xs text-slate-400 font-sans border-t border-slate-900 pt-6">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acesso imediato à plataforma de estudos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% atualizado com leis de 2024 e decretos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Assista no computador, tablet ou celular</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantia de atualização e revisões inclusas</span>
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
              
              {/* Browser Header Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-850 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                </div>
                <div className="bg-slate-900 px-3 py-1 rounded-md text-[10px] text-slate-400 font-mono w-48 truncate text-center">
                  plataforma.pmpi.bizurada
                </div>
                <div className="w-10"></div>
              </div>

              {/* Mockup Platform Content */}
              <div className="p-4 bg-slate-900 flex flex-col text-left">
                
                {/* Active Lesson Header */}
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pmpi-orange-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider font-display">
                      Videoaula Demonstrativa
                    </span>
                  </div>
                  <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded">
                    Estatuto PMPI
                  </span>
                </div>

                {/* Video Player Box / Interactive Screen */}
                <div className="relative rounded-xl bg-slate-950 aspect-[16/10] overflow-hidden flex flex-col justify-center items-center border border-slate-850 shadow-inner">
                  {!isPlayingDemo ? (
                    <div className="p-6 text-center flex flex-col items-center z-10">
                      <button
                        onClick={() => setIsPlayingDemo(true)}
                        className="w-14 h-14 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                        aria-label="Play demo video"
                      >
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </button>
                      <p className="text-xs font-semibold text-white mt-3.5">
                        Testar Aula Demonstrativa
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 max-w-[280px]">
                        Clique para ver na prática o método dinâmico, esquematizado e direto ao ponto.
                      </p>
                    </div>
                  ) : (
                    /* Interactive Demo Slide Player */
                    <div className="absolute inset-0 flex flex-col p-3 bg-slate-900 text-slate-200">
                      <div className="flex justify-between items-center mb-1 text-[9px] text-pmpi-gold-400 font-mono">
                        <span>AULA DEMO: {demoSlides[currentSlideIndex].title}</span>
                        <span className="bg-slate-800 px-1.5 py-0.5 rounded text-white">
                          {currentSlideIndex + 1}/3
                        </span>
                      </div>
                      
                      {/* Law text */}
                      <div className="flex-1 bg-slate-950 border border-slate-850 rounded-lg p-2 text-[10px] leading-relaxed overflow-y-auto mb-1 font-sans text-slate-300">
                        <p className="text-slate-500 font-mono text-[8px] mb-1">Texto da Lei Seca:</p>
                        <p>{demoSlides[currentSlideIndex].lawText}</p>
                      </div>

                      {/* Bizu Highlight */}
                      <div className="bg-slate-950 border border-slate-800 p-2 rounded-lg text-[9px] mb-2 leading-tight">
                        <p className="font-bold text-pmpi-orange-500 font-mono">⚡ BIZU PMPI:</p>
                        <p className="text-slate-300">{demoSlides[currentSlideIndex].bizu}</p>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between pt-1 border-t border-slate-850 text-[9px]">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Volume2 className="w-3 h-3 text-pmpi-orange-500 animate-pulse" />
                          <span>Áudio Ativo</span>
                        </div>
                        <div className="flex gap-1.5">
                          {currentSlideIndex > 0 && (
                            <button
                              onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)}
                              className="bg-slate-800 hover:bg-slate-700 text-white px-2 py-0.5 rounded text-[8px] font-semibold cursor-pointer"
                            >
                              Anterior
                            </button>
                          )}
                          {currentSlideIndex < demoSlides.length - 1 ? (
                            <button
                              onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)}
                              className="bg-pmpi-orange-500 hover:bg-pmpi-orange-600 text-white px-2 py-0.5 rounded text-[8px] font-semibold cursor-pointer"
                            >
                              Próximo
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setIsPlayingDemo(false);
                                setCurrentSlideIndex(0);
                              }}
                              className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[8px] font-semibold cursor-pointer"
                            >
                              Concluir Aula 🎯
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Study Tools Mockups */}
                <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-pmpi-orange-500" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-200 block">Legislação Facilitada</span>
                      <span className="text-[9px] text-slate-400 block leading-none">Artigo por Artigo</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-950/30 border border-emerald-900/50 text-emerald-400 text-[10px] font-mono font-bold px-2 py-1 rounded-lg">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Acesso Liberado</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
