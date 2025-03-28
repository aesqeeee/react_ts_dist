import React, { memo } from "react";
import EchartsCpn from "../../c-cpns/echarts-cpn";
import Echart from "@/components/ECharts";
import echarts from "@/components/ECharts/config/index";
import type { ECOption } from "@/components/ECharts/config/index";

const MainRightCenter = memo((props: any) => {
  const xLabel = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ];
  const dataValue = [
    "184",
    "90",
    "120",
    "0",
    "30",
    "100",
    "80",
    "40",
    "20",
    "510",
    "350",
    "180"
  ];
  const dataValue1 = [
    "118",
    "509",
    "366",
    "162",
    "380",
    "123",
    "321",
    "158",
    "352",
    "474",
    "154",
    "22"
  ];
  const option = {
    // backgroundColor: '#0c2d55',
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "rgb(126,199,255)"
        }
      }
    },
    legend: {
      show: true,
      top: "10%",
      itemWidth: 30, // 图例标记的图形宽度。
      itemGap: 20, // 图例每项之间的间隔。
      itemHeight: 10, //  图例标记的图形高度。
      textStyle: {
        color: "#fff",
        fontSize: 14,
        padding: [0, 8, 0, 8]
      }
    },
    color: ["#ff7022", "#fff58a", "#46f8ff"],
    // legend: [
    //   {
    //     data: ["2021"],
    //     itemWidth: 30,
    //     itemHeight: 4,
    //     top: "6%",
    //     left: "35%",
    //     textStyle: {
    //       color: "#fff",
    //       // fontWeight: "normal",
    //       fontSize: 20,
    //     },
    //   },
    //   {
    //     data: ["2022"],
    //     itemWidth: 30,
    //     itemHeight: 4,
    //     top: "6%",
    //     left: "50%",
    //     textStyle: {
    //       color: "#fff",
    //       // fontWeight: "normal",
    //       fontSize: 20,
    //     },
    //   },
    //   {
    //     top: "5.5%",
    //     left: "65%",
    //     textStyle: {
    //       color: "#fff",
    //       fontSize: 20,
    //       fontFamily: "微软雅黑",
    //     },
    //     itemWidth: 20,
    //     itemHeight: 20,
    //     data: ["2023"],
    //   },
    // ],
    grid: {
      top: "30%",
      left: "10%",
      right: "5%",
      bottom: "20%"
    },
    xAxis: [
      {
        type: "category",
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: "rgb(41,188,245)"
          }
        },
        axisLabel: {
          //坐标轴刻度标签的相关设置
          formatter: function (value: string) {
            // var str = "";
            // var num = 4; //每行显示字数
            // var valLength = value.length; //该项x轴字数
            // var rowNum = Math.ceil(valLength / num); // 行数

            // if (rowNum > 1) {
            //     for (var i = 0; i < rowNum; i++) {
            //         var temp = "";
            //         var start = i * num;
            //         var end = start + num;

            //         temp = value.substring(start, end) + "\n";
            //         str += temp;
            //     }
            //     return str;
            // } else {
            return value;
            // }
          },
          color: "#FFFFFF",
          fontSize: 16
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "#233653"
          }
        },
        axisTick: {
          show: false
        },
        data: xLabel
      }
    ],
    yAxis: [
      {
        name: "人数",
        nameTextStyle: {
          color: "#fff",
          fontSize: 16,
          padding: [0, 0, 0, 0]
        },
        // minInterval: 1,
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#1160a0",
            type: "dashed"
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#008de7"
          }
        },
        axisLabel: {
          show: true,
          color: "#fff",
          fontSize: 16
        },
        axisTick: {
          show: false
        }
      },
      {
        show: false,
        name: "%",
        nameTextStyle: {
          color: "#fff",
          fontSize: 24,
          padding: [0, 0, 0, 0]
        },
        // minInterval: 1,
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#1160a0",
            type: "dashed"
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#008de7"
          }
        },
        axisLabel: {
          show: true,
          color: "#fff",
          fontSize: 22
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: "2021",
        type: "line",
        symbol: "none", // 默认是空心圆（中间是白色的），改成实心圆
        smooth: true,
        yAxisIndex: 1,
        lineStyle: {
          width: 3,
          color: "#ff7022" // 线条颜色
        },
        areaStyle: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#ff702230"
              },
              {
                offset: 0.6,
                color: "#ff702220"
              },
              {
                offset: 1,
                color: "#ff702210"
              }
            ],
            false
          )
        },
        data: dataValue
      },
      {
        name: "2022",
        type: "line",
        symbol: "none", // 默认是空心圆（中间是白色的），改成实心圆
        smooth: true,
        lineStyle: {
          width: 3,
          color: "#fff58a" // 线条颜色
        },
        yAxisIndex: 1,
        areaStyle: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#fff58a30"
              },
              {
                offset: 0.6,
                color: "#fff58a20"
              },
              {
                offset: 1,
                color: "#fff58a10"
              }
            ],
            false
          )
        },
        data: dataValue1
      },
      {
        name: "2023",
        type: "bar",
        barWidth: 20,
        barGap: "40%",
        data: [
          "548",
          "259",
          "113",
          "90",
          "69",
          "512",
          "23",
          "49",
          "28",
          "420",
          "313",
          "156"
        ],
        itemStyle: {},
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#44f4fb"
          },
          {
            offset: 1,
            color: "#44f4fb30"
          }
        ])
      }
    ]
  } as ECOption;
  return (
    <EchartsCpn title="年度游客量对比" content={<Echart option={option} />} />
  );
});

export default MainRightCenter;
