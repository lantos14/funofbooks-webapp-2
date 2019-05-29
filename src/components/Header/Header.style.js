import { css } from '@emotion/core';

// eslint-disable-next-line max-len
const photoUrl = 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

const headerStyle = css`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 500px;
  background: url("${photoUrl}");
  background-repeat: no-repeat;
  background-size: cover;
`;

export default headerStyle;
