import * as React from 'react';
import { Rate as AntRate, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { FormikFieldProps } from './FieldProps';
import { RateProps as AntRateProps } from 'antd/lib/rate';

const FormItem = Form.Item;

export const Rate: React.FC<FormikFieldProps & AntRateProps> = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntRate
          value={value}
          onChange={val => {
            setFieldValue(name, val.valueOf());
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
