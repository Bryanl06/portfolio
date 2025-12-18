"use client"

import { Users, Target, Lightbulb, MessageSquare, TrendingUp, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const softSkills = [
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Colaboración efectiva con equipos multidisciplinarios para alcanzar objetivos comunes.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación",
    description: "Capacidad para explicar conceptos técnicos de forma clara y comprensible.",
  },
  {
    icon: Target,
    title: "Resolución de Problemas",
    description: "Enfoque analítico para identificar y solucionar desafíos técnicos complejos.",
  },
  {
    icon: Lightbulb,
    title: "Pensamiento Creativo",
    description: "Generación de soluciones innovadoras y eficientes para cada proyecto.",
  },
  {
    icon: TrendingUp,
    title: "Adaptabilidad",
    description: "Rápida adopción de nuevas tecnologías y metodologías de desarrollo.",
  },
  {
    icon: Award,
    title: "Atención al Detalle",
    description: "Compromiso con la calidad y excelencia en cada línea de código.",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Soft Skills</h2>
            <p className="text-xl text-muted-foreground">Habilidades que complementan mi experiencia técnica</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
