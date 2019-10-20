import React from 'react';
import { Table as AntTable, Row, Col, Pagination } from 'antd';
import queryString from 'query-string';
import { withRouter, RouteComponentProps } from 'react-router-dom';
// import { ColumnProps, TableProps } from 'antd/lib/table';
import { PaginationProps } from 'antd/lib/pagination';

import { Query } from './Types';
import { getList } from './helpers';

interface TableProp extends RouteComponentProps {
  url: string;
  columns: any;
}

const Table: React.FC<TableProp & PaginationProps> = ({ url, columns, location, history, match }) => {
  const [tableData, getTableData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [page, setPage] = React.useState<number>();
  const [pageLimit, setPageLimit] = React.useState<number>();
  const [totalSize, setTotalSize] = React.useState<number>();

  React.useEffect(() => {
    // const { _page, _limit } = queryString.parse(location.search);
    const searchParams = new URLSearchParams(location.search);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    onChangeUrl(searchParams.get('_page'), searchParams.get('_limit'));

    if (searchParams.get('_page')) {
      setPage(Number(searchParams.get('_page')));
    }
    if (searchParams.get('_page')) {
      setPageLimit(Number(searchParams.get('_limit')));
    }

    // // return () => {
    //   cleanup
    // };
    console.log(page, pageLimit, Number(searchParams.get('_page')), Number(searchParams.get('_limit')), '====== Test');
  }, []);

  React.useEffect(() => {
    const fetchTableApi = async ({ params }: { params: Query }) => {
      setLoading(true);

      try {
        const response = await getList({ url, query: { ...params } });
        if (response) {
          getTableData(response);
          setTotalSize(150);
        }
        setLoading(false);
      } catch (error) {
        setErrorMessage(error);
        setLoading(false);
      }
    };
    // console.log(location, 'DDD =======');

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    onChangeUrl(page, pageLimit);
    if (page) {
      fetchTableApi({ params: { _page: page, _limit: pageLimit } });
    }
  }, [url, page, pageLimit]);

  const onShowSizeChange = (current: number, pageSize: number): void => {
    console.log(current, pageSize);

    setPage(1);
    setPageLimit(pageSize);
  };

  const onPaginationChange = (current: number, pageSize?: number | undefined): void => {
    console.log(current, pageSize);
    setPage(current);
    setPageLimit(pageSize);
  };

  const onChangeUrl = (current?: string | number | null, pageSize?: string | number | null): void => {
    const parsed = {
      // eslint-disable-next-line no-underscore-dangle
      _page: current,
      // eslint-disable-next-line no-underscore-dangle
      _limit: pageSize,
    };
    const params = queryString.stringify(parsed, { sort: false });

    history.push({
      pathname: match.url,
      search: params,
    });
  };
  console.log(tableData, 'TABLIE LIST');

  return (
    <div>
      {errorMessage}
      <AntTable rowKey="id" dataSource={tableData} columns={columns} pagination={false} loading={isLoading} />
      {tableData.length && (
        <Row type="flex" justify="end" style={{ marginTop: 24 }}>
          <Col>
            <Pagination
              showSizeChanger
              pageSizeOptions={['10', '25', '50', '100']}
              current={page}
              pageSize={pageLimit}
              total={totalSize}
              // showTotal={(totalPagination, range) => fnShowTotal(total, totalPagination, range)}
              onChange={onPaginationChange}
              onShowSizeChange={onShowSizeChange}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default React.memo(withRouter(Table));
// export default React.memo(Table, areEqual);
