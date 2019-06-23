import React from 'react';
import { Spin } from 'antd';
import { Spinner } from './styled';

const Loader = () => {
  return (
    <Spinner>
      <Spin tip="Please wait" size="large" />
    </Spinner>
  );
};

export default Loader;
