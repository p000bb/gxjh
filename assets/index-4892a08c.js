/* empty css             *//* empty css                */import{E as v}from"./el-button-b054d70c.js";import{E as w,a as y}from"./el-form-item-c56bbdeb.js";import{E as b}from"./el-input-351b3524.js";import{d as E,ar as V,r as l,ax as k,v as F,y as B,A as C,k as e,E as m,B as r,O as _,bg as z,bh as R,aw as j,ag as q,a4 as I,ap as K}from"./viewer-a917d3a0.js";import{Q as M}from"./user-9279ed61.js";import{_ as N}from"./index.vuevuetypescriptsetuptruelang-fb5d3ece.js";import"./use-form-item-a2dc758c.js";import"./use-form-common-props-957cc35c.js";import"./index-9899f039.js";import"./castArray-4f8be612.js";import"./error-f1912ce6.js";import"./_baseClone-be1d75cf.js";import"./_getTag-fe467e82.js";/* empty css                        */import"./el-popper-b532a2f5.js";import"./focus-trap-f79590ca.js";import"./el-scrollbar-a1856fc2.js";import"./el-dropdown-item-503d2576.js";import"./dropdown-ab62d114.js";import"./refs-3c71427a.js";import"./el-tooltip-4ed993c7.js";/* empty css                */import"./useTheme-46440463.js";const U={class:"login-container"},A={class:"login-card"},D={class:"title"},L={class:"content"},O=E({__name:"index",setup(Q){const f=V(),p=l(null),s=l(!1);l("");const o=k({account:"superadmin",password:"zjhc368@FZW&12581",code:""}),g={account:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:20,message:"长度在 8 到 20 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},c=()=>{var a;(a=p.value)==null||a.validate((t,i)=>{t?(s.value=!0,M().login(o).then(()=>{f.push({path:"/dashboard"})}).catch(()=>{o.password=""}).finally(()=>{s.value=!1})):console.error("表单校验不通过",i)})};return(a,t)=>{const i=F("svg-icon"),d=b,u=w,x=v,h=y;return B(),C("div",U,[e(N,{class:"theme-switch"}),m("div",A,[m("div",D,[e(i,{name:"gxjh",class:"gxjh"})]),m("div",L,[e(h,{ref_key:"loginFormRef",ref:p,model:o,rules:g,onKeyup:I(c,["enter"])},{default:r(()=>[e(u,{prop:"account"},{default:r(()=>[e(d,{modelValue:o.account,"onUpdate:modelValue":t[0]||(t[0]=n=>o.account=n),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":_(z),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),e(u,{prop:"password"},{default:r(()=>[e(d,{modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=n=>o.password=n),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":_(R),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),e(x,{loading:s.value,type:"primary",size:"large",onClick:j(c,["prevent"])},{default:r(()=>[q("登 录")]),_:1},8,["loading","onClick"])]),_:1},8,["model","onKeyup"])])])])}}});const _e=K(O,[["__scopeId","data-v-998c3486"]]);export{_e as default};