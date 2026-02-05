import { useState } from 'react';
import { 
  Search, ArrowRight,
  Landmark, Building2, MessageCircle,
  CheckCircle2, Clock, 
} from 'lucide-react';

// --- DADOS MOCKADOS (CORES DA PALETA APLICADAS) ---
// Vermelho: #eb5757, Azul: #4a90e2, Verde: #38c88a, Amarelo: #f2c94c, Laranja: #f2994a
const integrationsData = [
  // BANCOS (Vermelho #eb5757)
  { id: 1, name: "Itaú", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração completa via API e troca de arquivos segura." },
  { id: 2, name: "Bradesco", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração completa via API e troca de arquivos segura." },
  { id: 3, name: "Santander", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração completa via API e troca de arquivos segura." },
  { id: 4, name: "Iugu", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Homologado para PIX QR Code e Cobrança Registrada." },
  { id: 5, name: "Fitbank", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração completa via API e troca de arquivos segura." }, 
  { id: 6, name: "Sicredi", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração completa via API e troca de arquivos segura." },
 { id: 7, name: "Asaas", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração completa via API e troca de arquivos segura." },
 { id: 8, name: "Ailos", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 240" },
 { id: 9, name: "Bancoob", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 240 / 400" },
 { id: 15, name: "Banrisul", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 240 / 400" },
{ id: 16, name: "Banco do Brasil", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 240 / 400" },
{ id: 17, name: "Caixa Econômica", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 240 / 400" },
{ id: 18, name: "BNB", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },
{ id: 19, name: "C6", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },
{ id: 20, name: "Cresol", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },
{ id: 21, name: "Delbank", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },
{ id: 22, name: "Inter", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },
{ id: 23, name: "Ourinvest", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },
{ id: 24, name: "Pine", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },
{ id: 25, name: "Rendimento", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },
{ id: 26, name: "Unicred", category: "Bancos", status: "active", icon: Landmark, color: "text-[#eb5757]", bg: "bg-[#eb5757]/10", desc: "Integração via CNAB 400" },







  { id: 13, name: "Gobbip", category: "Ferramentas", status: "active", icon: MessageCircle, color: "text-[#38c88a]", bg: "bg-[#38c88a]/10", desc: "Integração ofical com Whatsapp (Meta)." },
  { id: 14, name: "Fisko", category: "Ferramentas", status: "active", icon: Building2, color: "text-[#38c88a]", bg: "bg-[#38c88a]/10", desc: "Integração oficial automatizada para emissão de nota fiscal" },
 { id: 10, name: "SuperCash", category: "Ferramentas", status: "coming_soon", icon: Building2, color: "text-[#38c88a]", bg: "bg-[#38c88a]/10", desc: "Em breve: Integração nativa." },
  { id: 11, name: "BI", category: "Ferramentas", status: "coming_soon", icon: Building2, color: "text-[#38c88a]", bg: "bg-[#38c88a]/10", desc: "Em breve: Integração nativa." },
  
];

const categories = ["Todos", "Bancos","Ferramentas", ];

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
    <div className="text-brand-text antialiased overflow-x-hidden font-sans selection:bg-[#872a8c] selection:text-white">
      
      {/* --- BACKGROUND DINÂMICO (Cores da Paleta) --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-100 transition-opacity">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#872a8c]/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4a90e2]/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#38c88a]/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>


      <main className="pt-32 pb-20">
        
        {/* HERO TITLE */}
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#872a8c]/10 border border-[#872a8c]/20 text-[#872a8c] text-xs font-bold tracking-widest uppercase mb-6">
            Conectividade Total
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-brand-text">
            Integre suas ferramentas <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#872a8c] to-[#4a90e2]">favoritas</span>
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Conectamos sua Garantidora aos principais bancos e sistemas do mercado para você não mudar sua forma de trabalhar.
          </p>
        </div>

        {/* --- BARRA DE CONTROLE (BUSCA E FILTROS) --- */}
        <div className="container mx-auto px-6 mb-12">
          <div className="glass-card p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-text/5 bg-brand-bg/50 backdrop-blur-md">
            
            {/* Abas de Categoria */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-[#872a8c] text-white shadow-lg shadow-[#872a8c]/25' 
                      : 'text-brand-muted hover:bg-brand-text/5 hover:text-brand-text'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Input de Busca */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted group-focus-within:text-[#872a8c] transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Buscar integração..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-text/10 rounded-xl pl-10 pr-4 py-3 text-brand-text focus:outline-none focus:border-[#872a8c]/50 focus:ring-1 focus:ring-[#872a8c]/50 transition-all placeholder:text-brand-muted/50"
              />
            </div>
          </div>
        </div>

        {/* --- GRID DE INTEGRAÇÕES --- */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {filteredIntegrations.map((item) => (
              <div key={item.id} className="glass-card p-6 rounded-[1.5rem] border border-brand-text/5 hover:border-[#872a8c]/30 transition-all group hover:-translate-y-1 flex flex-col h-full bg-brand-bg/30">
                
                {/* Header do Card */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shadow-inner`}>
                    <item.icon size={28} />
                  </div>
                  
                  {/* Badge de Status (Cores da Paleta) */}
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    item.status === 'active' 
                      ? 'bg-[#38c88a]/10 text-[#38c88a] border-[#38c88a]/20' // Verde Ativo
                      : item.status === 'beta' 
                        ? 'bg-[#f2c94c]/10 text-[#f2c94c] border-[#f2c94c]/20' // Amarelo Beta
                        : 'bg-brand-text/5 text-brand-muted border-brand-text/10' // Em breve
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
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#38c88a]">
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

        

          </div>
        </div>

        {/* CTA FINAL */}
        <div className="container mx-auto px-6 mt-24">
            <div className="bg-[#872a8c]/10 border border-[#872a8c]/20 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-brand-text mb-2">Integre com a Vouch API</h3>
                    <p className="text-brand-muted">Entre em contato para conheçer os metodos disponíveis.</p>
                </div>
                <a href="https://wa.me/554132238793?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento."className="whitespace-nowrap px-8 py-3 bg-brand-text text-brand-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                    Saiba Mais<ArrowRight size={18} />
                </a>
            </div>
        </div>

      </main>

  
    </div> 
  );
}

export default Integrations;