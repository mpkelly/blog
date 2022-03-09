import React, { ReactNode } from 'react';
import {
  H3,
  Row,
  Column,
  Text,
  styled,
  Paragraph,
  DateIcon,
  CompanyIcon,
  LocationIcon,
} from '@mpkelly/ui';

type Props = {
  title: ReactNode;
  startDate: string;
  endDate: string;
  description: ReactNode;
  company: string;
  location: string;
};

const Root = styled(Column, { gap: '$lg' });

const Details = styled(Row, {
  gap: '$md',
  alignItems: 'center',
  whiteSpace: 'nowrap',
});

export const Employment = (props: Props) => {
  const { title, startDate, endDate, description, company, location } = props;
  return (
    <Root>
      <H3>{title}</H3>
      <Details>
        <DateIcon />
        <Text data-value>
          {startDate} - {endDate}
        </Text>
        <CompanyIcon />
        <Text data-value>{company}</Text>
        <LocationIcon />
        <Text data-value>{location}</Text>
      </Details>
      <Paragraph>{description}</Paragraph>
    </Root>
  );
};
