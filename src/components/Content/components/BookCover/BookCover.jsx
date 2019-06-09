import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`,
);

// eslint-disable-next-line import/prefer-default-export
const BookCover = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px;
  ${mq[1]} {
    width: 50%;
    height: 400px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 10px auto;
  }
`;

export default BookCover;
