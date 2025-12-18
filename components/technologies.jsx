"use client"

import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "REST APIs"],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Vercel", "AWS"],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    category: "Otros",
    items: ["GraphQL", "Jest", "Redux", "Prisma", "Supabase", "Linux", "CI/CD"],
    color: "from-orange-500/10 to-red-500/10",
  },
]

export function Technologies() {
  return (
    <section id="technologies" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Tecnologías y Herramientas</h2>
            <p className="text-xl text-muted-foreground">
              Lenguajes, frameworks y herramientas con los que he trabajado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} mb-6`}>
                  <h3 className="text-xl font-bold">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tech.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
