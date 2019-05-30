/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { headerStyle, backgroundStyle } from './Header.style';
import commonRules from '../../styles/commonRules';
import Title from './components/Title/Title';

const { centerConent } = commonRules;

const Header = () => (
  <div className="header" css={[centerConent, headerStyle]}>
    <div className="background" css={backgroundStyle} />
    <Title />
  </div>
);

export default Header;
