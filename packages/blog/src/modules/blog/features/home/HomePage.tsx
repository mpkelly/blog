import * as React from 'react';
import { Text } from 'elements/text/Text';
import { Main } from 'elements/flex/Main';
import { Paragraph } from 'elements/text/Paragraph';
import { Link } from '../navigation/Link';
import { H3 } from 'elements/text/Headings';

export const HomePage = () => {
  return (
    <Main xs={Style}>
      <Text modifiers={'gigantic bold'}>Hi, I'm Mike.</Text>
      <Paragraph modifiers={'muted lg'}>
        A software developer with 14 years experience. I previously worked with
        enterprise Java but now I specialise in frontend development, which is
        much more fun! React and TypeScript are my favourite tools.
      </Paragraph>
      <Paragraph modifiers={'muted lg'}>
        Are you looking for a{' '}
        <Text modifiers={'bold lg'}>senior frontend developer</Text> or{' '}
        <Text modifiers={'bold lg'}>team lead</Text>? Do you want somebody to
        implement a component system for you? I actually wrote a{' '}
        <Link to={'/articles'}>three-part article</Link> recently about doing
        just that.
      </Paragraph>
      <H3>Latest Articles</H3>
    </Main>
  );
};

const Style = {
  width: 'content.width',
  maxWidth: 'content.width',
  paddingTop: 'xxl',
};
