import * as React from 'react';
import { ReactNode } from 'react';
import { Paragraph } from 'elements/text/Paragraph';

export type Sketch = {
  title: string;
  description: ReactNode;
  path: string;
  tags: string[];
  previewUrl: string;
  dribbleUrl: string;
  githubUrl: string;
};

export const Sketches: Sketch[] = [
  {
    title: 'Email Client',
    description: (
      <>
        <Paragraph modifiers={'muted'}>
          An email client loosely based on gmail. It's not fully functional yet
          but uses does have global state management and uses proper
          accessibility patterns and semantic HTML.
          <br />
          <br />
          Some features are tested with Test Cafe and some components and hooks
          are tested with Jest.
        </Paragraph>
      </>
    ),
    path: '/sketches/email',
    tags: ['Jotai', 'Suspense', 'Testing Library', 'Test Cafe'],
    previewUrl: './images/sketches/email/Email Client.png',
    dribbleUrl: 'https://dribbble.com/shots/15323825-Email-Client',
    githubUrl:
      'https://github.com/mpkelly/myblog/tree/master/myblog/packages/blog/src/packages/sketches/email',
  },
  {
    title: 'Email Client',
    description: (
      <>
        <Paragraph modifiers={'muted'}>
          An email client loosely based on gmail. It's not very interactive for
          now but state management and navigation will follow.
        </Paragraph>
      </>
    ),
    path: '/sketches/email',
    tags: ['Valtio', 'Jest', 'Test Cafe'],
    previewUrl: './images/sketches/email/Email Client.png',
    dribbleUrl: 'https://dribbble.com/shots/15323825-Email-Client',
    githubUrl:
      'https://github.com/mpkelly/myblog/tree/master/myblog/packages/blog/src/packages/sketches/email',
  },
];
