/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import BookCard from './components/BookCard/BookCard';
// styles
import AppContentStyle from './AppContent.style';
import commonRules from '../../styles/commonRules';
import AppContentTypes from './AppContent.types';

const { centerConent } = commonRules;

const AppContent = ({ bookList }) => (
  <div className="app-content" css={AppContentStyle.AppContent}>
    <CssBaseline />

    <Container css={centerConent}>
      {
        bookList.map(book => (
          <BookCard
            key={book._id}
            title={book.title}
            description={book.description}
            image={book.imgSrc}
          />
        ))
      }
    </Container>

  </div>
);

AppContent.propTypes = AppContentTypes;

export default AppContent;
