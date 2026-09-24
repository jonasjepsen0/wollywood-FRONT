export const theme = {

  colors: {
    primary: '#d97852',
    text: '#000000',
    background: '#ffffff',
    line: '#5c1f06',
    button: '#d1b3a7',
    buttonBorder: '#927d74'
  },

  fonts: {
    body: '"Open Sans", sans-serif',
    logo: '"Roboto Condensed", sans-serif'
  },

  fontSizes: {
    s: '17px',
    m: '22px',
    l: '25px',
    xl: '42px',
    xxl: '67px'
  },

  maxWidth: '1000px'

} as const

export type Theme = typeof theme
