import{f as i}from"./vnode-37301cb0.js";import{s as a,av as u}from"./viewer-a917d3a0.js";const c=(t,n,d)=>i(t.subTree).filter(e=>{var r;return u(e)&&((r=e.type)==null?void 0:r.name)===n&&!!e.component}).map(e=>e.component.uid).map(e=>d[e]).filter(e=>!!e),f=(t,n)=>{const d={},o=a([]);return{children:o,addChild:r=>{d[r.uid]=r,o.value=c(t,n,d)},removeChild:r=>{delete d[r],o.value=o.value.filter(s=>s.uid!==r)}}};export{f as u};