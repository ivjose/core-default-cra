import * as React from 'react';
import { Transfer as AntTransfer } from 'antd';
import { Field, FieldProps } from 'formik';
import { TransferProps as AntTransferProps } from 'antd/lib/transfer';
import { FormikFieldProps } from './FieldProps';

import { FormItem } from './FormItem';

export const Transfer: React.FC<FormikFieldProps & AntTransferProps> = ({ name, required, label, ...restProps }) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem name={name} required={required} label={label}>
        <AntTransfer
          targetKeys={value || []}
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
