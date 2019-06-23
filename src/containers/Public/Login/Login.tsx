import * as React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';

import LoginForm from './components/LoginForm';

import { loginSchema } from './validation';
import { IFormValue } from './Types';
/** Context */
import { authContext } from 'contexts/Auth/AuthContext';

function Login() {
  const { auth, signInUser } = React.useContext(authContext);

  const handleSubmit = async (values: IFormValue, actions: FormikActions<IFormValue>) => {
    console.log({ values, actions });
    signInUser({ email: values.email, password: values.password });
    actions.setSubmitting(false);
  };

  console.log(auth, 'Logint!!');

  return (
    <div style={{ width: 500 }}>
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
    </div>
  );
}

export default Login;
