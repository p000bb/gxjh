import{b as m,E as n}from"./element-plus-9e0ba5b8.js";import{H as u,ah as d,c as _,V as c,P as i,a as g,o as f,T as l}from"./@vue-a1575c13.js";import"./lodash-es-21c98b27.js";import"./@vueuse-dd4353a1.js";import"./@element-plus-a2754369.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f21ac596.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-f42edb2c.js";import"./normalize-wheel-es-95f93bcf.js";import"./@floating-ui-72671fae.js";const h={lock:!0,text:"加载中..."},p=(o,e={})=>{let t;return async(...r)=>{try{return t=m.service({...h,...e}),await o(...r)}finally{t==null||t.close()}}},y={code:0,data:{list:[]},message:"获取成功"};function E(o){return new Promise(e=>{setTimeout(()=>{e({...y,data:{list:o}})},1e3)})}function k(){return new Promise((o,e)=>{setTimeout(()=>{e(new Error("发生错误"))},1e3)})}const w={class:"app-container"},C=g("h4",null,"该示例是演示：通过将要执行的函数传递给 hook，让 hook 自动开启全屏 loading，函数执行结束后自动关闭 loading",-1),x=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,$=u({__name:"use-fullscreen-loading",setup(o){const e={text:"即将发生错误...",background:"#F56C6C20",svg:x,svgViewBox:"-10, -10, 50, 50"},t=async()=>{const s=await p(E)([2,3,3]);n.success(`${s.message}，传参为 ${s.data.list.toString()}`)},r=async()=>{try{await p(k,e)()}catch(s){n.error(s.message)}};return(s,S)=>{const a=d("el-button");return f(),_("div",w,[C,c(a,{type:"primary",onClick:t},{default:i(()=>[l("查询成功")]),_:1}),c(a,{type:"danger",onClick:r},{default:i(()=>[l("查询失败")]),_:1})])}}});export{$ as default};
