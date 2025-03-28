import{a as r,j as s,r as t}from"./react-32c7b601.js";import{H as e,d as i,a as o,u as a,s as c,e as m}from"./index-a7e778ad.js";import{s as n}from"./styled-components-0c78ace3.js";import{A as p}from"./antIcon-245b003b.js";import{g as l,h as j}from"./antd-eee57572.js";import{D as d,V as x,W as u,X as h}from"./@ant-design-98afa22e.js";import{l as f}from"./lodash-5ed8c413.js";import{b}from"./react-router-bc287c79.js";import"./@babel-7994ac7b.js";import"./react-dom-23648d3c.js";import"./scheduler-c51d43b5.js";import"./react-router-dom-8f087119.js";import"./@remix-run-e9fd25ef.js";import"./react-redux-1fe69321.js";import"./hoist-non-react-statics-d555263c.js";import"./react-is-80a4043c.js";import"./use-sync-external-store-767c46c4.js";import"./xlsx-4838b779.js";import"./fabric-7b72ed16.js";import"./hotkeys-js-02dbb75d.js";import"./@reduxjs-2b994f65.js";import"./immer-269227bb.js";import"./redux-177ed07c.js";import"./redux-thunk-b3d00609.js";import"./dayjs-c6b1d5e5.js";/* empty css                      */import"./rc-util-fa3fab39.js";import"./classnames-a0172216.js";import"./rc-resize-observer-c51b26ea.js";import"./resize-observer-polyfill-ad543aa3.js";import"./rc-motion-254b4328.js";import"./rc-overflow-e11a0550.js";import"./rc-picker-5cb48957.js";import"./@rc-component-52f7a36a.js";import"./@ctrl-4982d949.js";import"./rc-tabs-f997bcab.js";import"./rc-dropdown-fe41106f.js";import"./rc-menu-e175303e.js";import"./rc-select-c44667d1.js";import"./rc-virtual-list-5d6a9296.js";import"./rc-tooltip-b71545ef.js";import"./rc-input-number-f4ee0ed6.js";import"./rc-input-84597cfb.js";import"./rc-collapse-4b3023b3.js";import"./rc-drawer-250fa246.js";import"./rc-field-form-3a9c64d4.js";import"./async-validator-cf877c1f.js";import"./scroll-into-view-if-needed-fc6bc28c.js";import"./compute-scroll-into-view-5923a88b.js";import"./rc-dialog-5d47b91a.js";import"./rc-notification-f56266e7.js";import"./rc-table-dcb25e6c.js";import"./rc-tree-45133a71.js";import"./rc-checkbox-8ce5fd11.js";import"./rc-pagination-d774582e.js";import"./throttle-debounce-ba017292.js";import"./rc-textarea-9dafdc19.js";import"./tslib-096ef9df.js";import"./@emotion-9019b847.js";import"./stylis-278fc574.js";const v=n.div`
  position: relative;
  height: 40px;
  background-color: var(--vt-c-white);
  .tabs {
    display: inline-block;
    width: calc(100% - 50px);
    padding: 0 15px;
  }
  .dropdown {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    height: 100%;
    cursor: pointer;
    border-left: 1px solid var(--vt-border-color-light);
    &:hover {
      background-color: #f4f4f5;
    }
  }
`,y=n.div``,g=r.memo((r=>{const t=[{key:"1",label:s.jsxs("div",{style:{color:"#606266"},children:[s.jsx("span",{style:{marginRight:"5px"},children:s.jsx(x,{})}),s.jsx("span",{className:"menu-span",children:"刷新"})]})},{key:"2",label:s.jsxs("div",{style:{color:"#606266"},children:[s.jsx("span",{style:{marginRight:"5px"},children:s.jsx(u,{})}),s.jsx("span",{children:"关闭所有"})]})},{type:"divider"},{key:"3",label:s.jsxs("div",{style:{color:"#606266"},onClick:r=>{},children:[s.jsx("span",{style:{marginRight:"5px"},children:s.jsx(h,{})}),s.jsx("span",{children:"退出登录"})]})}];return s.jsx(y,{children:s.jsx(l,{menu:{items:t},placement:"bottomLeft",arrow:!0,trigger:["click"],children:s.jsx(d,{})})})})),k=t.memo((()=>{const r=b(),[n,l]=t.useState(e),[d,x]=t.useState([]),{messageApi:u,contextHolder:h}=i(),y=o(),{menus:k,activeKey:w}=a((r=>({menus:r.tabMenu.menus,activeKey:r.tabMenu.activeKey})),c);t.useEffect((()=>(x(k),()=>{})),[k]),t.useEffect((()=>{if(w){if("/"===w)return void l("/home/dashboard");l(w)}return()=>{}}),[w]);return s.jsxs(v,{children:[h,s.jsx("div",{className:"tabs",children:s.jsx(j,{activeKey:n,hideAdd:!0,type:"editable-card",items:d.map((r=>{const t=p[r.icon];return{key:r.path,label:r.name,icon:s.jsx(t,{})}})),onTabClick:(s,t)=>{s!==n&&(r(s),l(s))},onEdit:(r,s)=>{if("remove"===s){if("/"===r)return void u.open({type:"warning",content:"提示"});const s=d.findIndex((s=>s.path===r)),t=f.cloneDeep(d);t.splice(s,1),y(m(t)),x(t)}}})}),s.jsx("div",{className:"dropdown",children:s.jsx(g,{})})]})}));export{k as default};
