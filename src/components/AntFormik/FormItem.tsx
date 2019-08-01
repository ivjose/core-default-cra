import * as React from 'react';
// import get from 'lodash.get';
import { Field, FieldProps } from 'formik';
import { Form } from 'antd';
import { FormItemProps as AntFormItemProps } from 'antd/lib/form/FormItem';
import { loadDash } from 'utils/helpers';

const { get } = loadDash;

export type FormItemProps = { showValidateSuccess?: boolean; children: React.ReactNode } & {
  name: string;
} & AntFormItemProps;

export const FormItem = ({ name, hasFeedback, showValidateSuccess, children, ...restProps }: FormItemProps) => (
  <Field name={name}>
    {({ form: { errors = {}, touched = {} } }: FieldProps) => {
      const error = get(errors, name, false);
      const isTouched = get(touched, name, false) as boolean;
      const hasError = error !== false && isTouched;
      const isValid = !error && isTouched;

      return (
        <Form.Item
          validateStatus={hasError ? 'error' : isValid && showValidateSuccess ? 'success' : undefined}
          hasFeedback={hasFeedback && isValid}
          help={(hasError && error) || (isValid && '')}
          {...restProps}
        >
          {children}
        </Form.Item>
      );
    }}
  </Field>
);
