import React, { memo, lazy } from "react";
import logo from "@/assets/svg/logo.svg";
import { HanderWrapper } from "./style";

interface IProps {
  width: number;
}

const LeftContent = lazy(() => import("./c-cpns/left-content"));

const HanderPage = memo((props: IProps) => {
  return (
    <HanderWrapper theme={{ width: props.width }}>
      <div className="HanderPage">
        <div className="demo-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="title">react_vite</div>
        </div>
        <div className="right-content">
          <LeftContent />
        </div>
      </div>
    </HanderWrapper>
  );
});

export default HanderPage;
