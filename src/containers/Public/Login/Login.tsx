import * as React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';

import LoginForm from './components/LoginForm';

import { loginSchema } from './validation';
import { IFormValue } from './Types';
/** Context */
import { authContext } from 'contexts/Auth/AuthContext';

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

  return (
    <Formik
      initialValues={{
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }}
      onSubmit={handleSubmit}
      enableReinitialize={true}
      validationSchema={loginSchema}
      render={(formikBag: FormikProps<IFormValue>) => <LoginForm {...formikBag} />}
    />
  );
};

export default Login;
