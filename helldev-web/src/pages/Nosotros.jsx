import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Nosotros = () => {
  const equipo = [
    {
      nombre: "Alex Rodriguez",
      rol: "Fullstack Developer & Founder",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Apasionado por exorcizar bugs y llevar proyectos al infierno creativo. Especialista en React, Node.js y arquitecturas escalables.",
      linkedin: "https://linkedin.com/in/alex",
      github: "https://github.com/alex",
      email: "alex@helldev.es"
    },
    {
      nombre: "Maria Santos",
      rol: "AI/ML Engineer",
      foto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Domadora de algoritmos de IA y arquitecta de soluciones inteligentes. Experta en Python, TensorFlow y procesamiento de datos.",
      linkedin: "https://linkedin.com/in/maria",
      github: "https://github.com/maria",
      email: "maria@helldev.es"
    },
    {
      nombre: "Carlos Mendez",
      rol: "DevOps & Cloud Architect",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Maestro de la infraestructura y automatización. Especialista en AWS, Docker, Kubernetes y pipelines CI/CD.",
      linkedin: "https://linkedin.com/in/carlos",
      github: "https://github.com/carlos",
      email: "carlos@helldev.es"
    },
    {
      nombre: "Sofia Garcia",
      rol: "UI/UX Designer",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Diseñadora del infierno visual que convierte caos en experiencias memorables. Experta en Figma, prototipado y research.",
      linkedin: "https://linkedin.com/in/sofia",
      github: "https://github.com/sofia",
      email: "sofia@helldev.es"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-helldev-red/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-helldevTitle text-5xl md:text-6xl text-helldev-beige mb-6">
              ¿Quiénes somos?
            </h1>
            <p className="text-xl text-helldev-greyLight max-w-4xl mx-auto">
              Somos el equipo que vive en el infierno creativo del software
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filosofía Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-helldev-red/10 rounded-lg flex items-center justify-center">
                <div className="text-6xl">🔥</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-helldevTitle text-4xl md:text-5xl text-helldev-beige">
                Nuestra Filosofía
              </h2>
              <p className="text-lg text-helldev-greyLight">
                En HellDev, vivimos en el infierno creativo del software. Somos un equipo de desarrolladores independientes que no le teme a nada: rompemos esquemas, desafiamos lo convencional y convertimos ideas imposibles en realidad.
              </p>
              <p className="text-lg text-helldev-greyLight">
                Nuestra misión es crear aplicaciones que rompan paradigmas, automatizar procesos con IA de última generación y ejecutar sprints infernales para lanzar proyectos en tiempo récord.
              </p>
              <p className="text-lg text-helldev-greyLight">
                No somos solo desarrolladores, somos arquitectos del caos ordenado, donde cada línea de código tiene un propósito y cada pixel cuenta una historia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-helldevTitle text-4xl md:text-5xl text-helldev-beige mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-helldev-greyLight">
              Los demonios creativos detrás de HellDev
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.map((miembro, index) => (
              <motion.div
                key={miembro.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/70 p-6 rounded-lg border border-helldev-red/20 hover:border-helldev-red/50 hover:shadow-lg hover:shadow-helldev-red/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <img
                    src={miembro.foto}
                    alt={`Foto de ${miembro.nombre}`}
                    className="w-32 h-32 mx-auto rounded-full border-2 border-helldev-red object-cover mb-4"
                  />
                  <h3 className="font-helldevTitle text-xl text-helldev-beige mb-1">
                    {miembro.nombre}
                  </h3>
                  <p className="text-helldev-red text-sm mb-3">
                    {miembro.rol}
                  </p>
                  <p className="text-helldev-greyLight text-sm mb-4">
                    {miembro.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={miembro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-helldev-beige hover:text-helldev-red transition-colors duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={miembro.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-helldev-beige hover:text-helldev-red transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={`mailto:${miembro.email}`}
                      className="text-helldev-beige hover:text-helldev-red transition-colors duration-300"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-helldev-red/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-helldevTitle text-4xl md:text-5xl text-helldev-beige mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-helldev-greyLight">
              Los principios que guían nuestro infierno creativo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="text-5xl">🚀</div>
              <h3 className="font-helldevTitle text-2xl text-helldev-beige">
                Innovación Constante
              </h3>
              <p className="text-helldev-greyLight">
                Siempre exploramos nuevas tecnologías y metodologías para mantenernos a la vanguardia del desarrollo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="text-5xl">⚡</div>
              <h3 className="font-helldevTitle text-2xl text-helldev-beige">
                Agilidad Extrema
              </h3>
              <p className="text-helldev-greyLight">
                Nuestros sprints infernales garantizan entregas rápidas sin comprometer la calidad del código.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="text-5xl">🎯</div>
              <h3 className="font-helldevTitle text-2xl text-helldev-beige">
                Orientación a Resultados
              </h3>
              <p className="text-helldev-greyLight">
                Cada proyecto tiene objetivos claros y medibles. No paramos hasta superarlos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-helldev-red to-helldev-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-helldevTitle text-4xl md:text-5xl text-white mb-4"
          >
            ¿Quieres formar parte del infierno?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Contacta con nosotros y descubre cómo podemos encender tu proyecto
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/contacto"
              className="bg-white text-helldev-red px-8 py-3 rounded-md hover:bg-helldev-beige transition-colors duration-300 font-medium text-lg"
            >
              Hablemos del infierno
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;