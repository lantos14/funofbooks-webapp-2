/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { string } from 'prop-types';
import greetStyle from './Greeter.style';

const Greeter = ({
  username,
}) => (
  <div className="greet" css={greetStyle.greeter}>
    {username
      ? (
        <p css={greetStyle.p}>
          Üdv,
          {' '}
          {username}
          {'! :)'}
        </p>
      )
      : <div />
    }
  </div>
);

Greeter.propTypes = {
  username: string.isRequired,
};

export default Greeter;
