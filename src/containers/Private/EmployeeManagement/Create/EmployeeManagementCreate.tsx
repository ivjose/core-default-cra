import React from 'react';
import { Steps } from 'antd';
import Wizard from '././components/Wizard';
const { Step } = Steps;

const EmployeeManagementCreate = () => {
  const [current, setCurrent] = React.useState(0);

  const onChangeSteps = (current: number) => {
    console.log('onChange:', current);

    setCurrent(current);
  };
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
      <Steps size="small" current={current} onChange={onChangeSteps}>
        <Step title="Employee Details" />
        <Step title="Employee History" />
        <Step title="Educational Background" />
        <Step title="Dependents" />
        <Step title="Beneficiaries" />
      </Steps>
      <Wizard />
    </div>
  );
};

export default EmployeeManagementCreate;
