/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import ContentTypes from './Content.types';
import ContentStyle from './Content.style';

const Content = ({ selectedBook }) => {
  const {
    title,
    story,
    opinion,
    summary,
  } = selectedBook;

  return (
    <div className="content" css={ContentStyle.content}>
      <h1 css={ContentStyle.header}>{title}</h1>
      <p>{story}</p>
      <p>{opinion}</p>
      <p>{summary}</p>
    </div>
  );
};

Content.propTypes = {
  ...ContentTypes,
};

export default Content;
