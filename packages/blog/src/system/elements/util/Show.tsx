import React, { ReactNode } from 'react';

type Props = {
  when: any;
  children: ReactNode;
};

export const Show = (props: Props) => {
  const { when, children } = props;
  if (!Boolean(when)) {
    return null;
  }
  return <>{children}</>;
};
