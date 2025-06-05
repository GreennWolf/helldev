import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portafolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <footer className="bg-black border-t border-helldev-red/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/helldev-logo.png" 
                alt="HellDev Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-helldev-greyLight text-sm">
              Desarrollo indie, automatización con IA y sprints infernales para tu próximo proyecto.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/helldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-helldev-beige hover:text-helldev-red transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/helldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-helldev-beige hover:text-helldev-red transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces principales */}
          <div>
            <h3 className="font-helldevTitle text-lg text-helldev-beige mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-helldev-greyLight hover:text-helldev-red transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información legal */}
          <div>
            <h3 className="font-helldevTitle text-lg text-helldev-beige mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacidad"
                  className="text-helldev-greyLight hover:text-helldev-red transition-colors duration-300 text-sm"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contacto@helldev.es"
                  className="text-helldev-greyLight hover:text-helldev-red transition-colors duration-300 text-sm"
                >
                  contacto@helldev.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-helldev-red/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-helldev-greyLight text-sm">
            © 2025 HellDev. Todos los derechos reservados.
          </p>
          
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-helldev-red hover:bg-helldev-orange text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;