/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import appStyle from './App.style';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import AppContent from '../../components/AppContent/AppContent';

const App = () => (
  <div className="app" css={appStyle}>
    <Header />
    <NavBar />
    <AppContent />
  </div>
);

export default App;
