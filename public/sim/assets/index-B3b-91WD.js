(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="170",vo={ROTATE:0,DOLLY:1,PAN:2},ho={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,Sh=1,Ff=2,yu=1,bu=2,Si=3,os=0,Jt=1,Vt=2,ns=0,xo=1,rr=2,Th=3,wh=4,Uf=5,Cs=100,Nf=101,Bf=102,Of=103,kf=104,Gf=200,zf=201,Hf=202,Wf=203,$l=204,Yl=205,Vf=206,Xf=207,$f=208,Yf=209,qf=210,Zf=211,Kf=212,jf=213,Jf=214,ql=0,Zl=1,Kl=2,bo=3,jl=4,Jl=5,Ql=6,ec=7,Su=0,Qf=1,ep=2,is=0,tp=1,np=2,ip=3,Tu=4,sp=5,op=6,rp=7,wu=300,So=301,To=302,tc=303,nc=304,Ha=306,ic=1e3,Cn=1001,sc=1002,ti=1003,ap=1004,Er=1005,Yt=1006,tl=1007,Rs=1008,Ii=1009,Eu=1010,Cu=1011,fr=1012,$c=1013,Ds=1014,Ei=1015,xr=1016,Yc=1017,qc=1018,wo=1020,Au=35902,Pu=1021,Ru=1022,Qn=1023,Lu=1024,Du=1025,Mo=1026,Eo=1027,Iu=1028,Zc=1029,Fu=1030,Kc=1031,jc=1033,ma=33776,ga=33777,_a=33778,va=33779,oc=35840,rc=35841,ac=35842,lc=35843,cc=36196,hc=37492,dc=37496,uc=37808,fc=37809,pc=37810,mc=37811,gc=37812,_c=37813,vc=37814,xc=37815,Mc=37816,yc=37817,bc=37818,Sc=37819,Tc=37820,wc=37821,xa=36492,Ec=36494,Cc=36495,Uu=36283,Ac=36284,Pc=36285,Rc=36286,lp=3200,cp=3201,Nu=0,hp=1,Ji="",Un="srgb",Uo="srgb-linear",Wa="linear",gt="srgb",Gs=7680,Eh=519,dp=512,up=513,fp=514,Bu=515,pp=516,mp=517,gp=518,_p=519,Lc=35044,Ch="300 es",Ci=2e3,Aa=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ma=Math.PI/180,Pa=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function vp(i,e){return(i%e+e)%e}function nl(i,e,t){return(1-t)*i+t*e}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xp={DEG2RAD:Ma};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*s+e.x,this.y=o*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,o,r,a,h,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,h,c)}set(e,t,n,s,o,r,a,h,c){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=o,l[5]=h,l[6]=n,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[3],h=n[6],c=n[1],l=n[4],f=n[7],m=n[2],p=n[5],_=n[8],v=s[0],g=s[3],d=s[6],T=s[1],x=s[4],M=s[7],U=s[2],L=s[5],w=s[8];return o[0]=r*v+a*T+h*U,o[3]=r*g+a*x+h*L,o[6]=r*d+a*M+h*w,o[1]=c*v+l*T+f*U,o[4]=c*g+l*x+f*L,o[7]=c*d+l*M+f*w,o[2]=m*v+p*T+_*U,o[5]=m*g+p*x+_*L,o[8]=m*d+p*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],h=e[6],c=e[7],l=e[8];return t*r*l-t*a*c-n*o*l+n*a*h+s*o*c-s*r*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],h=e[6],c=e[7],l=e[8],f=l*r-a*c,m=a*h-l*o,p=c*o-r*h,_=t*f+n*m+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*c-l*n)*v,e[2]=(a*n-s*r)*v,e[3]=m*v,e[4]=(l*t-s*h)*v,e[5]=(s*o-a*t)*v,e[6]=p*v,e[7]=(n*h-c*t)*v,e[8]=(r*t-n*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,r,a){const h=Math.cos(o),c=Math.sin(o);return this.set(n*h,n*c,-n*(h*r+c*a)+r+e,-s*c,s*h,-s*(-c*r+h*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const il=new je;function Ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mp(){const i=Ra("canvas");return i.style.display="block",i}const Ah={};function er(i){i in Ah||(Ah[i]=!0,console.warn(i))}function yp(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function bp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rt={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(i.r=yo(i.r),i.g=yo(i.g),i.b=yo(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?Wa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ph=[.64,.33,.3,.6,.15,.06],Rh=[.2126,.7152,.0722],Lh=[.3127,.329],Dh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[Uo]:{primaries:Ph,whitePoint:Lh,transfer:Wa,toXYZ:Dh,fromXYZ:Ih,luminanceCoefficients:Rh,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:Ph,whitePoint:Lh,transfer:gt,toXYZ:Dh,fromXYZ:Ih,luminanceCoefficients:Rh,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}});let zs;class Tp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=Ra("canvas")),zs.width=e.width,zs.height=e.height;const n=zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ri(o[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wp=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(sl(s[r].image)):o.push(sl(s[r]))}else o=sl(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ep=0;class ln extends Os{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Cn,s=Cn,o=Yt,r=Rs,a=Qn,h=Ii,c=ln.DEFAULT_ANISOTROPY,l=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Pi(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=wu;ln.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const h=e.elements,c=h[0],l=h[4],f=h[8],m=h[1],p=h[5],_=h[9],v=h[2],g=h[6],d=h[10];if(Math.abs(l-m)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(l+m)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(p+1)/2,U=(d+1)/2,L=(l+m)/4,w=(f+v)/4,R=(_+g)/4;return x>M&&x>U?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=L/n,o=w/n):M>U?M<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),n=L/s,o=R/s):U<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),n=w/o,s=R/o),this.set(n,s,o,t),this}let T=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(m-l)*(m-l));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(f-v)/T,this.z=(m-l)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cp extends Os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ku(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends Cp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gu extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,r,a){let h=n[s+0],c=n[s+1],l=n[s+2],f=n[s+3];const m=o[r+0],p=o[r+1],_=o[r+2],v=o[r+3];if(a===0){e[t+0]=h,e[t+1]=c,e[t+2]=l,e[t+3]=f;return}if(a===1){e[t+0]=m,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||h!==m||c!==p||l!==_){let g=1-a;const d=h*m+c*p+l*_+f*v,T=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const U=Math.sqrt(x),L=Math.atan2(U,d*T);g=Math.sin(g*L)/U,a=Math.sin(a*L)/U}const M=a*T;if(h=h*g+m*M,c=c*g+p*M,l=l*g+_*M,f=f*g+v*M,g===1-a){const U=1/Math.sqrt(h*h+c*c+l*l+f*f);h*=U,c*=U,l*=U,f*=U}}e[t]=h,e[t+1]=c,e[t+2]=l,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,o,r){const a=n[s],h=n[s+1],c=n[s+2],l=n[s+3],f=o[r],m=o[r+1],p=o[r+2],_=o[r+3];return e[t]=a*_+l*f+h*p-c*m,e[t+1]=h*_+l*m+c*f-a*p,e[t+2]=c*_+l*p+a*m-h*f,e[t+3]=l*_-a*f-h*m-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,h=Math.sin,c=a(n/2),l=a(s/2),f=a(o/2),m=h(n/2),p=h(s/2),_=h(o/2);switch(r){case"XYZ":this._x=m*l*f+c*p*_,this._y=c*p*f-m*l*_,this._z=c*l*_+m*p*f,this._w=c*l*f-m*p*_;break;case"YXZ":this._x=m*l*f+c*p*_,this._y=c*p*f-m*l*_,this._z=c*l*_-m*p*f,this._w=c*l*f+m*p*_;break;case"ZXY":this._x=m*l*f-c*p*_,this._y=c*p*f+m*l*_,this._z=c*l*_+m*p*f,this._w=c*l*f-m*p*_;break;case"ZYX":this._x=m*l*f-c*p*_,this._y=c*p*f+m*l*_,this._z=c*l*_-m*p*f,this._w=c*l*f+m*p*_;break;case"YZX":this._x=m*l*f+c*p*_,this._y=c*p*f+m*l*_,this._z=c*l*_-m*p*f,this._w=c*l*f-m*p*_;break;case"XZY":this._x=m*l*f-c*p*_,this._y=c*p*f-m*l*_,this._z=c*l*_+m*p*f,this._w=c*l*f+m*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],r=t[1],a=t[5],h=t[9],c=t[2],l=t[6],f=t[10],m=n+a+f;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(l-h)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(l-h)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(h+l)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(h+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,r=e._w,a=t._x,h=t._y,c=t._z,l=t._w;return this._x=n*l+r*a+s*c-o*h,this._y=s*l+r*h+o*a-n*c,this._z=o*l+r*c+n*h-s*a,this._w=r*l-n*a-s*h-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const h=1-a*a;if(h<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const c=Math.sqrt(h),l=Math.atan2(c,a),f=Math.sin((1-t)*l)/c,m=Math.sin(t*l)/c;return this._w=r*f+this._w*m,this._x=n*f+this._x*m,this._y=s*f+this._y*m,this._z=o*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,r=e.y,a=e.z,h=e.w,c=2*(r*s-a*n),l=2*(a*t-o*s),f=2*(o*n-r*t);return this.x=t+h*c+r*f-a*l,this.y=n+h*l+a*c-o*f,this.z=s+h*f+o*l-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,r=t.x,a=t.y,h=t.z;return this.x=s*h-o*a,this.y=o*r-n*h,this.z=n*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new E,Fh=new Fs;class Mr{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Vn):Vn.fromBufferAttribute(o,r),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Ar.subVectors(this.max,Ho),Hs.subVectors(e.a,Ho),Ws.subVectors(e.b,Ho),Vs.subVectors(e.c,Ho),zi.subVectors(Ws,Hs),Hi.subVectors(Vs,Ws),xs.subVectors(Hs,Vs);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-xs.z,xs.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,xs.z,0,-xs.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-xs.y,xs.x,0];return!rl(t,Hs,Ws,Vs,Ar)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Hs,Ws,Vs,Ar))?!1:(Pr.crossVectors(zi,Hi),t=[Pr.x,Pr.y,Pr.z],rl(t,Hs,Ws,Vs,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new E,new E,new E,new E,new E,new E,new E,new E],Vn=new E,Cr=new Mr,Hs=new E,Ws=new E,Vs=new E,zi=new E,Hi=new E,xs=new E,Ho=new E,Ar=new E,Pr=new E,Ms=new E;function rl(i,e,t,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ms.fromArray(i,o);const a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),h=e.dot(Ms),c=t.dot(Ms),l=n.dot(Ms);if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>a)return!1}return!0}const Pp=new Mr,Wo=new E,al=new E;class Va{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const t=Wo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(al)),this.expandByPoint(Wo.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new E,ll=new E,Rr=new E,Wi=new E,cl=new E,Lr=new E,hl=new E;class Jc{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ll.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(ll);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Rr),a=Wi.dot(this.direction),h=-Wi.dot(Rr),c=Wi.lengthSq(),l=Math.abs(1-r*r);let f,m,p,_;if(l>0)if(f=r*h-a,m=r*a-h,_=o*l,f>=0)if(m>=-_)if(m<=_){const v=1/l;f*=v,m*=v,p=f*(f+r*m+2*a)+m*(r*f+m+2*h)+c}else m=o,f=Math.max(0,-(r*m+a)),p=-f*f+m*(m+2*h)+c;else m=-o,f=Math.max(0,-(r*m+a)),p=-f*f+m*(m+2*h)+c;else m<=-_?(f=Math.max(0,-(-r*o+a)),m=f>0?-o:Math.min(Math.max(-o,-h),o),p=-f*f+m*(m+2*h)+c):m<=_?(f=0,m=Math.min(Math.max(-o,-h),o),p=m*(m+2*h)+c):(f=Math.max(0,-(r*o+a)),m=f>0?o:Math.min(Math.max(-o,-h),o),p=-f*f+m*(m+2*h)+c);else m=r>0?-o:o,f=Math.max(0,-(r*m+a)),p=-f*f+m*(m+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ll).addScaledVector(Rr,m),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),s=xi.dot(xi)-n*n,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,h=n+r;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,r,a,h;const c=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,s=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,s=(e.min.x-m.x)*c),l>=0?(o=(e.min.y-m.y)*l,r=(e.max.y-m.y)*l):(o=(e.max.y-m.y)*l,r=(e.min.y-m.y)*l),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(e.min.z-m.z)*f,h=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,h=(e.min.z-m.z)*f),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,o){cl.subVectors(t,e),Lr.subVectors(n,e),hl.crossVectors(cl,Lr);let r=this.direction.dot(hl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Wi.subVectors(this.origin,e);const h=a*this.direction.dot(Lr.crossVectors(Wi,Lr));if(h<0)return null;const c=a*this.direction.dot(cl.cross(Wi));if(c<0||h+c>r)return null;const l=-a*Wi.dot(hl);return l<0?null:this.at(l/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,o,r,a,h,c,l,f,m,p,_,v,g){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,h,c,l,f,m,p,_,v,g)}set(e,t,n,s,o,r,a,h,c,l,f,m,p,_,v,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=o,d[5]=r,d[9]=a,d[13]=h,d[2]=c,d[6]=l,d[10]=f,d[14]=m,d[3]=p,d[7]=_,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),o=1/Xs.setFromMatrixColumn(e,1).length(),r=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),h=Math.cos(s),c=Math.sin(s),l=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const m=r*l,p=r*f,_=a*l,v=a*f;t[0]=h*l,t[4]=-h*f,t[8]=c,t[1]=p+_*c,t[5]=m-v*c,t[9]=-a*h,t[2]=v-m*c,t[6]=_+p*c,t[10]=r*h}else if(e.order==="YXZ"){const m=h*l,p=h*f,_=c*l,v=c*f;t[0]=m+v*a,t[4]=_*a-p,t[8]=r*c,t[1]=r*f,t[5]=r*l,t[9]=-a,t[2]=p*a-_,t[6]=v+m*a,t[10]=r*h}else if(e.order==="ZXY"){const m=h*l,p=h*f,_=c*l,v=c*f;t[0]=m-v*a,t[4]=-r*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=r*l,t[9]=v-m*a,t[2]=-r*c,t[6]=a,t[10]=r*h}else if(e.order==="ZYX"){const m=r*l,p=r*f,_=a*l,v=a*f;t[0]=h*l,t[4]=_*c-p,t[8]=m*c+v,t[1]=h*f,t[5]=v*c+m,t[9]=p*c-_,t[2]=-c,t[6]=a*h,t[10]=r*h}else if(e.order==="YZX"){const m=r*h,p=r*c,_=a*h,v=a*c;t[0]=h*l,t[4]=v-m*f,t[8]=_*f+p,t[1]=f,t[5]=r*l,t[9]=-a*l,t[2]=-c*l,t[6]=p*f+_,t[10]=m-v*f}else if(e.order==="XZY"){const m=r*h,p=r*c,_=a*h,v=a*c;t[0]=h*l,t[4]=-f,t[8]=c*l,t[1]=m*f+v,t[5]=r*l,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*l,t[10]=v*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Lp)}lookAt(e,t,n){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Vi.crossVectors(n,xn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Vi.crossVectors(n,xn)),Vi.normalize(),Dr.crossVectors(xn,Vi),s[0]=Vi.x,s[4]=Dr.x,s[8]=xn.x,s[1]=Vi.y,s[5]=Dr.y,s[9]=xn.y,s[2]=Vi.z,s[6]=Dr.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[4],h=n[8],c=n[12],l=n[1],f=n[5],m=n[9],p=n[13],_=n[2],v=n[6],g=n[10],d=n[14],T=n[3],x=n[7],M=n[11],U=n[15],L=s[0],w=s[4],R=s[8],y=s[12],b=s[1],A=s[5],B=s[9],I=s[13],G=s[2],O=s[6],Y=s[10],z=s[14],N=s[3],ee=s[7],ae=s[11],ge=s[15];return o[0]=r*L+a*b+h*G+c*N,o[4]=r*w+a*A+h*O+c*ee,o[8]=r*R+a*B+h*Y+c*ae,o[12]=r*y+a*I+h*z+c*ge,o[1]=l*L+f*b+m*G+p*N,o[5]=l*w+f*A+m*O+p*ee,o[9]=l*R+f*B+m*Y+p*ae,o[13]=l*y+f*I+m*z+p*ge,o[2]=_*L+v*b+g*G+d*N,o[6]=_*w+v*A+g*O+d*ee,o[10]=_*R+v*B+g*Y+d*ae,o[14]=_*y+v*I+g*z+d*ge,o[3]=T*L+x*b+M*G+U*N,o[7]=T*w+x*A+M*O+U*ee,o[11]=T*R+x*B+M*Y+U*ae,o[15]=T*y+x*I+M*z+U*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],r=e[1],a=e[5],h=e[9],c=e[13],l=e[2],f=e[6],m=e[10],p=e[14],_=e[3],v=e[7],g=e[11],d=e[15];return _*(+o*h*f-s*c*f-o*a*m+n*c*m+s*a*p-n*h*p)+v*(+t*h*p-t*c*m+o*r*m-s*r*p+s*c*l-o*h*l)+g*(+t*c*f-t*a*p-o*r*f+n*r*p+o*a*l-n*c*l)+d*(-s*a*l-t*h*f+t*a*m+s*r*f-n*r*m+n*h*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],h=e[6],c=e[7],l=e[8],f=e[9],m=e[10],p=e[11],_=e[12],v=e[13],g=e[14],d=e[15],T=f*g*c-v*m*c+v*h*p-a*g*p-f*h*d+a*m*d,x=_*m*c-l*g*c-_*h*p+r*g*p+l*h*d-r*m*d,M=l*v*c-_*f*c+_*a*p-r*v*p-l*a*d+r*f*d,U=_*f*h-l*v*h-_*a*m+r*v*m+l*a*g-r*f*g,L=t*T+n*x+s*M+o*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return e[0]=T*w,e[1]=(v*m*o-f*g*o-v*s*p+n*g*p+f*s*d-n*m*d)*w,e[2]=(a*g*o-v*h*o+v*s*c-n*g*c-a*s*d+n*h*d)*w,e[3]=(f*h*o-a*m*o-f*s*c+n*m*c+a*s*p-n*h*p)*w,e[4]=x*w,e[5]=(l*g*o-_*m*o+_*s*p-t*g*p-l*s*d+t*m*d)*w,e[6]=(_*h*o-r*g*o-_*s*c+t*g*c+r*s*d-t*h*d)*w,e[7]=(r*m*o-l*h*o+l*s*c-t*m*c-r*s*p+t*h*p)*w,e[8]=M*w,e[9]=(_*f*o-l*v*o-_*n*p+t*v*p+l*n*d-t*f*d)*w,e[10]=(r*v*o-_*a*o+_*n*c-t*v*c-r*n*d+t*a*d)*w,e[11]=(l*a*o-r*f*o-l*n*c+t*f*c+r*n*p-t*a*p)*w,e[12]=U*w,e[13]=(l*v*s-_*f*s+_*n*m-t*v*m-l*n*g+t*f*g)*w,e[14]=(_*a*s-r*v*s-_*n*h+t*v*h+r*n*g-t*a*g)*w,e[15]=(r*f*s-l*a*s+l*n*h-t*f*h-r*n*m+t*a*m)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,r=e.x,a=e.y,h=e.z,c=o*r,l=o*a;return this.set(c*r+n,c*a-s*h,c*h+s*a,0,c*a+s*h,l*a+n,l*h-s*r,0,c*h-s*a,l*h+s*r,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,r){return this.set(1,n,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,r=t._y,a=t._z,h=t._w,c=o+o,l=r+r,f=a+a,m=o*c,p=o*l,_=o*f,v=r*l,g=r*f,d=a*f,T=h*c,x=h*l,M=h*f,U=n.x,L=n.y,w=n.z;return s[0]=(1-(v+d))*U,s[1]=(p+M)*U,s[2]=(_-x)*U,s[3]=0,s[4]=(p-M)*L,s[5]=(1-(m+d))*L,s[6]=(g+T)*L,s[7]=0,s[8]=(_+x)*w,s[9]=(g-T)*w,s[10]=(1-(m+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Xs.set(s[0],s[1],s[2]).length();const r=Xs.set(s[4],s[5],s[6]).length(),a=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);const c=1/o,l=1/r,f=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=l,Xn.elements[5]*=l,Xn.elements[6]*=l,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,s,o,r,a=Ci){const h=this.elements,c=2*o/(t-e),l=2*o/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s);let p,_;if(a===Ci)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Aa)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=l,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,o,r,a=Ci){const h=this.elements,c=1/(t-e),l=1/(n-s),f=1/(r-o),m=(t+e)*c,p=(n+s)*l;let _,v;if(a===Ci)_=(r+o)*f,v=-2*f;else if(a===Aa)_=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*l,h[9]=0,h[13]=-p,h[2]=0,h[6]=0,h[10]=v,h[14]=-_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new E,Xn=new lt,Rp=new E(0,0,0),Lp=new E(1,1,1),Vi=new E,Dr=new E,xn=new E,Uh=new lt,Nh=new Fs;class Rt{constructor(e=0,t=0,n=0,s=Rt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],h=s[1],c=s[5],l=s[9],f=s[2],m=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rt.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dp=0;const Bh=new E,$s=new Fs,Mi=new lt,Ir=new E,Vo=new E,Ip=new E,Fp=new Fs,Oh=new E(1,0,0),kh=new E(0,1,0),Gh=new E(0,0,1),zh={type:"added"},Up={type:"removed"},Ys={type:"childadded",child:null},dl={type:"childremoved",child:null};class Ft extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new E,t=new Rt,n=new Fs,s=new E(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return Bh.copy(e).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Vo,Ir,this.up):Mi.lookAt(Ir,Vo,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Mi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Up),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){const f=h[c];o(e.shapes,f)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(o(e.materials,this.material[h]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];s.animations.push(o(e.animations,h))}}if(t){const a=r(e.geometries),h=r(e.materials),c=r(e.textures),l=r(e.images),f=r(e.shapes),m=r(e.skeletons),p=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function r(a){const h=[];for(const c in a){const l=a[c];delete l.metadata,h.push(l)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new E(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new E,yi=new E,ul=new E,bi=new E,qs=new E,Zs=new E,Hh=new E,fl=new E,pl=new E,ml=new E,gl=new xt,_l=new xt,vl=new xt;class Bn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){$n.subVectors(s,t),yi.subVectors(n,t),ul.subVectors(e,t);const r=$n.dot($n),a=$n.dot(yi),h=$n.dot(ul),c=yi.dot(yi),l=yi.dot(ul),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const m=1/f,p=(c*h-a*l)*m,_=(r*l-a*h)*m;return o.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,s,o,r,a,h){return this.getBarycoord(e,t,n,s,bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,bi.x),h.addScaledVector(r,bi.y),h.addScaledVector(a,bi.z),h)}static getInterpolatedAttribute(e,t,n,s,o,r){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),vl.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(gl,o.x),r.addScaledVector(_l,o.y),r.addScaledVector(vl,o.z),r}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),yi.subVectors(e,t),$n.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),$n.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let r,a;qs.subVectors(s,n),Zs.subVectors(o,n),fl.subVectors(e,n);const h=qs.dot(fl),c=Zs.dot(fl);if(h<=0&&c<=0)return t.copy(n);pl.subVectors(e,s);const l=qs.dot(pl),f=Zs.dot(pl);if(l>=0&&f<=l)return t.copy(s);const m=h*f-l*c;if(m<=0&&h>=0&&l<=0)return r=h/(h-l),t.copy(n).addScaledVector(qs,r);ml.subVectors(e,o);const p=qs.dot(ml),_=Zs.dot(ml);if(_>=0&&p<=_)return t.copy(o);const v=p*c-h*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Zs,a);const g=l*_-p*f;if(g<=0&&f-l>=0&&p-_>=0)return Hh.subVectors(o,s),a=(f-l)/(f-l+(p-_)),t.copy(s).addScaledVector(Hh,a);const d=1/(g+v+m);return r=v*d,a=m*d,t.copy(n).addScaledVector(qs,r).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=vp(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=xl(r,o,e+1/3),this.g=xl(r,o,e),this.b=xl(r,o,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Un){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const n=Hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return rt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Xt(Kt.r*255,0,255))*65536+Math.round(Xt(Kt.g*255,0,255))*256+Math.round(Xt(Kt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,s=Kt.g,o=Kt.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let h,c;const l=(a+r)/2;if(a===r)h=0,c=0;else{const f=r-a;switch(c=l<=.5?f/(r+a):f/(2-r-a),r){case n:h=(s-o)/f+(s<o?6:0);break;case s:h=(o-n)/f+2;break;case o:h=(n-s)/f+4;break}h/=6}return e.h=h,e.s=c,e.l=l,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Un){rt.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,s=Kt.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Fr);const n=nl(Xi.h,Fr.h,t),s=nl(Xi.s,Fr.s,t),o=nl(Xi.l,Fr.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Je;Je.NAMES=Hu;let Np=0;class _s extends Os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Pi(),this.name="",this.blending=xo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Yl,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$l&&(n.blendSrc=this.blendSrc),this.blendDst!==Yl&&(n.blendDst=this.blendDst),this.blendEquation!==Cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const h=o[a];delete h.metadata,r.push(h)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qc extends _s{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new E,Ur=new we;class ni{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),o=_t(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lc&&(e.usage=this.usage),e}}class Wu extends ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vu extends ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bp=0;const Dn=new lt,Ml=new Ft,Ks=new E,Mn=new Mr,Xo=new Mr,Wt=new E;class Hn extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Vu:Wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new je().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Mn.min,Xo.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,Xo.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint(Xo.min),Mn.expandByPoint(Xo.max))}Mn.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)Wt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],h=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Wt.fromBufferAttribute(a,c),h&&(Ks.fromBufferAttribute(e,c),Wt.add(Ks)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],h=[];for(let R=0;R<n.count;R++)a[R]=new E,h[R]=new E;const c=new E,l=new E,f=new E,m=new we,p=new we,_=new we,v=new E,g=new E;function d(R,y,b){c.fromBufferAttribute(n,R),l.fromBufferAttribute(n,y),f.fromBufferAttribute(n,b),m.fromBufferAttribute(o,R),p.fromBufferAttribute(o,y),_.fromBufferAttribute(o,b),l.sub(c),f.sub(c),p.sub(m),_.sub(m);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(v.copy(l).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(A),g.copy(f).multiplyScalar(p.x).addScaledVector(l,-_.x).multiplyScalar(A),a[R].add(v),a[y].add(v),a[b].add(v),h[R].add(g),h[y].add(g),h[b].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,y=T.length;R<y;++R){const b=T[R],A=b.start,B=b.count;for(let I=A,G=A+B;I<G;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new E,M=new E,U=new E,L=new E;function w(R){U.fromBufferAttribute(s,R),L.copy(U);const y=a[R];x.copy(y),x.sub(U.multiplyScalar(U.dot(y))).normalize(),M.crossVectors(L,y);const A=M.dot(h[R])<0?-1:1;r.setXYZW(R,x.x,x.y,x.z,A)}for(let R=0,y=T.length;R<y;++R){const b=T[R],A=b.start,B=b.count;for(let I=A,G=A+B;I<G;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);const s=new E,o=new E,r=new E,a=new E,h=new E,c=new E,l=new E,f=new E;if(e)for(let m=0,p=e.count;m<p;m+=3){const _=e.getX(m+0),v=e.getX(m+1),g=e.getX(m+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),l.subVectors(r,o),f.subVectors(s,o),l.cross(f),a.fromBufferAttribute(n,_),h.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(l),h.add(l),c.add(l),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,h.x,h.y,h.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),r.fromBufferAttribute(t,m+2),l.subVectors(r,o),f.subVectors(s,o),l.cross(f),n.setXYZ(m+0,l.x,l.y,l.z),n.setXYZ(m+1,l.x,l.y,l.z),n.setXYZ(m+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,h){const c=a.array,l=a.itemSize,f=a.normalized,m=new c.constructor(h.length*l);let p=0,_=0;for(let v=0,g=h.length;v<g;v++){a.isInterleavedBufferAttribute?p=h[v]*a.data.stride+a.offset:p=h[v]*l;for(let d=0;d<l;d++)m[_++]=c[p++]}return new ni(m,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,s=this.attributes;for(const a in s){const h=s[a],c=e(h,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const h=[],c=o[a];for(let l=0,f=c.length;l<f;l++){const m=c[l],p=e(m,n);h.push(p)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,h=r.length;a<h;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const c=n[h];e.data.attributes[h]=c.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],l=[];for(let f=0,m=c.length;f<m;f++){const p=c[f];l.push(p.toJSON(e.data))}l.length>0&&(s[h]=l,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const l=s[c];this.setAttribute(c,l.clone(t))}const o=e.morphAttributes;for(const c in o){const l=[],f=o[c];for(let m=0,p=f.length;m<p;m++)l.push(f[m].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,l=r.length;c<l;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wh=new lt,ys=new Jc,Nr=new Va,Vh=new E,Br=new E,Or=new E,kr=new E,yl=new E,Gr=new E,Xh=new E,zr=new E;class Z extends Ft{constructor(e=new Hn,t=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){Gr.set(0,0,0);for(let h=0,c=o.length;h<c;h++){const l=a[h],f=o[h];l!==0&&(yl.fromBufferAttribute(f,e),r?Gr.addScaledVector(yl,l):Gr.addScaledVector(yl.sub(t),l))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(o),ys.copy(e.ray).recast(e.near),!(Nr.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Nr,Vh)===null||ys.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Wh.copy(o).invert(),ys.copy(e.ray).applyMatrix4(Wh),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let s;const o=this.geometry,r=this.material,a=o.index,h=o.attributes.position,c=o.attributes.uv,l=o.attributes.uv1,f=o.attributes.normal,m=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=m.length;_<v;_++){const g=m[_],d=r[g.materialIndex],T=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=T,U=x;M<U;M+=3){const L=a.getX(M),w=a.getX(M+1),R=a.getX(M+2);s=Hr(this,d,e,n,c,l,f,L,w,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,d=v;g<d;g+=3){const T=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);s=Hr(this,r,e,n,c,l,f,T,x,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(r))for(let _=0,v=m.length;_<v;_++){const g=m[_],d=r[g.materialIndex],T=Math.max(g.start,p.start),x=Math.min(h.count,Math.min(g.start+g.count,p.start+p.count));for(let M=T,U=x;M<U;M+=3){const L=M,w=M+1,R=M+2;s=Hr(this,d,e,n,c,l,f,L,w,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(h.count,p.start+p.count);for(let g=_,d=v;g<d;g+=3){const T=g,x=g+1,M=g+2;s=Hr(this,r,e,n,c,l,f,T,x,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Op(i,e,t,n,s,o,r,a){let h;if(e.side===Jt?h=n.intersectTriangle(r,o,s,!0,a):h=n.intersectTriangle(s,o,r,e.side===os,a),h===null)return null;zr.copy(a),zr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:i}}function Hr(i,e,t,n,s,o,r,a,h,c){i.getVertexPosition(a,Br),i.getVertexPosition(h,Or),i.getVertexPosition(c,kr);const l=Op(i,e,t,n,Br,Or,kr,Xh);if(l){const f=new E;Bn.getBarycoord(Xh,Br,Or,kr,f),s&&(l.uv=Bn.getInterpolatedAttribute(s,a,h,c,f,new we)),o&&(l.uv1=Bn.getInterpolatedAttribute(o,a,h,c,f,new we)),r&&(l.normal=Bn.getInterpolatedAttribute(r,a,h,c,f,new E),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const m={a,b:h,c,normal:new E,materialIndex:0};Bn.getNormal(Br,Or,kr,m.normal),l.face=m,l.barycoord=f}return l}class $e extends Hn{constructor(e=1,t=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const h=[],c=[],l=[],f=[];let m=0,p=0;_("z","y","x",-1,-1,n,t,e,r,o,0),_("z","y","x",1,-1,n,t,-e,r,o,1),_("x","z","y",1,1,e,n,t,s,r,2),_("x","z","y",1,-1,e,n,-t,s,r,3),_("x","y","z",1,-1,e,t,n,s,o,4),_("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(h),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(f,2));function _(v,g,d,T,x,M,U,L,w,R,y){const b=M/w,A=U/R,B=M/2,I=U/2,G=L/2,O=w+1,Y=R+1;let z=0,N=0;const ee=new E;for(let ae=0;ae<Y;ae++){const ge=ae*A-I;for(let Ce=0;Ce<O;Ce++){const Be=Ce*b-B;ee[v]=Be*T,ee[g]=ge*x,ee[d]=G,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[d]=L>0?1:-1,l.push(ee.x,ee.y,ee.z),f.push(Ce/w),f.push(1-ae/R),z+=1}}for(let ae=0;ae<R;ae++)for(let ge=0;ge<w;ge++){const Ce=m+ge+O*ae,Be=m+ge+O*(ae+1),j=m+(ge+1)+O*(ae+1),le=m+(ge+1)+O*ae;h.push(Ce,Be,le),h.push(Be,j,le),N+=6}a.addGroup(p,N,y),p+=N,m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $e(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Co(i[t]);for(const s in n)e[s]=n[s]}return e}function kp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Gp={clone:Co,merge:tn};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends _s{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $u extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new E,$h=new we,Yh=new we;class fn extends $u{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,$h,Yh),t.subVectors(Yh,$h)}setViewOffset(e,t,n,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const h=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/h,t-=r.offsetY*n/c,s*=r.width/h,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Js=1;class Wp extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(js,Js,e,t);s.layers=this.layers,this.add(s);const o=new fn(js,Js,e,t);o.layers=this.layers,this.add(o);const r=new fn(js,Js,e,t);r.layers=this.layers,this.add(r);const a=new fn(js,Js,e,t);a.layers=this.layers,this.add(a);const h=new fn(js,Js,e,t);h.layers=this.layers,this.add(h);const c=new fn(js,Js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,r,a,h]=t;for(const c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,h,c,l]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(f,m,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Yu extends ln{constructor(e,t,n,s,o,r,a,h,c,l){e=e!==void 0?e:[],t=t!==void 0?t:So,super(e,t,n,s,o,r,a,h,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vp extends Is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),o=new ii({name:"CubemapFromEquirect",uniforms:Co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ns});o.uniforms.tEquirect.value=t;const r=new Z(s,o),a=t.minFilter;return t.minFilter===Rs&&(t.minFilter=Yt),new Wp(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(o)}}const bl=new E,Xp=new E,$p=new je;class Ki{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=bl.subVectors(n,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$p.getNormalMatrix(e),s=this.coplanarPoint(bl).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Va,Wr=new E;class eh{constructor(e=new Ki,t=new Ki,n=new Ki,s=new Ki,o=new Ki,r=new Ki){this.planes=[e,t,n,s,o,r]}set(e,t,n,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){const n=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],h=s[3],c=s[4],l=s[5],f=s[6],m=s[7],p=s[8],_=s[9],v=s[10],g=s[11],d=s[12],T=s[13],x=s[14],M=s[15];if(n[0].setComponents(h-o,m-c,g-p,M-d).normalize(),n[1].setComponents(h+o,m+c,g+p,M+d).normalize(),n[2].setComponents(h+r,m+l,g+_,M+T).normalize(),n[3].setComponents(h-r,m-l,g-_,M-T).normalize(),n[4].setComponents(h-a,m-f,g-v,M-x).normalize(),t===Ci)n[5].setComponents(h+a,m+f,g+v,M+x).normalize();else if(t===Aa)n[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qu(){let i=null,e=!1,t=null,n=null;function s(o,r){t(o,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Yp(i){const e=new WeakMap;function t(a,h){const c=a.array,l=a.usage,f=c.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,c,l),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,h,c){const l=h.array,f=h.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,l);else{f.sort((p,_)=>p.start-_.start);let m=0;for(let p=1;p<f.length;p++){const _=f[m],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++m,f[m]=v)}f.length=m+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];i.bufferSubData(c,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=e.get(a);h&&(i.deleteBuffer(h.buffer),e.delete(a))}function r(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,h));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,h),c.version=a.version}}return{get:s,remove:o,update:r}}class ui extends Hn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(n),h=Math.floor(s),c=a+1,l=h+1,f=e/a,m=t/h,p=[],_=[],v=[],g=[];for(let d=0;d<l;d++){const T=d*m-r;for(let x=0;x<c;x++){const M=x*f-o;_.push(M,-T,0),v.push(0,0,1),g.push(x/a),g.push(1-d/h)}}for(let d=0;d<h;d++)for(let T=0;T<a;T++){const x=T+c*d,M=T+c*(d+1),U=T+1+c*(d+1),L=T+1+c*d;p.push(x,M,L),p.push(M,U,L)}this.setIndex(p),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$m=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ym=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ng=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hg=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ug=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,pg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,gg=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mg=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yg=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,bg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Tg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Eg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Qe={alphahash_fragment:qp,alphahash_pars_fragment:Zp,alphamap_fragment:Kp,alphamap_pars_fragment:jp,alphatest_fragment:Jp,alphatest_pars_fragment:Qp,aomap_fragment:em,aomap_pars_fragment:tm,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:om,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:dm,clipping_planes_vertex:um,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,cube_uv_reflection_fragment:vm,defaultnormal_vertex:xm,displacementmap_pars_vertex:Mm,displacementmap_vertex:ym,emissivemap_fragment:bm,emissivemap_pars_fragment:Sm,colorspace_fragment:Tm,colorspace_pars_fragment:wm,envmap_fragment:Em,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Am,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Gm,envmap_vertex:Rm,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Im,fog_pars_fragment:Fm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:Om,lights_pars_begin:km,lights_toon_fragment:zm,lights_toon_pars_fragment:Hm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Xm,lights_physical_pars_fragment:$m,lights_fragment_begin:Ym,lights_fragment_maps:qm,lights_fragment_end:Zm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Qm,map_fragment:e0,map_pars_fragment:t0,map_particle_fragment:n0,map_particle_pars_fragment:i0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:o0,morphinstance_vertex:r0,morphcolor_vertex:a0,morphnormal_vertex:l0,morphtarget_pars_vertex:c0,morphtarget_vertex:h0,normal_fragment_begin:d0,normal_fragment_maps:u0,normal_pars_fragment:f0,normal_pars_vertex:p0,normal_vertex:m0,normalmap_pars_fragment:g0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:M0,opaque_fragment:y0,packing:b0,premultiplied_alpha_fragment:S0,project_vertex:T0,dithering_fragment:w0,dithering_pars_fragment:E0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:R0,shadowmap_vertex:L0,shadowmask_pars_fragment:D0,skinbase_vertex:I0,skinning_pars_vertex:F0,skinning_vertex:U0,skinnormal_vertex:N0,specularmap_fragment:B0,specularmap_pars_fragment:O0,tonemapping_fragment:k0,tonemapping_pars_fragment:G0,transmission_fragment:z0,transmission_pars_fragment:H0,uv_pars_fragment:W0,uv_pars_vertex:V0,uv_vertex:X0,worldpos_vertex:$0,background_vert:Y0,background_frag:q0,backgroundCube_vert:Z0,backgroundCube_frag:K0,cube_vert:j0,cube_frag:J0,depth_vert:Q0,depth_frag:eg,distanceRGBA_vert:tg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:og,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:dg,meshmatcap_frag:ug,meshnormal_vert:fg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:_g,meshphysical_frag:vg,meshtoon_vert:xg,meshtoon_frag:Mg,points_vert:yg,points_frag:bg,shadow_vert:Sg,shadow_frag:Tg,sprite_vert:wg,sprite_frag:Eg},Ue={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ci={basic:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:tn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:tn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:tn([Ue.points,Ue.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:tn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:tn([Ue.common,Ue.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:tn([Ue.sprite,Ue.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:tn([Ue.common,Ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:tn([Ue.lights,Ue.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ci.physical={uniforms:tn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Vr={r:0,b:0,g:0},Ss=new Rt,Cg=new lt;function Ag(i,e,t,n,s,o,r){const a=new Je(0);let h=o===!0?0:1,c,l,f=null,m=0,p=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function v(T){let x=!1;const M=_(T);M===null?d(a,h):M&&M.isColor&&(d(M,1),x=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(T,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===Ha)?(l===void 0&&(l=new Z(new $e(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Co(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(U,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Ss.copy(x.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(Ss)),l.material.toneMapped=rt.getTransfer(M.colorSpace)!==gt,(f!==M||m!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,m=M.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Z(new ui(2,2),new ii({name:"BackgroundMaterial",uniforms:Co(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=rt.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||m!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,m=M.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,x){T.getRGB(Vr,Xu(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),h=x,d(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,d(a,h)},render:v,addToRenderList:g}}function Pg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let o=s,r=!1;function a(b,A,B,I,G){let O=!1;const Y=f(I,B,A);o!==Y&&(o=Y,c(o.object)),O=p(b,I,B,G),O&&_(b,I,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,M(b,A,B,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function l(b){return i.deleteVertexArray(b)}function f(b,A,B){const I=B.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let O=G[A.id];O===void 0&&(O={},G[A.id]=O);let Y=O[I];return Y===void 0&&(Y=m(h()),O[I]=Y),Y}function m(b){const A=[],B=[],I=[];for(let G=0;G<t;G++)A[G]=0,B[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:B,attributeDivisors:I,object:b,attributes:{},index:null}}function p(b,A,B,I){const G=o.attributes,O=A.attributes;let Y=0;const z=B.getAttributes();for(const N in z)if(z[N].location>=0){const ae=G[N];let ge=O[N];if(ge===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;Y++}return o.attributesNum!==Y||o.index!==I}function _(b,A,B,I){const G={},O=A.attributes;let Y=0;const z=B.getAttributes();for(const N in z)if(z[N].location>=0){let ae=O[N];ae===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),G[N]=ge,Y++}o.attributes=G,o.attributesNum=Y,o.index=I}function v(){const b=o.newAttributes;for(let A=0,B=b.length;A<B;A++)b[A]=0}function g(b){d(b,0)}function d(b,A){const B=o.newAttributes,I=o.enabledAttributes,G=o.attributeDivisors;B[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),G[b]!==A&&(i.vertexAttribDivisor(b,A),G[b]=A)}function T(){const b=o.newAttributes,A=o.enabledAttributes;for(let B=0,I=A.length;B<I;B++)A[B]!==b[B]&&(i.disableVertexAttribArray(B),A[B]=0)}function x(b,A,B,I,G,O,Y){Y===!0?i.vertexAttribIPointer(b,A,B,G,O):i.vertexAttribPointer(b,A,B,I,G,O)}function M(b,A,B,I){v();const G=I.attributes,O=B.getAttributes(),Y=A.defaultAttributeValues;for(const z in O){const N=O[z];if(N.location>=0){let ee=G[z];if(ee===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ee!==void 0){const ae=ee.normalized,ge=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const Be=Ce.buffer,j=Ce.type,le=Ce.bytesPerElement,Me=j===i.INT||j===i.UNSIGNED_INT||ee.gpuType===$c;if(ee.isInterleavedBufferAttribute){const pe=ee.data,he=pe.stride,Ae=ee.offset;if(pe.isInstancedInterleavedBuffer){for(let me=0;me<N.locationSize;me++)d(N.location+me,pe.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<N.locationSize;me++)g(N.location+me);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let me=0;me<N.locationSize;me++)x(N.location+me,ge/N.locationSize,j,ae,he*le,(Ae+ge/N.locationSize*me)*le,Me)}else{if(ee.isInstancedBufferAttribute){for(let pe=0;pe<N.locationSize;pe++)d(N.location+pe,ee.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let pe=0;pe<N.locationSize;pe++)g(N.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let pe=0;pe<N.locationSize;pe++)x(N.location+pe,ge/N.locationSize,j,ae,ge*le,ge/N.locationSize*pe*le,Me)}}else if(Y!==void 0){const ae=Y[z];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(N.location,ae);break;case 3:i.vertexAttrib3fv(N.location,ae);break;case 4:i.vertexAttrib4fv(N.location,ae);break;default:i.vertexAttrib1fv(N.location,ae)}}}}T()}function U(){R();for(const b in n){const A=n[b];for(const B in A){const I=A[B];for(const G in I)l(I[G].object),delete I[G];delete A[B]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const A=n[b.id];for(const B in A){const I=A[B];for(const G in I)l(I[G].object),delete I[G];delete A[B]}delete n[b.id]}function w(b){for(const A in n){const B=n[A];if(B[b.id]===void 0)continue;const I=B[b.id];for(const G in I)l(I[G].object),delete I[G];delete B[b.id]}}function R(){y(),r=!0,o!==s&&(o=s,c(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function Rg(i,e,t){let n;function s(c){n=c}function o(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function a(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let p=0;for(let _=0;_<f;_++)p+=l[_];t.update(p,n,1)}function h(c,l,f,m){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],l[_],m[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,l,0,m,0,f);let _=0;for(let v=0;v<f;v++)_+=l[v]*m[v];t.update(_,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function Lg(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Qn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ii&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ei&&!R)}function h(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const l=h(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:U,maxSamples:L}}function Dg(i){const e=this;let t=null,n=0,s=!1,o=!1;const r=new Ki,a=new je,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const p=f.length!==0||m||n!==0||s;return s=m,n=f.length,p},this.beginShadows=function(){o=!0,l(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,m){t=l(f,m,0)},this.setState=function(f,m,p){const _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||o&&!g)o?l(null):c();else{const T=o?0:n,x=T*4;let M=d.clippingState||null;h.value=M,M=l(_,m,x,p);for(let U=0;U!==x;++U)M[U]=t[U];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(f,m,p,_){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=h.value,_!==!0||g===null){const d=p+v*4,T=m.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,M=p;x!==v;++x,M+=4)r.copy(f[x]).applyMatrix4(T,a),r.normal.toArray(g,M),g[M+3]=r.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Ig(i){let e=new WeakMap;function t(r,a){return a===tc?r.mapping=So:a===nc&&(r.mapping=To),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===tc||a===nc)if(e.has(r)){const h=e.get(r).texture;return t(h,r.mapping)}else{const h=r.image;if(h&&h.height>0){const c=new Vp(h.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Zu extends $u{constructor(e=-1,t=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=l*this.view.offsetY,h=a-l*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const uo=4,qh=[.125,.215,.35,.446,.526,.582],As=20,Sl=new Zu,Zh=new Je;let Tl=null,wl=0,El=0,Cl=!1;const Es=(1+Math.sqrt(5))/2,Qs=1/Es,Kh=[new E(-Es,Qs,0),new E(Es,Qs,0),new E(-Qs,0,Es),new E(Qs,0,Es),new E(0,Es,-Qs),new E(0,Es,Qs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Tl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tl,wl,El),this._renderer.xr.enabled=Cl,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:xr,format:Qn,colorSpace:Uo,depthBuffer:!1},s=jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(o)),this._blurMaterial=Ug(o,e,t)}return s}_compileMaterial(e){const t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,s){const a=new fn(90,1,t,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,m=l.toneMapping;l.getClearColor(Zh),l.toneMapping=is,l.autoClear=!1;const p=new Qc({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new Z(new $e,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Zh),v=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,h[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,h[d]),a.lookAt(0,c[d],0)):(a.up.set(0,h[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;Xr(s,T*x,d>2?x:0,x,x),l.setRenderTarget(s),v&&l.render(_,a),l.render(e,a)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=m,l.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===So||e.mapping===To;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Z(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const h=this._cubeSize;Xr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(r,Sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Kh[(s-o-1)%Kh.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",o),this._halfBlur(r,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,r,a){const h=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new Z(this._lodPlanes[s],c),m=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*As-1),v=o/_,g=isFinite(o)?1+Math.floor(l*v):As;g>As&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${As}`);const d=[];let T=0;for(let w=0;w<As;++w){const R=w/v,y=Math.exp(-R*R/2);d.push(y),w===0?T+=y:w<g&&(T+=2*y)}for(let w=0;w<d.length;w++)d[w]=d[w]/T;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=d,m.latitudinal.value=r==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:x}=this;m.dTheta.value=_,m.mipInt.value=x-n;const M=this._sizeLods[s],U=3*M*(s>x-uo?s-x+uo:0),L=4*(this._cubeSize-M);Xr(t,U,L,3*M,2*M),h.setRenderTarget(t),h.render(f,Sl)}}function Fg(i){const e=[],t=[],n=[];let s=i;const o=i-uo+1+qh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let h=1/a;r>i-uo?h=qh[r-i+uo-1]:r===0&&(h=0),n.push(h);const c=1/(a-2),l=-c,f=1+c,m=[l,l,f,l,f,f,l,l,f,f,l,f],p=6,_=6,v=3,g=2,d=1,T=new Float32Array(v*_*p),x=new Float32Array(g*_*p),M=new Float32Array(d*_*p);for(let L=0;L<p;L++){const w=L%3*2/3-1,R=L>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];T.set(y,v*_*L),x.set(m,g*_*L);const b=[L,L,L,L,L,L];M.set(b,d*_*L)}const U=new Hn;U.setAttribute("position",new ni(T,v)),U.setAttribute("uv",new ni(x,g)),U.setAttribute("faceIndex",new ni(M,d)),e.push(U),s>uo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jh(i,e,t){const n=new Is(i,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ug(i,e,t){const n=new Float32Array(As),s=new E(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:th(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Jh(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Qh(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}function Ng(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const h=a.mapping,c=h===tc||h===nc,l=h===So||h===To;if(c||l){let f=e.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new Dc(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||l&&p&&s(p)?(t===null&&(t=new Dc(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let h=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&h++;return h===c}function o(a){const h=a.target;h.removeEventListener("dispose",o);const c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Bg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Og(i,e,t,n){const s={},o=new WeakMap;function r(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const _ in m.attributes)e.remove(m.attributes[_]);for(const _ in m.morphAttributes){const v=m.morphAttributes[_];for(let g=0,d=v.length;g<d;g++)e.remove(v[g])}m.removeEventListener("dispose",r),delete s[m.id];const p=o.get(m);p&&(e.remove(p),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",r),s[m.id]=!0,t.memory.geometries++),m}function h(f){const m=f.attributes;for(const _ in m)e.update(m[_],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let g=0,d=v.length;g<d;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){const m=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let x=0,M=T.length;x<M;x+=3){const U=T[x+0],L=T[x+1],w=T[x+2];m.push(U,L,L,w,w,U)}}else if(_!==void 0){const T=_.array;v=_.version;for(let x=0,M=T.length/3-1;x<M;x+=3){const U=x+0,L=x+1,w=x+2;m.push(U,L,L,w,w,U)}}else return;const g=new(Ou(m)?Vu:Wu)(m,1);g.version=v;const d=o.get(f);d&&e.remove(d),o.set(f,g)}function l(f){const m=o.get(f);if(m){const p=f.index;p!==null&&m.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:h,getWireframeAttribute:l}}function kg(i,e,t){let n;function s(m){n=m}let o,r;function a(m){o=m.type,r=m.bytesPerElement}function h(m,p){i.drawElements(n,p,o,m*r),t.update(p,n,1)}function c(m,p,_){_!==0&&(i.drawElementsInstanced(n,p,o,m*r,_),t.update(p,n,_))}function l(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,m,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];t.update(g,n,1)}function f(m,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<m.length;d++)c(m[d]/r,p[d],v[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,o,m,0,v,0,_);let d=0;for(let T=0;T<_;T++)d+=p[T]*v[T];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function Gg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zg(i,e,t){const n=new WeakMap,s=new xt;function o(r,a,h){const c=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0;let m=n.get(a);if(m===void 0||m.count!==f){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var p=b;m!==void 0&&m.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),g===!0&&(M=3);let U=a.attributes.position.count*M,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*L*4*f),R=new Gu(w,U,L,f);R.type=Ei,R.needsUpdate=!0;const y=M*4;for(let A=0;A<f;A++){const B=d[A],I=T[A],G=x[A],O=U*L*4*A;for(let Y=0;Y<B.count;Y++){const z=Y*y;_===!0&&(s.fromBufferAttribute(B,Y),w[O+z+0]=s.x,w[O+z+1]=s.y,w[O+z+2]=s.z,w[O+z+3]=0),v===!0&&(s.fromBufferAttribute(I,Y),w[O+z+4]=s.x,w[O+z+5]=s.y,w[O+z+6]=s.z,w[O+z+7]=0),g===!0&&(s.fromBufferAttribute(G,Y),w[O+z+8]=s.x,w[O+z+9]=s.y,w[O+z+10]=s.z,w[O+z+11]=G.itemSize===4?s.w:1)}}m={count:f,texture:R,size:new we(U,L)},n.set(a,m),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=a.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function Hg(i,e,t,n){let s=new WeakMap;function o(h){const c=n.render.frame,l=h.geometry,f=e.get(h,l);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==c&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){const m=h.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return f}function r(){s=new WeakMap}function a(h){const c=h.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}class Ku extends ln{constructor(e,t,n,s,o,r,a,h,c,l=Mo){if(l!==Mo&&l!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Mo&&(n=Ds),n===void 0&&l===Eo&&(n=wo),super(null,s,o,r,a,h,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ti,this.minFilter=h!==void 0?h:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ju=new ln,ed=new Ku(1,1),Ju=new Gu,Qu=new Ap,ef=new Yu,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),od=new Float32Array(4);function No(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=td[s];if(o===void 0&&(o=new Float32Array(s),td[s]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,i[r].toArray(o,a)}return o}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xa(i,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;od.set(n),i.uniformMatrix2fv(this.addr,!1,od),Ht(t,n)}}function qg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;sd.set(n),i.uniformMatrix3fv(this.addr,!1,sd),Ht(t,n)}}function Zg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;id.set(n),i.uniformMatrix4fv(this.addr,!1,id),Ht(t,n)}}function Kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function e_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function i_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function s_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(ed.compareFunction=Bu,o=ed):o=ju,t.setTexture2D(e||o,s)}function o_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qu,s)}function r_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ef,s)}function a_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ju,s)}function l_(i){switch(i){case 5126:return Wg;case 35664:return Vg;case 35665:return Xg;case 35666:return $g;case 35674:return Yg;case 35675:return qg;case 35676:return Zg;case 5124:case 35670:return Kg;case 35667:case 35671:return jg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}function c_(i,e){i.uniform1fv(this.addr,e)}function h_(i,e){const t=No(e,this.size,2);i.uniform2fv(this.addr,t)}function d_(i,e){const t=No(e,this.size,3);i.uniform3fv(this.addr,t)}function u_(i,e){const t=No(e,this.size,4);i.uniform4fv(this.addr,t)}function f_(i,e){const t=No(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p_(i,e){const t=No(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m_(i,e){const t=No(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g_(i,e){i.uniform1iv(this.addr,e)}function __(i,e){i.uniform2iv(this.addr,e)}function v_(i,e){i.uniform3iv(this.addr,e)}function x_(i,e){i.uniform4iv(this.addr,e)}function M_(i,e){i.uniform1uiv(this.addr,e)}function y_(i,e){i.uniform2uiv(this.addr,e)}function b_(i,e){i.uniform3uiv(this.addr,e)}function S_(i,e){i.uniform4uiv(this.addr,e)}function T_(i,e,t){const n=this.cache,s=e.length,o=Xa(t,s);zt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||ju,o[r])}function w_(i,e,t){const n=this.cache,s=e.length,o=Xa(t,s);zt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Qu,o[r])}function E_(i,e,t){const n=this.cache,s=e.length,o=Xa(t,s);zt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||ef,o[r])}function C_(i,e,t){const n=this.cache,s=e.length,o=Xa(t,s);zt(n,o)||(i.uniform1iv(this.addr,o),Ht(n,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Ju,o[r])}function A_(i){switch(i){case 5126:return c_;case 35664:return h_;case 35665:return d_;case 35666:return u_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return x_;case 5125:return M_;case 36294:return y_;case 36295:return b_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return C_}}class P_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l_(t.type)}}class R_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A_(t.type)}}class L_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],n)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function rd(i,e){i.seq.push(e),i.map[e.id]=e}function D_(i,e,t){const n=i.name,s=n.length;for(Al.lastIndex=0;;){const o=Al.exec(n),r=Al.lastIndex;let a=o[1];const h=o[2]==="]",c=o[3];if(h&&(a=a|0),c===void 0||c==="["&&r+2===s){rd(t,c===void 0?new P_(a,i,e):new R_(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new L_(a),rd(t,f)),t=f}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);D_(o,r,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],h=n[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function ad(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const I_=37297;let F_=0;function U_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const ld=new je;function N_(i){rt._getMatrix(ld,rt.workingColorSpace,i);const e=`mat3( ${ld.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Wa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+U_(i.getShaderSource(e),r)}else return s}function B_(i,e){const t=N_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function O_(i,e){let t;switch(e){case tp:t="Linear";break;case np:t="Reinhard";break;case ip:t="Cineon";break;case Tu:t="ACESFilmic";break;case op:t="AgX";break;case rp:t="Neutral";break;case sp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new E;function k_(){rt.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function z_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:a}}return t}function tr(i){return i!==""}function hd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(W_,X_)}const V_=new Map;function X_(i,e){let t=Qe[e];if(t===void 0){const n=V_.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace($_,Y_)}function Y_(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function fd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function Z_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case So:case To:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function j_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Su:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case ep:e="ENVMAP_BLENDING_ADD";break}return e}function J_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q_(i,e,t,n){const s=i.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const h=q_(t),c=Z_(t),l=K_(t),f=j_(t),m=J_(t),p=G_(t),_=z_(o),v=s.createProgram();let g,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(tr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(tr).join(`
`),d.length>0&&(d+=`
`)):(g=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),d=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Qe.tonemapping_pars_fragment:"",t.toneMapping!==is?O_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,B_("linearToOutputTexel",t.outputColorSpace),k_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),r=Ic(r),r=hd(r,t),r=dd(r,t),a=Ic(a),a=hd(a,t),a=dd(a,t),r=ud(r),a=ud(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=T+g+r,M=T+d+a,U=ad(s,s.VERTEX_SHADER,x),L=ad(s,s.FRAGMENT_SHADER,M);s.attachShader(v,U),s.attachShader(v,L),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(A){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(U).trim(),G=s.getShaderInfoLog(L).trim();let O=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,L);else{const z=cd(s,U,"vertex"),N=cd(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+z+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(I===""||G==="")&&(Y=!1);Y&&(A.diagnostics={runnable:O,programLog:B,vertexShader:{log:I,prefix:g},fragmentShader:{log:G,prefix:d}})}s.deleteShader(U),s.deleteShader(L),R=new ya(s,v),y=H_(s,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,I_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=L,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new n1(e),t.set(e,n)),n}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(i,e,t,n,s,o,r){const a=new zu,h=new t1,c=new Set,l=[],f=s.logarithmicDepthBuffer,m=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,b,A,B,I){const G=B.fog,O=I.geometry,Y=y.isMeshStandardMaterial?B.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),N=z&&z.mapping===Ha?z.image.height:null,ee=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ge=ae!==void 0?ae.length:0;let Ce=0;O.morphAttributes.position!==void 0&&(Ce=1),O.morphAttributes.normal!==void 0&&(Ce=2),O.morphAttributes.color!==void 0&&(Ce=3);let Be,j,le,Me;if(ee){const et=ci[ee];Be=et.vertexShader,j=et.fragmentShader}else Be=y.vertexShader,j=y.fragmentShader,h.update(y),le=h.getVertexShaderID(y),Me=h.getFragmentShaderID(y);const pe=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Ae=I.isInstancedMesh===!0,me=I.isBatchedMesh===!0,Ee=!!y.map,te=!!y.matcap,K=!!z,D=!!y.aoMap,oe=!!y.lightMap,Q=!!y.bumpMap,re=!!y.normalMap,ne=!!y.displacementMap,xe=!!y.emissiveMap,_e=!!y.metalnessMap,C=!!y.roughnessMap,S=y.anisotropy>0,F=y.clearcoat>0,H=y.dispersion>0,W=y.iridescence>0,$=y.sheen>0,de=y.transmission>0,fe=S&&!!y.anisotropyMap,ve=F&&!!y.clearcoatMap,Se=F&&!!y.clearcoatNormalMap,q=F&&!!y.clearcoatRoughnessMap,ue=W&&!!y.iridescenceMap,Te=W&&!!y.iridescenceThicknessMap,Pe=$&&!!y.sheenColorMap,be=$&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Fe=!!y.specularColorMap,Oe=!!y.specularIntensityMap,k=de&&!!y.transmissionMap,ye=de&&!!y.thicknessMap,J=!!y.gradientMap,ce=!!y.alphaMap,Le=y.alphaTest>0,De=!!y.alphaHash,Xe=!!y.extensions;let ot=is;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ot=i.toneMapping);const Dt={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Be,fragmentShader:j,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:me,batchingColor:me&&I._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&I.instanceColor!==null,instancingMorph:Ae&&I.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Uo,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:te,envMap:K,envMapMode:K&&z.mapping,envMapCubeUVHeight:N,aoMap:D,lightMap:oe,bumpMap:Q,normalMap:re,displacementMap:m&&ne,emissiveMap:xe,normalMapObjectSpace:re&&y.normalMapType===hp,normalMapTangentSpace:re&&y.normalMapType===Nu,metalnessMap:_e,roughnessMap:C,anisotropy:S,anisotropyMap:fe,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:Se,clearcoatRoughnessMap:q,dispersion:H,iridescence:W,iridescenceMap:ue,iridescenceThicknessMap:Te,sheen:$,sheenColorMap:Pe,sheenRoughnessMap:be,specularMap:Ie,specularColorMap:Fe,specularIntensityMap:Oe,transmission:de,transmissionMap:k,thicknessMap:ye,gradientMap:J,opaque:y.transparent===!1&&y.blending===xo&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:Le,alphaHash:De,combine:y.combine,mapUv:Ee&&v(y.map.channel),aoMapUv:D&&v(y.aoMap.channel),lightMapUv:oe&&v(y.lightMap.channel),bumpMapUv:Q&&v(y.bumpMap.channel),normalMapUv:re&&v(y.normalMap.channel),displacementMapUv:ne&&v(y.displacementMap.channel),emissiveMapUv:xe&&v(y.emissiveMap.channel),metalnessMapUv:_e&&v(y.metalnessMap.channel),roughnessMapUv:C&&v(y.roughnessMap.channel),anisotropyMapUv:fe&&v(y.anisotropyMap.channel),clearcoatMapUv:ve&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(y.sheenRoughnessMap.channel),specularMapUv:Ie&&v(y.specularMap.channel),specularColorMapUv:Fe&&v(y.specularColorMap.channel),specularIntensityMapUv:Oe&&v(y.specularIntensityMap.channel),transmissionMapUv:k&&v(y.transmissionMap.channel),thicknessMapUv:ye&&v(y.thicknessMap.channel),alphaMapUv:ce&&v(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(re||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Ee||ce),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:he,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vt,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&y.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function d(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)b.push(A),b.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(T(b,y),x(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function T(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const b=_[y.type];let A;if(b){const B=ci[b];A=Gp.clone(B.uniforms)}else A=y.uniforms;return A}function U(y,b){let A;for(let B=0,I=l.length;B<I;B++){const G=l[B];if(G.cacheKey===b){A=G,++A.usedTimes;break}}return A===void 0&&(A=new Q_(i,b,y,o),l.push(A)),A}function L(y){if(--y.usedTimes===0){const b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function w(y){h.remove(y)}function R(){h.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:U,releaseProgram:L,releaseShaderCache:w,programs:l,dispose:R}}function s1(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,h){i.get(r)[a]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function o1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function md(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function r(f,m,p,_,v,g){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:m,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:g},i[e]=d):(d.id=f.id,d.object=f,d.geometry=m,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=g),e++,d}function a(f,m,p,_,v,g){const d=r(f,m,p,_,v,g);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function h(f,m,p,_,v,g){const d=r(f,m,p,_,v,g);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,m){t.length>1&&t.sort(f||o1),n.length>1&&n.sort(m||pd),s.length>1&&s.sort(m||pd)}function l(){for(let f=e,m=i.length;f<m;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:a,unshift:h,finish:l,sort:c}}function r1(){let i=new WeakMap;function e(n,s){const o=i.get(n);let r;return o===void 0?(r=new md,i.set(n,[r])):s>=o.length?(r=new md,o.push(r)):r=o[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function a1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Je};break;case"SpotLight":t={position:new E,direction:new E,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function l1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let c1=0;function h1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d1(i){const e=new a1,t=l1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,o=new lt,r=new lt;function a(c){let l=0,f=0,m=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,_=0,v=0,g=0,d=0,T=0,x=0,M=0,U=0,L=0,w=0;c.sort(h1);for(let y=0,b=c.length;y<b;y++){const A=c[y],B=A.color,I=A.intensity,G=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)l+=B.r*I,f+=B.g*I,m+=B.b*I;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(A.sh.coefficients[Y],I);w++}else if(A.isDirectionalLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=A.shadow.matrix,T++}n.directional[p]=Y,p++}else if(A.isSpotLight){const Y=e.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(B).multiplyScalar(I),Y.distance=G,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,n.spot[v]=Y;const z=A.shadow;if(A.map&&(n.spotLightMap[U]=A.map,U++,z.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[v]=z.matrix,A.castShadow){const N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=O,M++}v++}else if(A.isRectAreaLight){const Y=e.get(A);Y.color.copy(B).multiplyScalar(I),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=Y,g++}else if(A.isPointLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const z=A.shadow,N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,n.pointShadow[_]=N,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=A.shadow.matrix,x++}n.point[_]=Y,_++}else if(A.isHemisphereLight){const Y=e.get(A);Y.skyColor.copy(A.color).multiplyScalar(I),Y.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[d]=Y,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=m;const R=n.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==d||R.numDirectionalShadows!==T||R.numPointShadows!==x||R.numSpotShadows!==M||R.numSpotMaps!==U||R.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+U-L,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=w,R.directionalLength=p,R.pointLength=_,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=d,R.numDirectionalShadows=T,R.numPointShadows=x,R.numSpotShadows=M,R.numSpotMaps=U,R.numLightProbes=w,n.version=c1++)}function h(c,l){let f=0,m=0,p=0,_=0,v=0;const g=l.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const x=c[d];if(x.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(x.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),r.identity(),o.copy(x.matrixWorld),o.premultiply(g),r.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const M=n.point[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),m++}else if(x.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:a,setupView:h,state:n}}function gd(i){const e=new d1(i),t=[],n=[];function s(l){c.camera=l,t.length=0,n.length=0}function o(l){t.push(l)}function r(l){n.push(l)}function a(){e.setup(t)}function h(l){e.setupView(t,l)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:h,pushLight:o,pushShadow:r}}function u1(i){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new gd(i),e.set(s,[a])):o>=r.length?(a=new gd(i),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class f1 extends _s{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p1 extends _s{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`;function _1(i,e,t){let n=new eh;const s=new we,o=new we,r=new xt,a=new f1({depthPacking:cp}),h=new p1,c={},l=t.maxTextureSize,f={[os]:Jt,[Jt]:os,[Vt]:Vt},m=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Z(_,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let d=this.type;this.render=function(L,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ns),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const I=d!==Si&&this.type===Si,G=d===Si&&this.type!==Si;for(let O=0,Y=L.length;O<Y;O++){const z=L[O],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const ee=N.getFrameExtents();if(s.multiply(ee),o.copy(N.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(o.x=Math.floor(l/ee.x),s.x=o.x*ee.x,N.mapSize.x=o.x),s.y>l&&(o.y=Math.floor(l/ee.y),s.y=o.y*ee.y,N.mapSize.y=o.y)),N.map===null||I===!0||G===!0){const ge=this.type!==Si?{minFilter:ti,magFilter:ti}:{};N.map!==null&&N.map.dispose(),N.map=new Is(s.x,s.y,ge),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const ae=N.getViewportCount();for(let ge=0;ge<ae;ge++){const Ce=N.getViewport(ge);r.set(o.x*Ce.x,o.y*Ce.y,o.x*Ce.z,o.y*Ce.w),B.viewport(r),N.updateMatrices(z,ge),n=N.getFrustum(),M(w,R,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===Si&&T(N,R),N.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(y,b,A)};function T(L,w){const R=e.update(v);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Is(s.x,s.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(w,null,R,m,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(w,null,R,p,v,null)}function x(L,w,R,y){let b=null;const A=R.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)b=A;else if(b=R.isPointLight===!0?h:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=b.uuid,I=w.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let O=G[I];O===void 0&&(O=b.clone(),G[I]=O,w.addEventListener("dispose",U)),b=O}if(b.visible=w.visible,b.wireframe=w.wireframe,y===Si?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:f[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=i.properties.get(b);B.light=R}return b}function M(L,w,R,y,b){if(L.visible===!1)return;if(L.layers.test(w.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===Si)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,L.matrixWorld);const I=e.update(L),G=L.material;if(Array.isArray(G)){const O=I.groups;for(let Y=0,z=O.length;Y<z;Y++){const N=O[Y],ee=G[N.materialIndex];if(ee&&ee.visible){const ae=x(L,ee,y,b);L.onBeforeShadow(i,L,w,R,I,ae,N),i.renderBufferDirect(R,null,I,ae,L,N),L.onAfterShadow(i,L,w,R,I,ae,N)}}}else if(G.visible){const O=x(L,G,y,b);L.onBeforeShadow(i,L,w,R,I,O,null),i.renderBufferDirect(R,null,I,O,L,null),L.onAfterShadow(i,L,w,R,I,O,null)}}const B=L.children;for(let I=0,G=B.length;I<G;I++)M(B[I],w,R,y,b)}function U(L){L.target.removeEventListener("dispose",U);for(const R in c){const y=c[R],b=L.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const v1={[ql]:Zl,[Kl]:Ql,[jl]:ec,[bo]:Jl,[Zl]:ql,[Ql]:Kl,[ec]:jl,[Jl]:bo};function x1(i,e){function t(){let k=!1;const ye=new xt;let J=null;const ce=new xt(0,0,0,0);return{setMask:function(Le){J!==Le&&!k&&(i.colorMask(Le,Le,Le,Le),J=Le)},setLocked:function(Le){k=Le},setClear:function(Le,De,Xe,ot,Dt){Dt===!0&&(Le*=ot,De*=ot,Xe*=ot),ye.set(Le,De,Xe,ot),ce.equals(ye)===!1&&(i.clearColor(Le,De,Xe,ot),ce.copy(ye))},reset:function(){k=!1,J=null,ce.set(-1,0,0,0)}}}function n(){let k=!1,ye=!1,J=null,ce=null,Le=null;return{setReversed:function(De){if(ye!==De){const Xe=e.get("EXT_clip_control");ye?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const ot=Le;Le=null,this.setClear(ot)}ye=De},getReversed:function(){return ye},setTest:function(De){De?pe(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(De){J!==De&&!k&&(i.depthMask(De),J=De)},setFunc:function(De){if(ye&&(De=v1[De]),ce!==De){switch(De){case ql:i.depthFunc(i.NEVER);break;case Zl:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case bo:i.depthFunc(i.LEQUAL);break;case jl:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case Ql:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=De}},setLocked:function(De){k=De},setClear:function(De){Le!==De&&(ye&&(De=1-De),i.clearDepth(De),Le=De)},reset:function(){k=!1,J=null,ce=null,Le=null,ye=!1}}}function s(){let k=!1,ye=null,J=null,ce=null,Le=null,De=null,Xe=null,ot=null,Dt=null;return{setTest:function(et){k||(et?pe(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(et){ye!==et&&!k&&(i.stencilMask(et),ye=et)},setFunc:function(et,qt,Rn){(J!==et||ce!==qt||Le!==Rn)&&(i.stencilFunc(et,qt,Rn),J=et,ce=qt,Le=Rn)},setOp:function(et,qt,Rn){(De!==et||Xe!==qt||ot!==Rn)&&(i.stencilOp(et,qt,Rn),De=et,Xe=qt,ot=Rn)},setLocked:function(et){k=et},setClear:function(et){Dt!==et&&(i.clearStencil(et),Dt=et)},reset:function(){k=!1,ye=null,J=null,ce=null,Le=null,De=null,Xe=null,ot=null,Dt=null}}}const o=new t,r=new n,a=new s,h=new WeakMap,c=new WeakMap;let l={},f={},m=new WeakMap,p=[],_=null,v=!1,g=null,d=null,T=null,x=null,M=null,U=null,L=null,w=new Je(0,0,0),R=0,y=!1,b=null,A=null,B=null,I=null,G=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,z=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),Y=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Y=z>=2);let ee=null,ae={};const ge=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Be=new xt().fromArray(ge),j=new xt().fromArray(Ce);function le(k,ye,J,ce){const Le=new Uint8Array(4),De=i.createTexture();i.bindTexture(k,De),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<J;Xe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(ye+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return De}const Me={};Me[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),r.setFunc(bo),Q(!1),re(Sh),pe(i.CULL_FACE),D(ns);function pe(k){l[k]!==!0&&(i.enable(k),l[k]=!0)}function he(k){l[k]!==!1&&(i.disable(k),l[k]=!1)}function Ae(k,ye){return f[k]!==ye?(i.bindFramebuffer(k,ye),f[k]=ye,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ye),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function me(k,ye){let J=p,ce=!1;if(k){J=m.get(ye),J===void 0&&(J=[],m.set(ye,J));const Le=k.textures;if(J.length!==Le.length||J[0]!==i.COLOR_ATTACHMENT0){for(let De=0,Xe=Le.length;De<Xe;De++)J[De]=i.COLOR_ATTACHMENT0+De;J.length=Le.length,ce=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ce=!0);ce&&i.drawBuffers(J)}function Ee(k){return _!==k?(i.useProgram(k),_=k,!0):!1}const te={[Cs]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};te[Of]=i.MIN,te[kf]=i.MAX;const K={[Gf]:i.ZERO,[zf]:i.ONE,[Hf]:i.SRC_COLOR,[$l]:i.SRC_ALPHA,[qf]:i.SRC_ALPHA_SATURATE,[$f]:i.DST_COLOR,[Vf]:i.DST_ALPHA,[Wf]:i.ONE_MINUS_SRC_COLOR,[Yl]:i.ONE_MINUS_SRC_ALPHA,[Yf]:i.ONE_MINUS_DST_COLOR,[Xf]:i.ONE_MINUS_DST_ALPHA,[Zf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[jf]:i.CONSTANT_ALPHA,[Jf]:i.ONE_MINUS_CONSTANT_ALPHA};function D(k,ye,J,ce,Le,De,Xe,ot,Dt,et){if(k===ns){v===!0&&(he(i.BLEND),v=!1);return}if(v===!1&&(pe(i.BLEND),v=!0),k!==Uf){if(k!==g||et!==y){if((d!==Cs||M!==Cs)&&(i.blendEquation(i.FUNC_ADD),d=Cs,M=Cs),et)switch(k){case xo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFunc(i.ONE,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,x=null,U=null,L=null,w.set(0,0,0),R=0,g=k,y=et}return}Le=Le||ye,De=De||J,Xe=Xe||ce,(ye!==d||Le!==M)&&(i.blendEquationSeparate(te[ye],te[Le]),d=ye,M=Le),(J!==T||ce!==x||De!==U||Xe!==L)&&(i.blendFuncSeparate(K[J],K[ce],K[De],K[Xe]),T=J,x=ce,U=De,L=Xe),(ot.equals(w)===!1||Dt!==R)&&(i.blendColor(ot.r,ot.g,ot.b,Dt),w.copy(ot),R=Dt),g=k,y=!1}function oe(k,ye){k.side===Vt?he(i.CULL_FACE):pe(i.CULL_FACE);let J=k.side===Jt;ye&&(J=!J),Q(J),k.blending===xo&&k.transparent===!1?D(ns):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),o.setMask(k.colorWrite);const ce=k.stencilWrite;a.setTest(ce),ce&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function re(k){k!==If?(pe(i.CULL_FACE),k!==A&&(k===Sh?i.cullFace(i.BACK):k===Ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),A=k}function ne(k){k!==B&&(Y&&i.lineWidth(k),B=k)}function xe(k,ye,J){k?(pe(i.POLYGON_OFFSET_FILL),(I!==ye||G!==J)&&(i.polygonOffset(ye,J),I=ye,G=J)):he(i.POLYGON_OFFSET_FILL)}function _e(k){k?pe(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function C(k){k===void 0&&(k=i.TEXTURE0+O-1),ee!==k&&(i.activeTexture(k),ee=k)}function S(k,ye,J){J===void 0&&(ee===null?J=i.TEXTURE0+O-1:J=ee);let ce=ae[J];ce===void 0&&(ce={type:void 0,texture:void 0},ae[J]=ce),(ce.type!==k||ce.texture!==ye)&&(ee!==J&&(i.activeTexture(J),ee=J),i.bindTexture(k,ye||Me[k]),ce.type=k,ce.texture=ye)}function F(){const k=ae[ee];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function W(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){Be.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Be.copy(k))}function be(k){j.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),j.copy(k))}function Ie(k,ye){let J=c.get(ye);J===void 0&&(J=new WeakMap,c.set(ye,J));let ce=J.get(k);ce===void 0&&(ce=i.getUniformBlockIndex(ye,k.name),J.set(k,ce))}function Fe(k,ye){const ce=c.get(ye).get(k);h.get(ye)!==ce&&(i.uniformBlockBinding(ye,ce,k.__bindingPointIndex),h.set(ye,ce))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},ee=null,ae={},f={},m=new WeakMap,p=[],_=null,v=!1,g=null,d=null,T=null,x=null,M=null,U=null,L=null,w=new Je(0,0,0),R=0,y=!1,b=null,A=null,B=null,I=null,G=null,Be.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:pe,disable:he,bindFramebuffer:Ae,drawBuffers:me,useProgram:Ee,setBlending:D,setMaterial:oe,setFlipSided:Q,setCullFace:re,setLineWidth:ne,setPolygonOffset:xe,setScissorTest:_e,activeTexture:C,bindTexture:S,unbindTexture:F,compressedTexImage2D:H,compressedTexImage3D:W,texImage2D:ue,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:Se,texStorage3D:q,texSubImage2D:$,texSubImage3D:de,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Pe,viewport:be,reset:Oe}}function _d(i,e,t,n){const s=M1(n);switch(t){case Pu:return i*e;case Lu:return i*e;case Du:return i*e*2;case Iu:return i*e/s.components*s.byteLength;case Zc:return i*e/s.components*s.byteLength;case Fu:return i*e*2/s.components*s.byteLength;case Kc:return i*e*2/s.components*s.byteLength;case Ru:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case jc:return i*e*4/s.components*s.byteLength;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:case lc:return Math.max(i,16)*Math.max(e,8)/4;case oc:case ac:return Math.max(i,8)*Math.max(e,8)/2;case cc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case Ec:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uu:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pc:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M1(i){switch(i){case Ii:case Eu:return{byteLength:1,components:1};case fr:case Cu:case xr:return{byteLength:2,components:1};case Yc:case qc:return{byteLength:2,components:4};case Ds:case $c:case Ei:return{byteLength:4,components:1};case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function y1(i,e,t,n,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,l=new WeakMap;let f;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):Ra("canvas")}function v(C,S,F){let H=1;const W=_e(C);if((W.width>F||W.height>F)&&(H=F/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(H*W.width),de=Math.floor(H*W.height);f===void 0&&(f=_($,de));const fe=S?_($,de):f;return fe.width=$,fe.height=de,fe.getContext("2d").drawImage(C,0,0,$,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+$+"x"+de+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),C;return C}function g(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,S,F,H,W=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),S===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),S===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){const de=W?Wa:rt.getTransfer(H);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=de===gt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(C,S){let F;return C?S===null||S===Ds||S===wo?F=i.DEPTH24_STENCIL8:S===Ei?F=i.DEPTH32F_STENCIL8:S===fr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ds||S===wo?F=i.DEPTH_COMPONENT24:S===Ei?F=i.DEPTH_COMPONENT32F:S===fr&&(F=i.DEPTH_COMPONENT16),F}function U(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ti&&C.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function L(C){const S=C.target;S.removeEventListener("dispose",L),R(S),S.isVideoTexture&&l.delete(S)}function w(C){const S=C.target;S.removeEventListener("dispose",w),b(S)}function R(C){const S=n.get(C);if(S.__webglInit===void 0)return;const F=C.source,H=m.get(F);if(H){const W=H[S.__cacheKey];W.usedTimes--,W.usedTimes===0&&y(C),Object.keys(H).length===0&&m.delete(F)}n.remove(C)}function y(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const F=C.source,H=m.get(F);delete H[S.__cacheKey],r.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let W=0;W<S.__webglFramebuffer[H].length;W++)i.deleteFramebuffer(S.__webglFramebuffer[H][W]);else i.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)i.deleteFramebuffer(S.__webglFramebuffer[H]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=C.textures;for(let H=0,W=F.length;H<W;H++){const $=n.get(F[H]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(F[H])}n.remove(C)}let A=0;function B(){A=0}function I(){const C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function G(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function O(C,S){const F=n.get(C);if(C.isVideoTexture&&ne(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const H=C.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,C,S);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function Y(C,S){const F=n.get(C);if(C.version>0&&F.__version!==C.version){j(F,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function z(C,S){const F=n.get(C);if(C.version>0&&F.__version!==C.version){j(F,C,S);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function N(C,S){const F=n.get(C);if(C.version>0&&F.__version!==C.version){le(F,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}const ee={[ic]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[sc]:i.MIRRORED_REPEAT},ae={[ti]:i.NEAREST,[ap]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[tl]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},ge={[dp]:i.NEVER,[_p]:i.ALWAYS,[up]:i.LESS,[Bu]:i.LEQUAL,[fp]:i.EQUAL,[gp]:i.GEQUAL,[pp]:i.GREATER,[mp]:i.NOTEQUAL};function Ce(C,S){if(S.type===Ei&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Yt||S.magFilter===tl||S.magFilter===Er||S.magFilter===Rs||S.minFilter===Yt||S.minFilter===tl||S.minFilter===Er||S.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ee[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ee[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ee[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ti||S.minFilter!==Er&&S.minFilter!==Rs||S.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Be(C,S){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",L));const H=S.source;let W=m.get(H);W===void 0&&(W={},m.set(H,W));const $=G(S);if($!==C.__cacheKey){W[$]===void 0&&(W[$]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,F=!0),W[$].usedTimes++;const de=W[C.__cacheKey];de!==void 0&&(W[C.__cacheKey].usedTimes--,de.usedTimes===0&&y(S)),C.__cacheKey=$,C.__webglTexture=W[$].texture}return F}function j(C,S,F){let H=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=i.TEXTURE_3D);const W=Be(C,S),$=S.source;t.bindTexture(H,C.__webglTexture,i.TEXTURE0+F);const de=n.get($);if($.version!==de.__version||W===!0){t.activeTexture(i.TEXTURE0+F);const fe=rt.getPrimaries(rt.workingColorSpace),ve=S.colorSpace===Ji?null:rt.getPrimaries(S.colorSpace),Se=S.colorSpace===Ji||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let q=v(S.image,!1,s.maxTextureSize);q=xe(S,q);const ue=o.convert(S.format,S.colorSpace),Te=o.convert(S.type);let Pe=x(S.internalFormat,ue,Te,S.colorSpace,S.isVideoTexture);Ce(H,S);let be;const Ie=S.mipmaps,Fe=S.isVideoTexture!==!0,Oe=de.__version===void 0||W===!0,k=$.dataReady,ye=U(S,q);if(S.isDepthTexture)Pe=M(S.format===Eo,S.type),Oe&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Pe,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,Pe,q.width,q.height,0,ue,Te,null));else if(S.isDataTexture)if(Ie.length>0){Fe&&Oe&&t.texStorage2D(i.TEXTURE_2D,ye,Pe,Ie[0].width,Ie[0].height);for(let J=0,ce=Ie.length;J<ce;J++)be=Ie[J],Fe?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,be.width,be.height,ue,Te,be.data):t.texImage2D(i.TEXTURE_2D,J,Pe,be.width,be.height,0,ue,Te,be.data);S.generateMipmaps=!1}else Fe?(Oe&&t.texStorage2D(i.TEXTURE_2D,ye,Pe,q.width,q.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,q.width,q.height,ue,Te,q.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,q.width,q.height,0,ue,Te,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Pe,Ie[0].width,Ie[0].height,q.depth);for(let J=0,ce=Ie.length;J<ce;J++)if(be=Ie[J],S.format!==Qn)if(ue!==null)if(Fe){if(k)if(S.layerUpdates.size>0){const Le=_d(be.width,be.height,S.format,S.type);for(const De of S.layerUpdates){const Xe=be.data.subarray(De*Le/be.data.BYTES_PER_ELEMENT,(De+1)*Le/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,De,be.width,be.height,1,ue,Xe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,q.depth,ue,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Pe,be.width,be.height,q.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,q.depth,ue,Te,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Pe,be.width,be.height,q.depth,0,ue,Te,be.data)}else{Fe&&Oe&&t.texStorage2D(i.TEXTURE_2D,ye,Pe,Ie[0].width,Ie[0].height);for(let J=0,ce=Ie.length;J<ce;J++)be=Ie[J],S.format!==Qn?ue!==null?Fe?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,be.width,be.height,ue,be.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,be.width,be.height,ue,Te,be.data):t.texImage2D(i.TEXTURE_2D,J,Pe,be.width,be.height,0,ue,Te,be.data)}else if(S.isDataArrayTexture)if(Fe){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Pe,q.width,q.height,q.depth),k)if(S.layerUpdates.size>0){const J=_d(q.width,q.height,S.format,S.type);for(const ce of S.layerUpdates){const Le=q.data.subarray(ce*J/q.data.BYTES_PER_ELEMENT,(ce+1)*J/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,q.width,q.height,1,ue,Te,Le)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ue,Te,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,q.width,q.height,q.depth,0,ue,Te,q.data);else if(S.isData3DTexture)Fe?(Oe&&t.texStorage3D(i.TEXTURE_3D,ye,Pe,q.width,q.height,q.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ue,Te,q.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,q.width,q.height,q.depth,0,ue,Te,q.data);else if(S.isFramebufferTexture){if(Oe)if(Fe)t.texStorage2D(i.TEXTURE_2D,ye,Pe,q.width,q.height);else{let J=q.width,ce=q.height;for(let Le=0;Le<ye;Le++)t.texImage2D(i.TEXTURE_2D,Le,Pe,J,ce,0,ue,Te,null),J>>=1,ce>>=1}}else if(Ie.length>0){if(Fe&&Oe){const J=_e(Ie[0]);t.texStorage2D(i.TEXTURE_2D,ye,Pe,J.width,J.height)}for(let J=0,ce=Ie.length;J<ce;J++)be=Ie[J],Fe?k&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue,Te,be):t.texImage2D(i.TEXTURE_2D,J,Pe,ue,Te,be);S.generateMipmaps=!1}else if(Fe){if(Oe){const J=_e(q);t.texStorage2D(i.TEXTURE_2D,ye,Pe,J.width,J.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Te,q)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ue,Te,q);g(S)&&d(H),de.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function le(C,S,F){if(S.image.length!==6)return;const H=Be(C,S),W=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);const $=n.get(W);if(W.version!==$.__version||H===!0){t.activeTexture(i.TEXTURE0+F);const de=rt.getPrimaries(rt.workingColorSpace),fe=S.colorSpace===Ji?null:rt.getPrimaries(S.colorSpace),ve=S.colorSpace===Ji||de===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,q=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let ce=0;ce<6;ce++)!Se&&!q?ue[ce]=v(S.image[ce],!0,s.maxCubemapSize):ue[ce]=q?S.image[ce].image:S.image[ce],ue[ce]=xe(S,ue[ce]);const Te=ue[0],Pe=o.convert(S.format,S.colorSpace),be=o.convert(S.type),Ie=x(S.internalFormat,Pe,be,S.colorSpace),Fe=S.isVideoTexture!==!0,Oe=$.__version===void 0||H===!0,k=W.dataReady;let ye=U(S,Te);Ce(i.TEXTURE_CUBE_MAP,S);let J;if(Se){Fe&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ie,Te.width,Te.height);for(let ce=0;ce<6;ce++){J=ue[ce].mipmaps;for(let Le=0;Le<J.length;Le++){const De=J[Le];S.format!==Qn?Pe!==null?Fe?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,0,0,De.width,De.height,Pe,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,Ie,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,0,0,De.width,De.height,Pe,be,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,Ie,De.width,De.height,0,Pe,be,De.data)}}}else{if(J=S.mipmaps,Fe&&Oe){J.length>0&&ye++;const ce=_e(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ie,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(q){Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ue[ce].width,ue[ce].height,Pe,be,ue[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ie,ue[ce].width,ue[ce].height,0,Pe,be,ue[ce].data);for(let Le=0;Le<J.length;Le++){const Xe=J[Le].image[ce].image;Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,0,0,Xe.width,Xe.height,Pe,be,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,Ie,Xe.width,Xe.height,0,Pe,be,Xe.data)}}else{Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe,be,ue[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ie,Pe,be,ue[ce]);for(let Le=0;Le<J.length;Le++){const De=J[Le];Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,0,0,Pe,be,De.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,Ie,Pe,be,De.image[ce])}}}g(S)&&d(i.TEXTURE_CUBE_MAP),$.__version=W.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Me(C,S,F,H,W,$){const de=o.convert(F.format,F.colorSpace),fe=o.convert(F.type),ve=x(F.internalFormat,de,fe,F.colorSpace),Se=n.get(S),q=n.get(F);if(q.__renderTarget=S,!Se.__hasExternalTextures){const ue=Math.max(1,S.width>>$),Te=Math.max(1,S.height>>$);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,$,ve,ue,Te,S.depth,0,de,fe,null):t.texImage2D(W,$,ve,ue,Te,0,de,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),re(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,W,q.__webglTexture,0,Q(S)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,W,q.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const H=S.depthTexture,W=H&&H.isDepthTexture?H.type:null,$=M(S.stencilBuffer,W),de=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=Q(S);re(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,$,S.width,S.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,C)}else{const H=S.textures;for(let W=0;W<H.length;W++){const $=H[W],de=o.convert($.format,$.colorSpace),fe=o.convert($.type),ve=x($.internalFormat,de,fe,$.colorSpace),Se=Q(S);F&&re(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ve,S.width,S.height):re(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(S.depthTexture);H.__renderTarget=S,(!H.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const W=H.__webglTexture,$=Q(S);if(S.depthTexture.format===Mo)re(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(S.depthTexture.format===Eo)re(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const S=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const H=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){const W=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),S.__depthDisposeCallback=W}S.__boundDepthTexture=H}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,C)}else if(F){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=i.createRenderbuffer(),pe(S.__webglDepthbuffer[H],C,!1);else{const W=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),pe(S.__webglDepthbuffer,C,!1);else{const H=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,W)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(C,S,F){const H=n.get(C);S!==void 0&&Me(H.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ae(C)}function Ee(C){const S=C.texture,F=n.get(C),H=n.get(S);C.addEventListener("dispose",w);const W=C.textures,$=C.isWebGLCubeRenderTarget===!0,de=W.length>1;if(de||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=S.version,r.memory.textures++),$){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ve=0;ve<S.mipmaps.length;ve++)F.__webglFramebuffer[fe][ve]=i.createFramebuffer()}else F.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)F.__webglFramebuffer[fe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(de)for(let fe=0,ve=W.length;fe<ve;fe++){const Se=n.get(W[fe]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&re(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<W.length;fe++){const ve=W[fe];F.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Se=o.convert(ve.format,ve.colorSpace),q=o.convert(ve.type),ue=x(ve.internalFormat,Se,q,ve.colorSpace,C.isXRRenderTarget===!0),Te=Q(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ue,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Me(F.__webglFramebuffer[fe][ve],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Me(F.__webglFramebuffer[fe],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let fe=0,ve=W.length;fe<ve;fe++){const Se=W[fe],q=n.get(Se);t.bindTexture(i.TEXTURE_2D,q.__webglTexture),Ce(i.TEXTURE_2D,Se),Me(F.__webglFramebuffer,C,Se,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),g(Se)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),Ce(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Me(F.__webglFramebuffer[ve],C,S,i.COLOR_ATTACHMENT0,fe,ve);else Me(F.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,fe,0);g(S)&&d(fe),t.unbindTexture()}C.depthBuffer&&Ae(C)}function te(C){const S=C.textures;for(let F=0,H=S.length;F<H;F++){const W=S[F];if(g(W)){const $=T(C),de=n.get(W).__webglTexture;t.bindTexture($,de),d($),t.unbindTexture()}}}const K=[],D=[];function oe(C){if(C.samples>0){if(re(C)===!1){const S=C.textures,F=C.width,H=C.height;let W=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(C),fe=S.length>1;if(fe)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Se=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,W,i.NEAREST),h===!0&&(K.length=0,D.length=0,K.push(i.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(K.push($),D.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Se=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Q(C){return Math.min(s.maxSamples,C.samples)}function re(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ne(C){const S=r.render.frame;l.get(C)!==S&&(l.set(C,S),C.update())}function xe(C,S){const F=C.colorSpace,H=C.format,W=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Uo&&F!==Ji&&(rt.getTransfer(F)===gt?(H!==Qn||W!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=B,this.setTexture2D=O,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=me,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=re}function b1(i,e){function t(n,s=Ji){let o;const r=rt.getTransfer(s);if(n===Ii)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return i.BYTE;if(n===Cu)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===Ds)return i.UNSIGNED_INT;if(n===Ei)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Ru)return i.RGB;if(n===Qn)return i.RGBA;if(n===Lu)return i.LUMINANCE;if(n===Du)return i.LUMINANCE_ALPHA;if(n===Mo)return i.DEPTH_COMPONENT;if(n===Eo)return i.DEPTH_STENCIL;if(n===Iu)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===Fu)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===ma||n===ga||n===_a||n===va)if(r===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ma)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ma)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===rc||n===ac||n===lc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===oc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===hc||n===dc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===cc||n===hc)return r===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===dc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===Mc||n===yc||n===bc||n===Sc||n===Tc||n===wc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===uc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===Ec||n===Cc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===xa)return r===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uu||n===Ac||n===Pc||n===Rc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===xa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class S1 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T1={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,r=null;const a=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const l=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=l.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&m>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T1)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new ln,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:w1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A1 extends Os{constructor(e,t){super();const n=this;let s=null,o=1,r=null,a="local-floor",h=1,c=null,l=null,f=null,m=null,p=null,_=null;const v=new C1,g=t.getContextAttributes();let d=null,T=null;const x=[],M=[],U=new we;let L=null;const w=new fn;w.viewport=new xt;const R=new fn;R.viewport=new xt;const y=[w,R],b=new S1;let A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=x[j];return le===void 0&&(le=new Pl,x[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=x[j];return le===void 0&&(le=new Pl,x[j]=le),le.getGripSpace()},this.getHand=function(j){let le=x[j];return le===void 0&&(le=new Pl,x[j]=le),le.getHandSpace()};function I(j){const le=M.indexOf(j.inputSource);if(le===-1)return;const Me=x[le];Me!==void 0&&(Me.update(j.inputSource,j.frame,c||r),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",O);for(let j=0;j<x.length;j++){const le=M[j];le!==null&&(M[j]=null,x[j].disconnect(le))}A=null,B=null,v.reset(),e.setRenderTarget(d),p=null,m=null,f=null,s=null,T=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",G),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Is(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,Me=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?Eo:Mo,Me=g.stencil?wo:Ds);const he={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:o};f=new XRWebGLBinding(s,t),m=f.createProjectionLayer(he),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new Is(m.textureWidth,m.textureHeight,{format:Qn,type:Ii,depthTexture:new Ku(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),c=null,r=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(j){for(let le=0;le<j.removed.length;le++){const Me=j.removed[le],pe=M.indexOf(Me);pe>=0&&(M[pe]=null,x[pe].disconnect(Me))}for(let le=0;le<j.added.length;le++){const Me=j.added[le];let pe=M.indexOf(Me);if(pe===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=M.length){M.push(Me),pe=Ae;break}else if(M[Ae]===null){M[Ae]=Me,pe=Ae;break}if(pe===-1)break}const he=x[pe];he&&he.connect(Me)}}const Y=new E,z=new E;function N(j,le,Me){Y.setFromMatrixPosition(le.matrixWorld),z.setFromMatrixPosition(Me.matrixWorld);const pe=Y.distanceTo(z),he=le.projectionMatrix.elements,Ae=Me.projectionMatrix.elements,me=he[14]/(he[10]-1),Ee=he[14]/(he[10]+1),te=(he[9]+1)/he[5],K=(he[9]-1)/he[5],D=(he[8]-1)/he[0],oe=(Ae[8]+1)/Ae[0],Q=me*D,re=me*oe,ne=pe/(-D+oe),xe=ne*-D;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(xe),j.translateZ(ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),he[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const _e=me+ne,C=Ee+ne,S=Q-xe,F=re+(pe-xe),H=te*Ee/C*_e,W=K*Ee/C*_e;j.projectionMatrix.makePerspective(S,F,H,W,_e,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ee(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let le=j.near,Me=j.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),b.near=R.near=w.near=le,b.far=R.far=w.far=Me,(A!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,B=b.far),w.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,b.layers.mask=w.layers.mask|R.layers.mask;const pe=j.parent,he=b.cameras;ee(b,pe);for(let Ae=0;Ae<he.length;Ae++)ee(he[Ae],pe);he.length===2?N(b,w,R):b.projectionMatrix.copy(w.projectionMatrix),ae(j,b,pe)};function ae(j,le,Me){Me===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&p===null))return h},this.setFoveation=function(j){h=j,m!==null&&(m.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ge=null;function Ce(j,le){if(l=le.getViewerPose(c||r),_=le,l!==null){const Me=l.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let pe=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let Ae=0;Ae<Me.length;Ae++){const me=Me[Ae];let Ee=null;if(p!==null)Ee=p.getViewport(me);else{const K=f.getViewSubImage(m,me);Ee=K.viewport,Ae===0&&(e.setRenderTargetTextures(T,K.colorTexture,m.ignoreDepthValues?void 0:K.depthStencilTexture),e.setRenderTarget(T))}let te=y[Ae];te===void 0&&(te=new fn,te.layers.enable(Ae),te.viewport=new xt,y[Ae]=te),te.matrix.fromArray(me.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(me.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Ae===0&&(b.matrix.copy(te.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(te)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){const Ae=f.getDepthInformation(Me[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,s.renderState)}}for(let Me=0;Me<x.length;Me++){const pe=M[Me],he=x[Me];pe!==null&&he!==void 0&&he.update(pe,le,c||r)}ge&&ge(j,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const Be=new qu;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(j){ge=j},this.dispose=function(){}}}const Ts=new Rt,P1=new lt;function R1(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Xu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,T,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(g,d):d.isMeshToonMaterial?(o(g,d),f(g,d)):d.isMeshPhongMaterial?(o(g,d),l(g,d)):d.isMeshStandardMaterial?(o(g,d),m(g,d),d.isMeshPhysicalMaterial&&p(g,d,M)):d.isMeshMatcapMaterial?(o(g,d),_(g,d)):d.isMeshDepthMaterial?o(g,d):d.isMeshDistanceMaterial?(o(g,d),v(g,d)):d.isMeshNormalMaterial?o(g,d):d.isLineBasicMaterial?(r(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?h(g,d,T,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Jt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Jt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const T=e.get(d),x=T.envMap,M=T.envMapRotation;x&&(g.envMap.value=x,Ts.copy(M),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.envMapRotation.value.setFromMatrix4(P1.makeRotationFromEuler(Ts)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function r(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function h(g,d,T,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*T,g.scale.value=x*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function m(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,T){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const T=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L1(i,e,t,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,x){const M=x.program;n.uniformBlockBinding(T,M)}function c(T,x){let M=s[T.id];M===void 0&&(_(T),M=l(T),s[T.id]=M,T.addEventListener("dispose",g));const U=x.program;n.updateUBOMapping(T,U);const L=e.render.frame;o[T.id]!==L&&(m(T),o[T.id]=L)}function l(T){const x=f();T.__bindingPointIndex=x;const M=i.createBuffer(),U=T.__size,L=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,U,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function f(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const x=s[T.id],M=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let L=0,w=M.length;L<w;L++){const R=Array.isArray(M[L])?M[L]:[M[L]];for(let y=0,b=R.length;y<b;y++){const A=R[y];if(p(A,L,y,U)===!0){const B=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let O=0;O<I.length;O++){const Y=I[O],z=v(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,B+G,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,x,M,U){const L=T.value,w=x+"_"+M;if(U[w]===void 0)return typeof L=="number"||typeof L=="boolean"?U[w]=L:U[w]=L.clone(),!0;{const R=U[w];if(typeof L=="number"||typeof L=="boolean"){if(R!==L)return U[w]=L,!0}else if(R.equals(L)===!1)return R.copy(L),!0}return!1}function _(T){const x=T.uniforms;let M=0;const U=16;for(let w=0,R=x.length;w<R;w++){const y=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,A=y.length;b<A;b++){const B=y[b],I=Array.isArray(B.value)?B.value:[B.value];for(let G=0,O=I.length;G<O;G++){const Y=I[G],z=v(Y),N=M%U,ee=N%z.boundary,ae=N+ee;M+=ee,ae!==0&&U-ae<z.storage&&(M+=U-ae),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=z.storage}}}const L=M%U;return L>0&&(M+=U-L),T.__size=M,T.__cache={},this}function v(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function g(T){const x=T.target;x.removeEventListener("dispose",g);const M=r.indexOf(x.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function d(){for(const T in s)i.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:h,update:c,dispose:d}}class D1{constructor(e={}){const{canvas:t=Mp(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,d=null;const T=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=is,this.toneMappingExposure=1;const M=this;let U=!1,L=0,w=0,R=null,y=-1,b=null;const A=new xt,B=new xt;let I=null;const G=new Je(0);let O=0,Y=t.width,z=t.height,N=1,ee=null,ae=null;const ge=new xt(0,0,Y,z),Ce=new xt(0,0,Y,z);let Be=!1;const j=new eh;let le=!1,Me=!1;const pe=new lt,he=new lt,Ae=new E,me=new xt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function K(){return R===null?N:1}let D=n;function oe(P,V){return t.getContext(P,V)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),D===null){const V="webgl2";if(D=oe(V,P),D===null)throw oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,re,ne,xe,_e,C,S,F,H,W,$,de,fe,ve,Se,q,ue,Te,Pe,be,Ie,Fe,Oe,k;function ye(){Q=new Bg(D),Q.init(),Fe=new b1(D,Q),re=new Lg(D,Q,e,Fe),ne=new x1(D,Q),re.reverseDepthBuffer&&m&&ne.buffers.depth.setReversed(!0),xe=new Gg(D),_e=new s1,C=new y1(D,Q,ne,_e,re,Fe,xe),S=new Ig(M),F=new Ng(M),H=new Yp(D),Oe=new Pg(D,H),W=new Og(D,H,xe,Oe),$=new Hg(D,W,H,xe),Pe=new zg(D,re,C),q=new Dg(_e),de=new i1(M,S,F,Q,re,Oe,q),fe=new R1(M,_e),ve=new r1,Se=new u1(Q),Te=new Ag(M,S,F,ne,$,p,h),ue=new _1(M,$,re),k=new L1(D,xe,re,ne),be=new Rg(D,Q,xe),Ie=new kg(D,Q,xe),xe.programs=de.programs,M.capabilities=re,M.extensions=Q,M.properties=_e,M.renderLists=ve,M.shadowMap=ue,M.state=ne,M.info=xe}ye();const J=new A1(M,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(P){P!==void 0&&(N=P,this.setSize(Y,z,!1))},this.getSize=function(P){return P.set(Y,z)},this.setSize=function(P,V,ie=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,z=V,t.width=Math.floor(P*N),t.height=Math.floor(V*N),ie===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(Y*N,z*N).floor()},this.setDrawingBufferSize=function(P,V,ie){Y=P,z=V,N=ie,t.width=Math.floor(P*ie),t.height=Math.floor(V*ie),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(ge)},this.setViewport=function(P,V,ie,se){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,V,ie,se),ne.viewport(A.copy(ge).multiplyScalar(N).round())},this.getScissor=function(P){return P.copy(Ce)},this.setScissor=function(P,V,ie,se){P.isVector4?Ce.set(P.x,P.y,P.z,P.w):Ce.set(P,V,ie,se),ne.scissor(B.copy(Ce).multiplyScalar(N).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(P){ne.setScissorTest(Be=P)},this.setOpaqueSort=function(P){ee=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(P=!0,V=!0,ie=!0){let se=0;if(P){let X=!1;if(R!==null){const Re=R.texture.format;X=Re===jc||Re===Kc||Re===Zc}if(X){const Re=R.texture.type,Ne=Re===Ii||Re===Ds||Re===fr||Re===wo||Re===Yc||Re===qc,ke=Te.getClearColor(),Ge=Te.getClearAlpha(),qe=ke.r,Ze=ke.g,ze=ke.b;Ne?(_[0]=qe,_[1]=Ze,_[2]=ze,_[3]=Ge,D.clearBufferuiv(D.COLOR,0,_)):(v[0]=qe,v[1]=Ze,v[2]=ze,v[3]=Ge,D.clearBufferiv(D.COLOR,0,v))}else se|=D.COLOR_BUFFER_BIT}V&&(se|=D.DEPTH_BUFFER_BIT),ie&&(se|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),ve.dispose(),Se.dispose(),_e.dispose(),S.dispose(),F.dispose(),$.dispose(),Oe.dispose(),k.dispose(),de.dispose(),J.dispose(),J.removeEventListener("sessionstart",Oo),J.removeEventListener("sessionend",ko),ri.stop()};function ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const P=xe.autoReset,V=ue.enabled,ie=ue.autoUpdate,se=ue.needsUpdate,X=ue.type;ye(),xe.autoReset=P,ue.enabled=V,ue.autoUpdate=ie,ue.needsUpdate=se,ue.type=X}function De(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Xe(P){const V=P.target;V.removeEventListener("dispose",Xe),ot(V)}function ot(P){Dt(P),_e.remove(P)}function Dt(P){const V=_e.get(P).programs;V!==void 0&&(V.forEach(function(ie){de.releaseProgram(ie)}),P.isShaderMaterial&&de.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,ie,se,X,Re){V===null&&(V=Ee);const Ne=X.isMesh&&X.matrixWorld.determinant()<0,ke=Rf(P,V,ie,se,X);ne.setMaterial(se,Ne);let Ge=ie.index,qe=1;if(se.wireframe===!0){if(Ge=W.getWireframeAttribute(ie),Ge===void 0)return;qe=2}const Ze=ie.drawRange,ze=ie.attributes.position;let at=Ze.start*qe,yt=(Ze.start+Ze.count)*qe;Re!==null&&(at=Math.max(at,Re.start*qe),yt=Math.min(yt,(Re.start+Re.count)*qe)),Ge!==null?(at=Math.max(at,0),yt=Math.min(yt,Ge.count)):ze!=null&&(at=Math.max(at,0),yt=Math.min(yt,ze.count));const bt=yt-at;if(bt<0||bt===1/0)return;Oe.setup(X,se,ke,ie,Ge);let cn,dt=be;if(Ge!==null&&(cn=H.get(Ge),dt=Ie,dt.setIndex(cn)),X.isMesh)se.wireframe===!0?(ne.setLineWidth(se.wireframeLinewidth*K()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(X.isLine){let We=se.linewidth;We===void 0&&(We=1),ne.setLineWidth(We*K()),X.isLineSegments?dt.setMode(D.LINES):X.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else X.isPoints?dt.setMode(D.POINTS):X.isSprite&&dt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const We=X._multiDrawStarts,_i=X._multiDrawCounts,ut=X._multiDrawCount,Wn=Ge?H.get(Ge).bytesPerElement:1,ks=_e.get(se).currentProgram.getUniforms();for(let vn=0;vn<ut;vn++)ks.setValue(D,"_gl_DrawID",vn),dt.render(We[vn]/Wn,_i[vn])}else if(X.isInstancedMesh)dt.renderInstances(at,bt,X.count);else if(ie.isInstancedBufferGeometry){const We=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,_i=Math.min(ie.instanceCount,We);dt.renderInstances(at,bt,_i)}else dt.render(at,bt)};function et(P,V,ie){P.transparent===!0&&P.side===Vt&&P.forceSinglePass===!1?(P.side=Jt,P.needsUpdate=!0,wr(P,V,ie),P.side=os,P.needsUpdate=!0,wr(P,V,ie),P.side=Vt):wr(P,V,ie)}this.compile=function(P,V,ie=null){ie===null&&(ie=P),d=Se.get(ie),d.init(V),x.push(d),ie.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),P!==ie&&P.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();const se=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Re=X.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const ke=Re[Ne];et(ke,ie,X),se.add(ke)}else et(Re,ie,X),se.add(Re)}),x.pop(),d=null,se},this.compileAsync=function(P,V,ie=null){const se=this.compile(P,V,ie);return new Promise(X=>{function Re(){if(se.forEach(function(Ne){_e.get(Ne).currentProgram.isReady()&&se.delete(Ne)}),se.size===0){X(P);return}setTimeout(Re,10)}Q.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let qt=null;function Rn(P){qt&&qt(P)}function Oo(){ri.stop()}function ko(){ri.start()}const ri=new qu;ri.setAnimationLoop(Rn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(P){qt=P,J.setAnimationLoop(P),P===null?ri.stop():ri.start()},J.addEventListener("sessionstart",Oo),J.addEventListener("sessionend",ko),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,V,R),d=Se.get(P,x.length),d.init(V),x.push(d),he.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(he),Me=this.localClippingEnabled,le=q.init(this.clippingPlanes,Me),g=ve.get(P,T.length),g.init(),T.push(g),J.enabled===!0&&J.isPresenting===!0){const Re=M.xr.getDepthSensingMesh();Re!==null&&el(Re,V,-1/0,M.sortObjects)}el(P,V,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(ee,ae),te=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,te&&Te.addToRenderList(g,P),this.info.render.frame++,le===!0&&q.beginShadows();const ie=d.state.shadowsArray;ue.render(ie,P,V),le===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=g.opaque,X=g.transmissive;if(d.setupLights(),V.isArrayCamera){const Re=V.cameras;if(X.length>0)for(let Ne=0,ke=Re.length;Ne<ke;Ne++){const Ge=Re[Ne];vh(se,X,P,Ge)}te&&Te.render(P);for(let Ne=0,ke=Re.length;Ne<ke;Ne++){const Ge=Re[Ne];_h(g,P,Ge,Ge.viewport)}}else X.length>0&&vh(se,X,P,V),te&&Te.render(P),_h(g,P,V);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(M,P,V),Oe.resetDefaultState(),y=-1,b=null,x.pop(),x.length>0?(d=x[x.length-1],le===!0&&q.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function el(P,V,ie,se){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||j.intersectsSprite(P)){se&&me.setFromMatrixPosition(P.matrixWorld).applyMatrix4(he);const Ne=$.update(P),ke=P.material;ke.visible&&g.push(P,Ne,ke,ie,me.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||j.intersectsObject(P))){const Ne=$.update(P),ke=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),me.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),me.copy(Ne.boundingSphere.center)),me.applyMatrix4(P.matrixWorld).applyMatrix4(he)),Array.isArray(ke)){const Ge=Ne.groups;for(let qe=0,Ze=Ge.length;qe<Ze;qe++){const ze=Ge[qe],at=ke[ze.materialIndex];at&&at.visible&&g.push(P,Ne,at,ie,me.z,ze)}}else ke.visible&&g.push(P,Ne,ke,ie,me.z,null)}}const Re=P.children;for(let Ne=0,ke=Re.length;Ne<ke;Ne++)el(Re[Ne],V,ie,se)}function _h(P,V,ie,se){const X=P.opaque,Re=P.transmissive,Ne=P.transparent;d.setupLightsView(ie),le===!0&&q.setGlobalState(M.clippingPlanes,ie),se&&ne.viewport(A.copy(se)),X.length>0&&Tr(X,V,ie),Re.length>0&&Tr(Re,V,ie),Ne.length>0&&Tr(Ne,V,ie),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function vh(P,V,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[se.id]===void 0&&(d.state.transmissionRenderTarget[se.id]=new Is(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?xr:Ii,minFilter:Rs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Re=d.state.transmissionRenderTarget[se.id],Ne=se.viewport||A;Re.setSize(Ne.z,Ne.w);const ke=M.getRenderTarget();M.setRenderTarget(Re),M.getClearColor(G),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),te&&Te.render(ie);const Ge=M.toneMapping;M.toneMapping=is;const qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),d.setupLightsView(se),le===!0&&q.setGlobalState(M.clippingPlanes,se),Tr(P,ie,se),C.updateMultisampleRenderTarget(Re),C.updateRenderTargetMipmap(Re),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ze=0,at=V.length;ze<at;ze++){const yt=V[ze],bt=yt.object,cn=yt.geometry,dt=yt.material,We=yt.group;if(dt.side===Vt&&bt.layers.test(se.layers)){const _i=dt.side;dt.side=Jt,dt.needsUpdate=!0,xh(bt,ie,se,cn,dt,We),dt.side=_i,dt.needsUpdate=!0,Ze=!0}}Ze===!0&&(C.updateMultisampleRenderTarget(Re),C.updateRenderTargetMipmap(Re))}M.setRenderTarget(ke),M.setClearColor(G,O),qe!==void 0&&(se.viewport=qe),M.toneMapping=Ge}function Tr(P,V,ie){const se=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Re=P.length;X<Re;X++){const Ne=P[X],ke=Ne.object,Ge=Ne.geometry,qe=se===null?Ne.material:se,Ze=Ne.group;ke.layers.test(ie.layers)&&xh(ke,V,ie,Ge,qe,Ze)}}function xh(P,V,ie,se,X,Re){P.onBeforeRender(M,V,ie,se,X,Re),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(M,V,ie,se,P,Re),X.transparent===!0&&X.side===Vt&&X.forceSinglePass===!1?(X.side=Jt,X.needsUpdate=!0,M.renderBufferDirect(ie,V,se,X,P,Re),X.side=os,X.needsUpdate=!0,M.renderBufferDirect(ie,V,se,X,P,Re),X.side=Vt):M.renderBufferDirect(ie,V,se,X,P,Re),P.onAfterRender(M,V,ie,se,X,Re)}function wr(P,V,ie){V.isScene!==!0&&(V=Ee);const se=_e.get(P),X=d.state.lights,Re=d.state.shadowsArray,Ne=X.state.version,ke=de.getParameters(P,X.state,Re,V,ie),Ge=de.getProgramCacheKey(ke);let qe=se.programs;se.environment=P.isMeshStandardMaterial?V.environment:null,se.fog=V.fog,se.envMap=(P.isMeshStandardMaterial?F:S).get(P.envMap||se.environment),se.envMapRotation=se.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,qe===void 0&&(P.addEventListener("dispose",Xe),qe=new Map,se.programs=qe);let Ze=qe.get(Ge);if(Ze!==void 0){if(se.currentProgram===Ze&&se.lightsStateVersion===Ne)return yh(P,ke),Ze}else ke.uniforms=de.getUniforms(P),P.onBeforeCompile(ke,M),Ze=de.acquireProgram(ke,Ge),qe.set(Ge,Ze),se.uniforms=ke.uniforms;const ze=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ze.clippingPlanes=q.uniform),yh(P,ke),se.needsLights=Df(P),se.lightsStateVersion=Ne,se.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),se.currentProgram=Ze,se.uniformsList=null,Ze}function Mh(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=ya.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function yh(P,V){const ie=_e.get(P);ie.outputColorSpace=V.outputColorSpace,ie.batching=V.batching,ie.batchingColor=V.batchingColor,ie.instancing=V.instancing,ie.instancingColor=V.instancingColor,ie.instancingMorph=V.instancingMorph,ie.skinning=V.skinning,ie.morphTargets=V.morphTargets,ie.morphNormals=V.morphNormals,ie.morphColors=V.morphColors,ie.morphTargetsCount=V.morphTargetsCount,ie.numClippingPlanes=V.numClippingPlanes,ie.numIntersection=V.numClipIntersection,ie.vertexAlphas=V.vertexAlphas,ie.vertexTangents=V.vertexTangents,ie.toneMapping=V.toneMapping}function Rf(P,V,ie,se,X){V.isScene!==!0&&(V=Ee),C.resetTextureUnits();const Re=V.fog,Ne=se.isMeshStandardMaterial?V.environment:null,ke=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Uo,Ge=(se.isMeshStandardMaterial?F:S).get(se.envMap||Ne),qe=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ze=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ze=!!ie.morphAttributes.position,at=!!ie.morphAttributes.normal,yt=!!ie.morphAttributes.color;let bt=is;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(bt=M.toneMapping);const cn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,dt=cn!==void 0?cn.length:0,We=_e.get(se),_i=d.state.lights;if(le===!0&&(Me===!0||P!==b)){const Ln=P===b&&se.id===y;q.setState(se,P,Ln)}let ut=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_i.state.version||We.outputColorSpace!==ke||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==Ge||se.fog===!0&&We.fog!==Re||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==q.numPlanes||We.numIntersection!==q.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ze||We.morphTargets!==ze||We.morphNormals!==at||We.morphColors!==yt||We.toneMapping!==bt||We.morphTargetsCount!==dt)&&(ut=!0):(ut=!0,We.__version=se.version);let Wn=We.currentProgram;ut===!0&&(Wn=wr(se,V,X));let ks=!1,vn=!1,Go=!1;const St=Wn.getUniforms(),ai=We.uniforms;if(ne.useProgram(Wn.program)&&(ks=!0,vn=!0,Go=!0),se.id!==y&&(y=se.id,vn=!0),ks||b!==P){ne.buffers.depth.getReversed()?(pe.copy(P.projectionMatrix),bp(pe),Sp(pe),St.setValue(D,"projectionMatrix",pe)):St.setValue(D,"projectionMatrix",P.projectionMatrix),St.setValue(D,"viewMatrix",P.matrixWorldInverse);const ki=St.map.cameraPosition;ki!==void 0&&ki.setValue(D,Ae.setFromMatrixPosition(P.matrixWorld)),re.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&St.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,vn=!0,Go=!0)}if(X.isSkinnedMesh){St.setOptional(D,X,"bindMatrix"),St.setOptional(D,X,"bindMatrixInverse");const Ln=X.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),St.setValue(D,"boneTexture",Ln.boneTexture,C))}X.isBatchedMesh&&(St.setOptional(D,X,"batchingTexture"),St.setValue(D,"batchingTexture",X._matricesTexture,C),St.setOptional(D,X,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",X._indirectTexture,C),St.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",X._colorsTexture,C));const zo=ie.morphAttributes;if((zo.position!==void 0||zo.normal!==void 0||zo.color!==void 0)&&Pe.update(X,ie,Wn),(vn||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,St.setValue(D,"receiveShadow",X.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(ai.envMap.value=Ge,ai.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&V.environment!==null&&(ai.envMapIntensity.value=V.environmentIntensity),vn&&(St.setValue(D,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&Lf(ai,Go),Re&&se.fog===!0&&fe.refreshFogUniforms(ai,Re),fe.refreshMaterialUniforms(ai,se,N,z,d.state.transmissionRenderTarget[P.id]),ya.upload(D,Mh(We),ai,C)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ya.upload(D,Mh(We),ai,C),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&St.setValue(D,"center",X.center),St.setValue(D,"modelViewMatrix",X.modelViewMatrix),St.setValue(D,"normalMatrix",X.normalMatrix),St.setValue(D,"modelMatrix",X.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Ln=se.uniformsGroups;for(let ki=0,Gi=Ln.length;ki<Gi;ki++){const bh=Ln[ki];k.update(bh,Wn),k.bind(bh,Wn)}}return Wn}function Lf(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function Df(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,V,ie){_e.get(P.texture).__webglTexture=V,_e.get(P.depthTexture).__webglTexture=ie;const se=_e.get(P);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const ie=_e.get(P);ie.__webglFramebuffer=V,ie.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,ie=0){R=P,L=V,w=ie;let se=!0,X=null,Re=!1,Ne=!1;if(P){const Ge=_e.get(P);if(Ge.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(D.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(Ge.__hasExternalTextures)C.rebindTextures(P,_e.get(P.texture).__webglTexture,_e.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ze=P.depthTexture;if(Ge.__boundDepthTexture!==ze){if(ze!==null&&_e.has(ze)&&(P.width!==ze.image.width||P.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const qe=P.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Ze=_e.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?X=Ze[V][ie]:X=Ze[V],Re=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?X=_e.get(P).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[ie]:X=Ze,A.copy(P.viewport),B.copy(P.scissor),I=P.scissorTest}else A.copy(ge).multiplyScalar(N).floor(),B.copy(Ce).multiplyScalar(N).floor(),I=Be;if(ne.bindFramebuffer(D.FRAMEBUFFER,X)&&se&&ne.drawBuffers(P,X),ne.viewport(A),ne.scissor(B),ne.setScissorTest(I),Re){const Ge=_e.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,ie)}else if(Ne){const Ge=_e.get(P.texture),qe=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,ie||0,qe)}y=-1},this.readRenderTargetPixels=function(P,V,ie,se,X,Re,Ne){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=_e.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){ne.bindFramebuffer(D.FRAMEBUFFER,ke);try{const Ge=P.texture,qe=Ge.format,Ze=Ge.type;if(!re.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-se&&ie>=0&&ie<=P.height-X&&D.readPixels(V,ie,se,X,Fe.convert(qe),Fe.convert(Ze),Re)}finally{const Ge=R!==null?_e.get(R).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,V,ie,se,X,Re,Ne){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=_e.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){const Ge=P.texture,qe=Ge.format,Ze=Ge.type;if(!re.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-se&&ie>=0&&ie<=P.height-X){ne.bindFramebuffer(D.FRAMEBUFFER,ke);const ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,Re.byteLength,D.STREAM_READ),D.readPixels(V,ie,se,X,Fe.convert(qe),Fe.convert(Ze),0);const at=R!==null?_e.get(R).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,at);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await yp(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Re),D.deleteBuffer(ze),D.deleteSync(yt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,ie=0){P.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const se=Math.pow(2,-ie),X=Math.floor(P.image.width*se),Re=Math.floor(P.image.height*se),Ne=V!==null?V.x:0,ke=V!==null?V.y:0;C.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,ie,0,0,Ne,ke,X,Re),ne.unbindTexture()},this.copyTextureToTexture=function(P,V,ie=null,se=null,X=0){P.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,P=arguments[1],V=arguments[2],X=arguments[3]||0,ie=null);let Re,Ne,ke,Ge,qe,Ze,ze,at,yt;const bt=P.isCompressedTexture?P.mipmaps[X]:P.image;ie!==null?(Re=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,ke=ie.isBox3?ie.max.z-ie.min.z:1,Ge=ie.min.x,qe=ie.min.y,Ze=ie.isBox3?ie.min.z:0):(Re=bt.width,Ne=bt.height,ke=bt.depth||1,Ge=0,qe=0,Ze=0),se!==null?(ze=se.x,at=se.y,yt=se.z):(ze=0,at=0,yt=0);const cn=Fe.convert(V.format),dt=Fe.convert(V.type);let We;V.isData3DTexture?(C.setTexture3D(V,0),We=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),We=D.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),We=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const _i=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Wn=D.getParameter(D.UNPACK_SKIP_PIXELS),ks=D.getParameter(D.UNPACK_SKIP_ROWS),vn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze);const Go=P.isDataArrayTexture||P.isData3DTexture,St=V.isDataArrayTexture||V.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const ai=_e.get(P),zo=_e.get(V),Ln=_e.get(ai.__renderTarget),ki=_e.get(zo.__renderTarget);ne.bindFramebuffer(D.READ_FRAMEBUFFER,Ln.__webglFramebuffer),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Gi=0;Gi<ke;Gi++)Go&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(P).__webglTexture,X,Ze+Gi),P.isDepthTexture?(St&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(V).__webglTexture,X,yt+Gi),D.blitFramebuffer(Ge,qe,Re,Ne,ze,at,Re,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST)):St?D.copyTexSubImage3D(We,X,ze,at,yt+Gi,Ge,qe,Re,Ne):D.copyTexSubImage2D(We,X,ze,at,yt+Gi,Ge,qe,Re,Ne);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else St?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(We,X,ze,at,yt,Re,Ne,ke,cn,dt,bt.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(We,X,ze,at,yt,Re,Ne,ke,cn,bt.data):D.texSubImage3D(We,X,ze,at,yt,Re,Ne,ke,cn,dt,bt):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,ze,at,Re,Ne,cn,dt,bt.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,ze,at,bt.width,bt.height,cn,bt.data):D.texSubImage2D(D.TEXTURE_2D,X,ze,at,Re,Ne,cn,dt,bt);D.pixelStorei(D.UNPACK_ROW_LENGTH,_i),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ks),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vn),X===0&&V.generateMipmaps&&D.generateMipmap(We),ne.unbindTexture()},this.copyTextureToTexture3D=function(P,V,ie=null,se=null,X=0){return P.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,P=arguments[2],V=arguments[3],X=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,V,ie,se,X)},this.initRenderTarget=function(P){_e.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),ne.unbindTexture()},this.resetState=function(){L=0,w=0,R=null,ne.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class tf extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rt,this.environmentIntensity=1,this.environmentRotation=new Rt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class I1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new E;class La{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),o=_t(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new ni(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new La(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nf extends _s{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let eo;const $o=new E,to=new E,no=new E,io=new we,Yo=new we,sf=new lt,Yr=new E,qo=new E,qr=new E,vd=new we,Rl=new we,xd=new we;class F1 extends Ft{constructor(e=new nf){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new Hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new I1(t,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new La(n,3,0,!1)),eo.setAttribute("uv",new La(n,2,3,!1))}this.geometry=eo,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Zr(Yr.set(-.5,-.5,0),no,r,to,s,o),Zr(qo.set(.5,-.5,0),no,r,to,s,o),Zr(qr.set(.5,.5,0),no,r,to,s,o),vd.set(0,0),Rl.set(1,0),xd.set(1,1);let a=e.ray.intersectTriangle(Yr,qo,qr,!1,$o);if(a===null&&(Zr(qo.set(-.5,.5,0),no,r,to,s,o),Rl.set(0,1),a=e.ray.intersectTriangle(Yr,qr,qo,!1,$o),a===null))return;const h=e.ray.origin.distanceTo($o);h<e.near||h>e.far||t.push({distance:h,point:$o.clone(),uv:Bn.getInterpolation($o,Yr,qo,qr,vd,Rl,xd,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zr(i,e,t,n,s,o){io.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Yo.x=o*io.x-s*io.y,Yo.y=s*io.x+o*io.y):Yo.copy(io),i.copy(e),i.x+=Yo.x,i.y+=Yo.y,i.applyMatrix4(sf)}class nh extends _s{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Da=new E,Ia=new E,Md=new lt,Zo=new Jc,Kr=new Va,Ll=new E,yd=new E;class U1 extends Ft{constructor(e=new Hn,t=new nh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Da.fromBufferAttribute(t,s-1),Ia.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Da.distanceTo(Ia);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=o,e.ray.intersectsSphere(Kr)===!1)return;Md.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(Md);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=this.isLineSegments?2:1,l=n.index,m=n.attributes.position;if(l!==null){const p=Math.max(0,r.start),_=Math.min(l.count,r.start+r.count);for(let v=p,g=_-1;v<g;v+=c){const d=l.getX(v),T=l.getX(v+1),x=jr(this,e,Zo,h,d,T);x&&t.push(x)}if(this.isLineLoop){const v=l.getX(_-1),g=l.getX(p),d=jr(this,e,Zo,h,v,g);d&&t.push(d)}}else{const p=Math.max(0,r.start),_=Math.min(m.count,r.start+r.count);for(let v=p,g=_-1;v<g;v+=c){const d=jr(this,e,Zo,h,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=jr(this,e,Zo,h,_-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function jr(i,e,t,n,s,o){const r=i.geometry.attributes.position;if(Da.fromBufferAttribute(r,s),Ia.fromBufferAttribute(r,o),t.distanceSqToSegment(Da,Ia,Ll,yd)>n)return;Ll.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ll);if(!(h<e.near||h>e.far))return{distance:h,point:yd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bd=new E,Sd=new E;class N1 extends U1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)bd.fromBufferAttribute(t,s),Sd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bd.distanceTo(Sd);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fa extends ln{constructor(e,t,n,s,o,r,a,h,c){super(e,t,n,s,o,r,a,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const o=n.length;let r;t?r=t:r=e*n[o-1];let a=0,h=o-1,c;for(;a<=h;)if(s=Math.floor(a+(h-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)h=s-1;else{h=s;break}if(s=h,n[s]===r)return s/(o-1);const l=n[s],m=n[s+1]-l,p=(r-l)/m;return(s+p)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),h=t||(r.isVector2?new we:new E);return h.copy(a).sub(r).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,s=[],o=[],r=[],a=new E,h=new lt;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new E)}o[0]=new E,r[0]=new E;let c=Number.MAX_VALUE;const l=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);l<=c&&(c=l,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Xt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(h.makeRotationAxis(a,_))}r[p].crossVectors(s[p],o[p])}if(t===!0){let p=Math.acos(Xt(o[0].dot(o[e]),-1,1));p/=e,s[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let _=1;_<=e;_++)o[_].applyMatrix4(h.makeRotationAxis(s[_],p*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ih extends gi{constructor(e=0,t=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=h}getPoint(e,t=new we){const n=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+e*o;let h=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=h-this.aX,p=c-this.aY;h=m*l-p*f+this.aX,c=m*f+p*l+this.aY}return n.set(h,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class B1 extends ih{constructor(e,t,n,s,o,r){super(e,t,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function sh(){let i=0,e=0,t=0,n=0;function s(o,r,a,h){i=o,e=a,t=-3*o+3*r-2*a-h,n=2*o-2*r+a+h}return{initCatmullRom:function(o,r,a,h,c){s(r,a,c*(a-o),c*(h-r))},initNonuniformCatmullRom:function(o,r,a,h,c,l,f){let m=(r-o)/c-(a-o)/(c+l)+(a-r)/l,p=(a-r)/l-(h-r)/(l+f)+(h-a)/f;m*=l,p*=l,s(r,a,m,p)},calc:function(o){const r=o*o,a=r*o;return i+e*o+t*r+n*a}}}const Jr=new E,Dl=new sh,Il=new sh,Fl=new sh;class O1 extends gi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){const n=t,s=this.points,o=s.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),h=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:h===0&&a===o-1&&(a=o-2,h=1);let c,l;this.closed||a>0?c=s[(a-1)%o]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);const f=s[a%o],m=s[(a+1)%o];if(this.closed||a+2<o?l=s[(a+2)%o]:(Jr.subVectors(s[o-1],s[o-2]).add(s[o-1]),l=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(m),p),g=Math.pow(m.distanceToSquared(l),p);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Dl.initNonuniformCatmullRom(c.x,f.x,m.x,l.x,_,v,g),Il.initNonuniformCatmullRom(c.y,f.y,m.y,l.y,_,v,g),Fl.initNonuniformCatmullRom(c.z,f.z,m.z,l.z,_,v,g)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,f.x,m.x,l.x,this.tension),Il.initCatmullRom(c.y,f.y,m.y,l.y,this.tension),Fl.initCatmullRom(c.z,f.z,m.z,l.z,this.tension));return n.set(Dl.calc(h),Il.calc(h),Fl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Td(i,e,t,n,s){const o=(n-e)*.5,r=(s-t)*.5,a=i*i,h=i*a;return(2*t-2*n+o+r)*h+(-3*t+3*n-2*o-r)*a+o*i+t}function k1(i,e){const t=1-i;return t*t*e}function G1(i,e){return 2*(1-i)*i*e}function z1(i,e){return i*i*e}function ar(i,e,t,n){return k1(i,e)+G1(i,t)+z1(i,n)}function H1(i,e){const t=1-i;return t*t*t*e}function W1(i,e){const t=1-i;return 3*t*t*i*e}function V1(i,e){return 3*(1-i)*i*i*e}function X1(i,e){return i*i*i*e}function lr(i,e,t,n,s){return H1(i,e)+W1(i,t)+V1(i,n)+X1(i,s)}class of extends gi{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){const n=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(lr(e,s.x,o.x,r.x,a.x),lr(e,s.y,o.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $1 extends gi{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){const n=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(lr(e,s.x,o.x,r.x,a.x),lr(e,s.y,o.y,r.y,a.y),lr(e,s.z,o.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rf extends gi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y1 extends gi{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class af extends gi{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,s=this.v0,o=this.v1,r=this.v2;return n.set(ar(e,s.x,o.x,r.x),ar(e,s.y,o.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q1 extends gi{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,s=this.v0,o=this.v1,r=this.v2;return n.set(ar(e,s.x,o.x,r.x),ar(e,s.y,o.y,r.y),ar(e,s.z,o.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lf extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,s=this.points,o=(s.length-1)*e,r=Math.floor(o),a=o-r,h=s[r===0?r:r-1],c=s[r],l=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(Td(a,h.x,c.x,l.x,f.x),Td(a,h.y,c.y,l.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var Fc=Object.freeze({__proto__:null,ArcCurve:B1,CatmullRomCurve3:O1,CubicBezierCurve:of,CubicBezierCurve3:$1,EllipseCurve:ih,LineCurve:rf,LineCurve3:Y1,QuadraticBezierCurve:af,QuadraticBezierCurve3:q1,SplineCurve:lf});class Z1 extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],h=a.getLength(),c=h===0?0:1-r/h;return a.getPointAt(c,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,h=r.getPoints(a);for(let c=0;c<h.length;c++){const l=h[c];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Fc[s.type]().fromJSON(s))}return this}}class sn extends Z1{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new rf(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const o=new af(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,o,r){const a=new of(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new lf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,r){const a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+a,t+h,n,s,o,r),this}absarc(e,t,n,s,o,r){return this.absellipse(e,t,n,n,s,o,r),this}ellipse(e,t,n,s,o,r,a,h){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,s,o,r,a,h),this}absellipse(e,t,n,s,o,r,a,h){const c=new ih(e,t,n,s,o,r,a,h);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ke extends Hn{constructor(e=1,t=1,n=1,s=32,o=1,r=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:h};const c=this;s=Math.floor(s),o=Math.floor(o);const l=[],f=[],m=[],p=[];let _=0;const v=[],g=n/2;let d=0;T(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(l),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(m,3)),this.setAttribute("uv",new Qt(p,2));function T(){const M=new E,U=new E;let L=0;const w=(t-e)/n;for(let R=0;R<=o;R++){const y=[],b=R/o,A=b*(t-e)+e;for(let B=0;B<=s;B++){const I=B/s,G=I*h+a,O=Math.sin(G),Y=Math.cos(G);U.x=A*O,U.y=-b*n+g,U.z=A*Y,f.push(U.x,U.y,U.z),M.set(O,w,Y).normalize(),m.push(M.x,M.y,M.z),p.push(I,1-b),y.push(_++)}v.push(y)}for(let R=0;R<s;R++)for(let y=0;y<o;y++){const b=v[y][R],A=v[y+1][R],B=v[y+1][R+1],I=v[y][R+1];(e>0||y!==0)&&(l.push(b,A,I),L+=3),(t>0||y!==o-1)&&(l.push(A,B,I),L+=3)}c.addGroup(d,L,0),d+=L}function x(M){const U=_,L=new we,w=new E;let R=0;const y=M===!0?e:t,b=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,g*b,0),m.push(0,b,0),p.push(.5,.5),_++;const A=_;for(let B=0;B<=s;B++){const G=B/s*h+a,O=Math.cos(G),Y=Math.sin(G);w.x=y*Y,w.y=g*b,w.z=y*O,f.push(w.x,w.y,w.z),m.push(0,b,0),L.x=O*.5+.5,L.y=Y*.5*b+.5,p.push(L.x,L.y),_++}for(let B=0;B<s;B++){const I=U+B,G=A+B;M===!0?l.push(G,G+1,I):l.push(G+1,G,I),R+=3}c.addGroup(d,R,M===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mt extends sn{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new sn().fromJSON(s))}return this}}const K1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let o=cf(i,0,s,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,h,c,l,f,m,p;if(n&&(o=tv(i,e,o,t)),i.length>80*t){a=c=i[0],h=l=i[1];for(let _=t;_<s;_+=t)f=i[_],m=i[_+1],f<a&&(a=f),m<h&&(h=m),f>c&&(c=f),m>l&&(l=m);p=Math.max(c-a,l-h),p=p!==0?32767/p:0}return pr(o,r,t,a,h,p,0),r}};function cf(i,e,t,n,s){let o,r;if(s===uv(i,e,t,n)>0)for(o=e;o<t;o+=n)r=wd(o,i[o],i[o+1],r);else for(o=t-n;o>=e;o-=n)r=wd(o,i[o],i[o+1],r);return r&&$a(r,r.next)&&(gr(r),r=r.next),r}function Us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($a(t,t.next)||Lt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(i,e,t,n,s,o,r){if(!i)return;!r&&o&&rv(i,n,s,o);let a=i,h,c;for(;i.prev!==i.next;){if(h=i.prev,c=i.next,o?J1(i,n,s,o):j1(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),gr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Q1(Us(i),e,t),pr(i,e,t,n,s,o,2)):r===2&&ev(i,e,t,n,s,o):pr(Us(i),e,t,n,s,o,1);break}}}function j1(i){const e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;const s=e.x,o=t.x,r=n.x,a=e.y,h=t.y,c=n.y,l=s<o?s<r?s:r:o<r?o:r,f=a<h?a<c?a:c:h<c?h:c,m=s>o?s>r?s:r:o>r?o:r,p=a>h?a>c?a:c:h>c?h:c;let _=n.next;for(;_!==e;){if(_.x>=l&&_.x<=m&&_.y>=f&&_.y<=p&&fo(s,a,o,h,r,c,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function J1(i,e,t,n){const s=i.prev,o=i,r=i.next;if(Lt(s,o,r)>=0)return!1;const a=s.x,h=o.x,c=r.x,l=s.y,f=o.y,m=r.y,p=a<h?a<c?a:c:h<c?h:c,_=l<f?l<m?l:m:f<m?f:m,v=a>h?a>c?a:c:h>c?h:c,g=l>f?l>m?l:m:f>m?f:m,d=Uc(p,_,e,t,n),T=Uc(v,g,e,t,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=d&&M&&M.z<=T;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=g&&x!==s&&x!==r&&fo(a,l,h,f,c,m,x.x,x.y)&&Lt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==r&&fo(a,l,h,f,c,m,M.x,M.y)&&Lt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=g&&x!==s&&x!==r&&fo(a,l,h,f,c,m,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=T;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==r&&fo(a,l,h,f,c,m,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Q1(i,e,t){let n=i;do{const s=n.prev,o=n.next.next;!$a(s,o)&&hf(s,n,n.next,o)&&mr(s,o)&&mr(o,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),gr(n),gr(n.next),n=i=o),n=n.next}while(n!==i);return Us(n)}function ev(i,e,t,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&cv(r,a)){let h=df(r,a);r=Us(r,r.next),h=Us(h,h.next),pr(r,e,t,n,s,o,0),pr(h,e,t,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function tv(i,e,t,n){const s=[];let o,r,a,h,c;for(o=0,r=e.length;o<r;o++)a=e[o]*n,h=o<r-1?e[o+1]*n:i.length,c=cf(i,a,h,n,!1),c===c.next&&(c.steiner=!0),s.push(lv(c));for(s.sort(nv),o=0;o<s.length;o++)t=iv(s[o],t);return t}function nv(i,e){return i.x-e.x}function iv(i,e){const t=sv(i,e);if(!t)return e;const n=df(t,i);return Us(n,n.next),Us(t,t.next)}function sv(i,e){let t=e,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const m=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=o&&m>n&&(n=m,s=t.x<t.next.x?t:t.next,m===o))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,h=s.x,c=s.y;let l=1/0,f;t=s;do o>=t.x&&t.x>=h&&o!==t.x&&fo(r<c?o:n,r,h,c,r<c?n:o,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(o-t.x),mr(t,i)&&(f<l||f===l&&(t.x>s.x||t.x===s.x&&ov(s,t)))&&(s=t,l=f)),t=t.next;while(t!==a);return s}function ov(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function rv(i,e,t,n){let s=i;do s.z===0&&(s.z=Uc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,av(s)}function av(i){let e,t,n,s,o,r,a,h,c=1;do{for(t=i,i=null,o=null,r=0;t;){for(r++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(h=c;a>0||h>0&&n;)a!==0&&(h===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,h--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;t=n}o.nextZ=null,c*=2}while(r>1);return i}function Uc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function fo(i,e,t,n,s,o,r,a){return(s-r)*(e-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(s-r)*(n-a)}function cv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hv(i,e)&&(mr(i,e)&&mr(e,i)&&dv(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||$a(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $a(i,e){return i.x===e.x&&i.y===e.y}function hf(i,e,t,n){const s=ea(Lt(i,e,t)),o=ea(Lt(i,e,n)),r=ea(Lt(t,n,i)),a=ea(Lt(t,n,e));return!!(s!==o&&r!==a||s===0&&Qr(i,t,e)||o===0&&Qr(i,n,e)||r===0&&Qr(t,i,n)||a===0&&Qr(t,e,n))}function Qr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ea(i){return i>0?1:i<0?-1:0}function hv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function dv(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function df(i,e){const t=new Nc(i.i,i.x,i.y),n=new Nc(e.i,e.x,e.y),s=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function wd(i,e,t,n){const s=new Nc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uv(i,e,t,n){let s=0;for(let o=e,r=t-n;o<t;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class cr{static area(e){const t=e.length;let n=0;for(let s=t-1,o=0;o<t;s=o++)n+=e[s].x*e[o].y-e[o].x*e[s].y;return n*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],o=[];Ed(e),Cd(n,e);let r=e.length;t.forEach(Ed);for(let h=0;h<t.length;h++)s.push(r),r+=t[h].length,Cd(n,t[h]);const a=K1.triangulate(n,s);for(let h=0;h<a.length;h+=3)o.push(a.slice(h,h+3));return o}}function Ed(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ft extends Hn{constructor(e=new mt([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],o=[];for(let a=0,h=e.length;a<h;a++){const c=e[a];r(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(o,2)),this.computeVertexNormals();function r(a){const h=[],c=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:fv;let x,M=!1,U,L,w,R;d&&(x=d.getSpacedPoints(l),M=!0,m=!1,U=d.computeFrenetFrames(l,!1),L=new E,w=new E,R=new E),m||(g=0,p=0,_=0,v=0);const y=a.extractPoints(c);let b=y.shape;const A=y.holes;if(!cr.isClockWise(b)){b=b.reverse();for(let te=0,K=A.length;te<K;te++){const D=A[te];cr.isClockWise(D)&&(A[te]=D.reverse())}}const I=cr.triangulateShape(b,A),G=b;for(let te=0,K=A.length;te<K;te++){const D=A[te];b=b.concat(D)}function O(te,K,D){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(K,D)}const Y=b.length,z=I.length;function N(te,K,D){let oe,Q,re;const ne=te.x-K.x,xe=te.y-K.y,_e=D.x-te.x,C=D.y-te.y,S=ne*ne+xe*xe,F=ne*C-xe*_e;if(Math.abs(F)>Number.EPSILON){const H=Math.sqrt(S),W=Math.sqrt(_e*_e+C*C),$=K.x-xe/H,de=K.y+ne/H,fe=D.x-C/W,ve=D.y+_e/W,Se=((fe-$)*C-(ve-de)*_e)/(ne*C-xe*_e);oe=$+ne*Se-te.x,Q=de+xe*Se-te.y;const q=oe*oe+Q*Q;if(q<=2)return new we(oe,Q);re=Math.sqrt(q/2)}else{let H=!1;ne>Number.EPSILON?_e>Number.EPSILON&&(H=!0):ne<-Number.EPSILON?_e<-Number.EPSILON&&(H=!0):Math.sign(xe)===Math.sign(C)&&(H=!0),H?(oe=-xe,Q=ne,re=Math.sqrt(S)):(oe=ne,Q=xe,re=Math.sqrt(S/2))}return new we(oe/re,Q/re)}const ee=[];for(let te=0,K=G.length,D=K-1,oe=te+1;te<K;te++,D++,oe++)D===K&&(D=0),oe===K&&(oe=0),ee[te]=N(G[te],G[D],G[oe]);const ae=[];let ge,Ce=ee.concat();for(let te=0,K=A.length;te<K;te++){const D=A[te];ge=[];for(let oe=0,Q=D.length,re=Q-1,ne=oe+1;oe<Q;oe++,re++,ne++)re===Q&&(re=0),ne===Q&&(ne=0),ge[oe]=N(D[oe],D[re],D[ne]);ae.push(ge),Ce=Ce.concat(ge)}for(let te=0;te<g;te++){const K=te/g,D=p*Math.cos(K*Math.PI/2),oe=_*Math.sin(K*Math.PI/2)+v;for(let Q=0,re=G.length;Q<re;Q++){const ne=O(G[Q],ee[Q],oe);pe(ne.x,ne.y,-D)}for(let Q=0,re=A.length;Q<re;Q++){const ne=A[Q];ge=ae[Q];for(let xe=0,_e=ne.length;xe<_e;xe++){const C=O(ne[xe],ge[xe],oe);pe(C.x,C.y,-D)}}}const Be=_+v;for(let te=0;te<Y;te++){const K=m?O(b[te],Ce[te],Be):b[te];M?(w.copy(U.normals[0]).multiplyScalar(K.x),L.copy(U.binormals[0]).multiplyScalar(K.y),R.copy(x[0]).add(w).add(L),pe(R.x,R.y,R.z)):pe(K.x,K.y,0)}for(let te=1;te<=l;te++)for(let K=0;K<Y;K++){const D=m?O(b[K],Ce[K],Be):b[K];M?(w.copy(U.normals[te]).multiplyScalar(D.x),L.copy(U.binormals[te]).multiplyScalar(D.y),R.copy(x[te]).add(w).add(L),pe(R.x,R.y,R.z)):pe(D.x,D.y,f/l*te)}for(let te=g-1;te>=0;te--){const K=te/g,D=p*Math.cos(K*Math.PI/2),oe=_*Math.sin(K*Math.PI/2)+v;for(let Q=0,re=G.length;Q<re;Q++){const ne=O(G[Q],ee[Q],oe);pe(ne.x,ne.y,f+D)}for(let Q=0,re=A.length;Q<re;Q++){const ne=A[Q];ge=ae[Q];for(let xe=0,_e=ne.length;xe<_e;xe++){const C=O(ne[xe],ge[xe],oe);M?pe(C.x,C.y+x[l-1].y,x[l-1].x+D):pe(C.x,C.y,f+D)}}}j(),le();function j(){const te=s.length/3;if(m){let K=0,D=Y*K;for(let oe=0;oe<z;oe++){const Q=I[oe];he(Q[2]+D,Q[1]+D,Q[0]+D)}K=l+g*2,D=Y*K;for(let oe=0;oe<z;oe++){const Q=I[oe];he(Q[0]+D,Q[1]+D,Q[2]+D)}}else{for(let K=0;K<z;K++){const D=I[K];he(D[2],D[1],D[0])}for(let K=0;K<z;K++){const D=I[K];he(D[0]+Y*l,D[1]+Y*l,D[2]+Y*l)}}n.addGroup(te,s.length/3-te,0)}function le(){const te=s.length/3;let K=0;Me(G,K),K+=G.length;for(let D=0,oe=A.length;D<oe;D++){const Q=A[D];Me(Q,K),K+=Q.length}n.addGroup(te,s.length/3-te,1)}function Me(te,K){let D=te.length;for(;--D>=0;){const oe=D;let Q=D-1;Q<0&&(Q=te.length-1);for(let re=0,ne=l+g*2;re<ne;re++){const xe=Y*re,_e=Y*(re+1),C=K+oe+xe,S=K+Q+xe,F=K+Q+_e,H=K+oe+_e;Ae(C,S,F,H)}}}function pe(te,K,D){h.push(te),h.push(K),h.push(D)}function he(te,K,D){me(te),me(K),me(D);const oe=s.length/3,Q=T.generateTopUV(n,s,oe-3,oe-2,oe-1);Ee(Q[0]),Ee(Q[1]),Ee(Q[2])}function Ae(te,K,D,oe){me(te),me(K),me(oe),me(K),me(D),me(oe);const Q=s.length/3,re=T.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Ee(re[0]),Ee(re[1]),Ee(re[3]),Ee(re[1]),Ee(re[2]),Ee(re[3])}function me(te){s.push(h[te*3+0]),s.push(h[te*3+1]),s.push(h[te*3+2])}function Ee(te){o.push(te.x),o.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pv(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fc[s.type]().fromJSON(s)),new ft(n,e.options)}}const fv={generateTopUV:function(i,e,t,n,s){const o=e[t*3],r=e[t*3+1],a=e[n*3],h=e[n*3+1],c=e[s*3],l=e[s*3+1];return[new we(o,r),new we(a,h),new we(c,l)]},generateSideWallUV:function(i,e,t,n,s,o){const r=e[t*3],a=e[t*3+1],h=e[t*3+2],c=e[n*3],l=e[n*3+1],f=e[n*3+2],m=e[s*3],p=e[s*3+1],_=e[s*3+2],v=e[o*3],g=e[o*3+1],d=e[o*3+2];return Math.abs(a-l)<Math.abs(r-c)?[new we(r,1-h),new we(c,1-f),new we(m,1-_),new we(v,1-d)]:[new we(a,1-h),new we(l,1-f),new we(p,1-_),new we(g,1-d)]}};function pv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mv extends _s{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class it extends _s{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ya extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gv extends Ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ul=new lt,Ad=new E,Pd=new E;class oh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ad),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _v extends oh{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vv extends Ya{constructor(e,t,n=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new _v}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rd=new lt,Ko=new E,Nl=new E;class xv extends oh{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ko),Nl.copy(n.position),Nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nl),n.updateMatrixWorld(),s.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd)}}class uf extends Ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mv extends oh{constructor(){super(new Zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ta extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Mv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ld{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yv extends N1{constructor(e=10,t=10,n=4473924,s=8947848){n=new Je(n),s=new Je(s);const o=t/2,r=e/t,a=e/2,h=[],c=[];for(let m=0,p=0,_=-a;m<=t;m++,_+=r){h.push(-a,0,_,a,0,_),h.push(_,0,-a,_,0,a);const v=m===o?n:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const l=new Hn;l.setAttribute("position",new Qt(h,3)),l.setAttribute("color",new Qt(c,3));const f=new nh({vertexColors:!0,toneMapped:!1});super(l,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class bv extends Os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);const Dd={type:"change"},rh={type:"start"},ff={type:"end"},na=new Jc,Id=new Ki,Sv=Math.cos(70*xp.DEG2RAD),Ot=new E,hn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class Tv extends bv{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vo.ROTATE,MIDDLE:vo.DOLLY,RIGHT:vo.PAN},this.touches={ONE:ho.ROTATE,TWO:ho.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new Fs,this._lastTargetPosition=new E,this._quat=new Fs().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ld,this._sphericalDelta=new Ld,this._scale=1,this._panOffset=new E,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new E,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ev.bind(this),this._onPointerDown=wv.bind(this),this._onPointerUp=Cv.bind(this),this._onContextMenu=Fv.bind(this),this._onMouseWheel=Rv.bind(this),this._onKeyDown=Lv.bind(this),this._onTouchStart=Dv.bind(this),this._onTouchMove=Iv.bind(this),this._onMouseDown=Av.bind(this),this._onMouseMove=Pv.bind(this),this._interceptControlDown=Uv.bind(this),this._interceptControlUp=Nv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dd),this.update(),this.state=vt.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ot.length();r=this._clampDistance(a*this._scale);const h=a-r;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<Sv?this.object.lookAt(this.target):(Id.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(Id,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Dd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let o=Ot.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function wv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ev(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Cv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ff),this.state=vt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Av(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=vt.DOLLY;break;case vo.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}break;case vo.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(rh)}function Pv(i){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Rv(i){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(i.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ff))}function Lv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Dv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ho.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=vt.TOUCH_ROTATE;break;case ho.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case ho.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=vt.TOUCH_DOLLY_PAN;break;case ho.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(rh)}function Iv(i){switch(this._trackPointer(i),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=vt.NONE}}function Fv(i){this.enabled!==!1&&i.preventDefault()}function Uv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Bv extends tf{constructor(){super();const e=new $e;e.deleteAttribute("uv");const t=new it({side:Jt}),n=new it,s=new uf(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new Z(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const r=new Z(e,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new Z(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const h=new Z(e,n);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);const c=new Z(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const l=new Z(e,n);l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),this.add(l);const f=new Z(e,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const m=new Z(e,so(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Z(e,so(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Z(e,so(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Z(e,so(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Z(e,so(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const d=new Z(e,so(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function so(i){const e=new Qc;return e.color.setScalar(i),e}class Ov{constructor(){this.aluminum=new it({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.currentFrameColor="silver",this.acrylic=new it({color:9684477,transparent:!0,opacity:.42,roughness:.1,metalness:.1,depthWrite:!1,side:Vt}),this.doorGlassLeft=new it({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Vt}),this.doorGlassRight=new it({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Vt}),this.handleMaterial=new it({color:16777215,metalness:.75,roughness:.12,envMapIntensity:1.2}),this.screwSilver=new it({color:11055288,metalness:.85,roughness:.22,envMapIntensity:1}),this.screwSlot=new it({color:1842978,metalness:.1,roughness:.9}),this.grommetMaterial=new it({color:1579035,metalness:.1,roughness:.85}),this.railMaterial=new it({color:4738388,metalness:.15,roughness:.55}),this.endCapMaterial=new it({color:10133670,metalness:.1,roughness:.65}),this.casterWheel=new it({color:1579035,roughness:.7,metalness:.15}),this.casterBracket=new it({color:14212838,roughness:.22,metalness:.85,envMapIntensity:1.2}),this.wireMesh=new it({color:1842463,roughness:.55,metalness:.25,envMapIntensity:.9}),this.silverInnerFrame=new it({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchAluminum=new it({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchGrayCap=new it({color:10133670,metalness:.1,roughness:.65}),this.perchBlackCap=new it({color:2237222,metalness:.1,roughness:.65}),this.perchWhiteScrew=new it({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.ventCoverAcrylic=new it({color:9684477,transparent:!0,opacity:.5,roughness:.08,metalness:.1,depthWrite:!1,side:Vt}),this.ledAluminum=new it({color:14212580,metalness:.8,roughness:.25,envMapIntensity:1.2}),this.ledDiffuser=new it({color:16777215,roughness:.4,metalness:.05}),this.ledEmissive=new it({color:16777215,emissive:16777215,emissiveIntensity:1.5,roughness:.2,metalness:0}),this.ledCable=new it({color:13421772,roughness:.7,metalness:.05}),this.ledBracket=new it({color:8950432,metalness:.6,roughness:.3}),this.thumbScrewMaterial=new it({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.blackMatteAcrylic=new it({color:1579292,roughness:.82,metalness:.04,side:Vt}),this.smokeGrayAcrylic=new it({color:2829877,transparent:!0,opacity:.6,roughness:.12,metalness:.1,depthWrite:!1,side:Vt}),this.caulkingMaterial=new it({color:13817821,roughness:.42,metalness:.04,envMapIntensity:.6}),this.rubberPackingMaterial=new it({color:7502212,roughness:.78,metalness:.06,envMapIntensity:.5})}createPolycaMaterial(e,t){return new it({map:e,bumpMap:t,bumpScale:1.2,transparent:!0,opacity:.78,roughness:.32,metalness:.1,side:Vt,depthWrite:!1})}createPunchingMaterial(e){return new it({color:9684477,alphaMap:e,transparent:!0,opacity:.58,roughness:.35,metalness:.05,side:Vt,depthWrite:!1})}setFrameColor(e){this.currentFrameColor=e,e==="black"?(this.aluminum.color.setHex(1974308),this.aluminum.metalness=.28,this.aluminum.roughness=.42,this.aluminum.envMapIntensity=.85,this.endCapMaterial.color.setHex(2237222),this.railMaterial.color.setHex(1974050),this.thumbScrewMaterial.color.setHex(1974050)):(this.aluminum.color.setHex(12897236),this.aluminum.metalness=.85,this.aluminum.roughness=.25,this.aluminum.envMapIntensity=1.3,this.endCapMaterial.color.setHex(10133670),this.railMaterial.color.setHex(4738388),this.thumbScrewMaterial.color.setHex(16119544)),this.aluminum.needsUpdate=!0,this.endCapMaterial.needsUpdate=!0,this.railMaterial.needsUpdate=!0,this.thumbScrewMaterial.needsUpdate=!0}dispose(){this.aluminum.dispose(),this.acrylic.dispose(),this.doorGlassLeft.dispose(),this.doorGlassRight.dispose(),this.handleMaterial.dispose(),this.grommetMaterial.dispose(),this.railMaterial.dispose(),this.endCapMaterial.dispose(),this.casterWheel.dispose(),this.casterBracket.dispose(),this.wireMesh.dispose(),this.silverInnerFrame.dispose(),this.perchAluminum.dispose(),this.perchGrayCap.dispose(),this.perchBlackCap.dispose(),this.perchWhiteScrew.dispose(),this.ventCoverAcrylic.dispose(),this.thumbScrewMaterial.dispose(),this.ledAluminum.dispose(),this.ledDiffuser.dispose(),this.ledEmissive.dispose(),this.ledCable.dispose(),this.ledBracket.dispose(),this.screwSilver.dispose(),this.screwSlot.dispose(),this.blackMatteAcrylic.dispose(),this.smokeGrayAcrylic.dispose()}}function kv(){const i=new mt,e=10,t=3,n=1.8,s=5.5,o=5;i.moveTo(e,e),i.lineTo(e,t),i.lineTo(e-n,t),i.lineTo(e-n,s),i.lineTo(e-o,s),i.lineTo(e-o,-s),i.lineTo(e-n,-s),i.lineTo(e-n,-t),i.lineTo(e,-t),i.lineTo(e,-e),i.lineTo(t,-e),i.lineTo(t,-e+n),i.lineTo(s,-e+n),i.lineTo(s,-e+o),i.lineTo(-s,-e+o),i.lineTo(-s,-e+n),i.lineTo(-t,-e+n),i.lineTo(-t,-e),i.lineTo(-e,-e),i.lineTo(-e,-t),i.lineTo(-e+n,-t),i.lineTo(-e+n,-s),i.lineTo(-e+o,-s),i.lineTo(-e+o,s),i.lineTo(-e+n,s),i.lineTo(-e+n,t),i.lineTo(-e,t),i.lineTo(-e,e),i.lineTo(-t,e),i.lineTo(-t,e-n),i.lineTo(-s,e-n),i.lineTo(-s,e-o),i.lineTo(s,e-o),i.lineTo(s,e-n),i.lineTo(t,e-n),i.lineTo(t,e),i.lineTo(e,e);const r=new sn;return r.absarc(0,0,2.25,0,Math.PI*2,!0),i.holes.push(r),i}function Gv(){const i=new mt,e=10,t=20,n=3,s=1.8,o=5.5,r=5;i.moveTo(e,t),i.lineTo(e,10+n),i.lineTo(e-s,10+n),i.lineTo(e-s,10+o),i.lineTo(e-r,10+o),i.lineTo(e-r,10-o),i.lineTo(e-s,10-o),i.lineTo(e-s,10-n),i.lineTo(e,10-n),i.lineTo(e,-10+n),i.lineTo(e-s,-10+n),i.lineTo(e-s,-10+o),i.lineTo(e-r,-10+o),i.lineTo(e-r,-10-o),i.lineTo(e-s,-10-o),i.lineTo(e-s,-10-n),i.lineTo(e,-10-n),i.lineTo(e,-t),i.lineTo(n,-t),i.lineTo(n,-t+s),i.lineTo(o,-t+s),i.lineTo(o,-t+r),i.lineTo(-o,-t+r),i.lineTo(-o,-t+s),i.lineTo(-n,-t+s),i.lineTo(-n,-t),i.lineTo(-e,-t),i.lineTo(-e,-10-n),i.lineTo(-e+s,-10-n),i.lineTo(-e+s,-10-o),i.lineTo(-e+r,-10-o),i.lineTo(-e+r,-10+o),i.lineTo(-e+s,-10+o),i.lineTo(-e+s,-10+n),i.lineTo(-e,-10+n),i.lineTo(-e,10-n),i.lineTo(-e+s,10-n),i.lineTo(-e+s,10-o),i.lineTo(-e+r,10-o),i.lineTo(-e+r,10+o),i.lineTo(-e+s,10+o),i.lineTo(-e+s,10+n),i.lineTo(-e,10+n),i.lineTo(-e,t),i.lineTo(-n,t),i.lineTo(-n,t-s),i.lineTo(-o,t-s),i.lineTo(-o,t-r),i.lineTo(o,t-r),i.lineTo(o,t-s),i.lineTo(n,t-s),i.lineTo(n,t),i.lineTo(e,t);const a=new sn;a.absarc(0,10,2.25,0,Math.PI*2,!0),i.holes.push(a);const h=new sn;return h.absarc(0,-10,2.25,0,Math.PI*2,!0),i.holes.push(h),i}const zv=kv(),Hv=Gv(),Wv=Vv();function Vv(){const i=new mt,e=10,t=30,n=3,s=1.8,o=5.5,r=5;i.moveTo(e,t),i.lineTo(e,20+n),i.lineTo(e-s,20+n),i.lineTo(e-s,20+o),i.lineTo(e-r,20+o),i.lineTo(e-r,20-o),i.lineTo(e-s,20-o),i.lineTo(e-s,20-n),i.lineTo(e,20-n),i.lineTo(e,n),i.lineTo(e-s,n),i.lineTo(e-s,o),i.lineTo(e-r,o),i.lineTo(e-r,-o),i.lineTo(e-s,-o),i.lineTo(e-s,-n),i.lineTo(e,-n),i.lineTo(e,-20+n),i.lineTo(e-s,-20+n),i.lineTo(e-s,-20+o),i.lineTo(e-r,-20+o),i.lineTo(e-r,-20-o),i.lineTo(e-s,-20-o),i.lineTo(e-s,-20-n),i.lineTo(e,-20-n),i.lineTo(e,-t),i.lineTo(n,-t),i.lineTo(n,-t+s),i.lineTo(o,-t+s),i.lineTo(o,-t+r),i.lineTo(-o,-t+r),i.lineTo(-o,-t+s),i.lineTo(-n,-t+s),i.lineTo(-n,-t),i.lineTo(-e,-t),i.lineTo(-e,-20-n),i.lineTo(-e+s,-20-n),i.lineTo(-e+s,-20-o),i.lineTo(-e+r,-20-o),i.lineTo(-e+r,-20+o),i.lineTo(-e+s,-20+o),i.lineTo(-e+s,-20+n),i.lineTo(-e,-20+n),i.lineTo(-e,-n),i.lineTo(-e+s,-n),i.lineTo(-e+s,-o),i.lineTo(-e+r,-o),i.lineTo(-e+r,o),i.lineTo(-e+s,o),i.lineTo(-e+s,n),i.lineTo(-e,n),i.lineTo(-e,20-n),i.lineTo(-e+s,20-n),i.lineTo(-e+s,20-o),i.lineTo(-e+r,20-o),i.lineTo(-e+r,20+o),i.lineTo(-e+s,20+o),i.lineTo(-e+s,20+n),i.lineTo(-e,20+n),i.lineTo(-e,t),i.lineTo(-n,t),i.lineTo(-n,t-s),i.lineTo(-o,t-s),i.lineTo(-o,t-r),i.lineTo(o,t-r),i.lineTo(o,t-s),i.lineTo(n,t-s),i.lineTo(n,t),i.lineTo(e,t);const a=new sn;a.absarc(0,20,2.25,0,Math.PI*2,!0),i.holes.push(a);const h=new sn;h.absarc(0,0,2.25,0,Math.PI*2,!0),i.holes.push(h);const c=new sn;return c.absarc(0,-20,2.25,0,Math.PI*2,!0),i.holes.push(c),i}function Xv(i){return new ft(zv,{depth:i,bevelEnabled:!1,steps:1})}function ia(i="bottom"){const e=new mt,t=10,n=3,s=1.8,o=5.5,r=5;e.moveTo(t,t),i==="right"||(e.lineTo(t,n),e.lineTo(t-s,n),e.lineTo(t-s,o),e.lineTo(t-r,o),e.lineTo(t-r,-o),e.lineTo(t-s,-o),e.lineTo(t-s,-n),e.lineTo(t,-n)),e.lineTo(t,-t),i==="bottom"||(e.lineTo(n,-t),e.lineTo(n,-t+s),e.lineTo(o,-t+s),e.lineTo(o,-t+r),e.lineTo(-o,-t+r),e.lineTo(-o,-t+s),e.lineTo(-n,-t+s),e.lineTo(-n,-t)),e.lineTo(-t,-t),i==="left"||(e.lineTo(-t,-n),e.lineTo(-t+s,-n),e.lineTo(-t+s,-o),e.lineTo(-t+r,-o),e.lineTo(-t+r,o),e.lineTo(-t+s,o),e.lineTo(-t+s,n),e.lineTo(-t,n)),e.lineTo(-t,t),i==="top"||(e.lineTo(-n,t),e.lineTo(-n,t-s),e.lineTo(-o,t-s),e.lineTo(-o,t-r),e.lineTo(o,t-r),e.lineTo(o,t-s),e.lineTo(n,t-s),e.lineTo(n,t)),e.lineTo(t,t);const a=new sn;return a.absarc(0,0,2.25,0,Math.PI*2,!0),e.holes.push(a),e}const Fd={top:ia("top"),bottom:ia("bottom"),left:ia("left"),right:ia("right")};function Ud(i,e="bottom"){const t=Fd[e]||Fd.bottom;return new ft(t,{depth:i,bevelEnabled:!1,steps:1})}function $v(i){return new ft(Hv,{depth:i,bevelEnabled:!1,steps:1})}function Yv(i){return new ft(Wv,{depth:i,bevelEnabled:!1,steps:1})}function qv(){const i=new mt,e=7.5,t=15,n=3,s=1.5,o=5,r=4.5;i.moveTo(e,t),i.lineTo(e,n),i.lineTo(e-s,n),i.lineTo(e-s,o),i.lineTo(e-r,o),i.lineTo(e-r,-o),i.lineTo(e-s,-o),i.lineTo(e-s,-n),i.lineTo(e,-n),i.lineTo(e,-t),i.lineTo(-e,-t),i.lineTo(-e,-n),i.lineTo(-e+s,-n),i.lineTo(-e+s,-o),i.lineTo(-e+r,-o),i.lineTo(-e+r,o),i.lineTo(-e+s,o),i.lineTo(-e+s,n),i.lineTo(-e,n),i.lineTo(-e,t),i.lineTo(e,t);const a=new sn;return a.absarc(0,0,2.5,0,Math.PI*2,!0),i.holes.push(a),i}const Zv=qv();function Kv(i){return new ft(Zv,{depth:i,bevelEnabled:!1,steps:1})}function jv(){const i=new mt,e=20,t=3,n=1.8,s=5.5,o=5;i.moveTo(e,e),i.lineTo(e,10+t),i.lineTo(e-n,10+t),i.lineTo(e-n,10+s),i.lineTo(e-o,10+s),i.lineTo(e-o,10-s),i.lineTo(e-n,10-s),i.lineTo(e-n,10-t),i.lineTo(e,10-t),i.lineTo(e,-10+t),i.lineTo(e-n,-10+t),i.lineTo(e-n,-10+s),i.lineTo(e-o,-10+s),i.lineTo(e-o,-10-s),i.lineTo(e-n,-10-s),i.lineTo(e-n,-10-t),i.lineTo(e,-10-t),i.lineTo(e,-e),i.lineTo(10+t,-e),i.lineTo(10+t,-e+n),i.lineTo(10+s,-e+n),i.lineTo(10+s,-e+o),i.lineTo(10-s,-e+o),i.lineTo(10-s,-e+n),i.lineTo(10-t,-e+n),i.lineTo(10-t,-e),i.lineTo(-10+t,-e),i.lineTo(-10+t,-e+n),i.lineTo(-10+s,-e+n),i.lineTo(-10+s,-e+o),i.lineTo(-10-s,-e+o),i.lineTo(-10-s,-e+n),i.lineTo(-10-t,-e+n),i.lineTo(-10-t,-e),i.lineTo(-e,-e),i.lineTo(-e,-10-t),i.lineTo(-e+n,-10-t),i.lineTo(-e+n,-10-s),i.lineTo(-e+o,-10-s),i.lineTo(-e+o,-10+s),i.lineTo(-e+n,-10+s),i.lineTo(-e+n,-10+t),i.lineTo(-e,-10+t),i.lineTo(-e,10-t),i.lineTo(-e+n,10-t),i.lineTo(-e+n,10-s),i.lineTo(-e+o,10-s),i.lineTo(-e+o,10+s),i.lineTo(-e+n,10+s),i.lineTo(-e+n,10+t),i.lineTo(-e,10+t),i.lineTo(-e,e),i.lineTo(-10-t,e),i.lineTo(-10-t,e-n),i.lineTo(-10-s,e-n),i.lineTo(-10-s,e-o),i.lineTo(-10+s,e-o),i.lineTo(-10+s,e-n),i.lineTo(-10+t,e-n),i.lineTo(-10+t,e),i.lineTo(10-t,e),i.lineTo(10-t,e-n),i.lineTo(10-s,e-n),i.lineTo(10-s,e-o),i.lineTo(10+s,e-o),i.lineTo(10+s,e-n),i.lineTo(10+t,e-n),i.lineTo(10+t,e),i.lineTo(e,e);const r=[{x:10,y:10},{x:-10,y:10},{x:-10,y:-10},{x:10,y:-10}];for(const a of r){const h=new sn;h.absarc(a.x,a.y,2.25,0,Math.PI*2,!0),i.holes.push(h)}return i}const Jv=jv();function Qv(i){return new ft(Jv,{depth:i,bevelEnabled:!1,steps:1})}function sa(i,e,t=!0){const s=Math.min(2048,Math.max(256,Math.round(i*4))),o=Math.min(2048,Math.max(256,Math.round(e*4))),r=document.createElement("canvas");r.width=s,r.height=o;const a=r.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,s,o),a.fillStyle="#000000";const h=7,l=3.1/2*(s/i),f=15,m={x:35,y:35},p={x:i-35,y:35};for(let v=h/2;v<i;v+=h)for(let g=h/2;g<e;g+=h){if(t){const x=Math.hypot(v-m.x,g-m.y),M=Math.hypot(v-p.x,g-p.y);if(x<f+2.5||M<f+2.5)continue}const d=v/i*s,T=g/e*o;a.beginPath(),a.arc(d,T,l,0,Math.PI*2),a.fill()}if(t){const v=f*(s/i);a.beginPath(),a.arc(m.x/i*s,m.y/e*o,v,0,Math.PI*2),a.arc(p.x/i*s,p.y/e*o,v,0,Math.PI*2),a.fill()}const _=new Fa(r);return _.wrapS=Cn,_.wrapT=Cn,_.minFilter=Yt,_.magFilter=Yt,_}function jo(i,e){const n=Math.min(1024,Math.max(128,Math.round(i*3))),s=Math.min(2048,Math.max(256,Math.round(e*3))),o=document.createElement("canvas");o.width=n,o.height=s;const r=o.getContext("2d");r.fillStyle="rgba(235, 242, 248, 0.72)",r.fillRect(0,0,n,s);const a=document.createElement("canvas");a.width=n,a.height=s;const h=a.getContext("2d");h.fillStyle="#808080",h.fillRect(0,0,n,s);const l=6/e*s;for(let p=0;p<s;p+=l){const _=Math.min(s,p+l),v=_-p,g=r.createLinearGradient(0,p,0,_);g.addColorStop(0,"rgba(140, 165, 185, 0.95)"),g.addColorStop(.18,"rgba(255, 255, 255, 1.0)"),g.addColorStop(.5,"rgba(220, 235, 248, 0.55)"),g.addColorStop(.82,"rgba(240, 248, 255, 0.80)"),g.addColorStop(1,"rgba(140, 165, 185, 0.95)"),r.fillStyle=g,r.fillRect(0,p,n,v);const d=Math.max(1.5,Math.round(l*.12));r.fillStyle="rgba(90, 115, 135, 0.85)",r.fillRect(0,p,n,d);const T=Math.max(1.5,Math.round(l*.16));r.fillStyle="rgba(255, 255, 255, 0.98)",r.fillRect(0,p+d,n,T);const x=h.createLinearGradient(0,p,0,_);x.addColorStop(0,"#1a1a1a"),x.addColorStop(.2,"#f0f0f0"),x.addColorStop(.5,"#999999"),x.addColorStop(.8,"#d8d8d8"),x.addColorStop(1,"#1a1a1a"),h.fillStyle=x,h.fillRect(0,p,n,v)}const f=new Fa(o);f.wrapS=Cn,f.wrapT=Cn,f.minFilter=Yt,f.magFilter=Yt;const m=new Fa(a);return m.wrapS=Cn,m.wrapT=Cn,m.minFilter=Yt,m.magFilter=Yt,{map:f,bumpMap:m}}function Tt(i,e,t=!1,n=!1){return t?i==="2040"?"AFS-2040-5":"AFS-2020-5":i==="4040"?e==="black"?"AFS-4040-4-BK":"AFS-4040-4":i==="2060"?"AFS-2060-4":i==="2040"?n&&e==="silver"?"AFSF-2040-4":e==="black"?"AFS-2040-4-BK":"AFS-2040-4":n&&e==="silver"?"AFSF-2020-4":e==="black"?"AFS-2020-4-BK":"AFS-2020-4"}function Ve(i,e,t,n=!1,s=!1){const o=Math.round(e);return`${Tt(i,t,n,s)}-${o}`}class e2{constructor(e){this.materials=e,this.root=new pt,this.root.name="CageRoot",this.frameGroup=new pt,this.frameGroup.name="Frames",this.root.add(this.frameGroup),this.panelGroup=new pt,this.panelGroup.name="Panels",this.root.add(this.panelGroup),this.doorGroup=new pt,this.doorGroup.name="Doors",this.root.add(this.doorGroup),this.feetGroup=new pt,this.feetGroup.name="Feet",this.root.add(this.feetGroup),this.perchGroup=new pt,this.perchGroup.name="Perch",this.root.add(this.perchGroup),this.caulkingGroup=new pt,this.caulkingGroup.name="Caulking",this.root.add(this.caulkingGroup),this.rubberPackingGroup=new pt,this.rubberPackingGroup.name="RubberPacking",this.root.add(this.rubberPackingGroup),this.dividerGroup=new pt,this.dividerGroup.name="RoomDivider",this.root.add(this.dividerGroup),this.ledGroup=new pt,this.ledGroup.name="LED",this.root.add(this.ledGroup),this.params={W:750,D:450,H:300,cageType:"A",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,hasFloorReinforcement:!1,floorSplitCount:2,hasBackReinforcement:!1,backSplitCount:2,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorHeaterSupport:!1,hasPerch:!1,hasRubberPacking:!1,hasRoomDivider:!1,hasBottomWideFrame:!1,hasTopWideFrame:!1,ledType:"none",ledPower:!0,ledBrightness:1,ledColorMode:"white",ledRgbColor:"#ffffff",frontWideFrame:"2x",doorHingeSide:"left",footType:"rubber",showPanels:!0,doorState:"closed",frameColor:"silver",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}},this.activeGeometries=[],this.activeTextures=[],this.activeMaterials=[],this.partsList=[]}disposeResources(){for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.activeTextures)e.dispose();this.activeTextures=[];for(const e of this.activeMaterials)e.dispose();this.activeMaterials=[]}clearGroup(e){for(;e.children.length>0;){const t=e.children[0];e.remove(t)}}addFrameMember(e,t,n,s,o="",r=null,a="bottom",h=null){let c;e==="4040"?c=Qv(t):e==="2060"?c=Yv(t):e==="2040"?c=$v(t):e==="2020_flat"?c=Ud(t,a):c=Xv(t),c.translate(0,0,-t/2),this.activeGeometries.push(c);const l=new Z(c,r||this.materials.aluminum);return l.position.copy(n),l.rotation.copy(s),l.castShadow=!0,l.receiveShadow=!0,l.name=o,(h||this.frameGroup).add(l),l}addDoorEndCap(e,t,n,s=null,o=null,r=null){const l=new mt;l.moveTo(-20/2+2,-20/2),l.lineTo(20/2-2,-20/2),l.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),l.lineTo(20/2,20/2-2),l.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),l.lineTo(-20/2+2,20/2),l.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),l.lineTo(-20/2,-20/2+2),l.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const f={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},m=new ft(l,f);m.translate(0,0,-1.5),this.activeGeometries.push(m);const p=new Z(m,o||this.materials.endCapMaterial);return p.position.set(e,t,n),s&&p.rotation.copy(s),p.castShadow=!0,p.receiveShadow=!0,p.name="扉用エンドキャップ",(r||this.frameGroup).add(p),p}addEndCap2040(e,t,n,s=null,o=null,r=null){const l=new mt;l.moveTo(-40/2+2,-20/2),l.lineTo(40/2-2,-20/2),l.absarc(40/2-2,-20/2+2,2,-Math.PI/2,0,!1),l.lineTo(40/2,20/2-2),l.absarc(40/2-2,20/2-2,2,0,Math.PI/2,!1),l.lineTo(-40/2+2,20/2),l.absarc(-40/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),l.lineTo(-40/2,-20/2+2),l.absarc(-40/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const f={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},m=new ft(l,f);m.translate(0,0,-1.5),this.activeGeometries.push(m);const p=new Z(m,o||this.materials.endCapMaterial);return p.position.set(e,t,n),s&&p.rotation.copy(s),p.castShadow=!0,p.receiveShadow=!0,p.name="2040スペーサー用エンドキャップ",(r||this.frameGroup).add(p),p}getLatchBlackMaterial(){return this.latchBlackMaterial||(this.latchBlackMaterial=new it({color:1579034,roughness:.5,metalness:.15,name:"CP294N_Black"}),this.activeMaterials.push(this.latchBlackMaterial)),this.latchBlackMaterial}createSlideLatchMesh(e){const t=new pt,n=this.getLatchBlackMaterial(),s=new mt,o=25,r=70,a=3;s.moveTo(-o/2+a,-r/2),s.lineTo(o/2-a,-r/2),s.quadraticCurveTo(o/2,-r/2,o/2,-r/2+a),s.lineTo(o/2,r/2-a),s.quadraticCurveTo(o/2,r/2,o/2-a,r/2),s.lineTo(-o/2+a,r/2),s.quadraticCurveTo(-o/2,r/2,-o/2,r/2-a),s.lineTo(-o/2,-r/2+a),s.quadraticCurveTo(-o/2,-r/2,-o/2+a,-r/2);const h=new ft(s,{depth:8,bevelEnabled:!1});this.activeGeometries.push(h);const c=new Z(h,n);c.position.set(0,0,0),c.castShadow=!0,t.add(c);for(const B of[-25,25]){const I=new Ke(3.5,3.5,3,16);I.rotateX(Math.PI/2),this.activeGeometries.push(I);const G=new Z(I,n);G.position.set(0,B,8.5),t.add(G)}const l=new pt;l.position.set(0,0,8),t.add(l),t.userData.knobPivot=l;const f=e?-1:1,m=e?1:-1,p=new $e(12,28,6);this.activeGeometries.push(p);const _=new Z(p,n);_.position.set(0,0,3),l.add(_);const v=new $e(16,22,2.5);this.activeGeometries.push(v);const g=new Z(v,n);g.position.set(f*10,0,.5),g.castShadow=!0,l.add(g);const d=new mt;e?(d.moveTo(0,0),d.lineTo(-11,0),d.lineTo(-15,-2.8),d.lineTo(-12,-2.8),d.lineTo(-7,0),d.closePath()):(d.moveTo(0,0),d.lineTo(11,0),d.lineTo(15,-2.8),d.lineTo(12,-2.8),d.lineTo(7,0),d.closePath());const T=new ft(d,{depth:14,bevelEnabled:!1});T.translate(0,0,-7),T.rotateX(-Math.PI/2),this.activeGeometries.push(T);const x=new Z(T,n);x.position.set(0,0,-.75),x.castShadow=!0,l.add(x);const M=new $e(10,24,16);this.activeGeometries.push(M);const U=new Z(M,n);U.position.set(m*4,0,8),U.castShadow=!0,l.add(U);const L=new mt;L.moveTo(0,0),L.lineTo(m*8,4),L.lineTo(m*5,10),L.lineTo(m*-2,8),L.closePath();const w=new ft(L,{depth:22,bevelEnabled:!1});w.translate(0,0,-11),w.rotateX(-Math.PI/2),this.activeGeometries.push(w);const R=new Z(w,n);R.position.set(m*4,0,16),R.castShadow=!0,l.add(R);const y=new mt;y.moveTo(0,-9),y.lineTo(12,-9),y.quadraticCurveTo(18,-9,18,0),y.quadraticCurveTo(18,9,12,9),y.lineTo(0,9),y.closePath();const b=new ft(y,{depth:3,bevelEnabled:!1});this.activeGeometries.push(b);const A=new Z(b,n);return e||(A.rotation.y=Math.PI),A.position.set(m*6,0,10),A.castShadow=!0,l.add(A),t}createStrikerAssembly(e){const t=new pt,n=this.materials.acrylic,s=this.getLatchBlackMaterial(),o=e?1:-1;for(const p of[-10,10]){const _=new Ke(10,10,5,24);_.rotateX(Math.PI/2),this.activeGeometries.push(_);const v=new Z(_,n);v.position.set(o*10,p,2.5),t.add(v);const g=new Ke(3.5,3.5,2.5,16);g.rotateX(Math.PI/2),this.activeGeometries.push(g);const d=new Z(g,s);d.position.set(o*10,p,7.5),t.add(d)}const r=new mt,h=27/2,l=38-h;if(e){r.moveTo(0,-h),r.lineTo(l,-h),r.absarc(l,0,h,-Math.PI/2,Math.PI/2,!1),r.lineTo(0,h),r.closePath();const p=7.5,_=l-1,v=l-7.5,g=new sn;g.moveTo(v,-p),g.lineTo(_,-p),g.absarc(_,0,p,-Math.PI/2,Math.PI/2,!1),g.lineTo(v,p),g.closePath(),r.holes.push(g);for(const d of[-10,10]){const T=new sn;T.absarc(10,d,2.2,0,Math.PI*2,!0),r.holes.push(T)}}else{r.moveTo(0,-h),r.lineTo(-l,-h),r.absarc(-l,0,h,-Math.PI/2,-Math.PI*1.5,!0),r.lineTo(0,h),r.closePath();const p=7.5,_=-l+1,v=-l+7.5,g=new sn;g.moveTo(v,-p),g.lineTo(_,-p),g.absarc(_,0,p,-Math.PI/2,-Math.PI*1.5,!0),g.lineTo(v,p),g.closePath(),r.holes.push(g);for(const d of[-10,10]){const T=new sn;T.absarc(-10,d,2.2,0,Math.PI*2,!0),r.holes.push(T)}}const f=new ft(r,{depth:1.5,bevelEnabled:!1});this.activeGeometries.push(f);const m=new Z(f,s);return m.position.set(0,0,5),m.castShadow=!0,t.add(m),t}addEndCap(e,t,n){const a=new mt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const h={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},c=new ft(a,h);c.translate(0,0,-1.5),this.activeGeometries.push(c);const l=new Z(c,this.materials.endCapMaterial);return l.position.set(e,t,n),l.castShadow=!0,l.receiveShadow=!0,l.name="M4エンドキャップ",this.frameGroup.add(l),l}createWireMesh(e,t,n){const s=new pt;s.name=`WireMesh_P${n}_${e}x${t}`;const o=1.6,r=Math.max(2,Math.floor(t/n)+1),a=-((r-1)*n)/2,h=new Ke(o,o,e,8);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);for(let m=0;m<r;m++){const p=new Z(h,this.materials.wireMesh);p.position.set(0,o,a+m*n),p.castShadow=!0,s.add(p)}const c=Math.max(2,Math.floor(e/n)+1),l=-((c-1)*n)/2,f=new Ke(o,o,t,8);f.rotateX(Math.PI/2),this.activeGeometries.push(f);for(let m=0;m<c;m++){const p=new Z(f,this.materials.wireMesh);p.position.set(l+m*n,-o,0),p.castShadow=!0,s.add(p)}return s}update(e){if(e&&e.panelConfig){this.params.panelConfig=Object.assign({},this.params.panelConfig,e.panelConfig);const he={...e};delete he.panelConfig,Object.assign(this.params,he)}else e&&Object.assign(this.params,e);const{W:t,D:n,H:s,cageType:o,frontWindowH:r,hasSideReinforcement:a,sideOpeningH:h,showPanels:c,frameColor:l,hasFloorReinforcement:f,floorSplitCount:m,hasBackReinforcement:p,backSplitCount:_,hasTopReinforcement:v,footType:g,doorHingeSide:d,hasFloorHeaterSupport:T}=this.params,x=l==="silver",M=(t-80)/3,U=-t/2+30+M,L=t/2-30-M;l&&this.materials.setFrameColor(l),this.clearGroup(this.frameGroup),this.clearGroup(this.panelGroup),this.clearGroup(this.doorGroup),this.clearGroup(this.feetGroup),this.clearGroup(this.perchGroup),this.clearGroup(this.dividerGroup),this.clearGroup(this.caulkingGroup),this.clearGroup(this.rubberPackingGroup),this.clearGroup(this.ledGroup),this.disposeResources(),this._doorAnim=null,this.partsList=[];const w=new Rt(0,0,0),R=new Rt(0,Math.PI/2,0),y=new Rt(Math.PI/2,0,0),b=o==="A"||o==="A_FRAMED"||o==="C"||o==="C_FRAMED",A=o==="A",B=b&&!!this.params.hasBottomWideFrame,I=b&&!!this.params.hasTopWideFrame,G=B&&I,O=B?40:20,Y=I?40:20,z=Math.max(10,n-6),N=Math.max(10,s-O-Y),ee=O+N/2;if(o==="A_FRAMED"){B?(this.addFrameMember("2040",z,new E(-t/2+10,20,0),w,"床・左2040 (外周幅広)"),this.addFrameMember("2040",z,new E(t/2-10,20,0),w,"床・右2040 (外周幅広)"),this.recordPart(Ve("2040",z,l),z,2,"床面 左右通し (2040・前後3mm短縮・キャップ取付)","frame")):(this.addFrameMember("2020",z,new E(-t/2+10,10,0),w,"床・左2020"),this.addFrameMember("2020",z,new E(t/2-10,10,0),w,"床・右2020"),this.recordPart(Ve("2020",z,l),z,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame"));const he=Math.max(10,t-40);this.addFrameMember("4040",he,new E(0,20,n/2-20),R,"床・正面4040 (枠囲い下部)"),this.recordPart(Ve("4040",he,l),he,1,"正面下部 40x40枠囲い (AFS-4040-4)","frame");const Ae=Math.max(10,t-40);if(B?(this.addFrameMember("2040",Ae,new E(0,20,-n/2+10),R,"床・背面2040 (外周幅広)"),this.recordPart(Ve("2040",Ae,l),Ae,1,"床面 背面 2040 (外周幅広)","frame")):(this.addFrameMember("2020",Ae,new E(0,10,-n/2+10),R,"床・背面2020"),this.recordPart(Ve("2020",Ae,l),Ae,1,"床面 背面","frame")),f){const oe=Math.max(10,n-60),Q=x?"2020_flat":"2020";m===3?(this.addFrameMember(Q,oe,new E(U,10,-10),w,"床・補強2020(左)",null,"top"),this.addFrameMember(Q,oe,new E(L,10,-10),w,"床・補強2020(右)",null,"top"),this.recordPart(Ve("2020",oe,l,!1,!0),oe,2,"床面 補強フレーム (3分割・D-60mm)","frame")):(this.addFrameMember(Q,oe,new E(0,10,-10),w,"床・中央補強2020",null,"top"),this.recordPart(Ve("2020",oe,l,!1,!0),oe,1,"床面 中央補強 (2分割・D-60mm)","frame"))}if(G?(this.addFrameMember("2040",N,new E(-t/2+10,ee,-n/2+20),y,"柱・奥左2040 (外周幅広)"),this.addFrameMember("2040",N,new E(t/2-10,ee,-n/2+20),y,"柱・奥右2040 (外周幅広)"),this.recordPart(Ve("2040",N,l),N,2,"柱 (奥2隅・2040・奥行40mm)","frame")):(this.addFrameMember("2020",N,new E(-t/2+10,ee,-n/2+10),y,"柱・奥左2020"),this.addFrameMember("2020",N,new E(t/2-10,ee,-n/2+10),y,"柱・奥右2020"),this.recordPart(Ve("2020",N,l),N,2,"柱 (奥2隅)","frame")),p){const oe=x?"2020_flat":"2020";_===3?(this.addFrameMember(oe,N,new E(U,ee,-n/2+10),y,"背面・補強2020(左)"),this.addFrameMember(oe,N,new E(L,ee,-n/2+10),y,"背面・補強2020(右)"),this.recordPart(Ve("2020",N,l,!1,!0),N,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(oe,N,new E(0,ee,-n/2+10),y,"背面・中央補強2020"),this.recordPart(Ve("2020",N,l,!1,!0),N,1,"背面 中央補強 (2分割)","frame"))}this.addFrameMember("2040",N,new E(-t/2+10,ee,n/2-20),y,"柱・手前左2040"),this.addFrameMember("2040",N,new E(t/2-10,ee,n/2-20),y,"柱・手前右2040"),this.recordPart(Ve("2040",N,l),N,2,"柱・正面枠囲い (2040・奥行40mm)","frame");const me=v||t>940,Ee=this.params.panelConfig||{};let te=!1;if(me){const oe=!!(Ee.topLeft&&Ee.topLeft.startsWith("mesh")),Q=!!(Ee.topRight&&Ee.topRight.startsWith("mesh"));te=oe||Q}else te=!!(Ee.top&&Ee.top.startsWith("mesh"));const K=x&&te;if(I){const oe=K?"AFS-2040-5":Tt("2040",l),Q=`${oe}-${z}`,re=K?"天面 左右通し (2040・天面金網受用・AFS-2040-5)":"天面 左右通し (2040・前後3mm短縮・キャップ取付)";this.addFrameMember("2040",z,new E(-t/2+10,s-20,0),w,"天面・左2040 (外周幅広)"),this.addFrameMember("2040",z,new E(t/2-10,s-20,0),w,"天面・右2040 (外周幅広)"),this.recordPart(Q,z,2,re,"frame",{partCode:oe,lengthMm:z,unitType:"m"})}else{const oe=K?"AFS-2020-5":Tt("2020",l),Q=`${oe}-${z}`,re=K?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",z,new E(-t/2+10,s-10,0),w,"天面・左2020"),this.addFrameMember("2020",z,new E(t/2-10,s-10,0),w,"天面・右2020"),this.recordPart(Q,z,2,re,"frame",{partCode:oe,lengthMm:z,unitType:"m"})}const D=Math.max(10,t-40);if(I){const oe=K?"AFS-2040-5":Tt("2040",l),Q=`${oe}-${D}`,re=K?"天面 背面 (2040・天面金網受用・AFS-2040-5)":"天面 背面 2040 (外周幅広)";this.addFrameMember("2040",D,new E(0,s-20,-n/2+10),R,"天面・背面2040 (外周幅広)"),this.recordPart(Q,D,1,re,"frame",{partCode:oe,lengthMm:D,unitType:"m"})}else{const oe=K?"AFS-2020-5":Tt("2020",l),Q=`${oe}-${D}`,re=K?"天面 背面 (天面金網受用・AFS-2020-5)":"天面 背面";this.addFrameMember("2020",D,new E(0,s-10,-n/2+10),R,"天面・背面2020"),this.recordPart(Q,D,1,re,"frame",{partCode:oe,lengthMm:D,unitType:"m"})}if(I)this.addFrameMember("4040",he,new E(0,s-20,n/2-20),R,"天面・正面4040 (枠囲い上部・幅広)"),this.recordPart(Ve("4040",he,l),he,1,"正面上部 40x40枠囲い (AFS-4040-4)","frame");else{const oe=K?"AFS-2040-5":Tt("2040",l),Q=`${oe}-${he}`,re=K?"正面上部 2040横向き (天面金網受用・AFS-2040-5)":"正面上部 2040横向き (奥行40mm・AFS-2040-4)",ne=new lt().makeBasis(new E(0,1,0),new E(0,0,1),new E(1,0,0)),xe=new Rt().setFromRotationMatrix(ne);this.addFrameMember("2040",he,new E(0,s-10,n/2-20),xe,"天面・手前2040 (横向き枠囲い上部)"),this.recordPart(Q,he,1,re,"frame",{partCode:oe,lengthMm:he,unitType:"m"})}if(v||t>940){const oe=Math.max(10,n-60),Q=K?"AFS-2020-5":Tt("2020",l,!1,!0),re=`${Q}-${oe}`,ne=K?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割・D-60mm)",xe=x&&!K?"2020_flat":"2020";this.addFrameMember(xe,oe,new E(0,s-10,-10),w,"天面・中央補強2020",null,"bottom"),this.recordPart(re,oe,1,ne,"frame",{partCode:Q,lengthMm:oe,unitType:"m"})}}else if(o==="C_FRAMED"){B?(this.addFrameMember("2040",z,new E(-t/2+10,20,0),w,"床・左2040 (外周幅広)"),this.addFrameMember("2040",z,new E(t/2-10,20,0),w,"床・右2040 (外周幅広)"),this.recordPart(Ve("2040",z,l),z,2,"床面 左右通し (2040・前後3mm短縮・キャップ取付)","frame")):(this.addFrameMember("2020",z,new E(-t/2+10,10,0),w,"床・左2020"),this.addFrameMember("2020",z,new E(t/2-10,10,0),w,"床・右2020"),this.recordPart(Ve("2020",z,l),z,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame"));const he=new lt().makeBasis(new E(0,1,0),new E(0,0,1),new E(1,0,0)),Ae=new Rt().setFromRotationMatrix(he),me=Math.max(10,t-40);if(B)this.addFrameMember("4040",me,new E(0,20,n/2-20),R,"床・正面4040 (枠囲い下部・幅広)"),this.recordPart(Ve("4040",me,l),me,1,"正面下部 40x40枠囲い (AFS-4040-4)","frame");else{const C=Tt("2040",l),S=`${C}-${me}`;this.addFrameMember("2040",me,new E(0,10,n/2-20),Ae,"床・正面2040 (横向き枠囲い下部)"),this.recordPart(S,me,1,"床面 正面 2040横向き (枠囲い下部・AFS-2040-4)","frame",{partCode:C,lengthMm:me,unitType:"m"})}const Ee=Math.max(10,t-40);if(B?(this.addFrameMember("2040",Ee,new E(0,20,-n/2+10),R,"床・背面2040 (外周幅広)"),this.recordPart(Ve("2040",Ee,l),Ee,1,"床面 背面 2040 (外周幅広)","frame")):(this.addFrameMember("2020",Ee,new E(0,10,-n/2+10),R,"床・背面2020"),this.recordPart(Ve("2020",Ee,l),Ee,1,"床面 背面","frame")),f){const C=Math.max(10,n-60),S=x?"2020_flat":"2020";m===3?(this.addFrameMember(S,C,new E(U,10,-10),w,"床・補強2020(左)",null,"top"),this.addFrameMember(S,C,new E(L,10,-10),w,"床・補強2020(右)",null,"top"),this.recordPart(Ve("2020",C,l,!1,!0),C,2,"床面 補強フレーム (3分割・D-60mm)","frame")):(this.addFrameMember(S,C,new E(0,10,-10),w,"床・中央補強2020",null,"top"),this.recordPart(Ve("2020",C,l,!1,!0),C,1,"床面 中央補強 (2分割・D-60mm)","frame"))}if(G?(this.addFrameMember("2040",N,new E(-t/2+10,ee,-n/2+20),y,"柱・奥左2040 (外周幅広)"),this.addFrameMember("2040",N,new E(t/2-10,ee,-n/2+20),y,"柱・奥右2040 (外周幅広)"),this.recordPart(Ve("2040",N,l),N,2,"柱 (奥2隅・2040・奥行40mm)","frame")):(this.addFrameMember("2020",N,new E(-t/2+10,ee,-n/2+10),y,"柱・奥左2020"),this.addFrameMember("2020",N,new E(t/2-10,ee,-n/2+10),y,"柱・奥右2020"),this.recordPart(Ve("2020",N,l),N,2,"柱 (奥2隅)","frame")),p){const C=x?"2020_flat":"2020";_===3?(this.addFrameMember(C,N,new E(U,ee,-n/2+10),y,"背面・補強2020(左)"),this.addFrameMember(C,N,new E(L,ee,-n/2+10),y,"背面・補強2020(右)"),this.recordPart(Ve("2020",N,l,!1,!0),N,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(C,N,new E(0,ee,-n/2+10),y,"背面・中央補強2020"),this.recordPart(Ve("2020",N,l,!1,!0),N,1,"背面 中央補強 (2分割)","frame"))}this.addFrameMember("2040",N,new E(-t/2+10,ee,n/2-20),y,"柱・手前左2040"),this.addFrameMember("2040",N,new E(t/2-10,ee,n/2-20),y,"柱・手前右2040"),this.recordPart(Ve("2040",N,l),N,2,"柱・正面枠囲い (2040・奥行40mm)","frame");const te=O+r+10,K=Math.max(10,t-40),D=Tt("2040",l),oe=`${D}-${K}`;this.addFrameMember("2040",K,new E(0,te,n/2-20),Ae,"正面・中桟2040 (前窓上・横向き枠囲いレール受)"),this.recordPart(oe,K,1,"正面中桟 2040横向き (前窓上・枠囲い扉レール受)","frame",{partCode:D,lengthMm:K,unitType:"m"});const Q=v||t>940,re=this.params.panelConfig||{};let ne=!1;if(Q){const C=!!(re.topLeft&&re.topLeft.startsWith("mesh")),S=!!(re.topRight&&re.topRight.startsWith("mesh"));ne=C||S}else ne=!!(re.top&&re.top.startsWith("mesh"));const xe=x&&ne;if(I){const C=xe?"AFS-2040-5":Tt("2040",l),S=`${C}-${z}`,F=xe?"天面 左右通し (2040・天面金網受用・AFS-2040-5)":"天面 左右通し (2040・前後3mm短縮・キャップ取付)";this.addFrameMember("2040",z,new E(-t/2+10,s-20,0),w,"天面・左2040 (外周幅広)"),this.addFrameMember("2040",z,new E(t/2-10,s-20,0),w,"天面・右2040 (外周幅広)"),this.recordPart(S,z,2,F,"frame",{partCode:C,lengthMm:z,unitType:"m"})}else{const C=xe?"AFS-2020-5":Tt("2020",l),S=`${C}-${z}`,F=xe?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",z,new E(-t/2+10,s-10,0),w,"天面・左2020"),this.addFrameMember("2020",z,new E(t/2-10,s-10,0),w,"天面・右2020"),this.recordPart(S,z,2,F,"frame",{partCode:C,lengthMm:z,unitType:"m"})}const _e=Math.max(10,t-40);if(I){const C=xe?"AFS-2040-5":Tt("2040",l),S=`${C}-${_e}`,F=xe?"天面 背面 (2040・天面金網受用・AFS-2040-5)":"天面 背面 2040 (外周幅広)";this.addFrameMember("2040",_e,new E(0,s-20,-n/2+10),R,"天面・背面2040 (外周幅広)"),this.recordPart(S,_e,1,F,"frame",{partCode:C,lengthMm:_e,unitType:"m"})}else{const C=xe?"AFS-2020-5":Tt("2020",l),S=`${C}-${_e}`,F=xe?"天面 背面 (天面金網受用・AFS-2020-5)":"天面 背面";this.addFrameMember("2020",_e,new E(0,s-10,-n/2+10),R,"天面・背面2020"),this.recordPart(S,_e,1,F,"frame",{partCode:C,lengthMm:_e,unitType:"m"})}if(I)this.addFrameMember("4040",me,new E(0,s-20,n/2-20),R,"天面・正面4040 (枠囲い上部・幅広)"),this.recordPart(Ve("4040",me,l),me,1,"正面上部 40x40枠囲い (AFS-4040-4)","frame");else{const C=xe?"AFS-2040-5":Tt("2040",l),S=`${C}-${me}`,F=xe?"正面上部 2040横向き (天面金網受用・AFS-2040-5)":"正面上部 2040横向き (奥行40mm・AFS-2040-4)";this.addFrameMember("2040",me,new E(0,s-10,n/2-20),Ae,"天面・手前2040 (横向き枠囲い上部)"),this.recordPart(S,me,1,F,"frame",{partCode:C,lengthMm:me,unitType:"m"})}if(v||t>940){const C=Math.max(10,n-60),S=xe?"AFS-2020-5":Tt("2020",l,!1,!0),F=`${S}-${C}`,H=xe?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割・D-60mm)",W=x&&!xe?"2020_flat":"2020";this.addFrameMember(W,C,new E(0,s-10,-10),w,"天面・中央補強2020",null,"bottom"),this.recordPart(F,C,1,H,"frame",{partCode:S,lengthMm:C,unitType:"m"})}}else if(o==="A"||o==="A_FRONT"){const he=Math.max(10,s-O-Y),Ae=O+he/2;B?(this.addFrameMember("2040",z,new E(-t/2+10,20,0),w,"床・左2040 (外周幅広)"),this.addFrameMember("2040",z,new E(t/2-10,20,0),w,"床・右2040 (外周幅広)"),this.recordPart(Ve("2040",z,l),z,2,"床面 左右通し (2040・前後3mm短縮・キャップ取付)","frame")):(this.addFrameMember("2020",z,new E(-t/2+10,10,0),w,"床・左2020"),this.addFrameMember("2020",z,new E(t/2-10,10,0),w,"床・右2020"),this.recordPart(Ve("2020",z,l),z,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame"));const me=Math.max(10,t-40),Ee=this.params.frontWideFrame||"2x";Ee==="3x"?l==="black"?(this.addFrameMember("2040",me,new E(0,20,n/2-10),R,"床・正面2040 (3倍幅下段)"),this.recordPart(Ve("2040",me,"black"),me,1,"床面 正面 3倍幅下段 (40mm幅・ブラック)","frame"),this.addFrameMember("2020",me,new E(0,50,n/2-10),R,"床・正面2020 (3倍幅上段)"),this.recordPart(Ve("2020",me,"black"),me,1,"床面 正面 3倍幅上段 (20mm幅・ブラック2段構成)","frame")):(this.addFrameMember("2060",me,new E(0,30,n/2-10),R,"床・正面2060 (3倍幅)"),this.recordPart(Ve("2060",me,"silver"),me,1,"床面 正面 3倍幅 (AFS-2060-4)","frame")):Ee==="2x"?(this.addFrameMember("2040",me,new E(0,20,n/2-10),R,"床・正面2040 (2倍幅)"),this.recordPart(Ve("2040",me,l),me,1,"床面 正面 2倍幅 (AFS-2040・内側)","frame")):(this.addFrameMember("2020",me,new E(0,10,n/2-10),R,"床・正面2020 (標準幅)"),this.recordPart(Ve("2020",me,l),me,1,"床面 正面 (標準2020)","frame"));const te=Math.max(10,t-40);if(B?(this.addFrameMember("2040",te,new E(0,20,-n/2+10),R,"床・背面2040 (外周幅広)"),this.recordPart(Ve("2040",te,l),te,1,"床面 背面 2040 (外周幅広)","frame")):(this.addFrameMember("2020",te,new E(0,10,-n/2+10),R,"床・背面2020"),this.recordPart(Ve("2020",te,l),te,1,"床面 背面","frame")),f){const _e=Math.max(10,n-40),C=x?"2020_flat":"2020";m===3?(this.addFrameMember(C,_e,new E(U,10,0),w,"床・補強2020(左)",null,"top"),this.addFrameMember(C,_e,new E(L,10,0),w,"床・補強2020(右)",null,"top"),this.recordPart(Ve("2020",_e,l,!1,!0),_e,2,"床面 補強フレーム (3分割)","frame")):(this.addFrameMember(C,_e,new E(0,10,0),w,"床・中央補強2020",null,"top"),this.recordPart(Ve("2020",_e,l,!1,!0),_e,1,"床面 中央補強 (2分割)","frame"))}const K=A?he:N,D=A?Ae:ee;if(G?(this.addFrameMember("2040",K,new E(-t/2+10,D,n/2-20),y,"柱・手前左2040 (外周幅広)"),this.addFrameMember("2040",K,new E(t/2-10,D,n/2-20),y,"柱・手前右2040 (外周幅広)"),this.addFrameMember("2040",K,new E(-t/2+10,D,-n/2+20),y,"柱・奥左2040 (外周幅広)"),this.addFrameMember("2040",K,new E(t/2-10,D,-n/2+20),y,"柱・奥右2040 (外周幅広)"),this.recordPart(Ve("2040",K,l),K,4,"柱 (4隅・2040・奥行40mm)","frame")):(this.addFrameMember("2020",K,new E(-t/2+10,D,n/2-10),y,"柱・手前左"),this.addFrameMember("2020",K,new E(t/2-10,D,n/2-10),y,"柱・手前右"),this.addFrameMember("2020",K,new E(-t/2+10,D,-n/2+10),y,"柱・奥左"),this.addFrameMember("2020",K,new E(t/2-10,D,-n/2+10),y,"柱・奥右"),this.recordPart(Ve("2020",K,l),K,4,"柱 (4隅・床奥行き乗せ)","frame")),p){const _e=x?"2020_flat":"2020";_===3?(this.addFrameMember(_e,K,new E(U,D,-n/2+10),y,"背面・補強2020(左)"),this.addFrameMember(_e,K,new E(L,D,-n/2+10),y,"背面・補強2020(右)"),this.recordPart(Ve("2020",K,l,!1,!0),K,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(_e,K,new E(0,D,-n/2+10),y,"背面・中央補強2020"),this.recordPart(Ve("2020",K,l,!1,!0),K,1,"背面 中央補強 (2分割)","frame"))}const oe=v||t>940,Q=this.params.panelConfig||{};let re=!1;if(oe){const _e=!!(Q.topLeft&&Q.topLeft.startsWith("mesh")),C=!!(Q.topRight&&Q.topRight.startsWith("mesh"));re=_e||C}else re=!!(Q.top&&Q.top.startsWith("mesh"));const ne=x&&re;if(I){const _e=ne?"AFS-2040-5":Tt("2040",l),C=`${_e}-${z}`,S=ne?"天面 左右通し (2040・天面金網受用・AFS-2040-5)":"天面 左右通し (2040・前後3mm短縮・キャップ取付)";this.addFrameMember("2040",z,new E(-t/2+10,s-20,0),w,"天面・左2040 (外周幅広)"),this.addFrameMember("2040",z,new E(t/2-10,s-20,0),w,"天面・右2040 (外周幅広)"),this.recordPart(C,z,2,S,"frame",{partCode:_e,lengthMm:z,unitType:"m"})}else{const _e=ne?"AFS-2020-5":Tt("2020",l),C=`${_e}-${z}`,S=ne?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",z,new E(-t/2+10,s-10,0),w,"天面・左2020"),this.addFrameMember("2020",z,new E(t/2-10,s-10,0),w,"天面・右2020"),this.recordPart(C,z,2,S,"frame",{partCode:_e,lengthMm:z,unitType:"m"})}const xe=Math.max(10,t-40);if(I){const _e=ne?"AFS-2040-5":Tt("2040",l),C=`${_e}-${xe}`,S=ne?"天面 前後 (2040・天面金網受用・AFS-2040-5)":"天面 前後 (2040・外周幅広)";this.addFrameMember("2040",xe,new E(0,s-20,-n/2+10),R,"天面・背面2040 (外周幅広)"),this.addFrameMember("2040",xe,new E(0,s-20,n/2-10),R,"天面・手前2040 (外周幅広)"),this.recordPart(C,xe,2,S,"frame",{partCode:_e,lengthMm:xe,unitType:"m"})}else{const _e=ne?"AFS-2020-5":Tt("2020",l),C=`${_e}-${xe}`,S=ne?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";this.addFrameMember("2020",xe,new E(0,s-10,-n/2+10),R,"天面・背面2020"),this.addFrameMember("2020",xe,new E(0,s-10,n/2-10),R,"天面・手前2020"),this.recordPart(C,xe,2,S,"frame",{partCode:_e,lengthMm:xe,unitType:"m"})}if(v||t>940){const _e=Math.max(10,n-40),C=ne?"AFS-2020-5":Tt("2020",l,!1,!0),S=`${C}-${_e}`,F=ne?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",H=x&&!ne?"2020_flat":"2020";this.addFrameMember(H,_e,new E(0,s-10,0),w,"天面・中央補強2020",null,"bottom"),this.recordPart(S,_e,1,F,"frame",{partCode:C,lengthMm:_e,unitType:"m"})}}else{B?(this.addFrameMember("2040",z,new E(-t/2+10,20,0),w,"床・左2040 (外周幅広)"),this.addFrameMember("2040",z,new E(t/2-10,20,0),w,"床・右2040 (外周幅広)"),this.recordPart(Ve("2040",z,l),z,2,"床面 左右通し (2040・前後3mm短縮・キャップ取付)","frame")):(this.addFrameMember("2020",z,new E(-t/2+10,10,0),w,"床・左2020"),this.addFrameMember("2020",z,new E(t/2-10,10,0),w,"床・右2020"),this.recordPart(Ve("2020",z,l),z,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame"));const he=Math.max(10,t-40);if(B?(this.addFrameMember("2040",he,new E(0,20,n/2-10),R,"床・手前2040 (外周幅広)"),this.recordPart(Ve("2040",he,l),he,1,"床面 正面 2040 (外周幅広)","frame"),this.addFrameMember("2040",he,new E(0,20,-n/2+10),R,"床・背面2040 (外周幅広)"),this.recordPart(Ve("2040",he,l),he,1,"床面 背面 2040 (外周幅広)","frame")):(this.addFrameMember("2020",he,new E(0,10,n/2-10),R,"床・手前2020"),this.addFrameMember("2020",he,new E(0,10,-n/2+10),R,"床・背面2020"),this.recordPart(Ve("2020",he,l),he,2,"床面 前後","frame")),f){const re=Math.max(10,n-40),ne=x?"2020_flat":"2020";m===3?(this.addFrameMember(ne,re,new E(U,10,0),w,"床・補強2020(左)",null,"top"),this.addFrameMember(ne,re,new E(L,10,0),w,"床・補強2020(右)",null,"top"),this.recordPart(Ve("2020",re,l,!1,!0),re,2,"床面 補強フレーム (3分割)","frame")):(this.addFrameMember(ne,re,new E(0,10,0),w,"床・中央補強2020",null,"top"),this.recordPart(Ve("2020",re,l,!1,!0),re,1,"床面 中央補強 (2分割)","frame"))}if(G?(this.addFrameMember("2040",N,new E(-t/2+10,ee,n/2-20),y,"柱・手前左2040 (外周幅広)"),this.addFrameMember("2040",N,new E(t/2-10,ee,n/2-20),y,"柱・手前右2040 (外周幅広)"),this.addFrameMember("2040",N,new E(-t/2+10,ee,-n/2+20),y,"柱・奥左2040 (外周幅広)"),this.addFrameMember("2040",N,new E(t/2-10,ee,-n/2+20),y,"柱・奥右2040 (外周幅広)"),this.recordPart(Ve("2040",N,l),N,4,"柱 (4隅・2040・奥行40mm)","frame")):(this.addFrameMember("2020",N,new E(-t/2+10,ee,n/2-10),y,"柱・手前左"),this.addFrameMember("2020",N,new E(t/2-10,ee,n/2-10),y,"柱・手前右"),this.addFrameMember("2020",N,new E(-t/2+10,ee,-n/2+10),y,"柱・奥左"),this.addFrameMember("2020",N,new E(t/2-10,ee,-n/2+10),y,"柱・奥右"),this.recordPart(Ve("2020",N,l),N,4,"柱 (4隅)","frame")),p){const re=x?"2020_flat":"2020";_===3?(this.addFrameMember(re,N,new E(U,ee,-n/2+10),y,"背面・補強2020(左)"),this.addFrameMember(re,N,new E(L,ee,-n/2+10),y,"背面・補強2020(右)"),this.recordPart(Ve("2020",N,l,!1,!0),N,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(re,N,new E(0,ee,-n/2+10),y,"背面・中央補強2020"),this.recordPart(Ve("2020",N,l,!1,!0),N,1,"背面 中央補強 (2分割)","frame"))}const Ae=v||t>940,me=this.params.panelConfig||{};let Ee=!1;if(Ae){const re=!!(me.topLeft&&me.topLeft.startsWith("mesh")),ne=!!(me.topRight&&me.topRight.startsWith("mesh"));Ee=re||ne}else Ee=!!(me.top&&me.top.startsWith("mesh"));const te=x&&Ee;if(I){const re=te?"AFS-2040-5":Tt("2040",l),ne=`${re}-${z}`,xe=te?"天面 左右通し (2040・天面金網受用・AFS-2040-5)":"天面 左右通し (2040・前後3mm短縮・キャップ取付)";this.addFrameMember("2040",z,new E(-t/2+10,s-20,0),w,"天面・左2040 (外周幅広)"),this.addFrameMember("2040",z,new E(t/2-10,s-20,0),w,"天面・右2040 (外周幅広)"),this.recordPart(ne,z,2,xe,"frame",{partCode:re,lengthMm:z,unitType:"m"})}else{const re=te?"AFS-2020-5":Tt("2020",l),ne=`${re}-${z}`,xe=te?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",z,new E(-t/2+10,s-10,0),w,"天面・左2020"),this.addFrameMember("2020",z,new E(t/2-10,s-10,0),w,"天面・右2020"),this.recordPart(ne,z,2,xe,"frame",{partCode:re,lengthMm:z,unitType:"m"})}const K=Math.max(10,t-40);if(I){const re=te?"AFS-2040-5":Tt("2040",l),ne=`${re}-${K}`,xe=te?"天面 前後 (2040・天面金網受用・AFS-2040-5)":"天面 前後 (2040・外周幅広)";this.addFrameMember("2040",K,new E(0,s-20,-n/2+10),R,"天面・背面2040 (外周幅広)"),this.addFrameMember("2040",K,new E(0,s-20,n/2-10),R,"天面・手前2040 (外周幅広)"),this.recordPart(ne,K,2,xe,"frame",{partCode:re,lengthMm:K,unitType:"m"})}else{const re=te?"AFS-2020-5":Tt("2020",l),ne=`${re}-${K}`,xe=te?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";this.addFrameMember("2020",K,new E(0,s-10,-n/2+10),R,"天面・背面2020"),this.addFrameMember("2020",K,new E(0,s-10,n/2-10),R,"天面・手前2020"),this.recordPart(ne,K,2,xe,"frame",{partCode:re,lengthMm:K,unitType:"m"})}if(v||t>940){const re=Math.max(10,n-40),ne=te?"AFS-2020-5":Tt("2020",l,!1,!0),xe=`${ne}-${re}`,_e=te?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",C=x&&!te?"2020_flat":"2020";this.addFrameMember(C,re,new E(0,s-10,0),w,"天面・中央補強2020",null,"bottom"),this.recordPart(xe,re,1,_e,"frame",{partCode:ne,lengthMm:re,unitType:"m"})}const D=O+r+10,oe=Math.max(10,t-40),Q=x?"2020_flat":"2020";this.addFrameMember(Q,oe,new E(0,D,n/2-10),R,"正面・中桟2020",null,"right"),this.recordPart(Ve("2020",oe,l,!1,!0),oe,1,"正面 中桟 (レール受け)","frame")}const ae=new Rt(0,0,Math.PI/2),ge=x?this.materials.perchGrayCap:this.materials.endCapMaterial,Ce=B?20:10,Be=[{x:-t/2+10,y:Ce,z:n/2-1.5},{x:t/2-10,y:Ce,z:n/2-1.5},{x:-t/2+10,y:Ce,z:-n/2+1.5},{x:t/2-10,y:Ce,z:-n/2+1.5}];for(const he of Be)B?this.addEndCap2040(he.x,he.y,he.z,ae,ge):this.addEndCap(he.x,he.y,he.z);const j=I?s-20:s-10,le=[{x:-t/2+10,y:j,z:n/2-1.5},{x:t/2-10,y:j,z:n/2-1.5},{x:-t/2+10,y:j,z:-n/2+1.5},{x:t/2-10,y:j,z:-n/2+1.5}];for(const he of le)I?this.addEndCap2040(he.x,he.y,he.z,ae,ge):this.addEndCap(he.x,he.y,he.z);const Me=(B?4:0)+(I?4:0),pe=8-Me;if(pe>0){const he=x?"ECP-2020-4-GY":"ECP-2020-4";this.recordPart(he,"-",pe,"奥行きフレーム端部 (2020用)","frame",{partCode:he,lengthMm:null,unitType:"piece"})}if(Me>0){const he=x?"ECP-2040-4-GY":"ECP-2040-4";this.recordPart(he,"-",Me,"奥行きフレーム端部 (2040幅広用)","frame",{partCode:he,lengthMm:null,unitType:"piece"})}if(a){const he=o==="A_FRAMED"||o==="C_FRAMED",Ae=Math.max(10,G?n-80:he?n-60:n-40),me=G?0:he?-10:0,Ee=h,te=Math.max(10,s-O-Y-20-Ee),K=O+te+10,D=x?"2020_flat":"2020";this.addFrameMember(D,Ae,new E(-t/2+10,K,me),w,"側面補強・左2020",null,"right"),this.addFrameMember(D,Ae,new E(t/2-10,K,me),w,"側面補強・右2020",null,"left");const oe=G?" (D-80mm・外周幅広)":he?" (D-60mm)":"";this.recordPart(Ve("2020",Ae,l,!1,!0),Ae,2,`側面 補強フレーム (左右${oe})`,"frame")}this.buildPanels(R,w),this.buildDoors(),this.buildDoorPartsRecord(),this.params.footType==="caster"?this.buildCasters():this.buildFeet(),this.params.hasPerch&&this.buildPerch(),this.buildCaulking(),this.params.hasRubberPacking&&this.buildRubberPacking(),this.params.hasRoomDivider&&this.buildRoomDivider(),this.params.ledType&&this.params.ledType!=="none"&&this.buildLed(),this.panelGroup.visible=c,this.doorGroup.visible=c,this.caulkingGroup.visible=c,this.rubberPackingGroup.visible=c,this.dividerGroup.visible=c,this.ledGroup.visible=!0}buildPanels(e,t){const{W:n,D:s,H:o,cageType:r,frontWindowH:a,hasSideReinforcement:h,sideOpeningH:c,hasFloorReinforcement:l,floorSplitCount:f,hasBackReinforcement:m,backSplitCount:p,hasTopReinforcement:_,frameColor:v}=this.params,g=this.params.panelConfig||{},d=3,T=g.floor||"acrylic",x=g.back||"acrylic",M=g.side||"acrylic",U=g.sideUpper||"punching",L=g.sideLower||"acrylic",w=g.top||"punching",R=g.topLeft||"punching",y=g.topRight||"punching",b=(n-80)/3,A=-n/2+30+b,B=n/2-30-b,I=r==="A_FRAMED"||r==="C_FRAMED",G=I?s-50:s-30,O=I?-10:0,Y=T==="black_matte",z=T==="smoke_gray";let N=this.materials.acrylic,ee="透明アクリル 3.0mm 底板",ae="acrylic_extrusion_3_0";if(Y?(N=this.materials.blackMatteAcrylic,ee="アクリル黒両面マット 3.0mm 底板",ae="acrylic_black_matte_3_0"):z&&(N=this.materials.smokeGrayAcrylic,ee="アクリル グレースモーク半透明 3.0mm 底板",ae="acrylic_smoke_gray_3_0"),l)if(f===3){const F=(n-80)/3,H=Math.round(F+10),W=new $e(H,d,G);this.activeGeometries.push(W);const $=new Z(W,N);$.position.set(-n/2+20+F/2,20-d/2,O),this.panelGroup.add($);const de=new Z(W,N);de.position.set(0,20-d/2,O),this.panelGroup.add(de);const fe=new Z(W,N);fe.position.set(n/2-20-F/2,20-d/2,O),this.panelGroup.add(fe),this.recordPart(ee,`${H} x ${G} mm`,3,"床面 (3分割)","panel",{panelCode:ae,partCode:ae,widthMm:H,heightMm:G,unitType:"m2"})}else{const F=(n-60)/2,H=Math.round(F+10),W=new $e(H,d,G);this.activeGeometries.push(W);const $=new Z(W,N);$.position.set(-F/2-10,20-d/2,O),this.panelGroup.add($);const de=new Z(W,N);de.position.set(F/2+10,20-d/2,O),this.panelGroup.add(de),this.recordPart(ee,`${H} x ${G} mm`,2,"床面 (2分割)","panel",{panelCode:ae,partCode:ae,widthMm:H,heightMm:G,unitType:"m2"})}else{const F=n-30,H=new $e(F,d,G);this.activeGeometries.push(H);const W=new Z(H,N);W.position.set(0,20-d/2,O),this.panelGroup.add(W),this.recordPart(ee,`${F} x ${G} mm`,1,"床面 (1枚)","panel",{panelCode:ae,partCode:ae,widthMm:F,heightMm:G,unitType:"m2"})}if(this.params.hasFloorHeaterSupport){const F=v==="black"?"ブラック":"ホワイト",H=2,W=4;if(l&&f===3){const $=(n-80)/3,de=Math.round($+20),fe=s-2,ve=80,Se=80,q=new mt;q.moveTo(ve,-fe/2),q.lineTo(de,-fe/2),q.lineTo(de,fe/2),q.lineTo(ve,fe/2),q.lineTo(0,fe/2-Se),q.lineTo(0,-fe/2+Se),q.closePath();const ue={depth:H,bevelEnabled:!1},Te=new ft(q,ue);Te.rotateX(Math.PI/2),this.activeGeometries.push(Te);const Pe=new Z(Te,this.materials.acrylic);Pe.position.set(-n/2+1,0,0),Pe.castShadow=!0,this.panelGroup.add(Pe);const be=Te.clone();be.rotateY(Math.PI),this.activeGeometries.push(be);const Ie=new Z(be,this.materials.acrylic);Ie.position.set(n/2-1,0,0),Ie.castShadow=!0,this.panelGroup.add(Ie);const Fe=Math.round($+20),Oe=new mt,k=Fe/2,ye=fe/2;Oe.moveTo(-k,-ye),Oe.lineTo(k,-ye),Oe.lineTo(k,ye),Oe.lineTo(-k,ye),Oe.closePath();const J=new ft(Oe,ue);J.rotateX(Math.PI/2),this.activeGeometries.push(J);const ce=new Z(J,this.materials.acrylic);ce.position.set(0,0,0),ce.castShadow=!0,this.panelGroup.add(ce);const Le=[{x:-n/2+10,z:-s/2+90},{x:-n/2+90,z:-s/2+10},{x:-n/2+10,z:s/2-90},{x:-n/2+90,z:s/2-10},{x:A,z:-s/2+90},{x:A,z:s/2-90},{x:A,z:-s/4},{x:A,z:s/4},{x:0,z:-s/2+10},{x:0,z:s/2-10},{x:B,z:-s/4},{x:B,z:s/4},{x:n/2-10,z:s/2-90},{x:n/2-90,z:s/2-10},{x:n/2-10,z:-s/2+90},{x:n/2-90,z:-s/2+10},{x:B,z:-s/2+90},{x:B,z:s/2-90}];for(const ri of Le)this.addBottomThumbScrew(ri.x,-H,ri.z);const De=Math.max(10,Math.round($-10)),Xe=Math.max(10,Math.round((I?s-60:s-40)-10)),{map:ot,bumpMap:Dt}=jo(De,Xe);this.activeTextures.push(ot,Dt);const et=this.materials.createPolycaMaterial(ot,Dt);this.activeMaterials.push(et);const qt=new $e(De,W,Xe);this.activeGeometries.push(qt);const Rn=new Z(qt,et);Rn.position.set(-n/2+20+$/2,W/2,O),this.panelGroup.add(Rn);const Oo=new Z(qt,et);Oo.position.set(0,W/2,O),this.panelGroup.add(Oo);const ko=new Z(qt,et);ko.position.set(n/2-20-$/2,W/2,O),this.panelGroup.add(ko),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${de} x ${fe} mm`,3,"床面外側固定 (3分割用・左右2枚+中央1枚・計3枚)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:de,heightMm:fe,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${De} x ${Xe} mm`,3,"床下パネルヒータ緩衝用 (間口-10mm・3枚)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:De,heightMm:Xe,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${F})`,"外径φ15mm / M4 (手締め・工具不要)",18,"床下パネルヒータ支え板 固定用 (計18箇所)","other")}else if(l){const $=Math.round(n/2+9),de=s-2,fe=80,ve=80,Se=20,q=Math.max(10,de-180),ue=new mt;ue.moveTo(fe,-de/2),ue.lineTo($,-de/2),ue.lineTo($,de/2-q),ue.lineTo($-Se,de/2-q),ue.lineTo($-Se,de/2),ue.lineTo(fe,de/2),ue.lineTo(0,de/2-ve),ue.lineTo(0,-de/2+ve),ue.closePath();const Te={depth:H,bevelEnabled:!1},Pe=new ft(ue,Te);Pe.rotateX(Math.PI/2),this.activeGeometries.push(Pe);const be=new Z(Pe,this.materials.acrylic);be.position.set(-n/2+1,0,0),be.castShadow=!0,this.panelGroup.add(be);const Ie=Pe.clone();Ie.rotateY(Math.PI),this.activeGeometries.push(Ie);const Fe=new Z(Ie,this.materials.acrylic);Fe.position.set(n/2-1,0,0),Fe.castShadow=!0,this.panelGroup.add(Fe);const Oe=[{x:-n/2+10,z:-s/2+90},{x:-n/2+90,z:-s/2+10},{x:-n/2+10,z:s/2-90},{x:-n/2+90,z:s/2-10},{x:0,z:-s/2+90},{x:-80,z:-s/2+10},{x:-80,z:s/2-10},{x:n/2-10,z:s/2-90},{x:n/2-90,z:s/2-10},{x:n/2-10,z:-s/2+90},{x:n/2-90,z:-s/2+10},{x:0,z:s/2-90},{x:80,z:s/2-10},{x:80,z:-s/2+10}];for(const et of Oe)this.addBottomThumbScrew(et.x,-H,et.z);const k=(n-60)/2,ye=Math.max(10,Math.round(k-10)),J=Math.max(10,Math.round((I?s-60:s-40)-10)),{map:ce,bumpMap:Le}=jo(ye,J);this.activeTextures.push(ce,Le);const De=this.materials.createPolycaMaterial(ce,Le);this.activeMaterials.push(De);const Xe=new $e(ye,W,J);this.activeGeometries.push(Xe);const ot=new Z(Xe,De);ot.position.set(-k/2-10,W/2,O),this.panelGroup.add(ot);const Dt=new Z(Xe,De);Dt.position.set(k/2+10,W/2,O),this.panelGroup.add(Dt),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${$} x ${de} mm`,2,"床面外側固定 (2枚互い違い配置・斜めカット各2箇所・切欠き各1箇所・φ6穴各7箇所)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:$,heightMm:de,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${ye} x ${J} mm`,2,"床下パネルヒータ緩衝用 (間口-10mm・2枚)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:ye,heightMm:J,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${F})`,"外径φ15mm / M4 (手締め・工具不要)",14,"床下パネルヒータ支え板 固定用 (計14箇所)","other")}else{const $=n-2,de=s-2,fe=80,ve=new mt,Se=$/2,q=de/2;ve.moveTo(-Se+fe,-q),ve.lineTo(Se-fe,-q),ve.lineTo(Se,-q+fe),ve.lineTo(Se,q-fe),ve.lineTo(Se-fe,q),ve.lineTo(-Se+fe,q),ve.lineTo(-Se,q-fe),ve.lineTo(-Se,-q+fe),ve.closePath();const ue={depth:H,bevelEnabled:!1},Te=new ft(ve,ue);Te.rotateX(Math.PI/2),this.activeGeometries.push(Te);const Pe=new Z(Te,this.materials.acrylic);Pe.position.set(0,0,0),Pe.castShadow=!0,this.panelGroup.add(Pe);const be=[{x:-Se+90,z:-q+9},{x:-Se+9,z:-q+90},{x:Se-90,z:-q+9},{x:Se-9,z:-q+90},{x:-Se+90,z:q-9},{x:-Se+9,z:q-90},{x:Se-90,z:q-9},{x:Se-9,z:q-90},{x:0,z:-q+9},{x:0,z:q-9}];for(const Le of be)this.addBottomThumbScrew(Le.x,-H,Le.z);const Ie=Math.max(10,Math.round(n-40-10)),Fe=Math.max(10,Math.round((I?s-60:s-40)-10)),{map:Oe,bumpMap:k}=jo(Ie,Fe);this.activeTextures.push(Oe,k);const ye=this.materials.createPolycaMaterial(Oe,k);this.activeMaterials.push(ye);const J=new $e(Ie,W,Fe);this.activeGeometries.push(J);const ce=new Z(J,ye);ce.position.set(0,W/2,O),this.panelGroup.add(ce),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${$} x ${de} mm`,1,"床面外側固定 (4隅斜めカット80mm・φ6穴10箇所)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:$,heightMm:de,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${Ie} x ${Fe} mm`,1,"床下パネルヒータ緩衝用 (間口-10mm)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:Ie,heightMm:Fe,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${F})`,"外径φ15mm / M4 (手締め・工具不要)",10,"床下パネルヒータ支え板 固定用 (計10箇所)","other")}}const ge=r==="A"||r==="A_FRAMED"||r==="C"||r==="C_FRAMED",Ce=ge&&!!this.params.hasBottomWideFrame,Be=ge&&!!this.params.hasTopWideFrame,j=Ce&&Be,le=Ce?40:20,Me=Be?40:20,pe=ge?Math.round(o-le-Me+10):o-30,he=ge?le+(o-le-Me)/2:o/2;let Ae=1,me=n-30,Ee=[0],te="";if(m)if(p===3){Ae=3;const F=(n-80)/3;me=Math.round(F+10),Ee=[-n/2+20+F/2,0,n/2-20-F/2],te=" (3分割)"}else{Ae=2;const F=(n-60)/2;me=Math.round(F+10),Ee=[-F/2-10,F/2+10],te=" (2分割)"}if(x==="punching"){const F=sa(me,pe,!1);this.activeTextures.push(F);const H=this.materials.createPunchingMaterial(F);this.activeMaterials.push(H);const W=new ui(me,pe);this.activeGeometries.push(W);for(const $ of Ee){const de=new Z(W,H);de.position.set($,he,-s/2+10),this.panelGroup.add(de)}this.recordPart("塩ビパンチングボード 透明 3.0mm 背板",`${me} x ${pe} mm`,Ae,`背面 (通気パネル・φ3.1-P7${te})`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:me,heightMm:pe,unitType:"m2"})}else if(x==="polyca"){const{map:F,bumpMap:H}=jo(me,pe);this.activeTextures.push(F,H);const W=this.materials.createPolycaMaterial(F,H);this.activeMaterials.push(W);const $=new $e(me,pe,4);this.activeGeometries.push($);for(const de of Ee){const fe=new Z($,W);fe.position.set(de,he,-s/2+10),this.panelGroup.add(fe)}this.recordPart("中空ポリカ 4.0mm 背板",`${me} x ${pe} mm`,Ae,`背面 (中空ポリカ・横筋${te})`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:me,heightMm:pe,unitType:"m2"})}else if(x==="black_matte"){const F=new $e(me,pe,d);this.activeGeometries.push(F);for(const H of Ee){const W=new Z(F,this.materials.blackMatteAcrylic);W.position.set(H,he,-s/2+10),this.panelGroup.add(W)}this.recordPart("アクリル黒両面マット 3.0mm 背板",`${me} x ${pe} mm`,Ae,`背面${te}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:me,heightMm:pe,unitType:"m2"})}else if(x==="smoke_gray"){const F=new $e(me,pe,d);this.activeGeometries.push(F);for(const H of Ee){const W=new Z(F,this.materials.smokeGrayAcrylic);W.position.set(H,he,-s/2+10),this.panelGroup.add(W)}this.recordPart("アクリル グレースモーク半透明 3.0mm 背板",`${me} x ${pe} mm`,Ae,`背面${te}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:me,heightMm:pe,unitType:"m2"})}else{const F=new $e(me,pe,d);this.activeGeometries.push(F);for(const H of Ee){const W=new Z(F,this.materials.acrylic);W.position.set(H,he,-s/2+10),this.panelGroup.add(W)}this.recordPart("透明アクリル 3.0mm 背板",`${me} x ${pe} mm`,Ae,`背面${te}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:me,heightMm:pe,unitType:"m2"})}const K=_||n>940,D=!K&&w==="punching",oe=K&&R==="punching"&&y==="punching";let Q="back_top_2";if(D?Q="top_single_2":oe&&(Q="top_split_4"),Q==="back_top_2"){const F=o-Me-35,H=-s/2+10,W=new Ke(19,19,4.5,32);W.rotateX(Math.PI/2),this.activeGeometries.push(W);const $=-(n-40)/2+35,de=(n-40)/2-35,fe=new Z(W,this.materials.grommetMaterial);fe.position.set($,F,H),this.panelGroup.add(fe);const ve=new Z(W,this.materials.grommetMaterial);ve.position.set(de,F,H),this.panelGroup.add(ve);const Se=K?"背面板 上部左右2箇所 (天面仕様・端から35mm)":"背面板 上部左右 (端から35mm)";this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,Se,"other")}const re=j?s-70:I?s-50:s-30,ne=j?0:I?-10:0,xe=(F,H,W,$,de)=>{const fe=de?`${de}・`:"",ve=de?`${de} `:"";if($==="punching"){const Se=sa(F,H,!1);this.activeTextures.push(Se);const q=this.materials.createPunchingMaterial(Se);this.activeMaterials.push(q);const ue=new ui(F,H);ue.rotateY(Math.PI/2),this.activeGeometries.push(ue);const Te=new Z(ue,q);Te.position.set(-n/2+10,W,ne),this.panelGroup.add(Te);const Pe=new Z(ue,q);Pe.position.set(n/2-10,W,ne),this.panelGroup.add(Pe),this.recordPart(`塩ビパンチングボード 透明 3.0mm 側板 (${fe}φ3.1-P7)`,`${F} x ${H} mm`,2,`左右側面 ${ve}(通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:F,heightMm:H,unitType:"m2"})}else if($==="polyca"){const{map:Se,bumpMap:q}=jo(F,H);this.activeTextures.push(Se,q);const ue=this.materials.createPolycaMaterial(Se,q);this.activeMaterials.push(ue);const Te=new $e(4,H,F);this.activeGeometries.push(Te);const Pe=new Z(Te,ue);Pe.position.set(-n/2+10,W,ne),this.panelGroup.add(Pe);const be=new Z(Te,ue);be.position.set(n/2-10,W,ne),this.panelGroup.add(be),this.recordPart(`中空ポリカ 4.0mm 側板 (${fe}奥行筋)`,`${F} x ${H} mm`,2,`左右側面 ${ve}(中空ポリカ)`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:F,heightMm:H,unitType:"m2"})}else if($==="black_matte"){const Se=new $e(d,H,F);this.activeGeometries.push(Se);const q=new Z(Se,this.materials.blackMatteAcrylic);q.position.set(-n/2+10,W,ne),this.panelGroup.add(q);const ue=new Z(Se,this.materials.blackMatteAcrylic);ue.position.set(n/2-10,W,ne),this.panelGroup.add(ue),this.recordPart(`アクリル黒両面マット 3.0mm 側板 (${fe})`,`${F} x ${H} mm`,2,`左右側面 ${ve}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:F,heightMm:H,unitType:"m2"})}else if($==="smoke_gray"){const Se=new $e(d,H,F);this.activeGeometries.push(Se);const q=new Z(Se,this.materials.smokeGrayAcrylic);q.position.set(-n/2+10,W,ne),this.panelGroup.add(q);const ue=new Z(Se,this.materials.smokeGrayAcrylic);ue.position.set(n/2-10,W,ne),this.panelGroup.add(ue),this.recordPart(`アクリル グレースモーク半透明 3.0mm 側板 (${fe})`,`${F} x ${H} mm`,2,`左右側面 ${ve}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:F,heightMm:H,unitType:"m2"})}else{const Se=new $e(d,H,F);this.activeGeometries.push(Se);const q=new Z(Se,this.materials.acrylic);q.position.set(-n/2+10,W,ne),this.panelGroup.add(q);const ue=new Z(Se,this.materials.acrylic);ue.position.set(n/2-10,W,ne),this.panelGroup.add(ue),this.recordPart(`透明アクリル 3.0mm 側板 (${fe})`,`${F} x ${H} mm`,2,`左右側面 ${ve}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:F,heightMm:H,unitType:"m2"})}};if(h){const F=c,H=Math.max(10,o-le-Me-20-F),W=Math.round(H+10),$=Math.round(F+10);xe(re,W,le+H/2,L,"下部");const de=o-Me-F/2;if(xe(re,$,de,U,"上部"),this.params.hasSideVentCover&&U==="punching"){const ve=F+10,Se=s-2,q=new $e(1.5,ve,Se);this.activeGeometries.push(q);const ue=-n/2-1.5/2,Te=n/2+1.5/2,Pe=new Z(q,this.materials.ventCoverAcrylic);Pe.position.set(ue,de,0),Pe.castShadow=!0,this.panelGroup.add(Pe);const be=new Z(q,this.materials.ventCoverAcrylic);be.position.set(Te,de,0),be.castShadow=!0,this.panelGroup.add(be);const Ie=(s-2)/2-9,Fe=-(s-2)/2+9,Oe=de+ve/2-40,k=de-ve/2+40,ye=[{y:Oe,z:Ie},{y:Oe,z:Fe},{y:k,z:Ie},{y:k,z:Fe}];for(const ce of ye)this.addThumbScrew(-n/2-1.5,ce.y,ce.z,-1),this.addThumbScrew(n/2+1.5,ce.y,ce.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${Se} x ${ve} mm`,2,"左右側面上部 外張り (φ6mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:Se,heightMm:ve,unitType:"m2"});const J=v==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${J})`,"外径φ15mm / M4 (手締め・工具不要)",8,"側面換気量調整板 固定用 (左右計8箇所)","other")}}else{const F=ge?Math.round(o-le-Me+10):o-30,H=ge?le+(o-le-Me)/2:o/2;if(xe(re,F,H,M,""),this.params.hasSideVentCover&&M==="punching"){const $=o-le-Me,de=Math.round($/2+10),fe=s-2,ve=new $e(1.5,de,fe);this.activeGeometries.push(ve);const Se=-n/2-1.5/2,q=n/2+1.5/2,ue=le/2+de/2,Te=o-Me/2-de/2,Pe=new Z(ve,this.materials.ventCoverAcrylic);Pe.position.set(Se,ue,0),Pe.castShadow=!0,this.panelGroup.add(Pe);const be=new Z(ve,this.materials.ventCoverAcrylic);be.position.set(q,ue,0),be.castShadow=!0,this.panelGroup.add(be);const Ie=new Z(ve,this.materials.ventCoverAcrylic);Ie.position.set(Se,Te,0),Ie.castShadow=!0,this.panelGroup.add(Ie);const Fe=new Z(ve,this.materials.ventCoverAcrylic);Fe.position.set(q,Te,0),Fe.castShadow=!0,this.panelGroup.add(Fe);const Oe=(s-2)/2-9,k=-(s-2)/2+9,ye=Math.max(25,10+Math.min(30,de*.2)),J=Math.min(o/2-15,o/2-Math.min(25,de*.2)),ce=Math.max(o/2+15,o/2+Math.min(25,de*.2)),Le=Math.min(o-25,o-10-Math.min(30,de*.2)),De=[{y:J,z:Oe},{y:J,z:k},{y:ye,z:Oe},{y:ye,z:k},{y:Le,z:Oe},{y:Le,z:k},{y:ce,z:Oe},{y:ce,z:k}];for(const ot of De)this.addThumbScrew(-n/2-1.5,ot.y,ot.z,-1),this.addThumbScrew(n/2+1.5,ot.y,ot.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${fe} x ${de} mm`,4,"左右側面外張り (上下各2枚・φ6mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:fe,heightMm:de,unitType:"m2"});const Xe=v==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${Xe})`,"外径φ15mm / M4 (手締め・工具不要)",16,"側面換気量調整板 固定用 (左右計16箇所)","other")}}const _e=(F,H,W,$,de,fe=!1)=>{const ve=$&&$.startsWith("mesh"),Se=v==="black";if(ve){const q=parseInt($.replace("mesh",""),10);if(Se){const ue=Math.max(10,Math.round(H-6)),Te=Math.max(10,Math.round(F-46)),Pe=W-F/2+10,be=W+F/2-10;this.addFrameMember("2020",ue,new E(Pe,o-10,C),t,`天面インナー左2020 (${de})`,this.materials.silverInnerFrame),this.addFrameMember("2020",ue,new E(be,o-10,C),t,`天面インナー右2020 (${de})`,this.materials.silverInnerFrame);const Ie=C+H/2-10,Fe=C-H/2+10;this.addFrameMember("2020",Te,new E(W,o-10,Ie),e,`天面インナー前2020 (${de})`,this.materials.silverInnerFrame),this.addFrameMember("2020",Te,new E(W,o-10,Fe),e,`天面インナー後2020 (${de})`,this.materials.silverInnerFrame),this.recordPart(Ve("2020",ue,"silver",!0),ue,2,`天面 金網取付用インナーフレーム左右 (${de}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:ue,unitType:"m"}),this.recordPart(Ve("2020",Te,"silver",!0),Te,2,`天面 金網取付用インナーフレーム前後 (${de}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:Te,unitType:"m"});const Oe=Math.max(10,Math.round(F-30)),k=Math.max(10,Math.round(H-30)),ye=this.createWireMesh(Oe,k,q);ye.position.set(W,o-10,C),this.panelGroup.add(ye);const J=`FENP${q}-A${Oe}-B${k}`,ce=`wire_mesh_${q}`;this.recordPart(`金網 ${q}mmピッチ（黒粉体塗装） (型番: ${J})`,`${Oe} x ${k} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${de})`,"panel",{panelCode:ce,partCode:ce,widthMm:Oe,heightMm:k,unitType:"m2"})}else{const ue=Math.max(10,Math.round(F+10)),Te=Math.max(10,Math.round(H+10)),Pe=this.createWireMesh(ue,Te,q);Pe.position.set(W,o-10,C),this.panelGroup.add(Pe);const be=`FENP${q}-A${ue}-B${Te}`,Ie=`wire_mesh_${q}`;this.recordPart(`金網 ${q}mmピッチ（黒粉体塗装） (型番: ${be})`,`${ue} x ${Te} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${de})`,"panel",{panelCode:Ie,partCode:Ie,widthMm:ue,heightMm:Te,unitType:"m2"})}}else if($==="acrylic"){const q=Math.round(F+10),ue=Math.round(H+10),Te=new $e(q,d,ue);this.activeGeometries.push(Te);const Pe=new Z(Te,this.materials.acrylic);Pe.position.set(W,o-20+d/2,C),this.panelGroup.add(Pe),this.recordPart("透明アクリル 3.0mm 天板",`${q} x ${ue} mm`,1,`天面 (${de})`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:q,heightMm:ue,unitType:"m2"})}else{const q=Math.round(F+10),ue=Math.round(H+10),Te=sa(q,ue,fe);this.activeTextures.push(Te);const Pe=this.materials.createPunchingMaterial(Te);this.activeMaterials.push(Pe);const be=new ui(q,ue);be.rotateX(-Math.PI/2),this.activeGeometries.push(be);const Ie=new Z(be,Pe);if(Ie.position.set(W,o-20+d/2,C),this.panelGroup.add(Ie),this.recordPart("塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)",`${q} x ${ue} mm`,1,`天面 (${de}・通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:q,heightMm:ue,unitType:"m2"}),fe){const Fe=new Ke(19,19,4.5,32);this.activeGeometries.push(Fe);const Oe=o-20+d/2,k=C-ue/2+35,ye=W-q/2+35,J=W+q/2-35,ce=new Z(Fe,this.materials.grommetMaterial);ce.position.set(ye,Oe,k),this.panelGroup.add(ce);const Le=new Z(Fe,this.materials.grommetMaterial);Le.position.set(J,Oe,k),this.panelGroup.add(Le)}}},C=I?-10:0,S=I?s-60:s-40;if(K){const F=(n-60)/2,H=-F/2-10,W=F/2+10,$=Q==="top_split_4";_e(F,S,H,R,"左側",$),_e(F,S,W,y,"右側",$),Q==="top_split_4"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",4,"天面板 奥側各2箇所 (計4箇所・端から35mm)","other")}else{const F=Q==="top_single_2";_e(n-40,S,0,w,"全面",F),Q==="top_single_2"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,"天面板 奥側左右 (端から35mm)","other")}if(r==="C"||r==="C_FRAMED"){const F=n-30,H=a+10,W=new $e(F,H,d);this.activeGeometries.push(W);const $=new Z(W,this.materials.acrylic),de=le+a/2,fe=r==="C_FRAMED"?s/2-20:s/2-10;$.position.set(0,de,fe),this.panelGroup.add($),this.recordPart("透明アクリル 3.0mm 前窓",`${F} x ${H} mm`,1,"正面 下部はめ殺し固定窓","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:F,heightMm:H,unitType:"m2"})}}buildGlassRails(e,t,n,s){const{frameColor:o}=this.params,r=new mt;r.moveTo(-8,2.5),r.lineTo(-6.5,2.5),r.lineTo(-6.5,7),r.lineTo(-5,7),r.lineTo(-5,2),r.lineTo(-1.5,2),r.lineTo(-1.5,7),r.lineTo(1.5,7),r.lineTo(1.5,2),r.lineTo(5,2),r.lineTo(5,7),r.lineTo(6.5,7),r.lineTo(6.5,2.5),r.lineTo(8,2.5),r.lineTo(8,0),r.lineTo(-8,0),r.closePath();const a={depth:e,bevelEnabled:!1,steps:1},h=new ft(r,a);h.translate(0,0,-e/2),h.rotateY(-Math.PI/2),this.activeGeometries.push(h);const c=new Z(h,this.materials.railMaterial);c.position.set(0,t,s),c.castShadow=!0,c.receiveShadow=!0,c.name="下側ガラスレール",this.doorGroup.add(c);const l=new mt;l.moveTo(-8,12-2.5),l.lineTo(-6.5,12-2.5),l.lineTo(-6.5,0),l.lineTo(-5,0),l.lineTo(-5,11),l.lineTo(-1.5,11),l.lineTo(-1.5,0),l.lineTo(1.5,0),l.lineTo(1.5,11),l.lineTo(5,11),l.lineTo(5,0),l.lineTo(6.5,0),l.lineTo(6.5,12-2.5),l.lineTo(8,12-2.5),l.lineTo(8,12),l.lineTo(-8,12),l.closePath();const f={depth:e,bevelEnabled:!1,steps:1},m=new ft(l,f);m.translate(0,0,-e/2),m.rotateY(-Math.PI/2),this.activeGeometries.push(m);const p=new Z(m,this.materials.railMaterial);p.position.set(0,n-12,s),p.castShadow=!0,p.receiveShadow=!0,p.name="上側ガラスレール",this.doorGroup.add(p)}buildAntiFlexRails(e,t,n,s,o,r){const a=Math.max(10,t-25),h=new mt;h.moveTo(-8,2.5),h.lineTo(-6.5,2.5),h.lineTo(-6.5,7),h.lineTo(-5,7),h.lineTo(-5,2),h.lineTo(-1.5,2),h.lineTo(-1.5,7),h.lineTo(1.5,7),h.lineTo(1.5,2),h.lineTo(5,2),h.lineTo(5,7),h.lineTo(6.5,7),h.lineTo(6.5,2.5),h.lineTo(8,2.5),h.lineTo(8,0),h.lineTo(-8,0),h.closePath();const c={depth:a,bevelEnabled:!1,steps:1},l=(n+7+s-12)/2,f=new ft(h,c);f.translate(0,0,-a/2);const m=new lt().set(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);f.applyMatrix4(m),this.activeGeometries.push(f);const p=new Z(f,this.materials.railMaterial);p.position.set(-e/2,l,o),p.castShadow=!0,p.receiveShadow=!0,p.name="左側たわみ防止レール",this.doorGroup.add(p);const _=new ft(h,c);_.translate(0,0,-a/2);const v=new lt().set(0,-1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);_.applyMatrix4(v),this.activeGeometries.push(_);const g=new Z(_,this.materials.railMaterial);g.position.set(e/2,l,o),g.castShadow=!0,g.receiveShadow=!0,g.name="右側たわみ防止レール",this.doorGroup.add(g)}buildFramedDoors(){const{W:e,D:t,H:n,doorState:s,frameColor:o,cageType:r,frontWindowH:a}=this.params,h=o==="silver",c=r==="C_FRAMED",l=!!this.params.hasTopWideFrame,m=!!this.params.hasBottomWideFrame?40:20,p=Math.max(10,e-40),_=c?m+20+a:40,v=l?n-40:n-20,g=Math.max(10,v-_),d=Math.max(10,Math.round(p/2+12)),T=Math.max(10,g-42),x=Math.max(10,d-64),M=Math.max(10,T+10),U=(_+v)/2,L=_+11,w=v-11,R=3,y=2,b=-p/2+y+R+d/2,A=p/2-y-R-d/2,B=Math.max(0,d-85);let I=b,G=A;s==="left_open"?I=b+B:s==="right_open"&&(G=A-B);let O=I,Y=G;this._doorAnim&&!this._doorAnim.isFrontOpen&&(O=this._doorAnim.currentLeftX??I,Y=this._doorAnim.currentRightX??G);const z=t/2-30,N=t/2-10,ee=h?this.materials.aluminum:this.materials.blackFrame,ae=h?this.materials.perchGrayCap:this.materials.endCapMaterial,ge=new lt().makeBasis(new E(0,0,-1),new E(0,1,0),new E(1,0,0)),Ce=new Rt().setFromRotationMatrix(ge),Be=new lt().makeBasis(new E(0,0,1),new E(1,0,0),new E(0,1,0)),j=new Rt().setFromRotationMatrix(Be),le=me=>{const Ee=new pt;this.addFrameMember(h?"2020_flat":"2020",d,new E(0,L,0),Ce,"扉下フレーム2020",ee,"right",Ee),this.addFrameMember(h?"2020_flat":"2020",d,new E(0,w,0),Ce,"扉上フレーム2020",ee,"right",Ee),this.addFrameMember("2040",T,new E(-d/2+17,U,0),j,"扉左縦フレーム2040",ee,null,Ee),this.addFrameMember("2040",T,new E(d/2-17,U,0),j,"扉右縦フレーム2040",ee,null,Ee);const te=new $e(x,M,3);this.activeGeometries.push(te);const K=new Z(te,this.materials.acrylic);K.position.set(0,U,0),K.castShadow=!0,Ee.add(K);const D=new Rt(0,-Math.PI/2,0),oe=new Rt(0,Math.PI/2,0);if(this.addDoorEndCap(-d/2-1.5,L,0,D,ae,Ee),this.addDoorEndCap(d/2+1.5,L,0,oe,ae,Ee),this.addDoorEndCap(-d/2-1.5,w,0,D,ae,Ee),this.addDoorEndCap(d/2+1.5,w,0,oe,ae,Ee),me){this.addFrameMember("2040",94,new E(-d/2+17,U,20),j,"左扉スペーサー2040",ee,null,Ee);const Q=new Rt(-Math.PI/2,0,0),re=new Rt(Math.PI/2,0,0);this.addEndCap2040(-d/2+17,U+47+1.5,20,Q,ae,Ee),this.addEndCap2040(-d/2+17,U-47-1.5,20,re,ae,Ee);const ne=this.createSlideLatchMesh(!0);ne.position.set(-d/2+17,U,30),Ee.add(ne),Ee.userData.latchKnob=ne.userData.knobPivot}else{const Q=this.createSlideLatchMesh(!1);Q.position.set(d/2-17,U,10),Ee.add(Q),Ee.userData.latchKnob=Q.userData.knobPivot}return Ee},Me=le(!0);Me.position.set(O,0,z),this.doorGroup.add(Me);const pe=le(!1);pe.position.set(Y,0,N),this.doorGroup.add(pe);const he=this.createStrikerAssembly(!0);he.position.set(-e/2,U,t/2),this.doorGroup.add(he);const Ae=this.createStrikerAssembly(!1);Ae.position.set(e/2,U,t/2),this.doorGroup.add(Ae),this._doorAnim={isFramed:!0,leftDoor:Me,rightDoor:pe,leftLatchKnob:Me.userData.latchKnob,rightLatchKnob:pe.userData.latchKnob,baseLeftCenterX:b,baseRightCenterX:A,leftKnobGroup:null,rightKnobGroup:null,lockGroup:null,leftKnobOffsetX:0,rightKnobOffsetX:0,lockOffsetX:0,currentLeftX:O,currentRightX:Y,targetLeftX:I,targetRightX:G,animating:O!==I||Y!==G,startLeftX:O,startRightX:Y,startTime:performance.now(),duration:1600}}buildDoors(){this.clearGroup(this.doorGroup);const{W:e,D:t,H:n,cageType:s,frontWindowH:o,doorState:r,hasDoorAntiFlex:a,frameColor:h}=this.params;if(s==="A_FRAMED"||s==="C_FRAMED"){this.buildFramedDoors();return}if(s==="A_FRONT"){this.buildFrontOpenDoor();return}const c=e-40;let l=(c+30)/2;a&&(l-=2);let f=0,m=n-20;if(s==="A"){const Be=this.params.frontWideFrame||"2x";Be==="3x"?f=60:Be==="2x"?f=40:f=20,this.params.hasTopWideFrame&&(m=n-40)}else f=(this.params.hasBottomWideFrame?40:20)+20+o,this.params.hasTopWideFrame&&(m=n-40);const p=Math.max(10,m-f),_=t/2-10;this.buildGlassRails(c,f,m,_),a&&this.buildAntiFlexRails(c,p,f,m,_,h);const v=Math.max(10,p-9),g=f+2.5+v/2,d=3,T=new $e(l,v,d);this.activeGeometries.push(T);const x=Math.max(0,l-50),M=_-3.25,U=_+3.25,L=a?2:0,w=-c/2+L+l/2,R=c/2-L-l/2;let y=w,b=R;r==="left_open"?y=w+x:r==="right_open"&&(b=R-x);let A=y,B=b;this._doorAnim&&(A=this._doorAnim.currentLeftX,B=this._doorAnim.currentRightX);const I=new Z(T,this.materials.doorGlassLeft);I.position.set(A,g,M),I.castShadow=!1,this.doorGroup.add(I);const G=-l/2+15,O=this.addKnobScrew(A+G,g,M+d/2),Y=new Z(T,this.materials.doorGlassRight);Y.position.set(B,g,U),Y.castShadow=!1,this.doorGroup.add(Y);const z=l/2-15,N=this.addKnobScrew(B+z,g,U+d/2),ae=g-v/2+20,ge=-l/2+15,Ce=this.addDoorLock(B+ge,ae,U+d/2);this._doorAnim={leftDoor:I,rightDoor:Y,leftKnobGroup:O,rightKnobGroup:N,lockGroup:Ce,leftKnobOffsetX:G,rightKnobOffsetX:z,lockOffsetX:ge,currentLeftX:A,currentRightX:B,targetLeftX:y,targetRightX:b,animating:A!==y||B!==b,startLeftX:A,startRightX:B,startTime:performance.now(),duration:3e3}}addCountersunkPhillipsScrew(e,t,n,s,o=0){const r=new Ke(3.5,2,1.2,16);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const a=new Z(r,this.materials.screwSilver);a.position.set(t,n,s),e.add(a);const h=new $e(3.8,.7,.4),c=new $e(.7,3.8,.4);this.activeGeometries.push(h,c);const l=new Z(h,this.materials.screwSlot),f=new Z(c,this.materials.screwSlot);l.position.set(t,n,s+.5),f.position.set(t,n,s+.5),o!==0&&(l.rotation.z=o,f.rotation.z=o),e.add(l),e.add(f)}buildFrontOpenDoor(){const{W:e,D:t,H:n,doorState:s}=this.params;let o=40;const r=this.params.frontWideFrame||"2x";r==="3x"?o=60:r==="2x"?o=40:o=20;const a=n-20,h=o-18,c=a+18,l=c-h,f=(h+c)/2,m=e-2-21.3,p=3,_=t/2,v=-e/2+21.3,g=e/2-2,d=(v+g)/2,T=h+l*1/4,x=h+l*3/4,M=19,U=52,L=-l/4+U/2,w=-l/4-U/2,R=l/4+U/2,y=l/4-U/2,b=10,A=m/2,B=l/2,I=Math.min(b,A/4,B/4),G=this.params.doorHingeSide==="right",O=new mt;G?(O.moveTo(-A+I,-B),O.lineTo(A-I,-B),O.absarc(A-I,-B+I,I,-Math.PI/2,0,!1),O.lineTo(A,B-I),O.absarc(A-I,B-I,I,0,Math.PI/2,!1),O.lineTo(-A+I,B),O.absarc(-A+I,B-I,I,Math.PI/2,Math.PI,!1),O.lineTo(-A,R),O.lineTo(-A+M,R),O.lineTo(-A+M,y),O.lineTo(-A,y),O.lineTo(-A,L),O.lineTo(-A+M,L),O.lineTo(-A+M,w),O.lineTo(-A,w),O.lineTo(-A,-B+I),O.absarc(-A+I,-B+I,I,Math.PI,Math.PI*1.5,!1)):(O.moveTo(-A+I,-B),O.lineTo(A-I,-B),O.absarc(A-I,-B+I,I,-Math.PI/2,0,!1),O.lineTo(A,w),O.lineTo(A-M,w),O.lineTo(A-M,L),O.lineTo(A,L),O.lineTo(A,y),O.lineTo(A-M,y),O.lineTo(A-M,R),O.lineTo(A,R),O.lineTo(A,B-I),O.absarc(A-I,B-I,I,0,Math.PI/2,!1),O.lineTo(-A+I,B),O.absarc(-A+I,B-I,I,Math.PI/2,Math.PI,!1),O.lineTo(-A,-B+I),O.absarc(-A+I,-B+I,I,Math.PI,Math.PI*1.5,!1));const Y={steps:1,depth:p,bevelEnabled:!1},z=new ft(O,Y);this.activeGeometries.push(z);const N=new Z(z,this.materials.doorGlassRight);N.castShadow=!1;const ee=G?e/2-10-11.25:-e/2+10+11.25,ae=_+p,ge=new pt;ge.name="FrontOpenDoorPivot",ge.position.set(ee,0,ae),N.position.set(d-ee,f,-p),ge.add(N);const Ce=G?e/2-10:-e/2+10,Be=G?-e/2+10:e/2-10;this.addHingeTH31(Ce,ee,x,_,p,ge,G),this.addHingeTH31(Ce,ee,T,_,p,ge,G);const j=[];this.addLockC1249(Be,x,_,p,ee,ge,j,G),this.addLockC1249(Be,T,_,p,ee,ge,j,G),this.doorGroup.add(ge);const le=s==="open"||s==="left_open"||s==="right_open",Me=le?G?Math.PI*(120/180):-Math.PI*(120/180):0,pe=le?G?-Math.PI*1.5:Math.PI*1.5:0;let he=Me,Ae=pe;this._doorAnim&&typeof this._doorAnim.currentRotY=="number"&&(he=this._doorAnim.currentRotY,Ae=this._doorAnim.currentLockRotZ??pe),ge.rotation.y=he;for(const me of j)me.rotation.z=Ae;this._doorAnim={isFrontOpen:!0,doorPivot:ge,lockPivots:j,currentRotY:he,targetRotY:Me,currentLockRotZ:Ae,targetLockRotZ:pe,startRotY:he,startLockRotZ:Ae,animating:Math.abs(he-Me)>.001||Math.abs(Ae-pe)>.001,startTime:performance.now(),duration:2200}}addHingeTH31(e,t,n,s,o,r,a=!1){const h=this.materials.handleMaterial,c=s+o,l=new $e(16,52,o);this.activeGeometries.push(l);const f=new Z(l,this.materials.acrylic);f.position.set(e,n,s+o/2),this.doorGroup.add(f);const m=new $e(18,50,1.5);this.activeGeometries.push(m);const p=new Z(m,h),_=a?t+9:t-9;p.position.set(_,n,c+.75),p.castShadow=!0,this.doorGroup.add(p);const v=e;for(const L of[-17,8.5])this.addCountersunkPhillipsScrew(this.doorGroup,v,n+L,c+1.5,Math.PI/4);const g=new Ke(2.5,2.5,50,16);this.activeGeometries.push(g);const d=new Z(g,h);d.position.set(0,n,0),r.add(d);const T=new $e(18,50,1.5);this.activeGeometries.push(T);const x=new Z(T,h),M=a?-9:9;x.position.set(M,n,.75),x.castShadow=!0,r.add(x);const U=a?-11.25:11.25;for(const L of[-8.5,17])this.addCountersunkPhillipsScrew(r,U,n+L,1.5,Math.PI/6)}addLockC1249(e,t,n,s,o,r,a,h=!1){const c=this.materials.handleMaterial,l=n+s,f=new $e(16,48,s);this.activeGeometries.push(f);const m=new Z(f,this.materials.acrylic);m.position.set(e,t,n+s/2),this.doorGroup.add(m);const p=new $e(16,46,2);this.activeGeometries.push(p);const _=new Z(p,c);_.position.set(e,t,l+1),this.doorGroup.add(_);for(const G of[-15,15])this.addCountersunkPhillipsScrew(this.doorGroup,e,t+G,l+2,Math.PI/4);const v=new $e(14,16,12);this.activeGeometries.push(v);const g=new Z(v,c);g.position.set(e,t,l+2+6),this.doorGroup.add(g);const T=(h?-this.params.W/2+29:this.params.W/2-29)-o,x=new $e(16,46,2);this.activeGeometries.push(x);const M=new Z(x,c);M.position.set(T,t,1),r.add(M);for(const G of[-15,15])this.addCountersunkPhillipsScrew(r,T,t+G,2,Math.PI/3);const U=new pt;U.name="LockArmPivot",U.position.set(T,t,2);const L=new Ke(3,3,3,16);L.rotateX(Math.PI/2),this.activeGeometries.push(L);const w=new Z(L,c);w.position.set(0,0,1.5),U.add(w);const R=new $e(38,14,2.5);this.activeGeometries.push(R);const y=new Z(R,c),b=h?-19:19;y.position.set(b,0,6),U.add(y);const A=new Ke(3.5,3.5,14,16);A.rotateX(Math.PI/2),this.activeGeometries.push(A);const B=new Z(A,c),I=h?-18:18;B.position.set(I,0,13),U.add(B),r.add(U),a&&a.push(U)}buildFramedDoorPartsRecord(){const{W:e,H:t,frameColor:n,cageType:s,frontWindowH:o}=this.params,r=n==="silver",a=s==="C_FRAMED",h=!!this.params.hasTopWideFrame,l=!!this.params.hasBottomWideFrame?40:20,f=Math.max(10,e-40),m=a?l+20+o:40,p=h?t-40:t-20,_=Math.max(10,p-m),v=Math.max(10,Math.round(f/2+12)),g=Math.max(10,_-42),d=Math.max(10,v-64),T=Math.max(10,g+10),x=r?"AFSF-2020-4":"AFS-2020-4-BK",M=`${x}-${v}`;this.recordPart(M,`${v} mm`,4,"正面枠囲い扉 幅方向フレーム (上下各2本・計4本)","frame",{partCode:x,lengthMm:v,unitType:"m"});const U=r?"AFSF-2040-4":"AFS-2040-4-BK",L=`${U}-${g}`;this.recordPart(L,`${g} mm`,4,"正面枠囲い扉 高さ方向フレーム (左右各2本・計4本)","frame",{partCode:U,lengthMm:g,unitType:"m"});const w=r?"ECP-2020-4-GY":"ECP-2020-4",R=r?"ECP-2020-4-GY (グレー)":"ECP-2020-4 (ブラック)";this.recordPart(w,"-",8,`正面枠囲い扉 幅フレーム端部 (${R})`,"rail_cap",{partCode:w,unitType:"piece"}),this.recordPart("透明アクリル 3.0mm 扉板",`${d} x ${T} mm`,2,"正面枠囲い扉 (透明押出板3.0mm)","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:d,heightMm:T,unitType:"m2"});const y=v-22,b=14;this.recordPart("アクリル黒両面マット 3.0mm (スライド部材)",`${y} x ${b} mm`,4,"正面枠囲い扉 スライド用部材 (厚さ3mm)","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:y,heightMm:b,unitType:"m2"});const A=r?"AFS-2040-4":"AFS-2040-4-BK",B=`${A}-94`;this.recordPart(B,"94 mm",1,"正面枠囲い扉 左扉ラッチ高さ合わせ用スペーサーフレーム","frame",{partCode:A,lengthMm:94,unitType:"m"});const I=r?"ECP-2040-4-GY":"ECP-2040-4",G=r?"ECP-2040-4-GY (グレー)":"ECP-2040-4 (ブラック)";this.recordPart(I,"-",2,`正面枠囲い扉 左扉スペーサー端部 (${G})`,"rail_cap",{partCode:I,unitType:"piece"}),this.recordPart("タキゲン CP-294N スライドラッチ","70 x 25 mm",2,"正面枠囲い扉 ワンタッチスライドラッチ (左右各1個)","other",{partCode:"CP-294N",unitType:"piece"}),this.recordPart("アクリル丸板 透明 φ20mm t5mm (穴加工済)","φ20 x t5 mm",4,"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)","other",{partCode:"ACRYLIC-ROUND-20-5",unitType:"piece"})}buildDoorPartsRecord(){const{W:e,H:t,cageType:n,frontWindowH:s,hasDoorAntiFlex:o,frameColor:r}=this.params;if(n==="A_FRAMED"||n==="C_FRAMED"){this.buildFramedDoorPartsRecord();return}if(n==="A_FRONT"){const d=e-2-21.3;let T=40;const x=this.params.frontWideFrame||"2x";x==="3x"?T=60:x==="2x"?T=40:T=20;const U=Math.max(10,t-20-T)+36,L=this.params.doorHingeSide==="right",w=L?"正面 右ヒンジ・左打掛オープン扉":"正面 左ヒンジ・右打掛オープン扉";this.recordPart("透明アクリル扉 3.0mm（正面）（前開き）",`${Math.round(d*10)/10} x ${Math.round(U)} mm`,1,`${w} (切欠き・穴加工済)`,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(d*10)/10,heightMm:Math.round(U),unitType:"m2"});const R=L?"前開き扉 右ヒンジ (2箇所)":"前開き扉 左ヒンジ (2箇所)";this.recordPart("TH-31 ステンレス蝶番","50 x 36 mm (SUS304)",2,R,"rail_cap",{partCode:"TH-31",lengthMm:null,unitType:"piece"});const y=L?"前開き扉 左打掛ロック (2箇所)":"前開き扉 右打掛ロック (2箇所)";this.recordPart("C-1249-4 ステンレス打掛","58 x 46 mm (SUS304)",2,y,"rail_cap",{partCode:"C-1249-4",lengthMm:null,unitType:"piece"});const b=L?"前開き扉 右ヒンジ固定座 (フレーム隙間埋め用)":"前開き扉 左ヒンジ固定座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ヒンジ座板 (切削加工)","16 x 52 mm",2,b,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:52,unitType:"m2"});const A=L?"前開き扉 左打掛受具座 (フレーム隙間埋め用)":"前開き扉 右打掛受具座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ロック受座板 (切削加工)","16 x 48 mm",2,A,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:48,unitType:"m2"});return}const a=e-40;let h=(a+30)/2;o&&(h-=2);let c=0,l=t-20;if(n==="A"){const d=this.params.frontWideFrame||"2x";d==="3x"?c=60:d==="2x"?c=40:c=20,this.params.hasTopWideFrame&&(l=t-40)}else c=(this.params.hasBottomWideFrame?40:20)+20+s,this.params.hasTopWideFrame&&(l=t-40);const f=Math.max(10,l-c),m=Math.max(10,f-9),p=a,_=r==="black"?"BK":"GY",v=`PGRU-03-4-${_}`,g=`PGRL-03-4-${_}`;if(this.recordPart(v,p,1,"正面開口 上部 (間口高12mm縮小)","frame",{partCode:v,lengthMm:p,unitType:"m"}),this.recordPart(g,p,1,"正面開口 下部 (間口高7mm縮小)","frame",{partCode:g,lengthMm:p,unitType:"m"}),o){const d=Math.max(10,f-25);this.recordPart(g,d,2,"正面スライド扉 左右端 (扉たわみ防止)","frame",{partCode:g,lengthMm:d,unitType:"m"})}this.recordPart("透明アクリル扉 3.0mm（正面）（スライド扉）",`${Math.round(h)} x ${Math.round(m)} mm`,2,"正面 引き違い (重なり30mm)","panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(h),heightMm:Math.round(m),unitType:"m2"}),this.recordPart("段付きローレットノブ (SUS303, RNSFS4)","外径φ16 / ボスφ8 / 全長9.5mm",2,"扉端から15mm・上下中央","other"),this.recordPart("プッシュ式スライド扉鍵 (C-108)","外径φ18.5mm / 全長30mm (キー付)",1,"右スライド扉 下部 (端から15mm・下端から20mm)","other")}updateDoorAnimation(){if(!this._doorAnim||!this._doorAnim.animating)return;const e=this._doorAnim,t=performance.now()-e.startTime,n=Math.min(1,t/e.duration),s=n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;if(e.isFrontOpen){if(e.targetRotY!==0){const r=Math.min(1,Math.max(0,n/.35)),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*a;const h=Math.min(1,Math.max(0,(n-.35)/.65)),c=h<.5?4*h*h*h:1-Math.pow(-2*h+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*c}else{const r=Math.min(1,Math.max(0,n/.65)),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*a;const h=Math.min(1,Math.max(0,(n-.65)/.35)),c=h<.5?4*h*h*h:1-Math.pow(-2*h+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*c}if(e.doorPivot&&(e.doorPivot.rotation.y=e.currentRotY),e.lockPivots)for(const r of e.lockPivots)r.rotation.z=e.currentLockRotZ;n>=1&&(e.animating=!1);return}if(e.isFramed){e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX);const o=e.targetLeftX!==e.startLeftX,r=e.targetRightX!==e.startRightX,a=.28;if(o&&e.leftLatchKnob){const h=e.targetLeftX>e.baseLeftCenterX;let c=0;if(h)if(n<.18){const l=n/.18;c=a*(l*l*(3-2*l))}else if(n<.35)c=a;else if(n<.48){const l=(n-.35)/.13;c=a*(1-l*l*(3-2*l))}else c=0;else if(n<.65)c=0;else if(n<.82){const l=(n-.65)/.17;c=a*(l*l*(3-2*l))}else if(n<.9){const l=(n-.82)/.08;c=a*(1-l*l)}else c=0;e.leftLatchKnob.rotation.y=c}else e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0);if(r&&e.rightLatchKnob){const h=e.targetRightX<e.baseRightCenterX;let c=0;if(h)if(n<.18){const l=n/.18;c=a*(l*l*(3-2*l))}else if(n<.35)c=a;else if(n<.48){const l=(n-.35)/.13;c=a*(1-l*l*(3-2*l))}else c=0;else if(n<.65)c=0;else if(n<.82){const l=(n-.65)/.17;c=a*(l*l*(3-2*l))}else if(n<.9){const l=(n-.82)/.08;c=a*(1-l*l)}else c=0;e.rightLatchKnob.rotation.y=-c}else e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0);n>=1&&(e.animating=!1,e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0),e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0));return}e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.leftKnobGroup&&(e.leftKnobGroup.position.x=e.currentLeftX+e.leftKnobOffsetX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX),e.rightKnobGroup&&(e.rightKnobGroup.position.x=e.currentRightX+e.rightKnobOffsetX),e.lockGroup&&(e.lockGroup.position.x=e.currentRightX+e.lockOffsetX),n>=1&&(e.animating=!1)}addKnobScrew(e,t,n){const s=new pt;s.position.set(e,t,n);const o=new Ke(4,4,6,24);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const r=new Z(o,this.materials.handleMaterial);r.position.set(0,0,3),r.castShadow=!0,s.add(r);const a=new Ke(8,8,3.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const h=new Z(a,this.materials.handleMaterial);h.position.set(0,0,6+1.75),h.castShadow=!0,s.add(h);const c=new Ke(2,2,3,16);c.rotateX(Math.PI/2),this.activeGeometries.push(c);const l=new Z(c,this.materials.grommetMaterial);return l.position.set(0,0,9.5-1.5+.1),s.add(l),this.doorGroup.add(s),s}addDoorLock(e,t,n){const s=new pt;s.position.set(e,t,n);const o=new Ke(9.25,9.25,2.5,32);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const r=new Z(o,this.materials.handleMaterial);r.position.set(0,0,1.25),r.castShadow=!0,s.add(r);const a=new Ke(7.75,7.75,20.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const h=new Z(a,this.materials.handleMaterial);h.position.set(0,0,2.5+10.25),h.castShadow=!0,s.add(h);const c=new Ke(5.5,5.5,.8,32);c.rotateX(Math.PI/2),this.activeGeometries.push(c);const l=new Z(c,this.materials.handleMaterial);l.position.set(0,0,23+.4),s.add(l);const f=new $e(1.4,6.5,1.2);this.activeGeometries.push(f);const m=new Z(f,this.materials.grommetMaterial);return m.position.set(0,0,23.6),s.add(m),this.doorGroup.add(s),s}addThumbScrew(e,t,n,s){const o=new pt;o.position.set(e,t,n);const r=new Ke(4,4,1.5,24);r.rotateZ(Math.PI/2),this.activeGeometries.push(r);const a=new Z(r,this.materials.thumbScrewMaterial);a.position.set(s*.75,0,0),a.castShadow=!0,o.add(a);const h=new Ke(7.5,7.5,4.5,24);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);const c=new Z(h,this.materials.thumbScrewMaterial);c.position.set(s*(1.5+2.25),0,0),c.castShadow=!0,o.add(c);const l=new Ke(3,3,.2,16);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);const f=new Z(l,this.materials.grommetMaterial);return f.position.set(-s*.1,0,0),o.add(f),this.panelGroup.add(o),o}addBottomThumbScrew(e,t,n){const s=new pt;s.position.set(e,t,n);const o=new Ke(4,4,1.5,24);this.activeGeometries.push(o);const r=new Z(o,this.materials.thumbScrewMaterial);r.position.set(0,-.75,0),r.castShadow=!0,s.add(r);const a=new Ke(7.5,7.5,4.5,24);this.activeGeometries.push(a);const h=new Z(a,this.materials.thumbScrewMaterial);h.position.set(0,-3.75,0),h.castShadow=!0,s.add(h);const c=new Ke(3,3,.2,16);this.activeGeometries.push(c);const l=new Z(c,this.materials.grommetMaterial);return l.position.set(0,.1,0),s.add(l),this.panelGroup.add(s),s}buildFeet(){const{W:e,D:t}=this.params,n=11,s=-n/2,o=[-e/2+10,e/2-10],r=[t/2-50,-t/2+50],a=new Ke(9,7.5,n,32);this.activeGeometries.push(a);const h=new Ke(4,4,4,24);this.activeGeometries.push(h);const c=new Ke(3.5,3.5,.8,24);this.activeGeometries.push(c);for(const l of o)for(const f of r){const m=new Z(a,this.materials.grommetMaterial);m.position.set(l,s,f),m.castShadow=!0,m.receiveShadow=!0,this.feetGroup.add(m);const p=new Z(h,this.materials.railMaterial);p.position.set(l,-n+2,f),this.feetGroup.add(p);const _=new Z(c,this.materials.handleMaterial);_.position.set(l,-n+3.6,f),this.feetGroup.add(_)}this.recordPart("ゴム脚 (黒)","外径φ18(上)/φ15(下) x H11mm (M4用座金入)",4,"床面 奥行きフレーム下面 (前後端から50mm・接地用)","other")}buildCasters(){const{W:e,D:t}=this.params,n=[-e/2+10,e/2-10],s=[t/2-7-20,-(t/2-7)+20],o=new $e(20,3,40);this.activeGeometries.push(o);const r=new Ke(10,10,12,24);this.activeGeometries.push(r);const a=new $e(2.5,28,22);this.activeGeometries.push(a);const h=new $e(2.5,28,22);this.activeGeometries.push(h);const c=new Ke(25,25,20,32);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);const l=new Ke(4,4,24,16);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);for(const f of n)for(const m of s){const p=new pt;p.position.set(f,0,m);const _=new Z(o,this.materials.casterBracket);_.position.set(0,-1.5,0),_.castShadow=!0,p.add(_);const v=new Z(r,this.materials.casterBracket);v.position.set(0,-9,0),p.add(v);const g=new Z(a,this.materials.casterBracket);g.position.set(-10,-27,0),p.add(g);const d=new Z(h,this.materials.casterBracket);d.position.set(10,-27,0),p.add(d);const T=new Z(c,this.materials.casterWheel);T.position.set(0,-41,0),T.castShadow=!0,T.receiveShadow=!0,p.add(T);const x=new Z(l,this.materials.casterBracket);x.position.set(0,-41,0),p.add(x),this.feetGroup.add(p)}this.recordPart("自在キャスター","車輪径φ50 / 取付高66mm",4,"床面 奥行きフレーム下面 (端から7mm控え)","other")}addPerch2020GrayCap(e,t,n){const a=new mt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const h={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},c=new ft(a,h);c.translate(0,0,-1.5),this.activeGeometries.push(c);const l=new Z(c,this.materials.perchGrayCap);return l.position.set(e,t,n),l.castShadow=!0,l.receiveShadow=!0,l.name="止まり木・ECP-2020-4-GY",this.perchGroup.add(l),l}addPerch1530BlackCap(e,t,n){const a=new mt;a.moveTo(-7.5+1,-15),a.lineTo(7.5-1,-15),a.absarc(7.5-1,-14,1,-Math.PI/2,0,!1),a.lineTo(7.5,14),a.absarc(7.5-1,14,1,0,Math.PI/2,!1),a.lineTo(-7.5+1,15),a.absarc(-7.5+1,14,1,Math.PI/2,Math.PI,!1),a.lineTo(-7.5,-14),a.absarc(-7.5+1,-14,1,Math.PI,Math.PI*1.5,!1);const h={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.2,bevelThickness:.2},c=new ft(a,h);c.rotateX(Math.PI/2),c.translate(0,-1.5,0),this.activeGeometries.push(c);const l=new Z(c,this.materials.perchBlackCap);return l.position.set(e,t,n),l.castShadow=!0,l.receiveShadow=!0,l.name="止まり木・ECP-1530-6",this.perchGroup.add(l),l}addPerchThumbScrew(e,t,n){const r=new Ke(5,5,5,24);r.translate(0,5/2,0),this.activeGeometries.push(r);const a=new Z(r,this.materials.perchWhiteScrew);return a.position.set(e,t,n),a.castShadow=!0,a.name="止まり木・M3つまみネジ",this.perchGroup.add(a),a}buildPerch(){const{W:e,D:t,H:n}=this.params,s=e-120,o=Math.floor(s/7)*7,r=Math.max(10,o-15),a=Math.max(10,Math.round(n/2)),h=Math.max(0,a-50-15),c=Math.max(10,Math.floor(h/20)*10),l=15+c,f=this.materials.perchAluminum,m=this.materials.handleMaterial,p=o/2,_=n-20-10,v=90,g=new Rt(0,0,0),d=[-p,p];for(const R of d){const y=Ud(v,"bottom");y.translate(0,0,-v/2),this.activeGeometries.push(y);const b=new Z(y,f);b.position.set(R,_,0),b.rotation.copy(g),b.castShadow=!0,b.receiveShadow=!0,b.name="止まり木・天板固定フレーム2020",this.perchGroup.add(b),this.addPerch2020GrayCap(R,_,v/2),this.addPerch2020GrayCap(R,_,-v/2);const A=[25,-25];for(const B of A)this.addPerchThumbScrew(R,n-20,B)}const T=n-40,x=T-a/2,M=T-a;for(const R of d){const y=Kv(a);y.translate(0,0,-a/2),y.rotateX(Math.PI/2),this.activeGeometries.push(y);const b=new Z(y,f);b.position.set(R,x,0),b.castShadow=!0,b.receiveShadow=!0,b.name="止まり木・吊り下げフレーム1530",this.perchGroup.add(b),this.addPerch1530BlackCap(R,M,0);const A=[M+15,M+15+c,M+15+2*c];for(let B=0;B<A.length;B++){const I=A[B],G=R>0?1:-1,O=new Ke(3,3,.4,16);O.rotateZ(Math.PI/2),this.activeGeometries.push(O);const Y=new Z(O,this.materials.railMaterial);Y.position.set(R+G*7.4,I,0),this.perchGroup.add(Y)}}const U=M+l,L=new Ke(15,15,r,32);L.rotateZ(Math.PI/2),this.activeGeometries.push(L);const w=new Z(L,f);w.position.set(0,U,0),w.castShadow=!0,w.receiveShadow=!0,w.name="止まり木・アルミ丸パイプASTP-30",this.perchGroup.add(w);for(const R of d){const y=R>0?1:-1,b=new Ke(5,5,3.5,16);b.rotateZ(Math.PI/2),this.activeGeometries.push(b);const A=new Z(b,m);A.position.set(R+y*9.2,U,0),A.castShadow=!0,this.perchGroup.add(A)}this.recordPart("AFSF-2020-4-90",90,2,"止まり木 天板固定フレーム (溝なし下面・シルバー)","frame"),this.recordPart(`AFS-1530-6-${a}`,a,2,"止まり木 垂直吊り下げフレーム (高さ調整3穴加工・シルバー)","frame"),this.recordPart(`ASTP-30-${r}`,r,1,"止まり木 φ30アルミ丸パイプ (シルバー)","frame"),this.recordPart("ECP-2020-4-GY","20x20mm (グレー)",4,"止まり木 天板固定フレーム両端用エンドキャップ","rail_cap"),this.recordPart("ECP-1530-6","15x30mm (ブラック)",2,"止まり木 吊り下げフレーム下端用エンドキャップ","rail_cap"),this.recordPart("M3x8 つまみネジ (白)","M3 x L8mm",4,"止まり木 天板パンチング固定用つまみネジ","other"),this.recordPart("M6 ボルト","M6 x L20mm",2,"止まり木 φ30丸棒固定用ボルト","other")}buildCaulking(){const{W:e,D:t,hasFloorReinforcement:n}=this.params,s=this.materials.caulkingMaterial,o=5,r=3,a=T=>{const x=new mt;x.moveTo(0,0),x.lineTo(o,0),x.lineTo(0,r),x.closePath();const M=new ft(x,{depth:T,bevelEnabled:!1});return M.translate(0,0,-T/2),this.activeGeometries.push(M),M},h=Math.max(10,e-40),c=a(h),l=new Z(c,s);l.rotation.y=-Math.PI/2,l.position.set(0,20,-t/2+20),this.caulkingGroup.add(l);const f=a(h),m=new Z(f,s);m.rotation.y=Math.PI/2,m.position.set(0,20,t/2-20),this.caulkingGroup.add(m);const p=Math.max(10,t-50),_=a(p),v=new Z(_,s);v.position.set(-e/2+20,20,0),this.caulkingGroup.add(v);const g=a(p),d=new Z(g,s);if(d.rotation.y=Math.PI,d.position.set(e/2-20,20,0),this.caulkingGroup.add(d),n){const{floorSplitCount:T}=this.params,x=(e-80)/3,M=-e/2+30+x,U=e/2-30-x,L=T===3?[M,U]:[0];for(const w of L){const R=a(p),y=new Z(R,s);y.rotation.y=Math.PI,y.position.set(w-10,20,0),this.caulkingGroup.add(y);const b=a(p),A=new Z(b,s);A.position.set(w+10,20,0),this.caulkingGroup.add(A)}}}buildRubberPacking(){const{W:e,D:t,H:n,hasSideReinforcement:s,sideOpeningH:o}=this.params,r=this.params.panelConfig||{},a=this.materials.rubberPackingMaterial;let h=0;const c=(_,v,g,d,T,x,M)=>{const U=new $e(_,v,g);this.activeGeometries.push(U);const L=new Z(U,a);L.position.set(d,T,x),this.rubberPackingGroup.add(L),h+=M},l=1.6,f=3;if((r.back||"acrylic")!=="polyca"){const _=Math.max(10,e-40),v=Math.max(10,n-40),g=-t/2+20+l/2;c(_,f,l,0,20+f/2,g,_),c(f,v,l,-e/2+20+f/2,n/2,g,v),c(f,v,l,e/2-20-f/2,n/2,g,v)}const p=Math.max(10,t-40);if(s){const _=r.sideLower||"acrylic",v=r.sideUpper||"punching",g=Math.max(10,o),d=Math.max(10,n-60-g);if(_!=="polyca")for(const T of[-1,1]){const x=T*(e/2-20)-T*(l/2),M=20+d/2;c(l,f,p,x,20+f/2,0,p),c(l,d,f,x,M,-t/2+20+f/2,d),c(l,d,f,x,M,t/2-20-f/2,d)}if(v!=="polyca")for(const T of[-1,1]){const x=T*(e/2-20)-T*(l/2),M=20+d+20,U=M+g/2;c(l,f,p,x,M+f/2,0,p),c(l,g,f,x,U,-t/2+20+f/2,g),c(l,g,f,x,U,t/2-20-f/2,g)}}else if((r.side||"acrylic")!=="polyca"){const v=Math.max(10,n-40);for(const g of[-1,1]){const d=g*(e/2-20)-g*(l/2);c(l,f,p,d,20+f/2,0,p),c(l,v,f,d,n/2,-t/2+20+f/2,v),c(l,v,f,d,n/2,t/2-20-f/2,v)}}if(h>0){const _=Math.ceil(h/1e3);this.recordPart("モレ対策ゴムパッキン (グレー)",`${_} m`,1,`側面・背面 隙間モレ抑制用 (実施工長: ${Math.round(h)}mm / 1m単位積算)`,"other",{partCode:"NSCP1H-S-6",lengthMm:_*1e3,unitType:"m"})}}buildRoomDivider(){const{W:e,D:t,H:n,cageType:s,frontWideFrame:o,frontWindowH:r}=this.params,h=(this.params.panelConfig||{}).partition||"black_matte",c=Math.max(10,t-32),l=Math.max(10,n-23.5),f=3;let m=this.materials.blackMatteAcrylic,p="acrylic_black_matte_3_0",_="アクリル黒両面マット 3.0mm";if(h==="acrylic")m=this.materials.acrylic,p="acrylic_extrusion_3_0",_="透明アクリル 3.0mm";else if(h==="smoke_gray")m=this.materials.smokeGrayAcrylic,p="acrylic_smoke_gray_3_0",_="アクリル グレースモーク半透明 3.0mm";else if(h==="punching"){const oe=sa(c,l,!1);this.activeTextures.push(oe),m=this.materials.createPunchingMaterial(oe),this.activeMaterials.push(m),p="pvc_punching_3_0",_="塩ビパンチングボード 透明 3.0mm"}const v=t/2-20,g=v-c,d=11.5,T=d+l,x=18,M=new mt;M.moveTo(v,d+x),M.lineTo(v,T),M.lineTo(g+x,T),M.lineTo(g,T-x),M.lineTo(g,d+x),M.lineTo(g+x,d),M.lineTo(v-x,d),M.lineTo(v,d+x);const U=new ft(M,{depth:f,bevelEnabled:!1}),L=U.attributes.position;for(let oe=0;oe<L.count;oe++){const Q=L.getX(oe),re=L.getY(oe),ne=L.getZ(oe);L.setXYZ(oe,ne-f/2,re,Q)}L.needsUpdate=!0;const w=U.attributes.uv;if(w){for(let oe=0;oe<w.count;oe++){const Q=L.getZ(oe),re=L.getY(oe),ne=(Q-g)/c,xe=(re-d)/l;w.setXY(oe,ne,xe)}w.needsUpdate=!0}U.computeVertexNormals(),this.activeGeometries.push(U);const R=new Z(U,m);R.castShadow=!0,R.receiveShadow=!0,R.name="２室分け仕切り板",this.dividerGroup.add(R),this.recordPart(`２室分け仕切り板 (${_})`,`${c} x ${l}`,1,`２室分け仕切り板後付け仕様 (${_})`,"panel",{panelCode:p,partCode:p,widthMm:c,heightMm:l});let y=30;if(s==="A"||s==="A_FRONT"){const oe=o||"2x";oe==="3x"?y=50:oe==="2x"?y=30:y=10}else y=(this.params.hasBottomWideFrame?40:20)+(r||50)+10;const b=18,A=18,B=18,I=3.5,G=new mt;G.moveTo(0,0),G.lineTo(-A,0),G.lineTo(-A,-I),G.lineTo(-I,-I),G.lineTo(-I,-B),G.lineTo(0,-B),G.closePath();const O=new ft(G,{depth:b,bevelEnabled:!1}),Y=O.attributes.position;for(let oe=0;oe<Y.count;oe++){const Q=Y.getX(oe),re=Y.getY(oe),ne=Y.getZ(oe);Y.setXYZ(oe,-f/2+Q,y-b/2+ne,v+re)}Y.needsUpdate=!0,O.computeVertexNormals(),this.activeGeometries.push(O);const z=new Z(O,this.materials.perchAluminum);z.castShadow=!0,z.name="２室分け・ABL-2015-4",this.dividerGroup.add(z);const N=-f/2-A/2,ee=y,ae=v-I-1,ge=new Ke(3.5,3.5,1.8,16);ge.rotateX(Math.PI/2),ge.translate(N,ee,ae),this.activeGeometries.push(ge);const Ce=new Z(ge,this.materials.handleMaterial);Ce.name="２室分け・フレーム固定プラスネジ",this.dividerGroup.add(Ce);const Be=new $e(4,.8,.5);Be.translate(N,ee,ae-.7),this.activeGeometries.push(Be);const j=new Z(Be,this.materials.wireMesh);this.dividerGroup.add(j);const le=new $e(.8,4,.5);le.translate(N,ee,ae-.7),this.activeGeometries.push(le);const Me=new Z(le,this.materials.wireMesh);this.dividerGroup.add(Me);const pe=-f/2-I-2.5,he=y,Ae=v-B/2,me=new Ke(4.8,4.8,5,18);me.rotateZ(Math.PI/2),me.translate(pe,he,Ae),this.activeGeometries.push(me);const Ee=new Z(me,this.materials.perchWhiteScrew);Ee.name="２室分け・M3つまみネジ(ブラケット固定)",this.dividerGroup.add(Ee);const te=n-20+f,K=te+2,D=[{x:-3.5,z:-t/2+50},{x:3.5,z:-t/2+65},{x:-3.5,z:t/2-60},{x:3.5,z:t/2-75}];for(const oe of D){const Q=new Ke(4.5,4.5,4,16);Q.translate(oe.x,K,oe.z),this.activeGeometries.push(Q);const re=new Z(Q,this.materials.perchWhiteScrew);re.name="２室分け・天板M3つまみネジ",this.dividerGroup.add(re);const ne=new Ke(1.5,1.5,7,12);ne.translate(oe.x,te-3.5,oe.z),this.activeGeometries.push(ne);const xe=new Z(ne,this.materials.handleMaterial);this.dividerGroup.add(xe)}this.recordPart("ABL-2015-4","20x15x15mm",1,"２室分け L字ブラケット ABL-2015-4 (シルバー)","rail_cap",{partCode:"ABL-2015-4",unitType:"piece"}),this.recordPart("M3 つまみネジ (白)","M3 x L8mm",5,"２室分け固定・倒れ防止用つまみネジ","other"),this.recordPart("M4 皿ネジ","M4 x L8mm",1,"２室分けフレーム固定用皿ネジ","other")}buildLed(){const{W:e,D:t,H:n,ledType:s,ledPower:o,ledBrightness:r=1,ledColorMode:a,ledRgbColor:h}=this.params;if(!s||s==="none")return;const c=n-32,l=n-20,f=(_,v,g,d,T,x,M)=>{const w=l-(c-g/2),R=(l+(c-g/2))/2;for(const j of[-1,1]){const le=j*(_/2-35),Me=new $e(12,w,2.5);Me.translate(le,R,d),this.activeGeometries.push(Me);const pe=new Z(Me,this.materials.ledBracket);pe.name="LED天板吊り下げステー金具",this.ledGroup.add(pe);const he=new Ke(2.5,2.5,3,12);he.rotateX(Math.PI/2),he.translate(le,l-4,d+2.5/2),this.activeGeometries.push(he);const Ae=new Z(he,this.materials.perchAluminum);this.ledGroup.add(Ae)}const y=new $e(_,g*.65,v);y.translate(0,c+g*.175,d),this.activeGeometries.push(y);const b=new Z(y,this.materials.ledAluminum);b.name="LEDアルミボディ",this.ledGroup.add(b);const A=g*.45,B=v-2,I=c-g*.25;let G;G=new $e(_-4,A,B),G.translate(0,I,d),this.activeGeometries.push(G);const O=this.materials.ledEmissive.clone();if(M){const j=new Je(x);O.color=j,O.emissive=j,O.emissiveIntensity=Math.max(.5,(r||1)*4)}else O.color=new Je(15791094),O.emissive=new Je(0),O.emissiveIntensity=0;const Y=new Z(G,O);Y.name="LED発光ディフューザー",this.ledGroup.add(Y);const z=2.5;for(const j of[-1,1]){const le=j*(_/2+z/2),Me=new $e(z,g+.8,v+.8);Me.translate(le,c,d),this.activeGeometries.push(Me);const pe=new Z(Me,this.materials.perchGrayCap);this.ledGroup.add(pe)}const N=1.8,ee=_/2+z,ae=e/2-25,ge=Math.max(10,ae-ee),Ce=new Ke(N,N,ge,8);Ce.rotateZ(Math.PI/2),Ce.translate(ee+ge/2,c+2,d),this.activeGeometries.push(Ce);const Be=new Z(Ce,this.materials.ledCable);Be.name="LED給電コード",this.ledGroup.add(Be)},m=(_,v,g=350,d=-t/2+55)=>{if(!o||v<=0)return;const T=new Je(_),x=e-44,M=t-44,U=n-44,L=n/2,w=new E(-x/2,22,-M/2),R=new E(x/2,n-22,M/2),y=new E(0,n-32,d),b=`
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,A=`
        uniform vec3 uColor;
        uniform vec3 uBoxMin;
        uniform vec3 uBoxMax;
        uniform vec3 uLightPos;
        uniform float uBarL;
        uniform float uIntensity;

        varying vec3 vWorldPos;

        void main() {
          // 1. ケージ内壁・天井・床・ガラス扉への境界フェード（端から40〜60mmかけて完全に0へ）
          float fadeX = smoothstep(0.0, 55.0, min(vWorldPos.x - uBoxMin.x, uBoxMax.x - vWorldPos.x));
          float fadeY = smoothstep(0.0, 35.0, min(vWorldPos.y - uBoxMin.y, uBoxMax.y - vWorldPos.y));
          float fadeZ = smoothstep(0.0, 55.0, min(vWorldPos.z - uBoxMin.z, uBoxMax.z - vWorldPos.z));
          float boxFade = fadeX * fadeY * fadeZ;

          // 2. 後方天井のLEDバー（ライン光源）からの距離に応じた滑らかな指数減衰
          float clampedX = clamp(vWorldPos.x, -uBarL * 0.45, uBarL * 0.45);
          vec3 lightLinePt = vec3(clampedX, uLightPos.y, uLightPos.z);
          float dist = length(vWorldPos - lightLinePt);

          // LED直下からふんわり広がる柔らかな光のグラデーション
          float glow = exp(-dist * 0.0055);

          // 天井付近の密度と全体への拡散
          float heightRatio = clamp((vWorldPos.y - uBoxMin.y) / (uBoxMax.y - uBoxMin.y), 0.0, 1.0);
          float verticalSpread = pow(heightRatio, 1.6);

          float alpha = clamp(boxFade * (glow * 0.65 + verticalSpread * 0.35) * uIntensity * 0.28, 0.0, 0.5);

          gl_FragColor = vec4(uColor, alpha);
        }
      `,B=new $e(x,U,M);B.translate(0,L,0),this.activeGeometries.push(B);const I=new ii({vertexShader:b,fragmentShader:A,uniforms:{uColor:{value:T},uBoxMin:{value:w},uBoxMax:{value:R},uLightPos:{value:y},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:rr,depthWrite:!1,side:Jt});this.activeMaterials.push(I);const G=new Z(B,I);G.name="ケージ室内大気グラデーションフォグ",this.ledGroup.add(G);const O=`
        uniform vec3 uColor;
        uniform vec3 uBoxMin;
        uniform vec3 uBoxMax;
        uniform vec3 uLightPos;
        uniform float uBarL;
        uniform float uIntensity;

        varying vec3 vWorldPos;

        void main() {
          // 端のフェードアウト（四角い板のエッジを完全に消去）
          float fadeX = smoothstep(0.0, 45.0, min(vWorldPos.x - uBoxMin.x, uBoxMax.x - vWorldPos.x));
          float fadeZ = smoothstep(0.0, 45.0, min(vWorldPos.z - uBoxMin.z, uBoxMax.z - vWorldPos.z));
          float borderFade = fadeX * fadeZ;

          // LEDライン直下（床面後方）からの距離
          float clampedX = clamp(vWorldPos.x, -uBarL * 0.45, uBarL * 0.45);
          vec2 lightLine2D = vec2(clampedX, uLightPos.z);
          float dist = length(vec2(vWorldPos.x, vWorldPos.z) - lightLine2D);

          float glow = exp(-dist * 0.0058);
          float alpha = clamp(borderFade * glow * uIntensity * 0.38, 0.0, 0.6);

          gl_FragColor = vec4(uColor, alpha);
        }
      `,Y=new ui(x,M);Y.rotateX(-Math.PI/2),Y.translate(0,20.6,0),this.activeGeometries.push(Y);const z=new ii({vertexShader:b,fragmentShader:O,uniforms:{uColor:{value:T},uBoxMin:{value:w},uBoxMax:{value:R},uLightPos:{value:y},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:rr,depthWrite:!1});this.activeMaterials.push(z);const N=new Z(Y,z);N.name="床面LED受光グラデーション",this.ledGroup.add(N);const ee=`
        uniform vec3 uColor;
        uniform vec3 uBoxMin;
        uniform vec3 uBoxMax;
        uniform vec3 uLightPos;
        uniform float uBarL;
        uniform float uIntensity;

        varying vec3 vWorldPos;

        void main() {
          float fadeX = smoothstep(0.0, 45.0, min(vWorldPos.x - uBoxMin.x, uBoxMax.x - vWorldPos.x));
          float fadeY = smoothstep(0.0, 35.0, min(vWorldPos.y - uBoxMin.y, uBoxMax.y - vWorldPos.y));
          float borderFade = fadeX * fadeY;

          // 天井後方のLEDバーからの距離
          float clampedX = clamp(vWorldPos.x, -uBarL * 0.45, uBarL * 0.45);
          vec2 lightLine2D = vec2(clampedX, uLightPos.y);
          float dist = length(vec2(vWorldPos.x, vWorldPos.y) - lightLine2D);

          float glow = exp(-dist * 0.0075);
          float alpha = clamp(borderFade * glow * uIntensity * 0.32, 0.0, 0.55);

          gl_FragColor = vec4(uColor, alpha);
        }
      `,ae=new ui(x,U);ae.translate(0,L,-t/2+20.6),this.activeGeometries.push(ae);const ge=new ii({vertexShader:b,fragmentShader:ee,uniforms:{uColor:{value:T},uBoxMin:{value:w},uBoxMax:{value:R},uLightPos:{value:y},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:rr,depthWrite:!1});this.activeMaterials.push(ge);const Ce=new Z(ae,ge);Ce.name="背面LED受光グラデーション",this.ledGroup.add(Ce)},p=-t/2+55;switch(s){case"usb":{const _=Math.min(350,e-60);let v=16777215;a==="warm"?v=16754470:a==="all"&&(v=16769202),f(_,18,13,p,!1,v,!!o),m(v,r,_,p),this.recordPart("USB 二色60LEDアルミライトバー [4023]","350mm",1,"USB給電アルミライトバー (白＆電球色 3パターン切替)","other",{partCode:"LED-4023",unitType:"piece",isLedOption:!0,ledKey:"ledUsb"});break}case"rgbw":{const _=Math.min(530,e-60),v=h||"#ffffff";f(_,18,13,p,!1,v,!!o),m(v,r*1.15,_,p),this.recordPart("RGB+W LEDライトバー 30LED [6839]","530mm",1,"RGBフルカラー+独立ホワイト素子アルミバー","other",{partCode:"LED-6839",unitType:"piece",isLedOption:!0,ledKey:"ledRgbw"}),this.recordPart("RGB+W 専用コントローラー [8166]","リモコン付属",1,"調光・調色RFリモコン式コントローラー","other",{partCode:"LED-8166",unitType:"piece",isLedOption:!0}),this.recordPart("ACアダプター 12V 1.5A [6207]","12V 1.5A",1,"DC12V電源アダプター","other",{partCode:"LED-6207",unitType:"piece",isLedOption:!0}),this.recordPart("RGB+W用 5pin延長コード1m [6433]","1m",1,"配線取り回し用 5pin延長コード","other",{partCode:"LED-6433",unitType:"piece",isLedOption:!0});break}}}recordPart(e,t,n,s,o="other",r={}){const a=typeof t=="number"?`${Math.round(t)} mm`:t,h=typeof t=="number"?Math.round(t):r.lengthMm||null;let c=e;if(typeof t=="number"&&e.includes("-")){const l=e.split("-");isNaN(l[l.length-1])||(c=l.slice(0,-1).join("-"))}this.partsList.push({name:e,size:a,count:n,note:s,category:o,lengthMm:h,partCode:r.partCode||c,unitType:r.unitType||(typeof t=="number"?"m":"piece"),...r})}getPartsSummary(){return this.partsList}}class t2{constructor(){this.group=new pt,this.group.name="DimensionLines",this.lineMaterial=new nh({color:165063,linewidth:2,depthTest:!1,transparent:!0,opacity:.85}),this.textSprites=[],this.activeGeometries=[]}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e)}for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.textSprites)e.material.map&&e.material.map.dispose(),e.material.dispose();this.textSprites=[]}createTextSprite(e,t="#38bdf8",n="#ffffff",s="rgba(20, 26, 38, 0.88)"){const o=document.createElement("canvas");o.width=384,o.height=120;const r=o.getContext("2d");r.fillStyle=s,r.strokeStyle=t,r.lineWidth=4;const a=24;r.beginPath(),r.roundRect(10,10,364,100,a),r.fill(),r.stroke(),r.font="bold 44px sans-serif",r.fillStyle=n,r.textAlign="center",r.textBaseline="middle",r.fillText(e,192,60);const h=new Fa(o);h.minFilter=Yt;const c=new nf({map:h,depthTest:!1,transparent:!0}),l=new F1(c);return l.scale.set(90,30,1),this.textSprites.push(l),l}update(e){this.clear();const{W:t,D:n,H:s,cageType:o,frontWindowH:r,hasSideReinforcement:a,sideOpeningH:h}=e,c=5,l=n/2+55,f=this.createTextSprite(`W: ${t} mm`,"#38bdf8","#ffffff");f.position.set(0,c,l),this.group.add(f);const m=t/2+55,p=5,_=this.createTextSprite(`D: ${n} mm`,"#38bdf8","#ffffff");_.position.set(m,p,0),this.group.add(_);const v=-t/2-55,g=n/2,d=this.createTextSprite(`H: ${s} mm`,"#38bdf8","#ffffff");if(d.position.set(v,s/2,g),this.group.add(d),o==="C"){const T=t/2+50,x=n/2+10,M=20+r/2,U=this.createTextSprite(`前窓: ${r} mm`,"#fb923c","#ffffff","rgba(35, 20, 12, 0.9)");U.scale.set(80,27,1),U.position.set(T,M,x),this.group.add(U)}if(a){const T=-t/2-50,x=0,M=h,U=s-20-M/2,L=this.createTextSprite(`側面上部開口: ${M} mm`,"#34d399","#ffffff","rgba(12, 32, 24, 0.9)");L.scale.set(95,27,1),L.position.set(T,U,x),this.group.add(L)}}setVisible(e){this.group.visible=e}}class n2{constructor(e){this.container=e,this.width=e.clientWidth,this.height=e.clientHeight,this.scene=new tf,this.scene.background=null,this.camera=new fn(40,this.width/this.height,1,8e3),this.camera.position.set(-1130,740,1070),this.isAutoRotating=!1,this._autoRotateAngle=0,this._autoRotateSpeed=.003,this._lastAutoParams=null,this.renderer=new D1({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bu,this.renderer.toneMapping=Tu,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement);const t=new Dc(this.renderer);t.compileEquirectangularShader();const n=t.fromScene(new Bv,.04).texture;this.scene.environment=n,this.controls=new Tv(this.camera,this.renderer.domElement),this.controls.target.set(-60,100,-15),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI-.05,this.controls.minDistance=200,this.controls.maxDistance=4e3,this.setupLighting(),this.setupFloorGrid(),this.materials=new Ov,this.cageModel=new e2(this.materials),this.scene.add(this.cageModel.root),this.dimensions=new t2,this.scene.add(this.dimensions.group),window.addEventListener("resize",()=>this.onResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupLighting(){this.studioLights=[];const e=new gv(16777215,1975344,.38);e.position.set(0,1e3,0),this.scene.add(e),this.studioLights.push({light:e,baseIntensity:.38});const t=new ta(16777215,1.35);t.position.set(1e3,1600,1200),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=100,t.shadow.camera.far=4e3;const n=1e3;t.shadow.camera.left=-n,t.shadow.camera.right=n,t.shadow.camera.top=n,t.shadow.camera.bottom=-n,t.shadow.bias=-5e-4,t.shadow.radius=3.5,this.scene.add(t),this.studioLights.push({light:t,baseIntensity:1.35});const s=new ta(16777215,.65);s.position.set(0,1200,0),this.scene.add(s),this.studioLights.push({light:s,baseIntensity:.65});const o=new ta(16777215,.5);o.position.set(-1e3,1e3,-1200),this.scene.add(o),this.studioLights.push({light:o,baseIntensity:.5});const r=new ta(2765376,.25);r.position.set(0,-1e3,0),this.scene.add(r),this.studioLights.push({light:r,baseIntensity:.25}),this.ledLightGroup=new pt,this.scene.add(this.ledLightGroup),this.isDarkroomMode=!1,this.manualDarkroomOverride=null}setupFloorGrid(){this.gridHelper=new yv(2400,24,5924219,3028291),this.gridHelper.position.y=-10,this.scene.add(this.gridHelper);const e=new ui(3e3,3e3),t=new mv({opacity:.35});this.floor=new Z(e,t),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-10.1,this.floor.receiveShadow=!0,this.scene.add(this.floor)}applyDarkroomMode(e){this.isDarkroomMode=e;const t=e?.05:1;if(this.studioLights)for(const n of this.studioLights)n.light.intensity=n.baseIntensity*t;this.gridHelper&&(this.gridHelper.material.opacity=e?.15:.85,this.gridHelper.material.transparent=!0),this.container&&this.container.classList.toggle("darkroom-active",e)}setDarkroomOverride(e){this.manualDarkroomOverride=e,this._lastAutoParams&&this.updateLedLighting(this._lastAutoParams)}updateLedLighting(e){for(;this.ledLightGroup.children.length>0;){const v=this.ledLightGroup.children[0];v.target&&v.target.parent&&v.target.parent.remove(v.target),this.ledLightGroup.remove(v),v.dispose&&v.dispose()}const{W:t,D:n,H:s,ledType:o,ledPower:r,ledBrightness:a=1,ledColorMode:h,ledRgbColor:c}=e,l=o&&o!=="none"&&!!r,f=this.manualDarkroomOverride!==null?this.manualDarkroomOverride:l;if(this.applyDarkroomMode(f),!l)return;const m=s-34,p=-n/2+55,_=(v,g,d,T,x=1)=>{const M=new vv(T,a*6.5*x);M.position.set(v,g,d),M.angle=Math.PI/2.3,M.penumbra=.85,M.decay=1.2,M.distance=Math.max(s*2,800);const U=new Ft;U.position.set(v,20,0),this.scene.add(U),M.target=U,this.ledLightGroup.add(M);const L=new uf(T,a*2.8*x,Math.max(t,n)*2.2);L.position.set(v,s*.65,d+25),this.ledLightGroup.add(L)};if(o==="usb"){let v=16777215;h==="warm"?v=16754470:h==="all"&&(v=16769722),_(0,m,p,v)}else if(o==="high_cri_white")_(0,m,p,16579578);else if(o==="red")_(0,m,p,16717636,1.4);else if(o==="white_and_red"){const v=h==="all"||h==="both"||h==="white",g=h==="all"||h==="both"||h==="red";v&&_(0,m,-n/2+85,16579578,1),g&&_(0,m,-n/2+45,16717636,1.3)}else o==="rgbw"&&_(0,m,p,c||"#ffffff",1.2)}setFrameColor(e){this.materials.setFrameColor(e)}update(e){this._lastAutoParams=e;const t=e.footType==="caster"?-66:-11;this.gridHelper&&(this.gridHelper.position.y=t),this.floor&&(this.floor.position.y=t-.1),this.cageModel.update(e),this.dimensions.update(e),this.updateLedLighting(e);const n=e.H/2;this.controls.target.set(0,n,0)}setDimensionsVisible(e){this.dimensions.setVisible(e)}setPanelsVisible(e){this.cageModel.panelGroup.visible=e,this.cageModel.doorGroup.visible=e}setDoorState(e){this.cageModel.params.doorState=e,this.cageModel.buildDoors()}setViewPreset(e,t){const n=t.H||300,s=t.W||750,o=t.D||450,r=n/2,a=Math.max(s,o,n)*2.2;switch(this.controls.target.set(0,r,0),e){case"front":this.controls.target.set(0,r,0),this.camera.position.set(0,r,a);break;case"iso":default:{const c=Math.max(s,o,n)*1.5;this.controls.target.set(0,n*.45,0),this.camera.position.set(-c*.82,n*1.05+c*.55,c*.82);break}case"top":this.controls.target.set(0,r,0),this.camera.position.set(0,r+a*1.3,1);break;case"side":this.controls.target.set(0,r,0),this.camera.position.set(a,r,0);break;case"bottom":this.controls.target.set(0,r,0),this.camera.position.set(a*.4,-a*.7,a*.6);break}this.controls.update()}onResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setAutoRotate(e,t){if(this.isAutoRotating=e,e){const n=this.controls.target,s=this.camera.position.x-n.x,o=this.camera.position.y-n.y,r=this.camera.position.z-n.z,a=Math.sqrt(s*s+o*o+r*r);this._autoRotateAngle=Math.atan2(r,s),this._autoRotatePhi=Math.asin(Math.max(-1,Math.min(1,o/a))),this._autoTargetYOffset=0,this._autoRadiusScale=1,this._lastAutoParams=t?{...t}:null,this.controls.enableDamping=!1,this.controls.enabled=!1,this._setupAutoRotateDrag()}else this.controls.enabled=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this._teardownAutoRotateDrag()}_setupAutoRotateDrag(){const e=this.renderer.domElement;this._dragState={active:!1,button:-1,lastY:0},this._onPointerDown=t=>{this._dragState.active=!0,this._dragState.button=t.button,this._dragState.lastY=t.clientY,t.preventDefault()},this._onPointerMove=t=>{if(!this._dragState.active)return;const n=t.clientY-this._dragState.lastY;this._dragState.lastY=t.clientY;const s=.005;if(this._dragState.button===0)this._autoRotatePhi-=n*s,this._autoRotatePhi=Math.max(-.05,Math.min(Math.PI/2-.05,this._autoRotatePhi));else if(this._dragState.button===2){const o=this._lastAutoParams&&this._lastAutoParams.H||300;this._autoTargetYOffset-=n*.5;const r=o*.8;this._autoTargetYOffset=Math.max(-r,Math.min(r,this._autoTargetYOffset))}},this._onPointerUp=()=>{this._dragState.active=!1,this._dragState.button=-1},this._onWheel=t=>{t.preventDefault();const n=.001;this._autoRadiusScale*=1+t.deltaY*n,this._autoRadiusScale=Math.max(.3,Math.min(3,this._autoRadiusScale))},e.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),e.addEventListener("wheel",this._onWheel,{passive:!1}),this._onContextMenu=t=>t.preventDefault(),e.addEventListener("contextmenu",this._onContextMenu)}_teardownAutoRotateDrag(){const e=this.renderer.domElement;this._onPointerDown&&e.removeEventListener("pointerdown",this._onPointerDown),this._onPointerMove&&window.removeEventListener("pointermove",this._onPointerMove),this._onPointerUp&&window.removeEventListener("pointerup",this._onPointerUp),this._onWheel&&e.removeEventListener("wheel",this._onWheel),this._onContextMenu&&e.removeEventListener("contextmenu",this._onContextMenu),this._onPointerDown=null,this._onPointerMove=null,this._onPointerUp=null,this._onWheel=null,this._onContextMenu=null}_calcAutoRotateCamera(e){const t=e&&e.W||750,n=e&&e.D||450,s=e&&e.H||300,o=Math.max(t,n,s)*1.45,r=s*.5;return{radius:o,targetY:r}}animate(){if(requestAnimationFrame(this.animate),this.cageModel.updateDoorAnimation(),this.isAutoRotating&&this._lastAutoParams){this._autoRotateAngle+=this._autoRotateSpeed;const{radius:e,targetY:t}=this._calcAutoRotateCamera(this._lastAutoParams),n=e*(this._autoRadiusScale||1),s=this._autoRotatePhi,o=Math.cos(s),r=Math.cos(this._autoRotateAngle)*n*o,a=Math.sin(this._autoRotateAngle)*n*o,h=t+(this._autoTargetYOffset||0)+n*Math.sin(s),c=t+(this._autoTargetYOffset||0);this.camera.position.set(r,h,a),this.camera.lookAt(0,c,0)}else this.controls.update();this.renderer.render(this.scene,this.camera)}getPartsSummary(){return this.cageModel.getPartsSummary()}captureImage(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}}const He={frames:{"AFS-2020-4":{name:"2020標準フレーム (シルバー)",unit:"m",weightPerMeter:.437,pricePerMeter:801,note:"標準4面溝あり"},"AFSF-2020-4":{name:"2020フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.44,pricePerMeter:801,note:"補強・中桟用 1面フラット"},"AFSW-2020-4":{name:"2020フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.444,pricePerMeter:801,note:"2面フラット"},"AFS-2040-4":{name:"2040フレーム (シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面2倍幅・40mm高"},"AFSF-2040-4":{name:"2040フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.712,pricePerMeter:1394,note:"40mm幅 1面フラット"},"AFST-2040-4":{name:"2040フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.715,pricePerMeter:1394,note:"40mm幅 2面フラット"},"AFS-2060-4":{name:"2060フレーム (シルバー)",unit:"m",weightPerMeter:1.09,pricePerMeter:1923,note:"正面3倍幅・60mm高"},"AFS-4040-4":{name:"4040フレーム (シルバー)",unit:"m",weightPerMeter:1.188,pricePerMeter:2095,note:"正面下部 40x40枠囲い用"},"AFS-2020-4-BK":{name:"2020フレーム (ブラック)",unit:"m",weightPerMeter:.437,pricePerMeter:1037,note:"ブラックアルマイト"},"AFS-2040-4-BK":{name:"2040フレーム (ブラック)",unit:"m",weightPerMeter:.752,pricePerMeter:1809,note:"ブラックアルマイト 40mm高"},"AFS-4040-4-BK":{name:"4040フレーム (ブラック)",unit:"m",weightPerMeter:1.188,pricePerMeter:2710,note:"正面下部 40x40枠囲い用 (ブラック)"},"AFS-2020-5":{name:"2020フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.404,pricePerMeter:822,note:"天面金網受用 (5シリーズ)"},"AFS-2040-5":{name:"2040フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面枠囲い天面金網用 (シルバー・5シリーズ)"},"AFS-1530-6":{name:"1530フレーム (シルバー)",unit:"m",weightPerMeter:.684,pricePerMeter:1273,note:"止まり木垂直吊り下げ用フレーム"},"ASTP-30":{name:"φ30アルミパイプ (シルバー)",unit:"m",weightPerMeter:.795,pricePerMeter:1874,note:"止まり木丸棒"}},rails:{"PGRU-03-4-GY":{name:"上側ガラスレール (グレー)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部"},"PGRU-03-4-BK":{name:"上側ガラスレール (ブラック)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部 (黒ケージ連動)"},"PGRL-03-4-GY":{name:"下側ガラスレール (グレー)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用"},"PGRL-03-4-BK":{name:"下側ガラスレール (ブラック)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用 (黒ケージ連動)"}},packings:{"NSCP1H-S-6":{name:"モレ対策ゴムパッキン (グレー)",unit:"m",weightPerMeter:.035,pricePerMeter:841/6,note:"側面・背面 隙間モレ抑制用"}},caps:{"ECP-2020-4":{name:"2020用エンドキャップ",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"奥行きフレーム両端用"},"ECP-2020-4-GY":{name:"2020用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"止まり木天板固定フレーム両端用"},"ECP-1530-6":{name:"1530用エンドキャップ (ブラック)",unit:"piece",weightPerPiece:.0016,pricePerPiece:143,note:"止まり木吊り下げフレーム下端用"},"ABL-2015-4":{name:"L字ブラケット ABL-2015-4 (シルバー)",unit:"piece",weightPerPiece:.0041,pricePerPiece:201,note:"2室分け仕切り板固定用L字ブラケット (シルバー固定)"},"ECP-2040-4":{name:"2040用エンドキャップ",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (ブラック)"},"ECP-2040-4-GY":{name:"2040用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (グレー)"}},hardware:{"TH-31":{name:"TH-31 ステンレス蝶番",unit:"piece",weightPerPiece:.028,pricePerPiece:347,note:"前開き扉用 ステンレス製平蝶番 (下部2箇所)"},"C-1249-4":{name:"C-1249-4 ステンレス打掛",unit:"piece",weightPerPiece:.05,pricePerPiece:660,note:"前開き扉用 ステンレス製打掛錠 (上部2箇所)"},"CP-294N":{name:"タキゲン CP-294N スライドラッチ",unit:"piece",weightPerPiece:.055,pricePerPiece:792,note:"正面枠囲い扉用 ワンタッチスライドラッチ (左右各1個)"},"ACRYLIC-ROUND-20-5":{name:"アクリル丸板 透明 φ20mm t5mm (穴加工済)",unit:"piece",weightPerPiece:.002,pricePerPiece:190,note:"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)"},"GROMMET-30":{name:"配線用ゴムグロメット (φ30穴用, 黒)",unit:"piece",weightPerPiece:.005,pricePerPiece:80,note:"天面板 奥側配線用グロメット"},RNSFS4:{name:"段付きローレットノブ (SUS303, RNSFS4)",unit:"piece",weightPerPiece:.012,pricePerPiece:350,note:"引き違い扉用 ステンレスつまみ"},"C-108":{name:"プッシュ式スライド扉鍵 (C-108)",unit:"piece",weightPerPiece:.045,pricePerPiece:800,note:"右スライド扉 下部プッシュ式シリンダー錠"},"RUBBER-FOOT":{name:"ゴム脚 (黒)",unit:"piece",weightPerPiece:.008,pricePerPiece:60,note:"床面接地用ゴム脚 (座金入り)"},"CASTER-50":{name:"自在キャスター",unit:"piece",weightPerPiece:.12,pricePerPiece:200,note:"車輪径φ50 自在キャスター"},"SCREW-M4-KNOB":{name:"No.1 化粧つまみネジ (ホワイト)",unit:"piece",weightPerPiece:.0025,pricePerPiece:25,note:"床下パネルヒータ支え板・換気量調整板用 手締め化粧ネジ"},"SCREW-M3-KNOB":{name:"M3 つまみネジ (白)",unit:"piece",weightPerPiece:.002,pricePerPiece:25,note:"止まり木・仕切り板用 固定つまみネジ"},"BOLT-M6-20":{name:"M6 ボルト",unit:"piece",weightPerPiece:.008,pricePerPiece:30,note:"止まり木 φ30丸棒固定用ボルト"},"SCREW-M4-FLAT":{name:"M4 皿ネジ",unit:"piece",weightPerPiece:.003,pricePerPiece:15,note:"仕切り板フレーム固定用皿ネジ"}},panels:{acrylic_extrusion_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:7568,note:"標準透明パネル (床・背・側面・天面・固定窓 / acrylic_extrusion_price_config.jsより自動積算)"},acrylic_cast_3_0:{name:"透明アクリル 3.0mm (キャスト板・正面扉専用)",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:14652,note:"正面扉専用 (キャスト板 / acrylic_cast_price_config.jsより自動積算: 穴加工2箇所310円+磨き4辺2056円=計2366円/枚込)"},polyca_4_0:{name:"中空ポリカ 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.9,pricePerM2:7500,note:"高断熱・軽量中空ポリカーボネート"},danplate_4_0:{name:"プラダン 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.66,pricePerM2:1e3,note:"床下パネルヒータ用 緩衝プラダン"},pvc_punching_3_0:{name:"塩ビパンチングボード 透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:4.3,pricePerM2:20092,note:"通気孔パネル (φ3.1-P7 / pvc_punching_price_config.js価格表より自動積算)"},acrylic_black_matte_3_0:{name:"アクリル黒両面マット 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10344,baseCostPerPiece:400,note:"低反射・マットブラックアクリル (acrylic_black_matte_price_config.jsより自動積算 / スライド部材は固定原価+400円)"},acrylic_smoke_gray_3_0:{name:"アクリル グレースモーク半透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10976,note:"暗め半透明スモークアクリル (コモグラス 530K / acrylic_smoke_gray_price_config.jsより自動積算)"},acrylic_extrusion_1_5:{name:"透明アクリル 1.5mm",thicknessMm:1.5,unit:"m2",weightPerM2:1.8,pricePerM2:4336,note:"側面換気量調整板等 (acrylic_extrusion_price_config.jsより自動積算)"},acrylic_extrusion_2_0:{name:"透明アクリル 2.0mm",thicknessMm:2,unit:"m2",weightPerM2:2.4,pricePerM2:5296,note:"予備・薄物パネル (acrylic_extrusion_price_config.jsより自動積算)"},wire_mesh_15:{name:"金網15mmピッチ（黒粉体塗装）",pitchMm:15,unit:"m2",weightPerM2:8.9,pricePerM2:42712,note:"天面金網 (FENP15, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_25:{name:"金網25mmピッチ（黒粉体塗装）",pitchMm:25,unit:"m2",weightPerM2:6.2,pricePerM2:25627,note:"天面金網 (FENP25, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_30:{name:"金網30mmピッチ（黒粉体塗装）",pitchMm:30,unit:"m2",weightPerM2:4.4,pricePerM2:14949,note:"天面金網 (FENP30, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"}},options:{labor:{splitFloor:{name:"床面2分割 加工工賃",price:500,note:"床面中央補強フレーム追加に伴う2分割加工工賃"},splitTop:{name:"天面2分割 加工工賃",price:500,note:"天面中央補強フレーム追加に伴う2分割加工工賃 (幅940mm超の必須時を含む)"},typeC:{name:"Type C (前窓＋扉) 加工工賃",price:500,note:"下部アクリル固定窓および扉加工に伴う加工工賃"},splitSide:{name:"側面2分割 加工工賃",price:1e3,note:"側面補強フレーム追加に伴う左右側面の上下2分割加工工賃"},frontWide3x:{name:"正面下側幅広フレーム3倍幅 加工工賃",price:500,note:"正面下側フレームの3倍幅(60mm)特殊加工工賃"},perch:{name:"止まり木 加工工賃",price:1e3,note:"天板付け止まり木 穴あけ・組み立て加工工賃"},rubberPacking:{name:"モレ対策ゴムパッキン 加工工賃",price:800,note:"側面・背面隙間モレ抑制ゴムパッキン施工工賃 (施工面数に関わらず一律)"},roomDivider:{name:"2室分け仕切り板 加工工賃",price:500,note:"仕切り板C面カット・取付穴あけ・組み立て加工工賃"},frontOpenDoor:{name:"TypeA 前開き 加工工賃",price:3e3,note:"前開き扉 切欠き・穴あけ加工工賃"},frontFramedDoor:{name:"TypeA 正面枠囲い 加工工賃",price:5e3,note:"正面枠囲いアルミ扉・ラッチ組み立て加工工賃"},floorHeaterSupport:{name:"床下パネルヒータ支え板 加工工賃",price:1e3,note:"床下パネルヒータ支え板 取り付け・加工工賃"},wideBottom:{name:"下側幅広フレーム 加工工賃",price:2e3,note:"下側幅広フレーム（高さ40mm・外周）加工・組立工賃"},wideTop:{name:"上側幅広フレーム 加工工賃",price:2e3,note:"上側幅広フレーム（高さ40mm・外周）加工・組立工賃（上下両方で計4000円）"}},items:{caster:{name:"自在キャスター仕様 (4輪)",price:1500,cost:800,note:"車輪径φ50 / 取付高66mm (標準ゴム脚からの変更)"},sideVentCover:{name:"側面換気量調整板 (つまみネジ付)",price:500,cost:200,holeCostPerPiece:94,holesPerPanel:4,note:"t1.5透明アクリル外張り＋φ6mm穴加工4箇所/枚＋No.1化粧つまみネジ (穴加工費は原価に積み上げ)"},ledUsb:{name:"LED照明: USB式 白＆電球色 LED",price:3e3,cost:1980,length:350,weight:.12,note:"USB 二色60LEDアルミライトバー [4023] (USB-A給電・3パターン切替)"},ledRgbw:{name:"LED照明: リモコン操作 RGB+W",price:6500,cost:5490,length:530,weight:.35,note:"RGB+W 30LED[6839] + 専用コントローラー[8166] + 12Vアダプター[6207] + 5pin延長コード1m[6433]"},floorHeaterSupport:{name:"床下パネルヒータ支え板",holeCostPerPiece:112,diagonalCutCost:239,cornerCutCost:587,screwCostPerPiece:25,note:"透明アクリル2mm＋緩衝プラダン4mm＋穴加工＋斜めカット＋切欠き＋化粧ネジ"}}},pricing:{markupRate:1.3,roundingUnit:100,note:"基本販売価格 = Math.ceil((baseMaterialsCost * markupRate) / roundingUnit) * roundingUnit"},system:{gasLogEndpointUrl:"https://script.google.com/macros/s/AKfycbwWv5VmeJGCnvvD0U3WTJBkT3ZnrFIj1qUHXXMlF2TA3vn2hSu9J1zp-9fc4PY_whjp/exec",shop:{name:"Animal SHOP きなと",subtitle:"3Dケージ設計・見積もりシミュレーター",logoUrl:"/logo_kinato.png",characterUrl:"/character_transparent.png",contactUrl:""}}},Ua=[{id:"standard",name:"標準仕様",icon:"📐",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","標準枠2倍幅"],desc:"サイズやオプション変更してカスタマイズしてください。"},{id:"leopard_gecko",name:"レオパ向け",icon:"🦎",W:540,D:400,H:200,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)"],desc:"保温性ありのレオパちゃんにゆったりサイズ"},{id:"ball_python",name:"ボールパイソン向け",icon:"🐍",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","ロータイプ"],desc:"保温性抜群のロータイプケージ"},{id:"carpet_python",name:"カーペットパイソン",icon:"🐍",W:900,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:50,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,floorSplitCount:2,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type C (前窓50)","ブラック","黒アクリル(側・背)","たわみ防止レール"],desc:"のびのび多彩なレイアウトを組める広々サイズ"},{id:"tortoise",name:"リクガメ",icon:"🐢",W:900,D:500,H:500,cageType:"C",frameColor:"silver",frontWindowH:120,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,floorSplitCount:2,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"mesh30",topLeft:"mesh30",topRight:"mesh30"},tags:["Type C (前窓120)","シルバー","天板金網30mm","たわみ防止レール"],desc:"熱源ライトを安心しておける天板金網仕様"},{id:"bearded_dragon",name:"フトアゴヒゲトカゲ",icon:"🦎",W:800,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:80,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!0,sideOpeningH:200,hasSideVentCover:!1,hasFloorReinforcement:!0,floorSplitCount:2,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"mesh25",topLeft:"mesh25",topRight:"mesh25"},tags:["Type C (前窓80)","ブラック","天板金網25mm","側面2分割","たわみ防止レール"],desc:"通気性も確保しつつ、熱源ライト乗せれる金網仕様"},{id:"hedgehog",name:"ハリネズミ",icon:"🦔",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","側面2分割","換気量調整板"],desc:"側面、背面中空ポリカ・側面2分割・換気量調整板仕様"},{id:"hamster",name:"ハムスター向け",icon:"🐹",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"3x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","正面幅広3倍","中空ポリカ","換気量調整板"],desc:"正面幅広フレーム3倍＆中空ポリカ・換気量調整板仕様"},{id:"sugar_glider",name:"フクロモモンガ",icon:"🐿️",W:350,D:350,H:500,cageType:"A_FRONT",frameColor:"silver",frontWideFrame:"none",hasSideReinforcement:!1,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"punching",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},doorHingeSide:"left",tags:["Type A (前開き)","シルバー","側面パンチング","換気量調整板"],desc:"W350×D350×H500mm前開き仕様。側面全面パンチング＆外張り側面換気量調整板で通気・保温を両立"}],i2=1.6,s2=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"}],o2=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"},{min:1801,max:1900,label:"1801〜1900"},{min:1901,max:2e3,label:"1901〜2000"}],r2={15:[[4970,null,null,null,null,null,null,null],[5240,5290,null,null,null,null,null,null],[7730,7850,7920,null,null,null,null,null],[7920,7980,8040,8110,null,null,null,null],[8040,8070,8110,8170,8230,null,null,null],[8730,8790,8860,8930,8990,9060,null,null],[8990,9060,9120,9200,9260,9320,9400,null],[10440,10500,10540,10570,10610,10640,10680,10710]],25:[[2760,null,null,null,null,null,null,null],[3720,3770,null,null,null,null,null,null],[5280,5410,5470,null,null,null,null,null],[5470,5530,5600,5660,null,null,null,null],[5600,5630,5660,5720,5790,null,null,null],[5950,6020,6080,6150,6220,6280,null,null],[6220,6280,6350,6420,6480,6550,6620,null],[7080,7140,7180,7210,7250,7280,7320,7350],[9910,10910,11460,12030,12400,12780,13170,13830],[10420,11470,12040,12650,13040,13440,13850,14540],[10940,12040,12650,13290,13690,14110,14540,15280],[11500,12650,13290,13970,14390,14830,15280,16040],[12080,13280,13950,14660,15100,15560,16030,16840],[12680,13950,14660,15390,15860,16340,16830,17680],[13070,14390,15110,15870,16350,16840,17360,18230],[13470,14830,15570,16360,16850,17370,17890,18800],[13880,15280,16040,16850,17370,17890,18440,19360]],30:[[2750,null,null,null,null,null,null,null],[2770,2800,null,null,null,null,null,null],[2800,2820,2860,null,null,null,null,null],[2820,2860,2880,2900,null,null,null,null],[2860,2880,2900,2920,2940,null,null,null],[3100,3150,3190,3230,3280,3150,null,null],[3150,3190,3230,3280,3320,3360,3470,null],[3370,3410,3450,3500,3530,3560,3590,3650],[5060,5830,6990,7350,7500,7580,7740,7900],[5580,6420,7710,8100,8260,8350,8520,8690],[5860,6740,8100,8510,8680,8780,8960,9150],[6040,6950,8350,8770,8950,9040,9230,9420],[6230,7160,8600,9030,9220,9310,9500,9700],[6420,7380,8860,9310,9500,9610,9810,10010],[6620,7610,9140,9600,9800,9900,10100,10310],[6810,7840,9420,9890,10090,10200,10410,10620],[6950,8e3,9610,10090,10300,10410,10620,10840]]};function Nd(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function a2(i,e,t){const n=parseInt(i,10),s=r2[n];if(!s)return null;const o=Math.max(e,t),r=Math.min(e,t),a=Nd(o,o2),h=Nd(r,s2);if(a===-1||h===-1)return null;if(a>=s.length){const f=s[s.length-1];return f[Math.min(h,f.length-1)]||null}const c=s[a];if(!c)return null;const l=c[h];if(l!=null)return l;for(let f=h;f>=0;f--)if(c[f]!=null)return c[f];return null}function ah(i,e,t){const n=a2(i,e,t);return n==null?null:Math.round(n*i2)}function yr(i,e,t,n,s){if(!i||!e||!t||!n||!s)return null;const o=Math.max(i,e),r=Math.min(i,e),a=n.map(w=>w.max),h=t.map(w=>w.max);let c=0;for(;c<a.length-1&&r>a[c+1];)c++;let l=0;for(;l<h.length-1&&o>h[l+1];)l++;const f=a[c],m=a[Math.min(c+1,a.length-1)],p=h[l],_=h[Math.min(l+1,h.length-1)],v=m===f?0:Math.max(0,Math.min(1,(r-f)/(m-f))),g=_===p?0:Math.max(0,Math.min(1,(o-p)/(_-p))),d=(w,R)=>{const y=Math.max(0,Math.min(w,h.length-1)),b=Math.max(0,Math.min(R,a.length-1)),A=s[y];if(!A)return 0;const B=A[b];if(B!=null)return B;for(let I=b;I>=0;I--)if(A[I]!=null)return A[I];return 0},T=d(l,c),x=d(l,c+1),M=d(l+1,c),U=d(l+1,c+1),L=(1-v)*(1-g)*T+v*(1-g)*x+(1-v)*g*M+v*g*U;return Math.round(L)}const Bd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Od=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],kd=[[345,null,null,null,null,null,null,null,null,null,null,null,null,null],[446,611,null,null,null,null,null,null,null,null,null,null,null,null],[560,762,979,null,null,null,null,null,null,null,null,null,null,null],[661,929,1180,1450,null,null,null,null,null,null,null,null,null,null],[778,1079,1399,1701,2022,null,null,null,null,null,null,null,null,null],[878,1248,1600,1972,2324,2697,null,null,null,null,null,null,null,null],[997,1399,1821,2223,2646,3049,3474,null,null,null,null,null,null,null],[1097,1569,2022,2496,2948,3424,3877,4355,null,null,null,null,null,null],[1217,1720,2244,2747,3273,3776,4305,4808,5339,null,null,null,null,null],[1439,2043,2669,3273,3903,4506,5138,5741,6345,7583,null,null,null,null],[1663,2368,3098,3802,4534,5238,5943,6647,7382,8790,10233,null,null,null],[1891,2695,3528,4333,5138,5943,6778,7583,8388,10032,11641,13288,null,null],[2120,3025,3931,4836,5772,6678,7583,8489,9428,11239,13087,14897,16749,null],[2321,3327,4364,5370,6376,7382,8422,9428,10434,12483,14495,16548,18560,20617],[2553,3660,4766,5873,7014,8120,9227,10333,11477,13690,15944,18158,20416,22629],[2754,3962,5203,6410,7617,8824,10069,11276,12483,14938,17353,19812,22227,24691],[2990,4297,5605,6913,8258,9566,10873,12181,13530,16146,18806,21422,24087,26703],[3191,4599,6045,7453,8861,10270,11719,13128,14536,17398,20215,23081,25898,28770],[3429,4938,6447,7956,9506,11015,12524,14033,15587,18605,21673,24691,27764,30782],[3630,5240,6890,8500,10110,11719,13374,14983,16593,19862,23081,26356,29575,32854],[3872,5583,7293,9003,10758,12468,14179,15889,17649,21069,24545,27965,31446,34866],[4074,5884,7740,9551,11362,13173,15033,16844,18655,22332,25953,29635,33256,36944]];function Gd(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function pf(i,e){const t=yr(i,e,Od,Bd,kd);if(t!=null&&t>0)return t;const n=Math.max(i,e),s=Math.min(i,e),o=Gd(n,Od),r=Gd(s,Bd);if(o===-1||r===-1)return null;const a=kd[o];if(!a)return null;const h=a[r];if(h!=null)return h;for(let c=r;c>=0;c--)if(a[c]!=null)return a[c];return null}const zd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Hd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Wd={"1.5":[[149,null,null,null,null,null,null,null,null,null,null,null,null,null],[167,206,null,null,null,null,null,null,null,null,null,null,null,null],[197,233,281,null,null,null,null,null,null,null,null,null,null,null],[215,272,318,377,null,null,null,null,null,null,null,null,null,null],[245,299,368,422,492,null,null,null,null,null,null,null,null,null],[263,341,404,483,546,627,null,null,null,null,null,null,null,null],[295,368,455,528,618,690,781,null,null,null,null,null,null,null],[313,410,492,590,672,772,853,955,null,null,null,null,null,null],[347,437,545,636,745,835,946,1037,1150,null,null,null,null,null],[400,509,636,745,873,982,1113,1222,1331,1573,null,null,null,null],[454,581,728,855,1004,1131,1258,1385,1537,1791,2072,null,null,null],[510,656,823,968,1113,1258,1428,1573,1718,2035,2326,2645,null,null],[569,732,895,1059,1246,1409,1573,1736,1927,2253,2609,2936,3294,null],[605,787,992,1174,1355,1537,1745,1927,2108,2500,2863,3258,3621,4019],[665,865,1065,1264,1491,1691,1890,2090,2319,2718,3149,3548,3983,4382],[702,919,1164,1382,1600,1818,2064,2282,2500,2968,3403,3874,4309,4784],[765,1001,1237,1473,1738,1974,2210,2446,2714,3185,3692,4164,4675,5147],[801,1055,1338,1593,1847,2101,2387,2641,2895,3438,3946,4494,5002,5553],[867,1139,1411,1683,1988,2260,2532,2804,3112,3656,4240,4784,5372,5916],[903,1193,1516,1806,2096,2387,2712,3003,3293,3913,4494,5117,5698,6326],[971,1280,1588,1897,2240,2549,2857,3166,3514,4131,4791,5408,6072,6689],[1007,1334,1696,2023,2349,2676,3042,3368,3695,4391,5045,5745,6399,7104]],"2.0":[[172,null,null,null,null,null,null,null,null,null,null,null,null,null],[195,242,null,null,null,null,null,null,null,null,null,null,null,null],[231,276,335,null,null,null,null,null,null,null,null,null,null,null],[253,324,380,453,null,null,null,null,null,null,null,null,null,null],[290,358,442,509,594,null,null,null,null,null,null,null,null,null],[312,408,487,583,662,759,null,null,null,null,null,null,null,null],[351,442,549,640,748,839,950,null,null,null,null,null,null,null],[374,492,594,714,816,939,1041,1164,null,null,null,null,null,null],[413,526,658,771,905,1018,1153,1266,1404,null,null,null,null,null],[477,612,769,905,1063,1198,1359,1495,1631,1930,null,null,null,null],[543,701,882,1040,1223,1382,1540,1699,1885,2202,2548,null,null,null],[610,791,997,1178,1359,1540,1749,1930,2111,2503,2865,3260,null,null],[680,884,1088,1291,1523,1727,1930,2134,2367,2775,3215,3622,4066,null],[726,952,1206,1432,1659,1885,2141,2367,2594,3079,3532,4020,4473,4966],[799,1048,1297,1546,1824,2073,2322,2571,2853,3351,3885,4382,4920,5418],[844,1116,1417,1689,1960,2232,2536,2808,3079,3658,4201,4784,5328,5915],[919,1213,1508,1802,2129,2423,2717,3011,3342,3930,4558,5147,5779,6367],[965,1281,1631,1948,2265,2581,2934,3251,3568,4241,4875,5553,6186,6868],[1043,1382,1722,2061,2436,2776,3115,3455,3834,4513,5236,5915,6641,7320],[1088,1450,1848,2210,2572,2934,3336,3698,4060,4828,5553,6325,7049,7827],[1169,1554,1939,2323,2748,3133,3517,3902,4331,5100,5917,6687,7510,8279],[1215,1622,2069,2476,2884,3291,3742,4150,4557,5420,6234,7103,7917,8790]],"3.0":[[212,null,null,null,null,null,null,null,null,null,null,null,null,null],[246,311,null,null,null,null,null,null,null,null,null,null,null,null],[294,362,446,null,null,null,null,null,null,null,null,null,null,null],[328,429,514,617,null,null,null,null,null,null,null,null,null,null],[378,480,600,702,823,null,null,null,null,null,null,null,null,null],[412,549,668,806,925,1065,null,null,null,null,null,null,null,null],[464,600,755,891,1048,1184,1343,null,null,null,null,null,null,null],[498,670,823,997,1150,1326,1479,1658,null,null,null,null,null,null],[551,721,912,1082,1275,1445,1641,1811,2009,null,null,null,null,null],[640,844,1071,1275,1505,1709,1941,2145,2349,2788,null,null,null,null],[731,969,1233,1471,1737,1975,2213,2451,2720,3196,3706,null,null,null],[825,1097,1397,1669,1941,2213,2516,2788,3060,3638,4182,4763,null,null],[921,1227,1533,1839,2176,2482,2788,3094,3434,4046,4695,5307,5960,null],[989,1329,1700,2040,2380,2720,3094,3434,3774,4491,5171,5892,6572,7297],[1088,1462,1836,2210,2618,2992,3366,3740,4151,4899,5688,6436,7229,7977],[1156,1564,2006,2414,2822,3230,3675,4083,4491,5348,6164,7025,7841,8707],[1258,1700,2142,2584,3063,3505,3947,4389,4872,5756,6685,7569,8503,9387],[1326,1802,2315,2791,3267,3743,4260,4736,5212,6209,7161,8163,9115,10122],[1431,1941,2451,2961,3512,4022,4532,5042,5597,6617,7687,8707,9782,10802],[1499,2043,2628,3172,3716,4260,4849,5393,5937,7075,8163,9306,10394,11542],[1608,2186,2764,3342,3965,4543,5121,5699,6327,7483,8694,9850,11066,12222],[1676,2288,2945,3557,4169,4781,5443,6055,6667,7946,9170,10454,11678,12968]]};function Vd(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function ba(i,e,t){const n=parseFloat(i).toFixed(1),s=Wd[n]||Wd["3.0"];if(!s)return null;const o=yr(e,t,Hd,zd,s);if(o!=null&&o>0)return o;const r=Math.max(e,t),a=Math.min(e,t),h=Vd(r,Hd),c=Vd(a,zd);if(h===-1||c===-1)return null;const l=s[h];if(!l)return null;const f=l[c];if(f!=null)return f;for(let m=c;m>=0;m--)if(l[m]!=null)return l[m];return null}const Xd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],$d=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Yd=[[242,null,null,null,null,null,null,null,null,null,null,null,null,null],[290,377,null,null,null,null,null,null,null,null,null,null,null,null],[353,451,564,null,null,null,null,null,null,null,null,null,null,null],[402,540,662,802,null,null,null,null,null,null,null,null,null,null],[467,613,777,923,1089,null,null,null,null,null,null,null,null,null],[515,704,875,1064,1235,1427,null,null,null,null,null,null,null,null],[582,777,991,1186,1402,1597,1815,null,null,null,null,null,null,null],[631,869,1089,1329,1549,1791,2010,2256,null,null,null,null,null,null],[699,942,1207,1451,1718,1962,2231,2475,2747,null,null,null,null,null],[817,1110,1425,1718,2036,2329,2650,2942,3235,3851,null,null,null,null],[938,1279,1646,1988,2357,2698,3040,3381,3753,4436,5153,null,null,null],[1061,1451,1869,2259,2650,3040,3461,3851,4241,5055,5835,6653,null,null],[1187,1626,2064,2503,2973,3412,3851,4290,4763,5640,6555,7433,8351,null],[1284,1772,2290,2778,3266,3753,4275,4763,5250,6262,7238,8254,9229,10249],[1413,1949,2486,3022,3592,4129,4665,5201,5775,6848,7961,9034,10152,11225],[1510,2095,2715,3300,3885,4470,5092,5677,6262,7474,8644,9859,11030,12250],[1642,2276,2910,3544,4214,4848,5482,6116,6791,8059,9372,10640,11957,13225],[1739,2422,3142,3824,4507,5190,5913,6596,7279,8689,10054,11470,12835,14255],[1874,2605,3337,4068,4841,5572,6303,7035,7811,9274,10787,12250,13768,15231],[1971,2752,3573,4353,5133,5913,6739,7519,8299,9909,11470,13085,14646,16266],[2110,2939,3768,4597,5471,6300,7129,7958,8837,10495,12207,13865,15583,17241],[2207,3085,4008,4886,5763,6641,7569,8446,9324,11135,12890,14706,16461,18282]];function qd(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function mf(i,e){const t=yr(i,e,$d,Xd,Yd);if(t!=null&&t>0)return t;const n=Math.max(i,e),s=Math.min(i,e),o=qd(n,$d),r=qd(s,Xd);if(o===-1||r===-1)return null;const a=Yd[o];if(!a)return null;const h=a[r];if(h!=null)return h;for(let c=r;c>=0;c--)if(a[c]!=null)return a[c];return null}const Zd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Kd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],jd=[[248,null,null,null,null,null,null,null,null,null,null,null,null,null],[300,393,null,null,null,null,null,null,null,null,null,null,null,null],[367,471,591,null,null,null,null,null,null,null,null,null,null,null],[419,565,695,844,null,null,null,null,null,null,null,null,null,null],[487,643,818,974,1149,null,null,null,null,null,null,null,null,null],[539,739,922,1123,1306,1509,null,null,null,null,null,null,null,null],[609,818,1045,1254,1483,1692,1923,null,null,null,null,null,null,null],[661,915,1149,1405,1639,1897,2132,2392,null,null,null,null,null,null],[732,993,1275,1535,1819,2079,2366,2627,2915,null,null,null,null,null],[858,1170,1506,1819,2158,2470,2811,3124,3437,4093,null,null,null,null],[985,1350,1741,2105,2498,2863,3228,3593,3989,4719,5482,null,null,null],[1115,1532,1977,2394,2811,3228,3676,4093,4510,5378,6212,7083,null,null],[1247,1716,2186,2655,3155,3624,4093,4562,5065,6004,6979,7917,8896,null],[1352,1873,2425,2946,3468,3989,4544,5065,5587,6666,7709,8792,9835,10922],[1487,2060,2634,3207,3814,4388,4961,5534,6145,7292,8479,9626,10818,11965],[1591,2217,2876,3502,4127,4753,5415,6041,6666,7958,9209,10505,11756,13057],[1729,2407,3085,3762,4477,5154,5832,6510,7228,8584,9984,11339,12744,14100],[1834,2563,3330,4060,4790,5519,6290,7020,7750,9254,10714,12223,13683,15197],[1975,2757,3539,4320,5143,5925,6707,7489,8316,9880,11493,13057,14676,16240],[2079,2913,3788,4622,5456,6290,7169,8003,8837,10555,12223,13946,15614,17342],[2224,3110,3997,4883,5814,6700,7586,8472,9408,11181,13008,14780,16612,18385],[2329,3267,4250,5188,6127,7065,8053,8991,9930,11861,13738,15674,17551,19493]];function Jd(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function gf(i,e){const t=yr(i,e,Kd,Zd,jd);if(t!=null&&t>0)return t;const n=Math.max(i,e),s=Math.min(i,e),o=Jd(n,Kd),r=Jd(s,Zd);if(o===-1||r===-1)return null;const a=jd[o];if(!a)return null;const h=a[r];if(h!=null)return h;for(let c=r;c>=0;c--)if(a[c]!=null)return a[c];return null}const l2=[{maxHalfPerimeter:250,pricePerEdge:121},{maxHalfPerimeter:350,pricePerEdge:146},{maxHalfPerimeter:480,pricePerEdge:175},{maxHalfPerimeter:550,pricePerEdge:210},{maxHalfPerimeter:650,pricePerEdge:252},{maxHalfPerimeter:780,pricePerEdge:302},{maxHalfPerimeter:880,pricePerEdge:362},{maxHalfPerimeter:980,pricePerEdge:435},{maxHalfPerimeter:1150,pricePerEdge:522},{maxHalfPerimeter:1350,pricePerEdge:626},{maxHalfPerimeter:1500,pricePerEdge:752},{maxHalfPerimeter:1800,pricePerEdge:902}];function c2(i,e){const t=(i||0)+(e||0);for(const n of l2)if(t<=n.maxHalfPerimeter)return n.pricePerEdge;return 902}function _f(i,e){return c2(i,e)*4+485}const Qd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],eu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],tu=[[287,null,null,null,null,null,null,null,null,null,null,null,null,null],[359,481,null,null,null,null,null,null,null,null,null,null,null,null],[445,588,747,null,null,null,null,null,null,null,null,null,null,null],[516,712,891,1088,null,null,null,null,null,null,null,null,null,null],[604,819,1052,1267,1501,null,null,null,null,null,null,null,null,null],[676,945,1195,1465,1716,1988,null,null,null,null,null,null,null,null],[765,1052,1358,1645,1952,2239,2549,null,null,null,null,null,null,null],[837,1179,1501,1845,2167,2513,2835,3184,null,null,null,null,null,null],[928,1286,1666,2024,2405,2764,3148,3506,3893,null,null,null,null,null],[1092,1522,1975,2405,2861,3291,3749,4179,4610,5501,null,null,null,null],[1258,1760,2288,2790,3319,3821,4323,4825,5357,6361,7398,null,null,null],[1428,2001,2603,3176,3749,4323,4927,5501,6074,7255,8402,9585,null,null],[1599,2244,2889,3534,4210,4856,5501,6146,6825,8115,9442,10732,12063,null],[1743,2459,3207,3924,4641,5357,6108,6825,7542,9012,10446,11920,13354,14832],[1917,2705,3494,4282,5105,5893,6681,7470,8295,9872,11490,13067,14689,16266],[2060,2920,3814,4675,5535,6395,7292,8152,9012,10773,12493,14259,15979,17749],[2238,3169,4101,5033,6002,6933,7865,8797,9770,11633,13542,15405,17319,19183],[2381,3384,4425,5428,6432,7435,8480,9483,10487,12538,14545,16602,18609,20671],[2561,3636,4712,5787,6903,7978,9053,10128,11248,13399,15599,17749,19954,22105],[2705,3851,5039,6186,7333,8480,9671,10818,11965,14309,16602,18951,21244,23598],[2889,4107,5326,6544,7808,9026,10245,11463,12732,15169,17661,20098,22595,25032],[3032,4322,5658,6948,8238,9528,10868,12158,13449,16084,18664,21304,23885,26531]];function nu(i,e){for(let t=0;t<e.length;t++)if(i>=e[t].min&&i<=e[t].max)return t;return i<e[0].min?0:i>e[e.length-1].max?e.length-1:-1}function lh(i,e){const t=yr(i,e,eu,Qd,tu);if(t!=null&&t>0)return t;const n=Math.max(i,e),s=Math.min(i,e),o=nu(n,eu),r=nu(s,Qd);if(o===-1||r===-1)return null;const a=tu[o];if(!a)return null;const h=a[r];if(h!=null)return h;for(let c=r;c>=0;c--)if(a[c]!=null)return a[c];return null}function vf(i,e){const t=lh(i,e);if(t==null)return null;const n=_f(i,e);return t+n}function ch(i,e=""){const t=i||"",n=e||"";if(t.startsWith("wire_mesh_")||n.includes("金網")){const s=t.match(/wire_mesh_(\d+)/)||n.match(/金網\s*(\d+)mm/),o=s?parseInt(s[1],10):25;return{materialName:`金網 ${o}mmピッチ (黒粉体塗装 / 線径φ3.2, SS400)`,hazaiyaUrl:"",thicknessMm:3.2,isHazaiyaOrder:!1,isWireMesh:!0,pitch:o}}return t==="acrylic_cast_3_0"||n.includes("キャスト")?{materialName:"透明アクリル キャスト板 3.0mm (または コモグラス押出)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3316",hazaiyaExtrusionUrl:"https://www.hazaiya.co.jp/estimate/board/3302",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_extrusion_3_0"||n.includes("透明アクリル 3.0mm")&&!n.includes("キャスト")?{materialName:"透明アクリル 押出板 3.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_extrusion_2_0"||n.includes("2.0mm")?{materialName:"透明アクリル 押出板 2.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:2,isHazaiyaOrder:!0}:t==="acrylic_extrusion_1_5"||n.includes("1.5mm")?{materialName:"透明アクリル 押出板 1.5mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:1.5,isHazaiyaOrder:!0}:t==="pvc_punching_3_0"||n.includes("塩ビパンチング")?{materialName:"塩ビ透明パンチングボード (φ3.1-P7, 3.0mm厚)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/4018",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_black_matte_3_0"||n.includes("黒両面マット")?{materialName:"アクリル黒両面マット 3.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3468",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_smoke_gray_3_0"||n.includes("グレースモーク")?{materialName:"アクリル グレースモーク半透明 3.0mm (コモグラス 530K)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3356",thicknessMm:3,isHazaiyaOrder:!0}:t==="danplate_4_0"||n.includes("プラダン")?{materialName:"緩衝プラダン 4.0mm (市販品・別手配)",hazaiyaUrl:"※ホームセンター等にて市販品を手配（直線カットのみ）",thicknessMm:4,isHazaiyaOrder:!1}:t==="polyca_4_0"||n.includes("中空ポリカ")?{materialName:"ツインカーボ（中空ポリカーボネート） 4.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:4,isHazaiyaOrder:!0}:{materialName:n||"アクリル板",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate",thicknessMm:3,isHazaiyaOrder:!0}}function h2(i){const e=i.panelCode||i.partCode||"",t=i.name||"";let n=25;const s=e.match(/wire_mesh_(\d+)/)||t.match(/金網\s*(\d+)mm/);s&&(n=parseInt(s[1],10));let o=i.widthMm,r=i.heightMm;if((!o||!r)&&i.size){const p=i.size.match(/([\d.]+)\s*[x×]\s*([\d.]+)/);p&&(o=parseFloat(p[1]),r=parseFloat(p[2]))}o=Math.round(o||0),r=Math.round(r||0);let a="";const h=t.match(/FENP\d+-A\d+-B\d+/);h?a=h[0]:a=`FENP${n}-A${o}-B${r}`;const c=`https://jp.misumi-ec.com/vona2/result/?Keyword=${a}`,l=ah(n,o,r)||0,f=i.count||1,m=l*f;return{pitch:n,widthMm:o,heightMm:r,modelNumber:a,misumiUrl:c,quantity:f,cost:l,totalCost:m}}function d2(i,e,t){var c,l,f,m,p,_,v,g,d;const n=i.panelCode||i.partCode||"",s=((c=He==null?void 0:He.panels)==null?void 0:c[n])||{},o=e/1e3*(t/1e3);let r=0;if(n.startsWith("wire_mesh_")||i.name&&i.name.includes("金網")){const T=n.match(/wire_mesh_(\d+)/)||i.name&&i.name.match(/金網\s*(\d+)mm/),x=T?parseInt(T[1],10):25,M=ah(x,e,t);r=M??Math.round((s.pricePerM2||25627)*o)}else n==="acrylic_extrusion_2_0"?r=ba(2,e,t)||Math.round((s.pricePerM2||4e3)*o):n==="acrylic_extrusion_3_0"?r=ba(3,e,t)||Math.round((s.pricePerM2||5e3)*o):n==="acrylic_extrusion_1_5"?r=ba(1.5,e,t)||Math.round((s.pricePerM2||3500)*o):n==="acrylic_black_matte_3_0"?r=mf(e,t)||Math.round((s.pricePerM2||6e3)*o):n==="acrylic_smoke_gray_3_0"?r=gf(e,t)||Math.round((s.pricePerM2||6500)*o):n==="acrylic_cast_3_0"?r=i.name&&i.name.includes("扉")?vf(e,t)||3800:lh(e,t)||2800:n==="pvc_punching_3_0"?r=pf(e,t)||Math.round((s.pricePerM2||12e3)*o):r=Math.round((s.pricePerM2||5e3)*o);if(i.name&&i.name.includes("換気量調整板")){const T=(m=(f=(l=He==null?void 0:He.options)==null?void 0:l.items)==null?void 0:f.sideVentCover)==null?void 0:m.holeCostPerPiece,x=(v=(_=(p=He==null?void 0:He.options)==null?void 0:p.items)==null?void 0:_.sideVentCover)==null?void 0:v.holesPerPanel;r+=x*T}if(i.name&&i.name.includes("床下パネルヒータ支え板")){const T=((d=(g=He==null?void 0:He.options)==null?void 0:g.items)==null?void 0:d.floorHeaterSupport)||{},x=T.holeCostPerPiece??112,M=T.diagonalCutCost??239,U=T.cornerCutCost??587;i.count===2||i.note&&i.note.includes("2枚")?r+=7*x+2*M+1*U:r+=10*x+4*M}const a=i.count||1,h=r*a;return{singleCost:r,totalCost:h}}function xf(i,e={}){if(!i||!Array.isArray(i))return[];const t=e.cageType||"A";e.hasDoorAntiFlex,e.frontWideFrame,Number(e.frontWindowH||100);const n=i.filter(h=>h.category==="panel"),s=[],o=[];let r=0,a=0;for(const h of n){const c=h.name||"",l=ch(h.panelCode||h.partCode,c);let f=h.widthMm,m=h.heightMm;if((!f||!m)&&h.size){const v=h.size.match(/([\d.]+)\s*[x×]\s*([\d.]+)/);v&&(f=parseFloat(v[1]),m=parseFloat(v[2]))}f=Math.round((f||0)*10)/10,m=Math.round((m||0)*10)/10;const{singleCost:p,totalCost:_}=d2(h,f,m);if(l.isWireMesh||h.panelCode&&h.panelCode.startsWith("wire_mesh_")||c.includes("金網")){const v=h2(h);a+=v.totalCost||_,o.push({key:`wire_mesh_${o.length}`,title:`金網 ${v.pitch}mmピッチ（黒粉体塗装）`,materialName:l.materialName,modelNumber:v.modelNumber,misumiUrl:v.misumiUrl,widthMm:v.widthMm,heightMm:v.heightMm,pitch:v.pitch,quantity:v.quantity,cost:v.cost,totalCost:v.totalCost,isWireMesh:!0,notes:"ミスミ様手配品 (線径φ3.2, SS400ポリエチレン樹脂粉体黒塗装)"});continue}if(l.isHazaiyaOrder&&(r+=_),(t==="A"||t==="C"||t==="A_FRAMED"||t==="C_FRAMED")&&(c.includes("スライド扉")||c.includes("扉")&&!c.includes("前開き"))){const v=Math.round(m/2*10)/10,g=e.frontDoorMaterial==="cast"||c.includes("キャスト");s.push({key:"front_slide_doors",title:`${c}（2枚構成・同一加工）`,materialName:g?"透明アクリル キャスト板 3.0mm":"アクリル押出-コモグラス 3.0mm",doorMaterialType:g?"cast":"extrusion",hazaiyaUrl:g?"https://www.hazaiya.co.jp/estimate/board/3316":"https://www.hazaiya.co.jp/estimate/board/3302",hazaiyaExtrusionUrl:"https://www.hazaiya.co.jp/estimate/board/3302",hazaiyaCastUrl:"https://www.hazaiya.co.jp/estimate/board/3316",widthMm:f,heightMm:m,thicknessMm:3,quantity:h.count||2,cost:p,totalCost:_,needsMachining:!0,edgeFinishing:"ABCD全4辺「磨き仕上げ」",holes:[{desc:"引き手ノブ穴 (段付きローレットノブ用)",corner:"C",x:15,y:v,base:`A辺(左)より15.0mm / D辺(下)より${v.toFixed(1)}mm (高さ寸法の1/2)`,diameterMm:4.1,taperMm:0},{desc:"プッシュ式スライド錠穴 (C-108用)",corner:"D",x:15.5,y:25,base:"角D(右下)より左方向へ15.5mm / 上方向へ25.0mm",diameterMm:10.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】2枚同一仕様で発注（1枚を裏返して使用）。はざいや加工数量割引適用"});continue}if(c.includes("前開き")&&c.includes("扉")){const v=e.doorHingeSide==="right",g=Math.round(m*1/4*10)/10,d=Math.round(m*3/4*10)/10;s.push({key:"front_open_door",title:`${c}（${v?"右ヒンジ左打掛":"左ヒンジ右打掛"}）`,materialName:l.materialName,hazaiyaUrl:l.hazaiyaUrl,widthMm:f,heightMm:m,thicknessMm:l.thicknessMm,quantity:h.count||1,cost:p,totalCost:_,needsMachining:!0,edgeFinishing:"ABCD全4辺「磨き仕上げ」",holes:[{desc:"ヒンジ上側固定穴 (M4皿ビス用)",corner:v?"B":"A",x:10,y:d,base:`${v?"C辺(右)":"A辺(左)"}より10.0mm / D辺(下)より${d}mm`,diameterMm:4.5,taperMm:1.5},{desc:"ヒンジ下側固定穴 (M4皿ビス用)",corner:v?"D":"C",x:10,y:g,base:`${v?"C辺(右)":"A辺(左)"}より10.0mm / D辺(下)より${g}mm`,diameterMm:4.5,taperMm:1.5},{desc:"打掛受座上側穴 (M4皿ビス用)",corner:v?"A":"B",x:10,y:d,base:`${v?"A辺(左)":"C辺(右)"}より10.0mm / D辺(下)より${d}mm`,diameterMm:4.5,taperMm:1.5},{desc:"打掛受座下側穴 (M4皿ビス用)",corner:v?"C":"D",x:10,y:g,base:`${v?"A辺(左)":"C辺(右)"}より10.0mm / D辺(下)より${g}mm`,diameterMm:4.5,taperMm:1.5}],corners:[],notches:[],notes:`【★加工あり】前開き扉用 φ4.5皿穴4箇所加工 (${v?"右側":"左側"}ヒンジ)`});continue}if(c.includes("換気量調整板")){s.push({key:`side_vent_cover_${s.length}`,title:c,materialName:l.materialName,hazaiyaUrl:l.hazaiyaUrl,widthMm:f,heightMm:m,thicknessMm:l.thicknessMm,quantity:h.count||2,cost:p,totalCost:_,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"固定穴 左上",corner:"A",x:12,y:15,diameterMm:6,taperMm:0,base:"A辺(左)より12mm / B辺(上)より15mm"},{desc:"固定穴 右上",corner:"B",x:12,y:15,diameterMm:6,taperMm:0,base:"C辺(右)より12.0mm / B辺(上)より15mm"},{desc:"固定穴 左下",corner:"C",x:12,y:15,diameterMm:6,taperMm:0,base:"A辺(左)より12mm / D辺(下)より15.0mm"},{desc:"固定穴 右下",corner:"D",x:12,y:15,diameterMm:6,taperMm:0,base:"C辺(右)より12.0mm / D辺(下)より15.0mm"}],corners:[],notches:[],notes:"【★加工あり】化粧つまみネジ固定用 φ6.0mm丸穴4箇所加工"});continue}if(c.includes("ヒンジ座板")||c.includes("ロック受座板")){const v=c.includes("ヒンジ");s.push({key:v?"hinge_spacer":"lock_spacer",title:c,materialName:l.materialName,hazaiyaUrl:l.hazaiyaUrl,widthMm:f,heightMm:m,thicknessMm:l.thicknessMm,quantity:h.count||1,cost:p,totalCost:_,needsMachining:!0,edgeFinishing:"全周カンナ・仕上げ",holes:[{desc:"フレーム固定穴 上",corner:"A",x:10,y:15,diameterMm:4.5,taperMm:0,base:"上端より15mm / 中心線"},{desc:"フレーム固定穴 下",corner:"C",x:10,y:15,diameterMm:4.5,taperMm:0,base:"下端より15mm / 中心線"}],corners:[],notches:[],notes:"【★加工あり】前開き扉用アクリルスペーサー座板（φ4.5mm穴2箇所）"});continue}if(c.includes("床下パネルヒータ支え板")&&!c.includes("プラダン")){h.count===2||h.note&&h.note.includes("2枚")?s.push({key:"floor_heater_support_2p",title:`${c}（2枚構成・左右対称配置）`,materialName:l.materialName,hazaiyaUrl:l.hazaiyaUrl,widthMm:f,heightMm:m,thicknessMm:l.thicknessMm,quantity:2,cost:p,totalCost:_,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",corners:[{desc:"外側奥角A",corner:"A",spec:"80 x 80 mm 斜めカット",sizeX:80,sizeY:80},{desc:"外側手前角C",corner:"C",spec:"80 x 80 mm 斜めカット",sizeX:80,sizeY:80}],notches:[{desc:"中央支柱逃げ切欠き",base:"中央側辺の中央部",spec:"幅40mm x 深さ20mm",sizeX:40,sizeY:20}],holes:[{desc:"角A斜め脇 奥",corner:"A",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / A辺(左)より90.0mm"},{desc:"角A斜め脇 外側",corner:"A",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / B辺(上)より90.0mm"},{desc:"角C斜め脇 手前",corner:"C",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / A辺(左)より90.0mm"},{desc:"角C斜め脇 外側",corner:"C",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / D辺(下)より90.0mm"},{desc:"中央辺 奥側固定",corner:"B",x:9,y:40,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / B辺(上)より40.0mm"},{desc:"中央辺 手前側固定",corner:"D",x:9,y:40,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / D辺(下)より40.0mm"},{desc:"外側辺 中央固定",corner:"A",x:9,y:Math.round(m/2),diameterMm:6,taperMm:0,base:`A辺(左)より9.0mm / 中央(高さ${Math.round(m/2)}mm)`}],notes:"【★加工あり】2隅80x80mm斜めカット / 中央切欠き40x20mm / φ6.0mm丸穴7箇所"}):s.push({key:"floor_heater_support_1p",title:`${c}（1枚全面構成）`,materialName:l.materialName,hazaiyaUrl:l.hazaiyaUrl,widthMm:f,heightMm:m,thicknessMm:l.thicknessMm,quantity:1,cost:p,totalCost:_,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",corners:[{desc:"左奥角A",corner:"A",spec:"80 x 80 mm 斜めカット",sizeX:80,sizeY:80},{desc:"右奥角B",corner:"B",spec:"80 x 80 mm 斜めカット",sizeX:80,sizeY:80},{desc:"左手前角C",corner:"C",spec:"80 x 80 mm 斜めカット",sizeX:80,sizeY:80},{desc:"右手前角D",corner:"D",spec:"80 x 80 mm 斜めカット",sizeX:80,sizeY:80}],notches:[],holes:[{desc:"角A斜め脇 奥",corner:"A",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / A辺(左)より90.0mm"},{desc:"角A斜め脇 左",corner:"A",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / B辺(上)より90.0mm"},{desc:"角B斜め脇 奥",corner:"B",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / C辺(右)より90.0mm"},{desc:"角B斜め脇 右",corner:"B",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / B辺(上)より90.0mm"},{desc:"角C斜め脇 手前",corner:"C",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / A辺(左)より90.0mm"},{desc:"角C斜め脇 左",corner:"C",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / D辺(下)より90.0mm"},{desc:"角D斜め脇 手前",corner:"D",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / C辺(右)より90.0mm"},{desc:"角D斜め脇 右",corner:"D",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / D辺(下)より90.0mm"}],notes:"【★加工あり】4隅80x80mm斜めカット / φ6.0mm丸穴10箇所 (端から9mm溝位置)"});continue}s.push({key:`standard_panel_${s.length}`,title:c,materialName:l.materialName,hazaiyaUrl:l.hazaiyaUrl,widthMm:f,heightMm:m,thicknessMm:l.thicknessMm,quantity:h.count||1,cost:p,totalCost:_,needsMachining:!1,edgeFinishing:"仕上げなし（ノコカット）",holes:[],corners:[],notches:[],notes:`${h.note||"直線カットのみ"} / 【切断のみ (加工なし)】`})}return s.hazaiyaTotalCost=r,s.misumiTotalCost=a,s.wireMeshList=o,s.hazaiyaList=[...s],s}function u2(i,e={},t={}){if(!i||i.length===0&&(!i.wireMeshList||i.wireMeshList.length===0))return"【パネル発注リスト】対象のパネル部材はありません。";const n=i.hazaiyaList?i.hazaiyaList:i.filter(l=>!l.isWireMesh),s=i.wireMeshList?i.wireMeshList:t.wireMeshList||[],o=t.hazaiyaTotalCost!=null?t.hazaiyaTotalCost:i.hazaiyaTotalCost,r=t.misumiTotalCost!=null?t.misumiTotalCost:i.misumiTotalCost,a=[],h=n.reduce((l,f)=>l+(f.quantity||1),0),c=n.filter(l=>l.needsMachining).length;if(a.push("================================================================"),a.push("【アクリルショップ はざいや様向け パネル一括発注リスト】"),e.W&&e.D&&e.H&&a.push(`対象ケージ: W${e.W} x D${e.D} x H${e.H} mm (Type ${e.cageType||"A"})`),a.push(`発注品目数: ${n.length} 品目 (合計枚数: ${h} 枚 / うち加工あり: ${c} 品目)`),a.push("※ 2重発注防止のため、本リストを上から順に1回だけカートへ追加してください。"),a.push("※ 基準: A辺=左辺, B辺=上辺, C辺=右辺, D辺=下辺 / 角A=左上, 角B=右上, 角C=左下, 角D=右下"),a.push(`================================================================
`),n.forEach((l,f)=>{const m=l.needsMachining?"【★加工あり】":"【切断のみ (加工なし)】";a.push(`■ [${f+1}/${n.length}] ${l.title}  ${m}`),a.push(`・素材: ${l.materialName}`),a.push(`・発注URL: ${l.hazaiyaUrl}`),a.push(`・仕上がり寸法: ヨコ ${l.widthMm} mm x タテ ${l.heightMm} mm (厚み ${l.thicknessMm} mm)`),a.push(`・発注数量: ${l.quantity} 枚`),a.push(`・切断面仕上げ: ${l.edgeFinishing}`),l.needsMachining&&(l.corners&&l.corners.length>0&&(a.push("・コーナー加工:"),l.corners.forEach(p=>{const _=p.spec||(p.sizeX&&p.sizeY?`${p.sizeX} x ${p.sizeY} mm 斜めカット`:"指定あり");a.push(`   - ${p.desc}: ${_}`)})),l.notches&&l.notches.length>0&&(a.push("・切欠き加工:"),l.notches.forEach(p=>{const _=p.spec||(p.sizeX&&p.sizeY?`幅${p.sizeX}mm x 長さ${p.sizeY}mm`:"指定あり");a.push(`   - ${p.desc}: ${_}`)})),l.holes&&l.holes.length>0&&(a.push("・穴あけ加工:"),l.holes.forEach((p,_)=>{const v=p.base||(p.corner?`角${p.corner}基準 (X:${p.x}mm, Y:${p.y}mm)`:"図面指定");a.push(`   (${_+1}) [${p.desc}] 基準: ${v} ➜ 直径 φ${p.diameterMm} mm (テーパー深さ ${p.taperMm||0} mm)`)}))),l.notes&&a.push(`・備考: ${l.notes}`),a.push(`----------------------------------------------------------------
`)}),a.push("================================================================"),a.push("【はざいや発注金額（合計）】"),o!=null?a.push(`¥${o.toLocaleString()}（税込・加工費込）`):a.push("※シミュレーター画面のパネル小計をご参照ください。"),a.push(`================================================================
`),s&&s.length>0){const l=s.reduce((f,m)=>f+(m.quantity||1),0);a.push("================================================================"),a.push("【ミスミ様向け 天面金網発注リスト（別仕入れ先）】"),a.push("※ 金網は仕入れ先が異なるため、ミスミ様へ別途手配してください。"),a.push("※ 金網の数量はURLに含まれませんので、必ず発注数量をご確認ください。"),a.push(`発注品目数: ${s.length} 品目 (合計枚数: ${l} 枚)`),a.push(`================================================================
`),s.forEach((f,m)=>{a.push(`■ [${m+1}/${s.length}] ${f.title}`),a.push(`・型番: ${f.modelNumber}`),a.push(`・発注URL: ${f.misumiUrl}`),a.push(`・寸法: ヨコ ${f.widthMm} mm x タテ ${f.heightMm} mm (線径φ3.2, SS400黒塗装)`),a.push(`・発注数量: ${f.quantity} 枚`),f.totalCost!=null&&a.push(`・概算原価: ¥${f.totalCost.toLocaleString()}（税込）`),a.push(`----------------------------------------------------------------
`)}),a.push("================================================================"),a.push("【ミスミ発注金額（金網合計）】"),r!=null?a.push(`¥${r.toLocaleString()}（税込）`):a.push("※シミュレーター画面の金網小計をご参照ください。"),a.push(`================================================================
`)}return a.join(`
`)}const f2=document.getElementById("canvas-container"),ss=document.getElementById("creature-preset-grid"),Ps=document.getElementById("input-restore-estimate-id"),po=document.getElementById("btn-restore-estimate"),oa=document.getElementById("restore-status-msg"),p2=document.getElementById("btn-save-image");document.getElementById("btn-copy-spec");document.getElementById("inquiry-spec-textarea");document.getElementById("copy-toast");const kn=document.getElementById("estimate-result-modal"),iu=document.getElementById("modal-estimate-id"),su=document.getElementById("modal-price-total"),ou=document.getElementById("modal-weight-total"),hr=document.getElementById("modal-spec-textarea"),Ol=document.getElementById("btn-copy-spec-modal"),oo=document.getElementById("modal-copy-toast"),Bc=document.getElementById("btn-save-image-modal"),ru=document.getElementById("btn-close-modal"),au=document.getElementById("btn-dismiss-modal"),lu=document.getElementById("btn-open-estimate-modal"),un=document.getElementById("modal-download-success"),ro=document.getElementById("download-success-title"),Yi=document.getElementById("download-filename-label"),Na=document.getElementById("modal-preview-section"),mo=document.getElementById("modal-preview-img"),es=document.getElementById("modal-share-url-input"),kl=document.getElementById("btn-copy-share-url-modal"),ao=document.getElementById("modal-copy-url-toast");let Nn=null,Ls=null;const m2=Date.now(),g2=vr(),_2=za();let cu=0,nt=null;function Fi(i,e=5e3){let t=document.getElementById("app-notice-toast");t||(t=document.createElement("div"),t.id="app-notice-toast",t.className="app-notice-toast hidden",document.body.appendChild(t)),t.textContent=i,t.classList.remove("hidden"),requestAnimationFrame(()=>{t.classList.add("show")}),t._timer&&clearTimeout(t._timer),t._timer=setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.classList.add("hidden"),300)},e)}const yn=document.getElementById("slider-w"),bn=document.getElementById("input-w"),rs=document.getElementById("slider-d"),as=document.getElementById("input-d"),Sn=document.getElementById("slider-h"),Tn=document.getElementById("input-h"),si=document.getElementById("row-front-window"),ls=document.getElementById("slider-fw"),cs=document.getElementById("input-fw"),hs=document.getElementById("toggle-side-reinforce"),Ui=document.getElementById("card-side-reinforce"),Ni=document.getElementById("box-side-h"),tt=document.getElementById("input-side-h"),Pn=document.getElementById("btn-type-a"),Et=document.getElementById("btn-type-a-front"),Ct=document.getElementById("btn-type-a-framed"),Gn=document.getElementById("btn-type-c"),At=document.getElementById("btn-type-c-framed"),It=document.getElementById("type-badge");let ra=null,nr=null,Sa=null,ir=null,Ta=null,sr=null,wa=null,or=null,Oc=null,Mf=[];const Bi=document.getElementById("btn-frame-silver"),Oi=document.getElementById("btn-frame-black"),Gl=document.getElementById("section-front-door-hinge"),Li=document.getElementById("btn-hinge-left"),Di=document.getElementById("btn-hinge-right"),fi=document.getElementById("toggle-caster"),oi=document.getElementById("card-caster"),on=document.getElementById("toggle-floor-reinforce"),$t=document.getElementById("card-floor-reinforce"),kc=document.getElementById("floor-reinf-sub"),ct=document.getElementById("select-floor-split"),Gt=document.getElementById("toggle-back-reinforce"),Bt=document.getElementById("card-back-reinforce"),go=document.getElementById("back-reinf-sub"),ht=document.getElementById("select-back-split"),Ut=document.getElementById("toggle-top-reinforce"),Mt=document.getElementById("card-top-reinforce"),Ai=document.getElementById("top-reinf-sub"),mn=document.getElementById("toggle-door-anti-flex"),rn=document.getElementById("card-door-anti-flex"),An=document.getElementById("toggle-side-vent-cover"),_n=document.getElementById("card-side-vent-cover"),Jo=document.getElementById("vent-cover-badge"),aa=document.getElementById("vent-cover-sub"),wt=document.getElementById("toggle-perch"),Pt=document.getElementById("card-perch"),Ti=document.getElementById("toggle-front-wide-2x"),Yn=document.getElementById("card-front-wide-2x"),la=document.getElementById("front-wide-2x-sub"),wi=document.getElementById("toggle-front-wide-3x"),qn=document.getElementById("card-front-wide-3x"),ca=document.getElementById("front-wide-3x-sub"),wn=document.getElementById("toggle-wide-bottom"),Jn=document.getElementById("card-wide-bottom"),ha=document.getElementById("wide-bottom-sub"),nn=document.getElementById("toggle-wide-top"),kt=document.getElementById("card-wide-top"),lo=document.getElementById("wide-top-sub"),On=document.getElementById("toggle-rubber-packing"),En=document.getElementById("card-rubber-packing"),qi=document.getElementById("rubber-packing-badge"),hu=document.getElementById("rubber-packing-sub"),pi=document.getElementById("toggle-floor-heater-support"),pn=document.getElementById("card-floor-heater-support"),ws=document.getElementById("floor-heater-support-badge"),v2=document.getElementById("floor-heater-support-sub"),zl=document.getElementById("floor-warning-banner"),du=document.getElementById("seismic-warning-banner"),x2=document.getElementById("seismic-warning-text"),yf=document.getElementById("btn-door-closed"),bf=document.getElementById("btn-door-left"),Sf=document.getElementById("btn-door-right"),Ea=document.getElementById("btn-front-door-closed"),Ca=document.getElementById("btn-front-door-open"),da=document.getElementById("slide-door-group"),uu=document.getElementById("front-door-group"),fu=document.getElementById("door-control-title"),Tf=[yf,bf,Sf,Ea,Ca].filter(Boolean),Hl=document.getElementById("reinforce-tip"),Wl=document.getElementById("reinforce-text"),pu=document.getElementById("current-spec-summary");document.getElementById("cost-hud-card");const ts=document.getElementById("cost-hud-result"),Zn=document.getElementById("hud-cost-total"),Kn=document.getElementById("hud-weight-total"),jn=document.getElementById("btn-calc-estimate"),Gc=document.querySelectorAll(".preset-btn:not(#btn-auto-rotate)"),zc=document.getElementById("btn-auto-rotate"),M2=document.getElementById("btn-reset-specs"),Vl=document.getElementById("panel-config-toggle-btn"),mu=document.getElementById("panel-config-container"),Xl=document.getElementById("options-toggle-btn"),gu=document.getElementById("options-container"),ds=document.getElementById("select-panel-floor"),Ao=document.getElementById("select-panel-back"),Po=document.getElementById("select-panel-side"),Ro=document.getElementById("select-panel-side-upper"),Lo=document.getElementById("select-panel-side-lower"),us=document.getElementById("select-panel-top"),fs=document.getElementById("select-panel-top-left"),ps=document.getElementById("select-panel-top-right"),ms=document.getElementById("select-panel-partition"),Do=document.getElementById("row-panel-side"),Io=document.getElementById("row-panel-side-split"),Ba=document.getElementById("row-panel-top"),Oa=document.getElementById("row-panel-top-split"),gn=document.getElementById("row-panel-partition"),an=document.getElementById("toggle-room-divider"),jt=document.getElementById("card-room-divider"),ji=document.getElementById("room-divider-sub"),_o=document.getElementById("perch-sub"),hi=document.getElementById("card-led-option"),gs=document.getElementById("select-led-type"),co=document.getElementById("led-controller-panel"),dr=document.getElementById("btn-led-power-on"),ur=document.getElementById("btn-led-power-off"),In=document.getElementById("led-row-usb-modes"),Fn=document.getElementById("led-row-rgb-palette"),ei=document.getElementById("btn-toggle-darkroom"),u={W:750,D:450,H:300,cageType:"A",frameColor:"silver",footType:"rubber",hasFloorReinforcement:!1,floorSplitCount:2,hasBackReinforcement:!1,backSplitCount:2,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasPerch:!1,hasRubberPacking:!1,hasFloorHeaterSupport:!1,hasRoomDivider:!1,hasBottomWideFrame:!1,hasTopWideFrame:!1,ledType:"none",ledPower:!0,ledBrightness:1,ledColorMode:"all",ledRgbColor:"#ffffff",frontWideFrame:"2x",doorHingeSide:"left",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,showPanels:!0,showDimensions:!0,doorState:"closed",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}};let mi="2x",hh=!1;const st=new n2(f2);window.viewer=st;const wf=750*450;function y2(i,e,t,n){const s=Math.min(i,e)/10,o=t/10,r=s/Math.sqrt(o),a=n==="caster"?4.2:3.8,h=r<a;return{ratio:r,threshold:a,isProneToToppling:h,footType:n}}function Ye(){st.update(u),st.setPanelsVisible(u.showPanels),st.setDimensionsVisible(u.showDimensions),hh&&(st._lastAutoParams={...u});const i=u.W*u.D;i>wf&&!u.hasFloorReinforcement?(zl.classList.remove("hidden"),Hl.classList.remove("reinforced"),Wl.textContent=`床面積: ${(i/1e4).toFixed(0)}c㎡ (> 750×450mm) 床面補強なし：アクリルたわみ防止のため床面中央補強フレーム (2分割) を推奨します`):u.hasFloorReinforcement?(zl.classList.add("hidden"),Hl.classList.add("reinforced"),Wl.textContent=`床面補強フレーム（${u.floorSplitCount}分割）が配置されています`):(zl.classList.add("hidden"),Hl.classList.remove("reinforced"),Wl.textContent=`床面積: ${(i/1e4).toFixed(0)}c㎡ (≦ 750×450mm) 床面補強フレームなし（標準枠）`);const t=y2(u.W,u.D,u.H,u.footType);if(t.isProneToToppling){du.classList.remove("hidden");const n=u.footType==="caster"?"キャスター装備（車輪向きによる支点変化を考慮した安全目安: 4.2）":"安全目安: 3.8";x2.innerHTML=`<strong>転倒注意：</strong>耐震安定値 <span class="metric-tag">${t.ratio.toFixed(2)}</span> ＜ 基準 ${t.threshold}（${n}）。地震等で転倒しやすいため、壁固定等の転倒防止対策を推奨します`}else du.classList.add("hidden");C2(),qa(),br(),dh(),b2(),E2(),Ef()}function b2(){u.hasSideReinforcement?(Do.classList.add("hidden"),Io.classList.remove("hidden")):(Do.classList.remove("hidden"),Io.classList.add("hidden"));const i=u.hasTopReinforcement||u.W>940;i?(Ba.classList.add("hidden"),Oa.classList.remove("hidden")):(Ba.classList.remove("hidden"),Oa.classList.add("hidden")),ds&&(ds.value=u.panelConfig.floor||"acrylic"),Ao.value=u.panelConfig.back,Po.value=u.panelConfig.side,Ro.value=u.panelConfig.sideUpper,Lo.value=u.panelConfig.sideLower,us.value=u.panelConfig.top,fs.value=u.panelConfig.topLeft,ps.value=u.panelConfig.topRight;const e=document.getElementById("panel-summary-badge");if(e){let t="パンチング";const n=i?u.panelConfig.topLeft:u.panelConfig.top;n.startsWith("mesh")?t=`金網${n.replace("mesh","")}mm`:n==="acrylic"&&(t="アクリル天面");let s="背面アクリル";u.panelConfig.back==="punching"?s="背面パンチング":u.panelConfig.back==="polyca"?s="背面中空ポリカ":u.panelConfig.back==="black_matte"?s="背面ブラックマット":u.panelConfig.back==="smoke_gray"&&(s="背面グレースモーク"),e.textContent=`${s} / ${t}`}}function br(){const i=u.hasSideReinforcement&&u.panelConfig.sideUpper==="punching",e=!u.hasSideReinforcement&&u.panelConfig.side==="punching";i||e?(An.disabled=!1,_n.classList.remove("disabled"),Jo.classList.add("ready"),Jo.textContent="選択可能",e?aa.textContent="冬場の保温・換気調整用。左右上下4枚外張り":aa.textContent="冬場の保温・換気調整用。左右外張り"):(An.checked=!1,u.hasSideVentCover=!1,An.disabled=!0,_n.classList.add("disabled"),_n.classList.remove("active"),Jo.classList.remove("ready"),u.hasSideReinforcement?(Jo.textContent="要上部パンチング",aa.textContent="※側面上部が塩ビパンチングパネル時に選択できます"):(Jo.textContent="要側面パンチング",aa.textContent="※側面パネルが塩ビパンチング時に選択できます"))}function qa(){if(u.cageType==="C"||u.cageType==="C_FRAMED"||u.cageType==="A_FRAMED")Ti.checked=!1,Ti.disabled=!0,Yn.classList.remove("active"),Yn.classList.add("disabled"),la.textContent=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED"?"※正面枠囲いは専用枠固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）",wi.checked=!1,wi.disabled=!0,qn.classList.remove("active"),qn.classList.add("disabled"),ca.textContent=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED"?"※正面枠囲いは専用枠固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）";else{const e=u.frameColor==="black"?"高さ60mm(ブラック: 40mm+20mm 2段重ね)使用。深床材・高剛性仕様":"高さ60mmフレーム使用。深床材・高剛性仕様";u.frontWideFrame==="2x"?(Ti.checked=!0,Ti.disabled=!1,Yn.classList.add("active"),Yn.classList.remove("disabled"),la.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",wi.checked=!1,wi.disabled=!0,qn.classList.remove("active"),qn.classList.add("disabled"),ca.textContent="※2倍幅がONのため選択不可（2倍幅を外すと選択可能）"):u.frontWideFrame==="3x"?(Ti.checked=!1,Ti.disabled=!0,Yn.classList.remove("active"),Yn.classList.add("disabled"),la.textContent="※3倍幅がONのため選択不可（3倍幅を外すと選択可能）",wi.checked=!0,wi.disabled=!1,qn.classList.add("active"),qn.classList.remove("disabled"),ca.textContent=e):(Ti.checked=!1,Ti.disabled=!1,Yn.classList.remove("active"),Yn.classList.remove("disabled"),la.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",wi.checked=!1,wi.disabled=!1,qn.classList.remove("active"),qn.classList.remove("disabled"),ca.textContent=e)}Za()}function Za(){const i=u.cageType==="A"||u.cageType==="A_FRAMED"||u.cageType==="C"||u.cageType==="C_FRAMED";wn&&Jn&&(i?(wn.disabled=!1,Jn.classList.remove("disabled"),wn.checked=!!u.hasBottomWideFrame,Jn.classList.toggle("active",!!u.hasBottomWideFrame),ha&&(ha.textContent="床の左右奥行・奥側を高さ40mmフレームに変更し高剛性化")):(wn.checked=!1,wn.disabled=!0,Jn.classList.remove("active"),Jn.classList.add("disabled"),u.hasBottomWideFrame=!1,ha&&(ha.textContent="※前開き扉は構造上選択不可"))),nn&&kt&&(i?u.hasBottomWideFrame?(nn.disabled=!1,kt.classList.remove("disabled"),nn.checked=!!u.hasTopWideFrame,kt.classList.toggle("active",!!u.hasTopWideFrame),lo&&(lo.textContent="天面の左右奥行・前後を高さ40mmフレームに変更（上下両方ONで柱も奥行40mm化）")):(nn.checked=!1,nn.disabled=!0,kt.classList.remove("active"),kt.classList.add("disabled"),u.hasTopWideFrame=!1,lo&&(lo.textContent="※下側幅広フレーム選択時に選択可能（上下両方ONで柱も2040化）")):(nn.checked=!1,nn.disabled=!0,kt.classList.remove("active"),kt.classList.add("disabled"),u.hasTopWideFrame=!1,lo&&(lo.textContent="※前開き扉は構造上選択不可")))}function dh(){const i=u.panelConfig.back==="polyca";let e=!1;u.hasSideReinforcement?e=u.panelConfig.sideLower==="polyca"&&u.panelConfig.sideUpper==="polyca":e=u.panelConfig.side==="polyca",i&&e?(On.checked=!1,u.hasRubberPacking=!1,On.disabled=!0,En.classList.add("disabled"),En.classList.remove("active"),qi.textContent="中空ポリカのみ時は施工不可",qi.className="option-cond-badge",qi.classList.remove("hidden"),hu.textContent="※中空ポリカ仕様には施工できません（アクリル等の面がある場合に選択可）"):(On.disabled=!1,En.classList.remove("disabled"),u.hasRubberPacking?(En.classList.add("active"),On.checked=!0):(En.classList.remove("active"),On.checked=!1),i||(u.hasSideReinforcement?u.panelConfig.sideLower==="polyca"||u.panelConfig.sideUpper==="polyca":u.panelConfig.side==="polyca")?(qi.textContent="中空ポリカ除く面に施工",qi.className="option-cond-badge info",qi.classList.remove("hidden"),hu.textContent="側面・背面からの水漏れの抑制（中空ポリカ面を除くアクリル面に施工）"):(qi.textContent="",qi.classList.add("hidden"))),ws&&v2&&(u.hasFloorReinforcement?(ws.textContent=u.floorSplitCount===3?"床面3分割用 (3枚)":"床面2分割用 (2枚)",ws.className="option-cond-badge info",ws.classList.remove("hidden")):(ws.textContent="通常床面用 (1枚)",ws.className="option-cond-badge",ws.classList.remove("hidden")))}function Sr(i){if(!i)return null;if(He.panels&&He.panels[i])return He.panels[i];if(He.frames&&He.frames[i])return He.frames[i];if(He.rails&&He.rails[i])return He.rails[i];if(He.caps&&He.caps[i])return He.caps[i];if(He.packings&&He.packings[i])return He.packings[i];if(He.hardware&&He.hardware[i])return He.hardware[i];for(const e of[He.panels,He.frames,He.rails,He.caps,He.packings,He.hardware])if(e){for(const[t,n]of Object.entries(e))if(i===t||i.startsWith(t)||t.startsWith(i)||n.name&&(n.name===i||i.includes(n.name)||n.name.includes(i)))return n}return null}function _u(i){const e=i.name||"",t=i.panelCode||i.partCode||"";return t&&t.startsWith("wire_mesh_")||e.includes("金網")?99:e.includes("前窓")?2:e.includes("扉")?1:e.includes("底板")||e.includes("床面")&&!e.includes("支え板")&&!e.includes("プラダン")?3:e.includes("側板")||e.includes("側面")?e.includes("換気量調整板")?7:4:e.includes("背板")||e.includes("背面")?5:e.includes("天板")||e.includes("天面")?6:e.includes("換気量調整板")?7:e.includes("床下パネルヒータ支え板")?8:e.includes("プラダン")?9:10}function vu(i){const e=i.partCode||i.name||"";return e.startsWith("ECP")||e.includes("キャップ")?3:e.startsWith("PGRU")||e.startsWith("PGRL")||e.includes("レール")?2:1}function ka(i){var a,h,c,l,f,m,p,_;const e=Sr(i.panelCode||i.partCode||i.name);let t=i.widthMm,n=i.heightMm;if((!t||!n)&&i.size){const v=i.size.match(/(\d+(?:\.\d+)?)\s*[x×]\s*(\d+(?:\.\d+)?)/);v&&(t=parseFloat(v[1]),n=parseFloat(v[2]))}let s=0,o=0,r=0;if(e&&e.unit==="m2"&&t&&n){const v=t/1e3*(n/1e3),g=i.panelCode&&i.panelCode.startsWith("wire_mesh_")||i.partCode&&i.partCode.startsWith("wire_mesh_")||e.pitchMm!=null,d=i.panelCode==="pvc_punching_3_0"||i.partCode==="pvc_punching_3_0"||i.name&&i.name.includes("塩ビパンチング"),T=i.panelCode&&i.panelCode.startsWith("acrylic_extrusion_")||i.partCode&&i.partCode.startsWith("acrylic_extrusion_")||i.panelCode==="acrylic_extrusion_3_0"||i.panelCode==="acrylic_extrusion_2_0"||i.panelCode==="acrylic_extrusion_1_5",x=i.panelCode==="acrylic_black_matte_3_0"||i.partCode==="acrylic_black_matte_3_0"||i.name&&i.name.includes("黒両面マット"),M=i.panelCode==="acrylic_smoke_gray_3_0"||i.partCode==="acrylic_smoke_gray_3_0"||i.name&&i.name.includes("グレースモーク"),U=i.panelCode==="acrylic_cast_3_0"||i.partCode==="acrylic_cast_3_0"||i.name&&i.name.includes("キャスト");if(g){const L=e.pitchMm||(i.panelCode?parseInt(i.panelCode.replace("wire_mesh_",""),10):25),w=ah(L,t,n);s=w??Math.round(e.pricePerM2*v)}else if(d){const L=pf(t,n);s=L??Math.round(e.pricePerM2*v)}else if(T){const L=e.thicknessMm||3,w=ba(L,t,n);s=w??Math.round(e.pricePerM2*v)}else if(x){const L=mf(t,n);s=L??Math.round(e.pricePerM2*v)}else if(M){const L=gf(t,n);s=L??Math.round(e.pricePerM2*v)}else if(U)if(i.name&&i.name.includes("扉")){const w=vf(t,n),R=_f(t,n);s=w??Math.round(e.pricePerM2*v)+R}else{const w=lh(t,n);s=w??Math.round(e.pricePerM2*v)}else s=Math.round(e.pricePerM2*v);if(i.name&&i.name.includes("換気量調整板")){const L=(c=(h=(a=He.options)==null?void 0:a.items)==null?void 0:h.sideVentCover)==null?void 0:c.holeCostPerPiece,w=(m=(f=(l=He.options)==null?void 0:l.items)==null?void 0:f.sideVentCover)==null?void 0:m.holesPerPanel;s+=w*L}if(i.name&&i.name.includes("床下パネルヒータ支え板")){const L=((_=(p=He.options)==null?void 0:p.items)==null?void 0:_.floorHeaterSupport)||{},w=L.holeCostPerPiece??112,R=L.diagonalCutCost??239,y=L.cornerCutCost??587;if(i.count===2||i.note&&i.note.includes("2枚")){const A=7*w+2*R+1*y;s+=A}else{const A=10*w+4*R;s+=A}}e.baseCostPerPiece&&(s+=e.baseCostPerPiece),o=s*i.count,e.baseCost&&(o+=e.baseCost),r=(e.weightPerM2||0)*v*i.count}return{singleCost:s,totalCost:o,totalWeight:r}}function S2(i){var r,a,h;const e=i.partCode||i.name||"",t=Sr(e);let n=0,s=0,o=0;if(t)if(t.unit==="m"){const l=(i.lengthMm||0)/1e3;n=Math.round(t.pricePerMeter*l),s=n*i.count,o=(t.weightPerMeter||0)*l*i.count}else n=t.pricePerPiece||0,s=n*i.count,o=(t.weightPerPiece||0)*i.count;else{const c=i.name||"";c.includes("化粧つまみネジ")||c.includes("No.1")?(n=(h=(a=(r=He.options)==null?void 0:r.items)==null?void 0:a.floorHeaterSupport)==null?void 0:h.screwCostPerPiece,s=n*i.count,o=.0025*i.count):c.includes("ゴムグロメット")?(n=80,s=n*i.count,o=.005*i.count):c.includes("ローレットノブ")||c.includes("つまみ")&&c.includes("ノブ")?(n=350,s=n*i.count,o=.012*i.count):c.includes("鍵")||c.includes("C-108")?(n=800,s=n*i.count,o=.045*i.count):c.includes("キャスター")?(n=200,s=n*i.count,o=.12*i.count):c.includes("ゴム脚")?(n=60,s=n*i.count,o=.008*i.count):c.includes("M3")&&c.includes("つまみネジ")?(n=25,s=n*i.count,o=.002*i.count):c.includes("M6")&&c.includes("ボルト")?(n=30,s=n*i.count,o=.008*i.count):c.includes("M4")&&c.includes("皿ネジ")?(n=15,s=n*i.count,o=.003*i.count):c.includes("LED")&&(c.includes("USB")||c.includes("白＆電球色")?(n=1980,o=.12):(n=5490,o=.35),s=n*i.count)}return{singleCost:n,totalCost:s,totalWeight:o}}async function xu(i){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(i);else{const e=document.createElement("textarea");e.value=i,e.style.position="fixed",e.style.left="-9999px",e.style.top="0",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}finally{e.remove()}}}function T2(i){if(!i||i.length===0)return"";const e=[],t=[];for(const c of i){const l=c.partCode||c.name||"";l.startsWith("PGRU")||l.startsWith("PGRL")||c.name&&c.name.includes("レール")?t.push(c):e.push(c)}const n=[],s=[];for(const c of e){const l=c.partCode||c.name||"";l.startsWith("ECP")||l.includes("キャップ")||c.lengthMm==null||c.lengthMm===0?s.push(c):n.push(c)}n.sort((c,l)=>{const f=c.lengthMm||0,m=l.lengthMm||0;return m!==f?m-f:(c.partCode||c.name).localeCompare(l.partCode||l.name)}),s.sort((c,l)=>(c.partCode||c.name).localeCompare(l.partCode||l.name));const o=[...n,...s],r=[];let a=0;for(const c of o){const l=Sr(c.partCode);let f=0,m=0;if(l)if(l.unit==="m"){const g=(c.lengthMm||0)/1e3;f=Math.round(l.pricePerMeter*g),m=f*c.count}else f=l.pricePerPiece||0,m=f*c.count;a+=m;let p=c.partCode||c.name;const _=c.lengthMm!=null&&c.lengthMm>0?Math.round(c.lengthMm):null;_!=null&&(p.endsWith(`-${_}`)||(p=`${p}-${_}`)),r.push(`${p}	${c.count}`)}r.push(`${a.toLocaleString()}円`),t.sort((c,l)=>{const f=(c.partCode||c.name||"").startsWith("PGRU"),m=(l.partCode||l.name||"").startsWith("PGRU");if(f&&!m)return-1;if(!f&&m)return 1;const p=c.lengthMm||0;return(l.lengthMm||0)-p});const h=[];for(const c of t){const l=c.partCode||c.name,f=c.lengthMm!=null?Math.round(c.lengthMm):0;h.push(`${l} ${f}mm x${c.count}`)}return h.length>0?`${r.join(`
`)}

${h.join(`
`)}`:r.join(`
`)}function Ef(){if(!nr||!Sa)return;const i=st.getPartsSummary(),e=[],t=[],n=[];for(const d of i)d.partCode==="NSCP1H-S-6"||d.name&&d.name.includes("ゴムパッキン")?n.push(d):d.category==="panel"?t.push(d):d.category==="frame"||d.category==="rail_cap"||d.category==="hardware"?e.push(d):n.push(d);const s=new Map;for(const d of e){const T=d.partCode||d.name,x=d.lengthMm!=null?Math.round(d.lengthMm):null,M=`${T}__${x??"none"}`;if(s.has(M)){const U=s.get(M);U.count+=d.count}else s.set(M,{...d,partCode:T,lengthMm:x,count:d.count})}const o=Array.from(s.values());Mf=o,o.sort((d,T)=>{const x=vu(d),M=vu(T);return x!==M?x-M:(d.partCode||d.name).localeCompare(T.partCode||T.name)}),Sa.innerHTML="",ir&&(ir.innerHTML="");let r=0,a=0,h=0;for(const d of o){h+=d.count;const T=Sr(d.partCode);let x=0,M=0,U=0,L="-";if(T)if(T.unit==="m"){const R=d.lengthMm||0,A=(d.partCode&&(d.partCode.startsWith("PGRU")||d.partCode.startsWith("PGRL"))?Math.ceil(R/250)*250:R)/1e3;L=`${d.lengthMm||Math.round(A*1e3)} mm`,x=Math.round(T.pricePerMeter*A),M=x*d.count,U=T.weightPerMeter*(R/1e3)*d.count}else L="-",x=T.pricePerPiece||0,M=x*d.count,U=(T.weightPerPiece||0)*d.count;else L=d.size||"-";r+=M,a+=U;const w=document.createElement("tr");w.className="bom-cat-frame",w.innerHTML=`
      <td><strong>${d.partCode||d.name}</strong></td>
      <td style="text-align: right; font-family: monospace;">${L}</td>
      <td style="text-align: center; font-family: monospace;">${d.count}</td>
      <td style="text-align: right; font-family: monospace;">¥${M.toLocaleString()}</td>
      <td style="text-align: right; font-family: monospace;">${U.toFixed(3)} kg</td>
    `,Sa.appendChild(w)}if(ir){const d=document.createElement("tr");d.innerHTML=`
      <td><strong>フレーム等 合計</strong></td>
      <td style="text-align: center;">-</td>
      <td style="text-align: center; font-family: monospace;"><strong>${h}点</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>¥${r.toLocaleString()}</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>${a.toFixed(3)} kg</strong></td>
    `,ir.appendChild(d)}t.sort((d,T)=>{const x=_u(d),M=_u(T);return x-M}),[...t];let c=0,l=0,f=0;if(Ta){Ta.innerHTML="",sr&&(sr.innerHTML="");for(const d of t){f+=d.count;const{totalCost:T,totalWeight:x}=ka(d);c+=T,l+=x;const M=d.panelCode&&d.panelCode.startsWith("wire_mesh_")||d.name&&d.name.includes("金網"),U=d.note&&d.note.includes("枠囲い")||d.name&&d.name.includes("枠囲い"),L=d.name&&(d.name.includes("扉")&&!U||d.name.includes("換気量調整板")||d.name.includes("ヒンジ座板")||d.name.includes("ロック受座板")||d.name.includes("床下パネルヒータ支え板")&&!d.name.includes("プラダン")),w=M?'<span style="display: inline-block; background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px; font-weight: bold;">ミスミ手配</span>':L?'<span style="display: inline-block; background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px; font-weight: bold;">★加工あり</span>':'<span style="display: inline-block; background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px;">切断のみ</span>',R=document.createElement("tr");R.className="bom-cat-panel",R.innerHTML=`
        <td><strong>${d.name}</strong></td>
        <td>${d.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${d.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${T.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${x.toFixed(3)} kg</td>
        <td>${w}${d.note||"-"}</td>
      `,Ta.appendChild(R)}if(sr){const d=document.createElement("tr");d.innerHTML=`
        <td><strong>パネル 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${f}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${c.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${l.toFixed(3)} kg</strong></td>
        <td>-</td>
      `,sr.appendChild(d)}}let m=0,p=0,_=0;if(wa){wa.innerHTML="",or&&(or.innerHTML="");for(const d of n){_+=d.count;const{totalCost:T,totalWeight:x}=S2(d);m+=T,p+=x;const M=document.createElement("tr");M.className=`bom-cat-${d.category||"other"}`,M.innerHTML=`
        <td><strong>${d.name}</strong></td>
        <td>${d.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${d.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${T.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${x.toFixed(3)} kg</td>
        <td>${d.note||"-"}</td>
      `,wa.appendChild(M)}if(or){const d=document.createElement("tr");d.innerHTML=`
        <td><strong>その他部材 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${_}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${m.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${p.toFixed(3)} kg</strong></td>
        <td>-</td>
      `,or.appendChild(d)}}const v=document.getElementById("bom-hazaiya-preview-body"),g=document.getElementById("hazaiya-parts-badge");if(v){const d=xf(i,u),T=d.wireMeshList||[],x=d.reduce((w,R)=>w+(R.quantity||1),0),M=d.filter(w=>w.needsMachining).length;let U=0,L=0;for(const w of t){const{totalCost:R}=ka(w);w.panelCode&&w.panelCode.startsWith("wire_mesh_")||w.name&&w.name.includes("金網")?L+=R:ch(w.panelCode||w.partCode,w.name).isHazaiyaOrder&&(U+=R)}if(g){const w=T.length>0?` ＋ 金網${T.length}点(ミスミ)`:"";g.textContent=`${d.length}品目 (${x}枚 / 加工あり${M}点)${w}`}if(d.length===0&&T.length===0)v.innerHTML='<p style="color: #94a3b8; font-style: italic; margin: 4px 0;">※対象のパネル部材はありません。</p>';else{let w="";d.forEach((R,y)=>{const b=R.needsMachining,A=b?"rgba(245, 158, 11, 0.35)":"rgba(56, 189, 248, 0.25)",B=b?'<span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; font-weight: bold;">★加工あり</span>':'<span style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem;">切断のみ</span>';w+=`
          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${A}; border-radius: 4px; padding: 6px 10px; margin-bottom: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; flex-wrap: wrap; gap: 4px;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <strong style="color: ${b?"#fbbf24":"#e2e8f0"};">[${y+1}/${d.length}] ${R.title}</strong>
                ${B}
              </div>
              <span style="font-family: monospace; font-size: 0.7rem; color: #38bdf8;">${R.widthMm} x ${R.heightMm} mm (t${R.thicknessMm}mm) × ${R.quantity}枚</span>
            </div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 3px;">
              素材: <span style="color: #cbd5e1;">${R.materialName}</span> | 仕上げ: <span style="color: #cbd5e1;">${R.edgeFinishing}</span>
            </div>
        `,b&&(R.corners&&R.corners.length>0&&(w+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・コーナー: '+R.corners.map(I=>`<span style="color: #fca5a5;">${I.desc}(${I.spec})</span>`).join(", ")+"</div>"),R.notches&&R.notches.length>0&&(w+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・切欠き: '+R.notches.map(I=>`<span style="color: #fca5a5;">${I.desc}(${I.spec})</span>`).join(", ")+"</div>"),R.holes&&R.holes.length>0&&(w+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・穴あけ: '+R.holes.map((I,G)=>`<span style="color: #93c5fd;">(${G+1}) ${I.desc} [${I.base} ➜ φ${I.diameterMm}mm]</span>`).join("<br>&nbsp;&nbsp;")+"</div>")),w+="</div>"}),w+=`
        <div style="background: rgba(245, 158, 11, 0.1); border: 1px dashed rgba(245, 158, 11, 0.4); border-radius: 4px; padding: 6px 10px; margin: 6px 0; display: flex; justify-content: space-between; align-items: center;">
          <strong style="color: #fbbf24; font-size: 0.72rem;">■ はざいや発注金額合計（税込・加工費込）</strong>
          <span style="font-family: monospace; font-size: 0.85rem; font-weight: bold; color: #fbbf24;">¥${U.toLocaleString()}</span>
        </div>
      `,T.length>0&&(w+=`
          <div style="margin-top: 10px; padding-top: 6px; border-top: 1px solid rgba(168, 85, 247, 0.3);">
            <div style="color: #c084fc; font-weight: bold; font-size: 0.72rem; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">
              <span>🌐</span><span>ミスミ様向け 天面金網発注情報（別仕入れ先）</span>
            </div>
        `,T.forEach((R,y)=>{w+=`
            <div style="background: rgba(88, 28, 135, 0.2); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: 4px; padding: 6px 10px; margin-bottom: 4px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px;">
                <span style="color: #f3e8ff; font-weight: bold;">[${y+1}/${T.length}] ${R.title}</span>
                <span style="font-family: monospace; font-size: 0.72rem; color: #c084fc;">型番: ${R.modelNumber} × ${R.quantity}枚</span>
              </div>
              <div style="font-size: 0.67rem; color: #94a3b8; margin-top: 2px;">
                URL: <a href="${R.misumiUrl}" target="_blank" style="color: #38bdf8; text-decoration: underline; word-break: break-all;">${R.misumiUrl}</a>
              </div>
            </div>
          `}),w+=`
            <div style="background: rgba(168, 85, 247, 0.1); border: 1px dashed rgba(168, 85, 247, 0.4); border-radius: 4px; padding: 6px 10px; margin-top: 4px; display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #c084fc; font-size: 0.72rem;">■ ミスミ金網発注金額合計（税込）</strong>
              <span style="font-family: monospace; font-size: 0.85rem; font-weight: bold; color: #c084fc;">¥${L.toLocaleString()}</span>
            </div>
          </div>
        `),v.innerHTML=w}}Oc&&(Oc.textContent=`${i.length}品目 / フレーム計${h}点 / パネル計${f}点 / その他計${_}点`)}function w2(){try{return}catch(i){console.warn("[Debug] setupDebugBOMIfRequested エラー:",i)}}let Ns=!1;function Ga(){var xe,_e,C,S,F,H,W,$,de,fe,ve,Se,q,ue,Te,Pe,be;const i=st.getPartsSummary();let e=0,t=0,n=0,s=0;for(const Ie of i)if(Ie.category==="frame"||Ie.category==="rail_cap"||Ie.category==="hardware"||Ie.category==="other"){const Fe=Sr(Ie.partCode||Ie.name);if(Fe)if(Fe.unit==="m"){const Oe=Ie.lengthMm||0,J=(Ie.partCode&&(Ie.partCode.startsWith("PGRU")||Ie.partCode.startsWith("PGRL"))?Math.ceil(Oe/250)*250:Oe)/1e3,ce=Math.round(Fe.pricePerMeter*J);e+=ce*Ie.count,t+=Fe.weightPerMeter*(Oe/1e3)*Ie.count}else e+=(Fe.pricePerPiece||0)*Ie.count,t+=(Fe.weightPerPiece||0)*Ie.count}else if(Ie.category==="panel"){const{totalCost:Fe,totalWeight:Oe}=ka(Ie);n+=Fe,s+=Oe}const o=He.options||{},r=o.labor||{},a=o.items||{},h=!!u.hasFloorReinforcement,c=!!(u.hasTopReinforcement||u.W>940),l=u.cageType==="C"||u.cageType==="C_FRAMED",f=!!u.hasSideReinforcement,m=u.cageType==="A"&&u.frontWideFrame==="3x",p=u.footType==="caster",_=!!u.hasSideVentCover,v=!!u.hasPerch,g=!!u.hasRubberPacking,d=!!u.hasRoomDivider,T=u.cageType==="A_FRONT",x=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",M=!!u.hasFloorHeaterSupport,U=!!u.hasBottomWideFrame,L=!!u.hasTopWideFrame,w=h?((xe=r.splitFloor)==null?void 0:xe.price)??500:0,R=c?((_e=r.splitTop)==null?void 0:_e.price)??500:0,y=l?((C=r.typeC)==null?void 0:C.price)??500:0,b=f?((S=r.splitSide)==null?void 0:S.price)??1e3:0,A=m?((F=r.frontWide3x)==null?void 0:F.price)??500:0,B=v?((H=r.perch)==null?void 0:H.price)??1e3:0,I=g?((W=r.rubberPacking)==null?void 0:W.price)??800:0,G=d?(($=r.roomDivider)==null?void 0:$.price)??500:0,O=T?((de=r.frontOpenDoor)==null?void 0:de.price)??3e3:0,Y=x?((fe=r.frontFramedDoor)==null?void 0:fe.price)??5e3:0,z=M?((ve=r.floorHeaterSupport)==null?void 0:ve.price)??1e3:0,N=U?((Se=r.wideBottom)==null?void 0:Se.price)??2e3:0,ee=L?((q=r.wideTop)==null?void 0:q.price)??2e3:0,ae=w+R+y+b+A+B+I+G+O+Y+z+N+ee,ge=p?((ue=a.caster)==null?void 0:ue.price)??1500:0,Ce=p?((Te=a.caster)==null?void 0:Te.cost)??800:0,Be=_?((Pe=a.sideVentCover)==null?void 0:Pe.price)??500:0,j=_?((be=a.sideVentCover)==null?void 0:be.cost)??200:0,le=_?j:0;let Me=0,pe=0,he=0;if(u.ledType&&u.ledType!=="none"){const Fe={usb:a.ledUsb,rgbw:a.ledRgbw}[u.ledType];Fe&&(Me=Fe.price||0,pe=Fe.cost||0,he=Fe.weight||.15)}const Ae=ge+Be+Me,me=Ce+le+pe,Ee=He.pricing||{},te=typeof Ee.markupRate=="number"?Ee.markupRate:1.3,K=typeof Ee.roundingUnit=="number"?Ee.roundingUnit:100,D=e+n,oe=Math.ceil(D*te/K)*K,Q=D+me,re=oe+Ae+ae,ne=t+s+he;return{rawCost:Q,priceWithMarkup:re,weight:ne}}let Qi=null;function E2(){if(Qi&&(Qi.aborted=!0,Qi=null,jn)){jn.classList.remove("is-calculating");const i=jn.querySelector(".calc-btn-title");i&&(i.textContent="見積もりと重量計算")}(Ns||ts&&!ts.classList.contains("hidden"))&&(Ns=!1,ts&&ts.classList.add("hidden"))}async function _r(){Qi&&(Qi.aborted=!0);const i={aborted:!1};if(Qi=i,ts&&ts.classList.remove("hidden"),Zn&&(Zn.classList.remove("value-appear"),Zn.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>部材積算中...</span>
      </span>
    `),Kn&&(Kn.classList.remove("value-appear"),Kn.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>重量計算中...</span>
      </span>
    `),jn){jn.classList.add("is-calculating");const r=jn.querySelector(".calc-btn-title");r&&(r.textContent="部材積算・構造検証中...")}const e=5e3,t=Math.floor(Math.random()*5001),n=e+t,s=100,o=Math.floor(n/s);try{for(let a=0;a<o;a++)if(await new Promise(h=>setTimeout(h,s)),i.aborted)return;const r=Ga();Zn&&(Zn.textContent=`¥${r.priceWithMarkup.toLocaleString()}`,Zn.classList.add("value-appear")),Kn&&(Kn.textContent=`${r.weight.toFixed(1)} kg`,Kn.classList.add("value-appear")),Ns=!0,H2(r)}catch(r){console.error("Structural simulation error:",r),Zn&&(Zn.innerHTML='<span style="color: #ef4444; font-size: 0.82rem; font-weight: 600;">⚠️ 計算中にエラーが発生しました</span>'),Kn&&(Kn.innerHTML='<span style="color: #94a3b8; font-size: 0.85rem;">-</span>'),X2(r)}finally{if(Qi===i&&(Qi=null,jn)){jn.classList.remove("is-calculating");const r=jn.querySelector(".calc-btn-title");r&&(r.textContent="見積もりと重量計算")}}}function zn(i=u.doorHingeSide){return i==="right"?"左打掛、右ヒンジ":"左ヒンジ、右打掛"}function Ka(i=!1){if(u.cageType==="A_FRAMED")return i?"Type A 正面枠囲い（高剛性アルミ枠スライド扉仕様）":"Type A 正面枠囲い";if(u.cageType==="C_FRAMED")return i?"Type C 正面枠囲い（下部前窓＋高剛性アルミ枠スライド扉仕様）":"Type C 正面枠囲い";if(u.cageType==="A_FRONT"){const e=zn();return i?`Type A 前開き (${e})`:`Type A 前開き (${e})`}else if(u.cageType==="C")return i?"Type C（下部前窓＋扉仕様）":"Type C（前窓＋扉）";return i?"Type A（全面スライド扉仕様）":"Type A（全面スライド扉）"}function C2(){if(!pu)return;const i=Ka(!1),e=`W${u.W} × D${u.D} × H${u.H} mm`,t=[];if(u.cageType==="A"){const n=u.frontWideFrame==="3x"?"正面3倍幅":u.frontWideFrame==="2x"?"正面2倍幅":"正面標準幅";t.push(n)}if(t.push(u.hasFloorReinforcement?"床補強: あり":"床補強: なし"),(u.hasTopReinforcement||u.W>940)&&t.push("天板補強: あり"),u.hasSideReinforcement&&t.push(`側面補強(上部開口): ${u.sideOpeningH}mm`),u.hasDoorAntiFlex&&t.push("扉たわみ防止"),u.hasSideVentCover&&t.push("換気調整板"),u.hasPerch&&t.push("止まり木"),u.hasRoomDivider&&t.push("２室分け"),u.ledType&&u.ledType!=="none"){const n={usb:"LED: USB式",rgbw:"LED: RGB+W"};t.push(n[u.ledType]||"LED照明")}t.push(u.footType==="caster"?"キャスター":"ゴム脚"),pu.innerHTML=`
    <div class="spec-line-primary">${i} | ${e}</div>
    <div class="spec-line-sub">${t.join(" / ")}</div>
  `}function ja(i,e,t,n){i.addEventListener("input",s=>{const o=parseInt(s.target.value,10);e.value=o,u[t]=o,n&&n(o),Ye()}),e.addEventListener("change",s=>{let o=parseInt(s.target.value,10);const r=parseInt(i.min,10),a=parseInt(i.max,10),h=parseInt(i.step,10)||10;isNaN(o)&&(o=r),o=Math.round(o/h)*h,o=Math.max(r,Math.min(a,o)),e.value=o,i.value=o,u[t]=o,n&&n(o),Ye()})}function Bs(){if(u.W>940)on.checked=!0,on.disabled=!0,$t.classList.remove("disabled"),$t.classList.add("required-locked"),kc.textContent="幅940mm超のため必須（解除不可）",u.hasFloorReinforcement=!0;else{on.disabled=!1,$t.classList.remove("disabled","required-locked"),kc.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください";const i=u.W*u.D>wf;u.hasFloorReinforcement=i,on.checked=i}u.floorSplitCount||(u.floorSplitCount=2),ct&&(ct.value||(ct.value=String(u.floorSplitCount)),ct.disabled=!u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement)}function Ja(){Gt&&(u.W>940?(Gt.checked=!0,Gt.disabled=!0,Bt&&(Bt.classList.remove("disabled"),Bt.classList.add("required-locked")),go&&(go.textContent="幅940mm超のため必須（解除不可）"),u.hasBackReinforcement=!0):(Gt.disabled&&(Gt.checked=!1,u.hasBackReinforcement=!1),Gt.disabled=!1,Bt&&Bt.classList.remove("disabled","required-locked"),go&&(go.textContent="940mm以下は任意指定（W>940mmは必須）")),u.backSplitCount||(u.backSplitCount=2),ht&&(ht.value||(ht.value=String(u.backSplitCount)),ht.disabled=!u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement))}ja(yn,bn,"W",i=>{Bs(),Ja(),i>940?(Ut.checked=!0,Ut.disabled=!0,Mt&&(Mt.classList.remove("disabled"),Mt.classList.add("required-locked")),Ai.textContent="幅940mm超のため必須（解除不可）",u.hasTopReinforcement=!0):(Ut.disabled=!1,Mt&&Mt.classList.remove("disabled","required-locked"),Ai.textContent="940mm以下は任意指定（W>940mmは必須）",Ut.checked=!1,u.hasTopReinforcement=!1),Mt&&Mt.classList.toggle("active",u.hasTopReinforcement)});ja(rs,as,"D",()=>{Bs()});ja(Sn,Tn,"H",i=>{const e=Math.max(30,i-120);ls.max=e,cs.max=e,u.frontWindowH>e&&(u.frontWindowH=e,ls.value=e,cs.value=e);const t=50,n=Math.max(t,i-110),s=Math.round((i-60)/10)*5;tt.min=t,tt.max=n,tt.step=5,u.hasSideReinforcement?u.sideOpeningH>n?(u.sideOpeningH=n,tt.value=n):u.sideOpeningH<t&&(u.sideOpeningH=t,tt.value=t):(u.sideOpeningH=s,tt.value=s)});ja(ls,cs,"frontWindowH");tt.addEventListener("change",i=>{let e=parseInt(i.target.value,10);const t=50,n=Math.max(t,u.H-110),s=5;isNaN(e)&&(e=t),e=Math.round(e/s)*s,e=Math.max(t,Math.min(n,e)),tt.value=e,u.sideOpeningH=e,Ye()});hs.addEventListener("change",i=>{if(u.hasSideReinforcement=i.target.checked,u.hasSideReinforcement){Ui.classList.add("active"),Ni.classList.remove("disabled");const e=50,t=Math.max(e,u.H-110);tt.min=e,tt.max=t,tt.step=5;const n=Math.round((u.H-60)/10)*5;(u.sideOpeningH<e||u.sideOpeningH>t)&&(u.sideOpeningH=n,tt.value=n)}else Ui.classList.remove("active"),Ni.classList.add("disabled");Ye()});on.addEventListener("change",i=>{u.hasFloorReinforcement=i.target.checked,u.floorSplitCount||(u.floorSplitCount=2),ct&&(ct.value||(ct.value=String(u.floorSplitCount)),ct.disabled=!u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement),Ye()});ct&&ct.addEventListener("change",i=>{u.floorSplitCount=parseInt(i.target.value,10),Ye()});Gt&&Gt.addEventListener("change",i=>{u.hasBackReinforcement=i.target.checked,u.backSplitCount||(u.backSplitCount=2),ht&&(ht.value||(ht.value=String(u.backSplitCount)),ht.disabled=!u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement),Ye()});ht&&ht.addEventListener("change",i=>{u.backSplitCount=parseInt(i.target.value,10),Ye()});ct&&(ct.value=String(u.floorSplitCount||2),ct.disabled=!u.hasFloorReinforcement);ht&&(ht.value=String(u.backSplitCount||2),ht.disabled=!u.hasBackReinforcement);Ut.addEventListener("change",i=>{u.hasTopReinforcement=i.target.checked,Mt&&Mt.classList.toggle("active",u.hasTopReinforcement),Ye()});function A2(){if(!mn||!rn)return;const i=u.cageType==="A_FRONT",e=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",t=document.getElementById("door-anti-flex-sub");i||e?(u.hasDoorAntiFlex&&(u.hasDoorAntiFlex=!1,mn.checked=!1),mn.disabled=!0,rn.classList.add("disabled"),rn.classList.remove("active"),t&&(t.textContent=e?"※正面枠囲い仕様（扉なし）のため選択不可":"※前開き（横開き扉）仕様のためスライド扉用レールは選択不可")):(mn.disabled=!1,rn.classList.remove("disabled"),t&&(t.textContent="強力生体向け。左右端に縦レールを追加し内側からの変形を防止"))}function Hc(){if(!an||!jt)return;const i=u.cageType==="A_FRONT",e=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",t=u.hasPerch;i||t||e?(u.hasRoomDivider&&(u.hasRoomDivider=!1,an.checked=!1,gn&&gn.classList.add("hidden")),an.disabled=!0,jt.classList.add("disabled"),jt.classList.remove("active"),ji&&(e?ji.textContent="※正面枠囲い仕様では2室分け仕切り板は選択不可":i?ji.textContent="※前開き仕様では2室分け仕切り板は選択不可":ji.textContent="※止まり木オプション選択時は利用できません")):(an.disabled=!1,jt.classList.remove("disabled"),ji&&(ji.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"))}mn.addEventListener("change",i=>{if(u.cageType==="A_FRONT"){i.target.checked=!1,u.hasDoorAntiFlex=!1;return}u.hasDoorAntiFlex=i.target.checked,i.target.checked?rn.classList.add("active"):rn.classList.remove("active"),Ye()});An.addEventListener("change",i=>{u.hasSideVentCover=i.target.checked,i.target.checked?_n.classList.add("active"):_n.classList.remove("active"),Ye()});wt&&wt.addEventListener("change",i=>{u.hasPerch=i.target.checked,i.target.checked?(Pt&&Pt.classList.add("active"),Hc(),(u.panelConfig.top!=="punching"||u.panelConfig.topLeft!=="punching"||u.panelConfig.topRight!=="punching")&&(u.panelConfig.top="punching",u.panelConfig.topLeft="punching",u.panelConfig.topRight="punching",us&&(us.value="punching"),fs&&(fs.value="punching"),ps&&(ps.value="punching"),Fi("※天面パンチングボードの穴を利用して固定するため、天面を塩ビパンチングに変更しました。金網天板との組み合わせは直接DMにてご相談ください。",6e3))):(Pt&&Pt.classList.remove("active"),Hc()),Ye()});an&&an.addEventListener("change",i=>{u.hasRoomDivider=i.target.checked,i.target.checked?(jt&&jt.classList.add("active"),gn&&gn.classList.remove("hidden"),wt&&(u.hasPerch&&(u.hasPerch=!1,wt.checked=!1,Pt&&Pt.classList.remove("active")),wt.disabled=!0),Pt&&Pt.classList.add("disabled"),_o&&(_o.textContent="※２室分けオプション選択時は利用できません"),(u.panelConfig.top!=="punching"||u.panelConfig.topLeft!=="punching"||u.panelConfig.topRight!=="punching")&&Fi("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3)):(jt&&jt.classList.remove("active"),gn&&gn.classList.add("hidden"),wt&&(wt.disabled=!1),Pt&&Pt.classList.remove("disabled"),_o&&(_o.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応")),Ye()});ms&&ms.addEventListener("change",i=>{u.panelConfig.partition=i.target.value,Ye()});Ti.addEventListener("change",i=>{i.target.checked?(u.frontWideFrame="2x",mi="2x"):(u.frontWideFrame="none",mi="none"),Ye()});wi.addEventListener("change",i=>{i.target.checked?(u.frontWideFrame="3x",mi="3x"):(u.frontWideFrame="none",mi="none"),Ye()});wn&&wn.addEventListener("change",i=>{u.hasBottomWideFrame=i.target.checked,u.hasBottomWideFrame||(u.hasTopWideFrame=!1),Za(),Ye()});nn&&nn.addEventListener("change",i=>{u.hasTopWideFrame=i.target.checked,i.target.checked?kt==null||kt.classList.add("active"):kt==null||kt.classList.remove("active"),Ye()});On.addEventListener("change",i=>{u.hasRubberPacking=i.target.checked,i.target.checked?En.classList.add("active"):En.classList.remove("active"),Ye()});pi&&pi.addEventListener("change",i=>{u.hasFloorHeaterSupport=i.target.checked,i.target.checked?pn==null||pn.classList.add("active"):pn==null||pn.classList.remove("active"),Ye()});Pn.addEventListener("click",()=>{u.cageType="A",u.frontWideFrame=mi,Pn.classList.add("active"),Et==null||Et.classList.remove("active"),Ct==null||Ct.classList.remove("active"),Gn.classList.remove("active"),At==null||At.classList.remove("active"),si.classList.add("hidden"),It.textContent="Type A 選択中 (全面スライド扉)",vs(),Ye()});Et==null||Et.addEventListener("click",()=>{u.cageType="A_FRONT",u.frontWideFrame=mi,Et.classList.add("active"),Pn.classList.remove("active"),Ct==null||Ct.classList.remove("active"),Gn.classList.remove("active"),At==null||At.classList.remove("active"),si.classList.add("hidden"),It.textContent=`Type A 前開き 選択中 (${zn()})`,vs(),Ye()});Ct==null||Ct.addEventListener("click",()=>{u.cageType="A_FRAMED",Ct.classList.add("active"),Pn.classList.remove("active"),Et==null||Et.classList.remove("active"),Gn.classList.remove("active"),At==null||At.classList.remove("active"),si.classList.add("hidden"),It.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)",vs(),Ye()});Gn.addEventListener("click",()=>{u.cageType="C",u.frontWideFrame="none",Gn.classList.add("active"),Pn.classList.remove("active"),Et==null||Et.classList.remove("active"),Ct==null||Ct.classList.remove("active"),At==null||At.classList.remove("active"),si.classList.remove("hidden"),It.textContent="Type C 選択中 (前窓＋扉)",vs(),Ye()});At==null||At.addEventListener("click",()=>{u.cageType="C_FRAMED",u.frontWideFrame="none",At.classList.add("active"),Pn.classList.remove("active"),Et==null||Et.classList.remove("active"),Ct==null||Ct.classList.remove("active"),Gn.classList.remove("active"),si.classList.remove("hidden"),It.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)",vs(),Ye()});const P2=600,R2=700,L2=900,D2=450,I2=300,F2=200,U2=1800,N2=900;function B2(){const i=u.cageType==="A_FRONT",e=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",t=e?L2:I2,n=e?D2:F2,s=i?P2:U2,o=i?R2:N2;yn&&bn&&(yn.min=t,bn.min=t,yn.max=s,bn.max=s,u.W<t?(u.W=t,yn.value=t,bn.value=t,Bs()):u.W>s&&(u.W=s,yn.value=s,bn.value=s,Bs())),Sn&&Tn&&(Sn.min=n,Tn.min=n,Sn.max=o,Tn.max=o,u.H<n?(u.H=n,Sn.value=n,Tn.value=n):u.H>o&&(u.H=o,Sn.value=o,Tn.value=o))}function vs(){const i=u.cageType==="A_FRONT",e=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",t=u.cageType==="C"||u.cageType==="C_FRAMED";B2(),A2(),Hc(),Yn==null||Yn.classList.toggle("hidden",e||t),qn==null||qn.classList.toggle("hidden",e||t),Gl&&(i?(Gl.classList.remove("hidden"),Li==null||Li.classList.toggle("active",u.doorHingeSide!=="right"),Di==null||Di.classList.toggle("active",u.doorHingeSide==="right")):Gl.classList.add("hidden"));const n=da?da.closest(".control-section"):null;n&&n.classList.remove("hidden"),da&&uu&&(da.style.display=i?"none":"grid",uu.style.display=i?"grid":"none"),fu&&(fu.textContent=i?"前開き扉 開閉":"引き違いスライド扉 開閉");const s=u.doorState||"closed";Tf.forEach(o=>{o.classList.toggle("active",o.getAttribute("data-mode")===s)})}Li&&Li.addEventListener("click",()=>{u.doorHingeSide="left",Li.classList.add("active"),Di==null||Di.classList.remove("active"),u.cageType==="A_FRONT"&&(It.textContent=`Type A 前開き 選択中 (${zn()})`),Ye()});Di&&Di.addEventListener("click",()=>{u.doorHingeSide="right",Di.classList.add("active"),Li==null||Li.classList.remove("active"),u.cageType==="A_FRONT"&&(It.textContent=`Type A 前開き 選択中 (${zn()})`),Ye()});Bi.addEventListener("click",()=>{u.frameColor="silver",Bi.classList.add("active"),Oi.classList.remove("active"),Ye()});Oi.addEventListener("click",()=>{u.frameColor="black",Oi.classList.add("active"),Bi.classList.remove("active"),Ye()});fi.addEventListener("change",i=>{u.footType=i.target.checked?"caster":"rubber",i.target.checked?oi.classList.add("active"):oi.classList.remove("active"),Ye()});function Fo(){u.ledType&&u.ledType!=="none"?(hi==null||hi.classList.add("active"),co==null||co.classList.remove("hidden"),u.ledType==="usb"?(In==null||In.classList.remove("hidden"),Fn==null||Fn.classList.add("hidden")):u.ledType==="rgbw"?(In==null||In.classList.add("hidden"),Fn==null||Fn.classList.remove("hidden")):(In==null||In.classList.add("hidden"),Fn==null||Fn.classList.add("hidden"))):(hi==null||hi.classList.remove("active"),co==null||co.classList.add("hidden")),dr&&ur&&(u.ledPower?(dr.classList.add("active"),ur.classList.remove("active")):(dr.classList.remove("active"),ur.classList.add("active"))),ei&&ei.classList.toggle("active",!!st.isDarkroomMode)}gs&&gs.addEventListener("change",i=>{u.ledType=i.target.value,u.ledType!=="none"&&(u.ledPower=!0),st.setDarkroomOverride(null),Fo(),Ye(),ei&&ei.classList.toggle("active",!!st.isDarkroomMode)});dr&&ur&&(dr.addEventListener("click",()=>{u.ledPower=!0,st.setDarkroomOverride(null),Fo(),Ye(),ei&&ei.classList.toggle("active",!!st.isDarkroomMode)}),ur.addEventListener("click",()=>{u.ledPower=!1,st.setDarkroomOverride(null),Fo(),Ye(),ei&&ei.classList.toggle("active",!!st.isDarkroomMode)}));In&&In.querySelectorAll(".btn-led-mode").forEach(i=>{i.addEventListener("click",e=>{const t=e.target.dataset.usbMode;u.ledColorMode=t,In.querySelectorAll(".btn-led-mode").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),Ye()})});Fn&&Fn.querySelectorAll(".btn-color-dot").forEach(i=>{i.addEventListener("click",e=>{const t=e.target.dataset.color;u.ledRgbColor=t,Fn.querySelectorAll(".btn-color-dot").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),Ye()})});ei&&ei.addEventListener("click",()=>{const i=!st.isDarkroomMode;st.setDarkroomOverride(i),ei.classList.toggle("active",i)});let ua=null;function Bo(i){u.doorState=i,Tf.forEach(t=>{t.getAttribute("data-mode")===i?t.classList.add("active"):t.classList.remove("active")});const e=document.querySelector(".door-mode-group");e.classList.add("door-animating"),ua&&clearTimeout(ua),ua=setTimeout(()=>{e.classList.remove("door-animating"),ua=null},3100),st.setDoorState(i)}yf.addEventListener("click",()=>Bo("closed"));bf.addEventListener("click",()=>Bo("left_open"));Sf.addEventListener("click",()=>Bo("right_open"));Ea==null||Ea.addEventListener("click",()=>Bo("closed"));Ca==null||Ca.addEventListener("click",()=>Bo("open"));function Cf(i){hh=i,st.setAutoRotate(i,u),i?(zc.classList.add("active","rotating"),Gc.forEach(e=>e.classList.remove("active"))):zc.classList.remove("active","rotating")}zc.addEventListener("click",()=>{Cf(!hh)});Gc.forEach(i=>{i.addEventListener("click",()=>{Cf(!1),Gc.forEach(t=>t.classList.remove("active")),i.classList.add("active");const e=i.getAttribute("data-view");st.setViewPreset(e,u)})});M2.addEventListener("click",()=>{u.W=750,u.D=450,u.H=300,u.cageType="A",u.frontWindowH=50,u.hasSideReinforcement=!1,u.sideOpeningH=120,Bo("closed"),yn.value=750,bn.value=750,rs.value=450,as.value=450,Sn.value=300,Tn.value=300,ls.value=50,cs.value=50,hs.checked=!1,Ui.classList.remove("active"),Ni.classList.add("disabled"),tt.min=50,tt.max=190,tt.step=5,tt.value=120,on.checked=!1,on.disabled=!1,$t.classList.remove("disabled"),$t.classList.remove("active"),kc.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください",u.hasFloorReinforcement=!1,u.floorSplitCount=2,ct&&(ct.value="2",ct.disabled=!0),Gt&&(Gt.checked=!1,Gt.disabled=!1,Bt&&(Bt.classList.remove("disabled"),Bt.classList.remove("active")),go&&(go.textContent="940mm以下は任意指定（W>940mmは必須）"),u.hasBackReinforcement=!1,u.backSplitCount=2,ht&&(ht.value="2",ht.disabled=!0)),Ut.checked=!1,Ut.disabled=!1,Mt.classList.remove("disabled"),Mt.classList.remove("active"),Ai.textContent="940mm以下は任意指定（W>940mmは必須）",u.hasTopReinforcement=!1,fi.checked=!1,oi.classList.remove("active"),u.footType="rubber",mn.checked=!1,rn.classList.remove("active"),u.hasDoorAntiFlex=!1,An.checked=!1,_n.classList.remove("active"),u.hasSideVentCover=!1,wt&&(wt.checked=!1,wt.disabled=!1),Pt&&Pt.classList.remove("active","disabled"),_o&&(_o.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応"),u.hasPerch=!1,an&&(an.checked=!1,an.disabled=!1),jt&&jt.classList.remove("active","disabled"),ji&&(ji.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"),gn&&gn.classList.add("hidden"),ms&&(ms.value="black_matte"),u.hasRoomDivider=!1,On&&(On.checked=!1),En&&En.classList.remove("active"),u.hasRubberPacking=!1,pi&&(pi.checked=!1),pn&&pn.classList.remove("active"),u.hasFloorHeaterSupport=!1,u.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"},u.ledType="none",u.ledPower=!0,u.ledBrightness=1,u.ledColorMode="all",u.ledRgbColor="#ffffff",gs&&(gs.value="none"),st.setDarkroomOverride(null),Fo(),u.frontWideFrame="2x",mi="2x",Pn.click(),st.setViewPreset("iso",u),Ye()});ds&&ds.addEventListener("change",i=>{u.panelConfig.floor=i.target.value,Ye()});Ao.addEventListener("change",i=>{u.panelConfig.back=i.target.value,Ye()});Po.addEventListener("change",i=>{u.panelConfig.side=i.target.value,Ye()});Ro.addEventListener("change",i=>{u.panelConfig.sideUpper=i.target.value,br(),Ye()});Lo.addEventListener("change",i=>{u.panelConfig.sideLower=i.target.value,Ye()});us.addEventListener("change",i=>{u.panelConfig.top=i.target.value,u.hasPerch&&i.target.value!=="punching"?Fi("※止まり木は天面パンチングボードの穴を利用します。金網天板やアクリル天板との組み合わせは直接DMにてご相談ください。",5e3):u.hasRoomDivider&&i.target.value!=="punching"&&Fi("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),Ye()});fs.addEventListener("change",i=>{u.panelConfig.topLeft=i.target.value,u.hasPerch&&i.target.value!=="punching"?Fi("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):u.hasRoomDivider&&i.target.value!=="punching"&&Fi("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),Ye()});ps.addEventListener("change",i=>{u.panelConfig.topRight=i.target.value,u.hasPerch&&i.target.value!=="punching"?Fi("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):u.hasRoomDivider&&i.target.value!=="punching"&&Fi("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),Ye()});const Mu=document.querySelectorAll(".sidebar-tab"),O2=document.querySelectorAll(".tab-pane");Mu.forEach(i=>{i.addEventListener("click",()=>{const e=i.getAttribute("data-tab");Mu.forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),i.classList.add("active"),i.setAttribute("aria-selected","true"),O2.forEach(t=>{t.id===e?t.classList.add("active"):t.classList.remove("active")}),st&&typeof st.onResize=="function"&&setTimeout(()=>st.onResize(),50)})});let fa=!0;Vl&&Vl.addEventListener("click",()=>{fa=!fa,Vl.classList.toggle("active",fa),mu&&mu.classList.toggle("hidden",!fa)});let pa=!0;Xl&&Xl.addEventListener("click",()=>{pa=!pa,Xl.classList.toggle("active",pa),gu&&gu.classList.toggle("hidden",!pa)});tt&&(tt.min=50,tt.max=Math.max(50,u.H-110),tt.step=5,tt.value=u.sideOpeningH);Ye();st.setViewPreset("iso",u);jn&&jn.addEventListener("click",()=>{_r()});function k2(){!ss||!Array.isArray(Ua)||(ss.innerHTML="",Ua.forEach(i=>{const e=document.createElement("button");e.className="creature-card",e.dataset.presetId=i.id,e.title=`${i.name} (${i.W}×${i.D}×${i.H}mm)`;const t=Array.isArray(i.tags)&&i.tags.length>0?`<div class="creature-card-tags">
          ${i.tags.map(n=>`<span class="creature-spec-tag">${n}</span>`).join("")}
         </div>`:"";e.innerHTML=`
      <div class="creature-card-header">
        <div class="creature-card-title-wrap">
          <span class="creature-card-icon">${i.icon||"🦎"}</span>
          <span class="creature-card-name">${i.name}</span>
        </div>
        <span class="creature-card-badge">適用中</span>
      </div>
      <div class="creature-card-size">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>
        <span>幅 ${i.W} × 奥行 ${i.D} × 高さ ${i.H} mm</span>
      </div>
      ${t}
      <p class="creature-card-desc">${i.desc||""}</p>
    `,e.addEventListener("click",()=>{Pf(i)}),ss.appendChild(e)}))}function Af(){u.footType="rubber",u.frontWideFrame="2x",u.hasFloorReinforcement=!1,u.floorSplitCount=2,u.hasBackReinforcement=!1,u.backSplitCount=2,u.hasTopReinforcement=!1,u.hasDoorAntiFlex=!1,u.hasSideVentCover=!1,u.hasPerch=!1,u.hasRubberPacking=!1,u.hasFloorHeaterSupport=!1,u.hasRoomDivider=!1,u.hasBottomWideFrame=!1,u.hasTopWideFrame=!1,u.hasSideReinforcement=!1,u.sideOpeningH=120,u.ledType="none",u.ledPower=!0,u.ledBrightness=1,u.ledColorMode="all",u.ledRgbColor="#ffffff",u.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"},fi&&(fi.checked=!1),oi&&oi.classList.remove("active"),on&&(on.checked=!1),$t&&$t.classList.remove("active"),ct&&(ct.value="2",ct.disabled=!0),Gt&&(Gt.checked=!1),Bt&&Bt.classList.remove("active"),ht&&(ht.value="2",ht.disabled=!0),Ut&&(Ut.checked=!1,Ut.disabled=!1),Mt&&Mt.classList.remove("active","disabled","required-locked"),mn&&(mn.checked=!1),rn&&rn.classList.remove("active"),An&&(An.checked=!1),_n&&_n.classList.remove("active"),wt&&(wt.checked=!1,wt.disabled=!1),Pt&&Pt.classList.remove("active","disabled"),On&&(On.checked=!1),En&&En.classList.remove("active"),pi&&(pi.checked=!1),pn&&pn.classList.remove("active"),an&&(an.checked=!1),jt&&jt.classList.remove("active"),gn&&gn.classList.add("hidden"),wn&&(wn.checked=!1),Jn&&Jn.classList.remove("active"),nn&&(nn.checked=!1),kt&&kt.classList.remove("active"),hs&&(hs.checked=!1),Ui&&Ui.classList.remove("active"),Ni&&Ni.classList.add("disabled"),Do&&Do.classList.remove("hidden"),Io&&Io.classList.add("hidden"),gs&&(gs.value="none"),hi&&hi.classList.remove("active"),Fo(),ds&&(ds.value="acrylic"),Ao&&(Ao.value="acrylic"),Po&&(Po.value="acrylic"),Ro&&(Ro.value="punching"),Lo&&(Lo.value="acrylic"),us&&(us.value="punching"),fs&&(fs.value="punching"),ps&&(ps.value="punching"),ms&&(ms.value="black_matte"),ss&&ss.querySelectorAll(".creature-card").forEach(e=>e.classList.remove("active"))}function Pf(i){if(Af(),u.W=i.W,u.D=i.D,u.H=i.H,i.cageType&&(i.cageType==="A"||i.cageType==="A_FRONT"||i.cageType==="A_FRAMED"||i.cageType==="C"||i.cageType==="C_FRAMED")&&(u.cageType=i.cageType,Pn&&Gn&&(Pn.classList.toggle("active",u.cageType==="A"),Et==null||Et.classList.toggle("active",u.cageType==="A_FRONT"),Ct==null||Ct.classList.toggle("active",u.cageType==="A_FRAMED"),Gn.classList.toggle("active",u.cageType==="C"),At==null||At.classList.toggle("active",u.cageType==="C_FRAMED"),It&&(u.cageType==="A_FRAMED"?It.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":u.cageType==="C_FRAMED"?It.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":u.cageType==="A_FRONT"?(u.doorHingeSide=i.doorHingeSide||"left",It.textContent=`Type A 前開き 選択中 (${zn()})`):It.textContent=u.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),si&&si.classList.toggle("hidden",u.cageType!=="C"&&u.cageType!=="C_FRAMED"),vs())),u.cageType==="C"||u.cageType==="C_FRAMED"){const s=i.frontWindowH!=null?i.frontWindowH:50;u.frontWindowH=s,cs&&(cs.value=s),ls&&(ls.value=s)}if(i.frameColor&&(i.frameColor==="silver"||i.frameColor==="black")&&(u.frameColor=i.frameColor,Bi&&Oi&&(Bi.classList.toggle("active",u.frameColor==="silver"),Oi.classList.toggle("active",u.frameColor==="black"))),u.cageType==="A"){const s=i.frontWideFrame||"2x";u.frontWideFrame=s,mi=s}else u.frontWideFrame="none";u.hasSideReinforcement=!!i.hasSideReinforcement,hs&&(hs.checked=u.hasSideReinforcement),Ui&&Ui.classList.toggle("active",u.hasSideReinforcement),Ni&&Ni.classList.toggle("disabled",!u.hasSideReinforcement);const e=50,t=Math.max(e,u.H-110);if(tt&&(tt.min=e,tt.max=t,tt.step=5),i.id==="hedgehog"){const s=Math.round((u.H-60)/10)*5;u.sideOpeningH=s,tt&&(tt.value=s)}else if(i.sideOpeningH!=null)u.sideOpeningH=Math.max(e,Math.min(t,i.sideOpeningH)),tt&&(tt.value=u.sideOpeningH);else if(u.hasSideReinforcement){const s=Math.round((u.H-60)/10)*5;u.sideOpeningH=s,tt&&(tt.value=s)}u.hasDoorAntiFlex=!!i.hasDoorAntiFlex,mn&&(mn.checked=u.hasDoorAntiFlex),rn&&rn.classList.toggle("active",u.hasDoorAntiFlex),u.hasSideVentCover=!!i.hasSideVentCover,An&&(An.checked=u.hasSideVentCover),_n&&_n.classList.toggle("active",u.hasSideVentCover),u.hasPerch=!!i.hasPerch,wt&&(wt.checked=u.hasPerch),Pt&&Pt.classList.toggle("active",u.hasPerch),i.panelConfig&&(u.panelConfig={...u.panelConfig,...i.panelConfig}),u.footType=i.footType||"rubber",fi&&(fi.checked=u.footType==="caster"),oi&&oi.classList.toggle("active",u.footType==="caster"),bn&&(bn.value=u.W),yn&&(yn.value=u.W),as&&(as.value=u.D),rs&&(rs.value=u.D),Tn&&(Tn.value=u.H),Sn&&(Sn.value=u.H),u.floorSplitCount=i.floorSplitCount!=null?i.floorSplitCount:2,ct&&(ct.value=String(u.floorSplitCount)),i.hasFloorReinforcement!=null?(u.hasFloorReinforcement=!!i.hasFloorReinforcement,on&&(on.checked=u.hasFloorReinforcement)):Bs(),ct&&(ct.disabled=!u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement),u.backSplitCount=i.backSplitCount!=null?i.backSplitCount:2,ht&&(ht.value=String(u.backSplitCount)),i.hasBackReinforcement!=null?(u.hasBackReinforcement=!!i.hasBackReinforcement,Gt&&(Gt.checked=u.hasBackReinforcement)):Ja(),ht&&(ht.disabled=!u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement),u.W>940?(Ut.checked=!0,Ut.disabled=!0,Mt&&(Mt.classList.remove("disabled"),Mt.classList.add("required-locked")),Ai.textContent="幅940mm超のため必須（解除不可）",u.hasTopReinforcement=!0):(Ut.disabled=!1,Mt&&Mt.classList.remove("disabled","required-locked"),Ai.textContent="940mm以下は任意指定（W>940mmは必須）",u.hasTopReinforcement=!!i.hasTopReinforcement,Ut.checked=u.hasTopReinforcement),Mt&&Mt.classList.toggle("active",u.hasTopReinforcement),qa(),br(),ss.querySelectorAll(".creature-card").forEach(s=>{s.classList.toggle("active",s.dataset.presetId===i.id)}),Ye(),st.setViewPreset("iso",u)}function G2(i,e={}){if(!i||typeof i!="object")return!1;Af(),Number.isFinite(i.W)&&(u.W=Number(i.W),bn&&(bn.value=u.W),yn&&(yn.value=u.W)),Number.isFinite(i.D)&&(u.D=Number(i.D),as&&(as.value=u.D),rs&&(rs.value=u.D)),Number.isFinite(i.H)&&(u.H=Number(i.H),Tn&&(Tn.value=u.H),Sn&&(Sn.value=u.H));const t=["A","A_FRONT","A_FRAMED","C","C_FRAMED"];if(i.cageType&&t.includes(i.cageType)&&(u.cageType=i.cageType,Pn&&Gn&&(Pn.classList.toggle("active",u.cageType==="A"),Et==null||Et.classList.toggle("active",u.cageType==="A_FRONT"),Ct==null||Ct.classList.toggle("active",u.cageType==="A_FRAMED"),Gn.classList.toggle("active",u.cageType==="C"),At==null||At.classList.toggle("active",u.cageType==="C_FRAMED"),It&&(u.cageType==="A_FRAMED"?It.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":u.cageType==="C_FRAMED"?It.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":u.cageType==="A_FRONT"?(u.doorHingeSide=i.doorHingeSide||"left",It.textContent=`Type A 前開き 選択中 (${zn()})`):It.textContent=u.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),si&&si.classList.toggle("hidden",u.cageType!=="C"&&u.cageType!=="C_FRAMED"),vs())),u.cageType==="C"||u.cageType==="C_FRAMED"){const r=i.frontWindowH!=null?Number(i.frontWindowH):50;u.frontWindowH=r,cs&&(cs.value=r),ls&&(ls.value=r)}i.doorHingeSide&&(i.doorHingeSide==="left"||i.doorHingeSide==="right")&&(u.doorHingeSide=i.doorHingeSide),i.frameColor&&(i.frameColor==="silver"||i.frameColor==="black")&&(u.frameColor=i.frameColor,Bi&&Oi&&(Bi.classList.toggle("active",u.frameColor==="silver"),Oi.classList.toggle("active",u.frameColor==="black"))),u.footType=i.footType==="caster"?"caster":"rubber",fi&&(fi.checked=u.footType==="caster"),oi&&oi.classList.toggle("active",u.footType==="caster"),u.cageType==="A"?(u.frontWideFrame=i.frontWideFrame||"2x",mi=u.frontWideFrame):u.frontWideFrame="none",u.hasSideReinforcement=!!i.hasSideReinforcement,hs&&(hs.checked=u.hasSideReinforcement),Ui&&Ui.classList.toggle("active",u.hasSideReinforcement),Ni&&Ni.classList.toggle("disabled",!u.hasSideReinforcement);const n=50,s=Math.max(n,u.H-110);tt&&(tt.min=n,tt.max=s),u.sideOpeningH=i.sideOpeningH!=null?Math.max(n,Math.min(s,Number(i.sideOpeningH))):120,tt&&(tt.value=u.sideOpeningH),Do&&Io&&(Do.classList.toggle("hidden",u.hasSideReinforcement),Io.classList.toggle("hidden",!u.hasSideReinforcement)),u.hasDoorAntiFlex=!!i.hasDoorAntiFlex,mn&&(mn.checked=u.hasDoorAntiFlex),rn&&rn.classList.toggle("active",u.hasDoorAntiFlex),u.hasSideVentCover=!!i.hasSideVentCover,An&&(An.checked=u.hasSideVentCover),_n&&_n.classList.toggle("active",u.hasSideVentCover),u.hasPerch=!!i.hasPerch,wt&&(wt.checked=u.hasPerch),Pt&&Pt.classList.toggle("active",u.hasPerch),u.hasRubberPacking=!!i.hasRubberPacking,On&&(On.checked=u.hasRubberPacking),En&&En.classList.toggle("active",u.hasRubberPacking),u.hasFloorHeaterSupport=!!i.hasFloorHeaterSupport,pi&&(pi.checked=u.hasFloorHeaterSupport),pn&&pn.classList.toggle("active",u.hasFloorHeaterSupport),u.hasBottomWideFrame=!!i.hasBottomWideFrame,u.hasTopWideFrame=u.hasBottomWideFrame&&!!i.hasTopWideFrame,wn&&(wn.checked=u.hasBottomWideFrame),Jn&&Jn.classList.toggle("active",u.hasBottomWideFrame),nn&&(nn.checked=u.hasTopWideFrame),kt&&kt.classList.toggle("active",u.hasTopWideFrame),u.floorSplitCount=i.floorSplitCount!=null?Number(i.floorSplitCount):2,ct&&(ct.value=String(u.floorSplitCount)),typeof i.hasFloorReinforcement=="boolean"?u.hasFloorReinforcement=i.hasFloorReinforcement:Bs(),on&&(on.checked=u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement),ct&&(ct.disabled=!u.hasFloorReinforcement),u.backSplitCount=i.backSplitCount!=null?Number(i.backSplitCount):2,ht&&(ht.value=String(u.backSplitCount)),typeof i.hasBackReinforcement=="boolean"?u.hasBackReinforcement=i.hasBackReinforcement:Ja(),Gt&&(Gt.checked=u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement),ht&&(ht.disabled=!u.hasBackReinforcement),u.W>940?(Ut&&(Ut.checked=!0,Ut.disabled=!0),Mt&&(Mt.classList.remove("disabled"),Mt.classList.add("required-locked")),Ai&&(Ai.textContent="幅940mm超のため必須（解除不可）"),u.hasTopReinforcement=!0):(Ut&&(Ut.disabled=!1),Mt&&Mt.classList.remove("disabled","required-locked"),Ai&&(Ai.textContent="940mm以下は任意指定（W>940mmは必須）"),u.hasTopReinforcement=!!i.hasTopReinforcement,Ut&&(Ut.checked=u.hasTopReinforcement),Mt&&Mt.classList.toggle("active",u.hasTopReinforcement));const o=u.hasTopReinforcement||u.W>940;if(Ba&&Oa&&(Ba.classList.toggle("hidden",o),Oa.classList.toggle("hidden",!o)),u.hasRoomDivider=!!i.hasRoomDivider,an&&(an.checked=u.hasRoomDivider),jt&&jt.classList.toggle("active",u.hasRoomDivider),gn&&gn.classList.toggle("hidden",!u.hasRoomDivider),u.hasRoomDivider&&wt&&(u.hasPerch=!1,wt.checked=!1,wt.disabled=!0,Pt&&Pt.classList.add("disabled")),u.ledType=i.ledType||"none",gs&&(gs.value=u.ledType),typeof i.ledPower=="boolean"&&(u.ledPower=i.ledPower),typeof i.ledBrightness=="number"&&(u.ledBrightness=i.ledBrightness),i.ledColorMode&&(u.ledColorMode=i.ledColorMode),i.ledRgbColor&&(u.ledRgbColor=i.ledRgbColor),hi&&hi.classList.toggle("active",u.ledType!=="none"),Fo(),i.panelConfig&&typeof i.panelConfig=="object"&&(u.panelConfig={...u.panelConfig,...i.panelConfig}),ds&&u.panelConfig.floor&&(ds.value=u.panelConfig.floor),Ao&&u.panelConfig.back&&(Ao.value=u.panelConfig.back),Po&&u.panelConfig.side&&(Po.value=u.panelConfig.side),Ro&&u.panelConfig.sideUpper&&(Ro.value=u.panelConfig.sideUpper),Lo&&u.panelConfig.sideLower&&(Lo.value=u.panelConfig.sideLower),us&&u.panelConfig.top&&(us.value=u.panelConfig.top),fs&&u.panelConfig.topLeft&&(fs.value=u.panelConfig.topLeft),ps&&u.panelConfig.topRight&&(ps.value=u.panelConfig.topRight),ms&&u.panelConfig.partition&&(ms.value=u.panelConfig.partition),ss&&ss.querySelectorAll(".creature-card").forEach(a=>a.classList.remove("active")),qa(),Za(),br(),dh(),Ye(),st.setViewPreset("iso",u),e&&e.isRestore){const r=Ga();Zn&&(Zn.textContent=`¥${r.priceWithMarkup.toLocaleString()}`,Zn.classList.add("value-appear")),Kn&&(Kn.textContent=`${r.weight.toFixed(1)} kg`,Kn.classList.add("value-appear")),ts&&ts.classList.remove("hidden"),Ns=!0}else typeof _r=="function"&&_r();return!0}async function Wc(i,e={}){var n,s,o,r,a,h,c;if(!i||typeof i!="string"){Zi("error","見積りIDを入力してください。");return}const t=i.trim().toUpperCase();if(!t.startsWith("EST-")||t.length<10){Zi("error","見積りIDの形式が正しくありません。（例: EST-20261005-AB12）");return}Zi("loading",`⏳ 見積ID「${t}」の仕様データを検索中...`),po&&(po.disabled=!0);try{let l=null,f=null;const m=(n=He==null?void 0:He.system)==null?void 0:n.gasLogEndpointUrl;let p=!1,_=!1;if(m&&m.startsWith("http"))try{const g=`${m}?estimateId=${encodeURIComponent(t)}`;console.log("[Restore] GASへ見積りデータ問い合わせ中:",g);const T=await(await fetch(g,{method:"GET",mode:"cors"})).text();if(T.includes("スクリプト関数が見つかりません")||T.includes("doGet"))p=!0,console.warn("[Restore] GAS側に doGet が未デプロイです。");else try{const x=JSON.parse(T);x.status==="success"&&x.spec?(l=x.spec,f=x,console.log("[Restore] GASから仕様データを正常に受信:",x)):x.status==="not_found"&&(_=!0,console.warn("[Restore] GAS上で該当見積りが見つかりませんでした:",x.message))}catch(x){console.warn("[Restore] レスポンスのJSONパースに失敗:",x,T.substring(0,200))}}catch(g){console.warn("[Restore] GAS通信エラー（ローカルキャッシュ検索へフォールバック）:",g)}if(!l)try{const g=localStorage.getItem(`kinato_estimate_${t}`);if(g){const d=JSON.parse(g);d&&d.spec&&(l=d.spec,f=d,console.log("[Restore] localStorageから仕様データを復元:",d))}else{const d=localStorage.getItem("kinato_latest_estimate");if(d){const T=JSON.parse(d);T&&T.estimateId===t&&T.spec&&(l=T.spec,f=T,console.log("[Restore] 最新localStorageキャッシュから仕様データを復元:",T))}}}catch(g){console.warn("[Restore] localStorage検索エラー:",g)}if(!l){if(p?Zi("error","⚠️ スプレッドシート側のGASに最新コード（doGet）がまだ保存・デプロイされていません。Google Apps Scriptを更新して再度お試しください。"):_?Zi("error",`❌ スプレッドシート内に見積ID「${t}」の記録が見つかりませんでした。IDをお確かめください。`):Zi("error",`❌ 見積ID「${t}」が見つかりませんでした。入力内容をお確かめください。`),e&&e.isUrlAccess){const g=vr(),d=za(),T={estimateId:t,timestamp:new Date().toISOString(),visitorId:g,sessionId:d,seq:1,spec:{...u},totals:Ga(),diffNote:"見積りID_URLからの閲覧(仕様未検出)",elapsedSec:0};Vc(T)}return}G2(l,{isRestore:!0}),Nn=t,nt=JSON.parse(JSON.stringify(u)),Ns=!0;const v=Ga();if(f){const g=((s=f.summary)==null?void 0:s.originalPrice)||((o=f.totals)==null?void 0:o.priceWithMarkup)||((r=f.originalTotals)==null?void 0:r.priceWithMarkup),d=((a=f.summary)==null?void 0:a.originalWeight)||((h=f.totals)==null?void 0:h.weight)||((c=f.originalTotals)==null?void 0:c.weight);console.log(`[仕様再現 検証] 見積ID: ${t} | 記録時価格: ¥${g==null?void 0:g.toLocaleString()} / 重量: ${d}kg`)}if(Zi("success",`✅ 見積ID「${t}」のケージ仕様・全オプションを完全再現しました！`),Fi(`✅ 見積ID: ${t} の仕様を完全に読み込みました！`,4500),e&&e.isUrlAccess){const g=vr(),d=za(),T={estimateId:t,timestamp:new Date().toISOString(),visitorId:g,sessionId:d,seq:1,spec:{...u},totals:v,diffNote:"見積りID_URLからの閲覧",elapsedSec:0};Vc(T),console.log(`[Log] お客様URL再現アクセスログをスプレッドシートへ送信: ID=${t}, VisitorId=${g}`)}}catch(l){console.error("[Restore] 復元処理エラー:",l),Zi("error",`エラーが発生しました: ${l.message}`)}finally{po&&(po.disabled=!1)}}function Zi(i,e){oa&&(oa.className=`restore-status-msg ${i}`,oa.textContent=e,oa.classList.remove("hidden"))}po&&Ps&&(po.addEventListener("click",()=>{Wc(Ps.value)}),Ps.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),Wc(Ps.value))}),Ps.addEventListener("input",i=>{i.target.value=i.target.value.toUpperCase()}));function z2(){const i=new Date,e=i.getFullYear()+String(i.getMonth()+1).padStart(2,"0")+String(i.getDate()).padStart(2,"0"),t=Math.random().toString(36).substring(2,6).toUpperCase();return`EST-${e}-${t}`}function uh(i){if(!i)return"";if(window.location.hostname.includes("pages.dev")||window.location.hostname.includes("kinatocage"))return`https://kinato-cage-site.pages.dev/sim/?estimateId=${encodeURIComponent(i)}`;const t=new URL(window.location.href);return t.search=`?estimateId=${encodeURIComponent(i)}`,t.toString()}function vr(){try{let i=localStorage.getItem("cage_visitor_id");return i||(i="usr_"+Math.random().toString(36).substring(2,8),localStorage.setItem("cage_visitor_id",i)),i}catch{return"usr_"+Math.random().toString(36).substring(2,8)}}function za(){try{let i=sessionStorage.getItem("cage_session_id");return i||(i="ses_"+Math.random().toString(36).substring(2,8),sessionStorage.setItem("cage_session_id",i)),i}catch{return"ses_"+Math.random().toString(36).substring(2,8)}}function H2(i){Nn=z2(),cu++;let e="初期表示からの試算";if(nt){const n=[];u.W!==nt.W&&n.push(`W:${nt.W}→${u.W}`),u.D!==nt.D&&n.push(`D:${nt.D}→${u.D}`),u.H!==nt.H&&n.push(`H:${nt.H}→${u.H}`),u.cageType!==nt.cageType&&n.push(`タイプ:${u.cageType}`),u.cageType==="C"&&u.frontWindowH!==nt.frontWindowH&&n.push(`前窓高:${nt.frontWindowH}→${u.frontWindowH}`),u.cageType==="A_FRONT"&&u.doorHingeSide!==nt.doorHingeSide&&n.push(`開き:${zn(nt.doorHingeSide)}→${zn(u.doorHingeSide)}`),u.frameColor!==nt.frameColor&&n.push(`色:${nt.frameColor==="black"?"黒":"銀"}→${u.frameColor==="black"?"黒":"銀"}`),u.frontWideFrame!==nt.frontWideFrame&&n.push(`正面下部:${nt.frontWideFrame||"なし"}→${u.frontWideFrame||"なし"}`),u.footType!==nt.footType&&n.push(`脚:${u.footType==="caster"?"キャスター":"ゴム脚"}`),u.hasFloorReinforcement!==nt.hasFloorReinforcement&&n.push(u.hasFloorReinforcement?"床補強追加":"床補強解除"),u.hasTopReinforcement!==nt.hasTopReinforcement&&n.push(u.hasTopReinforcement?"天板補強追加":"天板補強解除"),u.hasSideReinforcement!==nt.hasSideReinforcement&&n.push(u.hasSideReinforcement?"側面補強追加":"側面補強解除"),u.hasDoorAntiFlex!==nt.hasDoorAntiFlex&&n.push(u.hasDoorAntiFlex?"扉たわみ防止追加":"扉たわみ防止解除"),u.hasSideVentCover!==nt.hasSideVentCover&&n.push(u.hasSideVentCover?"換気調整板追加":"換気調整板解除"),u.hasPerch!==nt.hasPerch&&n.push(u.hasPerch?"止まり木追加":"止まり木解除"),u.hasRubberPacking!==nt.hasRubberPacking&&n.push(u.hasRubberPacking?"ゴムパッキン追加":"ゴムパッキン解除"),u.hasFloorHeaterSupport!==nt.hasFloorHeaterSupport&&n.push(u.hasFloorHeaterSupport?"床下ヒータ支え板追加":"床下ヒータ支え板解除"),u.hasRoomDivider!==nt.hasRoomDivider&&n.push(u.hasRoomDivider?"2室分け追加":"2室分け解除"),u.hasBottomWideFrame!==nt.hasBottomWideFrame&&n.push(u.hasBottomWideFrame?"下側幅広外周追加":"下側幅広外周解除"),u.hasTopWideFrame!==nt.hasTopWideFrame&&n.push(u.hasTopWideFrame?"上側幅広外周追加":"上側幅広外周解除"),u.hasSideReinforcement&&u.sideOpeningH!==nt.sideOpeningH&&n.push(`側上部開口:${nt.sideOpeningH}→${u.sideOpeningH}`);const s=nt.panelConfig||{},o=u.panelConfig||{};o.floor!==s.floor&&n.push(`床:${dn(s.floor)}→${dn(o.floor)}`),o.back!==s.back&&n.push(`背:${dn(s.back)}→${dn(o.back)}`),u.hasSideReinforcement?(o.sideUpper!==s.sideUpper||o.sideLower!==s.sideLower)&&n.push(`側分割:${dn(o.sideUpper)}/${dn(o.sideLower)}`):o.side!==s.side&&n.push(`側:${dn(s.side)}→${dn(o.side)}`);const r=u.hasTopReinforcement||u.W>940,a=nt.hasTopReinforcement||nt.W>940;r||a?(o.topLeft!==s.topLeft||o.topRight!==s.topRight||!a)&&n.push(`天分割:${dn(o.topLeft)}/${dn(o.topRight)}`):o.top!==s.top&&n.push(`天:${dn(s.top)}→${dn(o.top)}`),u.hasRoomDivider&&o.partition!==s.partition&&n.push(`仕切り:${dn(s.partition)}→${dn(o.partition)}`),n.length>0?e=n.join(", "):e="同一条件での再計算"}const t=W2(Nn,i);iu&&(iu.textContent=Nn),su&&(su.textContent=`¥${i.priceWithMarkup.toLocaleString()}`),ou&&(ou.textContent=`${i.weight.toFixed(1)} kg`),hr&&(hr.value=t),es&&(es.value=uh(Nn)),kn&&(un&&un.classList.add("hidden"),Na&&Na.classList.add("hidden"),window.lastGeneratedEstimateImage=null,kn.classList.remove("hidden")),Ls={estimateId:Nn,timestamp:new Date().toISOString(),visitorId:g2,sessionId:_2,seq:cu,spec:{...u},totals:{...i},diffNote:e,elapsedSec:Math.round((Date.now()-m2)/1e3)},nt=JSON.parse(JSON.stringify(u));try{localStorage.setItem(`kinato_estimate_${Nn}`,JSON.stringify(Ls)),localStorage.setItem("kinato_latest_estimate",JSON.stringify(Ls))}catch{}Vc(Ls)}function fh(){return u.frameColor==="black"?"ブラック":"シルバー"}function li(i){switch(i){case"acrylic":return"透明アクリル 3.0mm";case"black_matte":return"アクリル黒両面マット 3.0mm";case"smoke_gray":return"アクリル グレースモーク半透明 3.0mm";case"punching":return"塩ビパンチングボード 3.0mm";case"polyca":return"中空ポリカ 4.0mm";case"mesh15":return"金網15mmピッチ (黒粉体塗装)";case"mesh25":return"金網25mmピッチ (黒粉体塗装)";case"mesh30":return"金網30mmピッチ (黒粉体塗装)";default:return i||"透明アクリル 3.0mm"}}function dn(i){switch(i){case"acrylic":return"透明アクリル";case"black_matte":return"黒マット";case"smoke_gray":return"グレースモーク";case"punching":return"パンチング";case"polyca":return"中空ポリカ";case"mesh15":return"金網15mm";case"mesh25":return"金網25mm";case"mesh30":return"金網30mm";default:return i||"アクリル"}}function ph(){const i=[];u.cageType==="C"?(i.push({face:"正面扉",name:"透明アクリル 3.0mm (スライド扉)"}),i.push({face:"正面固定窓",name:`透明アクリル 3.0mm (開口高 ${u.frontWindowH}mm)`})):u.cageType==="A_FRONT"?i.push({face:"正面扉",name:`透明アクリル 3.0mm (前開き扉: ${zn()})`}):i.push({face:"正面扉",name:"透明アクリル 3.0mm (全面スライド扉)"});const e=u.floorSplitCount===3?"3分割":"2分割";i.push({face:u.hasFloorReinforcement?`床面 (中央${e})`:"床面",name:li(u.panelConfig.floor)});const t=u.backSplitCount===3?"3分割":"2分割";return i.push({face:u.hasBackReinforcement?`背面 (中央${t})`:"背面",name:li(u.panelConfig.back)}),u.hasSideReinforcement?i.push({face:"側面 (左右2分割)",name:`上部: ${li(u.panelConfig.sideUpper)} / 下部: ${li(u.panelConfig.sideLower)}`}):i.push({face:"側面 (左右)",name:li(u.panelConfig.side)}),u.hasTopReinforcement||u.W>940?u.panelConfig.topLeft===u.panelConfig.topRight?i.push({face:"天面 (中央2分割)",name:`${li(u.panelConfig.topLeft)} (左右共通)`}):i.push({face:"天面 (中央2分割)",name:`左: ${li(u.panelConfig.topLeft)} / 右: ${li(u.panelConfig.topRight)}`}):i.push({face:"天面",name:li(u.panelConfig.top)}),u.hasRoomDivider&&i.push({face:"仕切り板",name:li(u.panelConfig.partition||"black_matte")}),i}function mh(){const i=[];if(u.cageType==="A_FRONT"&&i.push(`前開き扉仕様 (${zn()})`),u.cageType==="A"&&(u.frontWideFrame==="2x"?i.push("正面下側幅広フレーム2倍幅 (40mm)"):u.frontWideFrame==="3x"&&i.push("正面下側幅広フレーム3倍幅 (60mm)")),u.hasBottomWideFrame&&i.push("下側幅広フレーム（高さ40mm・外周）"),u.hasTopWideFrame&&i.push("上側幅広フレーム（高さ40mm・外周）"),u.cageType==="C"&&i.push(`前窓固定仕様 (開口高さ ${u.frontWindowH}mm)`),u.hasSideReinforcement&&i.push(`側面補強フレーム (側面上部開口 ${u.sideOpeningH}mm・左右2分割)`),u.hasSideVentCover&&(u.hasSideReinforcement?i.push("側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)"):i.push("側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)")),u.hasFloorReinforcement){const e=u.floorSplitCount===3?"3分割仕様":"2分割仕様";u.W>940?i.push(`床面補強フレーム (幅940mm超・標準付属/${e})`):i.push(`床面補強フレーム (${e})`)}if(u.hasBackReinforcement){const e=u.backSplitCount===3?"3分割仕様":"2分割仕様";u.W>940?i.push(`背面補強フレーム (幅940mm超・標準付属/${e})`):i.push(`背面補強フレーム (${e})`)}if(u.W>940?i.push("天板中央補強フレーム (幅940mm超・標準付属/2分割仕様)"):u.hasTopReinforcement&&i.push("天板中央補強フレーム (2分割仕様)"),u.hasDoorAntiFlex&&i.push("正面スライド扉たわみ防止レール"),u.footType==="caster"&&i.push("自在キャスター仕様 (4輪・高さ66mm)"),u.hasPerch){const e=u.W-120,t=Math.floor(e/7)*7,n=Math.max(10,t-15);i.push(`止まり木（天板吊り下げ式・φ30アルミ丸棒 L=${n}mm・後付け可）`)}if(u.hasRubberPacking&&i.push("モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)"),u.hasFloorHeaterSupport&&(u.hasFloorReinforcement?u.floorSplitCount===3?i.push("床下パネルヒータ支え板 (床面3分割用・透明アクリル2.0mm 3枚＋緩衝プラダン4.0mm 3枚＋化粧ネジ付)"):i.push("床下パネルヒータ支え板 (床面2分割用・透明アクリル2.0mm 2枚＋緩衝プラダン4.0mm 2枚＋化粧ネジ付)"):i.push("床下パネルヒータ支え板 (通常床面用・透明アクリル2.0mm 1枚＋緩衝プラダン4.0mm 1枚＋化粧ネジ付)")),u.hasRoomDivider&&i.push("２室分け（後付け仕切り板仕様）"),u.ledType&&u.ledType!=="none"){const e={usb:"LED照明: USB式 白＆電球色 LED",rgbw:"LED照明: リモコン操作 RGB+W"};i.push(e[u.ledType]||"LED照明")}return i}function W2(i,e){const t=Ka(!0),n=fh(),o=ph().map(c=>`  ・${c.face}: ${c.name}`).join(`
`),r=mh(),a=r.length>0?r.map(c=>`  ・${c}`).join(`
`):"  ・標準構成（追加オプションなし）",h=uh(i);return`【ケージお見積もり仕様】
・見積ID: ${i}
・仕様再現URL:
  ${h}
・ケージ種類: ${t}
・外寸サイズ: 幅 ${u.W}mm × 奥行 ${u.D}mm × 高さ ${u.H}mm
・フレーム色: ${n}
・選択パネル素材・板厚:
${o}
・選択オプション:
${a}
・概算総重量: 約 ${e.weight.toFixed(1)} kg
・お見積り合計金額: ¥${e.priceWithMarkup.toLocaleString()}（税込・送料別）
※URLを控えることで、この仕様にてロードされます。
※公式サイト: https://kinato-cage-site.pages.dev/`}lu&&kn&&lu.addEventListener("click",()=>{Ns?(un&&un.classList.add("hidden"),es&&Nn&&(es.value=uh(Nn)),kn.classList.remove("hidden")):alert("先に「見積もりと重量計算」を実行してください。")});ru&&kn&&ru.addEventListener("click",()=>{kn.classList.add("hidden")});au&&kn&&au.addEventListener("click",()=>{kn.classList.add("hidden")});kn&&kn.addEventListener("click",i=>{i.target===kn&&kn.classList.add("hidden")});Ol&&hr&&Ol.addEventListener("click",async()=>{const i=hr.value;if(i)try{await navigator.clipboard.writeText(i),oo&&(oo.classList.remove("hidden"),setTimeout(()=>oo.classList.add("hidden"),2200));const e=Ol.querySelector(".copy-text-label");if(e){const t=e.textContent;e.textContent="済！",setTimeout(()=>{e.textContent=t},1800)}}catch{hr.select(),document.execCommand("copy"),oo&&(oo.classList.remove("hidden"),setTimeout(()=>oo.classList.add("hidden"),2200))}});kl&&es&&kl.addEventListener("click",async()=>{const i=es.value;if(i)try{navigator.clipboard&&navigator.clipboard.writeText?await navigator.clipboard.writeText(i):(es.select(),document.execCommand("copy")),ao&&(ao.classList.remove("hidden"),setTimeout(()=>{ao.classList.add("hidden")},3e3));const e=kl.querySelector(".copy-url-label");if(e){const t=e.textContent;e.textContent="コピー完了！",setTimeout(()=>{e.textContent=t},2e3)}}catch{es.select(),document.execCommand("copy"),ao&&(ao.classList.remove("hidden"),setTimeout(()=>ao.classList.add("hidden"),3e3))}});Bc&&Bc.addEventListener("click",()=>{V2()});mo&&mo.addEventListener("click",()=>{mo.src&&window.open(mo.src,"_blank")});async function V2(){if(!Ns||!Ls){alert("先に見積もり計算を実行してください。");return}const i=Bc||p2;let e="";i&&(i.classList.add("is-exporting"),e=i.innerHTML,i.innerHTML="<span>⏳ 画像を生成中...</span>");try{const t=st.captureImage?st.captureImage():st.renderer.domElement.toDataURL("image/png"),n=document.createElement("canvas");n.width=1080,n.height=1920;const s=n.getContext("2d"),o=s.createLinearGradient(0,0,0,1920);o.addColorStop(0,"#090d16"),o.addColorStop(.35,"#0f172a"),o.addColorStop(1,"#1e293b"),s.fillStyle=o,s.fillRect(0,0,1080,1920),s.strokeStyle="rgba(56, 189, 248, 0.06)",s.lineWidth=1;for(let ae=60;ae<1080;ae+=80)s.beginPath(),s.moveTo(ae,0),s.lineTo(ae,1920),s.stroke();for(let ae=60;ae<1920;ae+=80)s.beginPath(),s.moveTo(0,ae),s.lineTo(1080,ae),s.stroke();s.strokeStyle="rgba(56, 189, 248, 0.35)",s.lineWidth=2,s.strokeRect(40,40,1e3,1840);const r=ae=>new Promise(ge=>{if(!ae)return ge(null);const Ce=new Image;Ce.onload=()=>ge(Ce),Ce.onerror=()=>ge(null),Ce.src=ae}),a="./",[h,c,l,f]=await Promise.all([r(`${a}logo_kinato.png`),r(`${a}character_transparent.png`),r(t),r(`${a}qr_code_kinato.png`)]);h&&s.drawImage(h,65,65,135,135);const m=h?215:65;s.fillStyle="#ffffff",s.font='bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("きなとのケージ屋さん",m,104),s.fillStyle="#38bdf8",s.font='600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3Dオーダーメイドケージ お見積書",m,140),s.fillStyle="#f9c784",s.font="500 16px ui-monospace, SFMono-Regular, monospace",s.fillText("https://kinato-cage-site.pages.dev/",m,172),f&&(s.fillStyle="#ffffff",s.shadowColor="rgba(56, 189, 248, 0.3)",s.shadowBlur=10,Qo(s,605,67,130,130,8),s.fill(),s.shadowColor="transparent",s.shadowBlur=0,s.drawImage(f,610,72,120,120)),s.textAlign="right",s.fillStyle="#fb7185",s.font="bold 24px ui-monospace, monospace",s.fillText(Nn,1015,110),s.fillStyle="#94a3b8",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const p=new Date,_=`${p.getFullYear()}/${String(p.getMonth()+1).padStart(2,"0")}/${String(p.getDate()).padStart(2,"0")} ${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`;s.fillText(`発行日時: ${_}`,1015,148),s.textAlign="left";const v=65,g=240,d=950,T=700;if(s.fillStyle="rgba(15, 23, 42, 0.75)",s.strokeStyle="rgba(56, 189, 248, 0.25)",s.lineWidth=2,Qo(s,v,g,d,T,16),s.fill(),s.stroke(),l){const ae=Math.min((d-40)/l.width,(T-40)/l.height),ge=l.width*ae,Ce=l.height*ae,Be=v+(d-ge)/2,j=g+(T-Ce)/2;s.drawImage(l,Be,j,ge,Ce)}s.fillStyle="rgba(2, 6, 23, 0.85)",s.strokeStyle="rgba(56, 189, 248, 0.5)",Qo(s,v+20,g+T-55,230,36,6),s.fill(),s.stroke(),s.fillStyle="#38bdf8",s.font='600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3D外観シミュレーション",v+35,g+T-31);const x=65,M=960,U=950,L=505;s.fillStyle="rgba(30, 41, 59, 0.65)",s.strokeStyle="rgba(148, 163, 184, 0.2)",s.lineWidth=1.5,Qo(s,x,M,U,L,16),s.fill(),s.stroke(),s.fillStyle="#f8fafc",s.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("📐 ケージ設計パラメータ",x+30,M+40),s.strokeStyle="rgba(148, 163, 184, 0.15)",s.lineWidth=1,s.beginPath(),s.moveTo(x+25,M+56),s.lineTo(x+U-25,M+56),s.stroke();const w=Ka(!0),R=fh(),y=ph(),b=mh();s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("ケージ種類",x+30,M+90),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(w,x+230,M+90),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("外寸サイズ",x+30,M+125),s.fillStyle="#38bdf8",s.font='bold 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`幅 ${u.W} mm  ×  奥行 ${u.D} mm  ×  高さ ${u.H} mm`,x+230,M+125),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("フレーム仕様",x+30,M+160),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(R,x+230,M+160),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択パネル・板厚",x+30,M+198);let A=M+198;y.forEach(ae=>{s.fillStyle="#38bdf8",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`[${ae.face}]`,x+230,A),s.fillStyle="#e2e8f0",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(ae.name,x+380,A),A+=25}),s.strokeStyle="rgba(148, 163, 184, 0.12)",s.beginPath(),s.moveTo(x+25,A+6),s.lineTo(x+U-25,A+6),s.stroke();const B=A+34;if(s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択オプション",x+30,B),b.length===0)s.fillStyle="#94a3b8",s.font='500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("標準構成（追加オプションなし）",x+230,B);else{let ae=B;b.forEach(ge=>{s.fillStyle="#fbbf24",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("✔",x+230,ae),s.fillStyle="#f8fafc",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(ge,x+255,ae),ae+=24})}const I=!!(c||f),G=65,O=1485,Y=I?650:950,z=345,N=s.createLinearGradient(G,O,G+Y,O+z);if(N.addColorStop(0,"rgba(15, 23, 42, 0.88)"),N.addColorStop(1,"rgba(30, 41, 59, 0.92)"),s.fillStyle=N,s.strokeStyle="rgba(217, 70, 239, 0.4)",s.lineWidth=2,Qo(s,G,O,Y,z,16),s.fill(),s.stroke(),s.fillStyle="#cbd5e1",s.font='600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("概算総重量 (計算値)",G+35,O+48),s.fillStyle="#38bdf8",s.font="bold 32px ui-monospace, monospace",s.fillText(`約 ${Ls.totals.weight.toFixed(1)} kg`,G+280,O+50),s.strokeStyle="rgba(148, 163, 184, 0.2)",s.beginPath(),s.moveTo(G+30,O+70),s.lineTo(G+Y-30,O+70),s.stroke(),s.fillStyle="#f1f5f9",s.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("お見積もり合計金額 (税込・送料別)",G+35,O+110),s.fillStyle="#fbbf24",s.font='bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`¥${Ls.totals.priceWithMarkup.toLocaleString()}`,G+35,O+180),s.fillStyle="#94a3b8",s.font='500 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※本画像はお見積もりシミュレーション結果の控えです。",G+35,O+230),s.fillText("　ご注文・お問い合わせの際にお手元にご準備ください。",G+35,O+254),I&&c){const Be=c.height/c.width*270,j=735+10/2,le=O+(z-Be)/2+5;s.drawImage(c,j,le,270,Be)}const ee=`Cage_Estimate_${Nn}.png`;try{const ae=n.toDataURL("image/png");window.lastGeneratedEstimateImage=ae,mo&&(mo.src=ae),Na&&Na.classList.remove("hidden");const ge=await new Promise(le=>n.toBlob(le,"image/png"));let Ce=null;if(ge&&window.File)try{Ce=new File([ge],ee,{type:"image/png"})}catch(le){console.warn("File constructor failed:",le)}const Be=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);let j=!1;if(Be&&Ce&&navigator.canShare&&navigator.canShare({files:[Ce]}))try{await navigator.share({files:[Ce],title:"きなとのケージ屋さん お見積もり結果カード",text:`ケージお見積もり結果カード（${Nn}）です。`}),j=!0,console.log("Shared estimate card image via Web Share API successfully"),un&&Yi&&(Yi.textContent=ee,ro&&(ro.textContent="✅ 共有メニューを開きました（「画像を保存」で写真アプリに保存されます）"),un.classList.remove("hidden"))}catch(le){le.name==="AbortError"?(console.log("User closed the share sheet"),un&&Yi&&(Yi.textContent=ee,ro&&(ro.textContent="💡 共有メニューを閉じました。下の画像を長押しして「写真」に追加も可能です"),un.classList.remove("hidden")),j=!0):console.warn("navigator.share failed, falling back to download:",le)}if(!j){const le=document.createElement("a");le.href=ae,le.download=ee,le.target="_self",document.body.appendChild(le),le.click(),document.body.removeChild(le),console.log("Downloaded estimate card image via DataURL:",ee),un&&Yi&&(Yi.textContent=ee,ro&&(ro.textContent=Be?"✅ 画像をダウンロードしました（下の画像を長押しして「写真」に追加も可能です）":"✅ ダウンロード完了（保存先: ダウンロードフォルダ）"),un.classList.remove("hidden"),setTimeout(()=>{un&&un.classList.add("hidden")},7e3))}}catch(ae){console.warn("toDataURL / export failed, falling back to Blob URL:",ae),n.toBlob&&n.toBlob(ge=>{if(!ge){alert("画像の書き出しに失敗しました。");return}const Ce=URL.createObjectURL(ge),Be=document.createElement("a");Be.href=Ce,Be.download=ee,document.body.appendChild(Be),Be.click(),document.body.removeChild(Be),setTimeout(()=>URL.revokeObjectURL(Ce),1e4),un&&Yi&&(Yi.textContent=ee,un.classList.remove("hidden"))},"image/png")}}catch(t){console.error("Estimate card export failed:",t),alert("画像の生成中にエラーが発生しました: "+t.message)}finally{i&&(i.classList.remove("is-exporting"),i.innerHTML=e)}}function Qo(i,e,t,n,s,o){i.beginPath(),i.moveTo(e+o,t),i.lineTo(e+n-o,t),i.arcTo(e+n,t,e+n,t+o,o),i.lineTo(e+n,t+s-o),i.arcTo(e+n,t+s,e+n-o,t+s,o),i.lineTo(e+o,t+s),i.arcTo(e,t+s,e,t+s-o,o),i.lineTo(e,t+o),i.arcTo(e,t,e+o,t,o),i.closePath()}function gh(){const i=window.location.hostname||"",e=window.location.port||"";return i==="localhost"||i==="127.0.0.1"||i==="[::1]"||i==="0.0.0.0"||i.endsWith(".local")||i.startsWith("192.168.")||i.startsWith("10.")||e==="5173"||e==="4173"}function Qa(){try{if(typeof window>"u")return!1;if(window.location.search){const i=new URLSearchParams(window.location.search),e=(i.get("isDev")||"").toLowerCase(),t=(i.get("bot")||"").toLowerCase(),n=(i.get("dev")||"").toLowerCase(),s=(i.get("admin")||"").toLowerCase();if(e==="true"||e==="1"||t==="1"||t==="true"||n==="1"||n==="true"||s==="1"||s==="true"){try{sessionStorage.setItem("cage_is_dev_mode","true")}catch{}return!0}}try{if(sessionStorage.getItem("cage_is_dev_mode")==="true")return!0}catch{}try{const i=localStorage.getItem("cage_visitor_id");if(i&&(i==="usr_admin_dev"||i.startsWith("usr_admin")||i.startsWith("usr_bot")||i.startsWith("usr_dev")))return!0}catch{}}catch(i){console.warn("[Log] isDevOrBotAccess 判定エラー:",i)}return!1}async function Vc(i){var n;if(Qa()){console.log("[Log] 🛠️ 管理・仕様書作成アクセスのため、スプレッドシートへの見積もりログ送信をスキップしました (isDev/bot/usr_admin_dev):",i.estimateId);return}const e=typeof window<"u"&&new URLSearchParams(window.location.search).get("test_log")==="true";if(gh()&&!e){console.log("[Log] ローカル開発環境のため、Googleスプレッドシートへの見積もりログ保存を自動スキップしました。（?test_log=true でテスト送信可能）");return}const t=(n=He==null?void 0:He.system)==null?void 0:n.gasLogEndpointUrl;if(!t.startsWith("http")){console.warn("[Log] gasLogEndpointUrl が未設定のため、ログ送信をスキップしました。");return}try{const s=navigator.userAgent;let o="PC";/iPhone/i.test(s)?o="iPhone":/iPad/i.test(s)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?o="iPad":/Android/i.test(s)?o="Android":/Mac/i.test(s)?o="Mac":/Win/i.test(s)&&(o="Windows");let r="Browser";/Chrome/i.test(s)&&!/Edge|Edg/i.test(s)?r="Chrome":/Safari/i.test(s)&&!/Chrome/i.test(s)?r="Safari":/Edge|Edg/i.test(s)?r="Edge":/Firefox/i.test(s)&&(r="Firefox");const h=ph().map(_=>`${_.face}:${_.name}`).join(" | "),c=mh(),l=c.length>0?c.join(", "):"なし",f=fh();let m=[];try{const _=sessionStorage.getItem("cage_page_history");_&&(m=JSON.parse(_)),m.includes("見積もりシステム")||(m.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(m)))}catch{}const p={type:"estimate",timestamp:i.timestamp,estimateId:i.estimateId,visitorId:i.visitorId,sessionId:i.sessionId,seq:i.seq,device:{type:o,browser:r,screen:`${window.innerWidth}x${window.innerHeight}`},spec:{...i.spec,typeName:Ka(!0),doorHingeDisplayName:u.cageType==="A_FRONT"?zn():void 0,frameColorDisplayName:f,panelsSummary:h,optionsSummary:l},calculated:i.totals,meta:{elapsedSec:i.elapsedSec,referrer:document.referrer||"Direct",diffNote:i.diffNote,pageHistory:m}};console.log("[Log] GASへ送信中 (type: estimate)...",p),await fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),console.log("[Log] 見積もりログをスプレッドシートへ送信完了:",i.estimateId)}catch(s){console.warn("[Log] スプレッドシート送信エラー:",s)}}function X2(i){var e;if(!Qa())try{const t=(e=He==null?void 0:He.system)==null?void 0:e.gasLogEndpointUrl;if(!t||typeof t!="string"||!t.startsWith("http"))return;const n={type:"calc_error",timestamp:new Date().toISOString(),visitorId:vr(),sessionId:za(),errorMessage:(i==null?void 0:i.message)||String(i),errorStack:i!=null&&i.stack?String(i.stack).substring(0,1e3):"",spec:{...u},url:window.location.href,device:{userAgent:navigator.userAgent,screen:`${window.innerWidth}x${window.innerHeight}`}};console.warn("[Log] 🚨 エラー発生をGASへ通報中...",n),fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),keepalive:!0}).catch(()=>{})}catch(t){console.warn("[Log] エラーログ自動送信失敗:",t)}}k2();w2();function $2(){try{const i=Qa();if(typeof window<"u"&&window.location.search&&window.history&&window.history.replaceState)try{const n=new URLSearchParams(window.location.search),s=["isdev","bot","dev","admin","test_log","debug_log"];let o=!1;for(const r of Array.from(n.keys()))s.includes(r.toLowerCase())&&(n.delete(r),o=!0);if(o){const r=n.toString(),a=r?`${window.location.pathname}?${r}`:window.location.pathname;window.history.replaceState({},document.title,a),console.log("[Sim] アドレスバーから管理用引数を消去しクリーン化しました:",a)}}catch(n){console.warn("[Sim] アドレスバークリーンアップエラー:",n)}let e=null;const t=sessionStorage.getItem("kinato_sim_initial_state");if(t)try{e=JSON.parse(t),sessionStorage.removeItem("kinato_sim_initial_state"),console.log("[Sim] sessionStorageから初期設定を読み込みました:",e)}catch(n){console.warn("[Sim] sessionStorageのパースに失敗:",n)}if(!e&&window.location.search){const n=new URLSearchParams(window.location.search);let s=null;for(const[o,r]of n.entries()){const a=o.toLowerCase();if(["estimateid","id","estimate_id","est","quoteid","quote_id","estimate"].includes(a)&&r&&typeof r=="string"&&r.trim().length>0){s=r.trim();break}}if(!s){for(const[o,r]of n.entries()){const a=(r||"").trim().toUpperCase();if(a.startsWith("EST-")||a.includes("EST-20")){const c=a.match(/EST-\d{8}-[A-Z0-9]+/i)||a.match(/EST-[A-Z0-9-]+/i);if(c){s=c[0],console.log(`[Sim] タイポ・欠落パラメータ（${o}）から見積ID「${s}」を自動救済検出しました。`);break}}const h=o.trim().toUpperCase();if(h.startsWith("EST-")||h.includes("EST-20")){const c=h.match(/EST-\d{8}-[A-Z0-9]+/i)||h.match(/EST-[A-Z0-9-]+/i);if(c){s=c[0],console.log(`[Sim] パラメータキーから見積ID「${s}」を自動救済検出しました。`);break}}}if(!s&&window.location.href){const o=window.location.href.match(/EST-\d{8}-[A-Z0-9]+/i);o&&(s=o[0],console.log(`[Sim] URL文字列全体から見積ID「${s}」を自動救済検出しました。`))}}if(s){const o=s.toUpperCase();if(Ps&&(Ps.value=o),Wc(o,{isUrlAccess:!0}),window.history&&window.history.replaceState){const r=`${window.location.pathname}?estimateId=${encodeURIComponent(o)}`;window.history.replaceState({},document.title,r)}return}e={},n.has("preset")&&(e.preset=n.get("preset")),n.has("w")&&(e.W=parseInt(n.get("w"),10)),n.has("d")&&(e.D=parseInt(n.get("d"),10)),n.has("h")&&(e.H=parseInt(n.get("h"),10)),n.has("type")&&(e.cageType=n.get("type").toUpperCase()),n.has("frame")&&(e.frameColor=n.get("frame")),n.has("foot")&&(e.footType=n.get("foot")),n.has("doorAntiFlex")&&(e.hasDoorAntiFlex=n.get("doorAntiFlex")==="1"||n.get("doorAntiFlex")==="true"),n.has("sideVentCover")&&(e.hasSideVentCover=n.get("sideVentCover")==="1"||n.get("sideVentCover")==="true"),n.has("perch")&&(e.hasPerch=n.get("perch")==="1"||n.get("perch")==="true"),n.has("roomDivider")&&(e.hasRoomDivider=n.get("roomDivider")==="1"||n.get("roomDivider")==="true"),n.has("floorReinf")&&(e.hasFloorReinforcement=n.get("floorReinf")==="1"||n.get("floorReinf")==="true"),n.has("floorSplit")&&(e.floorSplitCount=parseInt(n.get("floorSplit"),10)),n.has("backReinf")&&(e.hasBackReinforcement=n.get("backReinf")==="1"||n.get("backReinf")==="true"),n.has("backSplit")&&(e.backSplitCount=parseInt(n.get("backSplit"),10)),n.has("topReinf")&&(e.hasTopReinforcement=n.get("topReinf")==="1"||n.get("topReinf")==="true"),n.has("frontWide")&&(e.frontWideFrame=n.get("frontWide")),n.has("floorHeater")&&(e.hasFloorHeaterSupport=n.get("floorHeater")==="1"||n.get("floorHeater")==="true"),n.has("wideBottom")&&(e.hasBottomWideFrame=n.get("wideBottom")==="1"||n.get("wideBottom")==="true"),n.has("wideTop")&&(e.hasTopWideFrame=n.get("wideTop")==="1"||n.get("wideTop")==="true"),window.history&&window.history.replaceState&&window.history.replaceState({},document.title,window.location.pathname),console.log("[Sim] URLパラメータから初期設定を読み込み、URLをクリーンにしました:",e)}if(!e||Object.keys(e).length===0)return;if(e.preset&&Array.isArray(Ua)){const n=Ua.find(s=>s.id===e.preset);n&&Pf(n)}Number.isFinite(e.W)&&(u.W=e.W,bn&&(bn.value=u.W),yn&&(yn.value=u.W)),Number.isFinite(e.D)&&(u.D=e.D,as&&(as.value=u.D),rs&&(rs.value=u.D)),Number.isFinite(e.H)&&(u.H=e.H,Tn&&(Tn.value=u.H),Sn&&(Sn.value=u.H)),(e.cageType==="A"||e.cageType==="A_FRONT"||e.cageType==="A_FRAMED"||e.cageType==="C"||e.cageType==="C_FRAMED")&&(u.cageType=e.cageType,Pn&&Gn&&(Pn.classList.toggle("active",u.cageType==="A"),Et==null||Et.classList.toggle("active",u.cageType==="A_FRONT"),Ct==null||Ct.classList.toggle("active",u.cageType==="A_FRAMED"),Gn.classList.toggle("active",u.cageType==="C"),At==null||At.classList.toggle("active",u.cageType==="C_FRAMED"),It&&(u.cageType==="A_FRAMED"?It.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":u.cageType==="C_FRAMED"?It.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":u.cageType==="A_FRONT"?(u.doorHingeSide=e.doorHingeSide||"left",It.textContent=`Type A 前開き 選択中 (${zn()})`):It.textContent=u.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),si&&si.classList.toggle("hidden",u.cageType!=="C"&&u.cageType!=="C_FRAMED"),vs())),(e.frameColor==="silver"||e.frameColor==="black")&&(u.frameColor=e.frameColor,Bi&&Oi&&(Bi.classList.toggle("active",u.frameColor==="silver"),Oi.classList.toggle("active",u.frameColor==="black"))),(e.footType==="rubber"||e.footType==="caster")&&(u.footType=e.footType,fi&&(fi.checked=u.footType==="caster"),oi&&oi.classList.toggle("active",u.footType==="caster")),typeof e.hasDoorAntiFlex=="boolean"&&(u.hasDoorAntiFlex=e.hasDoorAntiFlex,mn&&(mn.checked=u.hasDoorAntiFlex),rn&&rn.classList.toggle("active",u.hasDoorAntiFlex)),typeof e.hasSideVentCover=="boolean"&&(u.hasSideVentCover=e.hasSideVentCover,An&&(An.checked=u.hasSideVentCover),_n&&_n.classList.toggle("active",u.hasSideVentCover)),typeof e.hasPerch=="boolean"&&(u.hasPerch=e.hasPerch,wt&&(wt.checked=u.hasPerch),Pt&&Pt.classList.toggle("active",u.hasPerch)),typeof e.hasRoomDivider=="boolean"&&(u.hasRoomDivider=e.hasRoomDivider,an&&(an.checked=u.hasRoomDivider),jt&&jt.classList.toggle("active",u.hasRoomDivider),gn&&gn.classList.toggle("hidden",!u.hasRoomDivider),u.hasRoomDivider&&wt&&(u.hasPerch=!1,wt.checked=!1,wt.disabled=!0,Pt&&Pt.classList.add("disabled"))),u.floorSplitCount=e.floorSplitCount!=null?e.floorSplitCount:u.floorSplitCount||2,ct&&(ct.value=String(u.floorSplitCount)),typeof e.hasFloorReinforcement=="boolean"?(u.hasFloorReinforcement=e.hasFloorReinforcement,on&&(on.checked=u.hasFloorReinforcement)):Bs(),ct&&(ct.disabled=!u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement),u.backSplitCount=e.backSplitCount!=null?e.backSplitCount:u.backSplitCount||2,ht&&(ht.value=String(u.backSplitCount)),typeof e.hasBackReinforcement=="boolean"?(u.hasBackReinforcement=e.hasBackReinforcement,Gt&&(Gt.checked=u.hasBackReinforcement)):Ja(),ht&&(ht.disabled=!u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement),typeof e.hasFloorHeaterSupport=="boolean"&&(u.hasFloorHeaterSupport=e.hasFloorHeaterSupport,pi&&(pi.checked=u.hasFloorHeaterSupport),pn&&pn.classList.toggle("active",u.hasFloorHeaterSupport)),e.frontWideFrame&&(u.frontWideFrame=e.frontWideFrame,mi=e.frontWideFrame),u.hasBottomWideFrame=!!e.hasBottomWideFrame,u.hasTopWideFrame=u.hasBottomWideFrame&&!!e.hasTopWideFrame,wn&&(wn.checked=u.hasBottomWideFrame),Jn&&Jn.classList.toggle("active",u.hasBottomWideFrame),nn&&(nn.checked=u.hasTopWideFrame),kt&&kt.classList.toggle("active",u.hasTopWideFrame),qa(),Za(),br(),dh(),Ye(),st.setViewPreset("iso",u),typeof _r=="function"&&_r()}catch(i){console.error("[Sim] 初期状態の反映エラー:",i)}}$2();(function(){var t;if(((t=He==null?void 0:He.system)==null?void 0:t.gasLogEndpointUrl).startsWith("http"))try{let n=[];try{const f=sessionStorage.getItem("cage_page_history");f&&(n=JSON.parse(f))}catch{}(n.length===0||n[n.length-1]!=="見積もりシステム")&&(n.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(n)));let s=sessionStorage.getItem("cage_initial_referrer"),o=sessionStorage.getItem("cage_landing_page");if(!s){s=document.referrer||"Direct";const f=new URLSearchParams(window.location.search),m=f.get("origin")||f.get("utm_source")||f.get("ref");m&&(s=`${s} [Param:${m}]`),sessionStorage.setItem("cage_initial_referrer",s)}o||(o=window.location.pathname,sessionStorage.setItem("cage_landing_page",o));const r=navigator.userAgent;let a="PC";/iPhone/i.test(r)?a="iPhone":/iPad/i.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?a="iPad":/Android/i.test(r)?a="Android":/Mac/i.test(r)?a="Mac":/Win/i.test(r)&&(a="Windows");let h="Browser";/Chrome/i.test(r)&&!/Edge|Edg/i.test(r)?h="Chrome":/Safari/i.test(r)&&!/Chrome/i.test(r)?h="Safari":/Edge|Edg/i.test(r)?h="Edge":/Firefox/i.test(r)&&(h="Firefox");let c="直接 / お気に入り";const l=s.toLowerCase();l.includes("instagram.com")?c="Instagram":l.includes("t.co")||l.includes("twitter.com")||l.includes("x.com")?c="X (Twitter)":l.includes("google.")?c="Google検索":l.includes("yahoo.")?c="Yahoo!検索":l.includes("line.me")?c="LINE":l.includes("tiktok.com")&&(c="TikTok")}catch(n){console.warn("[Log] sendSimAccessLog エラー:",n)}})();(function(){var a;const e=(a=He==null?void 0:He.system)==null?void 0:a.gasLogEndpointUrl;if(!e.startsWith("http"))return;let t=Date.now(),n=!1;function s(){const h=navigator.userAgent;let c="Desktop";/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(h)?c="Tablet":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(h)&&(c="Mobile");let l="";return/iPhone/i.test(h)?l="iPhone":/iPad/i.test(h)?l="iPad":/Android/i.test(h)?l="Android":/Mac/i.test(h)?l="Mac":/Win/i.test(h)?l="Windows":/Linux/i.test(h)&&(l="Linux"),l?`${c} (${l})`:c}function o(h){if(h==="Direct"||h==="")return"直接 / お気に入り";const c=h.toLowerCase();return c.includes("instagram.com")?"Instagram":c.includes("t.co")||c.includes("twitter.com")||c.includes("x.com")?"X (Twitter)":c.includes("google.")?"Google検索":c.includes("yahoo.")?"Yahoo!検索":c.includes("line.me")?"LINE":c.includes("tiktok.com")?"TikTok":"外部Webサイト"}function r(){if(n)return;const h=Math.max(0,Math.round((Date.now()-t)/1e3)),c=vr(),l=window.location.pathname||"/sim",f=document.title||"3D見積もりシミュレーター",m=sessionStorage.getItem("cage_initial_referrer")||document.referrer||"Direct",p=sessionStorage.getItem("cage_landing_page")||l,_=o(m),v=`${window.innerWidth}x${window.innerHeight}`,g=s(),d={type:"page_view",visitorId:c,path:l,title:f,duration:h,referrerCategory:_,referrer:m,landingPage:p,screen:v,deviceType:g};if(Qa()){console.log("[SimPageViewLog] 🛠️ 管理・仕様書作成アクセスのため送信をスキップしました (isDev/bot/usr_admin_dev)"),n=!0;return}const T=gh(),x=new URLSearchParams(window.location.search),M=x.get("debug_log")==="true"||x.get("test_log")==="true";if(T&&!M&&!0){console.log("[SimPageViewLog] ローカル開発環境のため送信をスキップしました (テスト時はURLに ?debug_log=true を付与):",d),n=!0;return}T&&console.log("[SimPageViewLog] (テスト送信) GASへページ閲覧ログを送信:",d);const L=JSON.stringify(d);let w=!1;if(navigator.sendBeacon)try{const R=new Blob([L],{type:"text/plain;charset=UTF-8"});w=navigator.sendBeacon(e,R)}catch{w=!1}if(!w&&typeof fetch=="function")try{fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:L,keepalive:!0}).catch(()=>{})}catch{}n=!0}document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"?r():document.visibilityState==="visible"&&n&&(n=!1,t=Date.now())}),window.addEventListener("pagehide",function(){r()}),window.addEventListener("pageshow",function(h){h.persisted&&(n=!1,t=Date.now())})})();
