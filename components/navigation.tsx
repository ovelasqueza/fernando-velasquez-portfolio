"use client"

import { useActiveSection } from "@/hooks/use-active-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

const navigationItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
]

export function Navigation() {
  const { activeSection, scrollToSection } = useActiveSection()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-emerald-500/20 bg-gray-900/80 dark:bg-gray-900/80 light:bg-white/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-400">Fernando Velasquez</div>

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1"
                    : "text-emerald-100/80 dark:text-emerald-100/80 light:text-gray-600 hover:text-emerald-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-emerald-100/80 dark:text-emerald-100/80 light:text-gray-600 hover:text-emerald-400 transition-colors duration-200">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <nav className="flex flex-col space-y-4 mt-4">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id)
                        setIsOpen(false)
                      }}
                      className={`transition-colors duration-200 text-left ${activeSection === item.id ? "text-emerald-400 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-emerald-400"}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
