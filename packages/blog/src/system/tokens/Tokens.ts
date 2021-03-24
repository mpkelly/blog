import { CSSProperties } from 'react';
import { BreakValues } from 'system/responsive/BreakValues';
import { PropertyValue } from 'elements/Element';

export type Tokens = {
  [key in keyof CSSProperties]: {
    [key: string]: PropertyValue | Partial<BreakValues<PropertyValue>>;
  };
};
