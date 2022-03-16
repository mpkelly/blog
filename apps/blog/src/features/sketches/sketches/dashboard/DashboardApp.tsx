import React from 'react';
import { Centered, Column, Row, styled, Text } from '@mpkelly/ui';
import { dashboardAppMainTheme } from './ui/theme/mainTheme';
import { Controls } from '../../frames/Controls';
import {
  ChartIcon,
  DiffIcon,
  ListIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from './ui/Icons';
import { dashboardAppNavTheme } from './ui/theme/navTheme';
import { PieChart } from './ui/PieChart';

type Props = {};

const Root = styled(Column, {
  minHeight: '100vh',
  //global styles
  fontFamily: '$main',
  fontWeight: '$normal',
  fontSize: '$regular',
  lineHeight: '$none',
  color: '$text-1',
});

const Frame = styled(Row, {
  bg: '$bg-1',
  height: 760,
  width: 1300,
  borderRadius: '$md',
  overflow: 'hidden',
});

function NavItems() {
  return (
    <Column
      css={{
        justifyContent: 'center',
        flex: 1,
        gap: '$lg',
        '> div': {
          borderRadius: '$md',
          p: '$md',
        },
      }}
    >
      <Row css={{ gap: '$lg', alignItems: 'center' }}>
        <UsersIcon />
        <Text>People</Text>
      </Row>
      <Row
        css={{
          gap: '$lg',
          alignItems: 'center',
          bg: '$bg-2',
          color: '$accent-1',
        }}
      >
        <ChartIcon />
        <Text>Performance</Text>
      </Row>
      <Row css={{ gap: '$lg', alignItems: 'center' }}>
        <ListIcon />
        <Text>Listings</Text>
      </Row>
      <Row css={{ gap: '$lg', alignItems: 'center' }}>
        <SettingsIcon />
        <Text>Settings</Text>
      </Row>
    </Column>
  );
}

function Navigation() {
  return (
    <Column
      css={{ width: 280, p: '$lg', bg: '$bg-1', color: '$text-1' }}
      className={dashboardAppNavTheme}
    >
      <Controls />
      <NavItems />
    </Column>
  );
}

const Bar = styled(Column, {
  flex: 1,
  height: '100%',
  bg: '$primary-1',
  borderRadius: '$md',
});

const Chart = styled(Row, {
  flex: 1,
  gap: '$xl',
  alignItems: 'flex-end',
  backgroundSize: '40px 40px',
  backgroundImage: `linear-gradient(to bottom, $bg-2 1px, transparent 1px)`,
});

function Panel() {
  return (
    <Column
      css={{
        height: 600,
        width: '100%',
        p: '$lg',
        borderRadius: '$md',
      }}
    >
      <Row css={{ height: 60 }}>
        <Text>All the things</Text>
        <Centered
          css={{
            ml: 'auto',
            borderRadius: '$md',
            border: '1px solid $bg-2',
            height: 24,
            p: '$sm',
            bg: '$bg-3',
          }}
        >
          6m
        </Centered>
      </Row>
      <Chart>
        <Bar css={{ height: '30%' }} />
        <Bar css={{ height: '60%' }} />
        <Bar css={{ height: '70%' }} />
        <Bar css={{ height: '40%' }} />
        <Bar css={{ height: '80%' }} />
        <Bar css={{ height: '70%' }} />
        <Bar css={{ height: '80%' }} />
        <Bar css={{ height: '30%' }} />
        <Bar css={{ height: '80%' }} />
        <Bar css={{ height: '50%' }} />
        <Bar css={{ height: '65%' }} />
        <Bar css={{ height: '76%' }} />
        <Bar css={{ height: '80%' }} />
        <Bar css={{ height: '65%' }} />
      </Chart>
    </Column>
  );
}

const Tile = styled(Column, {
  bg: '$bg-3',
  p: '$lg',
  borderRadius: '$md',
  height: 200,
  flex: 1,
  justifyContent: 'space-between',
});

const Toolbar = styled(Row, {
  bg: '$bg-3',
  borderRadius: '$md',
  flex: 1,
  flexShrink: 0,
  alignItems: 'center',
  p: '$lg',
});

const Separator = styled(Column, {
  width: 1,
  height: 20,
  borderRight: '1px solid $bg-2',
});

const Diff = styled(Text, {
  fontWeight: 'bold',
  color: '$success-1',
  display: 'flex',
  alignItems: 'center',
});

const Title = styled(Text, {
  fontWeight: '$bold',
});

function Details() {
  return (
    <Column css={{ gap: '$xl', p: '$xl', flex: 1 }}>
      <Toolbar css={{ gap: '$md' }}>
        <ChartIcon />
        <Title>System Performance</Title>
        <Row css={{ ml: 'auto', alignItems: 'center', gap: '$lg' }}>
          <Diff>
            Last 7 days
            <DiffIcon />
            2.45%
          </Diff>
        </Row>
      </Toolbar>

      <Row css={{ gap: '$xl' }}>
        <Tile>
          <Row css={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Text
              css={{ fontSize: '$lg', fontWeight: '$bold', color: '$text-2' }}
            >
              Gross trading value
            </Text>
            <Diff>
              <DiffIcon />
              +5.6%
            </Diff>
          </Row>
          <Text
            css={{ fontSize: '$2xl', fontWeight: '$bold', color: '$accent-1' }}
          >
            $370m
          </Text>

          <Text css={{ color: '$text-2' }}>Last 7 days</Text>
        </Tile>
        <Tile>
          <Row css={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Text
              css={{ fontSize: '$lg', fontWeight: '$bold', color: '$text-2' }}
            >
              New clients
            </Text>
            <Diff>
              <DiffIcon />
              +2.6%
            </Diff>
          </Row>
          <Text
            css={{
              fontSize: '$2xl',
              fontWeight: '$bold',
              color: '$accent-1',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <UserIcon style={{ fontSize: 72 }} /> 114
          </Text>

          <Text css={{ color: '$text-2' }}>Last 7 days</Text>
        </Tile>
        <Tile>
          <Row css={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Text
              css={{ fontSize: '$lg', fontWeight: '$bold', color: '$text-2' }}
            >
              Net profits
            </Text>
            <Diff css={{ color: 'orange' }}>
              <DiffIcon style={{ transform: 'rotate(180deg)' }} />
              -5.6%
            </Diff>
          </Row>
          <Text
            css={{ fontSize: '$2xl', fontWeight: '$bold', color: 'orange' }}
          >
            $0.97B
          </Text>

          <Text css={{ color: '$text-2' }}>Last 6 months</Text>
        </Tile>
      </Row>

      <Panel />
    </Column>
  );
}

export const DashboardApp = () => {
  return (
    <Root className={dashboardAppMainTheme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
        rel="stylesheet"
      />

      <Frame>
        <Navigation />
        <Details />
      </Frame>
    </Root>
  );
};
