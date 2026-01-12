import { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, 
  Cloud, Cpu, Wallet, Headset, 
  Check, Play, MessageCircle, Rocket, ArrowRight, MousePointer2
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

// --- DADOS ---
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aline Marques",
    role: "CEO da Condopleno",
    image: "https://ui-avatars.com/api/?name=Aline+Marques&background=0f172a&color=fff",
    content: "A Vouch sempre traz inovações e soluções que realmente fazem a diferença no nosso dia a dia. As ferramentas são simples de usar e automatizam processos.",
    stars: 5
  },
  {
    id: 2,
    name: "Fernando Oliveira",
    role: "Coord. Financeiro",
    image: "https://ui-avatars.com/api/?name=Fernando+O&background=0f172a&color=fff",
    content: "A automação de cobranças reduziu nossa inadimplência em 40%. O sistema é intuitivo e o suporte técnico sempre disponível.",
    stars: 5
  },
  {
    id: 3,
    name: "Ricardo Silva",
    role: "Gestor Predial",
    image: "https://ui-avatars.com/api/?name=Ricardo+S&background=0f172a&color=fff",
    content: "A integração bancária automática nos economizou horas de trabalho manual todos os dias. Simplesmente indispensável.",
    stars: 5
  }
];

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(popupTimer);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
      <div className="text-brand-text antialiased overflow-x-hidden font-sans selection:bg-brand-primary">
      
      {/* --- BACKGROUND DINÂMICO --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-100 transition-opacity">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>



      <main id="home">
        
        {/* --- HERO SECTION (Compactado e Focado) --- */}
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

            {/* Imagem Hero (Estilo "App Shell") */}
            <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000 mt-8 lg:mt-0">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-brand-text/5 shadow-2xl bg-brand-bg group animate-float">
                {/* Imagem */}
                <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard Vouch" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-90"></div>

                {/* Card Flutuante Interno */}
                <div className="absolute bottom-8 left-6 right-6 glass-card p-4 rounded-2xl flex items-center gap-4 animate-bounce-slow border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted font-medium uppercase tracking-wide">Status</p>
                    <p className="text-sm font-bold text-brand-text">Sistema 100% Operacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] uppercase tracking-widest text-brand-muted">Descubra</span>
            <MousePointer2 size={16} className="text-brand-text" />
          </div>
        </section>

        {/* --- INTEGRAÇÕES (BENTO GRID) --- */}
        {/* Layout mais "preso" e organizado */}
        <section id="sistema" className="py-20 relative">
          <div className="container mx-auto px-6">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <span className="text-brand-primary font-bold tracking-wider text-xs uppercase mb-2 block">Ecossistema</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text">
                  O Futuro é <span className="text-gradient">Automatizado</span>
                </h2>
                <p className="text-brand-muted mt-4">
                  Conecte sua operação às melhores ferramentas do mercado sem digitar uma linha de código.
                </p>
              </div>
              <Link to="/integracoes" className="text-brand-primary font-bold hover:text-brand-secondary transition-colors flex items-center gap-2 text-sm">
                Ver todas as integrações <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
              
              {/* Card 1: Cloud (Alto) */}
              <div className="md:row-span-2 glass-card rounded-[2rem] p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/20 rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-text/5 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                    <Cloud size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-text mb-2">Cloud Computing</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      Segurança de nível bancário. Seus dados criptografados e acessíveis de qualquer lugar do mundo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Automação (Largo) */}
              <div className="md:col-span-2 glass-card rounded-[2rem] p-8 relative overflow-hidden group flex flex-col md:flex-row items-center gap-8">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex-1 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-text/5 flex items-center justify-center text-brand-secondary mb-4">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text mb-2">Robôs Inteligentes</h3>
                  <p className="text-brand-muted text-sm">
                    Identificação de pagamentos, baixa automática e envio de notificações sem intervenção humana.
                  </p>
                </div>
                {/* Visualização abstrata de UI */}
                <div className="flex-1 w-full bg-brand-bg/60 rounded-xl border border-brand-text/5 p-4 shadow-sm relative z-10 translate-y-4 md:translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-brand-text/10 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-brand-text/10 rounded-full"></div>
                    <div className="h-6 w-full bg-brand-primary/10 rounded-md mt-2 border border-brand-primary/10"></div>
                  </div>
                </div>
              </div>

              {/* Card 3: Cobrança */}
              <div className="glass-card rounded-[2rem] p-8 group hover:border-cyan-500/30 transition-all">
                <Wallet size={28} className="text-cyan-500 mb-6" />
                <h3 className="text-xl font-bold text-brand-text mb-2">Cobrança Ativa</h3>
                <p className="text-brand-muted text-sm">Régua automática via E-mail, SMS e WhatsApp.</p>
              </div>

              {/* Card 4: Suporte */}
              <div className="glass-card rounded-[2rem] p-8 group hover:border-orange-500/30 transition-all">
                <Headset size={28} className="text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-brand-text mb-2">Suporte Parceiro</h3>
                <p className="text-brand-muted text-sm">Uma extensão técnica da sua equipe.</p>
              </div>

            </div>
          </div>
        </section>

        {/* --- DEPOIMENTOS (Compacto e Elegante) --- */}
        <section className="py-20 relative border-t border-brand-text/5">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-12">
              Quem usa, <span className="text-brand-primary">recomenda</span>
            </h2>

            <div className="relative min-h-[300px]">
              {testimonialsData.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center
                    ${index === activeTestimonial 
                      ? 'opacity-100 scale-100 translate-x-0 blur-0' 
                      : 'opacity-0 scale-95 translate-x-8 blur-sm pointer-events-none'}`}
                >
                  <blockquote className="text-2xl md:text-3xl text-brand-text font-medium leading-tight mb-8">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary" />
                    <div className="text-left">
                      <div className="font-bold text-brand-text text-base">{testimonial.name}</div>
                      <div className="text-brand-primary text-xs font-bold uppercase tracking-wider">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prevTestimonial} className="p-3 rounded-full hover:bg-brand-text/5 text-brand-muted hover:text-brand-text transition-colors">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {testimonialsData.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-brand-primary' : 'w-2 bg-brand-text/20'}`} />
                ))}
              </div>
              <button onClick={nextTestimonial} className="p-3 rounded-full hover:bg-brand-text/5 text-brand-muted hover:text-brand-text transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section id="contato" className="py-20 pb-32">
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden group border-brand-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-brand-text relative z-10">
                Pronto para transformar sua Garantidora?
              </h2>
              <p className="text-brand-muted mb-10 max-w-xl mx-auto text-lg relative z-10">
                Agende uma demonstração gratuita e descubra o poder da automação.
              </p>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-green-500/20 active:scale-95 group/btn"
              >
                <MessageCircle size={22} className="group-hover/btn:animate-bounce" /> 
                Falar no WhatsApp
              </a>
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