import React, { ReactNode } from 'react';
import { createContext } from 'react-merge-context';
import { IconBundle } from './IconBundle';

export const [Provider, useIcons] = createContext<IconBundle | undefined>();

type Props = {
  icons?: IconBundle;
  children: ReactNode;
};

export const IconProvider = (props: Props) => {
  const { icons = { icons: {} }, children } = props;
  return (
    <Provider value={icons}>
      {icons.linkUrl && <link rel={'stylesheet'} href={icons.linkUrl} />}
      {children}
    </Provider>
  );
};
