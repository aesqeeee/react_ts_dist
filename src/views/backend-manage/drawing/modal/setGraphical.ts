import { fabric } from "@/utils/fabricVarable";

class UseGraphicalAttribute {
  /**
   * 画布对象
   */
  private canvas: fabric.Canvas | null = null;
  private activeObject: fabric.Object | null = null;
  init(
    canvasRef: HTMLCanvasElement,
    width: number,
    height: number,
    activeObj: fabric.Object
  ) {
    const config: fabric.ICanvasOptions = {
      backgroundColor: "#fff",
      fireMiddleClick: false, // 可以触发中键单击事件
      fireRightClick: false, // 可以触发右键单击事件
      stopContextMenu: false, // 在画布上单击鼠标右键是否可以输出上下文菜单
      isDrawingMode: false, // 画布上的鼠标事件 （mousedown/mousemove/mouseup） 将导致自由绘图。 鼠标按下后，mousemove 创建一个形状， 然后 mouseup 完成它并添加一个 'fabric.路径“到画布上
      skipTargetFind: true, // 禁止元素被选中
      width,
      height
    };
    this.canvas = new fabric.Canvas(canvasRef, config);
    this.initDrawEvent();
    if (this.canvas) {
      activeObj.clone((cloned: fabric.Object) => {
        this.cloneGraphical(cloned);
      });
    }
  }

  initDrawEvent() {
    this.canvas!.on("mouse:wheel", (opt: fabric.IEvent<MouseEvent>) => {
      const wheelEvent = opt.e as WheelEvent;
      let delta = wheelEvent.deltaY; // 滚轮向上滚一下是 -100，向下滚一下是 100
      let zoom = this.canvas!.getZoom(); // 获取画布当前缩放值
      // 控制缩放范围在 0.01~20 的区间内
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      console.log("first", opt.e, zoom);
      // 设置画布缩放比例
      this.canvas!.setZoom(zoom);
    });
  }

  cloneGraphical(cloned: fabric.Object) {
    this.canvas!.discardActiveObject();
    cloned.set({
      left: 10,
      top: 10,
      evented: true
    });
    const width = cloned.width || 20;
    const height = cloned.height || 20;
    let zoom = 1;
    // 图形过大，开始缩放
    if (width > 300 || height > 150) {
      zoom = 0.999 ** 4;
    }

    this.canvas!.setZoom(zoom);
    this.canvas!.add(cloned);
    this.activeObject = cloned;
    this.canvas?.requestRenderAll();
    this.getActiveObjBgColor();
    // this.setGradient()
  }

  /**
   * 设置渐变色
   */
  setGradient(colorStops: fabric.IGradientOptionsColorStops) {
    // const obj = this.getNameGraphicalObject(activeObj!.name || "")
    if (this.activeObject) {
      let gradient = new fabric.Gradient({
        type: "linear", // linear or radial
        gradientUnits: "pixels", // pixels or pencentage 像素 或者 百分比
        coords: { x1: 0, y1: 0, x2: this.activeObject!.width, y2: 0 }, // 至少2个坐标对（x1，y1和x2，y2）将定义渐变在对象上的扩展方式
        colorStops // 定义渐变颜色的数组
        // colorStops: [ // 定义渐变颜色的数组
        //   { offset: 0, color: 'red' },
        //   { offset: 0.2, color: 'orange' },
        //   { offset: 0.4, color: 'yellow' },
        //   { offset: 0.6, color: 'green' },
        //   { offset: 0.8, color: 'blue' },
        //   { offset: 1, color: 'purple' },
        // ]
      });
      this.activeObject.set("fill", gradient);
      this.canvas!.requestRenderAll();
    }
  }

  setActiveObjBgColor(color: string) {
    this.activeObject!.set("fill", color);
    this.canvas!.requestRenderAll();
  }

  getActiveObjBgColor() {
    return this.activeObject?.fill;
  }

  setActiveObjLineColor(color: string) {
    this.activeObject!.set("stroke", color);
    this.canvas!.requestRenderAll();
  }
  getActiveObjLineColor() {
    return this.activeObject?.stroke;
  }
}

export default new UseGraphicalAttribute();
