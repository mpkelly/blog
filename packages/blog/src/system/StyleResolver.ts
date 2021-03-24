import { Element, ElementConfig } from 'elements/Element';
import { useSystem } from 'system/./SystemProvider';
import { BreakValues, isBreakValues } from 'system/responsive/BreakValues';
import { CSSProperties } from 'react';
import { Breakpoints } from 'system/responsive/Breakpoints';
import { DefaultBreakpoints } from 'system/responsive/DefaultBreakpoints';
import { IgnoredProperties } from 'system/Bootstrap';

type SystemElementProps = {
  xs?: Element;
};

export const getStyles = (
  props: SystemElementProps,
  config: ElementConfig = { aliases: [] }
) => {
  const { xs: styles = {} } = props;
  const { tokens = {}, breakpoints = DefaultBreakpoints } = useSystem();

  const output: BreakValues<Map<string, string[]>> = {
    xs: new Map<string, string[]>(),
    sm: new Map<string, string[]>(),
    md: new Map<string, string[]>(),
    lg: new Map<string, string[]>(),
    xl: new Map<string, string[]>(),
    xxl: new Map<string, string[]>(),
  };

  const getTokenValue = (property: string, value: any) => {
    const tokenSet = tokens[property as keyof CSSProperties] || {};

    if (tokenSet[value as string] !== undefined) {
      // The value maps to a token so assign the token value
      return tokenSet[value as string];
    }
    return value;
  };

  const getValue = (property: string, value: any) => {
    if (PixelPropertyNames.includes(property) && typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  };

  const setValue = (
    bucket: Map<string, string[]>,
    selector: string,
    property: string,
    value: any
  ) => {
    const alias = config?.aliases?.find((alias) => alias.name === property);
    if (alias) {
      const properties: any = alias.apply(value);
      Object.keys(properties).forEach((key) => {
        const css = `${toCssName(key)}: ${getValue(key, properties[key])};`;
        bucket.get(selector)?.push(css);
      });
    } else {
      const css = `${toCssName(property)}: ${getValue(property, value)};`;
      bucket.get(selector)?.push(css);
    }
  };

  const process = (styles: any, selector = '') => {
    Object.keys(styles)
      .filter(IgnoredPropertiesFilter)
      .forEach((key) => {
        const value = getTokenValue(key, styles[key]);

        if (new Object(value) === value) {
          // it's an object
          if (isBreakValues(value)) {
            // put an entry in each breakpoint bucket for the specified keys
            Object.keys(value).forEach((breakpoint) => {
              if (!(output as any)[breakpoint].get(selector)) {
                (output as any)[breakpoint].set(selector, []);
              }
              setValue(
                (output as any)[breakpoint],
                selector,
                key,
                value[breakpoint]
              );
            });
          } else {
            // it's am object with a key that is a CSS selector, so break it down
            process(value, key);
          }
        } else {
          // it's a single property so put in xs bucket
          if (!output.xs.get(selector)) {
            output.xs.set(selector, []);
          }
          setValue(output.xs, selector, key, value);
        }
      });
  };

  process(styles);

  return convertToCss(output, breakpoints);
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

const convertToCss = (
  output: BreakValues<Map<string, string[]>>,
  breakpoints: Breakpoints
) => {
  return Object.keys(output)
    .filter((key) => {
      //remove empty buckets to avoid needless @media blocks
      return (output as any)[key].size;
    })
    .map((breakpoint) => {
      const value: Map<string, string[]> = (output as any)[breakpoint];
      const breakValue = (breakpoints as any)[breakpoint];
      return Array.from(value.entries())
        .map((entry) => {
          const [selector, properties] = entry;
          const content = properties.join('');
          const block = selector ? `${selector} { ${content} }` : content;
          if (breakValue === 0) {
            return block;
          } else {
            return `@media (min-width: ${breakValue}px) { ${block} }`;
          }
        })
        .join('');
    })
    .join('\n');
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

const IgnoredPropertiesFilter = (property: string) =>
  !IgnoredProperties.includes(property);
