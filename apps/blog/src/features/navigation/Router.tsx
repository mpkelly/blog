import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../home/HomePage';
import { AboutPage } from '../about/AboutPage';
import { Navigation } from './Navigation';
import { SketchesPage } from '../sketches/SketchesPage';
import { EmailApp } from '../sketches/sketches/email-client/EmailApp';
import { ResumePage } from '../resume/ResumePage';
import { FoodApp } from '../sketches/sketches/foodapp-signup/FoodApp';
import { FooterSection } from '../footer/FooterSection';
import { ArticlesPage } from '../articles/ArticlesPage';
import { ArticlePage } from '../articles/ArticlePage';

export const Router = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/sketches'} element={<SketchesPage />} />
        <Route path={'/sketches/email'} element={<EmailApp />} />
        <Route path={'/sketches/foodapp-signup'} element={<FoodApp />} />
        <Route path={'/articles'} element={<ArticlesPage />} />
        <Route path={'/articles/:name'} element={<ArticlePage />} />
        <Route path={'/resume'} element={<ResumePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <FooterSection />
    </HashRouter>
  );
};
