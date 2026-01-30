import { 
  Headset, GraduationCap, Users, PlayCircle, 
  CheckCircle2, ArrowRight, 
  BookOpen, Shield, Globe2, Check
} from 'lucide-react';

function Support() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-[#872a8c] selection:text-white overflow-x-hidden relative">
      
      {/* --- BACKGROUND DEEP SPACE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#872a8c]/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#4a90e2]/10 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(135,42,140,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
      </div>

      <style>{`
        @keyframes chat-pop { 0% { opacity: 0; transform: translateY(10px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes progress-load { 0% { width: 0%; } 100% { width: 75%; } }
        @keyframes play-pulse { 0% { box-shadow: 0 0 0 0 rgba(135, 42, 140, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(135, 42, 140, 0); } 100% { box-shadow: 0 0 0 0 rgba(135, 42, 140, 0); } }
        @keyframes scan { 0% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        
        .animate-chat-1 { animation: chat-pop 0.5s ease-out forwards 0.2s; opacity: 0; }
        .animate-chat-2 { animation: chat-pop 0.5s ease-out forwards 1.2s; opacity: 0; }
        .animate-progress { animation: progress-load 2s ease-out forwards 0.5s; }
        .animate-play { animation: play-pulse 2s infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
      `}</style>

      {/* Container principal */}
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-20 relative z-10 w-full">

        {/* --- HERO SECTION --- */}
        <div className="text-center max-w-6xl mx-auto mb-32 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#872a8c]/10 blur-[90px] -z-10 rounded-full"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#872a8c]/20 bg-[#872a8c]/5 text-xs font-bold uppercase tracking-widest text-[#872a8c] mb-8 shadow-[0_0_15px_rgba(135,42,140,0.2)] backdrop-blur-md">
              <Shield size={14} className="animate-pulse" /> Suporte & Sucesso
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-brand-text mb-8 tracking-tight drop-shadow-2xl">
              Não é só software. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#872a8c] via-[#b77fba] to-[#4a90e2] animate-gradient-x">
                É uma Parceria Real.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-muted font-light leading-relaxed max-w-4xl mx-auto text-justify px-4 md:px-0">
              Sabemos que mudar de sistema dá medo. Por isso, criamos uma <span className="text-brand-text font-semibold">estrutura de elite</span> com acolhimento, treinamento e suporte técnico para sua equipe nunca parar.
            </p>
        </div>

        {/* --- ÁREA DA FOTO DO SISTEMA --- */}
        <div className="w-full mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative px-4 md:px-0">
                    <div className="absolute -left-20 top-0 w-80 h-80 bg-[#872a8c]/5 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-text/[0.03] border border-brand-text/10 text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-6 backdrop-blur-sm">
                        <Globe2 size={14} className="text-[#872a8c]" /> Web View
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
                        Portal do Cliente: <br/> 
                        <span className="text-[#872a8c]">Autonomia Total.</span>
                    </h2>
                    <p className="text-brand-muted text-lg mb-10 leading-relaxed border-l-2 border-brand-text/10 pl-6 text-justify">
                        Reduza ligações e e-mails drasticamente. Seus clientes resolvem tudo sozinhos em um portal intuitivo, moderno e 100% responsivo.
                    </p>
                    <ul className="space-y-4">
                        <li className="group flex items-center gap-4 p-4 rounded-xl bg-brand-text/[0.02] border-0 hover:bg-brand-text/[0.04] transition-all duration-300 cursor-default">
                            <div className="p-2 rounded-full bg-[#38c88a]/10 text-[#38c88a] group-hover:scale-110 group-hover:bg-[#38c88a] group-hover:text-white transition-all duration-300 shadow-sm">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <span className="text-brand-text font-medium text-lg">Emissão de 2ª Via de Boleto</span>
                        </li>
                        <li className="group flex items-center gap-4 p-4 rounded-xl bg-brand-text/[0.02] border-0 hover:bg-brand-text/[0.04] transition-all duration-300 cursor-default">
                            <div className="p-2 rounded-full bg-[#38c88a]/10 text-[#38c88a] group-hover:scale-110 group-hover:bg-[#38c88a] group-hover:text-white transition-all duration-300 shadow-sm">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <span className="text-brand-text font-medium text-lg">Prestação de Contas Transparente</span>
                        </li>
                        <li className="group flex items-center gap-4 p-4 rounded-xl bg-brand-text/[0.02] border-0 hover:bg-brand-text/[0.04] transition-all duration-300 cursor-default">
                            <div className="p-2 rounded-full bg-[#38c88a]/10 text-[#38c88a] group-hover:scale-110 group-hover:bg-[#38c88a] group-hover:text-white transition-all duration-300 shadow-sm">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <span className="text-brand-text font-medium text-lg">Reserva de Áreas Comuns</span>
                        </li>
                    </ul>
                </div>
                <div className="order-1 lg:order-2 perspective-1200 group cursor-default relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#872a8c]/30 to-[#4a90e2]/30 blur-[60px] -z-10 rounded-[3rem] opacity-60"></div>
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 bg-brand-bg/50 backdrop-blur-sm relative border-0">
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none z-20"></div>
                          <img
                            src="https://placehold.co/1600x1000/1a102c/e7d4e8.png?text=Print+do+Sistema+Vouch+(Substituir)"
                            alt="Portal do Cliente Vouch"
                            className="w-full h-auto object-cover relative z-10"
                          />
                    </div>
                </div>
            </div>
        </div>

        {/* --- A TRÍADE DE SUCESSO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* CARD 1 */}
            <div className="group relative bg-brand-bg border-0 rounded-[2.5rem] p-8 flex flex-col overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-[#872a8c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#872a8c]/10 flex items-center justify-center text-[#872a8c] mb-6 group-hover:scale-110 transition-transform">
                        <GraduationCap size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-text mb-4">Vouch Academy™</h3>
                    <p className="text-brand-muted text-lg leading-relaxed text-justify">
                        Sistema de treinamento próprio. Seus novos colaboradores aprendem a usar a plataforma sozinhos com nossa trilha de vídeos interativos.
                    </p>
                </div>
                <div className="mt-auto relative rounded-xl overflow-hidden bg-brand-text/5 border-0 aspect-video group-hover:shadow-[0_0_30px_rgba(135,42,140,0.3)] transition-shadow">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg to-[#872a8c]/20 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer group-hover:scale-110 transition-transform animate-play">
                            <PlayCircle size={40} fill="currentColor" className="text-[#872a8c]" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="text-sm font-bold text-white mb-2">Aula 01: Cadastrando a Primeira Garantia</div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-[#872a8c] w-0 group-hover:animate-progress"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-brand-bg border-0 rounded-[2.5rem] p-8 flex flex-col overflow-hidden shadow-xl">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#38c88a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#38c88a]/10 flex items-center justify-center text-[#38c88a] mb-6 group-hover:scale-110 transition-transform">
                        <Headset size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-text mb-4">Suporte Especializado</h3>
                    <p className="text-brand-muted text-lg leading-relaxed text-justify">
                        Esqueça robôs. Nossa equipe é formada por especialistas no mercado imobiliário prontos para resolver dúvidas técnicas e operacionais.
                    </p>
                </div>
                <div className="mt-auto relative bg-brand-bg border border-brand-text/5 rounded-2xl p-6 h-56 flex flex-col gap-4 overflow-hidden">
                    <div className="self-end bg-brand-text/5 text-brand-muted text-sm p-4 rounded-l-xl rounded-tr-xl max-w-[85%] animate-chat-1">
                        Estou com dúvida na baixa do arquivo CNAB.
                    </div>
                    <div className="self-start bg-[#38c88a]/10 text-[#38c88a] border border-[#38c88a]/20 text-sm p-4 rounded-r-xl rounded-tl-xl max-w-[90%] flex gap-3 items-start animate-chat-2 shadow-lg shadow-[#38c88a]/10">
                        <div className="mt-0.5"><CheckCircle2 size={16} /></div>
                        <div>Oi! Vou te ajudar. O sistema já identificou o erro na linha 4.</div>
                    </div>
                </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative bg-brand-bg border-0 rounded-[2.5rem] p-8 flex flex-col overflow-hidden shadow-xl">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#4a90e2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#4a90e2]/10 flex items-center justify-center text-[#4a90e2] mb-6 group-hover:scale-110 transition-transform">
                        <Users size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-text mb-4">Customer Success</h3>
                    <p className="text-brand-muted text-lg leading-relaxed text-justify">
                        Não te abandonamos após a venda. Um gerente de sucesso acompanha sua evolução, sugerindo melhorias para sua operação escalar.
                    </p>
                </div>
                <div className="mt-auto relative bg-brand-text/[0.02] border border-brand-text/5 rounded-2xl p-6 h-56 flex flex-col justify-center gap-5">
                    <div className="flex items-center gap-4 opacity-50">
                        <div className="w-6 h-6 rounded-full border-2 border-brand-text/20 flex items-center justify-center"><CheckCircle2 size={16} className="text-brand-text/20" /></div>
                        <div className="h-2.5 w-2/3 bg-brand-text/10 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#4a90e2] text-white flex items-center justify-center shadow-lg shadow-[#4a90e2]/40"><CheckCircle2 size={16} /></div>
                        <span className="text-sm font-bold text-brand-text">Migração de Dados Concluída</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#4a90e2] text-white flex items-center justify-center shadow-lg shadow-[#4a90e2]/40"><CheckCircle2 size={16} /></div>
                        <span className="text-sm font-bold text-brand-text">Treinamento da Equipe</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-[#4a90e2] border-t-transparent animate-spin"></div>
                        <span className="text-sm font-bold text-[#4a90e2]">Go Live (Lançamento)</span>
                    </div>
                </div>
            </div>
        </div>

        {/* --- MÉTRICAS --- */}
        <div className="mb-32 border-t border-brand-text/10 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div>
                    <div className="text-4xl md:text-5xl font-black text-brand-text mb-2"><span className="text-[#872a8c]">&lt;</span> 2 min</div>
                    <div className="text-sm text-brand-muted uppercase tracking-widest font-bold">Tempo Médio de Resposta</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black text-brand-text mb-2">+50</div>
                    <div className="text-sm text-brand-muted uppercase tracking-widest font-bold">Vídeo-Aulas</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black text-brand-text mb-2">98%</div>
                    <div className="text-sm text-brand-muted uppercase tracking-widest font-bold">Satisfação (CSAT)</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black text-brand-text mb-2">24/7</div>
                    <div className="text-sm text-brand-muted uppercase tracking-widest font-bold">Monitoramento de Sistema</div>
                </div>
            </div>
        </div>

        {/* ===================================================================================== */}
        {/* JORNADA DE IMPLEMENTAÇÃO (RÉGUA CORRIGIDA) */}
        {/* ===================================================================================== */}
        <div className="mb-32 relative">
            <div className="text-center mb-20">
                <span className="text-[#38c88a] font-mono text-sm uppercase tracking-widest mb-3 block">Processo de Onboarding</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text">Do Zero ao Go-Live</h2>
                <p className="text-brand-muted mt-3 text-lg">Sua operação migrada em tempo recorde.</p>
            </div>

            {/* Linha Central (Desktop) / Linha Lateral (Mobile) */}
            <div className="absolute left-6 md:left-1/2 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#38c88a] via-[#872a8c] to-[#f2c94c] opacity-30 md:-translate-x-1/2"></div>

            <div className="space-y-16 relative z-10">
                {/* ETAPA 1 - VERDE */}
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    {/* Texto (Esquerda no Desktop, Direita no Mobile) */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right">
                        <h3 className="text-2xl font-bold text-brand-text group-hover:text-[#38c88a] transition-colors">Day 1: Kick-off & Setup</h3>
                        <p className="text-base text-brand-muted text-justify md:text-right mt-2">Reunião de alinhamento e liberação das credenciais de acesso.</p>
                    </div>
                    
                    {/* Nó Central (Bolinha) */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-bg border-4 border-[#38c88a] group-hover:scale-125 group-hover:bg-[#38c88a] transition-all shadow-[0_0_15px_rgba(56,200,138,0.5)]"></div>

                    {/* Card Visual (Direita no Desktop, Abaixo no Mobile) */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-16">
                        <div className="p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-[#38c88a]/[0.05] group-hover:border-[#38c88a]/20 transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-[#38c88a] animate-pulse"></div>
                                <span className="text-sm font-mono text-[#38c88a]">SYSTEM_INIT_SUCCESS</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ETAPA 2 - ROXO */}
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    {/* Card Visual (Esquerda no Desktop) */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 order-last md:order-first">
                         <div className="p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-[#872a8c]/[0.05] group-hover:border-[#872a8c]/20 transition-all text-right">
                            <div className="flex items-center gap-4 justify-end">
                                 <span className="text-sm font-mono text-[#872a8c]">DATABASE_IMPORT...</span>
                                 <div className="flex gap-1.5">
                                    <div className="w-1.5 h-4 bg-[#872a8c]/50"></div>
                                    <div className="w-1.5 h-4 bg-[#872a8c]/80"></div>
                                    <div className="w-1.5 h-4 bg-[#872a8c]"></div>
                                 </div>
                            </div>
                        </div>
                    </div>

                    {/* Nó Central */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-bg border-4 border-[#872a8c] group-hover:scale-125 group-hover:bg-[#872a8c] transition-all shadow-[0_0_15px_rgba(135,42,140,0.5)]"></div>

                    {/* Texto (Direita) */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-16">
                        <h3 className="text-2xl font-bold text-brand-text group-hover:text-[#872a8c] transition-colors">Day 3: Migração de Dados</h3>
                        <p className="text-base text-brand-muted text-justify mt-2">Importação da sua base de clientes e histórico financeiro.</p>
                    </div>
                </div>

                {/* ETAPA 3 - AZUL */}
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right">
                        <h3 className="text-2xl font-bold text-brand-text group-hover:text-[#4a90e2] transition-colors">Day 5: Treinamento</h3>
                        <p className="text-base text-brand-muted text-justify md:text-right mt-2">Liberação da Vouch Academy e workshop ao vivo.</p>
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-bg border-4 border-[#4a90e2] group-hover:scale-125 group-hover:bg-[#4a90e2] transition-all shadow-[0_0_15px_rgba(74,144,226,0.5)]"></div>
                    <div className="w-full md:w-1/2 pl-16 md:pl-16">
                        <div className="p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-[#4a90e2]/[0.05] group-hover:border-[#4a90e2]/20 transition-all">
                              <div className="w-full bg-brand-text/10 rounded-full h-2 overflow-hidden mb-3">
                                 <div className="h-full bg-[#4a90e2] w-[85%]"></div>
                              </div>
                              <div className="text-sm font-mono text-[#4a90e2] text-right">Knowledge: 85%</div>
                        </div>
                    </div>
                </div>

                 {/* ETAPA 4 - AMARELO */}
                 <div className="flex flex-col md:flex-row items-center gap-8 group">
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 order-last md:order-first">
                        <div className="p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-[#f2c94c]/[0.05] group-hover:border-[#f2c94c]/20 transition-all text-right">
                            <div className="inline-block px-4 py-1.5 bg-[#f2c94c]/20 text-[#f2c94c] rounded text-sm font-bold animate-pulse">
                                LIVE STATUS: ONLINE
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-bg border-4 border-[#f2c94c] group-hover:scale-125 group-hover:bg-[#f2c94c] transition-all shadow-[0_0_15px_rgba(242,201,76,0.5)]"></div>
                    <div className="w-full md:w-1/2 pl-16 md:pl-16">
                        <h3 className="text-2xl font-bold text-brand-text group-hover:text-[#f2c94c] transition-colors">Day 7: Go Live!</h3>
                        <p className="text-base text-brand-muted text-justify mt-2">Virada de chave. Sua operação rodando 100% no ambiente Vouch.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* ===================================================================================== */}
        {/* CENTRAL DE INTELIGÊNCIA (REFEITA) */}
        {/* ===================================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
            
            {/* Esquerda: Monitor de Status */}
            <div className="md:col-span-4 bg-[#0F1115] border border-brand-text/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38c88a]/5 to-transparent h-[20%] animate-scan pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h3 className="text-sm font-bold text-brand-muted uppercase tracking-wider mb-2">System Status</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#38c88a] animate-pulse shadow-[0_0_10px_#38c88a]"></div>
                            <span className="text-xl font-mono font-bold text-[#38c88a]">Operational</span>
                        </div>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-brand-text/20"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-text/20"></div>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="flex justify-between text-sm border-b border-brand-text/5 pb-3">
                        <span className="text-brand-muted">Latency</span>
                        <span className="text-[#38c88a] font-mono">24ms</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-brand-text/5 pb-3">
                        <span className="text-brand-muted">Uptime</span>
                        <span className="text-[#38c88a] font-mono">99.99%</span>
                    </div>
                    <div className="flex justify-between text-sm pb-2">
                        <span className="text-brand-muted">Backup</span>
                        <span className="text-brand-text font-mono">Synced</span>
                    </div>
                </div>

                <div className="mt-8 flex items-end gap-1.5 h-14 opacity-40">
                    {[40, 60, 45, 70, 50, 80, 75, 90, 60, 85].map((h, i) => (
                          <div key={i} style={{height: `${h}%`}} className="flex-1 bg-[#38c88a] rounded-t-sm transition-all duration-500 group-hover:bg-emerald-400"></div>
                    ))}
                </div>
            </div>

            {/* Direita: Help Center */}
            <div className="md:col-span-8 bg-[#872a8c]/5 border border-[#872a8c]/20 rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col justify-center text-center">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(135,42,140,0.15)_0%,transparent_60%)]"></div>

                 <BookOpen size={56} className="text-[#872a8c] mx-auto mb-8 opacity-90" />
                 
                 <h3 className="text-4xl font-bold text-brand-text mb-4">Central de Ajuda Inteligente</h3>
                 <p className="text-brand-muted mb-12 max-w-lg mx-auto text-xl">Digite sua dúvida e nossa IA busca a resposta em manuais, vídeos e documentações.</p>

                 <div className="max-w-2xl mx-auto w-full relative group">
                    <div className="absolute inset-0 bg-[#872a8c]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center bg-brand-bg border border-brand-text/10 rounded-2xl px-8 py-6 shadow-2xl transition-all focus-within:border-[#872a8c]/50">
                        <span className="text-[#872a8c] font-mono mr-5 text-2xl">&gt;</span>
                        <input 
                            type="text" 
                            placeholder="Como emitir boleto híbrido?_" 
                            className="bg-transparent border-none outline-none text-brand-text w-full placeholder:text-brand-muted/50 font-mono text-lg md:text-xl"
                            readOnly 
                        />
                        <div className="w-10 h-10 rounded bg-brand-text/10 flex items-center justify-center text-brand-muted text-base font-bold ml-3">↵</div>
                    </div>
                 </div>

                 <div className="flex flex-wrap justify-center gap-4 mt-10">
                    {["Baixa em Lote", "API Key", "Conciliação", "LGPD"].map((tag) => (
                        <span key={tag} className="px-5 py-2 rounded-full bg-brand-text/5 border border-brand-text/5 text-base text-brand-muted hover:bg-[#872a8c]/10 hover:text-[#872a8c] hover:border-[#872a8c]/30 transition-all cursor-pointer">
                            #{tag}
                        </span>
                    ))}
                 </div>
            </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-32 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-8">Sua equipe merece essa tranquilidade.</h2>
             <button className="px-12 py-5 bg-[#872a8c] hover:bg-[#b77fba] text-white font-bold rounded-2xl transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-3 text-lg">
                Conhecer a Vouch Academy <ArrowRight size={20} />
            </button>
        </div>

      </div>
    </div>
  );
}

export default Support;