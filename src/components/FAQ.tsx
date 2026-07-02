import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Como recebo o acesso ao curso?",
      answer: "A liberação é imediata. Assim que o pagamento (seja via Pix ou Cartão de Crédito) for aprovado, nossa plataforma envia automaticamente um e-mail com suas credenciais de login e link de acesso. Se pagar por Boleto, a compensação pode levar até 48 horas úteis."
    },
    {
      id: 2,
      question: "O curso oferece certificado de conclusão?",
      answer: "Sim! Ao concluir a visualização das videoaulas e marcar os checklists dos módulos, a plataforma emite automaticamente um certificado digital de 40 horas letivas, comprovando sua capacitação na Legislação Institucional da PMPI."
    },
    {
      id: 3,
      question: "Posso assistir às videoaulas pelo celular?",
      answer: "Com certeza. Nossa plataforma é totalmente responsiva e otimizada para dispositivos móveis. Você pode assistir às videoaulas, fazer o download dos resumos em PDF e mapas mentais, além de resolver questões diretamente pelo seu celular ou tablet."
    },
    {
      id: 4,
      question: "As aulas ficam gravadas? Posso assistir quantas vezes quiser?",
      answer: "Sim, todas as aulas são gravadas e ficam disponíveis 24 horas por dia. Você possui total flexibilidade para assistir no seu ritmo, repetir os vídeos que tiver mais dificuldades e pausar quando desejar fazer anotações."
    },
    {
      id: 5,
      question: "O material está atualizado com as leis recentes?",
      answer: "Totalmente. Nosso material contempla a nova Lei de Organização Básica (Lei nº 7.725/2022), o Sistema de Proteção Social (Lei nº 7.772/2022), as alterações recentes de 2024 (Lei nº 8.430) e os novos regulamentos aprovados por decretos em 2024."
    },
    {
      id: 6,
      question: "Quanto tempo de acesso eu terei ao curso?",
      answer: "Você terá acesso garantido por 1 ano completo (12 meses). Isso garante que você poderá estudar tranquilamente durante toda a preparação do concurso atual e revisar caso ocorra qualquer imprevisto com o cronograma de provas."
    },
    {
      id: 7,
      question: "Como funciona o suporte para tirar dúvidas?",
      answer: "Embaixo de cada videoaula há uma seção exclusiva para comentários. Além disso, os alunos têm suporte técnico e pedagógico direto via e-mail e acesso à nossa comunidade exclusiva de alunos no Telegram/WhatsApp para discussões construtivas."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-pmpi-gold-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-display font-black text-3xl text-white mt-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-sm text-slate-300 mt-2">
            Caso ainda tenha alguma dúvida sobre o curso de legislação institucional da PMPI, confira as respostas abaixo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-pmpi-gold-500/10 border-pmpi-gold-500/30 shadow-md" 
                    : "bg-brand-card border-brand-border hover:border-slate-850 hover:bg-slate-900/40"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  id={`faq-accordion-button-${index}`}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-pmpi-gold-400 shrink-0" />
                    <span className="font-display font-bold text-sm sm:text-base text-slate-100">
                      {faq.question}
                    </span>
                  </div>
                  <div>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-pmpi-gold-500 shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-550 shrink-0" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-850">
                    <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
