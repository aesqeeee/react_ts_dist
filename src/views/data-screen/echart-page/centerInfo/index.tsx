import React, { memo } from "react";
import Echart from "@/components/ECharts";
// import { CenterInfoWrapper } from "./style"
import * as echarts from "echarts";
// import echarts from "@/components/ECharts/config/index"
import { mousePath, path } from "./assets/echartPath";
import type { ECOption } from "@/components/ECharts/config/index";
const CenterInfo = memo((props: any) => {
  const option = {
    // backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
    //   offset: 0,
    //   color: '#06798c'
    // }, {
    //     offset: 1,
    //     color: '#07162b'
    // }]),
    title: {
      text: "",
      top: 100,
      left: 100,
      textStyle: {
        fontWeight: "normal",
        fontSize: 40,
        color: "#fff",
        fontFamily: "STXinwei",
        textShadowColor: "#c30d23",
        textShadowBlur: "2",
        textShadowOffsetX: 1,
        textShadowOffsetY: 3
      }
    },
    grid: {
      left: "80%",
      top: "42%",
      bottom: 100
    },
    xAxis: {
      show: false,
      data: ["2017"]
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: "liquidFill",
        data: [0.7, 0.8, 0.75, 0.21, 0.2, 0.13, 0.1],
        radius: "80%",
        waveLength: "90%",
        waveHeight: "10",
        amplitude: 10,
        z: 2,
        outline: { show: false },
        backgroundStyle: {
          color: "#333",
          borderColor: "#fff",
          borderWidth: 1,
          shadowColor: "rgba(0, 0, 0, 0.4)",
          shadowBlur: 20
        },
        //path代码粘贴到此处,代码的多少取决于图形的复杂度
        shape: path,
        // color: ['#d9220d'],
        rippleEffect: {
          color: new echarts.graphic.LinearGradient(1, 0, 0.23, 1, [
            {
              offset: 0,
              color: "#FDD43F"
            },
            {
              offset: 0.3,
              color: "#33ffe6"
            },
            {
              offset: 0.5,
              color: "#049a8c"
            },
            {
              offset: 1,
              color: "#f63469"
            }
          ])
        },
        label: { formatter: "" }
      },
      {
        name: "",
        type: "effectScatter",
        rippleEffect: {
          period: 10,
          scale: 12,
          brushType: "stroke",
          color: new echarts.graphic.LinearGradient(1, 0, 0.3, 1, [
            {
              offset: 0,
              color: "rgba(93, 255, 248, .3)"
            },
            {
              offset: 0.3,
              color: "rgba(51, 255, 230, .3)"
            },
            {
              offset: 0.5,
              color: "rgba(4, 154, 140, .3)"
            },
            {
              offset: 1,
              color: "rgba(246, 52, 105, .3)"
            }
          ])
        },
        z: 0,
        symbolPosition: "end",
        symbol: path,
        symbolSize: [80, 100],
        symbolOffset: [0, -9],
        itemStyle: {
          color: "rgba(0, 0, 0, 0)"
        },
        data: [0]
      }
    ]
  } as ECOption;
  return (
    // <CenterInfoWrapper>

    // </CenterInfoWrapper>
    <Echart option={option} />
  );
});

export default CenterInfo;
