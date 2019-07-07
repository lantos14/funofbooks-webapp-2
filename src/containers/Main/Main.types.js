import {
  func,
} from 'prop-types';
// eslint-disable-next-line max-len
import BookShelfTypes from '../../components/NavBar/components/Drawer/components/BookShelf/BookShelf.types';

const AppTypes = {
  getBooks: func.isRequired,
  ...BookShelfTypes,
};

export default AppTypes;
