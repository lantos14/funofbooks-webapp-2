/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import backgroundStyle from './Header.style';
import Title from './components/Title/Title';

const Header = () => (
  <div>
    <div className="background" css={backgroundStyle} />
    <Title />
  </div>
);

export default Header;
