import{d as u,ar as k,r as w,v as z,J as x,C as g,y as t,A as s,E as o,Y as C,F as D,$,ay as B,x as N,O as l,k as F}from"./viewer-a917d3a0.js";import{s as c}from"./index-9fe51bc0.js";import{g as S}from"./index-a7e6fe26.js";import"./user-9279ed61.js";const V={class:"section bg-white pt-24 pb-24",ref:"sectionRef"},j={class:"container mx-auto"},A={class:"flex justify-between mb-20 items-center"},E=o("p",{class:"w-[20vw] max-sm:hidden"},null,-1),I={class:"font-gxjh-bold text-8xl max-lg:text-6xl max-md:text-4xl text-black text-center tracking-[1.5rem] relative max-md:tracking-[0.5rem]"},P=B('<div class="w-[20vw] max-sm:w-[30vw]"><select class="select select-bordered select-lg max-sm:select-md text-black w-full max-w-[200px] float-right"><option disabled selected class="text-xl bg-[rgb(200,200,200)] text-white">案例分类</option><option class="text-xl">案例1</option><option class="text-xl">案例2</option><option class="text-xl">案例3</option></select></div>',1),R={class:"grid gap-28 grid-cols-3 place-items-center max-xl:grid-cols-2 max-sm:grid-cols-1"},q=["onClick"],J=["data-aos-delay"],L={key:1,"data-aos":"zoom-in"},O=u({__name:"section1",setup(h){const i=k(),n=a=>{i.push({path:"/display-detail",query:{id:1,type:a.type}})},r=w([]),v=()=>{S({pageNum:1,pageSize:1e3,albumId:"254728824384651264"}).then(a=>{r.value=a.data.list||[]})};return(a,Y)=>{const y=z("image-hover"),f=x("lazy-img"),b=x("lazy-data");return g((t(),s("section",V,[o("div",j,[o("div",A,[E,o("h1",I,C(a.$t("menu.display")),1),P]),o("div",R,[(t(!0),s(D,null,$(r.value,(e,d)=>{var _,p,m;return t(),s("div",{class:"hover:scale-110 hover:cursor-pointer transform transition-all duration-500 ease-in-out",onClick:G=>n(e)},[(t(),s("div",{key:d,"data-aos":"zoom-in","data-aos-delay":300*d},[e.fileType===1?(t(),N(y,{key:0,img1:l(c)((_=e==null?void 0:e.file)==null?void 0:_.cover),img2:l(c)((p=e==null?void 0:e.file)==null?void 0:p.path),type:"video"},null,8,["img1","img2"])):g((t(),s("img",L,null,512)),[[f,l(c)((m=e==null?void 0:e.file)==null?void 0:m.path)]])],8,J))],8,q)}),256))])])])),[[b,v]])}}}),T={class:"display"},U=u({__name:"index",setup(h){return(i,n)=>(t(),s("div",T,[F(O)]))}});export{U as default};