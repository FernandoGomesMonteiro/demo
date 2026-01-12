import { useState, useEffect } from 'react';
import { 
  MessageCircle, Zap, Globe, 
  ArrowRight, Check, Bot, Building2, Lock, 
  FileText, BarChart3, LayoutGrid, Pause, Play
} from 'lucide-react';



// --- DADOS DOS PARCEIROS DESTAQUE ---
const spotlightPartners = [
  {
    id: 'gobbip',
    name: "Gobbip",
    subtitle: "Automação de Mensagens",
    description: "Um bot inteligente que vive no WhatsApp. Ele cobra, negocia e envia boletos automaticamente.", 
    features: ["Negociação 24/7", "Envio de Boletos", "Redução de inadimplência"],
    icon: MessageCircle,
    color: "#25D366", // Verde WhatsApp
    gradient: "from-[#25D366] to-[#128C7E]"
  },
  {
    id: 'nf',
    name: "Vouch NF",
    subtitle: "Emissor Fiscal Inteligente",
    description: "Adeus digitação manual. Nosso módulo fiscal emite notas de serviço automaticamente assim que o pagamento é identificado.",
    features: ["Emissão automática (RPS)", "Conexão com prefeituras", "Armazenamento seguro de XML"],
    icon: FileText,
    color: "#F97316", // Laranja
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 'bi',
    name: "Vouch BI",
    subtitle: "Business Intelligence",
    description: "Transforme dados brutos em ouro. Dashboards visuais integrados ao Power BI para você tomar decisões baseadas em fatos.",
    features: ["Relatórios de Inadimplência", "Projeção de Fluxo de Caixa", "Análise de Performance"],
    icon: BarChart3,
    color: "#EAB308", // Amarelo/Dourado
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: 'ecoa',
    name: "ECOA",
    subtitle: "Ecossistema Integrado",
    description: "Conectividade total para sua operação. O ECOA garante que diferentes pontas do seu negócio conversem entre si.",
    features: ["Sincronização de dados", "Gestão de múltiplos CNPJs", "Auditoria de processos"],
    icon: Zap,
    color: "#3B82F6", // Azul
    gradient: "from-blue-500 to-indigo-600"
  }
];

// --- OUTROS PARCEIROS MENORES ---
const otherPartners = [
  { name: "TechSign", category: "Assinatura Digital", icon: Lock, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Bank API", category: "Open Finance", icon: Building2, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Cloud Safe", category: "Infraestrutura", icon: Globe, color: "text-cyan-500", bg: "bg-cyan-500/10" }
];

function Partners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Novo estado para controlar o Play/Pause
  
  const activePartner = spotlightPartners[activeIndex];

  // --- LÓGICA DE CARROSSEL AUTOMÁTICO ---
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % spotlightPartners.length);
      }, 5000); // Troca a cada 5 segundos
    }

    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]); // Depende do isPlaying agora

  // Função para mudar manual e PAUSAR
  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false); // <--- A Mágica: Clicou, parou.
  };

  return (
    <div className="text-brand-text antialiased overflow-x-hidden font-sans selection:bg-brand-primary bg-brand-bg relative min-h-screen">
      
      {/* Background Decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-40 dark:opacity-60">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      

      <main className="pt-24 pb-20">
        
        {/* TÍTULO */}
        <div className="container mx-auto px-6 text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-brand-text">
            Ecossistema de <span className="text-gradient">Potência</span>
          </h1>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Nossa plataforma não anda sozinha. Conectamos as melhores soluções do mercado para turbinar sua garantidora.
          </p>
        </div>

        {/* --- CARROSSEL INTERATIVO --- */}
        <div className="container mx-auto px-6 mb-32">
          <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            
            {/* LADO ESQUERDO: O PALCO (CONTEÚDO) */}
            <div className="lg:w-2/3 relative group">
              {/* Card Principal */}
              <div className="h-full glass-card rounded-[2.5rem] border border-brand-text/5 relative overflow-hidden transition-all duration-500">
                
                {/* Background Gradiente Dinâmico */}
                <div 
                  className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl ${activePartner.gradient} opacity-10 blur-[100px] transition-all duration-700`}
                ></div>

                {/* --- RENDERIZAÇÃO CONDICIONAL --- */}
                
                <div key={activePartner.id} className="relative z-10 h-full p-8 md:p-12 animate-fade-in">
                  
                  {activePartner.id === 'gobbip' ? (
                    // --- LAYOUT ESPECIAL DO GOBBIP (COM CELULAR) ---
                    <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8">
                      {/* Texto Gobbip */}
                      <div className="md:w-1/2 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-lg">
                            <MessageCircle size={32} />
                          </div>
                          <div>
                            <h2 className="text-4xl font-bold text-brand-text">Gobbip</h2>
                            <p className="text-[#25D366] font-bold">Cobrança via WhatsApp</p>
                          </div>
                        </div>
                        <p className="text-brand-muted leading-relaxed">
                          Esqueça o telemarketing. O Gobbip é um robô inteligente que negocia dívidas e envia boletos 24h por dia.
                        </p>
                        <div className="space-y-3">
                          {["Negociação 24/7", "Envio de Boletos PDF", "Acordos Automáticos"].map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-brand-text">
                              <Check size={16} className="text-[#25D366]" /> {feat}
                            </div>
                          ))}
                        </div>
                        <button className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-lg flex items-center gap-2">
                          <Bot size={18} /> Ativar Gobbip
                        </button>
                      </div>

                      {/* Celular Simulado */}
                      <div className="md:w-1/2 w-full max-w-[280px]">
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] border-4 border-brand-text/10 shadow-2xl overflow-hidden relative h-[380px]">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-brand-text/10 rounded-b-lg z-20"></div>
                          <div className="h-full bg-[#e5ddd5] dark:bg-[#0b141a] p-3 flex flex-col pt-8 overflow-hidden text-[10px]">
                            {/* Chat Bubbles */}
                            <div className="self-start bg-white dark:bg-[#1f2c34] p-2 rounded-lg rounded-tl-none shadow-sm mb-2 max-w-[90%] text-brand-text">
                              <p className="font-bold text-[#25D366] mb-0.5">Gobbip Bot</p> Olá! Boleto un. 104 vence hoje. 🤖
                            </div>
                            <div className="self-end bg-[#d9fdd3] dark:bg-[#005c4b] p-2 rounded-lg rounded-tr-none shadow-sm mb-2 max-w-[90%] text-brand-text">
                              Manda a 2ª via?
                            </div>
                            <div className="self-start bg-white dark:bg-[#1f2c34] p-2 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-brand-text flex items-center gap-2">
                              <div className="w-5 h-6 bg-red-100 flex items-center justify-center rounded text-[6px] font-bold text-red-500">PDF</div> Aqui está!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // --- LAYOUT PADRÃO (NF, BI, ECOA) ---
                    <div className="flex flex-col justify-center h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500"
                          style={{ backgroundColor: activePartner.color, boxShadow: `0 10px 30px -10px ${activePartner.color}50` }}
                        >
                          <activePartner.icon size={32} />
                        </div>
                        <div>
                          <h2 className="text-4xl md:text-5xl font-bold text-brand-text">{activePartner.name}</h2>
                          <p className="font-medium" style={{ color: activePartner.color }}>{activePartner.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-xl text-brand-muted leading-relaxed mb-10 max-w-2xl">
                        {activePartner.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {activePartner.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-3 text-brand-text font-medium bg-brand-text/5 p-3 rounded-xl border border-brand-text/5">
                            <Check size={18} style={{ color: activePartner.color }} /> 
                            {feat}
                          </div>
                        ))}
                      </div>

                      <div>
                        <button 
                          className="px-8 py-4 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-105 flex items-center gap-2"
                          style={{ backgroundColor: activePartner.color, boxShadow: `0 10px 40px -10px ${activePartner.color}60` }}
                        >
                          <Zap size={20} /> Conectar {activePartner.name}
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* LADO DIREITO: A ESTEIRA (MENU DE SELEÇÃO) */}
            <div className="lg:w-1/3 flex flex-col gap-4">
              
              {/* HEADER DA LISTA COM BOTÃO PLAY/PAUSE */}
              <div className="flex items-center justify-between mb-2 pl-2 pr-2">
                <div className="text-xs font-bold text-brand-muted uppercase tracking-widest flex items-center gap-2">
                  <LayoutGrid size={14} /> Selecione o Parceiro
                </div>
                
                {/* Botão de Toggle Play/Pause */}
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-1.5 rounded-full border transition-all text-xs flex items-center gap-1 font-bold
                    ${isPlaying 
                      ? 'border-green-500/30 text-green-500 bg-green-500/10 hover:bg-green-500/20' 
                      : 'border-brand-text/10 text-brand-muted hover:text-brand-text hover:bg-brand-text/5'
                    }`}
                  title={isPlaying ? "Pausar rotação automática" : "Iniciar rotação automática"}
                >
                  {isPlaying ? (
                    <> <Pause size={10} /> <span>Rodando</span> </>
                  ) : (
                    <> <Play size={10} /> <span>Pausado</span> </>
                  )}
                </button>
              </div>
              
              {spotlightPartners.map((partner, index) => {
                const isActive = index === activeIndex;
                
                return (
                  <button
                    key={partner.id}
                    onClick={() => handleManualSelect(index)}
                    className={`group relative p-6 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 overflow-hidden
                      ${isActive 
                        ? 'bg-brand-bg border-transparent shadow-xl scale-100' 
                        : 'bg-transparent border-brand-text/5 hover:bg-brand-text/5 scale-95 opacity-70 hover:opacity-100'
                      }
                    `}
                    style={isActive ? { borderColor: `${partner.color}50`, borderWidth: '1px' } : {}}
                  >
                    {/* Barra de Progresso (Só aparece se estiver rodando e for o ativo) */}
                    {isActive && isPlaying && (
                      <div className="absolute bottom-0 left-0 h-1 bg-brand-text/10 w-full">
                        <div 
                          className="h-full w-full origin-left animate-progress"
                          style={{ backgroundColor: partner.color }}
                        ></div>
                      </div>
                    )}

                    {/* Barra lateral fixa quando ativo (independente do play) */}
                    {isActive && (
                       <div 
                        className="absolute left-0 top-0 bottom-0 w-1.5" 
                        style={{ backgroundColor: partner.color }}
                      ></div>
                    )}

                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-brand-muted bg-brand-text/5 group-hover:text-brand-text'}
                      `}
                      style={isActive ? { backgroundColor: partner.color } : {}}
                    >
                      <partner.icon size={24} />
                    </div>

                    <div className="flex-1">
                      <h3 className={`font-bold text-lg ${isActive ? 'text-brand-text' : 'text-brand-muted group-hover:text-brand-text'}`}>
                        {partner.name}
                      </h3>
                      <p className="text-xs text-brand-muted truncate max-w-[200px]">
                        {partner.subtitle}
                      </p>
                    </div>

                    {isActive && <ArrowRight size={20} style={{ color: partner.color }} />}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* --- GRID DE OUTROS PARCEIROS --- */}
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-brand-text/10"></div>
            <span className="text-brand-muted text-sm uppercase tracking-widest font-bold">Mais Integrações</span>
            <div className="h-px flex-1 bg-brand-text/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPartners.map((partner, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-brand-primary/30 transition-all group hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${partner.bg} flex items-center justify-center ${partner.color} group-hover:scale-110 transition-transform`}>
                  <partner.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text">{partner.name}</h4>
                  <p className="text-xs text-brand-muted uppercase tracking-wider">{partner.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

    </div>
  );
}

export default Partners;