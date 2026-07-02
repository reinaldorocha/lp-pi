import React, { useState, useEffect } from "react";
import { ShieldCheck, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check if scrolled
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Módulos", href: "#modulos" },
    { label: "Simulador", href: "#simulador" },
    { label: "Bônus", href: "#bonus" },
    { label: "Garantia", href: "#garantia" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-pmpi-blue-600 via-pmpi-gold-500 to-pmpi-gold-600 z-[100] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        id="reading-progress-bar"
      />

      <header
        id="main-header"
        className={`fixed top-[4px] left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-900 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <ShieldCheck className="w-8 h-8 text-pmpi-gold-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-pmpi-gold-500/10 rounded-full filter blur-md animate-ripple"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-wider text-white leading-none">
                  PMPI <span className="text-pmpi-gold-500">BIZURADA</span>
                </span>
                <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">
                  Legislação Institucional
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-sm font-medium text-slate-300 hover:text-pmpi-gold-400 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-pmpi-gold-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onCtaClick}
                id="header-cta-button-desktop"
                className="font-display font-bold text-sm text-slate-950 px-5 py-2.5 rounded-full bg-gradient-to-r from-pmpi-gold-400 to-pmpi-gold-600 hover:brightness-110 shadow-lg shadow-pmpi-gold-500/10 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                Garantir Minha Vaga
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-pmpi-gold-400 hover:bg-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-nav-drawer"
            className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-slate-900 shadow-2xl py-6 px-4 animate-fade-in"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans font-medium text-slate-300 hover:text-pmpi-gold-400 hover:bg-slate-900 py-2.5 px-4 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-slate-900 my-2 pt-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onCtaClick();
                  }}
                  id="header-cta-button-mobile"
                  className="w-full font-display font-bold text-slate-950 text-center py-3 rounded-full bg-gradient-to-r from-pmpi-gold-400 to-pmpi-gold-600 shadow-md shadow-pmpi-gold-500/10 flex items-center justify-center gap-2"
                >
                  QUERO COMEÇAR AGORA
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
