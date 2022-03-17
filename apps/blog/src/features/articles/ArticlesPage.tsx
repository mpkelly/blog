import React from 'react';
import { Row, Column, Text, styled } from '@mpkelly/ui';
import { ArticlePreview } from './ArticlePreview';
import { PageTitle } from '../../components/PageTitle';
import { NavLink } from '../../app/Navigation';

type Props = {};

const Root = styled('section', Column, {
  width: '$content',
  p: '$xl',
  gap: '$2xl',
  minHeight: '100vh',
});

export const ArticlesPage = (props: Props) => {
  return (
    <Root>
      <PageTitle title={'Articles'} />
      <NavLink to={'colour'}>
        <ArticlePreview
          title={'How to organise colour in website and apps'}
          text={`I always had a hard time naming colour variables in my themes on the apps I've made in the past. It starts off simple enough with variable names like \`primary-text-color\`, \`muted-text-color\` etc but quickly gets tricky once you have different background colours like, say, for an alert box component or on your navigation panel. If your content is on a light background but your navigation is using a dark background, then what do you call the text colour used on the navigation panel?`}
        />
      </NavLink>
    </Root>
  );
};
