import{d as M,i as j,b as I,y as A,A as _,E as O,G as D,M as g,L as e,az as le,k as R,B as k,x as K,aw as se,K as q,ax as W,r as E,w as G,au as ae,o as te,g as ne,b3 as H,ai as re,O as ie,ao as ue,C as de,H as ce,aT as fe,D as me,I as pe,bf as ve}from"./viewer-71a6cc7b.js";import{u as ge,a as ye,E as Ce,b as be}from"./index-07157569.js";import{e as X,t as he,B as ke,E as De,_ as Y,U as Ee,h as Ie,i as Be,H as Ae,n as Z,W as we,o as Fe,X as Se,C as J,k as Te,w as $e}from"./el-button-534f93ec.js";import{F as Le,g as Pe}from"./el-popper-5f9a363e.js";import{c as Oe}from"./refs-45d3232c.js";import{U as Q}from"./admin-d15e446e.js";const x=Symbol("dialogInjectionKey"),ee=X({center:Boolean,alignCenter:Boolean,closeIcon:{type:he},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Re={close:()=>!0},Me=["aria-level"],Ne=["aria-label"],ze=["id"],Ue=M({name:"ElDialogContent"}),Ve=M({...Ue,props:ee,emits:Re,setup(o){const t=o,{t:y}=ke(),{Close:i}=Ee,{dialogRef:u,headerRef:m,bodyId:w,ns:a,style:n}=j(x),{focusTrapRef:p}=j(Le),d=I(()=>[a.b(),a.is("fullscreen",t.fullscreen),a.is("draggable",t.draggable),a.is("align-center",t.alignCenter),{[a.m("center")]:t.center},t.customClass]),C=Oe(p,u),c=I(()=>t.draggable);return ge(u,m,c),(s,B)=>(A(),_("div",{ref:e(C),class:g(e(d)),style:W(e(n)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:m,class:g(e(a).e("header"))},[D(s.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":s.ariaLevel,class:g(e(a).e("title"))},le(s.title),11,Me)]),s.showClose?(A(),_("button",{key:0,"aria-label":e(y)("el.dialog.close"),class:g(e(a).e("headerbtn")),type:"button",onClick:B[0]||(B[0]=$=>s.$emit("close"))},[R(e(De),{class:g(e(a).e("close"))},{default:k(()=>[(A(),K(se(s.closeIcon||e(i))))]),_:1},8,["class"])],10,Ne)):q("v-if",!0)],2),O("div",{id:e(w),class:g(e(a).e("body"))},[D(s.$slots,"default")],10,ze),s.$slots.footer?(A(),_("footer",{key:0,class:g(e(a).e("footer"))},[D(s.$slots,"footer")],2)):q("v-if",!0)],6))}});var _e=Y(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Ke=X({...ee,appendToBody:Boolean,beforeClose:{type:Ie(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Q]:o=>Be(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},je=(o,t)=>{const i=ne().emit,{nextZIndex:u}=Ae();let m="";const w=Z(),a=Z(),n=E(!1),p=E(!1),d=E(!1),C=E(o.zIndex||u());let c,s;const B=we("namespace",Se),$=I(()=>{const r={},h=`--${B.value}-dialog`;return o.fullscreen||(o.top&&(r[`${h}-margin-top`]=o.top),o.width&&(r[`${h}-width`]=Fe(o.width))),r}),N=I(()=>o.alignCenter?{display:"flex"}:{});function z(){i("opened")}function L(){i("closed"),i(Q,!1),o.destroyOnClose&&(d.value=!1)}function U(){i("close")}function P(){s==null||s(),c==null||c(),o.openDelay&&o.openDelay>0?{stop:c}=H(()=>f(),o.openDelay):f()}function F(){c==null||c(),s==null||s(),o.closeDelay&&o.closeDelay>0?{stop:s}=H(()=>T(),o.closeDelay):T()}function S(){function r(h){h||(p.value=!0,n.value=!1)}o.beforeClose?o.beforeClose(r):F()}function V(){o.closeOnClickModal&&S()}function f(){re&&(n.value=!0)}function T(){n.value=!1}function l(){i("openAutoFocus")}function v(){i("closeAutoFocus")}function b(r){var h;((h=r.detail)==null?void 0:h.focusReason)==="pointer"&&r.preventDefault()}o.lockScroll&&ye(n);function oe(){o.closeOnPressEscape&&S()}return G(()=>o.modelValue,r=>{r?(p.value=!1,P(),d.value=!0,C.value=o.zIndex?C.value++:u(),ae(()=>{i("open"),t.value&&(t.value.scrollTop=0)})):n.value&&F()}),G(()=>o.fullscreen,r=>{t.value&&(r?(m=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=m)}),te(()=>{o.modelValue&&(n.value=!0,d.value=!0,P())}),{afterEnter:z,afterLeave:L,beforeLeave:U,handleClose:S,onModalClick:V,close:F,doClose:T,onOpenAutoFocus:l,onCloseAutoFocus:v,onCloseRequested:oe,onFocusoutPrevented:b,titleId:w,bodyId:a,closed:p,style:$,overlayDialogStyle:N,rendered:d,visible:n,zIndex:C}},Ge=["aria-label","aria-labelledby","aria-describedby"],He=M({name:"ElDialog",inheritAttrs:!1}),Ze=M({...He,props:Ke,emits:qe,setup(o,{expose:t}){const y=o,i=ie();J({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!i.title)),J({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},I(()=>!!y.customClass));const u=Te("dialog"),m=E(),w=E(),a=E(),{visible:n,titleId:p,bodyId:d,style:C,overlayDialogStyle:c,rendered:s,zIndex:B,afterEnter:$,afterLeave:N,beforeLeave:z,handleClose:L,onModalClick:U,onOpenAutoFocus:P,onCloseAutoFocus:F,onCloseRequested:S,onFocusoutPrevented:V}=je(y,m);ue(x,{dialogRef:m,headerRef:w,bodyId:d,ns:u,rendered:s,style:C});const f=be(U),T=I(()=>y.draggable&&!y.fullscreen);return t({visible:n,dialogContentRef:a}),(l,v)=>(A(),K(ve,{to:"body",disabled:!l.appendToBody},[R(pe,{name:"dialog-fade",onAfterEnter:e($),onAfterLeave:e(N),onBeforeLeave:e(z),persisted:""},{default:k(()=>[de(R(e(Ce),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(B)},{default:k(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(p),"aria-describedby":e(d),class:g(`${e(u).namespace.value}-overlay-dialog`),style:W(e(c)),onClick:v[0]||(v[0]=(...b)=>e(f).onClick&&e(f).onClick(...b)),onMousedown:v[1]||(v[1]=(...b)=>e(f).onMousedown&&e(f).onMousedown(...b)),onMouseup:v[2]||(v[2]=(...b)=>e(f).onMouseup&&e(f).onMouseup(...b))},[R(e(Pe),{loop:"",trapped:e(n),"focus-start-el":"container",onFocusAfterTrapped:e(P),onFocusAfterReleased:e(F),onFocusoutPrevented:e(V),onReleaseRequested:e(S)},{default:k(()=>[e(s)?(A(),K(_e,ce({key:0,ref_key:"dialogContentRef",ref:a},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(T),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(L)}),fe({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e(L),titleId:e(p),titleClass:e(u).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ge)]),_:3},8,["mask","overlay-class","z-index"]),[[me,e(n)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Je=Y(Ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const oo=$e(Je);export{oo as E,qe as a,Ke as d,je as u};