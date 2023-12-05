import{ao as V,d as L,b as u,r as E,w as T,o as $,y as o,A as v,E as B,O as a,L as c,a4 as x,x as r,B as p,Z as y,K as d,Y as N,k as ee,al as ae,ak as M,aw as te,ac as ie,d4 as U,g as oe}from"./viewer-a917d3a0.js";import{a as ne,c as w,d as le,h as I,g as P,f as se,I as re,E as m,_ as ce,w as ue}from"./user-89041d09.js";import{i as de}from"./validator-41f192c7.js";import{U as A,C as D,I as K}from"./el-input-7ff3e30e.js";import{a as ve,b as fe,u as pe}from"./use-form-item-a4463e9d.js";import{u as me,a as he}from"./use-form-common-props-ac54b10b.js";import{d as ye,t as be}from"./error-f1912ce6.js";const ge=ne({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:de},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:w},activeActionIcon:{type:w},activeIcon:{type:w},inactiveIcon:{type:w},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:le(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),Ce={[A]:s=>I(s)||V(s)||P(s),[D]:s=>I(s)||V(s)||P(s),[K]:s=>I(s)||V(s)||P(s)},ke=["onClick"],we=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Ie=["aria-hidden"],Se=["aria-hidden"],Ve=["aria-hidden"],z="ElSwitch",Ee=L({name:z}),Te=L({...Ee,props:ge,emits:Ce,setup(s,{expose:G,emit:f}){const t=s,H=oe(),{formItem:b}=ve(),R=me(),i=se("switch");(e=>{e.forEach(l=>{pe({from:l[0],replacement:l[1],scope:z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var k;return!!((k=H.vnode.props)!=null&&k[l[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:W}=fe(t,{formItemContext:b}),g=he(u(()=>t.loading)),S=E(t.modelValue!==!1),h=E(),Y=E(),Z=u(()=>[i.b(),i.m(R.value),i.is("disabled",g.value),i.is("checked",n.value)]),j=u(()=>[i.e("label"),i.em("label","left"),i.is("active",!n.value)]),q=u(()=>[i.e("label"),i.em("label","right"),i.is("active",n.value)]),J=u(()=>({width:re(t.width)}));T(()=>t.modelValue,()=>{S.value=!0}),T(()=>t.value,()=>{S.value=!1});const O=u(()=>S.value?t.modelValue:t.value),n=u(()=>O.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(O.value)||(f(A,t.inactiveValue),f(D,t.inactiveValue),f(K,t.inactiveValue)),T(n,e=>{var l;h.value.checked=e,t.validateEvent&&((l=b==null?void 0:b.validate)==null||l.call(b,"change").catch(k=>ye()))});const C=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(A,e),f(D,e),f(K,e),ie(()=>{h.value.checked=n.value})},_=()=>{if(g.value)return;const{beforeChange:e}=t;if(!e){C();return}const l=e();[U(l),I(l)].includes(!0)||be(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),U(l)?l.then(F=>{F&&C()}).catch(F=>{}):l&&C()},Q=u(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),X=()=>{var e,l;(l=(e=h.value)==null?void 0:e.focus)==null||l.call(e)};return $(()=>{h.value.checked=n.value}),G({focus:X,checked:n}),(e,l)=>(o(),v("div",{class:c(a(Z)),style:M(a(Q)),onClick:te(_,["prevent"])},[B("input",{id:a(W),ref_key:"input",ref:h,class:c(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(g),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(g),tabindex:e.tabindex,onChange:C,onKeydown:x(_,["enter"])},null,42,we),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),v("span",{key:0,class:c(a(j))},[e.inactiveIcon?(o(),r(a(m),{key:0},{default:p(()=>[(o(),r(y(e.inactiveIcon)))]),_:1})):d("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),v("span",{key:1,"aria-hidden":a(n)},N(e.inactiveText),9,Ie)):d("v-if",!0)],2)):d("v-if",!0),B("span",{ref_key:"core",ref:Y,class:c(a(i).e("core")),style:M(a(J))},[e.inlinePrompt?(o(),v("div",{key:0,class:c(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),r(a(m),{key:0,class:c(a(i).is("icon"))},{default:p(()=>[(o(),r(y(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),v("span",{key:1,class:c(a(i).is("text")),"aria-hidden":!a(n)},N(a(n)?e.activeText:e.inactiveText),11,Se)):d("v-if",!0)],2)):d("v-if",!0),B("div",{class:c(a(i).e("action"))},[e.loading?(o(),r(a(m),{key:0,class:c(a(i).is("loading"))},{default:p(()=>[ee(a(ae))]),_:1},8,["class"])):e.activeActionIcon&&a(n)?(o(),r(a(m),{key:1},{default:p(()=>[(o(),r(y(e.activeActionIcon)))]),_:1})):e.inactiveActionIcon&&!a(n)?(o(),r(a(m),{key:2},{default:p(()=>[(o(),r(y(e.inactiveActionIcon)))]),_:1})):d("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),v("span",{key:1,class:c(a(q))},[e.activeIcon?(o(),r(a(m),{key:0},{default:p(()=>[(o(),r(y(e.activeIcon)))]),_:1})):d("v-if",!0),!e.activeIcon&&e.activeText?(o(),v("span",{key:1,"aria-hidden":!a(n)},N(e.activeText),9,Ve)):d("v-if",!0)],2)):d("v-if",!0)],14,ke))}});var Be=ce(Te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Fe=ue(Be);export{Fe as E};
