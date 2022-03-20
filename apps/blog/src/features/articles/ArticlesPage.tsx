import React from 'react';
import { Column, styled } from '@mpkelly/ui';
import { ArticlePreview } from './ArticlePreview';
import { PageTitle } from '../../components/PageTitle';

const Root = styled('section', Column, {
  width: '$content',
  p: '$xl',
  gap: '$2xl',
  minHeight: '100vh',
});

export const ArticlesPage = () => {
  return (
    <Root>
      <PageTitle title={'Articles'} />
      <ArticlePreview
        title={'How to organise colour in websites and apps'}
        text={`I've always had a hard time naming colour variables in my themes on the apps I've made in the past. It starts off simple enough with variable names like \`primary-text-color\`, \`muted-text-color\` etc. but quickly gets tricky once you have different background colours for, say, an alert box component or on your navigation panel. If your content is on a light background but your navigation is using a dark background, then what do you call the text colour used on the navigation panel?`}
        path={'colour'}
      />
    </Root>
  );
};
