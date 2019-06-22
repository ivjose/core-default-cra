import React from 'react';
import { Form, Checkbox as AntCheckbox } from 'antd';
import { CheckboxProps as AntCheckboxProps } from 'antd/lib/checkbox/Checkbox';
import { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox/Group';
import { FieldProps, FastField } from 'formik';
import { FormikFieldProps } from './FieldProps';

const FormItem = Form.Item;

export type CheckboxProps = FormikFieldProps & AntCheckboxProps;

export const Checkbox = ({ name, required, label, ...restProps }: CheckboxProps) => (
  <FastField name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntCheckbox
          name={name}
          checked={value}
          onChange={val => {
            setFieldValue(name, val.target.checked);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </FastField>
);

export type CheckboxGroupProps = FormikFieldProps & AntCheckboxGroupProps;

Checkbox.Group = ({ name, required, label, ...restProps }: CheckboxGroupProps) => (
  <FastField name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntCheckbox.Group
          value={value}
          onChange={val => {
            setFieldValue(name, val.length === 0 ? [''] : val);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </FastField>
);
