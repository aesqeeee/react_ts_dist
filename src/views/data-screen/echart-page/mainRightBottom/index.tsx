import React, { memo } from "react";
import EchartsCpn from "../../c-cpns/echarts-cpn";
import Echart from "@/components/ECharts";
import { useAppSelector, shallowEqualApp } from "@/store";
import type { ECOption } from "@/components/ECharts/config/index";

const MainRightBottom = memo((props: any) => {
  const { option } = useAppSelector(
    (state: any) => ({
      option: state.mainRightBottom.option as ECOption
    }),
    shallowEqualApp
  );
  return (
    <EchartsCpn title="预约渠道统计" content={<Echart option={option} />} />
  );
});

export default MainRightBottom;
