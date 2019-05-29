/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import appStyle from './App.style';
import Header from '../../components/Header/Header';

const App = () => (
  <div className="app" css={appStyle}>
    <Header />
  </div>
);

export default App;
