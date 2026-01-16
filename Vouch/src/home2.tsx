import { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, 
  Cloud, Cpu, Wallet, Headset, 
  Check, Play, Rocket, ArrowRight, 
  Smartphone, BarChart3, ShieldCheck, FileText, Zap, Apple
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

function Home2() {
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
        
        {/* --- HERO SECTION (Mantido igual) --- */}
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

            {/* Imagem Hero */}
            <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000 mt-8 lg:mt-0">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-brand-text/5 shadow-2xl bg-brand-bg group animate-float">
                <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard Vouch" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-90"></div>
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
        </section>

        {/* --- NOVO LAYOUT DE INFORMAÇÕES DO SISTEMA (Melhorado) --- */}
        <section id="sistema" className="py-24 relative">
          <div className="container mx-auto px-6">
            
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

        {/* --- DEPOIMENTOS (Mantido) --- */}
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

        {/* --- NOVO: APP SECTION (Substituindo CTA) --- */}
        <section id="app" className="py-20 pb-32">
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-[3rem] p-8 md:p-0 overflow-hidden relative border-brand-primary/10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                
                {/* Lado Esquerdo: Texto e Botões */}
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
                    {/* Botão Apple */}
                    <button className="flex items-center gap-3 bg-brand-text text-brand-bg px-5 py-3 rounded-xl hover:opacity-90 transition-opacity">
                      <Apple size={28} className="fill-current" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-bold opacity-80">Download on the</div>
                        <div className="text-sm font-bold leading-none">App Store</div>
                      </div>
                    </button>

                    {/* Botão Google Play (Simulado com Play Icon) */}
                    <button className="flex items-center gap-3 bg-transparent border border-brand-text/20 text-brand-text px-5 py-3 rounded-xl hover:bg-brand-text/5 transition-colors">
                      <Play size={26} className="fill-current" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-bold opacity-80">GET IT ON</div>
                        <div className="text-sm font-bold leading-none">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Lado Direito: Mockup do Celular (CSS Puro) */}
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center p-8">
                  {/* Círculo de Fundo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-primary/20 rounded-full blur-[60px]"></div>

                  {/* O Celular */}
                  <div className="relative w-64 h-[480px] bg-brand-bg border-8 border-brand-text rounded-[2.5rem] shadow-2xl z-10 overflow-hidden rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                    {/* Notch/Camera */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-text rounded-b-xl z-20"></div>
                    
                    {/* Tela (Conteúdo Simulado) */}
                    <div className="w-full h-full bg-brand-bg pt-10 px-4 flex flex-col gap-4">
                      
                      {/* Header App */}
                      <div className="flex justify-between items-center">
                        <div className="w-8 h-8 rounded-full bg-brand-text/10"></div>
                        <div className="w-20 h-4 rounded-full bg-brand-text/10"></div>
                      </div>

                      {/* Card Saldo */}
                      <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary p-4 text-white shadow-lg">
                        <div className="w-8 h-8 rounded-lg bg-white/20 mb-4"></div>
                        <div className="h-4 w-24 bg-white/20 rounded mb-2"></div>
                        <div className="h-6 w-32 bg-white/40 rounded"></div>
                      </div>

                      {/* Lista de Itens */}
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

                      {/* Floating Action Button */}
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

export default Home2;