import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import secondBg from '../../assets/images/second_bg.jpg'
import sobreImg from '../../assets/images/sobre.jpg'
import {
  PageTitle,
  ContentGrid,
  TextColumn,
  ImageColumn,
  AboutImage,
  Description,
  PrimaryButton,
} from './styles'

function About() {
  return (
    <PageLayout background={secondBg}>
      <ContentGrid>
        <TextColumn>
          <PageTitle>Sobre Mim</PageTitle>
          <Description>
            Olá! Sou Reinaldo, Desenvolvedor Full Stack Python formado pela EBAC.
            Tenho experiência na criação de aplicações web completas, do back-end ao
            front-end, com foco em código limpo e boas práticas de desenvolvimento.
          </Description>
          <Description>
            No back-end trabalho principalmente com Python, desenvolvendo APIs e
            automações robustas. No front-end utilizo React com TypeScript para
            construir interfaces modernas, responsivas e de alta performance.
          </Description>
          <Description>
            Também tenho experiência com JavaScript, Node.js, HTML5, CSS3 e Git,
            buscando sempre evoluir e entregar soluções que gerem valor real para
            os projetos.
          </Description>
          <PrimaryButton as={Link} to="/projects">Ver Projetos</PrimaryButton>
        </TextColumn>
        <ImageColumn>
          <AboutImage>
            <img src={sobreImg} alt="Sobre mim" />
          </AboutImage>
        </ImageColumn>
      </ContentGrid>
    </PageLayout>
  )
}

export default About
