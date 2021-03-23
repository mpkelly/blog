import { Element, ElementKey } from './Element';
import { CSSProperties } from 'react';
import { useTokens } from './tokens/TokenProvider';

type SystemElementProps = {
  xs?: Element;
};

export const getStyles = (props: SystemElementProps) => {
  const { xs: styles = {} } = props;
  const tokens = useTokens();

  const assignTokens = (styles: Element | CSSProperties) => {
    Object.keys(styles).forEach((property) => {
      const value = styles[property as ElementKey];
      if (new Object(value) === value) {
        // it's an object, so break it down
        assignTokens(value as CSSProperties);
      } else {
        // it's a property so do a token lookup
        const tokenSet = tokens[property as keyof CSSProperties] || {};
        if (tokenSet[value as string] !== undefined) {
          // The value maps to a token so assign the token value
          (styles as any)[property as ElementKey] = tokenSet[value as string];
        }
      }
    });
    return styles;
  };

  const toCssName = (camelCaseName: string) => {
    return camelCaseName
      .split('')
      .map((letter, index) => {
        return letter.toUpperCase() === letter
          ? `${index !== 0 ? '-' : ''}${letter.toLowerCase()}`
          : letter;
      })
      .join('');
  };

  const convertToCss = (styles: any) => {
    const css: string[] = [];
    Object.keys(styles).forEach((property) => {
      let value = styles[property];
      if (new Object(value) === value) {
        // it's a nested block and the property is a CSS selector
        css.push(`${property} { ${convertToCss(value)} }`);
      } else {
        // it's a single CSS property
        if (
          PixelPropertyNames.includes(property) &&
          typeof value === 'number'
        ) {
          value = `${value}px`;
        }
        css.push(`${toCssName(property)}:${value};`);
      }
    });
    return css.join('\n');
  };

  return convertToCss(assignTokens(styles));
};

const PixelPropertyNames = [
  'margin',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'fontSize',
  'borderWidth',
  'top',
  'left',
  'right',
  'bottom',
  'letterSpacing',
];
