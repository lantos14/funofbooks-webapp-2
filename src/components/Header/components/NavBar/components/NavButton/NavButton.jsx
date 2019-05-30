/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import NavButtonStyle from './NavButton.styles';

const NavButton = ({ text }) => (
  <Button className="nav-button" css={NavButtonStyle}>
    {text}
  </Button>
);

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavButton;
