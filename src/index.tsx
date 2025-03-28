import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "@/utils/antComponent";
import zhCN from "antd/locale/zh_CN";

import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.querySelector("#app") as HTMLElement);

import {
  antComponentsTheme,
  antGlobalTokenTheme
} from "@/utils/antGlobalTheme";

root.render(
  // <React.StrictMode>
  // {/* 异步引入必须加 Suspense*/}
  <Suspense fallback={<div>加载....</div>}>
    <Provider store={store}>
      <HashRouter basename="/">
        <ConfigProvider
          locale={zhCN}
          theme={{ token: antGlobalTokenTheme, components: antComponentsTheme }}
        >
          <App />
        </ConfigProvider>
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
