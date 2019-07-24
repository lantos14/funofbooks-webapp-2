/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { func, string } from 'prop-types';
import NavBarStyle from './NavBar.style';
import SwipeableTemporaryDrawer from './components/Drawer/Drawer';
import BookShelfTypes from './components/Drawer/components/BookShelf/BookShelf.types';
import LoginModal from './components/LoginModal/LoginModal';
import Greeter from '../../containers/Admin/components/Greeter/Greeter';
import { loginRequested } from '../../actions/actions';

const { toolbar, navbar } = NavBarStyle;

const NavBar = ({
  bookList,
  loginRequested,
  username,
}) => (
  <div className="navbar" css={navbar}>
    <SwipeableTemporaryDrawer bookList={bookList} />
    <AppBar position="static" color="default">
      {
        process.env.NODE_ENV === 'development'
          ? (
            <Fragment>
              <Toolbar className="toolbar" css={toolbar}>
                <LoginModal loginRequested={loginRequested} />
              </Toolbar>
              <Greeter username={username} />
            </Fragment>
          )
          : <div />
      }
    </AppBar>
  </div>
);

NavBar.propTypes = {
  ...BookShelfTypes,
  username: string.isRequired,
  loginRequested: func,
};

NavBar.defaultProps = {
  loginRequested: () => null,
};

const mapStateToProps = store => ({
  bookList: store.bookStore.books,
  username: store.user.username,
});

const mapDispatchToProps = {
  loginRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
