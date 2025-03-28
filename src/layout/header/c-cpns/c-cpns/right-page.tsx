import React, { memo } from "react";
import avatar from "@/assets/images/avatar.gif";
import { RightPageWrapper } from "./style";

import { Dropdown } from "@/utils/antComponent";
import { UserOutlined, EditOutlined, PoweroffOutlined } from "@/utils/antIcon";
import type { MenuProps } from "@/utils/antComponent";

import {
  SearchPage,
  CharactersPage,
  LanguagePage,
  ThemePage,
  MessagePage,
  FullScreenPage
} from "./c-cpns";

const RightPage = memo((props: any) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div style={{ color: "#606266" }}>
          <span style={{ marginRight: "5px" }}>
            <UserOutlined />
          </span>
          <span className="menu-span">个人信息</span>
        </div>
      )
    },
    {
      key: "2",
      label: (
        <div style={{ color: "#606266" }}>
          <span style={{ marginRight: "5px" }}>
            <EditOutlined />
          </span>
          <span>修改密码</span>
        </div>
      )
    },
    {
      type: "divider"
    },
    {
      key: "3",
      label: (
        <div style={{ color: "#606266" }}>
          <span style={{ marginRight: "5px" }}>
            <PoweroffOutlined />
          </span>
          <span>退出登录</span>
        </div>
      )
    }
  ];
  return (
    <RightPageWrapper>
      <div className="left-icon">
        <CharactersPage />
        <LanguagePage />
        <SearchPage />
        <ThemePage />
        <MessagePage />
        <FullScreenPage />
      </div>
      <div className="right-icon">
        <div className="username">dsadsa</div>
        <div className="avatar box">
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            arrow
            trigger={["click"]}
          >
            <img src={avatar} className="avatar-logo" alt="" />
          </Dropdown>
        </div>
      </div>
    </RightPageWrapper>
  );
});

export default RightPage;
