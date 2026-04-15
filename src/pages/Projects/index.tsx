import { useEffect, useState } from 'react'
import PageLayout from '../../components/PageLayout'
import fourthBg from '../../assets/images/fourth_bg.jpg'
import {
  PageTitle,
  Grid,
  ProjectCard,
  FeaturedBadge,
  ProjectInfo,
  ProjectName,
  ProjectDescription,
  ProjectFooter,
  ProjectLanguage,
  ProjectLinks,
  IconLink,
  LoadingText,
  EmptyText,
} from './styles'

const featuredNames = ['EFood', 'Minha-lista-de-contatos', 'Deadpool-', 'EventMark', 'minhas-tarefas']

const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C#': '#178600',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  Vue: '#41b883',
  Svelte: '#ff3e00',
}

interface Repo {
  id: number
  name: string
  description: string | null
  homepage: string
  html_url: string
  language: string | null
}

function isFeatured(name: string) {
  return featuredNames.some(
    (f) => f.toLowerCase() === name.toLowerCase()
  )
}

function Projects() {
  const [projects, setProjects] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/Reinaldo-Sn/repos?per_page=100')
      .then((res) => res.json())
      .then((repos: Repo[]) => {
        const sorted = [...repos].sort((a, b) => {
          const aFeat = isFeatured(a.name) ? 0 : 1
          const bFeat = isFeatured(b.name) ? 0 : 1
          if (aFeat !== bFeat) return aFeat - bFeat
          const aDeploy = a.homepage?.trim() ? 0 : 1
          const bDeploy = b.homepage?.trim() ? 0 : 1
          return aDeploy - bDeploy
        })
        setProjects(sorted)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <PageLayout background={fourthBg}>
      <PageTitle>Projects</PageTitle>
      {loading && <LoadingText>Loading projects...</LoadingText>}
      {!loading && error && <EmptyText>Failed to load projects. Try again.</EmptyText>}
      {!loading && !error && projects.length === 0 && (
        <EmptyText>No projects found.</EmptyText>
      )}
      <Grid>
        {projects.map((project) => {
          const featured = isFeatured(project.name)
          return (
            <ProjectCard key={project.id} $featured={featured}>
              {featured && <FeaturedBadge>Featured</FeaturedBadge>}
              <ProjectInfo>
                <ProjectName>{project.name.replace(/-/g, ' ')}</ProjectName>
                {project.description && (
                  <ProjectDescription>{project.description}</ProjectDescription>
                )}
              </ProjectInfo>
              <ProjectFooter>
                {project.language && (
                  <ProjectLanguage $color={languageColors[project.language] ?? '#aaa'}>
                    {project.language}
                  </ProjectLanguage>
                )}
                <ProjectLinks>
                  <IconLink href={project.html_url} target="_blank" rel="noreferrer">
                    GitHub
                  </IconLink>
                  {project.homepage && project.homepage.trim() !== '' && (
                    <IconLink href={project.homepage} target="_blank" rel="noreferrer">
                      Live →
                    </IconLink>
                  )}
                </ProjectLinks>
              </ProjectFooter>
            </ProjectCard>
          )
        })}
      </Grid>
    </PageLayout>
  )
}

export default Projects
