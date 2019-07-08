import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import appStyle from '../Main/Main.style';
import { loginRequested } from '../../actions/actions';

const Admin = ({
  loginRequested,
}) => (
  <div className="app" css={appStyle}>
    <NavBar userRole="admin" loginRequested={loginRequested} />
    <Header />
  </div>
);

const mapStateToProps = store => ({});

const mapDispatchToProps = {
  loginRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
