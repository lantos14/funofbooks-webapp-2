import { css } from '@emotion/core';

// common rule values
const backColor = '#7d7382';
const frontColor = 'white';
const borderAttr = `3px solid ${frontColor}`;

export const titleStyle = css`
  z-index: 1;
  background-color: ${backColor};
  box-sizing: content-box !important;
  padding: 40px;
  font-family: 'Special Elite', cursive;
`;

export const h1Style = css`
  color: ${frontColor};
  padding-top: 15px;
  border-top: ${borderAttr};
  border-bottom: ${borderAttr};
  box-sizing: content-box !important;
  font-size: 60px;
  font-family: 'Special Elite', cursive;
`;
