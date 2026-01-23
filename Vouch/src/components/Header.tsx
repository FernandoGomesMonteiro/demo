import { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Sun, Moon, ChevronDown, 
  Zap, BarChart3, ShieldCheck, FileText 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Sub-itens do menu Funcionalidades
const featuresSubMenu = [
  { 
    name: "Automação de Cobrança", 
    desc: "Régua inteligente via SMS e Email", 
    icon: Zap, 
    path: "/funcionalidades/automacao" 
  },
  { 
    name: "Dashboard Executivo", 
    desc: "Metricas em tempo real", 
    icon: BarChart3, 
    path: "/funcionalidades/dashboard" 
  },
  { 
    name: "Gestão Jurídica", 
    desc: "Controle de processos e acordos", 
    icon: ShieldCheck, 
    path: "/funcionalidades/juridico" 
  },
  { 
    name: "Prestação de Contas", 
    desc: "Transparência para o condomínio", 
    icon: FileText, 
    path: "/funcionalidades/relatorios" 
  },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- PERSISTÊNCIA DO TEMA ---
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light';
  });
  
  const location = useLocation();
  // Função auxiliar para verificar rota ativa
  const isActive = (path: string) => location.pathname === path;

  // Efeito de Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Salvar Tema
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-bg/80 backdrop-blur-xl border-brand-text/5 py-3 shadow-lg shadow-brand-primary/5' 
          : 'bg-transparent border-transparent py-6' 
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/Logomarca_Vouch - Copia.png" 
              alt="Logo Vouch" 
              className="h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight text-brand-text group-hover:text-brand-primary transition-colors duration-300">
            Vouch
          </span>
        </Link>

        {/* --- MENU DESKTOP --- */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          
          <Link 
            to="/" 
            className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
              isActive('/') ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-text'
            }`}
          >
            Home
          </Link>

          <Link 
            to="/sobre" 
            className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
              isActive('/sobre') ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-text'
            }`}
          >
            Quem Somos
          </Link>

          {/* NOVO LINK ADICIONADO AQUI */}
          <Link 
            to="/diferenciais" 
            className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
              isActive('/diferenciais') ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-text'
            }`}
          >
            Diferenciais
          </Link>

          {/* --- DROPDOWN FUNCIONALIDADES --- */}
          <div className="group relative py-4">
            <button 
              className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-300 focus:outline-none ${
                location.pathname.includes('/funcionalidades') ? 'text-brand-primary' : 'text-brand-muted group-hover:text-brand-text'
              }`}
            >
              Funcionalidades
              <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* O Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out min-w-[500px]">
              <div className="bg-brand-bg/95 backdrop-blur-2xl border border-brand-text/10 rounded-2xl shadow-2xl p-6 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-50"></div>
                
                <div className="grid grid-cols-2 gap-4">
                  {featuresSubMenu.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-text/5 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-all">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-text text-sm group-hover/item:text-brand-primary transition-colors">{item.name}</h4>
                        <p className="text-xs text-brand-muted leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-brand-text/5 text-center">
                  <Link to="/funcionalidades" className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1">
                    Ver todas as funcionalidades <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link 
            to="/integracoes" 
            className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
              isActive('/integracoes') ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-text'
            }`}
          >
            Integrações
          </Link>

        </nav>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-4">
          
          <button 
            onClick={() => setIsLightMode(!isLightMode)} 
            className="p-2.5 rounded-full text-brand-muted hover:bg-brand-text/5 hover:text-brand-text transition-all active:scale-95"
            title={isLightMode ? "Modo Escuro" : "Modo Claro"}
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-brand-bg bg-brand-text rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-text/10"
          >
            Agendar Demo 
            <ChevronRight size={16} />
          </a>
          
          <button 
            className="lg:hidden text-brand-text p-2 hover:bg-brand-text/5 rounded-lg transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE --- */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '80px' }}>
        <div className="p-6 flex flex-col gap-2 h-full overflow-y-auto">
          
          <Link to="/" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/sobre" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5" onClick={() => setIsMobileMenuOpen(false)}>Quem Somos</Link>
          
          {/* Link Mobile Adicionado */}
          <Link to="/diferenciais" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5" onClick={() => setIsMobileMenuOpen(false)}>Diferenciais</Link>
          
          {/* Submenu Mobile */}
          <div className="py-4 border-b border-brand-text/5">
            <p className="text-xl font-bold text-brand-text mb-4">Funcionalidades</p>
            <div className="pl-4 flex flex-col gap-4">
              {featuresSubMenu.map(item => (
                <Link key={item.name} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-brand-muted">
                  <item.icon size={18} className="text-brand-primary" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/integracoes" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5" onClick={() => setIsMobileMenuOpen(false)}>Integrações</Link>
          
          <a href="https://wa.me/5511999999999" className="mt-8 w-full py-4 bg-brand-primary text-white rounded-xl font-bold text-lg text-center shadow-lg">
              Falar com Consultor
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;