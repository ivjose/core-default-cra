import React from 'react';
import { Modal as AntModal, Button } from 'antd';

interface ModalProps {
  text?: string;
  path: string;
  btnText?: string;
}

const Modal: React.FC<ModalProps> = ({ text = 'test', path, btnText = 'click me' }) => {
  const [visible, setVisible] = React.useState(false);
  console.log(path);

  return (
    <>
      <AntModal
        visible={visible}
        title="Title"
        onOk={() => setVisible(!visible)}
        onCancel={() => setVisible(!visible)}
        footer={[
          <Button key="back" onClick={() => setVisible(!visible)}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={() => setVisible(!visible)}>
            Submit
          </Button>,
        ]}
      >
        {text}
      </AntModal>
      <Button onClick={() => setVisible(!visible)}>{btnText}</Button>
    </>
  );
};

const ModalButton = React.memo(Modal);

export default ModalButton;
