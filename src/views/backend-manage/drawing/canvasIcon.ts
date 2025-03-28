import type { IProps } from "@/hook/useSVG";

export interface ICanvasIcon extends IProps {
  tooltipTitle: string;
}

export const canvasIconList: ICanvasIcon[] = [
  {
    type: "MoseArrow",
    width: 20,
    height: 20,
    color: "#1296db",
    tooltipTitle: "鼠标模式"
  },
  {
    type: "Line",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "画线，快捷键为'L'"
  },
  {
    type: "Rect",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "画矩形，快捷键为'r'"
  },
  {
    type: "Circular",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "画圆，快捷键为'c'"
  },
  {
    type: "Ellipse",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "画椭圆，快捷键为'e'"
  },
  {
    type: "Polygon",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "画多边形，快捷键为'p'，右击结束"
  },
  {
    type: "Triangle",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "画三角形，快捷键为't'"
  },
  {
    type: "Polyline",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "画折线，快捷键为'f'，右击结束"
  },
  {
    type: "IText",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "文字，快捷键为'i'"
  },
  {
    type: "Pen",
    width: 20,
    height: 20,
    color: "#161617",
    tooltipTitle: "自由绘制"
  }
];
