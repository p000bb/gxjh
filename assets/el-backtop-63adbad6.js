import{s as p,r as _,W as E,o as g,bh as y,d as b,g as N,q as d,t as B,y as f,I as t,x as C,a8 as T,J as v,ah as x,E as S,m as k,bi as w,H as M,A as $}from"./index-6ba073dc.js";import{H,X as I,_ as q,E as z}from"./el-button-2bb63f1b.js";import{t as A}from"./el-popper-f7dc5037.js";const O={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},P={click:a=>a instanceof MouseEvent},V=(a,i,l)=>{const e=p(),o=p(),n=_(!1),c=()=>{e.value&&(n.value=e.value.scrollTop>=a.visibilityHeight)},u=s=>{var m;(m=e.value)==null||m.scrollTo({top:0,behavior:"smooth"}),i("click",s)},r=y(c,300,!0);return E(o,"scroll",r),g(()=>{var s;o.value=document,e.value=document.documentElement,a.target&&(e.value=(s=document.querySelector(a.target))!=null?s:void 0,e.value||A(l,`target does not exist: ${a.target}`),o.value=e.value),c()}),{visible:n,handleClick:u}},h="ElBacktop",F=b({name:h}),J=b({...F,props:O,emits:P,setup(a,{emit:i}){const l=a,e=H("backtop"),{handleClick:o,visible:n}=V(l,i,h),c=N(()=>({right:`${l.right}px`,bottom:`${l.bottom}px`}));return(u,r)=>(d(),B($,{name:`${t(e).namespace.value}-fade-in`},{default:f(()=>[t(n)?(d(),C("div",{key:0,style:T(t(c)),class:v(t(e).b()),onClick:r[0]||(r[0]=x((...s)=>t(o)&&t(o)(...s),["stop"]))},[S(u.$slots,"default",{},()=>[k(t(I),{class:v(t(e).e("icon"))},{default:f(()=>[k(t(w))]),_:1},8,["class"])])],6)):M("v-if",!0)]),_:3},8,["name"]))}});var L=q(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const j=z(L);export{j as E};
