import{d as Ke,g as Ge,s as Me,u as fe,a as Pe,b as Y,f as Ye,e as Ze,c as Je,h as G,r as Qe,i as be,j as et,E as ce,k as tt,l as nt,m as Fe,n as ot,o as st,p as at,q as lt,t as rt,v as ct,w as it}from"./admin-6b9b2020.js";import{A as ut,k as P,w as De,m as Ne,g as ye,Z as ze,e as R,o as d,P as T,a9 as W,x as m,b as L,r as w,Q as k,q as _,v,ab as Be,d as S,aD as dt,a6 as ie,a7 as V,aE as pe,aC as ve,F as j,aj as te,af as le,a0 as ue,l as $,al as _t,a8 as J,a1 as O,aF as We,u as de,a2 as Oe,n as He,aG as we,aH as xe,s as ft,ak as ae,G as pt,aI as vt,a5 as me,aa as he}from"./plugin-vueexport-helper-81f579ed.js";import{u as mt}from"./useWatermark-385b2365.js";import{_ as ht}from"./index.vuevuetypescriptsetuptruelang-f14bebe8.js";var X=(n=>(n[n.Mobile=0]="Mobile",n[n.Desktop=1]="Desktop",n))(X||{});const gt="opened",Ue="closed";function bt(n){n?Me(gt):Me(Ue)}const ne=Ke("app",()=>{const n=ut({opened:Ge()!==Ue,withoutAnimation:!1}),e=P(X.Desktop);return De(()=>n.opened,o=>bt(o)),{device:e,sidebar:n,toggleSidebar:o=>{n.opened=!n.opened,n.withoutAnimation=o},closeSidebar:o=>{n.opened=!1,n.withoutAnimation=o},toggleDevice:o=>{e.value=o}}}),yt=992,wt=()=>{const n=ne(),{listenerRouteChange:e}=fe(),t=()=>document.body.getBoundingClientRect().width-1<yt,a=()=>{if(!document.hidden){const l=t();n.toggleDevice(l?X.Mobile:X.Desktop),l&&n.closeSidebar(!0)}};e(()=>{n.device===X.Mobile&&n.sidebar.opened&&n.closeSidebar(!1)}),Ne(()=>{window.addEventListener("resize",a)}),ye(()=>{t()&&(n.toggleDevice(X.Mobile),n.closeSidebar(!0))}),ze(()=>{window.removeEventListener("resize",a)})},xt={class:"layout-footer"},St=R({__name:"index",setup(n){const e={}.VITE_APP_TITLE;return(t,a)=>(d(),T("footer",xt,"MIT © 2021-PRESENT "+W(m(e)),1))}});const kt=L(St,[["__scopeId","data-v-3f306cd8"]]),Ct={class:"app-main"},Tt={class:"app-scrollbar"},Et=R({__name:"AppMain",setup(n){const e=Pe(),t=Y();return(a,l)=>{const o=w("router-view"),s=w("el-backtop");return d(),T("section",Ct,[k("div",Tt,[_(o,null,{default:v(({Component:r,route:i})=>[_(Be,{name:"el-fade-in",mode:"out-in"},{default:v(()=>[(d(),S(dt,{include:m(e).cachedViews},[(d(),S(ie(r),{key:i.path,class:"app-container-grow"}))],1032,["include"]))]),_:2},1024)]),_:1}),m(t).showFooter?(d(),S(kt,{key:0})):V("",!0)]),_(s),_(s,{target:".app-scrollbar"})])}}});const Se=L(Et,[["__scopeId","data-v-a992078b"]]),$t=R({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(n,{emit:e}){const t=n,a=e,l=()=>{a("toggleClick")};return(o,s)=>{const r=w("el-icon");return d(),T("div",{onClick:l},[_(r,{size:20,class:"icon"},{default:v(()=>[t.isActive?(d(),S(m(Ye),{key:0})):(d(),S(m(Ze),{key:1}))]),_:1})])}}});const Mt=L($t,[["__scopeId","data-v-64763e98"]]);function Vt(n){for(var e=[],t=0;t<n.length;){var a=n[t];if(a==="*"||a==="+"||a==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(a==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(a==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(a==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(a===":"){for(var l="",o=t+1;o<n.length;){var s=n.charCodeAt(o);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){l+=n[o++];continue}break}if(!l)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:l}),t=o;continue}if(a==="("){var r=1,i="",o=t+1;if(n[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<n.length;){if(n[o]==="\\"){i+=n[o++]+n[o++];continue}if(n[o]===")"){if(r--,r===0){o++;break}}else if(n[o]==="("&&(r++,n[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));i+=n[o++]}if(r)throw new TypeError("Unbalanced pattern at ".concat(t));if(!i)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:i}),t=o;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function It(n,e){e===void 0&&(e={});for(var t=Vt(n),a=e.prefixes,l=a===void 0?"./":a,o="[^".concat(Lt(e.delimiter||"/#?"),"]+?"),s=[],r=0,i=0,p="",u=function(B){if(i<t.length&&t[i].type===B)return t[i++].value},c=function(B){var H=u(B);if(H!==void 0)return H;var M=t[i],f=M.type,x=M.index;throw new TypeError("Unexpected ".concat(f," at ").concat(x,", expected ").concat(B))},g=function(){for(var B="",H;H=u("CHAR")||u("ESCAPED_CHAR");)B+=H;return B};i<t.length;){var b=u("CHAR"),h=u("NAME"),y=u("PATTERN");if(h||y){var C=b||"";l.indexOf(C)===-1&&(p+=C,C=""),p&&(s.push(p),p=""),s.push({name:h||r++,prefix:C,suffix:"",pattern:y||o,modifier:u("MODIFIER")||""});continue}var A=b||u("ESCAPED_CHAR");if(A){p+=A;continue}p&&(s.push(p),p="");var D=u("OPEN");if(D){var C=g(),I=u("NAME")||"",N=u("PATTERN")||"",q=g();c("CLOSE"),s.push({name:I||(N?r++:""),pattern:I&&!N?o:N,prefix:C,suffix:q,modifier:u("MODIFIER")||""});continue}c("END")}return s}function At(n,e){return Rt(It(n,e),e)}function Rt(n,e){e===void 0&&(e={});var t=Pt(e),a=e.encode,l=a===void 0?function(i){return i}:a,o=e.validate,s=o===void 0?!0:o,r=n.map(function(i){if(typeof i=="object")return new RegExp("^(?:".concat(i.pattern,")$"),t)});return function(i){for(var p="",u=0;u<n.length;u++){var c=n[u];if(typeof c=="string"){p+=c;continue}var g=i?i[c.name]:void 0,b=c.modifier==="?"||c.modifier==="*",h=c.modifier==="*"||c.modifier==="+";if(Array.isArray(g)){if(!h)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(g.length===0){if(b)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var y=0;y<g.length;y++){var C=l(g[y],c);if(s&&!r[u].test(C))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(C,'"'));p+=c.prefix+C+c.suffix}continue}if(typeof g=="string"||typeof g=="number"){var C=l(String(g),c);if(s&&!r[u].test(C))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(C,'"'));p+=c.prefix+C+c.suffix;continue}if(!b){var A=h?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(A))}}return p}}function Lt(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Pt(n){return n&&n.sensitive?"":"i"}const Ft={key:0,class:"no-redirect"},Dt=["onClick"],Nt=R({__name:"index",setup(n){const e=pe(),t=ve(),{listenerRouteChange:a}=fe(),l=P([]),o=()=>{l.value=e.matched.filter(i=>{var p,u;return((p=i.meta)==null?void 0:p.title)&&((u=i.meta)==null?void 0:u.breadcrumb)!==!1})},s=i=>At(i)(e.params),r=i=>{const{redirect:p,path:u}=i;if(p){t.push(p);return}t.push(s(u))};return a(i=>{i.path.startsWith("/redirect/")||o()},!0),(i,p)=>{const u=w("el-breadcrumb-item"),c=w("el-breadcrumb");return d(),S(c,{class:"app-breadcrumb"},{default:v(()=>[(d(!0),T(j,null,te(l.value,(g,b)=>(d(),S(u,{key:g.path},{default:v(()=>[g.redirect==="noRedirect"||b===l.value.length-1?(d(),T("span",Ft,W(g.meta.title),1)):(d(),T("a",{key:1,onClick:le(h=>r(g),["prevent"])},W(g.meta.title),9,Dt))]),_:2},1024))),128))]),_:1})}}});const zt=L(Nt,[["__scopeId","data-v-0955ab73"]]),_e=n=>/^(https?:|mailto:|tel:)/.test(n),Bt=["href"],Wt=R({__name:"SidebarItemLink",props:{to:{}},setup(n){const e=n;return(t,a)=>{const l=w("router-link");return m(_e)(e.to)?(d(),T("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[ue(t.$slots,"default")],8,Bt)):(d(),S(l,{key:1,to:e.to},{default:v(()=>[ue(t.$slots,"default")]),_:3},8,["to"]))}}});function Z(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function Ve(n,e){for(var t="",a=0,l=-1,o=0,s,r=0;r<=n.length;++r){if(r<n.length)s=n.charCodeAt(r);else{if(s===47)break;s=47}if(s===47){if(!(l===r-1||o===1))if(l!==r-1&&o===2){if(t.length<2||a!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var i=t.lastIndexOf("/");if(i!==t.length-1){i===-1?(t="",a=0):(t=t.slice(0,i),a=t.length-1-t.lastIndexOf("/")),l=r,o=0;continue}}else if(t.length===2||t.length===1){t="",a=0,l=r,o=0;continue}}e&&(t.length>0?t+="/..":t="..",a=2)}else t.length>0?t+="/"+n.slice(l+1,r):t=n.slice(l+1,r),a=r-l-1;l=r,o=0}else s===46&&o!==-1?++o:o=-1}return t}function Ot(n,e){var t=e.dir||e.root,a=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+a:t+n+a:a}var se={resolve:function(){for(var e="",t=!1,a,l=arguments.length-1;l>=-1&&!t;l--){var o;l>=0?o=arguments[l]:(a===void 0&&(a=process.cwd()),o=a),Z(o),o.length!==0&&(e=o+"/"+e,t=o.charCodeAt(0)===47)}return e=Ve(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(Z(e),e.length===0)return".";var t=e.charCodeAt(0)===47,a=e.charCodeAt(e.length-1)===47;return e=Ve(e,!t),e.length===0&&!t&&(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return Z(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];Z(a),a.length>0&&(e===void 0?e=a:e+="/"+a)}return e===void 0?".":se.normalize(e)},relative:function(e,t){if(Z(e),Z(t),e===t||(e=se.resolve(e),t=se.resolve(t),e===t))return"";for(var a=1;a<e.length&&e.charCodeAt(a)===47;++a);for(var l=e.length,o=l-a,s=1;s<t.length&&t.charCodeAt(s)===47;++s);for(var r=t.length,i=r-s,p=o<i?o:i,u=-1,c=0;c<=p;++c){if(c===p){if(i>p){if(t.charCodeAt(s+c)===47)return t.slice(s+c+1);if(c===0)return t.slice(s+c)}else o>p&&(e.charCodeAt(a+c)===47?u=c:c===0&&(u=0));break}var g=e.charCodeAt(a+c),b=t.charCodeAt(s+c);if(g!==b)break;g===47&&(u=c)}var h="";for(c=a+u+1;c<=l;++c)(c===l||e.charCodeAt(c)===47)&&(h.length===0?h+="..":h+="/..");return h.length>0?h+t.slice(s+u):(s+=u,t.charCodeAt(s)===47&&++s,t.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(Z(e),e.length===0)return".";for(var t=e.charCodeAt(0),a=t===47,l=-1,o=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){l=s;break}}else o=!1;return l===-1?a?"/":".":a&&l===1?"//":e.slice(0,l)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Z(e);var a=0,l=-1,o=!0,s;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var r=t.length-1,i=-1;for(s=e.length-1;s>=0;--s){var p=e.charCodeAt(s);if(p===47){if(!o){a=s+1;break}}else i===-1&&(o=!1,i=s+1),r>=0&&(p===t.charCodeAt(r)?--r===-1&&(l=s):(r=-1,l=i))}return a===l?l=i:l===-1&&(l=e.length),e.slice(a,l)}else{for(s=e.length-1;s>=0;--s)if(e.charCodeAt(s)===47){if(!o){a=s+1;break}}else l===-1&&(o=!1,l=s+1);return l===-1?"":e.slice(a,l)}},extname:function(e){Z(e);for(var t=-1,a=0,l=-1,o=!0,s=0,r=e.length-1;r>=0;--r){var i=e.charCodeAt(r);if(i===47){if(!o){a=r+1;break}continue}l===-1&&(o=!1,l=r+1),i===46?t===-1?t=r:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||l===-1||s===0||s===1&&t===l-1&&t===a+1?"":e.slice(t,l)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Ot("/",e)},parse:function(e){Z(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var a=e.charCodeAt(0),l=a===47,o;l?(t.root="/",o=1):o=0;for(var s=-1,r=0,i=-1,p=!0,u=e.length-1,c=0;u>=o;--u){if(a=e.charCodeAt(u),a===47){if(!p){r=u+1;break}continue}i===-1&&(p=!1,i=u+1),a===46?s===-1?s=u:c!==1&&(c=1):s!==-1&&(c=-1)}return s===-1||i===-1||c===0||c===1&&s===i-1&&s===r+1?i!==-1&&(r===0&&l?t.base=t.name=e.slice(1,i):t.base=t.name=e.slice(r,i)):(r===0&&l?(t.name=e.slice(1,s),t.base=e.slice(1,i)):(t.name=e.slice(r,s),t.base=e.slice(r,i)),t.ext=e.slice(s,i)),r>0?t.dir=e.slice(0,r-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};se.posix=se;var Ht=se;const qe=Je(Ht),Ut={key:2},qt=R({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(n){const e=n,t=$(()=>{var r;return(r=e.item.meta)==null?void 0:r.alwaysShow}),a=$(()=>{var r;return((r=e.item.children)==null?void 0:r.filter(i=>{var p;return!((p=i.meta)!=null&&p.hidden)}))??[]}),l=$(()=>a.value.length),o=$(()=>{const r=l.value;switch(!0){case r>1:return null;case r===1:return a.value[0];default:return{...e.item,path:""}}}),s=r=>{switch(!0){case _e(r):return r;case _e(e.basePath):return e.basePath;default:return qe.resolve(e.basePath,r)}};return(r,i)=>{var b;const p=w("SvgIcon"),u=w("el-menu-item"),c=w("sidebar-item",!0),g=w("el-sub-menu");return(b=e.item.meta)!=null&&b.hidden?V("",!0):(d(),T("div",{key:0,class:O({"simple-mode":e.isCollapse&&!r.isTop,"first-level":e.isFirstLevel})},[!t.value&&o.value&&!o.value.children?(d(),T(j,{key:0},[o.value.meta?(d(),S(Wt,{key:0,to:s(o.value.path)},{default:v(()=>[_(u,{index:s(o.value.path)},_t({default:v(()=>[o.value.meta.svgIcon?(d(),S(p,{key:0,name:o.value.meta.svgIcon},null,8,["name"])):o.value.meta.elIcon?(d(),S(ie(o.value.meta.elIcon),{key:1,class:"el-icon"})):V("",!0)]),_:2},[o.value.meta.title?{name:"title",fn:v(()=>[J(W(o.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):V("",!0)],64)):(d(),S(g,{key:1,index:s(e.item.path),teleported:""},{title:v(()=>{var h,y,C;return[(h=e.item.meta)!=null&&h.svgIcon?(d(),S(p,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(y=e.item.meta)!=null&&y.elIcon?(d(),S(ie(e.item.meta.elIcon),{key:1,class:"el-icon"})):V("",!0),(C=e.item.meta)!=null&&C.title?(d(),T("span",Ut,W(e.item.meta.title),1)):V("",!0)]}),default:v(()=>[e.item.children?(d(!0),T(j,{key:0},te(e.item.children,h=>(d(),S(c,{key:h.path,item:h,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":s(h.path)},null,8,["item","is-collapse","base-path"]))),128)):V("",!0)]),_:1},8,["index"]))],2))}}});const Xt=L(qt,[["__scopeId","data-v-63216053"]]),jt="/gxjh/assets/logo-cc70e06e.png",Kt="/gxjh/assets/logo-text-1-b6b0364d.png",Gt="/gxjh/assets/logo-text-2-eef467fb.png",Yt=["src"],Zt=["src"],Jt=R({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n,t=Y(),{layoutMode:a}=G(t);return(l,o)=>{const s=w("router-link");return d(),T("div",{class:O(["layout-logo-container",{collapse:e.collapse,"layout-mode-top":m(a)==="top"}])},[_(Be,{name:"layout-logo-fade"},{default:v(()=>[e.collapse?(d(),S(s,{key:"collapse",to:"/"},{default:v(()=>[k("img",{src:m(jt),class:"layout-logo"},null,8,Yt)]),_:1})):(d(),S(s,{key:"expand",to:"/"},{default:v(()=>[k("img",{src:m(a)!=="left"?m(Gt):m(Kt),class:"layout-logo-text"},null,8,Zt)]),_:1}))]),_:1})],2)}}});const ke=L(Jt,[["__scopeId","data-v-9689856f"]]),re=n=>{let e="";try{e=getComputedStyle(document.documentElement).getPropertyValue(n)}catch(t){console.error(t)}return e},Ie=(n,e)=>{try{document.documentElement.style.setProperty(n,e)}catch(t){console.error(t)}},Qt=()=>{Qe(),location.reload()},en=R({__name:"index",setup(n){We(f=>({"7ffdcdd0":H.value,"24acc9ba":M.value,"5b44ed08":q.value,"21ca6424":B.value,"240c5d37":N.value}));const e=re("--v3-sidebar-menu-bg-color"),t=re("--v3-sidebar-menu-text-color"),a=re("--v3-sidebar-menu-active-text-color"),l=pe(),o=ne(),s=be(),r=Y(),{sidebar:i,device:p}=G(o),{layoutMode:u,showLogo:c}=G(r),g=$(()=>{const{meta:{activeMenu:f},path:x}=l;return f||x}),b=$(()=>!i.value.opened),h=$(()=>u.value==="left"),y=$(()=>u.value==="top"),C=$(()=>p.value===X.Mobile),A=$(()=>h.value&&c.value),D=$(()=>h.value?e:void 0),I=$(()=>h.value?t:void 0),N=$(()=>h.value?a:void 0),q=$(()=>u.value!=="top"?"var(--v3-sidebar-menu-item-height)":"var(--v3-navigationbar-height)"),B=$(()=>u.value!=="top"?"var(--v3-sidebar-menu-hover-bg-color)":"transparent"),H=$(()=>u.value!=="top"?"2px":"0px"),M=$(()=>u.value==="top"?"none":"block");return(f,x)=>{const z=w("el-menu"),E=w("el-scrollbar");return d(),T("div",{class:O({"has-logo":A.value})},[A.value?(d(),S(ke,{key:0,collapse:b.value},null,8,["collapse"])):V("",!0),_(E,{"wrap-class":"scrollbar-wrapper"},{default:v(()=>[_(z,{"default-active":g.value,collapse:b.value&&!y.value,"background-color":D.value,"text-color":I.value,"active-text-color":N.value,"unique-opened":!0,"collapse-transition":!1,mode:y.value&&!C.value?"horizontal":"vertical"},{default:v(()=>[(d(!0),T(j,null,te(m(s).routes,F=>(d(),S(Xt,{key:F.path,item:F,"base-path":F.path,"is-collapse":b.value,"is-top":y.value},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1})],2)}}});const Ce=L(en,[["__scopeId","data-v-308e6cf2"]]),tn={class:"card-header"},nn={class:"card-title"},on={class:"card-time"},sn={key:0,class:"card-avatar"},an=["src"],ln={class:"card-body"},rn=R({__name:"NotifyList",props:{list:{}},setup(n){const e=n;return(t,a)=>{const l=w("el-empty"),o=w("el-tag"),s=w("el-card");return e.list.length===0?(d(),S(l,{key:0})):(d(!0),T(j,{key:1},te(e.list,(r,i)=>(d(),S(s,{key:i,shadow:"never",class:"card-container"},{header:v(()=>[k("div",tn,[k("div",null,[k("span",null,[k("span",nn,W(r.title),1),r.extra?(d(),S(o,{key:0,type:r.status,effect:"plain",size:"small"},{default:v(()=>[J(W(r.extra),1)]),_:2},1032,["type"])):V("",!0)]),k("div",on,W(r.datetime),1)]),r.avatar?(d(),T("div",sn,[k("img",{src:r.avatar,width:"34"},null,8,an)])):V("",!0)])]),default:v(()=>[k("div",ln,W(r.description??"No Data"),1)]),_:2},1024))),128))}}});const cn=L(rn,[["__scopeId","data-v-7611aaa4"]]),un=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"一年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"两年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],dn=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],_n=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],fn={class:"notify"},pn={class:"notify-history"},Ae=99,vn=350,mn=R({__name:"index",setup(n){const e=$(()=>a.value.reduce((o,s)=>o+s.list.length,0)),t=P("通知"),a=P([{name:"通知",type:"primary",list:un},{name:"消息",type:"danger",list:dn},{name:"待办",type:"warning",list:_n}]),l=()=>{ce.success(`跳转到${t.value}历史页面`)};return(o,s)=>{const r=w("el-icon"),i=w("el-tooltip"),p=w("el-badge"),u=w("el-scrollbar"),c=w("el-tab-pane"),g=w("el-tabs"),b=w("el-button"),h=w("el-popover");return d(),T("div",fn,[_(h,{placement:"bottom",width:vn,trigger:"click"},{reference:v(()=>[_(p,{value:e.value,max:Ae,hidden:e.value===0},{default:v(()=>[_(i,{effect:"dark",content:"消息通知",placement:"bottom"},{default:v(()=>[_(r,{size:20},{default:v(()=>[_(m(et))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:v(()=>[_(g,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=y=>t.value=y),class:"demo-tabs",stretch:""},{default:v(()=>[(d(!0),T(j,null,te(a.value,(y,C)=>(d(),S(c,{name:y.name,key:C},{label:v(()=>[J(W(y.name)+" ",1),_(p,{value:y.list.length,max:Ae,type:y.type},null,8,["value","type"])]),default:v(()=>[_(u,{height:"400px"},{default:v(()=>[_(cn,{list:y.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),k("div",pn,[_(b,{link:"",onClick:l},{default:v(()=>[J("查看"+W(t.value)+"历史",1)]),_:1})])]),_:1})])}}});const hn=L(mn,[["__scopeId","data-v-fec03c72"]]),Re=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Q=(()=>{if(typeof document>"u")return!1;const n=Re[0],e={};for(const t of Re)if((t==null?void 0:t[1])in document){for(const[l,o]of t.entries())e[n[l]]=o;return e}return!1})(),Le={change:Q.fullscreenchange,error:Q.fullscreenerror};let U={request(n=document.documentElement,e){return new Promise((t,a)=>{const l=()=>{U.off("change",l),t()};U.on("change",l);const o=n[Q.requestFullscreen](e);o instanceof Promise&&o.then(l).catch(a)})},exit(){return new Promise((n,e)=>{if(!U.isFullscreen){n();return}const t=()=>{U.off("change",t),n()};U.on("change",t);const a=document[Q.exitFullscreen]();a instanceof Promise&&a.then(t).catch(e)})},toggle(n,e){return U.isFullscreen?U.exit():U.request(n,e)},onchange(n){U.on("change",n)},onerror(n){U.on("error",n)},on(n,e){const t=Le[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=Le[n];t&&document.removeEventListener(t,e,!1)},raw:Q};Object.defineProperties(U,{isFullscreen:{get:()=>!!document[Q.fullscreenElement]},element:{enumerable:!0,get:()=>document[Q.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Q.fullscreenEnabled]}});Q||(U={isEnabled:!1});const oe=U,gn=R({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(n){const e=n,t=P(!1),a=$(()=>t.value?e.exitTips:e.openTips),l=$(()=>t.value?"fullscreen-exit":"fullscreen"),o=()=>{const c=document.querySelector(e.element)||void 0;oe.isEnabled?oe.toggle(c):ce.warning("您的浏览器无法工作")},s=()=>{t.value=oe.isFullscreen};de(c=>{oe.on("change",s),c(()=>{oe.isEnabled&&oe.off("change",s)})});const r=P(!1),i=$(()=>r.value?"内容区复原":"内容区放大"),p=$(()=>r.value?"fullscreen-exit":"fullscreen"),u=()=>{document.body.className=r.value?"":"content-large",r.value=!r.value};return(c,g)=>{const b=w("SvgIcon"),h=w("el-tooltip"),y=w("el-dropdown-item"),C=w("el-dropdown-menu"),A=w("el-dropdown");return d(),T("div",null,[c.content?(d(),S(A,{key:1},{dropdown:v(()=>[_(C,null,{default:v(()=>[_(y,{onClick:u},{default:v(()=>[J(W(i.value),1)]),_:1}),_(y,{onClick:o,disabled:t.value},{default:v(()=>[J("内容区全屏")]),_:1},8,["disabled"])]),_:1})]),default:v(()=>[_(b,{name:p.value},null,8,["name"])]),_:1})):(d(),S(h,{key:0,effect:"dark",content:a.value,placement:"bottom"},{default:v(()=>[_(b,{name:l.value,onClick:o},null,8,["name"])]),_:1},8,["content"]))])}}});const Xe=L(gn,[["__scopeId","data-v-9700b35b"]]),bn=["onMouseenter"],yn={class:"result-item-title"},wn=R({__name:"SearchResult",props:{modelValue:{},list:{},isPressUpOrDown:{type:Boolean}},emits:["update:modelValue"],setup(n,{expose:e,emit:t}){const a=n,l=t,o=He(),s=P(0),r=$({get(){return a.modelValue},set(g){l("update:modelValue",g)}}),i=g=>{const b=g.name===r.value;return{background:b?"var(--el-color-primary)":"",color:b?"#fff":""}},p=g=>{a.isPressUpOrDown||(r.value=g.name)},u=()=>{s.value=Number((window.innerHeight*.4).toFixed(1))},c=g=>{var C;const b=(C=o==null?void 0:o.proxy)==null?void 0:C.$refs[`resultItemRef${g}`];if(!b)return 0;const y=b[0].offsetTop+128;return y>s.value?y-s.value:0};return Ne(()=>{window.addEventListener("resize",u)}),ye(()=>{u()}),ze(()=>{window.removeEventListener("resize",u)}),e({getScrollTop:c}),(g,b)=>{const h=w("SvgIcon");return d(),T("div",null,[(d(!0),T(j,null,te(g.list,(y,C)=>{var A,D,I;return d(),T("div",{key:C,ref_for:!0,ref:`resultItemRef${C}`,class:"result-item",style:Oe(i(y)),onMouseenter:N=>p(y)},[(A=y.meta)!=null&&A.svgIcon?(d(),S(h,{key:0,name:y.meta.svgIcon},null,8,["name"])):(D=y.meta)!=null&&D.elIcon?(d(),S(ie(y.meta.elIcon),{key:1,class:"el-icon"})):V("",!0),k("span",yn,W((I=y.meta)==null?void 0:I.title),1),r.value&&r.value===y.name?(d(),S(h,{key:2,name:"keyboard-enter"})):V("",!0)],44,bn)}),128))])}}});const xn=L(wn,[["__scopeId","data-v-099b4a22"]]),Te=n=>(we("data-v-a170b7fb"),n=n(),xe(),n),Sn={class:"search-footer"},kn={class:"search-footer-item"},Cn=Te(()=>k("span",null,"确认",-1)),Tn={class:"search-footer-item"},En=Te(()=>k("span",null,"切换",-1)),$n={class:"search-footer-item"},Mn=Te(()=>k("span",null,"关闭",-1)),Vn={class:"search-footer-total"},In=R({__name:"SearchFooter",props:{total:{}},setup(n){const e=n,t=ne(),a=$(()=>t.device===X.Mobile);return(l,o)=>{const s=w("SvgIcon");return d(),T("div",Sn,[a.value?V("",!0):(d(),T(j,{key:0},[k("span",kn,[_(s,{name:"keyboard-enter"}),Cn]),k("span",Tn,[_(s,{name:"keyboard-up"}),_(s,{name:"keyboard-down"}),En]),k("span",$n,[_(s,{name:"keyboard-esc"}),Mn])],64)),k("span",Vn,"共 "+W(e.total)+" 项",1)])}}});const An=L(In,[["__scopeId","data-v-a170b7fb"]]),Rn=k("p",null,"搜索结果",-1),Ln=R({__name:"SearchModal",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,a=e,l=ne(),o=ve(),s=P(null),r=P(null),i=P(null),p=P(""),u=ft([]),c=P(void 0),g=P(!1),b=$(()=>l.device===X.Mobile?"80vw":"40vw"),h=$({get(){return t.modelValue},set(M){a("update:modelValue",M)}}),y=$(()=>tt(be().routes)),C=nt(()=>{var x;const M=A(y.value);u.value=M.filter(z=>{var E,F;return p.value?(F=(E=z.meta)==null?void 0:E.title)==null?void 0:F.toLocaleLowerCase().includes(p.value.toLocaleLowerCase().trim()):!1});const f=(x=u.value)==null?void 0:x.length;c.value=f>0?u.value[0].name:void 0},500),A=(M,f=[])=>(M.forEach(x=>{f.push(x),x.children&&A(x.children,f)}),f),D=()=>{h.value=!1,setTimeout(()=>{p.value="",u.value=[]},200)},I=M=>{var x;if(!i.value)return;const f=i.value.getScrollTop(M);(x=r.value)==null||x.setScrollTop(f)},N=()=>{g.value=!0;const{length:M}=u.value;if(M===0)return;const f=u.value.findIndex(x=>x.name===c.value);if(f===0){const x=u.value[M-1].name;c.value===x&&M>1?(c.value=u.value[M-2].name,I(M-2)):(c.value=x,I(M-1))}else c.value=u.value[f-1].name,I(f-1)},q=()=>{g.value=!0;const{length:M}=u.value;if(M===0)return;const f=u.value.map(x=>x.name).lastIndexOf(c.value);if(f===M-1){const x=u.value[0].name;c.value===x&&M>1?(c.value=u.value[1].name,I(1)):(c.value=x,I(0))}else c.value=u.value[f+1].name,I(f+1)},B=()=>{var z;const{length:M}=u.value;if(M===0)return;const f=c.value,x=(z=u.value.find(E=>E.name===f))==null?void 0:z.path;if(x&&_e(x)){window.open(x,"_blank","noopener, noreferrer");return}if(!f){ce.warning("无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name");return}try{o.push({name:f})}catch{ce.error("该菜单有必填的动态参数，无法通过搜索进入");return}D()},H=()=>{g.value=!1};return(M,f)=>{const x=w("SvgIcon"),z=w("el-input"),E=w("el-empty"),F=w("el-dialog");return d(),S(F,{modelValue:h.value,"onUpdate:modelValue":f[2]||(f[2]=K=>h.value=K),onOpened:f[3]||(f[3]=K=>{var ee;return(ee=s.value)==null?void 0:ee.focus()}),onClosed:f[4]||(f[4]=K=>{var ee;return(ee=s.value)==null?void 0:ee.blur()}),onKeydown:[ae(N,["up"]),ae(q,["down"]),ae(B,["enter"])],onKeyup:ae(H,["up","down"]),"before-close":D,width:b.value,top:"5vh",class:"search-modal__private","append-to-body":""},{footer:v(()=>[_(An,{total:u.value.length},null,8,["total"])]),default:v(()=>[_(z,{ref_key:"inputRef",ref:s,modelValue:p.value,"onUpdate:modelValue":f[0]||(f[0]=K=>p.value=K),onInput:m(C),placeholder:"搜索菜单",size:"large",clearable:""},{prefix:v(()=>[_(x,{name:"search"})]),_:1},8,["modelValue","onInput"]),u.value.length===0?(d(),S(E,{key:0,description:"暂无搜索结果","image-size":100})):(d(),T(j,{key:1},[Rn,_(m(Fe),{ref_key:"scrollbarRef",ref:r,"max-height":"40vh",always:""},{default:v(()=>[_(xn,{ref_key:"searchResultRef",ref:i,modelValue:c.value,"onUpdate:modelValue":f[1]||(f[1]=K=>c.value=K),list:u.value,isPressUpOrDown:g.value,onClick:B},null,8,["modelValue","list","isPressUpOrDown"])]),_:1},512)],64))]),_:1},8,["modelValue","onKeydown","onKeyup","width"])}}});const Pn=R({__name:"index",setup(n){const e=P(!1),t=()=>{e.value=!0};return(a,l)=>{const o=w("SvgIcon"),s=w("el-tooltip");return d(),T("div",null,[_(s,{effect:"dark",content:"搜索菜单",placement:"bottom"},{default:v(()=>[_(o,{name:"search",onClick:t})]),_:1}),_(Ln,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r)},null,8,["modelValue"])])}}});const Fn=L(Pn,[["__scopeId","data-v-226ad4b5"]]),Dn=n=>(we("data-v-8ba44c9a"),n=n(),xe(),n),Nn={class:"navigation-bar"},zn={class:"right-menu"},Bn={class:"right-menu-avatar"},Wn={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},On={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Hn=Dn(()=>k("span",{style:{display:"block"}},"退出登录",-1)),Un=R({__name:"index",setup(n){const e=ve(),t=ne(),a=Y(),l=ot(),{sidebar:o,device:s}=G(t),{layoutMode:r,showNotify:i,showThemeSwitch:p,showScreenfull:u,showSearchMenu:c}=G(a),g=$(()=>r.value==="top"),b=$(()=>s.value===X.Mobile),h=()=>{t.toggleSidebar(!1)},y=()=>{l.logout(),e.push("/login")};return(C,A)=>{const D=w("el-avatar"),I=w("el-dropdown-item"),N=w("el-dropdown-menu"),q=w("el-dropdown");return d(),T("div",Nn,[!g.value||b.value?(d(),S(Mt,{key:0,"is-active":m(o).opened,class:"hamburger",onToggleClick:h},null,8,["is-active"])):V("",!0),!g.value||b.value?(d(),S(zt,{key:1,class:"breadcrumb"})):V("",!0),g.value&&!b.value?(d(),S(Ce,{key:2,class:"sidebar"})):V("",!0),k("div",zn,[m(c)?(d(),S(Fn,{key:0,class:"right-menu-item"})):V("",!0),m(u)?(d(),S(Xe,{key:1,class:"right-menu-item"})):V("",!0),m(p)?(d(),S(ht,{key:2,class:"right-menu-item"})):V("",!0),m(i)?(d(),S(hn,{key:3,class:"right-menu-item"})):V("",!0),_(q,{class:"right-menu-item"},{dropdown:v(()=>[_(N,null,{default:v(()=>[k("a",Wn,[_(I,null,{default:v(()=>[J("GitHub")]),_:1})]),k("a",On,[_(I,null,{default:v(()=>[J("Gitee")]),_:1})]),_(I,{divided:"",onClick:y},{default:v(()=>[Hn]),_:1})]),_:1})]),default:v(()=>[k("div",Bn,[_(D,{icon:m(st),size:30},null,8,["icon"]),k("span",null,W(m(l).username),1)])]),_:1})])])}}});const Ee=L(Un,[["__scopeId","data-v-8ba44c9a"]]),qn={class:"select-layout-mode"},Xn=R({__name:"SelectLayoutMode",setup(n){const e=Y(),{layoutMode:t}=G(e),a=$(()=>t.value==="left"),l=$(()=>t.value==="top"),o=$(()=>t.value==="left-top");return(s,r)=>{const i=w("el-aside"),p=w("el-header"),u=w("el-main"),c=w("el-container"),g=w("el-tooltip");return d(),T("div",qn,[_(g,{content:"左侧模式"},{default:v(()=>[_(c,{class:O(["layout-mode left",{active:a.value}]),onClick:r[0]||(r[0]=b=>t.value="left")},{default:v(()=>[_(i),_(c,null,{default:v(()=>[_(p),_(u)]),_:1})]),_:1},8,["class"])]),_:1}),_(g,{content:"顶部模式"},{default:v(()=>[_(c,{class:O(["layout-mode top",{active:l.value}]),onClick:r[1]||(r[1]=b=>t.value="top")},{default:v(()=>[_(p),_(u)]),_:1},8,["class"])]),_:1}),_(g,{content:"混合模式"},{default:v(()=>[_(c,{class:O(["layout-mode left-top",{active:o.value}]),onClick:r[2]||(r[2]=b=>t.value="left-top")},{default:v(()=>[_(p),_(c,null,{default:v(()=>[_(i),_(u)]),_:1})]),_:1},8,["class"])]),_:1})])}}});const jn=L(Xn,[["__scopeId","data-v-84881485"]]),je=n=>(we("data-v-54713be5"),n=n(),xe(),n),Kn={class:"setting-container"},Gn=je(()=>k("h4",null,"布局配置",-1)),Yn=je(()=>k("h4",null,"功能配置",-1)),Zn={class:"setting-name"},Jn=R({__name:"index",setup(n){const e=Y(),{layoutMode:t,showTagsView:a,showLogo:l,fixedHeader:o,showFooter:s,showNotify:r,showThemeSwitch:i,showScreenfull:p,showSearchMenu:u,cacheTagsView:c,showWatermark:g,showGreyMode:b,showColorWeakness:h}=G(e),y={显示标签栏:a,"显示 Logo":l,"固定 Header":o,"显示页脚 Footer":s,显示消息通知:r,显示切换主题按钮:i,显示全屏按钮:p,显示搜索按钮:u,是否缓存标签栏:c,开启系统水印:g,显示灰色模式:b,显示色弱模式:h};return de(()=>{t.value!=="left"&&(o.value=!0)}),(C,A)=>{const D=w("el-divider"),I=w("el-switch"),N=w("el-button");return d(),T("div",Kn,[Gn,_(jn),_(D),Yn,(d(),T(j,null,te(y,(q,B,H)=>k("div",{class:"setting-item",key:H},[k("span",Zn,W(B),1),_(I,{modelValue:q.value,"onUpdate:modelValue":M=>q.value=M,disabled:m(t)!=="left"&&B==="固定 Header"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),64)),_(N,{type:"danger",icon:m(at),onClick:m(Qt)},{default:v(()=>[J("重 置")]),_:1},8,["icon","onClick"])])}}});const Qn=L(Jn,[["__scopeId","data-v-54713be5"]]),eo={class:"scroll-container"},to=200,no=R({__name:"ScrollPane",props:{tagRefs:{}},setup(n){const e=n,t=pe(),a=Y(),{listenerRouteChange:l}=fe(),o=P(),s=P();let r=0;const i=({scrollLeft:b})=>{r=b},p=({deltaY:b})=>{/^-/.test(b.toString())?c("left"):c("right")},u=()=>{const b=s.value.clientWidth,h=o.value.wrapRef.clientWidth,y=b-h-r;return{scrollbarContentRefWidth:b,scrollbarRefWidth:h,lastDistance:y}},c=(b,h=to)=>{let y=0;const{scrollbarContentRefWidth:C,scrollbarRefWidth:A,lastDistance:D}=u();A>C||(b==="left"?y=Math.max(0,r-h):y=Math.min(r+h,r+D),o.value.setScrollLeft(y))},g=()=>{const b=e.tagRefs;for(let h=0;h<b.length;h++)if(t.path===b[h].$props.to.path){const y=b[h].$el,C=y.offsetWidth,A=y.offsetLeft,{scrollbarRefWidth:D}=u();if(A<r){const N=r-A;c("left",N);return}const I=D+r-C;if(A>I){const N=A-I;c("right",N);return}}};return l(()=>{pt(g)}),(b,h)=>{const y=w("el-icon");return d(),T("div",eo,[_(y,{class:"arrow left",onClick:h[0]||(h[0]=C=>c("left"))},{default:v(()=>[_(m(lt))]),_:1}),_(m(Fe),{ref_key:"scrollbarRef",ref:o,onWheelPassive:p,onScroll:i},{default:v(()=>[k("div",{ref_key:"scrollbarContentRef",ref:s,class:"scrollbar-content"},[ue(b.$slots,"default",{},void 0,!0)],512)]),_:3},512),_(y,{class:"arrow right",onClick:h[1]||(h[1]=C=>c("right"))},{default:v(()=>[_(m(rt))]),_:1}),m(a).showScreenfull?(d(),S(Xe,{key:0,element:".app-main",content:!0,class:"screenfull"})):V("",!0)])}}});const oo=L(no,[["__scopeId","data-v-1d817195"]]),so={class:"tags-view-container"},ao=R({__name:"index",setup(n){const e=He(),t=ve(),a=pe(),l=Pe(),o=be(),{listenerRouteChange:s}=fe(),r=P([]),i=P(!1),p=P(0),u=P(0),c=P({});let g=[];const b=f=>f.path===a.path,h=f=>{var x;return(x=f.meta)==null?void 0:x.affix},y=(f,x="/")=>{const z=[];return f.forEach(E=>{if(h(E)){const F=qe.resolve(x,E.path);z.push({fullPath:F,path:F,name:E.name,meta:{...E.meta}})}if(E.children){const F=y(E.children,E.path);z.push(...F)}}),z},C=()=>{g=y(o.routes);for(const f of g)f.name&&l.addVisitedView(f)},A=f=>{f.name&&(l.addVisitedView(f),l.addCachedView(f))},D=f=>{l.delCachedView(f),t.replace({path:"/redirect"+f.path,query:f.query})},I=f=>{l.delVisitedView(f),l.delCachedView(f),b(f)&&B(l.visitedViews,f)},N=()=>{const f=c.value.fullPath;f!==a.path&&f!==void 0&&t.push(f),l.delOthersVisitedViews(c.value),l.delOthersCachedViews(c.value)},q=f=>{l.delAllVisitedViews(),l.delAllCachedViews(),!g.some(x=>x.path===a.path)&&B(l.visitedViews,f)},B=(f,x)=>{const z=f.slice(-1)[0],E=z==null?void 0:z.fullPath;E!==void 0?t.push(E):x.name==="Dashboard"?t.push({path:"/redirect"+x.path,query:x.query}):t.push("/")},H=(f,x)=>{const E=e.proxy.$el.getBoundingClientRect().left,K=e.proxy.$el.offsetWidth-105,ee=x.clientX-E+15;u.value=ee>K?K:ee,p.value=x.clientY,i.value=!0,c.value=f},M=()=>{i.value=!1};return De(i,f=>{f?document.body.addEventListener("click",M):document.body.removeEventListener("click",M)}),ye(()=>{C(),s(async f=>{A(f)},!0)}),(f,x)=>{const z=w("el-icon");return d(),T("div",so,[_(oo,{class:"tags-view-wrapper","tag-refs":r.value},{default:v(()=>[(d(!0),T(j,null,te(m(l).visitedViews,E=>(d(),S(m(vt),{ref_for:!0,ref_key:"tagRefs",ref:r,key:E.path,class:O([{active:b(E)},"tags-view-item"]),to:{path:E.path,query:E.query},onMouseup:le(F=>!h(E)&&I(E),["middle"]),onContextmenu:le(F=>H(E,F),["prevent"])},{default:v(()=>{var F;return[J(W((F=E.meta)==null?void 0:F.title)+" ",1),h(E)?V("",!0):(d(),S(z,{key:0,size:12,onClick:le(K=>I(E),["prevent","stop"])},{default:v(()=>[_(m(ct))]),_:2},1032,["onClick"]))]}),_:2},1032,["class","to","onMouseup","onContextmenu"]))),128))]),_:1},8,["tag-refs"]),me(k("ul",{class:"contextmenu",style:Oe({left:u.value+"px",top:p.value+"px"})},[k("li",{onClick:x[0]||(x[0]=E=>D(c.value))},"刷新"),h(c.value)?V("",!0):(d(),T("li",{key:0,onClick:x[1]||(x[1]=E=>I(c.value))},"关闭")),k("li",{onClick:N},"关闭其它"),k("li",{onClick:x[2]||(x[2]=E=>q(c.value))},"关闭所有")],4),[[he,i.value]])])}}});const $e=L(ao,[["__scopeId","data-v-71c2f37b"]]),lo=R({__name:"index",props:{buttonTop:{default:350}},setup(n){We(l=>({"8c5102d8":t}));const t=n.buttonTop+"px",a=P(!1);return(l,o)=>{const s=w("el-icon"),r=w("el-drawer");return d(),T(j,null,[k("div",{class:"handle-button",onClick:o[0]||(o[0]=i=>a.value=!0)},[_(s,{size:24},{default:v(()=>[_(m(it))]),_:1})]),_(r,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=i=>a.value=i),size:"300px","with-header":!1},{default:v(()=>[ue(l.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue"])],64)}}});const ro=L(lo,[["__scopeId","data-v-eb9bfafc"]]),co=R({__name:"LeftMode",setup(n){const e=ne(),t=Y(),{showTagsView:a,fixedHeader:l}=G(t),o=$(()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation,mobile:e.device===X.Mobile})),s=()=>{e.closeSidebar(!1)};return(r,i)=>(d(),T("div",{class:O([o.value,"app-wrapper"])},[o.value.mobile&&o.value.openSidebar?(d(),T("div",{key:0,class:"drawer-bg",onClick:s})):V("",!0),_(m(Ce),{class:"sidebar-container"}),k("div",{class:O([{hasTagsView:m(a)},"main-container"])},[k("div",{class:O([{"fixed-header":m(l)},"layout-header"])},[_(m(Ee)),me(_(m($e),null,null,512),[[he,m(a)]])],2),_(m(Se),{class:"app-main"})],2)],2))}});const io=L(co,[["__scopeId","data-v-6872c40e"]]),uo={class:"app-wrapper"},_o={class:"fixed-header layout-header"},fo={class:"content"},po=R({__name:"TopMode",setup(n){const e=Y(),{showTagsView:t,showLogo:a}=G(e);return(l,o)=>(d(),T("div",uo,[k("div",_o,[k("div",fo,[m(a)?(d(),S(m(ke),{key:0,collapse:!1,class:"logo"})):V("",!0),_(m(Ee),{class:"navigation-bar"})]),me(_(m($e),null,null,512),[[he,m(t)]])]),k("div",{class:O([{hasTagsView:m(t)},"main-container"])},[_(m(Se),{class:"app-main"})],2)]))}});const vo=L(po,[["__scopeId","data-v-f2a706fe"]]),mo={class:"fixed-header layout-header"},ho={class:"content"},go=R({__name:"LeftTopMode",setup(n){const e=ne(),t=Y(),{showTagsView:a,showLogo:l}=G(t),o=$(()=>({hideSidebar:!e.sidebar.opened}));return(s,r)=>(d(),T("div",{class:O([o.value,"app-wrapper"])},[k("div",mo,[m(l)?(d(),S(m(ke),{key:0,collapse:!1,class:"logo"})):V("",!0),k("div",ho,[_(m(Ee)),me(_(m($e),null,null,512),[[he,m(a)]])])]),k("div",{class:O([{hasTagsView:m(a)},"main-container"])},[_(m(Ce),{class:"sidebar-container"}),_(m(Se),{class:"app-main"})],2)],2))}});const bo=L(go,[["__scopeId","data-v-c66016a6"]]),ge="--v3-tagsview-height",yo=R({__name:"index",setup(n){wt();const{setWatermark:e,clearWatermark:t}=mt(),a=ne(),l=Y(),{showSettings:o,layoutMode:s,showTagsView:r,showWatermark:i,showGreyMode:p,showColorWeakness:u}=G(l),c=$(()=>({showGreyMode:p.value,showColorWeakness:u.value})),g=re(ge);return de(()=>{r.value?Ie(ge,g):Ie(ge,"0px")}),de(()=>{i.value?e({}.VITE_APP_TITLE):t()}),(b,h)=>(d(),T("div",{class:O(c.value)},[m(s)==="left"||m(a).device===m(X).Mobile?(d(),S(io,{key:0})):m(s)==="top"?(d(),S(vo,{key:1})):m(s)==="left-top"?(d(),S(bo,{key:2})):V("",!0),m(o)?(d(),S(m(ro),{key:3},{default:v(()=>[_(m(Qn))]),_:1})):V("",!0)],2))}});const Co=L(yo,[["__scopeId","data-v-6988c834"]]);export{Co as default};
