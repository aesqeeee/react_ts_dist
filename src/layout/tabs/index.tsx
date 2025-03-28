import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "@/utils/globalVariable";
import { TabsWrapper } from "./style";
import * as AllIconComponent from "@/utils/antIcon";
import { Tabs } from "@/utils/antComponent";
import DropdownPage from "./dropdown";
import { cloneDeep } from "@/utils/lodash";
import { useAppSelector, shallowEqualApp, useAppDispatch } from "@/store";
import { deleteItem } from "@/store/modules/tabMenu";
import { useMessage } from "@/hook/antdHook";

import type { NavigateFunction } from "react-router-dom";
import type { routerType } from "@/router/index";
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const TabsPage = memo(() => {
  const navigate: NavigateFunction = useNavigate();
  const [tabActiveKey, setTabActiveKey] = useState<string>(HOME_PATH);
  const [tabItems, setTabItems] = useState<routerType[]>([]);
  const { messageApi, contextHolder } = useMessage();
  const dispatch = useAppDispatch();
  const { menus, activeKey } = useAppSelector(
    (state: any) => ({
      menus: state.tabMenu.menus,
      activeKey: state.tabMenu.activeKey
    }),
    shallowEqualApp
  );

  useEffect(() => {
    setTabItems(menus);
    return () => {};
  }, [menus]);

  useEffect(() => {
    if (activeKey) {
      if (activeKey === "/") {
        setTabActiveKey("/home/dashboard");
        return;
      }
      setTabActiveKey(activeKey);
    }
    return () => {};
  }, [activeKey]);

  const tabClick = (key: string, event: any) => {
    if (key === tabActiveKey) {
      return;
    }

    navigate(key);
    setTabActiveKey(key);
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "remove") {
      if (targetKey === "/") {
        messageApi.open({
          type: "warning",
          content: "提示"
        });
        return;
      }
      const targetIndex = tabItems.findIndex((item) => item.path === targetKey);
      const items = cloneDeep(tabItems);
      items.splice(targetIndex, 1);
      dispatch(deleteItem(items));
      setTabItems(items);
    }
  };
  return (
    <TabsWrapper>
      {contextHolder}
      <div className="tabs">
        <Tabs
          activeKey={tabActiveKey}
          hideAdd={true}
          type="editable-card"
          items={tabItems.map((item) => {
            const Component = AllIconComponent[item.icon];
            return {
              key: item.path,
              label: item.name,
              icon: <Component />
            };
          })}
          onTabClick={tabClick}
          onEdit={onEdit}
        />
      </div>
      <div className="dropdown">
        <DropdownPage />
      </div>
    </TabsWrapper>
  );
});

export default TabsPage;
