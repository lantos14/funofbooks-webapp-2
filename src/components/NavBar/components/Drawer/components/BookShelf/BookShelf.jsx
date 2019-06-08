/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Container from '@material-ui/core/Container';
import BookCard from './components/BookCard/BookCard';
// styles
import BookShelfStyle from './BookShelf.style';
import commonRules from '../../../../../../styles/commonRules';
import BookShelfTypes from './BookShelf.types';

const { centerConent } = commonRules;

const BookShelf = ({ bookList }) => (
  <div className="book-shelf" css={BookShelfStyle.BookShelf}>
    <Container css={centerConent}>
      {
        bookList.map(book => (
          <BookCard
            key={book._id}
            id={book._id}
            title={book.title}
            description={book.description}
            image={book.imgSrc}
          />
        ))
      }
    </Container>

  </div>
);

BookShelf.propTypes = BookShelfTypes;

export default BookShelf;
