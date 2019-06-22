import * as React from 'react';
import { DatePicker as AntDatePicker, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import {
  DatePickerProps as AntDatePickerProps,
  MonthPickerProps as AntMonthPickerProps,
  RangePickerProps as AntRangePickerProps,
  WeekPickerProps as AntWeekPickerProps,
} from 'antd/lib/date-picker/interface';
import moment from 'moment';
import { FormikFieldProps } from './FieldProps';

const { MonthPicker: AntMonthPicker, RangePicker: AntRangePicker, WeekPicker: AntWeekPicker } = AntDatePicker;

const FormItem = Form.Item;

export type DatePickerProps = FormikFieldProps & AntDatePickerProps;

export const DatePicker = ({ name, required, label, ...restProps }: DatePickerProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched, touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntDatePicker
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

export type MonthPickerProps = FormikFieldProps & AntMonthPickerProps;

DatePicker.MonthPicker = ({ name, required, label, ...restProps }: MonthPickerProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched, touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntMonthPicker
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

export type RangePickerProps = FormikFieldProps & AntRangePickerProps;

DatePicker.RangePicker = ({ name, required, label, ...restProps }: RangePickerProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched, touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntRangePicker
          name={name}
          value={value}
          onChange={value => {
            setFieldValue(name, value);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

export type WeekPickerProps = FormikFieldProps & AntWeekPickerProps;

DatePicker.WeekPicker = ({ name, required, label, ...restProps }: WeekPickerProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched, touched, errors } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntWeekPicker
          name={name}
          value={value}
          onChange={value => {
            setFieldValue(name, value);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
