"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full border border-emerald-500/30 bg-transparent animate-pulse" />
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-emerald-500/30 hover:border-emerald-500/60 bg-transparent hover:bg-emerald-500/10 transition-all duration-300 p-0"
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`absolute h-4 w-4 text-emerald-400 transition-all duration-500 ${
            theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute h-4 w-4 text-emerald-400 transition-all duration-500 ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </Button>
  )
}
