export const colors = {
  white: '#ffffff',
  black: '#000000',

  text: {
    primary: '#ffffff',
    secondary: '#dddddd',
    muted: '#aaaaaa',
    dark: '#000000',
  },

  overlay: {
    light: 'rgba(0, 0, 0, 0.2)',
    medium: 'rgba(0, 0, 0, 0.4)',
    strong: 'rgba(0, 0, 0, 0.8)',
    heavy: 'rgba(0, 0, 0, 0.8)',
  },

  surface: {
    card: 'rgba(0, 0, 0, 0.8)',
    nav: 'rgba(0, 0, 0, 0.8)',
    hover: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(255, 255, 255, 0.1)',
  },

  button: {
    primary: '#ffffff',
    primaryHover: '#cccccc',
    primaryText: '#000000',
  },
}

export const fonts = {
  family: "'Noto Sans JP', 'Open Sans', sans-serif",
  weight: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
}

export const layout = {
  navWidth: '280px',
  contentWidth: '1450px',
  contentHeight: '720px',
  spacing: {
    sm: '24px',
    md: '40px',
    lg: '60px',
    xl: '80px',
  },
}

const theme = { colors, fonts, layout }

export default theme
