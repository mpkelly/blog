import * as React from 'react';
import { Main } from 'elements/flex/Main';
import { Paragraph } from 'elements/text/Paragraph';
import { Separator } from 'elements/separator/Separator';
import { PageTitle } from '../page/PageTitle';
import { Sketch } from './Sketch';
import { Sketches } from './Sketches';

export const SketchesPage = () => {
  return (
    <Main xs={Style}>
      <PageTitle title={'Sketches.'} />
      <Paragraph modifiers={'muted lg large'}>
        Various interface sketches made with React. Some of them have more
        production like code than others depending on the goal which can be to
        gain experience with new libraries or to just produce a quick 2d mockup
        in the way a designer would using Sketch or Adobe XD.
      </Paragraph>
      {Sketches.map((sketch, index) => {
        const isEven = index % 2 === 0;
        const isNotLast = index + 1 < Sketches.length;
        return (
          <>
            <Sketch {...sketch} modifiers={isEven ? undefined : 'reverse'} />
            {isNotLast && <Separator modifiers={'horizontal'} />}
          </>
        );
      })}
    </Main>
  );
};

const Style = {
  width: 'content.width',
  maxWidth: 'content.width',
  paddingTop: 'xxl',
};
