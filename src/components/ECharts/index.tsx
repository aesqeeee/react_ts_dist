import React, { memo, useRef, useEffect, useState } from "react";
import { EchartsWrapper } from "./style";
import type { EChartsType } from "echarts";
import echarts from "./config/index";
import type { ECOption } from "./config/index";

interface Iprops {
  option: ECOption;
}

const Echart = memo((props: Iprops) => {
  const refDom = useRef<HTMLDivElement>(null);
  const initStyle = { width: "100%", height: "100%" };
  const [chart, setChart] = useState<EChartsType | echarts.ECharts>();
  useEffect(() => {
    setTimeout(() => {
      if (refDom.current) {
        const myChart = echarts.init(refDom.current);
        setChart(myChart);
        myChart.on("click", (params: any) => {
          console.log("echart click", params);
        });
      }
      // chart.setOption(option);
    }, 500);
  }, []);
  useEffect(() => {
    if (chart) {
      chart.setOption(props.option);
    }
    return () => {
      chart?.dispose();
    };
  }, [chart]);
  return (
    <EchartsWrapper>
      <div className="content" ref={refDom} style={initStyle}></div>
    </EchartsWrapper>
  );
});

export default Echart;
