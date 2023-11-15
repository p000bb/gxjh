import{N as Ml,c as ip,a as rp,_ as rs,b as sp,d as ap,r as op,o as Wi,e as lp,u as yl,f as Xr,g as Wt,h as on,i as yr,j as Of,w as cp,m as up,T as fp,k as ls,v as hp,l as Uo,n as Ff,p as kf,q as Bf,F as Tl,s as Va,t as dp,x as pp,y as mp,z as zf,A as _p,B as gp,C as vp,D as xp,E as Ep,G as Oo,H as ps,I as Sp,J as Mp,K as yp,L as Tp,M as ci,O as Hf,P as bp,Q as Ap,R as wp}from"./index-1311bcd1.js";Ml.configure({showSpinner:!1});const Rp=()=>rs(()=>import("./index-c0dbe4f6.js"),["assets/index-c0dbe4f6.js","assets/index-1311bcd1.js","assets/index-8e3adfa8.css","assets/el-button-73056ca8.js","assets/el-button-1b259be1.css","assets/el-popper-22adcb74.js","assets/el-popper-67bb7e41.css","assets/el-dropdown-item-805c6104.js","assets/refs-3df2c220.js","assets/el-dropdown-item-0c6ddabc.css","assets/el-backtop-e4ce3728.js","assets/el-backtop-484a9aa5.css","assets/index-39cf71a9.css","assets/el-button-group-bbe92800.css"]),Cp=[{path:"",component:Rp,redirect:"/home",hidden:!0,children:[{path:"/home",component:()=>rs(()=>import("./index-772569f1.js"),["assets/index-772569f1.js","assets/index-1311bcd1.js","assets/index-8e3adfa8.css","assets/el-button-73056ca8.js","assets/el-button-1b259be1.css","assets/index-fd9641a0.js","assets/vnode-73f72ea9.js","assets/throttle-51d5d389.js","assets/debounce-5efa2919.js","assets/index-51f6c692.css"]),name:"Home"},{path:"/about",component:()=>rs(()=>import("./index-82decbfc.js"),["assets/index-82decbfc.js","assets/index-1311bcd1.js","assets/index-8e3adfa8.css"]),name:"About"},{path:"/display",component:()=>rs(()=>import("./index-b4fa7664.js"),["assets/index-b4fa7664.js","assets/index-1311bcd1.js","assets/index-8e3adfa8.css"]),name:"Display"},{path:"/contact",component:()=>rs(()=>import("./index-e605998e.js"),["assets/index-e605998e.js","assets/index-1311bcd1.js","assets/index-8e3adfa8.css"]),name:"Contact"}]}],bl=ip({history:rp("/"),routes:Cp,scrollBehavior:()=>({left:0,top:0})});bl.beforeEach((i,e,t)=>{Ml.start(),t()});bl.afterEach(()=>{Ml.done()});const Lp=sp();const Pp={};function Dp(i,e){const t=op("router-view");return Wi(),lp(t)}const Ip=ap(Pp,[["render",Dp]]),Ir="/gxjh/assets/example-image-8a9cf1be.jpg",Np={mounted(i,e){const{stop:t}=yl(i,([{isIntersecting:n}])=>{i.src=Ir,n&&(i.onerror=function(){i.src=Ir},i.src=e.value,t())})}},Up={mounted(i,e){const{stop:t}=yl(i,([{isIntersecting:n}])=>{n&&(e.value&&e.value(),t())})}};function Op(i){i.directive("lazy-img",Np),i.directive("lazy-data",Up)}const Fp=Xr({__name:"index",props:{enterClass:{type:String,default:""},leaveClass:{type:String,default:""}},setup(i){const e=i,t=Wt(),n=Wt(!1);yl(t,([{isIntersecting:a}])=>{a&&(n.value=!0)});const r=on(()=>(n.value&&""+e.enterClass,n.value?"animate__animated "+e.enterClass:"")),s=on(()=>n.value?"animate__animated "+e.leaveClass:"");return(a,o)=>(Wi(),yr("div",{ref_key:"divRef",ref:t},[Of(fp,up({name:"custom-classes",mode:"out-in","enter-active-class":r.value,"leave-active-class":s.value},a.$attrs),{default:cp(()=>[ls(Uo("div",null,[Ff(a.$slots,"default")],512),[[hp,n.value]])]),_:3},16,["enter-active-class","leave-active-class"])],512))}}),kp="/gxjh/assets/video-f5714efe.mp4",Bp={alt:"",class:"w-full h-full object-fill aspect-auto object-center"},zp={key:0,alt:"",class:"w-full h-full object-fill aspect-auto object-center"},Hp=Xr({__name:"index",props:{dataHover:{default:"imghvr-blur"},img1:{default:Ir},img2:{default:Ir},type:{default:"image"}},setup(i){const e=i,t=on(()=>!!mp().default),n=Wt(),r=Wt(),s=()=>{r.value&&(r.value.currentTime=0,r.value.play())},a=()=>{r.value&&r.value.pause()};return kf(()=>{if(e.type==="video"){if(!n.value)return;n.value.addEventListener("mouseenter",s),n.value.addEventListener("touchstart",s),n.value.addEventListener("mouseleave",a),n.value.addEventListener("touchend",a)}}),(o,l)=>{const c=Bf("lazy-img");return Wi(),yr("figure",{class:pp(["w-full h-full hover:cursor-pointer",o.dataHover]),ref_key:"figureRef",ref:n},[ls(Uo("img",Bp,null,512),[[c,o.img1]]),Uo("figcaption",null,[t.value?Va("",!0):(Wi(),yr(Tl,{key:0},[o.type==="image"?ls((Wi(),yr("img",zp,null,512)),[[c,o.img2]]):Va("",!0),o.type==="video"?ls((Wi(),yr("video",{key:1,ref_key:"videoRef",ref:r,muted:"",class:"w-full h-full object-fill aspect-auto object-center"},null,512)),[[c,dp(kp)]]):Va("",!0)],64)),Ff(o.$slots,"default")])],2)}}});const Al="158",Gp=0,cc=1,Vp=2,Gf=1,Wp=2,Xn=3,Mi=0,Kt=1,$n=2,_i=0,Rr=1,uc=2,fc=3,hc=4,Xp=5,Hi=100,Yp=101,qp=102,dc=103,pc=104,$p=200,jp=201,Kp=202,Zp=203,Fo=204,ko=205,Jp=206,Qp=207,em=208,tm=209,nm=210,im=211,rm=212,sm=213,am=214,om=0,lm=1,cm=2,da=3,um=4,fm=5,hm=6,dm=7,Vf=0,pm=1,mm=2,gi=0,_m=1,gm=2,vm=3,xm=4,Em=5,Wf=300,Nr=301,Ur=302,Bo=303,zo=304,wa=306,Ho=1e3,wn=1001,Go=1002,Vt=1003,mc=1004,Wa=1005,at=1006,Sm=1007,ms=1008,vi=1009,Mm=1010,ym=1011,wl=1012,Xf=1013,ui=1014,fi=1015,_s=1016,Yf=1017,qf=1018,qi=1020,Tm=1021,Rn=1023,bm=1024,Am=1025,$i=1026,Or=1027,wm=1028,$f=1029,Rm=1030,jf=1031,Kf=1033,Xa=33776,Ya=33777,qa=33778,$a=33779,_c=35840,gc=35841,vc=35842,xc=35843,Cm=36196,Ec=37492,Sc=37496,Mc=37808,yc=37809,Tc=37810,bc=37811,Ac=37812,wc=37813,Rc=37814,Cc=37815,Lc=37816,Pc=37817,Dc=37818,Ic=37819,Nc=37820,Uc=37821,ja=36492,Oc=36494,Fc=36495,Lm=36283,kc=36284,Bc=36285,zc=36286,Zf=3e3,ji=3001,Pm=3200,Dm=3201,Im=0,Nm=1,_n="",Lt="srgb",Qn="srgb-linear",Rl="display-p3",Ra="display-p3-linear",pa="linear",rt="srgb",ma="rec709",_a="p3",sr=7680,Hc=519,Um=512,Om=513,Fm=514,km=515,Bm=516,zm=517,Hm=518,Gm=519,Gc=35044,Vc="300 es",Vo=1035,Zn=2e3,ga=2001;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ka=Math.PI/180,Wo=180/Math.PI;function ws(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function Vm(i,e){return(i%e+e)%e}function Za(i,e,t){return(1-t)*i+t*e}function Wc(i){return(i&i-1)===0&&i!==0}function Xo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=r[0],p=r[3],f=r[6],x=r[1],v=r[4],M=r[7],T=r[2],y=r[5],A=r[8];return s[0]=a*_+o*x+l*T,s[3]=a*p+o*v+l*y,s[6]=a*f+o*M+l*A,s[1]=c*_+u*x+h*T,s[4]=c*p+u*v+h*y,s[7]=c*f+u*M+h*A,s[2]=d*_+m*x+g*T,s[5]=d*p+m*v+g*y,s[8]=d*f+m*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=t*h+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new ze;function Jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wm(){const i=gs("canvas");return i.style.display="block",i}const Xc={};function cs(i){i in Xc||(Xc[i]=!0,console.warn(i))}const Yc=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qc=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ns={[Qn]:{transfer:pa,primaries:ma,toReference:i=>i,fromReference:i=>i},[Lt]:{transfer:rt,primaries:ma,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ra]:{transfer:pa,primaries:_a,toReference:i=>i.applyMatrix3(qc),fromReference:i=>i.applyMatrix3(Yc)},[Rl]:{transfer:rt,primaries:_a,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qc),fromReference:i=>i.applyMatrix3(Yc).convertLinearToSRGB()}},Xm=new Set([Qn,Ra]),Je={enabled:!0,_workingColorSpace:Qn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ns[e].toReference,r=Ns[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ns[i].primaries},getTransfer:function(i){return i===_n?pa:Ns[i].transfer}};function Cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ar;class Qf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=gs("canvas")),ar.width=e.width,ar.height=e.height;const n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cr(t[n]/255)*255):t[n]=Cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ym=0;class eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eo(r[a].image)):s.push(eo(r[a]))}else s=eo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;class Xt extends Yr{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=wn,r=wn,s=at,a=ms,o=Rn,l=vi,c=Xt.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ws(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ji?Lt:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ho:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ho:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?ji:Zf}set encoding(e){cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ji?Lt:_n}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Wf;Xt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(m+1)/2,T=(f+1)/2,y=(u+d)/4,A=(h+_)/4,L=(g+p)/4;return v>M&&v>T?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=y/n,s=A/n):M>T?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=y/r,s=L/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=A/s,r=L/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $m extends Yr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ji?Lt:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:at,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends $m{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class th extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jm extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let p=1-o;const f=l*d+c*m+u*g+h*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const T=Math.sqrt(v),y=Math.atan2(T,f*x);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T}const M=o*x;if(l=l*p+d*M,c=c*p+m*M,u=u*p+g*M,h=h*p+_*M,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return to.copy(this).projectOnVector(e),this.sub(to)}reflect(e){return this.sub(to.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new V,$c=new Rs;class Cs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Os.subVectors(this.max,Jr),or.subVectors(e.a,Jr),lr.subVectors(e.b,Jr),cr.subVectors(e.c,Jr),ni.subVectors(lr,or),ii.subVectors(cr,lr),Di.subVectors(or,cr);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Di.z,Di.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Di.z,0,-Di.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Di.y,Di.x,0];return!no(t,or,lr,cr,Os)||(t=[1,0,0,0,1,0,0,0,1],!no(t,or,lr,cr,Os))?!1:(Fs.crossVectors(ni,ii),t=[Fs.x,Fs.y,Fs.z],no(t,or,lr,cr,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new V,new V,new V,new V,new V,new V,new V,new V],Sn=new V,Us=new Cs,or=new V,lr=new V,cr=new V,ni=new V,ii=new V,Di=new V,Jr=new V,Os=new V,Fs=new V,Ii=new V;function no(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ii.fromArray(i,s);const o=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Km=new Cs,Qr=new V,io=new V;class Cl{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Km.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(io)),this.expandByPoint(Qr.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new V,ro=new V,ks=new V,ri=new V,so=new V,Bs=new V,ao=new V;class Zm{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ro.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ks),o=ri.dot(this.direction),l=-ri.dot(ks),c=ri.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ro).addScaledVector(ks,d),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,s){so.subVectors(t,e),Bs.subVectors(n,e),ao.crossVectors(so,Bs);let a=this.direction.dot(ao),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(Bs.crossVectors(ri,Bs));if(l<0)return null;const c=o*this.direction.dot(so.cross(ri));if(c<0||l+c>a)return null;const u=-o*ri.dot(ao);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,r,s,a,o,l,c,u,h,d,m,g,_,p){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,m,g,_,p)}set(e,t,n,r,s,a,o,l,c,u,h,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),a=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,Qm)}lookAt(e,t,n){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),si.crossVectors(n,rn),si.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),si.crossVectors(n,rn)),si.normalize(),zs.crossVectors(rn,si),r[0]=si.x,r[4]=zs.x,r[8]=rn.x,r[1]=si.y,r[5]=zs.y,r[9]=rn.y,r[2]=si.z,r[6]=zs.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],x=n[3],v=n[7],M=n[11],T=n[15],y=r[0],A=r[4],L=r[8],E=r[12],C=r[1],k=r[5],$=r[9],j=r[13],D=r[2],O=r[6],W=r[10],H=r[14],Z=r[3],K=r[7],ee=r[11],N=r[15];return s[0]=a*y+o*C+l*D+c*Z,s[4]=a*A+o*k+l*O+c*K,s[8]=a*L+o*$+l*W+c*ee,s[12]=a*E+o*j+l*H+c*N,s[1]=u*y+h*C+d*D+m*Z,s[5]=u*A+h*k+d*O+m*K,s[9]=u*L+h*$+d*W+m*ee,s[13]=u*E+h*j+d*H+m*N,s[2]=g*y+_*C+p*D+f*Z,s[6]=g*A+_*k+p*O+f*K,s[10]=g*L+_*$+p*W+f*ee,s[14]=g*E+_*j+p*H+f*N,s[3]=x*y+v*C+M*D+T*Z,s[7]=x*A+v*k+M*O+T*K,s[11]=x*L+v*$+M*W+T*ee,s[15]=x*E+v*j+M*H+T*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*m-n*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],x=h*p*c-_*d*c+_*l*m-o*p*m-h*l*f+o*d*f,v=g*d*c-u*p*c-g*l*m+a*p*m+u*l*f-a*d*f,M=u*_*c-g*h*c+g*o*m-a*_*m-u*o*f+a*h*f,T=g*h*l-u*_*l-g*o*d+a*_*d+u*o*p-a*h*p,y=t*x+n*v+r*M+s*T;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=x*A,e[1]=(_*d*s-h*p*s-_*r*m+n*p*m+h*r*f-n*d*f)*A,e[2]=(o*p*s-_*l*s+_*r*c-n*p*c-o*r*f+n*l*f)*A,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*m-n*l*m)*A,e[4]=v*A,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*f+t*d*f)*A,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*f-t*l*f)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*A,e[8]=M*A,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*f-t*h*f)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*f+t*o*f)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*A,e[12]=T*A,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*p+t*h*p)*A,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*p-t*o*p)*A,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,g=s*h,_=a*u,p=a*h,f=o*h,x=l*c,v=l*u,M=l*h,T=n.x,y=n.y,A=n.z;return r[0]=(1-(_+f))*T,r[1]=(m+M)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(m-M)*y,r[5]=(1-(d+f))*y,r[6]=(p+x)*y,r[7]=0,r[8]=(g+v)*A,r[9]=(p-x)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const a=ur.set(r[4],r[5],r[6]).length(),o=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/a,h=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Zn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,g;if(o===Zn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ga)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Zn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,m=(n+r)*u;let g,_;if(o===Zn)g=(a+s)*h,_=-2*h;else if(o===ga)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ur=new V,Mn=new Dt,Jm=new V(0,0,0),Qm=new V(1,1,1),si=new V,zs=new V,rn=new V,jc=new Dt,Kc=new Rs;class Ca{constructor(e=0,t=0,n=0,r=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e_=0;const Zc=new V,fr=new Rs,Hn=new Dt,Hs=new V,es=new V,t_=new V,n_=new Rs,Jc=new V(1,0,0),Qc=new V(0,1,0),eu=new V(0,0,1),i_={type:"added"},r_={type:"removed"};class cn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new V,t=new Ca,n=new Rs,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ze}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(Jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(es,Hs,this.up):Hn.lookAt(Hs,es,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(Hn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(i_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,t_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,n_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}cn.DEFAULT_UP=new V(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new V,Gn=new V,oo=new V,Vn=new V,hr=new V,dr=new V,tu=new V,lo=new V,co=new V,uo=new V;let Gs=!1;class Tn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){yn.subVectors(r,t),Gn.subVectors(n,t),oo.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Gn),l=yn.dot(oo),c=Gn.dot(Gn),u=Gn.dot(oo),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn),Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,n,r,s,a,o,l){return Gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gs=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Vn),l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),Gn.subVectors(e,t),yn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gs=!0),Tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;hr.subVectors(r,n),dr.subVectors(s,n),lo.subVectors(e,n);const l=hr.dot(lo),c=dr.dot(lo);if(l<=0&&c<=0)return t.copy(n);co.subVectors(e,r);const u=hr.dot(co),h=dr.dot(co);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(hr,a);uo.subVectors(e,s);const m=hr.dot(uo),g=dr.dot(uo);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(dr,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return tu.subVectors(s,r),o=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(tu,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(hr,a).addScaledVector(dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Vm(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fo(a,s,e+1/3),this.g=fo(a,s,e),this.b=fo(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=ih[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Je.fromWorkingColorSpace(Ut.copy(this),e),Math.round($t(Ut.r*255,0,255))*65536+Math.round($t(Ut.g*255,0,255))*256+Math.round($t(Ut.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Lt){Je.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Vs);const n=Za(ai.h,Vs.h,t),r=Za(ai.s,Vs.s,t),s=Za(ai.l,Vs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Qe;Qe.NAMES=ih;let s_=0;class La extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Rr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=ko,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rh extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new V,Ws=new nt;class Un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gc,this.updateRange={offset:0,count:-1},this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sh extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ah extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ki extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let a_=0;const dn=new Dt,ho=new cn,pr=new V,sn=new Cs,ts=new Cs,Rt=new V;class ir extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?ah:sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(sn.min,ts.min),sn.expandByPoint(Rt),Rt.addVectors(sn.max,ts.max),sn.expandByPoint(Rt)):(sn.expandByPoint(ts.min),sn.expandByPoint(ts.max))}sn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),Rt.add(pr)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<o;C++)c[C]=new V,u[C]=new V;const h=new V,d=new V,m=new V,g=new nt,_=new nt,p=new nt,f=new V,x=new V;function v(C,k,$){h.fromArray(r,C*3),d.fromArray(r,k*3),m.fromArray(r,$*3),g.fromArray(a,C*2),_.fromArray(a,k*2),p.fromArray(a,$*2),d.sub(h),m.sub(h),_.sub(g),p.sub(g);const j=1/(_.x*p.y-p.x*_.y);isFinite(j)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(j),x.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(j),c[C].add(f),c[k].add(f),c[$].add(f),u[C].add(x),u[k].add(x),u[$].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let C=0,k=M.length;C<k;++C){const $=M[C],j=$.start,D=$.count;for(let O=j,W=j+D;O<W;O+=3)v(n[O+0],n[O+1],n[O+2])}const T=new V,y=new V,A=new V,L=new V;function E(C){A.fromArray(s,C*3),L.copy(A);const k=c[C];T.copy(k),T.sub(A.multiplyScalar(A.dot(k))).normalize(),y.crossVectors(L,k);const j=y.dot(u[C])<0?-1:1;l[C*4]=T.x,l[C*4+1]=T.y,l[C*4+2]=T.z,l[C*4+3]=j}for(let C=0,k=M.length;C<k;++C){const $=M[C],j=$.start,D=$.count;for(let O=j,W=j+D;O<W;O+=3)E(n[O+0]),E(n[O+1]),E(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new Un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ir,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new Dt,Ni=new Zm,Xs=new Cl,iu=new V,mr=new V,_r=new V,gr=new V,po=new V,Ys=new V,qs=new nt,$s=new nt,js=new nt,ru=new V,su=new V,au=new V,Ks=new V,Zs=new V;class Jn extends cn{constructor(e=new ir,t=new rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(po.fromBufferAttribute(h,e),a?Ys.addScaledVector(po,u):Ys.addScaledVector(po.sub(t),u))}t.add(Ys)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Ni.copy(e.ray).recast(e.near),!(Xs.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Xs,iu)===null||Ni.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(nu),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,T=v;M<T;M+=3){const y=o.getX(M),A=o.getX(M+1),L=o.getX(M+2);r=Js(this,f,e,n,c,u,h,y,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const x=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);r=Js(this,a,e,n,c,u,h,x,v,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,T=v;M<T;M+=3){const y=M,A=M+1,L=M+2;r=Js(this,f,e,n,c,u,h,y,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const x=p,v=p+1,M=p+2;r=Js(this,a,e,n,c,u,h,x,v,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function o_(i,e,t,n,r,s,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Mi,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:i}}function Js(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,_r),i.getVertexPosition(c,gr);const u=o_(i,e,t,n,mr,_r,gr,Ks);if(u){r&&(qs.fromBufferAttribute(r,o),$s.fromBufferAttribute(r,l),js.fromBufferAttribute(r,c),u.uv=Tn.getInterpolation(Ks,mr,_r,gr,qs,$s,js,new nt)),s&&(qs.fromBufferAttribute(s,o),$s.fromBufferAttribute(s,l),js.fromBufferAttribute(s,c),u.uv1=Tn.getInterpolation(Ks,mr,_r,gr,qs,$s,js,new nt),u.uv2=u.uv1),a&&(ru.fromBufferAttribute(a,o),su.fromBufferAttribute(a,l),au.fromBufferAttribute(a,c),u.normal=Tn.getInterpolation(Ks,mr,_r,gr,ru,su,au,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new V,materialIndex:0};Tn.getNormal(mr,_r,gr,h.normal),u.face=h}return u}class Ls extends ir{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(u,3)),this.setAttribute("uv",new Ki(h,2));function g(_,p,f,x,v,M,T,y,A,L,E){const C=M/A,k=T/L,$=M/2,j=T/2,D=y/2,O=A+1,W=L+1;let H=0,Z=0;const K=new V;for(let ee=0;ee<W;ee++){const N=ee*k-j;for(let Y=0;Y<O;Y++){const oe=Y*C-$;K[_]=oe*x,K[p]=N*v,K[f]=D,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[f]=y>0?1:-1,u.push(K.x,K.y,K.z),h.push(Y/A),h.push(1-ee/L),H+=1}}for(let ee=0;ee<L;ee++)for(let N=0;N<A;N++){const Y=d+N+O*ee,oe=d+N+O*(ee+1),ie=d+(N+1)+O*(ee+1),ue=d+(N+1)+O*ee;l.push(Y,oe,ue),l.push(oe,ie,ue),Z+=6}o.addGroup(m,Z,E),m+=Z,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=Fr(i[t]);for(const r in n)e[r]=n[r]}return e}function l_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oh(i){return i.getRenderTarget()===null?i.outputColorSpace:Je.workingColorSpace}const c_={clone:Fr,merge:Ht};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=l_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lh extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends lh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,xr=1;class h_ extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(vr,xr,e,t);r.layers=this.layers,this.add(r);const s=new bn(vr,xr,e,t);s.layers=this.layers,this.add(s);const a=new bn(vr,xr,e,t);a.layers=this.layers,this.add(a);const o=new bn(vr,xr,e,t);o.layers=this.layers,this.add(o);const l=new bn(vr,xr,e,t);l.layers=this.layers,this.add(l);const c=new bn(vr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ch extends Xt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Nr,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d_ extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ji?Lt:_n),this.texture=new ch(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:at}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ls(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:_i});s.uniforms.tEquirect.value=t;const a=new Jn(r,s),o=t.minFilter;return t.minFilter===ms&&(t.minFilter=at),new h_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const mo=new V,p_=new V,m_=new ze;class ki{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=mo.subVectors(n,t).cross(p_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m_.getNormalMatrix(e),r=this.coplanarPoint(mo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Cl,Qs=new V;class uh{constructor(e=new ki,t=new ki,n=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],x=r[13],v=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,p-m,M-f).normalize(),n[1].setComponents(l+s,d+c,p+m,M+f).normalize(),n[2].setComponents(l+a,d+u,p+g,M+x).normalize(),n[3].setComponents(l-a,d-u,p-g,M-x).normalize(),n[4].setComponents(l-o,d-h,p-_,M-v).normalize(),t===Zn)n[5].setComponents(l+o,d+h,p+_,M+v).normalize();else if(t===ga)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function __(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Pa extends ir{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const x=f*d-a;for(let v=0;v<c;v++){const M=v*h-s;g.push(M,-x,0),_.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,M=x+c*(f+1),T=x+1+c*(f+1),y=x+1+c*f;m.push(v,M,y),m.push(M,T,y)}this.setIndex(m),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(_,3)),this.setAttribute("uv",new Ki(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var g_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,M_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,k_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ig=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,pg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ov=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:g_,alphahash_pars_fragment:v_,alphamap_fragment:x_,alphamap_pars_fragment:E_,alphatest_fragment:S_,alphatest_pars_fragment:M_,aomap_fragment:y_,aomap_pars_fragment:T_,begin_vertex:b_,beginnormal_vertex:A_,bsdfs:w_,iridescence_fragment:R_,bumpmap_pars_fragment:C_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:I_,color_fragment:N_,color_pars_fragment:U_,color_pars_vertex:O_,color_vertex:F_,common:k_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:z_,displacementmap_pars_vertex:H_,displacementmap_vertex:G_,emissivemap_fragment:V_,emissivemap_pars_fragment:W_,colorspace_fragment:X_,colorspace_pars_fragment:Y_,envmap_fragment:q_,envmap_common_pars_fragment:$_,envmap_pars_fragment:j_,envmap_pars_vertex:K_,envmap_physical_pars_fragment:lg,envmap_vertex:Z_,fog_vertex:J_,fog_pars_vertex:Q_,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_fragment:ig,lightmap_pars_fragment:rg,lights_lambert_fragment:sg,lights_lambert_pars_fragment:ag,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:ug,lights_phong_fragment:fg,lights_phong_pars_fragment:hg,lights_physical_fragment:dg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:_g,lights_fragment_end:gg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Sg,map_fragment:Mg,map_pars_fragment:yg,map_particle_fragment:Tg,map_particle_pars_fragment:bg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:wg,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Lg,morphtarget_vertex:Pg,normal_fragment_begin:Dg,normal_fragment_maps:Ig,normal_pars_fragment:Ng,normal_pars_vertex:Ug,normal_vertex:Og,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Hg,opaque_fragment:Gg,packing:Vg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:Yg,dithering_pars_fragment:qg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Jg,shadowmask_pars_fragment:Qg,skinbase_vertex:ev,skinning_pars_vertex:tv,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:rv,specularmap_pars_fragment:sv,tonemapping_fragment:av,tonemapping_pars_fragment:ov,transmission_fragment:lv,transmission_pars_fragment:cv,uv_pars_fragment:uv,uv_pars_vertex:fv,uv_vertex:hv,worldpos_vertex:dv,background_vert:pv,background_frag:mv,backgroundCube_vert:_v,backgroundCube_frag:gv,cube_vert:vv,cube_frag:xv,depth_vert:Ev,depth_frag:Sv,distanceRGBA_vert:Mv,distanceRGBA_frag:yv,equirect_vert:Tv,equirect_frag:bv,linedashed_vert:Av,linedashed_frag:wv,meshbasic_vert:Rv,meshbasic_frag:Cv,meshlambert_vert:Lv,meshlambert_frag:Pv,meshmatcap_vert:Dv,meshmatcap_frag:Iv,meshnormal_vert:Nv,meshnormal_frag:Uv,meshphong_vert:Ov,meshphong_frag:Fv,meshphysical_vert:kv,meshphysical_frag:Bv,meshtoon_vert:zv,meshtoon_frag:Hv,points_vert:Gv,points_frag:Vv,shadow_vert:Wv,shadow_frag:Xv,sprite_vert:Yv,sprite_frag:qv},fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Dn={basic:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ht([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ht([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ht([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ht([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ht([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ht([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ht([fe.common,fe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ht([fe.lights,fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Dn.physical={uniforms:Ht([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ea={r:0,b:0,g:0};function $v(i,e,t,n,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(p,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wa)?(u===void 0&&(u=new Jn(new Ls(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Fr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Je.getTransfer(v.colorSpace)!==rt,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jn(new Pa(2,2),new yi({name:"BackgroundMaterial",uniforms:Fr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Je.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(ea,oh(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function jv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(D,O,W,H,Z){let K=!1;if(a){const ee=_(H,W,O);c!==ee&&(c=ee,m(c.object)),K=f(D,H,W,Z),K&&x(D,H,W,Z)}else{const ee=O.wireframe===!0;(c.geometry!==H.id||c.program!==W.id||c.wireframe!==ee)&&(c.geometry=H.id,c.program=W.id,c.wireframe=ee,K=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,L(D,O,W,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,O,W){const H=W.wireframe===!0;let Z=o[D.id];Z===void 0&&(Z={},o[D.id]=Z);let K=Z[O.id];K===void 0&&(K={},Z[O.id]=K);let ee=K[H];return ee===void 0&&(ee=p(d()),K[H]=ee),ee}function p(D){const O=[],W=[],H=[];for(let Z=0;Z<r;Z++)O[Z]=0,W[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:H,object:D,attributes:{},index:null}}function f(D,O,W,H){const Z=c.attributes,K=O.attributes;let ee=0;const N=W.getAttributes();for(const Y in N)if(N[Y].location>=0){const ie=Z[Y];let ue=K[Y];if(ue===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;ee++}return c.attributesNum!==ee||c.index!==H}function x(D,O,W,H){const Z={},K=O.attributes;let ee=0;const N=W.getAttributes();for(const Y in N)if(N[Y].location>=0){let ie=K[Y];ie===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),Z[Y]=ue,ee++}c.attributes=Z,c.attributesNum=ee,c.index=H}function v(){const D=c.newAttributes;for(let O=0,W=D.length;O<W;O++)D[O]=0}function M(D){T(D,0)}function T(D,O){const W=c.newAttributes,H=c.enabledAttributes,Z=c.attributeDivisors;W[D]=1,H[D]===0&&(i.enableVertexAttribArray(D),H[D]=1),Z[D]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),Z[D]=O)}function y(){const D=c.newAttributes,O=c.enabledAttributes;for(let W=0,H=O.length;W<H;W++)O[W]!==D[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function A(D,O,W,H,Z,K,ee){ee===!0?i.vertexAttribIPointer(D,O,W,Z,K):i.vertexAttribPointer(D,O,W,H,Z,K)}function L(D,O,W,H){if(n.isWebGL2===!1&&(D.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Z=H.attributes,K=W.getAttributes(),ee=O.defaultAttributeValues;for(const N in K){const Y=K[N];if(Y.location>=0){let oe=Z[N];if(oe===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const ie=oe.normalized,ue=oe.itemSize,Se=t.get(oe);if(Se===void 0)continue;const Oe=Se.buffer,Me=Se.type,Ae=Se.bytesPerElement,qe=n.isWebGL2===!0&&(Me===i.INT||Me===i.UNSIGNED_INT||oe.gpuType===Xf);if(oe.isInterleavedBufferAttribute){const Ce=oe.data,z=Ce.stride,P=oe.offset;if(Ce.isInstancedInterleavedBuffer){for(let w=0;w<Y.locationSize;w++)T(Y.location+w,Ce.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let w=0;w<Y.locationSize;w++)M(Y.location+w);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let w=0;w<Y.locationSize;w++)A(Y.location+w,ue/Y.locationSize,Me,ie,z*Ae,(P+ue/Y.locationSize*w)*Ae,qe)}else{if(oe.isInstancedBufferAttribute){for(let Ce=0;Ce<Y.locationSize;Ce++)T(Y.location+Ce,oe.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<Y.locationSize;Ce++)M(Y.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Ce=0;Ce<Y.locationSize;Ce++)A(Y.location+Ce,ue/Y.locationSize,Me,ie,ue*Ae,ue/Y.locationSize*Ce*Ae,qe)}}else if(ee!==void 0){const ie=ee[N];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(Y.location,ie);break;case 3:i.vertexAttrib3fv(Y.location,ie);break;case 4:i.vertexAttrib4fv(Y.location,ie);break;default:i.vertexAttrib1fv(Y.location,ie)}}}}y()}function E(){$();for(const D in o){const O=o[D];for(const W in O){const H=O[W];for(const Z in H)g(H[Z].object),delete H[Z];delete O[W]}delete o[D]}}function C(D){if(o[D.id]===void 0)return;const O=o[D.id];for(const W in O){const H=O[W];for(const Z in H)g(H[Z].object),delete H[Z];delete O[W]}delete o[D.id]}function k(D){for(const O in o){const W=o[O];if(W[D.id]===void 0)continue;const H=W[D.id];for(const Z in H)g(H[Z].object),delete H[Z];delete W[D.id]}}function $(){j(),u=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:j,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:M,disableUnusedAttributes:y}}function Kv(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Zv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||e.has("OES_texture_float"),T=v&&M,y=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:y}}function Jv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ki,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,v=x*4;let M=f.clippingState||null;l.value=M,M=u(g,d,v,m);for(let T=0;T!==v;++T)M[T]=t[T];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,M=m;v!==_;++v,M+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Qv(i){let e=new WeakMap;function t(a,o){return o===Bo?a.mapping=Nr:o===zo&&(a.mapping=Ur),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Bo||o===zo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new d_(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hh extends lh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,ou=[.125,.215,.35,.446,.526,.582],Gi=20,_o=new hh,lu=new Qe;let go=null,vo=0,xo=0;const Bi=(1+Math.sqrt(5))/2,Er=1/Bi,cu=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Bi,Er),new V(0,Bi,-Er),new V(Er,0,Bi),new V(-Er,0,Bi),new V(Bi,Er,0),new V(-Bi,Er,0)];class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,vo,xo),e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:at,minFilter:at,generateMipmaps:!1,type:_s,format:Rn,colorSpace:Qn,depthBuffer:!1},r=fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(s)),this._blurMaterial=t0(s,e,t)}return r}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,n,r){const o=new bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(lu),u.toneMapping=gi,u.autoClear=!1;const m=new rh({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Jn(new Ls,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(lu),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;ta(r,x*v,f>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Nr||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cu[(r-1)%cu.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gi-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Gi;p>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);const f=[];let x=0;for(let A=0;A<Gi;++A){const L=A/_,E=Math.exp(-L*L/2);f.push(E),A===0?x+=E:A<p&&(x+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[r],T=3*M*(r>v-Tr?r-v+Tr:0),y=4*(this._cubeSize-M);ta(t,T,y,3*M,2*M),l.setRenderTarget(t),l.render(h,_o)}}function e0(i){const e=[],t=[],n=[];let r=i;const s=i-Tr+1+ou.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Tr?l=ou[a-i+Tr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,x=new Float32Array(_*g*m),v=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let y=0;y<m;y++){const A=y%3*2/3-1,L=y>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(E,_*g*y),v.set(d,p*g*y);const C=[y,y,y,y,y,y];M.set(C,f*g*y)}const T=new ir;T.setAttribute("position",new Un(x,_)),T.setAttribute("uv",new Un(v,p)),T.setAttribute("faceIndex",new Un(M,f)),e.push(T),r>Tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fu(i,e,t){const n=new tr(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function t0(i,e,t){const n=new Float32Array(Gi),r=new V(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function hu(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function du(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Bo||l===zo,u=l===Nr||l===Ur;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new uu(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new uu(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function i0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function r0(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,M=x.length;v<M;v+=3){const T=x[v+0],y=x[v+1],A=x[v+2];d.push(T,y,y,A,A,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const T=v+0,y=v+1,A=v+2;d.push(T,y,y,A,A,T)}}else return;const p=new(Jf(d)?ah:sh)(d,1);p.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function s0(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){i.drawElements(s,m,o,d*l),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function a0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function o0(i,e){return i[0]-e[0]}function l0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function c0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new yt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let D=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let L=0;x===!0&&(L=1),v===!0&&(L=2),M===!0&&(L=3);let E=u.attributes.position.count*L,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const k=new Float32Array(E*C*4*g),$=new th(k,E,C,g);$.type=fi,$.needsUpdate=!0;const j=L*4;for(let O=0;O<g;O++){const W=T[O],H=y[O],Z=A[O],K=E*C*4*O;for(let ee=0;ee<W.count;ee++){const N=ee*j;x===!0&&(a.fromBufferAttribute(W,ee),k[K+N+0]=a.x,k[K+N+1]=a.y,k[K+N+2]=a.z,k[K+N+3]=0),v===!0&&(a.fromBufferAttribute(H,ee),k[K+N+4]=a.x,k[K+N+5]=a.y,k[K+N+6]=a.z,k[K+N+7]=0),M===!0&&(a.fromBufferAttribute(Z,ee),k[K+N+8]=a.x,k[K+N+9]=a.y,k[K+N+10]=a.z,k[K+N+11]=Z.itemSize===4?a.w:1)}}_={count:g,texture:$,size:new nt(E,C)},s.set(u,_),u.addEventListener("dispose",D)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){const M=g[v];M[0]=v,M[1]=d[v]}g.sort(l0);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(o0);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const M=o[v],T=M[0],y=M[1];T!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+v)!==_[T]&&u.setAttribute("morphTarget"+v,_[T]),p&&u.getAttribute("morphNormal"+v)!==p[T]&&u.setAttribute("morphNormal"+v,p[T]),r[v]=y,f+=y):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function u0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const dh=new Xt,ph=new th,mh=new jm,_h=new ch,pu=[],mu=[],_u=new Float32Array(16),gu=new Float32Array(9),vu=new Float32Array(4);function qr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=pu[r];if(s===void 0&&(s=new Float32Array(r),pu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Da(i,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function f0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function m0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),At(t,n)}}function _0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),At(t,n)}}function g0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),At(t,n)}}function v0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function M0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function A0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||dh,r)}function w0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||mh,r)}function R0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_h,r)}function C0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ph,r)}function L0(i){switch(i){case 5126:return f0;case 35664:return h0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return _0;case 35676:return g0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return E0;case 35669:case 35673:return S0;case 5125:return M0;case 36294:return y0;case 36295:return T0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function P0(i,e){i.uniform1fv(this.addr,e)}function D0(i,e){const t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function I0(i,e){const t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function N0(i,e){const t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function U0(i,e){const t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function O0(i,e){const t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function F0(i,e){const t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k0(i,e){i.uniform1iv(this.addr,e)}function B0(i,e){i.uniform2iv(this.addr,e)}function z0(i,e){i.uniform3iv(this.addr,e)}function H0(i,e){i.uniform4iv(this.addr,e)}function G0(i,e){i.uniform1uiv(this.addr,e)}function V0(i,e){i.uniform2uiv(this.addr,e)}function W0(i,e){i.uniform3uiv(this.addr,e)}function X0(i,e){i.uniform4uiv(this.addr,e)}function Y0(i,e,t){const n=this.cache,r=e.length,s=Da(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||dh,s[a])}function q0(i,e,t){const n=this.cache,r=e.length,s=Da(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||mh,s[a])}function $0(i,e,t){const n=this.cache,r=e.length,s=Da(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||_h,s[a])}function j0(i,e,t){const n=this.cache,r=e.length,s=Da(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ph,s[a])}function K0(i){switch(i){case 5126:return P0;case 35664:return D0;case 35665:return I0;case 35666:return N0;case 35674:return U0;case 35675:return O0;case 35676:return F0;case 5124:case 35670:return k0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return j0}}class Z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=L0(t.type)}}class J0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=K0(t.type)}}class Q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function xu(i,e){i.seq.push(e),i.map[e.id]=e}function ex(i,e,t){const n=i.name,r=n.length;for(Eo.lastIndex=0;;){const s=Eo.exec(n),a=Eo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){xu(t,c===void 0?new Z0(o,i,e):new J0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Q0(o),xu(t,h)),t=h}}}class la{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ex(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Eu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tx=37297;let nx=0;function ix(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function rx(i){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(i);let n;switch(e===t?n="":e===_a&&t===ma?n="LinearDisplayP3ToLinearSRGB":e===ma&&t===_a&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case Ra:return[n,"LinearTransferOETF"];case Lt:case Rl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Su(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ix(i.getShaderSource(e),a)}else return r}function sx(i,e){const t=rx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ax(i,e){let t;switch(e){case _m:t="Linear";break;case gm:t="Reinhard";break;case vm:t="OptimizedCineon";break;case xm:t="ACESFilmic";break;case Em:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ox(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function lx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ss(i){return i!==""}function Mu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(ux,hx)}const fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hx(i,e){let t=ke[e];if(t===void 0){const n=fx.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(dx,px)}function px(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function _x(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Nr:case Ur:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function vx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vf:e="ENVMAP_BLENDING_MULTIPLY";break;case pm:e="ENVMAP_BLENDING_MIX";break;case mm:e="ENVMAP_BLENDING_ADD";break}return e}function xx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ex(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mx(t),c=_x(t),u=gx(t),h=vx(t),d=xx(t),m=t.isWebGL2?"":ox(t),g=lx(s),_=r.createProgram();let p,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(p=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[m,bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ke.tonemapping_pars_fragment:"",t.toneMapping!==gi?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,sx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),a=Yo(a),a=Mu(a,t),a=yu(a,t),o=Yo(o),o=Mu(o,t),o=yu(o,t),a=Tu(a),o=Tu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+p+a,M=x+f+o,T=Eu(r,r.VERTEX_SHADER,v),y=Eu(r,r.FRAGMENT_SHADER,M);r.attachShader(_,T),r.attachShader(_,y),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(k){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(_).trim(),j=r.getShaderInfoLog(T).trim(),D=r.getShaderInfoLog(y).trim();let O=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,y);else{const H=Su(r,T,"vertex"),Z=Su(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+H+`
`+Z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(j===""||D==="")&&(W=!1);W&&(k.diagnostics={runnable:O,programLog:$,vertexShader:{log:j,prefix:p},fragmentShader:{log:D,prefix:f}})}r.deleteShader(T),r.deleteShader(y),L=new la(r,_),E=cx(r,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,tx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=y,this}let Sx=0;class Mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yx(e),t.set(e,n)),n}}class yx{constructor(e){this.id=Sx++,this.code=e,this.usedTimes=0}}function Tx(i,e,t,n,r,s,a){const o=new nh,l=new Mx,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,C,k,$,j){const D=$.fog,O=j.geometry,W=E.isMeshStandardMaterial?$.environment:null,H=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),Z=H&&H.mapping===wa?H.image.height:null,K=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,N=ee!==void 0?ee.length:0;let Y=0;O.morphAttributes.position!==void 0&&(Y=1),O.morphAttributes.normal!==void 0&&(Y=2),O.morphAttributes.color!==void 0&&(Y=3);let oe,ie,ue,Se;if(K){const gt=Dn[K];oe=gt.vertexShader,ie=gt.fragmentShader}else oe=E.vertexShader,ie=E.fragmentShader,l.update(E),ue=l.getVertexShaderID(E),Se=l.getFragmentShaderID(E);const Oe=i.getRenderTarget(),Me=j.isInstancedMesh===!0,Ae=!!E.map,qe=!!E.matcap,Ce=!!H,z=!!E.aoMap,P=!!E.lightMap,w=!!E.bumpMap,U=!!E.normalMap,Q=!!E.displacementMap,me=!!E.emissiveMap,de=!!E.metalnessMap,ye=!!E.roughnessMap,He=E.anisotropy>0,_t=E.clearcoat>0,We=E.iridescence>0,b=E.sheen>0,S=E.transmission>0,B=He&&!!E.anisotropyMap,te=_t&&!!E.clearcoatMap,ne=_t&&!!E.clearcoatNormalMap,re=_t&&!!E.clearcoatRoughnessMap,xe=We&&!!E.iridescenceMap,le=We&&!!E.iridescenceThicknessMap,_e=b&&!!E.sheenColorMap,Le=b&&!!E.sheenRoughnessMap,$e=!!E.specularMap,se=!!E.specularColorMap,Ze=!!E.specularIntensityMap,Ne=S&&!!E.transmissionMap,Pe=S&&!!E.thicknessMap,Te=!!E.gradientMap,ve=!!E.alphaMap,Ye=E.alphaTest>0,I=!!E.alphaHash,pe=!!E.extensions,ae=!!O.attributes.uv1,J=!!O.attributes.uv2,ce=!!O.attributes.uv3;let we=gi;return E.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(we=i.toneMapping),{isWebGL2:u,shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:ie,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:Me,instancingColor:Me&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Qn,map:Ae,matcap:qe,envMap:Ce,envMapMode:Ce&&H.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:P,bumpMap:w,normalMap:U,displacementMap:d&&Q,emissiveMap:me,normalMapObjectSpace:U&&E.normalMapType===Nm,normalMapTangentSpace:U&&E.normalMapType===Im,metalnessMap:de,roughnessMap:ye,anisotropy:He,anisotropyMap:B,clearcoat:_t,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:re,iridescence:We,iridescenceMap:xe,iridescenceThicknessMap:le,sheen:b,sheenColorMap:_e,sheenRoughnessMap:Le,specularMap:$e,specularColorMap:se,specularIntensityMap:Ze,transmission:S,transmissionMap:Ne,thicknessMap:Pe,gradientMap:Te,opaque:E.transparent===!1&&E.blending===Rr,alphaMap:ve,alphaTest:Ye,alphaHash:I,combine:E.combine,mapUv:Ae&&_(E.map.channel),aoMapUv:z&&_(E.aoMap.channel),lightMapUv:P&&_(E.lightMap.channel),bumpMapUv:w&&_(E.bumpMap.channel),normalMapUv:U&&_(E.normalMap.channel),displacementMapUv:Q&&_(E.displacementMap.channel),emissiveMapUv:me&&_(E.emissiveMap.channel),metalnessMapUv:de&&_(E.metalnessMap.channel),roughnessMapUv:ye&&_(E.roughnessMap.channel),anisotropyMapUv:B&&_(E.anisotropyMap.channel),clearcoatMapUv:te&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(E.sheenRoughnessMap.channel),specularMapUv:$e&&_(E.specularMap.channel),specularColorMapUv:se&&_(E.specularColorMap.channel),specularIntensityMapUv:Ze&&_(E.specularIntensityMap.channel),transmissionMapUv:Ne&&_(E.transmissionMap.channel),thicknessMapUv:Pe&&_(E.thicknessMap.channel),alphaMapUv:ve&&_(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(U||He),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:J,vertexUv3s:ce,pointsUvs:j.isPoints===!0&&!!O.attributes.uv&&(Ae||ve),fog:!!D,useFog:E.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Y,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$n,flipSided:E.side===Kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:pe&&E.extensions.derivatives===!0,extensionFragDepth:pe&&E.extensions.fragDepth===!0,extensionDrawBuffers:pe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)C.push(k),C.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(x(C,E),v(C,E),C.push(i.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function x(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function v(E,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),E.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function M(E){const C=g[E.type];let k;if(C){const $=Dn[C];k=c_.clone($.uniforms)}else k=E.uniforms;return k}function T(E,C){let k;for(let $=0,j=c.length;$<j;$++){const D=c[$];if(D.cacheKey===C){k=D,++k.usedTimes;break}}return k===void 0&&(k=new Ex(i,C,E,s),c.push(k)),k}function y(E){if(--E.usedTimes===0){const C=c.indexOf(E);c[C]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:L}}function bx(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function o(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Ax),n.length>1&&n.sort(d||Au),r.length>1&&r.sort(d||Au)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function wx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new wu,i.set(n,[a])):r>=s.length?(a=new wu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Qe};break;case"SpotLight":t={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Cx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Lx=0;function Px(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dx(i,e){const t=new Rx,n=Cx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,a=new Dt,o=new Dt;function l(u,h){let d=0,m=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let _=0,p=0,f=0,x=0,v=0,M=0,T=0,y=0,A=0,L=0,E=0;u.sort(Px);const C=h===!0?Math.PI:1;for(let $=0,j=u.length;$<j;$++){const D=u[$],O=D.color,W=D.intensity,H=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*W*C,m+=O.g*W*C,g+=O.b*W*C;else if(D.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(D.sh.coefficients[K],W);E++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*C),D.castShadow){const ee=D.shadow,N=n.get(D);N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,r.directionalShadow[_]=N,r.directionalShadowMap[_]=Z,r.directionalShadowMatrix[_]=D.shadow.matrix,M++}r.directional[_]=K,_++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(O).multiplyScalar(W*C),K.distance=H,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,r.spot[f]=K;const ee=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,ee.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[f]=ee.matrix,D.castShadow){const N=n.get(D);N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,r.spotShadow[f]=N,r.spotShadowMap[f]=Z,y++}f++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(O).multiplyScalar(W),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),r.rectArea[x]=K,x++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*C),K.distance=D.distance,K.decay=D.decay,D.castShadow){const ee=D.shadow,N=n.get(D);N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,N.shadowCameraNear=ee.camera.near,N.shadowCameraFar=ee.camera.far,r.pointShadow[p]=N,r.pointShadowMap[p]=Z,r.pointShadowMatrix[p]=D.shadow.matrix,T++}r.point[p]=K,p++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(W*C),K.groundColor.copy(D.groundColor).multiplyScalar(W*C),r.hemi[v]=K,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const k=r.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==f||k.rectAreaLength!==x||k.hemiLength!==v||k.numDirectionalShadows!==M||k.numPointShadows!==T||k.numSpotShadows!==y||k.numSpotMaps!==A||k.numLightProbes!==E)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=x,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=y+A-L,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=E,k.directionalLength=_,k.pointLength=p,k.spotLength=f,k.rectAreaLength=x,k.hemiLength=v,k.numDirectionalShadows=M,k.numPointShadows=T,k.numSpotShadows=y,k.numSpotMaps=A,k.numLightProbes=E,r.version=Lx++)}function c(u,h){let d=0,m=0,g=0,_=0,p=0;const f=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(M.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function Ru(i,e){const t=new Dx(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ix(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Ru(i,e),t.set(s,[l])):a>=o.length?(l=new Ru(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Nx extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ux extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kx(i,e,t){let n=new uh;const r=new nt,s=new nt,a=new yt,o=new Nx({depthPacking:Dm}),l=new Ux,c={},u=t.maxTextureSize,h={[Mi]:Kt,[Kt]:Mi,[$n]:$n},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Ox,fragmentShader:Fx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ir;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let f=this.type;this.render=function(T,y,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const L=i.getRenderTarget(),E=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(_i),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=f!==Xn&&this.type===Xn,j=f===Xn&&this.type!==Xn;for(let D=0,O=T.length;D<O;D++){const W=T[D],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Z=H.getFrameExtents();if(r.multiply(Z),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,H.mapSize.y=s.y)),H.map===null||$===!0||j===!0){const ee=this.type!==Xn?{minFilter:Vt,magFilter:Vt}:{};H.map!==null&&H.map.dispose(),H.map=new tr(r.x,r.y,ee),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const K=H.getViewportCount();for(let ee=0;ee<K;ee++){const N=H.getViewport(ee);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),k.viewport(a),H.updateMatrices(W,ee),n=H.getFrustum(),M(y,A,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Xn&&x(H,A),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(L,E,C)};function x(T,y){const A=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new tr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(y,null,A,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(y,null,A,m,_,null)}function v(T,y,A,L){let E=null;const C=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)E=C;else if(E=A.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const k=E.uuid,$=y.uuid;let j=c[k];j===void 0&&(j={},c[k]=j);let D=j[$];D===void 0&&(D=E.clone(),j[$]=D),E=D}if(E.visible=y.visible,E.wireframe=y.wireframe,L===Xn?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:h[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=i.properties.get(E);k.light=A}return E}function M(T,y,A,L,E){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const $=e.update(T),j=T.material;if(Array.isArray(j)){const D=$.groups;for(let O=0,W=D.length;O<W;O++){const H=D[O],Z=j[H.materialIndex];if(Z&&Z.visible){const K=v(T,Z,L,E);i.renderBufferDirect(A,null,$,K,T,H)}}}else if(j.visible){const D=v(T,j,L,E);i.renderBufferDirect(A,null,$,D,T,null)}}const k=T.children;for(let $=0,j=k.length;$<j;$++)M(k[$],y,A,L,E)}}function Bx(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const pe=new yt;let ae=null;const J=new yt(0,0,0,0);return{setMask:function(ce){ae!==ce&&!I&&(i.colorMask(ce,ce,ce,ce),ae=ce)},setLocked:function(ce){I=ce},setClear:function(ce,we,je,gt,hn){hn===!0&&(ce*=gt,we*=gt,je*=gt),pe.set(ce,we,je,gt),J.equals(pe)===!1&&(i.clearColor(ce,we,je,gt),J.copy(pe))},reset:function(){I=!1,ae=null,J.set(-1,0,0,0)}}}function s(){let I=!1,pe=null,ae=null,J=null;return{setTest:function(ce){ce?Ae(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(ce){pe!==ce&&!I&&(i.depthMask(ce),pe=ce)},setFunc:function(ce){if(ae!==ce){switch(ce){case om:i.depthFunc(i.NEVER);break;case lm:i.depthFunc(i.ALWAYS);break;case cm:i.depthFunc(i.LESS);break;case da:i.depthFunc(i.LEQUAL);break;case um:i.depthFunc(i.EQUAL);break;case fm:i.depthFunc(i.GEQUAL);break;case hm:i.depthFunc(i.GREATER);break;case dm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ce}},setLocked:function(ce){I=ce},setClear:function(ce){J!==ce&&(i.clearDepth(ce),J=ce)},reset:function(){I=!1,pe=null,ae=null,J=null}}}function a(){let I=!1,pe=null,ae=null,J=null,ce=null,we=null,je=null,gt=null,hn=null;return{setTest:function(it){I||(it?Ae(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(it){pe!==it&&!I&&(i.stencilMask(it),pe=it)},setFunc:function(it,Bt,Ln){(ae!==it||J!==Bt||ce!==Ln)&&(i.stencilFunc(it,Bt,Ln),ae=it,J=Bt,ce=Ln)},setOp:function(it,Bt,Ln){(we!==it||je!==Bt||gt!==Ln)&&(i.stencilOp(it,Bt,Ln),we=it,je=Bt,gt=Ln)},setLocked:function(it){I=it},setClear:function(it){hn!==it&&(i.clearStencil(it),hn=it)},reset:function(){I=!1,pe=null,ae=null,J=null,ce=null,we=null,je=null,gt=null,hn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,x=null,v=null,M=null,T=null,y=null,A=null,L=null,E=new Qe(0,0,0),C=0,k=!1,$=null,j=null,D=null,O=null,W=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=K>=2);let N=null,Y={};const oe=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),ue=new yt().fromArray(oe),Se=new yt().fromArray(ie);function Oe(I,pe,ae,J){const ce=new Uint8Array(4),we=i.createTexture();i.bindTexture(I,we),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ae;je++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(pe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return we}const Me={};Me[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(i.DEPTH_TEST),l.setFunc(da),de(!1),ye(cc),Ae(i.CULL_FACE),Q(_i);function Ae(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function qe(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Ce(I,pe){return m[I]!==pe?(i.bindFramebuffer(I,pe),m[I]=pe,n&&(I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function z(I,pe){let ae=_,J=!1;if(I)if(ae=g.get(pe),ae===void 0&&(ae=[],g.set(pe,ae)),I.isWebGLMultipleRenderTargets){const ce=I.texture;if(ae.length!==ce.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let we=0,je=ce.length;we<je;we++)ae[we]=i.COLOR_ATTACHMENT0+we;ae.length=ce.length,J=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,J=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,J=!0);J&&(t.isWebGL2?i.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function P(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const w={[Hi]:i.FUNC_ADD,[Yp]:i.FUNC_SUBTRACT,[qp]:i.FUNC_REVERSE_SUBTRACT};if(n)w[dc]=i.MIN,w[pc]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(w[dc]=I.MIN_EXT,w[pc]=I.MAX_EXT)}const U={[$p]:i.ZERO,[jp]:i.ONE,[Kp]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[nm]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[Jp]:i.DST_ALPHA,[Zp]:i.ONE_MINUS_SRC_COLOR,[ko]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[im]:i.CONSTANT_COLOR,[rm]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[am]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(I,pe,ae,J,ce,we,je,gt,hn,it){if(I===_i){f===!0&&(qe(i.BLEND),f=!1);return}if(f===!1&&(Ae(i.BLEND),f=!0),I!==Xp){if(I!==x||it!==k){if((v!==Hi||y!==Hi)&&(i.blendEquation(i.FUNC_ADD),v=Hi,y=Hi),it)switch(I){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.ONE,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,T=null,A=null,L=null,E.set(0,0,0),C=0,x=I,k=it}return}ce=ce||pe,we=we||ae,je=je||J,(pe!==v||ce!==y)&&(i.blendEquationSeparate(w[pe],w[ce]),v=pe,y=ce),(ae!==M||J!==T||we!==A||je!==L)&&(i.blendFuncSeparate(U[ae],U[J],U[we],U[je]),M=ae,T=J,A=we,L=je),(gt.equals(E)===!1||hn!==C)&&(i.blendColor(gt.r,gt.g,gt.b,hn),E.copy(gt),C=hn),x=I,k=!1}function me(I,pe){I.side===$n?qe(i.CULL_FACE):Ae(i.CULL_FACE);let ae=I.side===Kt;pe&&(ae=!ae),de(ae),I.blending===Rr&&I.transparent===!1?Q(_i):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const J=I.stencilWrite;c.setTest(J),J&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(I){$!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),$=I)}function ye(I){I!==Gp?(Ae(i.CULL_FACE),I!==j&&(I===cc?i.cullFace(i.BACK):I===Vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),j=I}function He(I){I!==D&&(Z&&i.lineWidth(I),D=I)}function _t(I,pe,ae){I?(Ae(i.POLYGON_OFFSET_FILL),(O!==pe||W!==ae)&&(i.polygonOffset(pe,ae),O=pe,W=ae)):qe(i.POLYGON_OFFSET_FILL)}function We(I){I?Ae(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+H-1),N!==I&&(i.activeTexture(I),N=I)}function S(I,pe,ae){ae===void 0&&(N===null?ae=i.TEXTURE0+H-1:ae=N);let J=Y[ae];J===void 0&&(J={type:void 0,texture:void 0},Y[ae]=J),(J.type!==I||J.texture!==pe)&&(N!==ae&&(i.activeTexture(ae),N=ae),i.bindTexture(I,pe||Me[I]),J.type=I,J.texture=pe)}function B(){const I=Y[N];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){ue.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function Pe(I){Se.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Se.copy(I))}function Te(I,pe){let ae=h.get(pe);ae===void 0&&(ae=new WeakMap,h.set(pe,ae));let J=ae.get(I);J===void 0&&(J=i.getUniformBlockIndex(pe,I.name),ae.set(I,J))}function ve(I,pe){const J=h.get(pe).get(I);u.get(pe)!==J&&(i.uniformBlockBinding(pe,J,I.__bindingPointIndex),u.set(pe,J))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},N=null,Y={},m={},g=new WeakMap,_=[],p=null,f=!1,x=null,v=null,M=null,T=null,y=null,A=null,L=null,E=new Qe(0,0,0),C=0,k=!1,$=null,j=null,D=null,O=null,W=null,ue.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:qe,bindFramebuffer:Ce,drawBuffers:z,useProgram:P,setBlending:Q,setMaterial:me,setFlipSided:de,setCullFace:ye,setLineWidth:He,setPolygonOffset:_t,setScissorTest:We,activeTexture:b,bindTexture:S,unbindTexture:B,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:se,texImage3D:Ze,updateUBOMapping:Te,uniformBlockBinding:ve,texStorage2D:Le,texStorage3D:$e,texSubImage2D:re,texSubImage3D:xe,compressedTexSubImage2D:le,compressedTexSubImage3D:_e,scissor:Ne,viewport:Pe,reset:Ye}}function zx(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,S){return f?new OffscreenCanvas(b,S):gs("canvas")}function v(b,S,B,te){let ne=1;if((b.width>te||b.height>te)&&(ne=te/Math.max(b.width,b.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=S?Xo:Math.floor,xe=re(ne*b.width),le=re(ne*b.height);_===void 0&&(_=x(xe,le));const _e=B?x(xe,le):_;return _e.width=xe,_e.height=le,_e.getContext("2d").drawImage(b,0,0,xe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+xe+"x"+le+")."),_e}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return Wc(b.width)&&Wc(b.height)}function T(b){return o?!1:b.wrapS!==wn||b.wrapT!==wn||b.minFilter!==Vt&&b.minFilter!==at}function y(b,S){return b.generateMipmaps&&S&&b.minFilter!==Vt&&b.minFilter!==at}function A(b){i.generateMipmap(b)}function L(b,S,B,te,ne=!1){if(o===!1)return S;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=S;if(S===i.RED&&(B===i.FLOAT&&(re=i.R32F),B===i.HALF_FLOAT&&(re=i.R16F),B===i.UNSIGNED_BYTE&&(re=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(re=i.R8UI),B===i.UNSIGNED_SHORT&&(re=i.R16UI),B===i.UNSIGNED_INT&&(re=i.R32UI),B===i.BYTE&&(re=i.R8I),B===i.SHORT&&(re=i.R16I),B===i.INT&&(re=i.R32I)),S===i.RG&&(B===i.FLOAT&&(re=i.RG32F),B===i.HALF_FLOAT&&(re=i.RG16F),B===i.UNSIGNED_BYTE&&(re=i.RG8)),S===i.RGBA){const xe=ne?pa:Je.getTransfer(te);B===i.FLOAT&&(re=i.RGBA32F),B===i.HALF_FLOAT&&(re=i.RGBA16F),B===i.UNSIGNED_BYTE&&(re=xe===rt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function E(b,S,B){return y(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==Vt&&b.minFilter!==at?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function C(b){return b===Vt||b===mc||b===Wa?i.NEAREST:i.LINEAR}function k(b){const S=b.target;S.removeEventListener("dispose",k),j(S),S.isVideoTexture&&g.delete(S)}function $(b){const S=b.target;S.removeEventListener("dispose",$),O(S)}function j(b){const S=n.get(b);if(S.__webglInit===void 0)return;const B=b.source,te=p.get(B);if(te){const ne=te[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(b),Object.keys(te).length===0&&p.delete(B)}n.remove(b)}function D(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const B=b.source,te=p.get(B);delete te[S.__cacheKey],a.memory.textures--}function O(b){const S=b.texture,B=n.get(b),te=n.get(S);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(B.__webglFramebuffer[ne]))for(let re=0;re<B.__webglFramebuffer[ne].length;re++)i.deleteFramebuffer(B.__webglFramebuffer[ne][re]);else i.deleteFramebuffer(B.__webglFramebuffer[ne]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[ne])}else{if(Array.isArray(B.__webglFramebuffer))for(let ne=0;ne<B.__webglFramebuffer.length;ne++)i.deleteFramebuffer(B.__webglFramebuffer[ne]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ne=0;ne<B.__webglColorRenderbuffer.length;ne++)B.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,re=S.length;ne<re;ne++){const xe=n.get(S[ne]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(b)}let W=0;function H(){W=0}function Z(){const b=W;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),W+=1,b}function K(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function ee(b,S){const B=n.get(b);if(b.isVideoTexture&&_t(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(B,b,S);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function N(b,S){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Ae(B,b,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function Y(b,S){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Ae(B,b,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function oe(b,S){const B=n.get(b);if(b.version>0&&B.__version!==b.version){qe(B,b,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const ie={[Ho]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},ue={[Vt]:i.NEAREST,[mc]:i.NEAREST_MIPMAP_NEAREST,[Wa]:i.NEAREST_MIPMAP_LINEAR,[at]:i.LINEAR,[Sm]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},Se={[Um]:i.NEVER,[Gm]:i.ALWAYS,[Om]:i.LESS,[km]:i.LEQUAL,[Fm]:i.EQUAL,[Hm]:i.GEQUAL,[Bm]:i.GREATER,[zm]:i.NOTEQUAL};function Oe(b,S,B){if(B?(i.texParameteri(b,i.TEXTURE_WRAP_S,ie[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ie[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ie[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ue[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ue[S.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==wn||S.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,C(S.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==Vt&&S.minFilter!==at&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Vt||S.minFilter!==Wa&&S.minFilter!==ms||S.type===fi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===_s&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Me(b,S){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",k));const te=S.source;let ne=p.get(te);ne===void 0&&(ne={},p.set(te,ne));const re=K(S);if(re!==b.__cacheKey){ne[re]===void 0&&(ne[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ne[re].usedTimes++;const xe=ne[b.__cacheKey];xe!==void 0&&(ne[b.__cacheKey].usedTimes--,xe.usedTimes===0&&D(S)),b.__cacheKey=re,b.__webglTexture=ne[re].texture}return B}function Ae(b,S,B){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);const ne=Me(b,S),re=S.source;t.bindTexture(te,b.__webglTexture,i.TEXTURE0+B);const xe=n.get(re);if(re.version!==xe.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);const le=Je.getPrimaries(Je.workingColorSpace),_e=S.colorSpace===_n?null:Je.getPrimaries(S.colorSpace),Le=S.colorSpace===_n||le===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const $e=T(S)&&M(S.image)===!1;let se=v(S.image,$e,!1,u);se=We(S,se);const Ze=M(se)||o,Ne=s.convert(S.format,S.colorSpace);let Pe=s.convert(S.type),Te=L(S.internalFormat,Ne,Pe,S.colorSpace,S.isVideoTexture);Oe(te,S,Ze);let ve;const Ye=S.mipmaps,I=o&&S.isVideoTexture!==!0,pe=xe.__version===void 0||ne===!0,ae=E(S,se,Ze);if(S.isDepthTexture)Te=i.DEPTH_COMPONENT,o?S.type===fi?Te=i.DEPTH_COMPONENT32F:S.type===ui?Te=i.DEPTH_COMPONENT24:S.type===qi?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:S.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===$i&&Te===i.DEPTH_COMPONENT&&S.type!==wl&&S.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ui,Pe=s.convert(S.type)),S.format===Or&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,S.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=qi,Pe=s.convert(S.type))),pe&&(I?t.texStorage2D(i.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,Ne,Pe,null));else if(S.isDataTexture)if(Ye.length>0&&Ze){I&&pe&&t.texStorage2D(i.TEXTURE_2D,ae,Te,Ye[0].width,Ye[0].height);for(let J=0,ce=Ye.length;J<ce;J++)ve=Ye[J],I?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ve.width,ve.height,Ne,Pe,ve.data):t.texImage2D(i.TEXTURE_2D,J,Te,ve.width,ve.height,0,Ne,Pe,ve.data);S.generateMipmaps=!1}else I?(pe&&t.texStorage2D(i.TEXTURE_2D,ae,Te,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,Ne,Pe,se.data)):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,Ne,Pe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Te,Ye[0].width,Ye[0].height,se.depth);for(let J=0,ce=Ye.length;J<ce;J++)ve=Ye[J],S.format!==Rn?Ne!==null?I?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ve.width,ve.height,se.depth,Ne,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Te,ve.width,ve.height,se.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ve.width,ve.height,se.depth,Ne,Pe,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Te,ve.width,ve.height,se.depth,0,Ne,Pe,ve.data)}else{I&&pe&&t.texStorage2D(i.TEXTURE_2D,ae,Te,Ye[0].width,Ye[0].height);for(let J=0,ce=Ye.length;J<ce;J++)ve=Ye[J],S.format!==Rn?Ne!==null?I?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ve.width,ve.height,Ne,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Te,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ve.width,ve.height,Ne,Pe,ve.data):t.texImage2D(i.TEXTURE_2D,J,Te,ve.width,ve.height,0,Ne,Pe,ve.data)}else if(S.isDataArrayTexture)I?(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Te,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ne,Pe,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,Ne,Pe,se.data);else if(S.isData3DTexture)I?(pe&&t.texStorage3D(i.TEXTURE_3D,ae,Te,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ne,Pe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,Ne,Pe,se.data);else if(S.isFramebufferTexture){if(pe)if(I)t.texStorage2D(i.TEXTURE_2D,ae,Te,se.width,se.height);else{let J=se.width,ce=se.height;for(let we=0;we<ae;we++)t.texImage2D(i.TEXTURE_2D,we,Te,J,ce,0,Ne,Pe,null),J>>=1,ce>>=1}}else if(Ye.length>0&&Ze){I&&pe&&t.texStorage2D(i.TEXTURE_2D,ae,Te,Ye[0].width,Ye[0].height);for(let J=0,ce=Ye.length;J<ce;J++)ve=Ye[J],I?t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ne,Pe,ve):t.texImage2D(i.TEXTURE_2D,J,Te,Ne,Pe,ve);S.generateMipmaps=!1}else I?(pe&&t.texStorage2D(i.TEXTURE_2D,ae,Te,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,Pe,se)):t.texImage2D(i.TEXTURE_2D,0,Te,Ne,Pe,se);y(S,Ze)&&A(te),xe.__version=re.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function qe(b,S,B){if(S.image.length!==6)return;const te=Me(b,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const re=n.get(ne);if(ne.version!==re.__version||te===!0){t.activeTexture(i.TEXTURE0+B);const xe=Je.getPrimaries(Je.workingColorSpace),le=S.colorSpace===_n?null:Je.getPrimaries(S.colorSpace),_e=S.colorSpace===_n||xe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,$e=S.image[0]&&S.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!Le&&!$e?se[J]=v(S.image[J],!1,!0,c):se[J]=$e?S.image[J].image:S.image[J],se[J]=We(S,se[J]);const Ze=se[0],Ne=M(Ze)||o,Pe=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),ve=L(S.internalFormat,Pe,Te,S.colorSpace),Ye=o&&S.isVideoTexture!==!0,I=re.__version===void 0||te===!0;let pe=E(S,Ze,Ne);Oe(i.TEXTURE_CUBE_MAP,S,Ne);let ae;if(Le){Ye&&I&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ve,Ze.width,Ze.height);for(let J=0;J<6;J++){ae=se[J].mipmaps;for(let ce=0;ce<ae.length;ce++){const we=ae[ce];S.format!==Rn?Pe!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,we.width,we.height,Pe,Te,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,ve,we.width,we.height,0,Pe,Te,we.data)}}}else{ae=S.mipmaps,Ye&&I&&(ae.length>0&&pe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ve,se[0].width,se[0].height));for(let J=0;J<6;J++)if($e){Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,Pe,Te,se[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ve,se[J].width,se[J].height,0,Pe,Te,se[J].data);for(let ce=0;ce<ae.length;ce++){const je=ae[ce].image[J].image;Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,je.width,je.height,Pe,Te,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,ve,je.width,je.height,0,Pe,Te,je.data)}}else{Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,Te,se[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ve,Pe,Te,se[J]);for(let ce=0;ce<ae.length;ce++){const we=ae[ce];Ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Pe,Te,we.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,ve,Pe,Te,we.image[J])}}}y(S,Ne)&&A(i.TEXTURE_CUBE_MAP),re.__version=ne.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ce(b,S,B,te,ne,re){const xe=s.convert(B.format,B.colorSpace),le=s.convert(B.type),_e=L(B.internalFormat,xe,le,B.colorSpace);if(!n.get(S).__hasExternalTextures){const $e=Math.max(1,S.width>>re),se=Math.max(1,S.height>>re);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,_e,$e,se,S.depth,0,xe,le,null):t.texImage2D(ne,re,_e,$e,se,0,xe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),He(S)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ne,n.get(B).__webglTexture,0,ye(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ne,n.get(B).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function z(b,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||He(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===fi?te=i.DEPTH_COMPONENT32F:ne.type===ui&&(te=i.DEPTH_COMPONENT24));const re=ye(S);He(S)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,te,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,te,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const te=ye(S);B&&He(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):He(S)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<te.length;ne++){const re=te[ne],xe=s.convert(re.format,re.colorSpace),le=s.convert(re.type),_e=L(re.internalFormat,xe,le,re.colorSpace),Le=ye(S);B&&He(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,_e,S.width,S.height):He(S)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,_e,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_e,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function P(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ne=ye(S);if(S.depthTexture.format===$i)He(S)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===Or)He(S)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function w(b){const S=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");P(S.__webglFramebuffer,b)}else if(B){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=i.createRenderbuffer(),z(S.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),z(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function U(b,S,B){const te=n.get(b);S!==void 0&&Ce(te.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&w(b)}function Q(b){const S=b.texture,B=n.get(b),te=n.get(S);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,a.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,xe=M(b)||o;if(ne){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let _e=0;_e<S.mipmaps.length;_e++)B.__webglFramebuffer[le][_e]=i.createFramebuffer()}else B.__webglFramebuffer[le]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)B.__webglFramebuffer[le]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(re)if(r.drawBuffers){const le=b.texture;for(let _e=0,Le=le.length;_e<Le;_e++){const $e=n.get(le[_e]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&He(b)===!1){const le=re?S:[S];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _e=0;_e<le.length;_e++){const Le=le[_e];B.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[_e]);const $e=s.convert(Le.format,Le.colorSpace),se=s.convert(Le.type),Ze=L(Le.internalFormat,$e,se,Le.colorSpace,b.isXRRenderTarget===!0),Ne=ye(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Ze,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,B.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),z(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,S,xe);for(let le=0;le<6;le++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Ce(B.__webglFramebuffer[le][_e],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e);else Ce(B.__webglFramebuffer[le],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);y(S,xe)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const le=b.texture;for(let _e=0,Le=le.length;_e<Le;_e++){const $e=le[_e],se=n.get($e);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),Oe(i.TEXTURE_2D,$e,xe),Ce(B.__webglFramebuffer,b,$e,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),y($e,xe)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),Oe(le,S,xe),o&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Ce(B.__webglFramebuffer[_e],b,S,i.COLOR_ATTACHMENT0,le,_e);else Ce(B.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,le,0);y(S,xe)&&A(le),t.unbindTexture()}b.depthBuffer&&w(b)}function me(b){const S=M(b)||o,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,ne=B.length;te<ne;te++){const re=B[te];if(y(re,S)){const xe=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(re).__webglTexture;t.bindTexture(xe,le),A(xe),t.unbindTexture()}}}function de(b){if(o&&b.samples>0&&He(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,te=b.height;let ne=i.COLOR_BUFFER_BIT;const re=[],xe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(b),_e=b.isWebGLMultipleRenderTargets===!0;if(_e)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){re.push(i.COLOR_ATTACHMENT0+Le),b.depthBuffer&&re.push(xe);const $e=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if($e===!1&&(b.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),_e&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Le]),$e===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xe])),_e){const se=n.get(S[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,B,te,0,0,B,te,ne,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,le.__webglColorRenderbuffer[Le]);const $e=n.get(S[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function ye(b){return Math.min(h,b.samples)}function He(b){const S=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(b){const S=a.render.frame;g.get(b)!==S&&(g.set(b,S),b.update())}function We(b,S){const B=b.colorSpace,te=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Vo||B!==Qn&&B!==_n&&(Je.getTransfer(B)===rt?o===!1?e.has("EXT_sRGB")===!0&&te===Rn?(b.format=Vo,b.minFilter=at,b.generateMipmaps=!1):S=Qf.sRGBToLinear(S):(te!==Rn||ne!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.setTexture2D=ee,this.setTexture2DArray=N,this.setTexture3D=Y,this.setTextureCube=oe,this.rebindTextures=U,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=He}function Hx(i,e,t){const n=t.isWebGL2;function r(s,a=_n){let o;const l=Je.getTransfer(a);if(s===vi)return i.UNSIGNED_BYTE;if(s===Yf)return i.UNSIGNED_SHORT_4_4_4_4;if(s===qf)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Mm)return i.BYTE;if(s===ym)return i.SHORT;if(s===wl)return i.UNSIGNED_SHORT;if(s===Xf)return i.INT;if(s===ui)return i.UNSIGNED_INT;if(s===fi)return i.FLOAT;if(s===_s)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Tm)return i.ALPHA;if(s===Rn)return i.RGBA;if(s===bm)return i.LUMINANCE;if(s===Am)return i.LUMINANCE_ALPHA;if(s===$i)return i.DEPTH_COMPONENT;if(s===Or)return i.DEPTH_STENCIL;if(s===Vo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===wm)return i.RED;if(s===$f)return i.RED_INTEGER;if(s===Rm)return i.RG;if(s===jf)return i.RG_INTEGER;if(s===Kf)return i.RGBA_INTEGER;if(s===Xa||s===Ya||s===qa||s===$a)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Xa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Xa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ya)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_c||s===gc||s===vc||s===xc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===_c)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ec||s===Sc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ec)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Sc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mc||s===yc||s===Tc||s===bc||s===Ac||s===wc||s===Rc||s===Cc||s===Lc||s===Pc||s===Dc||s===Ic||s===Nc||s===Uc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Mc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ac)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ic)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ja||s===Oc||s===Fc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ja)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lm||s===kc||s===Bc||s===zc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ja)return o.COMPRESSED_RED_RGTC1_EXT;if(s===kc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Gx extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class na extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new na;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wx extends Xt{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:$i,u!==$i&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$i&&(n=ui),n===void 0&&u===Or&&(n=qi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xx extends Yr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const x=[],v=[],M=new bn;M.layers.enable(1),M.viewport=new yt;const T=new bn;T.layers.enable(2),T.viewport=new yt;const y=[M,T],A=new Gx;A.layers.enable(1),A.layers.enable(2);let L=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Y=x[N];return Y===void 0&&(Y=new So,x[N]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(N){let Y=x[N];return Y===void 0&&(Y=new So,x[N]=Y),Y.getGripSpace()},this.getHand=function(N){let Y=x[N];return Y===void 0&&(Y=new So,x[N]=Y),Y.getHandSpace()};function C(N){const Y=v.indexOf(N.inputSource);if(Y===-1)return;const oe=x[Y];oe!==void 0&&(oe.update(N.inputSource,N.frame,c||a),oe.dispatchEvent({type:N.type,data:N.inputSource}))}function k(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",$);for(let N=0;N<x.length;N++){const Y=v[N];Y!==null&&(v[N]=null,x[N].disconnect(Y))}L=null,E=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,f=null,ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",k),r.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),f=new tr(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,oe=null,ie=null;_.depth&&(ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?Or:$i,oe=_.stencil?qi:ui);const ue={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),f=new tr(d.textureWidth,d.textureHeight,{format:Rn,type:vi,depthTexture:new Wx(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Se=e.properties.get(f);Se.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(N){for(let Y=0;Y<N.removed.length;Y++){const oe=N.removed[Y],ie=v.indexOf(oe);ie>=0&&(v[ie]=null,x[ie].disconnect(oe))}for(let Y=0;Y<N.added.length;Y++){const oe=N.added[Y];let ie=v.indexOf(oe);if(ie===-1){for(let Se=0;Se<x.length;Se++)if(Se>=v.length){v.push(oe),ie=Se;break}else if(v[Se]===null){v[Se]=oe,ie=Se;break}if(ie===-1)break}const ue=x[ie];ue&&ue.connect(oe)}}const j=new V,D=new V;function O(N,Y,oe){j.setFromMatrixPosition(Y.matrixWorld),D.setFromMatrixPosition(oe.matrixWorld);const ie=j.distanceTo(D),ue=Y.projectionMatrix.elements,Se=oe.projectionMatrix.elements,Oe=ue[14]/(ue[10]-1),Me=ue[14]/(ue[10]+1),Ae=(ue[9]+1)/ue[5],qe=(ue[9]-1)/ue[5],Ce=(ue[8]-1)/ue[0],z=(Se[8]+1)/Se[0],P=Oe*Ce,w=Oe*z,U=ie/(-Ce+z),Q=U*-Ce;Y.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Q),N.translateZ(U),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const me=Oe+U,de=Me+U,ye=P-Q,He=w+(ie-Q),_t=Ae*Me/de*me,We=qe*Me/de*me;N.projectionMatrix.makePerspective(ye,He,_t,We,me,de),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function W(N,Y){Y===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Y.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;A.near=T.near=M.near=N.near,A.far=T.far=M.far=N.far,(L!==A.near||E!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,E=A.far);const Y=N.parent,oe=A.cameras;W(A,Y);for(let ie=0;ie<oe.length;ie++)W(oe[ie],Y);oe.length===2?O(A,M,T):A.projectionMatrix.copy(M.projectionMatrix),H(N,A,Y)};function H(N,Y,oe){oe===null?N.matrix.copy(Y.matrixWorld):(N.matrix.copy(oe.matrixWorld),N.matrix.invert(),N.matrix.multiply(Y.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Y.projectionMatrix),N.projectionMatrixInverse.copy(Y.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Wo*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let Z=null;function K(N,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ie=!1;oe.length!==A.cameras.length&&(A.cameras.length=0,ie=!0);for(let ue=0;ue<oe.length;ue++){const Se=oe[ue];let Oe=null;if(m!==null)Oe=m.getViewport(Se);else{const Ae=h.getViewSubImage(d,Se);Oe=Ae.viewport,ue===0&&(e.setRenderTargetTextures(f,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(f))}let Me=y[ue];Me===void 0&&(Me=new bn,Me.layers.enable(ue),Me.viewport=new yt,y[ue]=Me),Me.matrix.fromArray(Se.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Se.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ue===0&&(A.matrix.copy(Me.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ie===!0&&A.cameras.push(Me)}}for(let oe=0;oe<x.length;oe++){const ie=v[oe],ue=x[oe];ie!==null&&ue!==void 0&&ue.update(ie,Y,c||a)}Z&&Z(N,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ee=new fh;ee.setAnimationLoop(K),this.setAnimationLoop=function(N){Z=N},this.dispose=function(){}}}function Yx(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,oh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,x,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,x,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Kt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Kt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,x,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const x=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function qx(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=r[x.id];M===void 0&&(g(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(x,T);const y=e.render.frame;s[x.id]!==y&&(d(x),s[x.id]=y)}function u(x){const v=h();x.__bindingPointIndex=v;const M=i.createBuffer(),T=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],M=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let y=0,A=M.length;y<A;y++){const L=M[y];if(m(L,y,T)===!0){const E=L.__offset,C=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let $=0;$<C.length;$++){const j=C[$],D=_(j);typeof j=="number"?(L.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,E+k,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=j.elements[0],L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=j.elements[0],L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=j.elements[0]):(j.toArray(L.__data,k),k+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,L.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,v,M){const T=x.value;if(M[v]===void 0){if(typeof T=="number")M[v]=T;else{const y=Array.isArray(T)?T:[T],A=[];for(let L=0;L<y.length;L++)A.push(y[L].clone());M[v]=A}return!0}else if(typeof T=="number"){if(M[v]!==T)return M[v]=T,!0}else{const y=Array.isArray(M[v])?M[v]:[M[v]],A=Array.isArray(T)?T:[T];for(let L=0;L<y.length;L++){const E=y[L];if(E.equals(A[L])===!1)return E.copy(A[L]),!0}}return!1}function g(x){const v=x.uniforms;let M=0;const T=16;let y=0;for(let A=0,L=v.length;A<L;A++){const E=v[A],C={boundary:0,storage:0},k=Array.isArray(E.value)?E.value:[E.value];for(let $=0,j=k.length;$<j;$++){const D=k[$],O=_(D);C.boundary+=O.boundary,C.storage+=O.storage}if(E.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,A>0){y=M%T;const $=T-y;y!==0&&$-C.boundary<0&&(M+=T-y,E.__offset=M)}M+=C.storage}return y=M%T,y>0&&(M+=T-y),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class gh{constructor(e={}){const{canvas:t=Wm(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const v=this;let M=!1,T=0,y=0,A=null,L=-1,E=null;const C=new yt,k=new yt;let $=null;const j=new Qe(0);let D=0,O=t.width,W=t.height,H=1,Z=null,K=null;const ee=new yt(0,0,O,W),N=new yt(0,0,O,W);let Y=!1;const oe=new uh;let ie=!1,ue=!1,Se=null;const Oe=new Dt,Me=new nt,Ae=new V,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return A===null?H:1}let z=n;function P(R,F){for(let G=0;G<R.length;G++){const X=R[G],q=t.getContext(X,F);if(q!==null)return q}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Al}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",pe,!1),z===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),z=P(F,R),z===null)throw P(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let w,U,Q,me,de,ye,He,_t,We,b,S,B,te,ne,re,xe,le,_e,Le,$e,se,Ze,Ne,Pe;function Te(){w=new i0(z),U=new Zv(z,w,e),w.init(U),Ze=new Hx(z,w,U),Q=new Bx(z,w,U),me=new a0(z),de=new bx,ye=new zx(z,w,Q,de,U,Ze,me),He=new Qv(v),_t=new n0(v),We=new __(z,U),Ne=new jv(z,w,We,U),b=new r0(z,We,me,Ne),S=new u0(z,b,We,me),Le=new c0(z,U,ye),xe=new Jv(de),B=new Tx(v,He,_t,w,U,Ne,xe),te=new Yx(v,de),ne=new wx,re=new Ix(w,U),_e=new $v(v,He,_t,Q,S,d,l),le=new kx(v,S,U),Pe=new qx(z,me,U,Q),$e=new Kv(z,w,me,U),se=new s0(z,w,me,U),me.programs=B.programs,v.capabilities=U,v.extensions=w,v.properties=de,v.renderLists=ne,v.shadowMap=le,v.state=Q,v.info=me}Te();const ve=new Xx(v,z);this.xr=ve,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=w.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=w.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(O,W,!1))},this.getSize=function(R){return R.set(O,W)},this.setSize=function(R,F,G=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,W=F,t.width=Math.floor(R*H),t.height=Math.floor(F*H),G===!0&&(t.style.width=R+"px",t.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(O*H,W*H).floor()},this.setDrawingBufferSize=function(R,F,G){O=R,W=F,H=G,t.width=Math.floor(R*G),t.height=Math.floor(F*G),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,F,G,X){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,F,G,X),Q.viewport(C.copy(ee).multiplyScalar(H).floor())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,F,G,X){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,F,G,X),Q.scissor(k.copy(N).multiplyScalar(H).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(R){Q.setScissorTest(Y=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(R=!0,F=!0,G=!0){let X=0;if(R){let q=!1;if(A!==null){const ge=A.texture.format;q=ge===Kf||ge===jf||ge===$f}if(q){const ge=A.texture.type,Ee=ge===vi||ge===ui||ge===wl||ge===qi||ge===Yf||ge===qf,Re=_e.getClearColor(),De=_e.getClearAlpha(),Be=Re.r,Ue=Re.g,Fe=Re.b;Ee?(m[0]=Be,m[1]=Ue,m[2]=Fe,m[3]=De,z.clearBufferuiv(z.COLOR,0,m)):(g[0]=Be,g[1]=Ue,g[2]=Fe,g[3]=De,z.clearBufferiv(z.COLOR,0,g))}else X|=z.COLOR_BUFFER_BIT}F&&(X|=z.DEPTH_BUFFER_BIT),G&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ne.dispose(),re.dispose(),de.dispose(),He.dispose(),_t.dispose(),S.dispose(),Ne.dispose(),Pe.dispose(),B.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",hn),ve.removeEventListener("sessionend",it),Se&&(Se.dispose(),Se=null),Bt.stop()};function Ye(R){R.preventDefault(),M=!0}function I(){M=!1;const R=me.autoReset,F=le.enabled,G=le.autoUpdate,X=le.needsUpdate,q=le.type;Te(),me.autoReset=R,le.enabled=F,le.autoUpdate=G,le.needsUpdate=X,le.type=q}function pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const F=R.target;F.removeEventListener("dispose",ae),J(F)}function J(R){ce(R),de.remove(R)}function ce(R){const F=de.get(R).programs;F!==void 0&&(F.forEach(function(G){B.releaseProgram(G)}),R.isShaderMaterial&&B.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,G,X,q,ge){F===null&&(F=qe);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,Re=Qd(R,F,G,X,q);Q.setMaterial(X,Ee);let De=G.index,Be=1;if(X.wireframe===!0){if(De=b.getWireframeAttribute(G),De===void 0)return;Be=2}const Ue=G.drawRange,Fe=G.attributes.position;let pt=Ue.start*Be,tn=(Ue.start+Ue.count)*Be;ge!==null&&(pt=Math.max(pt,ge.start*Be),tn=Math.min(tn,(ge.start+ge.count)*Be)),De!==null?(pt=Math.max(pt,0),tn=Math.min(tn,De.count)):Fe!=null&&(pt=Math.max(pt,0),tn=Math.min(tn,Fe.count));const wt=tn-pt;if(wt<0||wt===1/0)return;Ne.setup(q,X,Re,G,De);let kn,ct=$e;if(De!==null&&(kn=We.get(De),ct=se,ct.setIndex(kn)),q.isMesh)X.wireframe===!0?(Q.setLineWidth(X.wireframeLinewidth*Ce()),ct.setMode(z.LINES)):ct.setMode(z.TRIANGLES);else if(q.isLine){let Ve=X.linewidth;Ve===void 0&&(Ve=1),Q.setLineWidth(Ve*Ce()),q.isLineSegments?ct.setMode(z.LINES):q.isLineLoop?ct.setMode(z.LINE_LOOP):ct.setMode(z.LINE_STRIP)}else q.isPoints?ct.setMode(z.POINTS):q.isSprite&&ct.setMode(z.TRIANGLES);if(q.isInstancedMesh)ct.renderInstances(pt,wt,q.count);else if(G.isInstancedBufferGeometry){const Ve=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ba=Math.min(G.instanceCount,Ve);ct.renderInstances(pt,wt,Ba)}else ct.render(pt,wt)};function we(R,F,G){R.transparent===!0&&R.side===$n&&R.forceSinglePass===!1?(R.side=Kt,R.needsUpdate=!0,Is(R,F,G),R.side=Mi,R.needsUpdate=!0,Is(R,F,G),R.side=$n):Is(R,F,G)}this.compile=function(R,F,G=null){G===null&&(G=R),p=re.get(G),p.init(),x.push(p),G.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==G&&R.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(v._useLegacyLights);const X=new Set;return R.traverse(function(q){const ge=q.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Re=ge[Ee];we(Re,G,q),X.add(Re)}else we(ge,G,q),X.add(ge)}),x.pop(),p=null,X},this.compileAsync=function(R,F,G=null){const X=this.compile(R,F,G);return new Promise(q=>{function ge(){if(X.forEach(function(Ee){de.get(Ee).currentProgram.isReady()&&X.delete(Ee)}),X.size===0){q(R);return}setTimeout(ge,10)}w.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let je=null;function gt(R){je&&je(R)}function hn(){Bt.stop()}function it(){Bt.start()}const Bt=new fh;Bt.setAnimationLoop(gt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(R){je=R,ve.setAnimationLoop(R),R===null?Bt.stop():Bt.start()},ve.addEventListener("sessionstart",hn),ve.addEventListener("sessionend",it),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,F,A),p=re.get(R,x.length),p.init(),x.push(p),Oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),oe.setFromProjectionMatrix(Oe),ue=this.localClippingEnabled,ie=xe.init(this.clippingPlanes,ue),_=ne.get(R,f.length),_.init(),f.push(_),Ln(R,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Z,K),this.info.render.frame++,ie===!0&&xe.beginShadows();const G=p.state.shadowsArray;if(le.render(G,R,F),ie===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(_,R),p.setupLights(v._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let q=0,ge=X.length;q<ge;q++){const Ee=X[q];ic(_,R,Ee,Ee.viewport)}}else ic(_,R,F);A!==null&&(ye.updateMultisampleRenderTarget(A),ye.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,F),Ne.resetDefaultState(),L=-1,E=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Ln(R,F,G,X){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||oe.intersectsSprite(R)){X&&Ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Oe);const Ee=S.update(R),Re=R.material;Re.visible&&_.push(R,Ee,Re,G,Ae.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||oe.intersectsObject(R))){const Ee=S.update(R),Re=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ae.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ae.copy(Ee.boundingSphere.center)),Ae.applyMatrix4(R.matrixWorld).applyMatrix4(Oe)),Array.isArray(Re)){const De=Ee.groups;for(let Be=0,Ue=De.length;Be<Ue;Be++){const Fe=De[Be],pt=Re[Fe.materialIndex];pt&&pt.visible&&_.push(R,Ee,pt,G,Ae.z,Fe)}}else Re.visible&&_.push(R,Ee,Re,G,Ae.z,null)}}const ge=R.children;for(let Ee=0,Re=ge.length;Ee<Re;Ee++)Ln(ge[Ee],F,G,X)}function ic(R,F,G,X){const q=R.opaque,ge=R.transmissive,Ee=R.transparent;p.setupLightsView(G),ie===!0&&xe.setGlobalState(v.clippingPlanes,G),ge.length>0&&Jd(q,ge,F,G),X&&Q.viewport(C.copy(X)),q.length>0&&Ds(q,F,G),ge.length>0&&Ds(ge,F,G),Ee.length>0&&Ds(Ee,F,G),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Jd(R,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const ge=U.isWebGL2;Se===null&&(Se=new tr(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")?_s:vi,minFilter:ms,samples:ge?4:0})),v.getDrawingBufferSize(Me),ge?Se.setSize(Me.x,Me.y):Se.setSize(Xo(Me.x),Xo(Me.y));const Ee=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(j),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Re=v.toneMapping;v.toneMapping=gi,Ds(R,G,X),ye.updateMultisampleRenderTarget(Se),ye.updateRenderTargetMipmap(Se);let De=!1;for(let Be=0,Ue=F.length;Be<Ue;Be++){const Fe=F[Be],pt=Fe.object,tn=Fe.geometry,wt=Fe.material,kn=Fe.group;if(wt.side===$n&&pt.layers.test(X.layers)){const ct=wt.side;wt.side=Kt,wt.needsUpdate=!0,rc(pt,G,X,tn,wt,kn),wt.side=ct,wt.needsUpdate=!0,De=!0}}De===!0&&(ye.updateMultisampleRenderTarget(Se),ye.updateRenderTargetMipmap(Se)),v.setRenderTarget(Ee),v.setClearColor(j,D),v.toneMapping=Re}function Ds(R,F,G){const X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,ge=R.length;q<ge;q++){const Ee=R[q],Re=Ee.object,De=Ee.geometry,Be=X===null?Ee.material:X,Ue=Ee.group;Re.layers.test(G.layers)&&rc(Re,F,G,De,Be,Ue)}}function rc(R,F,G,X,q,ge){R.onBeforeRender(v,F,G,X,q,ge),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,F,G,X,R,ge),q.transparent===!0&&q.side===$n&&q.forceSinglePass===!1?(q.side=Kt,q.needsUpdate=!0,v.renderBufferDirect(G,F,X,q,R,ge),q.side=Mi,q.needsUpdate=!0,v.renderBufferDirect(G,F,X,q,R,ge),q.side=$n):v.renderBufferDirect(G,F,X,q,R,ge),R.onAfterRender(v,F,G,X,q,ge)}function Is(R,F,G){F.isScene!==!0&&(F=qe);const X=de.get(R),q=p.state.lights,ge=p.state.shadowsArray,Ee=q.state.version,Re=B.getParameters(R,q.state,ge,F,G),De=B.getProgramCacheKey(Re);let Be=X.programs;X.environment=R.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(R.isMeshStandardMaterial?_t:He).get(R.envMap||X.environment),Be===void 0&&(R.addEventListener("dispose",ae),Be=new Map,X.programs=Be);let Ue=Be.get(De);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===Ee)return ac(R,Re),Ue}else Re.uniforms=B.getUniforms(R),R.onBuild(G,Re,v),R.onBeforeCompile(Re,v),Ue=B.acquireProgram(Re,De),Be.set(De,Ue),X.uniforms=Re.uniforms;const Fe=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=xe.uniform),ac(R,Re),X.needsLights=tp(R),X.lightsStateVersion=Ee,X.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMap.value=q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotShadowMap.value=q.state.spotShadowMap,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMap.value=q.state.pointShadowMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function sc(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=la.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function ac(R,F){const G=de.get(R);G.outputColorSpace=F.outputColorSpace,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Qd(R,F,G,X,q){F.isScene!==!0&&(F=qe),ye.resetTextureUnits();const ge=F.fog,Ee=X.isMeshStandardMaterial?F.environment:null,Re=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qn,De=(X.isMeshStandardMaterial?_t:He).get(X.envMap||Ee),Be=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!G.morphAttributes.position,pt=!!G.morphAttributes.normal,tn=!!G.morphAttributes.color;let wt=gi;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=v.toneMapping);const kn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=kn!==void 0?kn.length:0,Ve=de.get(X),Ba=p.state.lights;if(ie===!0&&(ue===!0||R!==E)){const nn=R===E&&X.id===L;xe.setState(X,R,nn)}let vt=!1;X.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ba.state.version||Ve.outputColorSpace!==Re||q.isInstancedMesh&&Ve.instancing===!1||!q.isInstancedMesh&&Ve.instancing===!0||q.isSkinnedMesh&&Ve.skinning===!1||!q.isSkinnedMesh&&Ve.skinning===!0||q.isInstancedMesh&&Ve.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ve.instancingColor===!1&&q.instanceColor!==null||Ve.envMap!==De||X.fog===!0&&Ve.fog!==ge||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==xe.numPlanes||Ve.numIntersection!==xe.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==Ue||Ve.morphTargets!==Fe||Ve.morphNormals!==pt||Ve.morphColors!==tn||Ve.toneMapping!==wt||U.isWebGL2===!0&&Ve.morphTargetsCount!==ct)&&(vt=!0):(vt=!0,Ve.__version=X.version);let Li=Ve.currentProgram;vt===!0&&(Li=Is(X,F,q));let oc=!1,Kr=!1,za=!1;const zt=Li.getUniforms(),Pi=Ve.uniforms;if(Q.useProgram(Li.program)&&(oc=!0,Kr=!0,za=!0),X.id!==L&&(L=X.id,Kr=!0),oc||E!==R){zt.setValue(z,"projectionMatrix",R.projectionMatrix),zt.setValue(z,"viewMatrix",R.matrixWorldInverse);const nn=zt.map.cameraPosition;nn!==void 0&&nn.setValue(z,Ae.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&zt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&zt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Kr=!0,za=!0)}if(q.isSkinnedMesh){zt.setOptional(z,q,"bindMatrix"),zt.setOptional(z,q,"bindMatrixInverse");const nn=q.skeleton;nn&&(U.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),zt.setValue(z,"boneTexture",nn.boneTexture,ye),zt.setValue(z,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ha=G.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0&&U.isWebGL2===!0)&&Le.update(q,G,Li),(Kr||Ve.receiveShadow!==q.receiveShadow)&&(Ve.receiveShadow=q.receiveShadow,zt.setValue(z,"receiveShadow",q.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Pi.envMap.value=De,Pi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Kr&&(zt.setValue(z,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&ep(Pi,za),ge&&X.fog===!0&&te.refreshFogUniforms(Pi,ge),te.refreshMaterialUniforms(Pi,X,H,W,Se),la.upload(z,sc(Ve),Pi,ye)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(la.upload(z,sc(Ve),Pi,ye),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&zt.setValue(z,"center",q.center),zt.setValue(z,"modelViewMatrix",q.modelViewMatrix),zt.setValue(z,"normalMatrix",q.normalMatrix),zt.setValue(z,"modelMatrix",q.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const nn=X.uniformsGroups;for(let Ga=0,np=nn.length;Ga<np;Ga++)if(U.isWebGL2){const lc=nn[Ga];Pe.update(lc,Li),Pe.bind(lc,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function ep(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function tp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,F,G){de.get(R.texture).__webglTexture=F,de.get(R.depthTexture).__webglTexture=G;const X=de.get(R);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,F){const G=de.get(R);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,G=0){A=R,T=F,y=G;let X=!0,q=null,ge=!1,Ee=!1;if(R){const De=de.get(R);De.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(z.FRAMEBUFFER,null),X=!1):De.__webglFramebuffer===void 0?ye.setupRenderTarget(R):De.__hasExternalTextures&&ye.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ee=!0);const Ue=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?q=Ue[F][G]:q=Ue[F],ge=!0):U.isWebGL2&&R.samples>0&&ye.useMultisampledRTT(R)===!1?q=de.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?q=Ue[G]:q=Ue,C.copy(R.viewport),k.copy(R.scissor),$=R.scissorTest}else C.copy(ee).multiplyScalar(H).floor(),k.copy(N).multiplyScalar(H).floor(),$=Y;if(Q.bindFramebuffer(z.FRAMEBUFFER,q)&&U.drawBuffers&&X&&Q.drawBuffers(R,q),Q.viewport(C),Q.scissor(k),Q.setScissorTest($),ge){const De=de.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,G)}else if(Ee){const De=de.get(R.texture),Be=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.__webglTexture,G||0,Be)}L=-1},this.readRenderTargetPixels=function(R,F,G,X,q,ge,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Q.bindFramebuffer(z.FRAMEBUFFER,Re);try{const De=R.texture,Be=De.format,Ue=De.type;if(Be!==Rn&&Ze.convert(Be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===_s&&(w.has("EXT_color_buffer_half_float")||U.isWebGL2&&w.has("EXT_color_buffer_float"));if(Ue!==vi&&Ze.convert(Ue)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===fi&&(U.isWebGL2||w.has("OES_texture_float")||w.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-X&&G>=0&&G<=R.height-q&&z.readPixels(F,G,X,q,Ze.convert(Be),Ze.convert(Ue),ge)}finally{const De=A!==null?de.get(A).__webglFramebuffer:null;Q.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(R,F,G=0){const X=Math.pow(2,-G),q=Math.floor(F.image.width*X),ge=Math.floor(F.image.height*X);ye.setTexture2D(F,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,R.x,R.y,q,ge),Q.unbindTexture()},this.copyTextureToTexture=function(R,F,G,X=0){const q=F.image.width,ge=F.image.height,Ee=Ze.convert(G.format),Re=Ze.convert(G.type);ye.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,R.x,R.y,q,ge,Ee,Re,F.image.data):F.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,R.x,R.y,F.mipmaps[0].width,F.mipmaps[0].height,Ee,F.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,X,R.x,R.y,Ee,Re,F.image),X===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(R,F,G,X,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=R.max.x-R.min.x+1,Ee=R.max.y-R.min.y+1,Re=R.max.z-R.min.z+1,De=Ze.convert(X.format),Be=Ze.convert(X.type);let Ue;if(X.isData3DTexture)ye.setTexture3D(X,0),Ue=z.TEXTURE_3D;else if(X.isDataArrayTexture)ye.setTexture2DArray(X,0),Ue=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const Fe=z.getParameter(z.UNPACK_ROW_LENGTH),pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),tn=z.getParameter(z.UNPACK_SKIP_PIXELS),wt=z.getParameter(z.UNPACK_SKIP_ROWS),kn=z.getParameter(z.UNPACK_SKIP_IMAGES),ct=G.isCompressedTexture?G.mipmaps[0]:G.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ct.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(Ue,q,F.x,F.y,F.z,ge,Ee,Re,De,Be,ct.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ue,q,F.x,F.y,F.z,ge,Ee,Re,De,ct.data)):z.texSubImage3D(Ue,q,F.x,F.y,F.z,ge,Ee,Re,De,Be,ct),z.pixelStorei(z.UNPACK_ROW_LENGTH,Fe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,tn),z.pixelStorei(z.UNPACK_SKIP_ROWS,wt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,kn),q===0&&X.generateMipmaps&&z.generateMipmap(Ue),Q.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ye.setTextureCube(R,0):R.isData3DTexture?ye.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ye.setTexture2DArray(R,0):ye.setTexture2D(R,0),Q.unbindTexture()},this.resetState=function(){T=0,y=0,A=null,Q.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Rl?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Ra?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?ji:Zf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ji?Lt:Qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $x extends gh{}$x.prototype.isWebGL1Renderer=!0;class jx extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ia extends Xt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:at,this.magFilter=s!==void 0?s:at,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const Cu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Kx{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Zx=new Kx;class Pl{constructor(e){this.manager=e!==void 0?e:Zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jx extends Pl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Cu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=gs("img");function l(){u(),Cu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Qx extends Pl{constructor(e){super(e)}load(e,t,n,r){const s=new Xt,a=new Jx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);function Yn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function vh(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kr={duration:.5,overwrite:!1,delay:0},Dl,Ft,ht,gn=1e8,tt=1/gn,qo=Math.PI*2,eE=qo/4,tE=0,xh=Math.sqrt,nE=Math.cos,iE=Math.sin,Ct=function(e){return typeof e=="string"},dt=function(e){return typeof e=="function"},ei=function(e){return typeof e=="number"},Il=function(e){return typeof e>"u"},Fn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},Nl=function(){return typeof window<"u"},ra=function(e){return dt(e)||Ct(e)},Eh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,$o=/(?:-?\.?\d|\.)+/gi,Sh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mh=/[+-]=-?[.\d]+/,yh=/[^,'"\[\]\s]+/gi,rE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,mn,jo,Ul,fn={},va={},Th,bh=function(e){return(va=nr(e,fn))&&en},Ol=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xa=function(e,t){return!t&&console.warn(e)},Ah=function(e,t){return e&&(fn[e]=t)&&va&&(va[e]=t)||fn},vs=function(){return 0},sE={suppressEvents:!0,isStart:!0,kill:!1},ca={suppressEvents:!0,kill:!1},aE={suppressEvents:!0},Fl={},xi=[],Ko={},wh,an={},yo={},Lu=30,ua=[],kl="",Bl=function(e){var t=e[0],n,r;if(Fn(t)||dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ua.length;r--&&!ua[r].targetTest(t););n=ua[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Zh(e[r],n)))||e.splice(r,1);return e},Zi=function(e){return e._gsap||Bl(vn(e))[0]._gsap},Rh=function(e,t,n){return(n=e[t])&&dt(n)?e[t]():Il(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},Lr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},oE=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ea=function(){var e=xi.length,t=xi.slice(0),n,r;for(Ko={},xi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ch=function(e,t,n,r){xi.length&&!Ft&&Ea(),e.render(t,n,r||Ft&&t<0&&(e._initted||e._startAt)),xi.length&&!Ft&&Ea()},Lh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yh).length<2?t:Ct(e)?e.trim():e},Ph=function(e){return e},En=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lE=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},nr=function(e,t){for(var n in t)e[n]=t[n];return e},Pu=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Sa=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},us=function(e){var t=e.parent||ot,n=e.keyframes?lE(kt(e.keyframes)):En;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cE=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Dh=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ia=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ti=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ji=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},uE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zo=function(e,t,n,r){return e._startAt&&(Ft?e._startAt.revert(ca):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},fE=function i(e){return!e||e._ts&&i(e.parent)},Du=function(e){return e._repeat?Br(e._tTime,e=e.duration()+e._rDelay)*e:0},Br=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ma=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Na=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||tt)||0))},Ua=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Na(e),n._dirty||Ji(n,e)),e},Ih=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ma(e.rawTime(),t),(!t._dur||Ps(0,t.totalDuration(),n)-t._tTime>tt)&&t.render(n,!0)),Ji(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-tt}},In=function(e,t,n,r){return t.parent&&Ti(t),t._start=Pt((ei(n)?n:n||e!==ot?pn(e,n,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dh(e,t,"_first","_last",e._sort?"_start":0),Jo(t)||(e._recent=t),r||Ih(e,t),e._ts<0&&Ua(e,e._tTime),e},Nh=function(e,t){return(fn.ScrollTrigger||Ol("scrollTrigger",t))&&fn.ScrollTrigger.create(t,e)},Uh=function(e,t,n,r,s){if(Hl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wh!==ln.frame)return xi.push(e),e._lazy=[s,r],1},hE=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Jo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dE=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&hE(e)&&!(!e._initted&&Jo(e))||(e._ts<0||e._dp._ts<0)&&!Jo(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ps(0,e._tDur,t),u=Br(l,o),e._yoyo&&u&1&&(a=1-a),u!==Br(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ft||r||e._zTime===tt||!t&&e._zTime){if(!e._initted&&Uh(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?tt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Zo(e,t,n,!0),e._onUpdate&&!n&&xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ti(e,1),!n&&!Ft&&(xn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pE=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},zr=function(e,t,n,r){var s=e._repeat,a=Pt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Pt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Ua(e,e._tTime=e._tDur*o),e.parent&&Na(e),n||Ji(e.parent,e),e},Iu=function(e){return e instanceof jt?Ji(e):zr(e,e._dur)},mE={_start:0,endTime:vs,totalDuration:vs},pn=function i(e,t,n){var r=e.labels,s=e._recent||mE,a=e.duration()>=gn?s.endTime(!1):e._dur,o,l,c;return Ct(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},fs=function(e,t,n){var r=ei(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Zt(l.vars.inherit)&&l.parent;a.immediateRender=Zt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Et(t[0],a,t[s+1])},wi=function(e,t){return e||e===0?t(e):t},Ps=function(e,t,n){return n<e?e:n>t?t:n},Ot=function(e,t){return!Ct(e)||!(t=rE.exec(e))?"":t[1]},_E=function(e,t,n){return wi(n,function(r){return Ps(e,t,r)})},Qo=[].slice,Oh=function(e,t){return e&&Fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fn(e[0]))&&!e.nodeType&&e!==mn},gE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ct(r)&&!t||Oh(r,1)?(s=n).push.apply(s,vn(r)):n.push(r)})||n},vn=function(e,t,n){return ht&&!t&&ht.selector?ht.selector(e):Ct(e)&&!n&&(jo||!Hr())?Qo.call((t||Ul).querySelectorAll(e),0):kt(e)?gE(e,n):Oh(e)?Qo.call(e,0):e?[e]:[]},el=function(e){return e=vn(e)[0]||xa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vn(t,n.querySelectorAll?n:n===e?xa("Invalid scope")||Ul.createElement("div"):e)}},Fh=function(e){return e.sort(function(){return .5-Math.random()})},kh=function(e){if(dt(e))return e;var t=Fn(e)?e:{each:e},n=Qi(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return Ct(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,m,g){var _=(g||t).length,p=a[_],f,x,v,M,T,y,A,L,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,gn])[1],!E){for(A=-gn;A<(A=g[E++].getBoundingClientRect().left)&&E<_;);E--}for(p=a[_]=[],f=l?Math.min(E,_)*u-.5:r%E,x=E===gn?0:l?_*h/E-.5:r/E|0,A=0,L=gn,y=0;y<_;y++)v=y%E-f,M=x-(y/E|0),p[y]=T=c?Math.abs(c==="y"?M:v):xh(v*v+M*M),T>A&&(A=T),T<L&&(L=T);r==="random"&&Fh(p),p.max=A-L,p.min=L,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Ot(t.amount||t.each)||0,n=n&&_<0?$h(n):n}return _=(p[d]-p.min)/p.max||0,Pt(p.b+(n?n(_):_)*p.v)+p.u}},tl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Pt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ei(n)?0:Ot(n))}},Bh=function(e,t){var n=kt(e),r,s;return!n&&Fn(e)&&(r=n=e.radius||gn,e.values?(e=vn(e.values),(s=!ei(e[0]))&&(r*=r)):e=tl(e.increment)),wi(t,n?dt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=gn,u=0,h=e.length,d,m;h--;)s?(d=e[h].x-o,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:a,s||u===a||ei(a)?u:u+Ot(a)}:tl(e))},zh=function(e,t,n,r){return wi(kt(e)?!t:n===!0?!!(n=0):!r,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},vE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},xE=function(e,t){return function(n){return e(parseFloat(n))+(t||Ot(n))}},EE=function(e,t,n){return Gh(e,t,0,1,n)},Hh=function(e,t,n){return wi(n,function(r){return e[~~t(r)]})},SE=function i(e,t,n){var r=t-e;return kt(e)?Hh(e,i(0,e.length),t):wi(n,function(s){return(r+(s-e)%r)%r+e})},ME=function i(e,t,n){var r=t-e,s=r*2;return kt(e)?Hh(e,i(0,e.length-1),t):wi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},xs=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?yh:$o),n+=e.substr(t,r-t)+zh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Gh=function(e,t,n,r,s){var a=t-e,o=r-n;return wi(s,function(l){return n+((l-e)/a*o||0)})},yE=function i(e,t,n,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=Ct(e),o={},l,c,u,h,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else r||(e=nr(kt(e)?[]:{},e));if(!u){for(l in t)zl.call(o,e,l,"get",t[l]);s=function(g){return Wl(g,o)||(a?e.p:e)}}}return wi(n,s)},Nu=function(e,t,n){var r=e.labels,s=gn,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},xn=function(e,t,n){var r=e.vars,s=r[t],a=ht,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&xi.length&&Ea(),o&&(ht=o),u=l?s.apply(c,l):s.call(c),ht=a,u},as=function(e){return Ti(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&xn(e,"onInterrupt"),e},Ar,Vh=[],Wh=function(e){if(Nl()&&e){e=!e.name&&e.default||e;var t=e.name,n=dt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:vs,render:Wl,add:zl,kill:BE,modifier:kE,rawVars:0},a={targetTest:0,get:0,getSetter:Vl,aliases:{},register:0};if(Hr(),e!==r){if(an[t])return;En(r,En(Sa(e,s),a)),nr(r.prototype,nr(s,Sa(e,a))),an[r.prop=t]=r,e.targetTest&&(ua.push(r),Fl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ah(t,r),e.register&&e.register(en,r,Qt)}else e&&Vh.push(e)},et=255,os={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},To=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*et+.5|0},Xh=function(e,t,n){var r=e?ei(e)?[e>>16,e>>8&et,e&et]:0:os.black,s,a,o,l,c,u,h,d,m,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),os[e])r=os[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&et,r&et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&et,e&et]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match($o),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=To(l+1/3,s,a),r[1]=To(l,s,a),r[2]=To(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Sh),n&&r.length<4&&(r[3]=1),r}else r=e.match($o)||os.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/et,a=r[1]/et,o=r[2]/et,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Yh=function(e){var t=[],n=[],r=-1;return e.split(Ei).forEach(function(s){var a=s.match(br)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Uu=function(e,t,n){var r="",s=(e+r).match(Ei),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Xh(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Yh(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ei,"1").split(br),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ei),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Ei=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in os)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),TE=/hsl[a]?\(/,qh=function(e){var t=e.join(" "),n;if(Ei.lastIndex=0,Ei.test(t))return n=TE.test(t),e[1]=Uu(e[1],n),e[0]=Uu(e[0],n,Yh(e[1])),!0},Es,ln=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,d,m,g=function _(p){var f=i()-r,x=p===!0,v,M,T,y;if(f>e&&(n+=f-t),r+=f,T=r-n,v=T-a,(v>0||x)&&(y=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,a+=v+(v>=s?4:s-v),M=1),x||(l=c(_)),M)for(m=0;m<o.length;m++)o[m](T,d,y,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Th&&(!jo&&Nl()&&(mn=jo=window,Ul=mn.document||{},fn.gsap=en,(mn.gsapVersions||(mn.gsapVersions=[])).push(en.version),bh(va||mn.GreenSockGlobals||!mn.gsap&&mn||{}),u=mn.requestAnimationFrame,Vh.forEach(Wh)),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Es=1,g(2))},sleep:function(){(u?mn.cancelAnimationFrame:clearTimeout)(l),Es=0,c=vs},lagSmoothing:function(p,f){e=p||1/0,t=Math.min(f||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,f,x){var v=f?function(M,T,y,A){p(M,T,y,A),h.remove(v)}:p;return h.remove(p),o[x?"unshift":"push"](v),Hr(),v},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},h}(),Hr=function(){return!Es&&ln.wake()},Xe={},bE=/^[\d.\-M][\d.\-,\s]/,AE=/["']/g,wE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(AE,"").trim():+c,r=l.substr(o+1).trim();return t},RE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},CE=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[wE(t[1])]:RE(e).split(",").map(Lh)):Xe._CE&&bE.test(e)?Xe._CE("",e):n},$h=function(e){return function(t){return 1-e(1-t)}},jh=function i(e,t){for(var n=e._first,r;n;)n instanceof jt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Qi=function(e,t){return e&&(dt(e)?e:Xe[e]||CE(e))||t},rr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Jt(e,function(o){Xe[o]=fn[o]=s,Xe[a=o.toLowerCase()]=n;for(var l in s)Xe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[o+"."+l]=s[l]}),s},Kh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bo=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/qo*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*iE((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Kh(o);return s=qo/s,l.config=function(c,u){return i(e,c,u)},l},Ao=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Kh(n);return r.config=function(s){return i(e,s)},r};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;rr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;rr("Elastic",bo("in"),bo("out"),bo());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};rr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);rr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});rr("Circ",function(i){return-(xh(1-i*i)-1)});rr("Sine",function(i){return i===1?1:-nE(i*eE)+1});rr("Back",Ao("in"),Ao("out"),Ao());Xe.SteppedEase=Xe.steps=fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-tt;return function(o){return((r*Ps(0,a,o)|0)+s)*n}}};kr.ease=Xe["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return kl+=i+","+i+"Params,"});var Zh=function(e,t){this.id=tE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rh,this.set=t?t.getSetter:Vl},Ss=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,zr(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),Es||ln.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ua(this,n),!s._dp||s.parent||Ih(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ch(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Du(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Du(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Br(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-tt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-tt?0:this._rts,this.totalTime(Ps(-Math.abs(this._delay),this._tDur,r),!0),Na(this),uE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==tt&&(this._tTime-=tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&In(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ma(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=aE);var r=Ft;return Ft=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ft=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Iu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Iu(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(pn(this,n),Zt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Zt(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-tt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-tt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=dt(n)?n:Ph,o=function(){var c=r.then;r.then=null,dt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){as(this)},i}();En(Ss.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-tt,_prom:0,_ps:!1,_rts:1});var jt=function(i){vh(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zt(n.sortChildren),ot&&In(n.parent||ot,Yn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Nh(Yn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return fs(0,arguments,this),this},t.from=function(r,s,a){return fs(1,arguments,this),this},t.fromTo=function(r,s,a,o){return fs(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,us(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,pn(this,a),1),this},t.call=function(r,s,a){return In(this,Et.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Et(r,a,pn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,us(a).immediateRender=Zt(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,us(o).immediateRender=Zt(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Pt(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,m,g,_,p,f,x,v,M,T,y,A;if(this!==ot&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,M=this._start,v=this._ts,f=!v,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(y=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(d=Pt(u%p),u===l?(_=this._repeat,d=c):(_=~~(u/p),_&&_===u/p&&(d=c,_--),d>c&&(d=c)),T=Br(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),y&&_&1&&(d=c-d,A=1),_!==T&&!this._lock){var L=y&&T&1,E=L===(y&&_&1);if(_<T&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Pt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;jh(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=pE(this,Pt(o),Pt(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&!s&&!_&&(xn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!f){x=0,g&&(u+=this._zTime=-tt);break}}m=g}else{m=this._last;for(var C=r<0?r:d;m;){if(g=m._prev,(m._act||C<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(C-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(C-m._start)*m._ts,s,a||Ft&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!f){x=0,g&&(u+=this._zTime=C?-tt:tt);break}}m=g}}if(x&&!s&&(this.pause(),x.render(d>=o?0:-tt)._zTime=d>=o?1:-1,this._ts))return this._start=M,Na(this),this.render(r,s,a);this._onUpdate&&!s&&xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ti(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(xn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(ei(s)||(s=pn(this,s,r)),!(r instanceof Ss)){if(kt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ct(r))return this.addLabel(r,s);if(dt(r))r=Et.delayedCall(0,r);else return this}return this!==r?In(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Ct(r)?this.removeLabel(r):dt(r)?this.killTweensOf(r):(Ia(this,r),r===this._recent&&(this._recent=this._last),Ji(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(ln.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=pn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Et.delayedCall(0,s||vs,a);return o.data="isPause",this._hasPause=1,In(this,o,pn(this,r))},t.removePause=function(r){var s=this._first;for(r=pn(this,r);s;)s._start===r&&s.data==="isPause"&&Ti(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)hi!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=vn(r),l=this._first,c=ei(s),u;l;)l instanceof Et?oE(l._targets,o)&&(c?(!hi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=pn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,g=Et.to(a,En({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||tt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&zr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,En({startAt:{time:pn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Nu(this,pn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Nu(this,pn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+tt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Ji(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ji(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=gn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,In(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;zr(a,a===ot&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(ot._ts&&(Ch(ot,Ma(r,ot)),wh=ln.frame),ln.frame>=Lu){Lu+=un.autoSleep||120;var s=ot._first;if((!s||!s._ts)&&un.autoSleep&&ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ln.sleep()}}},e}(Ss);En(jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var LE=function(e,t,n,r,s,a,o){var l=new Qt(this._pt,e,t,0,1,id,null,s),c=0,u=0,h,d,m,g,_,p,f,x;for(l.b=n,l.e=r,n+="",r+="",(f=~r.indexOf("random("))&&(r=xs(r)),a&&(x=[n,r],a(x,e,t),n=x[0],r=x[1]),d=n.match(Mo)||[];h=Mo.exec(r);)g=h[0],_=r.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Lr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Mo.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Mh.test(r)||f)&&(l.e=0),this._pt=l,l},zl=function(e,t,n,r,s,a,o,l,c,u){dt(r)&&(r=r(s||0,e,a));var h=e[t],d=n!=="get"?n:dt(h)?c?e[t.indexOf("set")||!dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=dt(h)?c?UE:td:Gl,g;if(Ct(r)&&(~r.indexOf("random(")&&(r=xs(r)),r.charAt(1)==="="&&(g=Lr(d,r)+(Ot(d)||0),(g||g===0)&&(r=g))),!u||d!==r||nl)return!isNaN(d*r)&&r!==""?(g=new Qt(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?FE:nd,0,m),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Ol(t,r),LE.call(this,e,t,d,r,m,l||un.stringFilter,c))},PE=function(e,t,n,r,s){if(dt(e)&&(e=hs(e,s,t,n,r)),!Fn(e)||e.style&&e.nodeType||kt(e)||Eh(e))return Ct(e)?hs(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=hs(e[o],s,t,n,r);return a},Jh=function(e,t,n,r,s,a){var o,l,c,u;if(an[e]&&(o=new an[e]).init(s,o.rawVars?t[e]:PE(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Qt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ar))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},hi,nl,Hl=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,d=r.runBackwards,m=r.yoyoEase,g=r.keyframes,_=r.autoRevert,p=e._dur,f=e._startAt,x=e._targets,v=e.parent,M=v&&v.data==="nested"?v.vars.targets:x,T=e._overwrite==="auto"&&!Dl,y=e.timeline,A,L,E,C,k,$,j,D,O,W,H,Z,K;if(y&&(!g||!s)&&(s="none"),e._ease=Qi(s,kr.ease),e._yEase=m?$h(Qi(m===!0?s:m,kr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!y&&!!r.runBackwards,!y||g&&!r.stagger){if(D=x[0]?Zi(x[0]).harness:0,Z=D&&r[D.prop],A=Sa(r,Fl),f&&(f._zTime<0&&f.progress(1),t<0&&d&&o&&!_?f.render(-1,!0):f.revert(d&&p?ca:sE),f._lazy=0),a){if(Ti(e._startAt=Et.set(x,En({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!f&&Zt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!o&&!_)&&e._startAt.revert(ca),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&p&&!f){if(t&&(o=!1),E=En({overwrite:!1,data:"isFromStart",lazy:o&&!f&&Zt(l),immediateRender:o,stagger:0,parent:v},A),Z&&(E[D.prop]=Z),Ti(e._startAt=Et.set(x,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(ca):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,tt,tt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Zt(l)||l&&!p,L=0;L<x.length;L++){if(k=x[L],j=k._gsap||Bl(x)[L]._gsap,e._ptLookup[L]=W={},Ko[j.id]&&xi.length&&Ea(),H=M===x?L:M.indexOf(k),D&&(O=new D).init(k,Z||A,e,H,M)!==!1&&(e._pt=C=new Qt(e._pt,k,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(ee){W[ee]=C}),O.priority&&($=1)),!D||Z)for(E in A)an[E]&&(O=Jh(E,A,e,H,k,M))?O.priority&&($=1):W[E]=C=zl.call(e,k,E,"get",A[E],H,M,0,r.stringFilter);e._op&&e._op[L]&&e.kill(k,e._op[L]),T&&e._pt&&(hi=e,ot.killTweensOf(k,W,e.globalTime(t)),K=!e.parent,hi=0),e._pt&&l&&(Ko[j.id]=1)}$&&rd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,g&&t<=0&&y.render(gn,!0,!0)},DE=function(e,t,n,r,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return nl=1,e.vars[t]="+=0",Hl(e,o),nl=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=mt(n)+Ot(u.e)),u.b&&(u.b=c.s+Ot(u.b))},IE=function(e,t){var n=e[0]?Zi(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=nr({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},NE=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(kt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},hs=function(e,t,n,r,s){return dt(e)?e.call(t,n,r,s):Ct(e)&&~e.indexOf("random(")?xs(e):e},Qh=kl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ed={};Jt(Qh+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ed[i]=1});var Et=function(i){vh(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:us(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,x=r.parent||ot,v=(kt(n)||Eh(n)?ei(n[0]):"length"in r)?[n]:vn(n),M,T,y,A,L,E,C,k;if(o._targets=v.length?Bl(v):xa("GSAP target "+n+" not found. https://greensock.com",!un.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||d||ra(c)||ra(u)){if(r=o.vars,M=o.timeline=new jt({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=Yn(o),M._start=0,d||ra(c)||ra(u)){if(A=v.length,C=d&&kh(d),Fn(d))for(L in d)~Qh.indexOf(L)&&(k||(k={}),k[L]=d[L]);for(T=0;T<A;T++)y=Sa(r,ed),y.stagger=0,f&&(y.yoyoEase=f),k&&nr(y,k),E=v[T],y.duration=+hs(c,Yn(o),T,E,v),y.delay=(+hs(u,Yn(o),T,E,v)||0)-o._delay,!d&&A===1&&y.delay&&(o._delay=u=y.delay,o._start+=u,y.delay=0),M.to(E,y,C?C(T,E,v):0),M._ease=Xe.none;M.duration()?c=u=0:o.timeline=0}else if(g){us(En(M.vars.defaults,{ease:"none"})),M._ease=Qi(g.ease||r.ease||"none");var $=0,j,D,O;if(kt(g))g.forEach(function(W){return M.to(v,W,">")}),M.duration();else{y={};for(L in g)L==="ease"||L==="easeEach"||NE(L,g[L],y,g.easeEach);for(L in y)for(j=y[L].sort(function(W,H){return W.t-H.t}),$=0,T=0;T<j.length;T++)D=j[T],O={ease:D.e,duration:(D.t-(T?j[T-1].t:0))/100*c},O[L]=D.v,M.to(v,O,$),$+=O.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!Dl&&(hi=Yn(o),ot.killTweensOf(v),hi=0),In(x,Yn(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===Pt(x._time)&&Zt(h)&&fE(Yn(o))&&x.data!=="nested")&&(o._tTime=-tt,o.render(Math.max(0,-u)||0)),p&&Nh(Yn(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-tt&&!u?l:r<tt?0:r,d,m,g,_,p,f,x,v,M;if(!c)dE(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=Pt(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===h/_&&(d=c,g--),d>c&&(d=c)),f=this._yoyo&&g&1,f&&(M=this._yEase,d=c-d),p=Br(this._tTime,_),d===o&&!a&&this._initted)return this._tTime=h,this;g!==p&&(v&&this._yEase&&jh(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=a=1,this.render(Pt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Uh(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(d/c),this._from&&(this.ratio=x=1-x),d&&!o&&!s&&!g&&(xn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;v&&v.render(r<0?r:!d&&f?-tt:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Zo(this,r,s,a),xn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Zo(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ti(this,1),!s&&!(u&&!o)&&(h||o||f)&&(xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o){Es||ln.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Hl(this,l),c=this._ease(l/this._dur),DE(this,r,s,a,o,c,l)?this.resetTo(r,s,a,o):(Ua(this,0),this.parent||Dh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?as(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,hi&&hi.vars.overwrite!==!0)._first||as(this),this.parent&&a!==this.timeline.totalDuration()&&zr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?vn(r):o,c=this._ptLookup,u=this._pt,h,d,m,g,_,p,f;if((!s||s==="all")&&cE(o,l))return s==="all"&&(this._pt=0),as(this);for(h=this._op=this._op||[],s!=="all"&&(Ct(s)&&(_={},Jt(s,function(x){return _[x]=1}),s=_),s=IE(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(h[f]=s,g=d,m={}):(m=h[f]=h[f]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ia(this,p,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&as(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return fs(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return fs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return ot.killTweensOf(r,s,a)},e}(Ss);En(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(i){Et[i]=function(){var e=new jt,t=Qo.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Gl=function(e,t,n){return e[t]=n},td=function(e,t,n){return e[t](n)},UE=function(e,t,n,r){return e[t](r.fp,n)},OE=function(e,t,n){return e.setAttribute(t,n)},Vl=function(e,t){return dt(e[t])?td:Il(e[t])&&e.setAttribute?OE:Gl},nd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},FE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},id=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Wl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},kE=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},BE=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ia(this,t,"_pt"):t.dep||(n=1),t=r;return!n},zE=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},rd=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Qt=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||nd,this.d=l||this,this.set=c||Gl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=zE,this.m=n,this.mt=s,this.tween=r},i}();Jt(kl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Fl[i]=1});fn.TweenMax=fn.TweenLite=Et;fn.TimelineLite=fn.TimelineMax=jt;ot=new jt({sortChildren:!1,defaults:kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});un.stringFilter=qh;var er=[],fa={},HE=[],Ou=0,GE=0,wo=function(e){return(fa[e]||HE).map(function(t){return t()})},il=function(){var e=Date.now(),t=[];e-Ou>2&&(wo("matchMediaInit"),er.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=mn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),wo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Ou=e,wo("matchMedia"))},sd=function(){function i(t,n){this.selector=n&&el(n),this.data=[],this._r=[],this.isReverted=!1,this.id=GE++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){dt(n)&&(s=r,r=n,n=dt);var a=this,o=function(){var c=ht,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=el(s)),ht=a,h=r.apply(a,arguments),dt(h)&&a._r.push(h),ht=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===dt?o(a):n?a[n]=o:o},e.ignore=function(n){var r=ht;ht=null,n(this),ht=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Et)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var o=er.length;o--;)er[o].id===this.id&&er.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),VE=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Fn(n)||(n={matches:n});var a=new sd(0,s||this.scope),o=a.conditions={},l,c,u;ht&&!a.selector&&(a.selector=ht.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=mn.matchMedia(n[c]),l&&(er.indexOf(a)<0&&er.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(il):l.addEventListener("change",il)));return u&&r(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Wh(r)})},timeline:function(e){return new jt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ct(e)&&(e=vn(e)[0]);var s=Zi(e||{}).get,a=n?Ph:Lh;return n==="native"&&(n=""),e&&(t?a((an[t]&&an[t].get||s)(e,t,n,r)):function(o,l,c){return a((an[o]&&an[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=vn(e),e.length>1){var r=e.map(function(u){return en.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=an[t],o=Zi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ar._pt=0,h.init(e,n?u+n:u,Ar,0,[e]),h.render(1,h),Ar._pt&&Wl(1,Ar)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=en.to(e,nr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qi(e.ease,kr.ease)),Pu(kr,e||{})},config:function(e){return Pu(un,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!an[o]&&!fn[o]&&xa(t+" effect requires "+o+" plugin.")}),yo[t]=function(o,l,c){return n(vn(o),En(l||{},s),c)},a&&(jt.prototype[t]=function(o,l,c){return this.add(yo[t](o,Fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=Qi(t)},parseEase:function(e,t){return arguments.length?Qi(e,t):Xe},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jt(e),r,s;for(n.smoothChildTiming=Zt(e.smoothChildTiming),ot.remove(n),n._dp=0,n._time=n._tTime=ot._time,r=ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&In(n,r,r._start-r._delay),r=s;return In(ot,n,0),n},context:function(e,t){return e?new sd(e,t):ht},matchMedia:function(e){return new VE(e)},matchMediaRefresh:function(){return er.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||il()},addEventListener:function(e,t){var n=fa[e]||(fa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=fa[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:SE,wrapYoyo:ME,distribute:kh,random:zh,snap:Bh,normalize:EE,getUnit:Ot,clamp:_E,splitColor:Xh,toArray:vn,selector:el,mapRange:Gh,pipe:vE,unitize:xE,interpolate:yE,shuffle:Fh},install:bh,effects:yo,ticker:ln,updateRoot:jt.updateRoot,plugins:an,globalTimeline:ot,core:{PropTween:Qt,globals:Ah,Tween:Et,Timeline:jt,Animation:Ss,getCache:Zi,_removeLinkedListItem:Ia,reverting:function(){return Ft},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return Dl=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ya[i]=Et[i]});ln.add(jt.updateRoot);Ar=ya.to({},{duration:0});var WE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},XE=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=WE(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Ro=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ct(s)&&(l={},Jt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}XE(o,s)}}}},en=ya.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ft?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ro("roundProps",tl),Ro("modifiers"),Ro("snap",Bh))||ya;Et.version=jt.version=en.version="3.12.2";Th=1;Nl()&&Hr();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;var Fu,di,Pr,Xl,Xi,ku,Yl,YE=function(){return typeof window<"u"},ti={},zi=180/Math.PI,Dr=Math.PI/180,Sr=Math.atan2,Bu=1e8,ql=/([A-Z])/g,qE=/(left|right|width|margin|padding|x)/i,$E=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ad=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},od=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JE=function(e,t,n){return e.style[t]=n},QE=function(e,t,n){return e.style.setProperty(t,n)},eS=function(e,t,n){return e._gsap[t]=n},tS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},nS=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},iS=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},lt="transform",Cn=lt+"Origin",rS=function i(e,t){var n=this,r=this.target,s=r.style;if(e in ti&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=qn(r,a)}):this.tfm[e]=r._gsap.x?r._gsap[e]:qn(r,e);else return Nn.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(lt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=lt}(s||t)&&this.props.push(e,t,s[e])},ld=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sS=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ql,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yl(),(!s||!s.isStart)&&!n[lt]&&(ld(n),r.uncache=1)}},cd=function(e,t){var n={target:e,props:[],revert:sS,save:rS};return e._gsap||en.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},ud,sl=function(e,t){var n=di.createElementNS?di.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):di.createElement(e);return n.style?n:di.createElement(e)},On=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ql,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Gr(t)||t,1)||""},zu="O,Moz,ms,Ms,Webkit".split(","),Gr=function(e,t,n){var r=t||Xi,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(zu[a]+e in s););return a<0?null:(a===3?"ms":a>=0?zu[a]:"")+e},al=function(){YE()&&window.document&&(Fu=window,di=Fu.document,Pr=di.documentElement,Xi=sl("div")||{style:{}},sl("div"),lt=Gr(lt),Cn=lt+"Origin",Xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ud=!!Gr("perspective"),Yl=en.core.reverting,Xl=1)},Co=function i(e){var t=sl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Pr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Pr.removeChild(t),this.style.cssText=s,a},Hu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fd=function(e){var t;try{t=e.getBBox()}catch{t=Co.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Co||(t=Co.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Hu(e,["x","cx","x1"])||0,y:+Hu(e,["y","cy","y1"])||0,width:0,height:0}:t},hd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fd(e))},Ms=function(e,t){if(t){var n=e.style;t in ti&&t!==Cn&&(t=lt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ql,"-$1").toLowerCase())):n.removeAttribute(t)}},pi=function(e,t,n,r,s,a){var o=new Qt(e._pt,t,n,0,1,a?od:ad);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Gu={deg:1,rad:1,turn:1},aS={grid:1,flex:1},bi=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Xi.style,l=qE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",m=r==="%",g,_,p,f;return r===a||!s||Gu[r]||Gu[a]?s:(a!=="px"&&!d&&(s=i(e,t,n,"px")),f=e.getCTM&&hd(e),(m||a==="%")&&(ti[t]||~t.indexOf("adius"))?(g=f?e.getBBox()[l?"width":"height"]:e[u],mt(m?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(d?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===di||!_.appendChild)&&(_=di.body),p=_._gsap,p&&m&&p.width&&l&&p.time===ln.time&&!p.uncache?mt(s/p.width*h):((m||a==="%")&&!aS[On(_,"display")]&&(o.position=On(e,"position")),_===e&&(o.position="static"),_.appendChild(Xi),g=Xi[u],_.removeChild(Xi),o.position="absolute",l&&m&&(p=Zi(_),p.time=ln.time,p.width=_[u]),mt(d?g*s/h:g&&s?h/g*s:0))))},qn=function(e,t,n,r){var s;return Xl||al(),t in Nn&&t!=="transform"&&(t=Nn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ti[t]&&t!=="transform"?(s=Ts(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ba(On(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ta[t]&&Ta[t](e,t,n)||On(e,t)||Rh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?bi(e,t,s,n)+n:s},oS=function(e,t,n,r){if(!n||n==="none"){var s=Gr(t,e,1),a=s&&On(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=On(e,"borderTopColor"))}var o=new Qt(this._pt,e.style,t,0,1,id),l=0,c=0,u,h,d,m,g,_,p,f,x,v,M,T;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=On(e,t)||r,e.style[t]=n),u=[n,r],qh(u),n=u[0],r=u[1],d=n.match(br)||[],T=r.match(br)||[],T.length){for(;h=br.exec(r);)p=h[0],x=r.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),p.charAt(1)==="="&&(p=Lr(m,p)+M),f=parseFloat(p),v=p.substr((f+"").length),l=br.lastIndex-v.length,v||(v=v||un.units[t]||M,l===r.length&&(r+=v,o.e+=v)),M!==v&&(m=bi(e,t,_,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:m,c:f-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?od:ad;return Mh.test(r)&&(o.e=0),this._pt=o,o},Vu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Vu[n]||n,t[1]=Vu[r]||r,t.join(" ")},cS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ti[o]&&(l=1,o=o==="transformOrigin"?Cn:lt),Ms(n,o);l&&(Ms(n,lt),a&&(a.svg&&n.removeAttribute("transform"),Ts(n,1),a.uncache=1,ld(r)))}},Ta={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Qt(e._pt,t,n,0,0,cS);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},ys=[1,0,0,1,0,0],dd={},pd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wu=function(e){var t=On(e,lt);return pd(t)?ys:t.substr(7).match(Sh).map(mt)},$l=function(e,t){var n=e._gsap||Zi(e),r=e.style,s=Wu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ys:s):(s===ys&&!e.offsetParent&&e!==Pr&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Pr.appendChild(e)),s=Wu(e),l?r.display=l:Ms(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Pr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ol=function(e,t,n,r,s,a){var o=e._gsap,l=s||$l(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],f=l[4],x=l[5],v=t.split(" "),M=parseFloat(v[0])||0,T=parseFloat(v[1])||0,y,A,L,E;n?l!==ys&&(A=m*p-g*_)&&(L=M*(p/A)+T*(-_/A)+(_*x-p*f)/A,E=M*(-g/A)+T*(m/A)-(m*x-g*f)/A,M=L,T=E):(y=fd(e),M=y.x+(~v[0].indexOf("%")?M/100*y.width:M),T=y.y+(~(v[1]||v[0]).indexOf("%")?T/100*y.height:T)),r||r!==!1&&o.smooth?(f=M-c,x=T-u,o.xOffset=h+(f*m+x*_)-f,o.yOffset=d+(f*g+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=T,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Cn]="0px 0px",a&&(pi(a,o,"xOrigin",c,M),pi(a,o,"yOrigin",u,T),pi(a,o,"xOffset",h,o.xOffset),pi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+T)},Ts=function(e,t){var n=e._gsap||new Zh(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=On(e,Cn)||"0",u,h,d,m,g,_,p,f,x,v,M,T,y,A,L,E,C,k,$,j,D,O,W,H,Z,K,ee,N,Y,oe,ie,ue;return u=h=d=_=p=f=x=v=M=0,m=g=1,n.svg=!!(e.getCTM&&hd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[lt]!=="none"?l[lt]:"")),r.scale=r.rotate=r.translate="none"),A=$l(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),ol(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,y=n.yOrigin||0,A!==ys&&(k=A[0],$=A[1],j=A[2],D=A[3],u=O=A[4],h=W=A[5],A.length===6?(m=Math.sqrt(k*k+$*$),g=Math.sqrt(D*D+j*j),_=k||$?Sr($,k)*zi:0,x=j||D?Sr(j,D)*zi+_:0,x&&(g*=Math.abs(Math.cos(x*Dr))),n.svg&&(u-=T-(T*k+y*j),h-=y-(T*$+y*D))):(ue=A[6],oe=A[7],ee=A[8],N=A[9],Y=A[10],ie=A[11],u=A[12],h=A[13],d=A[14],L=Sr(ue,Y),p=L*zi,L&&(E=Math.cos(-L),C=Math.sin(-L),H=O*E+ee*C,Z=W*E+N*C,K=ue*E+Y*C,ee=O*-C+ee*E,N=W*-C+N*E,Y=ue*-C+Y*E,ie=oe*-C+ie*E,O=H,W=Z,ue=K),L=Sr(-j,Y),f=L*zi,L&&(E=Math.cos(-L),C=Math.sin(-L),H=k*E-ee*C,Z=$*E-N*C,K=j*E-Y*C,ie=D*C+ie*E,k=H,$=Z,j=K),L=Sr($,k),_=L*zi,L&&(E=Math.cos(L),C=Math.sin(L),H=k*E+$*C,Z=O*E+W*C,$=$*E-k*C,W=W*E-O*C,k=H,O=Z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,f=180-f),m=mt(Math.sqrt(k*k+$*$+j*j)),g=mt(Math.sqrt(W*W+ue*ue)),L=Sr(O,W),x=Math.abs(L)>2e-4?L*zi:0,M=ie?1/(ie<0?-ie:ie):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pd(On(e,lt)),H&&e.setAttribute("transform",H))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(m*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=mt(m),n.scaleY=mt(g),n.rotation=mt(_)+o,n.rotationX=mt(p)+o,n.rotationY=mt(f)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Cn]=ba(c)),n.xOffset=n.yOffset=0,n.force3D=un.force3D,n.renderTransform=n.svg?fS:ud?md:uS,n.uncache=0,n},ba=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lo=function(e,t,n){var r=Ot(t);return mt(parseFloat(t)+parseFloat(bi(e,"x",n+"px",r)))+r},uS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,md(e,t)},Oi="0deg",ns="0px",Fi=") ",md=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,f=n.force3D,x=n.target,v=n.zOrigin,M="",T=f==="auto"&&e&&e!==1||f===!0;if(v&&(h!==Oi||u!==Oi)){var y=parseFloat(u)*Dr,A=Math.sin(y),L=Math.cos(y),E;y=parseFloat(h)*Dr,E=Math.cos(y),a=Lo(x,a,A*E*-v),o=Lo(x,o,-Math.sin(y)*-v),l=Lo(x,l,L*E*-v+v)}p!==ns&&(M+="perspective("+p+Fi),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(T||a!==ns||o!==ns||l!==ns)&&(M+=l!==ns||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Fi),c!==Oi&&(M+="rotate("+c+Fi),u!==Oi&&(M+="rotateY("+u+Fi),h!==Oi&&(M+="rotateX("+h+Fi),(d!==Oi||m!==Oi)&&(M+="skew("+d+", "+m+Fi),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Fi),x.style[lt]=M||"translate(0, 0)"},fS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,f=n.yOffset,x=n.forceCSS,v=parseFloat(a),M=parseFloat(o),T,y,A,L,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Dr,c*=Dr,T=Math.cos(l)*h,y=Math.sin(l)*h,A=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(u*=Dr,E=Math.tan(c-u),E=Math.sqrt(1+E*E),A*=E,L*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),T*=E,y*=E)),T=mt(T),y=mt(y),A=mt(A),L=mt(L)):(T=h,L=d,y=A=0),(v&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=bi(m,"x",a,"px"),M=bi(m,"y",o,"px")),(g||_||p||f)&&(v=mt(v+g-(g*T+_*A)+p),M=mt(M+_-(g*y+_*L)+f)),(r||s)&&(E=m.getBBox(),v=mt(v+r/100*E.width),M=mt(M+s/100*E.height)),E="matrix("+T+","+y+","+A+","+L+","+v+","+M+")",m.setAttribute("transform",E),x&&(m.style[lt]=E)},hS=function(e,t,n,r,s){var a=360,o=Ct(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zi:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Bu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Bu)%a-~~(c/a)*a)),e._pt=d=new Qt(e._pt,t,n,r,c,jE),d.e=u,d.u="deg",e._props.push(n),d},Xu=function(e,t){for(var n in t)e[n]=t[n];return e},dS=function(e,t,n){var r=Xu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,m,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[lt]=t,o=Ts(n,1),Ms(n,lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[lt],a[lt]=t,o=Ts(n,1),a[lt]=c);for(l in ti)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Ot(c),g=Ot(u),h=m!==g?bi(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Qt(e._pt,o,l,h,d-h,rl),e._pt.u=g||0,e._props.push(l));Xu(o,r)};Jt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Ta[e>1?"border"+i:i]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(g){return qn(o,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,m,h)}});var _d={name:"css",register:al,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,m,g,_,p,f,x,v,M,T,y,A,L;Xl||al(),this.styles=this.styles||cd(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(an[_]&&Jh(_,t,n,r,e,s)))){if(m=typeof u,g=Ta[_],m==="function"&&(u=u.call(n,r,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=xs(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ei.lastIndex=0,Ei.test(c)||(p=Ot(c),f=Ot(u)),f?p!==f&&(c=bi(e,_,c,f)+f):p&&(u+=p),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Ct(c)&&~c.indexOf("random(")&&(c=xs(c)),Ot(c+"")||(c+=un.units[_]||Ot(qn(e,_))||""),(c+"").charAt(1)==="="&&(c=qn(e,_))):c=qn(e,_),d=parseFloat(c),x=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Nn&&(_==="autoAlpha"&&(d===1&&qn(e,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,o.visibility),pi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Nn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ti,v){if(this.styles.save(_),M||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ts(e,t.parseTransform),y=t.smoothOrigin!==!1&&T.smooth,M=this._pt=new Qt(this._pt,o,lt,0,1,T.renderTransform,T,0,-1),M.dep=1),_==="scale")this._pt=new Qt(this._pt,T,"scaleY",T.scaleY,(x?Lr(T.scaleY,x+h):h)-T.scaleY||0,rl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Cn,0,o[Cn]),u=lS(u),T.svg?ol(e,u,0,y,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==T.zOrigin&&pi(this,T,"zOrigin",T.zOrigin,f),pi(this,o,_,ba(c),ba(u)));continue}else if(_==="svgOrigin"){ol(e,u,1,y,0,this);continue}else if(_ in dd){hS(this,T,_,d,x?Lr(d,x+u):u);continue}else if(_==="smoothOrigin"){pi(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){dS(this,u,e);continue}}else _ in o||(_=Gr(_)||_);if(v||(h||h===0)&&(d||d===0)&&!$E.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),f=Ot(u)||(_ in un.units?un.units[_]:p),p!==f&&(d=bi(e,_,c,f)),this._pt=new Qt(this._pt,v?T:o,_,d,(x?Lr(d,x+h):h)-d,!v&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?ZE:rl),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=KE);else if(_ in o)oS.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,r,s);else if(_!=="parseTransform"){Ol(_,u);continue}v||(_ in o?L.push(_,0,o[_]):L.push(_,1,c||e[_])),a.push(_)}}A&&rd(this)},render:function(e,t){if(t.tween._time||!Yl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qn,aliases:Nn,getSetter:function(e,t,n){var r=Nn[t];return r&&r.indexOf(",")<0&&(t=r),t in ti&&t!==Cn&&(e._gsap.x||qn(e,"x"))?n&&ku===n?t==="scale"?tS:eS:(ku=n||{})&&(t==="scale"?nS:iS):e.style&&!Il(e.style[t])?JE:~t.indexOf("-")?QE:Vl(e,t)},core:{_removeProperty:Ms,_getMatrix:$l}};en.utils.checkPrefix=Gr;en.core.getStyleSaver=cd;(function(i,e,t,n){var r=Jt(i+","+e+","+t,function(s){ti[s]=1});Jt(e,function(s){un.units[s]="deg",dd[s]=1}),Nn[r[13]]=i+","+e,Jt(n,function(s){var a=s.split(":");Nn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){un.units[i]="px"});en.registerPlugin(_d);var ll=en.registerPlugin(_d)||en;ll.core.Tween;function pS(i){var e=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,t=`
varying vec2 vUv;

uniform float dispFactor;
uniform float dpr;
uniform sampler2D disp;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec4 res;
uniform vec2 parent;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);

  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;
  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);


  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  vec4 _texture1 = texture2D(texture1, distortedPosition1);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);
  gl_FragColor = mix(_texture1, _texture2, dispFactor);
}
`;function n(){for(var ie=0;ie<arguments.length;ie++)if(arguments[ie]!==void 0)return arguments[ie]}function r(ie){var ue=ie.split(".").pop().toLowerCase();return ue in{jpg:!0,jpeg:!0,png:!0,gif:!0}?"image":ue in{mp4:!0,avi:!0,mov:!0,wmv:!0}?"video":void 0}var s=i.parent,a=i.dissImg,o=i.img1,l=i.img2,c=n(i.image1Type,r(o)),u=n(i.image2Type,r(l)),h=n(i.imagesRatio,1),d=n(i.intensity1,i.intensity,1),m=n(i.intensity2,i.intensity,1),g=n(i.angle,Math.PI/4),_=n(i.angle1,g),p=n(i.angle2,-g*3),f=n(i.speedIn,i.speed,1),x=n(i.speedOut,i.speed,1),v=n(i.hover,!0),M=n(i.easing,"expo.out"),T=n(i.video,!1);if(!s){console.warn("Parent missing");return}if(!(o&&l&&a)){console.warn("One or more images are missing");return}var y=new jx,A=new hh(s.offsetWidth/-2,s.offsetWidth/2,s.offsetHeight/2,s.offsetHeight/-2,1,1e3);A.position.z=1;var L=new gh({antialias:!1,alpha:!0});L.setPixelRatio(2),L.setClearColor(16777215,0),L.setSize(s.offsetWidth,s.offsetHeight),s.appendChild(L.domElement);var E=function(){L.render(y,A)},C=new Qx;C.crossOrigin="";var k=C.load(a,E);k.magFilter=k.minFilter=at;var $=function(){requestAnimationFrame($),L.render(y,A)};if($(),c==="image"){var j=C.load(o,E);j.magFilter=at}else if(c==="video"){var T=document.createElement("video");T.autoplay=!0,T.loop=!0,T.muted=!0,T.src=o,T.load();var j=new ia(T);T.addEventListener("loadeddata",function(){T.play(),j=new ia(T),j.magFilter=at,j.minFilter=at,K.uniforms.texture1.value=j},!1)}else console.warn("文件有误");if(u==="image"){var D=C.load(l,E);D.minFilter=at}else if(u==="video"){var O=document.createElement("video");O.autoplay=!0,O.loop=!0,O.muted=!0,O.src=l,O.load();var D=new ia(O);D.magFilter=at,D.minFilter=at,O.addEventListener("loadeddata",function(){O.play(),D=new ia(O),D.magFilter=at,D.minFilter=at,K.uniforms.texture2.value=D},!1)}else console.warn("文件有误");let W,H;var Z=h;s.offsetHeight/s.offsetWidth<Z?(W=1,H=s.offsetHeight/s.offsetWidth/Z):(W=s.offsetWidth/s.offsetHeight*Z,H=1);var K=new yi({uniforms:{intensity1:{type:"f",value:d},intensity2:{type:"f",value:m},dispFactor:{type:"f",value:0},angle1:{type:"f",value:_},angle2:{type:"f",value:p},texture1:{type:"t",value:j},texture2:{type:"t",value:D},disp:{type:"t",value:k},res:{type:"vec4",value:new yt(s.offsetWidth,s.offsetHeight,W,H)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:e,fragmentShader:t,transparent:!0,opacity:1}),ee=new Pa(s.offsetWidth,s.offsetHeight,1),N=new Jn(ee,K);y.add(N);function Y(){ll.to(K.uniforms.dispFactor,{duration:f,value:1,ease:M,onUpdate:E,onComplete:E})}function oe(){ll.to(K.uniforms.dispFactor,{duration:x,value:0,ease:M,onUpdate:E,onComplete:E})}v&&(s.addEventListener("mouseenter",Y),s.addEventListener("touchstart",Y),s.addEventListener("mouseleave",oe),s.addEventListener("touchend",oe)),window.addEventListener("resize",function(ie){s.offsetHeight/s.offsetWidth<Z?(W=1,H=s.offsetHeight/s.offsetWidth/Z):(W=s.offsetWidth/s.offsetHeight*Z,H=1),N.material.uniforms.res.value=new yt(s.offsetWidth,s.offsetHeight,W,H),L.setSize(s.offsetWidth,s.offsetHeight),E()}),this.next=Y,this.previous=oe}const mS="/gxjh/assets/diss-25ba2f84.png",_S=Xr({__name:"index",props:{img1:{default:Ir},img2:{default:Ir},dissImg:{default:mS},speedIn:{},speedOut:{}},setup(i){const e=i,t=Wt(),n=()=>{new pS({parent:t.value,...e})};return(r,s)=>{const a=Bf("lazy-data");return ls((Wi(),yr("div",{ref_key:"canvasRef",ref:t},null,512)),[[a,n]])}}});function gS(i){i.component("gxjh",Fp),i.component("image-hover",Hp),i.component("canvas-hover",_S)}function vS(i){gS(i)}const cl=typeof window<"u",Ri=(i,e=!1)=>e?Symbol.for(i):Symbol(i),xS=(i,e,t)=>ES({l:i,k:e,s:t}),ES=i=>JSON.stringify(i).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Mt=i=>typeof i=="number"&&isFinite(i),SS=i=>vd(i)==="[object Date]",Ai=i=>vd(i)==="[object RegExp]",Oa=i=>Ie(i)&&Object.keys(i).length===0,It=Object.assign;let Yu;const jn=()=>Yu||(Yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qu(i){return i.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const MS=Object.prototype.hasOwnProperty;function jl(i,e){return MS.call(i,e)}const st=Array.isArray,ft=i=>typeof i=="function",he=i=>typeof i=="string",Ge=i=>typeof i=="boolean",Ke=i=>i!==null&&typeof i=="object",gd=Object.prototype.toString,vd=i=>gd.call(i),Ie=i=>{if(!Ke(i))return!1;const e=Object.getPrototypeOf(i);return e===null||e.constructor===Object},yS=i=>i==null?"":st(i)||Ie(i)&&i.toString===gd?JSON.stringify(i,null,2):String(i);function TS(i,e=""){return i.reduce((t,n,r)=>r===0?t+n:t+e+n,"")}function Kl(i){let e=i;return()=>++e}function bS(i,e){typeof console<"u"&&(console.warn("[intlify] "+i),e&&console.warn(e.stack))}function AS(i,e,t){return{line:i,column:e,offset:t}}function ul(i,e,t){const n={start:i,end:e};return t!=null&&(n.source=t),n}const wS=/\{([0-9a-zA-Z]+)\}/g;function RS(i,...e){return e.length===1&&CS(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),i.replace(wS,(t,n)=>e.hasOwnProperty(n)?e[n]:"")}const xd=Object.assign,$u=i=>typeof i=="string",CS=i=>i!==null&&typeof i=="object";function Ed(i,e=""){return i.reduce((t,n,r)=>r===0?t+n:t+e+n,"")}const be={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},LS={[be.EXPECTED_TOKEN]:"Expected token: '{0}'",[be.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[be.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[be.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[be.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[be.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[be.EMPTY_PLACEHOLDER]:"Empty placeholder",[be.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[be.INVALID_LINKED_FORMAT]:"Invalid linked format",[be.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[be.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[be.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[be.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[be.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[be.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function $r(i,e,t={}){const{domain:n,messages:r,args:s}=t,a=RS((r||LS)[i]||"",...s||[]),o=new SyntaxError(String(a));return o.code=i,e&&(o.location=e),o.domain=n,o}function PS(i){throw i}const Wn=" ",DS="\r",Gt=`
`,IS=String.fromCharCode(8232),NS=String.fromCharCode(8233);function US(i){const e=i;let t=0,n=1,r=1,s=0;const a=A=>e[A]===DS&&e[A+1]===Gt,o=A=>e[A]===Gt,l=A=>e[A]===NS,c=A=>e[A]===IS,u=A=>a(A)||o(A)||l(A)||c(A),h=()=>t,d=()=>n,m=()=>r,g=()=>s,_=A=>a(A)||l(A)||c(A)?Gt:e[A],p=()=>_(t),f=()=>_(t+s);function x(){return s=0,u(t)&&(n++,r=0),a(t)&&t++,t++,r++,e[t]}function v(){return a(t+s)&&s++,s++,e[t+s]}function M(){t=0,n=1,r=1,s=0}function T(A=0){s=A}function y(){const A=t+s;for(;A!==t;)x();s=0}return{index:h,line:d,column:m,peekOffset:g,charAt:_,currentChar:p,currentPeek:f,next:x,peek:v,reset:M,resetPeek:T,skipToPeek:y}}const oi=void 0,OS=".",ju="'",FS="tokenizer";function kS(i,e={}){const t=e.location!==!1,n=US(i),r=()=>n.index(),s=()=>AS(n.line(),n.column(),n.index()),a=s(),o=r(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function h(P,w,U,...Q){const me=c();if(w.column+=U,w.offset+=U,u){const de=t?ul(me.startLoc,w):null,ye=$r(P,de,{domain:FS,args:Q});u(ye)}}function d(P,w,U){P.endLoc=s(),P.currentType=w;const Q={type:w};return t&&(Q.loc=ul(P.startLoc,P.endLoc)),U!=null&&(Q.value=U),Q}const m=P=>d(P,14);function g(P,w){return P.currentChar()===w?(P.next(),w):(h(be.EXPECTED_TOKEN,s(),0,w),"")}function _(P){let w="";for(;P.currentPeek()===Wn||P.currentPeek()===Gt;)w+=P.currentPeek(),P.peek();return w}function p(P){const w=_(P);return P.skipToPeek(),w}function f(P){if(P===oi)return!1;const w=P.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w===95}function x(P){if(P===oi)return!1;const w=P.charCodeAt(0);return w>=48&&w<=57}function v(P,w){const{currentType:U}=w;if(U!==2)return!1;_(P);const Q=f(P.currentPeek());return P.resetPeek(),Q}function M(P,w){const{currentType:U}=w;if(U!==2)return!1;_(P);const Q=P.currentPeek()==="-"?P.peek():P.currentPeek(),me=x(Q);return P.resetPeek(),me}function T(P,w){const{currentType:U}=w;if(U!==2)return!1;_(P);const Q=P.currentPeek()===ju;return P.resetPeek(),Q}function y(P,w){const{currentType:U}=w;if(U!==8)return!1;_(P);const Q=P.currentPeek()===".";return P.resetPeek(),Q}function A(P,w){const{currentType:U}=w;if(U!==9)return!1;_(P);const Q=f(P.currentPeek());return P.resetPeek(),Q}function L(P,w){const{currentType:U}=w;if(!(U===8||U===12))return!1;_(P);const Q=P.currentPeek()===":";return P.resetPeek(),Q}function E(P,w){const{currentType:U}=w;if(U!==10)return!1;const Q=()=>{const de=P.currentPeek();return de==="{"?f(P.peek()):de==="@"||de==="%"||de==="|"||de===":"||de==="."||de===Wn||!de?!1:de===Gt?(P.peek(),Q()):f(de)},me=Q();return P.resetPeek(),me}function C(P){_(P);const w=P.currentPeek()==="|";return P.resetPeek(),w}function k(P){const w=_(P),U=P.currentPeek()==="%"&&P.peek()==="{";return P.resetPeek(),{isModulo:U,hasSpace:w.length>0}}function $(P,w=!0){const U=(me=!1,de="",ye=!1)=>{const He=P.currentPeek();return He==="{"?de==="%"?!1:me:He==="@"||!He?de==="%"?!0:me:He==="%"?(P.peek(),U(me,"%",!0)):He==="|"?de==="%"||ye?!0:!(de===Wn||de===Gt):He===Wn?(P.peek(),U(!0,Wn,ye)):He===Gt?(P.peek(),U(!0,Gt,ye)):!0},Q=U();return w&&P.resetPeek(),Q}function j(P,w){const U=P.currentChar();return U===oi?oi:w(U)?(P.next(),U):null}function D(P){return j(P,U=>{const Q=U.charCodeAt(0);return Q>=97&&Q<=122||Q>=65&&Q<=90||Q>=48&&Q<=57||Q===95||Q===36})}function O(P){return j(P,U=>{const Q=U.charCodeAt(0);return Q>=48&&Q<=57})}function W(P){return j(P,U=>{const Q=U.charCodeAt(0);return Q>=48&&Q<=57||Q>=65&&Q<=70||Q>=97&&Q<=102})}function H(P){let w="",U="";for(;w=O(P);)U+=w;return U}function Z(P){p(P);const w=P.currentChar();return w!=="%"&&h(be.EXPECTED_TOKEN,s(),0,w),P.next(),"%"}function K(P){let w="";for(;;){const U=P.currentChar();if(U==="{"||U==="}"||U==="@"||U==="|"||!U)break;if(U==="%")if($(P))w+=U,P.next();else break;else if(U===Wn||U===Gt)if($(P))w+=U,P.next();else{if(C(P))break;w+=U,P.next()}else w+=U,P.next()}return w}function ee(P){p(P);let w="",U="";for(;w=D(P);)U+=w;return P.currentChar()===oi&&h(be.UNTERMINATED_CLOSING_BRACE,s(),0),U}function N(P){p(P);let w="";return P.currentChar()==="-"?(P.next(),w+=`-${H(P)}`):w+=H(P),P.currentChar()===oi&&h(be.UNTERMINATED_CLOSING_BRACE,s(),0),w}function Y(P){p(P),g(P,"'");let w="",U="";const Q=de=>de!==ju&&de!==Gt;for(;w=j(P,Q);)w==="\\"?U+=oe(P):U+=w;const me=P.currentChar();return me===Gt||me===oi?(h(be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),me===Gt&&(P.next(),g(P,"'")),U):(g(P,"'"),U)}function oe(P){const w=P.currentChar();switch(w){case"\\":case"'":return P.next(),`\\${w}`;case"u":return ie(P,w,4);case"U":return ie(P,w,6);default:return h(be.UNKNOWN_ESCAPE_SEQUENCE,s(),0,w),""}}function ie(P,w,U){g(P,w);let Q="";for(let me=0;me<U;me++){const de=W(P);if(!de){h(be.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${w}${Q}${P.currentChar()}`);break}Q+=de}return`\\${w}${Q}`}function ue(P){p(P);let w="",U="";const Q=me=>me!=="{"&&me!=="}"&&me!==Wn&&me!==Gt;for(;w=j(P,Q);)U+=w;return U}function Se(P){let w="",U="";for(;w=D(P);)U+=w;return U}function Oe(P){const w=(U=!1,Q)=>{const me=P.currentChar();return me==="{"||me==="%"||me==="@"||me==="|"||me==="("||me===")"||!me||me===Wn?Q:me===Gt||me===OS?(Q+=me,P.next(),w(U,Q)):(Q+=me,P.next(),w(!0,Q))};return w(!1,"")}function Me(P){p(P);const w=g(P,"|");return p(P),w}function Ae(P,w){let U=null;switch(P.currentChar()){case"{":return w.braceNest>=1&&h(be.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),P.next(),U=d(w,2,"{"),p(P),w.braceNest++,U;case"}":return w.braceNest>0&&w.currentType===2&&h(be.EMPTY_PLACEHOLDER,s(),0),P.next(),U=d(w,3,"}"),w.braceNest--,w.braceNest>0&&p(P),w.inLinked&&w.braceNest===0&&(w.inLinked=!1),U;case"@":return w.braceNest>0&&h(be.UNTERMINATED_CLOSING_BRACE,s(),0),U=qe(P,w)||m(w),w.braceNest=0,U;default:let me=!0,de=!0,ye=!0;if(C(P))return w.braceNest>0&&h(be.UNTERMINATED_CLOSING_BRACE,s(),0),U=d(w,1,Me(P)),w.braceNest=0,w.inLinked=!1,U;if(w.braceNest>0&&(w.currentType===5||w.currentType===6||w.currentType===7))return h(be.UNTERMINATED_CLOSING_BRACE,s(),0),w.braceNest=0,Ce(P,w);if(me=v(P,w))return U=d(w,5,ee(P)),p(P),U;if(de=M(P,w))return U=d(w,6,N(P)),p(P),U;if(ye=T(P,w))return U=d(w,7,Y(P)),p(P),U;if(!me&&!de&&!ye)return U=d(w,13,ue(P)),h(be.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,U.value),p(P),U;break}return U}function qe(P,w){const{currentType:U}=w;let Q=null;const me=P.currentChar();switch((U===8||U===9||U===12||U===10)&&(me===Gt||me===Wn)&&h(be.INVALID_LINKED_FORMAT,s(),0),me){case"@":return P.next(),Q=d(w,8,"@"),w.inLinked=!0,Q;case".":return p(P),P.next(),d(w,9,".");case":":return p(P),P.next(),d(w,10,":");default:return C(P)?(Q=d(w,1,Me(P)),w.braceNest=0,w.inLinked=!1,Q):y(P,w)||L(P,w)?(p(P),qe(P,w)):A(P,w)?(p(P),d(w,12,Se(P))):E(P,w)?(p(P),me==="{"?Ae(P,w)||Q:d(w,11,Oe(P))):(U===8&&h(be.INVALID_LINKED_FORMAT,s(),0),w.braceNest=0,w.inLinked=!1,Ce(P,w))}}function Ce(P,w){let U={type:14};if(w.braceNest>0)return Ae(P,w)||m(w);if(w.inLinked)return qe(P,w)||m(w);switch(P.currentChar()){case"{":return Ae(P,w)||m(w);case"}":return h(be.UNBALANCED_CLOSING_BRACE,s(),0),P.next(),d(w,3,"}");case"@":return qe(P,w)||m(w);default:if(C(P))return U=d(w,1,Me(P)),w.braceNest=0,w.inLinked=!1,U;const{isModulo:me,hasSpace:de}=k(P);if(me)return de?d(w,0,K(P)):d(w,4,Z(P));if($(P))return d(w,0,K(P));break}return U}function z(){const{currentType:P,offset:w,startLoc:U,endLoc:Q}=l;return l.lastType=P,l.lastOffset=w,l.lastStartLoc=U,l.lastEndLoc=Q,l.offset=r(),l.startLoc=s(),n.currentChar()===oi?d(l,14):Ce(n,l)}return{nextToken:z,currentOffset:r,currentPosition:s,context:c}}const BS="parser",zS=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function HS(i,e,t){switch(i){case"\\\\":return"\\";case"\\'":return"'";default:{const n=parseInt(e||t,16);return n<=55295||n>=57344?String.fromCodePoint(n):"�"}}}function GS(i={}){const e=i.location!==!1,{onError:t}=i;function n(f,x,v,M,...T){const y=f.currentPosition();if(y.offset+=M,y.column+=M,t){const A=e?ul(v,y):null,L=$r(x,A,{domain:BS,args:T});t(L)}}function r(f,x,v){const M={type:f};return e&&(M.start=x,M.end=x,M.loc={start:v,end:v}),M}function s(f,x,v,M){M&&(f.type=M),e&&(f.end=x,f.loc&&(f.loc.end=v))}function a(f,x){const v=f.context(),M=r(3,v.offset,v.startLoc);return M.value=x,s(M,f.currentOffset(),f.currentPosition()),M}function o(f,x){const v=f.context(),{lastOffset:M,lastStartLoc:T}=v,y=r(5,M,T);return y.index=parseInt(x,10),f.nextToken(),s(y,f.currentOffset(),f.currentPosition()),y}function l(f,x){const v=f.context(),{lastOffset:M,lastStartLoc:T}=v,y=r(4,M,T);return y.key=x,f.nextToken(),s(y,f.currentOffset(),f.currentPosition()),y}function c(f,x){const v=f.context(),{lastOffset:M,lastStartLoc:T}=v,y=r(9,M,T);return y.value=x.replace(zS,HS),f.nextToken(),s(y,f.currentOffset(),f.currentPosition()),y}function u(f){const x=f.nextToken(),v=f.context(),{lastOffset:M,lastStartLoc:T}=v,y=r(8,M,T);return x.type!==12?(n(f,be.UNEXPECTED_EMPTY_LINKED_MODIFIER,v.lastStartLoc,0),y.value="",s(y,M,T),{nextConsumeToken:x,node:y}):(x.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,Pn(x)),y.value=x.value||"",s(y,f.currentOffset(),f.currentPosition()),{node:y})}function h(f,x){const v=f.context(),M=r(7,v.offset,v.startLoc);return M.value=x,s(M,f.currentOffset(),f.currentPosition()),M}function d(f){const x=f.context(),v=r(6,x.offset,x.startLoc);let M=f.nextToken();if(M.type===9){const T=u(f);v.modifier=T.node,M=T.nextConsumeToken||f.nextToken()}switch(M.type!==10&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(M)),M=f.nextToken(),M.type===2&&(M=f.nextToken()),M.type){case 11:M.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(M)),v.key=h(f,M.value||"");break;case 5:M.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(M)),v.key=l(f,M.value||"");break;case 6:M.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(M)),v.key=o(f,M.value||"");break;case 7:M.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(M)),v.key=c(f,M.value||"");break;default:n(f,be.UNEXPECTED_EMPTY_LINKED_KEY,x.lastStartLoc,0);const T=f.context(),y=r(7,T.offset,T.startLoc);return y.value="",s(y,T.offset,T.startLoc),v.key=y,s(v,T.offset,T.startLoc),{nextConsumeToken:M,node:v}}return s(v,f.currentOffset(),f.currentPosition()),{node:v}}function m(f){const x=f.context(),v=x.currentType===1?f.currentOffset():x.offset,M=x.currentType===1?x.endLoc:x.startLoc,T=r(2,v,M);T.items=[];let y=null;do{const E=y||f.nextToken();switch(y=null,E.type){case 0:E.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(E)),T.items.push(a(f,E.value||""));break;case 6:E.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(E)),T.items.push(o(f,E.value||""));break;case 5:E.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(E)),T.items.push(l(f,E.value||""));break;case 7:E.value==null&&n(f,be.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Pn(E)),T.items.push(c(f,E.value||""));break;case 8:const C=d(f);T.items.push(C.node),y=C.nextConsumeToken||null;break}}while(x.currentType!==14&&x.currentType!==1);const A=x.currentType===1?x.lastOffset:f.currentOffset(),L=x.currentType===1?x.lastEndLoc:f.currentPosition();return s(T,A,L),T}function g(f,x,v,M){const T=f.context();let y=M.items.length===0;const A=r(1,x,v);A.cases=[],A.cases.push(M);do{const L=m(f);y||(y=L.items.length===0),A.cases.push(L)}while(T.currentType!==14);return y&&n(f,be.MUST_HAVE_MESSAGES_IN_PLURAL,v,0),s(A,f.currentOffset(),f.currentPosition()),A}function _(f){const x=f.context(),{offset:v,startLoc:M}=x,T=m(f);return x.currentType===14?T:g(f,v,M,T)}function p(f){const x=kS(f,xd({},i)),v=x.context(),M=r(0,v.offset,v.startLoc);return e&&M.loc&&(M.loc.source=f),M.body=_(x),i.onCacheKey&&(M.cacheKey=i.onCacheKey(f)),v.currentType!==14&&n(x,be.UNEXPECTED_LEXICAL_ANALYSIS,v.lastStartLoc,0,f[v.offset]||""),s(M,x.currentOffset(),x.currentPosition()),M}return{parse:p}}function Pn(i){if(i.type===14)return"EOF";const e=(i.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function VS(i,e={}){const t={ast:i,helpers:new Set};return{context:()=>t,helper:s=>(t.helpers.add(s),s)}}function Ku(i,e){for(let t=0;t<i.length;t++)Zl(i[t],e)}function Zl(i,e){switch(i.type){case 1:Ku(i.cases,e),e.helper("plural");break;case 2:Ku(i.items,e);break;case 6:Zl(i.key,e),e.helper("linked"),e.helper("type");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function WS(i,e={}){const t=VS(i);t.helper("normalize"),i.body&&Zl(i.body,t);const n=t.context();i.helpers=Array.from(n.helpers)}function XS(i){const e=i.body;return e.type===2?Zu(e):e.cases.forEach(t=>Zu(t)),i}function Zu(i){if(i.items.length===1){const e=i.items[0];(e.type===3||e.type===9)&&(i.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<i.items.length;t++){const n=i.items[t];if(!(n.type===3||n.type===9)||n.value==null)break;e.push(n.value)}if(e.length===i.items.length){i.static=Ed(e);for(let t=0;t<i.items.length;t++){const n=i.items[t];(n.type===3||n.type===9)&&delete n.value}}}}const YS="minifier";function Mr(i){switch(i.t=i.type,i.type){case 0:const e=i;Mr(e.body),e.b=e.body,delete e.body;break;case 1:const t=i,n=t.cases;for(let u=0;u<n.length;u++)Mr(n[u]);t.c=n,delete t.cases;break;case 2:const r=i,s=r.items;for(let u=0;u<s.length;u++)Mr(s[u]);r.i=s,delete r.items,r.static&&(r.s=r.static,delete r.static);break;case 3:case 9:case 8:case 7:const a=i;a.value&&(a.v=a.value,delete a.value);break;case 6:const o=i;Mr(o.key),o.k=o.key,delete o.key,o.modifier&&(Mr(o.modifier),o.m=o.modifier,delete o.modifier);break;case 5:const l=i;l.i=l.index,delete l.index;break;case 4:const c=i;c.k=c.key,delete c.key;break;default:throw $r(be.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:YS,args:[i.type]})}delete i.type}const qS="parser";function $S(i,e){const{sourceMap:t,filename:n,breakLineCode:r,needIndent:s}=e,a=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};a&&i.loc&&(o.source=i.loc.source);const l=()=>o;function c(p,f){o.code+=p}function u(p,f=!0){const x=f?r:"";c(s?x+"  ".repeat(p):x)}function h(p=!0){const f=++o.indentLevel;p&&u(f)}function d(p=!0){const f=--o.indentLevel;p&&u(f)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:h,deindent:d,newline:m,helper:p=>`_${p}`,needIndent:()=>o.needIndent}}function jS(i,e){const{helper:t}=i;i.push(`${t("linked")}(`),Vr(i,e.key),e.modifier?(i.push(", "),Vr(i,e.modifier),i.push(", _type")):i.push(", undefined, _type"),i.push(")")}function KS(i,e){const{helper:t,needIndent:n}=i;i.push(`${t("normalize")}([`),i.indent(n());const r=e.items.length;for(let s=0;s<r&&(Vr(i,e.items[s]),s!==r-1);s++)i.push(", ");i.deindent(n()),i.push("])")}function ZS(i,e){const{helper:t,needIndent:n}=i;if(e.cases.length>1){i.push(`${t("plural")}([`),i.indent(n());const r=e.cases.length;for(let s=0;s<r&&(Vr(i,e.cases[s]),s!==r-1);s++)i.push(", ");i.deindent(n()),i.push("])")}}function JS(i,e){e.body?Vr(i,e.body):i.push("null")}function Vr(i,e){const{helper:t}=i;switch(e.type){case 0:JS(i,e);break;case 1:ZS(i,e);break;case 2:KS(i,e);break;case 6:jS(i,e);break;case 8:i.push(JSON.stringify(e.value),e);break;case 7:i.push(JSON.stringify(e.value),e);break;case 5:i.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:i.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:i.push(JSON.stringify(e.value),e);break;case 3:i.push(JSON.stringify(e.value),e);break;default:throw $r(be.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:qS,args:[e.type]})}}const QS=(i,e={})=>{const t=$u(e.mode)?e.mode:"normal",n=$u(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,a=e.needIndent?e.needIndent:t!=="arrow",o=i.helpers||[],l=$S(i,{mode:t,filename:n,sourceMap:r,breakLineCode:s,needIndent:a});l.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${Ed(o.map(h=>`${h}: _${h}`),", ")} } = ctx`),l.newline()),l.push("return "),Vr(l,i),l.deindent(a),l.push("}"),delete i.helpers;const{code:c,map:u}=l.context();return{ast:i,code:c,map:u?u.toJSON():void 0}};function eM(i,e={}){const t=xd({},e),n=!!t.jit,r=!!t.minify,s=t.optimize==null?!0:t.optimize,o=GS(t).parse(i);return n?(s&&XS(o),r&&Mr(o),{ast:o,code:""}):(WS(o,t),QS(o,t))}function tM(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(jn().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(jn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(jn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const Ci=[];Ci[0]={w:[0],i:[3,0],"[":[4],o:[7]};Ci[1]={w:[1],".":[2],"[":[4],o:[7]};Ci[2]={w:[2],i:[3,0],0:[3,0]};Ci[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Ci[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Ci[5]={"'":[4,0],o:8,l:[5,0]};Ci[6]={'"':[4,0],o:8,l:[6,0]};const nM=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function iM(i){return nM.test(i)}function rM(i){const e=i.charCodeAt(0),t=i.charCodeAt(i.length-1);return e===t&&(e===34||e===39)?i.slice(1,-1):i}function sM(i){if(i==null)return"o";switch(i.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return i;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function aM(i){const e=i.trim();return i.charAt(0)==="0"&&isNaN(parseInt(i))?!1:iM(e)?rM(e):"*"+e}function oM(i){const e=[];let t=-1,n=0,r=0,s,a,o,l,c,u,h;const d=[];d[0]=()=>{a===void 0?a=o:a+=o},d[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,n=4,d[0]();else{if(r=0,a===void 0||(a=aM(a),a===!1))return!1;d[1]()}};function m(){const g=i[t+1];if(n===5&&g==="'"||n===6&&g==='"')return t++,o="\\"+g,d[0](),!0}for(;n!==null;)if(t++,s=i[t],!(s==="\\"&&m())){if(l=sM(s),h=Ci[n],c=h[l]||h.l||8,c===8||(n=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(o=s,u()===!1))))return;if(n===7)return e}}const Ju=new Map;function lM(i,e){return Ke(i)?i[e]:null}function cM(i,e){if(!Ke(i))return null;let t=Ju.get(e);if(t||(t=oM(e),t&&Ju.set(e,t)),!t)return null;const n=t.length;let r=i,s=0;for(;s<n;){const a=r[t[s]];if(a===void 0)return null;r=a,s++}return r}const uM=i=>i,fM=i=>"",hM="text",dM=i=>i.length===0?"":TS(i),pM=yS;function Qu(i,e){return i=Math.abs(i),e===2?i?i>1?1:0:1:i?Math.min(i,2):0}function mM(i){const e=Mt(i.pluralIndex)?i.pluralIndex:-1;return i.named&&(Mt(i.named.count)||Mt(i.named.n))?Mt(i.named.count)?i.named.count:Mt(i.named.n)?i.named.n:e:e}function _M(i,e){e.count||(e.count=i),e.n||(e.n=i)}function gM(i={}){const e=i.locale,t=mM(i),n=Ke(i.pluralRules)&&he(e)&&ft(i.pluralRules[e])?i.pluralRules[e]:Qu,r=Ke(i.pluralRules)&&he(e)&&ft(i.pluralRules[e])?Qu:void 0,s=f=>f[n(t,f.length,r)],a=i.list||[],o=f=>a[f],l=i.named||{};Mt(i.pluralIndex)&&_M(t,l);const c=f=>l[f];function u(f){const x=ft(i.messages)?i.messages(f):Ke(i.messages)?i.messages[f]:!1;return x||(i.parent?i.parent.message(f):fM)}const h=f=>i.modifiers?i.modifiers[f]:uM,d=Ie(i.processor)&&ft(i.processor.normalize)?i.processor.normalize:dM,m=Ie(i.processor)&&ft(i.processor.interpolate)?i.processor.interpolate:pM,g=Ie(i.processor)&&he(i.processor.type)?i.processor.type:hM,p={list:o,named:c,plural:s,linked:(f,...x)=>{const[v,M]=x;let T="text",y="";x.length===1?Ke(v)?(y=v.modifier||y,T=v.type||T):he(v)&&(y=v||y):x.length===2&&(he(v)&&(y=v||y),he(M)&&(T=M||T));const A=u(f)(p),L=T==="vnode"&&st(A)&&y?A[0]:A;return y?h(y)(L,T):L},message:u,type:g,interpolate:m,normalize:d,values:It({},a,l)};return p}let bs=null;function vM(i){bs=i}function xM(i,e,t){bs&&bs.emit("i18n:init",{timestamp:Date.now(),i18n:i,version:e,meta:t})}const EM=SM("function:translate");function SM(i){return e=>bs&&bs.emit(i,e)}const MM={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function Jl(i,e){return e.locale!=null?ef(e.locale):ef(i.locale)}let Po;function ef(i){return he(i)?i:Po!=null&&i.resolvedOnce?Po:Po=i()}function yM(i,e,t){return[...new Set([t,...st(e)?e:Ke(e)?Object.keys(e):he(e)?[e]:[t]])]}function Sd(i,e,t){const n=he(t)?t:Wr,r=i;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(n);if(!s){s=[];let a=[t];for(;st(a);)a=tf(s,a,e);const o=st(e)||!Ie(e)?e:e.default?e.default:null;a=he(o)?[o]:o,st(a)&&tf(s,a,!1),r.__localeChainCache.set(n,s)}return s}function tf(i,e,t){let n=!0;for(let r=0;r<e.length&&Ge(n);r++){const s=e[r];he(s)&&(n=TM(i,e[r],t))}return n}function TM(i,e,t){let n;const r=e.split("-");do{const s=r.join("-");n=bM(i,s,t),r.splice(-1,1)}while(r.length&&n===!0);return n}function bM(i,e,t){let n=!1;if(!i.includes(e)&&(n=!0,e)){n=e[e.length-1]!=="!";const r=e.replace(/!/g,"");i.push(r),(st(t)||Ie(t))&&t[r]&&(n=t[r])}return n}const AM="9.5.0",Fa=-1,Wr="en-US",nf="",rf=i=>`${i.charAt(0).toLocaleUpperCase()}${i.substr(1)}`;function wM(){return{upper:(i,e)=>e==="text"&&he(i)?i.toUpperCase():e==="vnode"&&Ke(i)&&"__v_isVNode"in i?i.children.toUpperCase():i,lower:(i,e)=>e==="text"&&he(i)?i.toLowerCase():e==="vnode"&&Ke(i)&&"__v_isVNode"in i?i.children.toLowerCase():i,capitalize:(i,e)=>e==="text"&&he(i)?rf(i):e==="vnode"&&Ke(i)&&"__v_isVNode"in i?rf(i.children):i}}let Md;function sf(i){Md=i}let yd;function RM(i){yd=i}let Td;function CM(i){Td=i}let bd=null;const af=i=>{bd=i},LM=()=>bd;let Ad=null;const of=i=>{Ad=i},PM=()=>Ad;let lf=0;function DM(i={}){const e=ft(i.onWarn)?i.onWarn:bS,t=he(i.version)?i.version:AM,n=he(i.locale)||ft(i.locale)?i.locale:Wr,r=ft(n)?Wr:n,s=st(i.fallbackLocale)||Ie(i.fallbackLocale)||he(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:r,a=Ie(i.messages)?i.messages:{[r]:{}},o=Ie(i.datetimeFormats)?i.datetimeFormats:{[r]:{}},l=Ie(i.numberFormats)?i.numberFormats:{[r]:{}},c=It({},i.modifiers||{},wM()),u=i.pluralRules||{},h=ft(i.missing)?i.missing:null,d=Ge(i.missingWarn)||Ai(i.missingWarn)?i.missingWarn:!0,m=Ge(i.fallbackWarn)||Ai(i.fallbackWarn)?i.fallbackWarn:!0,g=!!i.fallbackFormat,_=!!i.unresolving,p=ft(i.postTranslation)?i.postTranslation:null,f=Ie(i.processor)?i.processor:null,x=Ge(i.warnHtmlMessage)?i.warnHtmlMessage:!0,v=!!i.escapeParameter,M=ft(i.messageCompiler)?i.messageCompiler:Md,T=ft(i.messageResolver)?i.messageResolver:yd||lM,y=ft(i.localeFallbacker)?i.localeFallbacker:Td||yM,A=Ke(i.fallbackContext)?i.fallbackContext:void 0,L=i,E=Ke(L.__datetimeFormatters)?L.__datetimeFormatters:new Map,C=Ke(L.__numberFormatters)?L.__numberFormatters:new Map,k=Ke(L.__meta)?L.__meta:{};lf++;const $={version:t,cid:lf,locale:n,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:h,missingWarn:d,fallbackWarn:m,fallbackFormat:g,unresolving:_,postTranslation:p,processor:f,warnHtmlMessage:x,escapeParameter:v,messageCompiler:M,messageResolver:T,localeFallbacker:y,fallbackContext:A,onWarn:e,__meta:k};return $.datetimeFormats=o,$.numberFormats=l,$.__datetimeFormatters=E,$.__numberFormatters=C,__INTLIFY_PROD_DEVTOOLS__&&xM($,t,k),$}function Ql(i,e,t,n,r){const{missing:s,onWarn:a}=i;if(s!==null){const o=s(i,t,e,r);return he(o)?o:e}else return e}function is(i,e,t){const n=i;n.__localeChainCache=new Map,i.localeFallbacker(i,t,e)}function Do(i){return t=>IM(t,i)}function IM(i,e){const t=e.b||e.body;if((t.t||t.type)===1){const n=t,r=n.c||n.cases;return i.plural(r.reduce((s,a)=>[...s,cf(i,a)],[]))}else return cf(i,t)}function cf(i,e){const t=e.s||e.static;if(t)return i.type==="text"?t:i.normalize([t]);{const n=(e.i||e.items).reduce((r,s)=>[...r,fl(i,s)],[]);return i.normalize(n)}}function fl(i,e){const t=e.t||e.type;switch(t){case 3:const n=e;return n.v||n.value;case 9:const r=e;return r.v||r.value;case 4:const s=e;return i.interpolate(i.named(s.k||s.key));case 5:const a=e;return i.interpolate(i.list(a.i!=null?a.i:a.index));case 6:const o=e,l=o.m||o.modifier;return i.linked(fl(i,o.k||o.key),l?fl(i,l):void 0,i.type);case 7:const c=e;return c.v||c.value;case 8:const u=e;return u.v||u.value;default:throw new Error(`unhandled node type on format message part: ${t}`)}}const wd=be.__EXTEND_POINT__,sa=Kl(wd),mi={INVALID_ARGUMENT:wd,INVALID_DATE_ARGUMENT:sa(),INVALID_ISO_DATE_ARGUMENT:sa(),NOT_SUPPORT_NON_STRING_MESSAGE:sa(),__EXTEND_POINT__:sa()};function Yi(i){return $r(i,null,void 0)}const Rd=i=>i;let wr=Object.create(null);const As=i=>Ke(i)&&(i.t===0||i.type===0)&&("b"in i||"body"in i);function Cd(i,e={}){let t=!1;const n=e.onError||PS;return e.onError=r=>{t=!0,n(r)},{...eM(i,e),detectError:t}}const NM=(i,e)=>{if(!he(i))throw Yi(mi.NOT_SUPPORT_NON_STRING_MESSAGE);{Ge(e.warnHtmlMessage)&&e.warnHtmlMessage;const n=(e.onCacheKey||Rd)(i),r=wr[n];if(r)return r;const{code:s,detectError:a}=Cd(i,e),o=new Function(`return ${s}`)();return a?o:wr[n]=o}};function UM(i,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&he(i)){Ge(e.warnHtmlMessage)&&e.warnHtmlMessage;const n=(e.onCacheKey||Rd)(i),r=wr[n];if(r)return r;const{ast:s,detectError:a}=Cd(i,{...e,location:!1,jit:!0}),o=Do(s);return a?o:wr[n]=o}else{const t=i.cacheKey;if(t){const n=wr[t];return n||(wr[t]=Do(i))}else return Do(i)}}const uf=()=>"",An=i=>ft(i);function ff(i,...e){const{fallbackFormat:t,postTranslation:n,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=i,[l,c]=hl(...e),u=Ge(c.missingWarn)?c.missingWarn:i.missingWarn,h=Ge(c.fallbackWarn)?c.fallbackWarn:i.fallbackWarn,d=Ge(c.escapeParameter)?c.escapeParameter:i.escapeParameter,m=!!c.resolvedMessage,g=he(c.default)||Ge(c.default)?Ge(c.default)?s?l:()=>l:c.default:t?s?l:()=>l:"",_=t||g!=="",p=Jl(i,c);d&&OM(c);let[f,x,v]=m?[l,p,o[p]||{}]:Ld(i,l,p,a,h,u),M=f,T=l;if(!m&&!(he(M)||As(M)||An(M))&&_&&(M=g,T=M),!m&&(!(he(M)||As(M)||An(M))||!he(x)))return r?Fa:l;let y=!1;const A=()=>{y=!0},L=An(M)?M:Pd(i,l,x,M,T,A);if(y)return M;const E=BM(i,x,v,c),C=gM(E),k=FM(i,L,C),$=n?n(k,l):k;if(__INTLIFY_PROD_DEVTOOLS__){const j={timestamp:Date.now(),key:he(l)?l:An(M)?M.key:"",locale:x||(An(M)?M.locale:""),format:he(M)?M:An(M)?M.source:"",message:$};j.meta=It({},i.__meta,LM()||{}),EM(j)}return $}function OM(i){st(i.list)?i.list=i.list.map(e=>he(e)?qu(e):e):Ke(i.named)&&Object.keys(i.named).forEach(e=>{he(i.named[e])&&(i.named[e]=qu(i.named[e]))})}function Ld(i,e,t,n,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=i,u=c(i,n,t);let h={},d,m=null;const g="translate";for(let _=0;_<u.length&&(d=u[_],h=a[d]||{},(m=l(h,e))===null&&(m=h[e]),!(he(m)||As(m)||An(m)));_++){const p=Ql(i,e,d,s,g);p!==e&&(m=p)}return[m,d,h]}function Pd(i,e,t,n,r,s){const{messageCompiler:a,warnHtmlMessage:o}=i;if(An(n)){const c=n;return c.locale=c.locale||t,c.key=c.key||e,c}if(a==null){const c=()=>n;return c.locale=t,c.key=e,c}const l=a(n,kM(i,t,r,n,o,s));return l.locale=t,l.key=e,l.source=n,l}function FM(i,e,t){return e(t)}function hl(...i){const[e,t,n]=i,r={};if(!he(e)&&!Mt(e)&&!An(e)&&!As(e))throw Yi(mi.INVALID_ARGUMENT);const s=Mt(e)?String(e):(An(e),e);return Mt(t)?r.plural=t:he(t)?r.default=t:Ie(t)&&!Oa(t)?r.named=t:st(t)&&(r.list=t),Mt(n)?r.plural=n:he(n)?r.default=n:Ie(n)&&It(r,n),[s,r]}function kM(i,e,t,n,r,s){return{locale:e,key:t,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>xS(e,t,a)}}function BM(i,e,t,n){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=i,d={locale:e,modifiers:r,pluralRules:s,messages:m=>{let g=a(t,m);if(g==null&&u){const[,,_]=Ld(u,m,e,o,l,c);g=a(_,m)}if(he(g)||As(g)){let _=!1;const f=Pd(i,m,e,g,m,()=>{_=!0});return _?uf:f}else return An(g)?g:uf}};return i.processor&&(d.processor=i.processor),n.list&&(d.list=n.list),n.named&&(d.named=n.named),Mt(n.plural)&&(d.pluralIndex=n.plural),d}function hf(i,...e){const{datetimeFormats:t,unresolving:n,fallbackLocale:r,onWarn:s,localeFallbacker:a}=i,{__datetimeFormatters:o}=i,[l,c,u,h]=dl(...e),d=Ge(u.missingWarn)?u.missingWarn:i.missingWarn;Ge(u.fallbackWarn)?u.fallbackWarn:i.fallbackWarn;const m=!!u.part,g=Jl(i,u),_=a(i,r,g);if(!he(l)||l==="")return new Intl.DateTimeFormat(g,h).format(c);let p={},f,x=null;const v="datetime format";for(let y=0;y<_.length&&(f=_[y],p=t[f]||{},x=p[l],!Ie(x));y++)Ql(i,l,f,d,v);if(!Ie(x)||!he(f))return n?Fa:l;let M=`${f}__${l}`;Oa(h)||(M=`${M}__${JSON.stringify(h)}`);let T=o.get(M);return T||(T=new Intl.DateTimeFormat(f,It({},x,h)),o.set(M,T)),m?T.formatToParts(c):T.format(c)}const Dd=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function dl(...i){const[e,t,n,r]=i,s={};let a={},o;if(he(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Yi(mi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw Yi(mi.INVALID_ISO_DATE_ARGUMENT)}}else if(SS(e)){if(isNaN(e.getTime()))throw Yi(mi.INVALID_DATE_ARGUMENT);o=e}else if(Mt(e))o=e;else throw Yi(mi.INVALID_ARGUMENT);return he(t)?s.key=t:Ie(t)&&Object.keys(t).forEach(l=>{Dd.includes(l)?a[l]=t[l]:s[l]=t[l]}),he(n)?s.locale=n:Ie(n)&&(a=n),Ie(r)&&(a=r),[s.key||"",o,s,a]}function df(i,e,t){const n=i;for(const r in t){const s=`${e}__${r}`;n.__datetimeFormatters.has(s)&&n.__datetimeFormatters.delete(s)}}function pf(i,...e){const{numberFormats:t,unresolving:n,fallbackLocale:r,onWarn:s,localeFallbacker:a}=i,{__numberFormatters:o}=i,[l,c,u,h]=pl(...e),d=Ge(u.missingWarn)?u.missingWarn:i.missingWarn;Ge(u.fallbackWarn)?u.fallbackWarn:i.fallbackWarn;const m=!!u.part,g=Jl(i,u),_=a(i,r,g);if(!he(l)||l==="")return new Intl.NumberFormat(g,h).format(c);let p={},f,x=null;const v="number format";for(let y=0;y<_.length&&(f=_[y],p=t[f]||{},x=p[l],!Ie(x));y++)Ql(i,l,f,d,v);if(!Ie(x)||!he(f))return n?Fa:l;let M=`${f}__${l}`;Oa(h)||(M=`${M}__${JSON.stringify(h)}`);let T=o.get(M);return T||(T=new Intl.NumberFormat(f,It({},x,h)),o.set(M,T)),m?T.formatToParts(c):T.format(c)}const Id=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function pl(...i){const[e,t,n,r]=i,s={};let a={};if(!Mt(e))throw Yi(mi.INVALID_ARGUMENT);const o=e;return he(t)?s.key=t:Ie(t)&&Object.keys(t).forEach(l=>{Id.includes(l)?a[l]=t[l]:s[l]=t[l]}),he(n)?s.locale=n:Ie(n)&&(a=n),Ie(r)&&(a=r),[s.key||"",o,s,a]}function mf(i,e,t){const n=i;for(const r in t){const s=`${e}__${r}`;n.__numberFormatters.has(s)&&n.__numberFormatters.delete(s)}}tM();const zM="9.5.0";function HM(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(jn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(jn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(jn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(jn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(jn().__INTLIFY_PROD_DEVTOOLS__=!1)}const Nd=MM.__EXTEND_POINT__,li=Kl(Nd);li(),li(),li(),li(),li(),li(),li(),li();const Ud=mi.__EXTEND_POINT__,qt=Kl(Ud),St={UNEXPECTED_RETURN_TYPE:Ud,INVALID_ARGUMENT:qt(),MUST_BE_CALL_SETUP_TOP:qt(),NOT_INSTALLED:qt(),NOT_AVAILABLE_IN_LEGACY_MODE:qt(),REQUIRED_VALUE:qt(),INVALID_VALUE:qt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:qt(),NOT_INSTALLED_WITH_PROVIDE:qt(),UNEXPECTED_ERROR:qt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:qt(),BRIDGE_SUPPORT_VUE_2_ONLY:qt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:qt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:qt(),__EXTEND_POINT__:qt()};function Tt(i,...e){return $r(i,null,void 0)}const ml=Ri("__translateVNode"),_l=Ri("__datetimeParts"),gl=Ri("__numberParts"),Od=Ri("__setPluralRules"),Fd=Ri("__injectWithOption"),vl=Ri("__dispose");function xl(i){if(!Ke(i))return i;for(const e in i)if(jl(i,e))if(!e.includes("."))Ke(i[e])&&xl(i[e]);else{const t=e.split("."),n=t.length-1;let r=i,s=!1;for(let a=0;a<n;a++){if(t[a]in r||(r[t[a]]={}),!Ke(r[t[a]])){s=!0;break}r=r[t[a]]}s||(r[t[n]]=i[e],delete i[e]),Ke(r[t[n]])&&xl(r[t[n]])}return i}function ka(i,e){const{messages:t,__i18n:n,messageResolver:r,flatJson:s}=e,a=Ie(t)?t:st(n)?{}:{[i]:{}};if(st(n)&&n.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||{},ds(c,a[l])):ds(c,a)}else he(o)&&ds(JSON.parse(o),a)}),r==null&&s)for(const o in a)jl(a,o)&&xl(a[o]);return a}const aa=i=>!Ke(i)||st(i);function ds(i,e){if(aa(i)||aa(e))throw Tt(St.INVALID_VALUE);for(const t in i)jl(i,t)&&(aa(i[t])||aa(e[t])?e[t]=i[t]:ds(i[t],e[t]))}function kd(i){return i.type}function Bd(i,e,t){let n=Ke(e.messages)?e.messages:{};"__i18nGlobal"in t&&(n=ka(i.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const r=Object.keys(n);r.length&&r.forEach(s=>{i.mergeLocaleMessage(s,n[s])});{if(Ke(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{i.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(Ke(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{i.mergeNumberFormat(a,e.numberFormats[a])})}}}function _f(i){return Of(Mp,null,i,0)}const gf="__INTLIFY_META__";let vf=0;function xf(i){return(e,t,n,r)=>i(t,n,ps()||void 0,r)}const GM=()=>{const i=ps();let e=null;return i&&(e=kd(i)[gf])?{[gf]:e}:null};function ec(i={},e){const{__root:t,__injectWithOption:n}=i,r=t===void 0;let s=Ge(i.inheritLocale)?i.inheritLocale:!0;const a=Wt(t&&s?t.locale.value:he(i.locale)?i.locale:Wr),o=Wt(t&&s?t.fallbackLocale.value:he(i.fallbackLocale)||st(i.fallbackLocale)||Ie(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:a.value),l=Wt(ka(a.value,i)),c=Wt(Ie(i.datetimeFormats)?i.datetimeFormats:{[a.value]:{}}),u=Wt(Ie(i.numberFormats)?i.numberFormats:{[a.value]:{}});let h=t?t.missingWarn:Ge(i.missingWarn)||Ai(i.missingWarn)?i.missingWarn:!0,d=t?t.fallbackWarn:Ge(i.fallbackWarn)||Ai(i.fallbackWarn)?i.fallbackWarn:!0,m=t?t.fallbackRoot:Ge(i.fallbackRoot)?i.fallbackRoot:!0,g=!!i.fallbackFormat,_=ft(i.missing)?i.missing:null,p=ft(i.missing)?xf(i.missing):null,f=ft(i.postTranslation)?i.postTranslation:null,x=t?t.warnHtmlMessage:Ge(i.warnHtmlMessage)?i.warnHtmlMessage:!0,v=!!i.escapeParameter;const M=t?t.modifiers:Ie(i.modifiers)?i.modifiers:{};let T=i.pluralRules||t&&t.pluralRules,y;y=(()=>{r&&of(null);const b={version:zM,locale:a.value,fallbackLocale:o.value,messages:l.value,modifiers:M,pluralRules:T,missing:p===null?void 0:p,missingWarn:h,fallbackWarn:d,fallbackFormat:g,unresolving:!0,postTranslation:f===null?void 0:f,warnHtmlMessage:x,escapeParameter:v,messageResolver:i.messageResolver,messageCompiler:i.messageCompiler,__meta:{framework:"vue"}};b.datetimeFormats=c.value,b.numberFormats=u.value,b.__datetimeFormatters=Ie(y)?y.__datetimeFormatters:void 0,b.__numberFormatters=Ie(y)?y.__numberFormatters:void 0;const S=DM(b);return r&&of(S),S})(),is(y,a.value,o.value);function L(){return[a.value,o.value,l.value,c.value,u.value]}const E=on({get:()=>a.value,set:b=>{a.value=b,y.locale=a.value}}),C=on({get:()=>o.value,set:b=>{o.value=b,y.fallbackLocale=o.value,is(y,a.value,b)}}),k=on(()=>l.value),$=on(()=>c.value),j=on(()=>u.value);function D(){return ft(f)?f:null}function O(b){f=b,y.postTranslation=b}function W(){return _}function H(b){b!==null&&(p=xf(b)),_=b,y.missing=p}const Z=(b,S,B,te,ne,re)=>{L();let xe;try{__INTLIFY_PROD_DEVTOOLS__&&af(GM()),r||(y.fallbackContext=t?PM():void 0),xe=b(y)}finally{__INTLIFY_PROD_DEVTOOLS__&&af(null),r||(y.fallbackContext=void 0)}if(Mt(xe)&&xe===Fa){const[le,_e]=S();return t&&m?te(t):ne(le)}else{if(re(xe))return xe;throw Tt(St.UNEXPECTED_RETURN_TYPE)}};function K(...b){return Z(S=>Reflect.apply(ff,null,[S,...b]),()=>hl(...b),"translate",S=>Reflect.apply(S.t,S,[...b]),S=>S,S=>he(S))}function ee(...b){const[S,B,te]=b;if(te&&!Ke(te))throw Tt(St.INVALID_ARGUMENT);return K(S,B,It({resolvedMessage:!0},te||{}))}function N(...b){return Z(S=>Reflect.apply(hf,null,[S,...b]),()=>dl(...b),"datetime format",S=>Reflect.apply(S.d,S,[...b]),()=>nf,S=>he(S))}function Y(...b){return Z(S=>Reflect.apply(pf,null,[S,...b]),()=>pl(...b),"number format",S=>Reflect.apply(S.n,S,[...b]),()=>nf,S=>he(S))}function oe(b){return b.map(S=>he(S)||Mt(S)||Ge(S)?_f(String(S)):S)}const ue={normalize:oe,interpolate:b=>b,type:"vnode"};function Se(...b){return Z(S=>{let B;const te=S;try{te.processor=ue,B=Reflect.apply(ff,null,[te,...b])}finally{te.processor=null}return B},()=>hl(...b),"translate",S=>S[ml](...b),S=>[_f(S)],S=>st(S))}function Oe(...b){return Z(S=>Reflect.apply(pf,null,[S,...b]),()=>pl(...b),"number format",S=>S[gl](...b),()=>[],S=>he(S)||st(S))}function Me(...b){return Z(S=>Reflect.apply(hf,null,[S,...b]),()=>dl(...b),"datetime format",S=>S[_l](...b),()=>[],S=>he(S)||st(S))}function Ae(b){T=b,y.pluralRules=T}function qe(b,S){if(!b)return!1;const B=he(S)?S:a.value,te=P(B);return y.messageResolver(te,b)!==null}function Ce(b){let S=null;const B=Sd(y,o.value,a.value);for(let te=0;te<B.length;te++){const ne=l.value[B[te]]||{},re=y.messageResolver(ne,b);if(re!=null){S=re;break}}return S}function z(b){const S=Ce(b);return S??(t?t.tm(b)||{}:{})}function P(b){return l.value[b]||{}}function w(b,S){l.value[b]=S,y.messages=l.value}function U(b,S){l.value[b]=l.value[b]||{},ds(S,l.value[b]),y.messages=l.value}function Q(b){return c.value[b]||{}}function me(b,S){c.value[b]=S,y.datetimeFormats=c.value,df(y,b,S)}function de(b,S){c.value[b]=It(c.value[b]||{},S),y.datetimeFormats=c.value,df(y,b,S)}function ye(b){return u.value[b]||{}}function He(b,S){u.value[b]=S,y.numberFormats=u.value,mf(y,b,S)}function _t(b,S){u.value[b]=It(u.value[b]||{},S),y.numberFormats=u.value,mf(y,b,S)}vf++,t&&cl&&(Oo(t.locale,b=>{s&&(a.value=b,y.locale=b,is(y,a.value,o.value))}),Oo(t.fallbackLocale,b=>{s&&(o.value=b,y.fallbackLocale=b,is(y,a.value,o.value))}));const We={id:vf,locale:E,fallbackLocale:C,get inheritLocale(){return s},set inheritLocale(b){s=b,b&&t&&(a.value=t.locale.value,o.value=t.fallbackLocale.value,is(y,a.value,o.value))},get availableLocales(){return Object.keys(l.value).sort()},messages:k,get modifiers(){return M},get pluralRules(){return T||{}},get isGlobal(){return r},get missingWarn(){return h},set missingWarn(b){h=b,y.missingWarn=h},get fallbackWarn(){return d},set fallbackWarn(b){d=b,y.fallbackWarn=d},get fallbackRoot(){return m},set fallbackRoot(b){m=b},get fallbackFormat(){return g},set fallbackFormat(b){g=b,y.fallbackFormat=g},get warnHtmlMessage(){return x},set warnHtmlMessage(b){x=b,y.warnHtmlMessage=b},get escapeParameter(){return v},set escapeParameter(b){v=b,y.escapeParameter=b},t:K,getLocaleMessage:P,setLocaleMessage:w,mergeLocaleMessage:U,getPostTranslationHandler:D,setPostTranslationHandler:O,getMissingHandler:W,setMissingHandler:H,[Od]:Ae};return We.datetimeFormats=$,We.numberFormats=j,We.rt=ee,We.te=qe,We.tm=z,We.d=N,We.n=Y,We.getDateTimeFormat=Q,We.setDateTimeFormat=me,We.mergeDateTimeFormat=de,We.getNumberFormat=ye,We.setNumberFormat=He,We.mergeNumberFormat=_t,We[Fd]=n,We[ml]=Se,We[_l]=Me,We[gl]=Oe,We}function VM(i){const e=he(i.locale)?i.locale:Wr,t=he(i.fallbackLocale)||st(i.fallbackLocale)||Ie(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:e,n=ft(i.missing)?i.missing:void 0,r=Ge(i.silentTranslationWarn)||Ai(i.silentTranslationWarn)?!i.silentTranslationWarn:!0,s=Ge(i.silentFallbackWarn)||Ai(i.silentFallbackWarn)?!i.silentFallbackWarn:!0,a=Ge(i.fallbackRoot)?i.fallbackRoot:!0,o=!!i.formatFallbackMessages,l=Ie(i.modifiers)?i.modifiers:{},c=i.pluralizationRules,u=ft(i.postTranslation)?i.postTranslation:void 0,h=he(i.warnHtmlInMessage)?i.warnHtmlInMessage!=="off":!0,d=!!i.escapeParameterHtml,m=Ge(i.sync)?i.sync:!0;let g=i.messages;if(Ie(i.sharedMessages)){const T=i.sharedMessages;g=Object.keys(T).reduce((A,L)=>{const E=A[L]||(A[L]={});return It(E,T[L]),A},g||{})}const{__i18n:_,__root:p,__injectWithOption:f}=i,x=i.datetimeFormats,v=i.numberFormats,M=i.flatJson;return{locale:e,fallbackLocale:t,messages:g,flatJson:M,datetimeFormats:x,numberFormats:v,missing:n,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:h,escapeParameter:d,messageResolver:i.messageResolver,inheritLocale:m,__i18n:_,__root:p,__injectWithOption:f}}function El(i={},e){{const t=ec(VM(i)),{__extender:n}=i,r={id:t.id,get locale(){return t.locale.value},set locale(s){t.locale.value=s},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(s){t.fallbackLocale.value=s},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return t.getMissingHandler()},set missing(s){t.setMissingHandler(s)},get silentTranslationWarn(){return Ge(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(s){t.missingWarn=Ge(s)?!s:s},get silentFallbackWarn(){return Ge(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(s){t.fallbackWarn=Ge(s)?!s:s},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(s){t.fallbackFormat=s},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(s){t.setPostTranslationHandler(s)},get sync(){return t.inheritLocale},set sync(s){t.inheritLocale=s},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){t.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(s){t.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...s){const[a,o,l]=s,c={};let u=null,h=null;if(!he(a))throw Tt(St.INVALID_ARGUMENT);const d=a;return he(o)?c.locale=o:st(o)?u=o:Ie(o)&&(h=o),st(l)?u=l:Ie(l)&&(h=l),Reflect.apply(t.t,t,[d,u||h||{},c])},rt(...s){return Reflect.apply(t.rt,t,[...s])},tc(...s){const[a,o,l]=s,c={plural:1};let u=null,h=null;if(!he(a))throw Tt(St.INVALID_ARGUMENT);const d=a;return he(o)?c.locale=o:Mt(o)?c.plural=o:st(o)?u=o:Ie(o)&&(h=o),he(l)?c.locale=l:st(l)?u=l:Ie(l)&&(h=l),Reflect.apply(t.t,t,[d,u||h||{},c])},te(s,a){return t.te(s,a)},tm(s){return t.tm(s)},getLocaleMessage(s){return t.getLocaleMessage(s)},setLocaleMessage(s,a){t.setLocaleMessage(s,a)},mergeLocaleMessage(s,a){t.mergeLocaleMessage(s,a)},d(...s){return Reflect.apply(t.d,t,[...s])},getDateTimeFormat(s){return t.getDateTimeFormat(s)},setDateTimeFormat(s,a){t.setDateTimeFormat(s,a)},mergeDateTimeFormat(s,a){t.mergeDateTimeFormat(s,a)},n(...s){return Reflect.apply(t.n,t,[...s])},getNumberFormat(s){return t.getNumberFormat(s)},setNumberFormat(s,a){t.setNumberFormat(s,a)},mergeNumberFormat(s,a){t.mergeNumberFormat(s,a)},getChoiceIndex(s,a){return-1}};return r.__extender=n,r}}const tc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:i=>i==="parent"||i==="global",default:"parent"},i18n:{type:Object}};function WM({slots:i},e){return e.length===1&&e[0]==="default"?(i.default?i.default():[]).reduce((n,r)=>[...n,...r.type===Tl?r.children:[r]],[]):e.reduce((t,n)=>{const r=i[n];return r&&(t[n]=r()),t},{})}function zd(i){return Tl}const XM=Xr({name:"i18n-t",props:It({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:i=>Mt(i)||!isNaN(i)}},tc),setup(i,e){const{slots:t,attrs:n}=e,r=i.i18n||nc({useScope:i.scope,__useComponent:!0});return()=>{const s=Object.keys(t).filter(h=>h!=="_"),a={};i.locale&&(a.locale=i.locale),i.plural!==void 0&&(a.plural=he(i.plural)?+i.plural:i.plural);const o=WM(e,s),l=r[ml](i.keypath,o,a),c=It({},n),u=he(i.tag)||Ke(i.tag)?i.tag:zd();return zf(u,c,l)}}}),Ef=XM;function YM(i){return st(i)&&!he(i[0])}function Hd(i,e,t,n){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o={};i.locale&&(a.locale=i.locale),he(i.format)?a.key=i.format:Ke(i.format)&&(he(i.format.key)&&(a.key=i.format.key),o=Object.keys(i.format).reduce((d,m)=>t.includes(m)?It({},d,{[m]:i.format[m]}):d,{}));const l=n(i.value,a,o);let c=[a.key];st(l)?c=l.map((d,m)=>{const g=r[d.type],_=g?g({[d.type]:d.value,index:m,parts:l}):[d.value];return YM(_)&&(_[0].key=`${d.type}-${m}`),_}):he(l)&&(c=[l]);const u=It({},s),h=he(i.tag)||Ke(i.tag)?i.tag:zd();return zf(h,u,c)}}const qM=Xr({name:"i18n-n",props:It({value:{type:Number,required:!0},format:{type:[String,Object]}},tc),setup(i,e){const t=i.i18n||nc({useScope:"parent",__useComponent:!0});return Hd(i,e,Id,(...n)=>t[gl](...n))}}),Sf=qM,$M=Xr({name:"i18n-d",props:It({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},tc),setup(i,e){const t=i.i18n||nc({useScope:"parent",__useComponent:!0});return Hd(i,e,Dd,(...n)=>t[_l](...n))}}),Mf=$M;function jM(i,e){const t=i;if(i.mode==="composition")return t.__getInstance(e)||i.global;{const n=t.__getInstance(e);return n!=null?n.__composer:i.global.__composer}}function KM(i){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw Tt(St.UNEXPECTED_ERROR);const u=jM(i,o.$),h=yf(c);return[Reflect.apply(u.t,u,[...Tf(h)]),u]};return{created:(a,o)=>{const[l,c]=e(o);cl&&i.global===c&&(a.__i18nWatcher=Oo(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{cl&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=yf(o);a.textContent=Reflect.apply(l.t,l,[...Tf(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function yf(i){if(he(i))return{path:i};if(Ie(i)){if(!("path"in i))throw Tt(St.REQUIRED_VALUE,"path");return i}else throw Tt(St.INVALID_VALUE)}function Tf(i){const{path:e,locale:t,args:n,choice:r,plural:s}=i,a={},o=n||{};return he(t)&&(a.locale=t),Mt(r)&&(a.plural=r),Mt(s)&&(a.plural=s),[e,o,a]}function ZM(i,e,...t){const n=Ie(t[0])?t[0]:{},r=!!n.useI18nComponentName;(Ge(n.globalInstall)?n.globalInstall:!0)&&([r?"i18n":Ef.name,"I18nT"].forEach(a=>i.component(a,Ef)),[Sf.name,"I18nN"].forEach(a=>i.component(a,Sf)),[Mf.name,"I18nD"].forEach(a=>i.component(a,Mf))),i.directive("t",KM(e))}function JM(i,e,t){return{beforeCreate(){const n=ps();if(!n)throw Tt(St.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=bf(i,s);else{s.__injectWithOption=!0,s.__extender=t.__vueI18nExtend,this.$i18n=El(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=bf(i,r);else{this.$i18n=El({__i18n:r.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=i;r.__i18nGlobal&&Bd(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),t.__setInstance(n,this.$i18n)},mounted(){},unmounted(){const n=ps();if(!n)throw Tt(St.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),t.__deleteInstance(n),delete this.$i18n}}}function bf(i,e){i.locale=e.locale||i.locale,i.fallbackLocale=e.fallbackLocale||i.fallbackLocale,i.missing=e.missing||i.missing,i.silentTranslationWarn=e.silentTranslationWarn||i.silentFallbackWarn,i.silentFallbackWarn=e.silentFallbackWarn||i.silentFallbackWarn,i.formatFallbackMessages=e.formatFallbackMessages||i.formatFallbackMessages,i.postTranslation=e.postTranslation||i.postTranslation,i.warnHtmlInMessage=e.warnHtmlInMessage||i.warnHtmlInMessage,i.escapeParameterHtml=e.escapeParameterHtml||i.escapeParameterHtml,i.sync=e.sync||i.sync,i.__composer[Od](e.pluralizationRules||i.pluralizationRules);const t=ka(i.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(n=>i.mergeLocaleMessage(n,t[n])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(n=>i.mergeDateTimeFormat(n,e.datetimeFormats[n])),e.numberFormats&&Object.keys(e.numberFormats).forEach(n=>i.mergeNumberFormat(n,e.numberFormats[n])),i}const QM=Ri("global-vue-i18n");function ey(i={},e){const t=__VUE_I18N_LEGACY_API__&&Ge(i.legacy)?i.legacy:__VUE_I18N_LEGACY_API__,n=Ge(i.globalInjection)?i.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&t?!!i.allowComposition:!0,s=new Map,[a,o]=ty(i,t),l=Ri("");function c(d){return s.get(d)||null}function u(d,m){s.set(d,m)}function h(d){s.delete(d)}{const d={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return r},async install(m,...g){if(m.__VUE_I18N_SYMBOL__=l,m.provide(m.__VUE_I18N_SYMBOL__,d),Ie(g[0])){const f=g[0];d.__composerExtend=f.__composerExtend,d.__vueI18nExtend=f.__vueI18nExtend}let _=null;!t&&n&&(_=uy(m,d.global)),__VUE_I18N_FULL_INSTALL__&&ZM(m,d,...g),__VUE_I18N_LEGACY_API__&&t&&m.mixin(JM(o,o.__composer,d));const p=m.unmount;m.unmount=()=>{_&&_(),d.dispose(),p()}},get global(){return o},dispose(){a.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:h};return d}}function nc(i={}){const e=ps();if(e==null)throw Tt(St.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Tt(St.NOT_INSTALLED);const t=ny(e),n=ry(t),r=kd(e),s=iy(i,r);if(__VUE_I18N_LEGACY_API__&&t.mode==="legacy"&&!i.__useComponent){if(!t.allowComposition)throw Tt(St.NOT_AVAILABLE_IN_LEGACY_MODE);return ly(e,s,n,i)}if(s==="global")return Bd(n,i,r),n;if(s==="parent"){let l=sy(t,e,i.__useComponent);return l==null&&(l=n),l}const a=t;let o=a.__getInstance(e);if(o==null){const l=It({},i);"__i18n"in r&&(l.__i18n=r.__i18n),n&&(l.__root=n),o=ec(l),a.__composerExtend&&(o[vl]=a.__composerExtend(o)),oy(a,e,o),a.__setInstance(e,o)}return o}function ty(i,e,t){const n=_p();{const r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>El(i)):n.run(()=>ec(i));if(r==null)throw Tt(St.UNEXPECTED_ERROR);return[n,r]}}function ny(i){{const e=gp(i.isCE?QM:i.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Tt(i.isCE?St.NOT_INSTALLED_WITH_PROVIDE:St.UNEXPECTED_ERROR);return e}}function iy(i,e){return Oa(i)?"__i18n"in e?"local":"global":i.useScope?i.useScope:"local"}function ry(i){return i.mode==="composition"?i.global:i.global.__composer}function sy(i,e,t=!1){let n=null;const r=e.root;let s=ay(e,t);for(;s!=null;){const a=i;if(i.mode==="composition")n=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(n=o.__composer,t&&n&&!n[Fd]&&(n=null))}if(n!=null||r===s)break;s=s.parent}return n}function ay(i,e=!1){return i==null?null:e&&i.vnode.ctx||i.parent}function oy(i,e,t){kf(()=>{},e),vp(()=>{const n=t;i.__deleteInstance(e);const r=n[vl];r&&(r(),delete n[vl])},e)}function ly(i,e,t,n={}){const r=e==="local",s=xp(null);if(r&&i.proxy&&!(i.proxy.$options.i18n||i.proxy.$options.__i18n))throw Tt(St.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=Ge(n.inheritLocale)?n.inheritLocale:!he(n.locale),o=Wt(!r||a?t.locale.value:he(n.locale)?n.locale:Wr),l=Wt(!r||a?t.fallbackLocale.value:he(n.fallbackLocale)||st(n.fallbackLocale)||Ie(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:o.value),c=Wt(ka(o.value,n)),u=Wt(Ie(n.datetimeFormats)?n.datetimeFormats:{[o.value]:{}}),h=Wt(Ie(n.numberFormats)?n.numberFormats:{[o.value]:{}}),d=r?t.missingWarn:Ge(n.missingWarn)||Ai(n.missingWarn)?n.missingWarn:!0,m=r?t.fallbackWarn:Ge(n.fallbackWarn)||Ai(n.fallbackWarn)?n.fallbackWarn:!0,g=r?t.fallbackRoot:Ge(n.fallbackRoot)?n.fallbackRoot:!0,_=!!n.fallbackFormat,p=ft(n.missing)?n.missing:null,f=ft(n.postTranslation)?n.postTranslation:null,x=r?t.warnHtmlMessage:Ge(n.warnHtmlMessage)?n.warnHtmlMessage:!0,v=!!n.escapeParameter,M=r?t.modifiers:Ie(n.modifiers)?n.modifiers:{},T=n.pluralRules||r&&t.pluralRules;function y(){return[o.value,l.value,c.value,u.value,h.value]}const A=on({get:()=>s.value?s.value.locale.value:o.value,set:w=>{s.value&&(s.value.locale.value=w),o.value=w}}),L=on({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:w=>{s.value&&(s.value.fallbackLocale.value=w),l.value=w}}),E=on(()=>s.value?s.value.messages.value:c.value),C=on(()=>u.value),k=on(()=>h.value);function $(){return s.value?s.value.getPostTranslationHandler():f}function j(w){s.value&&s.value.setPostTranslationHandler(w)}function D(){return s.value?s.value.getMissingHandler():p}function O(w){s.value&&s.value.setMissingHandler(w)}function W(w){return y(),w()}function H(...w){return s.value?W(()=>Reflect.apply(s.value.t,null,[...w])):W(()=>"")}function Z(...w){return s.value?Reflect.apply(s.value.rt,null,[...w]):""}function K(...w){return s.value?W(()=>Reflect.apply(s.value.d,null,[...w])):W(()=>"")}function ee(...w){return s.value?W(()=>Reflect.apply(s.value.n,null,[...w])):W(()=>"")}function N(w){return s.value?s.value.tm(w):{}}function Y(w,U){return s.value?s.value.te(w,U):!1}function oe(w){return s.value?s.value.getLocaleMessage(w):{}}function ie(w,U){s.value&&(s.value.setLocaleMessage(w,U),c.value[w]=U)}function ue(w,U){s.value&&s.value.mergeLocaleMessage(w,U)}function Se(w){return s.value?s.value.getDateTimeFormat(w):{}}function Oe(w,U){s.value&&(s.value.setDateTimeFormat(w,U),u.value[w]=U)}function Me(w,U){s.value&&s.value.mergeDateTimeFormat(w,U)}function Ae(w){return s.value?s.value.getNumberFormat(w):{}}function qe(w,U){s.value&&(s.value.setNumberFormat(w,U),h.value[w]=U)}function Ce(w,U){s.value&&s.value.mergeNumberFormat(w,U)}const z={get id(){return s.value?s.value.id:-1},locale:A,fallbackLocale:L,messages:E,datetimeFormats:C,numberFormats:k,get inheritLocale(){return s.value?s.value.inheritLocale:a},set inheritLocale(w){s.value&&(s.value.inheritLocale=w)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:M},get pluralRules(){return s.value?s.value.pluralRules:T},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:d},set missingWarn(w){s.value&&(s.value.missingWarn=w)},get fallbackWarn(){return s.value?s.value.fallbackWarn:m},set fallbackWarn(w){s.value&&(s.value.missingWarn=w)},get fallbackRoot(){return s.value?s.value.fallbackRoot:g},set fallbackRoot(w){s.value&&(s.value.fallbackRoot=w)},get fallbackFormat(){return s.value?s.value.fallbackFormat:_},set fallbackFormat(w){s.value&&(s.value.fallbackFormat=w)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:x},set warnHtmlMessage(w){s.value&&(s.value.warnHtmlMessage=w)},get escapeParameter(){return s.value?s.value.escapeParameter:v},set escapeParameter(w){s.value&&(s.value.escapeParameter=w)},t:H,getPostTranslationHandler:$,setPostTranslationHandler:j,getMissingHandler:D,setMissingHandler:O,rt:Z,d:K,n:ee,tm:N,te:Y,getLocaleMessage:oe,setLocaleMessage:ie,mergeLocaleMessage:ue,getDateTimeFormat:Se,setDateTimeFormat:Oe,mergeDateTimeFormat:Me,getNumberFormat:Ae,setNumberFormat:qe,mergeNumberFormat:Ce};function P(w){w.locale.value=o.value,w.fallbackLocale.value=l.value,Object.keys(c.value).forEach(U=>{w.mergeLocaleMessage(U,c.value[U])}),Object.keys(u.value).forEach(U=>{w.mergeDateTimeFormat(U,u.value[U])}),Object.keys(h.value).forEach(U=>{w.mergeNumberFormat(U,h.value[U])}),w.escapeParameter=v,w.fallbackFormat=_,w.fallbackRoot=g,w.fallbackWarn=m,w.missingWarn=d,w.warnHtmlMessage=x}return Ep(()=>{if(i.proxy==null||i.proxy.$i18n==null)throw Tt(St.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const w=s.value=i.proxy.$i18n.__composer;e==="global"?(o.value=w.locale.value,l.value=w.fallbackLocale.value,c.value=w.messages.value,u.value=w.datetimeFormats.value,h.value=w.numberFormats.value):r&&P(w)}),z}const cy=["locale","fallbackLocale","availableLocales"],Af=["t","rt","d","n","tm","te"];function uy(i,e){const t=Object.create(null);return cy.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Tt(St.UNEXPECTED_ERROR);const a=Sp(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,r,a)}),i.config.globalProperties.$i18n=t,Af.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Tt(St.UNEXPECTED_ERROR);Object.defineProperty(i.config.globalProperties,`$${r}`,s)}),()=>{delete i.config.globalProperties.$i18n,Af.forEach(r=>{delete i.config.globalProperties[`$${r}`]})}}HM();__INTLIFY_JIT_COMPILATION__?sf(UM):sf(NM);RM(cM);CM(Sd);if(__INTLIFY_PROD_DEVTOOLS__){const i=jn();i.__INTLIFY__=!0,vM(i.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const fy=yp("language",()=>{const i=Tp("language","zh-cn");function e(t){i.value=t}return{language:i,changeLanguage:e}}),hy={menuList:{home:"Home",display:"Display",about:"About",contact:"Contact"}},dy={menuList:{home:"首页",display:"作品展示",about:"关于我们",contact:"联系我们"}},py=()=>{const i=fy(),e={en:{...hy},"zh-cn":{...dy}};return ey({locale:i.language,legacy:!1,messages:e,globalInjection:!0})};var Gd="Expected a function",wf=0/0,my="[object Symbol]",_y=/^\s+|\s+$/g,gy=/^[-+]0x[0-9a-f]+$/i,vy=/^0b[01]+$/i,xy=/^0o[0-7]+$/i,Ey=parseInt,Sy=typeof ci=="object"&&ci&&ci.Object===Object&&ci,My=typeof self=="object"&&self&&self.Object===Object&&self,yy=Sy||My||Function("return this")(),Ty=Object.prototype,by=Ty.toString,Ay=Math.max,wy=Math.min,Io=function(){return yy.Date.now()};function Ry(i,e,t){var n,r,s,a,o,l,c=0,u=!1,h=!1,d=!0;if(typeof i!="function")throw new TypeError(Gd);e=Rf(e)||0,Aa(t)&&(u=!!t.leading,h="maxWait"in t,s=h?Ay(Rf(t.maxWait)||0,e):s,d="trailing"in t?!!t.trailing:d);function m(y){var A=n,L=r;return n=r=void 0,c=y,a=i.apply(L,A),a}function g(y){return c=y,o=setTimeout(f,e),u?m(y):a}function _(y){var A=y-l,L=y-c,E=e-A;return h?wy(E,s-L):E}function p(y){var A=y-l,L=y-c;return l===void 0||A>=e||A<0||h&&L>=s}function f(){var y=Io();if(p(y))return x(y);o=setTimeout(f,_(y))}function x(y){return o=void 0,d&&n?m(y):(n=r=void 0,a)}function v(){o!==void 0&&clearTimeout(o),c=0,n=l=r=o=void 0}function M(){return o===void 0?a:x(Io())}function T(){var y=Io(),A=p(y);if(n=arguments,r=this,l=y,A){if(o===void 0)return g(l);if(h)return o=setTimeout(f,e),m(l)}return o===void 0&&(o=setTimeout(f,e)),a}return T.cancel=v,T.flush=M,T}function Cy(i,e,t){var n=!0,r=!0;if(typeof i!="function")throw new TypeError(Gd);return Aa(t)&&(n="leading"in t?!!t.leading:n,r="trailing"in t?!!t.trailing:r),Ry(i,e,{leading:n,maxWait:e,trailing:r})}function Aa(i){var e=typeof i;return!!i&&(e=="object"||e=="function")}function Ly(i){return!!i&&typeof i=="object"}function Py(i){return typeof i=="symbol"||Ly(i)&&by.call(i)==my}function Rf(i){if(typeof i=="number")return i;if(Py(i))return wf;if(Aa(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Aa(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=i.replace(_y,"");var t=vy.test(i);return t||xy.test(i)?Ey(i.slice(2),t?2:8):gy.test(i)?wf:+i}var Dy=Cy;const Iy=Hf(Dy);var Ny="Expected a function",Cf=0/0,Uy="[object Symbol]",Oy=/^\s+|\s+$/g,Fy=/^[-+]0x[0-9a-f]+$/i,ky=/^0b[01]+$/i,By=/^0o[0-7]+$/i,zy=parseInt,Hy=typeof ci=="object"&&ci&&ci.Object===Object&&ci,Gy=typeof self=="object"&&self&&self.Object===Object&&self,Vy=Hy||Gy||Function("return this")(),Wy=Object.prototype,Xy=Wy.toString,Yy=Math.max,qy=Math.min,No=function(){return Vy.Date.now()};function $y(i,e,t){var n,r,s,a,o,l,c=0,u=!1,h=!1,d=!0;if(typeof i!="function")throw new TypeError(Ny);e=Lf(e)||0,Sl(t)&&(u=!!t.leading,h="maxWait"in t,s=h?Yy(Lf(t.maxWait)||0,e):s,d="trailing"in t?!!t.trailing:d);function m(y){var A=n,L=r;return n=r=void 0,c=y,a=i.apply(L,A),a}function g(y){return c=y,o=setTimeout(f,e),u?m(y):a}function _(y){var A=y-l,L=y-c,E=e-A;return h?qy(E,s-L):E}function p(y){var A=y-l,L=y-c;return l===void 0||A>=e||A<0||h&&L>=s}function f(){var y=No();if(p(y))return x(y);o=setTimeout(f,_(y))}function x(y){return o=void 0,d&&n?m(y):(n=r=void 0,a)}function v(){o!==void 0&&clearTimeout(o),c=0,n=l=r=o=void 0}function M(){return o===void 0?a:x(No())}function T(){var y=No(),A=p(y);if(n=arguments,r=this,l=y,A){if(o===void 0)return g(l);if(h)return o=setTimeout(f,e),m(l)}return o===void 0&&(o=setTimeout(f,e)),a}return T.cancel=v,T.flush=M,T}function Sl(i){var e=typeof i;return!!i&&(e=="object"||e=="function")}function jy(i){return!!i&&typeof i=="object"}function Ky(i){return typeof i=="symbol"||jy(i)&&Xy.call(i)==Uy}function Lf(i){if(typeof i=="number")return i;if(Ky(i))return Cf;if(Sl(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Sl(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=i.replace(Oy,"");var t=ky.test(i);return t||By.test(i)?zy(i.slice(2),t?2:8):Fy.test(i)?Cf:+i}var Zy=$y;const Pf=Hf(Zy);var Vd=function(){};function Wd(i){var e=void 0,t=void 0,n=void 0;for(e=0;e<i.length;e+=1)if(t=i[e],t.dataset&&t.dataset.aos||(n=t.children&&Wd(t.children),n))return!0;return!1}function Jy(i){i&&i.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),r=t.concat(n);if(Wd(r))return Vd()})}function Xd(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function Qy(){return!!Xd()}function eT(i,e){var t=window.document,n=Xd(),r=new n(Jy);Vd=e,r.observe(t.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var Df={isSupported:Qy,ready:eT},tT=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},nT=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),iT=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},rT=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,sT=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,aT=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,oT=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function If(){return navigator.userAgent||navigator.vendor||window.opera||""}var lT=function(){function i(){tT(this,i)}return nT(i,[{key:"phone",value:function(){var t=If();return!!(rT.test(t)||sT.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=If();return!!(aT.test(t)||oT.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),i}(),ha=new lT,cT=function(e,t){return t&&t.forEach(function(n){return e.classList.add(n)})},uT=function(e,t){return t&&t.forEach(function(n){return e.classList.remove(n)})},oa=function(e,t){var n=void 0;return ha.ie11()?(n=document.createEvent("CustomEvent"),n.initCustomEvent(e,!0,!0,{detail:t})):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},fT=function(e,t){var n=e.options,r=e.position,s=e.node;e.data;var a=function(){e.animated&&(uT(s,n.animatedClassNames),oa("aos:out",s),e.options.id&&oa("aos:in:"+e.options.id,s),e.animated=!1)},o=function(){e.animated||(cT(s,n.animatedClassNames),oa("aos:in",s),e.options.id&&oa("aos:in:"+e.options.id,s),e.animated=!0)};n.mirror&&t>=r.out&&!n.once?a():t>=r.in?o():e.animated&&!n.once&&a()},Nf=function(e){return e.forEach(function(t,n){return fT(t,window.pageYOffset)})},Yd=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),n+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},Si=function(i,e,t){var n=i.getAttribute("data-aos-"+e);if(typeof n<"u"){if(n==="true")return!0;if(n==="false")return!1}return n||t},hT=function(e,t,n){var r=window.innerHeight,s=Si(e,"anchor"),a=Si(e,"anchor-placement"),o=Number(Si(e,"offset",a?0:t)),l=a||n,c=e;s&&document.querySelectorAll(s)&&(c=document.querySelectorAll(s)[0]);var u=Yd(c).top-r;switch(l){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=r/2;break;case"center-center":u+=r/2+c.offsetHeight/2;break;case"bottom-center":u+=r/2+c.offsetHeight;break;case"top-top":u+=r;break;case"bottom-top":u+=r+c.offsetHeight;break;case"center-top":u+=r+c.offsetHeight/2;break}return u+o},dT=function(e,t){var n=Si(e,"anchor"),r=Si(e,"offset",t),s=e;n&&document.querySelectorAll(n)&&(s=document.querySelectorAll(n)[0]);var a=Yd(s).top;return a+s.offsetHeight-r},pT=function(e,t){return e.forEach(function(n,r){var s=Si(n.node,"mirror",t.mirror),a=Si(n.node,"once",t.once),o=Si(n.node,"id"),l=t.useClassNames&&n.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(l?l.split(" "):[]).filter(function(u){return typeof u=="string"});t.initClassName&&n.node.classList.add(t.initClassName),n.position={in:hT(n.node,t.offset,t.anchorPlacement),out:s&&dT(n.node,t.offset)},n.options={once:a,mirror:s,animatedClassNames:c,id:o}}),e},qd=function(){var i=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(i,function(e){return{node:e}})},Kn=[],Uf=!1,ut={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},$d=function(){return document.all&&!window.atob},mT=function(){return Kn=pT(Kn,ut),Nf(Kn),window.addEventListener("scroll",Iy(function(){Nf(Kn,ut.once)},ut.throttleDelay)),Kn},Vi=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(Uf=!0),Uf&&mT()},jd=function(){if(Kn=qd(),Zd(ut.disable)||$d())return Kd();Vi()},Kd=function(){Kn.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ut.initClassName&&e.node.classList.remove(ut.initClassName),ut.animatedClassName&&e.node.classList.remove(ut.animatedClassName)})},Zd=function(e){return e===!0||e==="mobile"&&ha.mobile()||e==="phone"&&ha.phone()||e==="tablet"&&ha.tablet()||typeof e=="function"&&e()===!0},_T=function(e){return ut=iT(ut,e),Kn=qd(),!ut.disableMutationObserver&&!Df.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),ut.disableMutationObserver=!0),ut.disableMutationObserver||Df.ready("[data-aos]",jd),Zd(ut.disable)||$d()?Kd():(document.querySelector("body").setAttribute("data-aos-easing",ut.easing),document.querySelector("body").setAttribute("data-aos-duration",ut.duration),document.querySelector("body").setAttribute("data-aos-delay",ut.delay),["DOMContentLoaded","load"].indexOf(ut.startEvent)===-1?document.addEventListener(ut.startEvent,function(){Vi(!0)}):window.addEventListener("load",function(){Vi(!0)}),ut.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&Vi(!0),window.addEventListener("resize",Pf(Vi,ut.debounceDelay,!0)),window.addEventListener("orientationchange",Pf(Vi,ut.debounceDelay,!0)),Kn)},gT={init:_T,refresh:Vi,refreshHard:jd};gT.init({duration:1500,delay:0,easing:"ease-in-out"});const jr=bp(Ip);Ap(jr);wp(jr);Op(jr);vS(jr);jr.use(Lp).use(bl).use(py());setTimeout(()=>{jr.mount("#app")},4e3);export{nc as a,Ir as e,fy as u};
