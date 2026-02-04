import { Link } from 'react-router-dom';
import { 
  Instagram,
  Mail, MapPin,  ArrowUpRight
} from 'lucide-react';

// Se quiser usar a imagem da logo, descomente a linha abaixo e ajuste o caminho:
// import LogoImage from '../assets/Logomarca_Vouch - Copia.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-bg pt-20 pb-10 border-t border-brand-text/5 overflow-hidden mt-auto transition-colors duration-500">
      
      {/* --- BACKGROUND DECORATIVO (Efeito de Luz) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-20">
        {/* Glow Primário (Roxo Vibrante) */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-primary/30 rounded-full blur-[128px]"></div>
        {/* Glow Secundário (Verde/Azul da paleta) */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-secondary/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1: SOBRE A EMPRESA */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              {/* Logo Imagem */}
              <img 
                src="/Logomarca_Vouch - Copia.png" 
                alt="Logo Vouch" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-110" 
              />
              <span className="font-heading font-bold text-2xl text-brand-text">
                VOUCH
              </span>
            </Link>

            <p className="text-brand-muted leading-relaxed">
              Transformando a gestão da sua empresa com tecnologia de ponta, design intuitivo e funcionalidades modulares.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
  
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-muted hover:bg-brand-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/20"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 2: PRODUTO */}
          <div>
            <h4 className="text-brand-text font-bold mb-6 text-lg">Produto</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2 group">Funcionalidades <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
              <li><Link to="/integracoes" className="text-brand-muted hover:text-brand-primary transition-colors">Integrações</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: EMPRESA */}
          <div>
            <h4 className="text-brand-text font-bold mb-6 text-lg">Empresa</h4>
            <ul className="space-y-4">
              <li><Link to="/sobre" className="text-brand-muted hover:text-brand-primary transition-colors">Sobre Nós</Link></li>
                  <li><Link to="/suporte" className="text-brand-muted hover:text-brand-primary transition-colors">Nosso suporte</Link></li>
             
            </ul>
          </div>

          {/* COLUNA 4: CONTATO */}
          <div>
            <h4 className="text-brand-text font-bold mb-6 text-lg">Fale Conosco</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-brand-muted">
                <MapPin className="text-brand-primary shrink-0 mt-1" size={20} />
                <span>Curitiba - PR, Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-brand-muted">
                <Mail className="text-brand-primary shrink-0" size={20} />
                <a href="mailto:contato@vouch.com.br" className="hover:text-brand-primary transition-colors">contato@vouch.com.br</a>
              </li>
          
            </ul>
          </div>

        </div>

        {/* --- RODAPÉ INFERIOR --- */}
        <div className="border-t border-brand-text/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-muted">
          <p>&copy; {currentYear} Vouch Tecnologia. Todos os direitos reservados.</p>
          
          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-brand-primary transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-brand-primary transition-colors">Termos de Uso</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;