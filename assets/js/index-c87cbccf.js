import{_ as r}from"./index-a7e778ad.js";import{r as t,j as o}from"./react-32c7b601.js";import{s as i}from"./styled-components-0c78ace3.js";import"./react-dom-23648d3c.js";import"./@babel-7994ac7b.js";import"./scheduler-c51d43b5.js";import"./react-router-dom-8f087119.js";import"./react-router-bc287c79.js";import"./@remix-run-e9fd25ef.js";import"./react-redux-1fe69321.js";import"./hoist-non-react-statics-d555263c.js";import"./react-is-80a4043c.js";import"./use-sync-external-store-767c46c4.js";import"./antd-eee57572.js";import"./rc-util-fa3fab39.js";import"./@ant-design-98afa22e.js";import"./@emotion-9019b847.js";import"./stylis-278fc574.js";import"./classnames-a0172216.js";import"./resize-observer-polyfill-ad543aa3.js";import"./@ctrl-4982d949.js";import"./rc-resize-observer-c51b26ea.js";import"./rc-motion-254b4328.js";import"./rc-overflow-e11a0550.js";import"./rc-picker-5cb48957.js";import"./dayjs-c6b1d5e5.js";import"./@rc-component-52f7a36a.js";import"./rc-tabs-f997bcab.js";import"./rc-dropdown-fe41106f.js";import"./rc-menu-e175303e.js";import"./rc-select-c44667d1.js";import"./rc-virtual-list-5d6a9296.js";import"./rc-tooltip-b71545ef.js";import"./rc-input-number-f4ee0ed6.js";import"./rc-input-84597cfb.js";import"./rc-collapse-4b3023b3.js";import"./rc-drawer-250fa246.js";import"./rc-field-form-3a9c64d4.js";import"./async-validator-cf877c1f.js";import"./scroll-into-view-if-needed-fc6bc28c.js";import"./compute-scroll-into-view-5923a88b.js";import"./rc-dialog-5d47b91a.js";import"./rc-notification-f56266e7.js";import"./rc-table-dcb25e6c.js";import"./rc-tree-45133a71.js";import"./rc-checkbox-8ce5fd11.js";import"./rc-pagination-d774582e.js";import"./throttle-debounce-ba017292.js";import"./rc-textarea-9dafdc19.js";import"./xlsx-4838b779.js";import"./lodash-5ed8c413.js";import"./fabric-7b72ed16.js";import"./hotkeys-js-02dbb75d.js";import"./@reduxjs-2b994f65.js";import"./immer-269227bb.js";import"./redux-177ed07c.js";import"./redux-thunk-b3d00609.js";/* empty css                      */import"./tslib-096ef9df.js";const s=i.div`
  .HanderPage {
    display: flex;
    align-items: center;
    color: #fff;
  }
  .demo-logo {
    display: flex;
    width: ${r=>r.theme.width+"px"};
    height: 64px;
    margin-inline-end: 15px;
  }
  .title {
    font-weight: bold;
    font-size: 22px;
    white-space: nowrap;
  }
  .right-content {
    width: 100%;
  }
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`,e=t.lazy((()=>r((()=>import("./left-content-81749f4d.js")),["assets/js/left-content-81749f4d.js","assets/js/index-a7e778ad.js","assets/js/react-32c7b601.js","assets/js/@babel-7994ac7b.js","assets/js/react-dom-23648d3c.js","assets/js/scheduler-c51d43b5.js","assets/js/react-router-dom-8f087119.js","assets/js/react-router-bc287c79.js","assets/js/@remix-run-e9fd25ef.js","assets/js/react-redux-1fe69321.js","assets/js/hoist-non-react-statics-d555263c.js","assets/js/react-is-80a4043c.js","assets/js/use-sync-external-store-767c46c4.js","assets/js/antd-eee57572.js","assets/js/rc-util-fa3fab39.js","assets/js/@ant-design-98afa22e.js","assets/js/@emotion-9019b847.js","assets/js/stylis-278fc574.js","assets/js/classnames-a0172216.js","assets/js/resize-observer-polyfill-ad543aa3.js","assets/js/@ctrl-4982d949.js","assets/js/rc-resize-observer-c51b26ea.js","assets/js/rc-motion-254b4328.js","assets/js/rc-overflow-e11a0550.js","assets/js/rc-picker-5cb48957.js","assets/js/dayjs-c6b1d5e5.js","assets/js/@rc-component-52f7a36a.js","assets/js/rc-tabs-f997bcab.js","assets/js/rc-dropdown-fe41106f.js","assets/js/rc-menu-e175303e.js","assets/js/rc-select-c44667d1.js","assets/js/rc-virtual-list-5d6a9296.js","assets/js/rc-tooltip-b71545ef.js","assets/js/rc-input-number-f4ee0ed6.js","assets/js/rc-input-84597cfb.js","assets/js/rc-collapse-4b3023b3.js","assets/js/rc-drawer-250fa246.js","assets/js/rc-field-form-3a9c64d4.js","assets/js/async-validator-cf877c1f.js","assets/js/scroll-into-view-if-needed-fc6bc28c.js","assets/js/compute-scroll-into-view-5923a88b.js","assets/js/rc-dialog-5d47b91a.js","assets/js/rc-notification-f56266e7.js","assets/js/rc-table-dcb25e6c.js","assets/js/rc-tree-45133a71.js","assets/js/rc-checkbox-8ce5fd11.js","assets/js/rc-pagination-d774582e.js","assets/js/throttle-debounce-ba017292.js","assets/js/rc-textarea-9dafdc19.js","assets/js/styled-components-0c78ace3.js","assets/js/tslib-096ef9df.js","assets/js/xlsx-4838b779.js","assets/js/lodash-5ed8c413.js","assets/js/fabric-7b72ed16.js","assets/js/hotkeys-js-02dbb75d.js","assets/js/@reduxjs-2b994f65.js","assets/js/immer-269227bb.js","assets/js/redux-177ed07c.js","assets/js/redux-thunk-b3d00609.js","assets/css/f07196e6.css","assets/css/febaee81.css"]))),m=t.memo((r=>o.jsx(s,{theme:{width:r.width},children:o.jsxs("div",{className:"HanderPage",children:[o.jsxs("div",{className:"demo-logo",children:[o.jsx("img",{src:"/assets/img/6000b0e9.svg",className:"App-logo",alt:"logo"}),o.jsx("div",{className:"title",children:"react_vite"})]}),o.jsx("div",{className:"right-content",children:o.jsx(e,{})})]})})));export{m as default};
