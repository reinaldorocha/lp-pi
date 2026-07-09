import React from "react";
import { Award, BookOpen, ShieldCheck, Target, Users } from "lucide-react";

export default function AboutMe() {
  // 💡 COMO COLOCAR SUA FOTO:
  // Se você tiver um link da sua foto na internet (do Instagram, Google Drive público, etc), basta colocar entre as aspas abaixo.
  // Exemplo: const profileImageUrl = "https://link-da-sua-foto.jpg";
  // Caso deixe vazio "", a plataforma continuará exibindo suas iniciais "JR" de forma elegante.
  const profileImageUrl = "https://profjonathanrocha.com.br/wp-content/uploads/2025/11/IMG_7993-1536x2048.webp";

  const credentials = [
    {
      icon: ShieldCheck,
      title: "Policial Penal",
      desc: "Aprovado aos 23 anos para GCM e atualmente exercendo o cargo de Policial Penal, com a vivência prática das forças de segurança.",
    },
    {
      icon: Award,
      title: "Formação de Elite",
      desc: "Bacharel em Direito e Especialista em Direito Penal e Processo Penal.",
    },
    {
      icon: Target,
      title: "6 Anos de Experiência",
      desc: "Ampla trajetória no mundo dos concursos públicos, identificando os padrões e pegadinhas das principais bancas.",
    },
    {
      icon: Users,
      title: "Grande Família",
      desc: "Iniciou no YouTube e Instagram e hoje lidera uma grande comunidade de alunos em busca da aprovação.",
    }
  ];

  return (
    <section 
      id="quem-sou-eu"
      className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden text-slate-100"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pmpi-orange-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Quem será seu mentor?
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Conheça o seu professor que vai simplificar a legislação militar da PMPI e vai te guiar até a tão sonhada aprovação.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Big Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl group">
              {/* Profile Image */}
              <img 
                src={profileImageUrl} 
                alt="Prof. Jonathan Rocha" 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Elegant overlay gradient to make it blend nicely */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* Floating badge inside the photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 backdrop-blur-md">
                <span className="font-mono text-[10px] font-bold text-pmpi-orange-500 bg-pmpi-orange-500/10 border border-pmpi-orange-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                  Policial, professor e mentor
                </span>
                <h4 className="font-display font-black text-lg text-white">
                  Prof. Jonathan Rocha
                </h4>
                <p className="font-sans text-xs text-slate-400 mt-0.5">
                  @profjonathanrocha
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience and Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight">
                Sou Policial, e atuo como professor e mentor para concursos públicos.
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                Compartilhando a experiência de <strong>6 anos no mundo dos concursos públicos</strong>, possuo formação como Bacharel em Direito e Especialista em Direito Penal e Processo Penal. Minha primeira aprovação veio logo aos 23 anos de idade para o cargo de Guarda Civil Municipal, e atualmente exerço o cargo de Policial Penal.
              </p>
              
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                Comecei compartilhando aulas no YouTube, logo depois a pedido dos alunos, comecei a compartilhar conteúdo no Instagram e aos poucos as coisas foram acontecendo e hoje já contamos com diversos alunos. Uma grande família de concurseiros em busca da tão sonhada aprovação!
              </p>
              
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                A minha missão é levar conhecimento, organização, acompanhamento e facilidade para a vida dos concurseiros do Brasil que sonham por uma oportunidade. O meu objetivo é deixar sua aprovação cada vez mais próxima, quero poder ajudar pessoas comuns a se tornarem servidores públicos, assim como foi comigo!
              </p>
              
              <p className="font-sans text-sm sm:text-base text-pmpi-orange-400 font-bold leading-relaxed pt-2">
                Vem fazer parte do projeto mais completo do Norte e Nordeste, feito e pensado para você concurseiro.
              </p>
            </div>

            {/* Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {credentials.map((cred, idx) => {
                const IconComponent = cred.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 bg-slate-950 border border-slate-850 rounded-2xl shadow-md flex gap-3.5 hover:border-slate-800 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-pmpi-orange-500 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-white mb-1">
                        {cred.title}
                      </h4>
                      <p className="font-sans text-[11px] text-slate-400 leading-normal">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
