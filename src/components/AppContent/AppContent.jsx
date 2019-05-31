/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import BookCard from './components/BookCard/BookCard';
// styles
import AppContentStyle from './AppContent.style';
import commonRules from '../../styles/commonRules';

const { centerConent } = commonRules;

const AppContent = () => (
  <div className="app-content" css={AppContentStyle}>
    <CssBaseline />

    <Container css={css`display: flex; justify-content: center;`}>
      <BookCard />
    </Container>

  </div>
);

export default AppContent;
