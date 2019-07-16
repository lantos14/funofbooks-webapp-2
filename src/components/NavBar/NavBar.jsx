/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { func } from 'prop-types';
import NavBarStyle from './NavBar.style';
import SwipeableTemporaryDrawer from './components/Drawer/Drawer';
import BookShelfTypes from './components/Drawer/components/BookShelf/BookShelf.types';
import LoginModal from './components/LoginModal/LoginModal';

const { toolbar, navbar } = NavBarStyle;

const NavBar = ({
  bookList,
  loginRequested,
  userRole,
}) => (
  <div className="navbar" css={navbar}>
    <SwipeableTemporaryDrawer bookList={bookList} />
    <AppBar position="static" color="default">
      {
        userRole === 'admin'
          ? (
            <Toolbar className="toolbar" css={toolbar}>
              <LoginModal loginRequested={loginRequested} />
            </Toolbar>
          )
          : <div />
      }
    </AppBar>
  </div>
);

NavBar.propTypes = {
  ...BookShelfTypes,
  loginRequested: func,
};

NavBar.defaultProps = {
  loginRequested: () => null,
};

export default NavBar;
