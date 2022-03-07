import React from 'react';
import { Column, H3, Paragraph, Row, Text, styled } from '@mpkelly/ui';
import { Switch, Thumb } from './ui/Switch';
import { InfoBox } from './ui/InfoBox';
import { Label, Panel, Separator } from './ui/elements';
import { DocumentIcon } from './ui/Icons';

const Root = styled(Panel, {
  flex: 2,
});

const Headline = styled(Row, {
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$lg',
});
const Name = styled(H3);

const BestPrice = styled(Label, { mr: 'auto' });

const Price = styled(H3, {
  color: '$accent-1',
});
const Description = styled(Paragraph, { color: '$text-2', fontSize: '$sm' });

const Product = styled(Row, { gap: '$xl', alignItems: 'center' });
const ProductDetails = styled(Column, { gap: '$lg' });

const Terms = styled(Row, {
  gap: '$md',
  fontSize: '$sm',
  alignItems: 'center',
  color: '$success-1',
  [`${Text}`]: {
    fontWeight: '$bold',
  },
  [`${DocumentIcon}`]: {
    size: 16,
  },
});

export const Products = () => {
  return (
    <Root border>
      <Product>
        <ProductDetails>
          <Headline>
            <Name>Digital Nomad Worldwide insurance package</Name>
            <BestPrice>Best Price</BestPrice>
            <Price>$120 / month</Price>
          </Headline>
          <Description>
            4 weeks is equal to 28 days. Your insurance will automatically
            charge a recurring payment every 28 days until you cancel or until
            364 days have passed, when we will request you to renew. $250
            deductible, $250,000 max limit.
          </Description>
          <Terms>
            <DocumentIcon />
            <Text>View terms & conditions</Text>
          </Terms>
        </ProductDetails>

        <Switch checked>
          <Thumb />
        </Switch>
      </Product>
      <InfoBox>
        Pay annually to receive the biggest available discount. You will be
        contacted again <strong>1 month</strong> before the next payment is due.
      </InfoBox>

      <Separator />
      <Product>
        <ProductDetails>
          <Headline>
            <Name>Annual Mobile Phone insurance package</Name>
            <Price>$199 / year</Price>
          </Headline>
          <Description>
            Your insurance will automatically charge a recurring payment every
            28 days until you cancel or until 364 days have passed, when we will
            request you to renew. $250 deductible, $250,000 max limit.
          </Description>
          <Terms>
            <DocumentIcon />
            <Text>View terms & conditions</Text>
          </Terms>
        </ProductDetails>
        <Switch checked>
          <Thumb />
        </Switch>
      </Product>

      <InfoBox warning>
        Maximum of <strong>1 claim</strong> per year. See terms & conditions for
        full details.
      </InfoBox>
    </Root>
  );
};
