import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import {
  HomeWrapper,
  ContentBox,
  AuthorImage,
  TextContent,
  Greeting,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from './styles'

function Home() {
  return (
    <HomeWrapper>
      <ContentBox>
        <AuthorImage>
          <img src="https://github.com/Reinaldo-Sn.png" alt="Reinaldo Sn" />
        </AuthorImage>
        <TextContent>
          <Greeting>
            <TypeAnimation
              sequence={[
                "Hi, I'm Reinaldo",
                2000,
                'Full Stack Developer',
                2000,
                'Python Developer',
                2000,
                'React Developer',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </Greeting>
          <Subtitle>
            Desenvolvedor apaixonado por criar experiências digitais incríveis.
            Focado em código limpo, performance e design moderno.
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton as={Link} to="/about">Saiba Mais</PrimaryButton>
            <SecondaryButton as={Link} to="/contact">Fale Comigo</SecondaryButton>
          </ButtonGroup>
        </TextContent>
      </ContentBox>
    </HomeWrapper>
  )
}

export default Home
