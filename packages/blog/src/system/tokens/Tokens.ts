import {CSSProperties} from "react";

export type Tokens = {
  [key in keyof CSSProperties]: {
    [key: string]: PropertyValue | BreakValues;
  };
};

type PropertyValue = string | number;

export type BreakValues = {
  xs: PropertyValue;
  sm: PropertyValue;
  md: PropertyValue;
  lg: PropertyValue;
  xl: PropertyValue;
  xxl: PropertyValue;
}

const LightColors = {
  primary:"mediumseagreen",
  primaryText:"rgba(0,0,0,.8)",
  secondaryText:"rgba(0,0,0,.54)",
}

const Space = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
}

const fontSize = {
  primary:16,
  large:20
}

const fontFamilies = {
  primary:"sans-serif",
  headings:"sans-serif",
}

const lineHeight = {
  primary: 1.4
}

const sizes = {
  content: 1000
}

export const LightThemeTokens:Tokens = {
  color:LightColors,
  backgroundColor:LightColors,
  margin: Space,
  marginLeft: Space,
  marginRight: Space,
  marginTop: Space,
  marginBottom: Space,
  padding: Space,
  paddingLeft: Space,
  paddingRight: Space,
  paddingTop: Space,
  paddingBottom: Space,
  fontSize:fontSize,
  width:sizes,
  height:sizes,
  maxWidth:sizes,
  maxHeight: sizes,
  minWidth:sizes,
  minHeight: sizes,
  fontFamily: fontFamilies,
  lineHeight: lineHeight
}