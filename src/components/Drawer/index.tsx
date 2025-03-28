import React, { memo, useState } from "react";

import { Drawer, Spin } from "@/utils/antComponent";
export interface IProps {
  title: string;
  open: boolean;
  onClose: Function;
  content: React.ReactNode;
}

export const initailProps: IProps = {
  title: "标题",
  open: false,
  onClose: () => {},
  content: <div>内容</div>
};

const DrawerComponent = memo((props: IProps = initailProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const onClose = () => {
    props.onClose();
  };

  return (
    <div className="HelloWrold">
      <Drawer
        title={props.title}
        placement="right"
        destroyOnClose
        closable={false}
        onClose={onClose}
        open={props.open}
      >
        <Spin spinning={loading}>{props.content}</Spin>
      </Drawer>
    </div>
  );
});

export default DrawerComponent;
