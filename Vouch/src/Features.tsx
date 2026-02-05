import { 
  Zap, 
  Globe2, Smartphone, Cloud, 
  Layout, Clock, Database, 
  Layers, CreditCard, Headset, Check, X as XIcon, Minus,
  Banknote, Gavel, ArrowRight, 
  BarChart3,
  ChartColumnIncreasing,
  Send,
  MailCheck,
  BellPlus,
  Percent,
  Scale,
  HandCoins,
  Receipt,
  FilePlusCorner,
  FolderPlus,
  Calculator,
  Users,
  FileHeadphone,
 
} from 'lucide-react';

// --- DADOS DA LISTA COMPARATIVA ---
const comparisonData = [
  {
    category: "Plataforma & Acesso",
    items: [
      { name: "Sistema 100% Web (Cloud)", icon: Layout, hasVouch: true, hasMarket: false, labelMarket: "Desktop Local" },
      { name: "App Mobile Nativo", icon: Smartphone, hasVouch: true, hasMarket: false, labelMarket: "Site Adaptado" },
      { name: "Implantação Imediata", icon: Clock, hasVouch: true, hasMarket: "partial", labelMarket: "30-60 Dias" },
      { name: "Backup Automático", icon: Database, hasVouch: true, hasMarket: false, labelMarket: "Manual" },
    ]
  },
    {
    category: "Funcionalidades",
    items: [
      { name: "Lançamentos de taxas (Rateio)", icon: Layout, hasVouch: true, hasMarket: "partial", labelMarket: "offline" },
      { name: "Detalhamento de despesas no boleto (Balancete do rateio)", icon: ChartColumnIncreasing, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Envio de boletos por E-mail", icon: MailCheck, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Envio de boletos por WhatsApp", icon: Send, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Pagamentos por Pix, Linha digitavel e Cartão de crédito", icon: CreditCard, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Inclusão de extrato bancário (Conciliação Bancária)", icon: Banknote , hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Alerta de documentos", icon: BellPlus, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Nota fiscal integrada", icon: Percent, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Sistema juridico completo", icon: Scale, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Módulo de Compra de inadimplência", icon: HandCoins, hasVouch: true, hasMarket: false, labelMarket:  "Manual" },
      { name: "Simulação de acordos", icon: Receipt , hasVouch: true, hasMarket: false, labelMarket:  "Manual" },
      { name: "Geração de documentos automatizados", icon: FilePlusCorner, hasVouch: true, hasMarket: false, labelMarket:  "Manual" },
      { name: "Cadastro facilitado de unidades e condomínios", icon: FolderPlus, hasMarket: false, labelMarket:  "Manual" },
      { name: "Rastreio de unidades elegiveis para o jurídico ", icon: Gavel , hasMarket: false, labelMarket:  "Manual" },
      { name: "Personalização de fórmulas e tabelas de cálculo", icon: Calculator, hasMarket: false, labelMarket:  "Manual" },
      { name: "Configurações e acompanhamento de metas", icon: Users, hasVouch: true, hasMarket: false, labelMarket:  "Manual" },
      { name: "Módulo de cobrança ", icon: FileHeadphone, hasVouch: true, hasMarket: false, labelMarket:  "Manual" },
      { name: "Relatórios detalhados", icon: BarChart3, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Updates Grátis", icon: Cloud, hasVouch: true, hasMarket: false, labelMarket: "Pago" },
    ]
  },
  {
    category: "Inteligência Financeira",
    items: [
      { name: "Baixa Bancária (API)", icon: Zap, hasVouch: true, hasMarket: false, labelMarket: "Arquivo CNAB" },
      { name: "Régua Cobrança (Zap/SMS)", icon: Layers, hasVouch: true, hasMarket: "partial", labelMarket: "Apenas E-mail" },
      { name: "Integrações com Bancos", icon: CreditCard, hasVouch: true, hasMarket: false, labelMarket: "Externo" },
    ]
  },
  {
    category: "Suporte",
    items: [
      { name: "Chat Ao Vivo", icon: Headset, hasVouch: true, hasMarket: "partial", labelMarket: "Ticket 48h" },
      { name: "Updates Grátis", icon: Cloud, hasVouch: true, hasMarket: false, labelMarket: "Pago" },
    ]
  }
];

// --- DADOS DOS PARCEIROS (CARROSSEL) ---
//const partners = [
 // { name: "", image: "./Gobbip.png" },
  //{ name: "Fisco", icon: FileText },
 // { name: "", image: "./Gobbip.png" },
 // { name: "Fisco", icon: FileText },
// ];


function Features() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary overflow-x-hidden relative transition-colors duration-500 w-full">
      
      {/* Background Decorativo Geral */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#872a8c]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4a90e2]/10 rounded-full blur-[120px]"></div>
      </div>

      <style>{`
        /* Animações */
        @keyframes scan-line { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes chart-grow { from { height: 10%; } to { height: 70%; } }
        @keyframes float-msg { 0% { transform: translateY(20px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes spin-gear { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        /* Flutuação */
        @keyframes float-browser { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        
        /* Carrossel Infinito */
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-scroll { animation: scroll-infinite 40s linear infinite; }
        .pause-hover:hover { animation-play-state: paused; }

        .carousel-fade-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .browser-3d { animation: float-browser 6s ease-in-out infinite; }
        
        .animate-scan { animation: scan-line 2s linear infinite; }
        .group:hover .animate-chart-1 { animation: chart-grow 1s ease-out forwards; }
        .group:hover .animate-chart-2 { animation: chart-grow 1.2s ease-out forwards; }
        .group:hover .animate-chart-3 { animation: chart-grow 0.8s ease-out forwards; }
        .group:hover .animate-msg-1 { animation: float-msg 0.5s ease-out forwards; }
        .group:hover .animate-msg-2 { animation: float-msg 0.5s ease-out 0.3s forwards; opacity: 0; }
        .group:hover .animate-gear { animation: spin-gear 4s linear infinite; }
        .pipeline-glow { box-shadow: 0 0 15px 2px rgba(124, 58, 237, 0.4); }

        .animate-fade-in { animation: fade-in-up 0.5s ease-out forwards; }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        /* --- ANIMAÇÃO DO SLOT (NECESSÁRIA PARA O SLOT COLUMNS) --- */
        @keyframes slot-scroll-pause {
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 100% { transform: translateY(-75%); }
        }
        .animate-slot {
          animation: slot-scroll-pause 8s cubic-bezier(0.8, 0, 0.2, 1) infinite;
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      {/* Container Principal */}
      <div className="container mx-auto px-4 md:px-8 pt-24 pb-16 relative z-10">

        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-20 pt-10">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-text/10 bg-brand-text/5 text-xs font-bold uppercase tracking-widest text-brand-primary">
              <Globe2 size={14} /> Sistema Vouch
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-brand-text">
              Fazemos toda a diferença no dia a dia: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Autonomia Total.
              </span>
            </h1>
            <p className="text-lg text-brand-muted max-w-lg font-light leading-relaxed">
              Nosso sistema foi desenvolvido para que a sua equipe tenha total controle e autonomia sobre as operações financeiras do condomínio, simplificando processos e aumentando a eficiência.
            </p>
            
            <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-3 text-brand-text font-medium">
                  <div className="p-1 rounded-full bg-[#38c88a]/20 text-[#38c88a]"><Check size={14} /></div>
                  Gestão Financeira Simplificada
                </li>
                <li className="flex items-center gap-3 text-brand-text font-medium">
                  <div className="p-1 rounded-full bg-[#38c88a]/20 text-[#38c88a]"><Check size={14} /></div>
                  Controle Total na Palma da Mão
                </li>
                <li className="flex items-center gap-3 text-brand-text font-medium">
                  <div className="p-1 rounded-full bg-[#38c88a]/20 text-[#38c88a]"><Check size={14} /></div>
                  Relatórios Detalhados para Decisões Estratégicas
                </li>
            </ul>
          </div>

   

<div className="lg:w-1/2 relative z-10 w-full flex justify-center lg:justify-end">
    {/* O efeito de brilho (mantido) */}
    <div className="absolute -inset-10 bg-gradient-to-r from-[#872a8c]/25 via-[#4a90e2]/15 to-[#872a8c]/25 rounded-3xl blur-3xl opacity-60 pointer-events-none -z-10"></div>

    <img
        src="/Supercash.png"
        alt="Portal do Cliente Vouch"
        /* ALTERAÇÕES AQUI:
           1. lg:-mr-20: Adiciona margem negativa à direita, empurrando a imagem mais para o canto.
              (Se quiser mais, tente lg:-mr-24 ou lg:-mr-32).
           2. drop-shadow-2xl: Adiciona uma sombra suave e difusa atrás da própria imagem.
        */
        className="w-full h-auto object-contain relative z-10 lg:scale-125 lg:origin-right lg:-mr-20 drop-shadow-2xl transition-transform duration-500"
    />
</div>
      </div>
        {/* --- LISTA COMPARATIVA --- */}
        <div className="w-full mb-20 mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-text mb-2">Checklist de Comparação</h2>
            <p className="text-brand-muted">Entenda visualmente a diferença de entrega.</p>
          </div>
          <div className="border border-brand-text/10 rounded-2xl overflow-hidden bg-brand-bg shadow-lg">
            <div className="grid grid-cols-12 bg-brand-text/[0.03] border-b border-brand-text/10 py-5 px-4 md:px-6 items-center">
              <div className="col-span-6 text-xs font-bold uppercase tracking-widest text-brand-muted">Recurso</div>
              <div className="col-span-3 flex flex-col items-center border-l border-brand-text/5 pl-1 md:pl-4">
                <span className="text-xs md:text-sm font-bold text-brand-primary tracking-wide text-center">Sistema Vouch</span>
                <span className="text-[9px] md:text-[10px] text-brand-text uppercase font-bold opacity-60 hidden md:block">Nuvem</span>
              </div>
              <div className="col-span-3 flex flex-col items-center border-l border-brand-text/5 pl-1 md:pl-4 opacity-50">
                <span className="text-xs md:text-sm font-bold text-brand-muted text-center">Outros sistemas do mercado</span>
                <span className="text-[9px] md:text-[10px] text-brand-muted uppercase font-bold hidden md:block">Tradicional</span>
              </div>
            </div>
            <div>
              {comparisonData.map((section, sIdx) => (
                <div key={sIdx}>
                  <div className="bg-brand-text/[0.02] border-y border-brand-text/5 py-3 px-4 md:px-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                      {section.category}
                    </span>
                  </div>
                  {section.items.map((item, iIdx) => {
                    const Icon = item.icon;
                    return (
                      <div key={iIdx} className="grid grid-cols-12 py-4 md:py-5 px-4 md:px-6 border-b border-brand-text/5 last:border-0 hover:bg-brand-text/[0.02] transition-colors items-center">
                        <div className="col-span-6 flex items-center gap-3 md:gap-4 pr-1 md:pr-2">
                          <Icon size={18} className="text-brand-muted hidden md:block shrink-0" />
                          <span className="text-xs md:text-sm font-medium text-brand-text leading-tight">{item.name}</span>
                        </div>
                        <div className="col-span-3 flex justify-center border-l border-brand-text/5 bg-brand-primary/[0.02] py-2">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary"><Check size={14} strokeWidth={3} className="md:w-4 md:h-4" /></div>
                        </div>
                        <div className="col-span-3 flex items-center justify-center border-l border-brand-text/5 opacity-50">
                          {item.hasMarket === false ? (
                            <div className="flex flex-col items-center"><XIcon size={18} className="text-[#eb5757] mb-1 md:w-5 md:h-5" /><span className="text-[9px] md:text-[10px] text-brand-muted text-center leading-tight hidden md:block">{item.labelMarket}</span></div>
                          ) : item.hasMarket === "partial" ? (
                            <div className="flex flex-col items-center"><Minus size={18} className="text-[#f2c94c] mb-1 md:w-5 md:h-5" /><span className="text-[9px] md:text-[10px] text-brand-muted text-center leading-tight hidden md:block">{item.labelMarket}</span></div>
                          ) : (
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-brand-muted/30 flex items-center justify-center"><Check size={10} className="text-brand-muted md:w-3 md:h-3" /></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- ÁREA 2: MOBILE ACCESS --- */}
        <div className="w-full mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/5 text-xs font-bold uppercase tracking-widest text-brand-secondary mb-6">
                <Smartphone size={14} /> Acesso Web
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6 leading-tight">
                Gestão na Palma<br/> da Mão.
              </h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                Para síndicos e gestores. Acompanhe inadimplência, aprove pagamentos e visualize o fluxo de caixa de qualquer lugar.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-text font-medium">
                  <div className="p-1 rounded-full bg-brand-secondary/20 text-brand-secondary"><Check size={14} /></div>
                  Informação de inadimplência em tempo real
                </li>
                <li className="flex items-center gap-3 text-brand-text font-medium">
                  <div className="p-1 rounded-full bg-brand-secondary/20 text-brand-secondary"><Check size={14} /></div>
                  Controle de áreas comuns 
                </li>
                <li className="flex items-center gap-3 text-brand-text font-medium">
                  <div className="p-1 rounded-full bg-brand-secondary/20 text-brand-secondary"><Check size={14} /></div>
                  Inclusão de comunicados e acompanhamento de documentos
                </li>
              </ul>
            </div>
            
      <div className="order-1 lg:order-2 browser-3d group cursor-default relative z-10 w-full lg:overflow-visible">
    <img
        src="/sindico1.png"
        alt="Vouch"
        /* 1. lg:scale-125 -> Aumentei um pouco mais (25%) para dar o impacto que você pediu.
           2. lg:translate-x-32 -> Empurra a imagem 128px para a direita (fora da tela/margem).
           3. max-w-none -> Impede que o navegador limite o tamanho da imagem ao container.
        */
        className="w-full h-auto object-cover relative z-10 lg:scale-125 lg:origin-right lg:translate-x-32 transition-transform duration-500 max-w-none"
    />
</div>
          </div>
        </div>

        {/* --- CARROSSEL DE PARCEIROS INFINITO --- 
        <div className="mb-20 overflow-hidden py-10 relative">
            <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">Ecossistema Integrado</span>
            </div>
            
            <div className="flex w-max animate-scroll pause-hover carousel-fade-mask">
                {[...partners, ...partners, ...partners].map((partner, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-8 py-4 mx-4 bg-brand-text/[0.02] border border-brand-text/5 rounded-full hover:border-brand-primary/30 transition-colors cursor-default whitespace-nowrap">
                       
                       
                        <img src={partner.image} alt={partner.name} className="w-16 h-16 object-contain" />
                        <span className="text-lg font-bold text-brand-text/60">{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>
*/}
        {/* --- CTA FINAL --- */}
        <div className="relative rounded-[3rem] bg-gradient-to-br from-brand-text/5 to-brand-bg border border-brand-text/10 p-12 text-center overflow-hidden mb-16 w-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-6 tracking-tight">
                    Pronto para evoluir sua operação?
                </h2>
                <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
                    Junte-se a mais de 150 garantidoras que já modernizaram seus processos com a Vouch.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a href="https://wa.me/554132238793?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento." target="_blank" className="px-10 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-xl transition-all shadow-xl hover:-translate-y-1 hover:shadow-brand-primary/20 flex items-center gap-2">
                        Agendar demonstração <ArrowRight size={20} />
                    </a>
                 
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Features;