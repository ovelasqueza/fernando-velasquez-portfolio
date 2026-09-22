"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "wave-smooth" | "tilt" | "tilt-reverse" | "layered"
  className?: string
  flip?: boolean
}

export function SectionDivider({ 
  variant = "wave", 
  className = "",
  flip = false
}: SectionDividerProps) {
  
  const dividers = {
    // Onda suave y elegante
    wave: (
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-[60px] md:h-[80px] lg:h-[100px] ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
          className="fill-gray-100/80 dark:fill-slate-900/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M0,60 C480,110 960,10 1440,60 L1440,100 L0,100 Z"
          className="fill-gray-50 dark:fill-gray-950"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    ),

    // Onda más suave con múltiples capas
    "wave-smooth": (
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-[70px] md:h-[90px] lg:h-[120px] ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,40 Q360,80 720,40 T1440,40 L1440,120 L0,120 Z"
          className="fill-emerald-500/5 dark:fill-emerald-500/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M0,60 Q360,100 720,60 T1440,60 L1440,120 L0,120 Z"
          className="fill-gray-100/90 dark:fill-slate-900/70"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M0,80 Q360,110 720,80 T1440,80 L1440,120 L0,120 Z"
          className="fill-gray-50 dark:fill-gray-950"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    ),

    // Diagonal/Tilt moderno
    tilt: (
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-[50px] md:h-[65px] lg:h-[80px] ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <motion.polygon
          points="0,80 1440,30 1440,80"
          className="fill-emerald-500/5 dark:fill-emerald-500/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.polygon
          points="0,80 1440,50 1440,80"
          className="fill-gray-50 dark:fill-gray-950"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    ),

    // Diagonal invertida
    "tilt-reverse": (
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-[50px] md:h-[65px] lg:h-[80px] ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <motion.polygon
          points="0,30 1440,80 0,80"
          className="fill-emerald-500/5 dark:fill-emerald-500/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.polygon
          points="0,50 1440,80 0,80"
          className="fill-gray-50 dark:fill-gray-950"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    ),

    // Capas con gradiente elegante
    layered: (
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-[60px] md:h-[80px] lg:h-[100px] ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,30 C200,60 400,20 600,40 C800,60 1000,30 1200,50 C1350,65 1440,45 1440,45 L1440,100 L0,100 Z"
          fill="url(#emeraldGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M0,50 C240,75 480,35 720,55 C960,75 1200,45 1440,60 L1440,100 L0,100 Z"
          className="fill-gray-100/80 dark:fill-slate-900/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M0,70 C300,85 600,60 900,75 C1150,87 1440,70 1440,70 L1440,100 L0,100 Z"
          className="fill-gray-50 dark:fill-gray-950"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
        />
      </svg>
    ),
  }

  return (
    <div className={`relative w-full overflow-hidden -mt-1 ${className}`}>
      {dividers[variant]}
    </div>
  )
}

// Separador con línea y punto central animado
export function DecorativeLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="h-px w-32 md:w-56 lg:w-72 bg-gradient-to-r from-transparent via-emerald-500/40 to-emerald-500/60"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
        >
          <div className="h-3 w-3 rounded-full bg-emerald-500/70 shadow-lg shadow-emerald-500/50" />
          <div className="absolute inset-0 h-3 w-3 rounded-full bg-emerald-400/50 animate-ping" />
        </motion.div>
        <motion.div 
          className="h-px w-32 md:w-56 lg:w-72 bg-gradient-to-l from-transparent via-emerald-500/40 to-emerald-500/60"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </div>
  )
}

// Separador con gradiente sutil
export function GradientDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`h-24 w-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    />
  )
}
