import{L as F}from"./el-button-534f93ec.js";/* empty css                   */import{E as U,a as $}from"./el-col-af40c86f.js";/* empty css                */import{d as M,f as O,n as Q,o as q}from"./admin-d15e446e.js";import{E as d,a as A}from"./el-link-b795f2cd.js";import{d as G,r as l,k as a,ay as u,F as j,o as H,v as c,y as J,A as K,E as _,B as i,C as f,D as h,I as X}from"./viewer-71a6cc7b.js";import{_ as Y}from"./dataDialog.vuevuetypescriptsetuptruelang-2900ea0b.js";import{L as Z}from"./index-e9e802b0.js";import{d as ee,g as ae}from"./index-d8f03a14.js";import{a as te}from"./index-b7dce1f7.js";import{g as oe}from"./index-609ba817.js";import{v as le}from"./directive-44e37452.js";import"./el-popper-5f9a363e.js";import"./debounce-e240d589.js";import"./index-07157569.js";import"./vnode-d45677e0.js";import"./aria-bc8e8b0f.js";import"./el-overlay-56edc591.js";import"./refs-45d3232c.js";import"./el-tree-select-4038975f.js";import"./index-c21c62e8.js";import"./index-b59c1af4.js";import"./uploadImg-055f8445.js";/* empty css                */import"./cloneDeep-232505b0.js";import"./service copy-fb1d097e.js";const ne={class:"container-main flex"},re={class:"w-[250px] left-tree"},ie={style:{width:"calc(100% - 270px)"}},se={class:"table-main"},Be=G({__name:"index",setup(me){const t=l({pageNum:1,pageSize:10}),y=l(!0),s=l(!1),g=l([]),m=l(0),w=()=>{t.value={pageNum:1,pageSize:10},n()},b=()=>{n()},n=async()=>{s.value=!0,ae(t.value).then(e=>{g.value=e.data.list||[],m.value=parseInt(e.data.total),s.value=!1})},E=l([{label:"图片名称",prop:"name",minWidth:120},{label:"图片路径",prop:"path",align:"center",minWidth:250,showOverflowTooltip:!1,render:e=>a(d,{type:"primary",href:{}.VITE_PREVIEW_URL+e.row.path,target:"_blank"},{default:()=>[e.row.path]})},{label:"创建时间",prop:"createTime",minWidth:150},{label:"创建时间",prop:"createTime",minWidth:150},{label:"图片种类",prop:"type",minWidth:120},{label:"文件类别",prop:"category.name",minWidth:120,render:e=>{var o;return(o=e.row.category)==null?void 0:o.name},show:()=>!t.value.categoryId},{label:"图片预览",prop:"preview",showOverflowTooltip:!1,minWidth:150,fixed:"right",render:e=>a("img",{title:e.row.title,style:"width: 100px; height: 100px",src:{}.VITE_PREVIEW_URL+e.row.path+`?name=${e.row.name}&size=${e.row.size}`},null)},{label:"操作",prop:"option",fixed:"right",width:150,render:e=>a(j,null,[a(d,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Edit",onClick:()=>x(e.row)},{default:()=>[a("span",{class:"table_link_text"},[u("修改")])]}),a(d,{class:"table_link_btn",underline:!1,size:"small",type:"danger",icon:"Remove",onClick:()=>T(e.row)},{default:()=>[a("span",{class:"table_link_text"},[u("删除")])]})])}]),p=l(null),k=()=>{p.value.openDialog({categoryId:t.value.categoryId})},x=e=>{p.value.openDialog(e)},T=({id:e})=>{A.confirm("是否删除该条数据",{title:"警告",type:"warning"}).then(()=>{ee(e).then(o=>{o.code===0&&(M.success("删除成功"),n())})})},v=l([]),I=async()=>{const e=await oe({pageNum:1,pageSize:1e3});v.value=te([...e.data.list,{id:"0",name:"文件种类"}])||[]},D=e=>{e.id!=="0"?t.value.categoryId=e.id:t.value.categoryId=void 0,n()};return H(()=>{n(),I()}),(e,o)=>{const C=O,L=Q,z=c("form-search"),V=q,N=F,R=U,W=$,P=c("Table"),S=c("pagination"),B=le;return J(),K("div",ne,[_("div",re,[a(Z,{onNodeClick:D,data:v.value,"expand-on-click-node":!1,"node-key":"id","current-node-key":"0","default-expand-all":""},null,8,["data"])]),_("div",ie,[a(X,{name:"fade"},{default:i(()=>[f(a(V,{model:t.value,inline:!0,"label-width":"auto",class:"search-form"},{default:i(()=>[a(L,{label:"名称",prop:"name"},{default:i(()=>[a(C,{modelValue:t.value.name,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value.name=r),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),a(z,{onReset:w,onSearch:b})]),_:1},8,["model"]),[[h,y.value]])]),_:1}),_("div",se,[a(W,{gutter:10,class:"mb8"},{default:i(()=>[a(R,{span:1.5},{default:i(()=>[a(N,{type:"primary",plain:"",icon:"plus",size:"small",onClick:o[1]||(o[1]=r=>k())},{default:i(()=>[u("新增")]),_:1})]),_:1})]),_:1}),f(a(P,{data:g.value,"row-key":"id",columns:E.value},null,8,["data","columns"]),[[B,s.value]]),f(a(S,{total:m.value,page:t.value.pageNum,"onUpdate:page":o[2]||(o[2]=r=>t.value.pageNum=r),limit:t.value.pageSize,"onUpdate:limit":o[3]||(o[3]=r=>t.value.pageSize=r),onPagination:n},null,8,["total","page","limit"]),[[h,m.value>0]])]),a(Y,{ref_key:"dataDialogRef",ref:p,onGetPageList:n},null,512)])])}}});export{Be as default};