// import { useState, useEffect } from 'react';
import { 
  Zap, 
  Globe2, Smartphone, Cloud, 
  Layout, Clock, Database, 
  Layers, CreditCard, Headset, Check, X as XIcon, Minus,
  LayoutDashboard, Banknote, Gavel, ArrowRight, MessageCircle, FileText, Settings,
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
  Building2,
} from 'lucide-react';

// --- DADOS DA ÓRBITA (O SOL) - COMENTADO ---
// const orbitIcons = [
//   { id: 0, icon: Brain, color: "text-[#872a8c]", border: "border-[#872a8c]", shadow: "shadow-[#872a8c]/50", bg: "bg-[#872a8c]/10", label: "IA Vouch", desc: "Decisão automática de crédito baseada em comportamento." },
//   { id: 1, icon: ShieldCheck, color: "text-[#38c88a]", border: "border-[#38c88a]", shadow: "shadow-[#38c88a]/50", bg: "bg-[#38c88a]/10", label: "Blindagem", desc: "Criptografia de ponta a ponta e segurança bancária." },
//   { id: 2, icon: Cloud, color: "text-[#4a90e2]", border: "border-[#4a90e2]", shadow: "shadow-[#4a90e2]/50", bg: "bg-[#4a90e2]/10", label: "Cloud", desc: "Acesso 100% web, de qualquer lugar, sem instalações." },
//   { id: 3, icon: Smartphone, color: "text-[#b77fba]", border: "border-[#b77fba]", shadow: "shadow-[#b77fba]/50", bg: "bg-[#b77fba]/10", label: "Mobile", desc: "App Nativo iOS e Android para máxima performance." },
//   { id: 4, icon: Zap, color: "text-[#f2c94c]", border: "border-[#f2c94c]", shadow: "shadow-[#f2c94c]/50", bg: "bg-[#f2c94c]/10", label: "Rápido", desc: "Baixa e conciliação bancária em tempo real." },
//   { id: 5, icon: BarChart3, color: "text-[#4a90e2]", border: "border-[#4a90e2]", shadow: "shadow-[#4a90e2]/50", bg: "bg-[#4a90e2]/10", label: "Dados", desc: "Dashboards analíticos completos para gestão." },
//   { id: 6, icon: Lock, color: "text-[#eb5757]", border: "border-[#eb5757]", shadow: "shadow-[#eb5757]/50", bg: "bg-[#eb5757]/10", label: "LGPD", desc: "Conformidade total com a Lei Geral de Proteção de Dados." },
//   { id: 7, icon: Globe2, color: "text-[#f2994a]", border: "border-[#f2994a]", shadow: "shadow-[#f2994a]/50", bg: "bg-[#f2994a]/10", label: "Global", desc: "Arquitetura preparada para múltiplas filiais." },
// ];


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
const partners = [
  { name: "SuperCash", icon: Building2 },
  { name: "BI Desk", icon: BarChart3 },
  { name: "Gobbip", icon: MessageCircle },
  { name: "Fisco", icon: FileText },
 ];


function Features() {
  // const [activeId, setActiveId] = useState(0);

  // Rotação Automática do Sol
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveId((current) => (current + 1) % orbitIcons.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  // Lógica 2D Simples
  // const containerRotation = activeId * -45;
  // const activeItem = orbitIcons[activeId];

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

        {/* --- HERO SECTION: PORTAL DO CLIENTE (IMAGEM CORRIGIDA COM MOLDURA) --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-20 pt-10">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-text/10 bg-brand-text/5 text-xs font-bold uppercase tracking-widest text-brand-primary">
              <Globe2 size={14} /> principais funcionalidades do Vouch
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
                  Emissão de 2ª Via de Boleto
                </li>
                <li className="flex items-center gap-3 text-brand-text font-medium">
                  <div className="p-1 rounded-full bg-[#38c88a]/20 text-[#38c88a]"><Check size={14} /></div>
                  Prestação de Contas Transparente
                </li>
                <li className="flex items-center gap-3 text-brand-text font-medium">
                  <div className="p-1 rounded-full bg-[#38c88a]/20 text-[#38c88a]"><Check size={14} /></div>
                  Reserva de Áreas Comuns
                </li>
            </ul>
          </div>

          <div className="lg:w-1/2 relative browser-3d group cursor-default z-10 w-full">
              {/* Glow de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 to-brand-secondary/40 blur-[80px] -z-10 rounded-[3rem] transform group-hover:scale-105 transition-transform duration-700 opacity-70"></div>
              
              {/* Container Principal da Moldura */}
              <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transform transition-all duration-500 group-hover:scale-[1.01] bg-brand-bg border border-brand-text/10 relative z-20">
                  
                  {/* Cabeçalho do Navegador (Bolinhas) */}
                  <div className="h-8 bg-brand-text/5 flex items-center px-4 border-b border-brand-text/10 relative z-20">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] border border-[#d89e24]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
                    </div>
                  </div>

                  {/* Container da Imagem */}
                  <div className="relative bg-brand-bg">
                      {/* Overlay sutil para blending */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20 pointer-events-none z-20"></div>
                      {/* IMAGEM SEM ZOOM FORÇADO */}
                      <img
                        src="/Supercash.png"
                        alt="Portal do Cliente Vouch"
                        className="w-full h-auto object-cover relative z-10"
                      />
                  </div>
              </div>
          </div>
        </div>

        {/* --- CÓDIGO DO SOL (COMENTADO) --- */}
        {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-20"> . .. </div> */}



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
                <span className="text-xs md:text-sm font-bold text-brand-primary tracking-wide text-center">VOUCH</span>
                <span className="text-[9px] md:text-[10px] text-brand-text uppercase font-bold opacity-60 hidden md:block">Cloud</span>
              </div>
              <div className="col-span-3 flex flex-col items-center border-l border-brand-text/5 pl-1 md:pl-4 opacity-50">
                <span className="text-xs md:text-sm font-bold text-brand-muted text-center">Outros</span>
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

        {/* --- PIPELINE DE AUTOMAÇÃO --- */}
        <div className="w-full mb-20 relative">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl font-bold text-brand-text mb-4">Pipeline de Automação</h2>
                <p className="text-brand-muted max-w-2xl mx-auto">
                    Nosso sistema funciona como uma linha de montagem digital.
                </p>
            </div>
            <div className="absolute left-1/2 top-20 bottom-0 w-1 bg-brand-text/5 -translate-x-1/2 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-purple-500 to-transparent w-full animate-pulse opacity-50"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                {/* Cards do Pipeline (Mantidos) */}
                <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2rem] p-1 shadow-lg hover:border-brand-primary/40 transition-all duration-300 md:mr-12">
                    <div className="hidden md:block absolute top-1/2 -right-14 w-14 h-[2px] bg-brand-text/10 group-hover:bg-brand-primary/50 transition-colors"><div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full border-2 border-brand-bg bg-brand-text/20 group-hover:bg-brand-primary group-hover:pipeline-glow"></div></div>
                    <div className="h-full bg-brand-text/[0.02] rounded-[1.8rem] p-6 md:p-8 overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6"><div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary group-hover:scale-110 transition-transform duration-300"><LayoutDashboard size={28} /></div><div><h3 className="text-xl font-bold text-brand-text">Gestão à Vista</h3><p className="text-xs text-brand-muted">Dados em tempo real</p></div></div>
                        <div className="mt-8 h-32 flex items-end justify-between gap-3 px-2 border-b border-l border-brand-text/10"><div className="w-full bg-brand-primary/20 rounded-t h-[10%] animate-chart-1 group-hover:h-[40%] transition-all duration-500"></div><div className="w-full bg-brand-primary/40 rounded-t h-[20%] animate-chart-2 group-hover:h-[80%] transition-all duration-500"></div><div className="w-full bg-brand-primary/60 rounded-t h-[15%] animate-chart-3 group-hover:h-[60%] transition-all duration-500"></div><div className="w-full bg-brand-primary rounded-t h-[30%] group-hover:h-[95%] transition-all duration-500 relative group-hover:pipeline-glow"></div></div>
                    </div>
                </div>
                <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2rem] p-1 shadow-lg hover:border-[#38c88a]/40 transition-all duration-300 md:mt-24 md:ml-12">
                    <div className="hidden md:block absolute top-1/2 -left-14 w-14 h-[2px] bg-brand-text/10 group-hover:bg-[#38c88a]/50 transition-colors"><div className="absolute left-0 -top-1.5 w-3 h-3 rounded-full border-2 border-brand-bg bg-brand-text/20 group-hover:bg-[#38c88a]"></div></div>
                    <div className="h-full bg-brand-text/[0.02] rounded-[1.8rem] p-6 md:p-8 overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6"><div className="p-3 bg-[#38c88a]/10 rounded-xl text-[#38c88a] group-hover:scale-110 transition-transform duration-300"><MessageCircle size={28} /></div><div><h3 className="text-xl font-bold text-brand-text">Bot Inteligente</h3><p className="text-xs text-brand-muted">Cobrança no WhatsApp</p></div></div>
                        <div className="mt-4 space-y-3 relative h-32 flex flex-col justify-end"><div className="bg-brand-text/5 p-3 rounded-r-xl rounded-tl-xl text-xs text-brand-muted w-3/4 animate-msg-1 opacity-0 group-hover:opacity-100 transition-opacity">Olá, seu boleto vence hoje. 📄</div><div className="bg-[#38c88a]/10 p-3 rounded-l-xl rounded-tr-xl text-xs text-[#38c88a] w-2/3 ml-auto animate-msg-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300">Pago! Obrigado. ✅</div></div>
                    </div>
                </div>
                <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2rem] p-1 shadow-lg hover:border-[#4a90e2]/40 transition-all duration-300 md:mr-12">
                    <div className="hidden md:block absolute top-1/2 -right-14 w-14 h-[2px] bg-brand-text/10 group-hover:bg-[#4a90e2]/50 transition-colors"><div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full border-2 border-brand-bg bg-brand-text/20 group-hover:bg-[#4a90e2]"></div></div>
                    <div className="h-full bg-brand-text/[0.02] rounded-[1.8rem] p-6 md:p-8 overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6"><div className="p-3 bg-[#4a90e2]/10 rounded-xl text-[#4a90e2] group-hover:scale-110 transition-transform duration-300"><Banknote size={28} /></div><div><h3 className="text-xl font-bold text-brand-text">Conciliação</h3><p className="text-xs text-brand-muted">Baixa Automática</p></div></div>
                        <div className="mt-4 relative bg-brand-bg border border-brand-text/10 h-32 rounded-lg p-3 flex flex-col gap-2 group-hover:border-[#4a90e2]/30 transition-colors overflow-hidden"><div className="h-2 w-3/4 bg-brand-text/10 rounded"></div><div className="h-2 w-1/2 bg-brand-text/10 rounded"></div><div className="h-2 w-full bg-brand-text/10 rounded"></div><div className="absolute left-0 w-full h-[2px] bg-[#4a90e2] shadow-[0_0_15px_rgba(59,130,246,1)] opacity-0 group-hover:opacity-100 group-hover:animate-scan"></div><div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-1000 duration-500 bg-brand-bg/80 backdrop-blur-sm"><div className="w-12 h-12 rounded-full bg-[#4a90e2] text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform delay-1000 shadow-xl"><Check size={24} strokeWidth={3} /></div></div></div>
                    </div>
                </div>
                <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2rem] p-1 shadow-lg hover:border-[#f2994a]/40 transition-all duration-300 md:mt-24 md:ml-12">
                    <div className="hidden md:block absolute top-1/2 -left-14 w-14 h-[2px] bg-brand-text/10 group-hover:bg-[#f2994a]/50 transition-colors"><div className="absolute left-0 -top-1.5 w-3 h-3 rounded-full border-2 border-brand-bg bg-brand-text/20 group-hover:bg-[#f2994a]"></div></div>
                    <div className="h-full bg-brand-text/[0.02] rounded-[1.8rem] p-6 md:p-8 overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6"><div className="p-3 bg-[#f2994a]/10 rounded-xl text-[#f2994a] group-hover:scale-110 transition-transform duration-300"><Gavel size={28} /></div><div><h3 className="text-xl font-bold text-brand-text">Jurídico Digital</h3><p className="text-xs text-brand-muted">Acordos e Minutas</p></div></div>
                        <div className="mt-4 relative h-32 flex items-center justify-center"><FileText size={70} className="text-brand-text/10 group-hover:text-brand-text/30 transition-colors duration-500" /><div className="absolute -bottom-2 -right-2 text-[#f2994a]/20 group-hover:text-[#f2994a] group-hover:animate-gear transition-colors duration-500"><Settings size={48} /></div><div className="absolute top-2 right-10 border-2 border-[#f2994a] text-[#f2994a] text-xs font-black px-3 py-1 rounded uppercase rotate-[-12deg] opacity-0 group-hover:opacity-100 transition-all delay-500 scale-150 group-hover:scale-100 shadow-lg bg-brand-bg">Assinado</div></div>
                    </div>
                </div>
            </div>
        </div>

        
        {/* --- ÁREA 2: FOTO DO SISTEMA ESPELHADA (App Mobile) (IMAGEM CORRIGIDA COM MOLDURA) --- */}
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
            <div className="order-1 lg:order-2 browser-3d group cursor-default relative z-10 w-full">
              {/* Glow de fundo */}
              <div className="absolute inset-0 bg-gradient-to-bl from-brand-secondary/40 to-brand-primary/40 blur-[80px] -z-10 rounded-[3rem] transform group-hover:scale-105 transition-transform duration-700 opacity-70"></div>
              
               {/* Container Principal da Moldura */}
              <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transform transition-all duration-500 group-hover:scale-[1.01] bg-brand-bg border border-brand-text/10 relative z-20">
                  
                   {/* Cabeçalho do Navegador (Bolinhas) */}
                  <div className="h-8 bg-brand-text/5 flex items-center px-4 border-b border-brand-text/10 relative z-20">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] border border-[#d89e24]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
                    </div>
                  </div>

                  {/* Container da Imagem */}
                  <div className="relative bg-brand-bg">
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-20 pointer-events-none z-20"></div>
                      {/* IMAGEM SEM ZOOM FORÇADO */}
                      <img
                        src="/sindico.png"
                        alt="App Mobile Vouch"
                        className="w-full h-auto object-cover relative z-10"
                      />
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CARROSSEL DE PARCEIROS INFINITO (COM MÁSCARA DE FADE) --- */}
        <div className="mb-20 overflow-hidden py-10 relative">
            <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">Ecossistema Integrado</span>
            </div>
            
            <div className="flex w-max animate-scroll pause-hover carousel-fade-mask">
                {[...partners, ...partners, ...partners].map((partner, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-8 py-4 mx-4 bg-brand-text/[0.02] border border-brand-text/5 rounded-full hover:border-brand-primary/30 transition-colors cursor-default whitespace-nowrap">
                        <partner.icon size={20} className="text-brand-muted" />
                        <span className="text-lg font-bold text-brand-text/60">{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* --- CTA FINAL --- */}
        <div className="relative rounded-[3rem] bg-gradient-to-br from-brand-text/5 to-brand-bg border border-brand-text/10 p-12 text-center overflow-hidden mb-16 w-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-6 tracking-tight">
                    Pronto para evoluir sua operação?
                </h2>
                <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
                    Junte-se a mais de 350 garantidoras que já modernizaram seus processos com a Vouch.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a href="https://wa.me/5511999999999" target="_blank" className="px-10 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-xl transition-all shadow-xl hover:-translate-y-1 hover:shadow-brand-primary/20 flex items-center gap-2">
                        Solicitar Demonstração <ArrowRight size={20} />
                    </a>
                    <button className="px-10 py-4 bg-transparent border border-brand-text/10 hover:bg-brand-text/5 text-brand-text font-bold rounded-xl transition-all">
                        Ver Tabela de Preços
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Features;