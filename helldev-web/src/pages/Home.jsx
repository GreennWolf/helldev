import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Cpu, Zap, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Code2,
      title: 'Desarrollo Indie',
      description: 'Prototipado rápido, código limpio y arquitectura escalable. Rompemos paradigmas y lanzamos tu MVP en tiempo récord.',
      features: ['Despliegue continuo', 'Revisiones automatizadas', 'UX/UI optimizada'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Cpu,
      title: 'Automatización con IA',
      description: 'Pipelines de datos, modelos de ML y automatización inteligente para que tu equipo se enfoque en lo importante.',
      features: ['Modelos personalizados', 'Integración CRM/ERP', 'Dashboards en tiempo real'],
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Zap,
      title: 'Sprints Infernales',
      description: 'Metodología ágil extrema: 2 semanas intensivas para entregar funcionalidades críticas y validar hipótesis.',
      features: ['Planificación diaria', 'Revisiones continuas', 'Deploy automático'],
      color: 'from-orange-500 to-red-500',
      delay: 0.3
    },
    {
      icon: BarChart3,
      title: 'Consultoría Técnica',
      description: 'Auditorías de arquitectura, optimización DevOps y asesoramiento para que tu producto escale sin límites.',
      features: ['Revisión arquitectural', 'Optimización CI/CD', 'Seguridad avanzada'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.4
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-dark"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-helldev-flame/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-helldev-flame/15 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img src="/helldev-logo-symbol.png" alt="" className="w-full h-full object-contain" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center mb-6"
              >
                <Sparkles className="text-helldev-flame mr-3" size={32} />
                <span className="text-helldev-beige-300 text-lg font-medium">Bienvenido al</span>
                <Sparkles className="text-helldev-flame ml-3" size={32} />
              </motion.div>
              
              <h1 className="font-helldevTitle text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-flame leading-tight">
                INFIERNO CREATIVO
              </h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-helldevTitle text-3xl md:text-4xl lg:text-5xl text-helldev-beige-200"
              >
                DEL SOFTWARE
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-helldev-beige-300 max-w-5xl mx-auto leading-relaxed"
            >
              Desarrollo indie, automatización con IA y sprints infernales para 
              <span className="text-helldev-flame font-semibold"> transformar tu visión en realidad</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
            >
              <Link
                to="/contacto"
                className="group relative bg-gradient-flame text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-flame-lg hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  ¡Enciende tu proyecto!
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-helldev-flame-light to-helldev-flame-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <a
                href="#servicios"
                className="group border-2 border-helldev-flame text-helldev-flame px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-helldev-flame hover:text-white hover:shadow-flame"
              >
                <span className="flex items-center">
                  Explorar servicios
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    ↓
                  </motion.div>
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-helldev-flame rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-helldev-flame rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-helldev-black to-helldev-darkGrey"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-helldev-flame/10 border border-helldev-flame/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="text-helldev-flame mr-2" size={16} />
              <span className="text-helldev-flame font-medium">Nuestros Servicios</span>
            </div>
            
            <h2 className="font-helldevTitle text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-flame mb-6">
              Servicios que encienden tu proyecto
            </h2>
            
            <p className="text-xl text-helldev-beige-300 max-w-3xl mx-auto">
              Desde desarrollo indie hasta automatización con IA, convertimos ideas imposibles en software revolucionario
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: service.delay }}
                  viewport={{ once: true }}
                  className="group relative bg-helldev-darkGrey/50 backdrop-blur-lg border border-helldev-grey-800 rounded-2xl p-8 hover:border-helldev-flame/50 transition-all duration-500 hover:shadow-flame"
                >
                  <div className="absolute inset-0 bg-gradient-flame opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    
                    <h3 className="font-helldevTitle text-3xl text-helldev-beige-100 mb-4 group-hover:text-helldev-flame transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-helldev-beige-300 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-helldev-beige-200">
                          <div className="w-2 h-2 bg-helldev-flame rounded-full mr-3 group-hover:animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to={`/servicios/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-helldev-flame hover:text-helldev-flame-light font-semibold group-hover:translate-x-2 transition-all duration-300"
                    >
                      Conocer más
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-flame"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-helldevTitle text-5xl md:text-6xl text-white mb-6">
              ¿Listo para encender tu proyecto?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Únete al infierno creativo y transforma tu visión en software que rompe esquemas
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <Link
                to="/contacto"
                className="group bg-white text-helldev-flame px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-helldev-beige-100 hover:scale-105 hover:shadow-dark-xl"
              >
                <span className="flex items-center">
                  ¡Empezemos ahora!
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </Link>
              
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-helldev-flame"
              >
                Ver nuestro trabajo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;