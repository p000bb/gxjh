import{L as U}from"./el-button-534f93ec.js";import{E as B}from"./el-overlay-56edc591.js";/* empty css                */import{E as D}from"./el-input-number-9046f3aa.js";import{d as L,f as C,n as I,D as q,B as N,o as F}from"./admin-d15e446e.js";import"./el-popper-5f9a363e.js";import{r as i}from"./service copy-fb1d097e.js";import{d as G,r as m,y as R,x as M,B as n,E as $,k as t,ay as g}from"./viewer-71a6cc7b.js";const p="/permission";function j(o){return i({url:p,method:"get",params:{id:o}})}function le(o){return i({url:`${p}/page`,method:"post",data:o})}function z(o){return i({url:p,method:"post",data:o})}function A(o){return i({url:p,method:"put",data:o})}function te(o){return i({url:p,method:"delete",params:{id:o}})}const H={class:"dialog-footer"},ae=G({__name:"dataDialog",emits:["getPageList"],setup(o,{expose:h,emit:P}){const E=P,f=m(),r=m(!1),c=m(),e=m({}),V=m({name:[{required:!0,message:"请输入名称",trigger:"change"}],path:[{required:!0,message:"请输入接口标识",trigger:"change"}],sort:[{required:!0,message:"请输入排序",trigger:"change"}]}),b=()=>{r.value=!1},T=()=>{var l;(l=c.value)==null||l.validate(async a=>{a&&(e.value.id?await A(e.value):await z(e.value),r.value=!1,L.success("操作成功"),E("getPageList"))})},y=async l=>{if(l!=null&&l.id){const a=await j(l.id);e.value={...a.data},f.value="修改接口",r.value=!0}else e.value={parentId:(l==null?void 0:l.parentId)||0,parentPath:(l==null?void 0:l.parentPath)||""},f.value="新增接口",r.value=!0},O=l=>{l==="==POST"&&(e.value.path=e.value.parentPath+l,e.value.name="新增"),l==="==PUT"&&(e.value.path=e.value.parentPath+l,e.value.name="修改"),l==="==DELETE"&&(e.value.path=e.value.parentPath+l,e.value.name="删除"),l==="/page==POST"&&(e.value.path=e.value.parentPath+l,e.value.name="列表查询"),l==="==GET"&&(e.value.path=e.value.parentPath+l,e.value.name="单条查询"),l==="/tree==POST"&&(e.value.path=e.value.parentPath+l,e.value.name="树查询")};return h({openDialog:y}),(l,a)=>{const v=C,d=I,s=q,k=N,w=D,x=F,_=U,S=B;return R(),M(S,{title:f.value,modelValue:r.value,"onUpdate:modelValue":a[4]||(a[4]=u=>r.value=u),width:"500px","close-on-click-modal":!1,"destroy-on-close":""},{footer:n(()=>[$("div",H,[t(_,{onClick:b},{default:n(()=>[g("取 消")]),_:1}),t(_,{type:"primary",onClick:T},{default:n(()=>[g("保 存")]),_:1})])]),default:n(()=>[t(x,{ref_key:"formRef",ref:c,model:e.value,rules:V.value,"label-width":"auto"},{default:n(()=>[t(d,{label:"接口名称：",prop:"name"},{default:n(()=>[t(v,{modelValue:e.value.name,"onUpdate:modelValue":a[0]||(a[0]=u=>e.value.name=u),placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),t(d,{label:"接口标识：",prop:"path"},{default:n(()=>[t(v,{modelValue:e.value.path,"onUpdate:modelValue":a[1]||(a[1]=u=>e.value.path=u),placeholder:"请输入标识"},null,8,["modelValue"])]),_:1}),t(d,{label:"接口种类：",prop:"type"},{default:n(()=>[t(k,{modelValue:e.value.type,"onUpdate:modelValue":a[2]||(a[2]=u=>e.value.type=u),onChange:O},{default:n(()=>[t(s,{label:"新增",value:"==POST"}),t(s,{label:"修改",value:"==PUT"}),t(s,{label:"删除",value:"==DELETE"}),t(s,{label:"列表查询",value:"/page==POST"}),t(s,{label:"单条查询",value:"==GET"}),t(s,{label:"树查询",value:"/tree==POST"})]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"排序：",prop:"sort"},{default:n(()=>[t(w,{modelValue:e.value.sort,"onUpdate:modelValue":a[3]||(a[3]=u=>e.value.sort=u),min:0,"controls-position":"right",class:"w-full"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])}}});export{ae as _,te as d,le as g};
