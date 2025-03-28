import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from "@/utils/lodash";
import { HOME_PATH } from "@/utils/globalVariable";
import type { routerType } from "@/router/index";

export interface ITabMenue {
  menus: routerType[];
  activeKey: string;
}
const menesInit: routerType[] = [
  {
    icon: "HomeOutlined",
    name: "首页",
    path: HOME_PATH
  }
];
const initialState: ITabMenue = {
  menus: menesInit,
  activeKey: ""
};

const tabMenueSlice = createSlice({
  name: "tabMenue",
  initialState,
  reducers: {
    setMenus(state, { payload }: PayloadAction<routerType>) {
      state.activeKey = payload.path;
      const item = state.menus.filter(
        (item) => item.name === payload.name && item.path === payload.path
      );
      if (!item.length && payload.path !== "/") {
        state.menus.push(payload);
      }
    },
    deleteItem(state, { payload }: PayloadAction<routerType[]>) {
      state.menus = payload;
    },
    clearTabItem(state) {
      const menus = cloneDeep(state.menus);
      state.menus = menus.filter((item) => item.path === HOME_PATH);
    }
  }
});

export const { setMenus, deleteItem, clearTabItem } = tabMenueSlice.actions;

export default tabMenueSlice.reducer;
