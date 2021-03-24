// My css.d.ts file
import * as React from 'react';
import { PropertyValue } from 'elements/Element';
import { BreakValues } from 'system/responsive/BreakValues';

declare module 'react' {
  interface CSSProperties {
    [index: string]: PropertyValue | BreakValues<PropertyValue>;
  }
}
