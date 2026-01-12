import { useState } from 'react';
import { 
  Search, Filter, ArrowRight,
  Landmark, Building2, MessageCircle, Database,
  CheckCircle2, Clock, Plus
} from 'lucide-react';


// --- DADOS MOCKADOS (IMPROVISO) ---
const integrationsData = [
  // BANCOS
  { id: 1, name: "Itaú", category: "Bancos", status: "active", icon: Landmark, color: "text-orange-500", bg: "bg-orange-500/10", desc: "Emissão de boletos, remessa e retorno automático (CNAB 240/400)." },
  { id: 2, name: "Bradesco", category: "Bancos", status: "active", icon: Landmark, color: "text-red-500", bg: "bg-red-500/10", desc: "Integração completa via API e troca de arquivos segura." },
  { id: 3, name: "Santander", category: "Bancos", status: "active", icon: Landmark, color: "text-red-600", bg: "bg-red-600/10", desc: "Webhooks para confirmação de pagamento em tempo real." },
  { id: 4, name: "Banco do Brasil", category: "Bancos", status: "active", icon: Landmark, color: "text-yellow-500", bg: "bg-yellow-500/10", desc: "Homologado para PIX QR Code e Cobrança Registrada." },
  { id: 5, name: "Banco Inter", category: "Bancos", status: "active", icon: Landmark, color: "text-orange-400", bg: "bg-orange-400/10", desc: "API 100% digital sem necessidade de troca de arquivos." },
  { id: 6, name: "Sicoob", category: "Bancos", status: "beta", icon: Landmark, color: "text-teal-600", bg: "bg-teal-600/10", desc: "Integração para cooperativas com taxas reduzidas." },
  
  // ERPs e SISTEMAS
  { id: 7, name: "Superlógica", category: "ERPs", status: "active", icon: Building2, color: "text-blue-500", bg: "bg-blue-500/10", desc: "Sincronização de unidades, condôminos e receitas." },
  { id: 8, name: "Condomob", category: "ERPs", status: "active", icon: Building2, color: "text-green-500", bg: "bg-green-500/10", desc: "Leitura automática de balancetes e pastas digitais." },
  { id: 9, name: "Group Software", category: "ERPs", status: "coming_soon", icon: Building2, color: "text-purple-500", bg: "bg-purple-500/10", desc: "Em breve: Integração nativa com Condomínio21." },
  
  // COMUNICAÇÃO e OUTROS
  { id: 10, name: "WhatsApp API", category: "Apps", status: "active", icon: MessageCircle, color: "text-[#25D366]", bg: "bg-[#25D366]/10", desc: "Envio de mensagens oficiais (Meta) sem risco de bloqueio." },
  { id: 11, name: "Receita Federal", category: "Gov", status: "active", icon: Database, color: "text-blue-800", bg: "bg-blue-800/10", desc: "Consulta automática de CNPJ e regularidade fiscal." },
  { id: 12, name: "Tribunais de Justiça", category: "Gov", status: "beta", icon: Database, color: "text-slate-500", bg: "bg-slate-500/10", desc: "Monitoramento de processos judiciais em nome do condomínio." },
];

const categories = ["Todos", "Bancos", "ERPs", "Apps", "Gov"];

function Integrations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Lógica de Filtro
  const filteredIntegrations = integrationsData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="text-brand-text antialiased overflow-x-hidden font-sans selection:bg-brand-primary">
      
      {/* --- BACKGROUND DINÂMICO --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-100 transition-opacity">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>


      <main className="pt-32 pb-20">
        
        {/* HERO TITLE */}
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
            Conectividade Total
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-brand-text">
            Integre suas ferramentas <br /><span className="text-gradient">favoritas</span>
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            A Vouch é agnóstica. Conectamos sua Garantidora aos principais bancos e sistemas do mercado para você não mudar sua forma de trabalhar.
          </p>
        </div>

        {/* --- BARRA DE CONTROLE (BUSCA E FILTROS) --- */}
        <div className="container mx-auto px-6 mb-12">
          <div className="glass-card p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Abas de Categoria */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' 
                      : 'text-brand-muted hover:bg-brand-text/5 hover:text-brand-text'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Input de Busca */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted group-focus-within:text-brand-primary transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Buscar integração..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-text/10 rounded-xl pl-10 pr-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-brand-muted/50"
              />
            </div>
          </div>
        </div>

        {/* --- GRID DE INTEGRAÇÕES --- */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {filteredIntegrations.map((item) => (
              <div key={item.id} className="glass-card p-6 rounded-[1.5rem] hover:border-brand-primary/30 transition-all group hover:-translate-y-1 flex flex-col h-full">
                
                {/* Header do Card */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shadow-inner`}>
                    <item.icon size={28} />
                  </div>
                  
                  {/* Badge de Status */}
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    item.status === 'active' 
                      ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                      : item.status === 'beta' 
                        ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                        : 'bg-brand-text/5 text-brand-muted border-brand-text/10'
                  }`}>
                    {item.status === 'active' ? 'Ativo' : item.status === 'beta' ? 'Beta' : 'Em Breve'}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-text mb-2">{item.name}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Footer do Card */}
                <div className="pt-4 border-t border-brand-text/5 flex items-center justify-between">
                  <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">{item.category}</span>
                  {item.status === 'active' ? (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-green-500">
                         <CheckCircle2 size={14} /> Conectado
                      </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-muted">
                        <Clock size={14} /> Aguardando
                      </div>
                  )}
                </div>
              </div>
            ))}

            {/* CARD "SOLICITAR NOVA" */}
            <div className="border-2 border-dashed border-brand-text/10 rounded-[1.5rem] p-6 flex flex-col items-center justify-center text-center hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-all cursor-pointer group min-h-[250px]">
              <div className="w-16 h-16 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-muted mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Plus size={32} />
              </div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Não encontrou?</h3>
              <p className="text-sm text-brand-muted mb-4 max-w-xs">
                Nossa API é aberta. Solicite uma nova integração e nossa equipe analisará a viabilidade.
              </p>
              <span className="text-sm font-bold text-brand-primary group-hover:underline">Solicitar Integração</span>
            </div>

          </div>
        </div>

        {/* CTA FINAL */}
        <div className="container mx-auto px-6 mt-24">
            <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-brand-text mb-2">Desenvolvedor?</h3>
                    <p className="text-brand-muted">Acesse nossa documentação técnica e veja como conectar seu sistema à Vouch.</p>
                </div>
                <a href="#" className="whitespace-nowrap px-8 py-3 bg-brand-text text-brand-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                    Ler Documentação API <ArrowRight size={18} />
                </a>
            </div>
        </div>

      </main>

  
    </div> 
  );
}

export default Integrations;