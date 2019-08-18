/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { notification } from 'antd';
import { Formik, FormikProps, FormikActions } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import CRUDService from '../api/CRUDService';
import PostForms from '../components/PostForms';
import { CRUDSchema } from './validation';
import { FormProps, PostsListProps } from '../Types';
import { postsInitialData } from '../constants';

const CRUDList: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const [post, getPost] = React.useState<PostsListProps>({ ...postsInitialData });

  React.useEffect(() => {
    const loadData = async (id: string | number) => {
      try {
        const response = await CRUDService.getPost(id);
        getPost({ ...response });
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadData(match.params.id);
  }, [match.params.id]);

  console.log(post, 'WOOOOOT1');

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
        });
      }
      actions.setSubmitting(false);
    } catch (error) {
      console.log(error, 'Error');

      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        body: post.body,
        title: post.title,
        userId: post.userId ? post.userId.toString() : [''],
      }}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={CRUDSchema}
      render={(formikBag: FormikProps<FormProps>) => <PostForms {...formikBag} />}
    />
  );
};

export default CRUDList;
