import * as React from 'react';
import { Navigation } from '../navigation/Navigation';
import { Emails } from '../email-list/Emails';
import { Email, ExampleEmails } from './Email';
import { Detail } from './Detail';
import { Page } from '../page/Page';
import { Loading } from '../email-list/Loading';
import { Suspense } from 'react';
import { fetch } from '../api-client/Fetch';

const emails = fetch<Email[]>(ExampleEmails, 4);

export default () => {
  return (
    <Page>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Emails resource={emails} />
      </Suspense>
      <Detail email={ExampleEmails[0]} />
    </Page>
  );
};
