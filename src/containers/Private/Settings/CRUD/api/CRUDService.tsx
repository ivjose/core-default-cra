import request from 'utils/api';

import { FormValue } from '../Add/Types';

const add = ({ title, body, userId }: FormValue) => {
  return request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    data: {
      title,
      body,
      userId,
    },
  });
};

const CRUDService = {
  add,
};

export default CRUDService;
