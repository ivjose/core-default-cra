import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const LoginLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        {children}
      </Content>
    </Layout>
  );
};

export default LoginLayout;
