import React from "react";
import { Sparkles, Award, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyCourse from "./components/WhyCourse";
import Syllabus from "./components/Syllabus";
import Simulator from "./components/Simulator";
import Differentiators from "./components/Differentiators";
import ForWhom from "./components/ForWhom";
import BeforeAfter from "./components/BeforeAfter";
import HowItWorks from "./components/HowItWorks";
import Bonuses from "./components/Bonuses";
import Instructor from "./components/Instructor";
import Testimonials from "./components/Testimonials";
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
    <div className="bg-brand-dark min-h-screen font-sans text-slate-300 antialiased selection:bg-pmpi-gold-500 selection:text-slate-950">
      
      {/* Sticky Header with Reading Progress Bar */}
      <Header onCtaClick={handleScrollToPricing} />

      {/* Hero Banner Section with urgeny countdown */}
      <Hero onCtaClick={handleScrollToPricing} />

      {/* Por Que Este Curso? Benefits Section */}
      <WhyCourse />

      {/* O Que Você Vai Aprender (Edital PMPI modules) */}
      <Syllabus />

      {/* Interactive Simulator Section (Live Pre-sales mini quiz) */}
      <Simulator />

      {/* Diferenciais Section */}
      <Differentiators />

      {/* Para Quem É Section */}
      <ForWhom />

      {/* Antes vs Depois Results comparison panel */}
      <BeforeAfter />

      {/* Como Funciona timeline workflow */}
      <HowItWorks />

      {/* Exclusives high-value Bonuses stack */}
      <Bonuses />

      {/* Sobre o Professor Bio & Stats section */}
      <Instructor />

      {/* Depoimentos reviews from Piauí candidates */}
      <Testimonials />

      {/* Checkout and Pricing Conditions + Guarantee badge & Simulation Modal */}
      <Pricing />

      {/* Interactive FAQ Accordion list */}
      <FAQ />

      {/* CTA FINAL (Sua preparação começa hoje) */}
      <section 
        id="cta-final"
        className="py-24 bg-[#040d1e] border-t border-slate-800 relative text-center overflow-hidden"
      >
        {/* Soft gold/blue circle flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-pmpi-blue-900/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-6">
            <Award className="w-6 h-6 text-pmpi-gold-500" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none mb-6">
            Sua Preparação Começa Hoje.
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Não deixe para estudar legislação apenas quando faltar poucos dias para a prova. Comece agora e domine um dos conteúdos mais importantes do concurso da PMPI com um método organizado, atualizado e focado no edital.
          </p>

          <button
            onClick={handleScrollToPricing}
            id="cta-final-button-comecar"
            className="font-display font-bold text-base text-slate-950 py-4.5 px-10 rounded-full bg-gradient-to-r from-pmpi-gold-400 via-pmpi-gold-500 to-pmpi-gold-600 hover:brightness-110 shadow-xl shadow-pmpi-gold-500/10 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-102"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-6 mt-8 text-[11px] text-slate-400 font-mono">
            <span>✓ Acesso Imediato</span>
            <span>•</span>
            <span>✓ 7 Dias de Garantia</span>
            <span>•</span>
            <span>✓ Plataforma Online</span>
          </div>

        </div>
      </section>

      {/* Footer copyright, independent disclaimer & quick links */}
      <Footer />

    </div>
  );
}
