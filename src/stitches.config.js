import { createStitches } from '@stitches/react';

import GraphikBold from './fonts/graphik/Graphik-Bold-Web.woff';
import GraphikMedium from './fonts/graphik/Graphik-Medium-Web.woff';
import GraphikMediumItalic from './fonts/graphik/Graphik-MediumItalic-Web.woff';
import GraphikRegular from './fonts/graphik/Graphik-Regular-Web.woff';
import GraphikSemiBold from './fonts/graphik/Graphik-Semibold-Web.woff';
import GTEestiBold from './fonts/haglofs/GT-Eesti-Bold-Web.woff';
import GTEestiBoldItalic from './fonts/haglofs/GT-Eesti-BoldItalic-Web.woff';
import GTEestiRegular from './fonts/haglofs/GT-Eesti-Regular-Web.woff';
import GTEestiRegularItalic from './fonts/haglofs/GT-Eesti-RegularItalic-Web.woff';

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

globalCss({
  '@font-face': [
    // Graphik
    {
      fontFamily: 'Graphik',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 400,
      src: `url(${GraphikRegular}) format("woff")`,
    },
    {
      fontFamily: 'Graphik',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 500,
      src: `url(${GraphikMedium}) format("woff")`,
    },
    {
      fontFamily: 'Graphik',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'italic',
      fontWeight: 500,
      src: `url(${GraphikMediumItalic}) format("woff")`,
    },
    {
      fontFamily: 'Graphik',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 600,
      src: `url(${GraphikSemiBold}) format("woff")`,
    },
    {
      fontFamily: 'Graphik',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 700,
      src: `url(${GraphikBold}) format("woff")`,
    },
    // GT-Eesti
    {
      fontFamily: 'GT-Eesti',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 400,
      src: `url(${GTEestiRegular}) format("woff")`,
    },
    {
      fontFamily: 'GT-Eesti',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'italic',
      fontWeight: 400,
      src: `url(${GTEestiRegularItalic}) format("woff")`,
    },
    {
      fontFamily: 'GT-Eesti',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontWeight: 700,
      src: `url(${GTEestiBold}) format("woff")`,
    },
    {
      fontFamily: 'GT-Eesti',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      fontStyle: 'italic',
      fontWeight: 700,
      src: `url(${GTEestiBoldItalic}) format("woff")`,
    },
  ],
  '*': {
    fontFamily: '$globalFont',
  },
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    margin: '0',
  },
  '#root': {
    height: '100%',
  },
})();
