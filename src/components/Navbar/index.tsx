import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiUser, FiLayers, FiSend } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import {
  Nav,
  Logo,
  NavList,
  NavItem,
  HamburgerButton,
  Overlay,
} from './styles'

const katakana = 'ｦｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'

function ScrambleLogo({ text }: { text: string }) {
  const [display, setDisplay] = useState(() =>
    text.split('').map(() => katakana[Math.floor(Math.random() * katakana.length)]).join('')
  )
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let iteration = 0
    const id = setInterval(() => {
      setDisplay(
        text.split('').map((char, i) => {
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

const navLinks: { to: string; label: string; Icon: IconType }[] = [
  { to: '/',         label: 'Home',     Icon: FiHome   },
  { to: '/about',    label: 'About',    Icon: FiUser   },
  { to: '/projects', label: 'Projects', Icon: FiLayers },
  { to: '/contact',  label: 'Contact',  Icon: FiSend   },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
      <Nav $isOpen={isOpen}>
        <Logo>
          <ScrambleLogo text="Portfólio" />
        </Logo>
        <HamburgerButton onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </HamburgerButton>
        <NavList $isOpen={isOpen}>
          {navLinks.map(({ to, label, Icon }) => (
            <NavItem key={to}>
              <NavLink to={to} onClick={() => setIsOpen(false)} end={to === '/'}>
                <Icon />
                <em>{label}</em>
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </>
  )
}

export default Navbar
