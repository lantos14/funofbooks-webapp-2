/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import ContentTypes from './Content.types';

const Content = ({ book }) => {
  return (
    <div className="content">
      <h1>{book.title}</h1>
      <p>{book.story}</p>
      <p>{book.opinion}</p>
      <p>{book.summary}</p>
    </div>
  );
};

Content.propTypes = {
  ...ContentTypes,
};

export default Content;
