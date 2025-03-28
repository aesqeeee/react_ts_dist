import React, { memo, useState } from "react";
import EchartsCpn from "../../c-cpns/echarts-cpn";

import Content from "./c-cpns/index";
import type { ECOption } from "@/components/ECharts/config/index";
const WaterPoloLinear = memo((props: any) => {
  const option = {
    grid: {
      top: "0",
      left: "0px",
      right: "0px",
      bottom: "0",
      containLabel: true
    },
    polar: {
      radius: ["75%", "85%"],
      center: ["50%", "50%"]
    },
    angleAxis: {
      max: 120,
      clockwise: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      },
      startAngle: 188
    },
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        type: "liquidFill",
        radius: "80%",
        data: [0.5, 0.45, 0.4, 0.3],
        label: {
          color: "#294D99",
          insideColor: "#fff",
          fontSize: 20
        }
      },
      {
        type: "pie",
        radius: ["80%", "80%"],
        center: ["50%", "50%"],
        z: 1,
        label: { show: false },
        silent: true,
        itemStyle: {
          borderWidth: 2,
          borderType: [8, 10],
          borderDashOffset: 15,
          borderColor: "#31d8d5",
          color: "#11144e",
          borderCap: "round"
        },
        data: [100]
      },
      {
        type: "bar",
        data: [55],
        z: 10,
        coordinateSystem: "polar",
        roundCap: true,
        color: "#31d8d5"
      }
    ]
  } as ECOption;

  return (
    <EchartsCpn title="实时游客统计" content={<Content option={option} />} />
  );
});

export default WaterPoloLinear;
