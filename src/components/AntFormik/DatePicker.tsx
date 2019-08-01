import * as React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import { Field, FieldProps } from 'formik';
import {
  DatePickerProps as AntDatePickerProps,
  MonthPickerProps as AntMonthPickerProps,
  RangePickerProps as AntRangePickerProps,
  WeekPickerProps as AntWeekPickerProps,
} from 'antd/lib/date-picker/interface';
import moment from 'moment';
import { FormikFieldProps } from './FieldProps';
import { FormItem } from './FormItem';

const { MonthPicker: AntMonthPicker, RangePicker: AntRangePicker, WeekPicker: AntWeekPicker } = AntDatePicker;

export type DatePickerProps = FormikFieldProps & AntDatePickerProps;

export const DatePicker = ({ name, required, label, ...restProps }: DatePickerProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
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
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
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
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntRangePicker
          name={name}
          value={value}
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

export type WeekPickerProps = FormikFieldProps & AntWeekPickerProps;

DatePicker.WeekPicker = ({ name, required, label, ...restProps }: WeekPickerProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntWeekPicker
          name={name}
          value={value}
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
