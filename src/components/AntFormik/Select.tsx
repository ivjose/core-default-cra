import * as React from 'react';
import { Select as AntSelect } from 'antd';
import { Field, FieldProps } from 'formik';
import { SelectProps as AntSelectProps, OptionProps } from 'antd/lib/select';
import { FormikFieldProps } from './FieldProps';

import { FormItem } from './FormItem';

export type SelectProps = FormikFieldProps & AntSelectProps & { children: React.ReactNode };

export const Select = ({ name, required, label, children, ...restProps }: SelectProps) => {
  return (
    <Field name={name}>
      {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
        <FormItem name={name} required={required} label={label}>
          <AntSelect
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(val: any) => setFieldValue(name, val)}
            onBlur={() => setFieldTouched(name)}
            value={value}
            {...restProps}
          >
            {children}
          </AntSelect>
        </FormItem>
      )}
    </Field>
  );
};

type Option = OptionProps & { label: React.ReactNode | string | number };

Select.renderOptions = (options: Option[]) =>
  options.map(({ label, ...restProps }, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <AntSelect.Option key={`select-option-Ant${index}`} {...restProps}>
      {label}
    </AntSelect.Option>
  ));

Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;
