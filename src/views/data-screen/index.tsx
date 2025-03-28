import React, { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import useScalePage from "@/hook/useScalePage";
import { HOME_PATH } from "@/utils/globalVariable";

import { DataScreenWrapper } from "./style";
import { formatTime } from "@/utils/formatTime";
import {
  WaterPoloLinear,
  GenderRatioBar,
  AgeRatioPie,
  MainRightTop,
  MainRightCenter,
  MainRightBottom,
  CenterMap,
  CenterInfo
} from "./echart-page/index";

const dataScreen = memo((props: any) => {
  const dataScreenRef = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState<any>(0);
  const [curTime, setCurTime] = useState("2023-10-11 13-22-33");
  const navigate: NavigateFunction = useNavigate();

  useScalePage(dataScreenRef);
  useEffect(() => {
    setTimer(
      setInterval(() => {
        setCurTime(formatTime());
      }, 1000)
    );
    return () => {
      clearInterval(timer);
    };
  }, []);
  const toPage = (route: string | undefined = "/helloWorld") => {
    navigate(route);
  };
  return (
    <DataScreenWrapper>
      <div className="power-view">
        <div className="dataScreen-content" ref={dataScreenRef}>
          <div className="dataScreen-hander">
            <div className="left">
              <span
                className="hander-btn header-homePage"
                onClick={() => toPage(HOME_PATH)}
              >
                首页
              </span>
            </div>
            <div className="center">
              <div className="hander-title-text">
                <span>智慧旅游可视化大数据展示平台</span>
              </div>
              <div className="hander-warning">平台高峰预警信息（2条）</div>
            </div>
            <div className="right">
              <span className="hander-btn header-report">统计报告</span>
              <span className="header-time">当前时间：{curTime}</span>
            </div>
          </div>
          <div className="dataScreen-main">
            <div className="main-left">
              <div className="main-left-top main-left-box">
                <WaterPoloLinear />
              </div>
              <div className="main-left-center main-left-box">
                <GenderRatioBar />
              </div>
              <div className="main-left-bopttom main-left-box">
                <AgeRatioPie />
              </div>
            </div>
            <div className="main-center">
              <div className="main-center-map">
                <CenterMap />
              </div>
              <div className="main-center-info">
                <CenterInfo />
              </div>
            </div>
            <div className="main-right">
              <div className="main-left-top main-left-box">
                <MainRightTop />
              </div>
              <div className="main-left-center main-left-box">
                <MainRightCenter />
              </div>
              <div className="main-left-bopttom main-left-box">
                <MainRightBottom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DataScreenWrapper>
  );
});

export default dataScreen;
