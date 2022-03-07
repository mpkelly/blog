import React, { ReactNode } from 'react';
import { Row, Column, Text, styled, Centered } from '@mpkelly/ui';
import { Controls } from './Controls';

type Props = {
  url: string;
  children: ReactNode;
};

const Root = styled(Column, {
  borderRadius: '$md',
  height: 760,
  width: 1300,
  overflow: 'hidden',
});

const Toolbar = styled(Row, {
  height: 56,
  bg: '$neutral-1',
  position: 'relative',
  p: '$md $lg',
  alignItems: 'center',
  borderBottom: '1px solid $neutral-4',
});
const Page = styled(Column, {
  flex: 1,
  overflow: 'auto',
  bg: '$neutral-1',
});

const SearchBar = styled(Row, {
  bg: '$neutral-2',
  borderRadius: '$round',
  alignItem: 'center',
  justifyContent: 'center',
  p: '$md $lg',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '$text-1',
  minWidth: '50%',
});

export const BrowserWindow = (props: Props) => {
  const { children, url } = props;
  return (
    <Root>
      <Toolbar>
        <Controls />
        <SearchBar>
          <Text>{url}</Text>
        </SearchBar>
      </Toolbar>
      <Page>{children}</Page>
    </Root>
  );
};
