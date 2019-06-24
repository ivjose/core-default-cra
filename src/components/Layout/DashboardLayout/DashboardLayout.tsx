import React from 'react';
import { Layout, Menu, Icon, Modal } from 'antd';
import { Link } from 'react-router-dom';

import { authContext } from 'contexts/Auth/AuthContext';

const { Header, Sider, Content } = Layout;

const DashboardLayout: React.FC = ({ children }) => {
  const [collapsed, setToggle] = React.useState(false);
  const { logoutUser } = React.useContext(authContext);

  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you want to Logout?',
      onOk() {
        logoutUser();
      },
      onCancel() {},
    });
  };

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 16 }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/dashboard">
              <Icon type="user" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/all-forms">
              <Icon type="video-camera" />
              <span>All Forms</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={showConfirm}>
            <Icon type="logout" />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setToggle(!collapsed)}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          Content
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
