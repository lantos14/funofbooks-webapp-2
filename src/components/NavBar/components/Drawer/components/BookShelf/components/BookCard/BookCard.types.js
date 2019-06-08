import {
  func, string,
} from 'prop-types';

const BookCardTypes = {
  title: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
  id: string.isRequired,
  bookSelected: func.isRequired,
};

export default BookCardTypes;
