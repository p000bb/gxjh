/* empty css             */import{E}from"./el-button-b054d70c.js";import{E as L}from"./el-input-351b3524.js";import S from"./videoCropper-429d5c68.js";import{d as j,t as D,ar as R,ax as z,r as y,o as B,J as N,y as c,A as d,k as r,K as _,C as M,E as v,B as m,ag as p,at as T,au as q,ap as O}from"./viewer-a917d3a0.js";import{a as W,u as A,b as G}from"./index-713b7731.js";import{G as u,W as H}from"./user-9279ed61.js";import"./use-form-item-a2dc758c.js";import"./use-form-common-props-957cc35c.js";import"./index-9899f039.js";import"./error-f1912ce6.js";/* empty css                   */import"./el-overlay-b9b364f0.js";import"./index-09bc554b.js";import"./scroll-77ba8cf1.js";import"./vnode-37301cb0.js";import"./focus-trap-f79590ca.js";import"./refs-3c71427a.js";import"./el-tab-pane-2c0e7199.js";import"./strings-1de25abc.js";import"./index-8a931359.js";import"./el-input-number-ca8828b1.js";import"./index-ee860d2d.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-b532a2f5.js";import"./debounce-81d01b88.js";import"./index-f9ce445f.js";import"./directive-a7cdde23.js";const J=l=>(T("data-v-6aeee50a"),l=l(),q(),l),K={class:"box"},P={key:0,class:"input-div"},Q=J(()=>v("span",null,"视频名称：",-1)),X=["src"],Y={key:2,class:"look_img cursor-zoom-in"},Z=["src"],$={class:"btns"},ee=j({__name:"index",setup(l){const g=D(),b=R(),e=z({videoUrl:"",file:{},comIsShow:!1,name:"",type:"",id:""}),n=y(""),i=y({}),x=t=>{let o=t.target.files[0];if(!(o.size/1024/1024<64)){u.warning("上传文件不能超过64M");return}o&&(e.videoUrl=URL.createObjectURL(o),e.file=o,e.name||(e.name=o.name),e.type=o.type,U(o))},U=t=>{let o=document.createElement("video");o.src=URL.createObjectURL(t),o.onloadedmetadata=function(){o.currentTime=1,o.onseeked=function(){let a=document.createElement("canvas");a.width=o.videoWidth,a.height=o.videoHeight,a.getContext("2d").drawImage(o,0,0,a.width,a.height);let s=document.createElement("img");s.src=a.toDataURL("image/jpeg"),n.value=s.src,a.toBlob(f=>{i.value=new File([f],"cover.jpeg",{type:"image/jpeg"})})}}},h=async t=>Promise.resolve(H.get(t,{responseType:"blob"}).then(o=>{let a=o.data.type.split("/")[1];return new File([o.data],e.name+"."+a,{type:o.data.type})})),k=()=>{e.comIsShow=!0},C=()=>{e.comIsShow=!1},I=t=>{n.value=t.url,i.value=new File([t.blob],"cover.jpeg",{type:t.blob.type})},F=async()=>{if(!e.name){u.error("请填写视频名称");return}if(!e.file){u.error("请选择视频文件");return}if(e.id){const t=new FormData;t.append("id",e.id),t.append("name",e.name),t.append("file",e.file),i.value&&t.append("coverFile",i.value),await A(t)}else{const t=new FormData;t.append("name",e.name),t.append("file",e.file),i.value&&t.append("coverFile",i.value),await G(t)}u.success("操作成功"),w()},w=()=>{b.push({path:"/file/video"})};return B(()=>{g.query.id&&W(g.query.id).then(async t=>{e.videoUrl="https://120.27.223.237/gxjh-file/"+t.data.path,e.name=t.data.name,e.id=t.data.id,n.value="https://120.27.223.237/gxjh-file/"+t.data.cover,i.value=await h(n.value),e.file=await h(e.videoUrl)})}),(t,o)=>{const a=L,s=E,f=N("viewer");return c(),d("div",K,[e.videoUrl?(c(),d("div",P,[Q,r(a,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=V=>e.name=V),class:"input-name"},null,8,["modelValue"])])):_("",!0),e.videoUrl?(c(),d("video",{key:1,class:"videos",controls:"",src:e.videoUrl},null,8,X)):_("",!0),n.value?M((c(),d("div",Y,[v("img",{src:n.value,alt:""},null,8,Z)])),[[f]]):_("",!0),v("div",$,[r(s,{size:"large",class:"button"},{default:m(()=>[p(" 选择视频文件 "),v("input",{type:"file",id:"video-file",accept:"video/mp4",onChange:x},null,32)]),_:1}),r(s,{size:"large",color:"#fe3355",onClick:k},{default:m(()=>[p(" 提取封面 ")]),_:1}),r(s,{size:"large",onClick:w},{default:m(()=>[p(" 关闭 ")]),_:1}),r(s,{size:"large",type:"primary",onClick:F},{default:m(()=>[p(" 保存 ")]),_:1})]),r(S,{isShow:e.comIsShow,file:e.file,onCloseDialog:C,onConfirmImg:I},null,8,["isShow","file"])])}}});const Ee=O(ee,[["__scopeId","data-v-6aeee50a"]]);export{Ee as default};