import { css } from '@emotion/core';

// common rule values
const backColor = '#7d7382';
const frontColor = 'white';
const borderAttr = `3px solid ${frontColor}`;

export const titleStyle = css`
  position: absolute;
  top: 140px; left: 10%;
  z-index: 1;
  background-color: ${backColor};
  padding: 30px;
`;

export const h1Style = css`
  color: ${frontColor};
  border-top: ${borderAttr};
  border-bottom: ${borderAttr};

  font-size: 60px;
`;
