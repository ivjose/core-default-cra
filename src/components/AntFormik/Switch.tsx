import * as React from 'react';
import { Switch as AntSwitch } from 'antd';
import { Field, FieldProps } from 'formik';
import { SwitchProps as AntSwitchProps } from 'antd/lib/switch';
import { FormikFieldProps } from './FieldProps';
import { FormItem } from './FormItem';

export const Switch: React.FC<FormikFieldProps & AntSwitchProps> = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
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
