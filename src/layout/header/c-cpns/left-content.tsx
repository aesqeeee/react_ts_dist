import React, { memo, lazy } from "react";

import { LeftContentWrapper } from "./style";

const LeftPage = lazy(() => import("./c-cpns/left-page"));
const RightPage = lazy(() => import("./c-cpns/right-page"));

const LeftContent = memo((props: any) => {
  return (
    <LeftContentWrapper>
      <div className="left">
        <LeftPage />
      </div>
      <div className="right">
        <RightPage />
      </div>
    </LeftContentWrapper>
  );
});

export default LeftContent;
