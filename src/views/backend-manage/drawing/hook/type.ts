export type canvasPictrueType =
  | fabric.Rect
  | fabric.Circle
  | fabric.Line
  | fabric.Ellipse
  | fabric.Polygon
  | fabric.IText;

export type drawGraphicalHotkeysType =
  | "r"
  | "c"
  | "l"
  | "t"
  | "e"
  | "p"
  | "f"
  | "i"
  | "Pen"
  | null;

export interface IPolygonPointsBuff {
  x: number;
  y: number;
}
