import {
  string, shape, bool,
} from 'prop-types';

const ContentTypes = shape({
  id: string.isRequired,
  title: string,
  isFun: bool.isRequired,
  imgSrc: string.isRequired,
  description: string.isRequired,
  story: string.isRequired,
  opinion: string.isRequired,
  summary: string.isRequired,
  createdAt: string.isRequired,
  updatedAt: string.isRequired,
}).isRequired;

export default ContentTypes;
