import { 
  Cloud, Cpu, Wallet, Headset, 
  Check, ChevronRight,
  Building2, Smartphone, FileText,
  ShieldCheck, BarChart3, MessageCircle
} from 'lucide-react';

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
    icon: Cpu,
    title: "Automação de Rotinas",
    description: "Robôs que identificam pagamentos, dão baixa em boletos e enviam notificações sem intervenção humana."
  },
  {
    icon: BarChart3,
    title: "Dashboards em Tempo Real",
    description: "Acompanhe inadimplência, fluxo de caixa e performance da equipe em telas visuais e intuitivas."
  },
  {
    icon: Wallet,
    title: "Régua de Cobrança",
    description: "Fluxos automáticos de E-mail, SMS e WhatsApp. O sistema cobra o condômino de forma amigável."
  },
  {
    icon: Headset,
    title: "Suporte Especializado",
    description: "Nossa equipe entende de garantia condominial e ajuda você a destravar processos complexos."
  }
];

function Services() {
  
  return (
     <div className="text-brand-text antialiased overflow-x-hidden font-sans selection:bg-brand-primary">
      
      {/* --- BACKGROUND DINÂMICO --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-60 dark:opacity-100 transition-opacity">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <main className="pt-32 pb-20">
        
        {/* --- HERO SERVIÇOS --- */}
        <section className="relative pt-20 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              Ecossistema Completo
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-brand-text max-w-4xl mx-auto leading-tight">
              Tudo o que sua Garantidora precisa para <span className="text-gradient">escalar</span>
            </h1>
            
            <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Centralize sua operação em uma única plataforma. Do cadastro do condomínio à emissão do boleto, cuidamos de toda a tecnologia para você focar no crescimento.
            </p>
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

        {/* --- SEÇÃO DE INTEGRAÇÕES --- */}
        <section className="py-32 relative overflow-hidden">
          {/* Fundo decorativo inclinado */}
          <div className="absolute inset-0 bg-brand-primary/5 skew-y-3 transform origin-bottom-left -z-10"></div>
          
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Texto Esquerda */}
              <div className="lg:w-1/2 space-y-8">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-text leading-tight">
                  Conectado com o <br/>
                  <span className="text-gradient">Mercado Financeiro</span>
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed">
                  Não perca tempo trocando arquivos de remessa e retorno manualmente. A Vouch possui integração nativa via API com os principais bancos e sistemas de ERP do mercado.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Baixa automática de pagamentos (D+0 ou D+1)",
                    "Emissão de boletos registrados em segundos",
                    "Split de pagamentos automático",
                    "Integração com PIX QrCode e Copia e Cola"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                    <a href="#" className="text-brand-primary font-bold hover:text-brand-secondary transition-colors inline-flex items-center gap-2">
                        Ver bancos homologados <ChevronRight size={16} />
                    </a>
                </div>
              </div>

              {/* Visual Direita (Cards Flutuantes) */}
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {/* Card Banco 1 */}
                  <div className="glass-card p-6 rounded-2xl flex items-center gap-4 animate-float border-l-4 border-l-blue-500">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg text-blue-600">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted uppercase font-bold">API Bancária</p>
                      <p className="text-brand-text font-bold">Bancos Digitais</p>
                    </div>
                  </div>

                  {/* Card Banco 2 */}
                  <div className="glass-card p-6 rounded-2xl flex items-center gap-4 animate-float animation-delay-2000 mt-8 border-l-4 border-l-purple-500">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg text-purple-600">
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted uppercase font-bold">Pagamentos</p>
                      <p className="text-brand-text font-bold">PIX Instantâneo</p>
                    </div>
                  </div>

                  {/* Card ERP */}
                  <div className="glass-card p-6 rounded-2xl flex items-center gap-4 animate-float animation-delay-4000 col-span-2 w-3/4 mx-auto border-l-4 border-l-green-500">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg text-green-600">
                      <FileText size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted uppercase font-bold">Relatórios</p>
                      <p className="text-brand-text font-bold">Exportação Contábil</p>
                    </div>
                  </div>
                </div>

                {/* Efeito de Conexão no Fundo */}
                <div className="absolute inset-0 border-2 border-dashed border-brand-primary/20 rounded-full animate-spin-slow -z-10 scale-150 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-[2.5rem] p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-cyan-500"></div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-brand-text">
                Leve sua Garantidora para o próximo nível
              </h2>
              <p className="text-brand-muted mb-10 max-w-2xl mx-auto">
                Agende uma conversa com nossos especialistas e descubra como a Vouch pode otimizar sua operação em até 40%.
              </p>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-green-500/20 active:scale-95"
              >
                <MessageCircle size={20} /> Agendar Apresentação
              </a>
            </div>
          </div>
        </section>

      </main>

    
    </div>
  );
}

export default Services;