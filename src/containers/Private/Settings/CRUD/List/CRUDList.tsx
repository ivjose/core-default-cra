import * as React from 'react';
import { Link } from 'react-router-dom';

import request from 'utils/api';

import CustomList from './components/CustomList';

import { ListProps } from './Types';

const CRUDList: React.FC = () => {
  const [list, setList] = React.useState<ListProps[]>([]);

  React.useEffect(() => {
    const loadList = async () => {
      try {
        const response = await request({
          url: 'https://jsonplaceholder.typicode.com/posts',
          method: 'GET',
        });
        setList([...response]);
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadList();
  }, []);
  return (
    <div>
      <h1>CRUDList</h1>
      <Link to="/settings/crud/add">Create</Link>
      {list.length !== 0 && <CustomList list={list} />}
    </div>
  );
};

export default CRUDList;
