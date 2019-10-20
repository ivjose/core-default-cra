import React from 'react';
import { Query } from './Types';

const initialState = {
  _limit: 10,
  _page: 1,
  sortField: null,
  sortOrder: null,
};

const Tablehooks = () => {
  const [tables, setTables] = React.useState<Query>(initialState);
  return [tables, setTables];
};

export default Tablehooks;
