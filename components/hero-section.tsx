"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  
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
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="inicio" className="py-20 lg:py-32 bg-gradient-to-tr from-emerald-100/40 via-teal-200/30 to-emerald-100/40 dark:from-emerald-900/30 dark:via-emerald-700/20 dark:to-emerald-500/10 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          ref={ref}
          className="max-w-full mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Hola, soy <span className="text-emerald-400">Fernando Velasquez</span>
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Desarrollador de Software Full Stack
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl text-gray-700 dark:text-white mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Especializado en Desarrollo Web Complejo, Backend Escalable y Tecnologías Cloud con más de 5 años de
            experiencia
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
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
