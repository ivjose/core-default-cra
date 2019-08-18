import React from 'react';
import { FormikProps } from 'formik';
import { Input, Form, ResetButton, SubmitButton } from 'components/AntFormik';

import UserSelect from './UserSelect';

import { FormProps } from '../Types';

const PostForms: React.FC<FormikProps<FormProps>> = () => {
  return (
    <Form>
      <Input name="title" label="Title" type="text" placeholder="Enter your Username" />
      <Input.TextArea name="body" label="Comments" placeholder="Enter your Comments" />
      <UserSelect />
      <SubmitButton disabled={false}>submit</SubmitButton>
      <ResetButton>Reset</ResetButton>
    </Form>
  );
};

export default PostForms;
