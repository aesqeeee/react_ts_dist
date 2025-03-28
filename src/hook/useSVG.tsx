import React, { forwardRef } from "react";

import * as SVGConponents from "@/assets/svg/index";
import type { svgType } from "@/assets/svg/index";

type colorType = "#161617" | "#1296db";

export interface IProps {
  type: svgType;
  width?: number;
  height?: number;
  color: colorType;
}

const initailProps: IProps = {
  type: "MoseArrow",
  width: 30,
  height: 30,
  color: "#161617"
};

const SVGComponent = forwardRef((props: IProps = initailProps) => {
  const Component = SVGConponents[props.type];
  return (
    <Component width={props.width} height={props.height} color={props.color} />
  );
});

export default SVGComponent;
