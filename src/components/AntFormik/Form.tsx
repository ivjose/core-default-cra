import * as React from 'react';
import { Field, FieldProps } from 'formik';
import { Form as AntdForm } from 'antd';
import { FormProps } from 'antd/lib/form';

export const Form: React.FC<FormProps> = props => {
  return (
    <Field>
      {({ form: { handleReset, handleSubmit } }: FieldProps) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <AntdForm onReset={handleReset} onSubmit={handleSubmit as any} {...props} />
      )}
    </Field>
  );
};
