/* empty css             *//* empty css                   */import{E as S,a as V}from"./el-col-c5c2ade1.js";import{E as F}from"./el-button-b054d70c.js";/* empty css                */import{E as L,a as N}from"./el-form-item-c56bbdeb.js";import{E as R}from"./el-input-351b3524.js";import{E as p}from"./el-link-bb4a05fd.js";import{d as I,r as a,k as t,ag as i,F as W,o as M,v as _,y as G,A as Q,B as l,C as f,D as $,I as q,E as A}from"./viewer-a917d3a0.js";import{d as U,_ as j,g as H}from"./dataDialog.vuevuetypescriptsetuptruelang-93e0c8c3.js";import{a as J}from"./index-a88dba86.js";import{E as K}from"./index-84823748.js";import{G as O}from"./user-9279ed61.js";import{v as X}from"./directive-a7cdde23.js";import"./use-form-item-a2dc758c.js";import"./use-form-common-props-957cc35c.js";import"./index-9899f039.js";import"./castArray-4f8be612.js";import"./error-f1912ce6.js";import"./_baseClone-be1d75cf.js";import"./_getTag-fe467e82.js";import"./el-overlay-b9b364f0.js";import"./index-09bc554b.js";import"./scroll-77ba8cf1.js";import"./vnode-37301cb0.js";import"./focus-trap-f79590ca.js";import"./refs-3c71427a.js";import"./el-input-number-ca8828b1.js";import"./index-ee860d2d.js";import"./el-tag-c034fee8.js";import"./el-select-9f1993c4.js";import"./el-popper-b532a2f5.js";import"./el-scrollbar-a1856fc2.js";import"./strings-1de25abc.js";import"./isEqual-7c3b890c.js";import"./debounce-81d01b88.js";import"./hasIn-246c5c0e.js";import"./index-f9ce445f.js";import"./validator-6c2b9956.js";import"./aria-bc8e8b0f.js";const Y={class:"container-main"},Z={class:"table-main"},Qe=I({__name:"index",setup(ee){const n=a({pageNum:1,pageSize:10}),g=a(!0),s=a(!1),c=a([]),h=()=>{n.value={pageNum:1,pageSize:10},r()},v=()=>{r()},r=async()=>{s.value=!0,H({...n.value,pageSize:1e3}).then(e=>{c.value=J(e.data.list)||[],s.value=!1})},b=a([{label:"接口名称",prop:"name",width:200,align:"left"},{label:"接口标识",prop:"path",minWidth:200,align:"left"},{label:"排序",prop:"sort",minWidth:100},{label:"创建时间",prop:"createTime",minWidth:200},{label:"更新时间",prop:"updateTime",minWidth:200},{label:"操作",prop:"option",fixed:"right",width:200,render:e=>{var o;return t(W,null,[t(p,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Plus",onClick:()=>u(e.row)},{default:()=>[t("span",{class:"table_link_text"},[i("新增")])]}),t(p,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Edit",onClick:()=>E(e.row)},{default:()=>[t("span",{class:"table_link_text"},[i("修改")])]}),!((o=e.row)!=null&&o.children)&&t(p,{class:"table_link_btn",underline:!1,size:"small",type:"danger",icon:"Remove",onClick:()=>k(e.row)},{default:()=>[t("span",{class:"table_link_text"},[i("删除")])]})])}}]),m=a(null),u=e=>{m.value.openDialog({parentId:(e==null?void 0:e.id)||0,parentPath:(e==null?void 0:e.path)||""})},E=e=>{m.value.openDialog(e)},k=({id:e})=>{K.confirm("是否删除该条数据",{title:"警告",type:"warning"}).then(()=>{U(e).then(o=>{o.code===0&&(O.success("删除成功"),r())})})};return M(()=>{r()}),(e,o)=>{const y=R,w=L,x=_("form-search"),D=N,C=F,T=S,z=V,B=_("Table"),P=X;return G(),Q("div",Y,[t(q,{name:"fade"},{default:l(()=>[f(t(D,{model:n.value,inline:!0,"label-width":"auto",class:"search-form"},{default:l(()=>[t(w,{label:"种类名称",prop:"name"},{default:l(()=>[t(y,{modelValue:n.value.name,"onUpdate:modelValue":o[0]||(o[0]=d=>n.value.name=d),placeholder:"请输入种类名称",clearable:""},null,8,["modelValue"])]),_:1}),t(x,{onReset:h,onSearch:v})]),_:1},8,["model"]),[[$,g.value]])]),_:1}),A("div",Z,[t(z,{gutter:10,class:"mb8"},{default:l(()=>[t(T,{span:1.5},{default:l(()=>[t(C,{type:"primary",plain:"",icon:"plus",size:"small",onClick:o[1]||(o[1]=d=>u())},{default:l(()=>[i("新增")]),_:1})]),_:1})]),_:1}),f(t(B,{data:c.value,"row-key":"id",columns:b.value},null,8,["data","columns"]),[[P,s.value]])]),t(j,{ref_key:"dataDialogRef",ref:m,onGetPageList:r},null,512)])}}});export{Qe as default};