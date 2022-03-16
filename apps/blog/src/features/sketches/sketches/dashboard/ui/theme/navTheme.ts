import { createTheme } from '@mpkelly/ui';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { radii } from './radii';
import { sizes } from './sizes';
import { space } from './space';
import { navColors } from './navColors';

export const dashboardAppNavTheme = createTheme({
  colors: navColors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  sizes,
});
