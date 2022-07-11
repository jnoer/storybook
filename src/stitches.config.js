import { createStitches } from '@stitches/react';

export const {
  css,
  config,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  prefix: '',
  theme: {
    background: {
      image: 'linear-gradient($colors$primary, $colors$secondary)',
      position: 'center',
      mobile: '$colors$secondary',
    },
    buttonShape: {
      default: '25px',
      square: '0',
    },
    colors: {
      black: '$grey900',
      blackContrast: '$white',
      blackDarkest: '$grey1000',

      grey0: '#fff',
      grey200: '#f2f2f2',
      grey300: '#e3e5e5',
      grey400: '#d0d0d0',
      grey500: '#838383',
      grey600: '#818186',
      grey700: '#4a4a4a',
      grey900: '#282828',
      grey1000: '#000',

      inputBorder: '$grey300',
      inputBorderFocused: '$primary',
      inputText: '$textPrimary',

      primary: '#485cc2',
      primaryContrast: '$white',
      primaryDark: '#2b439c',
      primaryHover: '$primaryDark',

      secondary: '#001e63',
      secondaryContrast: '$white',
      secondaryHover: '$secondary',

      red: '#bd411d',
      redContrast: '$white',
      redHover: '$red',

      smurfBlue: '#00bbdc',
      smurfBlueContrast: '$black',
      smurfBlueLight: '#57ddf5',

      textBlack: '$black',
      textHint: '#838383',
      textHintDark: '#575757',
      textPrimary: '#001e63',
      textSecondary: '#485cc2',

      white: '$grey0',
      whiteContrast: '$black',

      yellow: '#f2eb9d',
    },
    space: {
      // examples
      1: '5px',
      2: '10px',
      3: '15px',
      logo: '30px',
    },
    fontSizes: {
      xSmall: '12px',
      small: '14px',
      normal: '16px',
      large: '18px',
      xLarge: '20px',
      xxLarge: '24px',
      xxxLarge: '32px',
    },
    fonts: {
      globalFont: 'Graphik, arial, sans-serif',
      gtEesti: 'GT-Eesti, arial, sans-serif',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      logo: '40%',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
  },
  utils: {},
});