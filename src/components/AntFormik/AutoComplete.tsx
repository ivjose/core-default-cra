import * as React from 'react';
import { AutoComplete as AntAutoComplete, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { FormikFieldProps } from './FieldProps';
import { AutoCompleteProps as AntAutoCompleteProps } from 'antd/lib/auto-complete';

const FormItem = Form.Item;

export type AutoCompleteProps = FormikFieldProps & AntAutoCompleteProps;

export const AutoComplete = ({ name, required, label, ...restProps }: AutoCompleteProps) => (
  <Field name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
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
