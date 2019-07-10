/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { loginRequested } from '../../actions/actions';
import Greeter from './components/Greeter/Greeter';
import Editor from './components/Editor/Editor';
import appStyle from '../Main/Main.style';

const Admin = ({
  loginRequested,
}) => (
  <div className="app" css={appStyle}>
    <NavBar userRole="admin" loginRequested={loginRequested} />
    <Header />
    {localStorage.getItem('username')
      && <Greeter username={localStorage.getItem('username')} />}
    <Editor />
  </div>
);

const mapStateToProps = store => ({
});

const mapDispatchToProps = {
  loginRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
