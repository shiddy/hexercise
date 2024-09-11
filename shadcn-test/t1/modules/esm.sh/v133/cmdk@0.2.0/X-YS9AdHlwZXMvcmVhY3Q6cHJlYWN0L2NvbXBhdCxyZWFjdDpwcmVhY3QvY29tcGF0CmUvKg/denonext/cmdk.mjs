/* esm.sh - esbuild bundle(cmdk@0.2.0) denonext production */
import*as y from"../../../../../esm.sh/v132/_@radix-ui/react-dialog@1.0.5.js";
import*as t from"../../../../../esm.sh/preact@10.19.6/compat.js";
import ce from"../../../../../esm.sh/command-score@0.1.2.js";
var de='[cmdk-list-sizer=""]',L='[cmdk-group=""]',U='[cmdk-group-items=""]',se='[cmdk-group-heading=""]',ee='[cmdk-item=""]',_=`${ee}:not([aria-disabled="true"])`,W="cmdk-item-select",w="data-value",fe=(l,u)=>ce(l,u),te=t.createContext(void 0),F=()=>t.useContext(te),re=t.createContext(void 0),J=()=>t.useContext(re),le=t.createContext(void 0),ne=t.forwardRef((l,u)=>{let r=t.useRef(null),a=k(()=>({search:"",value:"",filtered:{count:0,items:new Map,groups:new Set}})),c=k(()=>new Set),o=k(()=>new Map),f=k(()=>new Map),m=k(()=>new Set),s=ae(l),{label:g,children:C,value:b,onValueChange:I,filter:K,shouldFilter:ie,...q}=l,$=t.useId(),p=t.useId(),O=t.useId(),S=Se();x(()=>{if(b!==void 0){let e=b.trim().toLowerCase();a.current.value=e,S(6,Q),E.emit()}},[b]);let E=t.useMemo(()=>({subscribe:e=>(m.current.add(e),()=>m.current.delete(e)),snapshot:()=>a.current,setState:(e,i,d)=>{var n,v,h;if(!Object.is(a.current[e],i)){if(a.current[e]=i,e==="search")G(),j(),S(1,z);else if(e==="value")if(((n=s.current)==null?void 0:n.value)!==void 0){(h=(v=s.current).onValueChange)==null||h.call(v,i);return}else d||S(5,Q);E.emit()}},emit:()=>{m.current.forEach(e=>e())}}),[]),V=t.useMemo(()=>({value:(e,i)=>{i!==f.current.get(e)&&(f.current.set(e,i),a.current.filtered.items.set(e,N(i)),S(2,()=>{j(),E.emit()}))},item:(e,i)=>(c.current.add(e),i&&(o.current.has(i)?o.current.get(i).add(e):o.current.set(i,new Set([e]))),S(3,()=>{G(),j(),a.current.value||z(),E.emit()}),()=>{f.current.delete(e),c.current.delete(e),a.current.filtered.items.delete(e),S(4,()=>{G(),z(),E.emit()})}),group:e=>(o.current.has(e)||o.current.set(e,new Set),()=>{f.current.delete(e),o.current.delete(e)}),filter:()=>s.current.shouldFilter,label:g||l["aria-label"],listId:$,inputId:O,labelId:p}),[]);function N(e){var i;let d=((i=s.current)==null?void 0:i.filter)??fe;return e?d(e,a.current.search):0}function j(){if(!r.current||!a.current.search||s.current.shouldFilter===!1)return;let e=a.current.filtered.items,i=[];a.current.filtered.groups.forEach(n=>{let v=o.current.get(n),h=0;v.forEach(D=>{let oe=e.get(D);h=Math.max(oe,h)}),i.push([n,h])});let d=r.current.querySelector(de);A().sort((n,v)=>{let h=n.getAttribute(w),D=v.getAttribute(w);return(e.get(D)??0)-(e.get(h)??0)}).forEach(n=>{let v=n.closest(U);v?v.appendChild(n.parentElement===v?n:n.closest(`${U} > *`)):d.appendChild(n.parentElement===d?n:n.closest(`${U} > *`))}),i.sort((n,v)=>v[1]-n[1]).forEach(n=>{let v=r.current.querySelector(`${L}[${w}="${n[0]}"]`);v?.parentElement.appendChild(v)})}function z(){let e=A().find(d=>!d.ariaDisabled),i=e?.getAttribute(w);E.setState("value",i||void 0)}function G(){if(!a.current.search||s.current.shouldFilter===!1){a.current.filtered.count=c.current.size;return}a.current.filtered.groups=new Set;let e=0;for(let i of c.current){let d=f.current.get(i),n=N(d);a.current.filtered.items.set(i,n),n>0&&e++}for(let[i,d]of o.current)for(let n of d)if(a.current.filtered.items.get(n)>0){a.current.filtered.groups.add(i);break}a.current.filtered.count=e}function Q(){var e,i,d;let n=P();n&&(((e=n.parentElement)==null?void 0:e.firstChild)===n&&((d=(i=n.closest(L))==null?void 0:i.querySelector(se))==null||d.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function P(){return r.current.querySelector(`${ee}[aria-selected="true"]`)}function A(){return Array.from(r.current.querySelectorAll(_))}function B(e){let i=A()[e];i&&E.setState("value",i.getAttribute(w))}function H(e){var i;let d=P(),n=A(),v=n.findIndex(D=>D===d),h=n[v+e];(i=s.current)!=null&&i.loop&&(h=v+e<0?n[n.length-1]:v+e===n.length?n[0]:n[v+e]),h&&E.setState("value",h.getAttribute(w))}function T(e){let i=P(),d=i?.closest(L),n;for(;d&&!n;)d=e>0?we(d,L):ye(d,L),n=d?.querySelector(_);n?E.setState("value",n.getAttribute(w)):H(e)}let X=()=>B(A().length-1),Y=e=>{e.preventDefault(),e.metaKey?X():e.altKey?T(1):H(1)},Z=e=>{e.preventDefault(),e.metaKey?B(0):e.altKey?T(-1):H(-1)};return t.createElement("div",{ref:M([r,u]),...q,"cmdk-root":"",onKeyDown:e=>{var i;if((i=q.onKeyDown)==null||i.call(q,e),!e.defaultPrevented)switch(e.key){case"n":case"j":{e.ctrlKey&&Y(e);break}case"ArrowDown":{Y(e);break}case"p":case"k":{e.ctrlKey&&Z(e);break}case"ArrowUp":{Z(e);break}case"Home":{e.preventDefault(),B(0);break}case"End":{e.preventDefault(),X();break}case"Enter":{e.preventDefault();let d=P();if(d){let n=new Event(W);d.dispatchEvent(n)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:V.inputId,id:V.labelId,style:ke},g),t.createElement(re.Provider,{value:E},t.createElement(te.Provider,{value:V},C)))}),me=t.forwardRef((l,u)=>{let r=t.useId(),a=t.useRef(null),c=t.useContext(le),o=F(),f=ae(l);x(()=>o.item(r,c),[]);let m=ue(r,a,[l.value,l.children,a]),s=J(),g=R(p=>p.value&&p.value===m.current),C=R(p=>o.filter()===!1?!0:p.search?p.filtered.items.get(r)>0:!0);t.useEffect(()=>{let p=a.current;if(!(!p||l.disabled))return p.addEventListener(W,b),()=>p.removeEventListener(W,b)},[C,l.onSelect,l.disabled]);function b(){var p,O;(O=(p=f.current).onSelect)==null||O.call(p,m.current)}function I(){s.setState("value",m.current,!0)}if(!C)return null;let{disabled:K,value:ie,onSelect:q,...$}=l;return t.createElement("div",{ref:M([a,u]),...$,"cmdk-item":"",role:"option","aria-disabled":K||void 0,"aria-selected":g||void 0,"data-selected":g||void 0,onPointerMove:K?void 0:I,onClick:K?void 0:b},l.children)}),ve=t.forwardRef((l,u)=>{let{heading:r,children:a,...c}=l,o=t.useId(),f=t.useRef(null),m=t.useRef(null),s=t.useId(),g=F(),C=R(I=>g.filter()===!1?!0:I.search?I.filtered.groups.has(o):!0);x(()=>g.group(o),[]),ue(o,f,[l.value,l.heading,m]);let b=t.createElement(le.Provider,{value:o},a);return t.createElement("div",{ref:M([f,u]),...c,"cmdk-group":"",role:"presentation",hidden:C?void 0:!0},r&&t.createElement("div",{ref:m,"cmdk-group-heading":"","aria-hidden":!0,id:s},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?s:void 0},b))}),pe=t.forwardRef((l,u)=>{let{alwaysRender:r,...a}=l,c=t.useRef(null),o=R(f=>!f.search);return!r&&!o?null:t.createElement("div",{ref:M([c,u]),...a,"cmdk-separator":"",role:"separator"})}),he=t.forwardRef((l,u)=>{let{onValueChange:r,...a}=l,c=l.value!=null,o=J(),f=R(s=>s.search),m=F();return t.useEffect(()=>{l.value!=null&&o.setState("search",l.value)},[l.value]),t.createElement("input",{ref:u,...a,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":m.listId,"aria-labelledby":m.labelId,id:m.inputId,type:"text",value:c?l.value:f,onChange:s=>{c||o.setState("search",s.target.value),r?.(s.target.value)}})}),ge=t.forwardRef((l,u)=>{let{children:r,...a}=l,c=t.useRef(null),o=t.useRef(null),f=F();return t.useEffect(()=>{if(o.current&&c.current){let m=o.current,s=c.current,g,C=new ResizeObserver(()=>{g=requestAnimationFrame(()=>{let b=m.getBoundingClientRect().height;s.style.setProperty("--cmdk-list-height",b.toFixed(1)+"px")})});return C.observe(m),()=>{cancelAnimationFrame(g),C.unobserve(m)}}},[]),t.createElement("div",{ref:M([c,u]),...a,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:f.listId,"aria-labelledby":f.inputId},t.createElement("div",{ref:o,"cmdk-list-sizer":""},r))}),be=t.forwardRef((l,u)=>{let{open:r,onOpenChange:a,container:c,...o}=l;return t.createElement(y.Root,{open:r,onOpenChange:a},t.createElement(y.Portal,{container:c},t.createElement(y.Overlay,{"cmdk-overlay":""}),t.createElement(y.Content,{"aria-label":l.label,"cmdk-dialog":""},t.createElement(ne,{ref:u,...o}))))}),Ee=t.forwardRef((l,u)=>{let r=t.useRef(!0),a=R(c=>c.filtered.count===0);return t.useEffect(()=>{r.current=!1},[]),r.current||!a?null:t.createElement("div",{ref:u,...l,"cmdk-empty":"",role:"presentation"})}),Ce=t.forwardRef((l,u)=>{let{progress:r,children:a,...c}=l;return t.createElement("div",{ref:u,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},a))}),xe=Object.assign(ne,{List:ge,Item:me,Input:he,Group:ve,Separator:pe,Dialog:be,Empty:Ee,Loading:Ce});function we(l,u){let r=l.nextElementSibling;for(;r;){if(r.matches(u))return r;r=r.nextElementSibling}}function ye(l,u){let r=l.previousElementSibling;for(;r;){if(r.matches(u))return r;r=r.previousElementSibling}}function ae(l){let u=t.useRef(l);return x(()=>{u.current=l}),u}var x=typeof window>"u"?t.useEffect:t.useLayoutEffect;function k(l){let u=t.useRef();return u.current===void 0&&(u.current=l()),u}function M(l){return u=>{l.forEach(r=>{typeof r=="function"?r(u):r!=null&&(r.current=u)})}}function R(l){let u=J(),r=()=>l(u.snapshot());return t.useSyncExternalStore(u.subscribe,r,r)}function ue(l,u,r){let a=t.useRef(),c=F();return x(()=>{var o;let f=(()=>{var m;for(let s of r){if(typeof s=="string")return s.trim().toLowerCase();if(typeof s=="object"&&"current"in s&&s.current)return(m=s.current.textContent)==null?void 0:m.trim().toLowerCase()}})();c.value(l,f),(o=u.current)==null||o.setAttribute(w,f),a.current=f}),a}var Se=()=>{let[l,u]=t.useState(),r=k(()=>new Map);return x(()=>{r.current.forEach(a=>a()),r.current=new Map},[l]),(a,c)=>{r.current.set(a,c),u({})}},ke={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};export{xe as Command,be as CommandDialog,Ee as CommandEmpty,ve as CommandGroup,he as CommandInput,me as CommandItem,ge as CommandList,Ce as CommandLoading,ne as CommandRoot,pe as CommandSeparator,R as useCommandState};
//# sourceMappingURL=cmdk.mjs.map