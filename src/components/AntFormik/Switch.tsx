import * as React from 'react';
import { Switch as AntSwitch, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { SwitchProps as AntSwitchProps } from 'antd/lib/switch';
import { FormikFieldProps } from './FieldProps';

const FormItem = Form.Item;

export type SwitchProps = FormikFieldProps & AntSwitchProps;

export const Switch = ({ name, required, label, ...restProps }: SwitchProps) => (
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
          onChange={v => {
            setFieldValue(name, v);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
