import * as React from 'react';
import { InputNumber as AntInputNumber } from 'antd';
import { Field, FieldProps } from 'formik';
import { InputNumberProps as AntInputNumberProps } from 'antd/lib/input-number';
import { FormikFieldProps } from './FieldProps';
import { FormItem } from './FormItem';

export const InputNumber: React.FC<FormikFieldProps & AntInputNumberProps> = ({
  name,
  required,
  label,
  ...restProps
}) => (
  <Field name={name}>
    {({ field: { value, onBlur }, form: { setFieldValue } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntInputNumber
          name={name}
          value={value}
          onChange={val => setFieldValue(name, val)}
          onBlur={onBlur}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
