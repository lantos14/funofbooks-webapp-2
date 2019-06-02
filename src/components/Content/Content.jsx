/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import BookShelfTypes from './components/BookShelf/BookShelf.types';

const Content = ({ bookList }) => (
  <div className="content">
    content
  </div>
);

Content.propTypes = {
  ...BookShelfTypes,
};

export default Content;
