import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyCourse from "./components/WhyCourse";
import Syllabus from "./components/Syllabus";
import AboutMe from "./components/AboutMe";
import ForWhom from "./components/ForWhom";
import Testimonials from "./components/Testimonials";
import Guarantee from "./components/Guarantee";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

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

      {/* #5 QUEM SOU EU (Instructor credentials) */}
      <AboutMe />

      {/* #6 DEPOIMENTOS (Concurseiros reviews) */}
      <Testimonials />

      {/* #7 GARANTIA (7 days ironclad guarantee) */}
      <Guarantee />

      {/* #8 OFERTA (Price anchoring and bonuses) */}
      <Pricing />

      {/* #9 FAQ (Accordions) */}
      <FAQ />

      {/* Footer copyright and disclaimer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
