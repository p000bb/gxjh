/* empty css             *//* empty css                   */import{E as R,a as $}from"./el-col-c5c2ade1.js";import{E as M}from"./el-button-b054d70c.js";/* empty css                */import{E as U,a as j}from"./el-form-item-c56bbdeb.js";import{E as G}from"./el-input-351b3524.js";import{E as u}from"./el-link-bb4a05fd.js";import{d as O,r as l,k as t,ag as c,F as Q,o as q,v as f,y as A,A as H,E as s,B as n,C as _,D as y,I as J}from"./viewer-a917d3a0.js";import{_ as K}from"./dataDialog.vuevuetypescriptsetuptruelang-3b638894.js";import{L as X}from"./index-3e2a6343.js";import{d as Y,g as Z}from"./index-9aca1ad0.js";import{a as ee}from"./index-a88dba86.js";import{g as te}from"./index-c9faec7c.js";import{E as ae}from"./index-84823748.js";import{G as oe}from"./user-9279ed61.js";import{v as le}from"./directive-a7cdde23.js";import"./use-form-item-a2dc758c.js";import"./use-form-common-props-957cc35c.js";import"./index-9899f039.js";import"./castArray-4f8be612.js";import"./error-f1912ce6.js";import"./_baseClone-be1d75cf.js";import"./_getTag-fe467e82.js";import"./el-overlay-b9b364f0.js";import"./index-09bc554b.js";import"./scroll-77ba8cf1.js";import"./vnode-37301cb0.js";import"./focus-trap-f79590ca.js";import"./refs-3c71427a.js";import"./el-tag-c034fee8.js";import"./el-select-9f1993c4.js";import"./el-popper-b532a2f5.js";import"./el-scrollbar-a1856fc2.js";import"./strings-1de25abc.js";import"./isEqual-7c3b890c.js";import"./debounce-81d01b88.js";import"./hasIn-246c5c0e.js";import"./index-f9ce445f.js";import"./validator-6c2b9956.js";import"./el-tree-select-5355e3c7.js";import"./index-4af75670.js";import"./index-e005e917.js";import"./index-a4449389.js";import"./flatten-af461ab7.js";/* empty css                    */import"./uploadImg-bb363576.js";/* empty css                */import"./index-9fe51bc0.js";import"./cloneDeep-70e8bf88.js";import"./aria-bc8e8b0f.js";const re={class:"container-main flex"},ne={class:"w-[250px] left-tree"},ie={style:{width:"calc(100% - 270px)"}},se={class:"table-main"},me=s("div",{class:"text-red-400 h-full leading-[24px] text-sm"},"注: 文件请勿过大，否则加载很慢",-1),st=O({__name:"index",setup(pe){const a=l({pageNum:1,pageSize:10}),w=l(!0),m=l(!1),g=l([]),p=l(0),b=()=>{a.value={pageNum:1,pageSize:10},r()},x=()=>{r()},r=async()=>{m.value=!0,Z(a.value).then(e=>{g.value=e.data.list||[],p.value=parseInt(e.data.total),m.value=!1})},E=l([{label:"图片名称",prop:"name",minWidth:120},{label:"图片路径",prop:"path",align:"center",minWidth:250,showOverflowTooltip:!1,render:e=>t(u,{type:"primary",href:"https://120.27.223.237/gxjh-file/"+e.row.path,target:"_blank"},{default:()=>[e.row.path]})},{label:"创建时间",prop:"createTime",minWidth:150},{label:"图片种类",prop:"type",minWidth:120},{label:"文件类别",prop:"category.name",minWidth:120,render:e=>{var o;return(o=e.row.category)==null?void 0:o.name},show:()=>!a.value.categoryId},{label:"图片预览",prop:"preview",showOverflowTooltip:!1,minWidth:150,fixed:"right",render:e=>t("img",{title:e.row.title,style:"width: 100px; height: 100px",src:"https://120.27.223.237/gxjh-file/"+e.row.path+`?name=${e.row.name}&size=${e.row.size}`},null)},{label:"操作",prop:"option",fixed:"right",width:150,render:e=>t(Q,null,[t(u,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Edit",onClick:()=>D(e.row)},{default:()=>[t("span",{class:"table_link_text"},[c("修改")])]}),t(u,{class:"table_link_btn",underline:!1,size:"small",type:"danger",icon:"Remove",onClick:()=>C(e.row)},{default:()=>[t("span",{class:"table_link_text"},[c("删除")])]})])}]),d=l(null),k=()=>{d.value.openDialog({categoryId:a.value.categoryId})},D=e=>{d.value.openDialog(e)},C=({id:e})=>{ae.confirm("是否删除该条数据",{title:"警告",type:"warning"}).then(()=>{Y(e).then(o=>{o.code===0&&(oe.success("删除成功"),r())})})},v=l([]),T=async()=>{const e=await te({pageNum:1,pageSize:1e3});v.value=ee([...e.data.list,{id:"0",name:"文件种类"}])||[]},z=e=>{e.id!=="0"?a.value.categoryId=e.id:a.value.categoryId=void 0,r()};return q(()=>{r(),T()}),(e,o)=>{const I=G,N=U,L=f("form-search"),S=j,B=M,h=R,P=$,V=f("Table"),W=f("pagination"),F=le;return A(),H("div",re,[s("div",ne,[t(X,{onNodeClick:z,data:v.value,"expand-on-click-node":!1,"node-key":"id","current-node-key":"0","default-expand-all":""},null,8,["data"])]),s("div",ie,[t(J,{name:"fade"},{default:n(()=>[_(t(S,{model:a.value,inline:!0,"label-width":"auto",class:"search-form"},{default:n(()=>[t(N,{label:"名称",prop:"name"},{default:n(()=>[t(I,{modelValue:a.value.name,"onUpdate:modelValue":o[0]||(o[0]=i=>a.value.name=i),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),t(L,{onReset:b,onSearch:x})]),_:1},8,["model"]),[[y,w.value]])]),_:1}),s("div",se,[t(P,{gutter:10,class:"mb8"},{default:n(()=>[t(h,{span:1.5},{default:n(()=>[t(B,{type:"primary",plain:"",icon:"plus",size:"small",onClick:o[1]||(o[1]=i=>k())},{default:n(()=>[c("新增")]),_:1})]),_:1}),t(h,{span:18},{default:n(()=>[me]),_:1})]),_:1}),_(t(V,{data:g.value,"row-key":"id",columns:E.value},null,8,["data","columns"]),[[F,m.value]]),_(t(W,{total:p.value,page:a.value.pageNum,"onUpdate:page":o[2]||(o[2]=i=>a.value.pageNum=i),limit:a.value.pageSize,"onUpdate:limit":o[3]||(o[3]=i=>a.value.pageSize=i),onPagination:r},null,8,["total","page","limit"]),[[y,p.value>0]])]),t(K,{ref_key:"dataDialogRef",ref:d,onGetPageList:r},null,512)])])}}});export{st as default};
