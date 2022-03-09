import React from 'react';
import { Row, Column, Text, styled, H2, Link } from '@mpkelly/ui';
import { Employment } from './Employment';

const Root = styled(Column, { gap: '$xl' });

const PrintSpacer = styled('div', {
  display: 'none',
  height: 70,
});

export const EmploymentHistory = () => {
  return (
    <Root>
      <H2>Employment History</H2>
      <Employment
        title={
          <>
            Senior React Developer - <Link href={'#'}>Occtoo Studio</Link>{' '}
          </>
        }
        description={`
         Currently I work for a Occtoo, a data integration startup, on their
        Studio app. I work using React, TypeScript and Lerna. Tasks so far have
        included generating REST API docs in HTML and PDF format, and creating a
        Postman-like query tool for testing their automatically generated APIs.
          `}
        startDate={'2022'}
        endDate={'present'}
        company={'Occtoo'}
        location={'Remote'}
      />
      <Employment
        title={
          <>
            React Developer Lead - <Link href={'#'}>DocMX</Link>{' '}
          </>
        }
        description={`
          As well as the flagship DocMX webapp, I have built the DocMX mobile
        webapp, DocMX native app and a backend monitoring service. I am now the
        frontend lead who manages a remote team that includes two other
        developers. DocMX is implemented in TypeScript using a mixture of legacy
        and modern React APIs. It uses Mobx mainly for global state management
        and is tested using Jest and Cypress.
          `}
        startDate={'2017'}
        endDate={'2022'}
        company={'iT4 Group'}
        location={'Remote'}
      />

      <Employment
        title={
          <>
            Senior Java Developer- <Link href={'#'}>Babel</Link>{' '}
          </>
        }
        description={`
        Babel is a modular system which shipped as customised builds to some of
        the world’s largest financial companies. I was responsible for some of
        the initial implementation (a rewrite - see below) as well as extending
        and customising the system further to support new and existing clients.
        I was also responsible for mentoring junior developers on our team.
          `}
        startDate={'2010'}
        endDate={'2016'}
        company={'Bravura Solutions'}
        location={'London'}
      />

      <Employment
        title={
          <>
            Java Developer - <Link href={'#'}>Scenario Based Risk</Link>
          </>
        }
        description={`
        I was responsible for day-to-day development of SBR, a newly created
        internal risk reporting system written in Java and Google Web Toolkit.`}
        startDate={'2009'}
        endDate={'2010'}
        company={'UBS'}
        location={'London'}
      />

      <PrintSpacer data-print-only />
      <Employment
        title={
          <>
            Java Developer - Babel - <Link href={'#'}>Babel</Link>{' '}
          </>
        }
        description={`
        Bravura Solutions acquired Babel from a Luxembourg-based startup. This
        legacy system was eventually rewritten (see above). I was responsible
        mainly for small enhancements and bug fixing.
          `}
        startDate={'2008'}
        endDate={'2009'}
        company={'Bravura Solutions'}
        location={'Luxembourg'}
      />

      <Employment
        title={<>Java Developer - Messaging Hub</>}
        description={`
            I worked on the Hub team which was responsible for internal message
        routing for various financial platforms owned by Clearstream. I was
        responsible for writing message transformations, e.g. SWIFT to XML.
          `}
        startDate={'2007'}
        endDate={'2008'}
        company={'Clearstream'}
        location={'Luxembourg'}
      />
    </Root>
  );
};
