import * as React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Page } from '../page/Page';
import { HomePage } from '../home/HomePage';
import { SketchesPage } from '../sketches/SketchesPage';
import { EmailClient } from '../../../sketches/email/EmailClient';
import { AboutPage } from '../about/AboutPage';
import { ProjectsPage } from '../projects/ProjectsPage';

export const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={'/sketches/email'} component={EmailClient} />
        <Page>
          <Route exact path={'/home'} component={HomePage} />
          <Route exact path={'/sketches'} component={SketchesPage} />
          <Route exact path={'/projects'} component={ProjectsPage} />
          <Route exact path={'/about'} component={AboutPage} />
        </Page>
      </Switch>
      <Redirect from={'*'} to={'/home'} />
    </HashRouter>
  );
};
