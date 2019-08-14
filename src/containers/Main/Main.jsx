/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import appStyle from './Main.style';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { getBooks } from '../../actions/actions';
import AppTypes from './Main.types';
import Content from '../../components/Content/Content';
import Editor from './components/Editor/Editor';

const Main = ({
  getBooks,
  selectedBook,
  bookList,
  loggedIn,
}) => {
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app" css={appStyle}>
      <NavBar bookList={bookList} />
      <Header />
      {loggedIn
        ? <Editor />
        : <Content selectedBook={selectedBook} />
      }
    </div>
  );
};

Main.propTypes = AppTypes;

const mapStateToProps = store => ({
  bookList: store.bookStore.books,
  selectedBook: store.bookStore.selectedBook,
  loggedIn: store.user.login,
});

const mapDispatchToProps = {
  getBooks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
