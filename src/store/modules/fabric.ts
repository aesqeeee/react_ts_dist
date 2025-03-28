import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { svgType } from "@/assets/svg/index";
import type { drawGraphicalHotkeysType } from "@/views/backend-manage/drawing/hook/type";

interface ITabMenue {
  drawType: svgType;
}

const initialState: ITabMenue = {
  drawType: "MoseArrow"
};

const FabricSlice = createSlice({
  name: "fabric",
  initialState,
  reducers: {
    setDrawType(state, { payload }: PayloadAction<drawGraphicalHotkeysType>) {
      switch (payload) {
        case "c":
          state.drawType = "Circular";
          break;
        case "l":
          state.drawType = "Line";
          break;
        case "r":
          state.drawType = "Rect";
          break;
        case "t":
          state.drawType = "Triangle";
          break;
        case "e":
          state.drawType = "Ellipse";
          break;
        case "p":
          state.drawType = "Polygon";
          break;
        case "f":
          state.drawType = "Polyline";
          break;
        case "i":
          state.drawType = "IText";
          break;
        default:
          state.drawType = "MoseArrow";
          break;
      }
    }
  }
});

export const { setDrawType } = FabricSlice.actions;
export default FabricSlice.reducer;
