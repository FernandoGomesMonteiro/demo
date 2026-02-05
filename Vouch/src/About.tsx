import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { 
  MapPin, Pause, Play, 
  ArrowUpRight, CheckCircle2,
  Rocket, ShieldCheck, Handshake, Target, Users
} from 'lucide-react';

// --- CONFIGURAÇÃO ---
const BRAZIL_GEO_URL = "/brazil.json";

// Mapeamento de Estados para Regiões
const stateToRegion: { [key: string]: string } = {
  SP: "SUDESTE", RJ: "SUDESTE", MG: "SUDESTE", ES: "SUDESTE",
  PR: "SUL", SC: "SUL", RS: "SUL",
  BA: "NORDESTE", PE: "NORDESTE", CE: "NORDESTE", RN: "NORDESTE", PB: "NORDESTE", MA: "NORDESTE", AL: "NORDESTE", PI: "NORDESTE", SE: "NORDESTE",
  DF: "CENTRO_OESTE", GO: "CENTRO_OESTE", MT: "CENTRO_OESTE", MS: "CENTRO_OESTE",
  AM: "NORTE", PA: "NORTE", AC: "NORTE"
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
    id: "SUL", 
    name: "Região Sul", 
    type: "Líder em Operações",
    desc: "Nossa maior base instalada, com destaque absoluto para o Paraná e forte presença em Santa Catarina.",
    states: ["PR", "SC", "RS"],
    cities: [
      { name: "Paraná", uf: "PR" },
      { name: "Santa Catarina", uf: "SC" },
      { name: "Rio G. do Sul", uf: "RS" },
    ]
  },
  { 
    id: "SUDESTE", 
    name: "Região Sudeste", 
    type: "Expansão Estratégica",
    desc: "Crescimento acelerado nos maiores centros econômicos do país, com foco em São Paulo e Minas.",
    states: ["SP", "MG", "RJ", "ES"],
    cities: [
      { name: "São Paulo", uf: "SP" },
      { name: "Minas Gerais", uf: "MG" },
      { name: "Rio de Janeiro", uf: "RJ" },
      { name: "Espírito Santo", uf: "ES" },
    ]
  },
  { 
    id: "NORDESTE", 
    name: "Região Nordeste", 
    type: "Mercado Consolidado",
    desc: "Forte atuação no Ceará e Paraíba, levando tecnologia para condomínios de toda a região.",
    states: ["CE", "PB", "PE", "RN", "BA", "PI", "MA", "AL", "SE"],
    cities: [
      { name: "Ceará", uf: "CE" },
      { name: "Paraíba", uf: "PB" },
      { name: "Pernambuco", uf: "PE" },
      { name: "R. G. do Norte", uf: "RN" },
      { name: "Bahia", uf: "BA" },
      { name: "Piauí", uf: "PI" },
      { name: "Maranhão", uf: "MA" },
      { name: "Alagoas", uf: "AL" },
      { name: "Sergipe", uf: "SE" },
    ]
  },
  { 
    id: "CENTRO_OESTE", 
    name: "Centro-Oeste", 
    type: "Alta Demanda",
    desc: "Hubs importantes em Goiás e no Distrito Federal, atendendo grandes condomínios horizontais.",
    states: ["GO", "DF", "MS", "MT"],
    cities: [
      { name: "Goiás", uf: "GO" },
      { name: "Distrito Federal", uf: "DF" },
      { name: "Mato G. do Sul", uf: "MS" },
      { name: "Mato Grosso", uf: "MT" },
    ]
  },
  { 
    id: "NORTE", 
    name: "Região Norte", 
    type: "Novas Fronteiras",
    desc: "Levando a gestão digital para o norte do país, com operações no Pará, Amazonas e Acre.",
    states: ["PA", "AM", "AC"],
    cities: [
      { name: "Pará", uf: "PA" },
      { name: "Amazonas", uf: "AM" },
      { name: "Acre", uf: "AC" },
    ]
  }
];

const allPresenceStates = locations.flatMap(loc => loc.states);


function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const currentLocation = locations[activeIndex];

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
      
      <div className="bg-noise opacity-50 mix-blend-overlay pointer-events-none fixed inset-0"></div>

      <style>{`
        /* VARIÁVEIS CSS PARA O MAPA - RELATIVO AO TEMA */
        :root {
          /* MODO ESCURO (Padrão) */
          --map-fill-default: #a9a9a9;       /* Fundo do estado inativo */
          --map-stroke-default: #67526b;     /* Borda do estado inativo */
          --map-presence: #3c2566;           /* Estados com operação (Lilás Claro) */
          --map-active: #4a90e2;             /* Região Ativa (Azul) */
          --map-glow-active: rgba(74, 144, 226, 0.6);    /* Brilho Ativo */
        }

        .light-mode {
          /* MODO CLARO (Ajuste para fundo branco) */
          --map-fill-default: #e2e8f0;       /* Cinza Claro */
          --map-stroke-default: #cbd5e1;     /* Cinza Médio */
          --map-presence: #b782ca;           /* Estados com operação (Roxo Marca Forte) */
          --map-active: #8265b9;             /* Região Ativa (Azul) */
          --map-glow-active: #8265b9;   /* Brilho Ativo */
        }

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
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: var(--color-muted); border-radius: 4px; opacity: 0.5; }
      `}</style>

      <main className="container mx-auto px-6 relative z-10">

        {/* --- SEÇÃO 1: FILOSOFIA --- */}
        <section className="relative mb-24 pt-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-brand-primary/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none -z-10"></div>

          <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20">
          

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-brand-text tracking-tight leading-tight mb-8 md:mb-10 animate-fade-in-up">
                Reescrevendo a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary">
                  História das Garantias
                </span>
              </h1>

              <div className="space-y-6 text-base md:text-lg lg:text-xl text-brand-muted leading-relaxed font-light animate-fade-in-up animation-delay-200 text-justify">
                <p>
                  Somos uma empresa brasileira pioneira no desenvolvimento de ferramentas em nuvem e tecnologias especializadas para Garantidoras Condominiais. Criamos soluções digitais que tornam a operação mais ágil, segura e inteligente, ajudando gestores a centralizar informações, ganhar eficiência e tomar decisões estratégicas com mais confiança.
                </p>

                <p>
                 Nossa plataforma foi pensada para simplificar processos, reduzir burocracias e otimizar o tempo dos profissionais do setor, permitindo que foquem no que realmente importa: O crescimento e a sustentabilidade do negócio.
              </p>
              
                <p className="text-brand-text font-medium text-justify">
                 Combinamos inovação, inteligência digital e profundo conhecimento do mercado condominial para oferecer uma plataforma robusta, confiável e preparada para as demandas atuais e futuras do setor.
                </p>
              </div>
          </div>
        

          {/* --- SEÇÃO 2: MISSÃO --- */}
          <div className="max-w-4xl mx-auto text-center mb-24">
          
              <h2 className="text-3xl md:text-5xl font-black text-brand-text tracking-tight leading-tight mb-8">
                  Nossa Missão
              </h2>
              
              <div className="p-8 md:p-12 bg-brand-text/[0.03] border border-brand-text/10 rounded-[2.5rem] relative overflow-hidden group hover:border-brand-primary/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-[80px] group-hover:bg-brand-primary/20 transition-colors"></div>
                  <div className="relative z-10 flex flex-col items-center">
                       <Rocket size={48} className="text-brand-primary mb-6" />
                       <p className="text-lg md:text-xl text-brand-muted font-medium leading-relaxed max-w-2xl">
                        Impulsionar o mercado de garantia condominial por meio da tecnologia, automatizando processos, conectando negócios e oferecendo soluções inteligentes que gerem eficiência, segurança e escala para nossos clientes.
                       </p>
                  </div>
              </div>
          </div>

          {/* --- SEÇÃO 3: VALORES (GRID MELHORADA) --- */}
          <div className="max-w-6xl mx-auto mb-24">
             <div className="text-center mb-12">
           
                  <h2 className="text-3xl md:text-5xl font-black text-brand-text tracking-tight">
                     Nossos Valores
                  </h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Valor 1 */}
                <div className="bg-brand-bg border border-brand-text/10 p-8 rounded-3xl hover:border-brand-primary/40 transition-all duration-300 group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-5 group-hover:scale-110 transition-transform">
                        <Target size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-3">Inovação que gera resultado</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                        Não inovamos por tendência, inovamos para resolver problemas reais e gerar impacto no dia a dia da operação.
                    </p>
                </div>

                {/* Valor 2 */}
                <div className="bg-brand-bg border border-brand-text/10 p-8 rounded-3xl hover:border-brand-primary/40 transition-all duration-300 group hover:-translate-y-1">
                     <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-5 group-hover:scale-110 transition-transform">
                        <ArrowUpRight size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-3">Performance e eficiência</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                        Tudo o que desenvolvemos tem um objetivo claro: reduzir tempo, custos e retrabalho.
                    </p>
                </div>

                {/* Valor 3 */}
                <div className="bg-brand-bg border border-brand-text/10 p-8 rounded-3xl hover:border-brand-primary/40 transition-all duration-300 group hover:-translate-y-1">
                     <div className="w-12 h-12 rounded-xl bg-[#38c88a]/10 flex items-center justify-center text-[#38c88a] mb-5 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-3">Transparência e ética </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                        Acreditamos em relações claras, honestas e sustentáveis.
                    </p>
                </div>

                {/* Valor 4 */}
                <div className="bg-brand-bg border border-brand-text/10 p-8 rounded-3xl hover:border-brand-primary/40 transition-all duration-300 group hover:-translate-y-1 md:col-span-1 lg:col-span-1">
                     <div className="w-12 h-12 rounded-xl bg-[#f2994a]/10 flex items-center justify-center text-[#f2994a] mb-5 group-hover:scale-110 transition-transform">
                        <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-3">Parceria com o cliente</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                        Crescemos em conjunto, ouvindo, evoluindo e criando soluções alinhadas às suas necessidades.
                    </p>
                </div>

                {/* Valor 5 - Ocupa 2 colunas no desktop para balancear */}
                <div className="bg-brand-bg border border-brand-text/10 p-8 rounded-3xl hover:border-brand-primary/40 transition-all duration-300 group hover:-translate-y-1 md:col-span-1 lg:col-span-2">
                     <div className="w-12 h-12 rounded-xl bg-[#4a90e2]/10 flex items-center justify-center text-[#4a90e2] mb-5 group-hover:scale-110 transition-transform">
                        <Handshake size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-3">Segurança e confiabilidade</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                       Tratamos dados e processos com o máximo de responsabilidade, garantindo estabilidade e confiança em cada operação.
                    </p>
                </div>

             </div>
          </div>

        </section>

        {/* --- HEADER DO MAPA --- */}
        <div className="text-center mb-12 lg:mb-20 pt-10 border-t border-brand-text/5">
        
          <h1 className="font-heading text-3xl md:text-6xl font-black text-brand-text tracking-tight">
            Nossa Atuação <span className="text-brand-secondary">Regional</span>
          </h1>
        </div>

        {/* --- MAPA E CARD --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24 mb-20 relative z-10">
          
          {/* ESQUERDA: O MAPA (Z-INDEX CORRIGIDO) */}
          <div className="w-full lg:w-3/5 h-[500px] md:h-[650px] lg:h-[800px] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-brand-secondary/5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none z-0"></div>
             <div className="w-full h-full relative z-20">
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ scale: 800, center: [-52, -15] }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Geographies geography={BRAZIL_GEO_URL}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const stateSigla = geo.properties.sigla;
                        const regionId = stateToRegion[stateSigla];
                        const isSelected = regionId === currentLocation.id;
                        const isPresence = allPresenceStates.includes(stateSigla);
                        
                        // VARIÁVEIS CSS PARA O PREENCHIMENTO (RELATIVO AO TEMA)
                        let fillColor = "var(--map-fill-default)";
                        let strokeColor = "var(--map-stroke-default)";
                        let strokeWidth = 0.5;
                        let filterStyle = "none";
                        let zIndex = 1;

                        if (isSelected) {
                            // Região Ativa (Sempre Azul)
                            fillColor = "var(--map-active)"; 
                            strokeColor = "rgba(255, 255, 255, 0.5)"; // Borda clara para contraste
                            strokeWidth = 0.8;
                            filterStyle = "drop-shadow(0 0 15px var(--map-glow-active))";
                            zIndex = 10;
                        } else if (isPresence) {
                            // Estado com Presença (Cor relativa: Roxo Claro no Dark / Roxo Forte no Light)
                            fillColor = "var(--map-presence)"; 
                            strokeColor = "var(--map-stroke-default)";
                            filterStyle = "drop-shadow(0 0 8px var(--map-glow-presence))";
                            zIndex = 5;
                        }

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            style={{
                              default: {
                                fill: fillColor,
                                stroke: strokeColor,
                                strokeWidth: strokeWidth,
                                outline: "none",
                                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                filter: filterStyle,
                                zIndex: zIndex
                              },
                              hover: { 
                                fill: "var(--map-active)", 
                                stroke: "rgba(255,255,255,0.6)",
                                opacity: 0.9, 
                                outline: "none", 
                                cursor: "pointer", 
                                transition: "all 0.3s ease",
                                filter: "drop-shadow(0 0 15px var(--map-glow-active))"
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
                  {stateCenters.map((state) => (
                    <Marker key={state.id} coordinates={state.coords as [number, number]}>
                      <text
                        textAnchor="middle"
                        y={2}
                        style={{
                          fontFamily: "system-ui",
                          fill: "rgb(var(--color-text))",
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
          </div>

          {/* DIREITA: CARD DE INFORMAÇÃO COM CIDADES */}
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
                
                {/* Cabeçalho do Card */}
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

                <div className="mb-4 text-brand-text/80 text-sm animate-fade-in">
                    {currentLocation.desc}
                </div>

                {/* Lista de Estados (SEM CONTADORES) */}
                <div className="flex-1 overflow-hidden animate-fade-in" key={`cities-${activeIndex}`}>
                  <div className="h-full overflow-y-auto pr-2 scrollbar-thin">
                    <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-4 sticky top-0 bg-opacity-95 backdrop-blur-sm z-10 py-1" style={{ backgroundColor: 'var(--card-bg)' }}>
                      Estados com Operação:
                    </p>
                    <div className="space-y-2 pb-4">
                      {currentLocation.cities?.map((city, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-brand-text/5 hover:bg-brand-text/10 transition-colors border border-brand-text/5 group">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-brand-text/60 bg-brand-text/10 px-2 py-1 rounded group-hover:bg-brand-secondary group-hover:text-white transition-colors">{city.uf}</span>
                            <span className="text-sm font-medium text-brand-text">{city.name}</span>
                          </div>
                          {/* Ícone de Check discreto */}
                          <div className="flex items-center gap-1.5 opacity-30">
                             <CheckCircle2 size={14} className="text-brand-secondary" />
                          </div>
                        </div>
                      ))}
                    </div>
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