import { CSSProperties } from 'react';

export type Alias = {
  name: string;
  apply(value: string | number): Partial<CSSProperties>;
};

export const dealias = (
  styles: any,
  aliases: Alias[] = [],
  result: any = {}
) => {
  Object.keys(styles).forEach((key) => {
    const alias = aliases.find((alias) => alias.name === key);
    const value = styles[key];
    if (alias) {
      result = { ...result, ...alias.apply(value) };
    } else {
      result[key] = value;
    }
  });
  return result;
};
