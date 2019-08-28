import request from 'utils/api';

import { FormProps } from '../Types';

const add = ({ title, body, userId }: FormProps) => {
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

const userList = () => {
  return request({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
  });
};

const postsList = () => {
  return request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
  });
};

const getPost = (id: string | number) => {
  return request({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'GET',
  });
};

const CRUDService = {
  add,
  getPost,
  userList,
  postsList,
};

export default CRUDService;
