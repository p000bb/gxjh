import{V as t}from"./user-89041d09.js";const u="/album";function n(e){return t({url:u,method:"get",params:{id:e}})}function l(e){return t({url:`${u}/page`,method:"post",data:e})}function m(e){return t({url:u,method:"post",data:e})}function s(e){return t({url:u,method:"put",data:e})}function d(e){return t({url:u,method:"delete",params:{id:e}})}function i(e,r,a){return t({url:`${u}/addFile`,method:"post",params:{albumId:e,fileId:r,fileType:a}})}function p(e,r,a){return t({url:`${u}/removeFile`,method:"post",params:{albumId:e,fileId:r,fileType:a}})}function b(e){return t({url:`${u}/getFilePage`,method:"post",data:e})}function c(e){return t({url:`${u}/updateFile`,method:"post",params:e})}export{l as a,m as b,n as c,d,i as e,p as f,b as g,c as h,s as u};
