import React, { CSSProperties, LegacyRef } from 'react';
import merge from 'deepmerge';
import { styled } from 'goober';
import { getStyles } from '../StyleResolver';
import { useElements } from './ElementProvider';
import { I18NComponentProps, withI18N } from '@mpkelly/react-i18n';
import { Alias } from 'system/aliases/PropertyAlias';
import { BreakValues } from 'system/responsive/BreakValues';

export type ElementKey = string & keyof CSSProperties;

export type PropertyValue = string | number | undefined;

//TODO improve type checking
type Modifiers = {
  modifiers?: {
    [key: string]: any;
  };
};

export type Element = {
  //TODO fix type issue - can't assign Element so using any
  [key in keyof CSSProperties]:
    | PropertyValue
    | Partial<BreakValues<PropertyValue>>;
} &
  Modifiers;

export type ReactElementProps<A = {}> = {
  xs?: Element & A;
  modifiers?: string;
  as?: string | React.FC;
  ref?: LegacyRef<any>;
} & I18NComponentProps;

export interface ElementProps<T, A = {}>
  extends ReactElementProps<A>,
    React.HTMLAttributes<T> {}

export type ElementConfig = {
  defaultStyle?: Element;
  aliases?: Alias[];
};

export const createElement = <T, P = {}, A = {}>(
  type: string,
  elementType = type,
  config: ElementConfig = {}
) => {
  return withI18N(styled<ElementProps<T, A> & P>(type as any, React.forwardRef)`
    ${(props) =>
      getStyles(
        getModifierStyle(props, elementType, config.defaultStyle),
        config
      )}
  `);
};

export const createJsxElement = <T, P, A = {}>(
  type: React.ForwardRefExoticComponent<P> | React.FC,
  elementType: string,
  config: ElementConfig = {}
) => {
  //TODO use correct type
  return withI18N(styled<ElementProps<T, A> & P>(type, React.forwardRef)`
    ${(props) =>
      getStyles(
        getModifierStyle(props, elementType, config.defaultStyle),
        config
      )}
  `);
};

export const getModifierStyle = (
  props: ReactElementProps,
  elementType: string,
  defaultStyle: Element = {}
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

  return { xs: merge(defaultStyle, styles) };
};
