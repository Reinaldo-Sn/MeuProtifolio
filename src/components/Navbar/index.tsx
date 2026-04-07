import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Nav,
  Logo,
  MiniLogo,
  NavList,
  NavItem,
  HamburgerButton,
  Overlay,
} from './styles'

const navLinks = [
  { to: '/', label: 'Home', icon: '⌂' },
  { to: '/about', label: 'About', icon: '◉' },
  { to: '/projects', label: 'Projects', icon: '◈' },
  { to: '/contact', label: 'Contact', icon: '✉' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
      <Nav $isOpen={isOpen}>
      <Logo>Portfólio</Logo>
      <MiniLogo>P</MiniLogo>
      <HamburgerButton onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
        {isOpen ? '✕' : '☰'}
      </HamburgerButton>
      <NavList $isOpen={isOpen}>
        {navLinks.map(({ to, label, icon }) => (
          <NavItem key={to}>
            <NavLink to={to} onClick={() => setIsOpen(false)} end={to === '/'}>
              <span>{icon}</span>
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
