/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavButton from './components/NavButton/NavButton';
import ToolbarStyle from './NavBar.style';
import SwipeableTemporaryDrawer from '../Content/components/Drawer/Drawer';
import BookShelfTypes from '../Content/components/BookShelf/BookShelf.types';

const NavBar = ({ bookList }) => (
  <div className="navbar">
    <SwipeableTemporaryDrawer bookList={bookList} />
    <AppBar position="static" color="default">
      <Toolbar className="toolbar" css={ToolbarStyle}>
        <NavButton text="Főoldal" />
        <NavButton text="Rólam" />
        <NavButton text="Github" />
      </Toolbar>
    </AppBar>
  </div>
);

NavBar.propTypes = {
  ...BookShelfTypes,
};

export default NavBar;
