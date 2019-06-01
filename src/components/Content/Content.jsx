/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import BookShelfTypes from './components/BookShelf/BookShelf.types';
import BookShelf from './components/BookShelf/BookShelf';

const Content = ({ bookList }) => (
  <div className="content">
    <BookShelf bookList={bookList} />
  </div>
);

Content.propTypes = {
  ...BookShelfTypes,
};

export default Content;
