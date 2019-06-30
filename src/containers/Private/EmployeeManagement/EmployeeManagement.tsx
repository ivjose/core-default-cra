import React from 'react';
import { Menu, Icon } from 'antd';

const EmployeeManagement = () => {
  const subRoutes = [
    {
      path: '/details',
      name: 'Employee Details',
      icon: 'solution',
    },
    {
      path: '/history',
      name: 'Employee History',
      icon: 'history',
    },
    {
      path: '/educational-background',
      name: 'Educational Background',
      icon: 'book',
    },
    {
      path: '/dependents',
      name: 'Dependents',
      icon: 'usergroup-add',
    },
    {
      path: '/beneficiaries',
      name: 'Beneficiaries',
      icon: 'file-protect',
    },
  ];
  return (
    <div>
      <Menu selectedKeys={['/details']} mode="horizontal">
        {subRoutes.map(route => (
          <Menu.Item key={route.path}>
            <Icon type={route.icon} />
            {route.name}
          </Menu.Item>
        ))}
      </Menu>
      EmployeeManagement
    </div>
  );
};

export default EmployeeManagement;
