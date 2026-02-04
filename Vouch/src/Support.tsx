import { 
  Headset, GraduationCap, Users, PlayCircle, 
  CheckCircle2, ArrowRight, 
 Shield, Globe2, Check,
   Paperclip,
  Calendar, Star
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
        @keyframes blink-cursor { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        
        .animate-chat-1 { animation: chat-pop 0.5s ease-out forwards 0.2s; opacity: 0; }
        .animate-chat-2 { animation: chat-pop 0.5s ease-out forwards 1.2s; opacity: 0; }
        .animate-progress { animation: progress-load 2s ease-out forwards 0.5s; }
        .animate-play { animation: play-pulse 2s infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
        .cursor-blink { animation: blink-cursor 1s infinite; }
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

        {/* --- ÁREA DO CHAT SIMULADO (WHATSAPP STYLE) --- */}
        <div className="w-full mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative px-4 md:px-0">
                    <div className="absolute -left-20 top-0 w-80 h-80 bg-[#872a8c]/5 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-text/[0.03] border border-brand-text/10 text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-6 backdrop-blur-sm">
                        <Globe2 size={14} className="text-[#872a8c]" /> Web View
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
                        Equipe de Suporte <br/> 
                        <span className="text-[#872a8c]">especializada.</span>
                    </h2>
                    <p className="text-brand-muted text-lg mb-10 leading-relaxed border-l-2 border-brand-text/10 pl-6 text-justify">
                        Equipe realiza atendimentos onlines e personalizados para suas garantidoras, com tempo médio de resposta inferior a 5 minutos.
                    </p>
                    <ul className="space-y-4">
                        <li className="group flex items-center gap-4 p-4 rounded-xl bg-brand-text/[0.02] border-0 hover:bg-brand-text/[0.04] transition-all duration-300 cursor-default">
                            <div className="p-2 rounded-full bg-[#38c88a]/10 text-[#38c88a] group-hover:scale-110 group-hover:bg-[#38c88a] group-hover:text-white transition-all duration-300 shadow-sm">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <span className="text-brand-text font-medium text-lg">Duvidas simples do dia a dia</span>
                        </li>
                        <li className="group flex items-center gap-4 p-4 rounded-xl bg-brand-text/[0.02] border-0 hover:bg-brand-text/[0.04] transition-all duration-300 cursor-default">
                            <div className="p-2 rounded-full bg-[#38c88a]/10 text-[#38c88a] group-hover:scale-110 group-hover:bg-[#38c88a] group-hover:text-white transition-all duration-300 shadow-sm">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <span className="text-brand-text font-medium text-lg">Atendimento técnico especializado</span>
                        </li>
                        <li className="group flex items-center gap-4 p-4 rounded-xl bg-brand-text/[0.02] border-0 hover:bg-brand-text/[0.04] transition-all duration-300 cursor-default">
                            <div className="p-2 rounded-full bg-[#38c88a]/10 text-[#38c88a] group-hover:scale-110 group-hover:bg-[#38c88a] group-hover:text-white transition-all duration-300 shadow-sm">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <span className="text-brand-text font-medium text-lg">Atendimento personalizado</span>
                        </li>
                    </ul>
                </div>

                {/* --- CHAT UI (SIMULAÇÃO WHATSAPP/MESSENGER) --- */}
                <div className="order-1 lg:order-2 perspective-1200 group cursor-default relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#872a8c]/30 to-[#4a90e2]/30 blur-[60px] -z-10 rounded-[3rem] opacity-60"></div>
                    
                    {/* PHONE CONTAINER */}
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 bg-[#0F172A] border-[6px] border-[#1E293B] relative h-[600px] flex flex-col">
                        
                        {/* HEADER DO CHAT */}
                        <div className="bg-[#1E293B] p-4 flex items-center justify-between shadow-md z-20">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#872a8c] to-[#4a90e2] flex items-center justify-center text-white font-bold text-xs border-2 border-[#0F172A]">
                                        <Headset size={20} />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1E293B]"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Suporte Vouch</h3>
                                    <p className="text-[10px] text-green-400">Online agora • Responde rápido</p>
                                </div>
                            </div>
                            <div className="flex gap-2 text-gray-400">
                                <div className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"><Globe2 size={18}/></div>
                            </div>
                        </div>

                        {/* BODY DO CHAT */}
                        <div className="flex-1 bg-[#0B1120] p-4 space-y-5 overflow-y-auto relative scrollbar-thin">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#872a8c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* Data */}
                            <div className="flex justify-center">
                                <span className="bg-[#1E293B] text-gray-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Hoje</span>
                            </div>

                            {/* Mensagem 1 (Usuário) */}
                            <div className="flex justify-end animate-chat-1">
                                <div className="bg-[#872a8c] text-white p-3.5 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg relative group-hover:shadow-[#872a8c]/20 transition-all">
                                    <p className="text-sm leading-relaxed">Bom dia! Precisava de um auxilio para criação de um rateio.</p>
                                    <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
                                        <span className="text-[10px]">09:41</span>
                                        <CheckCircle2 size={12} />
                                    </div>
                                </div>
                            </div>

                            {/* Mensagem 2 (Suporte) */}
                            <div className="flex justify-start animate-chat-2" style={{ animationDelay: '0.5s' }}>
                                <div className="bg-[#1E293B] text-white p-3.5 rounded-2xl rounded-tl-none max-w-[85%] shadow-lg border border-white/5 relative">
                                    <p className="text-sm leading-relaxed">Olá! Boa tarde Tudo bem ? Consigo te auxiliar sim, qual seria sua duvida sobre o rateio?</p>
                                    <span className="text-[10px] opacity-50 block text-right mt-1">09:42</span>
                                </div>
                            </div>

                            {/* Mensagem 3 (Usuário) */}
                            <div className="flex justify-end animate-chat-1" style={{ animationDelay: '1.0s' }}>
                                <div className="bg-[#872a8c] text-white p-3.5 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg relative group-hover:shadow-[#872a8c]/20 transition-all">
                                    <p className="text-sm leading-relaxed">Seria sobre a taxa de desconto.</p>
                                    <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
                                        <span className="text-[10px]">09:43</span>
                                        <CheckCircle2 size={12} />
                                    </div>
                                </div>
                            </div>

                             {/* Mensagem 4 (Suporte - Encerramento) */}
                             <div className="flex justify-start animate-chat-2" style={{ animationDelay: '1.5s' }}>
                                <div className="bg-[#1E293B] text-white p-3.5 rounded-2xl rounded-tl-none max-w-[85%] shadow-lg border border-white/5 relative">
                                    <p className="text-sm leading-relaxed">No caso pode ser inserido nessa mesma tela apenas colocando o valor negativo.</p>
                                    <span className="text-[10px] opacity-50 block text-right mt-1">09:44</span>
                                </div>
                            </div>
                        </div>

                        {/* INPUT FAKE */}
                        <div className="bg-[#1E293B] p-3 flex items-center gap-2 z-20 border-t border-white/5">
                            <div className="p-2 text-gray-400 hover:text-white cursor-pointer"><Paperclip size={20} /></div>
                            <div className="flex-1 bg-[#0F172A] rounded-full h-10 px-4 flex items-center text-sm text-gray-300 relative">
                                <span className="mr-0.5">Obrigado, era só isso!</span>
                                <span className="w-0.5 h-4 bg-gray-300 cursor-blink"></span>
                            </div>
                            <div className="p-2.5 bg-[#872a8c] rounded-full text-white cursor-pointer hover:bg-[#9f55a3] transition-colors shadow-lg shadow-[#872a8c]/20">
                                <ArrowRight size={18} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* --- A TRÍADE DE SUCESSO (CARDS REDESENHADOS E ALINHADOS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
            
            {/* CARD 1 - VOUCH ACADEMY (IMAGEM AUMENTADA E LIMPA) */}
            <div className="group relative bg-brand-bg border-0 rounded-[2.5rem] p-8 flex flex-col overflow-hidden shadow-xl h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-[#872a8c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 mb-8 shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#872a8c]/10 flex items-center justify-center text-[#872a8c] mb-5 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(135,42,140,0.15)]">
                        <GraduationCap size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text mb-3">Vouch Academy™</h3>
                    <p className="text-brand-muted text-base leading-relaxed text-justify">
                        Ambiente Virtual de Aprendizagem. Sua equipe aprende a usar a plataforma com trilhas interativas.
                    </p>
                </div>
                
                {/* --- CONTAINER DO VÍDEO AUMENTADO (h-96 para ser bem alto) --- */}
                <div className="mt-auto relative rounded-2xl overflow-hidden bg-brand-text/5 border-0 h-96 group-hover:shadow-[0_5px_25px_rgba(135,42,140,0.25)] transition-all duration-300 w-full">
                    {/* IMAGEM AVA */}
                    <img 
                        src="/AVA.png" 
                        alt="Vouch Academy Interface" 
                        className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    {/* Gradiente apenas na parte inferior para leitura */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                    {/* Barra de Progresso e Título (Sem botão Play no meio) */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                        <div className="flex items-center justify-between mb-2">
                             <div className="text-sm font-bold text-white shadow-black/50 drop-shadow-sm flex items-center gap-2">
                                <PlayCircle size={16} className="text-[#872a8c] fill-[#872a8c]" /> Aula 01: Primeiros Passos
                             </div>
                             <span className="text-xs text-white/80 font-mono">35%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                            <div className="h-full bg-[#872a8c] w-[35%] group-hover:animate-progress shadow-[0_0_10px_#872a8c]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 2 - TICKETS GERENCIÁVEIS (UX/UI MINI APP) */}
            <div className="group relative bg-brand-bg border-0 rounded-[2.5rem] p-8 flex flex-col overflow-hidden shadow-xl h-full">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#38c88a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 mb-8 shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#38c88a]/10 flex items-center justify-center text-[#38c88a] mb-5 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(56,200,138,0.15)]">
                        <Headset size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text mb-3">Help Desk Integrado</h3>
                    <p className="text-brand-muted text-base leading-relaxed text-justify">
                       Centralize suas solicitações. Acompanhe o status dos chamados em tempo real com nossa equipe especializada.
                    </p>
                </div>

                {/* --- MINI INTERFACE DE APP DE TICKETS (Alinhado com o tema) --- */}
                <div className="mt-auto relative bg-brand-text/[0.02] border border-brand-text/5 rounded-2xl overflow-hidden h-96 flex flex-col group-hover:border-[#38c88a]/20 transition-colors">
                    {/* App Header */}
                    <div className="bg-[#38c88a]/10 p-4 flex items-center justify-between border-b border-[#38c88a]/10">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#38c88a] flex items-center justify-center text-white font-bold text-xs">TK</div>
                            <div>
                                <div className="text-xs font-bold text-brand-text">Ticket #9021</div>
                                <div className="text-[10px] text-[#38c88a] font-bold uppercase tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38c88a] animate-pulse"></span> Em andamento
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-bg/50 px-2 py-1 rounded text-[10px] text-brand-muted font-mono">
                            SLA: 1h
                        </div>
                    </div>

                    {/* App Body (Lista de Chamados) */}
                    <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden bg-brand-bg/50 relative">
                        {/* Mensagem do Sistema */}
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-text/10 flex items-center justify-center shrink-0">
                                <Globe2 size={14} className="text-brand-muted" />
                            </div>
                            <div className="bg-brand-text/5 p-3 rounded-xl rounded-tl-none text-xs text-brand-text/80 w-full border border-brand-text/5">
                                <p className="font-bold text-brand-text mb-1">Solicitação Recebida</p>
                                <p>Sua dúvida sobre "Baixa CNAB" foi atribuída ao técnico</p>
                                <span className="text-[9px] text-brand-muted mt-2 block">Hoje, 10:23</span>
                            </div>
                        </div>

                        {/* Resposta do Técnico */}
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#38c88a]/20 flex items-center justify-center shrink-0 text-[#38c88a]">
                                <Headset size={14} />
                            </div>
                            <div className="bg-[#38c88a]/10 p-3 rounded-xl rounded-tl-none text-xs text-brand-text w-full border border-[#38c88a]/20 shadow-sm">
                                <p>Olá! Já estou analisando o arquivo enviado. Em instantes retorno com a solução.</p>
                                <span className="text-[9px] text-[#38c88a]/70 mt-2 block">Hoje, 10:28</span>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="mt-auto pt-2">
                             <div className="h-10 bg-brand-text/5 rounded-lg border border-brand-text/10 flex items-center px-3 text-xs text-brand-muted">
                                 Digite uma resposta...
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 3 - ACOMPANHAMENTO (PAINEL DO CLIENTE UI) */}
            <div className="group relative bg-brand-bg border-0 rounded-[2.5rem] p-8 flex flex-col overflow-hidden shadow-xl h-full">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#4a90e2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 mb-8 shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-[#4a90e2]/10 flex items-center justify-center text-[#4a90e2] mb-5 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(74,144,226,0.15)]">
                        <Users size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text mb-3">Acompanhamento estratégico</h3>
                    <p className="text-brand-muted text-base leading-relaxed text-justify">
                        Acompanhamento contínuo pós-venda. Garantimos que sua operação esteja sempre performando ao máximo.
                    </p>
                </div>

                {/* --- UI DE PAINEL DE SUCESSO --- */}
                <div className="mt-auto relative bg-brand-text/[0.02] border border-brand-text/5 rounded-2xl overflow-hidden h-96 flex flex-col group-hover:border-[#4a90e2]/20 transition-colors">
                    
                    {/* Header do Gerente */}
                    <div className="bg-[#4a90e2]/10 p-5 flex items-center gap-4 border-b border-[#4a90e2]/10">
                         <div className="w-12 h-12 rounded-full border-2 border-[#4a90e2] p-0.5">
                             <img src="https://ui-avatars.com/api/?name=Ana+CS&background=4a90e2&color=fff" className="w-full h-full rounded-full" alt="CS Manager" />
                         </div>
                         <div>
                             <p className="text-xs text-[#4a90e2] font-bold uppercase tracking-wider">Acompanhamento de integração</p>
                             <p className="text-sm font-bold text-brand-text">Primeiros passos para a integração</p>
                             <div className="flex items-center gap-1 mt-0.5">
                                 <Star size={10} className="fill-[#4a90e2] text-[#4a90e2]" />
                                 <span className="text-[10px] text-brand-muted">Dedicação Exclusiva</span>
                             </div>
                         </div>
                    </div>

                    {/* Timeline de Evolução */}
                    <div className="flex-1 p-5 flex flex-col justify-center gap-5 relative">
                         {/* Linha vertical */}
                         <div className="absolute left-[38px] top-6 bottom-6 w-0.5 bg-brand-text/10"></div>

                         {/* Item 1 */}
                         <div className="flex items-center gap-4 relative z-10 opacity-50 grayscale">
                             <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-text/10 flex items-center justify-center text-brand-muted text-xs font-bold">1</div>
                             <div>
                                 <p className="text-xs font-bold text-brand-muted line-through">Setup Inicial</p>
                             </div>
                         </div>

                         {/* Item 2 */}
                         <div className="flex items-center gap-4 relative z-10">
                             <div className="w-9 h-9 rounded-full bg-[#4a90e2] text-white flex items-center justify-center shadow-lg shadow-[#4a90e2]/30">
                                 <Check size={16} strokeWidth={3} />
                             </div>
                             <div>
                                 <p className="text-sm font-bold text-brand-text">Integração</p>
                                 <p className="text-[10px] text-[#4a90e2]">Operação Iniciada</p>
                             </div>
                         </div>

                         {/* Item 3 */}
                         <div className="flex items-center gap-4 relative z-10">
                              <div className="w-9 h-9 rounded-full bg-brand-bg border-2 border-[#4a90e2] flex items-center justify-center shadow-lg shadow-[#4a90e2]/10">
                                 <Calendar size={16} className="text-[#4a90e2]" />
                             </div>
                             <div className="bg-[#4a90e2]/10 px-3 py-2 rounded-lg border border-[#4a90e2]/20">
                                 <p className="text-xs font-bold text-brand-text">Próxima Reunião</p>
                                 <p className="text-[10px] text-brand-muted">Revisão Trimestral • 14/Out</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- MÉTRICAS --- */}
        <div className="mb-32 border-t border-brand-text/10 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div>
                    <div className="text-4xl md:text-5xl font-black text-brand-text mb-2"><span className="text-[#872a8c]">&lt;</span> 5 min</div>
                    <div className="text-sm text-brand-muted uppercase tracking-widest font-bold">Tempo Médio de Resposta</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black text-brand-text mb-2">+30</div>
                    <div className="text-sm text-brand-muted uppercase tracking-widest font-bold">Vídeo-Aulas</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black text-brand-text mb-2">99%</div>
                    <div className="text-sm text-brand-muted uppercase tracking-widest font-bold">Casos solucionados</div>
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
                <span className="text-[#38c88a] font-mono text-sm uppercase tracking-widest mb-3 block">Processo de Migração</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text">Acompanhamento do inicio a produção</h2>
                <p className="text-brand-muted mt-3 text-lg">Sua operação migrada em tempo recorde.</p>
            </div>

            {/* Linha Central (Desktop) / Linha Lateral (Mobile) */}
            <div className="absolute left-6 md:left-1/2 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#38c88a] via-[#872a8c] to-[#f2c94c] opacity-30 md:-translate-x-1/2"></div>

            <div className="space-y-16 relative z-10">
                {/* ETAPA 1 - VERDE */}
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    {/* Texto (Esquerda no Desktop, Direita no Mobile) */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right">
                        <h3 className="text-2xl font-bold text-brand-text group-hover:text-[#38c88a] transition-colors">Dia 1: Inicio e integrações </h3>
                        <p className="text-base text-brand-muted text-justify md:text-right mt-2">Reunião de alinhamento e liberação das credenciais de acesso.</p>
                    </div>
                    
                    {/* Nó Central (Bolinha) */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-bg border-4 border-[#38c88a] group-hover:scale-125 group-hover:bg-[#38c88a] transition-all shadow-[0_0_15px_rgba(56,200,138,0.5)]"></div>

                    {/* Card Visual (Direita no Desktop, Abaixo no Mobile) */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-16">
                        <div className="p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-[#38c88a]/[0.05] group-hover:border-[#38c88a]/20 transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-[#38c88a] animate-pulse"></div>
                                <span className="text-sm font-mono text-[#38c88a]">Inicio do processo de migração</span>
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
                                 <span className="text-sm font-mono text-[#872a8c]">Migração de dados...</span>
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
                        <h3 className="text-2xl font-bold text-brand-text group-hover:text-[#872a8c] transition-colors">Dia 3: Migração de Dados</h3>
                        <p className="text-base text-brand-muted text-justify mt-2">Importação da sua base de clientes e histórico financeiro.</p>
                    </div>
                </div>

                {/* ETAPA 3 - AZUL */}
                <div className="flex flex-col md:flex-row items-center gap-8 group">
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right">
                        <h3 className="text-2xl font-bold text-brand-text group-hover:text-[#4a90e2] transition-colors">Dia 5: Treinamento</h3>
                        <p className="text-base text-brand-muted text-justify md:text-right mt-2">Liberação da Vouch Academy e workshop ao vivo.</p>
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-bg border-4 border-[#4a90e2] group-hover:scale-125 group-hover:bg-[#4a90e2] transition-all shadow-[0_0_15px_rgba(74,144,226,0.5)]"></div>
                    <div className="w-full md:w-1/2 pl-16 md:pl-16">
                        <div className="p-6 rounded-2xl bg-brand-text/[0.02] border border-brand-text/5 group-hover:bg-[#4a90e2]/[0.05] group-hover:border-[#4a90e2]/20 transition-all">
                              <div className="w-full bg-brand-text/10 rounded-full h-2 overflow-hidden mb-3">
                                 <div className="h-full bg-[#4a90e2] w-[85%]"></div>
                              </div>
                              <div className="text-sm font-mono text-[#4a90e2] text-right"> Treinamentos em andamento: 85%</div>
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
                        <h3 className="text-2xl font-bold text-brand-text group-hover:text-[#f2c94c] transition-colors">Dia 7: Operando 100% !</h3>
                        <p className="text-base text-brand-muted text-justify mt-2">Virada de chave. Sua operação rodando 100% no ambiente Vouch.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-32 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-8">Sua equipe merece essa tranquilidade.</h2>
             <button className="px-12 py-5 bg-[#872a8c] hover:bg-[#b77fba] text-white font-bold rounded-2xl transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-3 text-lg">
                Agende sua Demonstração agora <ArrowRight size={20} />
            </button>
        </div>

      </div>
    </div>
  );
}

export default Support;