import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './styles/theme'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: ${fonts.family};
    font-weight: ${fonts.weight.regular};
    font-size: 16px;
    color: ${colors.text.primary};
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${fonts.weight.bold};
    line-height: 1.3;
  }

  p {
    line-height: 1.7;
  }
`

export default GlobalStyles
