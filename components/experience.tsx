import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Sistemas Inteligentes de Monitoreo S.A.S",
      position: "Desarrollador de Software y Aplicaciones",
      period: "2024/09 - Presente",
      location: "Remote/Cali Colombia",
      description:
        "Liderazgo técnico en el desarrollo de plataformas web con arquitectura de microservicios. Implementación de sistemas backend escalables, sistemas de análisis facial con modelos de inteligencia artificial",
      technologies: ["Python", "PHP(Laravel)", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "GCP", "TypeScript"],
      achievements: [
        "Optimización de rendimiento que redujo tiempos de carga en 60%",
        "Implementación de modelos de IA para reconocimiento y conteo de pasajeros",
        "Construcción de APIs REST robustas y sistemas de autenticación avanzados"
      ]
    },
    {
      company: "PCW Ditech Integradores Tecnologicos S.A.S.",
      position: "Ingeniero de Software",
      period: "2021/04 - 2024/09",
      location: " Remote/Bogotá Colombia",
      description:
        "Desarrollo de aplicaciones web empresariales y lógica de negocio personalizados. Especialización en integración de APIs complejas y bases de datos distribuidas.",
      technologies: ["Vue.js", "React", "MySQL", "PHP(Laravel)", "Java (Spring Boot)", "AWS", "Docker"],
      achievements: [
        "Desarrollo de 15+ aplicaciones web empresariales",
        "Implementación de sistema de reportes GPS en tiempo real",
        "Mantenimiento de servidores AWS y serverless"
      ]
    },
    {
      company: "Clear Minds Consultores",
      position: "Desarrollador de Software Junior",
      period: "2020 - 2021/04",
      location: "Remote/Bogotá Colombia",
      description: "Diseño, desarrollo e implementación de un sistema web y backend para la gestión de transacciones ATM y ACH de Bancolombia en Panamá, integrando servicios bancarios críticos con altos estándares de seguridad y disponibilidad.",
      technologies: ["Python", "Java (Spring Boot)", "JavaScript", "FastAPI", "SQL Server", "AWS", "Metodologías Ágiles (SCRUM)"],
      achievements: [
        "Diseñé y desarrollé un sistema web y backend para el procesamiento seguro de transacciones ATM y ACH de Bancolombia en Panamá, garantizando alta disponibilidad y cumplimiento de estándares bancarios.",
        "Ejecuté la migración de servidores on-premise a una arquitectura Serverless en AWS, reduciendo costos operativos y mejorando la escalabilidad.",
        "Implementé pruebas unitarias y de integración, incrementando la cobertura y reduciendo errores en producción."
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-gradient-to-r from-gray-100/50 to-white/50 dark:from-slate-900/50 dark:to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experiencia Profesional</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/80 dark:to-slate-900/80 border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Building className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-xl lg:text-2xl text-white">{exp.position}</CardTitle>
                        <div className="text-emerald-400 font-semibold text-lg">{exp.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-300 flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium text-sm lg:text-base">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-300 flex-shrink-0">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium text-sm lg:text-base">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-900 dark:text-white text-base leading-relaxed">{exp.description}</CardDescription>

                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Logros Principales:</h4>
                    <ul className="list-disc list-inside space-y-1 text-white">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

