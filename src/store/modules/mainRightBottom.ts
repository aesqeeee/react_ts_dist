import { createSlice } from "@reduxjs/toolkit";
import type { ECOption } from "@/components/ECharts/config/index";
import { optionsData, series } from "@/utils/echartPie3d";
interface IMainRightBottom {
  option: ECOption;
}

const initialState: IMainRightBottom = {
  option: {
    legend: {
      tooltip: {
        show: true
      },
      data: optionsData.map((item) => item.name),
      bottom: "5%",
      textStyle: {
        color: "#fff",
        fontSize: 16
      }
    },
    animation: true,
    tooltip: {
      formatter: (params: any) => {
        if (
          params.seriesName !== "mouseoutSeries" &&
          params.seriesName !== "pie2d"
        ) {
          return `${
            params.seriesName
          }<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
            params.color
          };"></span>${series[params.seriesIndex].pieData.value + "辆"}`;
        }
      },
      textStyle: {
        fontSize: 16
      }
    },
    title: {
      x: "center",
      top: "20",
      textStyle: {
        color: "#fff",
        fontSize: 16
      }
    },
    backgroundColor: "#333",
    labelLine: {
      show: true,
      lineStyle: {
        color: "#7BC0CB"
      }
    },
    label: {
      show: true,
      position: "outside",
      formatter: "{b} \n{c} {d}%"
    },
    xAxis3D: {
      min: -1,
      max: 1
    },
    yAxis3D: {
      min: -1,
      max: 1
    },
    zAxis3D: {
      min: -1,
      max: 1
    },
    grid3D: {
      show: false,
      boxHeight: 0.5,
      //top: '30%',
      bottom: "50%",
      environment: "#021041",

      viewControl: {
        distance: 180,
        alpha: 25,
        beta: 60,
        autoRotate: true // 自动旋转
      }
    },
    series
  } as ECOption
};

const mainRightBottomSplce = createSlice({
  name: "mainRightBottom",
  initialState,
  reducers: {
    getEchartOption() {}
  }
});

export const { getEchartOption } = mainRightBottomSplce.actions;

export default mainRightBottomSplce.reducer;
