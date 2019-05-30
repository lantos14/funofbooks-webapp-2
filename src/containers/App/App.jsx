/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import appStyle from './App.style';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Header/components/NavBar/NavBar';

const App = () => (
  <div className="app" css={appStyle}>
    <Header />
    <NavBar />
  </div>
);

export default App;
