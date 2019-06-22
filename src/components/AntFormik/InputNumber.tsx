import * as React from 'react';
import { InputNumber as AntInputNumber, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { InputNumberProps as AntInputNumberProps } from 'antd/lib/input-number';
import { FormikFieldProps } from './FieldProps';

const FormItem = Form.Item;

export type InputNumberProps = FormikFieldProps & AntInputNumberProps;

export const InputNumber = ({ name, required, label, ...restProps }: InputNumberProps) => (
  <Field name={name}>
    {({ field: { value, onBlur }, form: { setFieldValue, touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntInputNumber
          name={name}
          value={value}
          onChange={v => setFieldValue(name, v)}
          onBlur={onBlur}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
