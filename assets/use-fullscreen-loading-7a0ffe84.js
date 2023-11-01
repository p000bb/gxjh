import{ai as n,aj as p}from"./el-button-0e0625b7.js";import{v as c,L as i}from"./directive-02639ac3.js";import{f as _,o as m,K as f,t as l,V as d,a0 as y,Y as u}from"./index-ae5a0739.js";const h={install(e){e.directive("loading",c),e.config.globalProperties.$loading=i},directive:c,service:i},v={lock:!0,text:"加载中..."},g=(e,t={})=>{let o;return async(...a)=>{try{return o=h.service({...v,...t}),await e(...a)}finally{o==null||o.close()}}},E={code:0,data:{list:[]},message:"获取成功"};function k(e){return new Promise(t=>{setTimeout(()=>{t({...E,data:{list:e}})},1e3)})}function w(){return new Promise((e,t)=>{setTimeout(()=>{t(new Error("发生错误"))},1e3)})}const x={class:"app-container"},C=y("h4",null,"该示例是演示：通过将要执行的函数传递给 hook，让 hook 自动开启全屏 loading，函数执行结束后自动关闭 loading",-1),S=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,b=_({__name:"use-fullscreen-loading",setup(e){const t={text:"即将发生错误...",background:"#F56C6C20",svg:S,svgViewBox:"-10, -10, 50, 50"},o=async()=>{const s=await g(k)([2,3,3]);n.success(`${s.message}，传参为 ${s.data.list.toString()}`)},a=async()=>{try{await g(w,t)()}catch(s){n.error(s.message)}};return(s,L)=>{const r=p;return m(),f("div",x,[C,l(r,{type:"primary",onClick:o},{default:d(()=>[u("查询成功")]),_:1}),l(r,{type:"danger",onClick:a},{default:d(()=>[u("查询失败")]),_:1})])}}});export{b as default};
