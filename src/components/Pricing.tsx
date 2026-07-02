import React, { useState } from "react";
import { ShieldCheck, Lock, Sparkles, CreditCard, QrCode, FileText, Check, ArrowRight, X, User, Mail, Award } from "lucide-react";

export default function Pricing() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | "boleto">("pix");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState<"form" | "result">("form");

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail) return;
    
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationStep("result");
    }, 1500);
  };

  const resetCheckout = () => {
    setLeadName("");
    setLeadEmail("");
    setPaymentMethod("pix");
    setSimulationStep("form");
    setIsCheckoutOpen(false);
  };

  return (
    <section 
      id="valores"
      className="py-24 bg-brand-dark border-t border-slate-900 relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pmpi-gold-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-gold-400 tracking-widest uppercase bg-pmpi-gold-500/10 border border-pmpi-gold-500/25 px-3 py-1 rounded-full">
            CONDIÇÃO ESPECIAL DE LANÇAMENTO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Invista no Seu Futuro como Policial Militar
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Tenha acesso imediato a todo o método esquematizado de legislação com valor exclusivo. Menos do que o preço de uma pizza por mês.
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Reassurance Features - Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              Tudo o que você vai receber ao se matricular:
            </h3>

            <div className="space-y-4">
              {[
                { title: "Curso de Legislação PMPI Completo", desc: "Módulo a módulo focado 100% no edital." },
                { title: "Mais de 150 Questões Gabaritadas", desc: "No padrão exato das bancas organizadoras." },
                { title: "Lei Seca Traduzida e Comentada", desc: "Explicação artigo por artigo sem termos complexos." },
                { title: "Kit Completo de Mapas Mentais", desc: "Todos os fluxogramas de decisões e prazos." },
                { title: "Acesso Vitalício durante este ciclo", desc: "Estude no seu ritmo até o dia oficial da prova." },
                { title: "Garantia Integral de Atualização", desc: "Novas leis ou decretos sem custo extra." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-pmpi-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-100">{item.title}</h4>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Box - Right Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-brand-card border-2 border-pmpi-gold-500/80 p-6 sm:p-8 shadow-2xl overflow-hidden">
              {/* Flare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pmpi-gold-500/5 rounded-full filter blur-xl"></div>
              
              {/* Tag overlay */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pmpi-gold-400 to-pmpi-gold-600 text-slate-950 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase">
                50% OFF HOJE
              </div>

              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1 font-semibold">PLANO DE ACESSO TOTAL</span>
              <h3 className="font-display font-extrabold text-2xl text-white mb-6">Curso Legislação PMPI Bizurada</h3>

              {/* Price Stack */}
              <div className="mb-6">
                <span className="text-slate-450 text-xs sm:text-sm line-through block">De R$ 197,00 por apenas:</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-mono text-sm text-slate-350">12x de</span>
                  <span className="font-display font-black text-3xl sm:text-4xl text-pmpi-gold-400">R$ 9,74</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono block mt-2">ou apenas <strong className="text-pmpi-gold-400">R$ 97,00</strong> à vista no Pix</span>
              </div>

              {/* Interactive CTA */}
              <button
                onClick={openCheckout}
                id="pricing-cta-button-garantir"
                className="w-full font-display font-bold text-slate-950 py-4 rounded-full bg-gradient-to-r from-pmpi-gold-400 via-pmpi-gold-500 to-pmpi-gold-600 hover:brightness-110 shadow-lg shadow-pmpi-gold-500/10 active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                QUERO GARANTIR MINHA VAGA AGORA
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secure Checkout Trust Seals */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-850 text-[10px] text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-pmpi-gold-500 shrink-0" />
                  <span>Pagamento 100% Criptografado</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-pmpi-gold-500 shrink-0" />
                  <span>Acesso Imediato Liberado</span>
                </div>
              </div>

              {/* Reference Platforms Badge */}
              <div className="mt-4 pt-4 border-t border-slate-850 text-center text-[9px] text-slate-500 uppercase font-mono tracking-wider">
                COMPATÍVEL COM KIWIFY • HOTMART • KIRVANO • PERFECTPAY
              </div>

            </div>
          </div>

        </div>

        {/* Guarantee Badge Sub-Section */}
        <div id="garantia" className="mt-20 bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-900 border-2 border-pmpi-gold-500/50 flex items-center justify-center relative overflow-hidden">
              <span className="font-display font-black text-3xl sm:text-4xl text-pmpi-gold-400">7</span>
              <span className="text-[10px] font-mono font-bold text-slate-400 absolute bottom-3">DIAS</span>
            </div>
            {/* Soft pulse glow */}
            <div className="absolute inset-0 bg-pmpi-gold-500/5 rounded-full filter blur-md"></div>
          </div>

          <div>
            <h3 className="font-display font-black text-lg sm:text-xl text-white mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-pmpi-gold-500" />
              Garantia de Satisfação Incondicional de 7 Dias
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              O risco é todo nosso. Matricule-se hoje, assista às primeiras videoaulas, baixe os PDFs e resolva as questões simuladas. Se por qualquer motivo você achar que o método de legislação não serve para você, basta solicitar o reembolso em até 7 dias que devolvemos 100% do seu dinheiro. Sem pegadinhas, sem burocracia e com respeito integral ao Código de Defesa do Consumidor.
            </p>
          </div>
        </div>

      </div>

      {/* Interactive Simulated Checkout Drawer/Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div className="bg-brand-card border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-3xl relative overflow-hidden animate-fade-in text-left">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-slate-850 pb-4 mb-6">
              <div>
                <span className="text-[9px] font-mono font-bold text-pmpi-gold-400 uppercase tracking-widest block">
                  AMBIENTE DE INSCRIÇÃO TESTE
                </span>
                <h4 className="font-display font-black text-base text-white">
                  Simulação de Inscrição Segura
                </h4>
              </div>
              <button
                onClick={resetCheckout}
                className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {simulationStep === "form" ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                
                {/* Notice */}
                <div className="bg-pmpi-gold-500/10 border border-pmpi-gold-500/20 rounded-lg p-3 text-[11px] text-slate-300 leading-relaxed">
                  💡 <strong>Simulação ativa:</strong> Insira seus dados fictícios para testar a experiência imediata de entrega de credenciais pós-pagamento.
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="lead-name" className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                    Seu Nome Completo:
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="lead-name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva Santos"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-slate-900/60 border border-slate-800 focus:border-pmpi-gold-500 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="lead-email" className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                    Seu Melhor E-mail:
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="lead-email"
                      type="email"
                      required
                      placeholder="Ex: joao.santos@gmail.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-slate-900/60 border border-slate-800 focus:border-pmpi-gold-500 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Payment Options */}
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-2">
                    Opção de Pagamento Simulada:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "pix", label: "Pix", icon: QrCode },
                      { id: "card", label: "Cartão", icon: CreditCard },
                      { id: "boleto", label: "Boleto", icon: FileText }
                    ].map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = paymentMethod === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setPaymentMethod(opt.id as any)}
                          className={`p-3 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1.5 ${
                            isSelected
                              ? "border-pmpi-gold-500 bg-pmpi-gold-500/10 text-pmpi-gold-400 font-bold"
                              : "border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="font-display font-bold text-xs">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-850 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-slate-400 font-mono text-[10px]">
                    <Lock className="w-3.5 h-3.5 text-pmpi-gold-500" />
                    <span>Dados encriptados</span>
                  </div>
                  <button
                    type="submit"
                    id="simulated-checkout-submit"
                    disabled={isSimulating}
                    className="font-display font-bold text-slate-950 bg-gradient-to-r from-pmpi-gold-400 via-pmpi-gold-500 to-pmpi-gold-600 hover:brightness-110 py-3 px-6 rounded-full flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSimulating ? "Processando..." : "Confirmar Inscrição"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            ) : (
              // Results Screen
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-emerald-400" />
                </div>

                <h4 className="font-display font-black text-lg text-white mb-2">
                  Matrícula Simulada com Sucesso!
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6">
                  Parabéns, <strong className="text-pmpi-gold-400">{leadName}</strong>! Seus dados de acesso foram simulados e enviados para <strong className="text-white">{leadEmail}</strong>.
                </p>

                {/* Mock Account Login Info */}
                <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-left font-mono text-[11px] space-y-2 mb-6 max-w-md mx-auto">
                  <p className="text-pmpi-gold-400 border-b border-slate-800 pb-1.5 font-bold text-[9px] uppercase tracking-wider">
                    MOCK CREDENTIALS DISPONÍVEIS:
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-550 mr-1.5">Portal de Alunos:</span> plataforma.pmpi.bizurada
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-550 mr-1.5">E-mail:</span> {leadEmail}
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-550 mr-1.5">Chave Temporária:</span> BIZU-PMPI-7719A
                  </p>
                </div>

                <button
                  onClick={resetCheckout}
                  className="font-sans font-semibold text-xs text-slate-300 hover:text-white py-2.5 px-6 rounded-full border border-slate-800 hover:border-slate-700 transition-all bg-transparent cursor-pointer"
                >
                  Voltar à Landing Page
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
