import * as React from 'react';
import { Main } from 'elements/flex/Main';
import { PageTitle } from '../page/PageTitle';

const Style = {
  width: 'content.width',
  maxWidth: 'content.width',
  paddingTop: 'xxl',
};

export const ProjectsPage = () => {
  return (
    <Main xs={Style}>
      <PageTitle title={'Projects.'} />
    </Main>
  );
};
