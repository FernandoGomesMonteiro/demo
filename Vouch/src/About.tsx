import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { 
  Users, MapPin, Pause, Play, BarChart3, 
  Code2, Cpu, Globe2, ShieldCheck, 
  Database, Lock, Zap, Server, Layers, GitBranch, Key
} from 'lucide-react';

// --- CONFIGURAÇÃO ---
const BRAZIL_GEO_URL = "/brazil.json";

const locations = [
  { 
    id: "SP", 
    name: "São Paulo", 
    type: "Headquarters",
    stats: { clientes: "85+", valor: "R$ 22M" }, 
    desc: "Nossa matriz tecnológica. Onde o core da Vouch é desenvolvido." 
  },
  { 
    id: "PR", 
    name: "Paraná", 
    type: "Inovação",
    stats: { clientes: "35+", valor: "R$ 8M" }, 
    desc: "Berço de novas features e laboratório de testes." 
  },
  { 
    id: "RJ", 
    name: "Rio de Janeiro", 
    type: "Comercial",
    stats: { clientes: "40+", valor: "R$ 12M" }, 
    desc: "Operação estratégica focada na zona sul." 
  },
  { 
    id: "PE", 
    name: "Pernambuco", 
    type: "Expansão NE",
    stats: { clientes: "20+", valor: "R$ 5M" }, 
    desc: "A região que mais cresce em garantidoras digitais." 
  },
  { 
    id: "DF", 
    name: "Distrito Federal", 
    type: "Governo",
    stats: { clientes: "15+", valor: "R$ 3M" }, 
    desc: "Foco em condomínios de alto padrão e associações." 
  }
];

// --- DADOS DO SLOT MACHINE ---
const slotColumns = [
  [
    { icon: Code2, title: "Clean Code", sub: "Arquitetura Sólida" },
    { icon: GitBranch, title: "Git Flow", sub: "CI/CD Pipeline" },
    { icon: Layers, title: "Scalable", sub: "Microsserviços" },
    { icon: Code2, title: "Clean Code", sub: "Arquitetura Sólida" }, 
  ],
  [
    { icon: Cpu, title: "AI Driven", sub: "Algoritmos Vouch" },
    { icon: Zap, title: "Fast API", sub: "Baixa Latência" },
    { icon: BarChart3, title: "Analytics", sub: "Real-time Data" },
    { icon: Cpu, title: "AI Driven", sub: "Algoritmos Vouch" },
  ],
  [
    { icon: ShieldCheck, title: "Security", sub: "ISO 27001" },
    { icon: Key, title: "Encryption", sub: "Ponta a Ponta" },
    { icon: Lock, title: "GDPR/LGPD", sub: "Compliance" },
    { icon: ShieldCheck, title: "Security", sub: "ISO 27001" },
  ],
  [
    { icon: Globe2, title: "Cloud Native", sub: "AWS Infra" },
    { icon: Server, title: "Uptime", sub: "99.9% SLA" },
    { icon: Database, title: "Backup", sub: "Redundância" },
    { icon: Globe2, title: "Cloud Native", sub: "AWS Infra" },
  ]
];

function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const currentLocation = locations[activeIndex];

  // --- CONTROLE DO CARROSSEL MAPA ---
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % locations.length);
      }, 5000); 
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="text-brand-text antialiased font-sans selection:bg-brand-primary pt-32 pb-20 transition-colors duration-500 min-h-screen flex flex-col justify-center">
      
      {/* Background Noise */}
      <div className="bg-noise opacity-50 mix-blend-overlay pointer-events-none fixed inset-0"></div>

      {/* --- ESTILOS: ANIMAÇÃO SINCRONIZADA --- */}
      <style>{`
        @keyframes slot-scroll-pause {
          /* Item 1: Fica parado */
          0%, 20% { transform: translateY(0); }
          
          /* Move para Item 2 e para */
          25%, 45% { transform: translateY(-25%); }
          
          /* Move para Item 3 e para */
          50%, 70% { transform: translateY(-50%); }
          
          /* Move para Item 4 (Clone do 1) e termina */
          75%, 100% { transform: translateY(-75%); }
        }

        .animate-slot {
          /* Duração total do ciclo: 8 segundos
             Todos usam a mesma animação, sem delays, garantindo sincronia total.
          */
          animation: slot-scroll-pause 8s cubic-bezier(0.8, 0, 0.2, 1) infinite;
        }
      `}</style>

      <main className="container mx-auto px-6 relative z-10">

        {/* --- SEÇÃO: EQUIPE & TECNOLOGIA --- */}
        <section className="relative mb-32 pt-10 pb-20 border-b border-brand-text/5">
          
          {/* Luz de Fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-text/5 border border-brand-text/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
              <span className="text-xs font-mono text-brand-muted uppercase tracking-widest">Vouch Core Team</span>
            </div>

            {/* Título */}
            <h2 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter leading-tight">
              Engenharia que <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary">
                Impulsiona Resultados
              </span>
            </h2>

            {/* Texto */}
            <p className="text-xl text-brand-muted leading-relaxed max-w-3xl mx-auto font-light">
              Somos um coletivo multidisciplinar unindo robustez técnica e UX intuitiva.
            </p>

            {/* --- SLOT MACHINE GRID (SINCRONIZADO) --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 h-[220px]">
              {slotColumns.map((col, colIndex) => (
                <div 
                  key={colIndex} 
                  className="relative overflow-hidden rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 shadow-inner"
                >
                  {/* Máscaras de Fade */}
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-brand-bg to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brand-bg to-transparent z-10 pointer-events-none"></div>

                  {/* A Faixa que Rola e Para */}
                  <div className="animate-slot flex flex-col">
                    {col.map((item, itemIndex) => (
                      <div key={itemIndex} className="h-[180px] flex flex-col items-center justify-center p-6 text-center shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-brand-text/5 flex items-center justify-center mb-3 text-brand-primary">
                          <item.icon size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-brand-text">{item.title}</h3>
                        <p className="text-xs text-brand-muted uppercase tracking-wider mt-1 opacity-70">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* --- HEADER DO MAPA --- */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Ecossistema Vouch
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black text-brand-text tracking-tight">
            Nossa Atuação <span className="text-brand-primary">Nacional</span>
          </h1>
        </div>

        {/* --- MAPA E CARD --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-24">
          
          {/* ESQUERDA: O MAPA */}
          <div className="w-full lg:w-3/5 h-[400px] lg:h-[600px] relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
             <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 900, center: [-52, -15] }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={BRAZIL_GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isSelected = geo.properties.sigla === currentLocation.id || geo.id === currentLocation.id;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: isSelected ? "var(--map-active)" : "var(--map-fill)",
                            stroke: isSelected ? "var(--map-active)" : "var(--map-stroke)",
                            strokeWidth: isSelected ? 1 : 0.5,
                            outline: "none",
                            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                            filter: isSelected ? "drop-shadow(0 0 15px var(--map-glow))" : "none",
                            zIndex: isSelected ? 10 : 1
                          },
                          hover: { fill: "var(--map-active)", opacity: 0.7, outline: "none", cursor: "pointer", transition: "all 0.3s ease" },
                          pressed: { outline: "none" }
                        }}
                        onClick={() => {
                          const idx = locations.findIndex(l => l.id === geo.properties.sigla);
                          if (idx >= 0) { setActiveIndex(idx); setIsPlaying(false); }
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>

          {/* DIREITA: CARD DE INFORMAÇÃO */}
          <div className="w-full lg:w-2/5">
            <div 
              className="relative rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--card-shadow)' 
              }}
            >
              {isPlaying && (
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-text/5">
                  <div key={activeIndex} className="h-full bg-brand-primary animate-progress-bar origin-left shadow-[0_0_10px_var(--map-active)]"></div>
                </div>
              )}
              <div className="absolute top-6 right-6 flex gap-2 z-20">
                 <div className="flex gap-1 mr-4 items-center">
                    {locations.map((loc, idx) => (
                      <button
                        key={loc.id}
                        onClick={() => { setActiveIndex(idx); setIsPlaying(false); }}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          idx === activeIndex ? 'w-6 bg-brand-primary' : 'w-1.5 bg-brand-text/20 hover:bg-brand-text/50'
                        }`}
                      />
                    ))}
                 </div>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-text/5 hover:bg-brand-text/10 text-brand-muted hover:text-brand-primary transition-all"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
              </div>
              <div className="p-8 md:p-10 flex flex-col h-full min-h-[420px]">
                <div className="flex flex-col gap-1 mb-8 mt-4">
                  <div className="flex items-center gap-3 animate-fade-in" key={`badge-${activeIndex}`}>
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <MapPin size={16} />
                    </span>
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                      {currentLocation.type}
                    </p>
                  </div>
                  <h2 className="text-4xl font-black text-brand-text tracking-tight animate-fade-in-up" key={`title-${activeIndex}`}>
                    {currentLocation.name}
                  </h2>
                </div>
                <div className="flex-1 mb-8">
                  <p key={`desc-${activeIndex}`} className="text-lg text-brand-muted leading-relaxed font-light animate-fade-in">
                    {currentLocation.desc}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group overflow-hidden rounded-2xl bg-brand-text/[0.03] border border-brand-text/[0.05] p-5 hover:bg-brand-text/[0.05] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 text-brand-muted text-[10px] uppercase font-bold tracking-wider">
                      <Users size={12} className="text-brand-primary" /> Carteira Ativa
                    </div>
                    <p key={`s1-${activeIndex}`} className="text-2xl font-bold text-brand-text animate-fade-in">
                      {currentLocation.stats.clientes}
                    </p>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl bg-brand-text/[0.03] border border-brand-text/[0.05] p-5 hover:bg-brand-text/[0.05] transition-all duration-300">
                     <div className="flex items-center gap-2 mb-2 text-brand-muted text-[10px] uppercase font-bold tracking-wider">
                      <BarChart3 size={12} className="text-brand-primary" /> Volume / Mês
                    </div>
                    <p key={`s2-${activeIndex}`} className="text-2xl font-bold text-brand-text animate-fade-in">
                      {currentLocation.stats.valor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;