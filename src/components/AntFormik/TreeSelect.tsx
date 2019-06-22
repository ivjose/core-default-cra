import * as React from 'react';
import { TreeSelect as AntTreeSelect, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { FormikFieldProps } from './FieldProps';
import { TreeSelectProps as AntTreeSelectProps } from 'antd/lib/tree-select';

const FormItem = Form.Item;

export type TreeSelectProps = FormikFieldProps & AntTreeSelectProps & { children?: React.ReactNode };

export const TreeSelect = ({ name, required, label, ...restProps }: TreeSelectProps) => (
  <Field name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntTreeSelect
          value={value}
          onChange={e => setFieldValue(name, e.valueOf())}
          onBlur={e => setFieldTouched(name)}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

TreeSelect.TreeNode = AntTreeSelect.TreeNode;
