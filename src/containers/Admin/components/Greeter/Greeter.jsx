/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import greetStyle from './Greeter.style';

const Greeter = ({
  username,
}) => (
  <div className="greet" css={greetStyle}>
    <p>
      Üdv,
      {' '}
      {username}
      {'! :)'}
    </p>
  </div>
);

export default Greeter;
