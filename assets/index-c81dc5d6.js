import{L as W}from"./el-button-ce4d76f3.js";import{v as B}from"./service copy-a1f7ec66.js";import{E as m,a as D,b as P,c as U}from"./el-link-e09e8b53.js";/* empty css                */import{d as F,f as M,n as $,o as q}from"./admin-a54a04d3.js";import{d as O,b8 as Q,r as n,k as a,ay as u,F as A,o as j,v as d,y as G,A as H,B as s,C as c,D as v,I as J,E as K}from"./viewer-de354506.js";import{d as X,g as Y}from"./index-8b06c014.js";import"./index-3589b39e.js";import"./el-popper-a78eaae7.js";import"./vnode-b3f97862.js";import"./aria-bc8e8b0f.js";import"./debounce-00950313.js";const Z={class:"container"},ee={class:"table-main"},_e=O({__name:"index",setup(ae){const _=Q(),o=n({pageNum:1,pageSize:10}),g=n(!0),i=n(!1),f=n([]),p=n(0),h=()=>{o.value={pageNum:1,pageSize:10},r()},b=()=>{r()},r=async()=>{i.value=!0,Y(o.value).then(e=>{f.value=e.data.list||[],p.value=parseInt(e.data.total),i.value=!1})},E=n([{label:"视频名称",prop:"name",minWidth:120},{label:"视频路径",prop:"path",minWidth:250,showOverflowTooltip:!1,render:e=>a(m,{type:"primary",href:{}.VITE_PREVIEW_URL+e.row.path,target:"_blank"},{default:()=>[{}.VITE_PREVIEW_URL+e.row.path]})},{label:"创建时间",prop:"createTime",minWidth:150},{label:"视频种类",prop:"type"},{label:"视频封面",prop:"preview",minWidth:120,showOverflowTooltip:!1,render:e=>a("img",{style:"height: 100px",src:{}.VITE_PREVIEW_URL+e.row.cover+`?name=${e.row.name}&size=${e.row.size}`},null)},{label:"操作",prop:"option",fixed:"right",width:150,render:e=>a(A,null,[a(m,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Edit",onClick:()=>y(e.row)},{default:()=>[a("span",{class:"table_link_text"},[u("修改")])]}),a(m,{class:"table_link_btn",underline:!1,size:"small",type:"danger",icon:"Remove",onClick:()=>V(e.row)},{default:()=>[a("span",{class:"table_link_text"},[u("删除")])]})])}]),w=()=>{_.push({path:"/file/video/manage"})},y=e=>{_.push({path:"/file/video/manage",query:{id:e.id}})},V=({id:e})=>{D.confirm("是否删除该条数据",{title:"警告",type:"warning"}).then(()=>{X(e).then(t=>{t.code===0&&(F.success("删除成功"),r())})})};return j(()=>{r()}),(e,t)=>{const k=M,R=$,T=d("form-search"),x=q,I=W,z=P,C=U,L=d("Table"),N=d("pagination"),S=B;return G(),H("div",Z,[a(J,{name:"fade"},{default:s(()=>[c(a(x,{model:o.value,inline:!0,"label-width":"auto",class:"search-form"},{default:s(()=>[a(R,{label:"名称",prop:"name"},{default:s(()=>[a(k,{modelValue:o.value.name,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value.name=l),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),a(T,{onReset:h,onSearch:b})]),_:1},8,["model"]),[[v,g.value]])]),_:1}),K("div",ee,[a(C,{gutter:10,class:"mb8"},{default:s(()=>[a(z,{span:1.5},{default:s(()=>[a(I,{type:"primary",plain:"",icon:"plus",size:"small",onClick:t[1]||(t[1]=l=>w())},{default:s(()=>[u("新增")]),_:1})]),_:1})]),_:1}),c(a(L,{data:f.value,"row-key":"id",columns:E.value,ref:"multipleTableRef"},null,8,["data","columns"]),[[S,i.value]]),c(a(N,{total:p.value,page:o.value.pageNum,"onUpdate:page":t[2]||(t[2]=l=>o.value.pageNum=l),limit:o.value.pageSize,"onUpdate:limit":t[3]||(t[3]=l=>o.value.pageSize=l),onPagination:r},null,8,["total","page","limit"]),[[v,p.value>0]])])])}}});export{_e as default};
