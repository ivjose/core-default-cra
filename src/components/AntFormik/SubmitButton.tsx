import { Button } from 'antd';
import { Field, FieldProps } from 'formik';
import * as React from 'react';
import { ButtonProps } from 'antd/lib/button';

export const SubmitButton: React.FC<ButtonProps & { onSuccess?: () => void }> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess,
  ...restProps
}) => (
  <Field>
    {({ form: { isSubmitting, isValid } }: FieldProps) => (
      <Button
        loading={isSubmitting}
        disabled={!isValid || isSubmitting}
        type="primary"
        htmlType="submit"
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
);
