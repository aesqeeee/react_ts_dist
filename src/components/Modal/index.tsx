import React, { memo, useImperativeHandle, forwardRef, useState } from "react";
import { Modal, Spin, Button } from "@/utils/antComponent";
interface IProps {
  title: string;
  isModalOpen: boolean;
  handleOk:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  handleCancel:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  width?: string | number;
  modalContent: React.ReactNode;
  showMask?: boolean;
}

const initialProps: IProps = {
  title: "标题",
  isModalOpen: false,
  handleOk: () => {},
  handleCancel: () => {},
  width: 520,
  modalContent: <div>默认内容</div>,
  showMask: true
};

const ModalComponent = forwardRef((props: IProps = initialProps, ref) => {
  const [loading, setLoading] = useState<boolean>(false);
  useImperativeHandle(ref, () => {
    return {
      changeLoading(loading: boolean) {
        setLoading(loading);
      }
    };
  });
  const footerElement = () => {
    return (
      <div>
        <Button
          loading={loading}
          style={{ marginRight: "10px" }}
          onClick={props.handleCancel}
        >
          取消
        </Button>
        <Button type="primary" loading={loading} onClick={props.handleOk}>
          确定
        </Button>
      </div>
    );
  };
  return (
    <Modal
      title={props.title}
      open={props.isModalOpen}
      width={props.width}
      confirmLoading={loading}
      destroyOnClose
      keyboard
      mask={props.showMask}
      footer={footerElement}
      onCancel={props.handleCancel}
    >
      <Spin spinning={loading}>{props.modalContent}</Spin>
    </Modal>
  );
});

export default ModalComponent;
