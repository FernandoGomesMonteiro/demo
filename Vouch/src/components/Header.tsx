import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- PERSISTÊNCIA DO TEMA ---
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'light';
    }
    return false;
  });
  
  const location = useLocation();
  
  // CORREÇÃO AQUI: Adicionado ': string' para satisfazer o TypeScript
  const isActive = (path: string) => location.pathname === path;

  // Efeito de Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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

  // Bloquear rolagem da página quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // --- LÓGICA DE CORES DOS LINKS (DESKTOP) ---
  // CORREÇÃO AQUI: Adicionado ': string'
  const getLinkClasses = (path: string) => {
    const active = isActive(path);
    const baseClasses = "text-base font-bold tracking-wide transition-colors duration-300 uppercase";

    if (isLightMode) {
        // MODO CLARO (Branco)
        if (active) {
            return `${baseClasses} text-[#872a8c]`; // Selecionado: Roxo Claro/Vibrante
        }
        return `${baseClasses} text-[#4a2a70] hover:text-[#872a8c]/80`; // Não Selecionado: Roxo Escuro
    } else {
        // MODO ESCURO (Padrão)
        if (active) {
            return `${baseClasses} text-brand-primary`;
        }
        return `${baseClasses} text-brand-text/70 hover:text-brand-text`;
    }
  };

  // --- LÓGICA DE CORES DOS LINKS (MOBILE) ---
  // CORREÇÃO AQUI: Adicionado ': string'
  const getMobileLinkClasses = (path: string) => {
    const active = isActive(path);
    
    // Configurações visuais do mobile (Tamanho ajustado conforme solicitado anteriormente)
    const baseClasses = "text-lg font-bold py-4 border-b border-brand-text/10 transition-colors block w-full";

    if (isLightMode) {
        // MODO CLARO MOBILE
        if (active) {
             return `${baseClasses} text-[#872a8c] pl-4 bg-[#872a8c]/5`; 
        }
        return `${baseClasses} text-[#4a2a70] hover:text-[#872a8c] hover:pl-4 hover:bg-[#872a8c]/5`; 
    } else {
        // MODO ESCURO MOBILE
        if (active) return `${baseClasses} text-brand-primary pl-4 bg-brand-primary/5`;
        return `${baseClasses} text-brand-text hover:text-brand-primary hover:pl-4 hover:bg-brand-primary/5`;
    }
  };

  // Altura dinâmica do header
  const headerHeight = isScrolled ? '72px' : '88px'; 

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-[60] transition-all duration-300 border-b flex items-center ${
          isScrolled ? 'h-[72px]' : 'h-[88px]'
        } ${
          isScrolled || isMobileMenuOpen
            ? 'bg-brand-bg shadow-md border-brand-text/5' 
            : 'bg-transparent border-transparent' 
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/Logomarca_Vouch.png" 
                alt="Logo Vouch" 
                className="h-10 md:h-12 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </Link>

          {/* --- MENU DESKTOP --- */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link to="/" className={getLinkClasses('/')}>Home</Link>
            <Link to="/sobre" className={getLinkClasses('/sobre')}>Quem Somos</Link>
            <Link to="/funcionalidades" className={getLinkClasses('/funcionalidades')}>Funcionalidades</Link>
            <Link to="/suporte" className={getLinkClasses('/suporte')}>Suporte</Link>
            <Link to="/integracoes" className={getLinkClasses('/integracoes')}>Integrações</Link>
          </nav>

          {/* --- ACTIONS --- */}
          <div className="flex items-center gap-4">
            
            <button 
              onClick={() => setIsLightMode(!isLightMode)} 
              className={`p-2.5 rounded-full hover:bg-brand-text/5 active:scale-95 transition-colors ${
                  isLightMode ? 'text-[#4a2a70] hover:text-[#872a8c]' : 'text-brand-text/80 hover:text-brand-primary'
              }`}
              title={isLightMode ? "Ativar Modo Escuro" : "Ativar Modo Claro"}
            >
              {isLightMode ? <Moon size={24} /> : <Sun size={24} />}
            </button>

            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              className={`hidden md:inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-primary/20 ${
                  isLightMode 
                  ? 'bg-[#4a2a70] text-white hover:bg-[#872a8c]' 
                  : 'bg-brand-text text-brand-bg hover:bg-brand-primary hover:text-white'
              }`}
            >
              Agendar Demonstração
              <ChevronRight size={16} />
            </a>
            
            {/* Botão Menu Mobile */}
            <button 
              className={`lg:hidden p-2 rounded-lg transition-colors relative z-50 ${
                  isLightMode ? 'text-[#4a2a70] hover:bg-[#4a2a70]/10' : 'text-brand-text hover:bg-brand-text/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MENU MOBILE --- */}
      <div 
        className={`lg:hidden fixed inset-x-0 bottom-0 bg-brand-bg z-50 transition-transform duration-300 ease-in-out flex flex-col border-t border-brand-text/10 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: headerHeight }}
      >
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex flex-col">
            {[
                { path: '/', label: 'Home' },
                { path: '/sobre', label: 'Quem Somos' },
                { path: '/funcionalidades', label: 'Funcionalidades' },
                { path: '/suporte', label: 'Suporte' },
                { path: '/integracoes', label: 'Integrações' }
            ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={getMobileLinkClasses(item.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
            ))}
          </div>

          <div className="mt-8">
              <a 
                href="https://wa.me/554132238793" 
                className={`w-full py-4 rounded-xl font-bold text-base text-center shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform ${
                    isLightMode 
                    ? 'bg-[#4a2a70] text-white' 
                    : 'bg-brand-primary text-white'
                }`}
              >
                  Falar com Consultor <ChevronRight size={20} />
              </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;