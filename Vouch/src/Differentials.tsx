import { useState, useEffect } from 'react';
import { 
  Zap, ShieldCheck, Brain, BarChart3, 
  Globe2, Lock, Smartphone, Cloud, 
  Layout, Clock, Database, 
  Layers, CreditCard, Headset, Check, X as XIcon, Minus, Activity
} from 'lucide-react';

// --- DADOS DA ÓRBITA ---
const orbitIcons = [
  { id: 0, icon: Brain, color: "text-purple-500", border: "border-purple-500", shadow: "shadow-purple-500/50", bg: "bg-purple-500/10", label: "IA Vouch", desc: "Decisão Auto" },
  { id: 1, icon: ShieldCheck, color: "text-emerald-500", border: "border-emerald-500", shadow: "shadow-emerald-500/50", bg: "bg-emerald-500/10", label: "Blindagem", desc: "Dados Cripto" },
  { id: 2, icon: Cloud, color: "text-blue-500", border: "border-blue-500", shadow: "shadow-blue-500/50", bg: "bg-blue-500/10", label: "Cloud", desc: "100% Web" },
  { id: 3, icon: Smartphone, color: "text-pink-500", border: "border-pink-500", shadow: "shadow-pink-500/50", bg: "bg-pink-500/10", label: "Mobile", desc: "App iOS/And" },
  { id: 4, icon: Zap, color: "text-yellow-500", border: "border-yellow-500", shadow: "shadow-yellow-500/50", bg: "bg-yellow-500/10", label: "Rápido", desc: "Tempo Real" },
  { id: 5, icon: BarChart3, color: "text-cyan-500", border: "border-cyan-500", shadow: "shadow-cyan-500/50", bg: "bg-cyan-500/10", label: "Dados", desc: "Analytics" },
  { id: 6, icon: Lock, color: "text-red-500", border: "border-red-500", shadow: "shadow-red-500/50", bg: "bg-red-500/10", label: "LGPD", desc: "Compliance" },
  { id: 7, icon: Globe2, color: "text-orange-500", border: "border-orange-500", shadow: "shadow-orange-500/50", bg: "bg-orange-500/10", label: "Global", desc: "Multi-filial" },
];

// --- DADOS DO COMPARATIVO ---
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

function Differentials() {
  const [activeId, setActiveId] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // --- ROTAÇÃO AUTOMÁTICA ---
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveId((current) => (current + 1) % orbitIcons.length);
    }, 3000); // 3 Segundos

    return () => clearInterval(interval);
  }, [isPaused]);

  // Ângulo de rotação do Container para trazer o item ativo para a direita (0 graus)
  // Cada item ocupa 45 graus. Giramos negativo para trazer o item para o "Leste".
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

        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          
          {/* LADO ESQUERDO: Texto */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-text/10 bg-brand-text/5 text-xs font-bold uppercase tracking-widest text-brand-primary">
              <Activity size={14} /> Diferenciais
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

            {/* Card de Detalhes (Dinâmico) */}
            <div className={`mt-8 p-6 rounded-2xl bg-brand-bg border transition-all duration-500 shadow-xl relative overflow-hidden ${activeItem.border.replace('border-', 'border-opacity-30 border-')}`}>
               <div className={`absolute left-0 top-0 bottom-0 w-1 ${activeItem.bg.replace('/10', '')}`}></div>
               <div className="flex items-center gap-4">
                 <div className={`p-3 rounded-xl transition-colors duration-300 ${activeItem.bg} ${activeItem.color}`}>
                   {(() => { const Icon = activeItem.icon; return <Icon size={28} />; })()}
                 </div>
                 <div className="animate-fade-in key={activeId}">
                   <h3 className={`text-xl font-bold transition-colors duration-300 ${activeItem.color}`}>{activeItem.label}</h3>
                   <p className="text-sm text-brand-muted">{activeItem.desc}</p>
                 </div>
               </div>
            </div>
          </div>

          {/* LADO DIREITO: O SOL (GIRASSOL INTERATIVO) */}
          <div 
            className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center sun-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Núcleo Central (LOGO) */}
            <div className="absolute z-20 w-40 h-40 bg-brand-bg rounded-full border-4 border-brand-text/5 shadow-2xl flex items-center justify-center transition-transform hover:scale-105">
               <span className="font-heading font-black text-3xl text-brand-text tracking-tighter">VOUCH</span>
            </div>

            {/* Container Rotativo (Controlado pelo State) */}
            <div 
              className="absolute w-full h-full flex items-center justify-center transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
              style={{ transform: `rotate(${containerRotation}deg)` }}
            >
              {orbitIcons.map((item, index) => {
                const angle = (360 / orbitIcons.length) * index;
                const radius = 220;
                const isActive = activeId === index;

                // Contra-rotação: Anula a rotação do container E a posição do item
                // para garantir que o ícone fique sempre reto (0 graus absolutos)
                const counterRotation = -angle - containerRotation;

                return (
                  <div 
                    key={item.id}
                    className="absolute top-1/2 left-1/2 h-0 flex items-center justify-end origin-center"
                    style={{
                      width: `${radius * 2}px`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    }}
                  >
                    
                    {/* Linha (Raio do Sol) */}
                    <div className={`absolute right-0 top-1/2 w-[50%] h-[1px] origin-right transition-all duration-500 ${isActive ? 'bg-brand-text/30' : 'bg-brand-text/5'}`}></div>

                    {/* O Ícone na Ponta */}
                    <div className="absolute right-0 translate-x-[50%]"> 
                      
                      {/* Wrapper do Botão */}
                      <button
                        onMouseEnter={() => setActiveId(index)}
                        className={`
                          group relative w-16 h-16 rounded-2xl border flex flex-col items-center justify-center cursor-pointer transition-all duration-500 bg-brand-bg
                          ${isActive 
                            ? `scale-125 z-10 ${item.border} ${item.shadow} shadow-lg` /* Ativo: Neon + Grande */
                            : `border-brand-text/10 hover:scale-110` /* Inativo */
                          }
                        `}
                        // Aplica a contra-rotação aqui
                        style={{ transform: `rotate(${counterRotation}deg)` }}
                      >
                        <item.icon size={24} className={item.color} />
                        
                        <span className={`absolute -bottom-6 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${isActive ? `opacity-100 translate-y-0 ${item.color}` : 'opacity-0 -translate-y-2'}`}>
                          {item.label}
                        </span>
                      </button>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* --- LISTA COMPARATIVA (Mantida) --- */}
        <div id="lista" className="max-w-6xl mx-auto">
          
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
                      <div 
                        key={iIdx} 
                        className="grid grid-cols-12 py-5 px-6 border-b border-brand-text/5 last:border-0 hover:bg-brand-text/[0.02] transition-colors items-center"
                      >
                        <div className="col-span-6 flex items-center gap-4 pr-4">
                          <Icon size={18} className="text-brand-muted hidden md:block" />
                          <span className="text-sm font-medium text-brand-text">{item.name}</span>
                        </div>
                        <div className="col-span-3 flex justify-center border-l border-brand-text/5 bg-brand-primary/[0.02] py-2">
                           <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                             <Check size={16} strokeWidth={3} />
                           </div>
                        </div>
                        <div className="col-span-3 flex items-center justify-center border-l border-brand-text/5 opacity-50">
                          {item.hasMarket === false ? (
                            <div className="flex flex-col items-center">
                                <XIcon size={20} className="text-red-400 mb-1" />
                                <span className="text-[10px] text-brand-muted text-center leading-tight hidden md:block">{item.labelMarket}</span>
                            </div>
                          ) : item.hasMarket === "partial" ? (
                            <div className="flex flex-col items-center">
                                <Minus size={20} className="text-yellow-500 mb-1" />
                                <span className="text-[10px] text-brand-muted text-center leading-tight hidden md:block">{item.labelMarket}</span>
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full border border-brand-muted/30 flex items-center justify-center">
                                <Check size={12} className="text-brand-muted" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            
          </div>

          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1">
              Ver Planos e Preços
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Differentials;