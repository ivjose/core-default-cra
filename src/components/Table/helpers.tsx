import request from 'utils/api';

interface IQuery {
  _limit: number;
  _page: number;
  sortField?: string;
  sortOrder?: string;
}

export const getList = async ({ url, query }: { url: string; query: IQuery }) => {
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
