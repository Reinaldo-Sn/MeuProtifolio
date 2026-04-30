import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import secondBg from '../../assets/images/second_bg.jpg'
import img1 from '../../assets/images/sobre/img1.jpg'
import img2 from '../../assets/images/sobre/img2.jpg'
import img3 from '../../assets/images/sobre/img3.jpg'
import img4 from '../../assets/images/sobre/img4.jpg'
import {
  PageTitle,
  ContentGrid,
  TextColumn,
  ImageColumn,
  AboutImage,
  BaseImage,
  AnimatedImage,
  GlitchLayer,
  Description,
  Cursor,
  PrimaryButton,
} from './styles'

const images = [img1, img2, img3, img4]

const katakana = 'ｦｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'

function ScrambleTitle({ text }: { text: string }) {
  const [display, setDisplay] = useState(() =>
    text.split('').map((c) =>
      c === ' ' ? ' ' : katakana[Math.floor(Math.random() * katakana.length)]
    ).join('')
  )
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let iteration = 0
    const id = setInterval(() => {
      setDisplay(
        text.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < iteration) return char
          return katakana[Math.floor(Math.random() * katakana.length)]
        }).join('')
      )
      iteration += 0.5
      if (iteration >= text.length) {
        clearInterval(id)
        setDisplay(text)
        setTimeout(() => setCycle((c) => c + 1), 4000)
      }
    }, 50)
    return () => clearInterval(id)
  }, [cycle, text])

  return <>{display}</>
}

function TypewriterText({ text, startDelay = 0, speed = 10 }: {
  text: string
  startDelay?: number
  speed?: number
}) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let intervalId: ReturnType<typeof setInterval>

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, startDelay, speed])

  return (
    <>
      {displayed}
      {!done && displayed.length > 0 && <Cursor>|</Cursor>}
    </>
  )
}

const para1 = 'Olá, eu sou o Reinaldo'
const para2 = 'Desenvolvedor Full Stack formado pela EBAC, apaixonado por transformar ideias em aplicações completas, funcionais e bem estruturadas.'
const para3 = 'Gosto de trabalhar em todo o ciclo de desenvolvimento —do back-end ao front-end —sempre com foco em código limpo, performance e uma boa experiência para o usuário.'
const para4 = 'No back-end, utilizo Python com Django para construir APIs seguras e escaláveis. Já desenvolvi projetos como o BookStore, um e-commerce com gestão de produtos e pedidos, e o MyNET, uma rede social com autenticação JWT, feed de posts, comentários e mensagens em tempo real.'
const para5 = 'No front-end, trabalho com React e TypeScript, criando interfaces modernas e responsivas. Um dos destaques é o EFood, um aplicativo de delivery com navegação entre restaurantes, carrinho de compras e fluxo completo de checkout.'
const para6 = 'Também tenho experiência com JavaScript, Node.js, Docker e Git, sempre aplicando boas práticas de desenvolvimento e buscando evoluir constantemente.'
const para7 = 'Atualmente, estou focado em crescer como desenvolvedor e contribuir em projetos que gerem impacto real.'

function About() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => {
        setPrev(c)
        return (c + 1) % images.length
      })
    }, 10000)
    return () => clearInterval(id)
  }, [])

  return (
    <PageLayout background={secondBg}>
      <ContentGrid>
        <TextColumn>
          <PageTitle>
            <ScrambleTitle text="Sobre Mim" />
          </PageTitle>
          <Description>
            <TypewriterText text={para1} startDelay={1200} speed={15} />
          </Description>
          <Description>
            <TypewriterText text={para2} startDelay={1750} speed={15} />
          </Description>
          <Description>
            <TypewriterText text={para3} startDelay={3950} speed={15} />
          </Description>
          <Description>
            <TypewriterText text={para4} startDelay={6600} speed={15} />
          </Description>
          <Description>
            <TypewriterText text={para5} startDelay={10250} speed={15} />
          </Description>
          <Description>
            <TypewriterText text={para6} startDelay={13650} speed={15} />
          </Description>
          <Description>
            <TypewriterText text={para7} startDelay={15950} speed={15} />
          </Description>
          <PrimaryButton as={Link} to="/projects">Ver Projetos</PrimaryButton>
        </TextColumn>
        <ImageColumn>
          <AboutImage>
            {prev !== null && <BaseImage src={images[prev]} alt="Sobre" />}
            <AnimatedImage key={current} src={images[current]} alt="Sobre" />
            <GlitchLayer $imgUrl={images[current]} />
          </AboutImage>
        </ImageColumn>
      </ContentGrid>
    </PageLayout>
  )
}

export default About
