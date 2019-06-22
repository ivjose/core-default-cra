import * as React from 'react';
import { Form, Input as AntInput } from 'antd';
import { Field, FieldProps } from 'formik';
import {
  InputProps as AntInputProps,
  PasswordProps as AntPasswordProps,
  TextAreaProps as AntTextAreaProps,
} from 'antd/lib/input';
import { FormikFieldProps } from './FieldProps';

const FormItem = Form.Item;

export type InputProps = FormikFieldProps & AntInputProps;

export const Input = ({ name, required, label, ...restProps }: InputProps) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur }, form: { touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntInput name={name} value={value} onChange={onChange} onBlur={onBlur} {...restProps} />
      </FormItem>
    )}
  </Field>
);

export type PasswordProps = FormikFieldProps & AntPasswordProps;

Input.Password = ({ name, required, label, ...restProps }: PasswordProps) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur }, form: { touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntInput.Password name={name} value={value} onChange={onChange} onBlur={onBlur} {...restProps} />
      </FormItem>
    )}
  </Field>
);

export type TextAreaProps = FormikFieldProps & AntTextAreaProps;

Input.TextArea = ({ name, required, label, ...restProps }: TextAreaProps) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur }, form: { touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntInput.TextArea name={name} value={value} onChange={onChange} onBlur={onBlur} {...restProps} />
      </FormItem>
    )}
  </Field>
);
