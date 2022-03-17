import React from 'react';
import { Column, H2, styled, Text } from '@mpkelly/ui';
import { Markdown } from './Markdown';
import { NavLink } from '../navigation/Navigation';

type Props = {
  title: string;
  text: string;
  path: string;
};

const Root = styled(Column, { alignItems: 'flex-start' });

const Preview = styled(Markdown);

export const ArticlePreview = (props: Props) => {
  const { title, text, path } = props;
  return (
    <Root>
      <H2>{title}</H2>
      <Preview>{text}</Preview>
      <NavLink to={path}>
        <Text>Read full article ➞</Text>
      </NavLink>
    </Root>
  );
};
