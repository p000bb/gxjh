import{K as S}from"./el-button-fb691484.js";import{q as j,d as f,f as D}from"./admin-ee59f3a1.js";import E from"./videoCropper-a9e5f9ba.js";import{d as L,t as R,b8 as B,ap as z,r as w,o as N,J as q,y as c,A as d,k as l,K as _,C as T,E as u,B as p,ay as m,b9 as K,ba as M,b6 as O}from"./viewer-97ef37b1.js";import{a as A,u as H,b as J}from"./index-91087f1d.js";import"./el-popper-17f91b7a.js";import"./debounce-38c8536c.js";/* empty css                   */import"./el-overlay-9e31ebb7.js";import"./index-aec40419.js";import"./vnode-3a581f43.js";import"./refs-03c5e3c6.js";import"./el-tab-pane-19a2d70d.js";import"./index-59f4a993.js";import"./el-input-number-aa0bf63c.js";import"./index-3ffe7cf2.js";import"./el-tooltip-4ed993c7.js";import"./directive-2e4aa6c9.js";const P=r=>(K("data-v-680a931e"),r=r(),M(),r),W={class:"box"},G={key:0,class:"input-div"},Q=P(()=>u("span",null,"视频名称：",-1)),X=["src"],Y={key:2,class:"look_img cursor-zoom-in"},Z=["src"],$={class:"btns"},ee=L({__name:"index",setup(r){const h=R(),b=B(),e=z({videoUrl:"",file:{},comIsShow:!1,name:"",type:"",id:""}),n=w(""),i=w({}),U=t=>{let o=t.target.files[0];o&&(e.videoUrl=URL.createObjectURL(o),e.file=o,e.name||(e.name=o.name),e.type=o.type,k(o))},k=t=>{let o=document.createElement("video");o.src=URL.createObjectURL(t),o.onloadedmetadata=function(){o.currentTime=1,o.onseeked=function(){let a=document.createElement("canvas");a.width=o.videoWidth,a.height=o.videoHeight,a.getContext("2d").drawImage(o,0,0,a.width,a.height);let s=document.createElement("img");s.src=a.toDataURL("image/jpeg"),n.value=s.src,a.toBlob(v=>{i.value=new File([v],"cover.jpeg",{type:"image/jpeg"})})}}},g=async t=>Promise.resolve(j.get(t,{responseType:"blob"}).then(o=>{let a=o.data.type.split("/")[1];return new File([o.data],e.name+"."+a,{type:o.data.type})})),x=()=>{e.comIsShow=!0},C=()=>{e.comIsShow=!1},I=t=>{n.value=t.url,i.value=new File([t.blob],"cover.jpeg",{type:t.blob.type})},F=async()=>{if(!e.name){f.error("请填写视频名称");return}if(!e.file){f.error("请选择视频文件");return}if(e.id){const t=new FormData;t.append("id",e.id),t.append("name",e.name),t.append("file",e.file),i.value&&t.append("coverFile",i.value),await H(t)}else{const t=new FormData;t.append("name",e.name),t.append("file",e.file),i.value&&t.append("coverFile",i.value),await J(t)}f.success("操作成功"),y()},y=()=>{b.push({path:"/file/video"})};return N(()=>{h.query.id&&A(h.query.id).then(async t=>{e.videoUrl="https://120.27.223.237/gxjh-file"+t.data.path,e.name=t.data.name,e.id=t.data.id,n.value="https://120.27.223.237/gxjh-file"+t.data.cover,i.value=await g(n.value),e.file=await g(e.videoUrl)})}),(t,o)=>{const a=D,s=S,v=q("viewer");return c(),d("div",W,[e.videoUrl?(c(),d("div",G,[Q,l(a,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=V=>e.name=V),class:"input-name"},null,8,["modelValue"])])):_("",!0),e.videoUrl?(c(),d("video",{key:1,class:"videos",controls:"",src:e.videoUrl},null,8,X)):_("",!0),n.value?T((c(),d("div",Y,[u("img",{src:n.value,alt:""},null,8,Z)])),[[v]]):_("",!0),u("div",$,[l(s,{size:"large",class:"button"},{default:p(()=>[m(" 选择视频文件 "),u("input",{type:"file",id:"video-file",accept:"video/*",onChange:U},null,32)]),_:1}),l(s,{size:"large",color:"#fe3355",onClick:x},{default:p(()=>[m(" 提取封面 ")]),_:1}),l(s,{size:"large",onClick:y},{default:p(()=>[m(" 关闭 ")]),_:1}),l(s,{size:"large",type:"primary",onClick:F},{default:p(()=>[m(" 保存 ")]),_:1})]),l(E,{isShow:e.comIsShow,file:e.file,onCloseDialog:C,onConfirmImg:I},null,8,["isShow","file"])])}}});const ye=O(ee,[["__scopeId","data-v-680a931e"]]);export{ye as default};
