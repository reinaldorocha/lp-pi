import React from "react";
import { Award, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyCourse from "./components/WhyCourse";
import Syllabus from "./components/Syllabus";
import Differentiators from "./components/Differentiators";
import ForWhom from "./components/ForWhom";
import Testimonials from "./components/Testimonials";
import Guarantee from "./components/Guarantee";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToPricing = () => {
    const element = document.getElementById("valores");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-100 antialiased selection:bg-pmpi-orange-500 selection:text-white">
      
      {/* Navigation Header */}
      <Header onCtaClick={handleScrollToPricing} />

      {/* #1 HERO (Above the fold) */}
      <Hero onCtaClick={handleScrollToPricing} />

      {/* #2 BENEFÍCIOS */}
      <WhyCourse />

      {/* #3 PARA QUEM É */}
      <ForWhom />

      {/* #4 O QUE VAI APRENDER (Accordion modules) */}
      <Syllabus />

      {/* #5 POR QUE É DIFERENTE (Comparative table) */}
      <Differentiators />

      {/* #6 DEPOIMENTOS (Concurseiros reviews) */}
      <Testimonials />

      {/* #7 GARANTIA (7 days ironclad guarantee) */}
      <Guarantee />

      {/* #8 OFERTA (Price anchoring and bonuses) */}
      <Pricing />

      {/* #9 FAQ (Accordions) */}
      <FAQ />

      {/* #10 CTA FINAL */}
      <section 
        id="cta-final"
        className="py-24 bg-slate-950 border-t border-slate-900 relative text-center overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Award className="w-6 h-6 text-pmpi-orange-500" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
            Sua vaga de policial militar começa a ser conquistada hoje.
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Não deixe para estudar legislação institucional apenas quando faltar poucos dias para a prova. Comece agora mesmo com um método dinâmico, atualizado e focado 100% no que as bancas realmente cobram.
          </p>

          <button
            onClick={handleScrollToPricing}
            id="cta-final-button-comecar"
            className="font-display font-bold text-base text-white py-4.5 px-10 rounded-full bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-xl shadow-pmpi-orange-500/20 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-6 mt-8 text-[11px] text-slate-400 font-mono">
            <span>✓ Liberação Imediata</span>
            <span>•</span>
            <span>✓ 7 Dias de Garantia Integral</span>
            <span>•</span>
            <span>✓ Acesso 100% Online</span>
          </div>

        </div>
      </section>

      {/* Footer copyright and disclaimer */}
      <Footer />

    </div>
  );
}
