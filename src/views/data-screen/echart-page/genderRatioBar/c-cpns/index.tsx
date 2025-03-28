import React, { memo } from "react";
import { ContentWrapper } from "./style";
import { getDataScreenImageUrl } from "@/utils/getFiles";
import Echart from "@/components/ECharts";
import type { ECOption } from "@/components/ECharts/config/index";

interface ChartProp {
  man: number;
  woman: number;
}

const GenderRatioBarContent = memo((props: any) => {
  const data: ChartProp = {
    man: 0.6,
    woman: 0.4
  };
  const option = {
    xAxis: {
      type: "value",
      show: false
    },
    grid: {
      left: 0,
      top: "30px",
      bottom: 0,
      right: 0
    },
    yAxis: [
      {
        type: "category",
        position: "left",
        data: ["男生"],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      {
        type: "category",
        position: "right",
        data: ["女士"],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false,
          padding: [0, 0, 40, -60],
          fontSize: 12,
          lineHeight: 60,
          color: "rgba(255, 255, 255, 0.9)",
          formatter: "{value}" + data.woman * 100 + "%",
          rich: {
            a: {
              color: "transparent",
              lineHeight: 30,
              fontFamily: "digital",
              fontSize: 12
            }
          }
        }
      }
    ],
    series: [
      {
        type: "bar",
        barWidth: 20,
        data: [data.man],
        z: 20,
        itemStyle: {
          borderRadius: 10,
          color: "#007AFE"
        },
        label: {
          show: true,
          color: "#E7E8ED",
          position: "insideLeft",
          offset: [0, -20],
          fontSize: 12,
          formatter: () => {
            return `男士 ${data.man * 100}%`;
          }
        }
      },
      {
        type: "bar",
        barWidth: 20,
        data: [1],
        barGap: "-100%",
        itemStyle: {
          borderRadius: 10,
          color: "#FF4B7A"
        },
        label: {
          show: true,
          color: "#E7E8ED",
          position: "insideRight",
          offset: [0, -20],
          fontSize: 12,
          formatter: () => {
            return `女士 ${data.woman * 100}%`;
          }
        }
      }
    ]
  } as ECOption;
  return (
    <ContentWrapper>
      <div className="content-top">
        <div className="man">
          <span>男士</span>
          <img src={getDataScreenImageUrl("dataScreen/man.png")} alt="" />
        </div>
        <div className="woman">
          <span>女士</span>
          <img src={getDataScreenImageUrl("dataScreen/woman.png")} alt="" />
        </div>
      </div>
      <div className="content-echart">
        <Echart option={option} />
      </div>
    </ContentWrapper>
  );
});

export default GenderRatioBarContent;
