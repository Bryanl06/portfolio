import { ExternalLink, Star, GitFork } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectCard({ repo }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="truncate">{repo.name}</span>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            aria-label={`Ver ${repo.name} en GitHub`}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </CardTitle>
        <CardDescription className="line-clamp-2 min-h-[2.5rem]">
          {repo.description || "Sin descripción disponible"}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {repo.language && <Badge variant="secondary">{repo.language}</Badge>}
          {repo.topics.slice(0, 3).map((topic) => (
            <Badge key={topic} variant="outline">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-4 border-t">
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            {repo.forks_count}
          </span>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            Ver código
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
