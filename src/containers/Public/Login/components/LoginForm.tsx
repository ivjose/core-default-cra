import React from 'react';
import { FormikProps } from 'formik';
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
      <Input name="email" label="First name" type="email" placeholder="Enter your Username" />
      <Input.Password name="password" label="Password" type="password" placeholder="Enter your Password" />

      <SubmitButton disabled={false} block style={{ marginBottom: 20 }}>
        submit
      </SubmitButton>
      <ResetButton block>Reset</ResetButton>
    </Form>
  );
};

export default LoginForm;
