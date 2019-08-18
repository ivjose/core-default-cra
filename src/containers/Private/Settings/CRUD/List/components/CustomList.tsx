import React from 'react';
import { List } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const CustomList = ({ list, match }: any) => {
  console.log(match.path, 'DDDDD ===');
  return (
    <div style={{ padding: 20 }}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        rowKey="id"
        renderItem={(item: any) => (
          <List.Item
            actions={[
              <Link to={`${match.path}/view/${item.id}`}>view</Link>,
              <Link to={`${match.path}/edit/${item.id}`}>edit</Link>,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.body} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default withRouter(CustomList);
