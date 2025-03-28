import React from "react";
import { Dropdown } from "@/utils/antComponent";
import type { MenuProps } from "@/utils/antComponent";
import {
  DownOutlined,
  ReloadOutlined,
  ExpandOutlined,
  FileExcelOutlined
} from "@/utils/antIcon";

import { DropdownWrapper } from "./style";
type menuType = "fileExcel";
const DropdownPage = React.memo((props: any) => {
  const handleMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: menuType
  ) => {
    console.log("handleMenu", e, type);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div style={{ color: "#606266" }}>
          <span style={{ marginRight: "5px" }}>
            <ReloadOutlined />
          </span>
          <span className="menu-span">刷新</span>
        </div>
      )
    },
    {
      key: "2",
      label: (
        <div style={{ color: "#606266" }}>
          <span style={{ marginRight: "5px" }}>
            <ExpandOutlined />
          </span>
          <span>关闭所有</span>
        </div>
      )
    },
    {
      type: "divider"
    },
    {
      key: "3",
      label: (
        <div
          style={{ color: "#606266" }}
          onClick={(e) => handleMenu(e, "fileExcel")}
        >
          <span style={{ marginRight: "5px" }}>
            <FileExcelOutlined />
          </span>
          <span>退出登录</span>
        </div>
      )
    }
  ];

  return (
    <DropdownWrapper>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        arrow
        trigger={["click"]}
      >
        <DownOutlined />
      </Dropdown>
    </DropdownWrapper>
  );
});

export default DropdownPage;
