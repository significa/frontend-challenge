export default {
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },

  border: {
    radius: '0.4rem'
  },

  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans- serif",
    light: 300,
    normal: 500,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '9rem'
    }
  },

  colors: {
    yellow: '#FF9F1C',
    red: '#FF4040',
    green: '#2EC4B6',
    dark: '#0A1014',
    grey: '#1B2329',
    midGrey: '#353F4C',
    lightGrey: '#7A8C99',
    white: '#FFF'
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
