import React, { useState } from "react";
import { Calendar, Clock, TrendingUp, Sparkles, BookOpen, Award, CheckCircle, Zap } from "lucide-react";

type LevelType = "iniciante" | "intermediario" | "avancado";
type HoursType = "1" | "2" | "3+";

export default function StudyPlanner() {
  const [level, setLevel] = useState<LevelType>("iniciante");
  const [hours, setHours] = useState<HoursType>("2");

  // Dynamic calculations based on user inputs
  const getPlanningData = (lvl: LevelType, hrs: HoursType) => {
    let weeksRequired = 4;
    let focusTip = "";
    let roadmap: { day: string; task: string }[] = [];

    if (hrs === "1") {
      weeksRequired = lvl === "iniciante" ? 5 : lvl === "intermediario" ? 4 : 3;
      focusTip = "🚨 Atenção: Com 1 hora diária, você precisa focar em resumos e mapas prontos. Nossas videoaulas curtas e esquemas de 10 minutos são perfeitos para seu perfil de estudo rápido.";
    } else if (hrs === "2") {
      weeksRequired = lvl === "iniciante" ? 4 : lvl === "intermediario" ? 3 : 2;
      focusTip = "⚡ Ideal: 2 horas por dia permitem assistir às videoaulas, ler a lei seca esquematizada correspondente e resolver de 10 a 15 questões diárias.";
    } else {
      weeksRequired = lvl === "iniciante" ? 3 : lvl === "intermediario" ? 2 : 1.5;
      focusTip = "🚀 Estudo de Elite: Você consegue cobrir a teoria rapidamente e fazer múltiplos simulados acumulativos. Foque na memorização de prazos e transgressões do Código de Ética!";
    }

    // Dynamic Roadmap Builder
    if (lvl === "iniciante") {
      roadmap = [
        { day: "Segunda", task: "Módulo 01 (Const. Estadual) + Vídeo + PDF de 5 páginas" },
        { day: "Terça", task: "Módulo 02 (Organização Básica) + Exercícios de fixação" },
        { day: "Quarta", task: "Módulo 03 (Estatuto) - Parte 01: Hierarquia e Ingresso" },
        { day: "Quinta", task: "Módulo 03 (Estatuto) - Parte 02: Direitos e Deveres" },
        { day: "Sexta", task: "Módulo 04 (Código de Ética LC 28) - Transgressões" },
        { day: "Sábado", task: "Revisão geral de todos os resumos e 20 questões acumuladas" }
      ];
    } else if (lvl === "intermediario") {
      roadmap = [
        { day: "Segunda", task: "Módulos 01 e 02 (Const. Estadual e Org. Básica) - Revisão e 15 questões" },
        { day: "Terça", task: "Módulo 03 (Estatuto) - Leitura direta dos bizus de prova" },
        { day: "Quarta", task: "Módulo 04 (Código de Ética LC 28) - Processo Disciplinar e Recursos" },
        { day: "Quinta", task: "Módulos 05 e 06 (Leis de Promoções Praças e Oficiais) + Fluxogramas" },
        { day: "Sexta", task: "Módulos 07 e 08 (Leis de 2022) - Atualizações mais quentes" },
        { day: "Sábado", task: "Simulado Módulo a Módulo de Legislação PMPI (30 questões)" }
      ];
    } else {
      roadmap = [
        { day: "Segunda", task: "Estudo ultraveloz do Estatuto (Módulo 03) apenas pelos mapas mentais" },
        { day: "Terça", task: "Simulado direcionado de Código de Ética (Módulo 04) - 25 questões comentadas" },
        { day: "Quarta", task: "Módulos 05, 06, 07 e 08 focando apenas nas novidades legislativas" },
        { day: "Quinta", task: "Novas Leis 2024 e Decretos (Módulos 09 e 10) - Onde a concorrência vai errar" },
        { day: "Sexta", task: "Simulado Geral PMPI de Legislação com foco em prazos e competências" },
        { day: "Sábado", task: "Revisão final de todos os Bizus e checklists rápidos de véspera" }
      ];
    }

    return { weeksRequired, focusTip, roadmap };
  };

  const { weeksRequired, focusTip, roadmap } = getPlanningData(level, hours);

  return (
    <section 
      id="cronograma"
      className="py-24 bg-white border-t border-slate-200 relative"
    >
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-pmpi-blue-900/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-blue-900 tracking-widest uppercase bg-blue-50 border border-blue-100/80 px-3 py-1 rounded-full">
            PLANEJAMENTO ESTRATÉGICO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0B3B82] mt-4 tracking-tight">
            Seu Cronograma de Legislação sob Medida
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Selecione seu perfil abaixo e veja em quanto tempo você consegue esgotar 100% da Legislação da PMPI utilizando nossa metodologia direta e otimizada.
          </p>
        </div>

        {/* Planner Generator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls - Left */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div>
              {/* Option 1: Level Selector */}
              <div className="mb-8">
                <span className="text-[10px] text-pmpi-blue-900 font-mono font-bold uppercase tracking-wider block mb-3">
                  1. Qual o seu nível atual de estudos?
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "iniciante", label: "Iniciante", desc: "Começando do zero" },
                    { value: "intermediario", label: "Intermediário", desc: "Já leio resumos" },
                    { value: "avancado", label: "Avançado", desc: "Buscando gabaritar" }
                  ].map((lvl) => (
                    <button
                      key={lvl.value}
                      onClick={() => setLevel(lvl.value as LevelType)}
                      id={`level-select-button-${lvl.value}`}
                      className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                        level === lvl.value
                          ? "border-pmpi-blue-900 bg-blue-50 text-pmpi-blue-900 font-bold"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                      }`}
                    >
                      <span className="font-display font-bold text-xs sm:text-sm block">{lvl.label}</span>
                      <span className="text-[8px] text-slate-400 mt-1 block leading-tight">{lvl.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Time Availability Selector */}
              <div className="mb-8">
                <span className="text-[10px] text-pmpi-blue-900 font-mono font-bold uppercase tracking-wider block mb-3">
                  2. Quantas horas diárias você tem para estudar?
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "1", label: "1 Hora", desc: "Rotina corrida" },
                    { value: "2", label: "2 Horas", desc: "Ideal equilibrado" },
                    { value: "3+", label: "3+ Horas", desc: "Foco total" }
                  ].map((hrs) => (
                    <button
                      key={hrs.value}
                      onClick={() => setHours(hrs.value as HoursType)}
                      id={`hours-select-button-${hrs.value}`}
                      className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                        hours === hrs.value
                          ? "border-pmpi-blue-900 bg-blue-50 text-pmpi-blue-900 font-bold"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                      }`}
                    >
                      <span className="font-display font-bold text-xs sm:text-sm block">{hrs.label}</span>
                      <span className="text-[8px] text-slate-400 mt-1 block leading-tight">{hrs.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Stats Banner */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-pmpi-blue-900 shrink-0" />
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">Metologia Bizurada</span>
                  <span className="font-display font-bold text-sm text-[#0B3B82]">Velocidade Acelerada</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-lg sm:text-xl text-pmpi-blue-900 block leading-none">
                  {weeksRequired} Semanas
                </span>
                <span className="text-[8px] text-slate-500 uppercase font-mono mt-1 block">Para esgotar o edital</span>
              </div>
            </div>
          </div>

          {/* Roadmap Showcase - Right */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-4 mb-6">
              <div>
                <span className="text-[9px] font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                  CRONOGRAMA RECOMENDADO
                </span>
                <h4 className="font-display font-black text-base text-[#0B3B82]">
                  Roteiro de Estudo Semanal • Ciclo de Revisão Ativa
                </h4>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded px-2.5 py-0.5 text-[10px] text-emerald-700 font-bold font-mono">
                EFICIÊNCIA MÁXIMA
              </div>
            </div>

            {/* Focus Advice Quote */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r text-xs text-slate-700 leading-relaxed mb-6 font-sans">
              {focusTip}
            </div>

            {/* Weekly Daily Checklist */}
            <div className="space-y-3 flex-1">
              {roadmap.map((dayItem, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-slate-250 rounded-xl p-3 sm:px-4 sm:py-3.5 flex items-center gap-4 transition-all hover:border-slate-300 hover:bg-slate-100/10"
                >
                  <div className="w-16 sm:w-20 font-mono text-[10px] sm:text-xs font-bold text-slate-500 uppercase shrink-0">
                    {dayItem.day}
                  </div>
                  <div className="w-px h-6 bg-slate-200 shrink-0"></div>
                  <div className="flex items-center gap-2 flex-1 text-xs sm:text-sm text-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1 font-medium">{dayItem.task}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA action in scheduler */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-slate-500 font-mono text-center sm:text-left">
                * Cronograma sugerido gerado com base em <strong>{weeksRequired} semanas</strong> de acesso.
              </span>
              <a 
                href="#valores"
                className="font-display font-bold text-white bg-gradient-to-r from-pmpi-blue-900 to-pmpi-blue-800 hover:brightness-110 px-5 py-2.5 rounded-full flex items-center gap-1 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-pmpi-blue-900/10"
              >
                Garantir Minha Vaga com Desconto
                <Zap className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
