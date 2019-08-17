import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import HeaderRightNav from './components/HeaderRightNav';

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

const DashboardLayout: React.FC = ({ children }) => {
  const [collapsed, setToggle] = React.useState(false);

  const routes = [
    {
      path: '/employee-management',
      name: 'Employee Management',
      icon: 'team',
    },
    {
      path: '/timekeeping',
      name: 'Timekeeping',
      icon: 'clock-circle',
    },
    {
      path: '/payroll',
      name: 'Payroll',
      icon: 'audit',
    },
    {
      path: '/reports',
      name: 'Reports',
      icon: 'area-chart',
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: 'setting',
      subRoutes: [
        {
          path: 'crud',
          name: 'CRUD',
        },
      ],
    },
  ];

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={220}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" style={{ height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 16 }} />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/dashboard">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>

          {routes.map(item => {
            if (item.subRoutes && item.subRoutes.length > 0) {
              return (
                <SubMenu
                  key={item.path}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {item.subRoutes.map(subItem => (
                    <Menu.Item key={`${item.path}/${subItem.path}`}>
                      <Link to={`${item.path}/${subItem.path}`}>
                        <span>{subItem.name}</span>
                      </Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Link>
              </Menu.Item>
            );
          })}
          <Menu.Item key="2">
            <Link to="/all-forms">
              <Icon type="form" />
              <span>All Forms</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 220, transition: 'all 0.2s' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setToggle(!collapsed)}
            style={{
              fontSize: 18,
              lineHeight: '64px',
              padding: '0 24px',
              cursor: 'pointer',
              transition: 'color 0.3s',
            }}
          />
          <HeaderRightNav />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            background: '#fff',
            minHeight: 'auto',
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
