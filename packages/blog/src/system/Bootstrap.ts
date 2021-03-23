import 'react-app-polyfill/ie11';
import { createElement } from 'react';
import { setup } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';

//TODO move me + use TS Transformer
const Props = ['xs', 'modifiers'];

setup(
  createElement,
  undefined,
  undefined,
  shouldForwardProp((prop) => {
    return !Props.includes(prop);
  })
);
