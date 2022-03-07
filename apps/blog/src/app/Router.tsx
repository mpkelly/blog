import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../features/home/HomePage';
import { AboutPage } from '../features/about/AboutPage';
import { Navigation } from './Navigation';
import { SketchesPage } from '../features/sketches/SketchesPage';
import { NomadInsuruerApp } from '../features/sketches/sketches/nomad-insurer/NomadInsuruerApp';
import { EmailApp } from '../features/sketches/sketches/email-client/EmailApp';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/sketches'} element={<SketchesPage />} />
        <Route path={'/sketches/nomadinsurer'} element={<NomadInsuruerApp />} />
        <Route path={'/sketches/email'} element={<EmailApp />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
