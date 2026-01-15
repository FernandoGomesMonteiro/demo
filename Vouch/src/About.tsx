import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { 
  Building2, TrendingUp, ArrowRight, 
  Server, ShieldCheck, MapPin, Users, MousePointer2
} from 'lucide-react';

// --- CONFIGURAÇÃO ---
const BRAZIL_GEO_URL = "/brazil.json";

const markers = [
  { 
    id: 1, 
    name: "São Paulo (HQ)", 
    coordinates: [-46.6333, -23.5505], 
    stats: { clientes: "85+", valor: "R$ 22M" }, 
    desc: "Matriz tecnológica." 
  },
  { 
    id: 2, 
    name: "Rio de Janeiro", 
    coordinates: [-43.1729, -22.9068], 
    stats: { clientes: "40+", valor: "R$ 12M" }, 
    desc: "Operação comercial." 
  },
  { 
    id: 3, 
    name: "Curitiba", 
    coordinates: [-49.2733, -25.4284], 
    stats: { clientes: "35+", valor: "R$ 8M" }, 
    desc: "Hub de inovação." 
  },
  { 
    id: 4, 
    name: "Recife", 
    coordinates: [-34.8770, -8.0476], 
    stats: { clientes: "20+", valor: "R$ 5M" }, 
    desc: "Expansão Nordeste." 
  },
  { 
    id: 5, 
    name: "Brasília", 
    coordinates: [-47.8919, -15.7975], 
    stats: { clientes: "15+", valor: "R$ 3M" }, 
    desc: "Foco governamental." 
  }
];

function About() {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const currentLoc = markers.find(m => m.id === activeMarker);

  return (
    <div className="text-brand-text antialiased font-sans selection:bg-brand-primary pt-32 pb-20 transition-colors duration-500">
      
      {/* Texture Noise */}
      <div className="bg-noise"></div>

      {/* --- SOLUÇÃO DO DARK MODE ---
          Injetamos o CSS aqui dentro para garantir que as variáveis existam.
          Quando o HTML ganhar a classe 'dark', as cores mudam automaticamente.
      */}
      <style>{`
        /* Cores Padrão (Light Mode) */
        :root {
          --map-fill: #e2e8f0;       /* Slate 200 */
          --map-stroke: #cbd5e1;     /* Slate 300 */
          --map-hover-fill: #ede9fe; /* Roxo muito claro */
          --map-hover-stroke: #7c3aed; /* Roxo Brand */
          
          --pin-color: #7c3aed;      /* Roxo Brand */
          --pin-bg: #ffffff;         /* Branco */
          --pin-text: #1e293b;       /* Slate 800 */
        }

        /* Cores Dark Mode (Ativa quando classe .dark existe no HTML) */
        .dark {
          --map-fill: rgba(30, 41, 59, 0.4);   /* Slate 800 Transparente */
          --map-stroke: rgba(148, 163, 184, 0.2); /* Linhas finas */
          --map-hover-fill: rgba(124, 58, 237, 0.15); /* Glow Roxo */
          --map-hover-stroke: #a78bfa; /* Roxo Claro */
          
          --pin-color: #a78bfa;      /* Roxo Neon */
          --pin-bg: #1e293b;         /* Slate 800 */
          --pin-text: #ffffff;       /* Branco */
        }
      `}</style>
      
      

      <main className="container mx-auto px-6">

        {/* --- HERO SECTION --- */}
        <section className="mb-8 text-center">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold uppercase tracking-widest animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              Atuação Nacional
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-black text-brand-text leading-[1] tracking-tighter animate-fade-in-up">
              Conectando o Brasil <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-300% animate-gradient">
                de ponta a ponta.
              </span>
            </h1>
          </div>
        </section>

        {/* --- MAPA INTERATIVO --- */}
        <section className="flex justify-center relative perspective-1000 mb-20">
          
          <div className="w-full max-w-4xl relative h-[550px] md:h-[650px] flex items-center justify-center">
            
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 850,
                center: [-52, -15] 
              }}
              style={{ width: "100%", height: "100%" }}
            >
              {/* DESENHO DOS ESTADOS */}
              <Geographies geography={BRAZIL_GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "var(--map-fill)", 
                          stroke: "var(--map-stroke)",
                          strokeWidth: 0.75,
                          outline: "none",
                          transition: "all 0.5s ease"
                        },
                        hover: {
                          fill: "var(--map-hover-fill)", 
                          stroke: "var(--map-hover-stroke)",
                          strokeWidth: 1,
                          outline: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        },
                        pressed: {
                          fill: "var(--map-stroke)",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* MARCADORES (PONTOS) */}
              {markers.map((marker) => {
                const isActive = activeMarker === marker.id;
                return (
                  <Marker 
                    key={marker.id} 
                    coordinates={marker.coordinates as [number, number]}
                    onMouseEnter={() => setActiveMarker(marker.id)}
                    onClick={() => setActiveMarker(isActive ? null : marker.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <g transform="translate(-12, -24)">
                      {/* Ícone do Pino */}
                      <path 
                        d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                        fill={isActive ? "var(--pin-bg)" : "var(--pin-color)"} 
                        stroke={isActive ? "var(--pin-color)" : "var(--map-fill)"}
                        strokeWidth="1.5"
                        className="transition-all duration-300 drop-shadow-xl"
                        style={{ 
                          transform: isActive ? "scale(1.3) translateY(-4px)" : "scale(1)", 
                          transformOrigin: "center bottom" 
                        }}
                      />
                    </g>
                    
                    {/* Nome da Cidade */}
                    <text
                      textAnchor="middle"
                      y={40}
                      style={{ 
                        fontFamily: "system-ui", 
                        fill: "var(--pin-text)", 
                        fontSize: "12px",
                        fontWeight: "700",
                        textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                        opacity: isActive ? 0 : 0.9,
                        pointerEvents: "none",
                        transition: "all 0.3s"
                      }}
                    >
                      {marker.name.split(" ")[0]}
                    </text>
                  </Marker>
                )
              })}
            </ComposableMap>

            {/* --- CARD DE DETALHES --- */}
            {activeMarker && currentLoc && (
              <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-30 w-72 md:w-80 animate-fade-in-up">
                <div className="glass-card p-6 rounded-2xl border border-brand-text/10 shadow-2xl relative overflow-hidden backdrop-blur-xl bg-brand-bg/90 transition-all duration-300">
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveMarker(null); }}
                    className="absolute top-4 right-4 text-brand-muted hover:text-brand-text transition-colors bg-brand-text/5 hover:bg-brand-text/10 rounded-full p-1"
                  >
                    <ArrowRight size={16} className="rotate-45" />
                  </button>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-text leading-none mb-1">{currentLoc.name}</h3>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                          <p className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">Operação Ativa</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-brand-muted mb-6 leading-relaxed border-l-2 border-brand-primary/30 pl-3">
                      {currentLoc.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-brand-text/5 p-3 rounded-xl border border-brand-text/5 transition-colors">
                        <div className="flex items-center gap-1.5 text-brand-muted text-[10px] uppercase font-bold mb-1">
                          <Users size={12} /> Carteira
                        </div>
                        <p className="text-lg font-bold text-brand-text">{currentLoc.stats.clientes}</p>
                      </div>
                      <div className="bg-brand-text/5 p-3 rounded-xl border border-brand-text/5 transition-colors">
                        <div className="flex items-center gap-1.5 text-brand-muted text-[10px] uppercase font-bold mb-1">
                          <TrendingUp size={12} /> Volume
                        </div>
                        <p className="text-lg font-bold text-brand-text">{currentLoc.stats.valor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hint de UX */}
            {!activeMarker && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 animate-bounce pointer-events-none opacity-60">
                <MousePointer2 size={16} className="text-brand-primary" />
                <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold bg-brand-bg/50 px-3 py-1 rounded-full backdrop-blur-md border border-brand-text/5">
                  Explore o mapa
                </span>
              </div>
            )}

          </div>
        </section>

        {/* --- DADOS DE CONFIANÇA --- */}
        <section className="py-20 bg-brand-text/5 relative -mx-6 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Server, val: "99.9%", label: "Uptime Garantido" },
                { icon: ShieldCheck, val: "ISO 27001", label: "Segurança de Dados" },
                { icon: Building2, val: "24/7", label: "Suporte Especializado" },
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="w-14 h-14 mx-auto bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">{item.val}</h3>
                  <p className="text-brand-muted text-sm uppercase tracking-wider font-bold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default About;