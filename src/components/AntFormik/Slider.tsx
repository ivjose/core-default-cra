import * as React from 'react';
import { Slider as AntSlider, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { FormikFieldProps } from './FieldProps';
import { SliderProps as AntSliderProps } from 'antd/lib/slider';

const FormItem = Form.Item;

export type SliderProps = FormikFieldProps & AntSliderProps;

export const Slider = ({ name, required, label, ...restProps }: SliderProps) => (
  <Field name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntSlider
          value={value}
          onChange={e => {
            setFieldValue(name, e.valueOf());
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
