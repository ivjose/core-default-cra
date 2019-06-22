import * as React from 'react';
import { TimePicker as AntTimePicker, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import moment from 'moment';
import { FormikFieldProps } from './FieldProps';
import { TimePickerProps as AntTimePickerProps } from 'antd/lib/time-picker';

const FormItem = Form.Item;

export type TimePickerProps = FormikFieldProps & AntTimePickerProps;

export const TimePicker = ({ name, label, required, ...restProps }: TimePickerProps) => (
  <Field name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntTimePicker
          value={value ? moment(value) : undefined}
          onChange={date => {
            setFieldValue(name, date ? date.toISOString() : null);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
