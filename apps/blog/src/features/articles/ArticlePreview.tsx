import React from 'react';
import ReactMarkdown from 'react-markdown';
import { H2, Row, Column, Text, styled } from '@mpkelly/ui';
import { Markdown } from './Markdown';

type Props = {
  title: string;
  text: string;
};

const Root = styled(Column, {});

const Preview = styled(Markdown);

export const ArticlePreview = (props: Props) => {
  const { title, text } = props;
  return (
    <Root>
      <H2>{title}</H2>
      <Preview>{text}</Preview>
    </Root>
  );
};
