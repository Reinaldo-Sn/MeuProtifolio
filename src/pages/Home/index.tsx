import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import {
  HomeWrapper,
  ContentBox,
  AuthorImage,
  TextContent,
  Greeting,
  RedName,
  RoleText,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from './styles'

const katakana = 'ｦｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'

function ScrambleName({ name }: { name: string }) {
  const [display, setDisplay] = useState(() =>
    name.split('').map(() => katakana[Math.floor(Math.random() * katakana.length)]).join('')
  )
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let iteration = 0

    const id = setInterval(() => {
      setDisplay(
        name.split('').map((char, i) => {
          if (i < iteration) return char
          return katakana[Math.floor(Math.random() * katakana.length)]
        }).join('')
      )
      iteration += 0.5
      if (iteration >= name.length) {
        clearInterval(id)
        setDisplay(name)
        setTimeout(() => setCycle((c) => c + 1), 4000)
      }
    }, 50)

    return () => clearInterval(id)
  }, [cycle, name])

  return <RedName>{display}</RedName>
}

function Home() {
  return (
    <HomeWrapper>
      <ContentBox>
        <AuthorImage>
          <img src="https://github.com/Reinaldo-Sn.png" alt="Reinaldo Sn" />
        </AuthorImage>
        <TextContent>
          <Greeting>
            Hi, I'm <ScrambleName name="Reinaldo" />
          </Greeting>
          <RoleText>
            <TypeAnimation
              sequence={[
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
          </RoleText>
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
