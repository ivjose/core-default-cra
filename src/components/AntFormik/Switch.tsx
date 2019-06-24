import * as React from 'react';
import { Switch as AntSwitch, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { SwitchProps as AntSwitchProps } from 'antd/lib/switch';
import { FormikFieldProps } from './FieldProps';

const FormItem = Form.Item;

export const Switch: React.FC<FormikFieldProps & AntSwitchProps> = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntSwitch
          checked={value}
          onChange={val => {
            setFieldValue(name, val);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
