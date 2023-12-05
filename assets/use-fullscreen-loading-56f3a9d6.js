/* empty css             */import{E as m}from"./el-button-4e36e058.js";import{v as n,L as i}from"./directive-39134a76.js";import{G as c}from"./user-89041d09.js";import{d as g,y as _,A as f,k as l,B as d,ag as u,E as y}from"./viewer-a917d3a0.js";import"./use-form-item-a4463e9d.js";import"./use-form-common-props-ac54b10b.js";import"./index-cb7b6eb7.js";const E={install(e){e.directive("loading",n),e.config.globalProperties.$loading=i},directive:n,service:i},h={lock:!0,text:"加载中..."},p=(e,t={})=>{let o;return async(...r)=>{try{return o=E.service({...h,...t}),await e(...r)}finally{o==null||o.close()}}},k={code:0,data:{list:[]},message:"获取成功"};function v(e){return new Promise(t=>{setTimeout(()=>{t({...k,data:{list:e}})},1e3)})}function w(){return new Promise((e,t)=>{setTimeout(()=>{t(new Error("发生错误"))},1e3)})}const x={class:"app-container"},C=y("h4",null,"该示例是演示：通过将要执行的函数传递给 hook，让 hook 自动开启全屏 loading，函数执行结束后自动关闭 loading",-1),S=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,$=g({__name:"use-fullscreen-loading",setup(e){const t={text:"即将发生错误...",background:"#F56C6C20",svg:S,svgViewBox:"-10, -10, 50, 50"},o=async()=>{const s=await p(v)([2,3,3]);c.success(`${s.message}，传参为 ${s.data.list.toString()}`)},r=async()=>{try{await p(w,t)()}catch(s){c.error(s.message)}};return(s,A)=>{const a=m;return _(),f("div",x,[C,l(a,{type:"primary",onClick:o},{default:d(()=>[u("查询成功")]),_:1}),l(a,{type:"danger",onClick:r},{default:d(()=>[u("查询失败")]),_:1})])}}});export{$ as default};
