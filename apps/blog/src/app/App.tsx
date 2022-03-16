import { Column, globalStyles, styled } from '@mpkelly/ui';
import { Router } from './Router';

const Root = styled(Column, {
  alignItems: 'center',
  minHeight: '100%',
});

export function App() {
  globalStyles();
  return (
    <Root>
      <Router />
    </Root>
  );
}

export default App;
