import{c as e,b as n,h as a,g as t,d as o,f as c}from"./@babel-7994ac7b.js";import{c as l}from"./classnames-a0172216.js";import{K as r,x as i,B as s,b as d}from"./rc-util-fa3fab39.js";import{a as p}from"./react-32c7b601.js";import{C as f}from"./rc-motion-254b4328.js";var m=p.forwardRef((function(a,t){var o,c=a.prefixCls,r=a.forceRender,i=a.className,s=a.style,d=a.children,f=a.isActive,m=a.role,v=p.useState(f||r),u=e(v,2),y=u[0],b=u[1];return p.useEffect((function(){(r||f)&&b(!0)}),[r,f]),y?p.createElement("div",{ref:t,className:l("".concat(c,"-content"),(o={},n(o,"".concat(c,"-content-active"),f),n(o,"".concat(c,"-content-inactive"),!f),o),i),style:s,role:m},p.createElement("div",{className:"".concat(c,"-content-box")},d)):null}));m.displayName="PanelContent";var v=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],u=p.forwardRef((function(e,o){var c,i,s=e.showArrow,d=void 0===s||s,u=e.headerClass,y=e.isActive,b=e.onItemClick,C=e.forceRender,h=e.className,x=e.prefixCls,I=e.collapsible,k=e.accordion,E=e.panelKey,N=e.extra,P=e.header,A=e.expandIcon,w=e.openMotion,K=e.destroyInactivePanel,R=e.children,g=a(e,v),j="disabled"===I,M="header"===I,O="icon"===I,S=null!=N&&"boolean"!=typeof N,T=function(){null==b||b(E)},B="function"==typeof A?A(e):p.createElement("i",{className:"arrow"});B&&(B=p.createElement("div",{className:"".concat(x,"-expand-icon"),onClick:["header","icon"].includes(I)?T:void 0},B));var D=l((n(c={},"".concat(x,"-item"),!0),n(c,"".concat(x,"-item-active"),y),n(c,"".concat(x,"-item-disabled"),j),c),h),L={className:l(u,(n(i={},"".concat(x,"-header"),!0),n(i,"".concat(x,"-header-collapsible-only"),M),n(i,"".concat(x,"-icon-collapsible-only"),O),i)),"aria-expanded":y,"aria-disabled":j,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==r.ENTER&&e.which!==r.ENTER||T()}};return M||O||(L.onClick=T,L.role=k?"tab":"button",L.tabIndex=j?-1:0),p.createElement("div",t({},g,{ref:o,className:D}),p.createElement("div",L,d&&B,p.createElement("span",{className:"".concat(x,"-header-text"),onClick:"header"===I?T:void 0},P),S&&p.createElement("div",{className:"".concat(x,"-extra")},N)),p.createElement(f,t({visible:y,leavedClassName:"".concat(x,"-content-hidden")},w,{forceRender:C,removeOnLeave:K}),(function(e,n){var a=e.className,t=e.style;return p.createElement(m,{ref:n,prefixCls:x,className:a,style:t,isActive:y,forceRender:C,role:k?"tabpanel":void 0},R)})))})),y=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];function b(e,n,o){return Array.isArray(e)?function(e,n){var o=n.prefixCls,c=n.accordion,l=n.collapsible,r=n.destroyInactivePanel,i=n.onItemClick,s=n.activeKey,d=n.openMotion,f=n.expandIcon;return e.map((function(e,n){var m=e.children,v=e.label,b=e.key,C=e.collapsible,h=e.onItemClick,x=e.destroyInactivePanel,I=a(e,y),k=String(null!=b?b:n),E=null!=C?C:l,N=null!=x?x:r,P=!1;return P=c?s[0]===k:s.indexOf(k)>-1,p.createElement(u,t({},I,{prefixCls:o,key:k,panelKey:k,isActive:P,accordion:c,openMotion:d,expandIcon:f,header:v,collapsible:E,onItemClick:function(e){"disabled"!==E&&(i(e),null==h||h(e))},destroyInactivePanel:N}),m)}))}(e,o):i(n).map((function(e,n){return function(e,n,a){if(!e)return null;var t=a.prefixCls,o=a.accordion,c=a.collapsible,l=a.destroyInactivePanel,r=a.onItemClick,i=a.activeKey,s=a.openMotion,d=a.expandIcon,f=e.key||String(n),m=e.props,v=m.header,u=m.headerClass,y=m.destroyInactivePanel,b=m.collapsible,C=m.onItemClick,h=!1;h=o?i[0]===f:i.indexOf(f)>-1;var x=null!=b?b:c,I={key:f,panelKey:f,header:v,headerClass:u,isActive:h,prefixCls:t,destroyInactivePanel:null!=y?y:l,openMotion:s,accordion:o,children:e.props.children,onItemClick:function(e){"disabled"!==x&&(r(e),null==C||C(e))},expandIcon:d,collapsible:x};return"string"==typeof e.type?e:(Object.keys(I).forEach((function(e){void 0===I[e]&&delete I[e]})),p.cloneElement(e,I))}(e,n,o)}))}function C(e){var n=e;if(!Array.isArray(n)){var a=o(n);n="number"===a||"string"===a?[n]:[]}return n.map((function(e){return String(e)}))}var h=p.forwardRef((function(n,a){var t=n.prefixCls,o=void 0===t?"rc-collapse":t,r=n.destroyInactivePanel,i=void 0!==r&&r,f=n.style,m=n.accordion,v=n.className,u=n.children,y=n.collapsible,h=n.openMotion,x=n.expandIcon,I=n.activeKey,k=n.defaultActiveKey,E=n.onChange,N=n.items,P=l(o,v),A=s([],{value:I,onChange:function(e){return null==E?void 0:E(e)},defaultValue:k,postState:C}),w=e(A,2),K=w[0],R=w[1];d(!u,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var g=b(N,u,{prefixCls:o,accordion:m,openMotion:h,expandIcon:x,collapsible:y,destroyInactivePanel:i,onItemClick:function(e){return R((function(){return m?K[0]===e?[]:[e]:K.indexOf(e)>-1?K.filter((function(n){return n!==e})):[].concat(c(K),[e])}))},activeKey:K});return p.createElement("div",{ref:a,className:P,style:f,role:m?"tablist":void 0},g)}));const x=Object.assign(h,{Panel:u});x.Panel;export{x as C};
