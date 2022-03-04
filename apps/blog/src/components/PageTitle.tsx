import React from 'react';
import { Row, Text, styled, keyframes } from '@mpkelly/ui';

type Props = {
  title: string;
};

const Spin = keyframes({
  '0%': { transform: 'rotateY(0deg)' },
  '100%': { transform: 'rotateY(360deg)' },
});

const Title = styled(Row, {
  alignItems: 'baseline',
});

const Char = styled(Text, {
  fontSize: '$3xl',
  fontWeight: '$bold',
  animation: `${Spin} 1s normal ease-in-out`,
});

export const PageTitle = (props: Props) => {
  const { title } = props;
  return (
    <Title>
      {title.split('').map((char, index) => (
        <Char key={char} css={{ animationDelay: `${index * 100}ms` }}>
          {char}
        </Char>
      ))}
    </Title>
  );
};
