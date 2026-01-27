import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-fade-in">
            Disponible para proyectos
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance animate-fade-in">
            Desarrollador Full Stack
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            Transformando ideas en experiencias web modernas y funcionales
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in">
          <Button size="lg" asChild className="text-lg px-8">
            <a href="#about">Conocer más</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
            <a href="#projects">Ver Proyectos</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
            <a href="https://github.com/Bryanl06" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in">
          <a
            href="https://github.com/Bryanl06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub"
          >
            <Github className="h-7 w-7" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a
            href="mailto:tu@email.com"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            aria-label="Email"
          >
            <Mail className="h-7 w-7" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
