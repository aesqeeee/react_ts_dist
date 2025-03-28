import React, { memo, lazy } from "react";
import router from "./router";
import { useRoutes } from "react-router-dom";
import "./global";
const RouterBeforeEach = lazy(() => import("./router/routerBeforeEach"));
const App = memo(() => {
  return (
    <RouterBeforeEach routes={router}>{useRoutes(router)}</RouterBeforeEach>
  );
});

export default App;
