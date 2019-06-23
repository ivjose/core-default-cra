import React from 'react';

import { Input, Form, ResetButton, SubmitButton } from 'components/AntFormik';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};

const LoginForm: React.FC<any> = () => {
  return (
    <Form {...formItemLayout}>
      <Input name="email" label="First name" type="email" placeholder="Enter your Username" />
      <Input.Password name="password" label="Password" type="password" placeholder="Enter your Password" />

      <SubmitButton disabled={false}>submit</SubmitButton>
      <ResetButton>Reset</ResetButton>
    </Form>
  );
};

export default LoginForm;
