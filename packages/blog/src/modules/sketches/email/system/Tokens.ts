import { Tokens } from 'system/tokens/Tokens';

const sizes = {
  'toolbar.width': 60,
  'nav.width': 220,
  'navitem.height': 44,
  'emaillist.width': 300,
  'emaillistpreview.height': 30,
  'thumbnail.primary': 32,
  'control.height': 40,
  'badge.width': 24,
};

const colors = {
  'accent.1': '#ffa501',
  'accent.2': '#e87938',

  'background.1': '#1c1b1b',
  'background.2': '#272829',
  'background.3': '#383838',
  'background.4': '#373737',
  'background.5': '#2b2b2b',

  'text.1': '#e8eaed',
  'text.2': '#9aa0a6',

  'border.1': 'rgba(255, 255, 255, .1)',

  danger: '#ff2f2f',
  warning: '#ffd53f',
  success: '#5FBF53',

  'label.1': '#dc756a',
  'label.2': '#f7b845',
  'label.3': '#5FBF53',
  'label.4': '#378CFC',
  'label.5': '#ffd53f',
  'label.6': '#61ff61',
  'label.7': '#fd85d2',
};

const space = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
  xxl: 64,
};

export const SystemTokens: Tokens = {
  fontFamily: {
    primary: "'Mukta', sans-serif",
  },
  fontSize: {
    xs: 10,
    sm: 12,
    primary: 14,
    lg: 16,
    xl: 22,
    xxl: 60,
  },
  borderRadius: {
    sm: 3,
    md: 6,
    lg: 8,
    round: 99999999,
  },
  lineHeight: {
    sm: 1.2,
    primary: 1.3,
  },
  width: sizes,
  height: sizes,
  minWidth: sizes,
  minHeight: sizes,
  maxWidth: sizes,
  maxHeight: sizes,
  color: colors,
  backgroundColor: colors,
  borderColor: colors,
  borderTopColor: colors,
  borderBottomColor: colors,
  borderRightColor: colors,
  borderLeftColor: colors,
  fill: colors,
  margin: space,
  marginTop: space,
  marginBottom: space,
  marginLeft: space,
  marginRight: space,
  padding: space,
  paddingTop: space,
  paddingBottom: space,
  paddingLeft: space,
  paddingRight: space,
};
