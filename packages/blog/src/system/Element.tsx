import React, { CSSProperties, LegacyRef } from 'react';
import merge from 'deepmerge';
import { styled } from 'goober';
import { getStyles } from './StyleResolver';
import { useElements } from './elements/ElementProvider';
import { I18NComponentProps, withI18N } from '@mpkelly/react-i18n';

export type ElementKey = string & keyof CSSProperties;

export interface Element extends CSSProperties {
  //TODO fix type issue - can't assign Element so using any
  [key: string]: any;
  modifiers?: {
    [key: string]: any;
  };
}

export type ReactElementProps = {
  xs?: Element;
  modifiers?: string;
  as?: string | React.FC;
  ref?: LegacyRef<any>;
} & I18NComponentProps;

export interface ElementProps<T>
  extends ReactElementProps,
    React.HTMLAttributes<T> {}

export const createElement = <T, P = {}>(
  type: string,
  elementType = type,
  defaultStyles: Element = {}
) => {
  return withI18N(styled<ElementProps<T> & P>(type as any, React.forwardRef)`
    ${(props) => getStyles(getModifierStyle(props, elementType, defaultStyles))}
  `);
};

export const createJsxElement = <T, P>(
  type: React.ForwardRefExoticComponent<P> | React.FC,
  elementType: string,
  defaultStyles: Element = {}
) => {
  //TODO use correct type
  return withI18N(styled<ElementProps<T> & P>(type, React.forwardRef)`
    ${(props) => getStyles(getModifierStyle(props, elementType, defaultStyles))}
  `);
};

export const getModifierStyle = (
  props: ReactElementProps,
  elementType: string,
  defaultStyles: Element = {}
) => {
  const { xs = {}, modifiers = '' } = props;
  const elementStyle = useElements()[elementType] || { modifiers: {} };

  //Get only the base styles
  let styles = merge(
    { ...elementStyle, modifiers: undefined },
    { ...xs, modifiers: undefined }
  );

  const modifierStyles = {
    ...(elementStyle.modifiers || {}),
    ...(xs.modifiers || {}),
  };

  modifiers.split(' ').forEach((modifier) => {
    const modifierStyle = modifierStyles[modifier];
    if (modifierStyle) {
      styles = merge(styles, modifierStyle);
    }
  });
  return { xs: merge(defaultStyles, styles) };
};
