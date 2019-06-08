/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import NavButtonStyle from './NavButton.styles';

const NavButton = ({ text, onClickFn }) => (
  <Button className="nav-button" css={NavButtonStyle} onClick={onClickFn}>
    {text}
  </Button>
);

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFn: PropTypes.func,
};

NavButton.defaultProps = {
  onClickFn: () => {},
};

export default NavButton;
