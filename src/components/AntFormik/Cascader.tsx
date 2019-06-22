import * as React from 'react';
import { Cascader as AntCascader, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { FormikFieldProps } from './FieldProps';
import { CascaderProps as AntCascaderProps } from 'antd/lib/cascader';

const FormItem = Form.Item;

export type CascaderProps = FormikFieldProps & AntCascaderProps;

export const Cascader = ({ name, required, label, ...restProps }: CascaderProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntCascader value={value} onChange={value => setFieldValue(name, value)} {...restProps} />
      </FormItem>
    )}
  </Field>
);
