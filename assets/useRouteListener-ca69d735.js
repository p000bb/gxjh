import{an as f}from"./viewer-a917d3a0.js";function c(e){return{all:e=e||new Map,on:function(n,o){var t=e.get(n);t?t.push(o):e.set(n,[o])},off:function(n,o){var t=e.get(n);t&&(o?t.splice(t.indexOf(o)>>>0,1):e.set(n,[]))},emit:function(n,o){var t=e.get(n);t&&t.slice().map(function(s){s(o)}),(t=e.get("*"))&&t.slice().map(function(s){s(n,o)})}}}const i=c(),u=Symbol("ROUTE_CHANGE");let r;const m=e=>{i.emit(u,e),r=e};function l(){const e=[],n=(t,s=!1)=>{e.push(t),i.on(u,t),s&&r&&t(r)},o=t=>{i.off(u,t)};return f(()=>{for(let t=0;t<e.length;t++)o(e[t])}),{listenerRouteChange:n,removeRouteListener:o}}export{m as s,l as u};
