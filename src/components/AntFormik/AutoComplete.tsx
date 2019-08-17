import * as React from 'react';
import { AutoComplete as AntAutoComplete } from 'antd';
import { Field, FieldProps } from 'formik';
import { AutoCompleteProps as AntAutoCompleteProps } from 'antd/lib/auto-complete';
import { FormikFieldProps } from './FieldProps';
import { FormItem } from './FormItem';

export const AutoComplete: React.FC<FormikFieldProps & AntAutoCompleteProps> = ({
  name,
  required,
  label,
  ...restProps
}) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntAutoComplete
          value={value}
          onChange={val => setFieldValue(name, val.valueOf())}
          onBlur={() => setFieldTouched(name)}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
