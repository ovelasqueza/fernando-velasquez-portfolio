"use client"

import { Experience } from "@/components/experience";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { TechnicalSkills } from "@/components/technical-skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { Brain, Cloud, Code, Copy, Database, Github, Linkedin, Mail, Server, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

export default function Portfolio() {
  const { toast } = useToast();
  const aboutRef = useScrollAnimation(0.2);
  const servicesRef = useStaggeredAnimation(6, 0.15);
  const projectsRef = useStaggeredAnimation(3, 0.2);
  const contactRef = useScrollAnimation(0.3);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any
      }
    }
  };
  const projects: Project[] = [
    {
      title: "Plataforma Integral de Gestión de Tareas y Usuarios con Laravel, Angular y Flutter ",
      description:
        "Aplicación completa para la gestión de tareas y usuarios, compuesta por un backend API RESTful desarrollado en Laravel (PHP), un frontend web en Angular con Tailwind CSS y una aplicación móvil en Flutter.",
      technologies: ["PHP", "Angular", "Flutter", "Docker", "API RESTful"],
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Weather App - Laravel",
      description:
        "aplicación web desarrollada con Laravel que permite a los usuarios consultar el clima actual de diferentes ciudades del mundo. La aplicación utiliza la API de WeatherAPI para obtener datos meteorológicos en tiempo real.",
      technologies: ["PHP (Laravel)", "CSS", "API", "Docker"],
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Sistema de Reconocimiento Facial Inteligente con InsightFace y Despliegue en Google Cloud Run",
      description:
        "Sistema de reconocimiento facial con InsightFace desarrollado en Python y FastAPI, contenedorizado con Docker y desplegado en Google Cloud Run. Utiliza modelos de IA para detección y agrupación precisa de rostros, con escalabilidad automática y alta disponibilidad.",
      technologies: ["Python", "FastAPI", "TensorFlow", "GCP", "Docker", "OpenCV"],
      icon: <Brain className="h-6 w-6" />,
    },
  ]

  const services: Service[] = [
    {
      title: "Desarrollo Full Stack",
      description: "Aplicaciones web complejas desde frontend interactivo hasta backend robusto",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "Arquitectura Backend",
      description: "Sistemas backend escalables con APIs REST, microservicios y alta disponibilidad",
      icon: <Server className="h-8 w-8" />,
    },
    {
      title: "Bases de Datos Enterprise",
      description: "Diseño, optimización y administración de bases de datos complejas",
      icon: <Database className="h-8 w-8" />,
    },
    {
      title: "Arquitectura Cloud",
      description: "Soluciones escalables en AWS y GCP con infraestructura como código",
      icon: <Cloud className="h-8 w-8" />,
    },
    {
      title: "Sistemas de IA",
      description: "Integración de modelos de machine learning en aplicaciones web",
      icon: <Brain className="h-8 w-8" />,
    },
    {
      title: "DevOps & CI/CD",
      description: "Automatización de despliegues y gestión de infraestructura",
      icon: <Cloud className="h-8 w-8" />,
    },
  ]

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-slate-900 dark:to-black">
      <Navigation />

      <HeroSection />

      {/* About Section */}
      <motion.section 
        id="sobre-mi" 
        className="py-20"
        ref={aboutRef.ref}
        initial="hidden"
        animate={aboutRef.isVisible ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300"
              variants={fadeInUpVariants}
            >
              Sobre Mí
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div 
                className="lg:col-span-2 lg:order-1 order-2"
                variants={fadeInUpVariants}
              >
                <div className="mb-12">
                  <div className="flex flex-col gap-8">
                    <div className="flex-1">
                      <motion.p 
                        className="text-lg text-gray-700 dark:text-white mb-6 leading-relaxed transition-colors duration-300"
                        variants={fadeInUpVariants}
                      >
                        Con más de <strong className="text-emerald-400">5 años de experiencia</strong> como
                        desarrollador full stack, diseño y desarrollo aplicaciones web de alta complejidad y sistemas backend robustos capaces de gestionar grandes volúmenes de datos y usuarios.
                      </motion.p>
                      <motion.p 
                        className="text-lg text-gray-700 dark:text-white mb-8 leading-relaxed transition-colors duration-300"
                        variants={fadeInUpVariants}
                      >
                        Mi experiencia abarca desde la creación de interfaces de usuario modernas e intuitivas, hasta la definición de arquitecturas de sistemas distribuidos, administración de bases de datos a nivel empresarial y despliegue de soluciones cloud altamente escalables.
                      </motion.p>
                      <motion.p 
                        className="text-lg text-gray-700 dark:text-white mb-8 leading-relaxed transition-colors duration-300"
                        variants={fadeInUpVariants}
                      >
                        Comprometido con el código limpio, la calidad del software y la aplicación de las mejores prácticas de desarrollo, busco siempre construir soluciones eficientes, seguras y mantenibles.
                      </motion.p>
                      <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        variants={fadeInUpVariants}
                      >
                        <Link href="https://github.com/ovelasqueza" target="_blank" rel="noopener noreferrer">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              size="default"
                              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 bg-transparent"
                            >
                              <Github className="h-5 w-5 mr-2" />
                              GitHub
                            </Button>
                          </motion.div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/ovelasquezan" target="_blank" rel="noopener noreferrer">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              size="default"
                              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 bg-transparent"
                            >
                              <Linkedin className="h-5 w-5 mr-2" />
                              LinkedIn
                            </Button>
                          </motion.div>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="lg:order-2 order-1 -mt-4 lg:-mt-12"
                variants={fadeInUpVariants}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/foto linke.png"
                    alt="Fernando Velasquez"
                    width={400}
                    height={400}
                    className="transition-all duration-300 ease-in-out drop-shadow-[0_0_25px_rgba(16,185,129,0.7)] hover:drop-shadow-[0_0_35px_rgba(16,185,129,0.9)]"
                    style={{
                      borderRadius: "999px"
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16"
              variants={fadeInUpVariants}
            >
              <TechnicalSkills />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Experience />

      {/* Services Section */}
      <motion.section
        id="servicios"
        className="py-20 bg-gradient-to-r from-gray-100/50 to-white/50 dark:from-slate-900/50 dark:to-gray-950/50 transition-colors duration-300"
        ref={servicesRef.ref}
        initial="hidden"
        animate={servicesRef.visibleItems.some(Boolean) ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300"
              variants={fadeInUpVariants}
            >
              Servicios
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={servicesRef.visibleItems[index] ? "visible" : "hidden"}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/80 dark:to-slate-900/80 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25 h-full">
                    <CardHeader className="pb-4">
                      <motion.div 
                        className="text-emerald-400 mb-4"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-white/80 transition-colors duration-300">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="proyectos" 
        className="py-20"
        ref={projectsRef.ref}
        initial="hidden"
        animate={projectsRef.visibleItems.some(Boolean) ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 text-white dark:text-white light:text-gray-900 transition-colors duration-300"
              variants={fadeInUpVariants}
            >
              Proyectos Destacados
            </motion.h2>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={projectsRef.visibleItems[index] ? "visible" : "hidden"}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/80 to-slate-900/80 dark:from-gray-900/80 dark:to-slate-900/80 light:from-white light:to-gray-50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <motion.div 
                          className="text-emerald-400 mt-1 flex-shrink-0"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 10,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {project.icon}
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl lg:text-2xl mb-2 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-white/80 dark:text-white/80 light:text-gray-600 text-base leading-relaxed transition-colors duration-300">
                            {project.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: projectsRef.visibleItems[index] ? 1 : 0,
                              scale: projectsRef.visibleItems[index] ? 1 : 0.8
                            }}
                            transition={{ 
                              delay: techIndex * 0.1,
                              duration: 0.3
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contacto"
        className="py-20 bg-gradient-to-br from-gray-200 via-gray-100 to-white dark:from-black dark:via-slate-950 dark:to-gray-950 transition-colors duration-300"
        ref={contactRef.ref}
        initial="hidden"
        animate={contactRef.isVisible ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6 text-white dark:text-white light:text-gray-900 transition-colors duration-300"
            variants={fadeInUpVariants}
          >
            ¡Construyamos Algo Grandioso Juntos!
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl text-gray-700 dark:text-white mb-8 transition-colors duration-300"
            variants={fadeInUpVariants}
          >
            ¿Tienes un proyecto complejo en mente? Contáctame para discutir cómo puedo ayudarte a llevarlo al siguiente
            nivel.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUpVariants}
          >
            <Link href="mailto:olmervelasquez@hotmail.com">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Email
                </Button>
              </motion.div>
            </Link>
            <Link href="/Hoja de vida OV.pdf" download>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-gray-900 dark:hover:text-gray-900 light:hover:text-white bg-transparent transition-colors duration-300"
                >
                  Descargar CV
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div 
            className="mt-8 flex flex-col items-center gap-4"
            variants={fadeInUpVariants}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <Mail className="h-5 w-5 text-emerald-400" />
              <span>olmervelasquez@hotmail.com</span>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText('olmervelasquez@hotmail.com')
                      .then(() => {
                        toast({ description: "Correo copiado al portapapeles." });
                      });
                  }}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 mt-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <Link href="https://wa.me/573108844273" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button variant="ghost" size="sm">
                    <FaWhatsapp className="h-5 w-5 text-green-500" />
                  </Button>
                </motion.div>
                <span className="hover:underline">+57 310 884 4273</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 bg-gray-900 dark:bg-black text-gray-300 dark:text-white/60 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Fernando Velasquez - Desarrollador de Software Full Stack. Todos los derechos reservados.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}

interface Project {
  title: string
  description: string
  technologies: string[]
  icon: React.ReactNode
}

interface Service {
  title: string
  description: string
  icon: React.ReactNode
}
