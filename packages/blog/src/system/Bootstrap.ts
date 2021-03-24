import 'react-app-polyfill/ie11';
import { createElement } from 'react';
import { setup } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';

//TODO move me + use TS Transformer
export const IgnoredProperties = ['xs', 'modifiers'];

setup(
  createElement,
  undefined,
  undefined,
  shouldForwardProp((prop) => {
    return !IgnoredProperties.includes(prop);
  })
);
