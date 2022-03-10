import React, { ReactNode } from 'react';
import {
  Centered,
  CheckIcon,
  Row,
  Text,
  styled,
  Column,
  CrossIcon,
} from '@mpkelly/ui';

type Props = {
  children: ReactNode;
  description?: ReactNode;
};

const Root = styled(Row, {
  alignItems: 'flex-start',
  gap: '$xl',
  width: 480,
});

const Details = styled(Column, {
  gap: '$sm',
});

const IconBox = styled(Centered, {
  borderRadius: '$md',
  size: 50,
  bg: '$text-1',
  flexShrink: 0,
  svg: {
    color: '$primary-1',
  },
});

const Checkmark = styled(CheckIcon, {
  defaultVariants: {
    size: 'lg',
  },
});

const ServiceName = styled(Text, { fontSize: '$xl', color: '$text-1' });
const Description = styled(Text, { color: '$text-2' });

const Service = (props: Props & { name: ReactNode }) => {
  const { children, description, name } = props;
  return (
    <Root>
      {children}
      <Details>
        <ServiceName>{name}</ServiceName>
        <Description>{description}</Description>
      </Details>
    </Root>
  );
};

export const ServiceOffered = (props: Props) => {
  const { children: name, description } = props;
  return (
    <Service name={name} description={description}>
      <IconBox>
        <Checkmark />
      </IconBox>
    </Service>
  );
};

const NotOfferedBox = styled(IconBox, {
  bg: '$danger-1',
});

export const ServiceNotOffered = (props: Props) => {
  const { children: name, description } = props;
  return (
    <Service name={name} description={description}>
      <NotOfferedBox>
        <CrossIcon />
      </NotOfferedBox>
    </Service>
  );
};
