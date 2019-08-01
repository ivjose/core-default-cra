import * as Yup from 'yup';

export const employeeSchema = Yup.object().shape({
  first: Yup.string().required('This field is required!'),
  last: Yup.string().required('This field is required!'),
  favorite: Yup.string().required('This field is required!'),
  explain: Yup.string().required('This field is required!'),
});
