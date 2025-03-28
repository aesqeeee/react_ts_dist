import React, { memo, useState } from "react";
import { Outlet } from "react-router-dom";
import { HeaderPage, SiderPage, FooterPage, TabsPage } from "@/layout/index";
import { Layout, theme } from "@/utils/antComponent";

import { HomePageWrapper } from "./style";

const homePage = memo((props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { Header, Content, Sider, Footer } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const onCollapse = (collapsed: boolean, type: String) => {
    setCollapsed(collapsed);
  };
  const siderWidth = 200;
  return (
    <HomePageWrapper>
      <Layout className="box-layout">
        <Header className="hander-container">
          <HeaderPage width={siderWidth}></HeaderPage>
        </Header>
        <Layout>
          <Sider
            width={siderWidth}
            className="sider"
            style={{ background: colorBgContainer }}
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
          >
            <SiderPage></SiderPage>
          </Sider>

          <Layout>
            <TabsPage />
            <Content
              style={{
                padding: 10,
                margin: 10,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
              }}
            >
              <Outlet />
            </Content>
            <Footer style={{ textAlign: "center", padding: "10px 50px 10px" }}>
              <FooterPage />
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </HomePageWrapper>
  );
});

export default homePage;
