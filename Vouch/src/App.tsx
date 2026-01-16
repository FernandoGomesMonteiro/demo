import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação das Páginas
import Home from './home';
import Home2 from './home2';
import Services from './Services';
import Features from './Features';
import Integrations from './integration';
import Partners from './partners'; // Certifique-se que o arquivo é Partners.tsx
import About from './About'; // Importe

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
        <Route path="/home2" element={<Home2 />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/funcionalidades" element={<Features />} />
        <Route path="/integracoes" element={<Integrations />} />
        <Route path="/parceiros" element={<Partners />} />
      </Routes>

      {/* Footer aparece em todas as telas */}
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;