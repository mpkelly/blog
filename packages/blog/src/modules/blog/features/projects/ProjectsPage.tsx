import * as React from 'react';
import { Main } from 'elements/flex/Main';
import { PageTitle } from '../page/PageTitle';
import { Projects } from './Projects';
import { Project } from './Project';

const Style = {
  width: 'content.width',
  maxWidth: 'content.width',
  paddingTop: 'xxl',
};

export const ProjectsPage = () => {
  return (
    <Main xs={Style}>
      <PageTitle title={'Projects.'} />
      {Projects.map((project, index) => (
        <Project
          project={project}
          key={project.name}
          modifiers={index % 2 === 0 ? 'reverse' : ''}
        />
      ))}
    </Main>
  );
};
