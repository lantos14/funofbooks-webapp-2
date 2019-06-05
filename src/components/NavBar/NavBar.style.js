import { css } from '@emotion/core';

const NavBarStyle = {
  toolbar: css`
    display: flex;
    justify-content: center;
    height: 100%;
  `,
  navbar: css`
    display: flex;
    height: 64px;
    position: fixed;
    left: 0; right: 0;
    z-index: 10;
  `,
};

export default NavBarStyle;
