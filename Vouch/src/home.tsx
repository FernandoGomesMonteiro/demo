import { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, 
  Cloud, Wallet, 
  Check, Play, Rocket, ArrowRight, 
  Smartphone, BarChart3, ShieldCheck, FileText, Zap, Apple, Monitor,
  Building2, Globe, Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- TIPAGEM ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  stars: number;
}

interface Feature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any; 
  hex: string; 
}

// --- DADOS ---
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aline Marques",
    role: "CEO da Condopleno",
    image: "https://ui-avatars.com/api/?name=Aline+Marques&background=0f172a&color=fff",
    content: "A Vouch sempre traz inovações e soluções que realmente fazem a diferença no nosso dia a dia. As ferramentas são simples de usar e automatizam processos que antes levavam horas da nossa equipe financeira. A clareza dos relatórios facilitou muito nossas reuniões de condomínio e trouxe mais transparência para os nossos clientes.",
    stars: 5
  },
  {
    id: 2,
    name: "Fernando Oliveira",
    role: "Coord. Financeiro",
    image: "https://ui-avatars.com/api/?name=Fernando+O&background=0f172a&color=fff",
    content: "A automação de cobranças reduziu nossa inadimplência em 40% logo nos primeiros meses de uso. O sistema é extremamente intuitivo e o suporte técnico sempre disponível para resolver qualquer dúvida rapidamente. Foi o melhor investimento que fizemos no setor de garantias até hoje.",
    stars: 5
  },
  {
    id: 3,
    name: "Ricardo Silva",
    role: "Gestor Predial",
    image: "https://ui-avatars.com/api/?name=Ricardo+S&background=0f172a&color=fff",
    content: "A integração bancária automática nos economizou horas de trabalho manual todos os dias. Simplesmente indispensável para quem lida com múltiplas contas e precisa de conciliação precisa. A interface limpa ajuda muito na operação diária e no treinamento de novos colaboradores.",
    stars: 5
  }
];

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Dashboard Executivo",
    subtitle: "Visão Macro",
    description: "Tenha o controle total da operação. Acompanhe inadimplência, fluxo de caixa e acordos em tempo real com gráficos intuitivos e exportáveis.",
    icon: BarChart3,
    hex: "#7c3aed" // Roxo Brand
  },
  {
    id: 2,
    title: "Automação de Cobrança",
    subtitle: "Régua Inteligente",
    description: "O sistema trabalha por você. Régua de cobrança automática via E-mail, SMS e WhatsApp. O sistema identifica o atraso e notifica o condômino.",
    icon: Zap,
    hex: "#06b6d4" // Ciano
  },
  {
    id: 3,
    title: "Cloud Security",
    subtitle: "Segurança Bancária",
    description: "Durma tranquilo sabendo que seus dados estão protegidos com criptografia de ponta a ponta e backups diários automáticos na nuvem segura.",
    icon: Cloud,
    hex: "#8b5cf6" // Violeta
  },
  {
    id: 4,
    title: "Prestação de Contas",
    subtitle: "Transparência Total",
    description: "Geração de relatórios automáticos para síndicos e administradoras. Gere balancetes, extratos e comprovantes com apenas um clique.",
    icon: FileText,
    hex: "#f97316" // Laranja
  },
  {
    id: 5,
    title: "Gestão de Acordos",
    subtitle: "Recuperação de Crédito",
    description: "Módulo exclusivo para negociação de dívidas. O sistema calcula juros e multas automaticamente e gera o parcelamento integrado ao boleto.",
    icon: Wallet,
    hex: "#10b981" // Verde Esmeralda
  }
];

// --- DADOS DA RÉGUA DE ESTATÍSTICAS ---
const statsData = [
  { label: "Garantidoras Atendidas", value: "150+", icon: Building2, color: "text-blue-500" },
  { label: "Volume Anual (TPV)", value: "R$ 500M", icon: BarChart3, color: "text-emerald-500" },
  { label: "Boletos Emitidos/Ano", value: "2.5M+", icon: FileText, color: "text-purple-500" },
  { label: "Estados Atendidos", value: "24", icon: Globe, color: "text-orange-500" },
];

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(popupTimer);
  }, []);

  // Timer Feature Carousel
  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveFeatureIndex((prev) => (prev + 1) % featuresData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Navegação Depoimentos
  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  // Helper para o Carrossel 3D de Depoimentos
  const getTestimonialStyle = (index: number) => {
    const total = testimonialsData.length;
    const isCenter = index === activeTestimonial;
    const isLeft = index === (activeTestimonial - 1 + total) % total;
    const isRight = index === (activeTestimonial + 1) % total;

    if (isCenter) {
      return "z-30 opacity-100 scale-100 translate-x-0 blur-0 shadow-2xl"; 
    } else if (isLeft) {
      return "z-10 opacity-40 scale-90 -translate-x-[15%] md:-translate-x-[25%] blur-[1px] grayscale cursor-pointer hover:opacity-60"; 
    } else if (isRight) {
      return "z-10 opacity-40 scale-90 translate-x-[15%] md:translate-x-[25%] blur-[1px] grayscale cursor-pointer hover:opacity-60"; 
    } else {
      return "z-0 opacity-0 scale-75 hidden"; 
    }
  };

  const activeFeature = featuresData[activeFeatureIndex];

  const handleAnimationEnd = () => {
    if (isAutoPlaying) {
      setActiveFeatureIndex((prev) => (prev + 1) % featuresData.length);
    }
  };

  const handleFeatureClick = (index: number) => {
    setActiveFeatureIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
      <div className="text-brand-text antialiased overflow-x-hidden font-sans selection:bg-brand-primary">
      
      {/* --- BACKGROUND DINÂMICO --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-100 transition-opacity">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <style>{`
        @keyframes fillHeight {
          from { height: 0%; }
          to { height: 100%; }
        }
        .animate-progress-vertical {
          animation: fillHeight 5s linear forwards;
        }
      `}</style>

      <main id="home">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-10 overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Texto Hero */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-text/5 border border-brand-text/10 text-brand-text text-xs font-semibold tracking-wide backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                Nova versão 2.0 disponível
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-text tracking-tight">
                Gestão de Garantias <br/>
                <span className="text-gradient">Simples e Inteligente</span>
              </h1>
              
              <p className="text-lg text-brand-muted max-w-lg leading-relaxed">
                Automatize cobranças, elimine planilhas e tenha controle total da sua operação financeira em uma única plataforma.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/servicos" className="group px-8 py-4 bg-brand-text text-brand-bg font-bold rounded-xl shadow-lg hover:shadow-brand-primary/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                  Começar Agora
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a href="#" className="px-8 py-4 bg-brand-bg border border-brand-text/10 rounded-xl text-brand-text font-semibold hover:bg-brand-text/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                  <Play size={16} className="fill-current" />
                  Ver Demonstração
                </a>
              </div>

              <div className="pt-8 flex items-center gap-8 border-t border-brand-text/10 mt-4">
                <div>
                  <p className="text-2xl font-bold text-brand-text">150+</p>
                  <p className="text-xs text-brand-muted uppercase tracking-wider">Garantidoras</p>
                </div>
                <div className="w-px h-8 bg-brand-text/10"></div>
                <div>
                  <p className="text-2xl font-bold text-brand-text">R$ 50M+</p>
                  <p className="text-xs text-brand-muted uppercase tracking-wider">Processados</p>
                </div>
              </div>
            </div>

            {/* Imagem Hero ESTILIZADA */}
            <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000 mt-8 lg:mt-0 group">
                {/* Efeito de Glow de Fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 via-transparent to-brand-secondary/40 blur-[80px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Container do Card 3D */}
                <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] shadow-2xl transform rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out group-hover:shadow-brand-primary/30">
                    {/* Borda Gradiente */}
                    <div className="absolute -inset-[3px] bg-gradient-to-br from-brand-primary via-brand-text/20 to-brand-secondary rounded-[3rem] blur-[2px]"></div>
                    
                    {/* Conteúdo da Imagem com Efeito de Vidro */}
                    <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-md rounded-[3rem] overflow-hidden border border-brand-text/10">
                        {/* Reflexo de Luz no Vidro */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none z-20"></div>

                        {/* A Imagem em si */}
                        <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard Vouch" className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Card Flutuante sobre a imagem */}
                    <div className="absolute bottom-10 left-8 right-8 glass-card p-5 rounded-3xl flex items-center gap-4 animate-bounce-slow border border-white/10 z-30 shadow-xl">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                            <Check size={24} strokeWidth={3} />
                        </div>
                        <div>
                            <p className="text-xs text-brand-text/80 font-bold uppercase tracking-wider mb-1">Status do Sistema</p>
                            <p className="text-lg font-black text-brand-text leading-none">100% Operacional</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* --- ESTATÍSTICAS (A "RÉGUA") --- */}
        <section className="py-20 relative bg-brand-text/[0.02] border-y border-brand-text/5 overflow-hidden">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-text/10 to-transparent -translate-y-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              
              {statsData.map((stat, index) => (
                <div key={index} className="relative group text-center lg:px-8">
                  {index !== statsData.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-brand-text/10"></div>
                  )}

                  <div className="mb-6 relative inline-block">
                    <div className={`absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity ${stat.color.replace('text-', 'bg-')}`}></div>
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-bg border border-brand-text/10 flex items-center justify-center shadow-lg relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                      <stat.icon size={32} className={stat.color} />
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-brand-text mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </h3>
                  
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-muted">
                    {stat.label}
                  </p>

                  
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* --- CARROSSEL DE FUNCIONALIDADES (INVERTIDO) --- */}
        <section id="sistema" className="py-24 relative">
          <div className="container mx-auto px-6">
            
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3 block">Recursos Premium</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-text mb-6">
                Poder Total para sua <span className="text-gradient">Operação</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              
              {/* ESQUERDA: JANELA DE CONTEÚDO */}
              <div className="lg:col-span-7 sticky top-24">
                <div className="glass-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[500px] flex flex-col justify-center border-brand-text/10 transition-all duration-500">
                  
                  {/* Background Glow Dinâmico */}
                  <div 
                    className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-[100px] rounded-full -mr-20 -mt-20 transition-colors duration-700"
                    style={{ backgroundColor: activeFeature.hex }}
                  ></div>

                  <div key={activeFeature.id} className="relative z-10 animate-fade-in-up">
                    
                    <div 
                      className="w-20 h-20 rounded-3xl border border-brand-text/10 flex items-center justify-center mb-8 shadow-xl backdrop-blur-md"
                      style={{ 
                        backgroundColor: `${activeFeature.hex}15`,
                        color: activeFeature.hex 
                      }}
                    >
                      <activeFeature.icon size={40} />
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
                      {activeFeature.title}
                    </h3>
                    
                    <p className="text-xl text-brand-muted leading-relaxed mb-10">
                      {activeFeature.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <Link to="/funcionalidades" className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-primary/25 flex items-center gap-2">
                        Saiba mais <ArrowRight size={18} />
                      </Link>
                      
                      <div className="px-4 py-2 rounded-lg bg-brand-text/5 text-xs font-bold uppercase tracking-wider text-brand-muted flex items-center gap-2">
                        <Monitor size={14} /> Desktop & Mobile
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* DIREITA: LISTA DE NAVEGAÇÃO */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                {featuresData.map((feature, idx) => {
                  const isActive = idx === activeFeatureIndex;
                  return (
                    <button
                      key={feature.id}
                      onClick={() => handleFeatureClick(idx)}
                      className={`relative text-left p-6 rounded-2xl transition-all duration-300 border group overflow-hidden outline-none
                        ${isActive 
                          ? 'bg-brand-text/5 border-brand-primary/30 shadow-lg scale-[1.02]' 
                          : 'bg-transparent border-transparent hover:bg-brand-text/[0.02] hover:border-brand-text/5 opacity-80 hover:opacity-100'
                        }`}
                    >
                      {isActive && isAutoPlaying && (
                        <div className="absolute left-0 top-0 w-1 h-full bg-brand-text/5">
                           <div 
                              className="w-full bg-brand-primary animate-progress-vertical origin-top"
                              onAnimationEnd={handleAnimationEnd}
                           ></div>
                        </div>
                      )}
                      
                      {isActive && !isAutoPlaying && (
                          <div className="absolute left-0 top-0 w-1 h-full bg-brand-primary"></div>
                      )}

                      <div className="flex items-center gap-4 pl-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm"
                          style={{ 
                            backgroundColor: `${feature.hex}1a`, 
                            color: feature.hex 
                          }}
                        >
                          <feature.icon size={20} />
                        </div>
                        
                        <div>
                          <h4 className={`font-bold text-lg leading-tight mb-1 ${isActive ? 'text-brand-text' : 'text-brand-muted group-hover:text-brand-text'}`}>
                            {feature.title}
                          </h4>
                          <p className="text-xs font-bold uppercase tracking-wider text-brand-muted/70">
                            {feature.subtitle}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* --- APP SECTION --- */}
        <section id="app" className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-[3rem] p-8 md:p-0 overflow-hidden relative border-brand-primary/10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                
                {/* Lado Esquerdo */}
                <div className="p-8 md:p-16 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wide mb-6">
                    <Smartphone size={14} />
                    Mobile App
                  </div>
                  
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
                    Leve a Vouch no <br/>
                    <span className="text-gradient">Seu Bolso</span>
                  </h2>
                  
                  <p className="text-brand-muted text-lg mb-10 leading-relaxed">
                    Gerencie sua operação de qualquer lugar. Acesse dashboards, aprove acordos e monitore a cobrança na palma da mão.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center gap-3 bg-brand-text text-brand-bg px-5 py-3 rounded-xl hover:opacity-90 transition-opacity">
                      <Apple size={28} className="fill-current" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-bold opacity-80">Download on the</div>
                        <div className="text-sm font-bold leading-none">App Store</div>
                      </div>
                    </button>

                    <button className="flex items-center gap-3 bg-transparent border border-brand-text/20 text-brand-text px-5 py-3 rounded-xl hover:bg-brand-text/5 transition-colors">
                      <Play size={26} className="fill-current" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-bold opacity-80">GET IT ON</div>
                        <div className="text-sm font-bold leading-none">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Lado Direito: Mockup */}
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center p-8">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-primary/20 rounded-full blur-[60px]"></div>

                  <div className="relative w-64 h-[480px] bg-brand-bg border-8 border-brand-text rounded-[2.5rem] shadow-2xl z-10 overflow-hidden rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-text rounded-b-xl z-20"></div>
                    <div className="w-full h-full bg-brand-bg pt-10 px-4 flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <div className="w-8 h-8 rounded-full bg-brand-text/10"></div>
                        <div className="w-20 h-4 rounded-full bg-brand-text/10"></div>
                      </div>
                      <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary p-4 text-white shadow-lg">
                        <div className="w-8 h-8 rounded-lg bg-white/20 mb-4"></div>
                        <div className="h-4 w-24 bg-white/20 rounded mb-2"></div>
                        <div className="h-6 w-32 bg-white/40 rounded"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="w-full h-14 rounded-xl bg-brand-text/5 flex items-center px-3 gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-text/10"></div>
                            <div className="flex-1 h-3 bg-brand-text/10 rounded"></div>
                        </div>
                        <div className="w-full h-14 rounded-xl bg-brand-text/5 flex items-center px-3 gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-text/10"></div>
                            <div className="flex-1 h-3 bg-brand-text/10 rounded"></div>
                        </div>
                          <div className="w-full h-14 rounded-xl bg-brand-text/5 flex items-center px-3 gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-text/10"></div>
                            <div className="flex-1 h-3 bg-brand-text/10 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-brand-primary shadow-lg flex items-center justify-center text-white">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
 {/* --- NOVO LAYOUT DE INFORMAÇÕES DO SISTEMA (Melhorado) --- */}
        <section id="sistema" className="py-24 relative">
          <div className="container mx-auto px-6 py-20 pb-32 relative border-t border-brand-text/5 overflow-hidden">
            
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3 block">Recursos Premium</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-text mb-6">
                Tudo o que você precisa em <span className="text-gradient">Um Só Lugar</span>
              </h2>
              <p className="text-brand-muted text-lg">
                Projetamos cada detalhe para maximizar a eficiência da sua garantidora.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="glass-card p-8 rounded-[2rem] hover:bg-brand-text/5 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">Dashboard Executivo</h3>
                <p className="text-brand-muted leading-relaxed">
                  Visão macro da operação. Acompanhe inadimplência, fluxo de caixa e acordos em tempo real com gráficos intuitivos.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass-card p-8 rounded-[2rem] hover:bg-brand-text/5 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">Automação de Cobrança</h3>
                <p className="text-brand-muted leading-relaxed">
                  Régua de cobrança automática via E-mail, SMS e WhatsApp. Reduza o trabalho manual da sua equipe financeira.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass-card p-8 rounded-[2rem] hover:bg-brand-text/5 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                  <Cloud size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">Cloud Security</h3>
                <p className="text-brand-muted leading-relaxed">
                  Seus dados protegidos com criptografia de ponta a ponta e backups diários automáticos na nuvem.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="glass-card p-8 rounded-[2rem] hover:bg-brand-text/5 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">Prestação de Contas</h3>
                <p className="text-brand-muted leading-relaxed">
                  Geração de relatórios automáticos para síndicos e administradoras. Exportação PDF simples e profissional.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="glass-card p-8 rounded-[2rem] hover:bg-brand-text/5 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                  <Wallet size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">Gestão de Acordos</h3>
                <p className="text-brand-muted leading-relaxed">
                  Módulo exclusivo para negociação de dívidas, cálculo de juros automático e parcelamento flexível.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="glass-card p-8 rounded-[2rem] hover:bg-brand-text/5 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">Jurídico Integrado</h3>
                <p className="text-brand-muted leading-relaxed">
                  Emissão de minutas de confissão de dívida e integração direta com o módulo de cobrança judicial.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- DEPOIMENTOS (CARD COM FUNDO E SOMBRA) --- */}
        <section className="py-20 pb-32 relative border-t border-brand-text/5 overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-12">
              Quem usa, <span className="text-brand-primary">recomenda</span>
            </h2>

            {/* Container Relativo para os Cards Sobrepostos */}
            <div className="relative h-[550px] md:h-[500px] flex items-center justify-center perspective-1000">
              
              {testimonialsData.map((testimonial, index) => {
                const cardStyle = getTestimonialStyle(index);

                return (
                  <div 
                    key={testimonial.id}
                    onClick={() => {
                        if (index !== activeTestimonial) setActiveTestimonial(index);
                    }}
                    className={`absolute w-full max-w-4xl transition-all duration-700 ease-in-out flex flex-col items-center justify-center ${cardStyle}`}
                  >
                    {/* CARD DEPOIMENTO (ESTILO RESTAURADO: FUNDO SÓLIDO) */}
                    <div className="bg-brand-bg border border-brand-text/5 shadow-2xl rounded-[2.5rem] p-12 md:p-16 max-w-4xl w-full relative mx-auto overflow-hidden">
                      
                      {/* Aspas decorativas grandes */}
                      <Quote size={80} className="absolute top-10 left-10 text-brand-primary/10 fill-current -z-0" />

                      <div className="relative z-10 pt-8">
                        {/* Texto Justificado, Cinza e Menor */}
                        <p className="text-brand-muted text-sm md:text-base text-justify leading-relaxed mb-10 font-medium">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center gap-4 justify-center border-t border-brand-text/5 pt-8">
                          <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/30" />
                          <div className="text-left">
                            <div className="font-bold text-brand-text text-base">{testimonial.name}</div>
                            <div className="text-brand-primary text-xs font-bold uppercase tracking-wider">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prevTestimonial} className="p-3 rounded-full hover:bg-brand-text/5 text-brand-muted hover:text-brand-text transition-colors z-40">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2 z-40">
                {testimonialsData.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-brand-primary' : 'w-2 bg-brand-text/20'}`} />
                ))}
              </div>
              <button onClick={nextTestimonial} className="p-3 rounded-full hover:bg-brand-text/5 text-brand-muted hover:text-brand-text transition-colors z-40">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* --- POPUP DE CHAT --- */}
      <div className={`fixed bottom-8 right-8 w-80 glass-card p-5 rounded-2xl z-50 transition-all duration-500 border border-brand-text/10 shadow-2xl bg-brand-bg/90 backdrop-blur-xl ${showPopup ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <button onClick={() => setShowPopup(false)} className="absolute top-3 right-3 text-brand-muted hover:text-brand-text transition-colors"><X size={16} /></button>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-lg animate-pulse-slow"><Rocket size={20} /></div>
          <div>
            <h4 className="font-bold text-brand-text text-sm">Fale Conosco</h4>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span><p className="text-[10px] text-brand-muted uppercase">Online agora</p></div>
          </div>
        </div>
        <p className="text-xs text-brand-muted mb-4 leading-relaxed">Tem alguma dúvida sobre o sistema? Nossa equipe está pronta para ajudar.</p>
        <a href="#" className="block w-full py-2.5 bg-brand-text/5 hover:bg-brand-primary text-center rounded-lg text-xs font-bold text-brand-text hover:text-white transition-all">Iniciar Conversa</a>
      </div>
    
    </div>
  );
}

export default Home;