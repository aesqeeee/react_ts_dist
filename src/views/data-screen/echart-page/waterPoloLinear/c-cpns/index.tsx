import React, { memo, useState } from "react";
import { ContentWrapper } from "./style";
import Echart from "@/components/ECharts";
import type { ECOption } from "@/components/ECharts/config/index";
interface Iprops {
  option: ECOption;
}

const Content = memo((props: Iprops) => {
  const [actualTotal, setActualTotal] = useState<string>("888888");
  return (
    <ContentWrapper>
      <div className="content-top">
        {actualTotal.split("").map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>人</div>
      </div>
      <div className="content">
        <Echart option={props.option} />
      </div>
    </ContentWrapper>
  );
});

export default Content;
