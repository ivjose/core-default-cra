import * as React from 'react';
import { Transfer as AntTransfer, Form } from 'antd';
import { Field, FieldProps } from 'formik';
import { FormikFieldProps } from './FieldProps';
import { TransferProps as AntTransferProps } from 'antd/lib/transfer';

const FormItem = Form.Item;

export type TransferProps = FormikFieldProps & AntTransferProps;

export const Transfer = ({ name, required, label, ...restProps }: TransferProps) => (
  <Field name={name}>
    {({ field: { value }, form: { touched, errors, setFieldValue, setFieldTouched } }: FieldProps) => (
      <FormItem
        required={required}
        label={label}
        validateStatus={touched[name] && errors[name] ? 'error' : ''}
        help={touched[name] && errors[name]}
      >
        <AntTransfer
          targetKeys={value || []}
          onChange={v => {
            setFieldValue(name, v);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      </FormItem>
    )}
  </Field>
);
