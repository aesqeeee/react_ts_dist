import{h as e,g as n,e as t,c as r}from"./@babel-7994ac7b.js";import{r as a,a as i}from"./react-32c7b601.js";import{c as s}from"./classnames-a0172216.js";import{R as o}from"./rc-resize-observer-c51b26ea.js";import{q as l,i as u,a as c}from"./rc-util-fa3fab39.js";import{r as m}from"./react-dom-23648d3c.js";var f=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],d=void 0;function v(r,i){var l=r.prefixCls,u=r.invalidate,c=r.item,m=r.renderItem,v=r.responsive,p=r.responsiveDisabled,y=r.registerSize,h=r.itemKey,b=r.className,E=r.style,g=r.children,N=r.display,R=r.order,C=r.component,I=void 0===C?"div":C,w=e(r,f),x=v&&!N;function S(e){y(h,e)}a.useEffect((function(){return function(){S(null)}}),[]);var M,z=m&&c!==d?m(c):g;u||(M={opacity:x?0:1,height:x?0:d,overflowY:x?"hidden":d,order:v?R:d,pointerEvents:x?"none":d,position:x?"absolute":d});var k={};x&&(k["aria-hidden"]=!0);var j=a.createElement(I,n({className:s(!u&&l,b),style:t(t({},M),E)},k,w,{ref:i}),z);return v&&(j=a.createElement(o,{onResize:function(e){S(e.offsetWidth)},disabled:p},j)),j}var p=a.forwardRef(v);function y(){var e=a.useRef(null);return function(n){e.current||(e.current=[],function(e){if("undefined"==typeof MessageChannel)l(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}((function(){m.unstable_batchedUpdates((function(){e.current.forEach((function(e){e()})),e.current=null}))}))),e.current.push(n)}}function h(e,n){var t=a.useState(n),i=r(t,2),s=i[0],o=i[1];return[s,u((function(n){e((function(){o(n)}))}))]}p.displayName="Item";var b=i.createContext(null),E=["component"],g=["className"],N=["className"],R=function(t,r){var i=a.useContext(b);if(!i){var o=t.component,l=void 0===o?"div":o,u=e(t,E);return a.createElement(l,n({},u,{ref:r}))}var c=i.className,m=e(i,g),f=t.className,d=e(t,N);return a.createElement(b.Provider,{value:null},a.createElement(p,n({ref:r,className:s(c,f)},m,d)))},C=a.forwardRef(R);C.displayName="RawItem";var I=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],w="responsive",x="invalidate";function S(e){return"+ ".concat(e.length," ...")}function M(i,l){var u=i.prefixCls,m=void 0===u?"rc-overflow":u,f=i.data,d=void 0===f?[]:f,v=i.renderItem,E=i.renderRawItem,g=i.itemKey,N=i.itemWidth,R=void 0===N?10:N,C=i.ssr,M=i.style,z=i.className,k=i.maxCount,j=i.renderRest,A=i.renderRawRest,K=i.suffix,_=i.component,D=void 0===_?"div":_,P=i.itemComponent,V=i.onVisibleChange,W=e(i,I),F="full"===C,T=y(),G=h(T,null),O=r(G,2),X=O[0],q=O[1],L=X||0,U=h(T,new Map),Y=r(U,2),B=Y[0],H=Y[1],J=h(T,0),Q=r(J,2),Z=Q[0],$=Q[1],ee=h(T,0),ne=r(ee,2),te=ne[0],re=ne[1],ae=h(T,0),ie=r(ae,2),se=ie[0],oe=ie[1],le=a.useState(null),ue=r(le,2),ce=ue[0],me=ue[1],fe=a.useState(null),de=r(fe,2),ve=de[0],pe=de[1],ye=a.useMemo((function(){return null===ve&&F?Number.MAX_SAFE_INTEGER:ve||0}),[ve,X]),he=a.useState(!1),be=r(he,2),Ee=be[0],ge=be[1],Ne="".concat(m,"-item"),Re=Math.max(Z,te),Ce=k===w,Ie=d.length&&Ce,we=k===x,xe=Ie||"number"==typeof k&&d.length>k,Se=a.useMemo((function(){var e=d;return Ie?e=null===X&&F?d:d.slice(0,Math.min(d.length,L/R)):"number"==typeof k&&(e=d.slice(0,k)),e}),[d,R,X,k,Ie]),Me=a.useMemo((function(){return Ie?d.slice(ye+1):d.slice(Se.length)}),[d,Se,Ie,ye]),ze=a.useCallback((function(e,n){var t;return"function"==typeof g?g(e):null!==(t=g&&(null==e?void 0:e[g]))&&void 0!==t?t:n}),[g]),ke=a.useCallback(v||function(e){return e},[v]);function je(e,n,t){(ve!==e||void 0!==n&&n!==ce)&&(pe(e),t||(ge(e<d.length-1),null==V||V(e)),void 0!==n&&me(n))}function Ae(e,n){H((function(t){var r=new Map(t);return null===n?r.delete(e):r.set(e,n),r}))}function Ke(e){return B.get(ze(Se[e],e))}c((function(){if(L&&"number"==typeof Re&&Se){var e=se,n=Se.length,t=n-1;if(!n)return void je(0,null);for(var r=0;r<n;r+=1){var a=Ke(r);if(F&&(a=a||0),void 0===a){je(r-1,void 0,!0);break}if(e+=a,0===t&&e<=L||r===t-1&&e+Ke(t)<=L){je(t,null);break}if(e+Re>L){je(r-1,e-a-se+te);break}}K&&Ke(0)+se>L&&me(null)}}),[L,B,te,se,ze,Se]);var _e=Ee&&!!Me.length,De={};null!==ce&&Ie&&(De={position:"absolute",left:ce,top:0});var Pe,Ve={prefixCls:Ne,responsive:Ie,component:P,invalidate:we},We=E?function(e,n){var r=ze(e,n);return a.createElement(b.Provider,{key:r,value:t(t({},Ve),{},{order:n,item:e,itemKey:r,registerSize:Ae,display:n<=ye})},E(e,n))}:function(e,t){var r=ze(e,t);return a.createElement(p,n({},Ve,{order:t,key:r,item:e,renderItem:ke,itemKey:r,registerSize:Ae,display:t<=ye}))},Fe={order:_e?ye:Number.MAX_SAFE_INTEGER,className:"".concat(Ne,"-rest"),registerSize:function(e,n){re(n),$(te)},display:_e};if(A)A&&(Pe=a.createElement(b.Provider,{value:t(t({},Ve),Fe)},A(Me)));else{var Te=j||S;Pe=a.createElement(p,n({},Ve,Fe),"function"==typeof Te?Te(Me):Te)}var Ge=a.createElement(D,n({className:s(!we&&m,z),style:M,ref:l},W),Se.map(We),xe?Pe:null,K&&a.createElement(p,n({},Ve,{responsive:Ce,responsiveDisabled:!Ie,order:ye,className:"".concat(Ne,"-suffix"),registerSize:function(e,n){oe(n)},display:!0,style:De}),K));return Ce&&(Ge=a.createElement(o,{onResize:function(e,n){q(n.clientWidth)},disabled:!Ie},Ge)),Ge}var z=a.forwardRef(M);z.displayName="Overflow",z.Item=C,z.RESPONSIVE=w,z.INVALIDATE=x;export{z as F};
