import { Button } from 'antd';
import { Field, FieldProps } from 'formik';
import * as React from 'react';
import { ButtonProps } from 'antd/lib/button';

export const ResetButton: React.FC<ButtonProps> = ({ children, ...restProps }) => (
  <Field>
    {({ form: { resetForm, dirty } }: FieldProps) => (
      <Button onClick={() => resetForm()} disabled={!dirty} type="default" {...restProps}>
        {children}
      </Button>
    )}
  </Field>
);
