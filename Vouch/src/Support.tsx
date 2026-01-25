import { 
  Headset, GraduationCap, Users, PlayCircle, 
 CheckCircle2, ArrowRight, 
  BookOpen, Shield
} from 'lucide-react';

function Support() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary overflow-x-hidden relative">
      
      {/* --- BACKGROUND DEEP SPACE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
      </div>

      <style>{`
        @keyframes chat-pop { 0% { opacity: 0; transform: translateY(10px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes progress-load { 0% { width: 0%; } 100% { width: 75%; } }
        @keyframes play-pulse { 0% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(124, 58, 237, 0); } 100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0); } }
        
        .animate-chat-1 { animation: chat-pop 0.5s ease-out forwards 0.2s; opacity: 0; }
        .animate-chat-2 { animation: chat-pop 0.5s ease-out forwards 1.2s; opacity: 0; }
        .animate-progress { animation: progress-load 2s ease-out forwards 0.5s; }
        .animate-play { animation: play-pulse 2s infinite; }
      `}</style>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        {/* --- HERO SECTION --- */}
        <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-text/10 bg-brand-text/5 text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">
              <Shield size={14} /> Suporte & Sucesso
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-brand-text mb-6">
              Não é só software. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                É uma Parceria.
              </span>
            </h1>
            
            <p className="text-xl text-brand-muted font-light leading-relaxed">
              Sabemos que mudar de sistema dá medo. Por isso, criamos uma estrutura completa de acolhimento, treinamento e suporte técnico para sua equipe nunca parar.
            </p>
        </div>

        {/* --- A TRÍADE DE SUCESSO (GRID PRINCIPAL) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* CARD 1: VOUCH ACADEMY (TREINAMENTO) */}
            <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2.5rem] p-8 flex flex-col overflow-hidden hover:border-brand-primary/40 transition-all duration-500 shadow-xl">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                        <GraduationCap size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text mb-3">Vouch Academy™</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                        Sistema de treinamento próprio. Seus novos colaboradores aprendem a usar a plataforma sozinhos com nossa trilha de vídeos interativos.
                    </p>
                </div>

                {/* VISUAL: PLAYER DE VÍDEO SIMULADO */}
                <div className="mt-auto relative rounded-xl overflow-hidden bg-brand-text/5 border border-brand-text/10 aspect-video group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-shadow">
                    {/* Thumbnail simulada */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg to-brand-primary/20 opacity-80"></div>
                    
                    {/* UI do Player */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer group-hover:scale-110 transition-transform animate-play">
                            <PlayCircle size={32} fill="currentColor" className="text-brand-primary" />
                        </div>
                    </div>

                    {/* Barra de Progresso e Título */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="text-xs font-bold text-white mb-2">Aula 01: Cadastrando a Primeira Garantia</div>
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-primary w-0 group-hover:animate-progress"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 2: SUPORTE ESPECIALIZADO */}
            <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2.5rem] p-8 flex flex-col overflow-hidden hover:border-emerald-500/40 transition-all duration-500 shadow-xl">
                 <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                        <Headset size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text mb-3">Suporte Especializado</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                        Esqueça robôs. Nossa equipe é formada por especialistas no mercado imobiliário prontos para resolver dúvidas técnicas e operacionais.
                    </p>
                </div>

                {/* VISUAL: CHAT SIMULADO */}
                <div className="mt-auto relative bg-brand-bg border border-brand-text/5 rounded-2xl p-4 h-48 flex flex-col gap-3 overflow-hidden">
                    {/* Mensagem Usuário */}
                    <div className="self-end bg-brand-text/5 text-brand-muted text-xs p-3 rounded-l-xl rounded-tr-xl max-w-[85%] animate-chat-1">
                        Estou com dúvida na baixa do arquivo CNAB.
                    </div>
                    {/* Mensagem Suporte */}
                    <div className="self-start bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs p-3 rounded-r-xl rounded-tl-xl max-w-[90%] flex gap-2 items-start animate-chat-2 shadow-lg shadow-emerald-500/10">
                        <div className="mt-0.5"><CheckCircle2 size={12} /></div>
                        <div>
                            Oi! Vou te ajudar. Acesse o menu "Financeiro  Retorno". O sistema já identificou o erro na linha 4.
                        </div>
                    </div>
                    {/* Indicador de Digitação */}
                    <div className="absolute bottom-4 left-4 flex gap-1 opacity-0 group-hover:opacity-50 transition-opacity delay-1000">
                        <div className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
            </div>

            {/* CARD 3: ACOMPANHAMENTO (CS) */}
            <div className="group relative bg-brand-bg border border-brand-text/10 rounded-[2.5rem] p-8 flex flex-col overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-xl">
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                        <Users size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text mb-3">Customer Success</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                        Não te abandonamos após a venda. Um gerente de sucesso acompanha sua evolução, sugerindo melhorias para sua operação escalar.
                    </p>
                </div>

                {/* VISUAL: CHECKLIST DE SUCESSO */}
                <div className="mt-auto relative bg-brand-text/[0.02] border border-brand-text/5 rounded-2xl p-5 h-48 flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-3 opacity-50">
                        <div className="w-5 h-5 rounded-full border-2 border-brand-text/20 flex items-center justify-center">
                            <CheckCircle2 size={12} className="text-brand-text/20" />
                        </div>
                        <div className="h-2 w-2/3 bg-brand-text/10 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/40">
                            <CheckCircle2 size={12} />
                        </div>
                        <span className="text-xs font-bold text-brand-text">Migração de Dados Concluída</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/40">
                            <CheckCircle2 size={12} />
                        </div>
                        <span className="text-xs font-bold text-brand-text">Treinamento da Equipe</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
                        <span className="text-xs font-bold text-blue-500">Go Live (Lançamento)</span>
                    </div>
                </div>
            </div>

        </div>

        {/* --- RODAPÉ DA SEÇÃO: MÉTRICAS --- */}
        <div className="mt-20 border-t border-brand-text/10 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-3xl font-black text-brand-text mb-1">
                        <span className="text-brand-primary">&lt;</span> 2 min
                    </div>
                    <div className="text-xs text-brand-muted uppercase tracking-widest font-bold">Tempo Médio de Resposta</div>
                </div>
                <div>
                    <div className="text-3xl font-black text-brand-text mb-1">
                        +50
                    </div>
                    <div className="text-xs text-brand-muted uppercase tracking-widest font-bold">Vídeo-Aulas</div>
                </div>
                <div>
                    <div className="text-3xl font-black text-brand-text mb-1">
                        98%
                    </div>
                    <div className="text-xs text-brand-muted uppercase tracking-widest font-bold">Satisfação (CSAT)</div>
                </div>
                <div>
                    <div className="text-3xl font-black text-brand-text mb-1">
                        24/7
                    </div>
                    <div className="text-xs text-brand-muted uppercase tracking-widest font-bold">Monitoramento de Sistema</div>
                </div>
            </div>
        </div>

{/* ===================================================================================== */}
        {/* BLOCO NOVO 1: A JORNADA DE IMPLEMENTAÇÃO (DATA STREAM) */}
        {/* ===================================================================================== */}
        <div className="mt-32 mb-32 relative">
            <div className="text-center mb-16">
                <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 block">Processo de Onboarding</span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Do Zero ao Go-Live</h2>
                <p className="text-brand-muted mt-2">Sua operação migrada em tempo recorde.</p>
            </div>

            {/* Linha Central (O "Cabo" de Dados) */}
            <div className="absolute left-1/2 top-20 bottom-0 w-1 bg-brand-text/5 -translate-x-1/2 hidden md:block">
                 <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-scan opacity-50"></div>
            </div>

            <div className="space-y-12 relative z-10">
                {/* ETAPA 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    <div className="md:w-1/2 md:text-right">
                        <h3 className="text-xl font-bold text-brand-text group-hover:text-emerald-400 transition-colors">Day 1: Kick-off & Setup</h3>
                        <p className="text-sm text-brand-muted">Reunião de alinhamento e liberação das credenciais de acesso administrativo.</p>
                    </div>
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-brand-bg border-2 border-brand-text/10 flex items-center justify-center text-brand-muted z-10 relative group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                            <span className="font-bold">01</span>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-emerald-500/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-xs font-mono text-emerald-500">SYSTEM_INIT_SUCCESS</span>
                        </div>
                    </div>
                </div>

                {/* ETAPA 2 */}
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    <div className="md:w-1/2 order-last md:order-first p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-purple-500/[0.02] transition-colors text-right">
                        <div className="flex items-center gap-3 justify-end">
                             <span className="text-xs font-mono text-purple-500">DATABASE_IMPORT...</span>
                             <div className="flex gap-1">
                                <div className="w-1 h-3 bg-purple-500/50"></div>
                                <div className="w-1 h-3 bg-purple-500/80"></div>
                                <div className="w-1 h-3 bg-purple-500"></div>
                             </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-brand-bg border-2 border-brand-text/10 flex items-center justify-center text-brand-muted z-10 relative group-hover:border-purple-500 group-hover:text-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                            <span className="font-bold">02</span>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold text-brand-text group-hover:text-purple-400 transition-colors">Day 3: Migração de Dados</h3>
                        <p className="text-sm text-brand-muted">Importação da sua base de clientes, contratos e histórico financeiro.</p>
                    </div>
                </div>

                {/* ETAPA 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    <div className="md:w-1/2 md:text-right">
                        <h3 className="text-xl font-bold text-brand-text group-hover:text-blue-400 transition-colors">Day 5: Treinamento</h3>
                        <p className="text-sm text-brand-muted">Liberação da Vouch Academy e workshop ao vivo com sua equipe.</p>
                    </div>
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-brand-bg border-2 border-brand-text/10 flex items-center justify-center text-brand-muted z-10 relative group-hover:border-blue-500 group-hover:text-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
                            <span className="font-bold">03</span>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-blue-500/[0.02] transition-colors">
                         <div className="w-full bg-brand-text/10 rounded-full h-2 overflow-hidden">
                             <div className="h-full bg-blue-500 w-[85%]"></div>
                         </div>
                         <div className="mt-2 text-xs font-mono text-blue-500 text-right">Knowledge_Transfer: 85%</div>
                    </div>
                </div>

                 {/* ETAPA 4 */}
                 <div className="flex flex-col md:flex-row items-center gap-8 group">
                    <div className="md:w-1/2 order-last md:order-first p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-yellow-500/[0.02] transition-colors text-right">
                        <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded text-xs font-bold animate-pulse">
                            LIVE STATUS: ONLINE
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-brand-bg border-2 border-brand-text/10 flex items-center justify-center text-brand-muted z-10 relative group-hover:border-yellow-500 group-hover:text-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all">
                            <span className="font-bold">04</span>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold text-brand-text group-hover:text-yellow-400 transition-colors">Day 7: Go Live!</h3>
                        <p className="text-sm text-brand-muted">Virada de chave. Sua operação rodando 100% no ambiente Vouch.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* ===================================================================================== */}
        {/* BLOCO NOVO 2: CENTRAL DE INTELIGÊNCIA (FAQ & STATUS) */}
        {/* ===================================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
            
            {/* Bloco Esquerdo: Status do Sistema (Live Monitor) */}
            <div className="md:col-span-4 bg-[#0F1115] border border-brand-text/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-4">
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-text/20"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-text/20"></div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold text-brand-text mb-1">System Status</h3>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm text-emerald-500 font-mono">Operational</span>
                    </div>
                </div>

                <div className="space-y-4 mt-8">
                    <div className="flex justify-between text-xs text-brand-muted border-b border-brand-text/5 pb-2">
                        <span>API Latency</span>
                        <span className="text-emerald-500 font-mono">24ms</span>
                    </div>
                    <div className="flex justify-between text-xs text-brand-muted border-b border-brand-text/5 pb-2">
                        <span>Uptime (30d)</span>
                        <span className="text-emerald-500 font-mono">99.99%</span>
                    </div>
                    <div className="flex justify-between text-xs text-brand-muted pb-2">
                        <span>Last Backup</span>
                        <span className="text-brand-text font-mono">12 min ago</span>
                    </div>
                </div>

                {/* Graficozinho Falso CSS */}
                <div className="mt-4 flex items-end gap-1 h-10 opacity-30">
                    {[30, 50, 45, 70, 40, 60, 80, 50, 90, 60].map((h, i) => (
                         <div key={i} style={{height: `${h}%`}} className="flex-1 bg-emerald-500 rounded-t-sm"></div>
                    ))}
                </div>
            </div>

            {/* Bloco Direito: Busca Inteligente (Help Center) */}
            <div className="md:col-span-8 bg-brand-primary/5 border border-brand-primary/20 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center text-center">
                 {/* Efeito de Fundo */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1)_0%,transparent_50%)]"></div>

                 <BookOpen size={40} className="text-brand-primary mx-auto mb-4 opacity-80" />
                 
                 <h3 className="text-2xl font-bold text-brand-text mb-2">Central de Ajuda Inteligente</h3>
                 <p className="text-brand-muted mb-8 max-w-md mx-auto">Digite sua dúvida e nossa IA busca a resposta em manuais, vídeos e documentações.</p>

                 {/* Barra de Busca Estilo "Command Line" */}
                 <div className="max-w-lg mx-auto w-full relative group">
                    <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center bg-[#0F1115] border border-brand-text/10 rounded-full px-6 py-4 shadow-2xl">
                        <span className="text-brand-primary font-mono mr-3">&gt;</span>
                        <input 
                            type="text" 
                            placeholder="Como emitir boleto híbrido?_" 
                            className="bg-transparent border-none outline-none text-brand-text w-full placeholder:text-brand-muted/50 font-mono text-sm"
                            readOnly // Apenas visual
                        />
                        <div className="w-6 h-6 rounded bg-brand-text/10 flex items-center justify-center text-brand-muted text-xs font-bold">↵</div>
                    </div>
                 </div>

                 {/* Tags Populares */}
                 <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {["Baixa em Lote", "API Key", "Conciliação", "LGPD"].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-brand-text/5 border border-brand-text/5 text-xs text-brand-muted hover:bg-brand-primary/10 hover:text-brand-primary hover:border-brand-primary/20 transition-all cursor-pointer">
                            #{tag}
                        </span>
                    ))}
                 </div>
            </div>

        </div>


        
        {/* CTA FINAL */}
        <div className="mt-24 text-center">
             <h2 className="text-2xl font-bold text-brand-text mb-6">Sua equipe merece essa tranquilidade.</h2>
             <button className="px-10 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
                Conhecer a Vouch Academy <ArrowRight size={18} />
            </button>
        </div>

      </div>
    </div>
  );
}

export default Support;