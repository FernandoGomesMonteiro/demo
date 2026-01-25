import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação das Páginas
import Home from './home';
import Services from './Services';
import Features from './Features';
import Integrations from './integration';
import About from './About'; // Importe
import Support from './Support';

// Importação dos Componentes Fixos
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop garante que a página suba ao trocar de tela */}
      <ScrollToTop />
      
      {/* Header aparece em todas as telas */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/funcionalidades" element={<Features />} />
        <Route path="/integracoes" element={<Integrations />} />
         <Route path="/Suporte" element={<Support />} />
      </Routes>

      {/* Footer aparece em todas as telas */}
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;