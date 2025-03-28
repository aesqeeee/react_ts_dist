import React, { memo, useRef, useState } from "react";
import { Form, Button } from "@/utils/antComponent";

import { UploadOutlined, LinkOutlined, DeleteOutlined } from "@/utils/antIcon";
import { LocalReadFileWrapper } from "./style";
import { useMessage } from "@/hook/antdHook";
import * as XLSX from "xlsx";
// import * from "@/assets/xlsx-"
type FieldType = {
  username?: string;
  password?: string;
};

interface IProps {
  getFileDate: Function;
}

const LocalReadFile = memo((props: IProps) => {
  const [fileName, setFileName] = useState<string>("");
  const [fileDate, setFileDate] = useState<any[]>([]);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { messageApi, contextHolder } = useMessage();

  const handleFileContainer = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const getFile = (fileEvent: Event | any) => {
    const chooseFile = fileEvent.target as HTMLInputElement;
    if (chooseFile.files) {
      const file = chooseFile.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const target = e.target as FileReader;
          const data = target.result;
          const workbook = XLSX.read(data, {
            type: "buffer"
          });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const fileContent = XLSX.utils.sheet_to_json(worksheet);
          setFileName(file.name);
          setFileDate(fileContent);
          props.getFileDate(fileContent);
        };
        reader.readAsArrayBuffer(file);
      }
    } else {
      messageApi.open({
        type: "warning",
        content: "请选择要读取的文件"
      });
    }
  };
  const handleDownFile = () => {
    const Adom = document.createElement("a");
    Adom.href = "/src/assets/xlsx/导入文件模板.xlsx";
    Adom.download = "导入文件模板.xlsx";
    Adom.style.display = "none";
    document.body.appendChild(Adom);
    Adom.click();
    Adom.remove();
  };
  const handleDeleteFile = () => {
    setFileName("");
    setFileDate([]);
  };

  const nameItems = () => {
    if (fileName.length) {
      return (
        <div className="file-list">
          <span className="icon link-icon">
            <LinkOutlined />
          </span>
          <span className="file-name">{fileName}</span>
          <span className="icon delete-icon" onClick={handleDeleteFile}>
            <DeleteOutlined />
          </span>
        </div>
      );
    }
  };
  return (
    <LocalReadFileWrapper>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
      >
        <Form.Item<FieldType>
          label="导入文件"
          name="username"
          rules={[{ required: true, message: "请上传需要导入的文件" }]}
        >
          <div className="file-container">
            <div className="file-box" onClick={handleFileContainer}>
              <span className="icon">
                <UploadOutlined />
              </span>
              <span>选择文件</span>
              <span className="input-file">
                <input
                  type="file"
                  ref={inputFileRef}
                  accept=".xls,.xlsx"
                  onChange={getFile}
                />
              </span>
            </div>
            {nameItems()}
          </div>
        </Form.Item>

        <Form.Item<FieldType> label="模板下载" rules={[{ required: false }]}>
          <Button type="link" onClick={handleDownFile}>
            点击下载模板文件
          </Button>
        </Form.Item>
      </Form>
    </LocalReadFileWrapper>
  );
});

export default LocalReadFile;
