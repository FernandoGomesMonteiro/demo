import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { 
  Users, MapPin, Pause, Play, BarChart3, 
  Code2, Cpu, Globe2, ShieldCheck, 
  Database, Lock, Zap, Server, Layers, GitBranch, Key, 
  ArrowUpRight
} from 'lucide-react';

// --- CONFIGURAÇÃO ---
const BRAZIL_GEO_URL = "/brazil.json";

// Mapeamento de Estados para Regiões
const stateToRegion: { [key: string]: string } = {
  SP: "SUDESTE", RJ: "SUDESTE", MG: "SUDESTE", ES: "SUDESTE",
  PR: "SUL", SC: "SUL", RS: "SUL",
  BA: "NORDESTE", PE: "NORDESTE", CE: "NORDESTE", RN: "NORDESTE", PB: "NORDESTE",
  DF: "CENTRO_OESTE", GO: "CENTRO_OESTE", MT: "CENTRO_OESTE", MS: "CENTRO_OESTE",
  AM: "NORTE", PA: "NORTE"
};

// Coordenadas dos Centros dos Estados
const stateCenters = [
  { id: "AC", coords: [-70.81, -9.02] }, { id: "AL", coords: [-36.69, -9.57] },
  { id: "AP", coords: [-51.77, 1.41] }, { id: "AM", coords: [-64.75, -3.46] },
  { id: "BA", coords: [-41.70, -12.57] }, { id: "CE", coords: [-39.69, -5.20] },
  { id: "DF", coords: [-47.86, -15.83] }, { id: "ES", coords: [-40.30, -19.18] },
  { id: "GO", coords: [-49.83, -15.82] }, { id: "MA", coords: [-45.30, -5.42] },
  { id: "MT", coords: [-55.48, -12.64] }, { id: "MS", coords: [-54.54, -20.51] },
  { id: "MG", coords: [-44.38, -18.10] }, { id: "PA", coords: [-52.29, -3.79] },
  { id: "PB", coords: [-36.71, -7.28] }, { id: "PR", coords: [-51.55, -24.89] },
  { id: "PE", coords: [-37.99, -8.38] }, { id: "PI", coords: [-42.49, -7.38] },
  { id: "RJ", coords: [-42.28, -22.84] }, { id: "RN", coords: [-36.52, -5.81] },
  { id: "RS", coords: [-53.30, -30.17] }, { id: "RO", coords: [-62.80, -10.83] },
  { id: "RR", coords: [-61.22, 2.05] }, { id: "SC", coords: [-50.49, -27.06] },
  { id: "SP", coords: [-48.60, -22.30] }, { id: "SE", coords: [-37.38, -10.57] },
  { id: "TO", coords: [-48.29, -9.86] }
];

const locations = [
  { 
    id: "SUDESTE", 
    name: "Região Sudeste", 
    type: "Headquarters & Comercial",
    stats: { clientes: "120+", valor: "R$ 35M" }, 
    desc: "O coração financeiro do Brasil e nossa base de operações. Alta densidade de condomínios.",
    states: ["SP", "RJ", "MG", "ES"],
  },
  { 
    id: "SUL", 
    name: "Região Sul", 
    type: "Inovação & Tech",
    stats: { clientes: "65+", valor: "R$ 15M" }, 
    desc: "Polo de tecnologia e inovação. Nossa equipe de desenvolvimento está fortemente presente aqui.",
    states: ["PR", "SC", "RS"],
  },
  { 
    id: "NORDESTE", 
    name: "Região Nordeste", 
    type: "Expansão Acelerada",
    stats: { clientes: "45+", valor: "R$ 10M" }, 
    desc: "Mercado em rápida expansão com grande demanda por digitalização de processos.",
    states: ["BA", "PE", "CE", "RN", "PB"],
  },
  { 
    id: "CENTRO_OESTE", 
    name: "Centro-Oeste", 
    type: "Governo & Agronegócio",
    stats: { clientes: "30+", valor: "R$ 8M" }, 
    desc: "Foco em grandes condomínios horizontais e associações ligadas ao agronegócio.",
    states: ["DF", "GO", "MT"],
  }
];

// --- SLOT MACHINE DATA (Adaptado para usar Primary/Secondary do CSS) ---
const slotColumns = [
  [
    { icon: Code2, title: "Clean Code", sub: "Arquitetura Sólida", colorClass: "text-brand-primary", bgClass: "bg-brand-primary/10", borderClass: "border-brand-primary/30" },
    { icon: GitBranch, title: "Git Flow", sub: "CI/CD Pipeline", colorClass: "text-brand-primary", bgClass: "bg-brand-primary/10", borderClass: "border-brand-primary/30" },
    { icon: Layers, title: "Scalable", sub: "Microsserviços", colorClass: "text-brand-primary", bgClass: "bg-brand-primary/10", borderClass: "border-brand-primary/30" },
    { icon: Code2, title: "Clean Code", sub: "Arquitetura Sólida", colorClass: "text-brand-primary", bgClass: "bg-brand-primary/10", borderClass: "border-brand-primary/30" }, 
  ],
  [
    { icon: Cpu, title: "AI Driven", sub: "Algoritmos Vouch", colorClass: "text-brand-secondary", bgClass: "bg-brand-secondary/10", borderClass: "border-brand-secondary/30" },
    { icon: Zap, title: "Fast API", sub: "Baixa Latência", colorClass: "text-brand-secondary", bgClass: "bg-brand-secondary/10", borderClass: "border-brand-secondary/30" },
    { icon: BarChart3, title: "Analytics", sub: "Real-time Data", colorClass: "text-brand-secondary", bgClass: "bg-brand-secondary/10", borderClass: "border-brand-secondary/30" },
    { icon: Cpu, title: "AI Driven", sub: "Algoritmos Vouch", colorClass: "text-brand-secondary", bgClass: "bg-brand-secondary/10", borderClass: "border-brand-secondary/30" },
  ],
  [
    { icon: ShieldCheck, title: "Security", sub: "ISO 27001", colorClass: "text-brand-primary", bgClass: "bg-brand-primary/10", borderClass: "border-brand-primary/30" },
    { icon: Key, title: "Encryption", sub: "Ponta a Ponta", colorClass: "text-brand-primary", bgClass: "bg-brand-primary/10", borderClass: "border-brand-primary/30" },
    { icon: Lock, title: "GDPR/LGPD", sub: "Compliance", colorClass: "text-brand-primary", bgClass: "bg-brand-primary/10", borderClass: "border-brand-primary/30" },
    { icon: ShieldCheck, title: "Security", sub: "ISO 27001", colorClass: "text-brand-primary", bgClass: "bg-brand-primary/10", borderClass: "border-brand-primary/30" },
  ],
  [
    { icon: Globe2, title: "Cloud Native", sub: "AWS Infra", colorClass: "text-brand-secondary", bgClass: "bg-brand-secondary/10", borderClass: "border-brand-secondary/30" },
    { icon: Server, title: "Uptime", sub: "99.9% SLA", colorClass: "text-brand-secondary", bgClass: "bg-brand-secondary/10", borderClass: "border-brand-secondary/30" },
    { icon: Database, title: "Backup", sub: "Redundância", colorClass: "text-brand-secondary", bgClass: "bg-brand-secondary/10", borderClass: "border-brand-secondary/30" },
    { icon: Globe2, title: "Cloud Native", sub: "AWS Infra", colorClass: "text-brand-secondary", bgClass: "bg-brand-secondary/10", borderClass: "border-brand-secondary/30" },
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
    <div className="text-brand-text antialiased font-sans selection:bg-brand-primary selection:text-white pt-24 pb-12 lg:pt-32 lg:pb-20 transition-colors duration-500 min-h-screen flex flex-col justify-center overflow-x-hidden w-full">
      
      {/* Background Noise */}
      <div className="bg-noise opacity-50 mix-blend-overlay pointer-events-none fixed inset-0"></div>

      <style>{`
        @keyframes slot-scroll-pause {
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 100% { transform: translateY(-75%); }
        }
        .animate-slot {
          animation: slot-scroll-pause 8s cubic-bezier(0.8, 0, 0.2, 1) infinite;
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      <main className="container mx-auto px-6 relative z-10">

        {/* --- SEÇÃO 1: NARRATIVA & IMAGEM --- */}
        <section className="relative mb-24 pt-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-brand-primary/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none -z-10"></div>

          {/* BLOCO DE TEXTO NARRATIVO */}
          <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                Nossa Filosofia
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-brand-text tracking-tight leading-tight mb-8 md:mb-10 animate-fade-in-up">
                Reescrevendo a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary">
                  História das Garantias
                </span>
              </h1>

              <div className="space-y-6 text-base md:text-lg lg:text-xl text-brand-muted leading-relaxed font-light animate-fade-in-up animation-delay-200 text-justify">
                <p>
                  Nascemos de uma inquietação profunda: o mercado financeiro evoluía na velocidade da luz, enquanto a gestão de garantias permanecia ancorada em processos manuais, planilhas frágeis e sistemas desconectados.
                </p>
                <p>
                  A Vouch não é apenas uma empresa de software. Somos um coletivo de engenheiros, especialistas financeiros e designers obcecados por simplificar o complexo. Nossa missão é construir a ponte definitiva entre a robustez bancária necessária e a experiência humana intuitiva que sua equipe merece.
                </p>
                <p className="text-brand-text font-medium text-justify">
                  Não focamos em métricas de vaidade, mas no impacto real: libertar garantidoras para crescerem sem amarras operacionais, com a certeza absoluta de que sua infraestrutura é inabalável.
                </p>
              </div>
          </div>

          {/* IMAGEM IMPACTANTE */}
          <div className="relative w-full max-w-full md:max-w-[90%] mx-auto h-[300px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-brand-text/10 group animate-fade-in-up animation-delay-500">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/30 via-transparent to-brand-secondary/20 opacity-60 mix-blend-overlay z-10 pointer-events-none"></div>
             <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

             <img
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
               alt="Coletivo Vouch"
               className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0"
             />

             <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-brand-bg to-transparent z-20 flex justify-between items-end">
                 <div>
                   <p className="text-xs md:text-sm font-mono text-brand-secondary uppercase tracking-widest mb-1 md:mb-2">Vouch HQ • Brasil</p>
                   <p className="text-lg md:text-2xl font-bold text-white max-w-md leading-tight">Onde a inovação encontra a execução disciplinada.</p>
                 </div>
                 <div className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md items-center justify-center text-white border border-white/20">
                    <ArrowUpRight />
                 </div>
             </div>
          </div>

          {/* --- CAÇA-NÍQUEL (SLOT MACHINE) --- */}
          <div className="hidden md:block mt-24 border-t border-brand-text/5 pt-16 relative z-20">
             <p className="text-center text-xs font-mono text-brand-muted uppercase tracking-widest mb-10 opacity-60">O Motor da Nossa Plataforma</p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[280px] md:h-[180px]">
              {slotColumns.map((col, colIndex) => (
                <div key={colIndex} className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-brand-text/[0.02] border border-brand-text/5 hover:border-brand-text/20 transition-colors shadow-sm w-full">
                  
                  <div className="absolute top-0 left-0 w-full h-8 md:h-16 bg-gradient-to-b from-brand-bg to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-full h-8 md:h-16 bg-gradient-to-t from-brand-bg to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="animate-slot flex flex-col w-full relative z-0">
                    {col.map((item, itemIndex) => (
                      <div key={itemIndex} className="h-[280px] md:h-[180px] flex flex-col items-center justify-center p-4 md:p-6 text-center shrink-0 w-full">
                        <div 
                          className={`w-14 h-14 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-3 border opacity-80 ${item.colorClass} ${item.bgClass} ${item.borderClass}`}
                        >
                          <item.icon size={28} className="md:w-6 md:h-6" />
                        </div>
                        <h3 className="font-bold text-xl md:text-lg text-brand-text">{item.title}</h3>
                        <p className="text-sm md:text-xs text-brand-muted uppercase tracking-wider mt-2 md:mt-1 opacity-70">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- HEADER DO MAPA --- */}
        <div className="text-center mb-12 lg:mb-20 pt-10 border-t border-brand-text/5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
            Ecossistema Vouch
          </div>
          <h1 className="font-heading text-3xl md:text-6xl font-black text-brand-text tracking-tight">
            Nossa Atuação <span className="text-brand-secondary">Regional</span>
          </h1>
        </div>

        {/* --- MAPA E CARD --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24 mb-20 relative z-10">
          
          {/* ESQUERDA: O MAPA --- AGORA USANDO CSS VARS CORRETAS */}
          <div className="w-full lg:w-3/5 h-[300px] md:h-[400px] lg:h-[600px] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-brand-secondary/5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none"></div>
             <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 900, center: [-52, -15] }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={BRAZIL_GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateSigla = geo.properties.sigla;
                    const regionId = stateToRegion[stateSigla];
                    const isSelected = regionId === currentLocation.id;
                    
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            // USA A VARIÁVEL CSS DIRETAMENTE
                            fill: isSelected ? "var(--map-active)" : "var(--map-fill)",
                            stroke: isSelected ? "var(--map-active)" : "var(--map-stroke)",
                            strokeWidth: isSelected ? 1 : 0.5,
                            outline: "none",
                            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                            // USA O GLOW DA VARIÁVEL
                            filter: isSelected ? "drop-shadow(0 0 15px var(--map-glow))" : "none",
                            zIndex: isSelected ? 10 : 1
                          },
                          // Hover State usando a variável CSS
                          hover: { 
                            fill: "var(--map-active)", 
                            opacity: 0.8, 
                            outline: "none", 
                            cursor: "pointer", 
                            transition: "all 0.3s ease" 
                          },
                          pressed: { outline: "none" }
                        }}
                        onClick={() => {
                          if (regionId) {
                            const idx = locations.findIndex(l => l.id === regionId);
                            if (idx >= 0) { setActiveIndex(idx); setIsPlaying(false); }
                          }
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* RÓTULOS */}
              {stateCenters.map((state) => (
                <Marker key={state.id} coordinates={state.coords as [number, number]}>
                  <text
                    textAnchor="middle"
                    y={2}
                    style={{
                      fontFamily: "system-ui",
                      fill: "rgb(var(--color-text))", // Usa a variável de texto
                      fontSize: "8px",
                      fontWeight: "bold",
                      opacity: 0.5,
                      pointerEvents: "none"
                    }}
                    className="hidden md:block"
                  >
                    {state.id}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          {/* DIREITA: CARD DE INFORMAÇÃO */}
          <div className="w-full lg:w-2/5">
            <div 
              className="relative rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300"
              style={{ 
                // CARD AGORA SEGUE O TEMA
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--card-shadow)' 
              }}
            >
              {isPlaying && (
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-text/5">
                  <div key={activeIndex} className="h-full bg-brand-secondary animate-progress-bar origin-left shadow-[0_0_10px_var(--map-active)]"></div>
                </div>
              )}
              
              <div className="absolute top-6 right-6 flex gap-2 z-20">
                 <div className="flex gap-1 mr-4 items-center">
                    {locations.map((loc, idx) => (
                      <button
                        key={loc.id}
                        onClick={() => { setActiveIndex(idx); setIsPlaying(false); }}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          idx === activeIndex ? 'w-6 bg-brand-secondary' : 'w-1.5 bg-brand-text/20 hover:bg-brand-text/50'
                        }`}
                      />
                    ))}
                 </div>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-text/5 hover:bg-brand-text/10 text-brand-muted hover:text-brand-secondary transition-all"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
              </div>

              <div className="p-6 md:p-10 flex flex-col h-full min-h-[400px] md:min-h-[500px]">
                
                <div className="flex flex-col gap-1 mb-6 mt-4">
                  <div className="flex items-center gap-3 animate-fade-in" key={`badge-${activeIndex}`}>
                    <span className="w-8 h-8 rounded-lg bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                      <MapPin size={16} />
                    </span>
                    <p className="text-xs font-bold text-brand-secondary uppercase tracking-widest">
                      {currentLocation.type}
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-brand-text tracking-tight animate-fade-in-up" key={`title-${activeIndex}`}>
                    {currentLocation.name}
                  </h2>
                </div>

                <div className="mb-6 animate-fade-in" key={`desc-${activeIndex}`}>
                  <p className="text-base text-brand-muted leading-relaxed font-light mb-4 text-justify">
                    {currentLocation.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentLocation.states?.map((uf) => (
                      <span key={uf} className="px-2 py-1 rounded bg-brand-text/5 text-[10px] uppercase font-bold text-brand-text tracking-wider border border-brand-text/10">
                        {uf}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="relative group overflow-hidden rounded-2xl bg-brand-text/[0.03] border border-brand-text/[0.05] p-4 md:p-5 hover:bg-brand-text/[0.05] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 text-brand-muted text-[10px] uppercase font-bold tracking-wider">
                      <Users size={12} className="text-brand-primary" /> Carteira Ativa
                    </div>
                    <p key={`s1-${activeIndex}`} className="text-xl md:text-2xl font-bold text-brand-text animate-fade-in">
                      {currentLocation.stats.clientes}
                    </p>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl bg-brand-text/[0.03] border border-brand-text/[0.05] p-4 md:p-5 hover:bg-brand-text/[0.05] transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2 text-brand-muted text-[10px] uppercase font-bold tracking-wider">
                      <BarChart3 size={12} className="text-brand-secondary" /> Volume / Mês
                    </div>
                    <p key={`s2-${activeIndex}`} className="text-xl md:text-2xl font-bold text-brand-text animate-fade-in">
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