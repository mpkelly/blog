import { Column, globalStyles, styled } from '@mpkelly/ui';
import { Router } from './Router';
import { OutroSection } from '../features/home/outro/OutroSection';

const Root = styled(Column, {
  alignItems: 'center',
  minHeight: '100%',
});

export function App() {
  globalStyles();
  return (
    <Root>
      <Router />
      <OutroSection />
    </Root>
  );
}

export default App;
