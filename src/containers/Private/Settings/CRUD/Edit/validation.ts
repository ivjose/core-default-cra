import * as Yup from 'yup';

export const CRUDSchema = Yup.object().shape({
  title: Yup.string()
    .min(4)
    .required('This field is required!'),
  body: Yup.string()
    .min(4)
    .required('This field is required!'),
  userId: Yup.string().required('This field is required!'),
});
