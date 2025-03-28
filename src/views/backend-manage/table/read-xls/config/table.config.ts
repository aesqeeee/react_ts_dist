import type { ColumnsType } from "antd/es/table";

import { DataType } from "./type";

export function getColumns(): ColumnsType<DataType> {
  return [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      align: "center"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      align: "center"
    },
    {
      title: "身高(m)",
      dataIndex: "height",
      key: "height",
      align: "center"
    },
    {
      title: "体重(kg)",
      dataIndex: "weight",
      key: "weight",
      align: "center"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      align: "center"
    },
    {
      title: "政治面貌",
      dataIndex: "political",
      key: "political",
      align: "center"
    },
    {
      title: "学历",
      dataIndex: "education",
      key: "education",
      align: "center"
    },
    {
      title: "学校",
      dataIndex: "school",
      key: "school",
      align: "center"
    }
  ];
}
