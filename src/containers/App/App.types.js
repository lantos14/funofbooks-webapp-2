import {
  func,
} from 'prop-types';
import BookShelfTypes from '../../components/Content/components/BookShelf/BookShelf.types';

const AppTypes = {
  getBooks: func.isRequired,
  ...BookShelfTypes,
};

export default AppTypes;
