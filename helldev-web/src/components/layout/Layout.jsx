import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-dark text-helldev-beige-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-helldev-flame text-white px-4 py-2 rounded-md z-50"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main" className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;