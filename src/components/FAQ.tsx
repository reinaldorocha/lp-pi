import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "Como recebo o acesso ao curso?",
      answer: "A liberação é imediata. Assim que o pagamento (via Pix ou Cartão de Crédito) for confirmado, nossa plataforma envia automaticamente um e-mail com suas credenciais de login e o link de acesso seguro à nossa área de membros."
    },
    {
      id: 2,
      question: "As aulas ficam gravadas? Posso assistir no meu tempo?",
      answer: "Sim, todas as videoaulas são gravadas e ficam inteiramente disponíveis na área de membros 24 horas por dia. Você estuda no seu próprio ritmo, podendo rever as aulas sempre que precisar."
    },
    {
      id: 3,
      question: "Consigo assistir às aulas pelo celular?",
      answer: "Com certeza. A área de membros é 100% responsiva e perfeitamente otimizada para smartphones, tablets e computadores. Você estuda onde estiver, sem dificuldades de navegação."
    },
    {
      id: 4,
      question: "O material está atualizado com as leis recentes?",
      answer: "Totalmente atualizado. O curso abrange a nova Lei de Organização Básica (LOB - Lei nº 7.725/2022), o Estatuto da PMPI, o Código de Ética (LC nº 28/2003) e as alterações mais recentes de 2026."
    },
    {
      id: 5,
      question: "Quanto tempo de acesso eu terei ao curso?",
      answer: "Você terá acesso integral por 12 meses (1 ano). Esse prazo é mais do que suficiente para você assistir a todas as aulas, revisar com os bizus e consolidar o conteúdo até o dia da prova."
    },
    {
      id: 6,
      question: "Como funciona o suporte para tirar dúvidas?",
      answer: "Você pode deixar suas dúvidas na área de membros, logo abaixo de cada videoaula. Nossa equipe pedagógica analisa e responde a cada comentário de forma rápida e direta."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden text-slate-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-bold text-pmpi-orange-500 tracking-widest uppercase bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-3.5 py-1.5 rounded-full">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-display font-black text-3xl text-white mt-4 tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-sm text-slate-300 mt-2">
            Ainda tem alguma dúvida? Encontre respostas rápidas sobre a estrutura e o funcionamento do curso.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-slate-950 border-slate-750 shadow-lg" 
                    : "bg-slate-950/40 border-slate-850 hover:border-slate-800 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  id={`faq-accordion-button-${index}`}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-pmpi-orange-500 shrink-0" />
                    <span className="font-display font-bold text-sm sm:text-base text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="ml-4 p-1 rounded-full bg-slate-900 text-slate-400 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-850 animate-fade-in">
                    <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Repeated CTA button */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("valores");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            id="faq-cta-button"
            className="font-display font-bold text-base text-white py-4 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-lg shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-[11px] text-slate-550 font-mono">
            ★ Comece a estudar imediatamente com acesso 100% online e seguro
          </span>
        </div>

      </div>
    </section>
  );
}
