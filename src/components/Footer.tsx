import React from "react";
import { ShieldCheck, ArrowUp, Star } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-slate-400">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-12">
          
          {/* Brand - Left */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-pmpi-orange-500 animate-pulse" />
              <span className="font-display font-black text-lg text-white">
                PMPI <span className="text-white bg-pmpi-orange-500 px-2 py-0.5 rounded ml-1 font-black">BIZURADA</span>
              </span>
            </div>
            
            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
              Preparação tática, organizada e de alta performance de legislação institucional para concurseiros da Polícia Militar do Estado do Piauí (PMPI).
            </p>

            <div className="flex items-center gap-1.5 text-pmpi-orange-500 text-xs">
              <Star className="w-3.5 h-3.5 fill-pmpi-orange-500" />
              <span className="text-slate-300 font-semibold">Avaliação 4.9 baseada em aprovações de concurseiros</span>
            </div>
          </div>

          {/* Quick links - Middle */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono">
            <div>
              <h5 className="text-white uppercase tracking-widest font-extrabold mb-4 font-display">Mapeamento</h5>
              <ul className="space-y-2.5">
                <li><a href="#beneficios" className="text-slate-400 hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#para-quem" className="text-slate-400 hover:text-white transition-colors">Para Quem É</a></li>
                <li><a href="#modulos" className="text-slate-400 hover:text-white transition-colors">Módulos</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white uppercase tracking-widest font-extrabold mb-4 font-display">Garantias</h5>
              <ul className="space-y-2.5">
                <li><a href="#garantia" className="text-slate-400 hover:text-white transition-colors">Garantia 7 Dias</a></li>
                <li><a href="#valores" className="text-slate-400 hover:text-white transition-colors">Matrícula</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">Dúvidas (FAQ)</a></li>
              </ul>
            </div>
          </div>

          {/* Actions - Right */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white transition-all border border-slate-800 flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              aria-label="Back to top"
            >
              Voltar ao Topo
              <ArrowUp className="w-4 h-4" />
            </button>
            <span className="text-[10px] text-slate-500 font-mono mt-6 md:mt-0">
              Versão 3.4.0 • 2026/2027
            </span>
          </div>

        </div>

        {/* Legal Notices and Disclaimer */}
        <div className="text-center md:text-left space-y-4 text-[10px] sm:text-xs text-slate-500 leading-relaxed">
          <p className="font-sans">
            © {new Date().getFullYear()} PMPI BIZURADA. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
