import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CRUDService from './api/CRUDService';

import { PostsListProps } from './Types';
import { postsInitialData } from './constants';

const CURDView: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const [post, getPost] = React.useState<PostsListProps>({ ...postsInitialData });

  React.useEffect(() => {
    const loadData = async (id: string | number) => {
      try {
        const response = await CRUDService.getPost(id);
        getPost({ ...response });
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadData(match.params.id);
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

export default CURDView;
