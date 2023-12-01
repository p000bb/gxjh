import{K as m}from"./el-button-fb691484.js";import{v as n,L as i}from"./directive-2e4aa6c9.js";import{d as c}from"./admin-ee59f3a1.js";import{d as g,y as _,A as f,k as l,B as d,ay as u,E as y}from"./viewer-97ef37b1.js";import"./el-popper-17f91b7a.js";import"./debounce-38c8536c.js";const h={install(e){e.directive("loading",n),e.config.globalProperties.$loading=i},directive:n,service:i},E={lock:!0,text:"加载中..."},p=(e,t={})=>{let o;return async(...r)=>{try{return o=h.service({...E,...t}),await e(...r)}finally{o==null||o.close()}}},k={code:0,data:{list:[]},message:"获取成功"};function v(e){return new Promise(t=>{setTimeout(()=>{t({...k,data:{list:e}})},1e3)})}function w(){return new Promise((e,t)=>{setTimeout(()=>{t(new Error("发生错误"))},1e3)})}const x={class:"app-container"},C=y("h4",null,"该示例是演示：通过将要执行的函数传递给 hook，让 hook 自动开启全屏 loading，函数执行结束后自动关闭 loading",-1),S=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,V=g({__name:"use-fullscreen-loading",setup(e){const t={text:"即将发生错误...",background:"#F56C6C20",svg:S,svgViewBox:"-10, -10, 50, 50"},o=async()=>{const s=await p(v)([2,3,3]);c.success(`${s.message}，传参为 ${s.data.list.toString()}`)},r=async()=>{try{await p(w,t)()}catch(s){c.error(s.message)}};return(s,A)=>{const a=m;return _(),f("div",x,[C,l(a,{type:"primary",onClick:o},{default:d(()=>[u("查询成功")]),_:1}),l(a,{type:"danger",onClick:r},{default:d(()=>[u("查询失败")]),_:1})])}}});export{V as default};
