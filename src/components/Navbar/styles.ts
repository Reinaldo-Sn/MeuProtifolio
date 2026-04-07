import styled from 'styled-components'

export const Nav = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 80px;
  bottom: 80px;
  width: 280px;
  height: 720px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  z-index: 1000;

  /* Tablet e mobile: barra no topo */
  @media (max-width: 1024px) {
    top: 0;
    bottom: auto;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 24px;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
  }

  @media (max-width: 767px) {
    height: 60px;
  }
`

export const Logo = styled.div`
  margin-bottom: 20px;
  padding: 0 20px;
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    margin-bottom: 0;
    padding: 0;
    font-size: 18px;
    letter-spacing: 2px;
    flex-shrink: 0;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    letter-spacing: 1px;
  }
`

export const MiniLogo = styled.div`
  display: none;
`

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
  margin-left: auto;
  padding: 4px 8px;
  line-height: 1;

  @media (max-width: 767px) {
    display: block;
  }
`

export const NavList = styled.ul<{ $isOpen: boolean }>`
  width: 100%;
  margin-top: 20px;

  /* Tablet: links visíveis em linha */
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    margin-top: 0;
    margin-left: auto;
    gap: 4px;
  }

  /* Mobile: dropdown com hamburger */
  @media (max-width: 767px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    margin-left: 0;
    background-color: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(8px);
    padding-bottom: 10px;
  }
`

export const Overlay = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 999;
  }
`

export const NavItem = styled.li`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 25px;
    color: #aaa;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    span {
      font-size: 18px;
      min-width: 20px;
    }

    em {
      font-style: normal;
    }

    &:hover,
    &.active {
      color: #fff;
      border-left: 3px solid #ffffff;
      padding-left: 22px;
    }
  }

  /* Tablet: links em linha, indicador embaixo */
  @media (max-width: 1024px) {
    width: auto;

    a {
      padding: 20px 14px;
      gap: 8px;
      border-left: none !important;

      span {
        font-size: 15px;
      }

      &:hover,
      &.active {
        color: #fff;
        border-left: none !important;
        border-bottom: 2px solid #ffffff;
        padding-left: 14px;
        padding-bottom: 18px;
      }
    }
  }

  /* Mobile: volta ao layout em lista */
  @media (max-width: 767px) {
    width: 100%;

    a {
      padding: 14px 25px;
      gap: 12px;

      &:hover,
      &.active {
        border-bottom: none !important;
        border-left: 3px solid #ffffff !important;
        padding-left: 22px;
        padding-bottom: 14px;
      }
    }
  }
`
