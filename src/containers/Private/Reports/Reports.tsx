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
            sorter: true,
          },
          {
            title: 'Title',
            dataIndex: 'title',
            sorter: true,
            filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
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
