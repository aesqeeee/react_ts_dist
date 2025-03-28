import{b as e,g as n,h as r,c as t,d as a}from"./@babel-7994ac7b.js";import{n as u,t as s,g as o,c as i,v as c,d as l}from"./@rc-component-52f7a36a.js";import{c as f}from"./classnames-a0172216.js";import{B as d,t as p}from"./rc-input-84597cfb.js";import{r as m}from"./react-32c7b601.js";import{b as v,q as b,G as g,f as N,H as E}from"./rc-util-fa3fab39.js";function h(r){var t=r.prefixCls,a=r.upNode,u=r.downNode,s=r.upDisabled,o=r.downDisabled,i=r.onStep,c=m.useRef(),l=m.useRef([]),d=m.useRef();d.current=i;var p=function(){clearTimeout(c.current)},v=function(e,n){e.preventDefault(),p(),d.current(n),c.current=setTimeout((function e(){d.current(n),c.current=setTimeout(e,200)}),600)};if(m.useEffect((function(){return function(){p(),l.current.forEach((function(e){return b.cancel(e)}))}}),[]),g())return null;var N="".concat(t,"-handler"),E=f(N,"".concat(N,"-up"),e({},"".concat(N,"-up-disabled"),s)),h=f(N,"".concat(N,"-down"),e({},"".concat(N,"-down-disabled"),o)),w=function(){return l.current.push(b(p))},y={unselectable:"on",role:"button",onMouseUp:w,onMouseLeave:w};return m.createElement("div",{className:"".concat(N,"-wrap")},m.createElement("span",n({},y,{onMouseDown:function(e){v(e,!0)},"aria-label":"Increase Value","aria-disabled":s,className:E}),a||m.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),m.createElement("span",n({},y,{onMouseDown:function(e){v(e,!1)},"aria-label":"Decrease Value","aria-disabled":o,className:h}),u||m.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}function w(e){var n="number"==typeof e?u(e):s(e).fullStr;return n.includes(".")?s(n.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var y=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","changeOnWheel","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","changeOnBlur"],x=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","className","classNames"],S=function(e,n){return e||n.isEmpty()?n.toString():n.toNumber()},C=function(e){var n=o(e);return n.isInvalidate()?null:n},I=m.forwardRef((function(s,d){var p,g=s.prefixCls,x=void 0===g?"rc-input-number":g,I=s.className,R=s.style,D=s.min,M=s.max,T=s.step,B=void 0===T?1:T,O=s.defaultValue,q=s.value,A=s.disabled,j=s.readOnly,k=s.upHandler,U=s.downHandler,W=s.keyboard,H=s.changeOnWheel,V=void 0!==H&&H,K=s.controls,L=void 0===K||K;s.classNames;var P=s.stringMode,F=s.parser,$=s.formatter,G=s.precision,Y=s.decimalSeparator,z=s.onChange,J=s.onInput,Q=s.onPressEnter,X=s.onStep,Z=s.changeOnBlur,_=void 0===Z||Z,ee=r(s,y),ne="".concat(x,"-input"),re=m.useRef(null),te=m.useState(!1),ae=t(te,2),ue=ae[0],se=ae[1],oe=m.useRef(!1),ie=m.useRef(!1),ce=m.useRef(!1),le=m.useState((function(){return o(null!=q?q:O)})),fe=t(le,2),de=fe[0],pe=fe[1];var me=m.useCallback((function(e,n){if(!n)return G>=0?G:Math.max(i(e),i(B))}),[G,B]),ve=m.useCallback((function(e){var n=String(e);if(F)return F(n);var r=n;return Y&&(r=r.replace(Y,".")),r.replace(/[^\w.-]+/g,"")}),[F,Y]),be=m.useRef(""),ge=m.useCallback((function(e,n){if($)return $(e,{userTyping:n,input:String(be.current)});var r="number"==typeof e?u(e):e;if(!n){var t=me(r,n);if(c(r)&&(Y||t>=0))r=l(r,Y||".",t)}return r}),[$,me,Y]),Ne=m.useState((function(){var e=null!=O?O:q;return de.isInvalidate()&&["string","number"].includes(a(e))?Number.isNaN(e)?"":e:ge(de.toString(),!1)})),Ee=t(Ne,2),he=Ee[0],we=Ee[1];function ye(e,n){we(ge(e.isInvalidate()?e.toString(!1):e.toString(!n),n))}be.current=he;var xe,Se,Ce,Ie,Re,De=m.useMemo((function(){return C(M)}),[M,G]),Me=m.useMemo((function(){return C(D)}),[D,G]),Te=m.useMemo((function(){return!(!De||!de||de.isInvalidate())&&De.lessEquals(de)}),[De,de]),Be=m.useMemo((function(){return!(!Me||!de||de.isInvalidate())&&de.lessEquals(Me)}),[Me,de]),Oe=(xe=re.current,Se=ue,Ce=m.useRef(null),[function(){try{var e=xe.selectionStart,n=xe.selectionEnd,r=xe.value,t=r.substring(0,e),a=r.substring(n);Ce.current={start:e,end:n,value:r,beforeTxt:t,afterTxt:a}}catch(u){}},function(){if(xe&&Ce.current&&Se)try{var e=xe.value,n=Ce.current,r=n.beforeTxt,t=n.afterTxt,a=n.start,u=e.length;if(e.endsWith(t))u=e.length-Ce.current.afterTxt.length;else if(e.startsWith(r))u=r.length;else{var s=r[a-1],o=e.indexOf(s,a-1);-1!==o&&(u=o+1)}xe.setSelectionRange(u,u)}catch(i){v(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(i.message))}}]),qe=t(Oe,2),Ae=qe[0],je=qe[1],ke=function(e){return De&&!e.lessEquals(De)?De:Me&&!Me.lessEquals(e)?Me:null},Ue=function(e){return!ke(e)},We=function(e,n){var r,t=e,a=Ue(t)||t.isEmpty();if(t.isEmpty()||n||(t=ke(t)||t,a=!0),!j&&!A&&a){var u=t.toString(),s=me(u,n);return s>=0&&(t=o(l(u,".",s)),Ue(t)||(t=o(l(u,".",s,!0)))),t.equals(de)||(r=t,void 0===q&&pe(r),null==z||z(t.isEmpty()?null:S(P,t)),void 0===q&&ye(t,n)),t}return de},He=(Ie=m.useRef(0),Re=function(){b.cancel(Ie.current)},m.useEffect((function(){return Re}),[]),function(e){Re(),Ie.current=b((function(){e()}))}),Ve=function e(n){if(Ae(),be.current=n,we(n),!ie.current){var r=ve(n),t=o(r);t.isNaN()||We(t,!0)}null==J||J(n),He((function(){var r=n;F||(r=n.replace(/。/g,".")),r!==n&&e(r)}))},Ke=function(e){var n;if(!(e&&Te||!e&&Be)){oe.current=!1;var r=o(ce.current?w(B):B);e||(r=r.negate());var t=(de||o(0)).add(r.toString()),a=We(t,!1);null==X||X(S(P,a),{offset:ce.current?w(B):B,type:e?"up":"down"}),null===(n=re.current)||void 0===n||n.focus()}},Le=function(e){var n=o(ve(he)),r=n;r=n.isNaN()?We(de,e):We(n,e),void 0!==q?ye(de,!1):r.isNaN()||ye(r,!1)};m.useEffect((function(){if(V&&ue){var e=function(e){Ke(e.deltaY<0),e.preventDefault()},n=re.current;if(n)return n.addEventListener("wheel",e,{passive:!1}),function(){return n.removeEventListener("wheel",e)}}}));return E((function(){de.isInvalidate()||ye(de,!1)}),[G,$]),E((function(){var e=o(q);pe(e);var n=o(ve(he));e.equals(n)&&oe.current&&!$||ye(e,oe.current)}),[q]),E((function(){$&&je()}),[he]),m.createElement("div",{className:f(x,I,(p={},e(p,"".concat(x,"-focused"),ue),e(p,"".concat(x,"-disabled"),A),e(p,"".concat(x,"-readonly"),j),e(p,"".concat(x,"-not-a-number"),de.isNaN()),e(p,"".concat(x,"-out-of-range"),!de.isInvalidate()&&!Ue(de)),p)),style:R,onFocus:function(){se(!0)},onBlur:function(){_&&Le(!1),se(!1),oe.current=!1},onKeyDown:function(e){var n=e.key,r=e.shiftKey;oe.current=!0,ce.current=r,"Enter"===n&&(ie.current||(oe.current=!1),Le(!1),null==Q||Q(e)),!1!==W&&!ie.current&&["Up","ArrowUp","Down","ArrowDown"].includes(n)&&(Ke("Up"===n||"ArrowUp"===n),e.preventDefault())},onKeyUp:function(){oe.current=!1,ce.current=!1},onCompositionStart:function(){ie.current=!0},onCompositionEnd:function(){ie.current=!1,Ve(re.current.value)},onBeforeInput:function(){oe.current=!0}},L&&m.createElement(h,{prefixCls:x,upNode:k,downNode:U,upDisabled:Te,downDisabled:Be,onStep:Ke}),m.createElement("div",{className:"".concat(ne,"-wrap")},m.createElement("input",n({autoComplete:"off",role:"spinbutton","aria-valuemin":D,"aria-valuemax":M,"aria-valuenow":de.isInvalidate()?null:de.toString(),step:B},ee,{ref:N(re,d),className:ne,value:he,onChange:function(e){Ve(e.target.value)},disabled:A,readOnly:j}))))})),R=m.forwardRef((function(e,t){var a=e.disabled,u=e.style,s=e.prefixCls,o=e.value,i=e.prefix,c=e.suffix,l=e.addonBefore,f=e.addonAfter,v=e.className,b=e.classNames,g=r(e,x),E=m.useRef(null);return m.createElement(d,{className:v,triggerFocus:function(e){E.current&&p(E.current,e)},prefixCls:s,value:o,disabled:a,style:u,prefix:i,suffix:c,addonAfter:f,addonBefore:l,classNames:b,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"}},m.createElement(I,n({prefixCls:s,disabled:a,ref:N(E,t),className:null==b?void 0:b.input},g)))}));R.displayName="InputNumber";export{R as I};
