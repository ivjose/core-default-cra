import * as React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';

import { authContext } from 'contexts/Auth/AuthContext';
import LoginForm from './components/LoginForm';

import { loginSchema } from './validation';
import { IFormValue } from './Types';
/** Context */

const Login: React.FC = () => {
  const { signInUser } = React.useContext(authContext);

  const handleSubmit = async (values: IFormValue, actions: FormikActions<IFormValue>) => {
    console.log({ values, actions });

    actions.setSubmitting(true);
    try {
      await signInUser({ email: values.email, password: values.password });
      actions.setSubmitting(false);
    } catch (error) {
      actions.setSubmitting(false);
    }
  };

  console.log(process.env.REACT_APP_API, process.env.NODE_ENV, 'asdasd');

  return (
    <Formik
      initialValues={{
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={loginSchema}
      render={(formikBag: FormikProps<IFormValue>) => <LoginForm {...formikBag} />}
    />
  );
};

export default Login;
