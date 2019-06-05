/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import ReviewStyle from './Review.style';
import ContentTypes from '../../Content.types';
import BookCover from '../BookCover/BookCover';

const Review = ({
  title,
  story,
  opinion,
  summary,
  image,
}) => (
  <div className="review" css={ReviewStyle.content}>
    <BookCover url={image} />
    <h1 css={ReviewStyle.header}>{title}</h1>
    <p>{story}</p>
    <p>{opinion}</p>
    <p>{summary}</p>
  </div>
);

Review.propTypes = {
  ...ContentTypes,
};

export default Review;
