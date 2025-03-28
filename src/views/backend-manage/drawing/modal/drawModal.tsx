import React, { memo, useEffect, useState, useRef, lazy } from "react";
import UseGraphicalAttribute from "./setGraphical";
import { DrawWrapper } from "./style";
import { Divider, Checkbox } from "@/utils/antComponent";
import { fabric } from "@/utils/fabricVarable";
import type { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import { cloneDeep } from "@/utils/lodash";

import GradientCpn from "./page/gradient";
import BackColorCpn from "./page/bgColor";
import StrokeColor from "./page/strokeColor";
// const GradientCpn = lazy(() => import("./page/gradient"))

interface Iprops {
  activeObj: fabric.Object | null;
}

export interface ISettingList {
  checked: boolean;
  dividerName: string;
  componenType: number;
  value: any;
}

const DrawModal = memo((props: Iprops) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [fillList, setFillList] = useState<fabric.IGradientOptionsColorStops>(
    []
  );
  const [settingList, setSettingList] = useState<ISettingList[]>([
    {
      checked: false,
      dividerName: "设置渐变",
      componenType: 1,
      value: []
    },
    {
      checked: false,
      dividerName: "设置背景色",
      componenType: 2,
      value: "#1677ff"
    }
  ]);
  // const fillList: fabric.IGradientOptionsColorStops = []

  useEffect(() => {
    if (canvasRef.current && divRef.current && props.activeObj) {
      UseGraphicalAttribute.init(
        canvasRef.current,
        divRef.current.clientWidth - 10,
        150,
        props.activeObj
      );
    }
    return () => {};
  }, [props.activeObj]);

  const changeFillListValue = (list: fabric.IGradientOptionsColorStops) => {
    const item = settingList[0];
    item.value = list;
    UseGraphicalAttribute.setGradient(list);
    setList(item, 0);
  };

  const handleChangeCheckBox = (
    e: CheckboxChangeEvent,
    item: ISettingList,
    index: number
  ) => {
    item.checked = e.target.checked;
    if (item.componenType === 2) {
      // 设置背景色，将图形默认的颜色拿回来
      item.value = UseGraphicalAttribute.getActiveObjBgColor();
    }
    setList(item, index);
  };
  const hanleChangeBgColor = (item: ISettingList) => {
    const index = settingList.findIndex(
      (list) => list.componenType === item.componenType
    );
    UseGraphicalAttribute.setActiveObjBgColor(item.value);
    setList(item, index);
  };
  const setList = (item: ISettingList, index: number) => {
    const list = cloneDeep(settingList);
    list.splice(index, 1, item);
    setSettingList(list);
  };

  const getComponent = (type: number, data: any, item: ISettingList) => {
    let component = <div>默认内容</div>;
    switch (type) {
      case 1:
        component = <GradientCpn fillList={data} fn={changeFillListValue} />;
        break;
      case 2:
        component = <BackColorCpn item={item} fn={hanleChangeBgColor} />;
        break;
      case 3:
        component = <StrokeColor item={item} fn={hanleChangeBgColor} />;
        break;
    }
    return component;
  };

  return (
    <DrawWrapper className="DrawModal" ref={divRef}>
      <span className="tips">可使用滚轮手动调整图形大小</span>
      <div className="canvas-container-warpper">
        <canvas className="canvas" ref={canvasRef}></canvas>
      </div>
      <div className="setting-wrapper">
        {settingList.map((item, index) => (
          <div key={index} className="setting">
            <Divider>
              <Checkbox
                checked={item.checked}
                onChange={(e: CheckboxChangeEvent) =>
                  handleChangeCheckBox(e, item, index)
                }
              >
                设置渐变
              </Checkbox>
            </Divider>
            {item.checked && getComponent(item.componenType, item.value, item)}
          </div>
        ))}
      </div>
    </DrawWrapper>
  );
});

export default DrawModal;
