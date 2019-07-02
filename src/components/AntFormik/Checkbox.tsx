import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import { CheckboxProps as AntCheckboxProps } from 'antd/lib/checkbox/Checkbox';
import { CheckboxGroupProps as AntCheckboxGroupProps } from 'antd/lib/checkbox/Group';
import { FieldProps, Field } from 'formik';
import { FormikFieldProps } from './FieldProps';
import { FormItem } from './FormItem';

export type CheckboxProps = FormikFieldProps & AntCheckboxProps;

export const Checkbox = ({ name, required, label, ...restProps }: CheckboxProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntCheckbox
          name={name}
          checked={value}
          onChange={val => {
            setFieldValue(name, val.target.checked);
            setFieldTouched(name, val && true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

export type CheckboxGroupProps = FormikFieldProps & AntCheckboxGroupProps;

Checkbox.Group = ({ name, required, label, ...restProps }: CheckboxGroupProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntCheckbox.Group
          value={value}
          onChange={val => {
            setFieldValue(name, val.length === 0 ? [''] : val);
            setFieldTouched(name, val && true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
