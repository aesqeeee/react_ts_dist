import{r as e,R as t}from"./react-32c7b601.js";import{R as r}from"./react-router-bc287c79.js";import{c as s}from"./@remix-run-e9fd25ef.js";
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const o=t.startTransition;function a(t){let{basename:a,children:n,future:i,window:c}=t,u=e.useRef();null==u.current&&(u.current=s({window:c,v5Compat:!0}));let l=u.current,[m,S]=e.useState({action:l.action,location:l.location}),{v7_startTransition:h}=i||{},b=e.useCallback((e=>{h&&o?o((()=>S(e))):S(e)}),[S,h]);return e.useLayoutEffect((()=>l.listen(b)),[l,b]),e.createElement(r,{basename:a,children:n,location:m.location,navigationType:m.action,navigator:l})}var n,i,c,u;(i=n||(n={})).UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState",(u=c||(c={})).UseFetcher="useFetcher",u.UseFetchers="useFetchers",u.UseScrollRestoration="useScrollRestoration";export{a as H};
