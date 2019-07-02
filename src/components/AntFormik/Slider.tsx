import * as React from 'react';
import { Slider as AntSlider } from 'antd';
import { Field, FieldProps } from 'formik';
import { FormikFieldProps } from './FieldProps';
import { SliderProps as AntSliderProps } from 'antd/lib/slider';
import { FormItem } from './FormItem';

export const Slider: React.FC<FormikFieldProps & AntSliderProps> = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntSlider
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
