/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import appStyle from './App.style';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { getBooks } from '../../actions/actions';
import AppTypes from './App.types';
import Content from '../../components/Content/Content';

const App = ({ getBooks, bookList, selectedBook }) => {
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app" css={appStyle}>
      <Header />
      <NavBar bookList={bookList} />
      {/* <Content
        selectedBook={selectedBook}
      /> */}
    </div>
  );
};

App.propTypes = AppTypes;

const mapStateToProps = store => ({
  bookList: store.bookStore.books,
  selectedBook: store.bookStore.selectedBook,
});

const mapDispatchToProps = {
  getBooks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
