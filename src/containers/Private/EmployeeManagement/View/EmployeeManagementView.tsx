import React from 'react';
import { Icon, Tabs } from 'antd';
import EmployeeDetails from './components/EmployeeDetails';

const { TabPane } = Tabs;

const subRoutes = [
  {
    id: 1,
    component: <EmployeeDetails />,
    name: 'Employee Details',
    icon: 'solution',
  },
  {
    id: 2,
    component: <div>Employee History</div>,
    name: 'Employee History',
    icon: 'history',
  },
  {
    component: <div>Educational Background</div>,
    name: 'Educational Background',
    icon: 'book',
  },
  {
    component: <div>Dependents</div>,
    name: 'Dependents',
    icon: 'usergroup-add',
  },
  {
    component: <div>Beneficiaries</div>,
    name: 'Beneficiaries',
    icon: 'file-protect',
  },
];

const EmployeeManagementView = () => {
  return (
    <div>
      <Tabs defaultActiveKey="solution" size="small" animated={false} style={{ marginBottom: 0 }}>
        {subRoutes.map(tab => (
          <TabPane
            tab={
              <span>
                <Icon type={tab.icon} />
                {tab.name}
              </span>
            }
            key={tab.icon}
          >
            {tab.component}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default EmployeeManagementView;
