import React from 'react';
import { FormikProps } from 'formik';
import { Icon } from 'antd';
import { Input, Form, ResetButton, SubmitButton } from 'components/AntFormik';
import { IFormValue } from '../Types';
// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 8 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 8 },
//   },
// };

const LoginForm: React.FC<FormikProps<IFormValue>> = () => {
  return (
    <Form>
      <Input
        name="username"
        type="text"
        placeholder="Enter your Username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      />
      <Input.Password
        name="password"
        type="password"
        placeholder="Enter your Password"
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
      />

      <SubmitButton disabled={false} block style={{ marginBottom: 20 }}>
        submit
      </SubmitButton>
      <ResetButton block>Reset</ResetButton>
    </Form>
  );
};

export default LoginForm;
