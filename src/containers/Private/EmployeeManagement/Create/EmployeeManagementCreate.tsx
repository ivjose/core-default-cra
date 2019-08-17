import React from 'react';
import { Steps } from 'antd';
import EmployeeWizard from './EmployeeWizard';

const { Step } = Steps;

const EmployeeManagementCreate = () => {
  const [current, setCurrent] = React.useState(0);

  const onChangeSteps = (currentStep: number) => {
    console.log('onChange:', currentStep);

    setCurrent(currentStep);
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
      <EmployeeWizard />
    </div>
  );
};

export default EmployeeManagementCreate;
