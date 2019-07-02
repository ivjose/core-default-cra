import * as React from 'react';
import { TimePicker as AntTimePicker } from 'antd';
import { Field, FieldProps } from 'formik';
import moment from 'moment';
import { FormikFieldProps } from './FieldProps';
import { TimePickerProps as AntTimePickerProps } from 'antd/lib/time-picker';
import { FormItem } from './FormItem';

export const TimePicker: React.FC<FormikFieldProps & AntTimePickerProps> = ({
  name,
  label,
  required,
  ...restProps
}) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
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
