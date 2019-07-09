import React from 'react';
import { Input, SubmitButton, Form } from 'components/AntFormik';
import { Button } from 'antd';

interface PageTwoProps {
  changePage: (val: boolean) => void;
}

const PageTwo: React.FC<PageTwoProps> = props => {
  const { changePage } = props;
  return (
    <Form>
      <h1>Page Two</h1>
      <Input label="favorite" name="favorite" type="text" placeholder="Favorite" />
      <Input label="explain" name="explain" type="text" placeholder="Explain" />

      <Button onClick={() => changePage(true)} block style={{ marginBottom: 20 }}>
        Back
      </Button>

      <SubmitButton disabled={false} block style={{ marginBottom: 20 }}>
        submit
      </SubmitButton>
    </Form>
  );
};

export default PageTwo;
