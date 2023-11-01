import{_ as M,D as Q,E as D,a7 as g,aq as N,P as fe,am as Re,aa as ue,W as Ne,aj as me,a8 as Pe,a9 as Be,ar as De,a2 as ve,I as oe,a5 as Ke,Q as Le,G as Me,H as Ae,as as de,at as Ge,B as ze,T as ge}from"./el-button-0e0625b7.js";import{f as A,L as P,l as C,H,i as h,j as Ye,N as T,O as we,m as y,aP as He,a5 as V,w as be,C as Ue,r as I,o as K,e as U,V as b,t as S,aA as Je,br as Ve,R as je,aj as We,K as q,ap as qe,a8 as j,M as Z,$ as x,p as Ie,a0 as Qe,W as Xe,aa as ee,F as Ze,X as xe}from"./index-ae5a0739.js";import{c as Ee}from"./refs-715c7c3b.js";const eo=A({inheritAttrs:!1});function oo(e,o,a,t,d,u){return P(e.$slots,"default")}var no=M(eo,[["render",oo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const to=A({name:"ElCollectionItem",inheritAttrs:!1});function lo(e,o,a,t,d,u){return P(e.$slots,"default")}var ro=M(to,[["render",lo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const _e="data-el-collection-item",Ce=e=>{const o=`El${e}Collection`,a=`${o}Item`,t=Symbol(o),d=Symbol(a),u={...no,name:o,setup(){const l=C(null),p=new Map;H(t,{itemMap:p,getItems:()=>{const m=T(l);if(!m)return[];const f=Array.from(m.querySelectorAll(`[${_e}]`));return[...p.values()].sort((n,c)=>f.indexOf(n.ref)-f.indexOf(c.ref))},collectionRef:l})}},r={...ro,name:a,setup(l,{attrs:p}){const v=C(null),m=h(t,void 0);H(d,{collectionItemRef:v}),Ye(()=>{const f=T(v);f&&m.itemMap.set(f,{ref:f,...p})}),we(()=>{const f=T(v);m.itemMap.delete(f)})}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:u,ElCollectionItem:r}},so=Q({style:{type:D([String,Array,Object])},currentTabId:{type:D(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:D(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:ao,ElCollectionItem:io,COLLECTION_INJECTION_KEY:ne,COLLECTION_ITEM_INJECTION_KEY:uo}=Ce("RovingFocusGroup"),te=Symbol("elRovingFocusGroup"),he=Symbol("elRovingFocusGroupItem"),co={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},po=(e,o)=>{if(o!=="rtl")return e;switch(e){case g.right:return g.left;case g.left:return g.right;default:return e}},fo=(e,o,a)=>{const t=po(e.key,a);if(!(o==="vertical"&&[g.left,g.right].includes(t))&&!(o==="horizontal"&&[g.up,g.down].includes(t)))return co[t]},mo=(e,o)=>e.map((a,t)=>e[(t+o)%e.length]),le=e=>{const{activeElement:o}=document;for(const a of e)if(a===o||(a.focus(),o!==document.activeElement))return},ce="currentTabIdChange",pe="rovingFocusGroup.entryFocus",vo={bubbles:!1,cancelable:!0},go=A({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:so,emits:[ce,"entryFocus"],setup(e,{emit:o}){var a;const t=C((a=e.currentTabId||e.defaultCurrentTabId)!=null?a:null),d=C(!1),u=C(!1),r=C(null),{getItems:l}=h(ne,void 0),p=y(()=>[{outline:"none"},e.style]),v=i=>{o(ce,i)},m=()=>{d.value=!0},f=N(i=>{var w;(w=e.onMousedown)==null||w.call(e,i)},()=>{u.value=!0}),E=N(i=>{var w;(w=e.onFocus)==null||w.call(e,i)},i=>{const w=!T(u),{target:L,currentTarget:k}=i;if(L===k&&w&&!T(d)){const G=new Event(pe,vo);if(k==null||k.dispatchEvent(G),!G.defaultPrevented){const _=l().filter(F=>F.focusable),$=_.find(F=>F.active),O=_.find(F=>F.id===T(t)),z=[$,O,..._].filter(Boolean).map(F=>F.ref);le(z)}}u.value=!1}),n=N(i=>{var w;(w=e.onBlur)==null||w.call(e,i)},()=>{d.value=!1}),c=(...i)=>{o("entryFocus",...i)};H(te,{currentTabbedId:He(t),loop:V(e,"loop"),tabIndex:y(()=>T(d)?-1:0),rovingFocusGroupRef:r,rovingFocusGroupRootStyle:p,orientation:V(e,"orientation"),dir:V(e,"dir"),onItemFocus:v,onItemShiftTab:m,onBlur:n,onFocus:E,onMousedown:f}),be(()=>e.currentTabId,i=>{t.value=i??null}),Ue(r,pe,c)}});function wo(e,o,a,t,d,u){return P(e.$slots,"default")}var bo=M(go,[["render",wo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const Io=A({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:ao,ElRovingFocusGroupImpl:bo}});function Eo(e,o,a,t,d,u){const r=I("el-roving-focus-group-impl"),l=I("el-focus-group-collection");return K(),U(l,null,{default:b(()=>[S(r,Je(Ve(e.$attrs)),{default:b(()=>[P(e.$slots,"default")]),_:3},16)]),_:3})}var _o=M(Io,[["render",Eo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const Co=A({components:{ElRovingFocusCollectionItem:io},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:a,loop:t,onItemFocus:d,onItemShiftTab:u}=h(te,void 0),{getItems:r}=h(ne,void 0),l=fe(),p=C(null),v=N(n=>{o("mousedown",n)},n=>{e.focusable?d(T(l)):n.preventDefault()}),m=N(n=>{o("focus",n)},()=>{d(T(l))}),f=N(n=>{o("keydown",n)},n=>{const{key:c,shiftKey:i,target:w,currentTarget:L}=n;if(c===g.tab&&i){u();return}if(w!==L)return;const k=fo(n);if(k){n.preventDefault();let _=r().filter($=>$.focusable).map($=>$.ref);switch(k){case"last":{_.reverse();break}case"prev":case"next":{k==="prev"&&_.reverse();const $=_.indexOf(L);_=t.value?mo(_,$+1):_.slice($+1);break}}je(()=>{le(_)})}}),E=y(()=>a.value===T(l));return H(he,{rovingFocusGroupItemRef:p,tabIndex:y(()=>T(E)?0:-1),handleMousedown:v,handleFocus:m,handleKeydown:f}),{id:l,handleKeydown:f,handleFocus:m,handleMousedown:v}}});function ho(e,o,a,t,d,u){const r=I("el-roving-focus-collection-item");return K(),U(r,{id:e.id,focusable:e.focusable,active:e.active},{default:b(()=>[P(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var yo=M(Co,[["render",ho],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const To=Q({trigger:Re.trigger,effect:{...ue.effect,default:"light"},type:{type:D(String)},placement:{type:D(String),default:"bottom"},popperOptions:{type:D(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:D([Number,String]),default:0},maxHeight:{type:D([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:D(Object)},teleported:ue.teleported}),ye=Q({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:Ne}}),$o=Q({onKeydown:{type:D(Function)}}),Oo=[g.down,g.pageDown,g.home],Te=[g.up,g.pageUp,g.end],Fo=[...Oo,...Te],{ElCollection:So,ElCollectionItem:ko,COLLECTION_INJECTION_KEY:Ro,COLLECTION_ITEM_INJECTION_KEY:No}=Ce("Dropdown"),X=Symbol("elDropdown"),{ButtonGroup:Po}=me,Bo=A({name:"ElDropdown",components:{ElButton:me,ElButtonGroup:Po,ElScrollbar:Pe,ElDropdownCollection:So,ElTooltip:Be,ElRovingFocusGroup:_o,ElOnlyChild:De,ElIcon:ve,ArrowDown:We},props:To,emits:["visible-change","click","command"],setup(e,{emit:o}){const a=Ie(),t=oe("dropdown"),{t:d}=Ke(),u=C(),r=C(),l=C(null),p=C(null),v=C(null),m=C(null),f=C(!1),E=[g.enter,g.space,g.down],n=y(()=>({maxHeight:Le(e.maxHeight)})),c=y(()=>[t.m($.value)]),i=y(()=>Me(e.trigger)),w=fe().value,L=y(()=>e.id||w);be([u,i],([s,R],[Y])=>{var se,ae,ie;(se=Y==null?void 0:Y.$el)!=null&&se.removeEventListener&&Y.$el.removeEventListener("pointerenter",B),(ae=s==null?void 0:s.$el)!=null&&ae.removeEventListener&&s.$el.removeEventListener("pointerenter",B),(ie=s==null?void 0:s.$el)!=null&&ie.addEventListener&&R.includes("hover")&&s.$el.addEventListener("pointerenter",B)},{immediate:!0}),we(()=>{var s,R;(R=(s=u.value)==null?void 0:s.$el)!=null&&R.removeEventListener&&u.value.$el.removeEventListener("pointerenter",B)});function k(){G()}function G(){var s;(s=l.value)==null||s.onClose()}function _(){var s;(s=l.value)==null||s.onOpen()}const $=Ae();function O(...s){o("command",...s)}function B(){var s,R;(R=(s=u.value)==null?void 0:s.$el)==null||R.focus()}function z(){}function F(){const s=T(p);i.value.includes("hover")&&(s==null||s.focus()),m.value=null}function re(s){m.value=s}function W(s){f.value||(s.preventDefault(),s.stopImmediatePropagation())}function J(){o("visible-change",!0)}function Se(s){(s==null?void 0:s.type)==="keydown"&&p.value.focus()}function ke(){o("visible-change",!1)}return H(X,{contentRef:p,role:y(()=>e.role),triggerId:L,isUsingKeyboard:f,onItemEnter:z,onItemLeave:F}),H("elDropdown",{instance:a,dropdownSize:$,handleClick:k,commandHandler:O,trigger:V(e,"trigger"),hideOnClick:V(e,"hideOnClick")}),{t:d,ns:t,scrollbar:v,wrapStyle:n,dropdownTriggerKls:c,dropdownSize:$,triggerId:L,triggerKeys:E,currentTabId:m,handleCurrentTabIdChange:re,handlerMainButtonClick:s=>{o("click",s)},handleEntryFocus:W,handleClose:G,handleOpen:_,handleBeforeShowTooltip:J,handleShowTooltip:Se,handleBeforeHideTooltip:ke,onFocusAfterTrapped:s=>{var R,Y;s.preventDefault(),(Y=(R=p.value)==null?void 0:R.focus)==null||Y.call(R,{preventScroll:!0})},popperRef:l,contentRef:p,triggeringElementRef:u,referenceElementRef:r}}});function Do(e,o,a,t,d,u){var r;const l=I("el-dropdown-collection"),p=I("el-roving-focus-group"),v=I("el-scrollbar"),m=I("el-only-child"),f=I("el-tooltip"),E=I("el-button"),n=I("arrow-down"),c=I("el-icon"),i=I("el-button-group");return K(),q("div",{class:Z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[S(f,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(r=e.referenceElementRef)==null?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},qe({content:b(()=>[S(v,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:b(()=>[S(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:b(()=>[S(l,null,{default:b(()=>[P(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:b(()=>[S(m,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:b(()=>[P(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(K(),U(i,{key:0},{default:b(()=>[S(E,j({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:b(()=>[P(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),S(E,j({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:b(()=>[S(c,{class:Z(e.ns.e("icon"))},{default:b(()=>[S(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):x("v-if",!0)],2)}var Ko=M(Bo,[["render",Do],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Lo=A({name:"DropdownItemImpl",components:{ElIcon:ve},props:ye,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const a=oe("dropdown"),{role:t}=h(X,void 0),{collectionItemRef:d}=h(No,void 0),{collectionItemRef:u}=h(uo,void 0),{rovingFocusGroupItemRef:r,tabIndex:l,handleFocus:p,handleKeydown:v,handleMousedown:m}=h(he,void 0),f=Ee(d,u,r),E=y(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=N(c=>{const{code:i}=c;if(i===g.enter||i===g.space)return c.preventDefault(),c.stopImmediatePropagation(),o("clickimpl",c),!0},v);return{ns:a,itemRef:f,dataset:{[_e]:""},role:E,tabIndex:l,handleFocus:p,handleKeydown:n,handleMousedown:m}}}),Mo=["aria-disabled","tabindex","role"];function Ao(e,o,a,t,d,u){const r=I("el-icon");return K(),q(Ze,null,[e.divided?(K(),q("li",j({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):x("v-if",!0),Qe("li",j({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=l=>e.$emit("clickimpl",l)),onFocus:o[1]||(o[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onKeydown:o[2]||(o[2]=ee((...l)=>e.handleKeydown&&e.handleKeydown(...l),["self"])),onMousedown:o[3]||(o[3]=(...l)=>e.handleMousedown&&e.handleMousedown(...l)),onPointermove:o[4]||(o[4]=l=>e.$emit("pointermove",l)),onPointerleave:o[5]||(o[5]=l=>e.$emit("pointerleave",l))}),[e.icon?(K(),U(r,{key:0},{default:b(()=>[(K(),U(Xe(e.icon)))]),_:1})):x("v-if",!0),P(e.$slots,"default")],16,Mo)],64)}var Go=M(Lo,[["render",Ao],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const $e=()=>{const e=h("elDropdown",{}),o=y(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},zo=A({name:"ElDropdownItem",components:{ElDropdownCollectionItem:ko,ElRovingFocusItem:yo,ElDropdownItemImpl:Go},inheritAttrs:!1,props:ye,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:a}){const{elDropdown:t}=$e(),d=Ie(),u=C(null),r=y(()=>{var n,c;return(c=(n=T(u))==null?void 0:n.textContent)!=null?c:""}),{onItemEnter:l,onItemLeave:p}=h(X,void 0),v=N(n=>(o("pointermove",n),n.defaultPrevented),de(n=>{if(e.disabled){p(n);return}const c=n.currentTarget;c===document.activeElement||c.contains(document.activeElement)||(l(n),n.defaultPrevented||c==null||c.focus())})),m=N(n=>(o("pointerleave",n),n.defaultPrevented),de(n=>{p(n)})),f=N(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var c,i,w;if(e.disabled){n.stopImmediatePropagation();return}(c=t==null?void 0:t.hideOnClick)!=null&&c.value&&((i=t.handleClick)==null||i.call(t)),(w=t.commandHandler)==null||w.call(t,e.command,d,n)}),E=y(()=>({...e,...a}));return{handleClick:f,handlePointerMove:v,handlePointerLeave:m,textContent:r,propsAndAttrs:E}}});function Yo(e,o,a,t,d,u){var r;const l=I("el-dropdown-item-impl"),p=I("el-roving-focus-item"),v=I("el-dropdown-collection-item");return K(),U(v,{disabled:e.disabled,"text-value":(r=e.textValue)!=null?r:e.textContent},{default:b(()=>[S(p,{focusable:!e.disabled},{default:b(()=>[S(l,j(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:b(()=>[P(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Oe=M(zo,[["render",Yo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Ho=A({name:"ElDropdownMenu",props:$o,setup(e){const o=oe("dropdown"),{_elDropdownSize:a}=$e(),t=a.value,{focusTrapRef:d,onKeydown:u}=h(Ge,void 0),{contentRef:r,role:l,triggerId:p}=h(X,void 0),{collectionRef:v,getItems:m}=h(Ro,void 0),{rovingFocusGroupRef:f,rovingFocusGroupRootStyle:E,tabIndex:n,onBlur:c,onFocus:i,onMousedown:w}=h(te,void 0),{collectionRef:L}=h(ne,void 0),k=y(()=>[o.b("menu"),o.bm("menu",t==null?void 0:t.value)]),G=Ee(r,v,d,f,L),_=N(O=>{var B;(B=e.onKeydown)==null||B.call(e,O)},O=>{const{currentTarget:B,code:z,target:F}=O;if(B.contains(F),g.tab===z&&O.stopImmediatePropagation(),O.preventDefault(),F!==T(r)||!Fo.includes(z))return;const W=m().filter(J=>!J.disabled).map(J=>J.ref);Te.includes(z)&&W.reverse(),le(W)});return{size:t,rovingFocusGroupRootStyle:E,tabIndex:n,dropdownKls:k,role:l,triggerId:p,dropdownListWrapperRef:G,handleKeydown:O=>{_(O),u(O)},onBlur:c,onFocus:i,onMousedown:w}}}),Uo=["role","aria-labelledby"];function Jo(e,o,a,t,d,u){return K(),q("ul",{ref:e.dropdownListWrapperRef,class:Z(e.dropdownKls),style:xe(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...r)=>e.onBlur&&e.onBlur(...r)),onFocus:o[1]||(o[1]=(...r)=>e.onFocus&&e.onFocus(...r)),onKeydown:o[2]||(o[2]=ee((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:o[3]||(o[3]=ee((...r)=>e.onMousedown&&e.onMousedown(...r),["self"]))},[P(e.$slots,"default")],46,Uo)}var Fe=M(Ho,[["render",Jo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Xo=ze(Ko,{DropdownItem:Oe,DropdownMenu:Fe}),Zo=ge(Oe),xo=ge(Fe);export{Zo as E,xo as a,Xo as b,To as d};
