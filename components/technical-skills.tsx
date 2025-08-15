"use client"

import { Badge } from "@/components/ui/badge"
import { Code, Layers, Database, Cloud } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export function TechnicalSkills() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const skillsRef = useStaggeredAnimation(4, 0.2)
  const languages = ["Python", "JavaScript", "PHP", "Java", "TypeScript"];
  const frameworks = ["Node.js", "Vue.js", "React", "Angular", "Laravel", "Spring Boot", "FastAPI"];
  const databases = ["MySQL", "PostgreSQL", "SQL Server", "Oracle"];
  const devops = ["AWS", "GCP", "Docker", "CI/CD", "Scrum", "Clean Code", "API REST"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any
      }
    }
  }

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25 transition-all duration-300 p-4"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h3 
        className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center"
        variants={itemVariants}
      >
        Habilidades Técnicas
      </motion.h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        ref={skillsRef.ref}
        variants={containerVariants}
      >
        <motion.div 
          className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25 transition-all duration-300 p-4"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ 
            opacity: skillsRef.visibleItems[0] ? 1 : 0,
            y: skillsRef.visibleItems[0] ? 0 : 30,
            scale: skillsRef.visibleItems[0] ? 1 : 0.9
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: skillsRef.visibleItems[0] ? 360 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Code className="h-5 w-5 text-emerald-400" />
            </motion.div>
            <h4 className="text-lg font-semibold text-emerald-400">Lenguajes</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: skillsRef.visibleItems[0] ? 1 : 0,
                  scale: skillsRef.visibleItems[0] ? 1 : 0.8
                }}
                transition={{ 
                  delay: 0.4 + index * 0.1,
                  duration: 0.3
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline" className="border-emerald-500/30 text-white hover:bg-emerald-500/20 text-xs">
                  {lang}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25 transition-all duration-300 p-4"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ 
            opacity: skillsRef.visibleItems[1] ? 1 : 0,
            y: skillsRef.visibleItems[1] ? 0 : 30,
            scale: skillsRef.visibleItems[1] ? 1 : 0.9
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: skillsRef.visibleItems[1] ? 360 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Layers className="h-5 w-5 text-emerald-400" />
            </motion.div>
            <h4 className="text-lg font-semibold text-emerald-400">Frameworks</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: skillsRef.visibleItems[1] ? 1 : 0,
                  scale: skillsRef.visibleItems[1] ? 1 : 0.8
                }}
                transition={{ 
                  delay: 0.4 + index * 0.1,
                  duration: 0.3
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline" className="border-emerald-500/30 text-white hover:bg-emerald-500/20 text-xs">
                  {framework}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25 transition-all duration-300 p-4"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ 
            opacity: skillsRef.visibleItems[2] ? 1 : 0,
            y: skillsRef.visibleItems[2] ? 0 : 30,
            scale: skillsRef.visibleItems[2] ? 1 : 0.9
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: skillsRef.visibleItems[2] ? 360 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Database className="h-5 w-5 text-emerald-400" />
            </motion.div>
            <h4 className="text-lg font-semibold text-emerald-400">Bases de Datos</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {databases.map((db, index) => (
              <motion.div
                key={db}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: skillsRef.visibleItems[2] ? 1 : 0,
                  scale: skillsRef.visibleItems[2] ? 1 : 0.8
                }}
                transition={{ 
                  delay: 0.4 + index * 0.1,
                  duration: 0.3
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline" className="border-emerald-500/30 text-white hover:bg-emerald-500/20 text-xs">
                  {db}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25 transition-all duration-300 p-4"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ 
            opacity: skillsRef.visibleItems[3] ? 1 : 0,
            y: skillsRef.visibleItems[3] ? 0 : 30,
            scale: skillsRef.visibleItems[3] ? 1 : 0.9
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: skillsRef.visibleItems[3] ? 360 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Cloud className="h-5 w-5 text-emerald-400" />
            </motion.div>
            <h4 className="text-lg font-semibold text-emerald-400">DevOps & Cloud</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {devops.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: skillsRef.visibleItems[3] ? 1 : 0,
                  scale: skillsRef.visibleItems[3] ? 1 : 0.8
                }}
                transition={{ 
                  delay: 0.4 + index * 0.1,
                  duration: 0.3
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline" className="border-emerald-500/30 text-white hover:bg-emerald-500/20 text-xs">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
