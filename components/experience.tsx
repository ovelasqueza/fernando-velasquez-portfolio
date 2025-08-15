"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const experienceRef = useStaggeredAnimation(3, 0.3)
  const experiences = [
    {
      company: "Sistemas Inteligentes de Monitoreo S.A.S",
      position: "Desarrollador de Software y Aplicaciones",
      period: "2024/09 - Presente",
      location: "Remote/Cali Colombia",
      description:
        "Liderazgo técnico en el desarrollo de plataformas web con arquitectura de microservicios. Implementación de sistemas backend escalables, sistemas de análisis facial con modelos de inteligencia artificial",
      technologies: ["Python", "PHP(Laravel)", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "GCP", "TypeScript"],
      achievements: [
        "Optimización de rendimiento que redujo tiempos de carga en 60%",
        "Implementación de modelos de IA para reconocimiento y conteo de pasajeros",
        "Construcción de APIs REST robustas y sistemas de autenticación avanzados"
      ]
    },
    {
      company: "PCW Ditech Integradores Tecnologicos S.A.S.",
      position: "Ingeniero de Software",
      period: "2021/04 - 2024/09",
      location: " Remote/Bogotá Colombia",
      description:
        "Desarrollo de aplicaciones web empresariales y lógica de negocio personalizados. Especialización en integración de APIs complejas y bases de datos distribuidas.",
      technologies: ["Vue.js", "React", "MySQL", "PHP(Laravel)", "Java (Spring Boot)", "AWS", "Docker"],
      achievements: [
        "Desarrollo de 15+ aplicaciones web empresariales",
        "Implementación de sistema de reportes GPS en tiempo real",
        "Mantenimiento de servidores AWS y serverless"
      ]
    },
    {
      company: "Clear Minds Consultores",
      position: "Desarrollador de Software Junior",
      period: "2020 - 2021/04",
      location: "Remote/Bogotá Colombia",
      description: "Diseño, desarrollo e implementación de un sistema web y backend para la gestión de transacciones ATM y ACH de Bancolombia en Panamá, integrando servicios bancarios críticos con altos estándares de seguridad y disponibilidad.",
      technologies: ["Python", "Java (Spring Boot)", "JavaScript", "FastAPI", "SQL Server", "AWS", "Metodologías Ágiles (SCRUM)"],
      achievements: [
        "Diseñé y desarrollé un sistema web y backend para el procesamiento seguro de transacciones ATM y ACH de Bancolombia en Panamá, garantizando alta disponibilidad y cumplimiento de estándares bancarios.",
        "Ejecuté la migración de servidores on-premise a una arquitectura Serverless en AWS, reduciendo costos operativos y mejorando la escalabilidad.",
        "Implementé pruebas unitarias y de integración, incrementando la cobertura y reduciendo errores en producción."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any
      }
    }
  }

  return (
    <section 
      id="experiencia" 
      className="py-20 bg-gradient-to-r from-gray-100/50 to-white/50 dark:from-slate-900/50 dark:to-gray-900/50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            Experiencia Profesional
          </motion.h2>
          <div 
            className="space-y-8"
            ref={experienceRef.ref}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ 
                  opacity: experienceRef.visibleItems[index] ? 1 : 0,
                  y: experienceRef.visibleItems[index] ? 0 : 50,
                  scale: experienceRef.visibleItems[index] ? 1 : 0.95
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: index * 0.2
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/80 dark:to-slate-900/80 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <motion.div
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{ 
                            rotate: experienceRef.visibleItems[index] ? 360 : 0,
                            scale: experienceRef.visibleItems[index] ? 1 : 0.8
                          }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          <Building className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                        </motion.div>
                        <div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: experienceRef.visibleItems[index] ? 1 : 0,
                              x: experienceRef.visibleItems[index] ? 0 : -20
                            }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                          >
                            <CardTitle className="text-xl lg:text-2xl text-white">{exp.position}</CardTitle>
                          </motion.div>
                          <motion.div 
                            className="text-emerald-400 font-semibold text-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: experienceRef.visibleItems[index] ? 1 : 0,
                              x: experienceRef.visibleItems[index] ? 0 : -20
                            }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                          >
                            {exp.company}
                          </motion.div>
                        </div>
                      </div>
                      <motion.div 
                        className="flex items-center gap-2 text-emerald-300 flex-shrink-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: experienceRef.visibleItems[index] ? 1 : 0,
                          x: experienceRef.visibleItems[index] ? 0 : 20
                        }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      >
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium text-sm lg:text-base">{exp.location}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 text-emerald-300 flex-shrink-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: experienceRef.visibleItems[index] ? 1 : 0,
                          x: experienceRef.visibleItems[index] ? 0 : 20
                        }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      >
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium text-sm lg:text-base">{exp.period}</span>
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: experienceRef.visibleItems[index] ? 1 : 0,
                        y: experienceRef.visibleItems[index] ? 0 : 20
                      }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    >
                      <CardDescription className="text-gray-900 dark:text-white text-base leading-relaxed">{exp.description}</CardDescription>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: experienceRef.visibleItems[index] ? 1 : 0,
                        y: experienceRef.visibleItems[index] ? 0 : 20
                      }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    >
                      <h4 className="text-sm font-semibold text-emerald-400 mb-2">Logros Principales:</h4>
                      <ul className="list-disc list-inside space-y-1 text-white">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ 
                              opacity: experienceRef.visibleItems[index] ? 1 : 0,
                              x: experienceRef.visibleItems[index] ? 0 : -10
                            }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.9 + index * 0.2 + i * 0.1 
                            }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: experienceRef.visibleItems[index] ? 1 : 0,
                        y: experienceRef.visibleItems[index] ? 0 : 20
                      }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                    >
                      <h4 className="text-sm font-semibold text-emerald-400 mb-2">Tecnologías:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: experienceRef.visibleItems[index] ? 1 : 0,
                              scale: experienceRef.visibleItems[index] ? 1 : 0.8
                            }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 1.1 + index * 0.2 + techIndex * 0.05
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

