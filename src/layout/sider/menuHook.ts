import type { MenuProps } from "@/utils/antComponent";

import { getCurrentRouterMap } from "@/router/routerBeforeEach";
import type { IRouter } from "@/router/index";
export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

export function getOpenKeys(router: IRouter[], routerItem: IRouter) {
  const routerNameList = routerItem.path.split("/");
  // function getChildrenKey(routerItem: IRouter[], name: string) {
  //   const items = routerItem.find(item => {
  //     const names = item.name.split("/");
  //     if(names[2] === name)
  //   })
  // }
  if (routerNameList.length === 3 && routerNameList[2] !== "dashboard") {
    const keys = getCurrentRouterMap(router, "/" + routerNameList[1]);
    return [keys.name + "," + keys.path + "," + keys.icon];
  }
  return [];
}

export function getDefaultSelectedKeys(routerItem: IRouter) {
  if (routerItem.path === "/home/dashboard") {
    return ["首页,/,HomeOutlined"];
  } else {
    return [routerItem.name + "," + routerItem.path + "," + routerItem.icon];
  }
}
