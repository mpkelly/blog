import type Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { baseTheme } from './theme';

const config = createStitches({
  theme: {
    ...baseTheme,
  },
  media: {
    xs: '(min-width: 384px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1020px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    bg: (value: Stitches.PropertyValue<'background'>) => ({
      backgroundColor: value,
    }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (paddingTop: Stitches.PropertyValue<'padding'>) => ({
      paddingTop,
    }),
    pb: (paddingBottom: Stitches.PropertyValue<'padding'>) => ({
      paddingBottom,
    }),
    pl: (paddingLeft: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft,
    }),
    pr: (paddingRight: Stitches.PropertyValue<'padding'>) => ({
      paddingRight,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    ml: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
    }),
    mr: (value: Stitches.PropertyValue<'margin'>) => ({
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
    }),
    mb: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;
export type CSSProp = { css?: CSS };

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  getCssText,
  createTheme,
} = config;

export const globalStyles = globalCss({
  html: {
    height: '100%',
  },
  '#root': {
    height: '100%',
  },
  body: {
    margin: 0,
    height: '100%',
    fontFamily: '$main',
    fontWeight: '$normal',
    fontSize: '$regular',
    lineHeight: '$none',
    color: '$text-1',
    bg: '$primary-5',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'transparent',

    '*': {
      boxSizing: 'border-box',
    },
  },
});
