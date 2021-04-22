import * as React from 'react';
import { Main } from 'elements/flex/Main';
import { PageTitle } from '../page/PageTitle';
import { Projects } from './Projects';
import { Project } from './Project';
import { Separator } from 'elements/separator/Separator';

export const ProjectsPage = () => {
  return (
    <Main xs={Style}>
      <PageTitle title={'Projects.'} />
      {Projects.map((project, index) => {
        const isEven = index % 2 === 0;
        const isNotLast = index + 1 < Projects.length;
        return (
          <>
            <Project
              project={project}
              key={project.name}
              modifiers={isEven ? 'reverse' : ''}
            />
            {isNotLast && <Separator modifiers={'horizontal'} />}
          </>
        );
      })}
    </Main>
  );
};

const Style = {
  width: 'content.width',
  maxWidth: 'content.width',
  paddingTop: 'xxl',
};
