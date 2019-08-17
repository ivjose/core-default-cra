import * as React from 'react';
import { Cascader as AntCascader } from 'antd';
import { Field, FieldProps } from 'formik';
import { CascaderProps as AntCascaderProps } from 'antd/lib/cascader';
import { FormikFieldProps } from './FieldProps';
import { FormItem } from './FormItem';

export const Cascader: React.FC<FormikFieldProps & AntCascaderProps> = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntCascader value={value} onChange={val => setFieldValue(name, val)} {...restProps} />
      </FormItem>
    )}
  </Field>
);
