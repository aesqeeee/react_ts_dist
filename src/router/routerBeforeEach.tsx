import React, { memo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_PATH } from "@/utils/globalVariable";
import { useAppSelector, shallowEqualApp, useAppDispatch } from "@/store";
import { setMenus } from "@/store/modules/tabMenu";

import { IRouter } from "@/router/index";

interface IProps {
  routes: IRouter[];
  children?: React.ReactNode;
}

export const getCurrentRouterMap = (
  routers: IRouter[],
  path: string
): IRouter => {
  let item = {} as IRouter;
  for (let router of routers) {
    if (router.path == path) {
      return router;
    }
    if (router.children) {
      const childRouter = getCurrentRouterMap(router.children, path);
      if (childRouter && childRouter.path === path) {
        return childRouter;
      }
    }
  }
  return {} as IRouter;
};

// 路由守卫
const RouterBeforeEach = memo((props: IProps) => {
  const location = useLocation();
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  // console.log("first", location)
  const { menus, activeKey } = useAppSelector(
    (state: any) => ({
      menus: state.tabMenu.menus,
      activeKey: state.tabMenu.activeKey
    }),
    shallowEqualApp
  );

  useEffect(() => {
    let router = getCurrentRouterMap(props.routes, location.pathname);

    if (router.path === "/") {
      navigator(HOME_PATH);
    }
    if (
      menus.length === 1 &&
      router.path !== "/" &&
      location.pathname !== "/dataScreen"
    ) {
      // console.log("RouterBeforeEach", router, location);
      dispatch(
        setMenus({
          name: router.name,
          path: router.path,
          icon: router.icon
        })
      );
    }
    // console.log("first", router, import.meta.env);
    // navigator('/login')
  }, [location.pathname]);
  return props.children;
});

export default RouterBeforeEach;
