/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import ContentTypes from './Content.types';
import ContentStyle from './Content.style';
import Review from './components/Review/Review';
import BookCover from './components/BookCover/BookCover';

const Content = ({ selectedBook }) => {
  const {
    title,
    story,
    opinion,
    summary,
    imgSrc,
  } = selectedBook;

  return (
    <div className="content" css={ContentStyle.content}>
      <BookCover url={imgSrc} />
      <Review
        title={title}
        story={story}
        opinion={opinion}
        summary={summary}
        image={imgSrc}
      />
    </div>
  );
};

Content.propTypes = {
  ...ContentTypes,
};

export default Content;
