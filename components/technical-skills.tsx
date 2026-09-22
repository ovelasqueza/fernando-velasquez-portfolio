"use client"

import { Badge } from "@/components/ui/badge"
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"
import { Brain, Cloud, Code, Database, Layers } from "lucide-react"
import { useEffect, useState } from "react"

export function TechnicalSkills() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const skillsRef = useStaggeredAnimation(5, 0.15)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const languages = ["Python", "JavaScript", "PHP", "Java", "TypeScript", "C#", "Dart"];
  const frameworks = ["Node.js", "Vue.js", "React", "Angular", "Laravel", "Spring Boot", "FastAPI", ".NET", "Flutter"];
  const databases = ["MySQL", "PostgreSQL", "SQL Server", "Oracle", "Firebase", "MongoDB"];
  const devops = ["AWS", "GCP", "Docker", "CI/CD", "Scrum", "Clean Code", "API REST", "Git"];
  const aiTools = ["LLMs", "Agentes IA", "RAG", "MCP", "Prompt Engineering", "OpenCV", "TensorFlow", "Computer Vision"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
        delayChildren: 0.1
      }
    }
  }

  // Animaciones simplificadas para móvil
  const getCardAnimation = (isItemVisible: boolean) => {
    if (isMobile) {
      return {
        opacity: isItemVisible ? 1 : 0,
        y: isItemVisible ? 0 : 20,
      }
    }
    return {
      opacity: isItemVisible ? 1 : 0,
      y: isItemVisible ? 0 : 30,
      scale: isItemVisible ? 1 : 0.95
    }
  }

  const cardClassName = "bg-gradient-to-br from-emerald-200/40 to-emerald-100/40 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 p-4"

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-emerald-200/30 to-emerald-100/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 md:shadow-md md:shadow-emerald-500/10 md:hover:shadow-xl md:hover:shadow-emerald-500/25 transition-all duration-300 p-4"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        Habilidades Técnicas
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={skillsRef.ref}
        variants={containerVariants}
      >
        <motion.div
          className={cardClassName}
          initial={{ opacity: 0, y: 20 }}
          animate={getCardAnimation(skillsRef.visibleItems[0])}
          transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
          whileHover={isMobile ? undefined : { scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Code className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">Lenguajes</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: skillsRef.visibleItems[0] ? 1 : 0,
                }}
                transition={{
                  delay: isMobile ? 0.1 + index * 0.05 : 0.4 + index * 0.1,
                  duration: 0.3
                }}
              >
                <Badge variant="outline" className="border-emerald-600/40 dark:border-emerald-500/30 text-gray-800 dark:text-white hover:bg-emerald-500/20 text-base">
                  {lang}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={cardClassName}
          initial={{ opacity: 0, y: 20 }}
          animate={getCardAnimation(skillsRef.visibleItems[1])}
          transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
          whileHover={isMobile ? undefined : { scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Layers className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">Frameworks</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: skillsRef.visibleItems[1] ? 1 : 0,
                }}
                transition={{
                  delay: isMobile ? 0.1 + index * 0.05 : 0.4 + index * 0.1,
                  duration: 0.3
                }}
              >
                <Badge variant="outline" className="border-emerald-600/40 dark:border-emerald-500/30 text-gray-800 dark:text-white hover:bg-emerald-500/20 text-base">
                  {framework}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={cardClassName}
          initial={{ opacity: 0, y: 20 }}
          animate={getCardAnimation(skillsRef.visibleItems[2])}
          transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
          whileHover={isMobile ? undefined : { scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Database className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">Bases de Datos</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {databases.map((db, index) => (
              <motion.div
                key={db}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: skillsRef.visibleItems[2] ? 1 : 0,
                }}
                transition={{
                  delay: isMobile ? 0.1 + index * 0.05 : 0.4 + index * 0.1,
                  duration: 0.3
                }}
              >
                <Badge variant="outline" className="border-emerald-600/40 dark:border-emerald-500/30 text-gray-800 dark:text-white hover:bg-emerald-500/20 text-base">
                  {db}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={cardClassName}
          initial={{ opacity: 0, y: 20 }}
          animate={getCardAnimation(skillsRef.visibleItems[3])}
          transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
          whileHover={isMobile ? undefined : { scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Cloud className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">DevOps & Cloud</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {devops.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: skillsRef.visibleItems[3] ? 1 : 0,
                }}
                transition={{
                  delay: isMobile ? 0.1 + index * 0.05 : 0.4 + index * 0.1,
                  duration: 0.3
                }}
              >
                <Badge variant="outline" className="border-emerald-600/40 dark:border-emerald-500/30 text-gray-800 dark:text-white hover:bg-emerald-500/20 text-base">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={`${cardClassName} md:col-span-2 lg:col-span-1`}
          initial={{ opacity: 0, y: 20 }}
          animate={getCardAnimation(skillsRef.visibleItems[4])}
          transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
          whileHover={isMobile ? undefined : { scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Brain className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">IA & Machine Learning</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: skillsRef.visibleItems[4] ? 1 : 0,
                }}
                transition={{
                  delay: isMobile ? 0.1 + index * 0.05 : 0.4 + index * 0.1,
                  duration: 0.3
                }}
              >
                <Badge variant="outline" className="border-emerald-600/40 dark:border-emerald-500/30 text-gray-800 dark:text-white hover:bg-emerald-500/20 text-base">
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
