import React, { memo, useState, useRef, useEffect } from "react";
import { ReadXlsWrapper } from "./style";
import ImportModal from "./modal/importModal";
import { Button } from "@/utils/antComponent";
import { UploadOutlined } from "@/utils/antIcon";
import { useMessage } from "@/hook/antdHook";
import TableComponent from "@/components/Table";
import { getColumns } from "./config/table.config";

import type { IXLSXData, DataType } from "./config/type";

const ReadXls = memo((props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const tableRef = useRef<any>();
  const { showMessage, contextHolder } = useMessage();
  const columns = getColumns();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const getImportFileData = (fileData: IXLSXData[]) => {
    tableRef.current.changeLoading(true);
    const keys: string[] = Object.keys(fileData[0]);
    if (
      !keys.includes("住址") &&
      !keys.includes("身高(m)") &&
      !keys.includes("体重(kg)")
    ) {
      showMessage(
        "warning",
        "导入文件有误，请下载模板文件，填入数据后再执行导入操作!"
      );
      return;
    }
    const data: DataType[] = [];
    for (const item of fileData) {
      data.push({
        key: item["姓名"],
        name: item["姓名"],
        age: item["年龄"],
        height: item["身高(m)"],
        weight: item["体重(kg)"],
        address: item["住址"],
        political: item["政治面貌"],
        education: item["学历"],
        school: item["学校"]
      });
    }
    setDataSource(data);
    tableRef.current.changeLoading(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    tableRef.current.changeLoading(false);
  };
  return (
    <ReadXlsWrapper>
      {contextHolder}
      <Button
        type="primary"
        className="button"
        icon={<UploadOutlined />}
        onClick={showModal}
      >
        导入
      </Button>
      <ImportModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        getImportFileData={getImportFileData}
      />
      <TableComponent
        ref={tableRef}
        columns={columns}
        dataSource={dataSource}
      />
    </ReadXlsWrapper>
  );
});

export default ReadXls;
