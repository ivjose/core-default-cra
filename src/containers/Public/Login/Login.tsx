import * as React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';

import LoginForm from './components/LoginForm';

import { loginSchema } from './validation';
import { IFormValue } from './Types';
/** Context */
import { authContext } from 'contexts/Auth/AuthContext';

const Login: React.FC = () => {
  const { signInUser, auth } = React.useContext(authContext);

  const handleSubmit = async (values: IFormValue, actions: FormikActions<IFormValue>) => {
    console.log({ values, actions });

    actions.setSubmitting(true);
    try {
      await signInUser({ username: values.username, password: values.password });
      actions.setSubmitting(false);
    } catch (error) {
      actions.setSubmitting(false);
    }
  };

  console.log(process.env.REACT_APP_API, process.env.NODE_ENV, 'asdasd');

  return (
    <Formik
      initialValues={{
        username: 'admin_user',
        password: 'p@ssw0rd',
      }}
      onSubmit={handleSubmit}
      enableReinitialize={true}
      validationSchema={loginSchema}
      render={(formikBag: FormikProps<IFormValue>) => <LoginForm {...formikBag} />}
    />
  );
};

export default Login;
