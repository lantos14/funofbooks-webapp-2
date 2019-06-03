import { css } from '@emotion/core';

const DrawerStyle = {
  shelfToggle: css`
    display: flex;
    position: absolute;
    top: 0; left: 0;
    height: 64px;
    transition: opacity 1.5s;
  `,
  highIndex: css`
  z-index: 3000;
  opacity: 1;
  `,
  lowIndex: css`
  z-index: 1;
  opacity: 0;
  `,
};

export default DrawerStyle;
