import React, { useRef, useState, createRef } from 'react';
import { Input, Button, Icon } from 'antd';
import Table from 'components/Table';

const Reports = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState({});

  const handleSearch = (selectedKeys: any, confirm: any) => {
    confirm();

    setSearchText(selectedKeys[0]);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: {
      setSelectedKeys: any;
      selectedKeys: any;
      confirm: any;
      clearFilters: any;
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          // ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />

        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered: any) => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => alert('Filder down'));
      }
    },
    render: (text: any) => <div>Hello{text}</div>,
  });

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
            ...getColumnSearchProps('name'),
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
