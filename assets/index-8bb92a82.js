import{K as L}from"./el-button-fb691484.js";/* empty css                   */import{E as N,a as S}from"./el-col-2760619c.js";/* empty css                */import{d as I,f as P,j as A,k as M}from"./admin-ee59f3a1.js";import{E as r,a as W}from"./el-link-222bec93.js";import{d as Q,r as o,k as e,ay as i,F as $,o as j,v as f,y as q,A as G,B as l,C as b,D as K,I as O,E as U}from"./viewer-97ef37b1.js";import{_ as H}from"./dataDialog.vuevuetypescriptsetuptruelang-e7ff39e3.js";import J from"./optionDialog-6bc0f5fd.js";import{d as X,g as Y}from"./index-0e7aa218.js";import{a as Z}from"./index-70f8277e.js";import{v as ee}from"./directive-2e4aa6c9.js";import"./el-popper-17f91b7a.js";import"./debounce-38c8536c.js";import"./index-aec40419.js";import"./vnode-3a581f43.js";import"./aria-bc8e8b0f.js";import"./el-overlay-9e31ebb7.js";import"./refs-03c5e3c6.js";import"./el-input-number-aa0bf63c.js";import"./index-3ffe7cf2.js";import"./el-tree-select-04f4c75d.js";import"./index-203fd0f4.js";import"./index-471e79b5.js";import"./fileDialog-b312b38b.js";import"./el-tab-pane-19a2d70d.js";import"./index-59f4a993.js";import"./index-15cc5994.js";import"./index-91087f1d.js";const ae={class:"container-main"},te={class:"table-main"},Le=Q({__name:"index",setup(oe){const n=o({pageNum:1,pageSize:10}),g=o(!0),m=o(!1),u=o([]),v=()=>{n.value={pageNum:1,pageSize:10},s()},h=()=>{s()},s=async()=>{m.value=!0,Y(n.value).then(a=>{u.value=Z(a.data.list)||[],m.value=!1})},k=o([{label:"部门名称",prop:"name",width:200,align:"left"},{label:"排序",prop:"sort",minWidth:100},{label:"创建时间",prop:"createTime",minWidth:180},{label:"更新时间",prop:"updateTime",minWidth:180},{label:"操作",prop:"option",fixed:"right",width:300,render:a=>{var t;return e($,null,[e(r,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Plus",onClick:()=>c(a.row)},{default:()=>[e("span",{class:"table_link_text"},[i("新增")])]}),e(r,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Edit",onClick:()=>y(a.row)},{default:()=>[e("span",{class:"table_link_text"},[i("修改")])]}),e(r,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Edit",onClick:()=>w(a.row)},{default:()=>[e("span",{class:"table_link_text"},[i("素材编辑")])]}),!((t=a.row)!=null&&t.children)&&e(r,{class:"table_link_btn",underline:!1,size:"small",type:"danger",icon:"Remove",onClick:()=>E(a.row)},{default:()=>[e("span",{class:"table_link_text"},[i("删除")])]})])}}]),p=o(null),c=a=>{p.value.openDialog({parentId:(a==null?void 0:a.id)||"0"})},y=a=>{p.value.openDialog(a)},E=({id:a})=>{W.confirm("是否删除该条数据",{title:"警告",type:"warning"}).then(()=>{X(a).then(t=>{t.code===0&&(I.success("删除成功"),s())})})},d=o(null),w=a=>{d.value.openDialog(a)};return j(()=>{s()}),(a,t)=>{const D=P,x=A,C=f("form-search"),T=M,z=L,B=N,F=S,R=f("Table"),V=ee;return q(),G("div",ae,[e(O,{name:"fade"},{default:l(()=>[b(e(T,{model:n.value,inline:!0,"label-width":"auto",class:"search-form"},{default:l(()=>[e(x,{label:"图册名称",prop:"name"},{default:l(()=>[e(D,{modelValue:n.value.name,"onUpdate:modelValue":t[0]||(t[0]=_=>n.value.name=_),placeholder:"请输入图册名称",clearable:""},null,8,["modelValue"])]),_:1}),e(C,{onReset:v,onSearch:h})]),_:1},8,["model"]),[[K,g.value]])]),_:1}),U("div",te,[e(F,{gutter:10,class:"mb8"},{default:l(()=>[e(B,{span:1.5},{default:l(()=>[e(z,{type:"primary",plain:"",icon:"plus",size:"small",onClick:t[1]||(t[1]=_=>c())},{default:l(()=>[i("新增")]),_:1})]),_:1})]),_:1}),b(e(R,{data:u.value,"row-key":"id",columns:k.value},null,8,["data","columns"]),[[V,m.value]])]),e(H,{ref_key:"dataDialogRef",ref:p,onGetPageList:s},null,512),e(J,{ref_key:"optionDialogRef",ref:d},null,512)])}}});export{Le as default};
