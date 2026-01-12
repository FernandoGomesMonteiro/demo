import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Se estiver usando imagem, lembre de importar aqui:
// import LogoImage from '../assets/Logomarca_Vouch - Copia.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- 1. PERSISTÊNCIA DO TEMA ---
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

  // --- 2. SALVAR TEMA ---
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
          ? 'bg-brand-bg/90 backdrop-blur-xl border-brand-text/5 py-4 shadow-xl shadow-brand-primary/5' 
          : 'bg-transparent border-transparent py-8' 
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        {/* O 'to="/"' significa que ao clicar, volta para a Home */}
        <Link to="/" className="flex items-center gap-3 group">
          
          {/* Substituímos o quadrado colorido (div) pela imagem (img) */}
          <img 
            src="/Logomarca_Vouch - Copia.png" 
            alt="Logo Vouch" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-110" 
          />

          {/* Mantenha este texto SÓ SE a sua imagem for apenas o símbolo. 
              Se a imagem já tiver o nome "Vouch" escrito, pode apagar este <span> abaixo. */}
          <span className="font-heading font-bold text-2xl tracking-tight text-brand-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-all">
            VOUCH
          </span>
        </Link>

        {/* MENU DESKTOP (AUMENTADO) */}
        {/* Mudanças: px-12 (mais largo), py-4 (mais alto), text-base (letra maior), gap-10 (mais espaço) */}
        <nav className="hidden lg:flex gap-10 items-center bg-brand-bg/60 px-12 py-4 rounded-full border border-brand-text/5 backdrop-blur-md shadow-md transition-all hover:border-brand-text/10 hover:shadow-xl hover:bg-brand-bg/80">
          {[
            { name: 'Home', path: '/' },
            { name: 'Serviços', path: '/servicos' },
            { name: 'Sistema', path: '/funcionalidades' },
            { name: 'Integrações', path: '/integracoes' },
            { name: 'Parceiros', path: '/parceiros' },
          { name: 'Sobre', path: '/sobre' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-base font-medium transition-colors relative group ${
                isActive(item.path) ? 'text-brand-primary font-bold' : 'text-brand-muted hover:text-brand-primary'
              }`}
            >
              {item.name}
              {/* Linha animada embaixo */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${
                isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* BOTÕES / ACTIONS */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsLightMode(!isLightMode)} 
            className="p-3.5 rounded-full border border-brand-text/10 text-brand-text hover:bg-brand-text/5 transition-colors"
            title="Alternar Tema"
          >
            {isLightMode ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            className="hidden md:inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-brand-primary rounded-full hover:bg-brand-secondary transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            Agendar Demo <ChevronRight size={20} />
          </a>
          
          <button 
            className="lg:hidden text-brand-text p-3 hover:bg-brand-text/5 rounded-xl border border-brand-text/5" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-bg/95 backdrop-blur-xl border-b border-brand-text/10 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
          <Link to="/" className="text-brand-muted hover:text-brand-primary px-4 py-3 rounded-lg hover:bg-brand-text/5 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/servicos" className="text-brand-muted hover:text-brand-primary px-4 py-3 rounded-lg hover:bg-brand-text/5 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Serviços</Link>
          <Link to="/funcionalidades" className="text-brand-muted hover:text-brand-primary px-4 py-3 rounded-lg hover:bg-brand-text/5 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Sistema</Link>
          <Link to="/integracoes" className="text-brand-muted hover:text-brand-primary px-4 py-3 rounded-lg hover:bg-brand-text/5 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Integrações</Link>
          <Link to="/parceiros" className="text-brand-muted hover:text-brand-primary px-4 py-3 rounded-lg hover:bg-brand-text/5 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Parceiros</Link>
          
          <a href="https://wa.me/5511999999999" className="mt-4 text-center py-4 bg-brand-primary text-white rounded-xl font-bold text-lg shadow-lg">
              Agendar Demo
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;