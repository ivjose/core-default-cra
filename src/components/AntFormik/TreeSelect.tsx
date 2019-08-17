import * as React from 'react';
import { TreeSelect as AntTreeSelect } from 'antd';
import { Field, FieldProps } from 'formik';
import { TreeSelectProps as AntTreeSelectProps } from 'antd/lib/tree-select';
import { TreeNodeValue as AntTreeNodeValue } from 'antd/lib/tree-select/interface';
import { FormikFieldProps } from './FieldProps';
import { FormItem } from './FormItem';

export type TreeSelectProps = FormikFieldProps & AntTreeSelectProps<AntTreeNodeValue> & { children?: React.ReactNode };

export const TreeSelect = ({ name, required, label, ...restProps }: TreeSelectProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntTreeSelect
          value={value}
          onChange={val => setFieldValue(name, val.valueOf())}
          onBlur={() => setFieldTouched(name)}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);

TreeSelect.TreeNode = AntTreeSelect.TreeNode;
