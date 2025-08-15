"use client"

import { Button } from "@/components/ui/button"
import { useParallaxOpacity, useParallaxTransform } from "@/hooks/use-parallax"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  // Parallax effects with different speeds for depth
  const backgroundParallax = useParallaxTransform(0.3)
  const contentParallax = useParallaxTransform(0.1)
  const fadeEffect = useParallaxOpacity(0.002)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="inicio" className="relative py-20 lg:py-32 min-h-[80vh] flex items-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-teal-200/30 to-emerald-100/40 dark:from-emerald-900/30 dark:via-emerald-700/20 dark:to-emerald-500/10"
        style={backgroundParallax}
      />

      {/* Floating geometric shapes for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 dark:bg-emerald-400/10 rounded-full blur-xl"
          style={useParallaxTransform(0.4)}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-teal-300/20 dark:bg-teal-400/10 rounded-lg blur-lg"
          style={useParallaxTransform(0.6)}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-emerald-300/15 dark:bg-emerald-500/10 rounded-full blur-md"
          style={useParallaxTransform(0.2)}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as any
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10" style={contentParallax}>
        <motion.div
          ref={ref}
          className="max-w-full mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={fadeEffect}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            Hola, soy <span className="text-emerald-400">Fernando Velasquez</span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            Desarrollador de Software Full Stack
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-gray-700 dark:text-white mb-8 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            Especializado en Desarrollo Web, Backend Escalable y Tecnologías Cloud con más de 5 años de
            experiencia
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300"
                onClick={() => scrollToSection("proyectos")}
              >
                Explorar Mi Trabajo
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:text-gray-900 bg-transparent transition-all duration-300"
                onClick={() => scrollToSection("contacto")}
              >
                Contactar
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
