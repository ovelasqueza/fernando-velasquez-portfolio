"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "wave-reverse" | "curve" | "curve-reverse"
  fromColor?: string
  toColor?: string
  className?: string
}

export function SectionDivider({ 
  variant = "wave", 
  fromColor = "from-transparent",
  toColor = "to-transparent",
  className = ""
}: SectionDividerProps) {
  const waves = {
    wave: (
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 80C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
          className="fill-gray-100 dark:fill-slate-900/50"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    ),
    "wave-reverse": (
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto rotate-180"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 80C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
          className="fill-gray-50 dark:fill-gray-950"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    ),
    curve: (
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 80L1440 80L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 80Z"
          className="fill-gray-100 dark:fill-slate-900/50"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    ),
    "curve-reverse": (
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto rotate-180"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 80L1440 80L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 80Z"
          className="fill-gray-50 dark:fill-gray-950"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>
    ),
  }

  return (
    <div className={`relative w-full overflow-hidden -my-1 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${fromColor} ${toColor} opacity-50`} />
      {waves[variant]}
    </div>
  )
}

// Línea decorativa sutil con animación
export function DecorativeLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-500/50"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="h-2 w-2 rounded-full bg-emerald-500/60"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-500/50"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </div>
  )
}
