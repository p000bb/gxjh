import{L}from"./el-button-534f93ec.js";/* empty css                   */import{E as S,a as V}from"./el-col-af40c86f.js";/* empty css                */import{d as F,f as N,n as R,o as I}from"./admin-d15e446e.js";import{E as p,a as W}from"./el-link-b795f2cd.js";import{d as M,r as o,k as a,ay as i,F as Q,o as $,v as _,y as q,A,B as l,C as f,D as G,I as U,E as j}from"./viewer-71a6cc7b.js";import{d as H,_ as J,g as K}from"./dataDialog.vuevuetypescriptsetuptruelang-7071a3b6.js";import{a as O}from"./index-b7dce1f7.js";import{v as X}from"./directive-44e37452.js";import"./el-popper-5f9a363e.js";import"./debounce-e240d589.js";import"./index-07157569.js";import"./vnode-d45677e0.js";import"./aria-bc8e8b0f.js";import"./el-overlay-56edc591.js";import"./refs-45d3232c.js";import"./el-input-number-9046f3aa.js";import"./index-65fc4267.js";import"./service copy-fb1d097e.js";const Y={class:"container-main"},Z={class:"table-main"},Ee=M({__name:"index",setup(ee){const n=o({pageNum:1,pageSize:10}),g=o(!0),r=o(!1),c=o([]),h=()=>{n.value={pageNum:1,pageSize:10},s()},v=()=>{s()},s=async()=>{r.value=!0,K({...n.value,pageSize:1e3}).then(e=>{c.value=O(e.data.list)||[],r.value=!1})},b=o([{label:"接口名称",prop:"name",width:200,align:"left"},{label:"接口标识",prop:"path",minWidth:200,align:"left"},{label:"排序",prop:"sort",minWidth:100},{label:"创建时间",prop:"createTime",minWidth:200},{label:"更新时间",prop:"updateTime",minWidth:200},{label:"操作",prop:"option",fixed:"right",width:200,render:e=>{var t;return a(Q,null,[a(p,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Plus",onClick:()=>u(e.row)},{default:()=>[a("span",{class:"table_link_text"},[i("新增")])]}),a(p,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Edit",onClick:()=>y(e.row)},{default:()=>[a("span",{class:"table_link_text"},[i("修改")])]}),!((t=e.row)!=null&&t.children)&&a(p,{class:"table_link_btn",underline:!1,size:"small",type:"danger",icon:"Remove",onClick:()=>E(e.row)},{default:()=>[a("span",{class:"table_link_text"},[i("删除")])]})])}}]),m=o(null),u=e=>{m.value.openDialog({parentId:(e==null?void 0:e.id)||0,parentPath:(e==null?void 0:e.path)||""})},y=e=>{m.value.openDialog(e)},E=({id:e})=>{W.confirm("是否删除该条数据",{title:"警告",type:"warning"}).then(()=>{H(e).then(t=>{t.code===0&&(F.success("删除成功"),s())})})};return $(()=>{s()}),(e,t)=>{const k=N,w=R,x=_("form-search"),D=I,C=L,T=S,z=V,B=_("Table"),P=X;return q(),A("div",Y,[a(U,{name:"fade"},{default:l(()=>[f(a(D,{model:n.value,inline:!0,"label-width":"auto",class:"search-form"},{default:l(()=>[a(w,{label:"种类名称",prop:"name"},{default:l(()=>[a(k,{modelValue:n.value.name,"onUpdate:modelValue":t[0]||(t[0]=d=>n.value.name=d),placeholder:"请输入种类名称",clearable:""},null,8,["modelValue"])]),_:1}),a(x,{onReset:h,onSearch:v})]),_:1},8,["model"]),[[G,g.value]])]),_:1}),j("div",Z,[a(z,{gutter:10,class:"mb8"},{default:l(()=>[a(T,{span:1.5},{default:l(()=>[a(C,{type:"primary",plain:"",icon:"plus",size:"small",onClick:t[1]||(t[1]=d=>u())},{default:l(()=>[i("新增")]),_:1})]),_:1})]),_:1}),f(a(B,{data:c.value,"row-key":"id",columns:b.value},null,8,["data","columns"]),[[P,r.value]])]),a(J,{ref_key:"dataDialogRef",ref:m,onGetPageList:s},null,512)])}}});export{Ee as default};
