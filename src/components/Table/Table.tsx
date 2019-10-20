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

interface TableTypes {
  page: number | undefined;
  pageSize: number | undefined;
  data: any[];
  total: number;
  sorter?: number;
}

const Table: React.FC<TableProp & PaginationProps> = ({ url, columns, location, history, match }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [tables, setTables] = React.useState<TableTypes>({ page: 1, pageSize: 10, data: [], total: 150 });

  const getInitialPage = ({ params, returnValue }: { params: string; returnValue: string }): number | undefined => {
    const searchParams = new URLSearchParams(params);

    switch (returnValue) {
      case 'page':
        if (searchParams.get('_page')) {
          return Number(searchParams.get('_page'));
        }
        return 1;

      case 'pageSize':
        if (searchParams.get('_limit')) {
          return Number(searchParams.get('_limit'));
        }
        return 10;

      default:
        break;
      // return undefined;
    }
  };

  React.useEffect(() => {
    const fetchTableApi = async ({ params }: { params: Query }) => {
      try {
        const response = await getList({ url, query: { ...params } });
        setTables(prevTables => {
          return {
            ...prevTables,
            data: [...response],
            // total: 150,
          };
        });
      } catch (error) {
        setErrorMessage(error);
      } finally {
        setLoading(false);
      }
    };
    const initialPage = getInitialPage({ params: location.search, returnValue: 'page' });
    const initialPageSize = getInitialPage({ params: location.search, returnValue: 'pageSize' });
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    // onChangeUrl(initialPage, initialPageSize);
    setLoading(true);
    fetchTableApi({ params: { _page: initialPage, _limit: initialPageSize } });
  }, [url, location.search]);

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

  const onShowSizeChange = (current: number, pageSize: number): void => {
    console.log(current, pageSize);
    onChangeUrl(1, pageSize);
    setTables(prevTables => {
      return {
        ...prevTables,
        page: 1,
        pageSize: pageSize,
      };
    });
  };

  const onPaginationChange = (current: number, pageSize?: number | undefined): void => {
    console.log(current, pageSize);
    onChangeUrl(current, pageSize);
    setTables(prevTables => {
      return {
        ...prevTables,
        page: current,
        pageSize: pageSize,
      };
    });
  };

  console.log(tables.data, 'TABLIE LIST');

  return (
    <div>
      {errorMessage}
      <AntTable rowKey="id" dataSource={tables.data} columns={columns} pagination={false} loading={isLoading} />
      {tables.data && tables.data.length && (
        <Row type="flex" justify="end" style={{ marginTop: 24 }}>
          <Col>
            <Pagination
              showSizeChanger
              pageSizeOptions={['10', '25', '50', '100']}
              current={tables.page}
              pageSize={tables.pageSize}
              total={tables.total}
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
