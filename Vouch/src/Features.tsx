import { useState, useEffect } from 'react';
import { 
  Zap, ShieldCheck, Brain, BarChart3, 
  Globe2, Lock, Smartphone, Cloud, 
  Layout, Clock, Database, 
  Layers, CreditCard, Headset, Check, X as XIcon, Minus, Activity,
  LayoutDashboard, Banknote, Gavel, ArrowRight, MessageCircle, FileText, Settings,
  Server
} from 'lucide-react';

// --- DADOS DA ÓRBITA (O SOL) ---
const orbitIcons = [
  { id: 0, icon: Brain, color: "text-purple-500", border: "border-purple-500", shadow: "shadow-purple-500/50", bg: "bg-purple-500/10", label: "IA Vouch", desc: "Decisão automática de crédito baseada em comportamento." },
  { id: 1, icon: ShieldCheck, color: "text-emerald-500", border: "border-emerald-500", shadow: "shadow-emerald-500/50", bg: "bg-emerald-500/10", label: "Blindagem", desc: "Criptografia de ponta a ponta e segurança bancária." },
  { id: 2, icon: Cloud, color: "text-blue-500", border: "border-blue-500", shadow: "shadow-blue-500/50", bg: "bg-blue-500/10", label: "Cloud", desc: "Acesso 100% web, de qualquer lugar, sem instalações." },
  { id: 3, icon: Smartphone, color: "text-pink-500", border: "border-pink-500", shadow: "shadow-pink-500/50", bg: "bg-pink-500/10", label: "Mobile", desc: "App Nativo iOS e Android para máxima performance." },
  { id: 4, icon: Zap, color: "text-yellow-500", border: "border-yellow-500", shadow: "shadow-yellow-500/50", bg: "bg-yellow-500/10", label: "Rápido", desc: "Baixa e conciliação bancária em tempo real." },
  { id: 5, icon: BarChart3, color: "text-cyan-500", border: "border-cyan-500", shadow: "shadow-cyan-500/50", bg: "bg-cyan-500/10", label: "Dados", desc: "Dashboards analíticos completos para gestão." },
  { id: 6, icon: Lock, color: "text-red-500", border: "border-red-500", shadow: "shadow-red-500/50", bg: "bg-red-500/10", label: "LGPD", desc: "Conformidade total com a Lei Geral de Proteção de Dados." },
  { id: 7, icon: Globe2, color: "text-orange-500", border: "border-orange-500", shadow: "shadow-orange-500/50", bg: "bg-orange-500/10", label: "Global", desc: "Arquitetura preparada para múltiplas filiais." },
];

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
    category: "Inteligência Financeira",
    items: [
      { name: "Baixa Bancária (API)", icon: Zap, hasVouch: true, hasMarket: false, labelMarket: "Arquivo CNAB" },
      { name: "Régua Cobrança (Zap/SMS)", icon: Layers, hasVouch: true, hasMarket: "partial", labelMarket: "Apenas E-mail" },
      { name: "Split de Pagamento", icon: CreditCard, hasVouch: true, hasMarket: false, labelMarket: "Externo" },
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
  { name: "Banco Central", icon: Banknote },
  { name: "Tribunal de Justiça", icon: Gavel },
  { name: "WhatsApp Business", icon: MessageCircle },
  { name: "AWS Cloud", icon: Cloud },
  { name: "Serasa Experian", icon: Database },
  { name: "Google Cloud", icon: Server },
  { name: "PJBank", icon: CreditCard },
  { name: "Itaú Empresas", icon: Banknote },
];

function Features() {
  const [activeId, setActiveId] = useState(0);

  // Rotação Automática do Sol
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((current) => (current + 1) % orbitIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerRotation = activeId * -45;
  const activeItem = orbitIcons[activeId];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary overflow-x-hidden relative transition-colors duration-500">
      
      {/* Background Decorativo Geral */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <style>{`
        /* Animações Existentes */
        @keyframes sun-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes sun-counter-spin { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .sun-container { animation: sun-spin 80s linear infinite; }
        .sun-item { animation: sun-counter-spin 80s linear infinite; }
        
        @keyframes scan-line { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes chart-grow { from { height: 10%; } to { height: 70%; } }
        @keyframes float-msg { 0% { transform: translateY(20px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes spin-gear { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float-browser { 0%, 100% { transform: translateY(0px) rotateX(3deg) rotateY(-3deg); } 50% { transform: translateY(-15px) rotateX(3deg) rotateY(-3deg); } }
        
        /* Carrossel Infinito */
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll-infinite 30s linear infinite; }
        .pause-hover:hover { animation-play-state: paused; }

        /* Perspectiva 3D para a imagem */
        .browser-3d { perspective: 1200px; transform-style: preserve-3d; animation: float-browser 6s ease-in-out infinite; }
        
        .animate-scan { animation: scan-line 2s linear infinite; }
        .group:hover .animate-chart-1 { animation: chart-grow 1s ease-out forwards; }
        .group:hover .animate-chart-2 { animation: chart-grow 1.2s ease-out forwards; }
        .group:hover .animate-chart-3 { animation: chart-grow 0.8s ease-out forwards; }
        .group:hover .animate-msg-1 { animation: float-msg 0.5s ease-out forwards; }
        .group:hover .animate-msg-2 { animation: float-msg 0.5s ease-out 0.3s forwards; opacity: 0; }
        .group:hover .animate-gear { animation: spin-gear 4s linear infinite; }
        .pipeline-glow { box-shadow: 0 0 15px 2px rgba(124, 58, 237, 0.4); }
      `}</style>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        {/* --- HERO SECTION: SOL + DETALHES --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-text/10 bg-brand-text/5 text-xs font-bold uppercase tracking-widest text-brand-primary">
              <Activity size={14} /> Funcionalidades
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-brand-text">
              O Núcleo da <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Sua Operação
              </span>
            </h1>
            <p className="text-lg text-brand-muted max-w-lg font-light">
              Conecte todas as pontas da sua garantidora em um único ecossistema inteligente.
            </p>
            <div className={`mt-8 p-8 rounded-2xl bg-brand-bg border transition-all duration-500 shadow-xl relative overflow-hidden ${activeItem.border.replace('border-', 'border-opacity-30 border-')}`}>
               <div className={`absolute left-0 top-0 bottom-0 w-2 ${activeItem.bg.replace('/10', '')} transition-colors duration-500`}></div>
               <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${activeItem.bg} ${activeItem.color}`}>
                        {(() => { const Icon = activeItem.icon; return <Icon size={32} />; })()}
                    </div>
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${activeItem.color}`}>
                        {activeItem.label}
                    </h3>
                 </div>
                 <div className="animate-fade-in key={activeId}">
                   <p className="text-lg text-brand-muted leading-relaxed">
                     {activeItem.desc}
                   </p>
                 </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">
            <div className="absolute z-20 w-40 h-40 bg-brand-bg rounded-full border-4 border-brand-text/5 shadow-2xl flex items-center justify-center">
               <span className="font-heading font-black text-3xl text-brand-text tracking-tighter">VOUCH</span>
            </div>
            <div className="absolute w-full h-full flex items-center justify-center transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)" style={{ transform: `rotate(${containerRotation}deg)` }}>
              {orbitIcons.map((item, index) => {
                const angle = (360 / orbitIcons.length) * index;
                const isActive = activeId === index;
                const counterRotation = -angle - containerRotation;
                return (
                  <div key={item.id} className="absolute top-1/2 left-1/2 h-0 flex items-center justify-end origin-center" style={{ width: `440px`, transform: `translate(-50%, -50%) rotate(${angle}deg)` }}>
                    <div className={`absolute right-0 top-1/2 w-[50%] h-[1px] origin-right transition-all duration-500 ${isActive ? 'bg-brand-text/30' : 'bg-brand-text/5'}`}></div>
                    <div className="absolute right-0 translate-x-[50%]"> 
                      <div className={`relative w-16 h-16 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 bg-brand-bg ${isActive ? `scale-125 z-10 ${item.border} ${item.shadow} shadow-lg` : `border-brand-text/10 opacity-70`}`} style={{ transform: `rotate(${counterRotation}deg)` }}>
                        <item.icon size={24} className={item.color} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- LISTA COMPARATIVA --- */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-text mb-2">Checklist de Comparação</h2>
            <p className="text-brand-muted">Entenda visualmente a diferença de entrega.</p>
          </div>
          <div className="border border-brand-text/10 rounded-2xl overflow-hidden bg-brand-bg shadow-lg">
            <div className="grid grid-cols-12 bg-brand-text/[0.03] border-b border-brand-text/10 py-5 px-6 items-center">
              <div className="col-span-6 text-xs font-bold uppercase tracking-widest text-brand-muted">Recurso</div>
              <div className="col-span-3 flex flex-col items-center border-l border-brand-text/5 pl-4">
                <span className="text-sm font-bold text-brand-primary tracking-wide">VOUCH</span>
                <span className="text-[10px] text-brand-text uppercase font-bold opacity-60">Cloud</span>
              </div>
              <div className="col-span-3 flex flex-col items-center border-l border-brand-text/5 pl-4 opacity-50">
                <span className="text-sm font-bold text-brand-muted">Outros</span>
                <span className="text-[10px] text-brand-muted uppercase font-bold">Tradicional</span>
              </div>
            </div>
            <div>
              {comparisonData.map((section, sIdx) => (
                <div key={sIdx}>
                  <div className="bg-brand-text/[0.02] border-y border-brand-text/5 py-3 px-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                      {section.category}
                    </span>
                  </div>
                  {section.items.map((item, iIdx) => {
                    const Icon = item.icon;
                    return (
                      <div key={iIdx} className="grid grid-cols-12 py-5 px-6 border-b border-brand-text/5 last:border-0 hover:bg-brand-text/[0.02] transition-colors items-center">
                        <div className="col-span-6 flex items-center gap-4 pr-4">
                          <Icon size={18} className="text-brand-muted hidden md:block" />
                          <span className="text-sm font-medium text-brand-text">{item.name}</span>
                        </div>
                        <div className="col-span-3 flex justify-center border-l border-brand-text/5 bg-brand-primary/[0.02] py-2">
                           <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary"><Check size={16} strokeWidth={3} /></div>
                        </div>
                        <div className="col-span-3 flex items-center justify-center border-l border-brand-text/5 opacity-50">
                          {item.hasMarket === false ? (
                            <div className="flex flex-col items-center"><XIcon size={20} className="text-red-400 mb-1" /><span className="text-[10px] text-brand-muted text-center leading-tight hidden md:block">{item.labelMarket}</span></div>
                          ) : item.hasMarket === "partial" ? (
                            <div className="flex flex-col items-center"><Minus size={20} className="text-yellow-500 mb-1" /><span className="text-[10px] text-brand-muted text-center leading-tight hidden md:block">{item.labelMarket}</span></div>
                          ) : (
                            <div className="w-6 h-6 rounded-full border border-brand-muted/30 flex items-center justify-center"><Check size={12} className="text-brand-muted" /></div>
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
        <div className="max-w-6xl mx-auto mb-32 relative">
            <div className="text-center mb-20 relative z-10">
                <h2 className="text-3xl font-bold text-brand-text mb-4">Pipeline de Automação</h2>
                <p className="text-brand-muted max-w-2xl mx-auto">
                    Nosso sistema funciona como uma linha de montagem digital.
                </p>
            </div>
            <div className="absolute left-1/2 top-20 bottom-0 w-1 bg-brand-text/5 -translate-x-1/2 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-purple-500 to-transparent w-full animate-pulse opacity-50"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                {/* Cards do Pipeline (Mantidos) */}
                <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2rem] p-1 shadow-lg hover:border-brand-primary/40 transition-all duration-300 md:mr-12">
                    <div className="hidden md:block absolute top-1/2 -right-14 w-14 h-[2px] bg-brand-text/10 group-hover:bg-brand-primary/50 transition-colors"><div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full border-2 border-brand-bg bg-brand-text/20 group-hover:bg-brand-primary group-hover:pipeline-glow"></div></div>
                    <div className="h-full bg-brand-text/[0.02] rounded-[1.8rem] p-8 overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6"><div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary group-hover:scale-110 transition-transform duration-300"><LayoutDashboard size={28} /></div><div><h3 className="text-xl font-bold text-brand-text">Gestão à Vista</h3><p className="text-xs text-brand-muted">Dados em tempo real</p></div></div>
                        <div className="mt-8 h-32 flex items-end justify-between gap-3 px-2 border-b border-l border-brand-text/10"><div className="w-full bg-brand-primary/20 rounded-t h-[10%] animate-chart-1 group-hover:h-[40%] transition-all duration-500"></div><div className="w-full bg-brand-primary/40 rounded-t h-[20%] animate-chart-2 group-hover:h-[80%] transition-all duration-500"></div><div className="w-full bg-brand-primary/60 rounded-t h-[15%] animate-chart-3 group-hover:h-[60%] transition-all duration-500"></div><div className="w-full bg-brand-primary rounded-t h-[30%] group-hover:h-[95%] transition-all duration-500 relative group-hover:pipeline-glow"></div></div>
                    </div>
                </div>
                <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2rem] p-1 shadow-lg hover:border-[#25D366]/40 transition-all duration-300 md:mt-24 md:ml-12">
                    <div className="hidden md:block absolute top-1/2 -left-14 w-14 h-[2px] bg-brand-text/10 group-hover:bg-[#25D366]/50 transition-colors"><div className="absolute left-0 -top-1.5 w-3 h-3 rounded-full border-2 border-brand-bg bg-brand-text/20 group-hover:bg-[#25D366]"></div></div>
                    <div className="h-full bg-brand-text/[0.02] rounded-[1.8rem] p-8 overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6"><div className="p-3 bg-[#25D366]/10 rounded-xl text-[#25D366] group-hover:scale-110 transition-transform duration-300"><MessageCircle size={28} /></div><div><h3 className="text-xl font-bold text-brand-text">Bot Inteligente</h3><p className="text-xs text-brand-muted">Cobrança no WhatsApp</p></div></div>
                        <div className="mt-4 space-y-3 relative h-32 flex flex-col justify-end"><div className="bg-brand-text/5 p-3 rounded-r-xl rounded-tl-xl text-xs text-brand-muted w-3/4 animate-msg-1 opacity-0 group-hover:opacity-100 transition-opacity">Olá, seu boleto vence hoje. 📄</div><div className="bg-[#25D366]/10 p-3 rounded-l-xl rounded-tr-xl text-xs text-[#25D366] w-2/3 ml-auto animate-msg-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300">Pago! Obrigado. ✅</div></div>
                    </div>
                </div>
                <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2rem] p-1 shadow-lg hover:border-blue-500/40 transition-all duration-300 md:mr-12">
                    <div className="hidden md:block absolute top-1/2 -right-14 w-14 h-[2px] bg-brand-text/10 group-hover:bg-blue-500/50 transition-colors"><div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full border-2 border-brand-bg bg-brand-text/20 group-hover:bg-blue-500"></div></div>
                    <div className="h-full bg-brand-text/[0.02] rounded-[1.8rem] p-8 overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6"><div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:scale-110 transition-transform duration-300"><Banknote size={28} /></div><div><h3 className="text-xl font-bold text-brand-text">Conciliação</h3><p className="text-xs text-brand-muted">Baixa Automática</p></div></div>
                        <div className="mt-4 relative bg-brand-bg border border-brand-text/10 h-32 rounded-lg p-3 flex flex-col gap-2 group-hover:border-blue-500/30 transition-colors overflow-hidden"><div className="h-2 w-3/4 bg-brand-text/10 rounded"></div><div className="h-2 w-1/2 bg-brand-text/10 rounded"></div><div className="h-2 w-full bg-brand-text/10 rounded"></div><div className="absolute left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,1)] opacity-0 group-hover:opacity-100 group-hover:animate-scan"></div><div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-1000 duration-500 bg-brand-bg/80 backdrop-blur-sm"><div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform delay-1000 shadow-xl"><Check size={24} strokeWidth={3} /></div></div></div>
                    </div>
                </div>
                <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2rem] p-1 shadow-lg hover:border-orange-500/40 transition-all duration-300 md:mt-24 md:ml-12">
                    <div className="hidden md:block absolute top-1/2 -left-14 w-14 h-[2px] bg-brand-text/10 group-hover:bg-orange-500/50 transition-colors"><div className="absolute left-0 -top-1.5 w-3 h-3 rounded-full border-2 border-brand-bg bg-brand-text/20 group-hover:bg-orange-500"></div></div>
                    <div className="h-full bg-brand-text/[0.02] rounded-[1.8rem] p-8 overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6"><div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 group-hover:scale-110 transition-transform duration-300"><Gavel size={28} /></div><div><h3 className="text-xl font-bold text-brand-text">Jurídico Digital</h3><p className="text-xs text-brand-muted">Acordos e Minutas</p></div></div>
                        <div className="mt-4 relative h-32 flex items-center justify-center"><FileText size={70} className="text-brand-text/10 group-hover:text-brand-text/30 transition-colors duration-500" /><div className="absolute -bottom-2 -right-2 text-orange-500/20 group-hover:text-orange-500 group-hover:animate-gear transition-colors duration-500"><Settings size={48} /></div><div className="absolute top-2 right-10 border-2 border-orange-500 text-orange-500 text-xs font-black px-3 py-1 rounded uppercase rotate-[-12deg] opacity-0 group-hover:opacity-100 transition-all delay-500 scale-150 group-hover:scale-100 shadow-lg bg-brand-bg">Assinado</div></div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- NOVO: ÁREA DA FOTO DO SISTEMA (COM ÂNGULO 3D E SEM BORDA) --- */}
        <div className="max-w-6xl mx-auto mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 text-xs font-bold uppercase tracking-widest text-brand-primary mb-6"><Globe2 size={14} /> Web View</div>
                    <h2 className="text-4xl font-bold text-brand-text mb-6 leading-tight">Portal do Cliente: <br/> Autonomia Total.</h2>
                    <p className="text-brand-muted text-lg mb-8 leading-relaxed">Reduza ligações e e-mails. Seus clientes resolvem tudo sozinhos em um portal intuitivo e 100% responsivo.</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-brand-text font-medium"><div className="p-1 rounded-full bg-emerald-500/20 text-emerald-500"><Check size={14} /></div>Emissão de 2ª Via de Boleto</li>
                        <li className="flex items-center gap-3 text-brand-text font-medium"><div className="p-1 rounded-full bg-emerald-500/20 text-emerald-500"><Check size={14} /></div>Prestação de Contas Transparente</li>
                        <li className="flex items-center gap-3 text-brand-text font-medium"><div className="p-1 rounded-full bg-emerald-500/20 text-emerald-500"><Check size={14} /></div>Reserva de Áreas Comuns</li>
                    </ul>
                </div>
                
                {/* --- AQUI ESTÁ A MUDANÇA PRINCIPAL --- */}
                <div className="order-1 lg:order-2 perspective-1200 browser-3d group cursor-default relative z-10">
                    {/* Efeito Paliativo: Glow colorido atrás da imagem */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 to-brand-secondary/30 blur-[60px] -z-10 rounded-[3rem] transform group-hover:scale-110 transition-transform duration-700 opacity-60"></div>

                    {/* Container da Imagem sem borda, apenas com sombra suave */}
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-x-0 group-hover:rotate-y-0 bg-brand-bg/50 backdrop-blur-sm relative">
                         {/* Reflexo de vidro sutil por cima */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none z-20"></div>
                         
                         {/* SUBSTITUA O SRC ABAIXO PELA URL DA SUA IMAGEM */}
                         {/* Exemplo usando um placeholder escuro para combinar */}
                         <img
                            src="https://placehold.co/1600x1000/1a102c/e7d4e8.png?text=Print+do+Sistema+Vouch+(Substituir)"
                            alt="Portal do Cliente Vouch"
                            className="w-full h-auto object-cover relative z-10"
                         />
                    </div>
                </div>
                {/* --- FIM DA MUDANÇA PRINCIPAL --- */}
            </div>
        </div>

        {/* --- MÉTRICAS DE IMPACTO --- */}
        <div className="border-t border-b border-brand-text/5 py-16 mb-24 bg-brand-text/[0.01]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-black text-brand-text mb-2">1.5M+</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-muted">Boletos Gerados</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-brand-text mb-2">350+</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-muted">Garantidoras</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-brand-text mb-2">R$ 2Bi</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-muted">Volume Transacionado</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-brand-text mb-2">99.9%</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-muted">Uptime Garantido</div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- CARROSSEL DE PARCEIROS INFINITO --- */}
        <div className="mb-32 overflow-hidden py-10 relative">
            <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">Ecossistema Integrado</span>
            </div>
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-bg to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-bg to-transparent z-10"></div>
            <div className="flex w-max animate-scroll pause-hover">
                {[...partners, ...partners, ...partners].map((partner, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-8 py-4 mx-4 bg-brand-text/[0.02] border border-brand-text/5 rounded-full hover:border-brand-primary/30 transition-colors cursor-default whitespace-nowrap">
                        <partner.icon size={20} className="text-brand-muted" />
                        <span className="text-lg font-bold text-brand-text/60">{partner.name}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* --- CTA FINAL --- */}
        <div className="relative rounded-[3rem] bg-gradient-to-br from-brand-text/5 to-brand-bg border border-brand-text/10 p-12 text-center overflow-hidden mb-20">
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