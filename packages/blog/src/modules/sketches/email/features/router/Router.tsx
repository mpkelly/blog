import * as React from 'react';
import { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Loading } from '../page/Loading';

const EmailPage = lazy(() => import('../email/EmailPage'));

export const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path={'/sketches/email'} component={EmailPage} />
        </Suspense>
      </Switch>
    </HashRouter>
  );
};
