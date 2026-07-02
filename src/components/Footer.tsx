import React from "react";
import { ShieldCheck, ArrowUp, Star } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#010610] border-t border-slate-900 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-12">
          
          {/* Brand - Left */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-pmpi-gold-500" />
              <span className="font-display font-black text-lg text-white">
                PMPI <span className="text-slate-950 bg-pmpi-gold-500 px-2 py-0.5 rounded ml-1 font-black">BIZURADA</span>
              </span>
            </div>
            
            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
              Preparação tática, organizada e de alta performance de legislação institucional para concurseiros da Polícia Militar do Estado do Piauí (PMPI).
            </p>

            <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
              <Star className="w-3.5 h-3.5 fill-emerald-400" />
              <span className="text-slate-300 font-medium">Nota 4.9 baseada em avaliações de aprovados</span>
            </div>
          </div>

          {/* Quick links - Middle */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono">
            <div>
              <h5 className="text-white uppercase tracking-widest font-extrabold mb-4">Mapeamento</h5>
              <ul className="space-y-2.5">
                <li><a href="#beneficios" className="text-slate-400 hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#modulos" className="text-slate-400 hover:text-white transition-colors">Módulos</a></li>
                <li><a href="#simulador" className="text-slate-400 hover:text-white transition-colors">Simulador</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white uppercase tracking-widest font-extrabold mb-4">Garantias</h5>
              <ul className="space-y-2.5">
                <li><a href="#bonus" className="text-slate-400 hover:text-white transition-colors">Bônus</a></li>
                <li><a href="#garantia" className="text-slate-400 hover:text-white transition-colors">Reembolso</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">Suporte</a></li>
                <li><a href="#valores" className="text-slate-400 hover:text-white transition-colors">Inscrição</a></li>
              </ul>
            </div>
          </div>

          {/* Actions - Right */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white transition-all border border-slate-700 flex items-center gap-1.5 text-xs font-mono cursor-pointer"
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
        <div className="text-center md:text-left space-y-4 text-[10px] sm:text-xs text-slate-400 leading-relaxed">
          <p className="font-sans">
            © {new Date().getFullYear()} PMPI BIZURADA. Todos os direitos reservados.
          </p>
          <p className="font-sans italic border-l-2 border-slate-700 pl-3">
            <strong>AVISO LEGAL:</strong> O 'PMPI Bizurada' é uma iniciativa de treinamento preparatório autônoma organizada por Silva Júnior Mentoria e Produções de Materiais Digitais. Não possuímos vínculo formal, parceria, convênio ou filiação direta com a Polícia Militar do Estado do Piauí (PMPI), Governadoria do Estado do Piauí, Secretaria de Segurança Pública do Piauí (SSP-PI), ou bancas organizadoras oficiais dos certames. A aprovação depende única e exclusivamente do esforço pessoal, constância e disciplina do candidato, sendo as informações, simulados e bônus disponibilizados para finalidade estritamente pedagógica de estudo preventivo.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start font-mono text-[10px] text-slate-500">
            <a href="#faq" className="hover:underline">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#faq" className="hover:underline">Termos de Uso</a>
            <span>•</span>
            <a href="#valores" className="hover:underline">Suporte de Pagamentos</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
