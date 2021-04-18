import * as React from 'react';
import { Suspense } from 'react';
import { Navigation } from '../navigation/Navigation';
import { Emails } from '../email-list/Emails';
import { Detail } from './Detail';
import { Page } from '../page/Page';
import { Loading } from '../email-list/Loading';
import { useEmailState } from './EmailState';
import { ErrorBoundary } from 'elements/util/ErrorBoundary';
import { Error } from './Error';

export default () => {
  const { handleFetchEmails } = useEmailState();
  return (
    <Page>
      <ErrorBoundary fallback={<Error onRetry={handleFetchEmails} />}>
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Emails />
          <Detail />
        </Suspense>
      </ErrorBoundary>
    </Page>
  );
};
