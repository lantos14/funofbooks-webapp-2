/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import appStyle from './App.style';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import AppContent from '../../components/AppContent/AppContent';
import { getBooks } from '../../actions/actions';

const App = ({ getBooks }) => {
  useEffect(() => {
    getBooks();
  });

  return (
    <div className="app" css={appStyle}>
      <Header />
      <NavBar />
      <AppContent />
    </div>
  );
};

App.propTypes = {
  getBooks: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  getBooks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
