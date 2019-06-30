import * as React from 'react';
import { Radio as AntRadio } from 'antd';
import { Field, FieldProps } from 'formik';
import { RadioGroupProps as AntRadioGroupProps } from 'antd/lib/radio/interface';
import { FormikFieldProps } from './FieldProps';
import { FormItem } from './FormItem';

export type RadioGroupProps = FormikFieldProps & AntRadioGroupProps;

export const Radio = ({ name, required, label, ...restProps }: RadioGroupProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntRadio
          value={value}
          onChange={val => {
            setFieldValue(name, val.target.value);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Radio.Group = ({ name, required, label, ...restProps }: RadioGroupProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntRadio.Group
          value={value}
          onChange={val => {
            setFieldValue(name, val.target.value);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

Radio.Button = AntRadio.Button;
