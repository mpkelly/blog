import {
  Column,
  Row,
  Text,
  styled,
  ToolIcon,
  CodeIcon,
  RocketIcon,
  darkTheme,
} from '@mpkelly/ui';

const Root = styled('section', Row, {
  bg: '$bg-1',
  width: '100%',
  justifyContent: 'center',
});

const Content = styled('section', Row, {
  width: '$content',
  alignItems: 'flex-start',
  p: '$2xl $xl',
  gap: '$2xl',
});

const Tile = styled(Column, {
  p: '$xl',
  bg: '$bg-2',
  flex: 1,
  gap: '$xl',
  height: 200,
  borderRadius: '$md',
  span: {
    color: 'white',
  },
  svg: {
    size: 60,
    color: '$primary-1',
  },
});

export const TilesSection = () => (
  <Root className={darkTheme}>
    <Content>
      <Tile>
        <ToolIcon />
        <Text>Up-to-date tech & tool stack</Text>
      </Tile>
      <Tile>
        <CodeIcon />
        <Text>High quality aesthetics & code</Text>
      </Tile>
      <Tile>
        <RocketIcon />
        <Text>All done at startup speed</Text>
      </Tile>
    </Content>
  </Root>
);
