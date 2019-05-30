/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { titleStyle, h1Style } from './Title.style';

const Title = () => (
  <div className="title-wrapper" css={titleStyle}>
    <h1 className="title" css={h1Style}>FunOfBooks</h1>
  </div>
);

export default Title;
