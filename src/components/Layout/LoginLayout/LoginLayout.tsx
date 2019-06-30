import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Content, Footer } = Layout;

const LoginLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Content style={{ height: 'inherit' }}>
        <Row type="flex" justify="center" align="middle" style={{ height: 'inherit' }}>
          <Col span={5}>{children}</Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  );
};

export default LoginLayout;
