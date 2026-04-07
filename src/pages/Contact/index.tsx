import { FaGithub, FaLinkedin } from 'react-icons/fa'
import fifthBg from '../../assets/images/fifth_bg.jpg'
import {
  SiTypescript, SiJavascript, SiReact, SiNodedotjs,
  SiHtml5, SiCss, SiPython, SiGit,
} from 'react-icons/si'
import PageLayout from '../../components/PageLayout'
import {
  Wrapper,
  SocialSection,
  SocialLink,
  SocialLabel,
  Divider,
  TechSection,
  TechTitle,
  TechGrid,
  TechItem,
  TechName,
} from './styles'

const socials = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/Reinaldo-Sn',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/',
  },
]

const techs = [
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#f1e05a' },
  { icon: <SiReact />, name: 'React', color: '#61dafb' },
  { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
  { icon: <SiHtml5 />, name: 'HTML5', color: '#e34c26' },
  { icon: <SiCss />, name: 'CSS3', color: '#563d7c' },
  { icon: <SiPython />, name: 'Python', color: '#3572A5' },
  { icon: <SiGit />, name: 'Git', color: '#F05032' },
]

function Contact() {
  return (
    <PageLayout background={fifthBg}>
      <Wrapper>
        <SocialSection>
          {socials.map(({ icon, label, url }) => (
            <SocialLink key={label} href={url} target="_blank" rel="noreferrer">
              {icon}
              <SocialLabel>{label}</SocialLabel>
            </SocialLink>
          ))}
        </SocialSection>

        <Divider />

        <TechSection>
          <TechTitle>Tecnologias</TechTitle>
          <TechGrid>
            {techs.map(({ icon, name, color }) => (
              <TechItem key={name} $color={color}>
                {icon}
                <TechName>{name}</TechName>
              </TechItem>
            ))}
          </TechGrid>
        </TechSection>
      </Wrapper>
    </PageLayout>
  )
}

export default Contact
