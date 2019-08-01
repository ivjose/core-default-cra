import React from 'react';
import { FormikProps } from 'formik';
import { Input, Form } from 'components/AntFormik';
import { Button } from 'antd';
interface IFormValue {
  first: string;
  last: string;
  favorite: string;
  explain: string;
}

interface PageTwoProps {
  changePage: (val: boolean) => void;
}

const PageOne: React.FC<PageTwoProps & FormikProps<IFormValue>> = props => {
  const { changePage, errors, handleSubmit, setErrors } = props;

  let formArray: string[] = ['first', 'last'];
  let errorsArray: string[] = Object.keys(errors);
  let formError = false;
  if (errorsArray.length !== 0) {
    if (formArray.some(e => errorsArray.includes(e))) {
      formError = false;
    } else {
      formError = true;
    }
  }
  // formArray.every(error => errorsArray.includes(error));

  console.log(formError, formArray.some(e => errorsArray.includes(e)), errorsArray, 'TEst');
  return (
    <Form>
      <h1>Page one</h1>
      <Input label="first name" name="first" type="text" placeholder="First Name" />
      <Input label="last name" name="last" type="text" placeholder="Last Name" />

      <Button
        onClick={() => (formError ? (changePage(false), setErrors({})) : (handleSubmit(), console.log('submit')))}
        block
        style={{ marginBottom: 20 }}
      >
        Next
      </Button>
      {/* <ResetButton block>Reset</ResetButton> */}
    </Form>
  );
};

export default PageOne;
