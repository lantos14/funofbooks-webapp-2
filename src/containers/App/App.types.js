import {
  func,
} from 'prop-types';
import AppContentTypes from '../../components/AppContent/AppContent.types';

const AppTypes = {
  getBooks: func.isRequired,
  ...AppContentTypes,
};

export default AppTypes;
