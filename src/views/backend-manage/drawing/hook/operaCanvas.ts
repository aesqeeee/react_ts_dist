import type { svgType } from "@/assets/svg/index";

class OperaCanvas {
  /**
   * 画布对象
   */
  private canvas: fabric.Canvas | null = null;
  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
  }
  /**
   * 粘贴图形
   * @param cloned
   */
  paste(cloned: fabric.Object) {
    cloned.clone((clonedObj: any) => {
      this.canvas!.discardActiveObject();
      clonedObj.set({
        name: this.createObjectName(clonedObj.type),
        left: clonedObj.left + 10,
        top: clonedObj.top + 10,
        evented: true
      });
      if (clonedObj.type === "activeSelection") {
        // active selection needs a reference to the canvas.
        // clonedObj.canvas = curTab.canvas;
        // clonedObj.forEachObject(obj => {
        //   this.resetObjName(obj);
        //   curTab.canvas.add(obj);
        // });
        // // this should solve the unselectability
        // clonedObj.setCoords();
      } else {
        this.canvas!.add(clonedObj);
      }
    });
  }
  /**
   * 创建对象唯一名称
   * @param type 类型名称如rect,line...
   */
  createObjectName(type: svgType): string {
    const objects = this.getObjectsFromCanvas(type);
    let index = 0;
    while (true) {
      let flag = false;
      for (let i = 0; i < objects.length; i++) {
        if (objects[i].name == type + index.toString()) {
          flag = true;
          index++;
          break;
        }
      }
      if (!flag) break;
    }
    return type + index.toString();
  }

  /**
   * 获取画面上对象，type为空获取全部，包括组合对象中的对象
   * @param type 类型
   */
  getObjectsFromCanvas(type?: svgType): fabric.Object[] {
    let list: fabric.Object[] = [];
    const objects: fabric.Object[] = this.canvas!.getObjects();
    if (type) {
      for (const item of objects) {
        if (item.type === type) {
          list.push(item);
        }
      }
      //     objects1.forEach(element => {
      //       if (element.objType == 'group') {
      //         objects = objects.concat(this.getObjectsFromArray(element._objects, type));
      //       } else if (element.objType == 'macro') {
      //         objects = objects.concat(this.getObjectsFromArray(element._objects, type));
      //       }
      //       if (element.objType == type) {
      //         objects.push(element);
      //       }
      //     });
      //     return objects;
    } else {
      //     objects1.forEach(element => {
      //       if (element.objType == 'group') {
      //         objects = objects.concat(this.getObjectsFromArray(element._objects));
      //       } else if (element.objType == 'macro') {
      //         objects = objects.concat(this.getObjectsFromArray(element._objects));
      //       }
      //       objects.push(element);
      //     });
      //     return objects;
    }
    return list;
  }
}

export default OperaCanvas;
