import React, { memo, useEffect, useRef, lazy, useState } from "react";
import useFabric from "./hook/useFabric";
import { Tooltip } from "@/utils/antComponent";
import { DrawingWrapper } from "./style";
import { DeleteOutlined, SettingOutlined } from "@/utils/antIcon";
import { useAppSelector, shallowEqualApp, useAppDispatch } from "@/store";
import { cloneDeep } from "@/utils/lodash";
import { canvasIconList } from "./canvasIcon";
import { useMessage } from "@/hook/antdHook";
// import DrawerComponent from "@/components/Drawer/index";
import DrawModal from "./modal/drawModal";
// const moseArrow = lazy(() => import("@/assets/svg/moseArrow.svg"))
const SVGComponent = lazy(() => import("@/hook/useSVG"));
const DrawerComponent = lazy(() => import("@/components/Drawer/index"));

import type { IProps } from "@/hook/useSVG";
import type { svgType } from "@/assets/svg/index";
import type { ICanvasIcon } from "./canvasIcon";

type menuType = "delete" | "setting";

const FreeDrawing = memo((props: any) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { messageApi, contextHolder } = useMessage();
  const [drawType, setDrawType] = useState<svgType>("MoseArrow");
  const [activeObj, setActiveObj] = useState<fabric.Object | null>(null);
  /**
   * 控制draw开始关闭
   */
  const [open, setOpen] = useState(false);

  const [canvasIcon, setCanvasIcon] = useState<ICanvasIcon[]>(
    cloneDeep(canvasIconList)
  );
  const dispatch = useAppDispatch();
  const { fabricDrawType } = useAppSelector(
    (state: any) => ({
      fabricDrawType: state.fabric.drawType
    }),
    shallowEqualApp
  );
  useEffect(() => {
    document.addEventListener("keydown", keydown);
    resizeFunc();
    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, []);

  useEffect(() => {
    const item = canvasIcon.filter((item) => item.type === fabricDrawType);
    handleCanvasIcon(item[0]);
    return () => {};
  }, [fabricDrawType]);

  function keydown(e: KeyboardEvent) {
    // e.preventDefault();
    // if(e.ctrlKey&&e.code==="KeyP"){
    //   const list = cloneDeep(canvasIcon);
    //   const index = list.findIndex((obj) => obj.type === "Pen");
    //   handleCanvasIcon(list[index]);
    // }
    // if(!e.ctrlKey && e.code === "F12") {
    //   messageApi.open({
    //     type: "warning",
    //     content: "宝~你好棒噢，都知道调控制台了呢~但这是不允许的噢~"
    //   })
    // }
  }

  /**
   * 图形被双击时执行的函数
   * @param e 回调参数
   */
  const dblclickCanvas = (e: fabric.Object) => {
    setActiveObj(e);
    setOpen(true);
  };

  function resizeFunc() {
    if (canvasRef.current && divRef.current && menuRef.current) {
      const divCurrent = divRef.current;
      useFabric.init(
        canvasRef.current,
        menuRef.current,
        divCurrent.clientWidth,
        divCurrent.clientHeight,
        dispatch,
        dblclickCanvas
      );
    }
  }

  /**
   * 右击菜单点击事件
   * @param type 事件的类型
   */
  const handleClickMenuItem = (type: menuType) => {
    switch (type) {
      case "delete":
        useFabric.deleteGraphical();
        break;
      case "setting":
        break;
      default:
        break;
    }
    console.log("handleClickMenuItem", type);
    useFabric.hiddenMenu();
  };

  /**
   * 点击绘制图形的图标
   * @param item 被点击的图形对象
   */
  const handleCanvasIcon = (item: IProps) => {
    const list = cloneDeep(canvasIcon);
    list.filter((obj) => (obj.color = "#161617"));
    const index = list.findIndex((obj) => obj.type === item.type);
    list[index].color = "#1296db";
    setDrawType(item.type);
    useFabric.setDrawType(item.type);
    setCanvasIcon(list);
  };

  const onClose = () => {
    console.log("关闭");
    setOpen(false);
  };

  const openDrawer = () => {};

  return (
    <DrawingWrapper ref={divRef}>
      {contextHolder}
      <div className="pictrueIcon">
        <ul>
          {canvasIcon.map((item) => (
            <Tooltip key={item.type} title={item.tooltipTitle}>
              <li onClick={(e) => handleCanvasIcon(item)}>
                <SVGComponent {...item} />
              </li>
            </Tooltip>
          ))}
        </ul>
      </div>
      <canvas className="canvas" ref={canvasRef}></canvas>
      <div className="menus" ref={menuRef}>
        <div onClick={(e) => handleClickMenuItem("delete")}>
          <DeleteOutlined />
          <span className="menuItem">删除</span>
        </div>
        <div onClick={(e) => handleClickMenuItem("setting")}>
          <SettingOutlined />
          <span className="menuItem">设置</span>
        </div>
      </div>

      <DrawerComponent
        title="图形配置"
        open={open}
        content={<DrawModal activeObj={activeObj} />}
        onClose={onClose}
      />
    </DrawingWrapper>
  );
});

export default FreeDrawing;
