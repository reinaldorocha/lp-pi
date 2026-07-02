import React, { useState, useEffect } from "react";
import { Check, Play, Volume2, ShieldAlert, Award, ArrowRight, Laptop, Smartphone, BookOpen, Star, Sparkles } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  // Urgency Countdown State (Persistent Rolling Timer of 2h 43m 15s)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 43, seconds: 15 });
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Persistent rolling timer
    const storageKey = "pmpi_countdown_end_time";
    let endTime = localStorage.getItem(storageKey);

    if (!endTime) {
      // Set to 2h 43m from now
      const durationMs = (2 * 60 * 60 + 43 * 60 + 15) * 1000;
      endTime = Date.now() + durationMs + "";
      localStorage.setItem(storageKey, endTime);
    }

    const interval = setInterval(() => {
      let diff = parseInt(endTime || "0") - Date.now();
      if (diff <= 0) {
        // Reset to another 2 hours when expired
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
      bizu: "🚨 BIZU DE PROVA: A banca adora trocar 'reserva do Exército' por 'reserva das Forças Armadas'. Lembre-se: é especificamente do EXÉRCITO!",
      highlight: "instituição permanente, hierarquia e disciplina, reserva do Exército",
    },
    {
      title: "Lei de Organização Básica - Artigo 1º",
      lawText: "Art 1º - A Polícia Militar do Estado do Piauí (PMPI), subordinada ao Governador do Estado, destina-se à preservação da ordem pública e à polícia ostensiva...",
      bizu: "🎯 PEGADINHA COMUM: A subordinação é direta ao GOVERNADOR DO ESTADO, e não à Secretaria de Segurança Pública diretamente (embora administrativamente vinculada).",
      highlight: "subordinada ao Governador do Estado, polícia ostensiva",
    },
    {
      title: "Código de Ética - Transgressões",
      lawText: "Art 12 - Transgressão disciplinar é qualquer violação dos deveres e das obrigações militares, classificada como Leve, Média ou Grave...",
      bizu: "💡 ESQUEMA DE MEMORIZAÇÃO: L-M-G (Leve, Média, Grave). Não existe transgressão 'Levíssima' ou 'Gravíssima' no Código de Ética do Piauí!",
      highlight: "Leve, Média ou Grave",
    }
  ];

  return (
    <section 
      id="hero"
      className="relative min-h-screen pt-28 pb-20 bg-brand-dark flex flex-col justify-center overflow-hidden"
    >
      {/* Background Graphic Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pmpi-blue-900/5 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-pmpi-blue-600/5 rounded-full filter blur-[100px]"></div>
        
        {/* Abstract grids */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0b3b82_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Launch Alert Badge */}
            <div className="inline-flex items-center gap-1.5 self-start bg-pmpi-gold-500/10 border border-pmpi-gold-500/20 rounded-full px-4 py-1.5 mb-6 text-xs text-pmpi-gold-400 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-pmpi-gold-500 animate-pulse" />
              <span>EDITAL CONFIRMADO & ATUALIZADO 2026/2027</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-3.5xl sm:text-4.5xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-6">
              DOMINE TODA A <br />
              <span className="brand-text-gradient font-black">LEGISLAÇÃO INSTITUCIONAL</span> <br />
              DA PMPI ANTES DA PROVA.
            </h1>

            {/* Sub-headline (PAS-focused) */}
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Estudar leis secas cansativas e desatualizadas sem direcionamento é o caminho mais rápido para a reprovação. Nosso método foi desenhado para você aprender de forma <strong>esquematizada, bizurada e focada</strong> exatamente no edital da Polícia Militar do Piauí.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
              {[
                "Acesso imediato à plataforma",
                "100% Atualizado (Leis 2024 e Decretos)",
                "Estude no seu ritmo (Celular & PC)",
                "Bizus e Mapas de Revisão Inclusos"
              ].map((badge, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <div className="bg-pmpi-gold-500/10 border border-pmpi-gold-500/20 rounded p-0.5 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-pmpi-gold-500" />
                  </div>
                  <span className="font-medium">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs and Real-time Countdown Card */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onCtaClick}
                id="hero-cta-button-vaga"
                className="font-display font-bold text-base text-slate-950 py-4 px-8 rounded-full bg-gradient-to-r from-pmpi-gold-400 via-pmpi-gold-500 to-pmpi-gold-600 hover:brightness-110 shadow-lg shadow-pmpi-gold-500/20 active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
              >
                QUERO GARANTIR MINHA VAGA
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#modulos"
                id="hero-cta-button-modulos"
                className="font-display font-medium text-slate-200 hover:text-pmpi-gold-400 text-center py-4 px-6 rounded-full border border-slate-800 hover:border-pmpi-gold-500 transition-all flex items-center justify-center gap-2 bg-slate-900 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-pmpi-gold-500" />
                Ver Grade Curricular
              </a>
            </div>

            {/* Countdown Urgency Timer */}
            <div className="bg-brand-card border border-brand-border shadow-md rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-100 uppercase tracking-wider">
                    Oferta Especial de Lançamento
                  </h4>
                  <p className="text-[11px] text-slate-400 font-sans">
                    O preço com 50% de desconto expira em:
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="bg-slate-900 text-pmpi-gold-500 font-mono font-bold text-lg px-2.5 py-1 rounded border border-slate-800">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-mono text-slate-450 mt-1 uppercase">horas</span>
                </div>
                <span className="text-slate-500 font-bold mb-5">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-slate-900 text-pmpi-gold-500 font-mono font-bold text-lg px-2.5 py-1 rounded border border-slate-800">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-mono text-slate-450 mt-1 uppercase">min</span>
                </div>
                <span className="text-slate-500 font-bold mb-5">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-slate-900 text-pmpi-gold-500 font-mono font-bold text-lg px-2.5 py-1 rounded border border-slate-800">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-mono text-slate-450 mt-1 uppercase">seg</span>
                </div>
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-800 text-slate-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-dark object-cover"
                    src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80&index=${i}`}
                    alt="Aluno Aprovado"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span className="text-slate-200 ml-1">4.9/5.0</span>
                </div>
                <p>Mais de <span className="text-slate-200 font-semibold">1.420 concurseiros</span> estudando conosco</p>
              </div>
            </div>

          </div>

          {/* Hero Right Visuals - Notebook + Phone Mockups with Interactive Demo Lesson */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Circle Glow */}
            <div className="absolute w-[350px] h-[350px] bg-pmpi-blue-800/25 rounded-full filter blur-[80px]"></div>

            {/* Dual Device Container */}
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[480px]">
              
              {/* Notebook Mockup */}
              <div className="absolute top-4 left-4 right-12 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden hidden sm:block">
                
                {/* Notebook Header Bar */}
                <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="bg-slate-900 px-3 py-1 rounded text-[10px] text-slate-400 font-mono w-44 truncate text-center">
                    plataforma.pmpi.bizurada
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Notebook Platform Screen */}
                <div className="bg-slate-950 p-4 aspect-[16/10] flex flex-col text-left">
                  
                  {/* Active Lesson Header */}
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-pmpi-gold-500" />
                      <span className="text-xs font-semibold text-slate-100 uppercase tracking-wider font-display">
                        Videoaula Interativa
                      </span>
                    </div>
                    <span className="text-[10px] font-mono bg-pmpi-blue-900/40 text-pmpi-blue-400 border border-pmpi-blue-800/50 px-2 py-0.5 rounded">
                      Módulo 03: Estatuto PMPI
                    </span>
                  </div>

                  {/* Video Player Box / Interactive Screen */}
                  <div className="relative flex-1 rounded bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-center items-center">
                    {!isPlayingDemo ? (
                      <div className="p-6 text-center flex flex-col items-center">
                        <button
                          onClick={() => setIsPlayingDemo(true)}
                          className="w-14 h-14 rounded-full bg-pmpi-gold-500 text-slate-950 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                          <Play className="w-6 h-6 fill-slate-950 ml-1" />
                        </button>
                        <p className="text-xs font-semibold text-white mt-3">
                          Testar Aula Demonstrativa
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 max-w-xs">
                          Clique e veja na prática o método bizurado com bizus e esquemas de aprovação.
                        </p>
                      </div>
                    ) : (
                      // Interactive Demo Slide Player
                      <div className="absolute inset-0 flex flex-col p-3 bg-slate-950 text-slate-200">
                        <div className="flex justify-between items-center mb-1 text-[10px] text-pmpi-gold-500 font-mono">
                          <span>AULA DEMO: {demoSlides[currentSlideIndex].title}</span>
                          <span className="bg-slate-800 px-1.5 py-0.5 rounded">
                            Slide {currentSlideIndex + 1}/3
                          </span>
                        </div>
                        
                        {/* Law text */}
                        <div className="flex-1 bg-slate-900 border border-slate-800 rounded p-2 text-[10px] leading-relaxed overflow-y-auto mb-1 font-sans">
                          <p className="text-slate-400 italic mb-1.5 font-mono text-[9px]">Texto da Lei Seca:</p>
                          <p className="text-slate-100">
                            {demoSlides[currentSlideIndex].lawText}
                          </p>
                        </div>

                        {/* Bizu Highlight */}
                        <div className="bg-pmpi-gold-500/10 border-l-2 border-pmpi-gold-500 p-1.5 rounded-r text-[9px] mb-2 leading-tight">
                          <p className="font-bold text-pmpi-gold-400 font-mono">⚡ BIZU PMPI:</p>
                          <p className="text-slate-200">{demoSlides[currentSlideIndex].bizu}</p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[10px]">
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <Volume2 className="w-3.5 h-3.5 text-pmpi-gold-500" />
                            <span>Explicação Ativa</span>
                          </div>
                          <div className="flex gap-1.5">
                            {currentSlideIndex > 0 && (
                              <button
                                onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)}
                                className="bg-slate-800 hover:bg-slate-700 text-white px-2 py-1 rounded text-[9px]"
                              >
                                Anterior
                              </button>
                            )}
                            {currentSlideIndex < demoSlides.length - 1 ? (
                              <button
                                onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)}
                                className="bg-pmpi-blue-800 hover:bg-pmpi-blue-700 text-white px-2 py-1 rounded text-[9px]"
                              >
                                Próximo Slide
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setIsPlayingDemo(false);
                                  setCurrentSlideIndex(0);
                                }}
                                className="bg-green-700 text-white px-2 py-1 rounded text-[9px]"
                              >
                                Concluir Aula 🎯
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Notebook footer status */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      100% Edital PMPI Cobrado
                    </span>
                    <span>Anexos: PDF + Questões</span>
                  </div>

                </div>
              </div>

              {/* Smartphone Mockup */}
              <div className="absolute right-2 bottom-2 w-36 sm:w-44 bg-slate-900 border border-slate-700 rounded-[24px] shadow-3xl overflow-hidden p-1.5 ring-4 ring-slate-950">
                <div className="bg-slate-950 rounded-[20px] aspect-[9/19] flex flex-col p-2 text-left relative overflow-hidden">
                  
                  {/* Speaker slot */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-slate-900 rounded-full flex justify-center items-center z-20">
                    <span className="w-4 h-0.5 bg-slate-700 rounded"></span>
                  </div>

                  <div className="flex-1 flex flex-col pt-3 text-slate-200">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-[8px] text-slate-500 px-1 mb-2">
                      <span>09:41</span>
                      <div className="flex items-center gap-0.5">
                        <span className="w-2.5 h-1.5 bg-slate-500 rounded-sm"></span>
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-sm"></span>
                      </div>
                    </div>

                    {/* App logo inside mobile */}
                    <div className="flex items-center gap-1 border-b border-slate-800 pb-1 mb-2">
                      <ShieldAlert className="w-3 h-3 text-pmpi-gold-500" />
                      <span className="text-[8px] font-bold font-display">PMPI Bizurada App</span>
                    </div>

                    {/* Progress Wheel Mockup */}
                    <div className="bg-slate-900 border border-slate-800 rounded p-1.5 text-center mb-2">
                      <span className="text-[7px] text-slate-400 block mb-0.5 uppercase tracking-wider">Meu Progresso</span>
                      <div className="inline-flex items-center justify-center relative w-12 h-12 mb-1">
                        {/* Circular track */}
                        <svg className="w-10 h-10 transform -rotate-90">
                          <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5" fill="none" />
                          <circle cx="20" cy="20" r="16" stroke="#D9A030" strokeWidth="3.5" strokeDasharray={`${2 * Math.PI * 16}`} strokeDashoffset={`${2 * Math.PI * 16 * 0.15}`} fill="none" />
                        </svg>
                        <span className="absolute text-[8px] font-mono font-bold text-white">85%</span>
                      </div>
                      <span className="text-[8px] font-semibold text-emerald-400 block leading-none">Aprovado no Simulado</span>
                    </div>

                    {/* Flashcards List */}
                    <div className="flex-1 flex flex-col gap-1 overflow-hidden">
                      <span className="text-[7px] text-slate-400 uppercase tracking-wider">Bizus Rápidos</span>
                      {[
                        { title: "LOB PMPI", badge: "Lei 7.725" },
                        { title: "Estatuto", badge: "Estadual 3.808" },
                        { title: "Código Ética", badge: "LC 28/2003" }
                      ].map((item, index) => (
                        <div key={index} className="bg-slate-900 border border-slate-800 rounded p-1 flex items-center justify-between text-[7px]">
                          <span className="font-semibold text-slate-200 truncate">{item.title}</span>
                          <span className="bg-pmpi-blue-950 text-pmpi-gold-500 border border-pmpi-gold-500/30 px-1 py-0.2 rounded font-mono scale-90">
                            {item.badge}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA button inside phone */}
                    <button
                      onClick={onCtaClick}
                      className="mt-2 w-full bg-pmpi-gold-500 hover:bg-pmpi-gold-600 text-slate-950 font-display font-bold text-[8px] py-1.5 rounded uppercase"
                    >
                      Liberar Acesso
                    </button>
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
