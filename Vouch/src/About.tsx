import { useState, useEffect } from 'react';
import { 
  Target, Zap, Shield, Users, 
  ArrowRight, Brain, Globe, Heart, 
  Code2, Rocket, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';


// --- DADOS DA JORNADA (COMO FUNCIONA) ---
const journeySteps = [
  {
    id: 1,
    title: "Conexão Profunda",
    desc: "Tudo começa com a integração. Nossa tecnologia se conecta via API aos ERPs e Bancos que você já usa. Sem migração de dados, sem dor de cabeça.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: 2,
    title: "Inteligência de Dados",
    desc: "Nossa IA analisa o perfil de cada unidade. Identificamos padrões de pagamento e classificamos o risco em tempo real.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    id: 3,
    title: "Ação Automatizada",
    desc: "Robôs executam a cobrança ou a antecipação de receita. O dinheiro chega na conta certa, o boleto é baixado e o condômino é notificado.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    id: 4,
    title: "Transparência Total",
    desc: "Gestores e síndicos acompanham tudo por dashboards vivos. Relatórios são gerados em um clique para a prestação de contas.",
    icon: Globe,
    color: "text-green-500",
    bg: "bg-green-500/10"
  }
];

// --- DADOS DOS VALORES (DNA) ---
const values = [
  { title: "Tecnologia Humanizada", desc: "Código complexo, uso simples. Fazemos o difícil parecer fácil.", icon: Heart, size: "col-span-1 md:col-span-2" },
  { title: "Segurança Obsessiva", desc: "Tratamos dados financeiros. Falhar não é uma opção.", icon: Shield, size: "col-span-1" },
  { title: "Inovação Constante", desc: "O que é bom hoje, amanhã será obsoleto. Evoluímos sempre.", icon: Rocket, size: "col-span-1" },
  { title: "Parceria Real", desc: "Não somos fornecedores, somos a extensão técnica do seu time.", icon: Users, size: "col-span-1 md:col-span-2" },
];

function About() {
  const [activeStep, setActiveStep] = useState(0);

  // Efeito simples para simular ativação conforme scroll (pode ser refinado com IntersectionObserver)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      // Lógica simples baseada em altura fixa (para demonstração)
      if (scrollPosition > 800) setActiveStep(1);
      if (scrollPosition > 1200) setActiveStep(2);
      if (scrollPosition > 1600) setActiveStep(3);
      if (scrollPosition > 2000) setActiveStep(4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-brand-text antialiased font-sans selection:bg-brand-primary">
      
      {/* Texture Noise */}
      <div className="bg-noise"></div>

      {/* Background Dinâmico */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-secondary/10 rounded-full blur-[150px] opacity-40"></div>
      </div>


      <main className="pt-32 pb-20">

        {/* --- 1. HERO MANIFESTO --- */}
        <section className="container mx-auto px-6 mb-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-text/5 border border-brand-text/10 text-brand-muted text-xs font-bold uppercase tracking-widest mb-4">
              Sobre a Vouch
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-brand-text leading-tight tracking-tight">
              Não somos apenas software. <br/>
              Somos o novo <span className="text-gradient">padrão</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-muted leading-relaxed font-light">
              Nascemos da inconformidade com processos manuais e sistemas lentos. 
              Viemos para dar superpoderes às Garantidoras de Condomínio através de tecnologia invisível e eficiente.
            </p>
          </div>

          {/* Vídeo / Imagem Institucional */}
          <div className="mt-20 relative w-full aspect-video rounded-[2rem] overflow-hidden border border-brand-text/10 shadow-2xl group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Equipe Vouch" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 group-hover:bg-brand-primary group-hover:border-brand-primary">
                <Play size={32} className="fill-current ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* --- 2. JORNADA INTERATIVA (How it Works) --- */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16">
              
              {/* Lado Esquerdo: Título Sticky */}
              <div className="md:w-1/3">
                <div className="sticky top-32">
                  <h2 className="font-heading text-4xl font-bold text-brand-text mb-6">
                    Como a mágica <br/> <span className="text-brand-primary">acontece?</span>
                  </h2>
                  <p className="text-brand-muted text-lg mb-8">
                    Transformamos burocracia em código. Veja como nossa tecnologia atua nos bastidores da sua operação.
                  </p>
                  <Link to="/funcionalidades" className="text-brand-primary font-bold hover:text-brand-secondary flex items-center gap-2">
                    Ver detalhes técnicos <ArrowRight size={18}/>
                  </Link>
                </div>
              </div>

              {/* Lado Direito: Linha do Tempo */}
              <div className="md:w-2/3 relative pl-8 md:pl-16">
                {/* Linha Vertical Conectora */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-brand-text/5 rounded-full">
                  <div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full transition-all duration-500"
                    style={{ height: `${(activeStep / 4) * 100}%` }}
                  ></div>
                </div>

                <div className="space-y-24">
                  {journeySteps.map((step, index) => (
                    <div 
                      key={step.id} 
                      className="relative group"
                      onMouseEnter={() => setActiveStep(index + 1)}
                    >
                      {/* Bolinha na Linha */}
                      <div className={`absolute -left-[39px] md:-left-[71px] top-0 w-5 h-5 rounded-full border-4 border-brand-bg transition-colors duration-500 z-10
                        ${activeStep >= index + 1 ? 'bg-brand-primary' : 'bg-brand-text/20'}
                      `}></div>

                      <div className="glass-card p-8 rounded-3xl hover:border-brand-primary/30 transition-all duration-500 group-hover:-translate-y-2">
                        <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center ${step.color} mb-6 shadow-inner`}>
                          <step.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-text mb-3">{step.title}</h3>
                        <p className="text-brand-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 3. DNA / VALORES (Bento Grid) --- */}
        <section className="py-24 bg-brand-text/5 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-brand-text mb-4">Nosso DNA</h2>
              <p className="text-brand-muted max-w-2xl mx-auto">
                Princípios inegociáveis que guiam cada linha de código que escrevemos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div 
                  key={idx} 
                  className={`${val.size} glass-card p-8 rounded-[2rem] flex flex-col justify-between hover:bg-brand-bg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group`}
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text group-hover:bg-brand-primary group-hover:text-white transition-colors mb-4">
                      <val.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">{val.title}</h3>
                    <p className="text-sm text-brand-muted group-hover:text-brand-text/80 transition-colors">{val.desc}</p>
                  </div>
                  <div className="w-8 h-1 bg-brand-text/10 rounded-full group-hover:w-full group-hover:bg-brand-primary transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4. CTA FOOTER --- */}
        <section className="pt-32 container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-8">
            Faça parte da revolução
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/carreiras" className="px-8 py-4 rounded-xl border border-brand-text/10 text-brand-text font-bold hover:bg-brand-text/5 transition-all">
              Ver Vagas Abertas
            </Link>
            <a href="https://wa.me/5511999999999" className="px-8 py-4 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-secondary transition-all shadow-lg hover:shadow-brand-primary/30">
              Falar com Comercial
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

export default About;