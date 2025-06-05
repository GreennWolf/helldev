import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Placeholder routes for future pages */}
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-helldevTitle text-4xl text-helldev-beige">Servicios - Próximamente</h1></div>} />
          <Route path="/servicios/:slug" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-helldevTitle text-4xl text-helldev-beige">Servicio Específico - Próximamente</h1></div>} />
          <Route path="/portfolio" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-helldevTitle text-4xl text-helldev-beige">Portafolio - Próximamente</h1></div>} />
          <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-helldevTitle text-4xl text-helldev-beige">Blog - Próximamente</h1></div>} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<div className="min-h-screen flex items-center justify-center"><h1 className="font-helldevTitle text-4xl text-helldev-beige">Política de Privacidad - Próximamente</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;