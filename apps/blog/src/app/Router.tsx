import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../features/home/HomePage';
import { AboutPage } from '../features/about/AboutPage';
import { Navigation } from './Navigation';
import { SketchesPage } from '../features/sketches/SketchesPage';
import { EmailApp } from '../features/sketches/sketches/email-client/EmailApp';
import { ResumePage } from '../features/resume/ResumePage';
import { FoodApp } from '../features/sketches/sketches/foodapp-signup/FoodApp';
import { FooterSection } from '../features/footer/FooterSection';

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
        <Route path={'/resume'} element={<ResumePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <FooterSection />
    </HashRouter>
  );
};
