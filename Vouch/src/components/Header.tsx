import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- PERSISTÊNCIA DO TEMA ---
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light';
  });
  
  const location = useLocation();
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

  // Classe base para os links
  const linkClasses = (path: string) => `
    text-base font-semibold tracking-wide transition-colors duration-300
    ${isActive(path) ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-text'}
  `;

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-bg/80 backdrop-blur-xl border-brand-text/5 py-3 shadow-lg shadow-brand-primary/10' 
          : 'bg-transparent border-transparent py-6' 
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative">
            {/* Glow atrás da logo usando a cor Primary da paleta */}
            <div className="absolute inset-0 bg-brand-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          
          <Link to="/" className={linkClasses('/')}>
            Home
          </Link>

          <Link to="/sobre" className={linkClasses('/sobre')}>
            Quem Somos
          </Link>

          <Link to="/funcionalidades" className={linkClasses('/funcionalidades')}>
            Funcionalidades
          </Link>


          <Link to="/suporte" className={linkClasses('/suporte')}>
            Suporte
          </Link>

          <Link to="/integracoes" className={linkClasses('/integracoes')}>
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
            // Botão com alto contraste baseado na paleta (Fundo Texto / Texto Fundo)
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-brand-bg bg-brand-text rounded-full hover:bg-brand-primary hover:text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-primary/20"
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
          
          <Link to="/" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5 hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          
          <Link to="/sobre" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5 hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Quem Somos</Link>
          
          <Link to="/features" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5 hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Funcionalidades</Link>
          
          <Link to="/diferenciais" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5 hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Diferenciais</Link>
          
          <Link to="/suporte" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5 hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Suporte</Link>

          <Link to="/integracoes" className="text-xl font-bold text-brand-text py-4 border-b border-brand-text/5 hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Integrações</Link>
          
          <a href="https://wa.me/5511999999999" className="mt-8 w-full py-4 bg-brand-primary text-white rounded-xl font-bold text-lg text-center shadow-lg shadow-brand-primary/20">
              Falar com Consultor
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;