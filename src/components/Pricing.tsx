import React, { useState } from "react";
import { ShieldCheck, Lock, CreditCard, QrCode, FileText, Check, ArrowRight, X, User, Mail, Sparkles, ClipboardCheck, CalendarClock, Map, MessageCircle } from "lucide-react";

export default function Pricing() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | "boleto">("pix");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState<"form" | "result">("form");

  const openCheckout = () => {
    window.location.href = "https://app.profjonathanrocha.com.br/c/ymnafed";
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

  const bonuses = [
    {
      title: "Apostila de 1.000 Questões Comentadas",
      value: "R$ 67,00",
      desc: "Apostila de questões comentadas com todo o conteúdo programático no padrão da banca FCC.",
      icon: ClipboardCheck,
    },
    {
      title: "Todas as Leis Organizadas",
      value: "R$ 47,00",
      desc: "Todas as leis previstas no edital em arquivos PDF organizados prontos para o seu estudo.",
      icon: FileText,
    },
    {
      title: "Revisão de Reta Final",
      value: "R$ 97,00",
      desc: "Revisão ao vivo na semana da prova, destacando os pontos mais importantes e prováveis de cobrança.",
      icon: CalendarClock,
    },
    {
      title: "Suporte Direto no WhatsApp",
      value: "R$ 49,00",
      desc: "Acesso direto ao WhatsApp do professor para tirar dúvidas sobre toda a disciplina.",
      icon: Sparkles,
    }
  ];

  return (
    <section 
      id="valores"
      className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-pmpi-orange-500 tracking-widest uppercase bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-3.5 py-1.5 rounded-full">
            CONDIÇÃO ESPECIAL DE HOJE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
            Invista na sua aprovação com preço promocional
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-350 mt-4 leading-relaxed">
            Tenha acesso imediato a todo o método esquematizado de legislação militar da PMPI. Uma oferta exclusiva por tempo limitado.
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Bonuses Block (Left Column) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pmpi-orange-500" />
                Super Bônus Inclusos de Graça:
              </h3>

              <div className="space-y-4">
                {bonuses.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center shrink-0 text-pmpi-orange-500">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                          <span className="text-[10px] font-mono text-rose-400 line-through font-medium">{item.value}</span>
                          <span className="bg-emerald-950/60 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-900/40">GRÁTIS</span>
                        </div>
                        <p className="font-sans text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total value display */}
            <div className="mt-6 p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Soma de todos os bônus inclusos:</span>
              <div className="text-right">
                <span className="text-rose-400 line-through mr-1.5 font-bold">R$ 260,00</span>
                <span className="text-emerald-400 font-black">R$ 0,00</span>
              </div>
            </div>
          </div>

          {/* Pricing Box (Right Column) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-slate-900 border-2 border-pmpi-orange-500 p-6 sm:p-8 shadow-xl shadow-pmpi-orange-500/10 overflow-hidden flex flex-col justify-between h-full">
              
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 text-white px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase shadow-sm">
                50% OFF HOJE
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1 font-bold">PLANO DE ACESSO COMPLETO</span>
                <h3 className="font-display font-black text-2xl text-white mb-6 leading-tight">Curso Legislação PMPI Bizurada</h3>

                {/* Benefits mini list */}
                <div className="space-y-3 mb-8 border-b border-slate-800 pb-6">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    <span>Videoaulas completas artigo por artigo</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    <span>Material didático e resumos em PDF</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    <span>Simulado e caderno de exercícios</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    <span>Garantia integral de atualizações do edital</span>
                  </div>
                </div>

                {/* Prices */}
                <div className="mb-8 bg-slate-950/50 p-4.5 rounded-2xl border border-slate-800">
                  <span className="text-slate-400 text-xs font-mono uppercase tracking-wider block mb-2 font-bold text-glow-blue">INVESTIMENTO</span>
                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-500 line-through block font-semibold leading-none">De R$ 197,00 por apenas:</span>
                    <div className="font-display font-black text-2xl sm:text-3xl text-emerald-400 tracking-tight leading-none mb-1">
                      R$ 97,00 À VISTA
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-350">
                      ou em <span className="text-pmpi-orange-500 font-bold text-lg">12x de R$ 10,03</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Buttons Stack */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={openCheckout}
                  id="pricing-cta-button-garantir"
                  className="w-full font-display font-bold text-white py-4 rounded-full bg-gradient-to-r from-pmpi-orange-500 via-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 shadow-lg shadow-pmpi-orange-500/20 hover:scale-103 active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  QUERO MATRICULAR COM CARTÃO/PIX
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Secure Checkout Trust Seals */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pagamento Criptografado</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Liberação Imediata</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Interactive Simulated Checkout Drawer/Modal (Dark Theme) */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[110] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left text-slate-100">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-[9px] font-mono font-bold text-pmpi-orange-500 uppercase tracking-widest block">
                  AMBIENTE DE INSCRIÇÃO TESTE
                </span>
                <h4 className="font-display font-black text-lg text-white">
                  Simulação de Inscrição Segura
                </h4>
              </div>
              <button
                onClick={resetCheckout}
                className="p-1.5 rounded-full bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {simulationStep === "form" ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                
                <div className="bg-amber-955/20 border border-amber-900/40 rounded-xl p-3.5 text-xs text-amber-300 leading-relaxed">
                  💡 <strong>Simulação ativa:</strong> Preencha com dados fictícios para testar a experiência imediata de recebimento de acesso à plataforma.
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="lead-name" className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                    Nome Completo:
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      id="lead-name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva Santos"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-pmpi-orange-500 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="lead-email" className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                    Melhor E-mail para Acesso:
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      id="lead-email"
                      type="email"
                      required
                      placeholder="Ex: joao.santos@gmail.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-pmpi-orange-500 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Payment Options */}
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-2">
                    Forma de Pagamento Simulada:
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
                              ? "border-pmpi-orange-500 bg-pmpi-orange-950/40 text-pmpi-orange-500 font-bold"
                              : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
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
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[10px]">
                    <Lock className="w-4 h-4 text-emerald-500" />
                    <span>Ambiente criptografado</span>
                  </div>
                  <button
                    type="submit"
                    id="simulated-checkout-submit"
                    disabled={isSimulating}
                    className="font-display font-bold text-white bg-gradient-to-r from-pmpi-orange-500 to-pmpi-orange-600 hover:brightness-110 py-3 px-6 rounded-full flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSimulating ? "Processando..." : "Confirmar Matrícula"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            ) : (
              /* Results Screen */
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-900/50 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-emerald-400" />
                </div>

                <h4 className="font-display font-black text-xl text-white mb-2">
                  Matrícula Simulada com Sucesso!
                </h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6 leading-relaxed">
                  Parabéns, <strong className="text-pmpi-orange-500">{leadName}</strong>! Seus dados simulados de acesso foram gerados e enviados para <strong className="text-white">{leadEmail}</strong>.
                </p>

                {/* Mock Account Login Info */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-left font-mono text-[11px] space-y-2 mb-6 max-w-md mx-auto">
                  <p className="text-slate-200 border-b border-slate-800 pb-1.5 font-bold text-[9px] uppercase tracking-wider">
                    DADOS DE ACESSO AO PORTAL:
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-550 mr-2">Link de Login:</span> Enviado no seu e-mail
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-550 mr-2">Usuário:</span> {leadEmail}
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-550 mr-2">Senha Temporária:</span> BIZU-PMPI-7719A
                  </p>
                </div>

                <button
                  onClick={resetCheckout}
                  className="font-sans font-bold text-xs text-slate-400 hover:text-white py-3 px-6 rounded-full border border-slate-800 hover:bg-slate-950 transition-all bg-transparent cursor-pointer"
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
