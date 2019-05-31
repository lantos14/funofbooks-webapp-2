import {
  bool, string,
} from 'prop-types';

const BookCardTypes = {
  title: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
};

export default BookCardTypes;
