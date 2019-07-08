/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import appStyle from './Main.style';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { getBooks, loginRequested } from '../../actions/actions';
import AppTypes from './Main.types';
import Content from '../../components/Content/Content';

const Main = ({
  getBooks,
  bookList,
  selectedBook,
}) => {
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app" css={appStyle}>
      <NavBar bookList={bookList} userRole="reader" />
      <Header />
      <Content
        selectedBook={selectedBook}
      />
    </div>
  );
};

Main.propTypes = AppTypes;

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
)(Main);
