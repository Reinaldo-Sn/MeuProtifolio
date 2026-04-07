import { useEffect, useState } from 'react'
import PageLayout from '../../components/PageLayout'
import fourthBg from '../../assets/images/fourth_bg.jpg'
import {
  PageTitle,
  Grid,
  ProjectCard,
  ProjectInfo,
  ProjectName,
  ProjectFooter,
  ProjectLanguage,
  ProjectLinks,
  IconLink,
  LoadingText,
  EmptyText,
} from './styles'

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

function Projects() {
  const [projects, setProjects] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/Reinaldo-Sn/repos?per_page=100')
      .then((res) => res.json())
      .then((repos: Repo[]) => {
        const published = repos.filter((r) => r.homepage && r.homepage.trim() !== '')
        setProjects(published)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <PageLayout background={fourthBg}>
      <PageTitle>Projetos</PageTitle>
      {loading && <LoadingText>Carregando projetos...</LoadingText>}
      {!loading && error && <EmptyText>Erro ao carregar projetos. Tente novamente.</EmptyText>}
      {!loading && !error && projects.length === 0 && (
        <EmptyText>Nenhum projeto publicado encontrado.</EmptyText>
      )}
      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectInfo>
              <ProjectName>{project.name.replace(/-/g, ' ')}</ProjectName>
            </ProjectInfo>
            <ProjectFooter>
              {project.language && (
                <ProjectLanguage $color={languageColors[project.language] ?? '#aaa'}>
                  {project.language}
                </ProjectLanguage>
              )}
              <ProjectLinks>
                <IconLink href={project.html_url} target="_blank" rel="noreferrer" title="GitHub">
                  GitHub
                </IconLink>
                <IconLink href={project.homepage} target="_blank" rel="noreferrer" title="Ver projeto">
                  Ver projeto →
                </IconLink>
              </ProjectLinks>
            </ProjectFooter>
          </ProjectCard>
        ))}
      </Grid>
    </PageLayout>
  )
}

export default Projects
