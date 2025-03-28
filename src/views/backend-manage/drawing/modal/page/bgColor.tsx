import React, { memo } from "react";

import { ColorPicker } from "@/utils/antComponent";
import { cloneDeep } from "lodash";
import type { Color } from "@/utils/antComponent";
import type { ISettingList } from "../drawModal";
interface IProps {
  item: ISettingList;
  fn: Function;
}

const BackColorCpn = memo((props: IProps) => {
  const colorPickerChange = (value: Color, hex: string) => {
    const item = cloneDeep(props.item);
    item.value = hex;
    props.fn(item);
  };

  return (
    <div className="BackColorCpn">
      <ColorPicker value={props.item.value} onChange={colorPickerChange} />
    </div>
  );
});

export default BackColorCpn;
