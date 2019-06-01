import { css } from '@emotion/core';
import headerBackground from '../../images/header-background.jpg';

export const backgroundStyle = css`
  position: fixed;
  top: 0; left: 0;
  width: 130%;
  height: 500px;
  z-index: -1;
  background: url("${headerBackground}");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const headerStyle = css`
  height: 500px;
`;
