import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('This field is required!'),
  // username: Yup.string().required('This field is required!'),
  password: Yup.string()
    .min(4)
    .required('This field is required!'),
});
