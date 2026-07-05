import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Central Logo */}
        <div className="mb-8 select-none">
          <img 
            src="https://profjonathanrocha.com.br/wp-content/uploads/2025/03/LOGO-PNG-JHONATAN.png"
            alt="Prof. Jonathan Rocha Logo"
            className="h-20 sm:h-24 w-auto object-contain brightness-100 hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Back to top button */}
        <div className="mb-10">
          <button
            onClick={scrollToTop}
            className="p-2.5 px-4 rounded-full bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white transition-all border border-slate-800 flex items-center gap-2 text-xs font-mono cursor-pointer mx-auto"
            aria-label="Back to top"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-slate-900 mb-8"></div>

        {/* Centralized Copyright */}
        <div className="text-center text-xs sm:text-sm text-slate-400 font-sans tracking-wide">
          <p>© 2026 Prof° Jonathan Rocha - Todos os Direitos reservados</p>
        </div>

      </div>
    </footer>
  );
}
