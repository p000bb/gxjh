import{j as u}from"./admin-b660b96d.js";import{l as x,O as C}from"./index-ae5a0739.js";const L={defense:!0,color:"#c0c4cc",opacity:.5,size:16,family:"serif",angle:-20,width:300,height:200},E=x(document.body);function $(n=E){let v,d,t=null;const r={watermarkElMutationObserver:void 0,parentElMutationObserver:void 0,parentElResizeObserver:void 0},O=(e,a={})=>{if(!n.value){console.warn("请在 DOM 挂载完成后再调用 setWatermark 方法设置水印");return}v=e,d={...L,...a},t?b():f(),m(n.value)},f=()=>{const e=n.value.tagName.toLowerCase()===E.value.tagName.toLowerCase(),a=e?"fixed":"absolute",i=e?"":"relative";t=document.createElement("div"),t.style.pointerEvents="none",t.style.top="0",t.style.left="0",t.style.position=a,t.style.zIndex="99999";const{clientWidth:s,clientHeight:l}=n.value;b({width:s,height:l}),n.value.style.position=i,n.value.appendChild(t)},b=(e={})=>{t&&(v&&(t.style.background=`url(${y()}) left top repeat`),e.width&&(t.style.width=`${e.width}px`),e.height&&(t.style.height=`${e.height}px`))},y=()=>{const{color:e,opacity:a,size:i,family:s,angle:l,width:z,height:w}=d,c=document.createElement("canvas");c.width=z,c.height=w;const o=c.getContext("2d");return o&&(o.fillStyle=e,o.globalAlpha=a,o.font=`${i}px ${s}`,o.rotate(Math.PI/180*l),o.fillText(v,0,w/2)),c.toDataURL()},h=()=>{if(!(!n.value||!t)){p();try{n.value.removeChild(t)}catch{console.warn("水印元素已不存在，请重新创建")}finally{t=null}}},g=u(()=>{h(),f(),m(n.value)},100),m=e=>{d.defense?!r.watermarkElMutationObserver&&!r.parentElMutationObserver&&k(e):p("mutation"),r.parentElResizeObserver||M(e)},p=(e="all")=>{var a,i,s;(e==="mutation"||e==="all")&&((a=r.watermarkElMutationObserver)==null||a.disconnect(),r.watermarkElMutationObserver=void 0,(i=r.parentElMutationObserver)==null||i.disconnect(),r.parentElMutationObserver=void 0),(e==="resize"||e==="all")&&((s=r.parentElResizeObserver)==null||s.disconnect(),r.parentElResizeObserver=void 0)},k=e=>{const a=u(i=>{i.forEach(u(s=>{switch(s.type){case"attributes":s.target===t&&g();break;case"childList":s.removedNodes.forEach(l=>{l===t&&e.appendChild(t)});break}},100))},100);r.watermarkElMutationObserver=new MutationObserver(a),r.parentElMutationObserver=new MutationObserver(a),r.watermarkElMutationObserver.observe(t,{attributes:!0,childList:!1,subtree:!1}),r.parentElMutationObserver.observe(e,{attributes:!1,childList:!0,subtree:!1})},M=e=>{const a=u(()=>{const{clientWidth:i,clientHeight:s}=e;b({width:i,height:s})},500);r.parentElResizeObserver=new ResizeObserver(a),r.parentElResizeObserver.observe(e)};return C(()=>{h()}),{setWatermark:O,clearWatermark:h}}export{$ as u};
