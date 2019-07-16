import {
  func,
} from 'prop-types';

const adminTypes = {
  loginRequested: func.isRequired,
  newBookPosting: func.isRequired,
};

export default adminTypes;
