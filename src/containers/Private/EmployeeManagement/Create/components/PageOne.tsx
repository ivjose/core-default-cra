import React from 'react';
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

const PageOne: React.FC<PageTwoProps> = props => {
  const { changePage } = props;
  return (
    <Form>
      <h1>Page one</h1>
      <Input label="first name" name="first" type="text" placeholder="First Name" />
      <Input label="last name" name="last" type="text" placeholder="Last Name" />

      <Button onClick={() => changePage(false)} block style={{ marginBottom: 20 }}>
        Next
      </Button>
      {/* <ResetButton block>Reset</ResetButton> */}
    </Form>
  );
};

export default PageOne;
