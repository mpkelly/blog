import * as React from 'react';
import { H3 } from 'elements/text/Headings';
import { ElementProps } from 'elements/Element';
import { Paragraph } from 'elements/text/Paragraph';
import { Aside } from 'elements/flex/Aside';

export const Summary = (props: ElementProps<any>) => {
  return (
    <Aside {...props}>
      <H3>Summary</H3>
      <Paragraph modifiers={'muted'}>
        Senior React & TypeScript developer that previously worked with
        Enterprise Java. I have a total of 14 years experienced (4+ TS & React).
        I build well-organised webapps that follow <code>a11y</code>{' '}
        specifications and use semantic HTML. <br />
        <br />I am comfortable creating design systems, working in monorepos and
        testing using most modern libraries.
      </Paragraph>
    </Aside>
  );
};
