import {
  Column,
  Row,
  Text,
  styled,
  ToolIcon,
  CodeIcon,
  RocketIcon,
} from '@mpkelly/ui';

const DarkContent = styled(Column, {
  alignItems: 'center',
  bg: '$neutral-1',
  color: 'white',
  width: '100%',
});

const Root = styled('section', Row, {
  width: '$content',
  alignItems: 'flex-start',
  p: '$2xl $xl',
  gap: '$2xl',
});

const Tile = styled(Column, {
  p: '$xl',
  bg: '$neutral-2',
  flex: 1,
  gap: '$xl',
  height: 200,
  borderRadius: '$md',
  span: {
    color: 'white',
  },
  svg: {
    size: 60,
    color: '$primary-5',
  },
});

export const TilesSection = () => (
  <DarkContent>
    <Root>
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
    </Root>
  </DarkContent>
);
