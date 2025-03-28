import { lazy } from "react";

const HeaderPage = lazy(() => import("./header/index"));
const SiderPage = lazy(() => import("./sider/index"));
const FooterPage = lazy(() => import("./footer/index"));
const TabsPage = lazy(() => import("./tabs/index"));

export { HeaderPage, SiderPage, FooterPage, TabsPage };
