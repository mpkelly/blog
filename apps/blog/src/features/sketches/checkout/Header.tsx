import React from 'react';
import { Row, styled, Text } from '@mpkelly/ui';
import { Logo } from './ui/Logo';
import { Separator } from './ui/elements';

const Root = styled('nav', Row, {
  justifyContent: 'space-between',
  bg: '$neutral-2',
  py: '$md',
  px: '$lg',
  borderRadius: '$md',
  alignItems: 'center',
});

const Brand = styled(Row, {
  gap: '$md',
  alignItems: 'center',
});

const BrandName = styled(Text, {
  fontWeight: '$bold',
});

const BackLink = styled('a', Text, {
  color: '$primary-5',
  fontWeight: '$bold',
});

const Breadcrumb = styled(Row, {
  gap: '$md',
  alignItems: 'center',
  mr: 'auto',
});

const BreadcrumbItem = styled(Text, {
  color: '$text-2',
  fontSize: '$sm',
});

export const Header = () => {
  return (
    <Root>
      <Brand>
        <Logo />
        <BrandName>Nomad Insurer</BrandName>
      </Brand>
      <Separator vertical />
      <Breadcrumb>
        <BreadcrumbItem>Insurance policies</BreadcrumbItem>
        <BreadcrumbItem>/</BreadcrumbItem>
        <BreadcrumbItem>Checkout</BreadcrumbItem>
      </Breadcrumb>
      <BackLink href={'#'}>Return to policies</BackLink>
    </Root>
  );
};
