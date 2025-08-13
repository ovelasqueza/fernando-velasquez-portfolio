import { Badge } from "@/components/ui/badge"
import { Code, Layers, Database, Cloud } from "lucide-react"

export function TechnicalSkills() {
  const languages = ["Python", "JavaScript", "PHP", "Java", "TypeScript"];
  const frameworks = ["Node.js", "Vue.js", "React", "Angular", "Laravel", "Spring Boot", "FastAPI"];
  const databases = ["MySQL", "PostgreSQL", "SQL Server", "Oracle"];
  const devops = ["AWS", "GCP", "Docker", "CI/CD", "Scrum", "Clean Code", "API REST"];

  return (
    <div className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg p-4">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Habilidades Técnicas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Code className="h-5 w-5 text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-400">Lenguajes</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge key={lang} variant="outline" className="border-emerald-500/30 text-white hover:bg-emerald-500/20 text-xs">
                {lang}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="h-5 w-5 text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-400">Frameworks</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework) => (
              <Badge key={framework} variant="outline" className="border-emerald-500/30 text-white hover:bg-emerald-500/20 text-xs">
                {framework}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Database className="h-5 w-5 text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-400">Bases de Datos</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {databases.map((db) => (
              <Badge key={db} variant="outline" className="border-emerald-500/30 text-white hover:bg-emerald-500/20 text-xs">
                {db}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-400/30 to-emerald-300/30 dark:from-emerald-950/15 dark:to-emerald-900/15 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Cloud className="h-5 w-5 text-emerald-400" />
            <h4 className="text-lg font-semibold text-emerald-400">DevOps & Cloud</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {devops.map((tool) => (
              <Badge key={tool} variant="outline" className="border-emerald-500/30 text-white hover:bg-emerald-500/20 text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
