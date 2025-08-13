"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="py-20 lg:py-32 bg-gradient-to-tr from-emerald-100/40 via-teal-200/30 to-emerald-100/40 dark:from-emerald-900/30 dark:via-emerald-700/20 dark:to-emerald-500/10 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-full mx-auto">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hola, soy <span className="text-emerald-400">Fernando Velasquez</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4">Desarrollador de Software Full Stack</h2>
          <p className="text-lg lg:text-xl text-gray-700 dark:text-white mb-8 leading-relaxed">
            Especializado en Desarrollo Web Complejo, Backend Escalable y Tecnologías Cloud con más de 5 años de
            experiencia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => scrollToSection("proyectos")}
            >
              Explorar Mi Trabajo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:text-gray-900 bg-transparent"
              onClick={() => scrollToSection("contacto")}
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
