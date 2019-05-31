import {
  arrayOf, shape, bool, string,
} from 'prop-types';

const AppContentTypes = {
  bookList: arrayOf(shape({
    _id: string.isRequired,
    title: string.isRequired,
    isFun: bool.isRequired,
    description: string.isRequired,
    imgSrc: string.isRequired,
    story: string.isRequired,
    opinion: string.isRequired,
    summary: string.isRequired,
    createdAt: string.isRequired,
    updatedAt: string.isRequired,
  })),
};

export default AppContentTypes;
