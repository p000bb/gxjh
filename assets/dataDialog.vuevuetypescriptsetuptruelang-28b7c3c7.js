import{L as w}from"./el-button-534f93ec.js";import{E as C}from"./el-overlay-56edc591.js";/* empty css                */import{E as I}from"./el-input-number-9046f3aa.js";import{d as x,f as B,n as D,o as N}from"./admin-d15e446e.js";import{u as U,a as h,b as q}from"./index-609ba817.js";import{d as L,r as n,y as F,x as P,B as t,E as R,k as a,ay as c}from"./viewer-71a6cc7b.js";const T={class:"dialog-footer"},Q=L({__name:"dataDialog",emits:["getPageList"],setup(M,{expose:f,emit:_}){const g=_,u=n(),r=n(!1),i=n(),o=n({}),v=n({name:[{required:!0,message:"请输入名称",trigger:"change"}],code:[{required:!0,message:"请输入标识",trigger:"change"}],sort:[{required:!0,message:"请输入排序",trigger:"change"}]}),V=()=>{r.value=!1},y=()=>{var l;(l=i.value)==null||l.validate(async e=>{e&&(o.value.id?await U(o.value):await h(o.value),r.value=!1,x.success("操作成功"),g("getPageList"))})};return f({openDialog:async l=>{if(l!=null&&l.id){const e=await q(l.id);o.value={id:e.data.id,parentId:e.data.parentId,name:e.data.name,sort:e.data.sort},u.value="修改文件种类",r.value=!0}else o.value={parentId:(l==null?void 0:l.parentId)||0},u.value="新增文件种类",r.value=!0}}),(l,e)=>{const d=B,m=D,E=I,b=N,p=w,k=C;return F(),P(k,{title:u.value,modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=s=>r.value=s),width:"40%","close-on-click-modal":!1,"destroy-on-close":""},{footer:t(()=>[R("div",T,[a(p,{onClick:V},{default:t(()=>[c("取 消")]),_:1}),a(p,{type:"primary",onClick:y},{default:t(()=>[c("保 存")]),_:1})])]),default:t(()=>[a(b,{ref_key:"formRef",ref:i,model:o.value,rules:v.value,"label-width":"auto"},{default:t(()=>[a(m,{label:"名称：",prop:"name"},{default:t(()=>[a(d,{modelValue:o.value.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value.name=s),placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),a(m,{label:"标识：",prop:"code"},{default:t(()=>[a(d,{modelValue:o.value.code,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.code=s),placeholder:"请输入标识"},null,8,["modelValue"])]),_:1}),a(m,{label:"排序：",prop:"sort"},{default:t(()=>[a(E,{modelValue:o.value.sort,"onUpdate:modelValue":e[2]||(e[2]=s=>o.value.sort=s),min:0,"controls-position":"right",class:"w-full"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])}}});export{Q as _};
