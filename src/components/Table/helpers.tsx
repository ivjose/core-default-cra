import request from 'utils/api';
import { Query } from './Types';

export const getList = async ({ url, query }: { url: string; query: Query }) => {
  console.log(url);

  const response = await request({
    url: `https://jsonplaceholder.typicode.com/${url}`,
    method: 'GET',
    params: {
      ...query,
    },
  });

  return response;
};
