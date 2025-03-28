import React, { memo } from "react";
import EchartsCpn from "../../c-cpns/echarts-cpn";
import Echart from "@/components/ECharts";
import type { ECOption } from "@/components/ECharts/config/index";
import {
  ranking1,
  ranking2,
  ranking3,
  ranking4
} from "../../assets/js/ranking-icon";

interface ChartProp {
  name: string;
  value: number;
  percentage: string;
  maxValue: number;
}

const MainRightTop = memo((props: any) => {
  const data = [
    {
      value: 79999,
      name: "峨眉山",
      percentage: "80%",
      maxValue: 100000
    },
    {
      value: 59999,
      name: "稻城亚丁",
      percentage: "60%",
      maxValue: 100000
    },
    {
      value: 49999,
      name: "九寨沟",
      percentage: "50%",
      maxValue: 100000
    },
    {
      value: 39999,
      name: "万里长城",
      percentage: "40%",
      maxValue: 100000
    },
    {
      value: 29999,
      name: "北京故宫",
      percentage: "30%",
      maxValue: 100000
    }
  ];
  const colors = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  const option = {
    grid: {
      top: "5%",
      left: "7%", // 组件离容器左侧的距离
      right: "4%",
      bottom: "1%",
      containLabel: true // 区域是否包含坐标轴的刻度标签
    },
    xAxis: {
      type: "value", // 坐标轴类型, value 数值轴，适用于连续数据
      axisLine: {
        // 坐标轴轴线相关设置。
        show: false
      },
      nameGap: 1, // 坐标轴名称与轴线之间的距离
      splitLine: {
        // 坐标轴在 grid 区域中的分隔线
        show: false
      },
      axisTick: {
        // 坐标轴刻度相关设置
        show: false
      },
      axisLabel: {
        // 坐标轴刻度标签的相关设置
        show: false
      }
    },
    yAxis: [
      {
        data: data.map((item: ChartProp) => item.name),
        inverse: true, // 是否是反向坐标轴
        axisLine: {
          // 坐标轴轴线相关设置。
          show: false
        },
        axisTick: {
          // 坐标轴刻度相关设置
          show: false
        },
        splitLine: {
          // 坐标轴刻度标签的相关设置
          show: false
        },
        axisLabel: {
          color: "#fff",
          formatter: (value: string) => {
            const index =
              data.map((item: ChartProp) => item.name).indexOf(value) + 1;
            return [
              "{" + (index > 3 ? "lg" : "lg" + index) + "|NO." + index + "}",
              "{title|" + value + "}"
            ].join(" ");
          },
          rich: {
            // 自定义富文本样式
            lg: {
              width: 60,
              backgroundColor: {
                image: ranking4
              },
              color: "#fff",
              align: "center",
              height: 20,
              fontSize: 13
            },
            lg1: {
              width: 60,
              backgroundColor: {
                image: ranking1
              },
              color: "#fff",
              align: "center",
              height: 20,
              fontSize: 13
            },
            lg2: {
              width: 60,
              backgroundColor: {
                image: ranking2
              },
              color: "#fff",
              align: "center",
              height: 20,
              fontSize: 13
            },
            lg3: {
              width: 60,
              backgroundColor: {
                image: ranking3
              },
              color: "#fff",
              align: "center",
              height: 20,
              fontSize: 13
            },
            title: {
              width: 60,
              align: "center",
              fontSize: 13,
              padding: [0, 10, 0, 15]
            }
          }
        }
      },
      {
        data,
        inverse: true,
        axisLine: {
          // 坐标轴轴线相关设置。
          show: false
        },
        axisTick: {
          // 坐标轴刻度相关设置
          show: false
        },
        splitLine: {
          // 坐标轴刻度标签的相关设置
          show: false
        },
        axisLabel: {
          fontSize: 14,
          color: "#fff",
          margin: 10,
          formatter: (value: number) => {
            return value >= 10000
              ? (value / 10000).toFixed(2) + "w"
              : value + "";
          }
        }
      }
    ],
    series: [
      {
        data,
        type: "bar",
        yAxisIndex: 0,
        barWidth: 12,
        itemStyle: {
          borderRadius: 30,
          color: (params: any) => {
            return colors[params.dataIndex];
          }
        },
        label: {
          show: true,
          position: [12, 0],
          color: "#fff",
          formatter: (params: any) => {
            return (params.data as ChartProp).percentage;
          }
        }
      },
      {
        type: "bar",
        yAxisIndex: 1,
        barWidth: 18,
        data: data.map((item: ChartProp) => {
          if (!item.maxValue) return 5;
          return item.maxValue;
        }),
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 1,
          borderRadius: 15
        },
        silent: true
      }
    ]
  } as ECOption;
  return (
    <EchartsCpn title="热门景区排行" content={<Echart option={option} />} />
  );
});

export default MainRightTop;
