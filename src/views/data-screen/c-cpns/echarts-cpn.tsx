import React, { memo } from "react";
import type { ReactNode } from "react";
import { EchartsCpnStyleWrapper } from "./echarts-cpn-style";
import { getDataScreenImageUrl } from "@/utils/getFiles";

interface IProps {
  title: string;
  content: ReactNode;
  rightTopInfo?: ReactNode;
}

const EchartsCpn = memo((props: IProps) => {
  return (
    <EchartsCpnStyleWrapper>
      <div className="echart-container">
        <div className="title">{props.title}</div>
        <div className="title-img">
          <img
            src={getDataScreenImageUrl("dataScreen/dataScreen-title.png")}
            alt=""
          />
        </div>
        <div className="right-info">{props.rightTopInfo}</div>
        <div className="echart-content">{props.content}</div>
      </div>
    </EchartsCpnStyleWrapper>
  );
});

export default EchartsCpn;
