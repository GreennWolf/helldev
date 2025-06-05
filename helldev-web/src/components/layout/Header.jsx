import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { 
      name: 'Servicios', 
      path: '/servicios',
      submenu: [
        { name: 'Desarrollo Indie', path: '/servicios/desarrollo-indie' },
        { name: 'Automatización con IA', path: '/servicios/automatizacion-ia' },
        { name: 'Sprints Infernales', path: '/servicios/sprints-infernales' },
        { name: 'Consultoría Técnica', path: '/servicios/consultoria-tecnica' }
      ]
    },
    { name: 'Portafolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-helldev-black/95 backdrop-blur-lg shadow-dark-xl border-b border-helldev-flame/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="/helldev-logo-complete.png" 
                alt="HellDev - Infierno Creativo del Software" 
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-flame opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-sm"></div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`relative text-base font-medium transition-all duration-300 hover:text-helldev-flame ${
                    location.pathname === item.path 
                      ? 'text-helldev-flame' 
                      : 'text-helldev-beige-200'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-flame transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                
                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-3 w-64 bg-helldev-darkGrey/95 backdrop-blur-lg rounded-xl shadow-dark-xl border border-helldev-flame/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-3">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-helldev-beige-200 hover:text-helldev-flame hover:bg-helldev-flame/10 transition-all duration-300 text-sm font-medium"
                        >
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-helldev-flame rounded-full mr-3 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                            {subItem.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              to="/contacto"
              className="relative bg-gradient-flame text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-flame hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">¡Hablemos!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-helldev-flame-light to-helldev-flame-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pl-4 border-l border-helldev-flame/20">
              <a
                href="https://github.com/helldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-helldev-beige-300 hover:text-helldev-flame transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/helldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-helldev-beige-300 hover:text-helldev-flame transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/helldev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-helldev-beige-300 hover:text-helldev-flame transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative p-2 text-helldev-beige-200 hover:text-helldev-flame transition-colors duration-300"
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden bg-helldev-darkGrey/98 backdrop-blur-lg rounded-2xl mt-4 overflow-hidden border border-helldev-flame/20 shadow-dark-xl"
            >
              <div className="py-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 font-medium transition-all duration-300 ${
                        location.pathname === item.path 
                          ? 'text-helldev-flame bg-helldev-flame/10' 
                          : 'text-helldev-beige-200 hover:text-helldev-flame hover:bg-helldev-flame/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-8 space-y-1 mt-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-helldev-beige-300 hover:text-helldev-flame transition-colors duration-300"
                          >
                            • {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1, duration: 0.3 }}
                  className="px-6 pt-4"
                >
                  <Link
                    to="/contacto"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-gradient-flame text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-flame"
                  >
                    ¡Hablemos!
                  </Link>
                </motion.div>

                {/* Mobile Social Icons */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (menuItems.length + 1) * 0.1, duration: 0.3 }}
                  className="flex items-center justify-center space-x-6 pt-6 border-t border-helldev-flame/20 mx-6"
                >
                  <a
                    href="https://github.com/helldev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-helldev-beige-300 hover:text-helldev-flame transition-all duration-300 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/helldev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-helldev-beige-300 hover:text-helldev-flame transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/helldev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-helldev-beige-300 hover:text-helldev-flame transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;