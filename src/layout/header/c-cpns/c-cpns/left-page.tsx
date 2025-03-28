import React, { memo } from "react";
import { Breadcrumb } from "@/utils/antComponent";
import { LeftPageWrapper } from "./style";
const LeftPage = memo((props: any) => {
  return (
    <LeftPageWrapper>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "首页"
          },
          {
            title: "数据大屏"
          },
          {
            title: "Application List"
          },
          {
            title: "An Application"
          }
        ]}
      />
    </LeftPageWrapper>
  );
});

export default LeftPage;
