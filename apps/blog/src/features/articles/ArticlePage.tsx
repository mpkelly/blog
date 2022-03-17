import React, { useEffect, useState } from 'react';
import { Column, Paragraph, styled } from '@mpkelly/ui';
import { useParams } from 'react-router-dom';
import { Markdown } from './Markdown';

type Props = {};

const Root = styled('article', Column, {
  width: '$content',
  p: '$xl',
  gap: '$2xl',
  minHeight: '100vh',
});
const Article = styled(Markdown, Paragraph);

export const ArticlePage = (props: Props) => {
  const { name } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`raw-loader!../../assets/articles/${name}.md`).then((module) => {
      setContent(module.default);
    });
  }, [name]);

  return (
    <Root>
      <Article>{content || ''}</Article>
    </Root>
  );
};
