/* esm.sh - esbuild bundle(use-sidecar@1.1.2) denonext production */
import{__assign as N}from"../../../../../esm.sh/tslib@2.6.2.js";
import*as R from"../../../../../esm.sh/preact@10.19.6/compat.js";
import{useState as h,useEffect as y}from"../../../../../esm.sh/preact@10.19.6/compat.js";
import{isNode as M}from"../../../../../esm.sh/detect-node-es@1.1.0.js";
var l={isNode:M,forceCache:!1};var S=new WeakMap,g={};function p(e,r){var t=r&&r.options||g;return l.isNode&&!t.ssr?[null,null]:b(e,r)}function b(e,r){var t=r&&r.options||g,c=l.forceCache||l.isNode&&!!t.ssr||!t.async,i=h(c?function(){return S.get(e)}:void 0),o=i[0],n=i[1],a=h(null),d=a[0],s=a[1];return y(function(){o||e().then(function(u){var v=r?r.read():u.default||u;if(!v){console.error("Sidecar error: with importer",e);var m;throw r?(console.error("Sidecar error: with medium",r),m=new Error("Sidecar medium was not found")):m=new Error("Sidecar was not found in exports"),s(function(){return m}),m}S.set(e,v),n(function(){return v})},function(u){return s(function(){return u})})},[]),[o,d]}function _(e,r){var t=function(){return r};return function(i){var o=p(e,i.sideCar),n=o[0],a=o[1];return a&&r?t:n?R.createElement(n,N({},i)):null}}var O={onError:function(e){return console.error(e)}},T=function(e){Object.assign(O,e)};
import{__assign as I}from"../../../../../esm.sh/tslib@2.6.2.js";
function C(e){return e}function E(e,r){r===void 0&&(r=C);var t=[],c=!1,i={read:function(){if(c)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(o){var n=r(o,c);return t.push(n),function(){t=t.filter(function(a){return a!==n})}},assignSyncMedium:function(o){for(c=!0;t.length;){var n=t;t=[],n.forEach(o)}t={push:function(a){return o(a)},filter:function(){return t}}},assignMedium:function(o){c=!0;var n=[];if(t.length){var a=t;t=[],a.forEach(o),n=t}var d=function(){var u=n;n=[],u.forEach(o)},s=function(){return Promise.resolve().then(d)};s(),t={push:function(u){n.push(u),s()},filter:function(u){return n=n.filter(u),t}}}};return i}function k(e,r){return r===void 0&&(r=C),E(e,r)}function P(e){e===void 0&&(e={});var r=E(null);return r.options=I({async:!0,ssr:!1},e),r}
import{__assign as Q}from"../../../../../esm.sh/tslib@2.6.2.js";
import*as f from"../../../../../esm.sh/preact@10.19.6/compat.js";
import{useState as j,useCallback as F,useEffect as L,useLayoutEffect as U}from"../../../../../esm.sh/preact@10.19.6/compat.js";
function W(e,r){function t(i){var o=i.stateRef,n=i.props,a=F(function(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return U(function(){o.current(s)}),null},[]);return f.createElement(e,Q({},n,{children:a}))}var c=f.memo(function(i){var o=i.stateRef,n=i.defaultState,a=i.children,d=j(n.current),s=d[0],u=d[1];return L(function(){o.current=u},[]),a.apply(void 0,s)},function(){return!0});return function(o){var n=f.useRef(r(o)),a=f.useRef(function(d){return n.current=d});return f.createElement(f.Fragment,null,f.createElement(t,{stateRef:a,props:o}),f.createElement(c,{stateRef:a,defaultState:n,children:o.children}))}}
import{__assign as q,__rest as z}from"../../../../../esm.sh/tslib@2.6.2.js";
import*as x from"../../../../../esm.sh/preact@10.19.6/compat.js";
var w=function(e){var r=e.sideCar,t=z(e,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var c=r.read();if(!c)throw new Error("Sidecar medium not found");return x.createElement(c,q({},t))};w.isSideCarExport=!0;function A(e,r){return e.useMedium(r),w}export{k as createMedium,P as createSidecarMedium,A as exportSidecar,W as renderCar,T as setConfig,_ as sidecar,p as useSidecar};
//# sourceMappingURL=use-sidecar.mjs.map