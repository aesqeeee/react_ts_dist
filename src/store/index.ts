import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from "react-redux";
import counterReducer from "./modules/counter";
import tabMenueReducer from "./modules/tabMenu";
import mainRightBottomReducer from "./modules/mainRightBottom";
import FabricReducer from "./modules/fabric";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    mainRightBottom: mainRightBottomReducer,
    tabMenu: tabMenueReducer,
    fabric: FabricReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //关闭序列化状态检测中间件，不然会报错
      serializableCheck: false
    })
});

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;

export default store;
