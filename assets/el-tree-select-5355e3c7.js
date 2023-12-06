import{a as S,E as j,s as F}from"./el-select-9f1993c4.js";import{_ as M}from"./index-4af75670.js";import{f as U,_ as $}from"./user-9279ed61.js";import{p as O}from"./index-a4449389.js";import{ab as H,b as C,ac as x,d as L,g as z,w as I,a$ as R,i as W,r as P,ax as V,o as D,h as p}from"./viewer-a917d3a0.js";import{U as A}from"./el-input-351b3524.js";import{i as G}from"./isEqual-7c3b890c.js";const J=(e,{attrs:c},{tree:i,key:r})=>{const o=U("tree-select"),n={...O(H(e),Object.keys(S.props)),...c,valueKey:r,popperClass:C(()=>{const s=[o.e("popper")];return e.popperClass&&s.push(e.popperClass),s.join(" ")}),filterMethod:(s="")=>{e.filterMethod&&e.filterMethod(s),x(()=>{var f;(f=i.value)==null||f.filter(s)})},onVisibleChange:s=>{var f;(f=c.onVisibleChange)==null||f.call(c,s),e.filterable&&s&&n.filterMethod()}};return n},Q=L({extends:j,setup(e,c){const i=j.setup(e,c);delete i.selectOptionClick;const r=z().proxy;return x(()=>{i.select.cachedOptions.get(r.value)||i.select.onOptionCreate(r)}),i},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function T(e){return e||e===0}function w(e){return Array.isArray(e)&&e.length}function g(e){return Array.isArray(e)?e:T(e)?[e]:[]}function E(e,c,i,r,o){for(let n=0;n<e.length;n++){const s=e[n];if(c(s,n,e,o))return r?r(s,n,e,o):s;{const f=i(s);if(w(f)){const a=E(f,c,i,r,s);if(a)return a}}}}function q(e,c,i,r){for(let o=0;o<e.length;o++){const n=e[o];c(n,o,e,r);const s=i(n);w(s)&&q(s,c,i,n)}}const X=(e,{attrs:c,slots:i,emit:r},{select:o,tree:n,key:s})=>{I(()=>e.modelValue,()=>{e.showCheckbox&&x(()=>{const t=n.value;t&&!G(t.getCheckedKeys(),g(e.modelValue))&&t.setCheckedKeys(g(e.modelValue))})},{immediate:!0,deep:!0});const f=C(()=>({value:s.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props})),a=(t,l)=>{var d;const u=f.value[t];return R(u)?u(l,(d=n.value)==null?void 0:d.getNode(a("value",l))):l[u]},b=g(e.modelValue).map(t=>E(e.data||[],l=>a("value",l)===t,l=>a("children",l),(l,d,u,y)=>y&&a("value",y))).filter(t=>T(t)),k=C(()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const t=[];return q(e.data.concat(e.cacheData),l=>{const d=a("value",l);t.push({value:d,currentLabel:a("label",l),isDisabled:a("disabled",l)})},l=>a("children",l)),t}),m=C(()=>k.value.reduce((t,l)=>({...t,[l.value]:l}),{}));return{...O(H(e),Object.keys(M.props)),...c,nodeKey:s,expandOnClickNode:C(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:C(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(b):b),renderContent:(t,{node:l,data:d,store:u})=>t(Q,{value:a("value",d),label:a("label",d),disabled:a("disabled",d)},e.renderContent?()=>e.renderContent(t,{node:l,data:d,store:u}):i.default?()=>i.default({node:l,data:d,store:u}):void 0),filterNodeMethod:(t,l,d)=>{var u;return e.filterNodeMethod?e.filterNodeMethod(t,l,d):t?(u=a("label",l))==null?void 0:u.includes(t):!0},onNodeClick:(t,l,d)=>{var u,y,K;if((u=c.onNodeClick)==null||u.call(c,t,l,d),!(e.showCheckbox&&e.checkOnClickNode))if(!e.showCheckbox&&(e.checkStrictly||l.isLeaf)){if(!a("disabled",t)){const h=(y=o.value)==null?void 0:y.options.get(a("value",t));(K=o.value)==null||K.handleOptionSelect(h)}}else e.expandOnClickNode&&d.proxy.handleExpandIconClick()},onCheck:(t,l)=>{if(!e.showCheckbox)return;const d=a("value",t),u=l.checkedKeys,y=e.multiple?g(e.modelValue).filter(h=>h in m.value&&!n.value.getNode(h)&&!u.includes(h)):[],K=u.concat(y);if(e.checkStrictly)r(A,e.multiple?K:K.includes(d)?d:void 0);else if(e.multiple)r(A,n.value.getCheckedKeys(!0));else{const h=E([t],v=>!w(a("children",v))&&!a("disabled",v),v=>a("children",v)),N=h?a("value",h):void 0,B=T(e.modelValue)&&!!E([t],v=>a("value",v)===e.modelValue,v=>a("children",v));r(A,N===e.modelValue||B?void 0:N)}x(()=>{var h;const N=g(e.modelValue);n.value.setCheckedKeys(N),(h=c.onCheck)==null||h.call(c,t,{checkedKeys:n.value.getCheckedKeys(),checkedNodes:n.value.getCheckedNodes(),halfCheckedKeys:n.value.getHalfCheckedKeys(),halfCheckedNodes:n.value.getHalfCheckedNodes()})})},cacheOptions:k}};var Y=L({props:{data:{type:Array,default:()=>[]}},setup(e){const c=W(F);return I(()=>e.data,()=>{var i;e.data.forEach(o=>{c.cachedOptions.has(o.value)||c.cachedOptions.set(o.value,o)});const r=((i=c.selectWrapper)==null?void 0:i.querySelectorAll("input"))||[];Array.from(r).includes(document.activeElement)||c.setSelected()},{flush:"post",immediate:!0}),()=>{}}});const Z=L({name:"ElTreeSelect",inheritAttrs:!1,props:{...S.props,...M.props,cacheData:{type:Array,default:()=>[]}},setup(e,c){const{slots:i,expose:r}=c,o=P(),n=P(),s=C(()=>e.nodeKey||e.valueKey||"value"),f=J(e,c,{select:o,tree:n,key:s}),{cacheOptions:a,...b}=X(e,c,{select:o,tree:n,key:s}),k=V({});return r(k),D(()=>{Object.assign(k,{...O(n.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...O(o.value,["focus","blur"])})}),()=>p(S,V({...f,ref:m=>o.value=m}),{...i,default:()=>[p(Y,{data:a.value}),p(M,V({...b,ref:m=>n.value=m}))]})}});var _=$(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);_.install=e=>{e.component(_.name,_)};const ee=_,ie=ee;export{ie as E};