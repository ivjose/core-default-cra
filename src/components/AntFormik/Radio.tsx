import * as React from 'react';
import { Radio as AntRadio, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { RadioGroupProps as AntRadioGroupProps } from 'antd/lib/radio/interface';
import { FormikFieldProps } from './FieldProps';

const FormItem = Form.Item;

export type RadioGroupProps = FormikFieldProps & AntRadioGroupProps;

export const Radio = ({ name, required, label, ...restProps }: RadioGroupProps) => (
  <Field name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
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
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
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
