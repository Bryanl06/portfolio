export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get("username")

  if (!username) {
    return Response.json({ error: "Username is required" }, { status: 400 })
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "GitHub-Portfolio",
      },
      // Cache por 1 hora
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return Response.json({ error: "Usuario no encontrado" }, { status: 404 })
      }
      throw new Error("Error al obtener repositorios")
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return Response.json({ error: "Error al cargar los repositorios" }, { status: 500 })
  }
}
