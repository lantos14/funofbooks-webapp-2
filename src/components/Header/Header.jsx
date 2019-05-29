/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import headerStyle from './Header.style';
// import appStyle from './Header.style';

const Header = () => (
  <div className="background" css={headerStyle} />
);

export default Header;
