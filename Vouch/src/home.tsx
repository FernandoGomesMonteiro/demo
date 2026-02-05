import { useEffect, useState } from 'react';
  import { 
 ChevronLeft, ChevronRight, 
    Cloud,
     Play, Rocket, ArrowRight, 
    Smartphone, BarChart3, FileText, Zap, Monitor,
    Building2, Globe, Quote, Send, MessageSquare, User,
    Headset,
    ShieldCheck
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

 // interface Message {
   //   id: number;
//text: string;
     // sender: 'bot' | 'user';
  //}

  // --- DADOS ---
  const features = [
    {
      icon: Cloud,
      title: "100% em Nuvem",
      description: "Acesse sua operação de qualquer lugar do mundo. Sem servidores físicos e com backups automáticos."
    },
    {
      icon: ShieldCheck,
      title: "Segurança Bancária",
      description: "Dados protegidos com criptografia de ponta. Conformidade total com a LGPD e auditorias constantes."
    },
    {
      icon: Monitor, 
      title: "Ideal para equipes híbridas ou remotas",
      description: "Perfeito para empresas que precisam de um modelo mais livre para trabalhar. Sem perder controle."
    },
    {
      icon: BarChart3,
      title: "Dashboards em Tempo Real",
      description: "Acompanhe inadimplência, fluxo de caixa e performance da equipe em telas visuais e intuitivas."
    },
    {
      icon: FileText, 
      title: "Alertas de documentos",
      description: "Alertas automáticos sobre documentos a vencer ou vencidos, com acompanhamento de todos os prazos." 
    },
    {
      icon: Headset,
      title: "Suporte Especializado",
      description: "Nossa equipe entende de garantia condominial e ajuda você a destravar processos complexos."
    }
  ];

  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      name: "Aline Marques",
      role: "CEO da Condopleno",
      image: "./condo.png",
      content: "Desde o começo a Vouch impressionou pelo atendimento, prestabilidade e agilidade, são impecáveis em atendimento, atendem muito bem nossa garantidora. Agradecemos todo seu esforço com nossa empresa!",
      stars: 5
    },
    {
      id: 2,
      name: "Maellen",
      role: "CEO da Condogold",
      image: "./condogo.png",
      content: "A Vouch transformou nossa forma de trabalhar e enriqueceu nossa garantidora com automação, produtividade e muito esforço.",
      stars: 5
    },
    {
      id: 3,
      name: "Thaylson Alves",
      role: "CEO da Royal Money",
      image: "./Royal.png",
      content: "Tive a oportunidade de contratar os serviços da Vouch soluções e fiquei extremamente satisfeito com o trabalho realizado. Desde o primeiro contato, a equipe demonstrou profissionalismo, competência e um profundo conhecimento na área de sistemas. O que mais me impressionou foi a capacidade de entender as necessidades específicas do meu negócio e oferecer soluções personalizadas que realmente agregaram valor. A implementação foi feita de forma ágil e eficiente, com um suporte técnico excepcional em todas as etapas do processo. Além disso, a Vouch soluções se mostrou sempre disponível para esclarecer dúvidas e oferecer orientações, o que foi fundamental para o sucesso do projeto. A transparência e a ética no relacionamento também foram pontos altos, reforçando a confiança na parceria. Recomendo os serviços da Vouch soluções a qualquer empresa que busque excelência, inovação e resultados concretos na área de RECEITA GARANTIDA. Certamente continuarei a contar com eles para futuros projetos, alias já são anos de crescimento aonde que a Vouch soluções nos ajudou a evoluir de uma maneira que sem eles não conseguiríamos atingir o patamar que estamos atualmente. Muito obrigado",
      stars: 5
    }
  ];

  const featuresData: Feature[] = [
    {
      id: 1,
      title: "Gestão de Garantias",
      subtitle: "Gestão",
      description: "Controle completo das antecipações e garantias recebidas, com relatórios detalhados para melhor tomada de decisão.",
      icon: BarChart3,
      hex: "#872a8c"
    },
    {
      id: 2,
      title: "Rastreio de unidades elegíveis para análise jurídica",
      subtitle: "Análise jurídica",
      description: "Identificação automática de unidades que atendem aos critérios para encaminhamento jurídico, otimizando o processo de recuperação.",
      icon: Zap,
      hex: "#4a90e2"
    },
    {
      id: 3,
      title: "Cloud Security",
      subtitle: "Segurança Bancária",
      description: "Durma tranquilo sabendo que seus dados estão protegidos com criptografia de ponta a ponta e backups diários automáticos na nuvem segura.",
      icon: Cloud,
      hex: "#9f55a3"
    },
    {
      id: 4,
      title: "Automação de Processos",
      subtitle: "Transparência Total",
      description: "Redução de tarefas manuais com processos automatizados que ganham tempo e evitam erros operacionais.",
      icon: FileText,
      hex: "#f2994a"
    },
    {
      id: 5,
      title: "Comunicação Automatizada",
      subtitle: "Automatizada",
      description: "Envio de notificações, boletos e avisos de forma rápida e organizada.",
      icon: Send,
      hex: "#38c88a"
    }
  ];

  const statsData = [
    { label: "Garantidoras Atendidas", value: "150+", icon: Monitor, hex: "#4a90e2" },
    { label: "Estados atendidos", value: " 23+", icon: Globe, hex: "#38c88a" },
    { label: "Usuarios", value: "635 Mil", icon: Building2, hex: "#872a8c" },
    { label: "condomínios", value: "7 Mil+", icon: User, hex: "#f2994a" },
  ];

 function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // --- LÓGICA DE EXIBIÇÃO AUTOMÁTICA (REATIVADA) ---
  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(popupTimer);
  }, []);

  // Reseta o texto expandido quando troca de slide (REATIVADA)
  useEffect(() => {
    setIsTextExpanded(false);
  }, [activeTestimonial]);

  // Autoplay das features (REATIVADA)
  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveFeatureIndex((prev) => (prev + 1) % featuresData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
    // --- ESTADOS DO CHATBOT ---
  //  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false); 
    //const [isChatModalOpen, setIsChatModalOpen] = useState(false); 
    
   // const [chatInput, setChatInput] = useState("");
   // const [isTyping, setIsTyping] = useState(false);
   // const chatEndRef = useRef<HTMLDivElement>(null);
    
    //const [messages, setMessages] = useState<Message[]>([]);

    //const scrollToBottom = () => {
   //   chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
   // };

  //  useEffect(() => {
  //    scrollToBottom();
   // }, [messages, isTyping, isChatModalOpen]);
//
  //  useEffect(() => {
 //     const popupTimer = setTimeout(() => setShowPopup(true), 4000);
   //   return () => clearTimeout(popupTimer);
  //  }, []);

    // Reseta o texto expandido quando troca de slide
  //  useEffect(() => {
  //    setIsTextExpanded(false);
  //  }, [activeTestimonial]);

   // useEffect(() => {
     // let interval: any;
   //   if (isAutoPlaying) {
   //     interval = setInterval(() => {
    //      setActiveFeatureIndex((prev) => (prev + 1) % featuresData.length);
   //     }, 5000);
  //    }
   //   return () => clearInterval(interval);
   // }, [isAutoPlaying]);

  //  const handleStartChat = (type: 'comercial' | 'tecnico' | 'cliente') => {
  //    setIsSelectionModalOpen(false);
   //   setIsChatModalOpen(true);

    //  let initialMsg = "";
    //  if (type === 'comercial') {
    //      initialMsg = "Olá! Sou a IA da Vouch. Vi que você tem interesse em parceria ou em contratar. Como posso ajudar a expandir sua garantidora hoje?";
    //  } else if (type === 'tecnico') {
   //       initialMsg = "Olá! Sou o suporte técnico virtual da Vouch. Qual dificuldade você está enfrentando com a integração ou sistema?";
  //    } else {
   //       initialMsg = "Olá! Se você é um condômino buscando boleto, o ideal é contatar sua administradora. Mas se tiver dúvida sobre o app Vouch, pode perguntar!";
   //   }

    //  setMessages([
   //       { id: 1, text: initialMsg, sender: 'bot' }
   //   ]);
   // };

   // const handleSendMessage = (text: string) => {
     // if (!text.trim()) return;
//
   //   const newMessage: Message = { id: Date.now(), text, sender: 'user' };
   //   setMessages(prev => [...prev, newMessage]);
   //   setChatInput("");
   //   setIsTyping(true);

   //   setTimeout(() => {
    //      let botResponse = "Entendi! Vou encaminhar sua solicitação para o setor responsável e um humano entrará em contato em breve.";
    //      
    //      const lowerText = text.toLowerCase();
   //       if (lowerText.includes("preço") || lowerText.includes("plano") || lowerText.includes("valor")) {
   //           botResponse = "Nossos planos variam conforme o volume de boletos da sua operação. Gostaria de agendar uma demonstração rápida com um consultor para receber uma proposta personalizada?";
    //      } else if (lowerText.includes("boleto") || lowerText.includes("2 via") || lowerText.includes("pagamento")) {
    //          botResponse = "Se você é condômino e precisa da 2ª via, recomendamos acessar o Portal do Cliente ou App da sua garantidora/administradora. Eu sou o assistente virtual do software Vouch e não tenho acesso a boletos individuais.";
   //       } else if (lowerText.includes("funciona") || lowerText.includes("sistema")) {
     //         botResponse = "A Vouch é uma plataforma 100% em nuvem para gestão de garantidoras. Automatizamos desde a emissão de boletos e régua de cobrança até a prestação de contas para o síndico. Tudo integrado.";
    //      }

     //     const responseMsg: Message = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
     //     setMessages(prev => [...prev, responseMsg]);
     //     setIsTyping(false);
    //  }, 1500);
   // };

    const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

    const getTestimonialStyle = (index: number) => {
      const total = testimonialsData.length;
      const isCenter = index === activeTestimonial;
      const isLeft = index === (activeTestimonial - 1 + total) % total;
      const isRight = index === (activeTestimonial + 1) % total;

      if (isCenter) return "z-30 opacity-100 scale-100 translate-x-0 blur-0 shadow-2xl"; 
      if (isLeft) return "z-10 opacity-40 scale-90 -translate-x-[5%] md:-translate-x-[25%] blur-[1px] grayscale cursor-pointer hover:opacity-60"; 
      if (isRight) return "z-10 opacity-40 scale-90 translate-x-[5%] md:translate-x-[25%] blur-[1px] grayscale cursor-pointer hover:opacity-60"; 
      return "z-0 opacity-0 scale-75 hidden"; 
    };

    const activeFeature = featuresData[activeFeatureIndex];

    const handleAnimationEnd = () => {
      if (isAutoPlaying) setActiveFeatureIndex((prev) => (prev + 1) % featuresData.length);
    };

    const handleFeatureClick = (index: number) => {
      setActiveFeatureIndex(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="text-brand-text antialiased overflow-x-hidden font-sans selection:bg-brand-primary">
        
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-100 transition-opacity">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#872a8c]/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#38c88a]/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#4a90e2]/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        </div>

        <style>{`
          @keyframes fillHeight { from { height: 0%; } to { height: 100%; } }
          .animate-progress-vertical { animation: fillHeight 5s linear forwards; }
          
          @keyframes float-3d {
              0%, 100% { transform: translateY(0px) rotateY(-30deg) rotateX(15deg) rotateZ(2deg); }
              50% { transform: translateY(-20px) rotateY(-30deg) rotateX(15deg) rotateZ(2deg); }
          }
          .transform-3d-parent { perspective: 2500px; }
          .transform-3d-child { transform-style: preserve-3d; }
          
          @media (min-width: 768px) {
              .float-animation { animation: float-3d 6s ease-in-out infinite; }
          }
          
          .group:hover { transform-style: preserve-3d; }

          @keyframes typing { 0% { opacity: 0.3; transform: translateY(0px); } 50% { opacity: 1; transform: translateY(-3px); } 100% { opacity: 0.3; transform: translateY(0px); } }
          .typing-dot { animation: typing 1.4s infinite ease-in-out both; }
          .typing-dot:nth-child(1) { animation-delay: 0s; }
          .typing-dot:nth-child(2) { animation-delay: 0.2s; }
          .typing-dot:nth-child(3) { animation-delay: 0.4s; }

          @keyframes fade-in-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fade-in-up 0.5s ease-out forwards; }
        `}</style>

        <main id="home">
          
          {/* --- HERO SECTION --- */}
          <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center pt-24 lg:pt-32 pb-10 overflow-hidden lg:overflow-visible">
            <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6 animate-fade-in lg:order-1 z-20 text-center lg:text-left">

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-text tracking-tight">
                  A tecnologia que <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#872a8c] to-[#4a90e2]">transforma a gestão das garantidoras</span>
                </h1>
                <p className="text-base lg:text-lg text-brand-text/90 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Mais controle. Mais eficiência. Mais crescimento. Automatize cobranças, elimine planilhas e tenha controle total da sua operação financeira em uma única plataforma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                  <Link to="/funcionalidades" className="group px-8 py-4 bg-brand-text text-brand-bg font-bold rounded-xl shadow-lg hover:shadow-[#872a8c]/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    Começar Agora
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="https://wa.me/554132238793?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento." className="px-8 py-4 bg-brand-bg border border-brand-text/10 rounded-xl text-brand-text font-semibold hover:bg-brand-text/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                    <Play size={16} className="fill-current" />
                    Agendar Demonstração
                  </a>
                </div>
                <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-brand-text/10 mt-4">
                </div>
              </div>
              

              {/* --- IMAGEM DO HERO (REFINADA PARA UX/UI) --- */}
              <div className="relative lg:h-[700px] flex items-center justify-center transform-3d-parent mt-8 lg:-mt-24 group lg:order-2 z-10">
                  
                  {/* 1. CAMADA DE FUNDO: Luz Ambiente Colorida */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#872a8c]/30 via-[#4a90e2]/20 to-transparent blur-[120px] rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-700 lg:-mr-32 -z-30"></div>

                  {/* 2. CAMADA DE PESO: Sombra de Oclusão e Grounding (UX FIX) */}
                  {/* Sombra escura focada para tirar o aspecto "dislocado" */}
                  <div className="absolute top-[60%] left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[100%] h-[70%] bg-black/80 blur-[80px] rounded-full -z-20 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
                  {/* Brilho da marca para integrar com o fundo */}
                  <div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[110%] h-[80%] bg-[#872a8c]/15 blur-[100px] rounded-full -z-20 pointer-events-none transition-all duration-700"></div>

                  {/* 3. CAMADA DA IMAGEM: Floating UI Style */}
                  <div className="relative z-10 w-full flex justify-center lg:justify-end lg:w-[170%] lg:-mr-[40%]">
                      <img 
                          src="/Super1.png" 
                          alt="Dashboard Vouch" 
                          className="w-full h-auto object-contain lg:max-w-none filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]" 
                      />
                  </div>
              </div>
            </div>
          </section>

          {/* --- ESTATÍSTICAS --- */}
          <section className="py-12 lg:py-20 relative bg-brand-text/[0.02] border-y border-brand-text/5 overflow-hidden">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-text/10 to-transparent -translate-y-1/2"></div>
            <div className="container mx-auto px-4 lg:px-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
                {statsData.map((stat, index) => (
                  <div key={index} className="relative group text-center lg:px-8">
                    {index !== statsData.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-brand-text/10"></div>
                    )}
                    <div className="mb-4 lg:mb-6 relative inline-block">
                      <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: stat.hex }}></div>
                      <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto rounded-2xl bg-brand-bg border border-brand-text/10 flex items-center justify-center shadow-lg relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                        <stat.icon size={28} className="lg:w-8 lg:h-8" style={{ color: stat.hex }} />
                      </div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-brand-text mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </h3>
                    <p className="text-xs lg:text-sm font-bold uppercase tracking-widest text-brand-text/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- RECURSOS PREMIUM --- */}
          <section id="sistema" className="py-16 lg:py-24 relative">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center mb-12 lg:mb-16 max-w-5xl mx-auto">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-text mb-6">
                  Poder Total para sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#872a8c] to-[#4a90e2]">Operação</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-7 relative lg:sticky lg:top-24">
                  <div className="glass-card rounded-[2rem] lg:rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden min-h-[450px] lg:min-h-[550px] flex flex-col justify-center border-brand-text/10 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 opacity-20 blur-[80px] lg:blur-[100px] rounded-full -mr-20 -mt-20 transition-colors duration-700" style={{ backgroundColor: activeFeature.hex }}></div>
                    <div key={activeFeature.id} className="relative z-10 animate-fade-in-up">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl border border-brand-text/10 flex items-center justify-center mb-6 lg:mb-8 shadow-xl backdrop-blur-md" style={{ backgroundColor: `${activeFeature.hex}15`, color: activeFeature.hex }}>
                        <activeFeature.icon size={32} className="lg:w-10 lg:h-10" />
                      </div>
                      <h3 className="text-2xl lg:text-5xl font-bold text-brand-text mb-4 lg:mb-6 leading-tight">{activeFeature.title}</h3>
                      <p className="text-base lg:text-xl text-brand-text/90 leading-relaxed mb-8 lg:mb-10">{activeFeature.description}</p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Link to="/funcionalidades" className="px-6 py-3 bg-[#872a8c] hover:bg-[#872a8c]/90 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-[#872a8c]/25 flex items-center gap-2 text-sm lg:text-base w-full sm:w-auto justify-center">Saiba mais <ArrowRight size={18} /></Link>
                        <div className="px-4 py-2 rounded-lg bg-brand-text/5 text-xs font-bold uppercase tracking-wider text-brand-text/70 flex items-center gap-2 w-full sm:w-auto justify-center"><Monitor size={14} /> Desktop & Mobile</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-3">
                  {featuresData.map((feature, idx) => {
                    const isActive = idx === activeFeatureIndex;
                    return (
                      <button key={feature.id} onClick={() => handleFeatureClick(idx)} className={`relative text-left p-4 lg:p-6 rounded-2xl transition-all duration-300 border group overflow-hidden outline-none ${isActive ? 'bg-brand-text/5 border-[#872a8c]/30 shadow-lg scale-[1.01] lg:scale-[1.02]' : 'bg-transparent border-transparent hover:bg-brand-text/[0.02] hover:border-brand-text/5 opacity-80 hover:opacity-100'}`}>
                        {isActive && isAutoPlaying && (<div className="absolute left-0 top-0 w-1 h-full bg-brand-text/5"><div className="w-full bg-[#872a8c] animate-progress-vertical origin-top" onAnimationEnd={handleAnimationEnd}></div></div>)}
                        {isActive && !isAutoPlaying && (<div className="absolute left-0 top-0 w-1 h-full bg-[#872a8c]"></div>)}
                        <div className="flex items-center gap-4 pl-3">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm shrink-0" style={{ backgroundColor: `${feature.hex}1a`, color: feature.hex }}><feature.icon size={18} className="lg:w-5 lg:h-5" /></div>
                          <div><h4 className={`font-bold text-base lg:text-lg leading-tight mb-1 ${isActive ? 'text-brand-text' : 'text-brand-text/70 group-hover:text-brand-text'}`}>{feature.title}</h4><p className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-brand-text/60">{feature.subtitle}</p></div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
    
          
          {/* --- APP SECTION --- */}
          <section id="app" className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="glass-card rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-0 overflow-hidden relative border-brand-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-0">
                  <div className="p-4 lg:p-16 relative z-10 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#872a8c]/10 text-[#872a8c] text-xs font-bold uppercase tracking-wide mb-6"><Smartphone size={14} />Mobile App</div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">Aplicativo para <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#872a8c] to-[#4a90e2]">Moradores</span></h2>
                    <p className="text-brand-text/90 text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed">Para os moradores acessarem informações sobre sua unidade, acompanhamentos de boletos, comunicados e reservas de área comum de forma rápida e segura.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#" className="hover:opacity-80 transition-opacity">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-12" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
                        </a>
                    </div>
                  </div>
                  
                  <div className="relative h-[550px] md:h-[500px] flex items-center justify-center p-8">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 lg:w-80 lg:h-80 bg-[#872a8c]/20 rounded-full blur-[60px]"></div>
                    <div className="relative w-56 h-[400px] lg:w-64 lg:h-[480px] bg-brand-bg border-8 border-brand-text rounded-[2.5rem] shadow-2xl z-10 overflow-hidden rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 lg:w-32 h-6 bg-brand-text rounded-b-xl z-20"></div>
                      <div className="w-full h-full bg-brand-bg pt-10 px-4 flex flex-col gap-4">
                        <div className="flex justify-between items-center"><div className="w-8 h-8 rounded-full bg-brand-text/10"></div><div className="w-20 h-4 rounded-full bg-brand-text/10"></div></div>
                        <div className="w-full h-28 lg:h-32 rounded-2xl bg-gradient-to-br from-[#872a8c] to-[#4a90e2] p-4 text-white shadow-lg"><div className="w-8 h-8 rounded-lg bg-white/20 mb-4"></div><div className="h-4 w-24 bg-white/20 rounded mb-2"></div><div className="h-6 w-32 bg-white/40 rounded"></div></div>
                        <div className="space-y-3">{[1,2,3].map(i => (<div key={i} className="w-full h-12 lg:h-14 rounded-xl bg-brand-text/5 flex items-center px-3 gap-3"><div className="w-8 h-8 rounded-full bg-brand-text/10"></div><div className="flex-1 h-3 bg-brand-text/10 rounded"></div></div>))}</div>
                        <div className="absolute bottom-6 right-6 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#872a8c] shadow-lg flex items-center justify-center text-white"><ArrowRight size={20} /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* --- GRID DE FUNCIONALIDADES --- */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="glass-card p-8 rounded-[2rem] hover:border-brand-primary/30 transition-all group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      <feature.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- DEPOIMENTOS --- */}
          <section className="py-16 lg:py-20 pb-32 relative border-t border-brand-text/5 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl text-center">
              <h2 className="font-heading text-3xl font-bold mb-12">Quem usa, <span className="text-[#872a8c]">recomenda</span></h2>
              <div className="relative h-[450px] md:h-[500px] flex items-center justify-center perspective-1000">
                {testimonialsData.map((testimonial, index) => {
                  const cardStyle = getTestimonialStyle(index);
                  
                  const showFullText = isTextExpanded;
                  const isLongText = testimonial.content.length > 200; 

                  return (
                    <div key={testimonial.id} onClick={() => { if (index !== activeTestimonial) setActiveTestimonial(index); }} className={`absolute w-full max-w-4xl transition-all duration-700 ease-in-out flex flex-col items-center justify-center ${cardStyle}`}>
                      <div className="bg-brand-bg border border-brand-text/5 shadow-2xl rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-16 max-w-[90vw] lg:max-w-4xl w-full relative mx-auto overflow-hidden flex flex-col justify-between h-full max-h-[450px]">
                        <Quote size={60} className="absolute top-6 left-6 lg:top-10 lg:left-10 text-[#872a8c]/10 fill-current -z-0" />
                        
                        <div className="relative z-10 pt-4 lg:pt-8 flex flex-col h-full">
                          {/* TEXTO COM TRUNCATE (DISFARCE) E SCROLL SUAVE SE ABERTO */}
                          <div className={`transition-all duration-300 ${!showFullText ? 'overflow-hidden' : 'overflow-y-auto pr-2 scrollbar-thin max-h-[250px]'}`}>
                              <p className={`text-brand-text/90 text-sm md:text-base text-justify leading-relaxed font-medium ${!showFullText ? 'line-clamp-4 md:line-clamp-5' : ''}`}>
                                  "{testimonial.content}"
                              </p>
                          </div>
                {/* BOTÃO LER MAIS (Só aparece se o texto for grande) */}
                {isLongText && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation(); // Evita clicar no card e trocar slide
                            setIsTextExpanded(!isTextExpanded);
                        }}
                        className="text-[#872a8c] text-xs font-bold uppercase tracking-wider hover:underline mt-2 self-start focus:outline-none"
                    >
                        {isTextExpanded ? 'Ler menos' : 'Ler mais'}
                    </button>
                )}

     {/* RODAPÉ DO CARD (LOGO + NOME) */}
<div className="flex items-center gap-6 justify-start border-t border-brand-text/5 pt-6 lg:pt-8 mt-auto">
    
    {/* CONTAINER DA LOGO 
        Lógica: Se for ID 2, a caixa é consideravelmente maior (w-24/w-32).
        Caso contrário, mantém o tamanho padrão (w-16/w-20).
    */}
    <div className={`
        shrink-0 rounded-2xl border-2 border-[#872a8c]/30 bg-white 
        flex items-center justify-center overflow-hidden shadow-md transition-all duration-500
        ${testimonial.id === 2 
            ? 'w-24 h-20 lg:w-32 lg:h-22' 
            : 'w-16 h-16 lg:w-20 lg:h-20'
        }
    `}>
        <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            /* Para a Condogold (ID 2), removemos o padding (p-0) e 
               aplicamos um scale para a logo encostar nas bordas da caixa maior.
            */
            className={`w-full h-full object-contain ${
                testimonial.id === 2 ? 'scale-[1.3] p-0' : 'p-3'
            }`} 
        />
    </div>

    <div className="text-left">
        <div className={`font-bold text-brand-text ${testimonial.id === 2 ? 'text-base lg:text-xl' : 'text-sm lg:text-base'}`}>
            {testimonial.name}
        </div>
        <div className="text-[#872a8c] text-[10px] lg:text-xs font-bold uppercase tracking-wider">
            {testimonial.role}
        </div>
    </div>
</div>
                        </div>
                        </div>
                      </div>
               
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                <button onClick={prevTestimonial} className="p-3 rounded-full hover:bg-brand-text/5 text-brand-text/70 hover:text-brand-text transition-colors z-40"><ChevronLeft size={24} /></button>
                <div className="flex gap-2 z-40">{testimonialsData.map((_, i) => (<div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-[#872a8c]' : 'w-2 bg-brand-text/20'}`} />))}</div>
                <button onClick={nextTestimonial} className="p-3 rounded-full hover:bg-brand-text/5 text-brand-text/70 hover:text-brand-text transition-colors z-40"><ChevronRight size={24} /></button>
              </div>
            </div>
          </section>

        </main>

      {/* --- POPUP DE CHAT PEQUENO --- */}
{/* --- POPUP DE ATENDIMENTO --- */}
<div className={`fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-[calc(100%-32px)] lg:w-80 glass-card p-5 rounded-2xl z-40 transition-all duration-500 border border-brand-text/10 shadow-2xl bg-brand-bg/90 backdrop-blur-xl ${
    showPopup 
    ? 'translate-y-0 opacity-100' 
    : 'translate-y-10 opacity-0 pointer-events-none'
}`}>
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-10 rounded-full bg-[#872a8c] flex items-center justify-center text-white shadow-lg animate-pulse-slow"><Rocket size={20} /></div>
    <div>
      <h4 className="font-bold text-brand-text text-sm">Fale Conosco</h4>
      <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#38c88a] animate-pulse"></span><p className="text-[10px] text-brand-text/70 uppercase">Online agora</p></div>
    </div>
  </div>

  <p className="text-xs text-brand-text/80 mb-4 leading-relaxed">Tem alguma dúvida sobre o sistema? Chame um consultor agora mesmo.</p>

  {/* NOVA LÓGICA DO BOTÃO: Redirecionamento Direto */}
  <button 
    onClick={() => window.open('https://wa.me/554132238793?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.', '_blank')} 
    className="w-full py-2.5 bg-brand-text/5 hover:bg-[#872a8c] text-center rounded-lg text-xs font-bold text-brand-text hover:text-white transition-all flex items-center justify-center gap-2"
  >
      <MessageSquare size={14} /> Chamar no WhatsApp
  </button>
</div>

        {/* --- MODAL DE SELEÇÃO (TRIAGEM) --- 
        {isSelectionModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in">
              <div className="w-full max-w-sm bg-[#0F172A] border border-brand-text/10 rounded-3xl shadow-2xl overflow-hidden relative">
                  <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                          <h3 className="text-xl font-bold text-white">Como podemos ajudar?</h3>
                          <button onClick={() => setIsSelectionModalOpen(false)} className="text-white/60 hover:text-white"><X size={20}/></button>
                      </div>
                      <div className="space-y-3">
                          <button onClick={() => handleStartChat('comercial')} className="w-full p-4 rounded-xl bg-brand-text/5 hover:bg-[#872a8c]/10 border border-brand-text/10 hover:border-[#872a8c]/30 flex items-center gap-4 transition-all group text-left">
                              <div className="w-10 h-10 rounded-full bg-[#4a90e2]/10 text-[#4a90e2] flex items-center justify-center group-hover:scale-110 transition-transform"><Building2 size={20} /></div>
                              <div><h4 className="font-bold text-sm text-brand-text group-hover:text-[#4a90e2]">Dono / Parceiro</h4><p className="text-xs text-brand-muted">Quero conhecer a Vouch</p></div>
                          </button>
                          <button onClick={() => handleStartChat('tecnico')} className="w-full p-4 rounded-xl bg-brand-text/5 hover:bg-[#872a8c]/10 border border-brand-text/10 hover:border-[#872a8c]/30 flex items-center gap-4 transition-all group text-left">
                              <div className="w-10 h-10 rounded-full bg-[#38c88a]/10 text-[#38c88a] flex items-center justify-center group-hover:scale-110 transition-transform"><Wrench size={20} /></div>
                              <div><h4 className="font-bold text-sm text-brand-text group-hover:text-[#38c88a]">Dúvida Técnica</h4><p className="text-xs text-brand-muted">Suporte e Integração</p></div>
                          </button>
                          <button onClick={() => handleStartChat('cliente')} className="w-full p-4 rounded-xl bg-brand-text/5 hover:bg-[#872a8c]/10 border border-brand-text/10 hover:border-[#872a8c]/30 flex items-center gap-4 transition-all group text-left">
                              <div className="w-10 h-10 rounded-full bg-[#872a8c]/10 text-[#872a8c] flex items-center justify-center group-hover:scale-110 transition-transform"><User size={20} /></div>
                              <div><h4 className="font-bold text-sm text-brand-text group-hover:text-[#872a8c]">Sou Condômino</h4><p className="text-xs text-brand-muted">Cliente de Garantidora</p></div>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        )}

        {/* --- MODAL DO CHATBOT --- 
        {isChatModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center p-4 animate-fade-in">
              <div className="w-full max-w-md bg-[#0F172A] border border-brand-text/10 rounded-3xl shadow-2xl flex flex-col h-[80vh] lg:h-[600px] overflow-hidden relative">
                  <div className="bg-gradient-to-r from-[#872a8c] to-[#4a90e2] p-4 flex items-center justify-between shadow-lg z-10">
                      <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/30 backdrop-blur-sm"><Bot size={24} /></div>
                          <div>
                              <h3 className="font-bold text-white text-sm">Vouch AI Assistant</h3>
                              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#38c88a] animate-pulse"></span><span className="text-[10px] text-white/80">Online</span></div>
                          </div>
                      </div>
                      <button onClick={() => setIsChatModalOpen(false)} className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"><X size={20} /></button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-bg/50 scrollbar-thin">
                      {messages.map((msg) => (
                          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm break-words whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-[#872a8c] text-white rounded-br-none' : 'bg-brand-text/5 border border-brand-text/10 text-brand-text rounded-bl-none'}`}>
                                  {msg.text}
                              </div>
                          </div>
                      ))}
                      {isTyping && (
                          <div className="flex justify-start">
                              <div className="bg-brand-text/5 border border-brand-text/10 p-4 rounded-2xl rounded-bl-none flex gap-1.5 items-center w-16">
                                  <div className="w-1.5 h-1.5 bg-brand-text/40 rounded-full typing-dot"></div>
                                  <div className="w-1.5 h-1.5 bg-brand-text/40 rounded-full typing-dot"></div>
                                  <div className="w-1.5 h-1.5 bg-brand-text/40 rounded-full typing-dot"></div>
                              </div>
                          </div>
                      )}
                      <div ref={chatEndRef} />
                  </div>
                  <div className="p-4 border-t border-brand-text/10 bg-brand-bg">
                      <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(chatInput); }} className="flex items-center gap-2 bg-brand-text/5 rounded-full px-4 py-2 border border-brand-text/10 focus-within:border-[#872a8c]/50 transition-colors">
                          <input type="text" placeholder="Digite sua mensagem..." className="flex-1 bg-transparent outline-none text-sm text-brand-text placeholder:text-brand-muted" value={chatInput} onChange={(e) => setChatInput(e.target.value)} />
                          <button type="submit" className="p-2 bg-[#872a8c] rounded-full text-white hover:scale-105 transition-transform disabled:opacity-50" disabled={!chatInput.trim()}><Send size={16} /></button>
                      </form>
                  </div>
              </div>
          </div>
        )}
      */}
      
      </div>
    );
  }

  export default Home;