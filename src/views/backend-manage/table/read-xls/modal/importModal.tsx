import React, { memo, useRef, useState } from "react";

import LocalReadFile from "@/components/Import/localReadFile";
import ModalComponent from "@/components/Modal/index";
import { useMessage } from "@/hook/antdHook";
import type { IXLSXData } from "../config/type";
interface IProps {
  isModalOpen: boolean;
  closeModal: Function;
  getImportFileData: (data: IXLSXData[]) => void;
}

const initialProps: IProps = {
  isModalOpen: false,
  closeModal: () => {},
  getImportFileData: () => {}
};

const ImportModal = memo((props: IProps = initialProps) => {
  const modalRef = useRef<any>();
  const [xlsxDate, setXlsxDate] = useState<IXLSXData[]>([]);
  const { showMessage, contextHolder } = useMessage();
  const getFileDate = (fileDate: IXLSXData[]) => {
    setXlsxDate(fileDate);
  };

  const handleOk = () => {
    if (!xlsxDate.length) {
      showMessage("warning", "请选择要读取的文件");
      return;
    }
    props.getImportFileData(xlsxDate);
    handleCancel();
  };
  const handleCancel = () => {
    // handleCancel()
    props.closeModal();
  };

  return (
    <div>
      {contextHolder}
      <ModalComponent
        ref={modalRef}
        title="导入"
        isModalOpen={props.isModalOpen}
        modalContent={<LocalReadFile getFileDate={getFileDate} />}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
});

export default ImportModal;
