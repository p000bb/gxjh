import{e as g,k as _,_ as w,w as h,h as r,s as b}from"./el-button-534f93ec.js";import{d as p,b as l,ao as k,y as $,x as v,B as j,G as N,M as x,L as c,ax as C,aw as E,i as O,aI as S}from"./viewer-71a6cc7b.js";import{m as u}from"./admin-d15e446e.js";const R=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],B=["top","middle","bottom"],L=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:B}}),P=p({name:"ElRow"}),I=p({...P,props:L,setup(f){const t=f,o=_("row"),a=l(()=>t.gutter);k(R,{gutter:a});const i=l(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=l(()=>[o.b(),o.is(`justify-${t.justify}`,t.justify!=="start"),o.is(`align-${t.align}`,!!t.align)]);return(e,d)=>($(),v(E(e.tag),{class:x(c(m)),style:C(c(i))},{default:j(()=>[N(e.$slots,"default")]),_:3},8,["class","style"]))}});var A=w(I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const Q=h(A),D=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:r([Number,Object]),default:()=>u({})},sm:{type:r([Number,Object]),default:()=>u({})},md:{type:r([Number,Object]),default:()=>u({})},lg:{type:r([Number,Object]),default:()=>u({})},xl:{type:r([Number,Object]),default:()=>u({})}}),G=p({name:"ElCol"}),J=p({...G,props:D,setup(f){const t=f,{gutter:o}=O(R,{gutter:l(()=>0)}),a=_("col"),i=l(()=>{const e={};return o.value&&(e.paddingLeft=e.paddingRight=`${o.value/2}px`),e}),m=l(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const n=t[s];b(n)&&(s==="span"?e.push(a.b(`${t[s]}`)):n>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(t[s])?e.push(a.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([n,y])=>{e.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),o.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>($(),v(E(e.tag),{class:x(c(m)),style:C(c(i))},{default:j(()=>[N(e.$slots,"default")]),_:3},8,["class","style"]))}});var M=w(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const U=h(M);export{U as E,Q as a};