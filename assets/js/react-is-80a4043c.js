var e={exports:{}},r={},o="function"==typeof Symbol&&Symbol.for,t=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,i=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.concurrent_mode"):60111,l=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,p=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,S=o?Symbol.for("react.lazy"):60116,$=o?Symbol.for("react.block"):60121,d=o?Symbol.for("react.fundamental"):60117,x=o?Symbol.for("react.responder"):60118,C=o?Symbol.for("react.scope"):60119;function M(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case i:case y:case c:case s:case f:case m:return e;default:switch(e=e&&e.$$typeof){case u:case l:case S:case b:case a:return e;default:return r}}case n:return r}}}function v(e){return M(e)===y}r.AsyncMode=i,r.ConcurrentMode=y,r.ContextConsumer=u,r.ContextProvider=a,r.Element=t,r.ForwardRef=l,r.Fragment=c,r.Lazy=S,r.Memo=b,r.Portal=n,r.Profiler=s,r.StrictMode=f,r.Suspense=m,r.isAsyncMode=function(e){return v(e)||M(e)===i},r.isConcurrentMode=v,r.isContextConsumer=function(e){return M(e)===u},r.isContextProvider=function(e){return M(e)===a},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return M(e)===l},r.isFragment=function(e){return M(e)===c},r.isLazy=function(e){return M(e)===S},r.isMemo=function(e){return M(e)===b},r.isPortal=function(e){return M(e)===n},r.isProfiler=function(e){return M(e)===s},r.isStrictMode=function(e){return M(e)===f},r.isSuspense=function(e){return M(e)===m},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===s||e===f||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===b||e.$$typeof===a||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d||e.$$typeof===x||e.$$typeof===C||e.$$typeof===$)},r.typeOf=M,e.exports=r;var w=e.exports;export{w as r};
