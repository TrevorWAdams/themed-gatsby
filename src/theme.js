export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
        primary: '#0cf',
        secondary: '#90c',
      },
      purple: {
        text: '#fff',
        background: '#90c',
        primary: '#0cf',
        secondary: '#222',
      },
      blue: {
        text: '#fff',
        background: '#0cf',
        primary: '#90c',
        secondary: '#222',
      }
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
      bg: 'background',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      }
    }
  }
}
