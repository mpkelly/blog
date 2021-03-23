import React from 'react';
import { Markdown } from 'elements/markdown/Markdown';

type Props = {
  body: string;
};

export const Body = (props: Props) => {
  const { body } = props;
  return <Markdown source={body} />;
};
