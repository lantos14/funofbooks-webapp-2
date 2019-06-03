import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
const BookCover = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 125px;
`;

export default BookCover;
