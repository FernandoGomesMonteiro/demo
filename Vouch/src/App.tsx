// TEM QUE SER HashRouter, não BrowserRouter
import { HashRouter, Routes, Route } from 'react-router-dom'; 

import Home from './home';
import Services from './Services';
import Features from './Features';
import Integrations from './integration';
import About from './About';
import Support from './Support';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter> 
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/funcionalidades" element={<Features />} />
        <Route path="/integracoes" element={<Integrations />} />
        <Route path="/suporte" element={<Support />} />
      </Routes>
      <Footer /> 
    </HashRouter>
  );
}

export default App;