import{L as A}from"./el-button-534f93ec.js";import{E as S}from"./el-overlay-56edc591.js";/* empty css                */import{E as F,a as P}from"./el-col-af40c86f.js";import{d as q,f as z,n as H,K as O,o as $}from"./admin-d15e446e.js";import{u as j,a as G,b as J}from"./index-d81ecfdd.js";import{g as Q}from"./index-484f3c2f.js";import{a as W}from"./index-b7dce1f7.js";import{E as X}from"./index-c21c62e8.js";import{d as Y,r as u,o as Z,y as ee,x as le,B as o,E as ae,k as t,ay as c,L as te,au as oe,g as se,b6 as ne}from"./viewer-71a6cc7b.js";import"./index-07157569.js";import"./el-popper-5f9a363e.js";import"./vnode-d45677e0.js";import"./refs-45d3232c.js";import"./debounce-e240d589.js";import"./service copy-fb1d097e.js";import"./index-b59c1af4.js";const ue={class:"dialog-footer"},re=Y({__name:"dataDialog",emits:["getPageList"],setup(de,{expose:V,emit:h}){const{proxy:x}=se(),E=h,f=u(),d=u(!1),g=u(),s=u({}),b=u({name:[{required:!0,message:"请输入角色名称",trigger:"change"}]}),w=()=>{d.value=!1},T=()=>{var l;(l=g.value)==null||l.validate(async e=>{e&&(s.value.menuIds=L(),s.value.id?await j(s.value):await G(s.value),d.value=!1,q.success("操作成功"),E("getPageList"))})},R=async l=>{if(l!=null&&l.id){const e=await J(l.id);s.value={...e.data},f.value="修改角色",d.value=!0,e.data.menuIds.forEach(r=>{oe(()=>{var m;(m=i.value)==null||m.setChecked(r,!0,!1)})})}else s.value={state:0},f.value="新增角色",d.value=!0},p=u([]),I=async()=>{const l=await Q({pageNum:1,pageSize:1e3});p.value=W(l.data.list)||[]},k=u(),y=u(!1),_=u(!0),i=u(),D=l=>{let e=p.value;for(let n=0;n<e.length;n++)x.$refs.menuRef.store.nodesMap[e[n].id].expanded=l},N=l=>{var e;(e=i.value)==null||e.setCheckedNodes(l?p.value:[])},K=l=>{s.value.menuCheckStrictly=!!l},L=()=>{var n,r;let l=(n=i.value)==null?void 0:n.getCheckedKeys(),e=(r=i.value)==null?void 0:r.getHalfCheckedKeys();return l.unshift.apply(l,e),l};return Z(()=>{I()}),V({openDialog:R}),(l,e)=>{const n=z,r=H,m=F,v=O,M=P,U=$,C=A,B=S;return ee(),le(B,{title:f.value,modelValue:d.value,"onUpdate:modelValue":e[8]||(e[8]=a=>d.value=a),width:"800px","close-on-click-modal":!1,"destroy-on-close":""},{footer:o(()=>[ae("div",ue,[t(C,{onClick:w},{default:o(()=>[c("取 消")]),_:1}),t(C,{type:"primary",onClick:T},{default:o(()=>[c("保 存")]),_:1})])]),default:o(()=>[t(U,{ref_key:"formRef",ref:g,model:s.value,rules:b.value,"label-width":"auto"},{default:o(()=>[t(M,{gutter:40},{default:o(()=>[t(m,{span:12},{default:o(()=>[t(r,{label:"角色名称：",prop:"name"},{default:o(()=>[t(n,{modelValue:s.value.name,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value.name=a),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1})]),_:1}),t(m,{span:24},{default:o(()=>[t(r,{label:"菜单权限："},{default:o(()=>[t(v,{modelValue:k.value,"onUpdate:modelValue":e[1]||(e[1]=a=>k.value=a),onChange:e[2]||(e[2]=a=>D(a))},{default:o(()=>[c("展开/折叠")]),_:1},8,["modelValue"]),t(v,{modelValue:y.value,"onUpdate:modelValue":e[3]||(e[3]=a=>y.value=a),onChange:e[4]||(e[4]=a=>N(a))},{default:o(()=>[c("全选/全不选")]),_:1},8,["modelValue"]),t(v,{modelValue:_.value,"onUpdate:modelValue":e[5]||(e[5]=a=>_.value=a),onChange:e[6]||(e[6]=a=>K(a))},{default:o(()=>[c("父子联动")]),_:1},8,["modelValue"]),t(te(X),{class:"tree-border",data:p.value,"show-checkbox":"",ref_key:"menuRef",ref:i,"node-key":"id","check-strictly":!_.value,"empty-text":"加载中，请稍后",props:{label:"name",children:"children"}},null,8,["data","check-strictly"])]),_:1})]),_:1}),t(m,{span:24},{default:o(()=>[t(r,{label:"备注：",prop:"remark"},{default:o(()=>[t(n,{type:"textarea",modelValue:s.value.remark,"onUpdate:modelValue":e[7]||(e[7]=a=>s.value.remark=a),placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])}}});const Te=ne(re,[["__scopeId","data-v-c26d01d1"]]);export{Te as default};
