import React, { ReactNode } from 'react';
import { Column, H1, Row, Text, styled } from '@mpkelly/ui';

type Props = {
  title: string;
  description: ReactNode;
  preview: ReactNode;
};

const Root = styled(Row, { gap: '$xl' });
const Preview = styled(Column, { flex: 1 });
const Details = styled(Column, { flex: 1, gap: '$lg' });
const Title = styled(H1);
const Description = styled(Text, { color: 'text-2' });

export const SketchItem = (props: Props) => {
  const { title, description, preview } = props;
  return (
    <Root>
      <Preview>{preview}</Preview>
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
    </Root>
  );
};
