import { User } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
              <User className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Sobre Mí</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras y eficientes. Mi enfoque
              principal está en el desarrollo web full stack, donde combino creatividad y lógica para construir
              aplicaciones que resuelven problemas reales.
            </p>
            <p className="text-muted-foreground">
              Con experiencia en múltiples tecnologías modernas, me especializo en crear interfaces de usuario
              intuitivas y sistemas backend robustos. Me encanta mantenerme actualizado con las últimas tendencias en
              desarrollo web y compartir mis conocimientos con la comunidad.
            </p>
            <p className="text-muted-foreground">
              Cuando no estoy programando, disfruto contribuyendo a proyectos de código abierto, aprendiendo nuevas
              tecnologías y explorando formas de optimizar procesos de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
