import { useState } from 'react';
import { 
  ChevronRight, 
  LayoutDashboard, Gavel, 
  Banknote, Users,
  Smartphone, Bell, Download, Check,
  Plus, Minus, RefreshCw
} from 'lucide-react';


function Features() {
  // --- LÓGICA DO CONSTRUTOR INTERATIVO ---
  // Estado para controlar quais módulos estão ativos na visualização
  const [activeModules, setActiveModules] = useState<string[]>(['financeiro', 'dashboard']);

  const toggleModule = (id: string) => {
    if (activeModules.includes(id)) {
      setActiveModules(activeModules.filter(item => item !== id));
    } else {
      setActiveModules([...activeModules, id]);
    }
  };

  // Lista de módulos disponíveis para customizar
  const modules = [
    { id: 'financeiro', label: 'Gestão Financeira', icon: Banknote, color: 'text-blue-500' },
    { id: 'juridico', label: 'Jurídico Digital', icon: Gavel, color: 'text-purple-500' },
    { id: 'crm', label: 'CRM de Cobrança', icon: Users, color: 'text-orange-500' },
    { id: 'whatsapp', label: 'Bot WhatsApp', icon: Smartphone, color: 'text-green-500' },
  ];

  return (
   <div className="text-brand-text antialiased overflow-x-hidden font-sans selection:bg-brand-primary">
      
      {/* --- BACKGROUND DINÂMICO --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-100 transition-opacity">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>


     
      <main className="pt-32 pb-20">
        
        {/* --- HERO: CUSTOMIZE SEU SISTEMA --- */}
        <section className="container mx-auto px-6 mb-32">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
                    Experiência Interativa
                </span>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-brand-text max-w-4xl mx-auto leading-tight">
                    Monte o Vouch ideal <br/><span className="text-gradient">para sua operação</span>
                </h1>
                <p className="text-lg text-brand-muted max-w-2xl mx-auto">
                    Selecione os módulos abaixo e veja seu sistema ganhando forma em tempo real. Uma plataforma modular que cresce com você.
                </p>
            </div>

            {/* --- O CONSTRUTOR (INTERFACE) --- */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[500px]">
                
                {/* COLUNA ESQUERDA: CONTROLES */}
                <div className="lg:w-1/3 flex flex-col gap-4">
                    <h3 className="text-brand-text font-bold text-xl mb-2 px-2">Adicionar Funcionalidades:</h3>
                    
                    {modules.map((module) => {
                        const isActive = activeModules.includes(module.id);
                        return (
                            <button 
                                key={module.id}
                                onClick={() => toggleModule(module.id)}
                                className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left
                                ${isActive 
                                    ? 'bg-brand-primary/10 border-brand-primary shadow-[0_0_20px_rgba(124,58,237,0.15)]' 
                                    : 'bg-brand-text/5 border-transparent hover:border-brand-text/20 hover:bg-brand-text/10'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${isActive ? 'bg-brand-primary text-white' : 'bg-brand-text/10 text-brand-muted'} transition-colors`}>
                                        <module.icon size={20} />
                                    </div>
                                    <span className={`font-bold ${isActive ? 'text-brand-text' : 'text-brand-muted'}`}>
                                        {module.label}
                                    </span>
                                </div>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all
                                    ${isActive ? 'bg-brand-primary border-brand-primary text-white' : 'border-brand-text/20 text-brand-text/20'}`}>
                                    {isActive ? <Check size={12} /> : <Plus size={12} />}
                                </div>
                            </button>
                        );
                    })}

                    <div className="mt-auto pt-6 px-2">
                        <p className="text-sm text-brand-muted">
                            <span className="text-brand-primary font-bold">{activeModules.length}</span> módulos selecionados.
                        </p>
                    </div>
                </div>

                {/* COLUNA DIREITA: PREVIEW DO SISTEMA */}
                <div className="lg:w-2/3 relative">
                    {/* Moldura do "Monitor" */}
                    <div className="absolute inset-0 bg-brand-text/5 rounded-3xl border border-brand-text/10 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col">
                        
                        {/* Barra de Título do Sistema */}
                        <div className="h-12 border-b border-brand-text/10 flex items-center px-6 gap-2 bg-brand-bg/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="ml-4 px-4 py-1 rounded-md bg-brand-text/5 text-xs text-brand-muted font-mono flex-1 text-center">
                                system.vouch.app/dashboard
                            </div>
                        </div>

                        {/* Corpo do Dashboard (Grid Dinâmico) */}
                        <div className="flex-1 p-6 overflow-y-auto bg-brand-bg/30">
                            
                            {/* Header Interno */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h2 className="text-xl font-bold text-brand-text">Bom dia, Gestor</h2>
                                    <p className="text-xs text-brand-muted">Aqui está o resumo da sua operação hoje.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-brand-primary/20 animate-pulse"></div>
                            </div>

                            {/* O GRID MÁGICO */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(100px,auto)] transition-all">
                                
                                {/* Widget Padrão (Sempre Visível) */}
                                <div className="col-span-2 md:col-span-4 bg-brand-text/5 rounded-xl p-4 border border-brand-text/5">
                                    <div className="flex items-center gap-2 mb-2 text-brand-muted text-xs uppercase font-bold">
                                        <LayoutDashboard size={14} /> Resumo Geral
                                    </div>
                                    <div className="h-20 flex items-end gap-2">
                                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-brand-text/10 rounded-t-md hover:bg-brand-primary/50 transition-colors"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Widget: FINANCEIRO */}
                                {activeModules.includes('financeiro') && (
                                    <div className="col-span-2 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 animate-fade-in">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500"><Banknote size={18} /></div>
                                            <span className="text-xs font-bold text-blue-500">+12%</span>
                                        </div>
                                        <p className="text-2xl font-bold text-brand-text">R$ 142k</p>
                                        <p className="text-xs text-brand-muted">Receita Prevista</p>
                                    </div>
                                )}

                                {/* Widget: JURÍDICO */}
                                {activeModules.includes('juridico') && (
                                    <div className="col-span-1 bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 animate-fade-in flex flex-col justify-center items-center text-center">
                                        <div className="mb-2 text-purple-500"><Gavel size={24} /></div>
                                        <p className="text-lg font-bold text-brand-text">15</p>
                                        <p className="text-[10px] text-brand-muted uppercase">Acordos Hoje</p>
                                    </div>
                                )}

                                {/* Widget: CRM */}
                                {activeModules.includes('crm') && (
                                    <div className="col-span-1 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 animate-fade-in">
                                        <div className="flex items-center gap-2 mb-3 text-orange-500 text-xs font-bold">
                                            <Users size={14} /> Inadimplentes
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-orange-500/20 rounded-full"></div>
                                            <div className="h-2 w-2/3 bg-orange-500/20 rounded-full"></div>
                                        </div>
                                    </div>
                                )}

                                {/* Widget: WHATSAPP */}
                                {activeModules.includes('whatsapp') && (
                                    <div className="col-span-2 md:col-span-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl p-4 flex items-center gap-4 animate-fade-in">
                                        <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                                            <Smartphone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-brand-text">Bot de Cobrança Ativo</p>
                                            <p className="text-xs text-brand-muted">342 mensagens enviadas nas últimas 2h.</p>
                                        </div>
                                        <div className="ml-auto w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
                                    </div>
                                )}

                                {/* Estado Vazio (Se desmarcar tudo) */}
                                {activeModules.length === 0 && (
                                    <div className="col-span-4 h-32 flex flex-col items-center justify-center text-brand-muted border-2 border-dashed border-brand-text/10 rounded-xl">
                                        <RefreshCw size={24} className="mb-2 opacity-50" />
                                        <p className="text-sm">Selecione módulos ao lado...</p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- GRID DETALHADO (Mantive o conteúdo técnico abaixo) --- */}
        <div className="container mx-auto px-6 mb-16">
            <h2 className="text-2xl font-bold text-brand-text mb-8 border-b border-brand-text/10 pb-4">
                Detalhamento Técnico
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
                
                {/* CARD 1: DASHBOARD */}
                <div className="md:col-span-8 glass-card rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group border-brand-primary/20">
                    <div className="z-10 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-4">
                            <LayoutDashboard size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-text mb-2">Dashboard Executivo</h3>
                        <p className="text-brand-muted max-w-md">Visão macro da operação em tempo real. Gráficos de inadimplência, acordos fechados e projeção de caixa.</p>
                    </div>
                    {/* ESPAÇO PARA FOTO */}
                    <div className="flex-1 bg-brand-bg/50 rounded-2xl border-2 border-dashed border-brand-text/10 flex items-center justify-center relative overflow-hidden group-hover:border-brand-primary/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg/80 to-transparent z-10"></div>
                        <div className="text-center z-20">
                            <span className="block text-4xl mb-2">📊</span>
                            <span className="text-sm font-mono text-brand-muted uppercase tracking-wider">Print do Dashboard</span>
                        </div>
                    </div>
                </div>

                {/* CARD 2: WHATSAPP */}
                <div className="md:col-span-4 bg-gradient-to-br from-[#25D366]/20 to-brand-bg rounded-[2.5rem] p-8 border border-[#25D366]/30 flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-brand-text mb-2 flex items-center gap-3">
                            <Smartphone className="text-[#25D366]" /> Bot WhatsApp
                        </h3>
                        <p className="text-brand-muted">O canal com maior taxa de conversão. Envie boletos e lembretes direto no celular.</p>
                    </div>
                    <div className="mt-8 bg-brand-bg/40 rounded-xl p-4 border border-brand-text/5 backdrop-blur-sm">
                        <div className="flex gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-white/10"></div>
                            <div className="flex-1 bg-white/10 h-2 rounded-full self-center"></div>
                        </div>
                         <div className="flex gap-3 justify-end">
                            <div className="bg-[#25D366]/40 px-3 py-2 rounded-lg text-xs text-white">Olá! Seu boleto vence hoje. 📄</div>
                        </div>
                    </div>
                </div>

                {/* CARD 3: FINANCEIRO */}
                <div className="md:col-span-6 glass-card rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center group">
                    <div className="flex-1">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
                            <Banknote size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-text mb-2">Prestação de Contas</h3>
                        <p className="text-brand-muted mb-4">Relatórios detalhados para administradoras e síndicos. Exportação em PDF e Excel com um clique.</p>
                        <button className="flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors">
                            <Download size={16} /> Ver modelo
                        </button>
                    </div>
                </div>

                {/* CARD 4: JURÍDICO */}
                <div className="md:col-span-6 glass-card rounded-[2.5rem] p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                            <Gavel size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text mb-2">Jurídico Integrado</h3>
                        <p className="text-brand-muted text-sm">Geração automática de minutas de confissão de dívida e controle de parcelamentos.</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-brand-text font-bold text-sm">
                        <Check size={16} className="text-green-500" /> Assinatura Digital
                    </div>
                </div>

            </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-8">
                Quer testar esses módulos na sua empresa?
            </h2>
            <a href="https://wa.me/5511999999999" target="_blank" className="inline-flex items-center gap-3 px-10 py-4 bg-brand-text text-brand-bg font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                Agendar Demonstração <ChevronRight size={20} />
            </a>
        </div>

      </main>

      {/* --- NOVO FOOTER --- */}
    
    </div>
  );
}

export default Features;