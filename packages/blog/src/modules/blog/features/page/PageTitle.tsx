import * as React from 'react';
import { Text } from 'elements/text/Text';
import { Row } from 'elements/flex/Row';
import { Element } from 'system/Element';
import { styled } from 'goober';

type Props = {
  title: string;
};

const TitleStyle: Element = {
  alignItems: 'baseline',
};

export const PageTitle = (props: Props) => {
  const { title } = props;
  return (
    <Title xs={TitleStyle}>
      {title.split('').map((char, index) => (
        <Text
          key={char}
          modifiers={'gigantic bold'}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {char}
        </Text>
      ))}
    </Title>
  );
};

const Title = styled(Row)`
  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
  span {
    animation: spin 1s normal ease-in-out;
  }
`;
