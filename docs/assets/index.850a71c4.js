import{resolveComponent as nt,openBlock as rt,createBlock as ot,effectScope as st,ref as Te,markRaw as it,shallowRef as ct,unref as X,computed as I,reactive as He,nextTick as at,defineComponent as je,inject as Q,h as qe,provide as ce,watch as lt,createApp as ut}from"vue";const ft=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};ft();var ht=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const dt={};function pt(e,t){const n=nt("router-view");return rt(),ot(n)}var mt=ht(dt,[["render",pt]]),gt=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const yt=e=>e,vt=Symbol();var Pe;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Pe||(Pe={}));function Et(){const e=st(!0),t=e.run(()=>Te({}));let n=[],r=[];const o=it({install(s){yt(o),o._a=s,s.provide(vt,o),s.config.globalProperties.$pinia=o,r.forEach(h=>n.push(h)),r=[]},use(s){return!this._a&&!gt?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const Rt="modulepreload",_e={},Pt="./",_t=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Pt}${r}`,r in _e)return;_e[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":Rt,o||(h.as="script",h.crossOrigin=""),h.href=r,document.head.appendChild(h),o)return new Promise((m,c)=>{h.addEventListener("load",m),h.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ze=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",V=e=>ze?Symbol(e):"_vr_"+e,wt=V("rvlm"),we=V("rvd"),pe=V("r"),Ve=V("rl"),fe=V("rvl"),j=typeof window!="undefined";function At(e){return e.__esModule||ze&&e[Symbol.toStringTag]==="Module"}const w=Object.assign;function ae(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const D=()=>{},St=/\/$/,bt=e=>e.replace(St,"");function le(e,t,n="/"){let r,o={},s="",h="";const m=t.indexOf("?"),c=t.indexOf("#",m>-1?m:0);return m>-1&&(r=t.slice(0,m),s=t.slice(m+1,c>-1?c:t.length),o=e(s)),c>-1&&(r=r||t.slice(0,c),h=t.slice(c,t.length)),r=xt(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+h,path:r,query:o,hash:h}}function kt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ae(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ct(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&q(t.matched[r],n.matched[o])&&Ge(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ge(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ot(e[n],t[n]))return!1;return!0}function Ot(e,t){return Array.isArray(e)?Se(e,t):Array.isArray(t)?Se(t,e):e===t}function Se(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function xt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,s,h;for(s=0;s<r.length;s++)if(h=r[s],!(o===1||h==="."))if(h==="..")o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var W;(function(e){e.pop="pop",e.push="push"})(W||(W={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function Lt(e){if(!e)if(j){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),bt(e)}const $t=/^[^#]+#/;function It(e,t){return e.replace($t,"#")+t}function Nt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const J=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Nt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function be(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function Bt(e,t){he.set(e,t)}function Tt(e){const t=he.get(e);return he.delete(e),t}let Ht=()=>location.protocol+"//"+location.host;function Ke(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let m=o.includes(e.slice(s))?e.slice(s).length:1,c=o.slice(m);return c[0]!=="/"&&(c="/"+c),Ae(c,"")}return Ae(n,e)+r+o}function jt(e,t,n,r){let o=[],s=[],h=null;const m=({state:l})=>{const y=Ke(e,location),v=n.value,b=t.value;let S=0;if(l){if(n.value=y,t.value=l,h&&h===v){h=null;return}S=b?l.position-b.position:0}else r(y);o.forEach(_=>{_(n.value,v,{delta:S,type:W.pop,direction:S?S>0?F.forward:F.back:F.unknown})})};function c(){h=n.value}function u(l){o.push(l);const y=()=>{const v=o.indexOf(l);v>-1&&o.splice(v,1)};return s.push(y),y}function a(){const{history:l}=window;!l.state||l.replaceState(w({},l.state,{scroll:J()}),"")}function f(){for(const l of s)l();s=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",a)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",a),{pauseListeners:c,listen:u,destroy:f}}function ke(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?J():null}}function qt(e){const{history:t,location:n}=window,r={value:Ke(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,u,a){const f=e.indexOf("#"),l=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Ht()+e+c;try{t[a?"replaceState":"pushState"](u,"",l),o.value=u}catch(y){console.error(y),n[a?"replace":"assign"](l)}}function h(c,u){const a=w({},t.state,ke(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});s(c,a,!0),r.value=c}function m(c,u){const a=w({},o.value,t.state,{forward:c,scroll:J()});s(a.current,a,!0);const f=w({},ke(r.value,c,null),{position:a.position+1},u);s(c,f,!1),r.value=c}return{location:r,state:o,push:m,replace:h}}function zt(e){e=Lt(e);const t=qt(e),n=jt(e,t.state,t.location,t.replace);function r(s,h=!0){h||n.pauseListeners(),history.go(s)}const o=w({location:"",base:e,go:r,createHref:It.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Vt(e){return typeof e=="string"||e&&typeof e=="object"}function Ue(e){return typeof e=="string"||typeof e=="symbol"}const N={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},De=V("nf");var Ce;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ce||(Ce={}));function z(e,t){return w(new Error,{type:e,[De]:!0},t)}function M(e,t){return e instanceof Error&&De in e&&(t==null||!!(e.type&t))}const Oe="[^/]+?",Gt={sensitive:!1,strict:!1,start:!0,end:!0},Kt=/[.+*?^${}()[\]/\\]/g;function Ut(e,t){const n=w({},Gt,t),r=[];let o=n.start?"^":"";const s=[];for(const u of e){const a=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const l=u[f];let y=40+(n.sensitive?.25:0);if(l.type===0)f||(o+="/"),o+=l.value.replace(Kt,"\\$&"),y+=40;else if(l.type===1){const{value:v,repeatable:b,optional:S,regexp:_}=l;s.push({name:v,repeatable:b,optional:S});const P=_||Oe;if(P!==Oe){y+=10;try{new RegExp(`(${P})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${v}" (${P}): `+L.message)}}let O=b?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(O=S&&u.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),o+=O,y+=20,S&&(y+=-8),b&&(y+=-20),P===".*"&&(y+=-50)}a.push(y)}r.push(a)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function m(u){const a=u.match(h),f={};if(!a)return null;for(let l=1;l<a.length;l++){const y=a[l]||"",v=s[l-1];f[v.name]=y&&v.repeatable?y.split("/"):y}return f}function c(u){let a="",f=!1;for(const l of e){(!f||!a.endsWith("/"))&&(a+="/"),f=!1;for(const y of l)if(y.type===0)a+=y.value;else if(y.type===1){const{value:v,repeatable:b,optional:S}=y,_=v in u?u[v]:"";if(Array.isArray(_)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(_)?_.join("/"):_;if(!P)if(S)l.length<2&&(a.endsWith("/")?a=a.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);a+=P}}return a}return{re:h,score:r,keys:s,parse:m,stringify:c}}function Dt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ft(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=Dt(r[n],o[n]);if(s)return s;n++}return o.length-r.length}const Qt={type:0,value:""},Wt=/[a-zA-Z0-9_]/;function Yt(e){if(!e)return[[]];if(e==="/")return[[Qt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const o=[];let s;function h(){s&&o.push(s),s=[]}let m=0,c,u="",a="";function f(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:a,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function l(){u+=c}for(;m<e.length;){if(c=e[m++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),h()):c===":"?(f(),n=1):l();break;case 4:l(),n=r;break;case 1:c==="("?n=2:Wt.test(c)?l():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--);break;case 2:c===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+c:n=3:a+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--,a="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),h(),o}function Xt(e,t,n){const r=Ut(Yt(e.path),n),o=w(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Zt(e,t){const n=[],r=new Map;t=Le({strict:!1,end:!0,sensitive:!1},t);function o(a){return r.get(a)}function s(a,f,l){const y=!l,v=en(a);v.aliasOf=l&&l.record;const b=Le(t,a),S=[v];if("alias"in a){const O=typeof a.alias=="string"?[a.alias]:a.alias;for(const L of O)S.push(w({},v,{components:l?l.record.components:v.components,path:L,aliasOf:l?l.record:v}))}let _,P;for(const O of S){const{path:L}=O;if(f&&L[0]!=="/"){const T=f.record.path,$=T[T.length-1]==="/"?"":"/";O.path=f.record.path+(L&&$+L)}if(_=Xt(O,f,b),l?l.alias.push(_):(P=P||_,P!==_&&P.alias.push(_),y&&a.name&&!xe(_)&&h(a.name)),"children"in v){const T=v.children;for(let $=0;$<T.length;$++)s(T[$],_,l&&l.children[$])}l=l||_,c(_)}return P?()=>{h(P)}:D}function h(a){if(Ue(a)){const f=r.get(a);f&&(r.delete(a),n.splice(n.indexOf(f),1),f.children.forEach(h),f.alias.forEach(h))}else{const f=n.indexOf(a);f>-1&&(n.splice(f,1),a.record.name&&r.delete(a.record.name),a.children.forEach(h),a.alias.forEach(h))}}function m(){return n}function c(a){let f=0;for(;f<n.length&&Ft(a,n[f])>=0&&(a.record.path!==n[f].record.path||!Fe(a,n[f]));)f++;n.splice(f,0,a),a.record.name&&!xe(a)&&r.set(a.record.name,a)}function u(a,f){let l,y={},v,b;if("name"in a&&a.name){if(l=r.get(a.name),!l)throw z(1,{location:a});b=l.record.name,y=w(Jt(f.params,l.keys.filter(P=>!P.optional).map(P=>P.name)),a.params),v=l.stringify(y)}else if("path"in a)v=a.path,l=n.find(P=>P.re.test(v)),l&&(y=l.parse(v),b=l.record.name);else{if(l=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!l)throw z(1,{location:a,currentLocation:f});b=l.record.name,y=w({},f.params,a.params),v=l.stringify(y)}const S=[];let _=l;for(;_;)S.unshift(_.record),_=_.parent;return{name:b,path:v,params:y,matched:S,meta:nn(S)}}return e.forEach(a=>s(a)),{addRoute:s,resolve:u,removeRoute:h,getRoutes:m,getRecordMatcher:o}}function Jt(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function en(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function tn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function xe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nn(e){return e.reduce((t,n)=>w(t,n.meta),{})}function Le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Fe(e,t){return t.children.some(n=>n===e||Fe(e,n))}const Qe=/#/g,rn=/&/g,on=/\//g,sn=/=/g,cn=/\?/g,We=/\+/g,an=/%5B/g,ln=/%5D/g,Ye=/%5E/g,un=/%60/g,Xe=/%7B/g,fn=/%7C/g,Ze=/%7D/g,hn=/%20/g;function me(e){return encodeURI(""+e).replace(fn,"|").replace(an,"[").replace(ln,"]")}function dn(e){return me(e).replace(Xe,"{").replace(Ze,"}").replace(Ye,"^")}function de(e){return me(e).replace(We,"%2B").replace(hn,"+").replace(Qe,"%23").replace(rn,"%26").replace(un,"`").replace(Xe,"{").replace(Ze,"}").replace(Ye,"^")}function pn(e){return de(e).replace(sn,"%3D")}function mn(e){return me(e).replace(Qe,"%23").replace(cn,"%3F")}function gn(e){return e==null?"":mn(e).replace(on,"%2F")}function Z(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function yn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(We," "),h=s.indexOf("="),m=Z(h<0?s:s.slice(0,h)),c=h<0?null:Z(s.slice(h+1));if(m in t){let u=t[m];Array.isArray(u)||(u=t[m]=[u]),u.push(c)}else t[m]=c}return t}function $e(e){let t="";for(let n in e){const r=e[n];if(n=pn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&de(s)):[r&&de(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function vn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}function U(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function B(e,t,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((h,m)=>{const c=f=>{f===!1?m(z(4,{from:n,to:t})):f instanceof Error?m(f):Vt(f)?m(z(2,{from:t,to:f})):(s&&r.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),h())},u=e.call(r&&r.instances[o],t,n,c);let a=Promise.resolve(u);e.length<3&&(a=a.then(c)),a.catch(f=>m(f))})}function ue(e,t,n,r){const o=[];for(const s of e)for(const h in s.components){let m=s.components[h];if(!(t!=="beforeRouteEnter"&&!s.instances[h]))if(En(m)){const u=(m.__vccOpts||m)[t];u&&o.push(B(u,n,r,s,h))}else{let c=m();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${s.path}"`));const a=At(u)?u.default:u;s.components[h]=a;const l=(a.__vccOpts||a)[t];return l&&B(l,n,r,s,h)()}))}}return o}function En(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ie(e){const t=Q(pe),n=Q(Ve),r=I(()=>t.resolve(X(e.to))),o=I(()=>{const{matched:c}=r.value,{length:u}=c,a=c[u-1],f=n.matched;if(!a||!f.length)return-1;const l=f.findIndex(q.bind(null,a));if(l>-1)return l;const y=Ne(c[u-2]);return u>1&&Ne(a)===y&&f[f.length-1].path!==y?f.findIndex(q.bind(null,c[u-2])):l}),s=I(()=>o.value>-1&&wn(n.params,r.value.params)),h=I(()=>o.value>-1&&o.value===n.matched.length-1&&Ge(n.params,r.value.params));function m(c={}){return _n(c)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(D):Promise.resolve()}return{route:r,href:I(()=>r.value.href),isActive:s,isExactActive:h,navigate:m}}const Rn=je({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ie,setup(e,{slots:t}){const n=He(Ie(e)),{options:r}=Q(pe),o=I(()=>({[Me(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Me(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Pn=Rn;function _n(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function wn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((s,h)=>s!==o[h]))return!1}return!0}function Ne(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Me=(e,t,n)=>e!=null?e:t!=null?t:n,An=je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Q(fe),o=I(()=>e.route||r.value),s=Q(we,0),h=I(()=>o.value.matched[s]);ce(we,s+1),ce(wt,h),ce(fe,o);const m=Te();return lt(()=>[m.value,h.value,e.name],([c,u,a],[f,l,y])=>{u&&(u.instances[a]=c,l&&l!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=l.leaveGuards),u.updateGuards.size||(u.updateGuards=l.updateGuards))),c&&u&&(!l||!q(u,l)||!f)&&(u.enterCallbacks[a]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=o.value,u=h.value,a=u&&u.components[e.name],f=e.name;if(!a)return Be(n.default,{Component:a,route:c});const l=u.props[e.name],y=l?l===!0?c.params:typeof l=="function"?l(c):l:null,b=qe(a,w({},y,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[f]=null)},ref:m}));return Be(n.default,{Component:b,route:c})||b}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sn=An;function bn(e){const t=Zt(e.routes,e),n=e.parseQuery||yn,r=e.stringifyQuery||$e,o=e.history,s=U(),h=U(),m=U(),c=ct(N);let u=N;j&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=ae.bind(null,i=>""+i),f=ae.bind(null,gn),l=ae.bind(null,Z);function y(i,p){let d,g;return Ue(i)?(d=t.getRecordMatcher(i),g=p):g=i,t.addRoute(g,d)}function v(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function b(){return t.getRoutes().map(i=>i.record)}function S(i){return!!t.getRecordMatcher(i)}function _(i,p){if(p=w({},p||c.value),typeof i=="string"){const E=le(n,i,p.path),C=t.resolve({path:E.path},p),K=o.createHref(E.fullPath);return w(E,C,{params:l(C.params),hash:Z(E.hash),redirectedFrom:void 0,href:K})}let d;if("path"in i)d=w({},i,{path:le(n,i.path,p.path).path});else{const E=w({},i.params);for(const C in E)E[C]==null&&delete E[C];d=w({},i,{params:f(i.params)}),p.params=f(p.params)}const g=t.resolve(d,p),A=i.hash||"";g.params=a(l(g.params));const k=kt(r,w({},i,{hash:dn(A),path:g.path})),R=o.createHref(k);return w({fullPath:k,hash:A,query:r===$e?vn(i.query):i.query||{}},g,{redirectedFrom:void 0,href:R})}function P(i){return typeof i=="string"?le(n,i,c.value.path):w({},i)}function O(i,p){if(u!==i)return z(8,{from:p,to:i})}function L(i){return G(i)}function T(i){return L(w(P(i),{replace:!0}))}function $(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:d}=p;let g=typeof d=="function"?d(i):d;return typeof g=="string"&&(g=g.includes("?")||g.includes("#")?g=P(g):{path:g},g.params={}),w({query:i.query,hash:i.hash,params:i.params},g)}}function G(i,p){const d=u=_(i),g=c.value,A=i.state,k=i.force,R=i.replace===!0,E=$(d);if(E)return G(w(P(E),{state:A,force:k,replace:R}),p||d);const C=d;C.redirectedFrom=p;let K;return!k&&Ct(r,g,d)&&(K=z(16,{to:C,from:g}),Re(g,g,!0,!1)),(K?Promise.resolve(K):ge(C,g)).catch(x=>M(x)?M(x,2)?x:re(x):ne(x,C,g)).then(x=>{if(x){if(M(x,2))return G(w(P(x.to),{state:A,force:k,replace:R}),p||C)}else x=ve(C,g,!0,R,A);return ye(C,g,x),x})}function Je(i,p){const d=O(i,p);return d?Promise.reject(d):Promise.resolve()}function ge(i,p){let d;const[g,A,k]=kn(i,p);d=ue(g.reverse(),"beforeRouteLeave",i,p);for(const E of g)E.leaveGuards.forEach(C=>{d.push(B(C,i,p))});const R=Je.bind(null,i,p);return d.push(R),H(d).then(()=>{d=[];for(const E of s.list())d.push(B(E,i,p));return d.push(R),H(d)}).then(()=>{d=ue(A,"beforeRouteUpdate",i,p);for(const E of A)E.updateGuards.forEach(C=>{d.push(B(C,i,p))});return d.push(R),H(d)}).then(()=>{d=[];for(const E of i.matched)if(E.beforeEnter&&!p.matched.includes(E))if(Array.isArray(E.beforeEnter))for(const C of E.beforeEnter)d.push(B(C,i,p));else d.push(B(E.beforeEnter,i,p));return d.push(R),H(d)}).then(()=>(i.matched.forEach(E=>E.enterCallbacks={}),d=ue(k,"beforeRouteEnter",i,p),d.push(R),H(d))).then(()=>{d=[];for(const E of h.list())d.push(B(E,i,p));return d.push(R),H(d)}).catch(E=>M(E,8)?E:Promise.reject(E))}function ye(i,p,d){for(const g of m.list())g(i,p,d)}function ve(i,p,d,g,A){const k=O(i,p);if(k)return k;const R=p===N,E=j?history.state:{};d&&(g||R?o.replace(i.fullPath,w({scroll:R&&E&&E.scroll},A)):o.push(i.fullPath,A)),c.value=i,Re(i,p,d,R),re()}let ee;function et(){ee=o.listen((i,p,d)=>{const g=_(i),A=$(g);if(A){G(w(A,{replace:!0}),g).catch(D);return}u=g;const k=c.value;j&&Bt(be(k.fullPath,d.delta),J()),ge(g,k).catch(R=>M(R,12)?R:M(R,2)?(G(R.to,g).then(E=>{M(E,20)&&!d.delta&&d.type===W.pop&&o.go(-1,!1)}).catch(D),Promise.reject()):(d.delta&&o.go(-d.delta,!1),ne(R,g,k))).then(R=>{R=R||ve(g,k,!1),R&&(d.delta?o.go(-d.delta,!1):d.type===W.pop&&M(R,20)&&o.go(-1,!1)),ye(g,k,R)}).catch(D)})}let te=U(),Ee=U(),Y;function ne(i,p,d){re(i);const g=Ee.list();return g.length?g.forEach(A=>A(i,p,d)):console.error(i),Promise.reject(i)}function tt(){return Y&&c.value!==N?Promise.resolve():new Promise((i,p)=>{te.add([i,p])})}function re(i){return Y||(Y=!i,et(),te.list().forEach(([p,d])=>i?d(i):p()),te.reset()),i}function Re(i,p,d,g){const{scrollBehavior:A}=e;if(!j||!A)return Promise.resolve();const k=!d&&Tt(be(i.fullPath,0))||(g||!d)&&history.state&&history.state.scroll||null;return at().then(()=>A(i,p,k)).then(R=>R&&Mt(R)).catch(R=>ne(R,i,p))}const oe=i=>o.go(i);let se;const ie=new Set;return{currentRoute:c,addRoute:y,removeRoute:v,hasRoute:S,getRoutes:b,resolve:_,options:e,push:L,replace:T,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:s.add,beforeResolve:h.add,afterEach:m.add,onError:Ee.add,isReady:tt,install(i){const p=this;i.component("RouterLink",Pn),i.component("RouterView",Sn),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>X(c)}),j&&!se&&c.value===N&&(se=!0,L(o.location).catch(A=>{}));const d={};for(const A in N)d[A]=I(()=>c.value[A]);i.provide(pe,p),i.provide(Ve,He(d)),i.provide(fe,c);const g=i.unmount;ie.add(i),i.unmount=function(){ie.delete(i),ie.size<1&&(u=N,ee&&ee(),c.value=N,se=!1,Y=!1),g()}}}}function H(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function kn(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let h=0;h<s;h++){const m=t.matched[h];m&&(e.matched.find(u=>q(u,m))?r.push(m):n.push(m));const c=e.matched[h];c&&(t.matched.find(u=>q(u,c))||o.push(c))}return[n,r,o]}const Cn=[{path:"/:catchAll(.*)",redirect:"/index"},{path:"/index",name:"Index",component:()=>_t(()=>import("./Index.2414625f.js"),["assets/Index.2414625f.js","assets/Index.672030f5.css"])}],On=bn({history:zt(),routes:Cn}),xn=ut(mt),Ln=Et();xn.use(Ln).use(On).mount("#app");