import { fabric } from "@/utils/fabricVarable";
import hotkeys from "hotkeys-js";
import type { svgType } from "@/assets/svg/index";
import { setDrawType } from "@/store/modules/fabric";

import OperaCanvas from "./operaCanvas";

import type {
  canvasPictrueType,
  drawGraphicalHotkeysType,
  IPolygonPointsBuff
} from "./type";

class UseFabric {
  /**
   * 画布对象
   */
  private canvas: fabric.Canvas | null = null;
  /**
   * 右击菜单dom对象
   */
  private menuRef: HTMLDivElement | null = null;
  private activeEl: fabric.Object | null = null;
  /**
   * 要绘制的图形对象
   */
  private shape: fabric.Object | any = null;
  /**
   * 要绘制的图形类型
   */
  drawType: drawGraphicalHotkeysType = null;
  /**
   * 记录的初始坐标
   */
  private startPoint: fabric.IPoint | undefined;
  private fill: string = "";
  private stroke: string = "";
  /**
   * 是否绘制特殊图形
   */
  private isDrawSpecialGraphics: boolean = false;
  /**
   * 特殊图形的坐标
   */
  private polygonPointsBuff: IPolygonPointsBuff[] = [];
  /**
   * 是否开启自由绘制
   */
  private isDrawingMode: boolean = false;
  dispatch: any = null;

  private operaCanvas: OperaCanvas | null = null;
  /**
   * 双击图形后执行的函数，由外部传入
   */
  private dblclickCanvas = (e: fabric.Object) => {};

  constructor() {
    this.fill = "#1677ff";
    this.stroke = "#1677ff";
  }

  /**
   * 初始化canvas
   * @param canvasRef canvas的dom对象
   * @param menu 右击菜单的dom对象
   * @param width canvas的初始化宽度
   * @param height canvas的初始化高度
   */
  init(
    canvasRef: HTMLCanvasElement,
    menu: HTMLDivElement,
    width: number,
    height: number,
    dispatch: any,
    dblclickCanvas: (e: fabric.Object) => void
  ) {
    const config: fabric.ICanvasOptions = {
      backgroundColor: "#fff",
      fireMiddleClick: true, // 可以触发中键单击事件
      fireRightClick: true, // 可以触发右键单击事件
      stopContextMenu: true, // 在画布上单击鼠标右键是否可以输出上下文菜单
      isDrawingMode: false, // 画布上的鼠标事件 （mousedown/mousemove/mouseup） 将导致自由绘图。 鼠标按下后，mousemove 创建一个形状， 然后 mouseup 完成它并添加一个 'fabric.路径“到画布上
      skipTargetFind: false, // 禁止元素被选中
      width,
      height
    };
    this.canvas = new fabric.Canvas(canvasRef, config);
    this.operaCanvas! = new OperaCanvas(this.canvas);
    this.dispatch = dispatch;
    this.initHotkeys();
    this.dblclickCanvas = dblclickCanvas;
    this.menuRef = menu;
    this.menuRef.oncontextmenu = function (e) {
      e.preventDefault();
    };
    this.initDrawEvent(this.canvas);
  }

  setDrawType(type: svgType) {
    this.canvas!.isDrawingMode = false;
    if (this.drawType === "Pen") {
      this.canvas!.selection = true;
      this.canvas!.requestRenderAll();
    }
    switch (type) {
      case "MoseArrow":
        this.setFabricDrawType(null);
        break;
      case "Line":
        this.setFabricDrawType("l");
        break;
      case "Rect":
        this.setFabricDrawType("r");
        break;
      case "Triangle":
        this.setFabricDrawType("t");
        break;
      case "Circular":
        this.setFabricDrawType("c");
        break;
      case "Ellipse":
        this.setFabricDrawType("e");
        break;
      case "Polygon":
        this.setFabricDrawType("p");
        break;
      case "Polyline":
        this.setFabricDrawType("f");
        break;
      case "IText":
        this.setFabricDrawType("i");
        break;
      case "Pen":
        this.canvas!.isDrawingMode = true;
        this.setFabricDrawType("Pen");
        break;
      default:
        this.setFabricDrawType(null);
        break;
    }
  }

  /**
   * 初始化图形快捷键
   */
  initHotkeys() {
    hotkeys("r", () => {
      this.setFabricDrawType("r");
    });
    hotkeys("l", () => {
      this.setFabricDrawType("l");
    });
    hotkeys("c", () => {
      this.setFabricDrawType("c");
    });
    hotkeys("t", () => {
      this.setFabricDrawType("t");
    });
    hotkeys("e", () => {
      this.setFabricDrawType("e");
    });
    hotkeys("p", () => {
      this.setFabricDrawType("p");
    });
    hotkeys("f", () => {
      this.setFabricDrawType("f");
    });
    hotkeys("i", () => {
      this.setFabricDrawType("i");
    });
  }

  /**
   * 初始化canvas的鼠标事件
   */
  initDrawEvent(canvas: fabric.Canvas) {
    canvas
      .on("mouse:down", (e: fabric.IEvent<MouseEvent>) =>
        // 鼠标按下
        this.canvasOnMouseDown(e)
      )
      .on("mouse:move", (e: fabric.IEvent<MouseEvent>) =>
        // 鼠标移动
        this.canvasOnMoseMove(e)
      )
      .on("mouse:up", (e: fabric.IEvent<MouseEvent>) =>
        // 鼠标抬起
        this.canvasOnMoseUp(e)
      )
      .on("selection:created", (e: fabric.IEvent<MouseEvent>) => {
        // if(e.target) {
        // console.log("selection:created", e)
        // }
      })
      .on("mouse:dblclick", (e: fabric.IEvent<MouseEvent>) => {
        if (e.target) {
          const activeObj = this.canvas!.getActiveObject();
          if (activeObj) {
            this.dblclickCanvas(activeObj);
          }
          // this.canvas!.getActiveObject()?.clone((cloned: fabric.Object) => {
          //   // this.operaCanvas!.paste(cloned)
          //   this.dblclickCanvas(cloned)
          // })
          // this.canvas?.discardActiveObject()
          // this.canvas?.add(e.target)
          // this.canvas?.requestRenderAll()
        }
      });
  }

  // 鼠标左键或者右键按下
  canvasOnMouseDown(opt: fabric.IEvent<MouseEvent>) {
    if (opt.target && !this.drawType && opt.button === 3) {
      if (!this.canvas!.getActiveObject()) {
        this.canvas!.setActiveObject(opt.target);
        this.canvas!.requestRenderAll();
      }
    }

    this.showOrHiddenMenu(opt);
    if (opt.target && !this.isDrawSpecialGraphics) {
      return;
    }
    if (!this.shape && this.drawType && !this.isDrawSpecialGraphics) {
      this.canvas!.selection = false;
      this.startPoint = opt.absolutePointer;
      this.getMouseDownDrawGraphical(this.drawType, opt);
    }
    // 绘制多边形，直接进入
    if (this.isDrawSpecialGraphics) {
      this.getMouseDownDrawGraphical(this.drawType, opt);
      this.renderCanvas(this.shape);
      if (opt.button === 3) {
        this.isDrawSpecialGraphics = false;
        this.shape.set({ selectable: true });
        this.drawOver();
      }
      return;
    }
    if (this.shape) {
      this.renderCanvas(this.shape);
    }
    // window.selected = opt?.target // 当点击选择到有可选图形时，会获得图形的数据。
  }

  // 鼠标移动
  canvasOnMoseMove(opt: fabric.IEvent<MouseEvent>) {
    const position = this.canvas!.getPointer(opt.e) || {
      x: 0,
      y: 0
    };
    if (this.shape && this.drawType && !this.isDrawSpecialGraphics) {
      const minX = Math.min(position.x, this.startPoint!.x);
      const minY = Math.min(position.y, this.startPoint!.y);
      let width = Math.abs(position.x - this.startPoint!.x);
      let height = Math.abs(position.y - this.startPoint!.y);
      this.setMoseMoveGraphicalParameter(
        this.drawType,
        minX,
        minY,
        width,
        height,
        position
      );
      this.canvas!.requestRenderAll();
    }
    // 特殊图形，多边形
    if (this.isDrawSpecialGraphics && this.shape) {
      this.setMouseMovePolygonPostionList(position);

      this.setMoseMoveGraphicalParameter(this.drawType, 0, 0, 0, 0, position);
      this.renderCanvas(this.shape);
    }
  }

  // 鼠标抬起
  canvasOnMoseUp(opt: fabric.IEvent<MouseEvent>) {
    if (this.isDrawSpecialGraphics && this.drawType === "p") {
      return;
    }
    if (this.shape && this.drawType && !this.isDrawSpecialGraphics) {
      this.drawOver();
    }
  }

  drawOver() {
    this.shape.setCoords(); // 更新图像坐标
    this.canvas!.selection = true;
    this.shape = null;
    this.setFabricDrawType(null);
    this.canvas!.requestRenderAll();
  }

  /**
   * 鼠标按下时，绘制多边形，设置坐标
   * @param position 坐标
   */
  setMouseDownPolygonPostionList(position: fabric.Point | undefined) {
    if (position) {
      if (this.polygonPointsBuff.length === 0) {
        this.polygonPointsBuff = [
          { x: position!.x, y: position!.y },
          { x: position!.x, y: position!.y }
        ];
      } else {
        this.polygonPointsBuff.push({
          x: position!.x,
          y: position!.y
        });
      }
      if (this.shape) {
        this.canvas!.remove(this.shape);
      }
    }
  }
  /**
   * 鼠标按下时，创建对应的图形
   * @param drawType 绘制的图形类型
   */
  getMouseDownDrawGraphical(
    drawType: drawGraphicalHotkeysType,
    opt: fabric.IEvent<MouseEvent>
  ) {
    switch (drawType) {
      case "e":
        this.shape = new fabric.Ellipse({
          name: this.operaCanvas!!.createObjectName("Ellipse"),
          left: this.startPoint!.x,
          top: this.startPoint!.y,
          rx: 0,
          ry: 0,
          type: "Ellipse",
          fill: this.fill,
          stroke: this.stroke,
          perPixelTargetFind: true // 空白位置无法选中
        });
        break;
      case "c":
        this.shape = new fabric.Circle({
          name: this.operaCanvas!!.createObjectName("Circular"),
          left: this.startPoint!.x,
          top: this.startPoint!.y,
          radius: 0,
          type: "Circular",
          fill: this.fill,
          stroke: this.stroke,
          perPixelTargetFind: true
        });
        break;
      case "l":
        this.shape = new fabric.Line(
          [
            this.startPoint!.x,
            this.startPoint!.y,
            this.startPoint!.x,
            this.startPoint!.y
          ],
          {
            name: this.operaCanvas!.createObjectName("Line"),
            fill: undefined,
            type: "Line",
            stroke: this.stroke,
            perPixelTargetFind: true
          }
        );
        break;
      case "r":
        this.shape = new fabric.Rect({
          name: this.operaCanvas!.createObjectName("Rect"),
          left: this.startPoint!.x,
          top: this.startPoint!.y,
          width: 0,
          height: 0,
          type: "Rect",
          fill: this.fill,
          stroke: this.stroke,
          transparentCorners: false,
          perPixelTargetFind: true
        });
        break;
      case "t":
        this.shape = new fabric.Triangle({
          name: this.operaCanvas!.createObjectName("Triangle"),
          left: this.startPoint!.x,
          top: this.startPoint!.y,
          width: 0,
          height: 0,
          type: "Triangle",
          fill: this.fill,
          stroke: this.stroke,
          transparentCorners: false,
          perPixelTargetFind: true
        });
        break;
      case "p":
        this.setMouseDownPolygonPostionList(opt.absolutePointer);
        this.shape = new fabric.Polygon(this.polygonPointsBuff, {
          // name: this.createObjectName("Polygon"),
          name: this.operaCanvas!.createObjectName("Polygon"),
          type: "Polygon",
          ...this.drawSpecialGraphicsConfig()
        });
        break;
      case "f":
        this.setMouseDownPolygonPostionList(opt.absolutePointer);
        this.shape = new fabric.Polyline(this.polygonPointsBuff, {
          name: this.operaCanvas!.createObjectName("Polyline"),
          type: "Polyline",
          ...this.drawSpecialGraphicsConfig()
        });
        break;
      case "i":
        this.shape = new fabric.IText("text", {
          name: this.operaCanvas!.createObjectName("IText"),
          type: "IText",
          left: this.startPoint!.x,
          top: this.startPoint!.y,
          fontSize: 0,
          perPixelTargetFind: true
        });
        break;
      default:
        break;
    }
  }

  /**
   * 鼠标移动时，绘制多边形，设置坐标
   * @param position 坐标
   */
  setMouseMovePolygonPostionList(position: IPolygonPointsBuff) {
    if (position) {
      if (this.shape) {
        this.canvas!.remove(this.shape);
      }
      this.polygonPointsBuff[this.polygonPointsBuff.length - 1].x = position!.x;
      this.polygonPointsBuff[this.polygonPointsBuff.length - 1].y = position!.y;
    }
  }
  /**
   * 鼠标移动时，设置图形的参数
   * @param drawType 绘制的图形类型
   * @param minX 距离canvas左边的位置
   * @param minY 距离canvas上边的位置
   * @param width 图形宽度
   * @param height 图形高度
   * @param position 当前鼠标的位置
   */
  setMoseMoveGraphicalParameter(
    drawType: drawGraphicalHotkeysType,
    minX: number,
    minY: number,
    width: number,
    height: number,
    position: { x: number; y: number }
  ) {
    switch (drawType) {
      case "e":
        this.shape?.set({
          left: minX,
          top: minY,
          rx: width / 2,
          ry: height / 2
        });
        break;
      case "c":
        this.shape?.set({
          left: minX,
          top: minY,
          radius: width / 2
        });
        break;
      case "l":
        let x1 = this.startPoint!.x;
        let y1 = this.startPoint!.y;
        let x2 = position.x;
        let y2 = position.y;
        this.shape.set({ x1, y1, x2, y2 });
        break;
      case "r":
      case "t":
        this.shape!.set({
          left: minX,
          top: minY,
          width,
          height
        });
        break;
      case "p":
        this.shape = new fabric.Polygon(this.polygonPointsBuff, {
          name: this.operaCanvas!.createObjectName("Polygon"),
          type: "Polygon",
          ...this.drawSpecialGraphicsConfig()
        });
        break;
      case "f":
        this.shape = new fabric.Polyline(this.polygonPointsBuff, {
          name: this.operaCanvas!.createObjectName("Polyline"),
          type: "Polyline",
          ...this.drawSpecialGraphicsConfig()
        });
        break;
      case "i":
        this.shape!.set({
          fontSize: height
        });
        break;
      default:
        break;
    }
  }

  /**
   * 设置右击的菜单是否显示
   * @param opt 鼠标的事件
   */
  showOrHiddenMenu(opt: fabric.IEvent<MouseEvent>) {
    if (opt.button === 3 && opt.target && !this.isDrawSpecialGraphics) {
      this.activeEl = opt.target;
      // 获取菜单组件的宽高
      const menuWidth = this.menuRef!.offsetWidth;
      const menuHeight = this.menuRef!.offsetHeight;
      if (this.canvas?.width && this.canvas?.height && this.menuRef?.style) {
        // 当前鼠标位置
        let pointX = opt.pointer!.x;
        let pointY = opt.pointer!.y;
        // 计算菜单出现的位置
        // 如果鼠标靠近画布右侧，菜单就出现在鼠标指针左侧
        if (this.canvas.width - pointX <= menuWidth) {
          pointX -= menuWidth;
        }
        // 如果鼠标靠近画布底部，菜单就出现在鼠标指针上方
        if (this.canvas?.height - pointY <= menuHeight) {
          pointY -= menuHeight;
        }

        this.menuRef.style.cssText = `
          visibility: visible;
          left: ${pointX}px;
          top: ${pointY}px;
          z-index: 100;
        `;
      }
    } else {
      this.hiddenMenu();
    }
  }

  // 隐藏菜单
  hiddenMenu() {
    if (this.menuRef?.style) {
      this.menuRef.style.cssText = `
        visibility: hidden;
        left: 0;
        top: 0;
        z-index: -100;
      `;
    }
    this.activeEl = null;
  }

  /**
   * 绘制特殊图形的统一配置
   */
  drawSpecialGraphicsConfig() {
    return {
      fill: this.drawType === "f" ? "transparent" : this.fill,
      stroke: this.stroke,
      transparentCorners: false,
      selectable: false,
      perPixelTargetFind: true
    };
  }
  /**
   * 重新绘制
   * @param addPictrue 需要添加的图形
   */
  renderCanvas(addPictrue: canvasPictrueType) {
    this.canvas!.add(addPictrue);
    this.canvas!.requestRenderAll();
  }

  /**
   * 设置绘制对象的类型
   * @param drawType 类型
   */
  setFabricDrawType(drawType: drawGraphicalHotkeysType) {
    this.drawType = drawType;
    this.isDrawSpecialGraphics = false;
    if (drawType === "p" || drawType === "f") {
      this.polygonPointsBuff = [];
      this.isDrawSpecialGraphics = true;
    }
    if (this.dispatch) {
      this.dispatch(setDrawType(this.drawType));
    }
  }

  /**
   * 删除图形
   */
  deleteGraphical() {
    const obj = this.getGraphicalObject();
    if (obj) {
      this.canvas?.remove(obj);
    }
    this.hiddenMenu();
    this.canvas!.requestRenderAll();
  }

  /**
   * 获取当前选中图形对象
   * @returns 图形对象
   */
  getGraphicalObject(): fabric.Object | null {
    return this.canvas!.getActiveObject();
  }

  getNameGraphicalObject(name: string): fabric.Object | null {
    let obj = null;
    this.canvas!.getObjects().forEach((item) => {
      console.log("getNameGraphicalObject", item.name, name);
      if (item.name === name) {
        obj = item;
      }
    });
    return obj;
  }
}

export default new UseFabric();
