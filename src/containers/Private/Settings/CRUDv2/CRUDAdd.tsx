/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { notification } from 'antd';
import { Formik, FormikProps, FormikActions } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { delayAction } from 'utils/helpers';

import CRUDService from './api/CRUDService';
import PostForms from './components/PostForms';
import { CRUDSchema } from './validation';
import { FormProps } from './Types';

const CRUDAdd: React.FC<RouteComponentProps> = ({ history, match }) => {
  const handleSubmit = async (values: FormProps, actions: FormikActions<FormProps>) => {
    console.log({ values, actions });

    actions.setSubmitting(true);
    try {
      const response = await CRUDService.add({ ...values });

      if (response) {
        notification.success({
          message: 'Created',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          duration: 2,
        });
      }
      // history.push('/settings/crud');
      delayAction(2000, () => history.push('/settings/crud'));
      actions.setSubmitting(false);
    } catch (error) {
      console.log(error, 'Error');

      actions.setSubmitting(false);
    }
  };
  console.log(match, history, 'TEST123123');

  return (
    <Formik
      initialValues={{
        body: '',
        title: '',
        userId: [''],
      }}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={CRUDSchema}
      render={(formikBag: FormikProps<FormProps>) => <PostForms {...formikBag} />}
    />
  );
};

export default CRUDAdd;
