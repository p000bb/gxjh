/* empty css             *//* empty css                   */import{E as F,a as L}from"./el-col-c5c2ade1.js";import{E as P}from"./el-button-b054d70c.js";/* empty css                */import{E as R,a as W}from"./el-form-item-c56bbdeb.js";import{E as M}from"./el-input-351b3524.js";import{E as d}from"./el-link-bb4a05fd.js";import{d as U,r as l,k as e,ag as m,F as G,o as Q,v as c,y as q,A,B as r,C as _,D as v,I as $,E as j}from"./viewer-a917d3a0.js";import H from"./dataDialog-d5c30a25.js";import{d as J,g as K}from"./index-0a3b0bda.js";import{a as O}from"./index-a88dba86.js";import{E as X}from"./index-84823748.js";import{G as Y}from"./user-9279ed61.js";import{v as Z}from"./directive-a7cdde23.js";import"./use-form-item-a2dc758c.js";import"./use-form-common-props-957cc35c.js";import"./index-9899f039.js";import"./castArray-4f8be612.js";import"./error-f1912ce6.js";import"./_baseClone-be1d75cf.js";import"./_getTag-fe467e82.js";import"./el-overlay-b9b364f0.js";import"./index-09bc554b.js";import"./scroll-77ba8cf1.js";import"./vnode-37301cb0.js";import"./focus-trap-f79590ca.js";import"./refs-3c71427a.js";import"./el-switch-0cebf21a.js";import"./validator-6c2b9956.js";/* empty css                */import"./el-radio-d4edc31c.js";import"./el-input-number-ca8828b1.js";import"./index-ee860d2d.js";import"./el-tag-c034fee8.js";import"./el-select-9f1993c4.js";import"./el-popper-b532a2f5.js";import"./el-scrollbar-a1856fc2.js";import"./strings-1de25abc.js";import"./isEqual-7c3b890c.js";import"./debounce-81d01b88.js";import"./hasIn-246c5c0e.js";import"./index-f9ce445f.js";import"./el-tree-select-5355e3c7.js";import"./index-4af75670.js";import"./index-e005e917.js";import"./index-a4449389.js";import"./flatten-af461ab7.js";/* empty css                    */import"./picDialog-6939b827.js";import"./index-9aca1ad0.js";import"./videoDialog-0c7152fb.js";import"./index-713b7731.js";import"./aria-bc8e8b0f.js";const ee={class:"container-main"},te={class:"table-main"},at=U({__name:"index",setup(oe){const a=l({pageNum:1,pageSize:1e3}),b=l(!0),p=l(!1),f=l([]),s=l(0),E=()=>{a.value={pageNum:1,pageSize:1e3},i()},h=()=>{i()},i=async()=>{p.value=!0,K(a.value).then(t=>{f.value=O(t.data.list)||[],s.value=parseInt(t.data.total),p.value=!1})},k=l([{label:"节点名称",prop:"name",width:200,align:"left"},{label:"父节点ID",prop:"parentId",minWidth:150},{label:"排序",prop:"sort",minWidth:100},{label:"创建时间",prop:"createTime",minWidth:150},{label:"更新时间",prop:"updateTime",minWidth:150},{label:"操作",prop:"option",fixed:"right",width:200,render:t=>{var o;return e(G,null,[e(d,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Plus",onClick:()=>g(t.row)},{default:()=>[e("span",{class:"table_link_text"},[m("新增")])]}),e(d,{class:"table_link_btn",underline:!1,size:"small",type:"primary",icon:"Edit",onClick:()=>y(t.row)},{default:()=>[e("span",{class:"table_link_text"},[m("修改")])]}),!((o=t.row)!=null&&o.children)&&e(d,{class:"table_link_btn",underline:!1,size:"small",type:"danger",icon:"Remove",onClick:()=>w(t.row)},{default:()=>[e("span",{class:"table_link_text"},[m("删除")])]})])}}]),u=l(null),g=t=>{u.value.openDialog({parentId:(t==null?void 0:t.id)||"0"})},y=t=>{u.value.openDialog(t)},w=({id:t})=>{X.confirm("是否删除该条数据",{title:"警告",type:"warning"}).then(()=>{J(t).then(o=>{o.code===0&&(Y.success("删除成功"),i())})})};return Q(()=>{i()}),(t,o)=>{const D=M,x=R,C=c("form-search"),N=W,z=P,T=F,B=L,I=c("Table"),S=c("pagination"),V=Z;return q(),A("div",ee,[e($,{name:"fade"},{default:r(()=>[_(e(N,{model:a.value,inline:!0,"label-width":"auto",class:"search-form"},{default:r(()=>[e(x,{label:"种类名称",prop:"name"},{default:r(()=>[e(D,{modelValue:a.value.name,"onUpdate:modelValue":o[0]||(o[0]=n=>a.value.name=n),placeholder:"请输入种类名称",clearable:""},null,8,["modelValue"])]),_:1}),e(C,{onReset:E,onSearch:h})]),_:1},8,["model"]),[[v,b.value]])]),_:1}),j("div",te,[e(B,{gutter:10,class:"mb8"},{default:r(()=>[e(T,{span:1.5},{default:r(()=>[e(z,{type:"primary",plain:"",icon:"plus",size:"small",onClick:o[1]||(o[1]=n=>g())},{default:r(()=>[m("新增")]),_:1})]),_:1})]),_:1}),_(e(I,{data:f.value,"row-key":"id",columns:k.value},null,8,["data","columns"]),[[V,p.value]]),_(e(S,{total:s.value,page:a.value.pageNum,"onUpdate:page":o[2]||(o[2]=n=>a.value.pageNum=n),limit:a.value.pageSize,"onUpdate:limit":o[3]||(o[3]=n=>a.value.pageSize=n),onPagination:i},null,8,["total","page","limit"]),[[v,s.value>0]])]),e(H,{ref_key:"dataDialogRef",ref:u,onGetPageList:i},null,512)])}}});export{at as default};