import type { IconType } from 'react-icons'
import { SiTypescript, SiPython, SiReact, SiDjango, SiRedux, SiDocker } from 'react-icons/si'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import PageLayout from '../../components/PageLayout'
import fourthBg from '../../assets/images/fourth_bg.jpg'
import efoods from '../../assets/images/projetos/efoods.jpg'
import myNet from '../../assets/images/projetos/my_net.jpg'
import bookstore from '../../assets/images/projetos/api_bookstore.jpg'
import {
  PageTitle,
  Grid,
  ProjectCard,
  ProjectImage,
  ProjectBody,
  ProjectInfo,
  ProjectName,
  ProjectDescription,
  ProjectFooter,
  LangIcons,
  LangIcon,
  ProjectLinks,
  IconLink,
} from './styles'

const languageIcons: Record<string, { Icon: IconType; color: string }> = {
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  Python:     { Icon: SiPython,     color: '#3572A5' },
  React:      { Icon: SiReact,      color: '#61dafb' },
  Django:     { Icon: SiDjango,     color: '#44b78b' },
  Redux:      { Icon: SiRedux,      color: '#764abc' },
  Docker:     { Icon: SiDocker,     color: '#2496ed' },
}

interface Project {
  name: string
  description: string
  image: string
  languages: string[]
  github: string
  live?: string
}

const projects: Project[] = [
  {
    name: 'EFood',
    description: 'App de delivery com navegação de restaurantes, carrinho de compras e checkout com validação de pagamento.',
    image: efoods,
    languages: ['TypeScript', 'React', 'Redux'],
    github: 'https://github.com/Reinaldo-Sn/EFood',
    live: 'https://efood-rsn-pi.vercel.app/',
  },
  {
    name: 'MyNET',
    description: 'Rede social com autenticação JWT, feed de posts, comentários e mensagens em tempo real.',
    image: myNet,
    languages: ['Python', 'Django', 'TypeScript'],
    github: 'https://github.com/Reinaldo-Sn/MyNET',
    live: 'https://my-net-three.vercel.app/',
  },
  {
    name: 'BookStore',
    description: 'API RESTful para e-commerce de livros com gestão de produtos, categorias e pedidos.',
    image: bookstore,
    languages: ['Python', 'Django', 'Docker'],
    github: 'https://github.com/Reinaldo-Sn/bookstore',
  },
]

function Projects() {
  return (
    <PageLayout background={fourthBg}>
      <PageTitle>Projects</PageTitle>
      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.name}>
            <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
            <ProjectBody>
              <ProjectInfo>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
              <ProjectFooter>
                <LangIcons>
                  {project.languages.map((lang) => {
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
                  <IconLink href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub /> GitHub
                  </IconLink>
                  {project.live && (
                    <IconLink href={project.live} target="_blank" rel="noreferrer">
                      <FiExternalLink /> Live
                    </IconLink>
                  )}
                </ProjectLinks>
              </ProjectFooter>
            </ProjectBody>
          </ProjectCard>
        ))}
      </Grid>
    </PageLayout>
  )
}

export default Projects
