import React from 'react';
import Table from 'components/Table';

const Reports = () => {
  return (
    <div>
      Reports
      <Table
        url="posts"
        columns={[
          {
            title: 'ID',
            dataIndex: 'id',
          },
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Body',
            dataIndex: 'body',
          },
        ]}
      />
    </div>
  );
};

export default Reports;
