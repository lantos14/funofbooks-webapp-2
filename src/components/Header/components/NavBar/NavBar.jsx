/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavButton from './components/NavButton/NavButton';
import ToolbarStyle from './NavBar.style';

const NavBar = () => (
  <div className="navbar">
    <AppBar position="static" color="default">
      <Toolbar className="toolbar" css={ToolbarStyle}>
        <NavButton text="Főoldal" />
        <NavButton text="Rólam" />
        <NavButton text="Github" />
      </Toolbar>
    </AppBar>
  </div>
);

export default NavBar;
