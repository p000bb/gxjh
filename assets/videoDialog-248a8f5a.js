/* empty css             *//* empty css                   */import{E as Q}from"./el-overlay-1dc85f1f.js";import{E as T}from"./el-button-4e36e058.js";/* empty css                */import{E as $,a as j}from"./el-form-item-ef0a5188.js";import{E as q}from"./el-input-7ff3e30e.js";import{d as A,r as l,o as G,v as y,y as m,x as R,B as n,E as c,k as s,ag as k,C as E,A as v,F as Y,$ as H,L as J,O as K,Y as W,D as X,ap as Z}from"./viewer-a917d3a0.js";import{g as ee}from"./index-935e8e0f.js";import{G as oe}from"./user-89041d09.js";import{v as te}from"./directive-39134a76.js";import"./index-31848957.js";import"./error-f1912ce6.js";import"./scroll-77ba8cf1.js";import"./vnode-37301cb0.js";import"./focus-trap-c1ca97d6.js";import"./refs-3c71427a.js";import"./index-cb7b6eb7.js";import"./use-form-item-a4463e9d.js";import"./use-form-common-props-ac54b10b.js";import"./castArray-4f8be612.js";import"./_baseClone-45ade047.js";import"./_getTag-fe0ae1ad.js";const ae={class:"table-main w-full"},le={class:"grid grid-cols-4 gap-10 place-items-center w-full max-h-[500px] overflow-y-auto overflow-x-hidden","element-loading-background":"#fff","element-loading-text":"加载中！"},se=["onClick"],ne=["src"],ie={class:"text-center font-black line-clamp-1"},re={class:"dialog-footer"},me=A({__name:"videoDialog",emits:["confirm"],setup(ce,{expose:V,emit:w}){const D=w,f=l(""),i=l(!1),p="https://120.27.223.237/gxjh-file/",u=l(!1),g=l([]),t=l({pageNum:1,pageSize:10}),d=l(0),h=()=>{t.value={pageNum:1,pageSize:10},_()},C=()=>{_()},_=async()=>{u.value=!0,ee(t.value).then(e=>{g.value=e.data.list||[],d.value=parseInt(e.data.total),u.value=!1})},N=()=>{i.value=!1},r=l({}),x=e=>{r.value={id:e.id,url:p+e.path,cover:p+e.cover}},S=()=>{if(!r.value.id)return oe.error("请选择视频");i.value=!1,D("confirm",r.value)},B=async e=>{e!=null&&e.id&&x(e),h(),f.value="选择视频",i.value=!0};return G(()=>{}),V({openDialog:B}),(e,a)=>{const z=q,L=$,U=y("form-search"),F=j,I=y("pagination"),b=T,P=Q,M=te;return m(),R(P,{title:f.value,modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=o=>i.value=o),width:"1100px","close-on-click-modal":!1,"destroy-on-close":""},{footer:n(()=>[c("div",re,[s(b,{onClick:N},{default:n(()=>[k("关 闭")]),_:1}),s(b,{type:"primary",onClick:S},{default:n(()=>[k("确 定")]),_:1})])]),default:n(()=>[s(F,{model:t.value,inline:!0,"label-width":"auto",class:"search-form"},{default:n(()=>[s(L,{label:"视频名称",prop:"name"},{default:n(()=>[s(z,{modelValue:t.value.name,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value.name=o),placeholder:"请输入视频名称",clearable:""},null,8,["modelValue"])]),_:1}),s(U,{onReset:h,onSearch:C})]),_:1},8,["model"]),c("div",ae,[E((m(),v("div",le,[(m(!0),v(Y,null,H(g.value,(o,O)=>(m(),v("div",{key:O,class:J(["img-item",{"active-img":r.value.id===o.id}]),onClick:pe=>x(o)},[c("img",{src:K(p)+o.cover,class:"w-[178px]"},null,8,ne),c("p",ie,W(o.name),1)],10,se))),128))])),[[M,u.value]]),E(s(I,{total:d.value,page:t.value.pageNum,"onUpdate:page":a[1]||(a[1]=o=>t.value.pageNum=o),limit:t.value.pageSize,"onUpdate:limit":a[2]||(a[2]=o=>t.value.pageSize=o),onPagination:_},null,8,["total","page","limit"]),[[X,d.value>0]])])]),_:1},8,["title","modelValue"])}}});const Ie=Z(me,[["__scopeId","data-v-b1dd3fcb"]]);export{Ie as default};
