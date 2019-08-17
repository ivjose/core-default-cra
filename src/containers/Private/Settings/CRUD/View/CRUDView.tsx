import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import request from 'utils/api';

import { ListProps } from '../List/Types';

const initialData = {
  title: '',
  body: '',
  id: 0,
  userId: 0,
};

const CRUDEdit: React.FC<RouteComponentProps<{ id?: string }>> = ({ match }) => {
  const [post, getPost] = React.useState<ListProps>({ ...initialData });

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const response = await request({
          url: `https://jsonplaceholder.typicode.com/posts/${match.params.id}`,
          method: 'GET',
        });
        getPost({ ...response });
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadData();
  }, [match.params.id]);

  console.log(post, 'WOOOOOT1');

  return (
    <div style={{ padding: 10 }}>
      <h1>
        <b>Title:</b>
        {post.title}
      </h1>
      <h2>
        <b>Info:</b>
        {post.body}
      </h2>
    </div>
  );
};

export default CRUDEdit;
