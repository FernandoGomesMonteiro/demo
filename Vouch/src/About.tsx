import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { 
  Users, MapPin, Pause, Play, BarChart3, 
  Code2, Cpu, Globe2, ShieldCheck, 
  Database, Lock, Zap, Server, Layers, GitBranch, Key
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

// Coordenadas dos Centros dos Estados (Para as Siglas)
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

// Coordenadas das Cidades Principais (Para aparecerem ao selecionar)
const cityCoords: { [key: string]: [number, number] } = {
  "São Paulo": [-46.63, -23.55], "Campinas": [-47.06, -22.90], "Rio de Janeiro": [-43.17, -22.90],
  "Belo Horizonte": [-43.93, -19.92], "Vitória": [-40.33, -20.31], "Santos": [-46.33, -23.96],
  "Curitiba": [-49.27, -25.42], "Florianópolis": [-48.54, -27.59], "Porto Alegre": [-51.21, -30.03],
  "Londrina": [-51.15, -23.30], "Joinville": [-48.84, -26.30], "Maringá": [-51.93, -23.42],
  "Salvador": [-38.50, -12.97], "Recife": [-34.87, -8.04], "Fortaleza": [-38.52, -3.73],
  "Natal": [-35.20, -5.79], "João Pessoa": [-34.87, -7.11],
  "Brasília": [-47.88, -15.79], "Goiânia": [-49.26, -16.68], "Cuiabá": [-56.09, -15.60]
};

const locations = [
  { 
    id: "SUDESTE", 
    name: "Região Sudeste", 
    type: "Headquarters & Comercial",
    stats: { clientes: "120+", valor: "R$ 35M" }, 
    desc: "O coração financeiro do Brasil e nossa base de operações. Alta densidade de condomínios.",
    states: ["SP", "RJ", "MG", "ES"],
    cities: ["São Paulo", "Campinas", "Rio de Janeiro", "Belo Horizonte", "Vitória", "Santos"]
  },
  { 
    id: "SUL", 
    name: "Região Sul", 
    type: "Inovação & Tech",
    stats: { clientes: "65+", valor: "R$ 15M" }, 
    desc: "Polo de tecnologia e inovação. Nossa equipe de desenvolvimento está fortemente presente aqui.",
    states: ["PR", "SC", "RS"],
    cities: ["Curitiba", "Florianópolis", "Porto Alegre", "Londrina", "Joinville", "Maringá"]
  },
  { 
    id: "NORDESTE", 
    name: "Região Nordeste", 
    type: "Expansão Acelerada",
    stats: { clientes: "45+", valor: "R$ 10M" }, 
    desc: "Mercado em rápida expansão com grande demanda por digitalização de processos.",
    states: ["BA", "PE", "CE", "RN", "PB"],
    cities: ["Salvador", "Recife", "Fortaleza", "Natal", "João Pessoa"]
  },
  { 
    id: "CENTRO_OESTE", 
    name: "Centro-Oeste", 
    type: "Governo & Agronegócio",
    stats: { clientes: "30+", valor: "R$ 8M" }, 
    desc: "Foco em grandes condomínios horizontais e associações ligadas ao agronegócio.",
    states: ["DF", "GO", "MT"],
    cities: ["Brasília", "Goiânia", "Cuiabá"]
  }
];

// --- SLOT MACHINE DATA ---
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

      <style>{`
        @keyframes slot-scroll-pause {
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 100% { transform: translateY(-75%); }
        }
        .animate-slot {
          animation: slot-scroll-pause 8s cubic-bezier(0.8, 0, 0.2, 1) infinite;
        }
      `}</style>

      <main className="container mx-auto px-6 relative z-10">

        {/* --- SEÇÃO: EQUIPE & TECNOLOGIA --- */}
        <section className="relative mb-32 pt-10 pb-20 border-b border-brand-text/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-text/5 border border-brand-text/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
              <span className="text-xs font-mono text-brand-muted uppercase tracking-widest">Vouch Core Team</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter leading-tight">
              Engenharia que <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary">
                Impulsiona Resultados
              </span>
            </h2>

            <p className="text-xl text-brand-muted leading-relaxed max-w-3xl mx-auto font-light">
              Somos um coletivo multidisciplinar unindo robustez técnica e UX intuitiva.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 h-[220px]">
              {slotColumns.map((col, colIndex) => (
                <div key={colIndex} className="relative overflow-hidden rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 shadow-inner">
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-brand-bg to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brand-bg to-transparent z-10 pointer-events-none"></div>
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
            Nossa Atuação <span className="text-brand-primary">Regional</span>
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
                    const stateSigla = geo.properties.sigla;
                    const regionId = stateToRegion[stateSigla];
                    const isSelected = regionId === currentLocation.id;
                    const isStateInRegion = isSelected;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: isStateInRegion ? "var(--map-active)" : "var(--map-fill)",
                            stroke: isStateInRegion ? "var(--map-active)" : "var(--map-stroke)",
                            strokeWidth: isStateInRegion ? 1 : 0.5,
                            outline: "none",
                            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                            filter: isStateInRegion ? "drop-shadow(0 0 15px var(--map-glow))" : "none",
                            zIndex: isStateInRegion ? 10 : 1
                          },
                          hover: { fill: "var(--map-active)", opacity: 0.7, outline: "none", cursor: "pointer", transition: "all 0.3s ease" },
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

              {/* 1. RÓTULOS DOS ESTADOS (Sempre visíveis, mas sutis) */}
              {stateCenters.map((state) => (
                <Marker key={state.id} coordinates={state.coords as [number, number]}>
                  <text
                    textAnchor="middle"
                    y={2}
                    style={{
                      fontFamily: "system-ui",
                      fill: "var(--color-text)",
                      fontSize: "8px",
                      fontWeight: "bold",
                      opacity: 0.5,
                      pointerEvents: "none"
                    }}
                  >
                    {state.id}
                  </text>
                </Marker>
              ))}

              {/* 2. CIDADES DA REGIÃO ATIVA (Marcadores + Nomes) */}
              {currentLocation.cities.map((city) => {
                const coords = cityCoords[city];
                if (!coords) return null;
                return (
                  <Marker key={city} coordinates={coords}>
                    {/* Ponto */}
                    <circle r={3} fill="#fff" stroke="var(--color-primary)" strokeWidth={2} />
                    {/* Nome da Cidade (Tooltip fixo) */}
                    <text
                      textAnchor="middle"
                      y={-8}
                      style={{
                        fontFamily: "system-ui",
                        fill: "#fff",
                        fontSize: "10px",
                        fontWeight: "bold",
                        textShadow: "0 1px 4px rgba(0,0,0,0.8)"
                      }}
                    >
                      {city}
                    </text>
                  </Marker>
                );
              })}

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

              <div className="p-8 md:p-10 flex flex-col h-full min-h-[500px]">
                
                <div className="flex flex-col gap-1 mb-6 mt-4">
                  <div className="flex items-center gap-3 animate-fade-in" key={`badge-${activeIndex}`}>
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <MapPin size={16} />
                    </span>
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                      {currentLocation.type}
                    </p>
                  </div>
                  <h2 className="text-3xl font-black text-brand-text tracking-tight animate-fade-in-up" key={`title-${activeIndex}`}>
                    {currentLocation.name}
                  </h2>
                </div>

                <div className="mb-6 animate-fade-in" key={`desc-${activeIndex}`}>
                  <p className="text-base text-brand-muted leading-relaxed font-light mb-4">
                    {currentLocation.desc}
                  </p>
                  
                  {/* Lista de Estados da Região */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentLocation.states?.map((uf) => (
                      <span key={uf} className="px-2 py-1 rounded bg-brand-text/5 text-[10px] uppercase font-bold text-brand-text tracking-wider border border-brand-text/10">
                        {uf}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lista de Cidades Atendidas (Texto) */}
                <div className="mb-8 animate-fade-in delay-100" key={`cities-${activeIndex}`}>
                   <p className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3 flex items-center gap-2">
                     <Globe2 size={12} /> Cidades Hub
                   </p>
                   <div className="flex flex-wrap gap-2">
                      {currentLocation.cities?.map((city) => (
                        <span key={city} className="px-3 py-1.5 rounded-lg bg-brand-primary/5 text-brand-primary text-xs font-semibold">
                          {city}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
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