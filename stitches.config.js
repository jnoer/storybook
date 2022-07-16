import { createStitches } from '@stitches/react';

console.log(createStitches());

const test = createStitches({
  prefix: '',
  theme: {
    buttonShape: {
      default: '25px',
      square: '0',
    }
  }
});

export const {
  css,
  config,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = test;

export { createStitches } from '@stitches/react';
