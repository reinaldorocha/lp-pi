import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phoneNumber = "5586988812196";
  const message = "Olá Professor Jonathan, tenho uma dúvida sobre o Curso de Legislação da PMPI!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Prompt bubble */}
      <div className="hidden md:flex bg-slate-900 border border-slate-800 text-slate-100 text-xs font-medium px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md items-center gap-2 animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Dúvidas? Fale comigo!</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/20 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Glow pulsing ring around the button */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping scale-110 opacity-75"></span>
        
        {/* SVG WhatsApp icon style using MessageCircle with custom padding */}
        <MessageCircle className="w-7 h-7 fill-white/10 relative z-10 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
}
