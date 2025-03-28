import React, { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import {
  TableList,
  WaterChart,
  ErrorPage,
  Home,
  BackendManageLayout,
  Dashboard,
  Readxls,
  FreeDrawing
} from "@/views/backend-manage/lazy-router/index";
import type { iconType } from "@/utils/antIcon";
const DataScreen = lazy(() => import("@/views/data-screen/index"));
const HelloWrold = lazy(() => import("../views/demo/helloWorld"));
const Other = lazy(() => import("../views/demo/other"));
const NotFund = lazy(() => import("../views/NotFund"));

export type routerType = {
  path: string;
  icon: iconType;
  name: string;
  children?: any;
  isHiddentSider?: boolean;
};

export type IRouter = RouteObject & routerType;

const router: IRouter[] = [
  {
    path: "/",
    name: "首页",
    icon: "HomeOutlined",
    // icon: <StepForwardOutlined />,
    element: <Home />
  },
  {
    path: "/dataScreen",
    name: "数据大屏",
    icon: "RadarChartOutlined",
    // icon: <StepForwardOutlined />,
    element: <DataScreen />
  },
  {
    path: "/helloWorld",
    name: "测试页面",
    icon: "BugOutlined",
    element: <HelloWrold />,
    isHiddentSider: true
  },
  {
    path: "/home",
    name: "数据报表",
    icon: "TableOutlined",
    element: <BackendManageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/dashboard",
        name: "首页",
        icon: "StepForwardOutlined",
        // icon: <StepForwardOutlined />,
        element: <Dashboard />,
        isHiddentSider: true
      },
      {
        path: "/home/table",
        name: "列表内容",
        key: "table",
        icon: "StepForwardOutlined",
        element: <TableList />
      },
      {
        path: "/home/readxls",
        name: "读取xls文件内容",
        key: "readxls",
        icon: "FileSearchOutlined",
        element: <Readxls />
      }
    ]
  },
  {
    path: "/echarts",
    name: "echarts",
    icon: "PieChartOutlined",
    element: <BackendManageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/echarts/waterChart",
        name: "水型图",
        icon: "PieChartOutlined",
        // icon: <StepForwardOutlined />,
        element: <WaterChart />
      }
    ]
  },
  {
    path: "/drawing",
    name: "绘制",
    icon: "EditOutlined",
    element: <BackendManageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/drawing/freeDrawing",
        name: "画板",
        icon: "EditOutlined",
        // icon: <StepForwardOutlined />,
        element: <FreeDrawing />
      }
    ]
  },
  {
    path: "/other",
    name: "其他页面",
    icon: "StepForwardOutlined",
    element: <Other />,
    isHiddentSider: true
  },
  {
    path: "*",
    name: "错误页面",
    icon: "StepForwardOutlined",
    element: <NotFund />,
    isHiddentSider: true
  }
];

export default router;
