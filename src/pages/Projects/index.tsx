import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss, SiVuedotjs,
  SiRust, SiPhp, SiSwift, SiKotlin, SiDart, SiRuby, SiSvelte,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
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
  LangIcons,
  LangIcon,
  ProjectLinks,
  IconLink,
  LoadingText,
  EmptyText,
} from './styles'

const featuredNames = ['EFood', 'MyNET', 'bookstore']

const languageIcons: Record<string, { Icon: IconType; color: string }> = {
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  JavaScript: { Icon: SiJavascript, color: '#f1e05a' },
  Python:     { Icon: SiPython,     color: '#3572A5' },
  HTML:       { Icon: SiHtml5,      color: '#e34c26' },
  CSS:        { Icon: SiCss,        color: '#563d7c' },
  Vue:        { Icon: SiVuedotjs,   color: '#41b883' },
  Java:       { Icon: FaJava,       color: '#b07219' },
  Rust:       { Icon: SiRust,       color: '#dea584' },
  PHP:        { Icon: SiPhp,        color: '#4F5D95' },
  Swift:      { Icon: SiSwift,      color: '#F05138' },
  Kotlin:     { Icon: SiKotlin,     color: '#A97BFF' },
  Dart:       { Icon: SiDart,       color: '#00B4AB' },
  Ruby:       { Icon: SiRuby,       color: '#701516' },
  Svelte:     { Icon: SiSvelte,     color: '#ff3e00' },
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
  return featuredNames.some((f) => f.toLowerCase() === name.toLowerCase())
}

function Projects() {
  const [projects, setProjects] = useState<Repo[]>([])
  const [repoLanguages, setRepoLanguages] = useState<Record<string, string[]>>({})
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

        const initial: Record<string, string[]> = {}
        sorted.forEach((repo) => {
          if (repo.language) initial[repo.name] = [repo.language]
        })
        setRepoLanguages(initial)

        const featured = sorted.filter((r) => isFeatured(r.name))
        Promise.all(
          featured.map((repo) =>
            fetch(`https://api.github.com/repos/Reinaldo-Sn/${repo.name}/languages`)
              .then((res) => res.json())
              .then((langs: Record<string, number>) => ({
                name: repo.name,
                languages: Object.keys(langs).slice(0, 2),
              }))
              .catch(() => ({
                name: repo.name,
                languages: repo.language ? [repo.language] : [],
              }))
          )
        ).then((results) => {
          setRepoLanguages((prev) => {
            const map = { ...prev }
            results.forEach(({ name, languages }) => { map[name] = languages })
            return map
          })
        })
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
          const allLangs = repoLanguages[project.name] ??
            (project.language ? [project.language] : [])
          const langs = featured ? allLangs : allLangs.slice(0, 1)
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
                <LangIcons>
                  {langs.map((lang) => {
                    const entry = languageIcons[lang]
                    if (!entry) return null
                    const { Icon, color } = entry
                    return (
                      <LangIcon key={lang} $color={color} title={lang}>
                        <Icon />
                      </LangIcon>
                    )
                  })}
                </LangIcons>
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
