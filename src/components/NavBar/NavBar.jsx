/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavBarStyle from './NavBar.style';
import SwipeableTemporaryDrawer from './components/Drawer/Drawer';
import BookShelfTypes from './components/Drawer/components/BookShelf/BookShelf.types';
import LoginModal from './components/LoginModal/LoginModal';
import RegistrationModal from './components/RegistrationModal/RegistrationModal';

const { toolbar, navbar } = NavBarStyle;

const NavBar = ({ bookList, loginRequested, userRole }) => (
  <div className="navbar" css={navbar}>
    <SwipeableTemporaryDrawer bookList={bookList} />
    <AppBar position="static" color="default">
      {
        userRole === 'admin'
          ? (
            <Toolbar className="toolbar" css={toolbar}>
              <LoginModal loginRequested={loginRequested} />
              {/* <RegistrationModal /> */}
            </Toolbar>
          )
          : null
      }
    </AppBar>
  </div>
);

NavBar.propTypes = {
  ...BookShelfTypes,
};

export default NavBar;
