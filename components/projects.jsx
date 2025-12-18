"use client"

import { useEffect, useState } from "react"
import { ProjectCard } from "@/components/project-card"

export function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const githubUsername = "Bryanl06"

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(`/api/github/repos?username=${githubUsername}`)

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Error al cargar los repositorios")
        }

        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [githubUsername])

  return (
    <section id="projects" className="container mx-auto px-4 py-20 md:py-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Proyectos</h2>
        <p className="text-xl text-muted-foreground">Una selección de mis proyectos más recientes en GitHub</p>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-card rounded-lg border border-border animate-pulse" />
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">{error}</p>
          <p className="text-sm text-muted-foreground">
            Asegúrate de actualizar el nombre de usuario en components/projects.jsx
          </p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  )
}
