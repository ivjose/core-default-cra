import React from 'react';
import { Table as AntTable } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ColumnProps, TableProps } from 'antd/lib/table';

import { Query } from './Types';
import { getList } from './helpers';

interface TableProp extends RouteComponentProps {
  url: string;
  columns: any;
}

const Table: React.FC<TableProp> = React.memo(({ url, columns, location }) => {
  const [tableData, getTableData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [pagination, setPagination] = React.useState({ total: 0 });
  const [pageSize, setPageSize] = React.useState(1);
  const [pageLimit, setPageLimit] = React.useState(10);

  React.useEffect(() => {
    const fetchTableApi = async ({ params }: { params: Query }) => {
      setLoading(true);

      try {
        const response = await getList({ url, query: { ...params } });
        getTableData(response);
        setPagination({ total: 200 });
        setLoading(false);
      } catch (error) {
        setErrorMessage(error);
        setLoading(false);
      }
    };
    console.log(location, 'DDD =======');

    fetchTableApi({ params: { _page: pageSize, _limit: pageLimit } });
  }, [url, pageSize, pageLimit, location]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleTableChange = (pagination, filters, sorter) => {
  // const pager = { ...this.state.pagination };
  // pager.current = pagination.current;
  // this.setState({
  //   pagination: pager,
  // });
  // this.fetch({
  //   results: pagination.pageSize,
  //   page: pagination.current,
  //   sortField: sorter.field,
  //   sortOrder: sorter.order,
  //   ...filters,
  // });
  // };
  console.log(tableData);

  return (
    <div>
      {errorMessage}
      <AntTable rowKey="id" dataSource={tableData} columns={columns} pagination={pagination} loading={isLoading} />
    </div>
  );
});

export default withRouter(Table);
