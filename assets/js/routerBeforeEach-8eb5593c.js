import{r}from"./react-32c7b601.js";import{a as t,u as o,s,H as i,b as e}from"./index-792b896d.js";import{c as m,b as p}from"./react-router-bc287c79.js";import"./@babel-7994ac7b.js";import"./react-dom-23648d3c.js";import"./scheduler-c51d43b5.js";import"./react-router-dom-8f087119.js";import"./@remix-run-e9fd25ef.js";import"./react-redux-1fe69321.js";import"./hoist-non-react-statics-d555263c.js";import"./react-is-80a4043c.js";import"./use-sync-external-store-767c46c4.js";import"./antd-eee57572.js";import"./rc-util-fa3fab39.js";import"./@ant-design-98afa22e.js";import"./@emotion-9019b847.js";import"./stylis-278fc574.js";import"./classnames-a0172216.js";import"./resize-observer-polyfill-ad543aa3.js";import"./@ctrl-4982d949.js";import"./rc-resize-observer-c51b26ea.js";import"./rc-motion-254b4328.js";import"./rc-overflow-e11a0550.js";import"./rc-picker-5cb48957.js";import"./dayjs-c6b1d5e5.js";import"./@rc-component-52f7a36a.js";import"./rc-tabs-f997bcab.js";import"./rc-dropdown-fe41106f.js";import"./rc-menu-e175303e.js";import"./rc-select-c44667d1.js";import"./rc-virtual-list-5d6a9296.js";import"./rc-tooltip-b71545ef.js";import"./rc-input-number-f4ee0ed6.js";import"./rc-input-84597cfb.js";import"./rc-collapse-4b3023b3.js";import"./rc-drawer-250fa246.js";import"./rc-field-form-3a9c64d4.js";import"./async-validator-cf877c1f.js";import"./scroll-into-view-if-needed-fc6bc28c.js";import"./compute-scroll-into-view-5923a88b.js";import"./rc-dialog-5d47b91a.js";import"./rc-notification-f56266e7.js";import"./rc-table-dcb25e6c.js";import"./rc-tree-45133a71.js";import"./rc-checkbox-8ce5fd11.js";import"./rc-pagination-d774582e.js";import"./throttle-debounce-ba017292.js";import"./rc-textarea-9dafdc19.js";import"./styled-components-0c78ace3.js";import"./tslib-096ef9df.js";import"./xlsx-4838b779.js";import"./lodash-5ed8c413.js";import"./fabric-7b72ed16.js";import"./hotkeys-js-02dbb75d.js";import"./@reduxjs-2b994f65.js";import"./immer-269227bb.js";import"./redux-177ed07c.js";import"./redux-thunk-b3d00609.js";/* empty css                      */const c=(r,t)=>{for(let o of r){if(o.path==t)return o;if(o.children){const r=c(o.children,t);if(r&&r.path===t)return r}}return{}},a=r.memo((a=>{const j=m(),n=p(),l=t(),{menus:u,activeKey:d}=o((r=>({menus:r.tabMenu.menus,activeKey:r.tabMenu.activeKey})),s);return r.useEffect((()=>{let r=c(a.routes,j.pathname);"/"===r.path&&n(i),1===u.length&&"/"!==r.path&&"/dataScreen"!==j.pathname&&l(e({name:r.name,path:r.path,icon:r.icon}))}),[j.pathname]),a.children}));export{a as default,c as getCurrentRouterMap};
