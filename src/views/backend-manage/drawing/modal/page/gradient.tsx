import React, { memo } from "react";
import { fabric } from "@/utils/fabricVarable";
import { Button, InputNumber, ColorPicker } from "@/utils/antComponent";
import type { Color } from "@/utils/antComponent";
import { cloneDeep } from "@/utils/lodash";
import { useMessage } from "@/hook/antdHook";
import { GradientWrapper } from "./style";

interface IProps {
  fillList: fabric.IGradientOptionsColorStops;
  fn: Function;
}
interface IFillObj {
  offset: number;
  color: string;
}
const GradientCpn = memo((props: IProps) => {
  const { messageApi, contextHolder } = useMessage();

  const handleAddFill = () => {
    if (props.fillList.length >= 10) {
      messageApi.open({
        type: "warning",
        content: "渐变值最大为10条内容"
      });
      return;
    }
    const list = cloneDeep(props.fillList);
    list.push({ offset: 0, color: "#1677ff" });
    props.fn(list);
  };
  const colorPickerChange = (
    value: Color,
    hex: string,
    item: IFillObj,
    index: number
  ) => {
    item.color = hex;
    changeList(item, index);
  };

  const inputNumberChange = (
    value: number | null,
    item: IFillObj,
    index: number
  ) => {
    if (value !== null) {
      item.offset = value;
    }
    changeList(item, index);
  };

  const deleteItem = (item: IFillObj, index: number) => {
    const list = cloneDeep(props.fillList);
    list.splice(index, 1);
    props.fn(list);
  };

  const changeList = (item: IFillObj, index: number) => {
    const list = cloneDeep(props.fillList);
    list.splice(index, 1, item);
    props.fn(list);
  };
  return (
    <GradientWrapper className="GradientCpn">
      {contextHolder}
      <div className="btn-wrapper">
        <Button type="primary" onClick={handleAddFill}>
          新增渐变值
        </Button>
        <div className="tips">数值相同时，仅会生效一个，且为0-1的小数</div>
      </div>
      {props.fillList.map((item, index) => (
        <div className="list-wrapper" key={index}>
          <div>
            <span>数值：</span>
            <span>
              <InputNumber
                min={0}
                max={1}
                step={0.1}
                value={item.offset}
                onChange={(value: number | null) =>
                  inputNumberChange(value, item, index)
                }
              />
            </span>
          </div>
          <div className="color-wrapper">
            <span>颜色：</span>
            <span>
              <ColorPicker
                value={item.color}
                onChange={(value: Color, hex: string) =>
                  colorPickerChange(value, hex, item, index)
                }
              />
            </span>
          </div>
          <div>
            <Button
              danger
              size="middle"
              onClick={(e) => deleteItem(item, index)}
            >
              删除
            </Button>
          </div>
        </div>
      ))}
    </GradientWrapper>
  );
});

export default GradientCpn;
