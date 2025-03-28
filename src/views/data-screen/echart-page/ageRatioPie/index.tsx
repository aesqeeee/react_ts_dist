import React, { memo } from "react";
import EchartsCpn from "../../c-cpns/echarts-cpn";
import Echart from "@/components/ECharts";
import type { ECOption } from "@/components/ECharts/config/index";

interface IChartProp {
  value: number;
  name: string;
}

const AgeRatioPie = memo((props: any) => {
  const chartData: IChartProp[] = [
    {
      value: 200,
      name: "10岁以下"
    },
    {
      value: 110,
      name: "10 - 18岁"
    },
    {
      value: 150,
      name: "18 - 30岁"
    },
    {
      value: 310,
      name: "30 - 40岁"
    },
    {
      value: 250,
      name: "40 - 60岁"
    },
    {
      value: 260,
      name: "60岁以上"
    }
  ];
  const colorList = [
    "#115FEA",
    "#10EBE3",
    "#10A9EB",
    "#EB9C10",
    "#2E10EB",
    "#9B10EB"
  ];
  const sum = chartData.reduce((per, cur) => per + cur.value, 0);
  const gap = (1 * sum) / 100;
  const pieData1 = [];
  const pieData2 = [];
  const pieData3 = [];
  const pieData4 = [];
  let total = 0;
  const gapData = {
    name: "",
    value: gap,
    itemStyle: {
      color: "transparent"
    }
  };
  for (let i = 0; i < chartData.length; i++) {
    // 第一圈数据
    pieData1.push({
      ...chartData[i],
      itemStyle: {
        // borderRadius: 10
      }
    });
    pieData1.push(gapData);

    // 第二圈数据
    pieData2.push({
      ...chartData[i],
      itemStyle: {
        color: colorList[i],
        opacity: 0.5
      }
    });
    pieData2.push(gapData);

    // 第三圈数据
    pieData3.push({
      ...chartData[i],
      itemStyle: {
        color: colorList[i],
        opacity: 0.3
      }
    });
    pieData3.push(gapData);

    // 第四圈数据
    pieData4.push({
      ...chartData[i],
      itemStyle: {
        color: colorList[i],
        opacity: 0.2
      }
    });
    pieData4.push(gapData);
    total += chartData[i].value;
  }
  const option = {
    backgroundColor: "#0F141B",
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0,.8)",
      textStyle: {
        color: "#fff"
      }
    },
    legend: {
      show: true,
      right: "2%",
      top: "center",
      align: "right",
      width: 200,
      itemGap: 18,
      // icon: "rect",
      itemWidth: 13,
      itemHeight: 7,
      // symbolKeepAspect: false,

      textStyle: {
        color: "#D8DDE3",
        rich: {
          name: {
            verticalAlign: "right",
            align: "left",
            width: 66,
            fontSize: 14,
            color: "#D8DDE3"
          },
          percent: {
            padding: [0, 0, 0, 8],
            color: "#D8DDE3"
          }
        },
        borderWidth: 53 // 间距的宽度
      },
      formatter: (name: string) => {
        // console.log(name)
        // console.log(chartData)
        const item = chartData.find((i) => {
          return i.name === name;
        });
        const p = ((item!.value / sum) * 100).toFixed(0);
        return "{name|" + name + "}" + item!.value + "人{percent|" + p + "%}";
      }
    },
    grid: {
      top: 35,
      right: 30,
      bottom: 20,
      left: 30
    },
    color: colorList,
    series: [
      {
        name: "",
        type: "pie",
        radius: ["66%", "72%"],
        center: ["36%", "45%"],
        label: {
          show: true,
          position: "center",
          fontFamily: "fzzz",
          color: "#fff",
          fontSize: 26,
          fontWeight: 900,
          formatter: (params: any) => {
            return `${total}\n\n总数`;
          }
        },
        labelLine: {
          show: false
        },
        silent: true,
        data: pieData1
      },
      {
        type: "pie",
        radius: ["65%", "60%"],
        center: ["36%", "45%"],
        // gap: 1,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        silent: true,
        data: pieData2
      },
      {
        type: "pie",
        radius: ["59%", "55%"],
        center: ["36%", "45%"],
        // gap: 1.71,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        silent: true,
        data: pieData3
      },
      {
        name: "",
        type: "pie",
        // roundCap: true,
        radius: ["55%", "51%"],
        center: ["36%", "45%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: pieData4
      }
    ]
  } as ECOption;
  return <EchartsCpn title="年龄比例" content={<Echart option={option} />} />;
});

export default AgeRatioPie;
