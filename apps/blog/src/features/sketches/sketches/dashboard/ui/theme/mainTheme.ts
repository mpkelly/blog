import { createTheme } from '@mpkelly/ui';
import { mainColors } from './mainColors';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { radii } from './radii';
import { sizes } from './sizes';
import { space } from './space';

export const dashboardAppMainTheme = createTheme({
  colors: mainColors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  sizes,
});
