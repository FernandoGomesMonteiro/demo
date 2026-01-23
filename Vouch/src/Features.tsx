import { useState, useEffect } from 'react';
import { 
  Zap, ShieldCheck, Brain, BarChart3, 
  Globe2, Lock, Smartphone, Cloud, 
  Layout, Clock, Database, 
  Layers, CreditCard, Headset, Check, X as XIcon, Minus, Activity,
  LayoutDashboard, Banknote, Gavel, ArrowRight, Download
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

function Features() {
  const [activeId, setActiveId] = useState(0);

  // --- ROTAÇÃO AUTOMÁTICA (3 SEGUNDOS) ---
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((current) => (current + 1) % orbitIcons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Ângulo de rotação do container
  const containerRotation = activeId * -45;
  const activeItem = orbitIcons[activeId];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary overflow-x-hidden relative transition-colors duration-500">
      
      {/* Background Decorativo */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        {/* --- HERO SECTION: SOL + DETALHES --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          
          {/* LADO ESQUERDO: Texto e Card Dinâmico */}
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

            {/* --- CARD DE DETALHES (AUTOMÁTICO) --- */}
            {/* Este card atualiza sozinho conforme o girassol gira */}
            <div className={`mt-8 p-8 rounded-2xl bg-brand-bg border transition-all duration-500 shadow-xl relative overflow-hidden ${activeItem.border.replace('border-', 'border-opacity-30 border-')}`}>
               {/* Barra lateral colorida */}
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

          {/* LADO DIREITO: O SOL (GIRANDO SOZINHO) */}
          <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">
            {/* Núcleo Central */}
            <div className="absolute z-20 w-40 h-40 bg-brand-bg rounded-full border-4 border-brand-text/5 shadow-2xl flex items-center justify-center">
               <span className="font-heading font-black text-3xl text-brand-text tracking-tighter">VOUCH</span>
            </div>

            {/* Container Rotativo */}
            <div 
              className="absolute w-full h-full flex items-center justify-center transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
              style={{ transform: `rotate(${containerRotation}deg)` }}
            >
              {orbitIcons.map((item, index) => {
                const angle = (360 / orbitIcons.length) * index;
                const isActive = activeId === index;
                // Contra-rotação para manter o ícone em pé
                const counterRotation = -angle - containerRotation;

                return (
                  <div 
                    key={item.id}
                    className="absolute top-1/2 left-1/2 h-0 flex items-center justify-end origin-center"
                    style={{
                      width: `440px`, // Define o diâmetro da órbita
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    }}
                  >
                    {/* Linha (Raio) */}
                    <div className={`absolute right-0 top-1/2 w-[50%] h-[1px] origin-right transition-all duration-500 ${isActive ? 'bg-brand-text/30' : 'bg-brand-text/5'}`}></div>

                    {/* Ícone na Ponta */}
                    <div className="absolute right-0 translate-x-[50%]"> 
                      <div
                        className={`
                          relative w-16 h-16 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 bg-brand-bg
                          ${isActive 
                            ? `scale-125 z-10 ${item.border} ${item.shadow} shadow-lg` 
                            : `border-brand-text/10 opacity-70`
                          }
                        `}
                        style={{ transform: `rotate(${counterRotation}deg)` }}
                      >
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
            <h2 className="text-3xl font-bold text-brand-text mb-2">Comparativo Técnico</h2>
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

        {/* --- GRID DETALHADO --- */}
        <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-brand-text mb-8 border-b border-brand-text/10 pb-4">
                Detalhamento dos Módulos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* CARD 1: DASHBOARD VISUAL */}
                <div className="md:col-span-8 bg-brand-bg border border-brand-text/10 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group hover:border-brand-primary/20 transition-all shadow-lg">
                    <div className="z-10 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                            <LayoutDashboard size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-text mb-2">Dashboard Executivo</h3>
                        <p className="text-brand-muted max-w-md">Visão macro da operação em tempo real. Gráficos de inadimplência, acordos fechados e projeção de caixa instantânea.</p>
                    </div>
                    {/* Mini Interface CSS */}
                    <div className="flex-1 bg-brand-text/[0.03] rounded-t-2xl border-t border-x border-brand-text/10 p-4 mt-4 relative translate-y-4 group-hover:translate-y-2 transition-transform">
                        <div className="flex gap-4 mb-4">
                            <div className="w-1/3 h-24 rounded-lg bg-brand-text/5 animate-pulse"></div>
                            <div className="w-1/3 h-24 rounded-lg bg-brand-text/5"></div>
                            <div className="w-1/3 h-24 rounded-lg bg-brand-text/5"></div>
                        </div>
                        <div className="h-32 rounded-lg bg-brand-text/5 w-full"></div>
                    </div>
                </div>

                {/* CARD 2: WHATSAPP */}
                <div className="md:col-span-4 bg-gradient-to-br from-[#25D366]/10 to-brand-bg rounded-[2rem] p-8 border border-[#25D366]/20 flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-brand-text mb-2 flex items-center gap-2">
                            <Smartphone className="text-[#25D366]" /> Bot WhatsApp
                        </h3>
                        <p className="text-brand-muted text-sm">O canal com maior taxa de conversão. Envie boletos e lembretes direto no bolso do cliente.</p>
                    </div>
                    {/* Chat Bubble Simulation */}
                    <div className="mt-8 flex flex-col gap-3">
                        <div className="self-end bg-[#25D366]/20 text-[#25D366] text-xs px-3 py-2 rounded-l-lg rounded-tr-lg">
                           Olá! Seu boleto vence hoje 📄
                        </div>
                        <div className="self-start bg-brand-text/10 text-brand-muted text-xs px-3 py-2 rounded-r-lg rounded-tl-lg">
                           Obrigado! Já paguei.
                        </div>
                    </div>
                </div>

                {/* CARD 3: FINANCEIRO */}
                <div className="md:col-span-6 bg-brand-bg border border-brand-text/10 rounded-[2rem] p-8 flex flex-col md:flex-row gap-6 items-center group hover:border-blue-500/30 transition-all">
                    <div className="flex-1">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-3">
                            <Banknote size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text mb-2">Prestação de Contas</h3>
                        <p className="text-brand-muted text-sm mb-4">Relatórios detalhados para administradoras e síndicos. Exportação em um clique.</p>
                        <button className="text-xs font-bold text-brand-primary flex items-center gap-1 hover:underline">
                            <Download size={12} /> Baixar Modelo PDF
                        </button>
                    </div>
                </div>

                {/* CARD 4: JURÍDICO */}
                <div className="md:col-span-6 bg-brand-bg border border-brand-text/10 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform hover:border-green-500/30">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                            <Gavel size={20} />
                        </div>
                        <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-1 rounded">
                            Assinatura Digital
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">Jurídico Integrado</h3>
                    <p className="text-brand-muted text-sm">Geração automática de minutas de confissão de dívida e controle de parcelamentos.</p>
                </div>

            </div>
        </div>

        {/* CTA FINAL */}
        <div className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6">
                Quer ver tudo isso funcionando?
            </h2>
            <a href="https://wa.me/5511999999999" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-text text-brand-bg font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                Agendar Demonstração <ArrowRight size={18} />
            </a>
        </div>

      </div>
    </div>
  );
}

export default Features;