import React, { memo, useEffect, useState } from "react";
import { Menu } from "@/utils/antComponent";

import { getCurrentRouterMap } from "@/router/routerBeforeEach";
import * as AllIconComponent from "@/utils/antIcon";
import { getItem, getOpenKeys, getDefaultSelectedKeys } from "./menuHook";
import { useNavigate, useLocation } from "react-router-dom";
import router from "@/router/index";
import { useAppDispatch } from "@/store";
import { setMenus, clearTabItem } from "@/store/modules/tabMenu";

import type { iconType } from "@/utils/antIcon";
import type { NavigateFunction } from "react-router-dom";
import type { IRouter } from "@/router/index";
import type { MenuProps } from "@/utils/antComponent";

const SiderPage = memo((props: any) => {
  const navigate: NavigateFunction = useNavigate();
  const dispath = useAppDispatch();
  const location = useLocation();
  const routerItem = getCurrentRouterMap(router, location.pathname);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(
    getDefaultSelectedKeys(routerItem)
  );
  // const { menus, activeKey } = useAppSelector(
  //   (state: any) => ({
  //     menus: state.tabMenu.menus,
  //     activeKey: state.tabMenu.activeKey
  //   }),
  //   shallowEqualApp
  // );

  function getMenuItems(router: IRouter[]) {
    function menu(router: IRouter[] | any[]): any {
      const item = [];
      for (let i = 0; i < router.length; i++) {
        const route: IRouter = router[i];
        const Component = AllIconComponent[route.icon];
        const key = route.name + "," + route.path + "," + route.icon;
        if (route.children && route.children.length) {
          const children = menu(route.children);
          item.push(getItem(route.name, key, <Component />, children));
        } else if (!route.isHiddentSider) {
          item.push(getItem(route.name, key, <Component />));
        }
      }
      return item;
    }
    return menu(router);
  }
  const handleMenuItem: MenuProps["onClick"] = (e) => {
    const menuValueList = e.key.split(",");
    const menuLabel = menuValueList[0];
    const menuKey = menuValueList[1];
    const menuIcon = menuValueList[2] as iconType;

    if (selectedKeys[0] === e.key) {
      return;
    }
    setSelectedKeys([e.key]);

    if (menuKey === "/dataScreen") {
      dispath(clearTabItem());
    } else {
      dispath(
        setMenus({
          name: menuLabel,
          path: menuKey,
          icon: menuIcon
        })
      );
    }
    navigate(menuKey);
  };

  const items = getMenuItems(router);
  return (
    <div className="SiderPage">
      <Menu
        selectedKeys={selectedKeys}
        defaultOpenKeys={getOpenKeys(router, routerItem)}
        mode="inline"
        theme="light"
        items={items}
        onClick={handleMenuItem}
      />
    </div>
  );
});

export default SiderPage;
