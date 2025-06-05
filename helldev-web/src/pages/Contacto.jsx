import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contacto = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Datos del formulario:', data);
      
      setSubmitStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito! Te contactaremos en menos de 24 horas.'
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Hablemos del Infierno que quieres crear
            </h1>
            <p className="text-xl text-helldev-greyLight max-w-4xl mx-auto">
              Cuéntanos tu reto y te responderemos en 24 horas o menos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario y Mapa Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-black/80 border border-helldev-red/20 p-8 rounded-lg space-y-6">
                <h2 className="font-helldevTitle text-3xl text-helldev-beige mb-6">
                  Encender tu proyecto
                </h2>

                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-helldev-beige mb-2 font-medium">
                    Nombre Completo *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    {...register('nombre', { 
                      required: 'Este campo es obligatorio',
                      minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
                    })}
                    className="w-full bg-black rounded-md border border-helldev-greyLight/30 text-helldev-greyLight px-4 py-3 focus:outline-none focus:ring-2 focus:ring-helldev-red focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && (
                    <p className="text-helldev-red text-sm mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-helldev-beige mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'El email es obligatorio',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Email inválido'
                      }
                    })}
                    className="w-full bg-black rounded-md border border-helldev-greyLight/30 text-helldev-greyLight px-4 py-3 focus:outline-none focus:ring-2 focus:ring-helldev-red focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-helldev-red text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-helldev-beige mb-2 font-medium">
                    Teléfono (opcional)
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    {...register('telefono')}
                    className="w-full bg-black rounded-md border border-helldev-greyLight/30 text-helldev-greyLight px-4 py-3 focus:outline-none focus:ring-2 focus:ring-helldev-red focus:border-transparent transition-all duration-300"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>

                {/* Servicio de interés */}
                <div>
                  <label htmlFor="servicio" className="block text-helldev-beige mb-2 font-medium">
                    Servicio de interés *
                  </label>
                  <select
                    id="servicio"
                    {...register('servicio', { required: 'Selecciona un servicio' })}
                    className="w-full bg-black rounded-md border border-helldev-greyLight/30 text-helldev-greyLight px-4 py-3 focus:outline-none focus:ring-2 focus:ring-helldev-red focus:border-transparent transition-all duration-300"
                  >
                    <option value="">— Selecciona un servicio —</option>
                    <option value="desarrollo-indie">Desarrollo Indie</option>
                    <option value="automatizacion-ia">Automatización con IA</option>
                    <option value="sprints-infernales">Sprints Infernales</option>
                    <option value="consultoria-tecnica">Consultoría Técnica</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.servicio && (
                    <p className="text-helldev-red text-sm mt-1">{errors.servicio.message}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-helldev-beige mb-2 font-medium">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    rows="4"
                    {...register('mensaje', { 
                      required: 'El mensaje es obligatorio', 
                      minLength: { value: 20, message: 'Escribe al menos 20 caracteres' } 
                    })}
                    className="w-full bg-black rounded-md border border-helldev-greyLight/30 text-helldev-greyLight px-4 py-3 focus:outline-none focus:ring-2 focus:ring-helldev-red focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, reto o idea..."
                  />
                  {errors.mensaje && (
                    <p className="text-helldev-red text-sm mt-1">{errors.mensaje.message}</p>
                  )}
                </div>

                {/* Política de privacidad */}
                <div className="flex items-start">
                  <input
                    id="privacidad"
                    type="checkbox"
                    {...register('privacidad', { required: 'Debes aceptar la Política de Privacidad' })}
                    className="h-4 w-4 mt-1 text-helldev-red bg-black border-helldev-greyLight/30 rounded focus:ring-helldev-red focus:ring-2"
                  />
                  <label htmlFor="privacidad" className="ml-3 text-helldev-greyLight text-sm">
                    Acepto la{' '}
                    <a href="/privacidad" className="text-helldev-red hover:text-helldev-orange transition-colors duration-300 underline">
                      Política de Privacidad
                    </a>
                  </label>
                </div>
                {errors.privacidad && (
                  <p className="text-helldev-red text-sm">{errors.privacidad.message}</p>
                )}

                {/* Estado del envío */}
                {submitStatus.message && (
                  <div className={`p-4 rounded-md ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-900/50 border border-green-500 text-green-200' 
                      : 'bg-red-900/50 border border-red-500 text-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-helldev-red text-helldev-beige px-6 py-3 rounded-md hover:bg-helldev-orange transition-colors duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-helldev-beige"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Mapa placeholder */}
              <div className="bg-helldev-red/10 rounded-lg h-64 flex items-center justify-center border border-helldev-red/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-helldev-red mx-auto mb-2" />
                  <p className="text-helldev-greyLight">Mapa de ubicación</p>
                  <p className="text-sm text-helldev-greyLight">Madrid, España</p>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="bg-black/80 border border-helldev-red/20 p-6 rounded-lg">
                <h3 className="font-helldevTitle text-2xl text-helldev-beige mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-helldev-red" />
                    <a 
                      href="mailto:contacto@helldev.es"
                      className="text-helldev-greyLight hover:text-helldev-red transition-colors duration-300"
                    >
                      contacto@helldev.es
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-helldev-red" />
                    <a 
                      href="https://wa.me/34XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-helldev-greyLight hover:text-helldev-red transition-colors duration-300"
                    >
                      +34 XXX XXX XXX (WhatsApp)
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-helldev-red" />
                    <span className="text-helldev-greyLight">
                      Madrid, España
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-helldev-red/20">
                  <p className="text-sm text-helldev-greyLight mb-4">
                    También nos puedes encontrar en:
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/helldev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-helldev-beige hover:text-helldev-red transition-colors duration-300"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/helldev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-helldev-beige hover:text-helldev-red transition-colors duration-300"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="bg-black/80 border border-helldev-red/20 p-6 rounded-lg">
                <h3 className="font-helldevTitle text-xl text-helldev-beige mb-4">
                  Horarios de Atención
                </h3>
                <div className="space-y-2 text-sm text-helldev-greyLight">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
                <p className="text-xs text-helldev-greyLight mt-4">
                  * Para emergencias técnicas, estamos disponibles 24/7
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;