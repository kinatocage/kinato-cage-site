(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="170",_o={ROTATE:0,DOLLY:1,PAN:2},lo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sf=0,ph=1,Tf=2,uu=1,fu=2,yi=3,ss=0,Jt=1,Vt=2,ts=0,vo=1,or=2,mh=3,gh=4,wf=5,Es=100,Ef=101,Cf=102,Af=103,Pf=104,Rf=200,Lf=201,Df=202,If=203,Gl=204,zl=205,Ff=206,Uf=207,Nf=208,Bf=209,Of=210,kf=211,Gf=212,zf=213,Hf=214,Hl=0,Wl=1,Vl=2,yo=3,Xl=4,$l=5,Yl=6,ql=7,pu=0,Wf=1,Vf=2,ns=0,Xf=1,$f=2,Yf=3,mu=4,qf=5,Zf=6,Kf=7,gu=300,bo=301,So=302,Zl=303,Kl=304,Ba=306,jl=1e3,Cn=1001,Jl=1002,Qn=1003,jf=1004,wr=1005,Yt=1006,Za=1007,Ps=1008,Li=1009,_u=1010,vu=1011,ur=1012,kc=1013,Ls=1014,Ti=1015,vr=1016,Gc=1017,zc=1018,To=1020,xu=35902,Mu=1021,yu=1022,jn=1023,bu=1024,Su=1025,xo=1026,wo=1027,Tu=1028,Hc=1029,wu=1030,Wc=1031,Vc=1033,pa=33776,ma=33777,ga=33778,_a=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,oc=37496,rc=37808,ac=37809,lc=37810,cc=37811,hc=37812,dc=37813,uc=37814,fc=37815,pc=37816,mc=37817,gc=37818,_c=37819,vc=37820,xc=37821,va=36492,Mc=36494,yc=36495,Eu=36283,bc=36284,Sc=36285,Tc=36286,Jf=3200,Qf=3201,Cu=0,ep=1,Ji="",Un="srgb",Fo="srgb-linear",Oa="linear",gt="srgb",Os=7680,_h=519,tp=512,np=513,ip=514,Au=515,sp=516,op=517,rp=518,ap=519,wc=35044,vh="300 es",wi=2e3,Ea=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xa=Math.PI/180,Ca=180/Math.PI;function Ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function lp(n,e){return(n%e+e)%e}function Ka(n,e,t){return(1-t)*n+t*e}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const cp={DEG2RAD:xa};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*i-r*s+e.x,this.y=o*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,s,o,r,a,h,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,h,l)}set(e,t,i,s,o,r,a,h,l){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=o,c[5]=h,c[6]=i,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[3],h=i[6],l=i[1],c=i[4],f=i[7],m=i[2],p=i[5],_=i[8],v=s[0],g=s[3],d=s[6],C=s[1],M=s[4],x=s[7],I=s[2],R=s[5],w=s[8];return o[0]=r*v+a*C+h*I,o[3]=r*g+a*M+h*R,o[6]=r*d+a*x+h*w,o[1]=l*v+c*C+f*I,o[4]=l*g+c*M+f*R,o[7]=l*d+c*x+f*w,o[2]=m*v+p*C+_*I,o[5]=m*g+p*M+_*R,o[8]=m*d+p*x+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],h=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-i*o*c+i*a*h+s*o*l-s*r*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],h=e[6],l=e[7],c=e[8],f=c*r-a*l,m=a*h-c*o,p=l*o-r*h,_=t*f+i*m+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*l-c*i)*v,e[2]=(a*i-s*r)*v,e[3]=m*v,e[4]=(c*t-s*h)*v,e[5]=(s*o-a*t)*v,e[6]=p*v,e[7]=(i*h-l*t)*v,e[8]=(r*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,r,a){const h=Math.cos(o),l=Math.sin(o);return this.set(i*h,i*l,-i*(h*r+l*a)+r+e,-s*l,s*h,-s*(-l*r+h*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new je;function Pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hp(){const n=Aa("canvas");return n.style.display="block",n}const xh={};function Qo(n){n in xh||(xh[n]=!0,console.warn(n))}function dp(n,e,t){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function up(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rt={enabled:!0,workingColorSpace:Fo,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(n.r=Mo(n.r),n.g=Mo(n.g),n.b=Mo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?Oa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Mh=[.64,.33,.3,.6,.15,.06],yh=[.2126,.7152,.0722],bh=[.3127,.329],Sh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[Fo]:{primaries:Mh,whitePoint:bh,transfer:Oa,toXYZ:Sh,fromXYZ:Th,luminanceCoefficients:yh,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:Mh,whitePoint:bh,transfer:gt,toXYZ:Sh,fromXYZ:Th,luminanceCoefficients:yh,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}});let ks;class pp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=Aa("canvas")),ks.width=e.width,ks.height=e.height;const i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ai(o[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mp=0;class Ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ja(s[r].image)):o.push(Ja(s[r]))}else o=Ja(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;class ln extends Ns{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Cn,s=Cn,o=Yt,r=Ps,a=jn,h=Li,l=ln.DEFAULT_ANISOTROPY,c=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ci(),this.name="",this.source=new Ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jl:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jl:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=gu;ln.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,l=h[0],c=h[4],f=h[8],m=h[1],p=h[5],_=h[9],v=h[2],g=h[6],d=h[10];if(Math.abs(c-m)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+m)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(p+1)/2,I=(d+1)/2,R=(c+m)/4,w=(f+v)/4,L=(_+g)/4;return M>x&&M>I?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=R/i,o=w/i):x>I?x<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),i=R/s,o=L/s):I<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),i=w/o,s=L/o),this.set(i,s,o,t),this}let C=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(m-c)*(m-c));return Math.abs(C)<.001&&(C=1),this.x=(g-_)/C,this.y=(f-v)/C,this.z=(m-c)/C,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _p extends Ns{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ru(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends _p{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lu extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,r,a){let h=i[s+0],l=i[s+1],c=i[s+2],f=i[s+3];const m=o[r+0],p=o[r+1],_=o[r+2],v=o[r+3];if(a===0){e[t+0]=h,e[t+1]=l,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=m,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||h!==m||l!==p||c!==_){let g=1-a;const d=h*m+l*p+c*_+f*v,C=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const I=Math.sqrt(M),R=Math.atan2(I,d*C);g=Math.sin(g*R)/I,a=Math.sin(a*R)/I}const x=a*C;if(h=h*g+m*x,l=l*g+p*x,c=c*g+_*x,f=f*g+v*x,g===1-a){const I=1/Math.sqrt(h*h+l*l+c*c+f*f);h*=I,l*=I,c*=I,f*=I}}e[t]=h,e[t+1]=l,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,o,r){const a=i[s],h=i[s+1],l=i[s+2],c=i[s+3],f=o[r],m=o[r+1],p=o[r+2],_=o[r+3];return e[t]=a*_+c*f+h*p-l*m,e[t+1]=h*_+c*m+l*f-a*p,e[t+2]=l*_+c*p+a*m-h*f,e[t+3]=c*_-a*f-h*m-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,h=Math.sin,l=a(i/2),c=a(s/2),f=a(o/2),m=h(i/2),p=h(s/2),_=h(o/2);switch(r){case"XYZ":this._x=m*c*f+l*p*_,this._y=l*p*f-m*c*_,this._z=l*c*_+m*p*f,this._w=l*c*f-m*p*_;break;case"YXZ":this._x=m*c*f+l*p*_,this._y=l*p*f-m*c*_,this._z=l*c*_-m*p*f,this._w=l*c*f+m*p*_;break;case"ZXY":this._x=m*c*f-l*p*_,this._y=l*p*f+m*c*_,this._z=l*c*_+m*p*f,this._w=l*c*f-m*p*_;break;case"ZYX":this._x=m*c*f-l*p*_,this._y=l*p*f+m*c*_,this._z=l*c*_-m*p*f,this._w=l*c*f+m*p*_;break;case"YZX":this._x=m*c*f+l*p*_,this._y=l*p*f+m*c*_,this._z=l*c*_-m*p*f,this._w=l*c*f-m*p*_;break;case"XZY":this._x=m*c*f-l*p*_,this._y=l*p*f-m*c*_,this._z=l*c*_+m*p*f,this._w=l*c*f+m*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],r=t[1],a=t[5],h=t[9],l=t[2],c=t[6],f=t[10],m=i+a+f;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(c-h)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-h)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(h+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(h+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,r=e._w,a=t._x,h=t._y,l=t._z,c=t._w;return this._x=i*c+r*a+s*l-o*h,this._y=s*c+r*h+o*a-i*l,this._z=o*c+r*l+i*h-s*a,this._w=r*c-i*a-s*h-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+i*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const h=1-a*a;if(h<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,a),f=Math.sin((1-t)*c)/l,m=Math.sin(t*c)/l;return this._w=r*f+this._w*m,this._x=i*f+this._x*m,this._y=s*f+this._y*m,this._z=o*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,r=e.y,a=e.z,h=e.w,l=2*(r*s-a*i),c=2*(a*t-o*s),f=2*(o*i-r*t);return this.x=t+h*l+r*f-a*c,this.y=i+h*c+a*l-o*f,this.z=s+h*f+o*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,r=t.x,a=t.y,h=t.z;return this.x=s*h-o*a,this.y=o*r-i*h,this.z=i*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new T,wh=new Is;class xr{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Wn):Wn.fromBufferAttribute(o,r),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Cr.subVectors(this.max,zo),Gs.subVectors(e.a,zo),zs.subVectors(e.b,zo),Hs.subVectors(e.c,zo),ki.subVectors(zs,Gs),Gi.subVectors(Hs,zs),vs.subVectors(Gs,Hs);let t=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-vs.z,vs.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,vs.z,0,-vs.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-vs.y,vs.x,0];return!el(t,Gs,zs,Hs,Cr)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Gs,zs,Hs,Cr))?!1:(Ar.crossVectors(ki,Gi),t=[Ar.x,Ar.y,Ar.z],el(t,Gs,zs,Hs,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new T,new T,new T,new T,new T,new T,new T,new T],Wn=new T,Er=new xr,Gs=new T,zs=new T,Hs=new T,ki=new T,Gi=new T,vs=new T,zo=new T,Cr=new T,Ar=new T,xs=new T;function el(n,e,t,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){xs.fromArray(n,o);const a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),h=e.dot(xs),l=t.dot(xs),c=i.dot(xs);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}const xp=new xr,Ho=new T,tl=new T;class ka{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xp.setFromPoints(e).getCenter(i);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ho,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(tl)),this.expandByPoint(Ho.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new T,nl=new T,Pr=new T,zi=new T,il=new T,Rr=new T,sl=new T;class Xc{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nl.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(nl);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Pr),a=zi.dot(this.direction),h=-zi.dot(Pr),l=zi.lengthSq(),c=Math.abs(1-r*r);let f,m,p,_;if(c>0)if(f=r*h-a,m=r*a-h,_=o*c,f>=0)if(m>=-_)if(m<=_){const v=1/c;f*=v,m*=v,p=f*(f+r*m+2*a)+m*(r*f+m+2*h)+l}else m=o,f=Math.max(0,-(r*m+a)),p=-f*f+m*(m+2*h)+l;else m=-o,f=Math.max(0,-(r*m+a)),p=-f*f+m*(m+2*h)+l;else m<=-_?(f=Math.max(0,-(-r*o+a)),m=f>0?-o:Math.min(Math.max(-o,-h),o),p=-f*f+m*(m+2*h)+l):m<=_?(f=0,m=Math.min(Math.max(-o,-h),o),p=m*(m+2*h)+l):(f=Math.max(0,-(r*o+a)),m=f>0?o:Math.min(Math.max(-o,-h),o),p=-f*f+m*(m+2*h)+l);else m=r>0?-o:o,f=Math.max(0,-(r*m+a)),p=-f*f+m*(m+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(nl).addScaledVector(Pr,m),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,h=i+r;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,r,a,h;const l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,m=this.origin;return l>=0?(i=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(i=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),c>=0?(o=(e.min.y-m.y)*c,r=(e.max.y-m.y)*c):(o=(e.max.y-m.y)*c,r=(e.min.y-m.y)*c),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(e.min.z-m.z)*f,h=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,h=(e.min.z-m.z)*f),i>h||a>s)||((a>i||i!==i)&&(i=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,o){il.subVectors(t,e),Rr.subVectors(i,e),sl.crossVectors(il,Rr);let r=this.direction.dot(sl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;zi.subVectors(this.origin,e);const h=a*this.direction.dot(Rr.crossVectors(zi,Rr));if(h<0)return null;const l=a*this.direction.dot(il.cross(zi));if(l<0||h+l>r)return null;const c=-a*zi.dot(sl);return c<0?null:this.at(c/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,o,r,a,h,l,c,f,m,p,_,v,g){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,h,l,c,f,m,p,_,v,g)}set(e,t,i,s,o,r,a,h,l,c,f,m,p,_,v,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=o,d[5]=r,d[9]=a,d[13]=h,d[2]=l,d[6]=c,d[10]=f,d[14]=m,d[3]=p,d[7]=_,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),o=1/Ws.setFromMatrixColumn(e,1).length(),r=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,r=Math.cos(i),a=Math.sin(i),h=Math.cos(s),l=Math.sin(s),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const m=r*c,p=r*f,_=a*c,v=a*f;t[0]=h*c,t[4]=-h*f,t[8]=l,t[1]=p+_*l,t[5]=m-v*l,t[9]=-a*h,t[2]=v-m*l,t[6]=_+p*l,t[10]=r*h}else if(e.order==="YXZ"){const m=h*c,p=h*f,_=l*c,v=l*f;t[0]=m+v*a,t[4]=_*a-p,t[8]=r*l,t[1]=r*f,t[5]=r*c,t[9]=-a,t[2]=p*a-_,t[6]=v+m*a,t[10]=r*h}else if(e.order==="ZXY"){const m=h*c,p=h*f,_=l*c,v=l*f;t[0]=m-v*a,t[4]=-r*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=r*c,t[9]=v-m*a,t[2]=-r*l,t[6]=a,t[10]=r*h}else if(e.order==="ZYX"){const m=r*c,p=r*f,_=a*c,v=a*f;t[0]=h*c,t[4]=_*l-p,t[8]=m*l+v,t[1]=h*f,t[5]=v*l+m,t[9]=p*l-_,t[2]=-l,t[6]=a*h,t[10]=r*h}else if(e.order==="YZX"){const m=r*h,p=r*l,_=a*h,v=a*l;t[0]=h*c,t[4]=v-m*f,t[8]=_*f+p,t[1]=f,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=p*f+_,t[10]=m-v*f}else if(e.order==="XZY"){const m=r*h,p=r*l,_=a*h,v=a*l;t[0]=h*c,t[4]=-f,t[8]=l*c,t[1]=m*f+v,t[5]=r*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=v*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,yp)}lookAt(e,t,i){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Hi.crossVectors(i,xn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Hi.crossVectors(i,xn)),Hi.normalize(),Lr.crossVectors(xn,Hi),s[0]=Hi.x,s[4]=Lr.x,s[8]=xn.x,s[1]=Hi.y,s[5]=Lr.y,s[9]=xn.y,s[2]=Hi.z,s[6]=Lr.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[4],h=i[8],l=i[12],c=i[1],f=i[5],m=i[9],p=i[13],_=i[2],v=i[6],g=i[10],d=i[14],C=i[3],M=i[7],x=i[11],I=i[15],R=s[0],w=s[4],L=s[8],y=s[12],b=s[1],A=s[5],O=s[9],U=s[13],G=s[2],B=s[6],Y=s[10],z=s[14],N=s[3],ee=s[7],ae=s[11],ge=s[15];return o[0]=r*R+a*b+h*G+l*N,o[4]=r*w+a*A+h*B+l*ee,o[8]=r*L+a*O+h*Y+l*ae,o[12]=r*y+a*U+h*z+l*ge,o[1]=c*R+f*b+m*G+p*N,o[5]=c*w+f*A+m*B+p*ee,o[9]=c*L+f*O+m*Y+p*ae,o[13]=c*y+f*U+m*z+p*ge,o[2]=_*R+v*b+g*G+d*N,o[6]=_*w+v*A+g*B+d*ee,o[10]=_*L+v*O+g*Y+d*ae,o[14]=_*y+v*U+g*z+d*ge,o[3]=C*R+M*b+x*G+I*N,o[7]=C*w+M*A+x*B+I*ee,o[11]=C*L+M*O+x*Y+I*ae,o[15]=C*y+M*U+x*z+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],r=e[1],a=e[5],h=e[9],l=e[13],c=e[2],f=e[6],m=e[10],p=e[14],_=e[3],v=e[7],g=e[11],d=e[15];return _*(+o*h*f-s*l*f-o*a*m+i*l*m+s*a*p-i*h*p)+v*(+t*h*p-t*l*m+o*r*m-s*r*p+s*l*c-o*h*c)+g*(+t*l*f-t*a*p-o*r*f+i*r*p+o*a*c-i*l*c)+d*(-s*a*c-t*h*f+t*a*m+s*r*f-i*r*m+i*h*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],h=e[6],l=e[7],c=e[8],f=e[9],m=e[10],p=e[11],_=e[12],v=e[13],g=e[14],d=e[15],C=f*g*l-v*m*l+v*h*p-a*g*p-f*h*d+a*m*d,M=_*m*l-c*g*l-_*h*p+r*g*p+c*h*d-r*m*d,x=c*v*l-_*f*l+_*a*p-r*v*p-c*a*d+r*f*d,I=_*f*h-c*v*h-_*a*m+r*v*m+c*a*g-r*f*g,R=t*C+i*M+s*x+o*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=C*w,e[1]=(v*m*o-f*g*o-v*s*p+i*g*p+f*s*d-i*m*d)*w,e[2]=(a*g*o-v*h*o+v*s*l-i*g*l-a*s*d+i*h*d)*w,e[3]=(f*h*o-a*m*o-f*s*l+i*m*l+a*s*p-i*h*p)*w,e[4]=M*w,e[5]=(c*g*o-_*m*o+_*s*p-t*g*p-c*s*d+t*m*d)*w,e[6]=(_*h*o-r*g*o-_*s*l+t*g*l+r*s*d-t*h*d)*w,e[7]=(r*m*o-c*h*o+c*s*l-t*m*l-r*s*p+t*h*p)*w,e[8]=x*w,e[9]=(_*f*o-c*v*o-_*i*p+t*v*p+c*i*d-t*f*d)*w,e[10]=(r*v*o-_*a*o+_*i*l-t*v*l-r*i*d+t*a*d)*w,e[11]=(c*a*o-r*f*o-c*i*l+t*f*l+r*i*p-t*a*p)*w,e[12]=I*w,e[13]=(c*v*s-_*f*s+_*i*m-t*v*m-c*i*g+t*f*g)*w,e[14]=(_*a*s-r*v*s-_*i*h+t*v*h+r*i*g-t*a*g)*w,e[15]=(r*f*s-c*a*s+c*i*h-t*f*h-r*i*m+t*a*m)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,r=e.x,a=e.y,h=e.z,l=o*r,c=o*a;return this.set(l*r+i,l*a-s*h,l*h+s*a,0,l*a+s*h,c*a+i,c*h-s*r,0,l*h-s*a,c*h+s*r,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,r){return this.set(1,i,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,r=t._y,a=t._z,h=t._w,l=o+o,c=r+r,f=a+a,m=o*l,p=o*c,_=o*f,v=r*c,g=r*f,d=a*f,C=h*l,M=h*c,x=h*f,I=i.x,R=i.y,w=i.z;return s[0]=(1-(v+d))*I,s[1]=(p+x)*I,s[2]=(_-M)*I,s[3]=0,s[4]=(p-x)*R,s[5]=(1-(m+d))*R,s[6]=(g+C)*R,s[7]=0,s[8]=(_+M)*w,s[9]=(g-C)*w,s[10]=(1-(m+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=Ws.set(s[0],s[1],s[2]).length();const r=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);const l=1/o,c=1/r,f=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,t.setFromRotationMatrix(Vn),i.x=o,i.y=r,i.z=a,this}makePerspective(e,t,i,s,o,r,a=wi){const h=this.elements,l=2*o/(t-e),c=2*o/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let p,_;if(a===wi)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Ea)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=c,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,o,r,a=wi){const h=this.elements,l=1/(t-e),c=1/(i-s),f=1/(r-o),m=(t+e)*l,p=(i+s)*c;let _,v;if(a===wi)_=(r+o)*f,v=-2*f;else if(a===Ea)_=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-p,h[2]=0,h[6]=0,h[10]=v,h[14]=-_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ws=new T,Vn=new lt,Mp=new T(0,0,0),yp=new T(1,1,1),Hi=new T,Lr=new T,xn=new T,Eh=new lt,Ch=new Is;class Rt{constructor(e=0,t=0,i=0,s=Rt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],h=s[1],l=s[5],c=s[9],f=s[2],m=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rt.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bp=0;const Ah=new T,Vs=new Is,vi=new lt,Dr=new T,Wo=new T,Sp=new T,Tp=new Is,Ph=new T(1,0,0),Rh=new T(0,1,0),Lh=new T(0,0,1),Dh={type:"added"},wp={type:"removed"},Xs={type:"childadded",child:null},ol={type:"childremoved",child:null};class Ft extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new T,t=new Rt,i=new Is,s=new T(1,1,1);function o(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dr.copy(e):Dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Wo,Dr,this.up):vi.lookAt(Dr,Wo,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(vi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dh),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wp),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dh),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const f=h[l];o(e.shapes,f)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(o(e.materials,this.material[h]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];s.animations.push(o(e.animations,h))}}if(t){const a=r(e.geometries),h=r(e.materials),l=r(e.textures),c=r(e.images),f=r(e.shapes),m=r(e.skeletons),p=r(e.animations),_=r(e.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const h=[];for(const l in a){const c=a[l];delete c.metadata,h.push(c)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new T(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new T,xi=new T,rl=new T,Mi=new T,$s=new T,Ys=new T,Ih=new T,al=new T,ll=new T,cl=new T,hl=new xt,dl=new xt,ul=new xt;class Nn{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Xn.subVectors(s,t),xi.subVectors(i,t),rl.subVectors(e,t);const r=Xn.dot(Xn),a=Xn.dot(xi),h=Xn.dot(rl),l=xi.dot(xi),c=xi.dot(rl),f=r*l-a*a;if(f===0)return o.set(0,0,0),null;const m=1/f,p=(l*h-a*c)*m,_=(r*c-a*h)*m;return o.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,o,r,a,h){return this.getBarycoord(e,t,i,s,Mi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Mi.x),h.addScaledVector(r,Mi.y),h.addScaledVector(a,Mi.z),h)}static getInterpolatedAttribute(e,t,i,s,o,r){return hl.setScalar(0),dl.setScalar(0),ul.setScalar(0),hl.fromBufferAttribute(e,t),dl.fromBufferAttribute(e,i),ul.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(hl,o.x),r.addScaledVector(dl,o.y),r.addScaledVector(ul,o.z),r}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),xi.subVectors(e,t),Xn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Nn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let r,a;$s.subVectors(s,i),Ys.subVectors(o,i),al.subVectors(e,i);const h=$s.dot(al),l=Ys.dot(al);if(h<=0&&l<=0)return t.copy(i);ll.subVectors(e,s);const c=$s.dot(ll),f=Ys.dot(ll);if(c>=0&&f<=c)return t.copy(s);const m=h*f-c*l;if(m<=0&&h>=0&&c<=0)return r=h/(h-c),t.copy(i).addScaledVector($s,r);cl.subVectors(e,o);const p=$s.dot(cl),_=Ys.dot(cl);if(_>=0&&p<=_)return t.copy(o);const v=p*l-h*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(Ys,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return Ih.subVectors(o,s),a=(f-c)/(f-c+(p-_)),t.copy(s).addScaledVector(Ih,a);const d=1/(g+v+m);return r=v*d,a=m*d,t.copy(i).addScaledVector($s,r).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=lp(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,r=2*i-o;this.r=fl(r,o,e+1/3),this.g=fl(r,o,e),this.b=fl(r,o,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Un){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return rt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Xt(Kt.r*255,0,255))*65536+Math.round(Xt(Kt.g*255,0,255))*256+Math.round(Xt(Kt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,s=Kt.g,o=Kt.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let h,l;const c=(a+r)/2;if(a===r)h=0,l=0;else{const f=r-a;switch(l=c<=.5?f/(r+a):f/(2-r-a),r){case i:h=(s-o)/f+(s<o?6:0);break;case s:h=(o-i)/f+2;break;case o:h=(i-s)/f+4;break}h/=6}return e.h=h,e.s=l,e.l=c,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Un){rt.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,s=Kt.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Ir);const i=Ka(Wi.h,Ir.h,t),s=Ka(Wi.s,Ir.s,t),o=Ka(Wi.l,Ir.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Je;Je.NAMES=Iu;let Ep=0;class gs extends Ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Ci(),this.name="",this.blending=vo,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=zl,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(i.blending=this.blending),this.side!==ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const h=o[a];delete h.metadata,r.push(h)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $c extends gs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new T,Fr=new we;class ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wc,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),o=_t(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}}class Fu extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uu extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cp=0;const Dn=new lt,pl=new Ft,qs=new T,Mn=new xr,Vo=new xr,Wt=new T;class zn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Uu:Fu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new je().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Mn.min,Vo.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,Vo.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint(Vo.min),Mn.expandByPoint(Vo.max))}Mn.getCenter(i);let s=0;for(let o=0,r=e.count;o<r;o++)Wt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Wt.fromBufferAttribute(a,l),h&&(qs.fromBufferAttribute(e,l),Wt.add(qs)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],h=[];for(let L=0;L<i.count;L++)a[L]=new T,h[L]=new T;const l=new T,c=new T,f=new T,m=new we,p=new we,_=new we,v=new T,g=new T;function d(L,y,b){l.fromBufferAttribute(i,L),c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,b),m.fromBufferAttribute(o,L),p.fromBufferAttribute(o,y),_.fromBufferAttribute(o,b),c.sub(l),f.sub(l),p.sub(m),_.sub(m);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(A),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(A),a[L].add(v),a[y].add(v),a[b].add(v),h[L].add(g),h[y].add(g),h[b].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let L=0,y=C.length;L<y;++L){const b=C[L],A=b.start,O=b.count;for(let U=A,G=A+O;U<G;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new T,x=new T,I=new T,R=new T;function w(L){I.fromBufferAttribute(s,L),R.copy(I);const y=a[L];M.copy(y),M.sub(I.multiplyScalar(I.dot(y))).normalize(),x.crossVectors(R,y);const A=x.dot(h[L])<0?-1:1;r.setXYZW(L,M.x,M.y,M.z,A)}for(let L=0,y=C.length;L<y;++L){const b=C[L],A=b.start,O=b.count;for(let U=A,G=A+O;U<G;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const s=new T,o=new T,r=new T,a=new T,h=new T,l=new T,c=new T,f=new T;if(e)for(let m=0,p=e.count;m<p;m+=3){const _=e.getX(m+0),v=e.getX(m+1),g=e.getX(m+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),c.subVectors(r,o),f.subVectors(s,o),c.cross(f),a.fromBufferAttribute(i,_),h.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(c),h.add(c),l.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,h.x,h.y,h.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),r.fromBufferAttribute(t,m+2),c.subVectors(r,o),f.subVectors(s,o),c.cross(f),i.setXYZ(m+0,c.x,c.y,c.z),i.setXYZ(m+1,c.x,c.y,c.z),i.setXYZ(m+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,h){const l=a.array,c=a.itemSize,f=a.normalized,m=new l.constructor(h.length*c);let p=0,_=0;for(let v=0,g=h.length;v<g;v++){a.isInterleavedBufferAttribute?p=h[v]*a.data.stride+a.offset:p=h[v]*c;for(let d=0;d<c;d++)m[_++]=l[p++]}return new ei(m,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,s=this.attributes;for(const a in s){const h=s[a],l=e(h,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const h=[],l=o[a];for(let c=0,f=l.length;c<f;c++){const m=l[c],p=e(m,i);h.push(p)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,h=r.length;a<h;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const l=i[h];e.data.attributes[h]=l.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let f=0,m=l.length;f<m;f++){const p=l[f];c.push(p.toJSON(e.data))}c.length>0&&(s[h]=c,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(t))}const o=e.morphAttributes;for(const l in o){const c=[],f=o[l];for(let m=0,p=f.length;m<p;m++)c.push(f[m].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,c=r.length;l<c;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new lt,Ms=new Xc,Ur=new ka,Uh=new T,Nr=new T,Br=new T,Or=new T,ml=new T,kr=new T,Nh=new T,Gr=new T;class Z extends Ft{constructor(e=new zn,t=new $c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){kr.set(0,0,0);for(let h=0,l=o.length;h<l;h++){const c=a[h],f=o[h];c!==0&&(ml.fromBufferAttribute(f,e),r?kr.addScaledVector(ml,c):kr.addScaledVector(ml.sub(t),c))}t.add(kr)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(o),Ms.copy(e.ray).recast(e.near),!(Ur.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ur,Uh)===null||Ms.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Fh.copy(o).invert(),Ms.copy(e.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let s;const o=this.geometry,r=this.material,a=o.index,h=o.attributes.position,l=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,m=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=m.length;_<v;_++){const g=m[_],d=r[g.materialIndex],C=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=C,I=M;x<I;x+=3){const R=a.getX(x),w=a.getX(x+1),L=a.getX(x+2);s=zr(this,d,e,i,l,c,f,R,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,d=v;g<d;g+=3){const C=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=zr(this,r,e,i,l,c,f,C,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(r))for(let _=0,v=m.length;_<v;_++){const g=m[_],d=r[g.materialIndex],C=Math.max(g.start,p.start),M=Math.min(h.count,Math.min(g.start+g.count,p.start+p.count));for(let x=C,I=M;x<I;x+=3){const R=x,w=x+1,L=x+2;s=zr(this,d,e,i,l,c,f,R,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(h.count,p.start+p.count);for(let g=_,d=v;g<d;g+=3){const C=g,M=g+1,x=g+2;s=zr(this,r,e,i,l,c,f,C,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Ap(n,e,t,i,s,o,r,a){let h;if(e.side===Jt?h=i.intersectTriangle(r,o,s,!0,a):h=i.intersectTriangle(s,o,r,e.side===ss,a),h===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Gr);return l<t.near||l>t.far?null:{distance:l,point:Gr.clone(),object:n}}function zr(n,e,t,i,s,o,r,a,h,l){n.getVertexPosition(a,Nr),n.getVertexPosition(h,Br),n.getVertexPosition(l,Or);const c=Ap(n,e,t,i,Nr,Br,Or,Nh);if(c){const f=new T;Nn.getBarycoord(Nh,Nr,Br,Or,f),s&&(c.uv=Nn.getInterpolatedAttribute(s,a,h,l,f,new we)),o&&(c.uv1=Nn.getInterpolatedAttribute(o,a,h,l,f,new we)),r&&(c.normal=Nn.getInterpolatedAttribute(r,a,h,l,f,new T),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const m={a,b:h,c:l,normal:new T,materialIndex:0};Nn.getNormal(Nr,Br,Or,m.normal),c.face=m,c.barycoord=f}return c}class Xe extends zn{constructor(e=1,t=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const h=[],l=[],c=[],f=[];let m=0,p=0;_("z","y","x",-1,-1,i,t,e,r,o,0),_("z","y","x",1,-1,i,t,-e,r,o,1),_("x","z","y",1,1,e,i,t,s,r,2),_("x","z","y",1,-1,e,i,-t,s,r,3),_("x","y","z",1,-1,e,t,i,s,o,4),_("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(f,2));function _(v,g,d,C,M,x,I,R,w,L,y){const b=x/w,A=I/L,O=x/2,U=I/2,G=R/2,B=w+1,Y=L+1;let z=0,N=0;const ee=new T;for(let ae=0;ae<Y;ae++){const ge=ae*A-U;for(let Ce=0;Ce<B;Ce++){const Be=Ce*b-O;ee[v]=Be*C,ee[g]=ge*M,ee[d]=G,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[d]=R>0?1:-1,c.push(ee.x,ee.y,ee.z),f.push(Ce/w),f.push(1-ae/L),z+=1}}for(let ae=0;ae<L;ae++)for(let ge=0;ge<w;ge++){const Ce=m+ge+B*ae,Be=m+ge+B*(ae+1),j=m+(ge+1)+B*(ae+1),le=m+(ge+1)+B*ae;h.push(Ce,Be,le),h.push(Be,j,le),N+=6}a.addGroup(p,N,y),p+=N,m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Eo(n[t]);for(const s in i)e[s]=i[s]}return e}function Pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Rp={clone:Eo,merge:tn};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends gs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bu extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new T,Bh=new we,Oh=new we;class fn extends Bu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Bh,Oh),t.subVectors(Oh,Bh)}setViewOffset(e,t,i,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const h=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/h,t-=r.offsetY*i/l,s*=r.width/h,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Ks=1;class Ip extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Zs,Ks,e,t);s.layers=this.layers,this.add(s);const o=new fn(Zs,Ks,e,t);o.layers=this.layers,this.add(o);const r=new fn(Zs,Ks,e,t);r.layers=this.layers,this.add(r);const a=new fn(Zs,Ks,e,t);a.layers=this.layers,this.add(a);const h=new fn(Zs,Ks,e,t);h.layers=this.layers,this.add(h);const l=new fn(Zs,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,r,a,h]=t;for(const l of t)this.remove(l);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,h,l,c]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,h),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(f,m,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ou extends ln{constructor(e,t,i,s,o,r,a,h,l,c){e=e!==void 0?e:[],t=t!==void 0?t:bo,super(e,t,i,s,o,r,a,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fp extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ou(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),o=new ti({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:ts});o.uniforms.tEquirect.value=t;const r=new Z(s,o),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=Yt),new Ip(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(o)}}const gl=new T,Up=new T,Np=new je;class Ki{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=gl.subVectors(i,t).cross(Up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Np.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new ka,Hr=new T;class Yc{constructor(e=new Ki,t=new Ki,i=new Ki,s=new Ki,o=new Ki,r=new Ki){this.planes=[e,t,i,s,o,r]}set(e,t,i,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi){const i=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],h=s[3],l=s[4],c=s[5],f=s[6],m=s[7],p=s[8],_=s[9],v=s[10],g=s[11],d=s[12],C=s[13],M=s[14],x=s[15];if(i[0].setComponents(h-o,m-l,g-p,x-d).normalize(),i[1].setComponents(h+o,m+l,g+p,x+d).normalize(),i[2].setComponents(h+r,m+c,g+_,x+C).normalize(),i[3].setComponents(h-r,m-c,g-_,x-C).normalize(),i[4].setComponents(h-a,m-f,g-v,x-M).normalize(),t===wi)i[5].setComponents(h+a,m+f,g+v,x+M).normalize();else if(t===Ea)i[5].setComponents(a,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ku(){let n=null,e=!1,t=null,i=null;function s(o,r){t(o,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Bp(n){const e=new WeakMap;function t(a,h){const l=a.array,c=a.usage,f=l.byteLength,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,l,c),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,h,l){const c=h.array,f=h.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,c);else{f.sort((p,_)=>p.start-_.start);let m=0;for(let p=1;p<f.length;p++){const _=f[m],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++m,f[m]=v)}f.length=m+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];n.bufferSubData(l,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=e.get(a);h&&(n.deleteBuffer(h.buffer),e.delete(a))}function r(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,h),l.version=a.version}}return{get:s,remove:o,update:r}}class hi extends zn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(i),h=Math.floor(s),l=a+1,c=h+1,f=e/a,m=t/h,p=[],_=[],v=[],g=[];for(let d=0;d<c;d++){const C=d*m-r;for(let M=0;M<l;M++){const x=M*f-o;_.push(x,-C,0),v.push(0,0,1),g.push(M/a),g.push(1-d/h)}}for(let d=0;d<h;d++)for(let C=0;C<a;C++){const M=C+l*d,x=C+l*(d+1),I=C+1+l*(d+1),R=C+1+l*d;p.push(M,x,R),p.push(x,I,R)}this.setIndex(p),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Um=`PhysicalMaterial material;
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
#endif`,Nm=`struct PhysicalMaterial {
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
}`,Bm=`
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,w0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,V0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,K0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,tg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,ag=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,hg=`#define TOON
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
}`,dg=`uniform float size;
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
}`,ug=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Op,alphahash_pars_fragment:kp,alphamap_fragment:Gp,alphamap_pars_fragment:zp,alphatest_fragment:Hp,alphatest_pars_fragment:Wp,aomap_fragment:Vp,aomap_pars_fragment:Xp,batching_pars_vertex:$p,batching_vertex:Yp,begin_vertex:qp,beginnormal_vertex:Zp,bsdfs:Kp,iridescence_fragment:jp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:tm,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:om,color_vertex:rm,common:am,cube_uv_reflection_fragment:lm,defaultnormal_vertex:cm,displacementmap_pars_vertex:hm,displacementmap_vertex:dm,emissivemap_fragment:um,emissivemap_pars_fragment:fm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:_m,envmap_pars_fragment:vm,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Rm,envmap_vertex:Mm,fog_vertex:ym,fog_pars_vertex:bm,fog_fragment:Sm,fog_pars_fragment:Tm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Em,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Am,lights_pars_begin:Pm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Im,lights_phong_pars_fragment:Fm,lights_physical_fragment:Um,lights_physical_pars_fragment:Nm,lights_fragment_begin:Bm,lights_fragment_maps:Om,lights_fragment_end:km,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Wm,map_fragment:Vm,map_pars_fragment:Xm,map_particle_fragment:$m,map_particle_pars_fragment:Ym,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Zm,morphinstance_vertex:Km,morphcolor_vertex:jm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:e0,normal_fragment_begin:t0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:o0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:d0,packing:u0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:M0,shadowmap_vertex:y0,shadowmask_pars_fragment:b0,skinbase_vertex:S0,skinning_pars_vertex:T0,skinning_vertex:w0,skinnormal_vertex:E0,specularmap_fragment:C0,specularmap_pars_fragment:A0,tonemapping_fragment:P0,tonemapping_pars_fragment:R0,transmission_fragment:L0,transmission_pars_fragment:D0,uv_pars_fragment:I0,uv_pars_vertex:F0,uv_vertex:U0,worldpos_vertex:N0,background_vert:B0,background_frag:O0,backgroundCube_vert:k0,backgroundCube_frag:G0,cube_vert:z0,cube_frag:H0,depth_vert:W0,depth_frag:V0,distanceRGBA_vert:X0,distanceRGBA_frag:$0,equirect_vert:Y0,equirect_frag:q0,linedashed_vert:Z0,linedashed_frag:K0,meshbasic_vert:j0,meshbasic_frag:J0,meshlambert_vert:Q0,meshlambert_frag:eg,meshmatcap_vert:tg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:og,meshphong_frag:rg,meshphysical_vert:ag,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:dg,points_frag:ug,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},Ue={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ai={basic:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:tn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:tn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Je(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:tn([Ue.points,Ue.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:tn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:tn([Ue.common,Ue.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:tn([Ue.sprite,Ue.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:tn([Ue.common,Ue.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:tn([Ue.lights,Ue.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ai.physical={uniforms:tn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Wr={r:0,b:0,g:0},bs=new Rt,_g=new lt;function vg(n,e,t,i,s,o,r){const a=new Je(0);let h=o===!0?0:1,l,c,f=null,m=0,p=null;function _(C){let M=C.isScene===!0?C.background:null;return M&&M.isTexture&&(M=(C.backgroundBlurriness>0?t:e).get(M)),M}function v(C){let M=!1;const x=_(C);x===null?d(a,h):x&&x.isColor&&(d(x,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(C,M){const x=_(M);x&&(x.isCubeTexture||x.mapping===Ba)?(c===void 0&&(c=new Z(new Xe(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Eo(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),bs.copy(M.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(bs)),c.material.toneMapped=rt.getTransfer(x.colorSpace)!==gt,(f!==x||m!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,m=x.version,p=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Z(new hi(2,2),new ti({name:"BackgroundMaterial",uniforms:Eo(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=rt.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||m!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=x,m=x.version,p=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function d(C,M){C.getRGB(Wr,Nu(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(C,M=1){a.set(C),h=M,d(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,d(a,h)},render:v,addToRenderList:g}}function xg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let o=s,r=!1;function a(b,A,O,U,G){let B=!1;const Y=f(U,O,A);o!==Y&&(o=Y,l(o.object)),B=p(b,U,O,G),B&&_(b,U,O,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(B||r)&&(r=!1,x(b,A,O,U),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function c(b){return n.deleteVertexArray(b)}function f(b,A,O){const U=O.wireframe===!0;let G=i[b.id];G===void 0&&(G={},i[b.id]=G);let B=G[A.id];B===void 0&&(B={},G[A.id]=B);let Y=B[U];return Y===void 0&&(Y=m(h()),B[U]=Y),Y}function m(b){const A=[],O=[],U=[];for(let G=0;G<t;G++)A[G]=0,O[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:U,object:b,attributes:{},index:null}}function p(b,A,O,U){const G=o.attributes,B=A.attributes;let Y=0;const z=O.getAttributes();for(const N in z)if(z[N].location>=0){const ae=G[N];let ge=B[N];if(ge===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;Y++}return o.attributesNum!==Y||o.index!==U}function _(b,A,O,U){const G={},B=A.attributes;let Y=0;const z=O.getAttributes();for(const N in z)if(z[N].location>=0){let ae=B[N];ae===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),G[N]=ge,Y++}o.attributes=G,o.attributesNum=Y,o.index=U}function v(){const b=o.newAttributes;for(let A=0,O=b.length;A<O;A++)b[A]=0}function g(b){d(b,0)}function d(b,A){const O=o.newAttributes,U=o.enabledAttributes,G=o.attributeDivisors;O[b]=1,U[b]===0&&(n.enableVertexAttribArray(b),U[b]=1),G[b]!==A&&(n.vertexAttribDivisor(b,A),G[b]=A)}function C(){const b=o.newAttributes,A=o.enabledAttributes;for(let O=0,U=A.length;O<U;O++)A[O]!==b[O]&&(n.disableVertexAttribArray(O),A[O]=0)}function M(b,A,O,U,G,B,Y){Y===!0?n.vertexAttribIPointer(b,A,O,G,B):n.vertexAttribPointer(b,A,O,U,G,B)}function x(b,A,O,U){v();const G=U.attributes,B=O.getAttributes(),Y=A.defaultAttributeValues;for(const z in B){const N=B[z];if(N.location>=0){let ee=G[z];if(ee===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ee!==void 0){const ae=ee.normalized,ge=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const Be=Ce.buffer,j=Ce.type,le=Ce.bytesPerElement,Me=j===n.INT||j===n.UNSIGNED_INT||ee.gpuType===kc;if(ee.isInterleavedBufferAttribute){const pe=ee.data,he=pe.stride,Ae=ee.offset;if(pe.isInstancedInterleavedBuffer){for(let me=0;me<N.locationSize;me++)d(N.location+me,pe.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<N.locationSize;me++)g(N.location+me);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let me=0;me<N.locationSize;me++)M(N.location+me,ge/N.locationSize,j,ae,he*le,(Ae+ge/N.locationSize*me)*le,Me)}else{if(ee.isInstancedBufferAttribute){for(let pe=0;pe<N.locationSize;pe++)d(N.location+pe,ee.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let pe=0;pe<N.locationSize;pe++)g(N.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let pe=0;pe<N.locationSize;pe++)M(N.location+pe,ge/N.locationSize,j,ae,ge*le,ge/N.locationSize*pe*le,Me)}}else if(Y!==void 0){const ae=Y[z];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(N.location,ae);break;case 3:n.vertexAttrib3fv(N.location,ae);break;case 4:n.vertexAttrib4fv(N.location,ae);break;default:n.vertexAttrib1fv(N.location,ae)}}}}C()}function I(){L();for(const b in i){const A=i[b];for(const O in A){const U=A[O];for(const G in U)c(U[G].object),delete U[G];delete A[O]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const A=i[b.id];for(const O in A){const U=A[O];for(const G in U)c(U[G].object),delete U[G];delete A[O]}delete i[b.id]}function w(b){for(const A in i){const O=i[A];if(O[b.id]===void 0)continue;const U=O[b.id];for(const G in U)c(U[G].object),delete U[G];delete O[b.id]}}function L(){y(),r=!0,o!==s&&(o=s,l(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:C}}function Mg(n,e,t){let i;function s(l){i=l}function o(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}function h(l,c,f,m){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)r(l[_],c[_],m[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,c,0,m,0,f);let _=0;for(let v=0;v<f;v++)_+=c[v]*m[v];t.update(_,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function yg(n,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==jn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Li&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ti&&!L)}function h(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=h(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:C,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:I,maxSamples:R}}function bg(n){const e=this;let t=null,i=0,s=!1,o=!1;const r=new Ki,a=new je,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const p=f.length!==0||m||i!==0||s;return s=m,i=f.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,m){t=c(f,m,0)},this.setState=function(f,m,p){const _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!s||_===null||_.length===0||o&&!g)o?c(null):l();else{const C=o?0:i,M=C*4;let x=d.clippingState||null;h.value=x,x=c(_,m,M,p);for(let I=0;I!==M;++I)x[I]=t[I];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function l(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,m,p,_){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=h.value,_!==!0||g===null){const d=p+v*4,C=m.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,x=p;M!==v;++M,x+=4)r.copy(f[M]).applyMatrix4(C,a),r.normal.toArray(g,x),g[x+3]=r.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Sg(n){let e=new WeakMap;function t(r,a){return a===Zl?r.mapping=bo:a===Kl&&(r.mapping=So),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Zl||a===Kl)if(e.has(r)){const h=e.get(r).texture;return t(h,r.mapping)}else{const h=r.image;if(h&&h.height>0){const l=new Fp(h.height);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Gu extends Bu{constructor(e=-1,t=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,r=i+e,a=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const co=4,kh=[.125,.215,.35,.446,.526,.582],Cs=20,_l=new Gu,Gh=new Je;let vl=null,xl=0,Ml=0,yl=!1;const ws=(1+Math.sqrt(5))/2,js=1/ws,zh=[new T(-ws,js,0),new T(ws,js,0),new T(-js,0,ws),new T(js,0,ws),new T(0,ws,-js),new T(0,ws,js),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,xl,Ml),this._renderer.xr.enabled=yl,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:vr,format:jn,colorSpace:Fo,depthBuffer:!1},s=Hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(o)),this._blurMaterial=wg(o,e,t)}return s}_compileMaterial(e){const t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,i,s){const a=new fn(90,1,t,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,m=c.toneMapping;c.getClearColor(Gh),c.toneMapping=ns,c.autoClear=!1;const p=new $c({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new Z(new Xe,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Gh),v=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(a.up.set(0,h[d],0),a.lookAt(l[d],0,0)):C===1?(a.up.set(0,0,h[d]),a.lookAt(0,l[d],0)):(a.up.set(0,h[d],0),a.lookAt(0,0,l[d]));const M=this._cubeSize;Vr(s,C*M,d>2?M:0,M,M),c.setRenderTarget(s),v&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=m,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===bo||e.mapping===So;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Z(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const h=this._cubeSize;Vr(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(r,_l)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=zh[(s-o-1)%zh.length];this._blur(e,o-1,o,r,a)}t.autoClear=i}_blur(e,t,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",o),this._halfBlur(r,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,r,a){const h=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Z(this._lodPlanes[s],l),m=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),v=o/_,g=isFinite(o)?1+Math.floor(c*v):Cs;g>Cs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);const d=[];let C=0;for(let w=0;w<Cs;++w){const L=w/v,y=Math.exp(-L*L/2);d.push(y),w===0?C+=y:w<g&&(C+=2*y)}for(let w=0;w<d.length;w++)d[w]=d[w]/C;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=d,m.latitudinal.value=r==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:M}=this;m.dTheta.value=_,m.mipInt.value=M-i;const x=this._sizeLods[s],I=3*x*(s>M-co?s-M+co:0),R=4*(this._cubeSize-x);Vr(t,I,R,3*x,2*x),h.setRenderTarget(t),h.render(f,_l)}}function Tg(n){const e=[],t=[],i=[];let s=n;const o=n-co+1+kh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let h=1/a;r>n-co?h=kh[r-n+co-1]:r===0&&(h=0),i.push(h);const l=1/(a-2),c=-l,f=1+l,m=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,v=3,g=2,d=1,C=new Float32Array(v*_*p),M=new Float32Array(g*_*p),x=new Float32Array(d*_*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,L=R>2?0:-1,y=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];C.set(y,v*_*R),M.set(m,g*_*R);const b=[R,R,R,R,R,R];x.set(b,d*_*R)}const I=new zn;I.setAttribute("position",new ei(C,v)),I.setAttribute("uv",new ei(M,g)),I.setAttribute("faceIndex",new ei(x,d)),e.push(I),s>co&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hh(n,e,t){const i=new Ds(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function wg(n,e,t){const i=new Float32Array(Cs),s=new T(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Wh(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Vh(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function Eg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const h=a.mapping,l=h===Zl||h===Kl,c=h===bo||h===So;if(l||c){let f=e.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new Ec(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||c&&p&&s(p)?(t===null&&(t=new Ec(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let h=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&h++;return h===l}function o(a){const h=a.target;h.removeEventListener("dispose",o);const l=e.get(h);l!==void 0&&(e.delete(h),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Cg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Qo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ag(n,e,t,i){const s={},o=new WeakMap;function r(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const _ in m.attributes)e.remove(m.attributes[_]);for(const _ in m.morphAttributes){const v=m.morphAttributes[_];for(let g=0,d=v.length;g<d;g++)e.remove(v[g])}m.removeEventListener("dispose",r),delete s[m.id];const p=o.get(m);p&&(e.remove(p),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",r),s[m.id]=!0,t.memory.geometries++),m}function h(f){const m=f.attributes;for(const _ in m)e.update(m[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let g=0,d=v.length;g<d;g++)e.update(v[g],n.ARRAY_BUFFER)}}function l(f){const m=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const C=p.array;v=p.version;for(let M=0,x=C.length;M<x;M+=3){const I=C[M+0],R=C[M+1],w=C[M+2];m.push(I,R,R,w,w,I)}}else if(_!==void 0){const C=_.array;v=_.version;for(let M=0,x=C.length/3-1;M<x;M+=3){const I=M+0,R=M+1,w=M+2;m.push(I,R,R,w,w,I)}}else return;const g=new(Pu(m)?Uu:Fu)(m,1);g.version=v;const d=o.get(f);d&&e.remove(d),o.set(f,g)}function c(f){const m=o.get(f);if(m){const p=f.index;p!==null&&m.version<p.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:h,getWireframeAttribute:c}}function Pg(n,e,t){let i;function s(m){i=m}let o,r;function a(m){o=m.type,r=m.bytesPerElement}function h(m,p){n.drawElements(i,p,o,m*r),t.update(p,i,1)}function l(m,p,_){_!==0&&(n.drawElementsInstanced(i,p,o,m*r,_),t.update(p,i,_))}function c(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,m,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];t.update(g,i,1)}function f(m,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<m.length;d++)l(m[d]/r,p[d],v[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,o,m,0,v,0,_);let d=0;for(let C=0;C<_;C++)d+=p[C]*v[C];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Rg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Lg(n,e,t){const i=new WeakMap,s=new xt;function o(r,a,h){const l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let m=i.get(a);if(m===void 0||m.count!==f){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;m!==void 0&&m.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let I=a.attributes.position.count*x,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*R*4*f),L=new Lu(w,I,R,f);L.type=Ti,L.needsUpdate=!0;const y=x*4;for(let A=0;A<f;A++){const O=d[A],U=C[A],G=M[A],B=I*R*4*A;for(let Y=0;Y<O.count;Y++){const z=Y*y;_===!0&&(s.fromBufferAttribute(O,Y),w[B+z+0]=s.x,w[B+z+1]=s.y,w[B+z+2]=s.z,w[B+z+3]=0),v===!0&&(s.fromBufferAttribute(U,Y),w[B+z+4]=s.x,w[B+z+5]=s.y,w[B+z+6]=s.z,w[B+z+7]=0),g===!0&&(s.fromBufferAttribute(G,Y),w[B+z+8]=s.x,w[B+z+9]=s.y,w[B+z+10]=s.z,w[B+z+11]=G.itemSize===4?s.w:1)}}m={count:f,texture:L,size:new we(I,R)},i.set(a,m),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const v=a.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:o}}function Dg(n,e,t,i){let s=new WeakMap;function o(h){const l=i.render.frame,c=h.geometry,f=e.get(h,c);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==l&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){const m=h.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return f}function r(){s=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class zu extends ln{constructor(e,t,i,s,o,r,a,h,l,c=xo){if(c!==xo&&c!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===xo&&(i=Ls),i===void 0&&c===wo&&(i=To),super(null,s,o,r,a,h,c,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qn,this.minFilter=h!==void 0?h:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hu=new ln,Xh=new zu(1,1),Wu=new Lu,Vu=new vp,Xu=new Ou,$h=[],Yh=[],qh=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);function Uo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=$h[s];if(o===void 0&&(o=new Float32Array(s),$h[s]=o),e!==0){i.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(o,a)}return o}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=Yh[e];t===void 0&&(t=new Int32Array(e),Yh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function Bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Kh.set(i),n.uniformMatrix2fv(this.addr,!1,Kh),Ht(t,i)}}function Og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),Ht(t,i)}}function kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;qh.set(i),n.uniformMatrix4fv(this.addr,!1,qh),Ht(t,i)}}function Gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function Vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function qg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Xh.compareFunction=Au,o=Xh):o=Hu,t.setTexture2D(e||o,s)}function Zg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vu,s)}function Kg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xu,s)}function jg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wu,s)}function Jg(n){switch(n){case 5126:return Ig;case 35664:return Fg;case 35665:return Ug;case 35666:return Ng;case 35674:return Bg;case 35675:return Og;case 35676:return kg;case 5124:case 35670:return Gg;case 35667:case 35671:return zg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return Vg;case 36294:return Xg;case 36295:return $g;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return jg}}function Qg(n,e){n.uniform1fv(this.addr,e)}function e_(n,e){const t=Uo(e,this.size,2);n.uniform2fv(this.addr,t)}function t_(n,e){const t=Uo(e,this.size,3);n.uniform3fv(this.addr,t)}function n_(n,e){const t=Uo(e,this.size,4);n.uniform4fv(this.addr,t)}function i_(n,e){const t=Uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s_(n,e){const t=Uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function o_(n,e){const t=Uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function r_(n,e){n.uniform1iv(this.addr,e)}function a_(n,e){n.uniform2iv(this.addr,e)}function l_(n,e){n.uniform3iv(this.addr,e)}function c_(n,e){n.uniform4iv(this.addr,e)}function h_(n,e){n.uniform1uiv(this.addr,e)}function d_(n,e){n.uniform2uiv(this.addr,e)}function u_(n,e){n.uniform3uiv(this.addr,e)}function f_(n,e){n.uniform4uiv(this.addr,e)}function p_(n,e,t){const i=this.cache,s=e.length,o=Ga(t,s);zt(i,o)||(n.uniform1iv(this.addr,o),Ht(i,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Hu,o[r])}function m_(n,e,t){const i=this.cache,s=e.length,o=Ga(t,s);zt(i,o)||(n.uniform1iv(this.addr,o),Ht(i,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Vu,o[r])}function g_(n,e,t){const i=this.cache,s=e.length,o=Ga(t,s);zt(i,o)||(n.uniform1iv(this.addr,o),Ht(i,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Xu,o[r])}function __(n,e,t){const i=this.cache,s=e.length,o=Ga(t,s);zt(i,o)||(n.uniform1iv(this.addr,o),Ht(i,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Wu,o[r])}function v_(n){switch(n){case 5126:return Qg;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return o_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return d_;case 36295:return u_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}class x_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jg(t.type)}}class M_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v_(t.type)}}class y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],i)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function jh(n,e){n.seq.push(e),n.map[e.id]=e}function b_(n,e,t){const i=n.name,s=i.length;for(bl.lastIndex=0;;){const o=bl.exec(i),r=bl.lastIndex;let a=o[1];const h=o[2]==="]",l=o[3];if(h&&(a=a|0),l===void 0||l==="["&&r+2===s){jh(t,l===void 0?new x_(a,n,e):new M_(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new y_(a),jh(t,f)),t=f}}}class Ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);b_(o,r,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],h=i[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Jh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const S_=37297;let T_=0;function w_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}const Qh=new je;function E_(n){rt._getMatrix(Qh,rt.workingColorSpace,n);const e=`mat3( ${Qh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Oa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ed(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+w_(n.getShaderSource(e),r)}else return s}function C_(n,e){const t=E_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A_(n,e){let t;switch(e){case Xf:t="Linear";break;case $f:t="Reinhard";break;case Yf:t="Cineon";break;case mu:t="ACESFilmic";break;case Zf:t="AgX";break;case Kf:t="Neutral";break;case qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new T;function P_(){rt.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function L_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function D_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function er(n){return n!==""}function td(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(I_,U_)}const F_=new Map;function U_(n,e){let t=Qe[e];if(t===void 0){const i=F_.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}const N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(n){return n.replace(N_,B_)}function B_(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function sd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function k_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bo:case So:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function z_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Wf:e="ENVMAP_BLENDING_MIX";break;case Vf:e="ENVMAP_BLENDING_ADD";break}return e}function H_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function W_(n,e,t,i){const s=n.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const h=O_(t),l=k_(t),c=G_(t),f=z_(t),m=H_(t),p=R_(t),_=L_(o),v=s.createProgram();let g,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),d.length>0&&(d+=`
`)):(g=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ns?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,C_("linearToOutputTexel",t.outputColorSpace),P_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),r=Cc(r),r=td(r,t),r=nd(r,t),a=Cc(a),a=td(a,t),a=nd(a,t),r=id(r),a=id(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=C+g+r,x=C+d+a,I=Jh(s,s.VERTEX_SHADER,M),R=Jh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,I),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(A){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(R).trim();let B=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,R);else{const z=ed(s,I,"vertex"),N=ed(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+z+`
`+N)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||G==="")&&(Y=!1);Y&&(A.diagnostics={runnable:B,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:G,prefix:d}})}s.deleteShader(I),s.deleteShader(R),L=new Ma(s,v),y=D_(s,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,S_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}let V_=0;class X_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $_(e),t.set(e,i)),i}}class $_{constructor(e){this.id=V_++,this.code=e,this.usedTimes=0}}function Y_(n,e,t,i,s,o,r){const a=new Du,h=new X_,l=new Set,c=[],f=s.logarithmicDepthBuffer,m=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,b,A,O,U){const G=O.fog,B=U.geometry,Y=y.isMeshStandardMaterial?O.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),N=z&&z.mapping===Ba?z.image.height:null,ee=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=ae!==void 0?ae.length:0;let Ce=0;B.morphAttributes.position!==void 0&&(Ce=1),B.morphAttributes.normal!==void 0&&(Ce=2),B.morphAttributes.color!==void 0&&(Ce=3);let Be,j,le,Me;if(ee){const et=ai[ee];Be=et.vertexShader,j=et.fragmentShader}else Be=y.vertexShader,j=y.fragmentShader,h.update(y),le=h.getVertexShaderID(y),Me=h.getFragmentShaderID(y);const pe=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),Ae=U.isInstancedMesh===!0,me=U.isBatchedMesh===!0,Ee=!!y.map,te=!!y.matcap,K=!!z,D=!!y.aoMap,oe=!!y.lightMap,Q=!!y.bumpMap,re=!!y.normalMap,ne=!!y.displacementMap,xe=!!y.emissiveMap,_e=!!y.metalnessMap,E=!!y.roughnessMap,S=y.anisotropy>0,F=y.clearcoat>0,H=y.dispersion>0,W=y.iridescence>0,$=y.sheen>0,de=y.transmission>0,fe=S&&!!y.anisotropyMap,ve=F&&!!y.clearcoatMap,Se=F&&!!y.clearcoatNormalMap,q=F&&!!y.clearcoatRoughnessMap,ue=W&&!!y.iridescenceMap,Te=W&&!!y.iridescenceThicknessMap,Pe=$&&!!y.sheenColorMap,be=$&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Fe=!!y.specularColorMap,Oe=!!y.specularIntensityMap,k=de&&!!y.transmissionMap,ye=de&&!!y.thicknessMap,J=!!y.gradientMap,ce=!!y.alphaMap,Le=y.alphaTest>0,De=!!y.alphaHash,Ve=!!y.extensions;let ot=ns;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ot=n.toneMapping);const Dt={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Be,fragmentShader:j,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:me,batchingColor:me&&U._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&U.instanceColor!==null,instancingMorph:Ae&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Fo,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:te,envMap:K,envMapMode:K&&z.mapping,envMapCubeUVHeight:N,aoMap:D,lightMap:oe,bumpMap:Q,normalMap:re,displacementMap:m&&ne,emissiveMap:xe,normalMapObjectSpace:re&&y.normalMapType===ep,normalMapTangentSpace:re&&y.normalMapType===Cu,metalnessMap:_e,roughnessMap:E,anisotropy:S,anisotropyMap:fe,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:Se,clearcoatRoughnessMap:q,dispersion:H,iridescence:W,iridescenceMap:ue,iridescenceThicknessMap:Te,sheen:$,sheenColorMap:Pe,sheenRoughnessMap:be,specularMap:Ie,specularColorMap:Fe,specularIntensityMap:Oe,transmission:de,transmissionMap:k,thicknessMap:ye,gradientMap:J,opaque:y.transparent===!1&&y.blending===vo&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:Le,alphaHash:De,combine:y.combine,mapUv:Ee&&v(y.map.channel),aoMapUv:D&&v(y.aoMap.channel),lightMapUv:oe&&v(y.lightMap.channel),bumpMapUv:Q&&v(y.bumpMap.channel),normalMapUv:re&&v(y.normalMap.channel),displacementMapUv:ne&&v(y.displacementMap.channel),emissiveMapUv:xe&&v(y.emissiveMap.channel),metalnessMapUv:_e&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:fe&&v(y.anisotropyMap.channel),clearcoatMapUv:ve&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(y.sheenRoughnessMap.channel),specularMapUv:Ie&&v(y.specularMap.channel),specularColorMapUv:Fe&&v(y.specularColorMap.channel),specularIntensityMapUv:Oe&&v(y.specularIntensityMap.channel),transmissionMapUv:k&&v(y.transmissionMap.channel),thicknessMapUv:ye&&v(y.thicknessMap.channel),alphaMapUv:ce&&v(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(re||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Ee||ce),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:he,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vt,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ve&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&y.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function d(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)b.push(A),b.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(C(b,y),M(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function C(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const b=_[y.type];let A;if(b){const O=ai[b];A=Rp.clone(O.uniforms)}else A=y.uniforms;return A}function I(y,b){let A;for(let O=0,U=c.length;O<U;O++){const G=c[O];if(G.cacheKey===b){A=G,++A.usedTimes;break}}return A===void 0&&(A=new W_(n,b,y,o),c.push(A)),A}function R(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function w(y){h.remove(y)}function L(){h.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:x,acquireProgram:I,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:L}}function q_(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,h){n.get(r)[a]=h}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function Z_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function od(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rd(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function r(f,m,p,_,v,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:m,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=m,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=g),e++,d}function a(f,m,p,_,v,g){const d=r(f,m,p,_,v,g);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function h(f,m,p,_,v,g){const d=r(f,m,p,_,v,g);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(f,m){t.length>1&&t.sort(f||Z_),i.length>1&&i.sort(m||od),s.length>1&&s.sort(m||od)}function c(){for(let f=e,m=n.length;f<m;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:a,unshift:h,finish:c,sort:l}}function K_(){let n=new WeakMap;function e(i,s){const o=n.get(i);let r;return o===void 0?(r=new rd,n.set(i,[r])):s>=o.length?(r=new rd,o.push(r)):r=o[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function j_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Je};break;case"SpotLight":t={position:new T,direction:new T,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function J_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Q_=0;function e1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function t1(n){const e=new j_,t=J_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new T);const s=new T,o=new lt,r=new lt;function a(l){let c=0,f=0,m=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,_=0,v=0,g=0,d=0,C=0,M=0,x=0,I=0,R=0,w=0;l.sort(e1);for(let y=0,b=l.length;y<b;y++){const A=l[y],O=A.color,U=A.intensity,G=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)c+=O.r*U,f+=O.g*U,m+=O.b*U;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(A.sh.coefficients[Y],U);w++}else if(A.isDirectionalLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=A.shadow.matrix,C++}i.directional[p]=Y,p++}else if(A.isSpotLight){const Y=e.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(O).multiplyScalar(U),Y.distance=G,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,i.spot[v]=Y;const z=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,z.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[v]=z.matrix,A.castShadow){const N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=B,x++}v++}else if(A.isRectAreaLight){const Y=e.get(A);Y.color.copy(O).multiplyScalar(U),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=Y,g++}else if(A.isPointLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const z=A.shadow,N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=A.shadow.matrix,M++}i.point[_]=Y,_++}else if(A.isHemisphereLight){const Y=e.get(A);Y.skyColor.copy(A.color).multiplyScalar(U),Y.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[d]=Y,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=m;const L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==d||L.numDirectionalShadows!==C||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==I||L.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,L.directionalLength=p,L.pointLength=_,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=d,L.numDirectionalShadows=C,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=I,L.numLightProbes=w,i.version=Q_++)}function h(l,c){let f=0,m=0,p=0,_=0,v=0;const g=c.matrixWorldInverse;for(let d=0,C=l.length;d<C;d++){const M=l[d];if(M.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(M.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),r.identity(),o.copy(M.matrixWorld),o.premultiply(g),r.extractRotation(o),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:h,state:i}}function ad(n){const e=new t1(n),t=[],i=[];function s(c){l.camera=c,t.length=0,i.length=0}function o(c){t.push(c)}function r(c){i.push(c)}function a(){e.setup(t)}function h(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:h,pushLight:o,pushShadow:r}}function n1(n){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new ad(n),e.set(s,[a])):o>=r.length?(a=new ad(n),r.push(a)):a=r[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class i1 extends gs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s1 extends gs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`;function a1(n,e,t){let i=new Yc;const s=new we,o=new we,r=new xt,a=new i1({depthPacking:Qf}),h=new s1,l={},c=t.maxTextureSize,f={[ss]:Jt,[Jt]:ss,[Vt]:Vt},m=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:o1,fragmentShader:r1}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const _=new zn;_.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Z(_,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let d=this.type;this.render=function(R,w,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ts),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=d!==yi&&this.type===yi,G=d===yi&&this.type!==yi;for(let B=0,Y=R.length;B<Y;B++){const z=R[B],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const ee=N.getFrameExtents();if(s.multiply(ee),o.copy(N.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/ee.x),s.x=o.x*ee.x,N.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/ee.y),s.y=o.y*ee.y,N.mapSize.y=o.y)),N.map===null||U===!0||G===!0){const ge=this.type!==yi?{minFilter:Qn,magFilter:Qn}:{};N.map!==null&&N.map.dispose(),N.map=new Ds(s.x,s.y,ge),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ae=N.getViewportCount();for(let ge=0;ge<ae;ge++){const Ce=N.getViewport(ge);r.set(o.x*Ce.x,o.y*Ce.y,o.x*Ce.z,o.y*Ce.w),O.viewport(r),N.updateMatrices(z,ge),i=N.getFrustum(),x(w,L,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===yi&&C(N,L),N.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(y,b,A)};function C(R,w){const L=e.update(v);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ds(s.x,s.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,L,m,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,L,p,v,null)}function M(R,w,L,y){let b=null;const A=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)b=A;else if(b=L.isPointLight===!0?h:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=b.uuid,U=w.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let B=G[U];B===void 0&&(B=b.clone(),G[U]=B,w.addEventListener("dispose",I)),b=B}if(b.visible=w.visible,b.wireframe=w.wireframe,y===yi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:f[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=L}return b}function x(R,w,L,y,b){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===yi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const U=e.update(R),G=R.material;if(Array.isArray(G)){const B=U.groups;for(let Y=0,z=B.length;Y<z;Y++){const N=B[Y],ee=G[N.materialIndex];if(ee&&ee.visible){const ae=M(R,ee,y,b);R.onBeforeShadow(n,R,w,L,U,ae,N),n.renderBufferDirect(L,null,U,ae,R,N),R.onAfterShadow(n,R,w,L,U,ae,N)}}}else if(G.visible){const B=M(R,G,y,b);R.onBeforeShadow(n,R,w,L,U,B,null),n.renderBufferDirect(L,null,U,B,R,null),R.onAfterShadow(n,R,w,L,U,B,null)}}const O=R.children;for(let U=0,G=O.length;U<G;U++)x(O[U],w,L,y,b)}function I(R){R.target.removeEventListener("dispose",I);for(const L in l){const y=l[L],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const l1={[Hl]:Wl,[Vl]:Yl,[Xl]:ql,[yo]:$l,[Wl]:Hl,[Yl]:Vl,[ql]:Xl,[$l]:yo};function c1(n,e){function t(){let k=!1;const ye=new xt;let J=null;const ce=new xt(0,0,0,0);return{setMask:function(Le){J!==Le&&!k&&(n.colorMask(Le,Le,Le,Le),J=Le)},setLocked:function(Le){k=Le},setClear:function(Le,De,Ve,ot,Dt){Dt===!0&&(Le*=ot,De*=ot,Ve*=ot),ye.set(Le,De,Ve,ot),ce.equals(ye)===!1&&(n.clearColor(Le,De,Ve,ot),ce.copy(ye))},reset:function(){k=!1,J=null,ce.set(-1,0,0,0)}}}function i(){let k=!1,ye=!1,J=null,ce=null,Le=null;return{setReversed:function(De){if(ye!==De){const Ve=e.get("EXT_clip_control");ye?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const ot=Le;Le=null,this.setClear(ot)}ye=De},getReversed:function(){return ye},setTest:function(De){De?pe(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(De){J!==De&&!k&&(n.depthMask(De),J=De)},setFunc:function(De){if(ye&&(De=l1[De]),ce!==De){switch(De){case Hl:n.depthFunc(n.NEVER);break;case Wl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case yo:n.depthFunc(n.LEQUAL);break;case Xl:n.depthFunc(n.EQUAL);break;case $l:n.depthFunc(n.GEQUAL);break;case Yl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=De}},setLocked:function(De){k=De},setClear:function(De){Le!==De&&(ye&&(De=1-De),n.clearDepth(De),Le=De)},reset:function(){k=!1,J=null,ce=null,Le=null,ye=!1}}}function s(){let k=!1,ye=null,J=null,ce=null,Le=null,De=null,Ve=null,ot=null,Dt=null;return{setTest:function(et){k||(et?pe(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(et){ye!==et&&!k&&(n.stencilMask(et),ye=et)},setFunc:function(et,qt,Rn){(J!==et||ce!==qt||Le!==Rn)&&(n.stencilFunc(et,qt,Rn),J=et,ce=qt,Le=Rn)},setOp:function(et,qt,Rn){(De!==et||Ve!==qt||ot!==Rn)&&(n.stencilOp(et,qt,Rn),De=et,Ve=qt,ot=Rn)},setLocked:function(et){k=et},setClear:function(et){Dt!==et&&(n.clearStencil(et),Dt=et)},reset:function(){k=!1,ye=null,J=null,ce=null,Le=null,De=null,Ve=null,ot=null,Dt=null}}}const o=new t,r=new i,a=new s,h=new WeakMap,l=new WeakMap;let c={},f={},m=new WeakMap,p=[],_=null,v=!1,g=null,d=null,C=null,M=null,x=null,I=null,R=null,w=new Je(0,0,0),L=0,y=!1,b=null,A=null,O=null,U=null,G=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,z=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),Y=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Y=z>=2);let ee=null,ae={};const ge=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Be=new xt().fromArray(ge),j=new xt().fromArray(Ce);function le(k,ye,J,ce){const Le=new Uint8Array(4),De=n.createTexture();n.bindTexture(k,De),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<J;Ve++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(ye+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return De}const Me={};Me[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),r.setFunc(yo),Q(!1),re(ph),pe(n.CULL_FACE),D(ts);function pe(k){c[k]!==!0&&(n.enable(k),c[k]=!0)}function he(k){c[k]!==!1&&(n.disable(k),c[k]=!1)}function Ae(k,ye){return f[k]!==ye?(n.bindFramebuffer(k,ye),f[k]=ye,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function me(k,ye){let J=p,ce=!1;if(k){J=m.get(ye),J===void 0&&(J=[],m.set(ye,J));const Le=k.textures;if(J.length!==Le.length||J[0]!==n.COLOR_ATTACHMENT0){for(let De=0,Ve=Le.length;De<Ve;De++)J[De]=n.COLOR_ATTACHMENT0+De;J.length=Le.length,ce=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ce=!0);ce&&n.drawBuffers(J)}function Ee(k){return _!==k?(n.useProgram(k),_=k,!0):!1}const te={[Es]:n.FUNC_ADD,[Ef]:n.FUNC_SUBTRACT,[Cf]:n.FUNC_REVERSE_SUBTRACT};te[Af]=n.MIN,te[Pf]=n.MAX;const K={[Rf]:n.ZERO,[Lf]:n.ONE,[Df]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[Of]:n.SRC_ALPHA_SATURATE,[Nf]:n.DST_COLOR,[Ff]:n.DST_ALPHA,[If]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[Bf]:n.ONE_MINUS_DST_COLOR,[Uf]:n.ONE_MINUS_DST_ALPHA,[kf]:n.CONSTANT_COLOR,[Gf]:n.ONE_MINUS_CONSTANT_COLOR,[zf]:n.CONSTANT_ALPHA,[Hf]:n.ONE_MINUS_CONSTANT_ALPHA};function D(k,ye,J,ce,Le,De,Ve,ot,Dt,et){if(k===ts){v===!0&&(he(n.BLEND),v=!1);return}if(v===!1&&(pe(n.BLEND),v=!0),k!==wf){if(k!==g||et!==y){if((d!==Es||x!==Es)&&(n.blendEquation(n.FUNC_ADD),d=Es,x=Es),et)switch(k){case vo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case or:n.blendFunc(n.ONE,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case or:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}C=null,M=null,I=null,R=null,w.set(0,0,0),L=0,g=k,y=et}return}Le=Le||ye,De=De||J,Ve=Ve||ce,(ye!==d||Le!==x)&&(n.blendEquationSeparate(te[ye],te[Le]),d=ye,x=Le),(J!==C||ce!==M||De!==I||Ve!==R)&&(n.blendFuncSeparate(K[J],K[ce],K[De],K[Ve]),C=J,M=ce,I=De,R=Ve),(ot.equals(w)===!1||Dt!==L)&&(n.blendColor(ot.r,ot.g,ot.b,Dt),w.copy(ot),L=Dt),g=k,y=!1}function oe(k,ye){k.side===Vt?he(n.CULL_FACE):pe(n.CULL_FACE);let J=k.side===Jt;ye&&(J=!J),Q(J),k.blending===vo&&k.transparent===!1?D(ts):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),o.setMask(k.colorWrite);const ce=k.stencilWrite;a.setTest(ce),ce&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(k){b!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),b=k)}function re(k){k!==Sf?(pe(n.CULL_FACE),k!==A&&(k===ph?n.cullFace(n.BACK):k===Tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),A=k}function ne(k){k!==O&&(Y&&n.lineWidth(k),O=k)}function xe(k,ye,J){k?(pe(n.POLYGON_OFFSET_FILL),(U!==ye||G!==J)&&(n.polygonOffset(ye,J),U=ye,G=J)):he(n.POLYGON_OFFSET_FILL)}function _e(k){k?pe(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function E(k){k===void 0&&(k=n.TEXTURE0+B-1),ee!==k&&(n.activeTexture(k),ee=k)}function S(k,ye,J){J===void 0&&(ee===null?J=n.TEXTURE0+B-1:J=ee);let ce=ae[J];ce===void 0&&(ce={type:void 0,texture:void 0},ae[J]=ce),(ce.type!==k||ce.texture!==ye)&&(ee!==J&&(n.activeTexture(J),ee=J),n.bindTexture(k,ye||Me[k]),ce.type=k,ce.texture=ye)}function F(){const k=ae[ee];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){Be.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Be.copy(k))}function be(k){j.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),j.copy(k))}function Ie(k,ye){let J=l.get(ye);J===void 0&&(J=new WeakMap,l.set(ye,J));let ce=J.get(k);ce===void 0&&(ce=n.getUniformBlockIndex(ye,k.name),J.set(k,ce))}function Fe(k,ye){const ce=l.get(ye).get(k);h.get(ye)!==ce&&(n.uniformBlockBinding(ye,ce,k.__bindingPointIndex),h.set(ye,ce))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ee=null,ae={},f={},m=new WeakMap,p=[],_=null,v=!1,g=null,d=null,C=null,M=null,x=null,I=null,R=null,w=new Je(0,0,0),L=0,y=!1,b=null,A=null,O=null,U=null,G=null,Be.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:pe,disable:he,bindFramebuffer:Ae,drawBuffers:me,useProgram:Ee,setBlending:D,setMaterial:oe,setFlipSided:Q,setCullFace:re,setLineWidth:ne,setPolygonOffset:xe,setScissorTest:_e,activeTexture:E,bindTexture:S,unbindTexture:F,compressedTexImage2D:H,compressedTexImage3D:W,texImage2D:ue,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:Se,texStorage3D:q,texSubImage2D:$,texSubImage3D:de,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Pe,viewport:be,reset:Oe}}function ld(n,e,t,i){const s=h1(i);switch(t){case Mu:return n*e;case bu:return n*e;case Su:return n*e*2;case Tu:return n*e/s.components*s.byteLength;case Hc:return n*e/s.components*s.byteLength;case wu:return n*e*2/s.components*s.byteLength;case Wc:return n*e*2/s.components*s.byteLength;case yu:return n*e*3/s.components*s.byteLength;case jn:return n*e*4/s.components*s.byteLength;case Vc:return n*e*4/s.components*s.byteLength;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(n,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(n,8)*Math.max(e,8)/2;case ic:case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case va:case Mc:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eu:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sc:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h1(n){switch(n){case Li:case _u:return{byteLength:1,components:1};case ur:case vu:case vr:return{byteLength:2,components:1};case Gc:case zc:return{byteLength:2,components:4};case Ls:case kc:case Ti:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function d1(n,e,t,i,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,c=new WeakMap;let f;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,S){return p?new OffscreenCanvas(E,S):Aa("canvas")}function v(E,S,F){let H=1;const W=_e(E);if((W.width>F||W.height>F)&&(H=F/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(H*W.width),de=Math.floor(H*W.height);f===void 0&&(f=_($,de));const fe=S?_($,de):f;return fe.width=$,fe.height=de,fe.getContext("2d").drawImage(E,0,0,$,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+$+"x"+de+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),E;return E}function g(E){return E.generateMipmaps}function d(E){n.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,S,F,H,W=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=S;if(S===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),S===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),S===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),S===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),S===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),S===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),S===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),S===n.RGBA){const de=W?Oa:rt.getTransfer(H);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=de===gt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(E,S){let F;return E?S===null||S===Ls||S===To?F=n.DEPTH24_STENCIL8:S===Ti?F=n.DEPTH32F_STENCIL8:S===ur&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ls||S===To?F=n.DEPTH_COMPONENT24:S===Ti?F=n.DEPTH_COMPONENT32F:S===ur&&(F=n.DEPTH_COMPONENT16),F}function I(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Qn&&E.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function R(E){const S=E.target;S.removeEventListener("dispose",R),L(S),S.isVideoTexture&&c.delete(S)}function w(E){const S=E.target;S.removeEventListener("dispose",w),b(S)}function L(E){const S=i.get(E);if(S.__webglInit===void 0)return;const F=E.source,H=m.get(F);if(H){const W=H[S.__cacheKey];W.usedTimes--,W.usedTimes===0&&y(E),Object.keys(H).length===0&&m.delete(F)}i.remove(E)}function y(E){const S=i.get(E);n.deleteTexture(S.__webglTexture);const F=E.source,H=m.get(F);delete H[S.__cacheKey],r.memory.textures--}function b(E){const S=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let W=0;W<S.__webglFramebuffer[H].length;W++)n.deleteFramebuffer(S.__webglFramebuffer[H][W]);else n.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)n.deleteFramebuffer(S.__webglFramebuffer[H]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=E.textures;for(let H=0,W=F.length;H<W;H++){const $=i.get(F[H]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),r.memory.textures--),i.remove(F[H])}i.remove(E)}let A=0;function O(){A=0}function U(){const E=A;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),A+=1,E}function G(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function B(E,S){const F=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,E,S);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+S)}function Y(E,S){const F=i.get(E);if(E.version>0&&F.__version!==E.version){j(F,E,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+S)}function z(E,S){const F=i.get(E);if(E.version>0&&F.__version!==E.version){j(F,E,S);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+S)}function N(E,S){const F=i.get(E);if(E.version>0&&F.__version!==E.version){le(F,E,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+S)}const ee={[jl]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},ae={[Qn]:n.NEAREST,[jf]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},ge={[tp]:n.NEVER,[ap]:n.ALWAYS,[np]:n.LESS,[Au]:n.LEQUAL,[ip]:n.EQUAL,[rp]:n.GEQUAL,[sp]:n.GREATER,[op]:n.NOTEQUAL};function Ce(E,S){if(S.type===Ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Yt||S.magFilter===Za||S.magFilter===wr||S.magFilter===Ps||S.minFilter===Yt||S.minFilter===Za||S.minFilter===wr||S.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ee[S.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ee[S.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ee[S.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ae[S.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qn||S.minFilter!==wr&&S.minFilter!==Ps||S.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Be(E,S){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",R));const H=S.source;let W=m.get(H);W===void 0&&(W={},m.set(H,W));const $=G(S);if($!==E.__cacheKey){W[$]===void 0&&(W[$]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,F=!0),W[$].usedTimes++;const de=W[E.__cacheKey];de!==void 0&&(W[E.__cacheKey].usedTimes--,de.usedTimes===0&&y(S)),E.__cacheKey=$,E.__webglTexture=W[$].texture}return F}function j(E,S,F){let H=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=n.TEXTURE_3D);const W=Be(E,S),$=S.source;t.bindTexture(H,E.__webglTexture,n.TEXTURE0+F);const de=i.get($);if($.version!==de.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const fe=rt.getPrimaries(rt.workingColorSpace),ve=S.colorSpace===Ji?null:rt.getPrimaries(S.colorSpace),Se=S.colorSpace===Ji||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let q=v(S.image,!1,s.maxTextureSize);q=xe(S,q);const ue=o.convert(S.format,S.colorSpace),Te=o.convert(S.type);let Pe=M(S.internalFormat,ue,Te,S.colorSpace,S.isVideoTexture);Ce(H,S);let be;const Ie=S.mipmaps,Fe=S.isVideoTexture!==!0,Oe=de.__version===void 0||W===!0,k=$.dataReady,ye=I(S,q);if(S.isDepthTexture)Pe=x(S.format===wo,S.type),Oe&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Pe,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,Pe,q.width,q.height,0,ue,Te,null));else if(S.isDataTexture)if(Ie.length>0){Fe&&Oe&&t.texStorage2D(n.TEXTURE_2D,ye,Pe,Ie[0].width,Ie[0].height);for(let J=0,ce=Ie.length;J<ce;J++)be=Ie[J],Fe?k&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,be.width,be.height,ue,Te,be.data):t.texImage2D(n.TEXTURE_2D,J,Pe,be.width,be.height,0,ue,Te,be.data);S.generateMipmaps=!1}else Fe?(Oe&&t.texStorage2D(n.TEXTURE_2D,ye,Pe,q.width,q.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,ue,Te,q.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,q.width,q.height,0,ue,Te,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Pe,Ie[0].width,Ie[0].height,q.depth);for(let J=0,ce=Ie.length;J<ce;J++)if(be=Ie[J],S.format!==jn)if(ue!==null)if(Fe){if(k)if(S.layerUpdates.size>0){const Le=ld(be.width,be.height,S.format,S.type);for(const De of S.layerUpdates){const Ve=be.data.subarray(De*Le/be.data.BYTES_PER_ELEMENT,(De+1)*Le/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,De,be.width,be.height,1,ue,Ve)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,q.depth,ue,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Pe,be.width,be.height,q.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,q.depth,ue,Te,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Pe,be.width,be.height,q.depth,0,ue,Te,be.data)}else{Fe&&Oe&&t.texStorage2D(n.TEXTURE_2D,ye,Pe,Ie[0].width,Ie[0].height);for(let J=0,ce=Ie.length;J<ce;J++)be=Ie[J],S.format!==jn?ue!==null?Fe?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,be.width,be.height,ue,be.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,be.width,be.height,ue,Te,be.data):t.texImage2D(n.TEXTURE_2D,J,Pe,be.width,be.height,0,ue,Te,be.data)}else if(S.isDataArrayTexture)if(Fe){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Pe,q.width,q.height,q.depth),k)if(S.layerUpdates.size>0){const J=ld(q.width,q.height,S.format,S.type);for(const ce of S.layerUpdates){const Le=q.data.subarray(ce*J/q.data.BYTES_PER_ELEMENT,(ce+1)*J/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,q.width,q.height,1,ue,Te,Le)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ue,Te,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,q.width,q.height,q.depth,0,ue,Te,q.data);else if(S.isData3DTexture)Fe?(Oe&&t.texStorage3D(n.TEXTURE_3D,ye,Pe,q.width,q.height,q.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ue,Te,q.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,q.width,q.height,q.depth,0,ue,Te,q.data);else if(S.isFramebufferTexture){if(Oe)if(Fe)t.texStorage2D(n.TEXTURE_2D,ye,Pe,q.width,q.height);else{let J=q.width,ce=q.height;for(let Le=0;Le<ye;Le++)t.texImage2D(n.TEXTURE_2D,Le,Pe,J,ce,0,ue,Te,null),J>>=1,ce>>=1}}else if(Ie.length>0){if(Fe&&Oe){const J=_e(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ye,Pe,J.width,J.height)}for(let J=0,ce=Ie.length;J<ce;J++)be=Ie[J],Fe?k&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ue,Te,be):t.texImage2D(n.TEXTURE_2D,J,Pe,ue,Te,be);S.generateMipmaps=!1}else if(Fe){if(Oe){const J=_e(q);t.texStorage2D(n.TEXTURE_2D,ye,Pe,J.width,J.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Te,q)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ue,Te,q);g(S)&&d(H),de.__version=$.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function le(E,S,F){if(S.image.length!==6)return;const H=Be(E,S),W=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const $=i.get(W);if(W.version!==$.__version||H===!0){t.activeTexture(n.TEXTURE0+F);const de=rt.getPrimaries(rt.workingColorSpace),fe=S.colorSpace===Ji?null:rt.getPrimaries(S.colorSpace),ve=S.colorSpace===Ji||de===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,q=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let ce=0;ce<6;ce++)!Se&&!q?ue[ce]=v(S.image[ce],!0,s.maxCubemapSize):ue[ce]=q?S.image[ce].image:S.image[ce],ue[ce]=xe(S,ue[ce]);const Te=ue[0],Pe=o.convert(S.format,S.colorSpace),be=o.convert(S.type),Ie=M(S.internalFormat,Pe,be,S.colorSpace),Fe=S.isVideoTexture!==!0,Oe=$.__version===void 0||H===!0,k=W.dataReady;let ye=I(S,Te);Ce(n.TEXTURE_CUBE_MAP,S);let J;if(Se){Fe&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ie,Te.width,Te.height);for(let ce=0;ce<6;ce++){J=ue[ce].mipmaps;for(let Le=0;Le<J.length;Le++){const De=J[Le];S.format!==jn?Pe!==null?Fe?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,0,0,De.width,De.height,Pe,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,Ie,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,0,0,De.width,De.height,Pe,be,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,Ie,De.width,De.height,0,Pe,be,De.data)}}}else{if(J=S.mipmaps,Fe&&Oe){J.length>0&&ye++;const ce=_e(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ie,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(q){Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ue[ce].width,ue[ce].height,Pe,be,ue[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ie,ue[ce].width,ue[ce].height,0,Pe,be,ue[ce].data);for(let Le=0;Le<J.length;Le++){const Ve=J[Le].image[ce].image;Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,0,0,Ve.width,Ve.height,Pe,be,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,Ie,Ve.width,Ve.height,0,Pe,be,Ve.data)}}else{Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe,be,ue[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ie,Pe,be,ue[ce]);for(let Le=0;Le<J.length;Le++){const De=J[Le];Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,0,0,Pe,be,De.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,Ie,Pe,be,De.image[ce])}}}g(S)&&d(n.TEXTURE_CUBE_MAP),$.__version=W.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Me(E,S,F,H,W,$){const de=o.convert(F.format,F.colorSpace),fe=o.convert(F.type),ve=M(F.internalFormat,de,fe,F.colorSpace),Se=i.get(S),q=i.get(F);if(q.__renderTarget=S,!Se.__hasExternalTextures){const ue=Math.max(1,S.width>>$),Te=Math.max(1,S.height>>$);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,$,ve,ue,Te,S.depth,0,de,fe,null):t.texImage2D(W,$,ve,ue,Te,0,de,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,W,q.__webglTexture,0,Q(S)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,W,q.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(E,S,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),S.depthBuffer){const H=S.depthTexture,W=H&&H.isDepthTexture?H.type:null,$=x(S.stencilBuffer,W),de=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Q(S);re(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,$,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,$,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,$,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,E)}else{const H=S.textures;for(let W=0;W<H.length;W++){const $=H[W],de=o.convert($.format,$.colorSpace),fe=o.convert($.type),ve=M($.internalFormat,de,fe,$.colorSpace),Se=Q(S);F&&re(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ve,S.width,S.height):re(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ve,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ve,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(S.depthTexture);H.__renderTarget=S,(!H.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const W=H.__webglTexture,$=Q(S);if(S.depthTexture.format===xo)re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(S.depthTexture.format===wo)re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ae(E){const S=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){const W=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),S.__depthDisposeCallback=W}S.__boundDepthTexture=H}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,E)}else if(F){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=n.createRenderbuffer(),pe(S.__webglDepthbuffer[H],E,!1);else{const W=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),pe(S.__webglDepthbuffer,E,!1);else{const H=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(E,S,F){const H=i.get(E);S!==void 0&&Me(H.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ae(E)}function Ee(E){const S=E.texture,F=i.get(E),H=i.get(S);E.addEventListener("dispose",w);const W=E.textures,$=E.isWebGLCubeRenderTarget===!0,de=W.length>1;if(de||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=S.version,r.memory.textures++),$){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ve=0;ve<S.mipmaps.length;ve++)F.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(de)for(let fe=0,ve=W.length;fe<ve;fe++){const Se=i.get(W[fe]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),r.memory.textures++)}if(E.samples>0&&re(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<W.length;fe++){const ve=W[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Se=o.convert(ve.format,ve.colorSpace),q=o.convert(ve.type),ue=M(ve.internalFormat,Se,q,ve.colorSpace,E.isXRRenderTarget===!0),Te=Q(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ue,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Me(F.__webglFramebuffer[fe][ve],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Me(F.__webglFramebuffer[fe],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(S)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let fe=0,ve=W.length;fe<ve;fe++){const Se=W[fe],q=i.get(Se);t.bindTexture(n.TEXTURE_2D,q.__webglTexture),Ce(n.TEXTURE_2D,Se),Me(F.__webglFramebuffer,E,Se,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(Se)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),Ce(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Me(F.__webglFramebuffer[ve],E,S,n.COLOR_ATTACHMENT0,fe,ve);else Me(F.__webglFramebuffer,E,S,n.COLOR_ATTACHMENT0,fe,0);g(S)&&d(fe),t.unbindTexture()}E.depthBuffer&&Ae(E)}function te(E){const S=E.textures;for(let F=0,H=S.length;F<H;F++){const W=S[F];if(g(W)){const $=C(E),de=i.get(W).__webglTexture;t.bindTexture($,de),d($),t.unbindTexture()}}}const K=[],D=[];function oe(E){if(E.samples>0){if(re(E)===!1){const S=E.textures,F=E.width,H=E.height;let W=n.COLOR_BUFFER_BIT;const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(E),fe=S.length>1;if(fe)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Se=i.get(S[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,F,H,0,0,F,H,W,n.NEAREST),h===!0&&(K.length=0,D.length=0,K.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(K.push($),D.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const Se=i.get(S[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&h){const S=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Q(E){return Math.min(s.maxSamples,E.samples)}function re(E){const S=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ne(E){const S=r.render.frame;c.get(E)!==S&&(c.set(E,S),E.update())}function xe(E,S){const F=E.colorSpace,H=E.format,W=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Fo&&F!==Ji&&(rt.getTransfer(F)===gt?(H!==jn||W!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function _e(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=me,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=re}function u1(n,e){function t(i,s=Ji){let o;const r=rt.getTransfer(s);if(i===Li)return n.UNSIGNED_BYTE;if(i===Gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_u)return n.BYTE;if(i===vu)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===kc)return n.INT;if(i===Ls)return n.UNSIGNED_INT;if(i===Ti)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===Mu)return n.ALPHA;if(i===yu)return n.RGB;if(i===jn)return n.RGBA;if(i===bu)return n.LUMINANCE;if(i===Su)return n.LUMINANCE_ALPHA;if(i===xo)return n.DEPTH_COMPONENT;if(i===wo)return n.DEPTH_STENCIL;if(i===Tu)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===wu)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===Vc)return n.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===_a)if(r===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===ec||i===tc||i===nc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===sc||i===oc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ic||i===sc)return r===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===oc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rc||i===ac||i===lc||i===cc||i===hc||i===dc||i===uc||i===fc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===rc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_c)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return r===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===Mc||i===yc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===va)return r===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eu||i===bc||i===Sc||i===Tc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===va)return o.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class f1 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p1={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,r=null;const a=this._targetRay,h=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),d=this._getHandJoint(l,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],m=c.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&m>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p1)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g1=`
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

}`;class _1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new ln,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ti({vertexShader:m1,fragmentShader:g1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v1 extends Ns{constructor(e,t){super();const i=this;let s=null,o=1,r=null,a="local-floor",h=1,l=null,c=null,f=null,m=null,p=null,_=null;const v=new _1,g=t.getContextAttributes();let d=null,C=null;const M=[],x=[],I=new we;let R=null;const w=new fn;w.viewport=new xt;const L=new fn;L.viewport=new xt;const y=[w,L],b=new f1;let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=M[j];return le===void 0&&(le=new Sl,M[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=M[j];return le===void 0&&(le=new Sl,M[j]=le),le.getGripSpace()},this.getHand=function(j){let le=M[j];return le===void 0&&(le=new Sl,M[j]=le),le.getHandSpace()};function U(j){const le=x.indexOf(j.inputSource);if(le===-1)return;const Me=M[le];Me!==void 0&&(Me.update(j.inputSource,j.frame,l||r),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",B);for(let j=0;j<M.length;j++){const le=x[j];le!==null&&(x[j]=null,M[j].disconnect(le))}A=null,O=null,v.reset(),e.setRenderTarget(d),p=null,m=null,f=null,s=null,C=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Ds(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,Me=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?wo:xo,Me=g.stencil?To:Ls);const he={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:o};f=new XRWebGLBinding(s,t),m=f.createProjectionLayer(he),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new Ds(m.textureWidth,m.textureHeight,{format:jn,type:Li,depthTexture:new zu(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),l=null,r=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(j){for(let le=0;le<j.removed.length;le++){const Me=j.removed[le],pe=x.indexOf(Me);pe>=0&&(x[pe]=null,M[pe].disconnect(Me))}for(let le=0;le<j.added.length;le++){const Me=j.added[le];let pe=x.indexOf(Me);if(pe===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=x.length){x.push(Me),pe=Ae;break}else if(x[Ae]===null){x[Ae]=Me,pe=Ae;break}if(pe===-1)break}const he=M[pe];he&&he.connect(Me)}}const Y=new T,z=new T;function N(j,le,Me){Y.setFromMatrixPosition(le.matrixWorld),z.setFromMatrixPosition(Me.matrixWorld);const pe=Y.distanceTo(z),he=le.projectionMatrix.elements,Ae=Me.projectionMatrix.elements,me=he[14]/(he[10]-1),Ee=he[14]/(he[10]+1),te=(he[9]+1)/he[5],K=(he[9]-1)/he[5],D=(he[8]-1)/he[0],oe=(Ae[8]+1)/Ae[0],Q=me*D,re=me*oe,ne=pe/(-D+oe),xe=ne*-D;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(xe),j.translateZ(ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),he[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const _e=me+ne,E=Ee+ne,S=Q-xe,F=re+(pe-xe),H=te*Ee/E*_e,W=K*Ee/E*_e;j.projectionMatrix.makePerspective(S,F,H,W,_e,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ee(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let le=j.near,Me=j.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),b.near=L.near=w.near=le,b.far=L.far=w.far=Me,(A!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,O=b.far),w.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,b.layers.mask=w.layers.mask|L.layers.mask;const pe=j.parent,he=b.cameras;ee(b,pe);for(let Ae=0;Ae<he.length;Ae++)ee(he[Ae],pe);he.length===2?N(b,w,L):b.projectionMatrix.copy(w.projectionMatrix),ae(j,b,pe)};function ae(j,le,Me){Me===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ca*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&p===null))return h},this.setFoveation=function(j){h=j,m!==null&&(m.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ge=null;function Ce(j,le){if(c=le.getViewerPose(l||r),_=le,c!==null){const Me=c.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let pe=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let Ae=0;Ae<Me.length;Ae++){const me=Me[Ae];let Ee=null;if(p!==null)Ee=p.getViewport(me);else{const K=f.getViewSubImage(m,me);Ee=K.viewport,Ae===0&&(e.setRenderTargetTextures(C,K.colorTexture,m.ignoreDepthValues?void 0:K.depthStencilTexture),e.setRenderTarget(C))}let te=y[Ae];te===void 0&&(te=new fn,te.layers.enable(Ae),te.viewport=new xt,y[Ae]=te),te.matrix.fromArray(me.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(me.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Ae===0&&(b.matrix.copy(te.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(te)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){const Ae=f.getDepthInformation(Me[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,s.renderState)}}for(let Me=0;Me<M.length;Me++){const pe=x[Me],he=M[Me];pe!==null&&he!==void 0&&he.update(pe,le,l||r)}ge&&ge(j,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Be=new ku;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(j){ge=j},this.dispose=function(){}}}const Ss=new Rt,x1=new lt;function M1(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Nu(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,C,M,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(g,d):d.isMeshToonMaterial?(o(g,d),f(g,d)):d.isMeshPhongMaterial?(o(g,d),c(g,d)):d.isMeshStandardMaterial?(o(g,d),m(g,d),d.isMeshPhysicalMaterial&&p(g,d,x)):d.isMeshMatcapMaterial?(o(g,d),_(g,d)):d.isMeshDepthMaterial?o(g,d):d.isMeshDistanceMaterial?(o(g,d),v(g,d)):d.isMeshNormalMaterial?o(g,d):d.isLineBasicMaterial?(r(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?h(g,d,C,M):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Jt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Jt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const C=e.get(d),M=C.envMap,x=C.envMapRotation;M&&(g.envMap.value=M,Ss.copy(x),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),g.envMapRotation.value.setFromMatrix4(x1.makeRotationFromEuler(Ss)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function r(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function h(g,d,C,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*C,g.scale.value=M*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function m(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,C){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const C=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function y1(n,e,t,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,M){const x=M.program;i.uniformBlockBinding(C,x)}function l(C,M){let x=s[C.id];x===void 0&&(_(C),x=c(C),s[C.id]=x,C.addEventListener("dispose",g));const I=M.program;i.updateUBOMapping(C,I);const R=e.render.frame;o[C.id]!==R&&(m(C),o[C.id]=R)}function c(C){const M=f();C.__bindingPointIndex=M;const x=n.createBuffer(),I=C.__size,R=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function f(){for(let C=0;C<a;C++)if(r.indexOf(C)===-1)return r.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const M=s[C.id],x=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,w=x.length;R<w;R++){const L=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,b=L.length;y<b;y++){const A=L[y];if(p(A,R,y,I)===!0){const O=A.__offset,U=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let B=0;B<U.length;B++){const Y=U[B],z=v(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,O+G,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,M,x,I){const R=C.value,w=M+"_"+x;if(I[w]===void 0)return typeof R=="number"||typeof R=="boolean"?I[w]=R:I[w]=R.clone(),!0;{const L=I[w];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return I[w]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(C){const M=C.uniforms;let x=0;const I=16;for(let w=0,L=M.length;w<L;w++){const y=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,A=y.length;b<A;b++){const O=y[b],U=Array.isArray(O.value)?O.value:[O.value];for(let G=0,B=U.length;G<B;G++){const Y=U[G],z=v(Y),N=x%I,ee=N%z.boundary,ae=N+ee;x+=ee,ae!==0&&I-ae<z.storage&&(x+=I-ae),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=z.storage}}}const R=x%I;return R>0&&(x+=I-R),C.__size=x,C.__cache={},this}function v(C){const M={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function g(C){const M=C.target;M.removeEventListener("dispose",g);const x=r.indexOf(M.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function d(){for(const C in s)n.deleteBuffer(s[C]);r=[],s={},o={}}return{bind:h,update:l,dispose:d}}class b1{constructor(e={}){const{canvas:t=hp(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,d=null;const C=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=ns,this.toneMappingExposure=1;const x=this;let I=!1,R=0,w=0,L=null,y=-1,b=null;const A=new xt,O=new xt;let U=null;const G=new Je(0);let B=0,Y=t.width,z=t.height,N=1,ee=null,ae=null;const ge=new xt(0,0,Y,z),Ce=new xt(0,0,Y,z);let Be=!1;const j=new Yc;let le=!1,Me=!1;const pe=new lt,he=new lt,Ae=new T,me=new xt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function K(){return L===null?N:1}let D=i;function oe(P,V){return t.getContext(P,V)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),D===null){const V="webgl2";if(D=oe(V,P),D===null)throw oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,re,ne,xe,_e,E,S,F,H,W,$,de,fe,ve,Se,q,ue,Te,Pe,be,Ie,Fe,Oe,k;function ye(){Q=new Cg(D),Q.init(),Fe=new u1(D,Q),re=new yg(D,Q,e,Fe),ne=new c1(D,Q),re.reverseDepthBuffer&&m&&ne.buffers.depth.setReversed(!0),xe=new Rg(D),_e=new q_,E=new d1(D,Q,ne,_e,re,Fe,xe),S=new Sg(x),F=new Eg(x),H=new Bp(D),Oe=new xg(D,H),W=new Ag(D,H,xe,Oe),$=new Dg(D,W,H,xe),Pe=new Lg(D,re,E),q=new bg(_e),de=new Y_(x,S,F,Q,re,Oe,q),fe=new M1(x,_e),ve=new K_,Se=new n1(Q),Te=new vg(x,S,F,ne,$,p,h),ue=new a1(x,$,re),k=new y1(D,xe,re,ne),be=new Mg(D,Q,xe),Ie=new Pg(D,Q,xe),xe.programs=de.programs,x.capabilities=re,x.extensions=Q,x.properties=_e,x.renderLists=ve,x.shadowMap=ue,x.state=ne,x.info=xe}ye();const J=new v1(x,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(P){P!==void 0&&(N=P,this.setSize(Y,z,!1))},this.getSize=function(P){return P.set(Y,z)},this.setSize=function(P,V,ie=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,z=V,t.width=Math.floor(P*N),t.height=Math.floor(V*N),ie===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(Y*N,z*N).floor()},this.setDrawingBufferSize=function(P,V,ie){Y=P,z=V,N=ie,t.width=Math.floor(P*ie),t.height=Math.floor(V*ie),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(ge)},this.setViewport=function(P,V,ie,se){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,V,ie,se),ne.viewport(A.copy(ge).multiplyScalar(N).round())},this.getScissor=function(P){return P.copy(Ce)},this.setScissor=function(P,V,ie,se){P.isVector4?Ce.set(P.x,P.y,P.z,P.w):Ce.set(P,V,ie,se),ne.scissor(O.copy(Ce).multiplyScalar(N).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(P){ne.setScissorTest(Be=P)},this.setOpaqueSort=function(P){ee=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(P=!0,V=!0,ie=!0){let se=0;if(P){let X=!1;if(L!==null){const Re=L.texture.format;X=Re===Vc||Re===Wc||Re===Hc}if(X){const Re=L.texture.type,Ne=Re===Li||Re===Ls||Re===ur||Re===To||Re===Gc||Re===zc,ke=Te.getClearColor(),Ge=Te.getClearAlpha(),qe=ke.r,Ze=ke.g,ze=ke.b;Ne?(_[0]=qe,_[1]=Ze,_[2]=ze,_[3]=Ge,D.clearBufferuiv(D.COLOR,0,_)):(v[0]=qe,v[1]=Ze,v[2]=ze,v[3]=Ge,D.clearBufferiv(D.COLOR,0,v))}else se|=D.COLOR_BUFFER_BIT}V&&(se|=D.DEPTH_BUFFER_BIT),ie&&(se|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),ve.dispose(),Se.dispose(),_e.dispose(),S.dispose(),F.dispose(),$.dispose(),Oe.dispose(),k.dispose(),de.dispose(),J.dispose(),J.removeEventListener("sessionstart",Bo),J.removeEventListener("sessionend",Oo),si.stop()};function ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const P=xe.autoReset,V=ue.enabled,ie=ue.autoUpdate,se=ue.needsUpdate,X=ue.type;ye(),xe.autoReset=P,ue.enabled=V,ue.autoUpdate=ie,ue.needsUpdate=se,ue.type=X}function De(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ve(P){const V=P.target;V.removeEventListener("dispose",Ve),ot(V)}function ot(P){Dt(P),_e.remove(P)}function Dt(P){const V=_e.get(P).programs;V!==void 0&&(V.forEach(function(ie){de.releaseProgram(ie)}),P.isShaderMaterial&&de.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,ie,se,X,Re){V===null&&(V=Ee);const Ne=X.isMesh&&X.matrixWorld.determinant()<0,ke=Mf(P,V,ie,se,X);ne.setMaterial(se,Ne);let Ge=ie.index,qe=1;if(se.wireframe===!0){if(Ge=W.getWireframeAttribute(ie),Ge===void 0)return;qe=2}const Ze=ie.drawRange,ze=ie.attributes.position;let at=Ze.start*qe,yt=(Ze.start+Ze.count)*qe;Re!==null&&(at=Math.max(at,Re.start*qe),yt=Math.min(yt,(Re.start+Re.count)*qe)),Ge!==null?(at=Math.max(at,0),yt=Math.min(yt,Ge.count)):ze!=null&&(at=Math.max(at,0),yt=Math.min(yt,ze.count));const bt=yt-at;if(bt<0||bt===1/0)return;Oe.setup(X,se,ke,ie,Ge);let cn,dt=be;if(Ge!==null&&(cn=H.get(Ge),dt=Ie,dt.setIndex(cn)),X.isMesh)se.wireframe===!0?(ne.setLineWidth(se.wireframeLinewidth*K()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(X.isLine){let He=se.linewidth;He===void 0&&(He=1),ne.setLineWidth(He*K()),X.isLineSegments?dt.setMode(D.LINES):X.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else X.isPoints?dt.setMode(D.POINTS):X.isSprite&&dt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const He=X._multiDrawStarts,mi=X._multiDrawCounts,ut=X._multiDrawCount,Hn=Ge?H.get(Ge).bytesPerElement:1,Bs=_e.get(se).currentProgram.getUniforms();for(let vn=0;vn<ut;vn++)Bs.setValue(D,"_gl_DrawID",vn),dt.render(He[vn]/Hn,mi[vn])}else if(X.isInstancedMesh)dt.renderInstances(at,bt,X.count);else if(ie.isInstancedBufferGeometry){const He=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,mi=Math.min(ie.instanceCount,He);dt.renderInstances(at,bt,mi)}else dt.render(at,bt)};function et(P,V,ie){P.transparent===!0&&P.side===Vt&&P.forceSinglePass===!1?(P.side=Jt,P.needsUpdate=!0,Tr(P,V,ie),P.side=ss,P.needsUpdate=!0,Tr(P,V,ie),P.side=Vt):Tr(P,V,ie)}this.compile=function(P,V,ie=null){ie===null&&(ie=P),d=Se.get(ie),d.init(V),M.push(d),ie.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),P!==ie&&P.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();const se=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Re=X.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const ke=Re[Ne];et(ke,ie,X),se.add(ke)}else et(Re,ie,X),se.add(Re)}),M.pop(),d=null,se},this.compileAsync=function(P,V,ie=null){const se=this.compile(P,V,ie);return new Promise(X=>{function Re(){if(se.forEach(function(Ne){_e.get(Ne).currentProgram.isReady()&&se.delete(Ne)}),se.size===0){X(P);return}setTimeout(Re,10)}Q.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let qt=null;function Rn(P){qt&&qt(P)}function Bo(){si.stop()}function Oo(){si.start()}const si=new ku;si.setAnimationLoop(Rn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(P){qt=P,J.setAnimationLoop(P),P===null?si.stop():si.start()},J.addEventListener("sessionstart",Bo),J.addEventListener("sessionend",Oo),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,V,L),d=Se.get(P,M.length),d.init(V),M.push(d),he.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(he),Me=this.localClippingEnabled,le=q.init(this.clippingPlanes,Me),g=ve.get(P,C.length),g.init(),C.push(g),J.enabled===!0&&J.isPresenting===!0){const Re=x.xr.getDepthSensingMesh();Re!==null&&qa(Re,V,-1/0,x.sortObjects)}qa(P,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ee,ae),te=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,te&&Te.addToRenderList(g,P),this.info.render.frame++,le===!0&&q.beginShadows();const ie=d.state.shadowsArray;ue.render(ie,P,V),le===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=g.opaque,X=g.transmissive;if(d.setupLights(),V.isArrayCamera){const Re=V.cameras;if(X.length>0)for(let Ne=0,ke=Re.length;Ne<ke;Ne++){const Ge=Re[Ne];ch(se,X,P,Ge)}te&&Te.render(P);for(let Ne=0,ke=Re.length;Ne<ke;Ne++){const Ge=Re[Ne];lh(g,P,Ge,Ge.viewport)}}else X.length>0&&ch(se,X,P,V),te&&Te.render(P),lh(g,P,V);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(x,P,V),Oe.resetDefaultState(),y=-1,b=null,M.pop(),M.length>0?(d=M[M.length-1],le===!0&&q.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function qa(P,V,ie,se){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||j.intersectsSprite(P)){se&&me.setFromMatrixPosition(P.matrixWorld).applyMatrix4(he);const Ne=$.update(P),ke=P.material;ke.visible&&g.push(P,Ne,ke,ie,me.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||j.intersectsObject(P))){const Ne=$.update(P),ke=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),me.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),me.copy(Ne.boundingSphere.center)),me.applyMatrix4(P.matrixWorld).applyMatrix4(he)),Array.isArray(ke)){const Ge=Ne.groups;for(let qe=0,Ze=Ge.length;qe<Ze;qe++){const ze=Ge[qe],at=ke[ze.materialIndex];at&&at.visible&&g.push(P,Ne,at,ie,me.z,ze)}}else ke.visible&&g.push(P,Ne,ke,ie,me.z,null)}}const Re=P.children;for(let Ne=0,ke=Re.length;Ne<ke;Ne++)qa(Re[Ne],V,ie,se)}function lh(P,V,ie,se){const X=P.opaque,Re=P.transmissive,Ne=P.transparent;d.setupLightsView(ie),le===!0&&q.setGlobalState(x.clippingPlanes,ie),se&&ne.viewport(A.copy(se)),X.length>0&&Sr(X,V,ie),Re.length>0&&Sr(Re,V,ie),Ne.length>0&&Sr(Ne,V,ie),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function ch(P,V,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[se.id]===void 0&&(d.state.transmissionRenderTarget[se.id]=new Ds(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?vr:Li,minFilter:Ps,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Re=d.state.transmissionRenderTarget[se.id],Ne=se.viewport||A;Re.setSize(Ne.z,Ne.w);const ke=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(G),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),te&&Te.render(ie);const Ge=x.toneMapping;x.toneMapping=ns;const qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),d.setupLightsView(se),le===!0&&q.setGlobalState(x.clippingPlanes,se),Sr(P,ie,se),E.updateMultisampleRenderTarget(Re),E.updateRenderTargetMipmap(Re),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ze=0,at=V.length;ze<at;ze++){const yt=V[ze],bt=yt.object,cn=yt.geometry,dt=yt.material,He=yt.group;if(dt.side===Vt&&bt.layers.test(se.layers)){const mi=dt.side;dt.side=Jt,dt.needsUpdate=!0,hh(bt,ie,se,cn,dt,He),dt.side=mi,dt.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(Re),E.updateRenderTargetMipmap(Re))}x.setRenderTarget(ke),x.setClearColor(G,B),qe!==void 0&&(se.viewport=qe),x.toneMapping=Ge}function Sr(P,V,ie){const se=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Re=P.length;X<Re;X++){const Ne=P[X],ke=Ne.object,Ge=Ne.geometry,qe=se===null?Ne.material:se,Ze=Ne.group;ke.layers.test(ie.layers)&&hh(ke,V,ie,Ge,qe,Ze)}}function hh(P,V,ie,se,X,Re){P.onBeforeRender(x,V,ie,se,X,Re),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(x,V,ie,se,P,Re),X.transparent===!0&&X.side===Vt&&X.forceSinglePass===!1?(X.side=Jt,X.needsUpdate=!0,x.renderBufferDirect(ie,V,se,X,P,Re),X.side=ss,X.needsUpdate=!0,x.renderBufferDirect(ie,V,se,X,P,Re),X.side=Vt):x.renderBufferDirect(ie,V,se,X,P,Re),P.onAfterRender(x,V,ie,se,X,Re)}function Tr(P,V,ie){V.isScene!==!0&&(V=Ee);const se=_e.get(P),X=d.state.lights,Re=d.state.shadowsArray,Ne=X.state.version,ke=de.getParameters(P,X.state,Re,V,ie),Ge=de.getProgramCacheKey(ke);let qe=se.programs;se.environment=P.isMeshStandardMaterial?V.environment:null,se.fog=V.fog,se.envMap=(P.isMeshStandardMaterial?F:S).get(P.envMap||se.environment),se.envMapRotation=se.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,qe===void 0&&(P.addEventListener("dispose",Ve),qe=new Map,se.programs=qe);let Ze=qe.get(Ge);if(Ze!==void 0){if(se.currentProgram===Ze&&se.lightsStateVersion===Ne)return uh(P,ke),Ze}else ke.uniforms=de.getUniforms(P),P.onBeforeCompile(ke,x),Ze=de.acquireProgram(ke,Ge),qe.set(Ge,Ze),se.uniforms=ke.uniforms;const ze=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ze.clippingPlanes=q.uniform),uh(P,ke),se.needsLights=bf(P),se.lightsStateVersion=Ne,se.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),se.currentProgram=Ze,se.uniformsList=null,Ze}function dh(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Ma.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function uh(P,V){const ie=_e.get(P);ie.outputColorSpace=V.outputColorSpace,ie.batching=V.batching,ie.batchingColor=V.batchingColor,ie.instancing=V.instancing,ie.instancingColor=V.instancingColor,ie.instancingMorph=V.instancingMorph,ie.skinning=V.skinning,ie.morphTargets=V.morphTargets,ie.morphNormals=V.morphNormals,ie.morphColors=V.morphColors,ie.morphTargetsCount=V.morphTargetsCount,ie.numClippingPlanes=V.numClippingPlanes,ie.numIntersection=V.numClipIntersection,ie.vertexAlphas=V.vertexAlphas,ie.vertexTangents=V.vertexTangents,ie.toneMapping=V.toneMapping}function Mf(P,V,ie,se,X){V.isScene!==!0&&(V=Ee),E.resetTextureUnits();const Re=V.fog,Ne=se.isMeshStandardMaterial?V.environment:null,ke=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Fo,Ge=(se.isMeshStandardMaterial?F:S).get(se.envMap||Ne),qe=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ze=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ze=!!ie.morphAttributes.position,at=!!ie.morphAttributes.normal,yt=!!ie.morphAttributes.color;let bt=ns;se.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(bt=x.toneMapping);const cn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,dt=cn!==void 0?cn.length:0,He=_e.get(se),mi=d.state.lights;if(le===!0&&(Me===!0||P!==b)){const Ln=P===b&&se.id===y;q.setState(se,P,Ln)}let ut=!1;se.version===He.__version?(He.needsLights&&He.lightsStateVersion!==mi.state.version||He.outputColorSpace!==ke||X.isBatchedMesh&&He.batching===!1||!X.isBatchedMesh&&He.batching===!0||X.isBatchedMesh&&He.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&He.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||X.isInstancedMesh&&He.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&He.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&He.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&He.instancingMorph===!1&&X.morphTexture!==null||He.envMap!==Ge||se.fog===!0&&He.fog!==Re||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==q.numPlanes||He.numIntersection!==q.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==Ze||He.morphTargets!==ze||He.morphNormals!==at||He.morphColors!==yt||He.toneMapping!==bt||He.morphTargetsCount!==dt)&&(ut=!0):(ut=!0,He.__version=se.version);let Hn=He.currentProgram;ut===!0&&(Hn=Tr(se,V,X));let Bs=!1,vn=!1,ko=!1;const St=Hn.getUniforms(),oi=He.uniforms;if(ne.useProgram(Hn.program)&&(Bs=!0,vn=!0,ko=!0),se.id!==y&&(y=se.id,vn=!0),Bs||b!==P){ne.buffers.depth.getReversed()?(pe.copy(P.projectionMatrix),up(pe),fp(pe),St.setValue(D,"projectionMatrix",pe)):St.setValue(D,"projectionMatrix",P.projectionMatrix),St.setValue(D,"viewMatrix",P.matrixWorldInverse);const Bi=St.map.cameraPosition;Bi!==void 0&&Bi.setValue(D,Ae.setFromMatrixPosition(P.matrixWorld)),re.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&St.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,vn=!0,ko=!0)}if(X.isSkinnedMesh){St.setOptional(D,X,"bindMatrix"),St.setOptional(D,X,"bindMatrixInverse");const Ln=X.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),St.setValue(D,"boneTexture",Ln.boneTexture,E))}X.isBatchedMesh&&(St.setOptional(D,X,"batchingTexture"),St.setValue(D,"batchingTexture",X._matricesTexture,E),St.setOptional(D,X,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",X._indirectTexture,E),St.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",X._colorsTexture,E));const Go=ie.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0)&&Pe.update(X,ie,Hn),(vn||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,St.setValue(D,"receiveShadow",X.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(oi.envMap.value=Ge,oi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&V.environment!==null&&(oi.envMapIntensity.value=V.environmentIntensity),vn&&(St.setValue(D,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&yf(oi,ko),Re&&se.fog===!0&&fe.refreshFogUniforms(oi,Re),fe.refreshMaterialUniforms(oi,se,N,z,d.state.transmissionRenderTarget[P.id]),Ma.upload(D,dh(He),oi,E)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ma.upload(D,dh(He),oi,E),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&St.setValue(D,"center",X.center),St.setValue(D,"modelViewMatrix",X.modelViewMatrix),St.setValue(D,"normalMatrix",X.normalMatrix),St.setValue(D,"modelMatrix",X.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Ln=se.uniformsGroups;for(let Bi=0,Oi=Ln.length;Bi<Oi;Bi++){const fh=Ln[Bi];k.update(fh,Hn),k.bind(fh,Hn)}}return Hn}function yf(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function bf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,V,ie){_e.get(P.texture).__webglTexture=V,_e.get(P.depthTexture).__webglTexture=ie;const se=_e.get(P);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const ie=_e.get(P);ie.__webglFramebuffer=V,ie.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,ie=0){L=P,R=V,w=ie;let se=!0,X=null,Re=!1,Ne=!1;if(P){const Ge=_e.get(P);if(Ge.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(D.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)E.setupRenderTarget(P);else if(Ge.__hasExternalTextures)E.rebindTextures(P,_e.get(P.texture).__webglTexture,_e.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ze=P.depthTexture;if(Ge.__boundDepthTexture!==ze){if(ze!==null&&_e.has(ze)&&(P.width!==ze.image.width||P.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(P)}}const qe=P.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Ze=_e.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?X=Ze[V][ie]:X=Ze[V],Re=!0):P.samples>0&&E.useMultisampledRTT(P)===!1?X=_e.get(P).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[ie]:X=Ze,A.copy(P.viewport),O.copy(P.scissor),U=P.scissorTest}else A.copy(ge).multiplyScalar(N).floor(),O.copy(Ce).multiplyScalar(N).floor(),U=Be;if(ne.bindFramebuffer(D.FRAMEBUFFER,X)&&se&&ne.drawBuffers(P,X),ne.viewport(A),ne.scissor(O),ne.setScissorTest(U),Re){const Ge=_e.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,ie)}else if(Ne){const Ge=_e.get(P.texture),qe=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,ie||0,qe)}y=-1},this.readRenderTargetPixels=function(P,V,ie,se,X,Re,Ne){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=_e.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){ne.bindFramebuffer(D.FRAMEBUFFER,ke);try{const Ge=P.texture,qe=Ge.format,Ze=Ge.type;if(!re.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-se&&ie>=0&&ie<=P.height-X&&D.readPixels(V,ie,se,X,Fe.convert(qe),Fe.convert(Ze),Re)}finally{const Ge=L!==null?_e.get(L).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,V,ie,se,X,Re,Ne){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=_e.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){const Ge=P.texture,qe=Ge.format,Ze=Ge.type;if(!re.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-se&&ie>=0&&ie<=P.height-X){ne.bindFramebuffer(D.FRAMEBUFFER,ke);const ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,Re.byteLength,D.STREAM_READ),D.readPixels(V,ie,se,X,Fe.convert(qe),Fe.convert(Ze),0);const at=L!==null?_e.get(L).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,at);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await dp(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Re),D.deleteBuffer(ze),D.deleteSync(yt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,ie=0){P.isTexture!==!0&&(Qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const se=Math.pow(2,-ie),X=Math.floor(P.image.width*se),Re=Math.floor(P.image.height*se),Ne=V!==null?V.x:0,ke=V!==null?V.y:0;E.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,ie,0,0,Ne,ke,X,Re),ne.unbindTexture()},this.copyTextureToTexture=function(P,V,ie=null,se=null,X=0){P.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,P=arguments[1],V=arguments[2],X=arguments[3]||0,ie=null);let Re,Ne,ke,Ge,qe,Ze,ze,at,yt;const bt=P.isCompressedTexture?P.mipmaps[X]:P.image;ie!==null?(Re=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,ke=ie.isBox3?ie.max.z-ie.min.z:1,Ge=ie.min.x,qe=ie.min.y,Ze=ie.isBox3?ie.min.z:0):(Re=bt.width,Ne=bt.height,ke=bt.depth||1,Ge=0,qe=0,Ze=0),se!==null?(ze=se.x,at=se.y,yt=se.z):(ze=0,at=0,yt=0);const cn=Fe.convert(V.format),dt=Fe.convert(V.type);let He;V.isData3DTexture?(E.setTexture3D(V,0),He=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(E.setTexture2DArray(V,0),He=D.TEXTURE_2D_ARRAY):(E.setTexture2D(V,0),He=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const mi=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Bs=D.getParameter(D.UNPACK_SKIP_ROWS),vn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze);const ko=P.isDataArrayTexture||P.isData3DTexture,St=V.isDataArrayTexture||V.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const oi=_e.get(P),Go=_e.get(V),Ln=_e.get(oi.__renderTarget),Bi=_e.get(Go.__renderTarget);ne.bindFramebuffer(D.READ_FRAMEBUFFER,Ln.__webglFramebuffer),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Oi=0;Oi<ke;Oi++)ko&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(P).__webglTexture,X,Ze+Oi),P.isDepthTexture?(St&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(V).__webglTexture,X,yt+Oi),D.blitFramebuffer(Ge,qe,Re,Ne,ze,at,Re,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST)):St?D.copyTexSubImage3D(He,X,ze,at,yt+Oi,Ge,qe,Re,Ne):D.copyTexSubImage2D(He,X,ze,at,yt+Oi,Ge,qe,Re,Ne);ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else St?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(He,X,ze,at,yt,Re,Ne,ke,cn,dt,bt.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(He,X,ze,at,yt,Re,Ne,ke,cn,bt.data):D.texSubImage3D(He,X,ze,at,yt,Re,Ne,ke,cn,dt,bt):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,ze,at,Re,Ne,cn,dt,bt.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,ze,at,bt.width,bt.height,cn,bt.data):D.texSubImage2D(D.TEXTURE_2D,X,ze,at,Re,Ne,cn,dt,bt);D.pixelStorei(D.UNPACK_ROW_LENGTH,mi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vn),X===0&&V.generateMipmaps&&D.generateMipmap(He),ne.unbindTexture()},this.copyTextureToTexture3D=function(P,V,ie=null,se=null,X=0){return P.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,P=arguments[2],V=arguments[3],X=arguments[4]||0),Qo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,V,ie,se,X)},this.initRenderTarget=function(P){_e.get(P).__webglFramebuffer===void 0&&E.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?E.setTextureCube(P,0):P.isData3DTexture?E.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?E.setTexture2DArray(P,0):E.setTexture2D(P,0),ne.unbindTexture()},this.resetState=function(){R=0,w=0,L=null,ne.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class $u extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rt,this.environmentIntensity=1,this.environmentRotation=new Rt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class S1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new T;class Pa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),o=_t(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yu extends gs{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Js;const Xo=new T,Qs=new T,eo=new T,to=new we,$o=new we,qu=new lt,$r=new T,Yo=new T,Yr=new T,cd=new we,Tl=new we,hd=new we;class T1 extends Ft{constructor(e=new Yu){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new zn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new S1(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Pa(i,3,0,!1)),Js.setAttribute("uv",new Pa(i,2,3,!1))}this.geometry=Js,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),qu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-eo.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;qr($r.set(-.5,-.5,0),eo,r,Qs,s,o),qr(Yo.set(.5,-.5,0),eo,r,Qs,s,o),qr(Yr.set(.5,.5,0),eo,r,Qs,s,o),cd.set(0,0),Tl.set(1,0),hd.set(1,1);let a=e.ray.intersectTriangle($r,Yo,Yr,!1,Xo);if(a===null&&(qr(Yo.set(-.5,.5,0),eo,r,Qs,s,o),Tl.set(0,1),a=e.ray.intersectTriangle($r,Yr,Yo,!1,Xo),a===null))return;const h=e.ray.origin.distanceTo(Xo);h<e.near||h>e.far||t.push({distance:h,point:Xo.clone(),uv:Nn.getInterpolation(Xo,$r,Yo,Yr,cd,Tl,hd,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qr(n,e,t,i,s,o){to.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($o.x=o*to.x-s*to.y,$o.y=s*to.x+o*to.y):$o.copy(to),n.copy(e),n.x+=$o.x,n.y+=$o.y,n.applyMatrix4(qu)}class Zc extends gs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ra=new T,La=new T,dd=new lt,qo=new Xc,Zr=new ka,wl=new T,ud=new T;class w1 extends Ft{constructor(e=new zn,t=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Ra.fromBufferAttribute(t,s-1),La.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ra.distanceTo(La);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=o,e.ray.intersectsSphere(Zr)===!1)return;dd.copy(s).invert(),qo.copy(e.ray).applyMatrix4(dd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,c=i.index,m=i.attributes.position;if(c!==null){const p=Math.max(0,r.start),_=Math.min(c.count,r.start+r.count);for(let v=p,g=_-1;v<g;v+=l){const d=c.getX(v),C=c.getX(v+1),M=Kr(this,e,qo,h,d,C);M&&t.push(M)}if(this.isLineLoop){const v=c.getX(_-1),g=c.getX(p),d=Kr(this,e,qo,h,v,g);d&&t.push(d)}}else{const p=Math.max(0,r.start),_=Math.min(m.count,r.start+r.count);for(let v=p,g=_-1;v<g;v+=l){const d=Kr(this,e,qo,h,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Kr(this,e,qo,h,_-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Kr(n,e,t,i,s,o){const r=n.geometry.attributes.position;if(Ra.fromBufferAttribute(r,s),La.fromBufferAttribute(r,o),t.distanceSqToSegment(Ra,La,wl,ud)>i)return;wl.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(wl);if(!(h<e.near||h>e.far))return{distance:h,point:ud.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const fd=new T,pd=new T;class E1 extends w1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)fd.fromBufferAttribute(t,s),pd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fd.distanceTo(pd);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Da extends ln{constructor(e,t,i,s,o,r,a,h,l){super(e,t,i,s,o,r,a,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let r;t?r=t:r=e*i[o-1];let a=0,h=o-1,l;for(;a<=h;)if(s=Math.floor(a+(h-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)h=s-1;else{h=s;break}if(s=h,i[s]===r)return s/(o-1);const c=i[s],m=i[s+1]-c,p=(r-c)/m;return(s+p)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),h=t||(r.isVector2?new we:new T);return h.copy(a).sub(r).normalize(),h}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new T,s=[],o=[],r=[],a=new T,h=new lt;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new T)}o[0]=new T,r[0]=new T;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);c<=l&&(l=c,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),m<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Xt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(h.makeRotationAxis(a,_))}r[p].crossVectors(s[p],o[p])}if(t===!0){let p=Math.acos(Xt(o[0].dot(o[e]),-1,1));p/=e,s[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let _=1;_<=e;_++)o[_].applyMatrix4(h.makeRotationAxis(s[_],p*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kc extends pi{constructor(e=0,t=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=h}getPoint(e,t=new we){const i=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+e*o;let h=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=h-this.aX,p=l-this.aY;h=m*c-p*f+this.aX,l=m*f+p*c+this.aY}return i.set(h,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class C1 extends Kc{constructor(e,t,i,s,o,r){super(e,t,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function jc(){let n=0,e=0,t=0,i=0;function s(o,r,a,h){n=o,e=a,t=-3*o+3*r-2*a-h,i=2*o-2*r+a+h}return{initCatmullRom:function(o,r,a,h,l){s(r,a,l*(a-o),l*(h-r))},initNonuniformCatmullRom:function(o,r,a,h,l,c,f){let m=(r-o)/l-(a-o)/(l+c)+(a-r)/c,p=(a-r)/c-(h-r)/(c+f)+(h-a)/f;m*=c,p*=c,s(r,a,m,p)},calc:function(o){const r=o*o,a=r*o;return n+e*o+t*r+i*a}}}const jr=new T,El=new jc,Cl=new jc,Al=new jc;class A1 extends pi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new T){const i=t,s=this.points,o=s.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),h=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:h===0&&a===o-1&&(a=o-2,h=1);let l,c;this.closed||a>0?l=s[(a-1)%o]:(jr.subVectors(s[0],s[1]).add(s[0]),l=jr);const f=s[a%o],m=s[(a+1)%o];if(this.closed||a+2<o?c=s[(a+2)%o]:(jr.subVectors(s[o-1],s[o-2]).add(s[o-1]),c=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(m),p),g=Math.pow(m.distanceToSquared(c),p);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),El.initNonuniformCatmullRom(l.x,f.x,m.x,c.x,_,v,g),Cl.initNonuniformCatmullRom(l.y,f.y,m.y,c.y,_,v,g),Al.initNonuniformCatmullRom(l.z,f.z,m.z,c.z,_,v,g)}else this.curveType==="catmullrom"&&(El.initCatmullRom(l.x,f.x,m.x,c.x,this.tension),Cl.initCatmullRom(l.y,f.y,m.y,c.y,this.tension),Al.initCatmullRom(l.z,f.z,m.z,c.z,this.tension));return i.set(El.calc(h),Cl.calc(h),Al.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function md(n,e,t,i,s){const o=(i-e)*.5,r=(s-t)*.5,a=n*n,h=n*a;return(2*t-2*i+o+r)*h+(-3*t+3*i-2*o-r)*a+o*n+t}function P1(n,e){const t=1-n;return t*t*e}function R1(n,e){return 2*(1-n)*n*e}function L1(n,e){return n*n*e}function rr(n,e,t,i){return P1(n,e)+R1(n,t)+L1(n,i)}function D1(n,e){const t=1-n;return t*t*t*e}function I1(n,e){const t=1-n;return 3*t*t*n*e}function F1(n,e){return 3*(1-n)*n*n*e}function U1(n,e){return n*n*n*e}function ar(n,e,t,i,s){return D1(n,e)+I1(n,t)+F1(n,i)+U1(n,s)}class Zu extends pi{constructor(e=new we,t=new we,i=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new we){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ar(e,s.x,o.x,r.x,a.x),ar(e,s.y,o.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class N1 extends pi{constructor(e=new T,t=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new T){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ar(e,s.x,o.x,r.x,a.x),ar(e,s.y,o.y,r.y,a.y),ar(e,s.z,o.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ku extends pi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B1 extends pi{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ju extends pi{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(rr(e,s.x,o.x,r.x),rr(e,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O1 extends pi{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(rr(e,s.x,o.x,r.x),rr(e,s.y,o.y,r.y),rr(e,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,s=this.points,o=(s.length-1)*e,r=Math.floor(o),a=o-r,h=s[r===0?r:r-1],l=s[r],c=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return i.set(md(a,h.x,l.x,c.x,f.x),md(a,h.y,l.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var Ac=Object.freeze({__proto__:null,ArcCurve:C1,CatmullRomCurve3:A1,CubicBezierCurve:Zu,CubicBezierCurve3:N1,EllipseCurve:Kc,LineCurve:Ku,LineCurve3:B1,QuadraticBezierCurve:ju,QuadraticBezierCurve3:O1,SplineCurve:Ju});class k1 extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],h=a.getLength(),l=h===0?0:1-r/h;return a.getPointAt(l,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,h=r.getPoints(a);for(let l=0;l<h.length;l++){const c=h[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ac[s.type]().fromJSON(s))}return this}}class sn extends k1{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ku(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new ju(this.currentPoint.clone(),new we(e,t),new we(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,r){const a=new Zu(this.currentPoint.clone(),new we(e,t),new we(i,s),new we(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ju(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,r){const a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+a,t+h,i,s,o,r),this}absarc(e,t,i,s,o,r){return this.absellipse(e,t,i,i,s,o,r),this}ellipse(e,t,i,s,o,r,a,h){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,s,o,r,a,h),this}absellipse(e,t,i,s,o,r,a,h){const l=new Kc(e,t,i,s,o,r,a,h);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ke extends zn{constructor(e=1,t=1,i=1,s=32,o=1,r=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:h};const l=this;s=Math.floor(s),o=Math.floor(o);const c=[],f=[],m=[],p=[];let _=0;const v=[],g=i/2;let d=0;C(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(m,3)),this.setAttribute("uv",new Qt(p,2));function C(){const x=new T,I=new T;let R=0;const w=(t-e)/i;for(let L=0;L<=o;L++){const y=[],b=L/o,A=b*(t-e)+e;for(let O=0;O<=s;O++){const U=O/s,G=U*h+a,B=Math.sin(G),Y=Math.cos(G);I.x=A*B,I.y=-b*i+g,I.z=A*Y,f.push(I.x,I.y,I.z),x.set(B,w,Y).normalize(),m.push(x.x,x.y,x.z),p.push(U,1-b),y.push(_++)}v.push(y)}for(let L=0;L<s;L++)for(let y=0;y<o;y++){const b=v[y][L],A=v[y+1][L],O=v[y+1][L+1],U=v[y][L+1];(e>0||y!==0)&&(c.push(b,A,U),R+=3),(t>0||y!==o-1)&&(c.push(A,O,U),R+=3)}l.addGroup(d,R,0),d+=R}function M(x){const I=_,R=new we,w=new T;let L=0;const y=x===!0?e:t,b=x===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,g*b,0),m.push(0,b,0),p.push(.5,.5),_++;const A=_;for(let O=0;O<=s;O++){const G=O/s*h+a,B=Math.cos(G),Y=Math.sin(G);w.x=y*Y,w.y=g*b,w.z=y*B,f.push(w.x,w.y,w.z),m.push(0,b,0),R.x=B*.5+.5,R.y=Y*.5*b+.5,p.push(R.x,R.y),_++}for(let O=0;O<s;O++){const U=I+O,G=A+O;x===!0?c.push(G,G+1,U):c.push(G+1,G,U),L+=3}l.addGroup(d,L,x===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mt extends sn{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new sn().fromJSON(s))}return this}}const G1={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let o=Qu(n,0,s,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,h,l,c,f,m,p;if(i&&(o=X1(n,e,o,t)),n.length>80*t){a=l=n[0],h=c=n[1];for(let _=t;_<s;_+=t)f=n[_],m=n[_+1],f<a&&(a=f),m<h&&(h=m),f>l&&(l=f),m>c&&(c=m);p=Math.max(l-a,c-h),p=p!==0?32767/p:0}return fr(o,r,t,a,h,p,0),r}};function Qu(n,e,t,i,s){let o,r;if(s===nv(n,e,t,i)>0)for(o=e;o<t;o+=i)r=gd(o,n[o],n[o+1],r);else for(o=t-i;o>=e;o-=i)r=gd(o,n[o],n[o+1],r);return r&&za(r,r.next)&&(mr(r),r=r.next),r}function Fs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(za(t,t.next)||Lt(t.prev,t,t.next)===0)){if(mr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fr(n,e,t,i,s,o,r){if(!n)return;!r&&o&&K1(n,i,s,o);let a=n,h,l;for(;n.prev!==n.next;){if(h=n.prev,l=n.next,o?H1(n,i,s,o):z1(n)){e.push(h.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),mr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=W1(Fs(n),e,t),fr(n,e,t,i,s,o,2)):r===2&&V1(n,e,t,i,s,o):fr(Fs(n),e,t,i,s,o,1);break}}}function z1(n){const e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;const s=e.x,o=t.x,r=i.x,a=e.y,h=t.y,l=i.y,c=s<o?s<r?s:r:o<r?o:r,f=a<h?a<l?a:l:h<l?h:l,m=s>o?s>r?s:r:o>r?o:r,p=a>h?a>l?a:l:h>l?h:l;let _=i.next;for(;_!==e;){if(_.x>=c&&_.x<=m&&_.y>=f&&_.y<=p&&ho(s,a,o,h,r,l,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function H1(n,e,t,i){const s=n.prev,o=n,r=n.next;if(Lt(s,o,r)>=0)return!1;const a=s.x,h=o.x,l=r.x,c=s.y,f=o.y,m=r.y,p=a<h?a<l?a:l:h<l?h:l,_=c<f?c<m?c:m:f<m?f:m,v=a>h?a>l?a:l:h>l?h:l,g=c>f?c>m?c:m:f>m?f:m,d=Pc(p,_,e,t,i),C=Pc(v,g,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=d&&x&&x.z<=C;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==r&&ho(a,c,h,f,l,m,M.x,M.y)&&Lt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=p&&x.x<=v&&x.y>=_&&x.y<=g&&x!==s&&x!==r&&ho(a,c,h,f,l,m,x.x,x.y)&&Lt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=d;){if(M.x>=p&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==r&&ho(a,c,h,f,l,m,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=C;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=g&&x!==s&&x!==r&&ho(a,c,h,f,l,m,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function W1(n,e,t){let i=n;do{const s=i.prev,o=i.next.next;!za(s,o)&&ef(s,i,i.next,o)&&pr(s,o)&&pr(o,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),mr(i),mr(i.next),i=n=o),i=i.next}while(i!==n);return Fs(i)}function V1(n,e,t,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Q1(r,a)){let h=tf(r,a);r=Fs(r,r.next),h=Fs(h,h.next),fr(r,e,t,i,s,o,0),fr(h,e,t,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function X1(n,e,t,i){const s=[];let o,r,a,h,l;for(o=0,r=e.length;o<r;o++)a=e[o]*i,h=o<r-1?e[o+1]*i:n.length,l=Qu(n,a,h,i,!1),l===l.next&&(l.steiner=!0),s.push(J1(l));for(s.sort($1),o=0;o<s.length;o++)t=Y1(s[o],t);return t}function $1(n,e){return n.x-e.x}function Y1(n,e){const t=q1(n,e);if(!t)return e;const i=tf(t,n);return Fs(i,i.next),Fs(t,t.next)}function q1(n,e){let t=e,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const m=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=o&&m>i&&(i=m,s=t.x<t.next.x?t:t.next,m===o))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,h=s.x,l=s.y;let c=1/0,f;t=s;do o>=t.x&&t.x>=h&&o!==t.x&&ho(r<l?o:i,r,h,l,r<l?i:o,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(o-t.x),pr(t,n)&&(f<c||f===c&&(t.x>s.x||t.x===s.x&&Z1(s,t)))&&(s=t,c=f)),t=t.next;while(t!==a);return s}function Z1(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function K1(n,e,t,i){let s=n;do s.z===0&&(s.z=Pc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,j1(s)}function j1(n){let e,t,i,s,o,r,a,h,l=1;do{for(t=n,n=null,o=null,r=0;t;){for(r++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(h=l;a>0||h>0&&i;)a!==0&&(h===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,h--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;t=i}o.nextZ=null,l*=2}while(r>1);return n}function Pc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function J1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ho(n,e,t,i,s,o,r,a){return(s-r)*(e-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(s-r)*(i-a)}function Q1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ev(n,e)&&(pr(n,e)&&pr(e,n)&&tv(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||za(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function za(n,e){return n.x===e.x&&n.y===e.y}function ef(n,e,t,i){const s=Qr(Lt(n,e,t)),o=Qr(Lt(n,e,i)),r=Qr(Lt(t,i,n)),a=Qr(Lt(t,i,e));return!!(s!==o&&r!==a||s===0&&Jr(n,t,e)||o===0&&Jr(n,i,e)||r===0&&Jr(t,n,i)||a===0&&Jr(t,e,i))}function Jr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Qr(n){return n>0?1:n<0?-1:0}function ev(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ef(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function pr(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function tv(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function tf(n,e){const t=new Rc(n.i,n.x,n.y),i=new Rc(e.i,e.x,e.y),s=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function gd(n,e,t,i){const s=new Rc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function mr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nv(n,e,t,i){let s=0;for(let o=e,r=t-i;o<t;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class lr{static area(e){const t=e.length;let i=0;for(let s=t-1,o=0;o<t;s=o++)i+=e[s].x*e[o].y-e[o].x*e[s].y;return i*.5}static isClockWise(e){return lr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],o=[];_d(e),vd(i,e);let r=e.length;t.forEach(_d);for(let h=0;h<t.length;h++)s.push(r),r+=t[h].length,vd(i,t[h]);const a=G1.triangulate(i,s);for(let h=0;h<a.length;h+=3)o.push(a.slice(h,h+3));return o}}function _d(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function vd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ft extends zn{constructor(e=new mt([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],o=[];for(let a=0,h=e.length;a<h;a++){const l=e[a];r(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(o,2)),this.computeVertexNormals();function r(a){const h=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:iv;let M,x=!1,I,R,w,L;d&&(M=d.getSpacedPoints(c),x=!0,m=!1,I=d.computeFrenetFrames(c,!1),R=new T,w=new T,L=new T),m||(g=0,p=0,_=0,v=0);const y=a.extractPoints(l);let b=y.shape;const A=y.holes;if(!lr.isClockWise(b)){b=b.reverse();for(let te=0,K=A.length;te<K;te++){const D=A[te];lr.isClockWise(D)&&(A[te]=D.reverse())}}const U=lr.triangulateShape(b,A),G=b;for(let te=0,K=A.length;te<K;te++){const D=A[te];b=b.concat(D)}function B(te,K,D){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(K,D)}const Y=b.length,z=U.length;function N(te,K,D){let oe,Q,re;const ne=te.x-K.x,xe=te.y-K.y,_e=D.x-te.x,E=D.y-te.y,S=ne*ne+xe*xe,F=ne*E-xe*_e;if(Math.abs(F)>Number.EPSILON){const H=Math.sqrt(S),W=Math.sqrt(_e*_e+E*E),$=K.x-xe/H,de=K.y+ne/H,fe=D.x-E/W,ve=D.y+_e/W,Se=((fe-$)*E-(ve-de)*_e)/(ne*E-xe*_e);oe=$+ne*Se-te.x,Q=de+xe*Se-te.y;const q=oe*oe+Q*Q;if(q<=2)return new we(oe,Q);re=Math.sqrt(q/2)}else{let H=!1;ne>Number.EPSILON?_e>Number.EPSILON&&(H=!0):ne<-Number.EPSILON?_e<-Number.EPSILON&&(H=!0):Math.sign(xe)===Math.sign(E)&&(H=!0),H?(oe=-xe,Q=ne,re=Math.sqrt(S)):(oe=ne,Q=xe,re=Math.sqrt(S/2))}return new we(oe/re,Q/re)}const ee=[];for(let te=0,K=G.length,D=K-1,oe=te+1;te<K;te++,D++,oe++)D===K&&(D=0),oe===K&&(oe=0),ee[te]=N(G[te],G[D],G[oe]);const ae=[];let ge,Ce=ee.concat();for(let te=0,K=A.length;te<K;te++){const D=A[te];ge=[];for(let oe=0,Q=D.length,re=Q-1,ne=oe+1;oe<Q;oe++,re++,ne++)re===Q&&(re=0),ne===Q&&(ne=0),ge[oe]=N(D[oe],D[re],D[ne]);ae.push(ge),Ce=Ce.concat(ge)}for(let te=0;te<g;te++){const K=te/g,D=p*Math.cos(K*Math.PI/2),oe=_*Math.sin(K*Math.PI/2)+v;for(let Q=0,re=G.length;Q<re;Q++){const ne=B(G[Q],ee[Q],oe);pe(ne.x,ne.y,-D)}for(let Q=0,re=A.length;Q<re;Q++){const ne=A[Q];ge=ae[Q];for(let xe=0,_e=ne.length;xe<_e;xe++){const E=B(ne[xe],ge[xe],oe);pe(E.x,E.y,-D)}}}const Be=_+v;for(let te=0;te<Y;te++){const K=m?B(b[te],Ce[te],Be):b[te];x?(w.copy(I.normals[0]).multiplyScalar(K.x),R.copy(I.binormals[0]).multiplyScalar(K.y),L.copy(M[0]).add(w).add(R),pe(L.x,L.y,L.z)):pe(K.x,K.y,0)}for(let te=1;te<=c;te++)for(let K=0;K<Y;K++){const D=m?B(b[K],Ce[K],Be):b[K];x?(w.copy(I.normals[te]).multiplyScalar(D.x),R.copy(I.binormals[te]).multiplyScalar(D.y),L.copy(M[te]).add(w).add(R),pe(L.x,L.y,L.z)):pe(D.x,D.y,f/c*te)}for(let te=g-1;te>=0;te--){const K=te/g,D=p*Math.cos(K*Math.PI/2),oe=_*Math.sin(K*Math.PI/2)+v;for(let Q=0,re=G.length;Q<re;Q++){const ne=B(G[Q],ee[Q],oe);pe(ne.x,ne.y,f+D)}for(let Q=0,re=A.length;Q<re;Q++){const ne=A[Q];ge=ae[Q];for(let xe=0,_e=ne.length;xe<_e;xe++){const E=B(ne[xe],ge[xe],oe);x?pe(E.x,E.y+M[c-1].y,M[c-1].x+D):pe(E.x,E.y,f+D)}}}j(),le();function j(){const te=s.length/3;if(m){let K=0,D=Y*K;for(let oe=0;oe<z;oe++){const Q=U[oe];he(Q[2]+D,Q[1]+D,Q[0]+D)}K=c+g*2,D=Y*K;for(let oe=0;oe<z;oe++){const Q=U[oe];he(Q[0]+D,Q[1]+D,Q[2]+D)}}else{for(let K=0;K<z;K++){const D=U[K];he(D[2],D[1],D[0])}for(let K=0;K<z;K++){const D=U[K];he(D[0]+Y*c,D[1]+Y*c,D[2]+Y*c)}}i.addGroup(te,s.length/3-te,0)}function le(){const te=s.length/3;let K=0;Me(G,K),K+=G.length;for(let D=0,oe=A.length;D<oe;D++){const Q=A[D];Me(Q,K),K+=Q.length}i.addGroup(te,s.length/3-te,1)}function Me(te,K){let D=te.length;for(;--D>=0;){const oe=D;let Q=D-1;Q<0&&(Q=te.length-1);for(let re=0,ne=c+g*2;re<ne;re++){const xe=Y*re,_e=Y*(re+1),E=K+oe+xe,S=K+Q+xe,F=K+Q+_e,H=K+oe+_e;Ae(E,S,F,H)}}}function pe(te,K,D){h.push(te),h.push(K),h.push(D)}function he(te,K,D){me(te),me(K),me(D);const oe=s.length/3,Q=C.generateTopUV(i,s,oe-3,oe-2,oe-1);Ee(Q[0]),Ee(Q[1]),Ee(Q[2])}function Ae(te,K,D,oe){me(te),me(K),me(oe),me(K),me(D),me(oe);const Q=s.length/3,re=C.generateSideWallUV(i,s,Q-6,Q-3,Q-2,Q-1);Ee(re[0]),Ee(re[1]),Ee(re[3]),Ee(re[1]),Ee(re[2]),Ee(re[3])}function me(te){s.push(h[te*3+0]),s.push(h[te*3+1]),s.push(h[te*3+2])}function Ee(te){o.push(te.x),o.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return sv(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ac[s.type]().fromJSON(s)),new ft(i,e.options)}}const iv={generateTopUV:function(n,e,t,i,s){const o=e[t*3],r=e[t*3+1],a=e[i*3],h=e[i*3+1],l=e[s*3],c=e[s*3+1];return[new we(o,r),new we(a,h),new we(l,c)]},generateSideWallUV:function(n,e,t,i,s,o){const r=e[t*3],a=e[t*3+1],h=e[t*3+2],l=e[i*3],c=e[i*3+1],f=e[i*3+2],m=e[s*3],p=e[s*3+1],_=e[s*3+2],v=e[o*3],g=e[o*3+1],d=e[o*3+2];return Math.abs(a-c)<Math.abs(r-l)?[new we(r,1-h),new we(l,1-f),new we(m,1-_),new we(v,1-d)]:[new we(a,1-h),new we(c,1-f),new we(p,1-_),new we(g,1-d)]}};function sv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ov extends gs{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class it extends gs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ha extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class rv extends Ha{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Pl=new lt,xd=new T,Md=new T;class Jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class av extends Jc{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ca*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lv extends Ha{constructor(e,t,i=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new av}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yd=new lt,Zo=new T,Rl=new T;class cv extends Jc{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zo),Rl.copy(i.position),Rl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Rl),i.updateMatrixWorld(),s.makeTranslation(-Zo.x,-Zo.y,-Zo.z),yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class nf extends Ha{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hv extends Jc{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ea extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new hv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dv extends E1{constructor(e=10,t=10,i=4473924,s=8947848){i=new Je(i),s=new Je(s);const o=t/2,r=e/t,a=e/2,h=[],l=[];for(let m=0,p=0,_=-a;m<=t;m++,_+=r){h.push(-a,0,_,a,0,_),h.push(_,0,-a,_,0,a);const v=m===o?i:s;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const c=new zn;c.setAttribute("position",new Qt(h,3)),c.setAttribute("color",new Qt(l,3));const f=new Zc({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class uv extends Ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);const Sd={type:"change"},Qc={type:"start"},sf={type:"end"},ta=new Xc,Td=new Ki,fv=Math.cos(70*cp.DEG2RAD),Ot=new T,hn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ll=1e-6;class pv extends uv{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_o.ROTATE,MIDDLE:_o.DOLLY,RIGHT:_o.PAN},this.touches={ONE:lo.ROTATE,TWO:lo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Is,this._lastTargetPosition=new T,this._quat=new Is().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bd,this._sphericalDelta=new bd,this._scale=1,this._panOffset=new T,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new T,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gv.bind(this),this._onPointerDown=mv.bind(this),this._onPointerUp=_v.bind(this),this._onContextMenu=Tv.bind(this),this._onMouseWheel=Mv.bind(this),this._onKeyDown=yv.bind(this),this._onTouchStart=bv.bind(this),this._onTouchMove=Sv.bind(this),this._onMouseDown=vv.bind(this),this._onMouseMove=xv.bind(this),this._interceptControlDown=wv.bind(this),this._interceptControlUp=Ev.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=vt.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ot.length();r=this._clampDistance(a*this._scale);const h=a-r;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ta.origin.copy(this.object.position),ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ta.direction))<fv?this.object.lookAt(this.target):(Td.setFromNormalAndCoplanarPoint(this.object.up,this.target),ta.intersectPlane(Td,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ll||this._lastTargetPosition.distanceToSquared(this.target)>Ll?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let o=Ot.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,o=t-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function mv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function gv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _v(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sf),this.state=vt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _o.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=vt.DOLLY;break;case _o.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=vt.ROTATE}break;case _o.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Qc)}function xv(n){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Mv(n){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(n.preventDefault(),this.dispatchEvent(Qc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sf))}function yv(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function bv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case lo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=vt.TOUCH_ROTATE;break;case lo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case lo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=vt.TOUCH_DOLLY_PAN;break;case lo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Qc)}function Sv(n){switch(this._trackPointer(n),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=vt.NONE}}function Tv(n){this.enabled!==!1&&n.preventDefault()}function wv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ev(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Cv extends $u{constructor(){super();const e=new Xe;e.deleteAttribute("uv");const t=new it({side:Jt}),i=new it,s=new nf(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new Z(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const r=new Z(e,i);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new Z(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const h=new Z(e,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);const l=new Z(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const c=new Z(e,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const f=new Z(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const m=new Z(e,no(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Z(e,no(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Z(e,no(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Z(e,no(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Z(e,no(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const d=new Z(e,no(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function no(n){const e=new $c;return e.color.setScalar(n),e}class Av{constructor(){this.aluminum=new it({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.currentFrameColor="silver",this.acrylic=new it({color:9684477,transparent:!0,opacity:.42,roughness:.1,metalness:.1,depthWrite:!1,side:Vt}),this.doorGlassLeft=new it({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Vt}),this.doorGlassRight=new it({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Vt}),this.handleMaterial=new it({color:16777215,metalness:.75,roughness:.12,envMapIntensity:1.2}),this.screwSilver=new it({color:11055288,metalness:.85,roughness:.22,envMapIntensity:1}),this.screwSlot=new it({color:1842978,metalness:.1,roughness:.9}),this.grommetMaterial=new it({color:1579035,metalness:.1,roughness:.85}),this.railMaterial=new it({color:4738388,metalness:.15,roughness:.55}),this.endCapMaterial=new it({color:10133670,metalness:.1,roughness:.65}),this.casterWheel=new it({color:1579035,roughness:.7,metalness:.15}),this.casterBracket=new it({color:14212838,roughness:.22,metalness:.85,envMapIntensity:1.2}),this.wireMesh=new it({color:1842463,roughness:.55,metalness:.25,envMapIntensity:.9}),this.silverInnerFrame=new it({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchAluminum=new it({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchGrayCap=new it({color:10133670,metalness:.1,roughness:.65}),this.perchBlackCap=new it({color:2237222,metalness:.1,roughness:.65}),this.perchWhiteScrew=new it({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.ventCoverAcrylic=new it({color:9684477,transparent:!0,opacity:.5,roughness:.08,metalness:.1,depthWrite:!1,side:Vt}),this.ledAluminum=new it({color:14212580,metalness:.8,roughness:.25,envMapIntensity:1.2}),this.ledDiffuser=new it({color:16777215,roughness:.4,metalness:.05}),this.ledEmissive=new it({color:16777215,emissive:16777215,emissiveIntensity:1.5,roughness:.2,metalness:0}),this.ledCable=new it({color:13421772,roughness:.7,metalness:.05}),this.ledBracket=new it({color:8950432,metalness:.6,roughness:.3}),this.thumbScrewMaterial=new it({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.blackMatteAcrylic=new it({color:1579292,roughness:.82,metalness:.04,side:Vt}),this.smokeGrayAcrylic=new it({color:2829877,transparent:!0,opacity:.6,roughness:.12,metalness:.1,depthWrite:!1,side:Vt}),this.caulkingMaterial=new it({color:13817821,roughness:.42,metalness:.04,envMapIntensity:.6}),this.rubberPackingMaterial=new it({color:7502212,roughness:.78,metalness:.06,envMapIntensity:.5})}createPolycaMaterial(e,t){return new it({map:e,bumpMap:t,bumpScale:1.2,transparent:!0,opacity:.78,roughness:.32,metalness:.1,side:Vt,depthWrite:!1})}createPunchingMaterial(e){return new it({color:9684477,alphaMap:e,transparent:!0,opacity:.58,roughness:.35,metalness:.05,side:Vt,depthWrite:!1})}setFrameColor(e){this.currentFrameColor=e,e==="black"?(this.aluminum.color.setHex(1974308),this.aluminum.metalness=.28,this.aluminum.roughness=.42,this.aluminum.envMapIntensity=.85,this.endCapMaterial.color.setHex(2237222),this.railMaterial.color.setHex(1974050),this.thumbScrewMaterial.color.setHex(1974050)):(this.aluminum.color.setHex(12897236),this.aluminum.metalness=.85,this.aluminum.roughness=.25,this.aluminum.envMapIntensity=1.3,this.endCapMaterial.color.setHex(10133670),this.railMaterial.color.setHex(4738388),this.thumbScrewMaterial.color.setHex(16119544)),this.aluminum.needsUpdate=!0,this.endCapMaterial.needsUpdate=!0,this.railMaterial.needsUpdate=!0,this.thumbScrewMaterial.needsUpdate=!0}dispose(){this.aluminum.dispose(),this.acrylic.dispose(),this.doorGlassLeft.dispose(),this.doorGlassRight.dispose(),this.handleMaterial.dispose(),this.grommetMaterial.dispose(),this.railMaterial.dispose(),this.endCapMaterial.dispose(),this.casterWheel.dispose(),this.casterBracket.dispose(),this.wireMesh.dispose(),this.silverInnerFrame.dispose(),this.perchAluminum.dispose(),this.perchGrayCap.dispose(),this.perchBlackCap.dispose(),this.perchWhiteScrew.dispose(),this.ventCoverAcrylic.dispose(),this.thumbScrewMaterial.dispose(),this.ledAluminum.dispose(),this.ledDiffuser.dispose(),this.ledEmissive.dispose(),this.ledCable.dispose(),this.ledBracket.dispose(),this.screwSilver.dispose(),this.screwSlot.dispose(),this.blackMatteAcrylic.dispose(),this.smokeGrayAcrylic.dispose()}}function Pv(){const n=new mt,e=10,t=3,i=1.8,s=5.5,o=5;n.moveTo(e,e),n.lineTo(e,t),n.lineTo(e-i,t),n.lineTo(e-i,s),n.lineTo(e-o,s),n.lineTo(e-o,-s),n.lineTo(e-i,-s),n.lineTo(e-i,-t),n.lineTo(e,-t),n.lineTo(e,-e),n.lineTo(t,-e),n.lineTo(t,-e+i),n.lineTo(s,-e+i),n.lineTo(s,-e+o),n.lineTo(-s,-e+o),n.lineTo(-s,-e+i),n.lineTo(-t,-e+i),n.lineTo(-t,-e),n.lineTo(-e,-e),n.lineTo(-e,-t),n.lineTo(-e+i,-t),n.lineTo(-e+i,-s),n.lineTo(-e+o,-s),n.lineTo(-e+o,s),n.lineTo(-e+i,s),n.lineTo(-e+i,t),n.lineTo(-e,t),n.lineTo(-e,e),n.lineTo(-t,e),n.lineTo(-t,e-i),n.lineTo(-s,e-i),n.lineTo(-s,e-o),n.lineTo(s,e-o),n.lineTo(s,e-i),n.lineTo(t,e-i),n.lineTo(t,e),n.lineTo(e,e);const r=new sn;return r.absarc(0,0,2.25,0,Math.PI*2,!0),n.holes.push(r),n}function Rv(){const n=new mt,e=10,t=20,i=3,s=1.8,o=5.5,r=5;n.moveTo(e,t),n.lineTo(e,10+i),n.lineTo(e-s,10+i),n.lineTo(e-s,10+o),n.lineTo(e-r,10+o),n.lineTo(e-r,10-o),n.lineTo(e-s,10-o),n.lineTo(e-s,10-i),n.lineTo(e,10-i),n.lineTo(e,-10+i),n.lineTo(e-s,-10+i),n.lineTo(e-s,-10+o),n.lineTo(e-r,-10+o),n.lineTo(e-r,-10-o),n.lineTo(e-s,-10-o),n.lineTo(e-s,-10-i),n.lineTo(e,-10-i),n.lineTo(e,-t),n.lineTo(i,-t),n.lineTo(i,-t+s),n.lineTo(o,-t+s),n.lineTo(o,-t+r),n.lineTo(-o,-t+r),n.lineTo(-o,-t+s),n.lineTo(-i,-t+s),n.lineTo(-i,-t),n.lineTo(-e,-t),n.lineTo(-e,-10-i),n.lineTo(-e+s,-10-i),n.lineTo(-e+s,-10-o),n.lineTo(-e+r,-10-o),n.lineTo(-e+r,-10+o),n.lineTo(-e+s,-10+o),n.lineTo(-e+s,-10+i),n.lineTo(-e,-10+i),n.lineTo(-e,10-i),n.lineTo(-e+s,10-i),n.lineTo(-e+s,10-o),n.lineTo(-e+r,10-o),n.lineTo(-e+r,10+o),n.lineTo(-e+s,10+o),n.lineTo(-e+s,10+i),n.lineTo(-e,10+i),n.lineTo(-e,t),n.lineTo(-i,t),n.lineTo(-i,t-s),n.lineTo(-o,t-s),n.lineTo(-o,t-r),n.lineTo(o,t-r),n.lineTo(o,t-s),n.lineTo(i,t-s),n.lineTo(i,t),n.lineTo(e,t);const a=new sn;a.absarc(0,10,2.25,0,Math.PI*2,!0),n.holes.push(a);const h=new sn;return h.absarc(0,-10,2.25,0,Math.PI*2,!0),n.holes.push(h),n}const Lv=Pv(),Dv=Rv(),Iv=Fv();function Fv(){const n=new mt,e=10,t=30,i=3,s=1.8,o=5.5,r=5;n.moveTo(e,t),n.lineTo(e,20+i),n.lineTo(e-s,20+i),n.lineTo(e-s,20+o),n.lineTo(e-r,20+o),n.lineTo(e-r,20-o),n.lineTo(e-s,20-o),n.lineTo(e-s,20-i),n.lineTo(e,20-i),n.lineTo(e,i),n.lineTo(e-s,i),n.lineTo(e-s,o),n.lineTo(e-r,o),n.lineTo(e-r,-o),n.lineTo(e-s,-o),n.lineTo(e-s,-i),n.lineTo(e,-i),n.lineTo(e,-20+i),n.lineTo(e-s,-20+i),n.lineTo(e-s,-20+o),n.lineTo(e-r,-20+o),n.lineTo(e-r,-20-o),n.lineTo(e-s,-20-o),n.lineTo(e-s,-20-i),n.lineTo(e,-20-i),n.lineTo(e,-t),n.lineTo(i,-t),n.lineTo(i,-t+s),n.lineTo(o,-t+s),n.lineTo(o,-t+r),n.lineTo(-o,-t+r),n.lineTo(-o,-t+s),n.lineTo(-i,-t+s),n.lineTo(-i,-t),n.lineTo(-e,-t),n.lineTo(-e,-20-i),n.lineTo(-e+s,-20-i),n.lineTo(-e+s,-20-o),n.lineTo(-e+r,-20-o),n.lineTo(-e+r,-20+o),n.lineTo(-e+s,-20+o),n.lineTo(-e+s,-20+i),n.lineTo(-e,-20+i),n.lineTo(-e,-i),n.lineTo(-e+s,-i),n.lineTo(-e+s,-o),n.lineTo(-e+r,-o),n.lineTo(-e+r,o),n.lineTo(-e+s,o),n.lineTo(-e+s,i),n.lineTo(-e,i),n.lineTo(-e,20-i),n.lineTo(-e+s,20-i),n.lineTo(-e+s,20-o),n.lineTo(-e+r,20-o),n.lineTo(-e+r,20+o),n.lineTo(-e+s,20+o),n.lineTo(-e+s,20+i),n.lineTo(-e,20+i),n.lineTo(-e,t),n.lineTo(-i,t),n.lineTo(-i,t-s),n.lineTo(-o,t-s),n.lineTo(-o,t-r),n.lineTo(o,t-r),n.lineTo(o,t-s),n.lineTo(i,t-s),n.lineTo(i,t),n.lineTo(e,t);const a=new sn;a.absarc(0,20,2.25,0,Math.PI*2,!0),n.holes.push(a);const h=new sn;h.absarc(0,0,2.25,0,Math.PI*2,!0),n.holes.push(h);const l=new sn;return l.absarc(0,-20,2.25,0,Math.PI*2,!0),n.holes.push(l),n}function Uv(n){return new ft(Lv,{depth:n,bevelEnabled:!1,steps:1})}function na(n="bottom"){const e=new mt,t=10,i=3,s=1.8,o=5.5,r=5;e.moveTo(t,t),n==="right"||(e.lineTo(t,i),e.lineTo(t-s,i),e.lineTo(t-s,o),e.lineTo(t-r,o),e.lineTo(t-r,-o),e.lineTo(t-s,-o),e.lineTo(t-s,-i),e.lineTo(t,-i)),e.lineTo(t,-t),n==="bottom"||(e.lineTo(i,-t),e.lineTo(i,-t+s),e.lineTo(o,-t+s),e.lineTo(o,-t+r),e.lineTo(-o,-t+r),e.lineTo(-o,-t+s),e.lineTo(-i,-t+s),e.lineTo(-i,-t)),e.lineTo(-t,-t),n==="left"||(e.lineTo(-t,-i),e.lineTo(-t+s,-i),e.lineTo(-t+s,-o),e.lineTo(-t+r,-o),e.lineTo(-t+r,o),e.lineTo(-t+s,o),e.lineTo(-t+s,i),e.lineTo(-t,i)),e.lineTo(-t,t),n==="top"||(e.lineTo(-i,t),e.lineTo(-i,t-s),e.lineTo(-o,t-s),e.lineTo(-o,t-r),e.lineTo(o,t-r),e.lineTo(o,t-s),e.lineTo(i,t-s),e.lineTo(i,t)),e.lineTo(t,t);const a=new sn;return a.absarc(0,0,2.25,0,Math.PI*2,!0),e.holes.push(a),e}const wd={top:na("top"),bottom:na("bottom"),left:na("left"),right:na("right")};function Ed(n,e="bottom"){const t=wd[e]||wd.bottom;return new ft(t,{depth:n,bevelEnabled:!1,steps:1})}function Nv(n){return new ft(Dv,{depth:n,bevelEnabled:!1,steps:1})}function Bv(n){return new ft(Iv,{depth:n,bevelEnabled:!1,steps:1})}function Ov(){const n=new mt,e=7.5,t=15,i=3,s=1.5,o=5,r=4.5;n.moveTo(e,t),n.lineTo(e,i),n.lineTo(e-s,i),n.lineTo(e-s,o),n.lineTo(e-r,o),n.lineTo(e-r,-o),n.lineTo(e-s,-o),n.lineTo(e-s,-i),n.lineTo(e,-i),n.lineTo(e,-t),n.lineTo(-e,-t),n.lineTo(-e,-i),n.lineTo(-e+s,-i),n.lineTo(-e+s,-o),n.lineTo(-e+r,-o),n.lineTo(-e+r,o),n.lineTo(-e+s,o),n.lineTo(-e+s,i),n.lineTo(-e,i),n.lineTo(-e,t),n.lineTo(e,t);const a=new sn;return a.absarc(0,0,2.5,0,Math.PI*2,!0),n.holes.push(a),n}const kv=Ov();function Gv(n){return new ft(kv,{depth:n,bevelEnabled:!1,steps:1})}function zv(){const n=new mt,e=20,t=3,i=1.8,s=5.5,o=5;n.moveTo(e,e),n.lineTo(e,10+t),n.lineTo(e-i,10+t),n.lineTo(e-i,10+s),n.lineTo(e-o,10+s),n.lineTo(e-o,10-s),n.lineTo(e-i,10-s),n.lineTo(e-i,10-t),n.lineTo(e,10-t),n.lineTo(e,-10+t),n.lineTo(e-i,-10+t),n.lineTo(e-i,-10+s),n.lineTo(e-o,-10+s),n.lineTo(e-o,-10-s),n.lineTo(e-i,-10-s),n.lineTo(e-i,-10-t),n.lineTo(e,-10-t),n.lineTo(e,-e),n.lineTo(10+t,-e),n.lineTo(10+t,-e+i),n.lineTo(10+s,-e+i),n.lineTo(10+s,-e+o),n.lineTo(10-s,-e+o),n.lineTo(10-s,-e+i),n.lineTo(10-t,-e+i),n.lineTo(10-t,-e),n.lineTo(-10+t,-e),n.lineTo(-10+t,-e+i),n.lineTo(-10+s,-e+i),n.lineTo(-10+s,-e+o),n.lineTo(-10-s,-e+o),n.lineTo(-10-s,-e+i),n.lineTo(-10-t,-e+i),n.lineTo(-10-t,-e),n.lineTo(-e,-e),n.lineTo(-e,-10-t),n.lineTo(-e+i,-10-t),n.lineTo(-e+i,-10-s),n.lineTo(-e+o,-10-s),n.lineTo(-e+o,-10+s),n.lineTo(-e+i,-10+s),n.lineTo(-e+i,-10+t),n.lineTo(-e,-10+t),n.lineTo(-e,10-t),n.lineTo(-e+i,10-t),n.lineTo(-e+i,10-s),n.lineTo(-e+o,10-s),n.lineTo(-e+o,10+s),n.lineTo(-e+i,10+s),n.lineTo(-e+i,10+t),n.lineTo(-e,10+t),n.lineTo(-e,e),n.lineTo(-10-t,e),n.lineTo(-10-t,e-i),n.lineTo(-10-s,e-i),n.lineTo(-10-s,e-o),n.lineTo(-10+s,e-o),n.lineTo(-10+s,e-i),n.lineTo(-10+t,e-i),n.lineTo(-10+t,e),n.lineTo(10-t,e),n.lineTo(10-t,e-i),n.lineTo(10-s,e-i),n.lineTo(10-s,e-o),n.lineTo(10+s,e-o),n.lineTo(10+s,e-i),n.lineTo(10+t,e-i),n.lineTo(10+t,e),n.lineTo(e,e);const r=[{x:10,y:10},{x:-10,y:10},{x:-10,y:-10},{x:10,y:-10}];for(const a of r){const h=new sn;h.absarc(a.x,a.y,2.25,0,Math.PI*2,!0),n.holes.push(h)}return n}const Hv=zv();function Wv(n){return new ft(Hv,{depth:n,bevelEnabled:!1,steps:1})}function ia(n,e,t=!0){const s=Math.min(2048,Math.max(256,Math.round(n*4))),o=Math.min(2048,Math.max(256,Math.round(e*4))),r=document.createElement("canvas");r.width=s,r.height=o;const a=r.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,s,o),a.fillStyle="#000000";const h=7,c=3.1/2*(s/n),f=15,m={x:35,y:35},p={x:n-35,y:35};for(let v=h/2;v<n;v+=h)for(let g=h/2;g<e;g+=h){if(t){const M=Math.hypot(v-m.x,g-m.y),x=Math.hypot(v-p.x,g-p.y);if(M<f+2.5||x<f+2.5)continue}const d=v/n*s,C=g/e*o;a.beginPath(),a.arc(d,C,c,0,Math.PI*2),a.fill()}if(t){const v=f*(s/n);a.beginPath(),a.arc(m.x/n*s,m.y/e*o,v,0,Math.PI*2),a.arc(p.x/n*s,p.y/e*o,v,0,Math.PI*2),a.fill()}const _=new Da(r);return _.wrapS=Cn,_.wrapT=Cn,_.minFilter=Yt,_.magFilter=Yt,_}function Ko(n,e){const i=Math.min(1024,Math.max(128,Math.round(n*3))),s=Math.min(2048,Math.max(256,Math.round(e*3))),o=document.createElement("canvas");o.width=i,o.height=s;const r=o.getContext("2d");r.fillStyle="rgba(235, 242, 248, 0.72)",r.fillRect(0,0,i,s);const a=document.createElement("canvas");a.width=i,a.height=s;const h=a.getContext("2d");h.fillStyle="#808080",h.fillRect(0,0,i,s);const c=6/e*s;for(let p=0;p<s;p+=c){const _=Math.min(s,p+c),v=_-p,g=r.createLinearGradient(0,p,0,_);g.addColorStop(0,"rgba(140, 165, 185, 0.95)"),g.addColorStop(.18,"rgba(255, 255, 255, 1.0)"),g.addColorStop(.5,"rgba(220, 235, 248, 0.55)"),g.addColorStop(.82,"rgba(240, 248, 255, 0.80)"),g.addColorStop(1,"rgba(140, 165, 185, 0.95)"),r.fillStyle=g,r.fillRect(0,p,i,v);const d=Math.max(1.5,Math.round(c*.12));r.fillStyle="rgba(90, 115, 135, 0.85)",r.fillRect(0,p,i,d);const C=Math.max(1.5,Math.round(c*.16));r.fillStyle="rgba(255, 255, 255, 0.98)",r.fillRect(0,p+d,i,C);const M=h.createLinearGradient(0,p,0,_);M.addColorStop(0,"#1a1a1a"),M.addColorStop(.2,"#f0f0f0"),M.addColorStop(.5,"#999999"),M.addColorStop(.8,"#d8d8d8"),M.addColorStop(1,"#1a1a1a"),h.fillStyle=M,h.fillRect(0,p,i,v)}const f=new Da(o);f.wrapS=Cn,f.wrapT=Cn,f.minFilter=Yt,f.magFilter=Yt;const m=new Da(a);return m.wrapS=Cn,m.wrapT=Cn,m.minFilter=Yt,m.magFilter=Yt,{map:f,bumpMap:m}}function Tt(n,e,t=!1,i=!1){return t?n==="2040"?"AFS-2040-5":"AFS-2020-5":n==="4040"?e==="black"?"AFS-4040-4-BK":"AFS-4040-4":n==="2060"?"AFS-2060-4":n==="2040"?i&&e==="silver"?"AFSF-2040-4":e==="black"?"AFS-2040-4-BK":"AFS-2040-4":i&&e==="silver"?"AFSF-2020-4":e==="black"?"AFS-2020-4-BK":"AFS-2020-4"}function We(n,e,t,i=!1,s=!1){const o=Math.round(e);return`${Tt(n,t,i,s)}-${o}`}class Vv{constructor(e){this.materials=e,this.root=new pt,this.root.name="CageRoot",this.frameGroup=new pt,this.frameGroup.name="Frames",this.root.add(this.frameGroup),this.panelGroup=new pt,this.panelGroup.name="Panels",this.root.add(this.panelGroup),this.doorGroup=new pt,this.doorGroup.name="Doors",this.root.add(this.doorGroup),this.feetGroup=new pt,this.feetGroup.name="Feet",this.root.add(this.feetGroup),this.perchGroup=new pt,this.perchGroup.name="Perch",this.root.add(this.perchGroup),this.caulkingGroup=new pt,this.caulkingGroup.name="Caulking",this.root.add(this.caulkingGroup),this.rubberPackingGroup=new pt,this.rubberPackingGroup.name="RubberPacking",this.root.add(this.rubberPackingGroup),this.dividerGroup=new pt,this.dividerGroup.name="RoomDivider",this.root.add(this.dividerGroup),this.ledGroup=new pt,this.ledGroup.name="LED",this.root.add(this.ledGroup),this.params={W:750,D:450,H:300,cageType:"A",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,hasFloorReinforcement:!1,floorSplitCount:2,hasBackReinforcement:!1,backSplitCount:2,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorHeaterSupport:!1,hasPerch:!1,hasRubberPacking:!1,hasRoomDivider:!1,hasBottomWideFrame:!1,hasTopWideFrame:!1,ledType:"none",ledPower:!0,ledBrightness:1,ledColorMode:"white",ledRgbColor:"#ffffff",frontWideFrame:"2x",doorHingeSide:"left",footType:"rubber",showPanels:!0,doorState:"closed",frameColor:"silver",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}},this.activeGeometries=[],this.activeTextures=[],this.activeMaterials=[],this.partsList=[]}disposeResources(){for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.activeTextures)e.dispose();this.activeTextures=[];for(const e of this.activeMaterials)e.dispose();this.activeMaterials=[]}clearGroup(e){for(;e.children.length>0;){const t=e.children[0];e.remove(t)}}addFrameMember(e,t,i,s,o="",r=null,a="bottom",h=null){let l;e==="4040"?l=Wv(t):e==="2060"?l=Bv(t):e==="2040"?l=Nv(t):e==="2020_flat"?l=Ed(t,a):l=Uv(t),l.translate(0,0,-t/2),this.activeGeometries.push(l);const c=new Z(l,r||this.materials.aluminum);return c.position.copy(i),c.rotation.copy(s),c.castShadow=!0,c.receiveShadow=!0,c.name=o,(h||this.frameGroup).add(c),c}addDoorEndCap(e,t,i,s=null,o=null,r=null){const c=new mt;c.moveTo(-20/2+2,-20/2),c.lineTo(20/2-2,-20/2),c.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),c.lineTo(20/2,20/2-2),c.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),c.lineTo(-20/2+2,20/2),c.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),c.lineTo(-20/2,-20/2+2),c.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const f={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},m=new ft(c,f);m.translate(0,0,-1.5),this.activeGeometries.push(m);const p=new Z(m,o||this.materials.endCapMaterial);return p.position.set(e,t,i),s&&p.rotation.copy(s),p.castShadow=!0,p.receiveShadow=!0,p.name="扉用エンドキャップ",(r||this.frameGroup).add(p),p}addEndCap2040(e,t,i,s=null,o=null,r=null){const c=new mt;c.moveTo(-40/2+2,-20/2),c.lineTo(40/2-2,-20/2),c.absarc(40/2-2,-20/2+2,2,-Math.PI/2,0,!1),c.lineTo(40/2,20/2-2),c.absarc(40/2-2,20/2-2,2,0,Math.PI/2,!1),c.lineTo(-40/2+2,20/2),c.absarc(-40/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),c.lineTo(-40/2,-20/2+2),c.absarc(-40/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const f={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},m=new ft(c,f);m.translate(0,0,-1.5),this.activeGeometries.push(m);const p=new Z(m,o||this.materials.endCapMaterial);return p.position.set(e,t,i),s&&p.rotation.copy(s),p.castShadow=!0,p.receiveShadow=!0,p.name="2040スペーサー用エンドキャップ",(r||this.frameGroup).add(p),p}getLatchBlackMaterial(){return this.latchBlackMaterial||(this.latchBlackMaterial=new it({color:1579034,roughness:.5,metalness:.15,name:"CP294N_Black"}),this.activeMaterials.push(this.latchBlackMaterial)),this.latchBlackMaterial}createSlideLatchMesh(e){const t=new pt,i=this.getLatchBlackMaterial(),s=new mt,o=25,r=70,a=3;s.moveTo(-o/2+a,-r/2),s.lineTo(o/2-a,-r/2),s.quadraticCurveTo(o/2,-r/2,o/2,-r/2+a),s.lineTo(o/2,r/2-a),s.quadraticCurveTo(o/2,r/2,o/2-a,r/2),s.lineTo(-o/2+a,r/2),s.quadraticCurveTo(-o/2,r/2,-o/2,r/2-a),s.lineTo(-o/2,-r/2+a),s.quadraticCurveTo(-o/2,-r/2,-o/2+a,-r/2);const h=new ft(s,{depth:8,bevelEnabled:!1});this.activeGeometries.push(h);const l=new Z(h,i);l.position.set(0,0,0),l.castShadow=!0,t.add(l);for(const O of[-25,25]){const U=new Ke(3.5,3.5,3,16);U.rotateX(Math.PI/2),this.activeGeometries.push(U);const G=new Z(U,i);G.position.set(0,O,8.5),t.add(G)}const c=new pt;c.position.set(0,0,8),t.add(c),t.userData.knobPivot=c;const f=e?-1:1,m=e?1:-1,p=new Xe(12,28,6);this.activeGeometries.push(p);const _=new Z(p,i);_.position.set(0,0,3),c.add(_);const v=new Xe(16,22,2.5);this.activeGeometries.push(v);const g=new Z(v,i);g.position.set(f*10,0,.5),g.castShadow=!0,c.add(g);const d=new mt;e?(d.moveTo(0,0),d.lineTo(-11,0),d.lineTo(-15,-2.8),d.lineTo(-12,-2.8),d.lineTo(-7,0),d.closePath()):(d.moveTo(0,0),d.lineTo(11,0),d.lineTo(15,-2.8),d.lineTo(12,-2.8),d.lineTo(7,0),d.closePath());const C=new ft(d,{depth:14,bevelEnabled:!1});C.translate(0,0,-7),C.rotateX(-Math.PI/2),this.activeGeometries.push(C);const M=new Z(C,i);M.position.set(0,0,-.75),M.castShadow=!0,c.add(M);const x=new Xe(10,24,16);this.activeGeometries.push(x);const I=new Z(x,i);I.position.set(m*4,0,8),I.castShadow=!0,c.add(I);const R=new mt;R.moveTo(0,0),R.lineTo(m*8,4),R.lineTo(m*5,10),R.lineTo(m*-2,8),R.closePath();const w=new ft(R,{depth:22,bevelEnabled:!1});w.translate(0,0,-11),w.rotateX(-Math.PI/2),this.activeGeometries.push(w);const L=new Z(w,i);L.position.set(m*4,0,16),L.castShadow=!0,c.add(L);const y=new mt;y.moveTo(0,-9),y.lineTo(12,-9),y.quadraticCurveTo(18,-9,18,0),y.quadraticCurveTo(18,9,12,9),y.lineTo(0,9),y.closePath();const b=new ft(y,{depth:3,bevelEnabled:!1});this.activeGeometries.push(b);const A=new Z(b,i);return e||(A.rotation.y=Math.PI),A.position.set(m*6,0,10),A.castShadow=!0,c.add(A),t}createStrikerAssembly(e){const t=new pt,i=this.materials.acrylic,s=this.getLatchBlackMaterial(),o=e?1:-1;for(const p of[-10,10]){const _=new Ke(10,10,5,24);_.rotateX(Math.PI/2),this.activeGeometries.push(_);const v=new Z(_,i);v.position.set(o*10,p,2.5),t.add(v);const g=new Ke(3.5,3.5,2.5,16);g.rotateX(Math.PI/2),this.activeGeometries.push(g);const d=new Z(g,s);d.position.set(o*10,p,7.5),t.add(d)}const r=new mt,h=27/2,c=38-h;if(e){r.moveTo(0,-h),r.lineTo(c,-h),r.absarc(c,0,h,-Math.PI/2,Math.PI/2,!1),r.lineTo(0,h),r.closePath();const p=7.5,_=c-1,v=c-7.5,g=new sn;g.moveTo(v,-p),g.lineTo(_,-p),g.absarc(_,0,p,-Math.PI/2,Math.PI/2,!1),g.lineTo(v,p),g.closePath(),r.holes.push(g);for(const d of[-10,10]){const C=new sn;C.absarc(10,d,2.2,0,Math.PI*2,!0),r.holes.push(C)}}else{r.moveTo(0,-h),r.lineTo(-c,-h),r.absarc(-c,0,h,-Math.PI/2,-Math.PI*1.5,!0),r.lineTo(0,h),r.closePath();const p=7.5,_=-c+1,v=-c+7.5,g=new sn;g.moveTo(v,-p),g.lineTo(_,-p),g.absarc(_,0,p,-Math.PI/2,-Math.PI*1.5,!0),g.lineTo(v,p),g.closePath(),r.holes.push(g);for(const d of[-10,10]){const C=new sn;C.absarc(-10,d,2.2,0,Math.PI*2,!0),r.holes.push(C)}}const f=new ft(r,{depth:1.5,bevelEnabled:!1});this.activeGeometries.push(f);const m=new Z(f,s);return m.position.set(0,0,5),m.castShadow=!0,t.add(m),t}addEndCap(e,t,i){const a=new mt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const h={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},l=new ft(a,h);l.translate(0,0,-1.5),this.activeGeometries.push(l);const c=new Z(l,this.materials.endCapMaterial);return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,c.name="M4エンドキャップ",this.frameGroup.add(c),c}createWireMesh(e,t,i){const s=new pt;s.name=`WireMesh_P${i}_${e}x${t}`;const o=1.6,r=Math.max(2,Math.floor(t/i)+1),a=-((r-1)*i)/2,h=new Ke(o,o,e,8);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);for(let m=0;m<r;m++){const p=new Z(h,this.materials.wireMesh);p.position.set(0,o,a+m*i),p.castShadow=!0,s.add(p)}const l=Math.max(2,Math.floor(e/i)+1),c=-((l-1)*i)/2,f=new Ke(o,o,t,8);f.rotateX(Math.PI/2),this.activeGeometries.push(f);for(let m=0;m<l;m++){const p=new Z(f,this.materials.wireMesh);p.position.set(c+m*i,-o,0),p.castShadow=!0,s.add(p)}return s}update(e){if(e&&e.panelConfig){this.params.panelConfig=Object.assign({},this.params.panelConfig,e.panelConfig);const he={...e};delete he.panelConfig,Object.assign(this.params,he)}else e&&Object.assign(this.params,e);const{W:t,D:i,H:s,cageType:o,frontWindowH:r,hasSideReinforcement:a,sideOpeningH:h,showPanels:l,frameColor:c,hasFloorReinforcement:f,floorSplitCount:m,hasBackReinforcement:p,backSplitCount:_,hasTopReinforcement:v,footType:g,doorHingeSide:d,hasFloorHeaterSupport:C}=this.params,M=c==="silver",x=(t-80)/3,I=-t/2+30+x,R=t/2-30-x;c&&this.materials.setFrameColor(c),this.clearGroup(this.frameGroup),this.clearGroup(this.panelGroup),this.clearGroup(this.doorGroup),this.clearGroup(this.feetGroup),this.clearGroup(this.perchGroup),this.clearGroup(this.dividerGroup),this.clearGroup(this.caulkingGroup),this.clearGroup(this.rubberPackingGroup),this.clearGroup(this.ledGroup),this.disposeResources(),this._doorAnim=null,this.partsList=[];const w=new Rt(0,0,0),L=new Rt(0,Math.PI/2,0),y=new Rt(Math.PI/2,0,0),b=o==="A"||o==="A_FRAMED"||o==="C"||o==="C_FRAMED",A=o==="A",O=b&&!!this.params.hasBottomWideFrame,U=b&&!!this.params.hasTopWideFrame,G=O&&U,B=O?40:20,Y=U?40:20,z=Math.max(10,i-6),N=Math.max(10,s-B-Y),ee=B+N/2;if(o==="A_FRAMED"){O?(this.addFrameMember("2040",z,new T(-t/2+10,20,0),w,"床・左2040 (外周幅広)"),this.addFrameMember("2040",z,new T(t/2-10,20,0),w,"床・右2040 (外周幅広)"),this.recordPart(We("2040",z,c),z,2,"床面 左右通し (2040・前後3mm短縮・キャップ取付)","frame")):(this.addFrameMember("2020",z,new T(-t/2+10,10,0),w,"床・左2020"),this.addFrameMember("2020",z,new T(t/2-10,10,0),w,"床・右2020"),this.recordPart(We("2020",z,c),z,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame"));const he=Math.max(10,t-40);this.addFrameMember("4040",he,new T(0,20,i/2-20),L,"床・正面4040 (枠囲い下部)"),this.recordPart(We("4040",he,c),he,1,"正面下部 40x40枠囲い (AFS-4040-4)","frame");const Ae=Math.max(10,t-40);if(O?(this.addFrameMember("2040",Ae,new T(0,20,-i/2+10),L,"床・背面2040 (外周幅広)"),this.recordPart(We("2040",Ae,c),Ae,1,"床面 背面 2040 (外周幅広)","frame")):(this.addFrameMember("2020",Ae,new T(0,10,-i/2+10),L,"床・背面2020"),this.recordPart(We("2020",Ae,c),Ae,1,"床面 背面","frame")),f){const oe=Math.max(10,i-60),Q=M?"2020_flat":"2020";m===3?(this.addFrameMember(Q,oe,new T(I,10,-10),w,"床・補強2020(左)",null,"top"),this.addFrameMember(Q,oe,new T(R,10,-10),w,"床・補強2020(右)",null,"top"),this.recordPart(We("2020",oe,c,!1,!0),oe,2,"床面 補強フレーム (3分割・D-60mm)","frame")):(this.addFrameMember(Q,oe,new T(0,10,-10),w,"床・中央補強2020",null,"top"),this.recordPart(We("2020",oe,c,!1,!0),oe,1,"床面 中央補強 (2分割・D-60mm)","frame"))}if(G?(this.addFrameMember("2040",N,new T(-t/2+10,ee,-i/2+20),y,"柱・奥左2040 (外周幅広)"),this.addFrameMember("2040",N,new T(t/2-10,ee,-i/2+20),y,"柱・奥右2040 (外周幅広)"),this.recordPart(We("2040",N,c),N,2,"柱 (奥2隅・2040・奥行40mm)","frame")):(this.addFrameMember("2020",N,new T(-t/2+10,ee,-i/2+10),y,"柱・奥左2020"),this.addFrameMember("2020",N,new T(t/2-10,ee,-i/2+10),y,"柱・奥右2020"),this.recordPart(We("2020",N,c),N,2,"柱 (奥2隅)","frame")),p){const oe=M?"2020_flat":"2020";_===3?(this.addFrameMember(oe,N,new T(I,ee,-i/2+10),y,"背面・補強2020(左)"),this.addFrameMember(oe,N,new T(R,ee,-i/2+10),y,"背面・補強2020(右)"),this.recordPart(We("2020",N,c,!1,!0),N,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(oe,N,new T(0,ee,-i/2+10),y,"背面・中央補強2020"),this.recordPart(We("2020",N,c,!1,!0),N,1,"背面 中央補強 (2分割)","frame"))}this.addFrameMember("2040",N,new T(-t/2+10,ee,i/2-20),y,"柱・手前左2040"),this.addFrameMember("2040",N,new T(t/2-10,ee,i/2-20),y,"柱・手前右2040"),this.recordPart(We("2040",N,c),N,2,"柱・正面枠囲い (2040・奥行40mm)","frame");const me=v||t>940,Ee=this.params.panelConfig||{};let te=!1;if(me){const oe=!!(Ee.topLeft&&Ee.topLeft.startsWith("mesh")),Q=!!(Ee.topRight&&Ee.topRight.startsWith("mesh"));te=oe||Q}else te=!!(Ee.top&&Ee.top.startsWith("mesh"));const K=M&&te;if(U){const oe=K?"AFS-2040-5":Tt("2040",c),Q=`${oe}-${z}`,re=K?"天面 左右通し (2040・天面金網受用・AFS-2040-5)":"天面 左右通し (2040・前後3mm短縮・キャップ取付)";this.addFrameMember("2040",z,new T(-t/2+10,s-20,0),w,"天面・左2040 (外周幅広)"),this.addFrameMember("2040",z,new T(t/2-10,s-20,0),w,"天面・右2040 (外周幅広)"),this.recordPart(Q,z,2,re,"frame",{partCode:oe,lengthMm:z,unitType:"m"})}else{const oe=K?"AFS-2020-5":Tt("2020",c),Q=`${oe}-${z}`,re=K?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",z,new T(-t/2+10,s-10,0),w,"天面・左2020"),this.addFrameMember("2020",z,new T(t/2-10,s-10,0),w,"天面・右2020"),this.recordPart(Q,z,2,re,"frame",{partCode:oe,lengthMm:z,unitType:"m"})}const D=Math.max(10,t-40);if(U){const oe=K?"AFS-2040-5":Tt("2040",c),Q=`${oe}-${D}`,re=K?"天面 背面 (2040・天面金網受用・AFS-2040-5)":"天面 背面 2040 (外周幅広)";this.addFrameMember("2040",D,new T(0,s-20,-i/2+10),L,"天面・背面2040 (外周幅広)"),this.recordPart(Q,D,1,re,"frame",{partCode:oe,lengthMm:D,unitType:"m"})}else{const oe=K?"AFS-2020-5":Tt("2020",c),Q=`${oe}-${D}`,re=K?"天面 背面 (天面金網受用・AFS-2020-5)":"天面 背面";this.addFrameMember("2020",D,new T(0,s-10,-i/2+10),L,"天面・背面2020"),this.recordPart(Q,D,1,re,"frame",{partCode:oe,lengthMm:D,unitType:"m"})}if(U)this.addFrameMember("4040",he,new T(0,s-20,i/2-20),L,"天面・正面4040 (枠囲い上部・幅広)"),this.recordPart(We("4040",he,c),he,1,"正面上部 40x40枠囲い (AFS-4040-4)","frame");else{const oe=K?"AFS-2040-5":Tt("2040",c),Q=`${oe}-${he}`,re=K?"正面上部 2040横向き (天面金網受用・AFS-2040-5)":"正面上部 2040横向き (奥行40mm・AFS-2040-4)",ne=new lt().makeBasis(new T(0,1,0),new T(0,0,1),new T(1,0,0)),xe=new Rt().setFromRotationMatrix(ne);this.addFrameMember("2040",he,new T(0,s-10,i/2-20),xe,"天面・手前2040 (横向き枠囲い上部)"),this.recordPart(Q,he,1,re,"frame",{partCode:oe,lengthMm:he,unitType:"m"})}if(v||t>940){const oe=Math.max(10,i-60),Q=K?"AFS-2020-5":Tt("2020",c,!1,!0),re=`${Q}-${oe}`,ne=K?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割・D-60mm)",xe=M&&!K?"2020_flat":"2020";this.addFrameMember(xe,oe,new T(0,s-10,-10),w,"天面・中央補強2020",null,"bottom"),this.recordPart(re,oe,1,ne,"frame",{partCode:Q,lengthMm:oe,unitType:"m"})}}else if(o==="C_FRAMED"){O?(this.addFrameMember("2040",z,new T(-t/2+10,20,0),w,"床・左2040 (外周幅広)"),this.addFrameMember("2040",z,new T(t/2-10,20,0),w,"床・右2040 (外周幅広)"),this.recordPart(We("2040",z,c),z,2,"床面 左右通し (2040・前後3mm短縮・キャップ取付)","frame")):(this.addFrameMember("2020",z,new T(-t/2+10,10,0),w,"床・左2020"),this.addFrameMember("2020",z,new T(t/2-10,10,0),w,"床・右2020"),this.recordPart(We("2020",z,c),z,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame"));const he=new lt().makeBasis(new T(0,1,0),new T(0,0,1),new T(1,0,0)),Ae=new Rt().setFromRotationMatrix(he),me=Math.max(10,t-40);if(O)this.addFrameMember("4040",me,new T(0,20,i/2-20),L,"床・正面4040 (枠囲い下部・幅広)"),this.recordPart(We("4040",me,c),me,1,"正面下部 40x40枠囲い (AFS-4040-4)","frame");else{const E=Tt("2040",c),S=`${E}-${me}`;this.addFrameMember("2040",me,new T(0,10,i/2-20),Ae,"床・正面2040 (横向き枠囲い下部)"),this.recordPart(S,me,1,"床面 正面 2040横向き (枠囲い下部・AFS-2040-4)","frame",{partCode:E,lengthMm:me,unitType:"m"})}const Ee=Math.max(10,t-40);if(O?(this.addFrameMember("2040",Ee,new T(0,20,-i/2+10),L,"床・背面2040 (外周幅広)"),this.recordPart(We("2040",Ee,c),Ee,1,"床面 背面 2040 (外周幅広)","frame")):(this.addFrameMember("2020",Ee,new T(0,10,-i/2+10),L,"床・背面2020"),this.recordPart(We("2020",Ee,c),Ee,1,"床面 背面","frame")),f){const E=Math.max(10,i-60),S=M?"2020_flat":"2020";m===3?(this.addFrameMember(S,E,new T(I,10,-10),w,"床・補強2020(左)",null,"top"),this.addFrameMember(S,E,new T(R,10,-10),w,"床・補強2020(右)",null,"top"),this.recordPart(We("2020",E,c,!1,!0),E,2,"床面 補強フレーム (3分割・D-60mm)","frame")):(this.addFrameMember(S,E,new T(0,10,-10),w,"床・中央補強2020",null,"top"),this.recordPart(We("2020",E,c,!1,!0),E,1,"床面 中央補強 (2分割・D-60mm)","frame"))}if(G?(this.addFrameMember("2040",N,new T(-t/2+10,ee,-i/2+20),y,"柱・奥左2040 (外周幅広)"),this.addFrameMember("2040",N,new T(t/2-10,ee,-i/2+20),y,"柱・奥右2040 (外周幅広)"),this.recordPart(We("2040",N,c),N,2,"柱 (奥2隅・2040・奥行40mm)","frame")):(this.addFrameMember("2020",N,new T(-t/2+10,ee,-i/2+10),y,"柱・奥左2020"),this.addFrameMember("2020",N,new T(t/2-10,ee,-i/2+10),y,"柱・奥右2020"),this.recordPart(We("2020",N,c),N,2,"柱 (奥2隅)","frame")),p){const E=M?"2020_flat":"2020";_===3?(this.addFrameMember(E,N,new T(I,ee,-i/2+10),y,"背面・補強2020(左)"),this.addFrameMember(E,N,new T(R,ee,-i/2+10),y,"背面・補強2020(右)"),this.recordPart(We("2020",N,c,!1,!0),N,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(E,N,new T(0,ee,-i/2+10),y,"背面・中央補強2020"),this.recordPart(We("2020",N,c,!1,!0),N,1,"背面 中央補強 (2分割)","frame"))}this.addFrameMember("2040",N,new T(-t/2+10,ee,i/2-20),y,"柱・手前左2040"),this.addFrameMember("2040",N,new T(t/2-10,ee,i/2-20),y,"柱・手前右2040"),this.recordPart(We("2040",N,c),N,2,"柱・正面枠囲い (2040・奥行40mm)","frame");const te=B+r+10,K=Math.max(10,t-40),D=Tt("2040",c),oe=`${D}-${K}`;this.addFrameMember("2040",K,new T(0,te,i/2-20),Ae,"正面・中桟2040 (前窓上・横向き枠囲いレール受)"),this.recordPart(oe,K,1,"正面中桟 2040横向き (前窓上・枠囲い扉レール受)","frame",{partCode:D,lengthMm:K,unitType:"m"});const Q=v||t>940,re=this.params.panelConfig||{};let ne=!1;if(Q){const E=!!(re.topLeft&&re.topLeft.startsWith("mesh")),S=!!(re.topRight&&re.topRight.startsWith("mesh"));ne=E||S}else ne=!!(re.top&&re.top.startsWith("mesh"));const xe=M&&ne;if(U){const E=xe?"AFS-2040-5":Tt("2040",c),S=`${E}-${z}`,F=xe?"天面 左右通し (2040・天面金網受用・AFS-2040-5)":"天面 左右通し (2040・前後3mm短縮・キャップ取付)";this.addFrameMember("2040",z,new T(-t/2+10,s-20,0),w,"天面・左2040 (外周幅広)"),this.addFrameMember("2040",z,new T(t/2-10,s-20,0),w,"天面・右2040 (外周幅広)"),this.recordPart(S,z,2,F,"frame",{partCode:E,lengthMm:z,unitType:"m"})}else{const E=xe?"AFS-2020-5":Tt("2020",c),S=`${E}-${z}`,F=xe?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",z,new T(-t/2+10,s-10,0),w,"天面・左2020"),this.addFrameMember("2020",z,new T(t/2-10,s-10,0),w,"天面・右2020"),this.recordPart(S,z,2,F,"frame",{partCode:E,lengthMm:z,unitType:"m"})}const _e=Math.max(10,t-40);if(U){const E=xe?"AFS-2040-5":Tt("2040",c),S=`${E}-${_e}`,F=xe?"天面 背面 (2040・天面金網受用・AFS-2040-5)":"天面 背面 2040 (外周幅広)";this.addFrameMember("2040",_e,new T(0,s-20,-i/2+10),L,"天面・背面2040 (外周幅広)"),this.recordPart(S,_e,1,F,"frame",{partCode:E,lengthMm:_e,unitType:"m"})}else{const E=xe?"AFS-2020-5":Tt("2020",c),S=`${E}-${_e}`,F=xe?"天面 背面 (天面金網受用・AFS-2020-5)":"天面 背面";this.addFrameMember("2020",_e,new T(0,s-10,-i/2+10),L,"天面・背面2020"),this.recordPart(S,_e,1,F,"frame",{partCode:E,lengthMm:_e,unitType:"m"})}if(U)this.addFrameMember("4040",me,new T(0,s-20,i/2-20),L,"天面・正面4040 (枠囲い上部・幅広)"),this.recordPart(We("4040",me,c),me,1,"正面上部 40x40枠囲い (AFS-4040-4)","frame");else{const E=xe?"AFS-2040-5":Tt("2040",c),S=`${E}-${me}`,F=xe?"正面上部 2040横向き (天面金網受用・AFS-2040-5)":"正面上部 2040横向き (奥行40mm・AFS-2040-4)";this.addFrameMember("2040",me,new T(0,s-10,i/2-20),Ae,"天面・手前2040 (横向き枠囲い上部)"),this.recordPart(S,me,1,F,"frame",{partCode:E,lengthMm:me,unitType:"m"})}if(v||t>940){const E=Math.max(10,i-60),S=xe?"AFS-2020-5":Tt("2020",c,!1,!0),F=`${S}-${E}`,H=xe?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割・D-60mm)",W=M&&!xe?"2020_flat":"2020";this.addFrameMember(W,E,new T(0,s-10,-10),w,"天面・中央補強2020",null,"bottom"),this.recordPart(F,E,1,H,"frame",{partCode:S,lengthMm:E,unitType:"m"})}}else if(o==="A"||o==="A_FRONT"){const he=Math.max(10,s-B-Y),Ae=B+he/2;O?(this.addFrameMember("2040",z,new T(-t/2+10,20,0),w,"床・左2040 (外周幅広)"),this.addFrameMember("2040",z,new T(t/2-10,20,0),w,"床・右2040 (外周幅広)"),this.recordPart(We("2040",z,c),z,2,"床面 左右通し (2040・前後3mm短縮・キャップ取付)","frame")):(this.addFrameMember("2020",z,new T(-t/2+10,10,0),w,"床・左2020"),this.addFrameMember("2020",z,new T(t/2-10,10,0),w,"床・右2020"),this.recordPart(We("2020",z,c),z,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame"));const me=Math.max(10,t-40),Ee=this.params.frontWideFrame||"2x";Ee==="3x"?c==="black"?(this.addFrameMember("2040",me,new T(0,20,i/2-10),L,"床・正面2040 (3倍幅下段)"),this.recordPart(We("2040",me,"black"),me,1,"床面 正面 3倍幅下段 (40mm幅・ブラック)","frame"),this.addFrameMember("2020",me,new T(0,50,i/2-10),L,"床・正面2020 (3倍幅上段)"),this.recordPart(We("2020",me,"black"),me,1,"床面 正面 3倍幅上段 (20mm幅・ブラック2段構成)","frame")):(this.addFrameMember("2060",me,new T(0,30,i/2-10),L,"床・正面2060 (3倍幅)"),this.recordPart(We("2060",me,"silver"),me,1,"床面 正面 3倍幅 (AFS-2060-4)","frame")):Ee==="2x"?(this.addFrameMember("2040",me,new T(0,20,i/2-10),L,"床・正面2040 (2倍幅)"),this.recordPart(We("2040",me,c),me,1,"床面 正面 2倍幅 (AFS-2040・内側)","frame")):(this.addFrameMember("2020",me,new T(0,10,i/2-10),L,"床・正面2020 (標準幅)"),this.recordPart(We("2020",me,c),me,1,"床面 正面 (標準2020)","frame"));const te=Math.max(10,t-40);if(O?(this.addFrameMember("2040",te,new T(0,20,-i/2+10),L,"床・背面2040 (外周幅広)"),this.recordPart(We("2040",te,c),te,1,"床面 背面 2040 (外周幅広)","frame")):(this.addFrameMember("2020",te,new T(0,10,-i/2+10),L,"床・背面2020"),this.recordPart(We("2020",te,c),te,1,"床面 背面","frame")),f){const _e=Math.max(10,i-40),E=M?"2020_flat":"2020";m===3?(this.addFrameMember(E,_e,new T(I,10,0),w,"床・補強2020(左)",null,"top"),this.addFrameMember(E,_e,new T(R,10,0),w,"床・補強2020(右)",null,"top"),this.recordPart(We("2020",_e,c,!1,!0),_e,2,"床面 補強フレーム (3分割)","frame")):(this.addFrameMember(E,_e,new T(0,10,0),w,"床・中央補強2020",null,"top"),this.recordPart(We("2020",_e,c,!1,!0),_e,1,"床面 中央補強 (2分割)","frame"))}const K=A?he:N,D=A?Ae:ee;if(G?(this.addFrameMember("2040",K,new T(-t/2+10,D,i/2-20),y,"柱・手前左2040 (外周幅広)"),this.addFrameMember("2040",K,new T(t/2-10,D,i/2-20),y,"柱・手前右2040 (外周幅広)"),this.addFrameMember("2040",K,new T(-t/2+10,D,-i/2+20),y,"柱・奥左2040 (外周幅広)"),this.addFrameMember("2040",K,new T(t/2-10,D,-i/2+20),y,"柱・奥右2040 (外周幅広)"),this.recordPart(We("2040",K,c),K,4,"柱 (4隅・2040・奥行40mm)","frame")):(this.addFrameMember("2020",K,new T(-t/2+10,D,i/2-10),y,"柱・手前左"),this.addFrameMember("2020",K,new T(t/2-10,D,i/2-10),y,"柱・手前右"),this.addFrameMember("2020",K,new T(-t/2+10,D,-i/2+10),y,"柱・奥左"),this.addFrameMember("2020",K,new T(t/2-10,D,-i/2+10),y,"柱・奥右"),this.recordPart(We("2020",K,c),K,4,"柱 (4隅・床奥行き乗せ)","frame")),p){const _e=M?"2020_flat":"2020";_===3?(this.addFrameMember(_e,K,new T(I,D,-i/2+10),y,"背面・補強2020(左)"),this.addFrameMember(_e,K,new T(R,D,-i/2+10),y,"背面・補強2020(右)"),this.recordPart(We("2020",K,c,!1,!0),K,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(_e,K,new T(0,D,-i/2+10),y,"背面・中央補強2020"),this.recordPart(We("2020",K,c,!1,!0),K,1,"背面 中央補強 (2分割)","frame"))}const oe=v||t>940,Q=this.params.panelConfig||{};let re=!1;if(oe){const _e=!!(Q.topLeft&&Q.topLeft.startsWith("mesh")),E=!!(Q.topRight&&Q.topRight.startsWith("mesh"));re=_e||E}else re=!!(Q.top&&Q.top.startsWith("mesh"));const ne=M&&re;if(U){const _e=ne?"AFS-2040-5":Tt("2040",c),E=`${_e}-${z}`,S=ne?"天面 左右通し (2040・天面金網受用・AFS-2040-5)":"天面 左右通し (2040・前後3mm短縮・キャップ取付)";this.addFrameMember("2040",z,new T(-t/2+10,s-20,0),w,"天面・左2040 (外周幅広)"),this.addFrameMember("2040",z,new T(t/2-10,s-20,0),w,"天面・右2040 (外周幅広)"),this.recordPart(E,z,2,S,"frame",{partCode:_e,lengthMm:z,unitType:"m"})}else{const _e=ne?"AFS-2020-5":Tt("2020",c),E=`${_e}-${z}`,S=ne?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",z,new T(-t/2+10,s-10,0),w,"天面・左2020"),this.addFrameMember("2020",z,new T(t/2-10,s-10,0),w,"天面・右2020"),this.recordPart(E,z,2,S,"frame",{partCode:_e,lengthMm:z,unitType:"m"})}const xe=Math.max(10,t-40);if(U){const _e=ne?"AFS-2040-5":Tt("2040",c),E=`${_e}-${xe}`,S=ne?"天面 前後 (2040・天面金網受用・AFS-2040-5)":"天面 前後 (2040・外周幅広)";this.addFrameMember("2040",xe,new T(0,s-20,-i/2+10),L,"天面・背面2040 (外周幅広)"),this.addFrameMember("2040",xe,new T(0,s-20,i/2-10),L,"天面・手前2040 (外周幅広)"),this.recordPart(E,xe,2,S,"frame",{partCode:_e,lengthMm:xe,unitType:"m"})}else{const _e=ne?"AFS-2020-5":Tt("2020",c),E=`${_e}-${xe}`,S=ne?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";this.addFrameMember("2020",xe,new T(0,s-10,-i/2+10),L,"天面・背面2020"),this.addFrameMember("2020",xe,new T(0,s-10,i/2-10),L,"天面・手前2020"),this.recordPart(E,xe,2,S,"frame",{partCode:_e,lengthMm:xe,unitType:"m"})}if(v||t>940){const _e=Math.max(10,i-40),E=ne?"AFS-2020-5":Tt("2020",c,!1,!0),S=`${E}-${_e}`,F=ne?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",H=M&&!ne?"2020_flat":"2020";this.addFrameMember(H,_e,new T(0,s-10,0),w,"天面・中央補強2020",null,"bottom"),this.recordPart(S,_e,1,F,"frame",{partCode:E,lengthMm:_e,unitType:"m"})}}else{O?(this.addFrameMember("2040",z,new T(-t/2+10,20,0),w,"床・左2040 (外周幅広)"),this.addFrameMember("2040",z,new T(t/2-10,20,0),w,"床・右2040 (外周幅広)"),this.recordPart(We("2040",z,c),z,2,"床面 左右通し (2040・前後3mm短縮・キャップ取付)","frame")):(this.addFrameMember("2020",z,new T(-t/2+10,10,0),w,"床・左2020"),this.addFrameMember("2020",z,new T(t/2-10,10,0),w,"床・右2020"),this.recordPart(We("2020",z,c),z,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame"));const he=Math.max(10,t-40);if(O?(this.addFrameMember("2040",he,new T(0,20,i/2-10),L,"床・手前2040 (外周幅広)"),this.recordPart(We("2040",he,c),he,1,"床面 正面 2040 (外周幅広)","frame"),this.addFrameMember("2040",he,new T(0,20,-i/2+10),L,"床・背面2040 (外周幅広)"),this.recordPart(We("2040",he,c),he,1,"床面 背面 2040 (外周幅広)","frame")):(this.addFrameMember("2020",he,new T(0,10,i/2-10),L,"床・手前2020"),this.addFrameMember("2020",he,new T(0,10,-i/2+10),L,"床・背面2020"),this.recordPart(We("2020",he,c),he,2,"床面 前後","frame")),f){const re=Math.max(10,i-40),ne=M?"2020_flat":"2020";m===3?(this.addFrameMember(ne,re,new T(I,10,0),w,"床・補強2020(左)",null,"top"),this.addFrameMember(ne,re,new T(R,10,0),w,"床・補強2020(右)",null,"top"),this.recordPart(We("2020",re,c,!1,!0),re,2,"床面 補強フレーム (3分割)","frame")):(this.addFrameMember(ne,re,new T(0,10,0),w,"床・中央補強2020",null,"top"),this.recordPart(We("2020",re,c,!1,!0),re,1,"床面 中央補強 (2分割)","frame"))}if(G?(this.addFrameMember("2040",N,new T(-t/2+10,ee,i/2-20),y,"柱・手前左2040 (外周幅広)"),this.addFrameMember("2040",N,new T(t/2-10,ee,i/2-20),y,"柱・手前右2040 (外周幅広)"),this.addFrameMember("2040",N,new T(-t/2+10,ee,-i/2+20),y,"柱・奥左2040 (外周幅広)"),this.addFrameMember("2040",N,new T(t/2-10,ee,-i/2+20),y,"柱・奥右2040 (外周幅広)"),this.recordPart(We("2040",N,c),N,4,"柱 (4隅・2040・奥行40mm)","frame")):(this.addFrameMember("2020",N,new T(-t/2+10,ee,i/2-10),y,"柱・手前左"),this.addFrameMember("2020",N,new T(t/2-10,ee,i/2-10),y,"柱・手前右"),this.addFrameMember("2020",N,new T(-t/2+10,ee,-i/2+10),y,"柱・奥左"),this.addFrameMember("2020",N,new T(t/2-10,ee,-i/2+10),y,"柱・奥右"),this.recordPart(We("2020",N,c),N,4,"柱 (4隅)","frame")),p){const re=M?"2020_flat":"2020";_===3?(this.addFrameMember(re,N,new T(I,ee,-i/2+10),y,"背面・補強2020(左)"),this.addFrameMember(re,N,new T(R,ee,-i/2+10),y,"背面・補強2020(右)"),this.recordPart(We("2020",N,c,!1,!0),N,2,"背面 補強フレーム (3分割)","frame")):(this.addFrameMember(re,N,new T(0,ee,-i/2+10),y,"背面・中央補強2020"),this.recordPart(We("2020",N,c,!1,!0),N,1,"背面 中央補強 (2分割)","frame"))}const Ae=v||t>940,me=this.params.panelConfig||{};let Ee=!1;if(Ae){const re=!!(me.topLeft&&me.topLeft.startsWith("mesh")),ne=!!(me.topRight&&me.topRight.startsWith("mesh"));Ee=re||ne}else Ee=!!(me.top&&me.top.startsWith("mesh"));const te=M&&Ee;if(U){const re=te?"AFS-2040-5":Tt("2040",c),ne=`${re}-${z}`,xe=te?"天面 左右通し (2040・天面金網受用・AFS-2040-5)":"天面 左右通し (2040・前後3mm短縮・キャップ取付)";this.addFrameMember("2040",z,new T(-t/2+10,s-20,0),w,"天面・左2040 (外周幅広)"),this.addFrameMember("2040",z,new T(t/2-10,s-20,0),w,"天面・右2040 (外周幅広)"),this.recordPart(ne,z,2,xe,"frame",{partCode:re,lengthMm:z,unitType:"m"})}else{const re=te?"AFS-2020-5":Tt("2020",c),ne=`${re}-${z}`,xe=te?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",z,new T(-t/2+10,s-10,0),w,"天面・左2020"),this.addFrameMember("2020",z,new T(t/2-10,s-10,0),w,"天面・右2020"),this.recordPart(ne,z,2,xe,"frame",{partCode:re,lengthMm:z,unitType:"m"})}const K=Math.max(10,t-40);if(U){const re=te?"AFS-2040-5":Tt("2040",c),ne=`${re}-${K}`,xe=te?"天面 前後 (2040・天面金網受用・AFS-2040-5)":"天面 前後 (2040・外周幅広)";this.addFrameMember("2040",K,new T(0,s-20,-i/2+10),L,"天面・背面2040 (外周幅広)"),this.addFrameMember("2040",K,new T(0,s-20,i/2-10),L,"天面・手前2040 (外周幅広)"),this.recordPart(ne,K,2,xe,"frame",{partCode:re,lengthMm:K,unitType:"m"})}else{const re=te?"AFS-2020-5":Tt("2020",c),ne=`${re}-${K}`,xe=te?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";this.addFrameMember("2020",K,new T(0,s-10,-i/2+10),L,"天面・背面2020"),this.addFrameMember("2020",K,new T(0,s-10,i/2-10),L,"天面・手前2020"),this.recordPart(ne,K,2,xe,"frame",{partCode:re,lengthMm:K,unitType:"m"})}if(v||t>940){const re=Math.max(10,i-40),ne=te?"AFS-2020-5":Tt("2020",c,!1,!0),xe=`${ne}-${re}`,_e=te?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",E=M&&!te?"2020_flat":"2020";this.addFrameMember(E,re,new T(0,s-10,0),w,"天面・中央補強2020",null,"bottom"),this.recordPart(xe,re,1,_e,"frame",{partCode:ne,lengthMm:re,unitType:"m"})}const D=B+r+10,oe=Math.max(10,t-40),Q=M?"2020_flat":"2020";this.addFrameMember(Q,oe,new T(0,D,i/2-10),L,"正面・中桟2020",null,"right"),this.recordPart(We("2020",oe,c,!1,!0),oe,1,"正面 中桟 (レール受け)","frame")}const ae=new Rt(0,0,Math.PI/2),ge=M?this.materials.perchGrayCap:this.materials.endCapMaterial,Ce=O?20:10,Be=[{x:-t/2+10,y:Ce,z:i/2-1.5},{x:t/2-10,y:Ce,z:i/2-1.5},{x:-t/2+10,y:Ce,z:-i/2+1.5},{x:t/2-10,y:Ce,z:-i/2+1.5}];for(const he of Be)O?this.addEndCap2040(he.x,he.y,he.z,ae,ge):this.addEndCap(he.x,he.y,he.z);const j=U?s-20:s-10,le=[{x:-t/2+10,y:j,z:i/2-1.5},{x:t/2-10,y:j,z:i/2-1.5},{x:-t/2+10,y:j,z:-i/2+1.5},{x:t/2-10,y:j,z:-i/2+1.5}];for(const he of le)U?this.addEndCap2040(he.x,he.y,he.z,ae,ge):this.addEndCap(he.x,he.y,he.z);const Me=(O?4:0)+(U?4:0),pe=8-Me;if(pe>0){const he=M?"ECP-2020-4-GY":"ECP-2020-4";this.recordPart(he,"-",pe,"奥行きフレーム端部 (2020用)","frame",{partCode:he,lengthMm:null,unitType:"piece"})}if(Me>0){const he=M?"ECP-2040-4-GY":"ECP-2040-4";this.recordPart(he,"-",Me,"奥行きフレーム端部 (2040幅広用)","frame",{partCode:he,lengthMm:null,unitType:"piece"})}if(a){const he=o==="A_FRAMED"||o==="C_FRAMED",Ae=Math.max(10,G?i-80:he?i-60:i-40),me=G?0:he?-10:0,Ee=h,te=Math.max(10,s-B-Y-20-Ee),K=B+te+10,D=M?"2020_flat":"2020";this.addFrameMember(D,Ae,new T(-t/2+10,K,me),w,"側面補強・左2020",null,"right"),this.addFrameMember(D,Ae,new T(t/2-10,K,me),w,"側面補強・右2020",null,"left");const oe=G?" (D-80mm・外周幅広)":he?" (D-60mm)":"";this.recordPart(We("2020",Ae,c,!1,!0),Ae,2,`側面 補強フレーム (左右${oe})`,"frame")}this.buildPanels(L,w),this.buildDoors(),this.buildDoorPartsRecord(),this.params.footType==="caster"?this.buildCasters():this.buildFeet(),this.params.hasPerch&&this.buildPerch(),this.buildCaulking(),this.params.hasRubberPacking&&this.buildRubberPacking(),this.params.hasRoomDivider&&this.buildRoomDivider(),this.params.ledType&&this.params.ledType!=="none"&&this.buildLed(),this.panelGroup.visible=l,this.doorGroup.visible=l,this.caulkingGroup.visible=l,this.rubberPackingGroup.visible=l,this.dividerGroup.visible=l,this.ledGroup.visible=!0}buildPanels(e,t){const{W:i,D:s,H:o,cageType:r,frontWindowH:a,hasSideReinforcement:h,sideOpeningH:l,hasFloorReinforcement:c,floorSplitCount:f,hasBackReinforcement:m,backSplitCount:p,hasTopReinforcement:_,frameColor:v}=this.params,g=this.params.panelConfig||{},d=3,C=g.floor||"acrylic",M=g.back||"acrylic",x=g.side||"acrylic",I=g.sideUpper||"punching",R=g.sideLower||"acrylic",w=g.top||"punching",L=g.topLeft||"punching",y=g.topRight||"punching",b=(i-80)/3,A=-i/2+30+b,O=i/2-30-b,U=r==="A_FRAMED"||r==="C_FRAMED",G=U?s-50:s-30,B=U?-10:0,Y=C==="black_matte",z=C==="smoke_gray";let N=this.materials.acrylic,ee="透明アクリル 3.0mm 底板",ae="acrylic_extrusion_3_0";if(Y?(N=this.materials.blackMatteAcrylic,ee="アクリル黒両面マット 3.0mm 底板",ae="acrylic_black_matte_3_0"):z&&(N=this.materials.smokeGrayAcrylic,ee="アクリル グレースモーク半透明 3.0mm 底板",ae="acrylic_smoke_gray_3_0"),c)if(f===3){const F=(i-80)/3,H=Math.round(F+10),W=new Xe(H,d,G);this.activeGeometries.push(W);const $=new Z(W,N);$.position.set(-i/2+20+F/2,20-d/2,B),this.panelGroup.add($);const de=new Z(W,N);de.position.set(0,20-d/2,B),this.panelGroup.add(de);const fe=new Z(W,N);fe.position.set(i/2-20-F/2,20-d/2,B),this.panelGroup.add(fe),this.recordPart(ee,`${H} x ${G} mm`,3,"床面 (3分割)","panel",{panelCode:ae,partCode:ae,widthMm:H,heightMm:G,unitType:"m2"})}else{const F=(i-60)/2,H=Math.round(F+10),W=new Xe(H,d,G);this.activeGeometries.push(W);const $=new Z(W,N);$.position.set(-F/2-10,20-d/2,B),this.panelGroup.add($);const de=new Z(W,N);de.position.set(F/2+10,20-d/2,B),this.panelGroup.add(de),this.recordPart(ee,`${H} x ${G} mm`,2,"床面 (2分割)","panel",{panelCode:ae,partCode:ae,widthMm:H,heightMm:G,unitType:"m2"})}else{const F=i-30,H=new Xe(F,d,G);this.activeGeometries.push(H);const W=new Z(H,N);W.position.set(0,20-d/2,B),this.panelGroup.add(W),this.recordPart(ee,`${F} x ${G} mm`,1,"床面 (1枚)","panel",{panelCode:ae,partCode:ae,widthMm:F,heightMm:G,unitType:"m2"})}if(this.params.hasFloorHeaterSupport){const F=v==="black"?"ブラック":"ホワイト",H=2,W=4;if(c&&f===3){const $=(i-80)/3,de=Math.round($+20),fe=s-2,ve=80,Se=80,q=new mt;q.moveTo(ve,-fe/2),q.lineTo(de,-fe/2),q.lineTo(de,fe/2),q.lineTo(ve,fe/2),q.lineTo(0,fe/2-Se),q.lineTo(0,-fe/2+Se),q.closePath();const ue={depth:H,bevelEnabled:!1},Te=new ft(q,ue);Te.rotateX(Math.PI/2),this.activeGeometries.push(Te);const Pe=new Z(Te,this.materials.acrylic);Pe.position.set(-i/2+1,0,0),Pe.castShadow=!0,this.panelGroup.add(Pe);const be=Te.clone();be.rotateY(Math.PI),this.activeGeometries.push(be);const Ie=new Z(be,this.materials.acrylic);Ie.position.set(i/2-1,0,0),Ie.castShadow=!0,this.panelGroup.add(Ie);const Fe=Math.round($+20),Oe=new mt,k=Fe/2,ye=fe/2;Oe.moveTo(-k,-ye),Oe.lineTo(k,-ye),Oe.lineTo(k,ye),Oe.lineTo(-k,ye),Oe.closePath();const J=new ft(Oe,ue);J.rotateX(Math.PI/2),this.activeGeometries.push(J);const ce=new Z(J,this.materials.acrylic);ce.position.set(0,0,0),ce.castShadow=!0,this.panelGroup.add(ce);const Le=[{x:-i/2+10,z:-s/2+90},{x:-i/2+90,z:-s/2+10},{x:-i/2+10,z:s/2-90},{x:-i/2+90,z:s/2-10},{x:A,z:-s/2+90},{x:A,z:s/2-90},{x:A,z:-s/4},{x:A,z:s/4},{x:0,z:-s/2+10},{x:0,z:s/2-10},{x:O,z:-s/4},{x:O,z:s/4},{x:i/2-10,z:s/2-90},{x:i/2-90,z:s/2-10},{x:i/2-10,z:-s/2+90},{x:i/2-90,z:-s/2+10},{x:O,z:-s/2+90},{x:O,z:s/2-90}];for(const si of Le)this.addBottomThumbScrew(si.x,-H,si.z);const De=Math.max(10,Math.round($-10)),Ve=Math.max(10,Math.round((U?s-60:s-40)-10)),{map:ot,bumpMap:Dt}=Ko(De,Ve);this.activeTextures.push(ot,Dt);const et=this.materials.createPolycaMaterial(ot,Dt);this.activeMaterials.push(et);const qt=new Xe(De,W,Ve);this.activeGeometries.push(qt);const Rn=new Z(qt,et);Rn.position.set(-i/2+20+$/2,W/2,B),this.panelGroup.add(Rn);const Bo=new Z(qt,et);Bo.position.set(0,W/2,B),this.panelGroup.add(Bo);const Oo=new Z(qt,et);Oo.position.set(i/2-20-$/2,W/2,B),this.panelGroup.add(Oo),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${de} x ${fe} mm`,3,"床面外側固定 (3分割用・左右2枚+中央1枚・計3枚)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:de,heightMm:fe,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${De} x ${Ve} mm`,3,"床下パネルヒータ緩衝用 (間口-10mm・3枚)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:De,heightMm:Ve,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${F})`,"外径φ15mm / M4 (手締め・工具不要)",18,"床下パネルヒータ支え板 固定用 (計18箇所)","other")}else if(c){const $=Math.round(i/2+9),de=s-2,fe=80,ve=80,Se=20,q=Math.max(10,de-180),ue=new mt;ue.moveTo(fe,-de/2),ue.lineTo($,-de/2),ue.lineTo($,de/2-q),ue.lineTo($-Se,de/2-q),ue.lineTo($-Se,de/2),ue.lineTo(fe,de/2),ue.lineTo(0,de/2-ve),ue.lineTo(0,-de/2+ve),ue.closePath();const Te={depth:H,bevelEnabled:!1},Pe=new ft(ue,Te);Pe.rotateX(Math.PI/2),this.activeGeometries.push(Pe);const be=new Z(Pe,this.materials.acrylic);be.position.set(-i/2+1,0,0),be.castShadow=!0,this.panelGroup.add(be);const Ie=Pe.clone();Ie.rotateY(Math.PI),this.activeGeometries.push(Ie);const Fe=new Z(Ie,this.materials.acrylic);Fe.position.set(i/2-1,0,0),Fe.castShadow=!0,this.panelGroup.add(Fe);const Oe=[{x:-i/2+10,z:-s/2+90},{x:-i/2+90,z:-s/2+10},{x:-i/2+10,z:s/2-90},{x:-i/2+90,z:s/2-10},{x:0,z:-s/2+90},{x:-80,z:-s/2+10},{x:-80,z:s/2-10},{x:i/2-10,z:s/2-90},{x:i/2-90,z:s/2-10},{x:i/2-10,z:-s/2+90},{x:i/2-90,z:-s/2+10},{x:0,z:s/2-90},{x:80,z:s/2-10},{x:80,z:-s/2+10}];for(const et of Oe)this.addBottomThumbScrew(et.x,-H,et.z);const k=(i-60)/2,ye=Math.max(10,Math.round(k-10)),J=Math.max(10,Math.round((U?s-60:s-40)-10)),{map:ce,bumpMap:Le}=Ko(ye,J);this.activeTextures.push(ce,Le);const De=this.materials.createPolycaMaterial(ce,Le);this.activeMaterials.push(De);const Ve=new Xe(ye,W,J);this.activeGeometries.push(Ve);const ot=new Z(Ve,De);ot.position.set(-k/2-10,W/2,B),this.panelGroup.add(ot);const Dt=new Z(Ve,De);Dt.position.set(k/2+10,W/2,B),this.panelGroup.add(Dt),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${$} x ${de} mm`,2,"床面外側固定 (2枚互い違い配置・斜めカット各2箇所・切欠き各1箇所・φ6穴各7箇所)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:$,heightMm:de,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${ye} x ${J} mm`,2,"床下パネルヒータ緩衝用 (間口-10mm・2枚)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:ye,heightMm:J,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${F})`,"外径φ15mm / M4 (手締め・工具不要)",14,"床下パネルヒータ支え板 固定用 (計14箇所)","other")}else{const $=i-2,de=s-2,fe=80,ve=new mt,Se=$/2,q=de/2;ve.moveTo(-Se+fe,-q),ve.lineTo(Se-fe,-q),ve.lineTo(Se,-q+fe),ve.lineTo(Se,q-fe),ve.lineTo(Se-fe,q),ve.lineTo(-Se+fe,q),ve.lineTo(-Se,q-fe),ve.lineTo(-Se,-q+fe),ve.closePath();const ue={depth:H,bevelEnabled:!1},Te=new ft(ve,ue);Te.rotateX(Math.PI/2),this.activeGeometries.push(Te);const Pe=new Z(Te,this.materials.acrylic);Pe.position.set(0,0,0),Pe.castShadow=!0,this.panelGroup.add(Pe);const be=[{x:-Se+90,z:-q+9},{x:-Se+9,z:-q+90},{x:Se-90,z:-q+9},{x:Se-9,z:-q+90},{x:-Se+90,z:q-9},{x:-Se+9,z:q-90},{x:Se-90,z:q-9},{x:Se-9,z:q-90},{x:0,z:-q+9},{x:0,z:q-9}];for(const Le of be)this.addBottomThumbScrew(Le.x,-H,Le.z);const Ie=Math.max(10,Math.round(i-40-10)),Fe=Math.max(10,Math.round((U?s-60:s-40)-10)),{map:Oe,bumpMap:k}=Ko(Ie,Fe);this.activeTextures.push(Oe,k);const ye=this.materials.createPolycaMaterial(Oe,k);this.activeMaterials.push(ye);const J=new Xe(Ie,W,Fe);this.activeGeometries.push(J);const ce=new Z(J,ye);ce.position.set(0,W/2,B),this.panelGroup.add(ce),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${$} x ${de} mm`,1,"床面外側固定 (4隅斜めカット80mm・φ6穴10箇所)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:$,heightMm:de,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${Ie} x ${Fe} mm`,1,"床下パネルヒータ緩衝用 (間口-10mm)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:Ie,heightMm:Fe,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${F})`,"外径φ15mm / M4 (手締め・工具不要)",10,"床下パネルヒータ支え板 固定用 (計10箇所)","other")}}const ge=r==="A"||r==="A_FRAMED"||r==="C"||r==="C_FRAMED",Ce=ge&&!!this.params.hasBottomWideFrame,Be=ge&&!!this.params.hasTopWideFrame,j=Ce&&Be,le=Ce?40:20,Me=Be?40:20,pe=ge?Math.round(o-le-Me+10):o-30,he=ge?le+(o-le-Me)/2:o/2;let Ae=1,me=i-30,Ee=[0],te="";if(m)if(p===3){Ae=3;const F=(i-80)/3;me=Math.round(F+10),Ee=[-i/2+20+F/2,0,i/2-20-F/2],te=" (3分割)"}else{Ae=2;const F=(i-60)/2;me=Math.round(F+10),Ee=[-F/2-10,F/2+10],te=" (2分割)"}if(M==="punching"){const F=ia(me,pe,!1);this.activeTextures.push(F);const H=this.materials.createPunchingMaterial(F);this.activeMaterials.push(H);const W=new hi(me,pe);this.activeGeometries.push(W);for(const $ of Ee){const de=new Z(W,H);de.position.set($,he,-s/2+10),this.panelGroup.add(de)}this.recordPart("塩ビパンチングボード 透明 3.0mm 背板",`${me} x ${pe} mm`,Ae,`背面 (通気パネル・φ3.1-P7${te})`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:me,heightMm:pe,unitType:"m2"})}else if(M==="polyca"){const{map:F,bumpMap:H}=Ko(me,pe);this.activeTextures.push(F,H);const W=this.materials.createPolycaMaterial(F,H);this.activeMaterials.push(W);const $=new Xe(me,pe,4);this.activeGeometries.push($);for(const de of Ee){const fe=new Z($,W);fe.position.set(de,he,-s/2+10),this.panelGroup.add(fe)}this.recordPart("中空ポリカ 4.0mm 背板",`${me} x ${pe} mm`,Ae,`背面 (中空ポリカ・横筋${te})`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:me,heightMm:pe,unitType:"m2"})}else if(M==="black_matte"){const F=new Xe(me,pe,d);this.activeGeometries.push(F);for(const H of Ee){const W=new Z(F,this.materials.blackMatteAcrylic);W.position.set(H,he,-s/2+10),this.panelGroup.add(W)}this.recordPart("アクリル黒両面マット 3.0mm 背板",`${me} x ${pe} mm`,Ae,`背面${te}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:me,heightMm:pe,unitType:"m2"})}else if(M==="smoke_gray"){const F=new Xe(me,pe,d);this.activeGeometries.push(F);for(const H of Ee){const W=new Z(F,this.materials.smokeGrayAcrylic);W.position.set(H,he,-s/2+10),this.panelGroup.add(W)}this.recordPart("アクリル グレースモーク半透明 3.0mm 背板",`${me} x ${pe} mm`,Ae,`背面${te}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:me,heightMm:pe,unitType:"m2"})}else{const F=new Xe(me,pe,d);this.activeGeometries.push(F);for(const H of Ee){const W=new Z(F,this.materials.acrylic);W.position.set(H,he,-s/2+10),this.panelGroup.add(W)}this.recordPart("透明アクリル 3.0mm 背板",`${me} x ${pe} mm`,Ae,`背面${te}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:me,heightMm:pe,unitType:"m2"})}const K=_||i>940,D=!K&&w==="punching",oe=K&&L==="punching"&&y==="punching";let Q="back_top_2";if(D?Q="top_single_2":oe&&(Q="top_split_4"),Q==="back_top_2"){const F=o-Me-35,H=-s/2+10,W=new Ke(19,19,4.5,32);W.rotateX(Math.PI/2),this.activeGeometries.push(W);const $=-(i-40)/2+35,de=(i-40)/2-35,fe=new Z(W,this.materials.grommetMaterial);fe.position.set($,F,H),this.panelGroup.add(fe);const ve=new Z(W,this.materials.grommetMaterial);ve.position.set(de,F,H),this.panelGroup.add(ve);const Se=K?"背面板 上部左右2箇所 (天面仕様・端から35mm)":"背面板 上部左右 (端から35mm)";this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,Se,"other")}const re=j?s-70:U?s-50:s-30,ne=j?0:U?-10:0,xe=(F,H,W,$,de)=>{const fe=de?`${de}・`:"",ve=de?`${de} `:"";if($==="punching"){const Se=ia(F,H,!1);this.activeTextures.push(Se);const q=this.materials.createPunchingMaterial(Se);this.activeMaterials.push(q);const ue=new hi(F,H);ue.rotateY(Math.PI/2),this.activeGeometries.push(ue);const Te=new Z(ue,q);Te.position.set(-i/2+10,W,ne),this.panelGroup.add(Te);const Pe=new Z(ue,q);Pe.position.set(i/2-10,W,ne),this.panelGroup.add(Pe),this.recordPart(`塩ビパンチングボード 透明 3.0mm 側板 (${fe}φ3.1-P7)`,`${F} x ${H} mm`,2,`左右側面 ${ve}(通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:F,heightMm:H,unitType:"m2"})}else if($==="polyca"){const{map:Se,bumpMap:q}=Ko(F,H);this.activeTextures.push(Se,q);const ue=this.materials.createPolycaMaterial(Se,q);this.activeMaterials.push(ue);const Te=new Xe(4,H,F);this.activeGeometries.push(Te);const Pe=new Z(Te,ue);Pe.position.set(-i/2+10,W,ne),this.panelGroup.add(Pe);const be=new Z(Te,ue);be.position.set(i/2-10,W,ne),this.panelGroup.add(be),this.recordPart(`中空ポリカ 4.0mm 側板 (${fe}奥行筋)`,`${F} x ${H} mm`,2,`左右側面 ${ve}(中空ポリカ)`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:F,heightMm:H,unitType:"m2"})}else if($==="black_matte"){const Se=new Xe(d,H,F);this.activeGeometries.push(Se);const q=new Z(Se,this.materials.blackMatteAcrylic);q.position.set(-i/2+10,W,ne),this.panelGroup.add(q);const ue=new Z(Se,this.materials.blackMatteAcrylic);ue.position.set(i/2-10,W,ne),this.panelGroup.add(ue),this.recordPart(`アクリル黒両面マット 3.0mm 側板 (${fe})`,`${F} x ${H} mm`,2,`左右側面 ${ve}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:F,heightMm:H,unitType:"m2"})}else if($==="smoke_gray"){const Se=new Xe(d,H,F);this.activeGeometries.push(Se);const q=new Z(Se,this.materials.smokeGrayAcrylic);q.position.set(-i/2+10,W,ne),this.panelGroup.add(q);const ue=new Z(Se,this.materials.smokeGrayAcrylic);ue.position.set(i/2-10,W,ne),this.panelGroup.add(ue),this.recordPart(`アクリル グレースモーク半透明 3.0mm 側板 (${fe})`,`${F} x ${H} mm`,2,`左右側面 ${ve}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:F,heightMm:H,unitType:"m2"})}else{const Se=new Xe(d,H,F);this.activeGeometries.push(Se);const q=new Z(Se,this.materials.acrylic);q.position.set(-i/2+10,W,ne),this.panelGroup.add(q);const ue=new Z(Se,this.materials.acrylic);ue.position.set(i/2-10,W,ne),this.panelGroup.add(ue),this.recordPart(`透明アクリル 3.0mm 側板 (${fe})`,`${F} x ${H} mm`,2,`左右側面 ${ve}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:F,heightMm:H,unitType:"m2"})}};if(h){const F=l,H=Math.max(10,o-le-Me-20-F),W=Math.round(H+10),$=Math.round(F+10);xe(re,W,le+H/2,R,"下部");const de=o-Me-F/2;if(xe(re,$,de,I,"上部"),this.params.hasSideVentCover&&I==="punching"){const ve=F+10,Se=s-2,q=new Xe(1.5,ve,Se);this.activeGeometries.push(q);const ue=-i/2-1.5/2,Te=i/2+1.5/2,Pe=new Z(q,this.materials.ventCoverAcrylic);Pe.position.set(ue,de,0),Pe.castShadow=!0,this.panelGroup.add(Pe);const be=new Z(q,this.materials.ventCoverAcrylic);be.position.set(Te,de,0),be.castShadow=!0,this.panelGroup.add(be);const Ie=(s-2)/2-9,Fe=-(s-2)/2+9,Oe=de+ve/2-40,k=de-ve/2+40,ye=[{y:Oe,z:Ie},{y:Oe,z:Fe},{y:k,z:Ie},{y:k,z:Fe}];for(const ce of ye)this.addThumbScrew(-i/2-1.5,ce.y,ce.z,-1),this.addThumbScrew(i/2+1.5,ce.y,ce.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${Se} x ${ve} mm`,2,"左右側面上部 外張り (φ6mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:Se,heightMm:ve,unitType:"m2"});const J=v==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${J})`,"外径φ15mm / M4 (手締め・工具不要)",8,"側面換気量調整板 固定用 (左右計8箇所)","other")}}else{const F=ge?Math.round(o-le-Me+10):o-30,H=ge?le+(o-le-Me)/2:o/2;if(xe(re,F,H,x,""),this.params.hasSideVentCover&&x==="punching"){const $=o-le-Me,de=Math.round($/2+10),fe=s-2,ve=new Xe(1.5,de,fe);this.activeGeometries.push(ve);const Se=-i/2-1.5/2,q=i/2+1.5/2,ue=le/2+de/2,Te=o-Me/2-de/2,Pe=new Z(ve,this.materials.ventCoverAcrylic);Pe.position.set(Se,ue,0),Pe.castShadow=!0,this.panelGroup.add(Pe);const be=new Z(ve,this.materials.ventCoverAcrylic);be.position.set(q,ue,0),be.castShadow=!0,this.panelGroup.add(be);const Ie=new Z(ve,this.materials.ventCoverAcrylic);Ie.position.set(Se,Te,0),Ie.castShadow=!0,this.panelGroup.add(Ie);const Fe=new Z(ve,this.materials.ventCoverAcrylic);Fe.position.set(q,Te,0),Fe.castShadow=!0,this.panelGroup.add(Fe);const Oe=(s-2)/2-9,k=-(s-2)/2+9,ye=Math.max(25,10+Math.min(30,de*.2)),J=Math.min(o/2-15,o/2-Math.min(25,de*.2)),ce=Math.max(o/2+15,o/2+Math.min(25,de*.2)),Le=Math.min(o-25,o-10-Math.min(30,de*.2)),De=[{y:J,z:Oe},{y:J,z:k},{y:ye,z:Oe},{y:ye,z:k},{y:Le,z:Oe},{y:Le,z:k},{y:ce,z:Oe},{y:ce,z:k}];for(const ot of De)this.addThumbScrew(-i/2-1.5,ot.y,ot.z,-1),this.addThumbScrew(i/2+1.5,ot.y,ot.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${fe} x ${de} mm`,4,"左右側面外張り (上下各2枚・φ6mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:fe,heightMm:de,unitType:"m2"});const Ve=v==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${Ve})`,"外径φ15mm / M4 (手締め・工具不要)",16,"側面換気量調整板 固定用 (左右計16箇所)","other")}}const _e=(F,H,W,$,de,fe=!1)=>{const ve=$&&$.startsWith("mesh"),Se=v==="black";if(ve){const q=parseInt($.replace("mesh",""),10);if(Se){const ue=Math.max(10,Math.round(H-6)),Te=Math.max(10,Math.round(F-46)),Pe=W-F/2+10,be=W+F/2-10;this.addFrameMember("2020",ue,new T(Pe,o-10,E),t,`天面インナー左2020 (${de})`,this.materials.silverInnerFrame),this.addFrameMember("2020",ue,new T(be,o-10,E),t,`天面インナー右2020 (${de})`,this.materials.silverInnerFrame);const Ie=E+H/2-10,Fe=E-H/2+10;this.addFrameMember("2020",Te,new T(W,o-10,Ie),e,`天面インナー前2020 (${de})`,this.materials.silverInnerFrame),this.addFrameMember("2020",Te,new T(W,o-10,Fe),e,`天面インナー後2020 (${de})`,this.materials.silverInnerFrame),this.recordPart(We("2020",ue,"silver",!0),ue,2,`天面 金網取付用インナーフレーム左右 (${de}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:ue,unitType:"m"}),this.recordPart(We("2020",Te,"silver",!0),Te,2,`天面 金網取付用インナーフレーム前後 (${de}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:Te,unitType:"m"});const Oe=Math.max(10,Math.round(F-30)),k=Math.max(10,Math.round(H-30)),ye=this.createWireMesh(Oe,k,q);ye.position.set(W,o-10,E),this.panelGroup.add(ye);const J=`FENP${q}-A${Oe}-B${k}`,ce=`wire_mesh_${q}`;this.recordPart(`金網 ${q}mmピッチ（黒粉体塗装） (型番: ${J})`,`${Oe} x ${k} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${de})`,"panel",{panelCode:ce,partCode:ce,widthMm:Oe,heightMm:k,unitType:"m2"})}else{const ue=Math.max(10,Math.round(F+10)),Te=Math.max(10,Math.round(H+10)),Pe=this.createWireMesh(ue,Te,q);Pe.position.set(W,o-10,E),this.panelGroup.add(Pe);const be=`FENP${q}-A${ue}-B${Te}`,Ie=`wire_mesh_${q}`;this.recordPart(`金網 ${q}mmピッチ（黒粉体塗装） (型番: ${be})`,`${ue} x ${Te} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${de})`,"panel",{panelCode:Ie,partCode:Ie,widthMm:ue,heightMm:Te,unitType:"m2"})}}else if($==="acrylic"){const q=Math.round(F+10),ue=Math.round(H+10),Te=new Xe(q,d,ue);this.activeGeometries.push(Te);const Pe=new Z(Te,this.materials.acrylic);Pe.position.set(W,o-20+d/2,E),this.panelGroup.add(Pe),this.recordPart("透明アクリル 3.0mm 天板",`${q} x ${ue} mm`,1,`天面 (${de})`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:q,heightMm:ue,unitType:"m2"})}else{const q=Math.round(F+10),ue=Math.round(H+10),Te=ia(q,ue,fe);this.activeTextures.push(Te);const Pe=this.materials.createPunchingMaterial(Te);this.activeMaterials.push(Pe);const be=new hi(q,ue);be.rotateX(-Math.PI/2),this.activeGeometries.push(be);const Ie=new Z(be,Pe);if(Ie.position.set(W,o-20+d/2,E),this.panelGroup.add(Ie),this.recordPart("塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)",`${q} x ${ue} mm`,1,`天面 (${de}・通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:q,heightMm:ue,unitType:"m2"}),fe){const Fe=new Ke(19,19,4.5,32);this.activeGeometries.push(Fe);const Oe=o-20+d/2,k=E-ue/2+35,ye=W-q/2+35,J=W+q/2-35,ce=new Z(Fe,this.materials.grommetMaterial);ce.position.set(ye,Oe,k),this.panelGroup.add(ce);const Le=new Z(Fe,this.materials.grommetMaterial);Le.position.set(J,Oe,k),this.panelGroup.add(Le)}}},E=U?-10:0,S=U?s-60:s-40;if(K){const F=(i-60)/2,H=-F/2-10,W=F/2+10,$=Q==="top_split_4";_e(F,S,H,L,"左側",$),_e(F,S,W,y,"右側",$),Q==="top_split_4"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",4,"天面板 奥側各2箇所 (計4箇所・端から35mm)","other")}else{const F=Q==="top_single_2";_e(i-40,S,0,w,"全面",F),Q==="top_single_2"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,"天面板 奥側左右 (端から35mm)","other")}if(r==="C"||r==="C_FRAMED"){const F=i-30,H=a+10,W=new Xe(F,H,d);this.activeGeometries.push(W);const $=new Z(W,this.materials.acrylic),de=le+a/2,fe=r==="C_FRAMED"?s/2-20:s/2-10;$.position.set(0,de,fe),this.panelGroup.add($),this.recordPart("透明アクリル 3.0mm 前窓",`${F} x ${H} mm`,1,"正面 下部はめ殺し固定窓","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:F,heightMm:H,unitType:"m2"})}}buildGlassRails(e,t,i,s){const{frameColor:o}=this.params,r=new mt;r.moveTo(-8,2.5),r.lineTo(-6.5,2.5),r.lineTo(-6.5,7),r.lineTo(-5,7),r.lineTo(-5,2),r.lineTo(-1.5,2),r.lineTo(-1.5,7),r.lineTo(1.5,7),r.lineTo(1.5,2),r.lineTo(5,2),r.lineTo(5,7),r.lineTo(6.5,7),r.lineTo(6.5,2.5),r.lineTo(8,2.5),r.lineTo(8,0),r.lineTo(-8,0),r.closePath();const a={depth:e,bevelEnabled:!1,steps:1},h=new ft(r,a);h.translate(0,0,-e/2),h.rotateY(-Math.PI/2),this.activeGeometries.push(h);const l=new Z(h,this.materials.railMaterial);l.position.set(0,t,s),l.castShadow=!0,l.receiveShadow=!0,l.name="下側ガラスレール",this.doorGroup.add(l);const c=new mt;c.moveTo(-8,12-2.5),c.lineTo(-6.5,12-2.5),c.lineTo(-6.5,0),c.lineTo(-5,0),c.lineTo(-5,11),c.lineTo(-1.5,11),c.lineTo(-1.5,0),c.lineTo(1.5,0),c.lineTo(1.5,11),c.lineTo(5,11),c.lineTo(5,0),c.lineTo(6.5,0),c.lineTo(6.5,12-2.5),c.lineTo(8,12-2.5),c.lineTo(8,12),c.lineTo(-8,12),c.closePath();const f={depth:e,bevelEnabled:!1,steps:1},m=new ft(c,f);m.translate(0,0,-e/2),m.rotateY(-Math.PI/2),this.activeGeometries.push(m);const p=new Z(m,this.materials.railMaterial);p.position.set(0,i-12,s),p.castShadow=!0,p.receiveShadow=!0,p.name="上側ガラスレール",this.doorGroup.add(p)}buildAntiFlexRails(e,t,i,s,o,r){const a=Math.max(10,t-25),h=new mt;h.moveTo(-8,2.5),h.lineTo(-6.5,2.5),h.lineTo(-6.5,7),h.lineTo(-5,7),h.lineTo(-5,2),h.lineTo(-1.5,2),h.lineTo(-1.5,7),h.lineTo(1.5,7),h.lineTo(1.5,2),h.lineTo(5,2),h.lineTo(5,7),h.lineTo(6.5,7),h.lineTo(6.5,2.5),h.lineTo(8,2.5),h.lineTo(8,0),h.lineTo(-8,0),h.closePath();const l={depth:a,bevelEnabled:!1,steps:1},c=(i+7+s-12)/2,f=new ft(h,l);f.translate(0,0,-a/2);const m=new lt().set(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);f.applyMatrix4(m),this.activeGeometries.push(f);const p=new Z(f,this.materials.railMaterial);p.position.set(-e/2,c,o),p.castShadow=!0,p.receiveShadow=!0,p.name="左側たわみ防止レール",this.doorGroup.add(p);const _=new ft(h,l);_.translate(0,0,-a/2);const v=new lt().set(0,-1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);_.applyMatrix4(v),this.activeGeometries.push(_);const g=new Z(_,this.materials.railMaterial);g.position.set(e/2,c,o),g.castShadow=!0,g.receiveShadow=!0,g.name="右側たわみ防止レール",this.doorGroup.add(g)}buildFramedDoors(){const{W:e,D:t,H:i,doorState:s,frameColor:o,cageType:r,frontWindowH:a}=this.params,h=o==="silver",l=r==="C_FRAMED",c=!!this.params.hasTopWideFrame,m=!!this.params.hasBottomWideFrame?40:20,p=Math.max(10,e-40),_=l?m+20+a:40,v=c?i-40:i-20,g=Math.max(10,v-_),d=Math.max(10,Math.round(p/2+12)),C=Math.max(10,g-42),M=Math.max(10,d-64),x=Math.max(10,C+10),I=(_+v)/2,R=_+11,w=v-11,L=3,y=2,b=-p/2+y+L+d/2,A=p/2-y-L-d/2,O=Math.max(0,d-85);let U=b,G=A;s==="left_open"?U=b+O:s==="right_open"&&(G=A-O);let B=U,Y=G;this._doorAnim&&!this._doorAnim.isFrontOpen&&(B=this._doorAnim.currentLeftX??U,Y=this._doorAnim.currentRightX??G);const z=t/2-30,N=t/2-10,ee=h?this.materials.aluminum:this.materials.blackFrame,ae=h?this.materials.perchGrayCap:this.materials.endCapMaterial,ge=new lt().makeBasis(new T(0,0,-1),new T(0,1,0),new T(1,0,0)),Ce=new Rt().setFromRotationMatrix(ge),Be=new lt().makeBasis(new T(0,0,1),new T(1,0,0),new T(0,1,0)),j=new Rt().setFromRotationMatrix(Be),le=me=>{const Ee=new pt;this.addFrameMember(h?"2020_flat":"2020",d,new T(0,R,0),Ce,"扉下フレーム2020",ee,"right",Ee),this.addFrameMember(h?"2020_flat":"2020",d,new T(0,w,0),Ce,"扉上フレーム2020",ee,"right",Ee),this.addFrameMember("2040",C,new T(-d/2+17,I,0),j,"扉左縦フレーム2040",ee,null,Ee),this.addFrameMember("2040",C,new T(d/2-17,I,0),j,"扉右縦フレーム2040",ee,null,Ee);const te=new Xe(M,x,3);this.activeGeometries.push(te);const K=new Z(te,this.materials.acrylic);K.position.set(0,I,0),K.castShadow=!0,Ee.add(K);const D=new Rt(0,-Math.PI/2,0),oe=new Rt(0,Math.PI/2,0);if(this.addDoorEndCap(-d/2-1.5,R,0,D,ae,Ee),this.addDoorEndCap(d/2+1.5,R,0,oe,ae,Ee),this.addDoorEndCap(-d/2-1.5,w,0,D,ae,Ee),this.addDoorEndCap(d/2+1.5,w,0,oe,ae,Ee),me){this.addFrameMember("2040",94,new T(-d/2+17,I,20),j,"左扉スペーサー2040",ee,null,Ee);const Q=new Rt(-Math.PI/2,0,0),re=new Rt(Math.PI/2,0,0);this.addEndCap2040(-d/2+17,I+47+1.5,20,Q,ae,Ee),this.addEndCap2040(-d/2+17,I-47-1.5,20,re,ae,Ee);const ne=this.createSlideLatchMesh(!0);ne.position.set(-d/2+17,I,30),Ee.add(ne),Ee.userData.latchKnob=ne.userData.knobPivot}else{const Q=this.createSlideLatchMesh(!1);Q.position.set(d/2-17,I,10),Ee.add(Q),Ee.userData.latchKnob=Q.userData.knobPivot}return Ee},Me=le(!0);Me.position.set(B,0,z),this.doorGroup.add(Me);const pe=le(!1);pe.position.set(Y,0,N),this.doorGroup.add(pe);const he=this.createStrikerAssembly(!0);he.position.set(-e/2,I,t/2),this.doorGroup.add(he);const Ae=this.createStrikerAssembly(!1);Ae.position.set(e/2,I,t/2),this.doorGroup.add(Ae),this._doorAnim={isFramed:!0,leftDoor:Me,rightDoor:pe,leftLatchKnob:Me.userData.latchKnob,rightLatchKnob:pe.userData.latchKnob,baseLeftCenterX:b,baseRightCenterX:A,leftKnobGroup:null,rightKnobGroup:null,lockGroup:null,leftKnobOffsetX:0,rightKnobOffsetX:0,lockOffsetX:0,currentLeftX:B,currentRightX:Y,targetLeftX:U,targetRightX:G,animating:B!==U||Y!==G,startLeftX:B,startRightX:Y,startTime:performance.now(),duration:1600}}buildDoors(){this.clearGroup(this.doorGroup);const{W:e,D:t,H:i,cageType:s,frontWindowH:o,doorState:r,hasDoorAntiFlex:a,frameColor:h}=this.params;if(s==="A_FRAMED"||s==="C_FRAMED"){this.buildFramedDoors();return}if(s==="A_FRONT"){this.buildFrontOpenDoor();return}const l=e-40;let c=(l+30)/2;a&&(c-=2);let f=0,m=i-20;if(s==="A"){const Be=this.params.frontWideFrame||"2x";Be==="3x"?f=60:Be==="2x"?f=40:f=20,this.params.hasTopWideFrame&&(m=i-40)}else f=(this.params.hasBottomWideFrame?40:20)+20+o,this.params.hasTopWideFrame&&(m=i-40);const p=Math.max(10,m-f),_=t/2-10;this.buildGlassRails(l,f,m,_),a&&this.buildAntiFlexRails(l,p,f,m,_,h);const v=Math.max(10,p-9),g=f+2.5+v/2,d=3,C=new Xe(c,v,d);this.activeGeometries.push(C);const M=Math.max(0,c-50),x=_-3.25,I=_+3.25,R=a?2:0,w=-l/2+R+c/2,L=l/2-R-c/2;let y=w,b=L;r==="left_open"?y=w+M:r==="right_open"&&(b=L-M);let A=y,O=b;this._doorAnim&&(A=this._doorAnim.currentLeftX,O=this._doorAnim.currentRightX);const U=new Z(C,this.materials.doorGlassLeft);U.position.set(A,g,x),U.castShadow=!1,this.doorGroup.add(U);const G=-c/2+15,B=this.addKnobScrew(A+G,g,x+d/2),Y=new Z(C,this.materials.doorGlassRight);Y.position.set(O,g,I),Y.castShadow=!1,this.doorGroup.add(Y);const z=c/2-15,N=this.addKnobScrew(O+z,g,I+d/2),ae=g-v/2+20,ge=-c/2+15,Ce=this.addDoorLock(O+ge,ae,I+d/2);this._doorAnim={leftDoor:U,rightDoor:Y,leftKnobGroup:B,rightKnobGroup:N,lockGroup:Ce,leftKnobOffsetX:G,rightKnobOffsetX:z,lockOffsetX:ge,currentLeftX:A,currentRightX:O,targetLeftX:y,targetRightX:b,animating:A!==y||O!==b,startLeftX:A,startRightX:O,startTime:performance.now(),duration:3e3}}addCountersunkPhillipsScrew(e,t,i,s,o=0){const r=new Ke(3.5,2,1.2,16);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const a=new Z(r,this.materials.screwSilver);a.position.set(t,i,s),e.add(a);const h=new Xe(3.8,.7,.4),l=new Xe(.7,3.8,.4);this.activeGeometries.push(h,l);const c=new Z(h,this.materials.screwSlot),f=new Z(l,this.materials.screwSlot);c.position.set(t,i,s+.5),f.position.set(t,i,s+.5),o!==0&&(c.rotation.z=o,f.rotation.z=o),e.add(c),e.add(f)}buildFrontOpenDoor(){const{W:e,D:t,H:i,doorState:s}=this.params;let o=40;const r=this.params.frontWideFrame||"2x";r==="3x"?o=60:r==="2x"?o=40:o=20;const a=i-20,h=o-18,l=a+18,c=l-h,f=(h+l)/2,m=e-2-21.3,p=3,_=t/2,v=-e/2+21.3,g=e/2-2,d=(v+g)/2,C=h+c*1/4,M=h+c*3/4,x=19,I=52,R=-c/4+I/2,w=-c/4-I/2,L=c/4+I/2,y=c/4-I/2,b=10,A=m/2,O=c/2,U=Math.min(b,A/4,O/4),G=this.params.doorHingeSide==="right",B=new mt;G?(B.moveTo(-A+U,-O),B.lineTo(A-U,-O),B.absarc(A-U,-O+U,U,-Math.PI/2,0,!1),B.lineTo(A,O-U),B.absarc(A-U,O-U,U,0,Math.PI/2,!1),B.lineTo(-A+U,O),B.absarc(-A+U,O-U,U,Math.PI/2,Math.PI,!1),B.lineTo(-A,L),B.lineTo(-A+x,L),B.lineTo(-A+x,y),B.lineTo(-A,y),B.lineTo(-A,R),B.lineTo(-A+x,R),B.lineTo(-A+x,w),B.lineTo(-A,w),B.lineTo(-A,-O+U),B.absarc(-A+U,-O+U,U,Math.PI,Math.PI*1.5,!1)):(B.moveTo(-A+U,-O),B.lineTo(A-U,-O),B.absarc(A-U,-O+U,U,-Math.PI/2,0,!1),B.lineTo(A,w),B.lineTo(A-x,w),B.lineTo(A-x,R),B.lineTo(A,R),B.lineTo(A,y),B.lineTo(A-x,y),B.lineTo(A-x,L),B.lineTo(A,L),B.lineTo(A,O-U),B.absarc(A-U,O-U,U,0,Math.PI/2,!1),B.lineTo(-A+U,O),B.absarc(-A+U,O-U,U,Math.PI/2,Math.PI,!1),B.lineTo(-A,-O+U),B.absarc(-A+U,-O+U,U,Math.PI,Math.PI*1.5,!1));const Y={steps:1,depth:p,bevelEnabled:!1},z=new ft(B,Y);this.activeGeometries.push(z);const N=new Z(z,this.materials.doorGlassRight);N.castShadow=!1;const ee=G?e/2-10-11.25:-e/2+10+11.25,ae=_+p,ge=new pt;ge.name="FrontOpenDoorPivot",ge.position.set(ee,0,ae),N.position.set(d-ee,f,-p),ge.add(N);const Ce=G?e/2-10:-e/2+10,Be=G?-e/2+10:e/2-10;this.addHingeTH31(Ce,ee,M,_,p,ge,G),this.addHingeTH31(Ce,ee,C,_,p,ge,G);const j=[];this.addLockC1249(Be,M,_,p,ee,ge,j,G),this.addLockC1249(Be,C,_,p,ee,ge,j,G),this.doorGroup.add(ge);const le=s==="open"||s==="left_open"||s==="right_open",Me=le?G?Math.PI*(120/180):-Math.PI*(120/180):0,pe=le?G?-Math.PI*1.5:Math.PI*1.5:0;let he=Me,Ae=pe;this._doorAnim&&typeof this._doorAnim.currentRotY=="number"&&(he=this._doorAnim.currentRotY,Ae=this._doorAnim.currentLockRotZ??pe),ge.rotation.y=he;for(const me of j)me.rotation.z=Ae;this._doorAnim={isFrontOpen:!0,doorPivot:ge,lockPivots:j,currentRotY:he,targetRotY:Me,currentLockRotZ:Ae,targetLockRotZ:pe,startRotY:he,startLockRotZ:Ae,animating:Math.abs(he-Me)>.001||Math.abs(Ae-pe)>.001,startTime:performance.now(),duration:2200}}addHingeTH31(e,t,i,s,o,r,a=!1){const h=this.materials.handleMaterial,l=s+o,c=new Xe(16,52,o);this.activeGeometries.push(c);const f=new Z(c,this.materials.acrylic);f.position.set(e,i,s+o/2),this.doorGroup.add(f);const m=new Xe(18,50,1.5);this.activeGeometries.push(m);const p=new Z(m,h),_=a?t+9:t-9;p.position.set(_,i,l+.75),p.castShadow=!0,this.doorGroup.add(p);const v=e;for(const R of[-17,8.5])this.addCountersunkPhillipsScrew(this.doorGroup,v,i+R,l+1.5,Math.PI/4);const g=new Ke(2.5,2.5,50,16);this.activeGeometries.push(g);const d=new Z(g,h);d.position.set(0,i,0),r.add(d);const C=new Xe(18,50,1.5);this.activeGeometries.push(C);const M=new Z(C,h),x=a?-9:9;M.position.set(x,i,.75),M.castShadow=!0,r.add(M);const I=a?-11.25:11.25;for(const R of[-8.5,17])this.addCountersunkPhillipsScrew(r,I,i+R,1.5,Math.PI/6)}addLockC1249(e,t,i,s,o,r,a,h=!1){const l=this.materials.handleMaterial,c=i+s,f=new Xe(16,48,s);this.activeGeometries.push(f);const m=new Z(f,this.materials.acrylic);m.position.set(e,t,i+s/2),this.doorGroup.add(m);const p=new Xe(16,46,2);this.activeGeometries.push(p);const _=new Z(p,l);_.position.set(e,t,c+1),this.doorGroup.add(_);for(const G of[-15,15])this.addCountersunkPhillipsScrew(this.doorGroup,e,t+G,c+2,Math.PI/4);const v=new Xe(14,16,12);this.activeGeometries.push(v);const g=new Z(v,l);g.position.set(e,t,c+2+6),this.doorGroup.add(g);const C=(h?-this.params.W/2+29:this.params.W/2-29)-o,M=new Xe(16,46,2);this.activeGeometries.push(M);const x=new Z(M,l);x.position.set(C,t,1),r.add(x);for(const G of[-15,15])this.addCountersunkPhillipsScrew(r,C,t+G,2,Math.PI/3);const I=new pt;I.name="LockArmPivot",I.position.set(C,t,2);const R=new Ke(3,3,3,16);R.rotateX(Math.PI/2),this.activeGeometries.push(R);const w=new Z(R,l);w.position.set(0,0,1.5),I.add(w);const L=new Xe(38,14,2.5);this.activeGeometries.push(L);const y=new Z(L,l),b=h?-19:19;y.position.set(b,0,6),I.add(y);const A=new Ke(3.5,3.5,14,16);A.rotateX(Math.PI/2),this.activeGeometries.push(A);const O=new Z(A,l),U=h?-18:18;O.position.set(U,0,13),I.add(O),r.add(I),a&&a.push(I)}buildFramedDoorPartsRecord(){const{W:e,H:t,frameColor:i,cageType:s,frontWindowH:o}=this.params,r=i==="silver",a=s==="C_FRAMED",h=!!this.params.hasTopWideFrame,c=!!this.params.hasBottomWideFrame?40:20,f=Math.max(10,e-40),m=a?c+20+o:40,p=h?t-40:t-20,_=Math.max(10,p-m),v=Math.max(10,Math.round(f/2+12)),g=Math.max(10,_-42),d=Math.max(10,v-64),C=Math.max(10,g+10),M=r?"AFSF-2020-4":"AFS-2020-4-BK",x=`${M}-${v}`;this.recordPart(x,`${v} mm`,4,"正面枠囲い扉 幅方向フレーム (上下各2本・計4本)","frame",{partCode:M,lengthMm:v,unitType:"m"});const I=r?"AFSF-2040-4":"AFS-2040-4-BK",R=`${I}-${g}`;this.recordPart(R,`${g} mm`,4,"正面枠囲い扉 高さ方向フレーム (左右各2本・計4本)","frame",{partCode:I,lengthMm:g,unitType:"m"});const w=r?"ECP-2020-4-GY":"ECP-2020-4",L=r?"ECP-2020-4-GY (グレー)":"ECP-2020-4 (ブラック)";this.recordPart(w,"-",8,`正面枠囲い扉 幅フレーム端部 (${L})`,"rail_cap",{partCode:w,unitType:"piece"}),this.recordPart("透明アクリル 3.0mm 扉板",`${d} x ${C} mm`,2,"正面枠囲い扉 (透明押出板3.0mm)","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:d,heightMm:C,unitType:"m2"});const y=v-22,b=14;this.recordPart("アクリル黒両面マット 3.0mm (スライド部材)",`${y} x ${b} mm`,4,"正面枠囲い扉 スライド用部材 (厚さ3mm)","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:y,heightMm:b,unitType:"m2"});const A=r?"AFS-2040-4":"AFS-2040-4-BK",O=`${A}-94`;this.recordPart(O,"94 mm",1,"正面枠囲い扉 左扉ラッチ高さ合わせ用スペーサーフレーム","frame",{partCode:A,lengthMm:94,unitType:"m"});const U=r?"ECP-2040-4-GY":"ECP-2040-4",G=r?"ECP-2040-4-GY (グレー)":"ECP-2040-4 (ブラック)";this.recordPart(U,"-",2,`正面枠囲い扉 左扉スペーサー端部 (${G})`,"rail_cap",{partCode:U,unitType:"piece"}),this.recordPart("タキゲン CP-294N スライドラッチ","70 x 25 mm",2,"正面枠囲い扉 ワンタッチスライドラッチ (左右各1個)","other",{partCode:"CP-294N",unitType:"piece"}),this.recordPart("アクリル丸板 透明 φ20mm t5mm (穴加工済)","φ20 x t5 mm",4,"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)","other",{partCode:"ACRYLIC-ROUND-20-5",unitType:"piece"})}buildDoorPartsRecord(){const{W:e,H:t,cageType:i,frontWindowH:s,hasDoorAntiFlex:o,frameColor:r}=this.params;if(i==="A_FRAMED"||i==="C_FRAMED"){this.buildFramedDoorPartsRecord();return}if(i==="A_FRONT"){const d=e-2-21.3;let C=40;const M=this.params.frontWideFrame||"2x";M==="3x"?C=60:M==="2x"?C=40:C=20;const I=Math.max(10,t-20-C)+36,R=this.params.doorHingeSide==="right",w=R?"正面 右ヒンジ・左打掛オープン扉":"正面 左ヒンジ・右打掛オープン扉";this.recordPart("透明アクリル扉 3.0mm（正面）（前開き）",`${Math.round(d*10)/10} x ${Math.round(I)} mm`,1,`${w} (切欠き・穴加工済)`,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(d*10)/10,heightMm:Math.round(I),unitType:"m2"});const L=R?"前開き扉 右ヒンジ (2箇所)":"前開き扉 左ヒンジ (2箇所)";this.recordPart("TH-31 ステンレス蝶番","50 x 36 mm (SUS304)",2,L,"rail_cap",{partCode:"TH-31",lengthMm:null,unitType:"piece"});const y=R?"前開き扉 左打掛ロック (2箇所)":"前開き扉 右打掛ロック (2箇所)";this.recordPart("C-1249-4 ステンレス打掛","58 x 46 mm (SUS304)",2,y,"rail_cap",{partCode:"C-1249-4",lengthMm:null,unitType:"piece"});const b=R?"前開き扉 右ヒンジ固定座 (フレーム隙間埋め用)":"前開き扉 左ヒンジ固定座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ヒンジ座板 (切削加工)","16 x 52 mm",2,b,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:52,unitType:"m2"});const A=R?"前開き扉 左打掛受具座 (フレーム隙間埋め用)":"前開き扉 右打掛受具座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ロック受座板 (切削加工)","16 x 48 mm",2,A,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:48,unitType:"m2"});return}const a=e-40;let h=(a+30)/2;o&&(h-=2);let l=0,c=t-20;if(i==="A"){const d=this.params.frontWideFrame||"2x";d==="3x"?l=60:d==="2x"?l=40:l=20,this.params.hasTopWideFrame&&(c=t-40)}else l=(this.params.hasBottomWideFrame?40:20)+20+s,this.params.hasTopWideFrame&&(c=t-40);const f=Math.max(10,c-l),m=Math.max(10,f-9),p=a,_=r==="black"?"BK":"GY",v=`PGRU-03-4-${_}`,g=`PGRL-03-4-${_}`;if(this.recordPart(v,p,1,"正面開口 上部 (間口高12mm縮小)","frame",{partCode:v,lengthMm:p,unitType:"m"}),this.recordPart(g,p,1,"正面開口 下部 (間口高7mm縮小)","frame",{partCode:g,lengthMm:p,unitType:"m"}),o){const d=Math.max(10,f-25);this.recordPart(g,d,2,"正面スライド扉 左右端 (扉たわみ防止)","frame",{partCode:g,lengthMm:d,unitType:"m"})}this.recordPart("透明アクリル扉 3.0mm（正面）（スライド扉）",`${Math.round(h)} x ${Math.round(m)} mm`,2,"正面 引き違い (重なり30mm)","panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(h),heightMm:Math.round(m),unitType:"m2"}),this.recordPart("段付きローレットノブ (SUS303, RNSFS4)","外径φ16 / ボスφ8 / 全長9.5mm",2,"扉端から15mm・上下中央","other"),this.recordPart("プッシュ式スライド扉鍵 (C-108)","外径φ18.5mm / 全長30mm (キー付)",1,"右スライド扉 下部 (端から15mm・下端から20mm)","other")}updateDoorAnimation(){if(!this._doorAnim||!this._doorAnim.animating)return;const e=this._doorAnim,t=performance.now()-e.startTime,i=Math.min(1,t/e.duration),s=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;if(e.isFrontOpen){if(e.targetRotY!==0){const r=Math.min(1,Math.max(0,i/.35)),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*a;const h=Math.min(1,Math.max(0,(i-.35)/.65)),l=h<.5?4*h*h*h:1-Math.pow(-2*h+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*l}else{const r=Math.min(1,Math.max(0,i/.65)),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*a;const h=Math.min(1,Math.max(0,(i-.65)/.35)),l=h<.5?4*h*h*h:1-Math.pow(-2*h+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*l}if(e.doorPivot&&(e.doorPivot.rotation.y=e.currentRotY),e.lockPivots)for(const r of e.lockPivots)r.rotation.z=e.currentLockRotZ;i>=1&&(e.animating=!1);return}if(e.isFramed){e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX);const o=e.targetLeftX!==e.startLeftX,r=e.targetRightX!==e.startRightX,a=.28;if(o&&e.leftLatchKnob){const h=e.targetLeftX>e.baseLeftCenterX;let l=0;if(h)if(i<.18){const c=i/.18;l=a*(c*c*(3-2*c))}else if(i<.35)l=a;else if(i<.48){const c=(i-.35)/.13;l=a*(1-c*c*(3-2*c))}else l=0;else if(i<.65)l=0;else if(i<.82){const c=(i-.65)/.17;l=a*(c*c*(3-2*c))}else if(i<.9){const c=(i-.82)/.08;l=a*(1-c*c)}else l=0;e.leftLatchKnob.rotation.y=l}else e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0);if(r&&e.rightLatchKnob){const h=e.targetRightX<e.baseRightCenterX;let l=0;if(h)if(i<.18){const c=i/.18;l=a*(c*c*(3-2*c))}else if(i<.35)l=a;else if(i<.48){const c=(i-.35)/.13;l=a*(1-c*c*(3-2*c))}else l=0;else if(i<.65)l=0;else if(i<.82){const c=(i-.65)/.17;l=a*(c*c*(3-2*c))}else if(i<.9){const c=(i-.82)/.08;l=a*(1-c*c)}else l=0;e.rightLatchKnob.rotation.y=-l}else e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0);i>=1&&(e.animating=!1,e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0),e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0));return}e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.leftKnobGroup&&(e.leftKnobGroup.position.x=e.currentLeftX+e.leftKnobOffsetX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX),e.rightKnobGroup&&(e.rightKnobGroup.position.x=e.currentRightX+e.rightKnobOffsetX),e.lockGroup&&(e.lockGroup.position.x=e.currentRightX+e.lockOffsetX),i>=1&&(e.animating=!1)}addKnobScrew(e,t,i){const s=new pt;s.position.set(e,t,i);const o=new Ke(4,4,6,24);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const r=new Z(o,this.materials.handleMaterial);r.position.set(0,0,3),r.castShadow=!0,s.add(r);const a=new Ke(8,8,3.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const h=new Z(a,this.materials.handleMaterial);h.position.set(0,0,6+1.75),h.castShadow=!0,s.add(h);const l=new Ke(2,2,3,16);l.rotateX(Math.PI/2),this.activeGeometries.push(l);const c=new Z(l,this.materials.grommetMaterial);return c.position.set(0,0,9.5-1.5+.1),s.add(c),this.doorGroup.add(s),s}addDoorLock(e,t,i){const s=new pt;s.position.set(e,t,i);const o=new Ke(9.25,9.25,2.5,32);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const r=new Z(o,this.materials.handleMaterial);r.position.set(0,0,1.25),r.castShadow=!0,s.add(r);const a=new Ke(7.75,7.75,20.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const h=new Z(a,this.materials.handleMaterial);h.position.set(0,0,2.5+10.25),h.castShadow=!0,s.add(h);const l=new Ke(5.5,5.5,.8,32);l.rotateX(Math.PI/2),this.activeGeometries.push(l);const c=new Z(l,this.materials.handleMaterial);c.position.set(0,0,23+.4),s.add(c);const f=new Xe(1.4,6.5,1.2);this.activeGeometries.push(f);const m=new Z(f,this.materials.grommetMaterial);return m.position.set(0,0,23.6),s.add(m),this.doorGroup.add(s),s}addThumbScrew(e,t,i,s){const o=new pt;o.position.set(e,t,i);const r=new Ke(4,4,1.5,24);r.rotateZ(Math.PI/2),this.activeGeometries.push(r);const a=new Z(r,this.materials.thumbScrewMaterial);a.position.set(s*.75,0,0),a.castShadow=!0,o.add(a);const h=new Ke(7.5,7.5,4.5,24);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);const l=new Z(h,this.materials.thumbScrewMaterial);l.position.set(s*(1.5+2.25),0,0),l.castShadow=!0,o.add(l);const c=new Ke(3,3,.2,16);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);const f=new Z(c,this.materials.grommetMaterial);return f.position.set(-s*.1,0,0),o.add(f),this.panelGroup.add(o),o}addBottomThumbScrew(e,t,i){const s=new pt;s.position.set(e,t,i);const o=new Ke(4,4,1.5,24);this.activeGeometries.push(o);const r=new Z(o,this.materials.thumbScrewMaterial);r.position.set(0,-.75,0),r.castShadow=!0,s.add(r);const a=new Ke(7.5,7.5,4.5,24);this.activeGeometries.push(a);const h=new Z(a,this.materials.thumbScrewMaterial);h.position.set(0,-3.75,0),h.castShadow=!0,s.add(h);const l=new Ke(3,3,.2,16);this.activeGeometries.push(l);const c=new Z(l,this.materials.grommetMaterial);return c.position.set(0,.1,0),s.add(c),this.panelGroup.add(s),s}buildFeet(){const{W:e,D:t}=this.params,i=11,s=-i/2,o=[-e/2+10,e/2-10],r=[t/2-50,-t/2+50],a=new Ke(9,7.5,i,32);this.activeGeometries.push(a);const h=new Ke(4,4,4,24);this.activeGeometries.push(h);const l=new Ke(3.5,3.5,.8,24);this.activeGeometries.push(l);for(const c of o)for(const f of r){const m=new Z(a,this.materials.grommetMaterial);m.position.set(c,s,f),m.castShadow=!0,m.receiveShadow=!0,this.feetGroup.add(m);const p=new Z(h,this.materials.railMaterial);p.position.set(c,-i+2,f),this.feetGroup.add(p);const _=new Z(l,this.materials.handleMaterial);_.position.set(c,-i+3.6,f),this.feetGroup.add(_)}this.recordPart("ゴム脚 (黒)","外径φ18(上)/φ15(下) x H11mm (M4用座金入)",4,"床面 奥行きフレーム下面 (前後端から50mm・接地用)","other")}buildCasters(){const{W:e,D:t}=this.params,i=[-e/2+10,e/2-10],s=[t/2-7-20,-(t/2-7)+20],o=new Xe(20,3,40);this.activeGeometries.push(o);const r=new Ke(10,10,12,24);this.activeGeometries.push(r);const a=new Xe(2.5,28,22);this.activeGeometries.push(a);const h=new Xe(2.5,28,22);this.activeGeometries.push(h);const l=new Ke(25,25,20,32);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);const c=new Ke(4,4,24,16);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);for(const f of i)for(const m of s){const p=new pt;p.position.set(f,0,m);const _=new Z(o,this.materials.casterBracket);_.position.set(0,-1.5,0),_.castShadow=!0,p.add(_);const v=new Z(r,this.materials.casterBracket);v.position.set(0,-9,0),p.add(v);const g=new Z(a,this.materials.casterBracket);g.position.set(-10,-27,0),p.add(g);const d=new Z(h,this.materials.casterBracket);d.position.set(10,-27,0),p.add(d);const C=new Z(l,this.materials.casterWheel);C.position.set(0,-41,0),C.castShadow=!0,C.receiveShadow=!0,p.add(C);const M=new Z(c,this.materials.casterBracket);M.position.set(0,-41,0),p.add(M),this.feetGroup.add(p)}this.recordPart("自在キャスター","車輪径φ50 / 取付高66mm",4,"床面 奥行きフレーム下面 (端から7mm控え)","other")}addPerch2020GrayCap(e,t,i){const a=new mt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const h={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},l=new ft(a,h);l.translate(0,0,-1.5),this.activeGeometries.push(l);const c=new Z(l,this.materials.perchGrayCap);return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,c.name="止まり木・ECP-2020-4-GY",this.perchGroup.add(c),c}addPerch1530BlackCap(e,t,i){const a=new mt;a.moveTo(-7.5+1,-15),a.lineTo(7.5-1,-15),a.absarc(7.5-1,-14,1,-Math.PI/2,0,!1),a.lineTo(7.5,14),a.absarc(7.5-1,14,1,0,Math.PI/2,!1),a.lineTo(-7.5+1,15),a.absarc(-7.5+1,14,1,Math.PI/2,Math.PI,!1),a.lineTo(-7.5,-14),a.absarc(-7.5+1,-14,1,Math.PI,Math.PI*1.5,!1);const h={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.2,bevelThickness:.2},l=new ft(a,h);l.rotateX(Math.PI/2),l.translate(0,-1.5,0),this.activeGeometries.push(l);const c=new Z(l,this.materials.perchBlackCap);return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,c.name="止まり木・ECP-1530-6",this.perchGroup.add(c),c}addPerchThumbScrew(e,t,i){const r=new Ke(5,5,5,24);r.translate(0,5/2,0),this.activeGeometries.push(r);const a=new Z(r,this.materials.perchWhiteScrew);return a.position.set(e,t,i),a.castShadow=!0,a.name="止まり木・M3つまみネジ",this.perchGroup.add(a),a}buildPerch(){const{W:e,D:t,H:i}=this.params,s=e-120,o=Math.floor(s/7)*7,r=Math.max(10,o-15),a=Math.max(10,Math.round(i/2)),h=Math.max(0,a-50-15),l=Math.max(10,Math.floor(h/20)*10),c=15+l,f=this.materials.perchAluminum,m=this.materials.handleMaterial,p=o/2,_=i-20-10,v=90,g=new Rt(0,0,0),d=[-p,p];for(const L of d){const y=Ed(v,"bottom");y.translate(0,0,-v/2),this.activeGeometries.push(y);const b=new Z(y,f);b.position.set(L,_,0),b.rotation.copy(g),b.castShadow=!0,b.receiveShadow=!0,b.name="止まり木・天板固定フレーム2020",this.perchGroup.add(b),this.addPerch2020GrayCap(L,_,v/2),this.addPerch2020GrayCap(L,_,-v/2);const A=[25,-25];for(const O of A)this.addPerchThumbScrew(L,i-20,O)}const C=i-40,M=C-a/2,x=C-a;for(const L of d){const y=Gv(a);y.translate(0,0,-a/2),y.rotateX(Math.PI/2),this.activeGeometries.push(y);const b=new Z(y,f);b.position.set(L,M,0),b.castShadow=!0,b.receiveShadow=!0,b.name="止まり木・吊り下げフレーム1530",this.perchGroup.add(b),this.addPerch1530BlackCap(L,x,0);const A=[x+15,x+15+l,x+15+2*l];for(let O=0;O<A.length;O++){const U=A[O],G=L>0?1:-1,B=new Ke(3,3,.4,16);B.rotateZ(Math.PI/2),this.activeGeometries.push(B);const Y=new Z(B,this.materials.railMaterial);Y.position.set(L+G*7.4,U,0),this.perchGroup.add(Y)}}const I=x+c,R=new Ke(15,15,r,32);R.rotateZ(Math.PI/2),this.activeGeometries.push(R);const w=new Z(R,f);w.position.set(0,I,0),w.castShadow=!0,w.receiveShadow=!0,w.name="止まり木・アルミ丸パイプASTP-30",this.perchGroup.add(w);for(const L of d){const y=L>0?1:-1,b=new Ke(5,5,3.5,16);b.rotateZ(Math.PI/2),this.activeGeometries.push(b);const A=new Z(b,m);A.position.set(L+y*9.2,I,0),A.castShadow=!0,this.perchGroup.add(A)}this.recordPart("AFSF-2020-4-90",90,2,"止まり木 天板固定フレーム (溝なし下面・シルバー)","frame"),this.recordPart(`AFS-1530-6-${a}`,a,2,"止まり木 垂直吊り下げフレーム (高さ調整3穴加工・シルバー)","frame"),this.recordPart(`ASTP-30-${r}`,r,1,"止まり木 φ30アルミ丸パイプ (シルバー)","frame"),this.recordPart("ECP-2020-4-GY","20x20mm (グレー)",4,"止まり木 天板固定フレーム両端用エンドキャップ","rail_cap"),this.recordPart("ECP-1530-6","15x30mm (ブラック)",2,"止まり木 吊り下げフレーム下端用エンドキャップ","rail_cap"),this.recordPart("M3x8 つまみネジ (白)","M3 x L8mm",4,"止まり木 天板パンチング固定用つまみネジ","other"),this.recordPart("M6 ボルト","M6 x L20mm",2,"止まり木 φ30丸棒固定用ボルト","other")}buildCaulking(){const{W:e,D:t,hasFloorReinforcement:i}=this.params,s=this.materials.caulkingMaterial,o=5,r=3,a=C=>{const M=new mt;M.moveTo(0,0),M.lineTo(o,0),M.lineTo(0,r),M.closePath();const x=new ft(M,{depth:C,bevelEnabled:!1});return x.translate(0,0,-C/2),this.activeGeometries.push(x),x},h=Math.max(10,e-40),l=a(h),c=new Z(l,s);c.rotation.y=-Math.PI/2,c.position.set(0,20,-t/2+20),this.caulkingGroup.add(c);const f=a(h),m=new Z(f,s);m.rotation.y=Math.PI/2,m.position.set(0,20,t/2-20),this.caulkingGroup.add(m);const p=Math.max(10,t-50),_=a(p),v=new Z(_,s);v.position.set(-e/2+20,20,0),this.caulkingGroup.add(v);const g=a(p),d=new Z(g,s);if(d.rotation.y=Math.PI,d.position.set(e/2-20,20,0),this.caulkingGroup.add(d),i){const{floorSplitCount:C}=this.params,M=(e-80)/3,x=-e/2+30+M,I=e/2-30-M,R=C===3?[x,I]:[0];for(const w of R){const L=a(p),y=new Z(L,s);y.rotation.y=Math.PI,y.position.set(w-10,20,0),this.caulkingGroup.add(y);const b=a(p),A=new Z(b,s);A.position.set(w+10,20,0),this.caulkingGroup.add(A)}}}buildRubberPacking(){const{W:e,D:t,H:i,hasSideReinforcement:s,sideOpeningH:o}=this.params,r=this.params.panelConfig||{},a=this.materials.rubberPackingMaterial;let h=0;const l=(_,v,g,d,C,M,x)=>{const I=new Xe(_,v,g);this.activeGeometries.push(I);const R=new Z(I,a);R.position.set(d,C,M),this.rubberPackingGroup.add(R),h+=x},c=1.6,f=3;if((r.back||"acrylic")!=="polyca"){const _=Math.max(10,e-40),v=Math.max(10,i-40),g=-t/2+20+c/2;l(_,f,c,0,20+f/2,g,_),l(f,v,c,-e/2+20+f/2,i/2,g,v),l(f,v,c,e/2-20-f/2,i/2,g,v)}const p=Math.max(10,t-40);if(s){const _=r.sideLower||"acrylic",v=r.sideUpper||"punching",g=Math.max(10,o),d=Math.max(10,i-60-g);if(_!=="polyca")for(const C of[-1,1]){const M=C*(e/2-20)-C*(c/2),x=20+d/2;l(c,f,p,M,20+f/2,0,p),l(c,d,f,M,x,-t/2+20+f/2,d),l(c,d,f,M,x,t/2-20-f/2,d)}if(v!=="polyca")for(const C of[-1,1]){const M=C*(e/2-20)-C*(c/2),x=20+d+20,I=x+g/2;l(c,f,p,M,x+f/2,0,p),l(c,g,f,M,I,-t/2+20+f/2,g),l(c,g,f,M,I,t/2-20-f/2,g)}}else if((r.side||"acrylic")!=="polyca"){const v=Math.max(10,i-40);for(const g of[-1,1]){const d=g*(e/2-20)-g*(c/2);l(c,f,p,d,20+f/2,0,p),l(c,v,f,d,i/2,-t/2+20+f/2,v),l(c,v,f,d,i/2,t/2-20-f/2,v)}}if(h>0){const _=Math.ceil(h/1e3);this.recordPart("モレ対策ゴムパッキン (グレー)",`${_} m`,1,`側面・背面 隙間モレ抑制用 (実施工長: ${Math.round(h)}mm / 1m単位積算)`,"other",{partCode:"NSCP1H-S-6",lengthMm:_*1e3,unitType:"m"})}}buildRoomDivider(){const{W:e,D:t,H:i,cageType:s,frontWideFrame:o,frontWindowH:r}=this.params,h=(this.params.panelConfig||{}).partition||"black_matte",l=Math.max(10,t-32),c=Math.max(10,i-23.5),f=3;let m=this.materials.blackMatteAcrylic,p="acrylic_black_matte_3_0",_="アクリル黒両面マット 3.0mm";if(h==="acrylic")m=this.materials.acrylic,p="acrylic_extrusion_3_0",_="透明アクリル 3.0mm";else if(h==="smoke_gray")m=this.materials.smokeGrayAcrylic,p="acrylic_smoke_gray_3_0",_="アクリル グレースモーク半透明 3.0mm";else if(h==="punching"){const oe=ia(l,c,!1);this.activeTextures.push(oe),m=this.materials.createPunchingMaterial(oe),this.activeMaterials.push(m),p="pvc_punching_3_0",_="塩ビパンチングボード 透明 3.0mm"}const v=t/2-20,g=v-l,d=11.5,C=d+c,M=18,x=new mt;x.moveTo(v,d+M),x.lineTo(v,C),x.lineTo(g+M,C),x.lineTo(g,C-M),x.lineTo(g,d+M),x.lineTo(g+M,d),x.lineTo(v-M,d),x.lineTo(v,d+M);const I=new ft(x,{depth:f,bevelEnabled:!1}),R=I.attributes.position;for(let oe=0;oe<R.count;oe++){const Q=R.getX(oe),re=R.getY(oe),ne=R.getZ(oe);R.setXYZ(oe,ne-f/2,re,Q)}R.needsUpdate=!0;const w=I.attributes.uv;if(w){for(let oe=0;oe<w.count;oe++){const Q=R.getZ(oe),re=R.getY(oe),ne=(Q-g)/l,xe=(re-d)/c;w.setXY(oe,ne,xe)}w.needsUpdate=!0}I.computeVertexNormals(),this.activeGeometries.push(I);const L=new Z(I,m);L.castShadow=!0,L.receiveShadow=!0,L.name="２室分け仕切り板",this.dividerGroup.add(L),this.recordPart(`２室分け仕切り板 (${_})`,`${l} x ${c}`,1,`２室分け仕切り板後付け仕様 (${_})`,"panel",{panelCode:p,partCode:p,widthMm:l,heightMm:c});let y=30;if(s==="A"||s==="A_FRONT"){const oe=o||"2x";oe==="3x"?y=50:oe==="2x"?y=30:y=10}else y=(this.params.hasBottomWideFrame?40:20)+(r||50)+10;const b=18,A=18,O=18,U=3.5,G=new mt;G.moveTo(0,0),G.lineTo(-A,0),G.lineTo(-A,-U),G.lineTo(-U,-U),G.lineTo(-U,-O),G.lineTo(0,-O),G.closePath();const B=new ft(G,{depth:b,bevelEnabled:!1}),Y=B.attributes.position;for(let oe=0;oe<Y.count;oe++){const Q=Y.getX(oe),re=Y.getY(oe),ne=Y.getZ(oe);Y.setXYZ(oe,-f/2+Q,y-b/2+ne,v+re)}Y.needsUpdate=!0,B.computeVertexNormals(),this.activeGeometries.push(B);const z=new Z(B,this.materials.perchAluminum);z.castShadow=!0,z.name="２室分け・ABL-2015-4",this.dividerGroup.add(z);const N=-f/2-A/2,ee=y,ae=v-U-1,ge=new Ke(3.5,3.5,1.8,16);ge.rotateX(Math.PI/2),ge.translate(N,ee,ae),this.activeGeometries.push(ge);const Ce=new Z(ge,this.materials.handleMaterial);Ce.name="２室分け・フレーム固定プラスネジ",this.dividerGroup.add(Ce);const Be=new Xe(4,.8,.5);Be.translate(N,ee,ae-.7),this.activeGeometries.push(Be);const j=new Z(Be,this.materials.wireMesh);this.dividerGroup.add(j);const le=new Xe(.8,4,.5);le.translate(N,ee,ae-.7),this.activeGeometries.push(le);const Me=new Z(le,this.materials.wireMesh);this.dividerGroup.add(Me);const pe=-f/2-U-2.5,he=y,Ae=v-O/2,me=new Ke(4.8,4.8,5,18);me.rotateZ(Math.PI/2),me.translate(pe,he,Ae),this.activeGeometries.push(me);const Ee=new Z(me,this.materials.perchWhiteScrew);Ee.name="２室分け・M3つまみネジ(ブラケット固定)",this.dividerGroup.add(Ee);const te=i-20+f,K=te+2,D=[{x:-3.5,z:-t/2+50},{x:3.5,z:-t/2+65},{x:-3.5,z:t/2-60},{x:3.5,z:t/2-75}];for(const oe of D){const Q=new Ke(4.5,4.5,4,16);Q.translate(oe.x,K,oe.z),this.activeGeometries.push(Q);const re=new Z(Q,this.materials.perchWhiteScrew);re.name="２室分け・天板M3つまみネジ",this.dividerGroup.add(re);const ne=new Ke(1.5,1.5,7,12);ne.translate(oe.x,te-3.5,oe.z),this.activeGeometries.push(ne);const xe=new Z(ne,this.materials.handleMaterial);this.dividerGroup.add(xe)}this.recordPart("ABL-2015-4","20x15x15mm",1,"２室分け L字ブラケット ABL-2015-4 (シルバー)","rail_cap",{partCode:"ABL-2015-4",unitType:"piece"}),this.recordPart("M3 つまみネジ (白)","M3 x L8mm",5,"２室分け固定・倒れ防止用つまみネジ","other"),this.recordPart("M4 皿ネジ","M4 x L8mm",1,"２室分けフレーム固定用皿ネジ","other")}buildLed(){const{W:e,D:t,H:i,ledType:s,ledPower:o,ledBrightness:r=1,ledColorMode:a,ledRgbColor:h}=this.params;if(!s||s==="none")return;const l=i-32,c=i-20,f=(_,v,g,d,C,M,x)=>{const w=c-(l-g/2),L=(c+(l-g/2))/2;for(const j of[-1,1]){const le=j*(_/2-35),Me=new Xe(12,w,2.5);Me.translate(le,L,d),this.activeGeometries.push(Me);const pe=new Z(Me,this.materials.ledBracket);pe.name="LED天板吊り下げステー金具",this.ledGroup.add(pe);const he=new Ke(2.5,2.5,3,12);he.rotateX(Math.PI/2),he.translate(le,c-4,d+2.5/2),this.activeGeometries.push(he);const Ae=new Z(he,this.materials.perchAluminum);this.ledGroup.add(Ae)}const y=new Xe(_,g*.65,v);y.translate(0,l+g*.175,d),this.activeGeometries.push(y);const b=new Z(y,this.materials.ledAluminum);b.name="LEDアルミボディ",this.ledGroup.add(b);const A=g*.45,O=v-2,U=l-g*.25;let G;G=new Xe(_-4,A,O),G.translate(0,U,d),this.activeGeometries.push(G);const B=this.materials.ledEmissive.clone();if(x){const j=new Je(M);B.color=j,B.emissive=j,B.emissiveIntensity=Math.max(.5,(r||1)*4)}else B.color=new Je(15791094),B.emissive=new Je(0),B.emissiveIntensity=0;const Y=new Z(G,B);Y.name="LED発光ディフューザー",this.ledGroup.add(Y);const z=2.5;for(const j of[-1,1]){const le=j*(_/2+z/2),Me=new Xe(z,g+.8,v+.8);Me.translate(le,l,d),this.activeGeometries.push(Me);const pe=new Z(Me,this.materials.perchGrayCap);this.ledGroup.add(pe)}const N=1.8,ee=_/2+z,ae=e/2-25,ge=Math.max(10,ae-ee),Ce=new Ke(N,N,ge,8);Ce.rotateZ(Math.PI/2),Ce.translate(ee+ge/2,l+2,d),this.activeGeometries.push(Ce);const Be=new Z(Ce,this.materials.ledCable);Be.name="LED給電コード",this.ledGroup.add(Be)},m=(_,v,g=350,d=-t/2+55)=>{if(!o||v<=0)return;const C=new Je(_),M=e-44,x=t-44,I=i-44,R=i/2,w=new T(-M/2,22,-x/2),L=new T(M/2,i-22,x/2),y=new T(0,i-32,d),b=`
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
      `,O=new Xe(M,I,x);O.translate(0,R,0),this.activeGeometries.push(O);const U=new ti({vertexShader:b,fragmentShader:A,uniforms:{uColor:{value:C},uBoxMin:{value:w},uBoxMax:{value:L},uLightPos:{value:y},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:or,depthWrite:!1,side:Jt});this.activeMaterials.push(U);const G=new Z(O,U);G.name="ケージ室内大気グラデーションフォグ",this.ledGroup.add(G);const B=`
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
      `,Y=new hi(M,x);Y.rotateX(-Math.PI/2),Y.translate(0,20.6,0),this.activeGeometries.push(Y);const z=new ti({vertexShader:b,fragmentShader:B,uniforms:{uColor:{value:C},uBoxMin:{value:w},uBoxMax:{value:L},uLightPos:{value:y},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:or,depthWrite:!1});this.activeMaterials.push(z);const N=new Z(Y,z);N.name="床面LED受光グラデーション",this.ledGroup.add(N);const ee=`
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
      `,ae=new hi(M,I);ae.translate(0,R,-t/2+20.6),this.activeGeometries.push(ae);const ge=new ti({vertexShader:b,fragmentShader:ee,uniforms:{uColor:{value:C},uBoxMin:{value:w},uBoxMax:{value:L},uLightPos:{value:y},uBarL:{value:g},uIntensity:{value:v}},transparent:!0,blending:or,depthWrite:!1});this.activeMaterials.push(ge);const Ce=new Z(ae,ge);Ce.name="背面LED受光グラデーション",this.ledGroup.add(Ce)},p=-t/2+55;switch(s){case"usb":{const _=Math.min(350,e-60);let v=16777215;a==="warm"?v=16754470:a==="all"&&(v=16769202),f(_,18,13,p,!1,v,!!o),m(v,r,_,p),this.recordPart("USB 二色60LEDアルミライトバー [4023]","350mm",1,"USB給電アルミライトバー (白＆電球色 3パターン切替)","other",{partCode:"LED-4023",unitType:"piece",isLedOption:!0,ledKey:"ledUsb"});break}case"rgbw":{const _=Math.min(530,e-60),v=h||"#ffffff";f(_,18,13,p,!1,v,!!o),m(v,r*1.15,_,p),this.recordPart("RGB+W LEDライトバー 30LED [6839]","530mm",1,"RGBフルカラー+独立ホワイト素子アルミバー","other",{partCode:"LED-6839",unitType:"piece",isLedOption:!0,ledKey:"ledRgbw"}),this.recordPart("RGB+W 専用コントローラー [8166]","リモコン付属",1,"調光・調色RFリモコン式コントローラー","other",{partCode:"LED-8166",unitType:"piece",isLedOption:!0}),this.recordPart("ACアダプター 12V 1.5A [6207]","12V 1.5A",1,"DC12V電源アダプター","other",{partCode:"LED-6207",unitType:"piece",isLedOption:!0}),this.recordPart("RGB+W用 5pin延長コード1m [6433]","1m",1,"配線取り回し用 5pin延長コード","other",{partCode:"LED-6433",unitType:"piece",isLedOption:!0});break}}}recordPart(e,t,i,s,o="other",r={}){const a=typeof t=="number"?`${Math.round(t)} mm`:t,h=typeof t=="number"?Math.round(t):r.lengthMm||null;let l=e;if(typeof t=="number"&&e.includes("-")){const c=e.split("-");isNaN(c[c.length-1])||(l=c.slice(0,-1).join("-"))}this.partsList.push({name:e,size:a,count:i,note:s,category:o,lengthMm:h,partCode:r.partCode||l,unitType:r.unitType||(typeof t=="number"?"m":"piece"),...r})}getPartsSummary(){return this.partsList}}class Xv{constructor(){this.group=new pt,this.group.name="DimensionLines",this.lineMaterial=new Zc({color:165063,linewidth:2,depthTest:!1,transparent:!0,opacity:.85}),this.textSprites=[],this.activeGeometries=[]}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e)}for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.textSprites)e.material.map&&e.material.map.dispose(),e.material.dispose();this.textSprites=[]}createTextSprite(e,t="#38bdf8",i="#ffffff",s="rgba(20, 26, 38, 0.88)"){const o=document.createElement("canvas");o.width=384,o.height=120;const r=o.getContext("2d");r.fillStyle=s,r.strokeStyle=t,r.lineWidth=4;const a=24;r.beginPath(),r.roundRect(10,10,364,100,a),r.fill(),r.stroke(),r.font="bold 44px sans-serif",r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.fillText(e,192,60);const h=new Da(o);h.minFilter=Yt;const l=new Yu({map:h,depthTest:!1,transparent:!0}),c=new T1(l);return c.scale.set(90,30,1),this.textSprites.push(c),c}update(e){this.clear();const{W:t,D:i,H:s,cageType:o,frontWindowH:r,hasSideReinforcement:a,sideOpeningH:h}=e,l=5,c=i/2+55,f=this.createTextSprite(`W: ${t} mm`,"#38bdf8","#ffffff");f.position.set(0,l,c),this.group.add(f);const m=t/2+55,p=5,_=this.createTextSprite(`D: ${i} mm`,"#38bdf8","#ffffff");_.position.set(m,p,0),this.group.add(_);const v=-t/2-55,g=i/2,d=this.createTextSprite(`H: ${s} mm`,"#38bdf8","#ffffff");if(d.position.set(v,s/2,g),this.group.add(d),o==="C"){const C=t/2+50,M=i/2+10,x=20+r/2,I=this.createTextSprite(`前窓: ${r} mm`,"#fb923c","#ffffff","rgba(35, 20, 12, 0.9)");I.scale.set(80,27,1),I.position.set(C,x,M),this.group.add(I)}if(a){const C=-t/2-50,M=0,x=h,I=s-20-x/2,R=this.createTextSprite(`側面上部開口: ${x} mm`,"#34d399","#ffffff","rgba(12, 32, 24, 0.9)");R.scale.set(95,27,1),R.position.set(C,I,M),this.group.add(R)}}setVisible(e){this.group.visible=e}}class $v{constructor(e){this.container=e,this.width=e.clientWidth,this.height=e.clientHeight,this.scene=new $u,this.scene.background=null,this.camera=new fn(40,this.width/this.height,1,8e3),this.camera.position.set(-1130,740,1070),this.isAutoRotating=!1,this._autoRotateAngle=0,this._autoRotateSpeed=.003,this._lastAutoParams=null,this.renderer=new b1({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fu,this.renderer.toneMapping=mu,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement);const t=new Ec(this.renderer);t.compileEquirectangularShader();const i=t.fromScene(new Cv,.04).texture;this.scene.environment=i,this.controls=new pv(this.camera,this.renderer.domElement),this.controls.target.set(-60,100,-15),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI-.05,this.controls.minDistance=200,this.controls.maxDistance=4e3,this.setupLighting(),this.setupFloorGrid(),this.materials=new Av,this.cageModel=new Vv(this.materials),this.scene.add(this.cageModel.root),this.dimensions=new Xv,this.scene.add(this.dimensions.group),window.addEventListener("resize",()=>this.onResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupLighting(){this.studioLights=[];const e=new rv(16777215,1975344,.38);e.position.set(0,1e3,0),this.scene.add(e),this.studioLights.push({light:e,baseIntensity:.38});const t=new ea(16777215,1.35);t.position.set(1e3,1600,1200),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=100,t.shadow.camera.far=4e3;const i=1e3;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.bias=-5e-4,t.shadow.radius=3.5,this.scene.add(t),this.studioLights.push({light:t,baseIntensity:1.35});const s=new ea(16777215,.65);s.position.set(0,1200,0),this.scene.add(s),this.studioLights.push({light:s,baseIntensity:.65});const o=new ea(16777215,.5);o.position.set(-1e3,1e3,-1200),this.scene.add(o),this.studioLights.push({light:o,baseIntensity:.5});const r=new ea(2765376,.25);r.position.set(0,-1e3,0),this.scene.add(r),this.studioLights.push({light:r,baseIntensity:.25}),this.ledLightGroup=new pt,this.scene.add(this.ledLightGroup),this.isDarkroomMode=!1,this.manualDarkroomOverride=null}setupFloorGrid(){this.gridHelper=new dv(2400,24,5924219,3028291),this.gridHelper.position.y=-10,this.scene.add(this.gridHelper);const e=new hi(3e3,3e3),t=new ov({opacity:.35});this.floor=new Z(e,t),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-10.1,this.floor.receiveShadow=!0,this.scene.add(this.floor)}applyDarkroomMode(e){this.isDarkroomMode=e;const t=e?.05:1;if(this.studioLights)for(const i of this.studioLights)i.light.intensity=i.baseIntensity*t;this.gridHelper&&(this.gridHelper.material.opacity=e?.15:.85,this.gridHelper.material.transparent=!0),this.container&&this.container.classList.toggle("darkroom-active",e)}setDarkroomOverride(e){this.manualDarkroomOverride=e,this._lastAutoParams&&this.updateLedLighting(this._lastAutoParams)}updateLedLighting(e){for(;this.ledLightGroup.children.length>0;){const v=this.ledLightGroup.children[0];v.target&&v.target.parent&&v.target.parent.remove(v.target),this.ledLightGroup.remove(v),v.dispose&&v.dispose()}const{W:t,D:i,H:s,ledType:o,ledPower:r,ledBrightness:a=1,ledColorMode:h,ledRgbColor:l}=e,c=o&&o!=="none"&&!!r,f=this.manualDarkroomOverride!==null?this.manualDarkroomOverride:c;if(this.applyDarkroomMode(f),!c)return;const m=s-34,p=-i/2+55,_=(v,g,d,C,M=1)=>{const x=new lv(C,a*6.5*M);x.position.set(v,g,d),x.angle=Math.PI/2.3,x.penumbra=.85,x.decay=1.2,x.distance=Math.max(s*2,800);const I=new Ft;I.position.set(v,20,0),this.scene.add(I),x.target=I,this.ledLightGroup.add(x);const R=new nf(C,a*2.8*M,Math.max(t,i)*2.2);R.position.set(v,s*.65,d+25),this.ledLightGroup.add(R)};if(o==="usb"){let v=16777215;h==="warm"?v=16754470:h==="all"&&(v=16769722),_(0,m,p,v)}else if(o==="high_cri_white")_(0,m,p,16579578);else if(o==="red")_(0,m,p,16717636,1.4);else if(o==="white_and_red"){const v=h==="all"||h==="both"||h==="white",g=h==="all"||h==="both"||h==="red";v&&_(0,m,-i/2+85,16579578,1),g&&_(0,m,-i/2+45,16717636,1.3)}else o==="rgbw"&&_(0,m,p,l||"#ffffff",1.2)}setFrameColor(e){this.materials.setFrameColor(e)}update(e){this._lastAutoParams=e;const t=e.footType==="caster"?-66:-11;this.gridHelper&&(this.gridHelper.position.y=t),this.floor&&(this.floor.position.y=t-.1),this.cageModel.update(e),this.dimensions.update(e),this.updateLedLighting(e);const i=e.H/2;this.controls.target.set(0,i,0)}setDimensionsVisible(e){this.dimensions.setVisible(e)}setPanelsVisible(e){this.cageModel.panelGroup.visible=e,this.cageModel.doorGroup.visible=e}setDoorState(e){this.cageModel.params.doorState=e,this.cageModel.buildDoors()}setViewPreset(e,t){const i=t.H||300,s=t.W||750,o=t.D||450,r=i/2,a=Math.max(s,o,i)*2.2;switch(this.controls.target.set(0,r,0),e){case"front":this.controls.target.set(0,r,0),this.camera.position.set(0,r,a);break;case"iso":default:{const l=Math.max(s,o,i)*1.5;this.controls.target.set(0,i*.45,0),this.camera.position.set(-l*.82,i*1.05+l*.55,l*.82);break}case"top":this.controls.target.set(0,r,0),this.camera.position.set(0,r+a*1.3,1);break;case"side":this.controls.target.set(0,r,0),this.camera.position.set(a,r,0);break;case"bottom":this.controls.target.set(0,r,0),this.camera.position.set(a*.4,-a*.7,a*.6);break}this.controls.update()}onResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setAutoRotate(e,t){if(this.isAutoRotating=e,e){const i=this.controls.target,s=this.camera.position.x-i.x,o=this.camera.position.y-i.y,r=this.camera.position.z-i.z,a=Math.sqrt(s*s+o*o+r*r);this._autoRotateAngle=Math.atan2(r,s),this._autoRotatePhi=Math.asin(Math.max(-1,Math.min(1,o/a))),this._autoTargetYOffset=0,this._autoRadiusScale=1,this._lastAutoParams=t?{...t}:null,this.controls.enableDamping=!1,this.controls.enabled=!1,this._setupAutoRotateDrag()}else this.controls.enabled=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this._teardownAutoRotateDrag()}_setupAutoRotateDrag(){const e=this.renderer.domElement;this._dragState={active:!1,button:-1,lastY:0},this._onPointerDown=t=>{this._dragState.active=!0,this._dragState.button=t.button,this._dragState.lastY=t.clientY,t.preventDefault()},this._onPointerMove=t=>{if(!this._dragState.active)return;const i=t.clientY-this._dragState.lastY;this._dragState.lastY=t.clientY;const s=.005;if(this._dragState.button===0)this._autoRotatePhi-=i*s,this._autoRotatePhi=Math.max(-.05,Math.min(Math.PI/2-.05,this._autoRotatePhi));else if(this._dragState.button===2){const o=this._lastAutoParams&&this._lastAutoParams.H||300;this._autoTargetYOffset-=i*.5;const r=o*.8;this._autoTargetYOffset=Math.max(-r,Math.min(r,this._autoTargetYOffset))}},this._onPointerUp=()=>{this._dragState.active=!1,this._dragState.button=-1},this._onWheel=t=>{t.preventDefault();const i=.001;this._autoRadiusScale*=1+t.deltaY*i,this._autoRadiusScale=Math.max(.3,Math.min(3,this._autoRadiusScale))},e.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),e.addEventListener("wheel",this._onWheel,{passive:!1}),this._onContextMenu=t=>t.preventDefault(),e.addEventListener("contextmenu",this._onContextMenu)}_teardownAutoRotateDrag(){const e=this.renderer.domElement;this._onPointerDown&&e.removeEventListener("pointerdown",this._onPointerDown),this._onPointerMove&&window.removeEventListener("pointermove",this._onPointerMove),this._onPointerUp&&window.removeEventListener("pointerup",this._onPointerUp),this._onWheel&&e.removeEventListener("wheel",this._onWheel),this._onContextMenu&&e.removeEventListener("contextmenu",this._onContextMenu),this._onPointerDown=null,this._onPointerMove=null,this._onPointerUp=null,this._onWheel=null,this._onContextMenu=null}_calcAutoRotateCamera(e){const t=e&&e.W||750,i=e&&e.D||450,s=e&&e.H||300,o=Math.max(t,i,s)*1.45,r=s*.5;return{radius:o,targetY:r}}animate(){if(requestAnimationFrame(this.animate),this.cageModel.updateDoorAnimation(),this.isAutoRotating&&this._lastAutoParams){this._autoRotateAngle+=this._autoRotateSpeed;const{radius:e,targetY:t}=this._calcAutoRotateCamera(this._lastAutoParams),i=e*(this._autoRadiusScale||1),s=this._autoRotatePhi,o=Math.cos(s),r=Math.cos(this._autoRotateAngle)*i*o,a=Math.sin(this._autoRotateAngle)*i*o,h=t+(this._autoTargetYOffset||0)+i*Math.sin(s),l=t+(this._autoTargetYOffset||0);this.camera.position.set(r,h,a),this.camera.lookAt(0,l,0)}else this.controls.update();this.renderer.render(this.scene,this.camera)}getPartsSummary(){return this.cageModel.getPartsSummary()}captureImage(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}}const Ye={frames:{"AFS-2020-4":{name:"2020標準フレーム (シルバー)",unit:"m",weightPerMeter:.437,pricePerMeter:801,note:"標準4面溝あり"},"AFSF-2020-4":{name:"2020フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.44,pricePerMeter:801,note:"補強・中桟用 1面フラット"},"AFSW-2020-4":{name:"2020フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.444,pricePerMeter:801,note:"2面フラット"},"AFS-2040-4":{name:"2040フレーム (シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面2倍幅・40mm高"},"AFSF-2040-4":{name:"2040フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.712,pricePerMeter:1394,note:"40mm幅 1面フラット"},"AFST-2040-4":{name:"2040フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.715,pricePerMeter:1394,note:"40mm幅 2面フラット"},"AFS-2060-4":{name:"2060フレーム (シルバー)",unit:"m",weightPerMeter:1.09,pricePerMeter:1923,note:"正面3倍幅・60mm高"},"AFS-4040-4":{name:"4040フレーム (シルバー)",unit:"m",weightPerMeter:1.188,pricePerMeter:2095,note:"正面下部 40x40枠囲い用"},"AFS-2020-4-BK":{name:"2020フレーム (ブラック)",unit:"m",weightPerMeter:.437,pricePerMeter:1037,note:"ブラックアルマイト"},"AFS-2040-4-BK":{name:"2040フレーム (ブラック)",unit:"m",weightPerMeter:.752,pricePerMeter:1809,note:"ブラックアルマイト 40mm高"},"AFS-4040-4-BK":{name:"4040フレーム (ブラック)",unit:"m",weightPerMeter:1.188,pricePerMeter:2710,note:"正面下部 40x40枠囲い用 (ブラック)"},"AFS-2020-5":{name:"2020フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.404,pricePerMeter:822,note:"天面金網受用 (5シリーズ)"},"AFS-2040-5":{name:"2040フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面枠囲い天面金網用 (シルバー・5シリーズ)"},"AFS-1530-6":{name:"1530フレーム (シルバー)",unit:"m",weightPerMeter:.684,pricePerMeter:1273,note:"止まり木垂直吊り下げ用フレーム"},"ASTP-30":{name:"φ30アルミパイプ (シルバー)",unit:"m",weightPerMeter:.795,pricePerMeter:1874,note:"止まり木丸棒"}},rails:{"PGRU-03-4-GY":{name:"上側ガラスレール (グレー)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部"},"PGRU-03-4-BK":{name:"上側ガラスレール (ブラック)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部 (黒ケージ連動)"},"PGRL-03-4-GY":{name:"下側ガラスレール (グレー)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用"},"PGRL-03-4-BK":{name:"下側ガラスレール (ブラック)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用 (黒ケージ連動)"}},packings:{"NSCP1H-S-6":{name:"モレ対策ゴムパッキン (グレー)",unit:"m",weightPerMeter:.035,pricePerMeter:841/6,note:"側面・背面 隙間モレ抑制用"}},caps:{"ECP-2020-4":{name:"2020用エンドキャップ",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"奥行きフレーム両端用"},"ECP-2020-4-GY":{name:"2020用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"止まり木天板固定フレーム両端用"},"ECP-1530-6":{name:"1530用エンドキャップ (ブラック)",unit:"piece",weightPerPiece:.0016,pricePerPiece:143,note:"止まり木吊り下げフレーム下端用"},"ABL-2015-4":{name:"L字ブラケット ABL-2015-4 (シルバー)",unit:"piece",weightPerPiece:.0041,pricePerPiece:201,note:"2室分け仕切り板固定用L字ブラケット (シルバー固定)"},"ECP-2040-4":{name:"2040用エンドキャップ",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (ブラック)"},"ECP-2040-4-GY":{name:"2040用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (グレー)"}},hardware:{"TH-31":{name:"TH-31 ステンレス蝶番",unit:"piece",weightPerPiece:.028,pricePerPiece:347,note:"前開き扉用 ステンレス製平蝶番 (下部2箇所)"},"C-1249-4":{name:"C-1249-4 ステンレス打掛",unit:"piece",weightPerPiece:.05,pricePerPiece:660,note:"前開き扉用 ステンレス製打掛錠 (上部2箇所)"},"CP-294N":{name:"タキゲン CP-294N スライドラッチ",unit:"piece",weightPerPiece:.055,pricePerPiece:792,note:"正面枠囲い扉用 ワンタッチスライドラッチ (左右各1個)"},"ACRYLIC-ROUND-20-5":{name:"アクリル丸板 透明 φ20mm t5mm (穴加工済)",unit:"piece",weightPerPiece:.002,pricePerPiece:190,note:"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)"},"GROMMET-30":{name:"配線用ゴムグロメット (φ30穴用, 黒)",unit:"piece",weightPerPiece:.005,pricePerPiece:80,note:"天面板 奥側配線用グロメット"},RNSFS4:{name:"段付きローレットノブ (SUS303, RNSFS4)",unit:"piece",weightPerPiece:.012,pricePerPiece:350,note:"引き違い扉用 ステンレスつまみ"},"C-108":{name:"プッシュ式スライド扉鍵 (C-108)",unit:"piece",weightPerPiece:.045,pricePerPiece:800,note:"右スライド扉 下部プッシュ式シリンダー錠"},"RUBBER-FOOT":{name:"ゴム脚 (黒)",unit:"piece",weightPerPiece:.008,pricePerPiece:60,note:"床面接地用ゴム脚 (座金入り)"},"CASTER-50":{name:"自在キャスター",unit:"piece",weightPerPiece:.12,pricePerPiece:200,note:"車輪径φ50 自在キャスター"},"SCREW-M4-KNOB":{name:"No.1 化粧つまみネジ (ホワイト)",unit:"piece",weightPerPiece:.0025,pricePerPiece:25,note:"床下パネルヒータ支え板・換気量調整板用 手締め化粧ネジ"},"SCREW-M3-KNOB":{name:"M3 つまみネジ (白)",unit:"piece",weightPerPiece:.002,pricePerPiece:25,note:"止まり木・仕切り板用 固定つまみネジ"},"BOLT-M6-20":{name:"M6 ボルト",unit:"piece",weightPerPiece:.008,pricePerPiece:30,note:"止まり木 φ30丸棒固定用ボルト"},"SCREW-M4-FLAT":{name:"M4 皿ネジ",unit:"piece",weightPerPiece:.003,pricePerPiece:15,note:"仕切り板フレーム固定用皿ネジ"}},panels:{acrylic_extrusion_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:7568,note:"標準透明パネル (床・背・側面・天面・固定窓 / acrylic_extrusion_price_config.jsより自動積算)"},acrylic_cast_3_0:{name:"透明アクリル 3.0mm (キャスト板・正面扉専用)",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:14652,note:"正面扉専用 (キャスト板 / acrylic_cast_price_config.jsより自動積算: 穴加工2箇所310円+磨き4辺2056円=計2366円/枚込)"},polyca_4_0:{name:"中空ポリカ 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.9,pricePerM2:7500,note:"高断熱・軽量中空ポリカーボネート"},danplate_4_0:{name:"プラダン 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.66,pricePerM2:1e3,note:"床下パネルヒータ用 緩衝プラダン"},pvc_punching_3_0:{name:"塩ビパンチングボード 透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:4.3,pricePerM2:20092,note:"通気孔パネル (φ3.1-P7 / pvc_punching_price_config.js価格表より自動積算)"},acrylic_black_matte_3_0:{name:"アクリル黒両面マット 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10344,baseCostPerPiece:400,note:"低反射・マットブラックアクリル (acrylic_black_matte_price_config.jsより自動積算 / スライド部材は固定原価+400円)"},acrylic_smoke_gray_3_0:{name:"アクリル グレースモーク半透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10976,note:"暗め半透明スモークアクリル (コモグラス 530K / acrylic_smoke_gray_price_config.jsより自動積算)"},acrylic_extrusion_1_5:{name:"透明アクリル 1.5mm",thicknessMm:1.5,unit:"m2",weightPerM2:1.8,pricePerM2:4336,note:"側面換気量調整板等 (acrylic_extrusion_price_config.jsより自動積算)"},acrylic_extrusion_2_0:{name:"透明アクリル 2.0mm",thicknessMm:2,unit:"m2",weightPerM2:2.4,pricePerM2:5296,note:"予備・薄物パネル (acrylic_extrusion_price_config.jsより自動積算)"},wire_mesh_15:{name:"金網15mmピッチ（黒粉体塗装）",pitchMm:15,unit:"m2",weightPerM2:8.9,pricePerM2:42712,note:"天面金網 (FENP15, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_25:{name:"金網25mmピッチ（黒粉体塗装）",pitchMm:25,unit:"m2",weightPerM2:6.2,pricePerM2:25627,note:"天面金網 (FENP25, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_30:{name:"金網30mmピッチ（黒粉体塗装）",pitchMm:30,unit:"m2",weightPerM2:4.4,pricePerM2:14949,note:"天面金網 (FENP30, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"}},options:{labor:{splitFloor:{name:"床面2分割 加工工賃",price:500,note:"床面中央補強フレーム追加に伴う2分割加工工賃"},splitTop:{name:"天面2分割 加工工賃",price:500,note:"天面中央補強フレーム追加に伴う2分割加工工賃 (幅940mm超の必須時を含む)"},typeC:{name:"Type C (前窓＋扉) 加工工賃",price:500,note:"下部アクリル固定窓および扉加工に伴う加工工賃"},splitSide:{name:"側面2分割 加工工賃",price:1e3,note:"側面補強フレーム追加に伴う左右側面の上下2分割加工工賃"},frontWide3x:{name:"正面下側幅広フレーム3倍幅 加工工賃",price:500,note:"正面下側フレームの3倍幅(60mm)特殊加工工賃"},perch:{name:"止まり木 加工工賃",price:1e3,note:"天板付け止まり木 穴あけ・組み立て加工工賃"},rubberPacking:{name:"モレ対策ゴムパッキン 加工工賃",price:800,note:"側面・背面隙間モレ抑制ゴムパッキン施工工賃 (施工面数に関わらず一律)"},roomDivider:{name:"2室分け仕切り板 加工工賃",price:500,note:"仕切り板C面カット・取付穴あけ・組み立て加工工賃"},frontOpenDoor:{name:"TypeA 前開き 加工工賃",price:3e3,note:"前開き扉 切欠き・穴あけ加工工賃"},frontFramedDoor:{name:"TypeA 正面枠囲い 加工工賃",price:5e3,note:"正面枠囲いアルミ扉・ラッチ組み立て加工工賃"},floorHeaterSupport:{name:"床下パネルヒータ支え板 加工工賃",price:1e3,note:"床下パネルヒータ支え板 取り付け・加工工賃"},wideBottom:{name:"下側幅広フレーム 加工工賃",price:2e3,note:"下側幅広フレーム（高さ40mm・外周）加工・組立工賃"},wideTop:{name:"上側幅広フレーム 加工工賃",price:2e3,note:"上側幅広フレーム（高さ40mm・外周）加工・組立工賃（上下両方で計4000円）"}},items:{caster:{name:"自在キャスター仕様 (4輪)",price:1500,cost:800,note:"車輪径φ50 / 取付高66mm (標準ゴム脚からの変更)"},sideVentCover:{name:"側面換気量調整板 (つまみネジ付)",price:500,cost:200,holeCostPerPiece:94,holesPerPanel:4,note:"t1.5透明アクリル外張り＋φ6mm穴加工4箇所/枚＋No.1化粧つまみネジ (穴加工費は原価に積み上げ)"},ledUsb:{name:"LED照明: USB式 白＆電球色 LED",price:3e3,cost:1980,length:350,weight:.12,note:"USB 二色60LEDアルミライトバー [4023] (USB-A給電・3パターン切替)"},ledRgbw:{name:"LED照明: リモコン操作 RGB+W",price:6500,cost:5490,length:530,weight:.35,note:"RGB+W 30LED[6839] + 専用コントローラー[8166] + 12Vアダプター[6207] + 5pin延長コード1m[6433]"},floorHeaterSupport:{name:"床下パネルヒータ支え板",holeCostPerPiece:112,diagonalCutCost:239,cornerCutCost:587,screwCostPerPiece:25,note:"透明アクリル2mm＋緩衝プラダン4mm＋穴加工＋斜めカット＋切欠き＋化粧ネジ"}}},pricing:{markupRate:1.3,roundingUnit:100,note:"基本販売価格 = Math.ceil((baseMaterialsCost * markupRate) / roundingUnit) * roundingUnit"},system:{gasLogEndpointUrl:"https://script.google.com/macros/s/AKfycbwWv5VmeJGCnvvD0U3WTJBkT3ZnrFIj1qUHXXMlF2TA3vn2hSu9J1zp-9fc4PY_whjp/exec",shop:{name:"Animal SHOP きなと",subtitle:"3Dケージ設計・見積もりシミュレーター",logoUrl:"/logo_kinato.png",characterUrl:"/character_transparent.png",contactUrl:""}}},Ia=[{id:"standard",name:"標準仕様",icon:"📐",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","標準枠2倍幅"],desc:"サイズやオプション変更してカスタマイズしてください。"},{id:"leopard_gecko",name:"レオパ向け",icon:"🦎",W:540,D:400,H:200,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)"],desc:"保温性ありのレオパちゃんにゆったりサイズ"},{id:"ball_python",name:"ボールパイソン向け",icon:"🐍",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","ロータイプ"],desc:"保温性抜群のロータイプケージ"},{id:"carpet_python",name:"カーペットパイソン",icon:"🐍",W:900,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:50,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,floorSplitCount:2,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type C (前窓50)","ブラック","黒アクリル(側・背)","たわみ防止レール"],desc:"のびのび多彩なレイアウトを組める広々サイズ"},{id:"tortoise",name:"リクガメ",icon:"🐢",W:900,D:500,H:500,cageType:"C",frameColor:"silver",frontWindowH:120,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,floorSplitCount:2,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"mesh30",topLeft:"mesh30",topRight:"mesh30"},tags:["Type C (前窓120)","シルバー","天板金網30mm","たわみ防止レール"],desc:"熱源ライトを安心しておける天板金網仕様"},{id:"bearded_dragon",name:"フトアゴヒゲトカゲ",icon:"🦎",W:800,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:80,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!0,sideOpeningH:200,hasSideVentCover:!1,hasFloorReinforcement:!0,floorSplitCount:2,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"mesh25",topLeft:"mesh25",topRight:"mesh25"},tags:["Type C (前窓80)","ブラック","天板金網25mm","側面2分割","たわみ防止レール"],desc:"通気性も確保しつつ、熱源ライト乗せれる金網仕様"},{id:"hedgehog",name:"ハリネズミ",icon:"🦔",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","側面2分割","換気量調整板"],desc:"側面、背面中空ポリカ・側面2分割・換気量調整板仕様"},{id:"hamster",name:"ハムスター向け",icon:"🐹",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"3x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","正面幅広3倍","中空ポリカ","換気量調整板"],desc:"正面幅広フレーム3倍＆中空ポリカ・換気量調整板仕様"},{id:"sugar_glider",name:"フクロモモンガ",icon:"🐿️",W:350,D:350,H:500,cageType:"A_FRONT",frameColor:"silver",frontWideFrame:"none",hasSideReinforcement:!1,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"punching",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},doorHingeSide:"left",tags:["Type A (前開き)","シルバー","側面パンチング","換気量調整板"],desc:"W350×D350×H500mm前開き仕様。側面全面パンチング＆外張り側面換気量調整板で通気・保温を両立"}],Yv=1.6,qv=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"}],Zv=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"},{min:1801,max:1900,label:"1801〜1900"},{min:1901,max:2e3,label:"1901〜2000"}],Kv={15:[[4970,null,null,null,null,null,null,null],[5240,5290,null,null,null,null,null,null],[7730,7850,7920,null,null,null,null,null],[7920,7980,8040,8110,null,null,null,null],[8040,8070,8110,8170,8230,null,null,null],[8730,8790,8860,8930,8990,9060,null,null],[8990,9060,9120,9200,9260,9320,9400,null],[10440,10500,10540,10570,10610,10640,10680,10710]],25:[[2760,null,null,null,null,null,null,null],[3720,3770,null,null,null,null,null,null],[5280,5410,5470,null,null,null,null,null],[5470,5530,5600,5660,null,null,null,null],[5600,5630,5660,5720,5790,null,null,null],[5950,6020,6080,6150,6220,6280,null,null],[6220,6280,6350,6420,6480,6550,6620,null],[7080,7140,7180,7210,7250,7280,7320,7350],[9910,10910,11460,12030,12400,12780,13170,13830],[10420,11470,12040,12650,13040,13440,13850,14540],[10940,12040,12650,13290,13690,14110,14540,15280],[11500,12650,13290,13970,14390,14830,15280,16040],[12080,13280,13950,14660,15100,15560,16030,16840],[12680,13950,14660,15390,15860,16340,16830,17680],[13070,14390,15110,15870,16350,16840,17360,18230],[13470,14830,15570,16360,16850,17370,17890,18800],[13880,15280,16040,16850,17370,17890,18440,19360]],30:[[2750,null,null,null,null,null,null,null],[2770,2800,null,null,null,null,null,null],[2800,2820,2860,null,null,null,null,null],[2820,2860,2880,2900,null,null,null,null],[2860,2880,2900,2920,2940,null,null,null],[3100,3150,3190,3230,3280,3150,null,null],[3150,3190,3230,3280,3320,3360,3470,null],[3370,3410,3450,3500,3530,3560,3590,3650],[5060,5830,6990,7350,7500,7580,7740,7900],[5580,6420,7710,8100,8260,8350,8520,8690],[5860,6740,8100,8510,8680,8780,8960,9150],[6040,6950,8350,8770,8950,9040,9230,9420],[6230,7160,8600,9030,9220,9310,9500,9700],[6420,7380,8860,9310,9500,9610,9810,10010],[6620,7610,9140,9600,9800,9900,10100,10310],[6810,7840,9420,9890,10090,10200,10410,10620],[6950,8e3,9610,10090,10300,10410,10620,10840]]};function Cd(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function jv(n,e,t){const i=parseInt(n,10),s=Kv[i];if(!s)return null;const o=Math.max(e,t),r=Math.min(e,t),a=Cd(o,Zv),h=Cd(r,qv);if(a===-1||h===-1)return null;if(a>=s.length){const f=s[s.length-1];return f[Math.min(h,f.length-1)]||null}const l=s[a];if(!l)return null;const c=l[h];if(c!=null)return c;for(let f=h;f>=0;f--)if(l[f]!=null)return l[f];return null}function Jv(n,e,t){const i=jv(n,e,t);return i==null?null:Math.round(i*Yv)}function Mr(n,e,t,i,s){if(!n||!e||!t||!i||!s)return null;const o=Math.max(n,e),r=Math.min(n,e),a=i.map(w=>w.max),h=t.map(w=>w.max);let l=0;for(;l<a.length-1&&r>a[l+1];)l++;let c=0;for(;c<h.length-1&&o>h[c+1];)c++;const f=a[l],m=a[Math.min(l+1,a.length-1)],p=h[c],_=h[Math.min(c+1,h.length-1)],v=m===f?0:Math.max(0,Math.min(1,(r-f)/(m-f))),g=_===p?0:Math.max(0,Math.min(1,(o-p)/(_-p))),d=(w,L)=>{const y=Math.max(0,Math.min(w,h.length-1)),b=Math.max(0,Math.min(L,a.length-1)),A=s[y];if(!A)return 0;const O=A[b];if(O!=null)return O;for(let U=b;U>=0;U--)if(A[U]!=null)return A[U];return 0},C=d(c,l),M=d(c,l+1),x=d(c+1,l),I=d(c+1,l+1),R=(1-v)*(1-g)*C+v*(1-g)*M+(1-v)*g*x+v*g*I;return Math.round(R)}const Ad=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Pd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Rd=[[345,null,null,null,null,null,null,null,null,null,null,null,null,null],[446,611,null,null,null,null,null,null,null,null,null,null,null,null],[560,762,979,null,null,null,null,null,null,null,null,null,null,null],[661,929,1180,1450,null,null,null,null,null,null,null,null,null,null],[778,1079,1399,1701,2022,null,null,null,null,null,null,null,null,null],[878,1248,1600,1972,2324,2697,null,null,null,null,null,null,null,null],[997,1399,1821,2223,2646,3049,3474,null,null,null,null,null,null,null],[1097,1569,2022,2496,2948,3424,3877,4355,null,null,null,null,null,null],[1217,1720,2244,2747,3273,3776,4305,4808,5339,null,null,null,null,null],[1439,2043,2669,3273,3903,4506,5138,5741,6345,7583,null,null,null,null],[1663,2368,3098,3802,4534,5238,5943,6647,7382,8790,10233,null,null,null],[1891,2695,3528,4333,5138,5943,6778,7583,8388,10032,11641,13288,null,null],[2120,3025,3931,4836,5772,6678,7583,8489,9428,11239,13087,14897,16749,null],[2321,3327,4364,5370,6376,7382,8422,9428,10434,12483,14495,16548,18560,20617],[2553,3660,4766,5873,7014,8120,9227,10333,11477,13690,15944,18158,20416,22629],[2754,3962,5203,6410,7617,8824,10069,11276,12483,14938,17353,19812,22227,24691],[2990,4297,5605,6913,8258,9566,10873,12181,13530,16146,18806,21422,24087,26703],[3191,4599,6045,7453,8861,10270,11719,13128,14536,17398,20215,23081,25898,28770],[3429,4938,6447,7956,9506,11015,12524,14033,15587,18605,21673,24691,27764,30782],[3630,5240,6890,8500,10110,11719,13374,14983,16593,19862,23081,26356,29575,32854],[3872,5583,7293,9003,10758,12468,14179,15889,17649,21069,24545,27965,31446,34866],[4074,5884,7740,9551,11362,13173,15033,16844,18655,22332,25953,29635,33256,36944]];function Ld(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Qv(n,e){const t=Mr(n,e,Pd,Ad,Rd);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Ld(i,Pd),r=Ld(s,Ad);if(o===-1||r===-1)return null;const a=Rd[o];if(!a)return null;const h=a[r];if(h!=null)return h;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const Dd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Id=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Fd={"1.5":[[149,null,null,null,null,null,null,null,null,null,null,null,null,null],[167,206,null,null,null,null,null,null,null,null,null,null,null,null],[197,233,281,null,null,null,null,null,null,null,null,null,null,null],[215,272,318,377,null,null,null,null,null,null,null,null,null,null],[245,299,368,422,492,null,null,null,null,null,null,null,null,null],[263,341,404,483,546,627,null,null,null,null,null,null,null,null],[295,368,455,528,618,690,781,null,null,null,null,null,null,null],[313,410,492,590,672,772,853,955,null,null,null,null,null,null],[347,437,545,636,745,835,946,1037,1150,null,null,null,null,null],[400,509,636,745,873,982,1113,1222,1331,1573,null,null,null,null],[454,581,728,855,1004,1131,1258,1385,1537,1791,2072,null,null,null],[510,656,823,968,1113,1258,1428,1573,1718,2035,2326,2645,null,null],[569,732,895,1059,1246,1409,1573,1736,1927,2253,2609,2936,3294,null],[605,787,992,1174,1355,1537,1745,1927,2108,2500,2863,3258,3621,4019],[665,865,1065,1264,1491,1691,1890,2090,2319,2718,3149,3548,3983,4382],[702,919,1164,1382,1600,1818,2064,2282,2500,2968,3403,3874,4309,4784],[765,1001,1237,1473,1738,1974,2210,2446,2714,3185,3692,4164,4675,5147],[801,1055,1338,1593,1847,2101,2387,2641,2895,3438,3946,4494,5002,5553],[867,1139,1411,1683,1988,2260,2532,2804,3112,3656,4240,4784,5372,5916],[903,1193,1516,1806,2096,2387,2712,3003,3293,3913,4494,5117,5698,6326],[971,1280,1588,1897,2240,2549,2857,3166,3514,4131,4791,5408,6072,6689],[1007,1334,1696,2023,2349,2676,3042,3368,3695,4391,5045,5745,6399,7104]],"2.0":[[172,null,null,null,null,null,null,null,null,null,null,null,null,null],[195,242,null,null,null,null,null,null,null,null,null,null,null,null],[231,276,335,null,null,null,null,null,null,null,null,null,null,null],[253,324,380,453,null,null,null,null,null,null,null,null,null,null],[290,358,442,509,594,null,null,null,null,null,null,null,null,null],[312,408,487,583,662,759,null,null,null,null,null,null,null,null],[351,442,549,640,748,839,950,null,null,null,null,null,null,null],[374,492,594,714,816,939,1041,1164,null,null,null,null,null,null],[413,526,658,771,905,1018,1153,1266,1404,null,null,null,null,null],[477,612,769,905,1063,1198,1359,1495,1631,1930,null,null,null,null],[543,701,882,1040,1223,1382,1540,1699,1885,2202,2548,null,null,null],[610,791,997,1178,1359,1540,1749,1930,2111,2503,2865,3260,null,null],[680,884,1088,1291,1523,1727,1930,2134,2367,2775,3215,3622,4066,null],[726,952,1206,1432,1659,1885,2141,2367,2594,3079,3532,4020,4473,4966],[799,1048,1297,1546,1824,2073,2322,2571,2853,3351,3885,4382,4920,5418],[844,1116,1417,1689,1960,2232,2536,2808,3079,3658,4201,4784,5328,5915],[919,1213,1508,1802,2129,2423,2717,3011,3342,3930,4558,5147,5779,6367],[965,1281,1631,1948,2265,2581,2934,3251,3568,4241,4875,5553,6186,6868],[1043,1382,1722,2061,2436,2776,3115,3455,3834,4513,5236,5915,6641,7320],[1088,1450,1848,2210,2572,2934,3336,3698,4060,4828,5553,6325,7049,7827],[1169,1554,1939,2323,2748,3133,3517,3902,4331,5100,5917,6687,7510,8279],[1215,1622,2069,2476,2884,3291,3742,4150,4557,5420,6234,7103,7917,8790]],"3.0":[[212,null,null,null,null,null,null,null,null,null,null,null,null,null],[246,311,null,null,null,null,null,null,null,null,null,null,null,null],[294,362,446,null,null,null,null,null,null,null,null,null,null,null],[328,429,514,617,null,null,null,null,null,null,null,null,null,null],[378,480,600,702,823,null,null,null,null,null,null,null,null,null],[412,549,668,806,925,1065,null,null,null,null,null,null,null,null],[464,600,755,891,1048,1184,1343,null,null,null,null,null,null,null],[498,670,823,997,1150,1326,1479,1658,null,null,null,null,null,null],[551,721,912,1082,1275,1445,1641,1811,2009,null,null,null,null,null],[640,844,1071,1275,1505,1709,1941,2145,2349,2788,null,null,null,null],[731,969,1233,1471,1737,1975,2213,2451,2720,3196,3706,null,null,null],[825,1097,1397,1669,1941,2213,2516,2788,3060,3638,4182,4763,null,null],[921,1227,1533,1839,2176,2482,2788,3094,3434,4046,4695,5307,5960,null],[989,1329,1700,2040,2380,2720,3094,3434,3774,4491,5171,5892,6572,7297],[1088,1462,1836,2210,2618,2992,3366,3740,4151,4899,5688,6436,7229,7977],[1156,1564,2006,2414,2822,3230,3675,4083,4491,5348,6164,7025,7841,8707],[1258,1700,2142,2584,3063,3505,3947,4389,4872,5756,6685,7569,8503,9387],[1326,1802,2315,2791,3267,3743,4260,4736,5212,6209,7161,8163,9115,10122],[1431,1941,2451,2961,3512,4022,4532,5042,5597,6617,7687,8707,9782,10802],[1499,2043,2628,3172,3716,4260,4849,5393,5937,7075,8163,9306,10394,11542],[1608,2186,2764,3342,3965,4543,5121,5699,6327,7483,8694,9850,11066,12222],[1676,2288,2945,3557,4169,4781,5443,6055,6667,7946,9170,10454,11678,12968]]};function Ud(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function e2(n,e,t){const i=parseFloat(n).toFixed(1),s=Fd[i]||Fd["3.0"];if(!s)return null;const o=Mr(e,t,Id,Dd,s);if(o!=null&&o>0)return o;const r=Math.max(e,t),a=Math.min(e,t),h=Ud(r,Id),l=Ud(a,Dd);if(h===-1||l===-1)return null;const c=s[h];if(!c)return null;const f=c[l];if(f!=null)return f;for(let m=l;m>=0;m--)if(c[m]!=null)return c[m];return null}const Nd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Bd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Od=[[242,null,null,null,null,null,null,null,null,null,null,null,null,null],[290,377,null,null,null,null,null,null,null,null,null,null,null,null],[353,451,564,null,null,null,null,null,null,null,null,null,null,null],[402,540,662,802,null,null,null,null,null,null,null,null,null,null],[467,613,777,923,1089,null,null,null,null,null,null,null,null,null],[515,704,875,1064,1235,1427,null,null,null,null,null,null,null,null],[582,777,991,1186,1402,1597,1815,null,null,null,null,null,null,null],[631,869,1089,1329,1549,1791,2010,2256,null,null,null,null,null,null],[699,942,1207,1451,1718,1962,2231,2475,2747,null,null,null,null,null],[817,1110,1425,1718,2036,2329,2650,2942,3235,3851,null,null,null,null],[938,1279,1646,1988,2357,2698,3040,3381,3753,4436,5153,null,null,null],[1061,1451,1869,2259,2650,3040,3461,3851,4241,5055,5835,6653,null,null],[1187,1626,2064,2503,2973,3412,3851,4290,4763,5640,6555,7433,8351,null],[1284,1772,2290,2778,3266,3753,4275,4763,5250,6262,7238,8254,9229,10249],[1413,1949,2486,3022,3592,4129,4665,5201,5775,6848,7961,9034,10152,11225],[1510,2095,2715,3300,3885,4470,5092,5677,6262,7474,8644,9859,11030,12250],[1642,2276,2910,3544,4214,4848,5482,6116,6791,8059,9372,10640,11957,13225],[1739,2422,3142,3824,4507,5190,5913,6596,7279,8689,10054,11470,12835,14255],[1874,2605,3337,4068,4841,5572,6303,7035,7811,9274,10787,12250,13768,15231],[1971,2752,3573,4353,5133,5913,6739,7519,8299,9909,11470,13085,14646,16266],[2110,2939,3768,4597,5471,6300,7129,7958,8837,10495,12207,13865,15583,17241],[2207,3085,4008,4886,5763,6641,7569,8446,9324,11135,12890,14706,16461,18282]];function kd(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function t2(n,e){const t=Mr(n,e,Bd,Nd,Od);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=kd(i,Bd),r=kd(s,Nd);if(o===-1||r===-1)return null;const a=Od[o];if(!a)return null;const h=a[r];if(h!=null)return h;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const Gd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],zd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Hd=[[248,null,null,null,null,null,null,null,null,null,null,null,null,null],[300,393,null,null,null,null,null,null,null,null,null,null,null,null],[367,471,591,null,null,null,null,null,null,null,null,null,null,null],[419,565,695,844,null,null,null,null,null,null,null,null,null,null],[487,643,818,974,1149,null,null,null,null,null,null,null,null,null],[539,739,922,1123,1306,1509,null,null,null,null,null,null,null,null],[609,818,1045,1254,1483,1692,1923,null,null,null,null,null,null,null],[661,915,1149,1405,1639,1897,2132,2392,null,null,null,null,null,null],[732,993,1275,1535,1819,2079,2366,2627,2915,null,null,null,null,null],[858,1170,1506,1819,2158,2470,2811,3124,3437,4093,null,null,null,null],[985,1350,1741,2105,2498,2863,3228,3593,3989,4719,5482,null,null,null],[1115,1532,1977,2394,2811,3228,3676,4093,4510,5378,6212,7083,null,null],[1247,1716,2186,2655,3155,3624,4093,4562,5065,6004,6979,7917,8896,null],[1352,1873,2425,2946,3468,3989,4544,5065,5587,6666,7709,8792,9835,10922],[1487,2060,2634,3207,3814,4388,4961,5534,6145,7292,8479,9626,10818,11965],[1591,2217,2876,3502,4127,4753,5415,6041,6666,7958,9209,10505,11756,13057],[1729,2407,3085,3762,4477,5154,5832,6510,7228,8584,9984,11339,12744,14100],[1834,2563,3330,4060,4790,5519,6290,7020,7750,9254,10714,12223,13683,15197],[1975,2757,3539,4320,5143,5925,6707,7489,8316,9880,11493,13057,14676,16240],[2079,2913,3788,4622,5456,6290,7169,8003,8837,10555,12223,13946,15614,17342],[2224,3110,3997,4883,5814,6700,7586,8472,9408,11181,13008,14780,16612,18385],[2329,3267,4250,5188,6127,7065,8053,8991,9930,11861,13738,15674,17551,19493]];function Wd(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function n2(n,e){const t=Mr(n,e,zd,Gd,Hd);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Wd(i,zd),r=Wd(s,Gd);if(o===-1||r===-1)return null;const a=Hd[o];if(!a)return null;const h=a[r];if(h!=null)return h;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const i2=[{maxHalfPerimeter:250,pricePerEdge:121},{maxHalfPerimeter:350,pricePerEdge:146},{maxHalfPerimeter:480,pricePerEdge:175},{maxHalfPerimeter:550,pricePerEdge:210},{maxHalfPerimeter:650,pricePerEdge:252},{maxHalfPerimeter:780,pricePerEdge:302},{maxHalfPerimeter:880,pricePerEdge:362},{maxHalfPerimeter:980,pricePerEdge:435},{maxHalfPerimeter:1150,pricePerEdge:522},{maxHalfPerimeter:1350,pricePerEdge:626},{maxHalfPerimeter:1500,pricePerEdge:752},{maxHalfPerimeter:1800,pricePerEdge:902}];function s2(n,e){const t=(n||0)+(e||0);for(const i of i2)if(t<=i.maxHalfPerimeter)return i.pricePerEdge;return 902}function of(n,e){return s2(n,e)*4+485}const Vd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Xd=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],$d=[[287,null,null,null,null,null,null,null,null,null,null,null,null,null],[359,481,null,null,null,null,null,null,null,null,null,null,null,null],[445,588,747,null,null,null,null,null,null,null,null,null,null,null],[516,712,891,1088,null,null,null,null,null,null,null,null,null,null],[604,819,1052,1267,1501,null,null,null,null,null,null,null,null,null],[676,945,1195,1465,1716,1988,null,null,null,null,null,null,null,null],[765,1052,1358,1645,1952,2239,2549,null,null,null,null,null,null,null],[837,1179,1501,1845,2167,2513,2835,3184,null,null,null,null,null,null],[928,1286,1666,2024,2405,2764,3148,3506,3893,null,null,null,null,null],[1092,1522,1975,2405,2861,3291,3749,4179,4610,5501,null,null,null,null],[1258,1760,2288,2790,3319,3821,4323,4825,5357,6361,7398,null,null,null],[1428,2001,2603,3176,3749,4323,4927,5501,6074,7255,8402,9585,null,null],[1599,2244,2889,3534,4210,4856,5501,6146,6825,8115,9442,10732,12063,null],[1743,2459,3207,3924,4641,5357,6108,6825,7542,9012,10446,11920,13354,14832],[1917,2705,3494,4282,5105,5893,6681,7470,8295,9872,11490,13067,14689,16266],[2060,2920,3814,4675,5535,6395,7292,8152,9012,10773,12493,14259,15979,17749],[2238,3169,4101,5033,6002,6933,7865,8797,9770,11633,13542,15405,17319,19183],[2381,3384,4425,5428,6432,7435,8480,9483,10487,12538,14545,16602,18609,20671],[2561,3636,4712,5787,6903,7978,9053,10128,11248,13399,15599,17749,19954,22105],[2705,3851,5039,6186,7333,8480,9671,10818,11965,14309,16602,18951,21244,23598],[2889,4107,5326,6544,7808,9026,10245,11463,12732,15169,17661,20098,22595,25032],[3032,4322,5658,6948,8238,9528,10868,12158,13449,16084,18664,21304,23885,26531]];function Yd(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function rf(n,e){const t=Mr(n,e,Xd,Vd,$d);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Yd(i,Xd),r=Yd(s,Vd);if(o===-1||r===-1)return null;const a=$d[o];if(!a)return null;const h=a[r];if(h!=null)return h;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}function o2(n,e){const t=rf(n,e);if(t==null)return null;const i=of(n,e);return t+i}function r2(n,e=""){const t=n||"",i=e||"";return t==="acrylic_cast_3_0"||i.includes("キャスト")?{materialName:"透明アクリル キャスト板 3.0mm (または コモグラス押出)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3316",hazaiyaExtrusionUrl:"https://www.hazaiya.co.jp/estimate/board/3302",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_extrusion_3_0"||i.includes("透明アクリル 3.0mm")&&!i.includes("キャスト")?{materialName:"透明アクリル 押出板 3.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_extrusion_2_0"||i.includes("2.0mm")?{materialName:"透明アクリル 押出板 2.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:2,isHazaiyaOrder:!0}:t==="acrylic_extrusion_1_5"||i.includes("1.5mm")?{materialName:"透明アクリル 押出板 1.5mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:1.5,isHazaiyaOrder:!0}:t==="pvc_punching_3_0"||i.includes("塩ビパンチング")?{materialName:"塩ビ透明パンチングボード (φ3.1-P7, 3.0mm厚)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/4018",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_black_matte_3_0"||i.includes("黒両面マット")?{materialName:"アクリル黒両面マット 3.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3468",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_smoke_gray_3_0"||i.includes("グレースモーク")?{materialName:"アクリル グレースモーク半透明 3.0mm (コモグラス 530K)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3356",thicknessMm:3,isHazaiyaOrder:!0}:t==="danplate_4_0"||i.includes("プラダン")?{materialName:"緩衝プラダン 4.0mm (市販品・別手配)",hazaiyaUrl:"※ホームセンター等にて市販品を手配（直線カットのみ）",thicknessMm:4,isHazaiyaOrder:!1}:t==="polyca_4_0"||i.includes("中空ポリカ")?{materialName:"ツインカーボ（中空ポリカーボネート） 4.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:4,isHazaiyaOrder:!0}:{materialName:i||"アクリル板",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate",thicknessMm:3,isHazaiyaOrder:!0}}function af(n,e){if(!n||!Array.isArray(n))return[];Number(e.W||540),Number(e.D||400),Number(e.H||400);const t=e.cageType||"A";e.hasDoorAntiFlex,e.frontWideFrame,Number(e.frontWindowH||100);const i=n.filter(o=>o.category==="panel"),s=[];for(const o of i){const r=o.name||"",a=r2(o.panelCode||o.partCode,r);let h=o.widthMm,l=o.heightMm;if((!h||!l)&&o.size){const c=o.size.match(/([\d.]+)\s*[x×]\s*([\d.]+)/);c&&(h=parseFloat(c[1]),l=parseFloat(c[2]))}if(h=Math.round((h||0)*10)/10,l=Math.round((l||0)*10)/10,(t==="A"||t==="C")&&(r.includes("スライド扉")||r.includes("扉")&&!r.includes("前開き"))){const c=Math.round(l/2*10)/10,f=e.frontDoorMaterial==="cast";s.push({key:"front_slide_doors",title:`${r}（2枚構成・同一加工）`,materialName:f?"透明アクリル キャスト板 3.0mm":"アクリル押出-コモグラス 3.0mm",doorMaterialType:f?"cast":"extrusion",hazaiyaUrl:f?"https://www.hazaiya.co.jp/estimate/board/3316":"https://www.hazaiya.co.jp/estimate/board/3302",hazaiyaExtrusionUrl:"https://www.hazaiya.co.jp/estimate/board/3302",hazaiyaCastUrl:"https://www.hazaiya.co.jp/estimate/board/3316",widthMm:h,heightMm:l,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"ABCD全4辺「磨き仕上げ」",holes:[{desc:"引き手ノブ穴 (段付きローレットノブ用)",corner:"C",x:15,y:c,base:`A辺(左)より15.0mm / D辺(下)より${c.toFixed(1)}mm (高さ寸法の1/2)`,diameterMm:4.1,taperMm:0},{desc:"プッシュ式スライド錠穴 (C-108用)",corner:"D",x:15.5,y:25,base:"角D(右下)より左方向へ15.5mm / 上方向へ25.0mm",diameterMm:10.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】2枚同一仕様で発注（1枚を裏返して使用）。はざいや加工数量割引適用"});continue}if(r.includes("前開き")&&r.includes("扉")){const c=e.doorHingeSide==="right",f=Math.round(l*1/4*10)/10,m=Math.round(l*3/4*10)/10;s.push({key:"front_open_door",title:`${r}（${c?"右ヒンジ左打掛":"左ヒンジ右打掛"}）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:h,heightMm:l,thicknessMm:3,quantity:1,needsMachining:!0,edgeFinishing:"ABCD全4辺「磨き仕上げ」",corners:[{desc:"4隅角丸",spec:"角A, 角B, 角C, 角D すべて R10 (10.0mm角丸)"}],notches:[{desc:c?"A辺(左・打掛受側) 切欠き2箇所":"C辺(右・打掛受側) 切欠き2箇所",spec:`下側(D辺より${f}mm中心) & 上側(D辺より${m}mm中心): 各 幅19.0mm x 高さ52.0mm`}],holes:[{desc:"TH-31蝶番固定用穴 (4箇所)",base:`${c?"C辺(右)":"A辺(左)"}端より11.25mm / 各ヒンジ中心より dy=-8.5mm, +17.0mm`,diameterMm:3.5,taperMm:0},{desc:"C-1249-4打掛固定用穴 (4箇所)",base:`${c?"A辺(左)":"C辺(右)"}端より9.7mm / 各打掛中心より dy=-15.0mm, +15.0mm`,diameterMm:3.5,taperMm:0}],notes:"【★加工あり】4隅R10角丸 / 切欠き2箇所 / 蝶番・打掛固定穴計8箇所"});continue}if(r.includes("ヒンジ座板")){s.push({key:"hinge_spacer",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:h||16,heightMm:l||52,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"蝶番フレーム固定穴",base:"幅中心(8mm) / 上下中心より dy=-17.0mm, +8.5mm",diameterMm:3.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】前開き扉蝶番フレーム取付スペーサー（フレーム溝固定用・2枚）"});continue}if(r.includes("ロック受座板")){s.push({key:"lock_spacer",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:h||16,heightMm:l||48,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"打掛受具フレーム固定穴",base:"幅中心(8mm) / 上下中心より dy=-15.0mm, +15.0mm",diameterMm:3.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】前開き扉打掛受具フレーム取付スペーサー（フレーム溝固定用・2枚）"});continue}if(r.includes("側面換気量調整板")||r.includes("換気量調整板")){let c=h,f=l;if(c<f){const m=c;c=f,f=m}s.push({key:"side_vent_cover",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:f,thicknessMm:1.5,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"角A側",base:"A辺(左)より9.0mm / B辺(上)より40.0mm",diameterMm:6,taperMm:0},{desc:"角B側",base:"C辺(右)より9.0mm / B辺(上)より40.0mm",diameterMm:6,taperMm:0},{desc:"角C側",base:"A辺(左)より9.0mm / D辺(下)より40.0mm",diameterMm:6,taperMm:0},{desc:"角D側",base:"C辺(右)より9.0mm / D辺(下)より40.0mm",diameterMm:6,taperMm:0}],corners:[],notches:[],notes:`【★加工あり】1枚あたりφ6.0mm丸穴4箇所 (計${(o.count||2)*4}穴) / No.1化粧つまみネジ固定用`});continue}if(r.includes("床下パネルヒータ支え板")&&!r.includes("プラダン")){if(o.count===2||o.note&&o.note.includes("2枚")){const f=Math.max(10,l-180);s.push({key:"floor_heater_support_2",title:`${r}（2枚構成・床補強あり）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:h,heightMm:l,thicknessMm:2,quantity:2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",corners:[{desc:"外側角A(左上)斜めカット",corner:"A",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"外側角C(左下)斜めカット",corner:"C",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"}],notches:[{desc:"角D(右下)配線逃がし切欠き",corner:"D",type:"corner_notch",sizeX:20,sizeY:f,spec:`幅20.0mm x 長さ${f.toFixed(1)}mm 角落とし`}],holes:[{desc:"角A斜め脇 奥",corner:"A",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / A辺(左)より90.0mm"},{desc:"角A斜め脇 左",corner:"A",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / B辺(上)より90.0mm"},{desc:"角C斜め脇 手前",corner:"C",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / A辺(左)より90.0mm"},{desc:"角C斜め脇 左",corner:"C",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / D辺(下)より90.0mm"},{desc:"中央フレーム溝部",corner:"B",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / B辺(上)より90.0mm"},{desc:"奥フレーム固定",corner:"B",x:80,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / C辺(右)より80.0mm"},{desc:"手前フレーム固定",corner:"D",x:80,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / C辺(右)より80.0mm"}],notes:"【★加工あり】2枚互い違い(180度反転)配置。1枚あたりφ6.0mm丸穴7箇所・斜めカット2箇所・切欠き1箇所"})}else{const f=Math.round(h/2*10)/10;s.push({key:"floor_heater_support_1",title:`${r}（1枚構成・通常床面）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:h,heightMm:l,thicknessMm:2,quantity:1,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",corners:[{desc:"角A(左上)斜めカット",corner:"A",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角B(右上)斜めカット",corner:"B",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角C(左下)斜めカット",corner:"C",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角D(右下)斜めカット",corner:"D",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"}],notches:[],holes:[{desc:"奥フレーム長辺中央",corner:"A",x:f,y:9,diameterMm:6,taperMm:0,base:`B辺(上)より9.0mm / 角A(左)より${f}mm (中央)`},{desc:"手前フレーム長辺中央",corner:"C",x:f,y:9,diameterMm:6,taperMm:0,base:`D辺(下)より9.0mm / 角C(左)より${f}mm (中央)`},{desc:"角A斜め脇 奥",corner:"A",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / A辺(左)より90.0mm"},{desc:"角A斜め脇 左",corner:"A",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / B辺(上)より90.0mm"},{desc:"角B斜め脇 奥",corner:"B",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / C辺(右)より90.0mm"},{desc:"角B斜め脇 右",corner:"B",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / B辺(上)より90.0mm"},{desc:"角C斜め脇 手前",corner:"C",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / A辺(左)より90.0mm"},{desc:"角C斜め脇 左",corner:"C",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / D辺(下)より90.0mm"},{desc:"角D斜め脇 手前",corner:"D",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / C辺(右)より90.0mm"},{desc:"角D斜め脇 右",corner:"D",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / D辺(下)より90.0mm"}],notes:"【★加工あり】4隅80x80mm斜めカット / φ6.0mm丸穴10箇所 (端から9mm溝位置)"})}continue}s.push({key:`standard_panel_${s.length}`,title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:h,heightMm:l,thicknessMm:a.thicknessMm,quantity:o.count||1,needsMachining:!1,edgeFinishing:"仕上げなし（ノコカット）",holes:[],corners:[],notches:[],notes:`${o.note||"直線カットのみ"} / 【切断のみ (加工なし)】`})}return s}function a2(n,e={}){if(!n||n.length===0)return"【はざいや発注リスト】対象のパネル部材はありません。";const t=[],i=n.reduce((o,r)=>o+(r.quantity||1),0),s=n.filter(o=>o.needsMachining).length;return t.push("================================================================"),t.push("【アクリルショップ はざいや様向け パネル一括発注リスト（全パネル網羅版）】"),e.W&&e.D&&e.H&&t.push(`対象ケージ: W${e.W} x D${e.D} x H${e.H} mm (Type ${e.cageType||"A"})`),t.push(`発注品目数: ${n.length} 品目 (合計枚数: ${i} 枚 / うち加工あり: ${s} 品目)`),t.push("※ 2重発注防止のため、本リストを上から順に1回だけカートへ追加してください。"),t.push("※ 基準: A辺=左辺, B辺=上辺, C辺=右辺, D辺=下辺 / 角A=左上, 角B=右上, 角C=左下, 角D=右下"),t.push(`================================================================
`),n.forEach((o,r)=>{const a=o.needsMachining?"【★加工あり】":"【切断のみ (加工なし)】";t.push(`■ [${r+1}/${n.length}] ${o.title}  ${a}`),t.push(`・素材: ${o.materialName}`),t.push(`・発注URL: ${o.hazaiyaUrl}`),t.push(`・仕上がり寸法: ヨコ ${o.widthMm} mm x タテ ${o.heightMm} mm (厚み ${o.thicknessMm} mm)`),t.push(`・発注数量: ${o.quantity} 枚`),t.push(`・切断面仕上げ: ${o.edgeFinishing}`),o.needsMachining&&(o.corners&&o.corners.length>0&&(t.push("・コーナー加工:"),o.corners.forEach(h=>{const l=h.spec||(h.sizeX&&h.sizeY?`${h.sizeX} x ${h.sizeY} mm 斜めカット`:"指定あり");t.push(`   - ${h.desc}: ${l}`)})),o.notches&&o.notches.length>0&&(t.push("・切欠き加工:"),o.notches.forEach(h=>{const l=h.spec||(h.sizeX&&h.sizeY?`幅${h.sizeX}mm x 長さ${h.sizeY}mm`:"指定あり");t.push(`   - ${h.desc}: ${l}`)})),o.holes&&o.holes.length>0&&(t.push("・穴あけ加工:"),o.holes.forEach((h,l)=>{const c=h.base||(h.corner?`角${h.corner}基準 (X:${h.x}mm, Y:${h.y}mm)`:"図面指定");t.push(`   (${l+1}) [${h.desc}] 基準: ${c} ➜ 直径 φ${h.diameterMm} mm (テーパー深さ ${h.taperMm||0} mm)`)}))),o.notes&&t.push(`・備考: ${o.notes}`),t.push(`----------------------------------------------------------------
`)}),t.join(`
`)}const l2=document.getElementById("canvas-container"),is=document.getElementById("creature-preset-grid"),As=document.getElementById("input-restore-estimate-id"),uo=document.getElementById("btn-restore-estimate"),sa=document.getElementById("restore-status-msg"),c2=document.getElementById("btn-save-image");document.getElementById("btn-copy-spec");document.getElementById("inquiry-spec-textarea");document.getElementById("copy-toast");const On=document.getElementById("estimate-result-modal"),qd=document.getElementById("modal-estimate-id"),Zd=document.getElementById("modal-price-total"),Kd=document.getElementById("modal-weight-total"),cr=document.getElementById("modal-spec-textarea"),Dl=document.getElementById("btn-copy-spec-modal"),io=document.getElementById("modal-copy-toast"),Lc=document.getElementById("btn-save-image-modal"),jd=document.getElementById("btn-close-modal"),Jd=document.getElementById("btn-dismiss-modal"),Qd=document.getElementById("btn-open-estimate-modal"),un=document.getElementById("modal-download-success"),so=document.getElementById("download-success-title"),Xi=document.getElementById("download-filename-label"),Fa=document.getElementById("modal-preview-section"),fo=document.getElementById("modal-preview-img"),es=document.getElementById("modal-share-url-input"),Il=document.getElementById("btn-copy-share-url-modal"),oo=document.getElementById("modal-copy-url-toast");let qn=null,Rs=null;const h2=Date.now(),d2=ih(),u2=xf();let eu=0,nt=null;function Di(n,e=5e3){let t=document.getElementById("app-notice-toast");t||(t=document.createElement("div"),t.id="app-notice-toast",t.className="app-notice-toast hidden",document.body.appendChild(t)),t.textContent=n,t.classList.remove("hidden"),requestAnimationFrame(()=>{t.classList.add("show")}),t._timer&&clearTimeout(t._timer),t._timer=setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.classList.add("hidden"),300)},e)}const yn=document.getElementById("slider-w"),bn=document.getElementById("input-w"),os=document.getElementById("slider-d"),rs=document.getElementById("input-d"),Sn=document.getElementById("slider-h"),Tn=document.getElementById("input-h"),ni=document.getElementById("row-front-window"),as=document.getElementById("slider-fw"),ls=document.getElementById("input-fw"),cs=document.getElementById("toggle-side-reinforce"),Ii=document.getElementById("card-side-reinforce"),Fi=document.getElementById("box-side-h"),tt=document.getElementById("input-side-h"),Pn=document.getElementById("btn-type-a"),Et=document.getElementById("btn-type-a-front"),Ct=document.getElementById("btn-type-a-framed"),kn=document.getElementById("btn-type-c"),At=document.getElementById("btn-type-c-framed"),It=document.getElementById("type-badge");let oa=null,tr=null,ya=null,nr=null,ba=null,ir=null,Sa=null,sr=null,Dc=null,lf=[];const Ui=document.getElementById("btn-frame-silver"),Ni=document.getElementById("btn-frame-black"),Fl=document.getElementById("section-front-door-hinge"),Pi=document.getElementById("btn-hinge-left"),Ri=document.getElementById("btn-hinge-right"),di=document.getElementById("toggle-caster"),ii=document.getElementById("card-caster"),on=document.getElementById("toggle-floor-reinforce"),$t=document.getElementById("card-floor-reinforce"),Ic=document.getElementById("floor-reinf-sub"),ct=document.getElementById("select-floor-split"),Gt=document.getElementById("toggle-back-reinforce"),Bt=document.getElementById("card-back-reinforce"),po=document.getElementById("back-reinf-sub"),ht=document.getElementById("select-back-split"),Ut=document.getElementById("toggle-top-reinforce"),Mt=document.getElementById("card-top-reinforce"),Ei=document.getElementById("top-reinf-sub"),mn=document.getElementById("toggle-door-anti-flex"),rn=document.getElementById("card-door-anti-flex"),An=document.getElementById("toggle-side-vent-cover"),_n=document.getElementById("card-side-vent-cover"),jo=document.getElementById("vent-cover-badge"),ra=document.getElementById("vent-cover-sub"),wt=document.getElementById("toggle-perch"),Pt=document.getElementById("card-perch"),bi=document.getElementById("toggle-front-wide-2x"),$n=document.getElementById("card-front-wide-2x"),aa=document.getElementById("front-wide-2x-sub"),Si=document.getElementById("toggle-front-wide-3x"),Yn=document.getElementById("card-front-wide-3x"),la=document.getElementById("front-wide-3x-sub"),wn=document.getElementById("toggle-wide-bottom"),Kn=document.getElementById("card-wide-bottom"),ca=document.getElementById("wide-bottom-sub"),nn=document.getElementById("toggle-wide-top"),kt=document.getElementById("card-wide-top"),ro=document.getElementById("wide-top-sub"),Bn=document.getElementById("toggle-rubber-packing"),En=document.getElementById("card-rubber-packing"),$i=document.getElementById("rubber-packing-badge"),tu=document.getElementById("rubber-packing-sub"),ui=document.getElementById("toggle-floor-heater-support"),pn=document.getElementById("card-floor-heater-support"),Ts=document.getElementById("floor-heater-support-badge"),f2=document.getElementById("floor-heater-support-sub"),Ul=document.getElementById("floor-warning-banner"),nu=document.getElementById("seismic-warning-banner"),p2=document.getElementById("seismic-warning-text"),cf=document.getElementById("btn-door-closed"),hf=document.getElementById("btn-door-left"),df=document.getElementById("btn-door-right"),Ta=document.getElementById("btn-front-door-closed"),wa=document.getElementById("btn-front-door-open"),ha=document.getElementById("slide-door-group"),iu=document.getElementById("front-door-group"),su=document.getElementById("door-control-title"),uf=[cf,hf,df,Ta,wa].filter(Boolean),Nl=document.getElementById("reinforce-tip"),Bl=document.getElementById("reinforce-text"),ou=document.getElementById("current-spec-summary");document.getElementById("cost-hud-card");const mo=document.getElementById("cost-hud-result"),Yi=document.getElementById("hud-cost-total"),qi=document.getElementById("hud-weight-total"),Zn=document.getElementById("btn-calc-estimate"),Fc=document.querySelectorAll(".preset-btn:not(#btn-auto-rotate)"),Uc=document.getElementById("btn-auto-rotate"),m2=document.getElementById("btn-reset-specs"),Ol=document.getElementById("panel-config-toggle-btn"),ru=document.getElementById("panel-config-container"),kl=document.getElementById("options-toggle-btn"),au=document.getElementById("options-container"),hs=document.getElementById("select-panel-floor"),Co=document.getElementById("select-panel-back"),Ao=document.getElementById("select-panel-side"),Po=document.getElementById("select-panel-side-upper"),Ro=document.getElementById("select-panel-side-lower"),ds=document.getElementById("select-panel-top"),us=document.getElementById("select-panel-top-left"),fs=document.getElementById("select-panel-top-right"),ps=document.getElementById("select-panel-partition"),Lo=document.getElementById("row-panel-side"),Do=document.getElementById("row-panel-side-split"),Ua=document.getElementById("row-panel-top"),Na=document.getElementById("row-panel-top-split"),gn=document.getElementById("row-panel-partition"),an=document.getElementById("toggle-room-divider"),jt=document.getElementById("card-room-divider"),ji=document.getElementById("room-divider-sub"),go=document.getElementById("perch-sub"),li=document.getElementById("card-led-option"),ms=document.getElementById("select-led-type"),ao=document.getElementById("led-controller-panel"),hr=document.getElementById("btn-led-power-on"),dr=document.getElementById("btn-led-power-off"),In=document.getElementById("led-row-usb-modes"),Fn=document.getElementById("led-row-rgb-palette"),Jn=document.getElementById("btn-toggle-darkroom"),u={W:750,D:450,H:300,cageType:"A",frameColor:"silver",footType:"rubber",hasFloorReinforcement:!1,floorSplitCount:2,hasBackReinforcement:!1,backSplitCount:2,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasPerch:!1,hasRubberPacking:!1,hasFloorHeaterSupport:!1,hasRoomDivider:!1,hasBottomWideFrame:!1,hasTopWideFrame:!1,ledType:"none",ledPower:!0,ledBrightness:1,ledColorMode:"all",ledRgbColor:"#ffffff",frontWideFrame:"2x",doorHingeSide:"left",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,showPanels:!0,showDimensions:!0,doorState:"closed",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}};let fi="2x",eh=!1;const st=new $v(l2);window.viewer=st;const ff=750*450;function g2(n,e,t,i){const s=Math.min(n,e)/10,o=t/10,r=s/Math.sqrt(o),a=i==="caster"?4.2:3.8,h=r<a;return{ratio:r,threshold:a,isProneToToppling:h,footType:i}}function $e(){st.update(u),st.setPanelsVisible(u.showPanels),st.setDimensionsVisible(u.showDimensions),eh&&(st._lastAutoParams={...u});const n=u.W*u.D;n>ff&&!u.hasFloorReinforcement?(Ul.classList.remove("hidden"),Nl.classList.remove("reinforced"),Bl.textContent=`床面積: ${(n/1e4).toFixed(0)}c㎡ (> 750×450mm) 床面補強なし：アクリルたわみ防止のため床面中央補強フレーム (2分割) を推奨します`):u.hasFloorReinforcement?(Ul.classList.add("hidden"),Nl.classList.add("reinforced"),Bl.textContent=`床面補強フレーム（${u.floorSplitCount}分割）が配置されています`):(Ul.classList.add("hidden"),Nl.classList.remove("reinforced"),Bl.textContent=`床面積: ${(n/1e4).toFixed(0)}c㎡ (≦ 750×450mm) 床面補強フレームなし（標準枠）`);const t=g2(u.W,u.D,u.H,u.footType);if(t.isProneToToppling){nu.classList.remove("hidden");const i=u.footType==="caster"?"キャスター装備（車輪向きによる支点変化を考慮した安全目安: 4.2）":"安全目安: 3.8";p2.innerHTML=`<strong>転倒注意：</strong>耐震安定値 <span class="metric-tag">${t.ratio.toFixed(2)}</span> ＜ 基準 ${t.threshold}（${i}）。地震等で転倒しやすいため、壁固定等の転倒防止対策を推奨します`}else nu.classList.add("hidden");S2(),Wa(),yr(),th(),_2(),b2(),mf()}function _2(){u.hasSideReinforcement?(Lo.classList.add("hidden"),Do.classList.remove("hidden")):(Lo.classList.remove("hidden"),Do.classList.add("hidden"));const n=u.hasTopReinforcement||u.W>940;n?(Ua.classList.add("hidden"),Na.classList.remove("hidden")):(Ua.classList.remove("hidden"),Na.classList.add("hidden")),hs&&(hs.value=u.panelConfig.floor||"acrylic"),Co.value=u.panelConfig.back,Ao.value=u.panelConfig.side,Po.value=u.panelConfig.sideUpper,Ro.value=u.panelConfig.sideLower,ds.value=u.panelConfig.top,us.value=u.panelConfig.topLeft,fs.value=u.panelConfig.topRight;const e=document.getElementById("panel-summary-badge");if(e){let t="パンチング";const i=n?u.panelConfig.topLeft:u.panelConfig.top;i.startsWith("mesh")?t=`金網${i.replace("mesh","")}mm`:i==="acrylic"&&(t="アクリル天面");let s="背面アクリル";u.panelConfig.back==="punching"?s="背面パンチング":u.panelConfig.back==="polyca"?s="背面中空ポリカ":u.panelConfig.back==="black_matte"?s="背面ブラックマット":u.panelConfig.back==="smoke_gray"&&(s="背面グレースモーク"),e.textContent=`${s} / ${t}`}}function yr(){const n=u.hasSideReinforcement&&u.panelConfig.sideUpper==="punching",e=!u.hasSideReinforcement&&u.panelConfig.side==="punching";n||e?(An.disabled=!1,_n.classList.remove("disabled"),jo.classList.add("ready"),jo.textContent="選択可能",e?ra.textContent="冬場の保温・換気調整用。左右上下4枚外張り":ra.textContent="冬場の保温・換気調整用。左右外張り"):(An.checked=!1,u.hasSideVentCover=!1,An.disabled=!0,_n.classList.add("disabled"),_n.classList.remove("active"),jo.classList.remove("ready"),u.hasSideReinforcement?(jo.textContent="要上部パンチング",ra.textContent="※側面上部が塩ビパンチングパネル時に選択できます"):(jo.textContent="要側面パンチング",ra.textContent="※側面パネルが塩ビパンチング時に選択できます"))}function Wa(){if(u.cageType==="C"||u.cageType==="C_FRAMED"||u.cageType==="A_FRAMED")bi.checked=!1,bi.disabled=!0,$n.classList.remove("active"),$n.classList.add("disabled"),aa.textContent=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED"?"※正面枠囲いは専用枠固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）",Si.checked=!1,Si.disabled=!0,Yn.classList.remove("active"),Yn.classList.add("disabled"),la.textContent=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED"?"※正面枠囲いは専用枠固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）";else{const e=u.frameColor==="black"?"高さ60mm(ブラック: 40mm+20mm 2段重ね)使用。深床材・高剛性仕様":"高さ60mmフレーム使用。深床材・高剛性仕様";u.frontWideFrame==="2x"?(bi.checked=!0,bi.disabled=!1,$n.classList.add("active"),$n.classList.remove("disabled"),aa.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",Si.checked=!1,Si.disabled=!0,Yn.classList.remove("active"),Yn.classList.add("disabled"),la.textContent="※2倍幅がONのため選択不可（2倍幅を外すと選択可能）"):u.frontWideFrame==="3x"?(bi.checked=!1,bi.disabled=!0,$n.classList.remove("active"),$n.classList.add("disabled"),aa.textContent="※3倍幅がONのため選択不可（3倍幅を外すと選択可能）",Si.checked=!0,Si.disabled=!1,Yn.classList.add("active"),Yn.classList.remove("disabled"),la.textContent=e):(bi.checked=!1,bi.disabled=!1,$n.classList.remove("active"),$n.classList.remove("disabled"),aa.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",Si.checked=!1,Si.disabled=!1,Yn.classList.remove("active"),Yn.classList.remove("disabled"),la.textContent=e)}Va()}function Va(){const n=u.cageType==="A"||u.cageType==="A_FRAMED"||u.cageType==="C"||u.cageType==="C_FRAMED";wn&&Kn&&(n?(wn.disabled=!1,Kn.classList.remove("disabled"),wn.checked=!!u.hasBottomWideFrame,Kn.classList.toggle("active",!!u.hasBottomWideFrame),ca&&(ca.textContent="床の左右奥行・奥側を高さ40mmフレームに変更し高剛性化")):(wn.checked=!1,wn.disabled=!0,Kn.classList.remove("active"),Kn.classList.add("disabled"),u.hasBottomWideFrame=!1,ca&&(ca.textContent="※前開き扉は構造上選択不可"))),nn&&kt&&(n?u.hasBottomWideFrame?(nn.disabled=!1,kt.classList.remove("disabled"),nn.checked=!!u.hasTopWideFrame,kt.classList.toggle("active",!!u.hasTopWideFrame),ro&&(ro.textContent="天面の左右奥行・前後を高さ40mmフレームに変更（上下両方ONで柱も奥行40mm化）")):(nn.checked=!1,nn.disabled=!0,kt.classList.remove("active"),kt.classList.add("disabled"),u.hasTopWideFrame=!1,ro&&(ro.textContent="※下側幅広フレーム選択時に選択可能（上下両方ONで柱も2040化）")):(nn.checked=!1,nn.disabled=!0,kt.classList.remove("active"),kt.classList.add("disabled"),u.hasTopWideFrame=!1,ro&&(ro.textContent="※前開き扉は構造上選択不可")))}function th(){const n=u.panelConfig.back==="polyca";let e=!1;u.hasSideReinforcement?e=u.panelConfig.sideLower==="polyca"&&u.panelConfig.sideUpper==="polyca":e=u.panelConfig.side==="polyca",n&&e?(Bn.checked=!1,u.hasRubberPacking=!1,Bn.disabled=!0,En.classList.add("disabled"),En.classList.remove("active"),$i.textContent="中空ポリカのみ時は施工不可",$i.className="option-cond-badge",$i.classList.remove("hidden"),tu.textContent="※中空ポリカ仕様には施工できません（アクリル等の面がある場合に選択可）"):(Bn.disabled=!1,En.classList.remove("disabled"),u.hasRubberPacking?(En.classList.add("active"),Bn.checked=!0):(En.classList.remove("active"),Bn.checked=!1),n||(u.hasSideReinforcement?u.panelConfig.sideLower==="polyca"||u.panelConfig.sideUpper==="polyca":u.panelConfig.side==="polyca")?($i.textContent="中空ポリカ除く面に施工",$i.className="option-cond-badge info",$i.classList.remove("hidden"),tu.textContent="側面・背面からの水漏れの抑制（中空ポリカ面を除くアクリル面に施工）"):($i.textContent="",$i.classList.add("hidden"))),Ts&&f2&&(u.hasFloorReinforcement?(Ts.textContent=u.floorSplitCount===3?"床面3分割用 (3枚)":"床面2分割用 (2枚)",Ts.className="option-cond-badge info",Ts.classList.remove("hidden")):(Ts.textContent="通常床面用 (1枚)",Ts.className="option-cond-badge",Ts.classList.remove("hidden")))}function br(n){if(!n)return null;if(Ye.panels&&Ye.panels[n])return Ye.panels[n];if(Ye.frames&&Ye.frames[n])return Ye.frames[n];if(Ye.rails&&Ye.rails[n])return Ye.rails[n];if(Ye.caps&&Ye.caps[n])return Ye.caps[n];if(Ye.packings&&Ye.packings[n])return Ye.packings[n];if(Ye.hardware&&Ye.hardware[n])return Ye.hardware[n];for(const e of[Ye.panels,Ye.frames,Ye.rails,Ye.caps,Ye.packings,Ye.hardware])if(e){for(const[t,i]of Object.entries(e))if(n===t||n.startsWith(t)||t.startsWith(n)||i.name&&(i.name===n||n.includes(i.name)||i.name.includes(n)))return i}return null}function lu(n){const e=n.name||"";return e.includes("前窓")?2:e.includes("扉")?1:e.includes("底板")||e.includes("床面")&&!e.includes("支え板")&&!e.includes("プラダン")?3:e.includes("側板")||e.includes("側面")?e.includes("換気量調整板")?7:4:e.includes("背板")||e.includes("背面")?5:e.includes("天板")||e.includes("天面")||e.includes("金網")?6:e.includes("換気量調整板")?7:e.includes("床下パネルヒータ支え板")?8:e.includes("プラダン")?9:10}function cu(n){const e=n.partCode||n.name||"";return e.startsWith("ECP")||e.includes("キャップ")?3:e.startsWith("PGRU")||e.startsWith("PGRL")||e.includes("レール")?2:1}function pf(n){var a,h,l,c,f,m,p,_;const e=br(n.panelCode||n.partCode||n.name);let t=n.widthMm,i=n.heightMm;if((!t||!i)&&n.size){const v=n.size.match(/(\d+(?:\.\d+)?)\s*[x×]\s*(\d+(?:\.\d+)?)/);v&&(t=parseFloat(v[1]),i=parseFloat(v[2]))}let s=0,o=0,r=0;if(e&&e.unit==="m2"&&t&&i){const v=t/1e3*(i/1e3),g=n.panelCode&&n.panelCode.startsWith("wire_mesh_")||n.partCode&&n.partCode.startsWith("wire_mesh_")||e.pitchMm!=null,d=n.panelCode==="pvc_punching_3_0"||n.partCode==="pvc_punching_3_0"||n.name&&n.name.includes("塩ビパンチング"),C=n.panelCode&&n.panelCode.startsWith("acrylic_extrusion_")||n.partCode&&n.partCode.startsWith("acrylic_extrusion_")||n.panelCode==="acrylic_extrusion_3_0"||n.panelCode==="acrylic_extrusion_2_0"||n.panelCode==="acrylic_extrusion_1_5",M=n.panelCode==="acrylic_black_matte_3_0"||n.partCode==="acrylic_black_matte_3_0"||n.name&&n.name.includes("黒両面マット"),x=n.panelCode==="acrylic_smoke_gray_3_0"||n.partCode==="acrylic_smoke_gray_3_0"||n.name&&n.name.includes("グレースモーク"),I=n.panelCode==="acrylic_cast_3_0"||n.partCode==="acrylic_cast_3_0"||n.name&&n.name.includes("キャスト");if(g){const R=e.pitchMm||(n.panelCode?parseInt(n.panelCode.replace("wire_mesh_",""),10):25),w=Jv(R,t,i);s=w??Math.round(e.pricePerM2*v)}else if(d){const R=Qv(t,i);s=R??Math.round(e.pricePerM2*v)}else if(C){const R=e.thicknessMm||3,w=e2(R,t,i);s=w??Math.round(e.pricePerM2*v)}else if(M){const R=t2(t,i);s=R??Math.round(e.pricePerM2*v)}else if(x){const R=n2(t,i);s=R??Math.round(e.pricePerM2*v)}else if(I)if(n.name&&n.name.includes("扉")){const w=o2(t,i),L=of(t,i);s=w??Math.round(e.pricePerM2*v)+L}else{const w=rf(t,i);s=w??Math.round(e.pricePerM2*v)}else s=Math.round(e.pricePerM2*v);if(n.name&&n.name.includes("換気量調整板")){const R=(l=(h=(a=Ye.options)==null?void 0:a.items)==null?void 0:h.sideVentCover)==null?void 0:l.holeCostPerPiece,w=(m=(f=(c=Ye.options)==null?void 0:c.items)==null?void 0:f.sideVentCover)==null?void 0:m.holesPerPanel;s+=w*R}if(n.name&&n.name.includes("床下パネルヒータ支え板")){const R=((_=(p=Ye.options)==null?void 0:p.items)==null?void 0:_.floorHeaterSupport)||{},w=R.holeCostPerPiece??112,L=R.diagonalCutCost??239,y=R.cornerCutCost??587;if(n.count===2||n.note&&n.note.includes("2枚")){const A=7*w+2*L+1*y;s+=A}else{const A=10*w+4*L;s+=A}}e.baseCostPerPiece&&(s+=e.baseCostPerPiece),o=s*n.count,e.baseCost&&(o+=e.baseCost),r=(e.weightPerM2||0)*v*n.count}return{singleCost:s,totalCost:o,totalWeight:r}}function v2(n){var r,a,h;const e=n.partCode||n.name||"",t=br(e);let i=0,s=0,o=0;if(t)if(t.unit==="m"){const c=(n.lengthMm||0)/1e3;i=Math.round(t.pricePerMeter*c),s=i*n.count,o=(t.weightPerMeter||0)*c*n.count}else i=t.pricePerPiece||0,s=i*n.count,o=(t.weightPerPiece||0)*n.count;else{const l=n.name||"";l.includes("化粧つまみネジ")||l.includes("No.1")?(i=(h=(a=(r=Ye.options)==null?void 0:r.items)==null?void 0:a.floorHeaterSupport)==null?void 0:h.screwCostPerPiece,s=i*n.count,o=.0025*n.count):l.includes("ゴムグロメット")?(i=80,s=i*n.count,o=.005*n.count):l.includes("ローレットノブ")||l.includes("つまみ")&&l.includes("ノブ")?(i=350,s=i*n.count,o=.012*n.count):l.includes("鍵")||l.includes("C-108")?(i=800,s=i*n.count,o=.045*n.count):l.includes("キャスター")?(i=200,s=i*n.count,o=.12*n.count):l.includes("ゴム脚")?(i=60,s=i*n.count,o=.008*n.count):l.includes("M3")&&l.includes("つまみネジ")?(i=25,s=i*n.count,o=.002*n.count):l.includes("M6")&&l.includes("ボルト")?(i=30,s=i*n.count,o=.008*n.count):l.includes("M4")&&l.includes("皿ネジ")?(i=15,s=i*n.count,o=.003*n.count):l.includes("LED")&&(l.includes("USB")||l.includes("白＆電球色")?(i=1980,o=.12):(i=5490,o=.35),s=i*n.count)}return{singleCost:i,totalCost:s,totalWeight:o}}async function hu(n){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(n);else{const e=document.createElement("textarea");e.value=n,e.style.position="fixed",e.style.left="-9999px",e.style.top="0",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}finally{e.remove()}}}function x2(n){if(!n||n.length===0)return"";const e=[],t=[];for(const l of n){const c=l.partCode||l.name||"";c.startsWith("PGRU")||c.startsWith("PGRL")||l.name&&l.name.includes("レール")?t.push(l):e.push(l)}const i=[],s=[];for(const l of e){const c=l.partCode||l.name||"";c.startsWith("ECP")||c.includes("キャップ")||l.lengthMm==null||l.lengthMm===0?s.push(l):i.push(l)}i.sort((l,c)=>{const f=l.lengthMm||0,m=c.lengthMm||0;return m!==f?m-f:(l.partCode||l.name).localeCompare(c.partCode||c.name)}),s.sort((l,c)=>(l.partCode||l.name).localeCompare(c.partCode||c.name));const o=[...i,...s],r=[];let a=0;for(const l of o){const c=br(l.partCode);let f=0,m=0;if(c)if(c.unit==="m"){const g=(l.lengthMm||0)/1e3;f=Math.round(c.pricePerMeter*g),m=f*l.count}else f=c.pricePerPiece||0,m=f*l.count;a+=m;let p=l.partCode||l.name;const _=l.lengthMm!=null&&l.lengthMm>0?Math.round(l.lengthMm):null;_!=null&&(p.endsWith(`-${_}`)||(p=`${p}-${_}`)),r.push(`${p}	${l.count}`)}r.push(`${a.toLocaleString()}円`),t.sort((l,c)=>{const f=(l.partCode||l.name||"").startsWith("PGRU"),m=(c.partCode||c.name||"").startsWith("PGRU");if(f&&!m)return-1;if(!f&&m)return 1;const p=l.lengthMm||0;return(c.lengthMm||0)-p});const h=[];for(const l of t){const c=l.partCode||l.name,f=l.lengthMm!=null?Math.round(l.lengthMm):0;h.push(`${c} ${f}mm x${l.count}`)}return h.length>0?`${r.join(`
`)}

${h.join(`
`)}`:r.join(`
`)}function mf(){if(!tr||!ya)return;const n=st.getPartsSummary(),e=[],t=[],i=[];for(const d of n)d.partCode==="NSCP1H-S-6"||d.name&&d.name.includes("ゴムパッキン")?i.push(d):d.category==="panel"?t.push(d):d.category==="frame"||d.category==="rail_cap"||d.category==="hardware"?e.push(d):i.push(d);const s=new Map;for(const d of e){const C=d.partCode||d.name,M=d.lengthMm!=null?Math.round(d.lengthMm):null,x=`${C}__${M??"none"}`;if(s.has(x)){const I=s.get(x);I.count+=d.count}else s.set(x,{...d,partCode:C,lengthMm:M,count:d.count})}const o=Array.from(s.values());lf=o,o.sort((d,C)=>{const M=cu(d),x=cu(C);return M!==x?M-x:(d.partCode||d.name).localeCompare(C.partCode||C.name)}),ya.innerHTML="",nr&&(nr.innerHTML="");let r=0,a=0,h=0;for(const d of o){h+=d.count;const C=br(d.partCode);let M=0,x=0,I=0,R="-";if(C)if(C.unit==="m"){const L=d.lengthMm||0,A=(d.partCode&&(d.partCode.startsWith("PGRU")||d.partCode.startsWith("PGRL"))?Math.ceil(L/250)*250:L)/1e3;R=`${d.lengthMm||Math.round(A*1e3)} mm`,M=Math.round(C.pricePerMeter*A),x=M*d.count,I=C.weightPerMeter*(L/1e3)*d.count}else R="-",M=C.pricePerPiece||0,x=M*d.count,I=(C.weightPerPiece||0)*d.count;else R=d.size||"-";r+=x,a+=I;const w=document.createElement("tr");w.className="bom-cat-frame",w.innerHTML=`
      <td><strong>${d.partCode||d.name}</strong></td>
      <td style="text-align: right; font-family: monospace;">${R}</td>
      <td style="text-align: center; font-family: monospace;">${d.count}</td>
      <td style="text-align: right; font-family: monospace;">¥${x.toLocaleString()}</td>
      <td style="text-align: right; font-family: monospace;">${I.toFixed(3)} kg</td>
    `,ya.appendChild(w)}if(nr){const d=document.createElement("tr");d.innerHTML=`
      <td><strong>フレーム等 合計</strong></td>
      <td style="text-align: center;">-</td>
      <td style="text-align: center; font-family: monospace;"><strong>${h}点</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>¥${r.toLocaleString()}</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>${a.toFixed(3)} kg</strong></td>
    `,nr.appendChild(d)}t.sort((d,C)=>{const M=lu(d),x=lu(C);return M-x}),[...t];let l=0,c=0,f=0;if(ba){ba.innerHTML="",ir&&(ir.innerHTML="");for(const d of t){f+=d.count;const{totalCost:C,totalWeight:M}=pf(d);l+=C,c+=M;const x=d.note&&d.note.includes("枠囲い")||d.name&&d.name.includes("枠囲い"),R=d.name&&(d.name.includes("扉")&&!x||d.name.includes("換気量調整板")||d.name.includes("ヒンジ座板")||d.name.includes("ロック受座板")||d.name.includes("床下パネルヒータ支え板")&&!d.name.includes("プラダン"))?'<span style="display: inline-block; background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px; font-weight: bold;">★加工あり</span>':'<span style="display: inline-block; background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px;">切断のみ</span>',w=document.createElement("tr");w.className="bom-cat-panel",w.innerHTML=`
        <td><strong>${d.name}</strong></td>
        <td>${d.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${d.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${C.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${M.toFixed(3)} kg</td>
        <td>${R}${d.note||"-"}</td>
      `,ba.appendChild(w)}if(ir){const d=document.createElement("tr");d.innerHTML=`
        <td><strong>パネル 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${f}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${l.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${c.toFixed(3)} kg</strong></td>
        <td>-</td>
      `,ir.appendChild(d)}}let m=0,p=0,_=0;if(Sa){Sa.innerHTML="",sr&&(sr.innerHTML="");for(const d of i){_+=d.count;const{totalCost:C,totalWeight:M}=v2(d);m+=C,p+=M;const x=document.createElement("tr");x.className=`bom-cat-${d.category||"other"}`,x.innerHTML=`
        <td><strong>${d.name}</strong></td>
        <td>${d.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${d.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${C.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${M.toFixed(3)} kg</td>
        <td>${d.note||"-"}</td>
      `,Sa.appendChild(x)}if(sr){const d=document.createElement("tr");d.innerHTML=`
        <td><strong>その他部材 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${_}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${m.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${p.toFixed(3)} kg</strong></td>
        <td>-</td>
      `,sr.appendChild(d)}}const v=document.getElementById("bom-hazaiya-preview-body"),g=document.getElementById("hazaiya-parts-badge");if(v){const d=af(n,u),C=d.reduce((x,I)=>x+(I.quantity||1),0),M=d.filter(x=>x.needsMachining).length;if(g&&(g.textContent=`${d.length}品目 (${C}枚 / 加工あり${M}点)`),d.length===0)v.innerHTML='<p style="color: #94a3b8; font-style: italic; margin: 4px 0;">※対象のパネル部材はありません。</p>';else{let x="";d.forEach((I,R)=>{const w=I.needsMachining,L=w?"rgba(245, 158, 11, 0.35)":"rgba(56, 189, 248, 0.25)",y=w?'<span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; font-weight: bold;">★加工あり</span>':'<span style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem;">切断のみ</span>';x+=`
          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${L}; border-radius: 4px; padding: 6px 10px; margin-bottom: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; flex-wrap: wrap; gap: 4px;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <strong style="color: ${w?"#fbbf24":"#e2e8f0"};">[${R+1}/${d.length}] ${I.title}</strong>
                ${y}
              </div>
              <span style="font-family: monospace; font-size: 0.7rem; color: #38bdf8;">${I.widthMm} x ${I.heightMm} mm (t${I.thicknessMm}mm) × ${I.quantity}枚</span>
            </div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 3px;">
              素材: <span style="color: #cbd5e1;">${I.materialName}</span> | 仕上げ: <span style="color: #cbd5e1;">${I.edgeFinishing}</span>
            </div>
        `,w&&(I.corners&&I.corners.length>0&&(x+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・コーナー: '+I.corners.map(b=>`<span style="color: #fca5a5;">${b.desc}(${b.spec})</span>`).join(", ")+"</div>"),I.notches&&I.notches.length>0&&(x+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・切欠き: '+I.notches.map(b=>`<span style="color: #fca5a5;">${b.desc}(${b.spec})</span>`).join(", ")+"</div>"),I.holes&&I.holes.length>0&&(x+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・穴あけ: '+I.holes.map((b,A)=>`<span style="color: #93c5fd;">(${A+1}) ${b.desc} [${b.base} ➜ φ${b.diameterMm}mm]</span>`).join("<br>&nbsp;&nbsp;")+"</div>")),x+="</div>"}),v.innerHTML=x}}Dc&&(Dc.textContent=`${n.length}品目 / フレーム計${h}点 / パネル計${f}点 / その他計${_}点`)}function M2(){try{return}catch(n){console.warn("[Debug] setupDebugBOMIfRequested エラー:",n)}}let gr=!1;function y2(){var xe,_e,E,S,F,H,W,$,de,fe,ve,Se,q,ue,Te,Pe,be;const n=st.getPartsSummary();let e=0,t=0,i=0,s=0;for(const Ie of n)if(Ie.category==="frame"||Ie.category==="rail_cap"||Ie.category==="hardware"||Ie.category==="other"){const Fe=br(Ie.partCode||Ie.name);if(Fe)if(Fe.unit==="m"){const Oe=Ie.lengthMm||0,J=(Ie.partCode&&(Ie.partCode.startsWith("PGRU")||Ie.partCode.startsWith("PGRL"))?Math.ceil(Oe/250)*250:Oe)/1e3,ce=Math.round(Fe.pricePerMeter*J);e+=ce*Ie.count,t+=Fe.weightPerMeter*(Oe/1e3)*Ie.count}else e+=(Fe.pricePerPiece||0)*Ie.count,t+=(Fe.weightPerPiece||0)*Ie.count}else if(Ie.category==="panel"){const{totalCost:Fe,totalWeight:Oe}=pf(Ie);i+=Fe,s+=Oe}const o=Ye.options||{},r=o.labor||{},a=o.items||{},h=!!u.hasFloorReinforcement,l=!!(u.hasTopReinforcement||u.W>940),c=u.cageType==="C"||u.cageType==="C_FRAMED",f=!!u.hasSideReinforcement,m=u.cageType==="A"&&u.frontWideFrame==="3x",p=u.footType==="caster",_=!!u.hasSideVentCover,v=!!u.hasPerch,g=!!u.hasRubberPacking,d=!!u.hasRoomDivider,C=u.cageType==="A_FRONT",M=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",x=!!u.hasFloorHeaterSupport,I=!!u.hasBottomWideFrame,R=!!u.hasTopWideFrame,w=h?((xe=r.splitFloor)==null?void 0:xe.price)??500:0,L=l?((_e=r.splitTop)==null?void 0:_e.price)??500:0,y=c?((E=r.typeC)==null?void 0:E.price)??500:0,b=f?((S=r.splitSide)==null?void 0:S.price)??1e3:0,A=m?((F=r.frontWide3x)==null?void 0:F.price)??500:0,O=v?((H=r.perch)==null?void 0:H.price)??1e3:0,U=g?((W=r.rubberPacking)==null?void 0:W.price)??800:0,G=d?(($=r.roomDivider)==null?void 0:$.price)??500:0,B=C?((de=r.frontOpenDoor)==null?void 0:de.price)??3e3:0,Y=M?((fe=r.frontFramedDoor)==null?void 0:fe.price)??5e3:0,z=x?((ve=r.floorHeaterSupport)==null?void 0:ve.price)??1e3:0,N=I?((Se=r.wideBottom)==null?void 0:Se.price)??2e3:0,ee=R?((q=r.wideTop)==null?void 0:q.price)??2e3:0,ae=w+L+y+b+A+O+U+G+B+Y+z+N+ee,ge=p?((ue=a.caster)==null?void 0:ue.price)??1500:0,Ce=p?((Te=a.caster)==null?void 0:Te.cost)??800:0,Be=_?((Pe=a.sideVentCover)==null?void 0:Pe.price)??500:0,j=_?((be=a.sideVentCover)==null?void 0:be.cost)??200:0,le=_?j:0;let Me=0,pe=0,he=0;if(u.ledType&&u.ledType!=="none"){const Fe={usb:a.ledUsb,rgbw:a.ledRgbw}[u.ledType];Fe&&(Me=Fe.price||0,pe=Fe.cost||0,he=Fe.weight||.15)}const Ae=ge+Be+Me,me=Ce+le+pe,Ee=Ye.pricing||{},te=typeof Ee.markupRate=="number"?Ee.markupRate:1.3,K=typeof Ee.roundingUnit=="number"?Ee.roundingUnit:100,D=e+i,oe=Math.ceil(D*te/K)*K,Q=D+me,re=oe+Ae+ae,ne=t+s+he;return{rawCost:Q,priceWithMarkup:re,weight:ne}}let Qi=null;function b2(){if(Qi&&(Qi.aborted=!0,Qi=null,Zn)){Zn.classList.remove("is-calculating");const n=Zn.querySelector(".calc-btn-title");n&&(n.textContent="見積もりと重量計算（β版）")}(gr||mo&&!mo.classList.contains("hidden"))&&(gr=!1,mo&&mo.classList.add("hidden"))}async function _r(){Qi&&(Qi.aborted=!0);const n={aborted:!1};if(Qi=n,mo&&mo.classList.remove("hidden"),Yi&&(Yi.classList.remove("value-appear"),Yi.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>部材積算中...</span>
      </span>
    `),qi&&(qi.classList.remove("value-appear"),qi.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>重量計算中...</span>
      </span>
    `),Zn){Zn.classList.add("is-calculating");const r=Zn.querySelector(".calc-btn-title");r&&(r.textContent="部材積算・構造検証中...")}const e=5e3,t=Math.floor(Math.random()*5001),i=e+t,s=100,o=Math.floor(i/s);try{for(let a=0;a<o;a++)if(await new Promise(h=>setTimeout(h,s)),n.aborted)return;const r=y2();Yi&&(Yi.textContent=`¥${r.priceWithMarkup.toLocaleString()}`,Yi.classList.add("value-appear")),qi&&(qi.textContent=`${r.weight.toFixed(1)} kg`,qi.classList.add("value-appear")),gr=!0,O2(r)}catch(r){console.error("Structural simulation error:",r),Yi&&(Yi.innerHTML='<span style="color: #ef4444; font-size: 0.82rem; font-weight: 600;">⚠️ 計算中にエラーが発生しました</span>'),qi&&(qi.innerHTML='<span style="color: #94a3b8; font-size: 0.85rem;">-</span>'),H2(r)}finally{if(Qi===n&&(Qi=null,Zn)){Zn.classList.remove("is-calculating");const r=Zn.querySelector(".calc-btn-title");r&&(r.textContent="見積もりと重量計算（β版）")}}}function Gn(n=u.doorHingeSide){return n==="right"?"左打掛、右ヒンジ":"左ヒンジ、右打掛"}function Xa(n=!1){if(u.cageType==="A_FRAMED")return n?"Type A 正面枠囲い（高剛性アルミ枠スライド扉仕様）":"Type A 正面枠囲い";if(u.cageType==="C_FRAMED")return n?"Type C 正面枠囲い（下部前窓＋高剛性アルミ枠スライド扉仕様）":"Type C 正面枠囲い";if(u.cageType==="A_FRONT"){const e=Gn();return n?`Type A 前開き (${e})`:`Type A 前開き (${e})`}else if(u.cageType==="C")return n?"Type C（下部前窓＋扉仕様）":"Type C（前窓＋扉）";return n?"Type A（全面スライド扉仕様）":"Type A（全面スライド扉）"}function S2(){if(!ou)return;const n=Xa(!1),e=`W${u.W} × D${u.D} × H${u.H} mm`,t=[];if(u.cageType==="A"){const i=u.frontWideFrame==="3x"?"正面3倍幅":u.frontWideFrame==="2x"?"正面2倍幅":"正面標準幅";t.push(i)}if(t.push(u.hasFloorReinforcement?"床補強: あり":"床補強: なし"),(u.hasTopReinforcement||u.W>940)&&t.push("天板補強: あり"),u.hasSideReinforcement&&t.push(`側面補強(上部開口): ${u.sideOpeningH}mm`),u.hasDoorAntiFlex&&t.push("扉たわみ防止"),u.hasSideVentCover&&t.push("換気調整板"),u.hasPerch&&t.push("止まり木"),u.hasRoomDivider&&t.push("２室分け"),u.ledType&&u.ledType!=="none"){const i={usb:"LED: USB式",rgbw:"LED: RGB+W"};t.push(i[u.ledType]||"LED照明")}t.push(u.footType==="caster"?"キャスター":"ゴム脚"),ou.innerHTML=`
    <div class="spec-line-primary">${n} | ${e}</div>
    <div class="spec-line-sub">${t.join(" / ")}</div>
  `}function $a(n,e,t,i){n.addEventListener("input",s=>{const o=parseInt(s.target.value,10);e.value=o,u[t]=o,i&&i(o),$e()}),e.addEventListener("change",s=>{let o=parseInt(s.target.value,10);const r=parseInt(n.min,10),a=parseInt(n.max,10),h=parseInt(n.step,10)||10;isNaN(o)&&(o=r),o=Math.round(o/h)*h,o=Math.max(r,Math.min(a,o)),e.value=o,n.value=o,u[t]=o,i&&i(o),$e()})}function Us(){if(u.W>940)on.checked=!0,on.disabled=!0,$t.classList.remove("disabled"),$t.classList.add("required-locked"),Ic.textContent="幅940mm超のため必須（解除不可）",u.hasFloorReinforcement=!0;else{on.disabled=!1,$t.classList.remove("disabled","required-locked"),Ic.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください";const n=u.W*u.D>ff;u.hasFloorReinforcement=n,on.checked=n}u.floorSplitCount||(u.floorSplitCount=2),ct&&(ct.value||(ct.value=String(u.floorSplitCount)),ct.disabled=!u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement)}function Ya(){Gt&&(u.W>940?(Gt.checked=!0,Gt.disabled=!0,Bt&&(Bt.classList.remove("disabled"),Bt.classList.add("required-locked")),po&&(po.textContent="幅940mm超のため必須（解除不可）"),u.hasBackReinforcement=!0):(Gt.disabled&&(Gt.checked=!1,u.hasBackReinforcement=!1),Gt.disabled=!1,Bt&&Bt.classList.remove("disabled","required-locked"),po&&(po.textContent="940mm以下は任意指定（W>940mmは必須）")),u.backSplitCount||(u.backSplitCount=2),ht&&(ht.value||(ht.value=String(u.backSplitCount)),ht.disabled=!u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement))}$a(yn,bn,"W",n=>{Us(),Ya(),n>940?(Ut.checked=!0,Ut.disabled=!0,Mt&&(Mt.classList.remove("disabled"),Mt.classList.add("required-locked")),Ei.textContent="幅940mm超のため必須（解除不可）",u.hasTopReinforcement=!0):(Ut.disabled=!1,Mt&&Mt.classList.remove("disabled","required-locked"),Ei.textContent="940mm以下は任意指定（W>940mmは必須）",Ut.checked=!1,u.hasTopReinforcement=!1),Mt&&Mt.classList.toggle("active",u.hasTopReinforcement)});$a(os,rs,"D",()=>{Us()});$a(Sn,Tn,"H",n=>{const e=Math.max(30,n-120);as.max=e,ls.max=e,u.frontWindowH>e&&(u.frontWindowH=e,as.value=e,ls.value=e);const t=50,i=Math.max(t,n-110),s=Math.round((n-60)/10)*5;tt.min=t,tt.max=i,tt.step=5,u.hasSideReinforcement?u.sideOpeningH>i?(u.sideOpeningH=i,tt.value=i):u.sideOpeningH<t&&(u.sideOpeningH=t,tt.value=t):(u.sideOpeningH=s,tt.value=s)});$a(as,ls,"frontWindowH");tt.addEventListener("change",n=>{let e=parseInt(n.target.value,10);const t=50,i=Math.max(t,u.H-110),s=5;isNaN(e)&&(e=t),e=Math.round(e/s)*s,e=Math.max(t,Math.min(i,e)),tt.value=e,u.sideOpeningH=e,$e()});cs.addEventListener("change",n=>{if(u.hasSideReinforcement=n.target.checked,u.hasSideReinforcement){Ii.classList.add("active"),Fi.classList.remove("disabled");const e=50,t=Math.max(e,u.H-110);tt.min=e,tt.max=t,tt.step=5;const i=Math.round((u.H-60)/10)*5;(u.sideOpeningH<e||u.sideOpeningH>t)&&(u.sideOpeningH=i,tt.value=i)}else Ii.classList.remove("active"),Fi.classList.add("disabled");$e()});on.addEventListener("change",n=>{u.hasFloorReinforcement=n.target.checked,u.floorSplitCount||(u.floorSplitCount=2),ct&&(ct.value||(ct.value=String(u.floorSplitCount)),ct.disabled=!u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement),$e()});ct&&ct.addEventListener("change",n=>{u.floorSplitCount=parseInt(n.target.value,10),$e()});Gt&&Gt.addEventListener("change",n=>{u.hasBackReinforcement=n.target.checked,u.backSplitCount||(u.backSplitCount=2),ht&&(ht.value||(ht.value=String(u.backSplitCount)),ht.disabled=!u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement),$e()});ht&&ht.addEventListener("change",n=>{u.backSplitCount=parseInt(n.target.value,10),$e()});ct&&(ct.value=String(u.floorSplitCount||2),ct.disabled=!u.hasFloorReinforcement);ht&&(ht.value=String(u.backSplitCount||2),ht.disabled=!u.hasBackReinforcement);Ut.addEventListener("change",n=>{u.hasTopReinforcement=n.target.checked,Mt&&Mt.classList.toggle("active",u.hasTopReinforcement),$e()});function T2(){if(!mn||!rn)return;const n=u.cageType==="A_FRONT",e=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",t=document.getElementById("door-anti-flex-sub");n||e?(u.hasDoorAntiFlex&&(u.hasDoorAntiFlex=!1,mn.checked=!1),mn.disabled=!0,rn.classList.add("disabled"),rn.classList.remove("active"),t&&(t.textContent=e?"※正面枠囲い仕様（扉なし）のため選択不可":"※前開き（横開き扉）仕様のためスライド扉用レールは選択不可")):(mn.disabled=!1,rn.classList.remove("disabled"),t&&(t.textContent="強力生体向け。左右端に縦レールを追加し内側からの変形を防止"))}function Nc(){if(!an||!jt)return;const n=u.cageType==="A_FRONT",e=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",t=u.hasPerch;n||t||e?(u.hasRoomDivider&&(u.hasRoomDivider=!1,an.checked=!1,gn&&gn.classList.add("hidden")),an.disabled=!0,jt.classList.add("disabled"),jt.classList.remove("active"),ji&&(e?ji.textContent="※正面枠囲い仕様では2室分け仕切り板は選択不可":n?ji.textContent="※前開き仕様では2室分け仕切り板は選択不可":ji.textContent="※止まり木オプション選択時は利用できません")):(an.disabled=!1,jt.classList.remove("disabled"),ji&&(ji.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"))}mn.addEventListener("change",n=>{if(u.cageType==="A_FRONT"){n.target.checked=!1,u.hasDoorAntiFlex=!1;return}u.hasDoorAntiFlex=n.target.checked,n.target.checked?rn.classList.add("active"):rn.classList.remove("active"),$e()});An.addEventListener("change",n=>{u.hasSideVentCover=n.target.checked,n.target.checked?_n.classList.add("active"):_n.classList.remove("active"),$e()});wt&&wt.addEventListener("change",n=>{u.hasPerch=n.target.checked,n.target.checked?(Pt&&Pt.classList.add("active"),Nc(),(u.panelConfig.top!=="punching"||u.panelConfig.topLeft!=="punching"||u.panelConfig.topRight!=="punching")&&(u.panelConfig.top="punching",u.panelConfig.topLeft="punching",u.panelConfig.topRight="punching",ds&&(ds.value="punching"),us&&(us.value="punching"),fs&&(fs.value="punching"),Di("※天面パンチングボードの穴を利用して固定するため、天面を塩ビパンチングに変更しました。金網天板との組み合わせは直接DMにてご相談ください。",6e3))):(Pt&&Pt.classList.remove("active"),Nc()),$e()});an&&an.addEventListener("change",n=>{u.hasRoomDivider=n.target.checked,n.target.checked?(jt&&jt.classList.add("active"),gn&&gn.classList.remove("hidden"),wt&&(u.hasPerch&&(u.hasPerch=!1,wt.checked=!1,Pt&&Pt.classList.remove("active")),wt.disabled=!0),Pt&&Pt.classList.add("disabled"),go&&(go.textContent="※２室分けオプション選択時は利用できません"),(u.panelConfig.top!=="punching"||u.panelConfig.topLeft!=="punching"||u.panelConfig.topRight!=="punching")&&Di("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3)):(jt&&jt.classList.remove("active"),gn&&gn.classList.add("hidden"),wt&&(wt.disabled=!1),Pt&&Pt.classList.remove("disabled"),go&&(go.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応")),$e()});ps&&ps.addEventListener("change",n=>{u.panelConfig.partition=n.target.value,$e()});bi.addEventListener("change",n=>{n.target.checked?(u.frontWideFrame="2x",fi="2x"):(u.frontWideFrame="none",fi="none"),$e()});Si.addEventListener("change",n=>{n.target.checked?(u.frontWideFrame="3x",fi="3x"):(u.frontWideFrame="none",fi="none"),$e()});wn&&wn.addEventListener("change",n=>{u.hasBottomWideFrame=n.target.checked,u.hasBottomWideFrame||(u.hasTopWideFrame=!1),Va(),$e()});nn&&nn.addEventListener("change",n=>{u.hasTopWideFrame=n.target.checked,n.target.checked?kt==null||kt.classList.add("active"):kt==null||kt.classList.remove("active"),$e()});Bn.addEventListener("change",n=>{u.hasRubberPacking=n.target.checked,n.target.checked?En.classList.add("active"):En.classList.remove("active"),$e()});ui&&ui.addEventListener("change",n=>{u.hasFloorHeaterSupport=n.target.checked,n.target.checked?pn==null||pn.classList.add("active"):pn==null||pn.classList.remove("active"),$e()});Pn.addEventListener("click",()=>{u.cageType="A",u.frontWideFrame=fi,Pn.classList.add("active"),Et==null||Et.classList.remove("active"),Ct==null||Ct.classList.remove("active"),kn.classList.remove("active"),At==null||At.classList.remove("active"),ni.classList.add("hidden"),It.textContent="Type A 選択中 (全面スライド扉)",_s(),$e()});Et==null||Et.addEventListener("click",()=>{u.cageType="A_FRONT",u.frontWideFrame=fi,Et.classList.add("active"),Pn.classList.remove("active"),Ct==null||Ct.classList.remove("active"),kn.classList.remove("active"),At==null||At.classList.remove("active"),ni.classList.add("hidden"),It.textContent=`Type A 前開き 選択中 (${Gn()})`,_s(),$e()});Ct==null||Ct.addEventListener("click",()=>{u.cageType="A_FRAMED",Ct.classList.add("active"),Pn.classList.remove("active"),Et==null||Et.classList.remove("active"),kn.classList.remove("active"),At==null||At.classList.remove("active"),ni.classList.add("hidden"),It.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)",_s(),$e()});kn.addEventListener("click",()=>{u.cageType="C",u.frontWideFrame="none",kn.classList.add("active"),Pn.classList.remove("active"),Et==null||Et.classList.remove("active"),Ct==null||Ct.classList.remove("active"),At==null||At.classList.remove("active"),ni.classList.remove("hidden"),It.textContent="Type C 選択中 (前窓＋扉)",_s(),$e()});At==null||At.addEventListener("click",()=>{u.cageType="C_FRAMED",u.frontWideFrame="none",At.classList.add("active"),Pn.classList.remove("active"),Et==null||Et.classList.remove("active"),Ct==null||Ct.classList.remove("active"),kn.classList.remove("active"),ni.classList.remove("hidden"),It.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)",_s(),$e()});const w2=600,E2=700,C2=900,A2=450,P2=300,R2=200,L2=1800,D2=900;function I2(){const n=u.cageType==="A_FRONT",e=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",t=e?C2:P2,i=e?A2:R2,s=n?w2:L2,o=n?E2:D2;yn&&bn&&(yn.min=t,bn.min=t,yn.max=s,bn.max=s,u.W<t?(u.W=t,yn.value=t,bn.value=t,Us()):u.W>s&&(u.W=s,yn.value=s,bn.value=s,Us())),Sn&&Tn&&(Sn.min=i,Tn.min=i,Sn.max=o,Tn.max=o,u.H<i?(u.H=i,Sn.value=i,Tn.value=i):u.H>o&&(u.H=o,Sn.value=o,Tn.value=o))}function _s(){const n=u.cageType==="A_FRONT",e=u.cageType==="A_FRAMED"||u.cageType==="C_FRAMED",t=u.cageType==="C"||u.cageType==="C_FRAMED";I2(),T2(),Nc(),$n==null||$n.classList.toggle("hidden",e||t),Yn==null||Yn.classList.toggle("hidden",e||t),Fl&&(n?(Fl.classList.remove("hidden"),Pi==null||Pi.classList.toggle("active",u.doorHingeSide!=="right"),Ri==null||Ri.classList.toggle("active",u.doorHingeSide==="right")):Fl.classList.add("hidden"));const i=ha?ha.closest(".control-section"):null;i&&i.classList.remove("hidden"),ha&&iu&&(ha.style.display=n?"none":"grid",iu.style.display=n?"grid":"none"),su&&(su.textContent=n?"前開き扉 開閉":"引き違いスライド扉 開閉");const s=u.doorState||"closed";uf.forEach(o=>{o.classList.toggle("active",o.getAttribute("data-mode")===s)})}Pi&&Pi.addEventListener("click",()=>{u.doorHingeSide="left",Pi.classList.add("active"),Ri==null||Ri.classList.remove("active"),u.cageType==="A_FRONT"&&(It.textContent=`Type A 前開き 選択中 (${Gn()})`),$e()});Ri&&Ri.addEventListener("click",()=>{u.doorHingeSide="right",Ri.classList.add("active"),Pi==null||Pi.classList.remove("active"),u.cageType==="A_FRONT"&&(It.textContent=`Type A 前開き 選択中 (${Gn()})`),$e()});Ui.addEventListener("click",()=>{u.frameColor="silver",Ui.classList.add("active"),Ni.classList.remove("active"),$e()});Ni.addEventListener("click",()=>{u.frameColor="black",Ni.classList.add("active"),Ui.classList.remove("active"),$e()});di.addEventListener("change",n=>{u.footType=n.target.checked?"caster":"rubber",n.target.checked?ii.classList.add("active"):ii.classList.remove("active"),$e()});function Io(){u.ledType&&u.ledType!=="none"?(li==null||li.classList.add("active"),ao==null||ao.classList.remove("hidden"),u.ledType==="usb"?(In==null||In.classList.remove("hidden"),Fn==null||Fn.classList.add("hidden")):u.ledType==="rgbw"?(In==null||In.classList.add("hidden"),Fn==null||Fn.classList.remove("hidden")):(In==null||In.classList.add("hidden"),Fn==null||Fn.classList.add("hidden"))):(li==null||li.classList.remove("active"),ao==null||ao.classList.add("hidden")),hr&&dr&&(u.ledPower?(hr.classList.add("active"),dr.classList.remove("active")):(hr.classList.remove("active"),dr.classList.add("active"))),Jn&&Jn.classList.toggle("active",!!st.isDarkroomMode)}ms&&ms.addEventListener("change",n=>{u.ledType=n.target.value,u.ledType!=="none"&&(u.ledPower=!0),st.setDarkroomOverride(null),Io(),$e(),Jn&&Jn.classList.toggle("active",!!st.isDarkroomMode)});hr&&dr&&(hr.addEventListener("click",()=>{u.ledPower=!0,st.setDarkroomOverride(null),Io(),$e(),Jn&&Jn.classList.toggle("active",!!st.isDarkroomMode)}),dr.addEventListener("click",()=>{u.ledPower=!1,st.setDarkroomOverride(null),Io(),$e(),Jn&&Jn.classList.toggle("active",!!st.isDarkroomMode)}));In&&In.querySelectorAll(".btn-led-mode").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.usbMode;u.ledColorMode=t,In.querySelectorAll(".btn-led-mode").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),$e()})});Fn&&Fn.querySelectorAll(".btn-color-dot").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.color;u.ledRgbColor=t,Fn.querySelectorAll(".btn-color-dot").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),$e()})});Jn&&Jn.addEventListener("click",()=>{const n=!st.isDarkroomMode;st.setDarkroomOverride(n),Jn.classList.toggle("active",n)});let da=null;function No(n){u.doorState=n,uf.forEach(t=>{t.getAttribute("data-mode")===n?t.classList.add("active"):t.classList.remove("active")});const e=document.querySelector(".door-mode-group");e.classList.add("door-animating"),da&&clearTimeout(da),da=setTimeout(()=>{e.classList.remove("door-animating"),da=null},3100),st.setDoorState(n)}cf.addEventListener("click",()=>No("closed"));hf.addEventListener("click",()=>No("left_open"));df.addEventListener("click",()=>No("right_open"));Ta==null||Ta.addEventListener("click",()=>No("closed"));wa==null||wa.addEventListener("click",()=>No("open"));function gf(n){eh=n,st.setAutoRotate(n,u),n?(Uc.classList.add("active","rotating"),Fc.forEach(e=>e.classList.remove("active"))):Uc.classList.remove("active","rotating")}Uc.addEventListener("click",()=>{gf(!eh)});Fc.forEach(n=>{n.addEventListener("click",()=>{gf(!1),Fc.forEach(t=>t.classList.remove("active")),n.classList.add("active");const e=n.getAttribute("data-view");st.setViewPreset(e,u)})});m2.addEventListener("click",()=>{u.W=750,u.D=450,u.H=300,u.cageType="A",u.frontWindowH=50,u.hasSideReinforcement=!1,u.sideOpeningH=120,No("closed"),yn.value=750,bn.value=750,os.value=450,rs.value=450,Sn.value=300,Tn.value=300,as.value=50,ls.value=50,cs.checked=!1,Ii.classList.remove("active"),Fi.classList.add("disabled"),tt.min=50,tt.max=190,tt.step=5,tt.value=120,on.checked=!1,on.disabled=!1,$t.classList.remove("disabled"),$t.classList.remove("active"),Ic.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください",u.hasFloorReinforcement=!1,u.floorSplitCount=2,ct&&(ct.value="2",ct.disabled=!0),Gt&&(Gt.checked=!1,Gt.disabled=!1,Bt&&(Bt.classList.remove("disabled"),Bt.classList.remove("active")),po&&(po.textContent="940mm以下は任意指定（W>940mmは必須）"),u.hasBackReinforcement=!1,u.backSplitCount=2,ht&&(ht.value="2",ht.disabled=!0)),Ut.checked=!1,Ut.disabled=!1,Mt.classList.remove("disabled"),Mt.classList.remove("active"),Ei.textContent="940mm以下は任意指定（W>940mmは必須）",u.hasTopReinforcement=!1,di.checked=!1,ii.classList.remove("active"),u.footType="rubber",mn.checked=!1,rn.classList.remove("active"),u.hasDoorAntiFlex=!1,An.checked=!1,_n.classList.remove("active"),u.hasSideVentCover=!1,wt&&(wt.checked=!1,wt.disabled=!1),Pt&&Pt.classList.remove("active","disabled"),go&&(go.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応"),u.hasPerch=!1,an&&(an.checked=!1,an.disabled=!1),jt&&jt.classList.remove("active","disabled"),ji&&(ji.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"),gn&&gn.classList.add("hidden"),ps&&(ps.value="black_matte"),u.hasRoomDivider=!1,Bn&&(Bn.checked=!1),En&&En.classList.remove("active"),u.hasRubberPacking=!1,ui&&(ui.checked=!1),pn&&pn.classList.remove("active"),u.hasFloorHeaterSupport=!1,u.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"},u.ledType="none",u.ledPower=!0,u.ledBrightness=1,u.ledColorMode="all",u.ledRgbColor="#ffffff",ms&&(ms.value="none"),st.setDarkroomOverride(null),Io(),u.frontWideFrame="2x",fi="2x",Pn.click(),st.setViewPreset("iso",u),$e()});hs&&hs.addEventListener("change",n=>{u.panelConfig.floor=n.target.value,$e()});Co.addEventListener("change",n=>{u.panelConfig.back=n.target.value,$e()});Ao.addEventListener("change",n=>{u.panelConfig.side=n.target.value,$e()});Po.addEventListener("change",n=>{u.panelConfig.sideUpper=n.target.value,yr(),$e()});Ro.addEventListener("change",n=>{u.panelConfig.sideLower=n.target.value,$e()});ds.addEventListener("change",n=>{u.panelConfig.top=n.target.value,u.hasPerch&&n.target.value!=="punching"?Di("※止まり木は天面パンチングボードの穴を利用します。金網天板やアクリル天板との組み合わせは直接DMにてご相談ください。",5e3):u.hasRoomDivider&&n.target.value!=="punching"&&Di("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),$e()});us.addEventListener("change",n=>{u.panelConfig.topLeft=n.target.value,u.hasPerch&&n.target.value!=="punching"?Di("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):u.hasRoomDivider&&n.target.value!=="punching"&&Di("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),$e()});fs.addEventListener("change",n=>{u.panelConfig.topRight=n.target.value,u.hasPerch&&n.target.value!=="punching"?Di("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):u.hasRoomDivider&&n.target.value!=="punching"&&Di("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),$e()});const du=document.querySelectorAll(".sidebar-tab"),F2=document.querySelectorAll(".tab-pane");du.forEach(n=>{n.addEventListener("click",()=>{const e=n.getAttribute("data-tab");du.forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),n.classList.add("active"),n.setAttribute("aria-selected","true"),F2.forEach(t=>{t.id===e?t.classList.add("active"):t.classList.remove("active")}),st&&typeof st.onResize=="function"&&setTimeout(()=>st.onResize(),50)})});let ua=!0;Ol&&Ol.addEventListener("click",()=>{ua=!ua,Ol.classList.toggle("active",ua),ru&&ru.classList.toggle("hidden",!ua)});let fa=!0;kl&&kl.addEventListener("click",()=>{fa=!fa,kl.classList.toggle("active",fa),au&&au.classList.toggle("hidden",!fa)});tt&&(tt.min=50,tt.max=Math.max(50,u.H-110),tt.step=5,tt.value=u.sideOpeningH);$e();st.setViewPreset("iso",u);Zn&&Zn.addEventListener("click",()=>{_r()});function U2(){!is||!Array.isArray(Ia)||(is.innerHTML="",Ia.forEach(n=>{const e=document.createElement("button");e.className="creature-card",e.dataset.presetId=n.id,e.title=`${n.name} (${n.W}×${n.D}×${n.H}mm)`;const t=Array.isArray(n.tags)&&n.tags.length>0?`<div class="creature-card-tags">
          ${n.tags.map(i=>`<span class="creature-spec-tag">${i}</span>`).join("")}
         </div>`:"";e.innerHTML=`
      <div class="creature-card-header">
        <div class="creature-card-title-wrap">
          <span class="creature-card-icon">${n.icon||"🦎"}</span>
          <span class="creature-card-name">${n.name}</span>
        </div>
        <span class="creature-card-badge">適用中</span>
      </div>
      <div class="creature-card-size">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>
        <span>幅 ${n.W} × 奥行 ${n.D} × 高さ ${n.H} mm</span>
      </div>
      ${t}
      <p class="creature-card-desc">${n.desc||""}</p>
    `,e.addEventListener("click",()=>{vf(n)}),is.appendChild(e)}))}function _f(){u.footType="rubber",u.frontWideFrame="2x",u.hasFloorReinforcement=!1,u.floorSplitCount=2,u.hasBackReinforcement=!1,u.backSplitCount=2,u.hasTopReinforcement=!1,u.hasDoorAntiFlex=!1,u.hasSideVentCover=!1,u.hasPerch=!1,u.hasRubberPacking=!1,u.hasFloorHeaterSupport=!1,u.hasRoomDivider=!1,u.hasBottomWideFrame=!1,u.hasTopWideFrame=!1,u.hasSideReinforcement=!1,u.sideOpeningH=120,u.ledType="none",u.ledPower=!0,u.ledBrightness=1,u.ledColorMode="all",u.ledRgbColor="#ffffff",u.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"},di&&(di.checked=!1),ii&&ii.classList.remove("active"),on&&(on.checked=!1),$t&&$t.classList.remove("active"),ct&&(ct.value="2",ct.disabled=!0),Gt&&(Gt.checked=!1),Bt&&Bt.classList.remove("active"),ht&&(ht.value="2",ht.disabled=!0),Ut&&(Ut.checked=!1,Ut.disabled=!1),Mt&&Mt.classList.remove("active","disabled","required-locked"),mn&&(mn.checked=!1),rn&&rn.classList.remove("active"),An&&(An.checked=!1),_n&&_n.classList.remove("active"),wt&&(wt.checked=!1,wt.disabled=!1),Pt&&Pt.classList.remove("active","disabled"),Bn&&(Bn.checked=!1),En&&En.classList.remove("active"),ui&&(ui.checked=!1),pn&&pn.classList.remove("active"),an&&(an.checked=!1),jt&&jt.classList.remove("active"),gn&&gn.classList.add("hidden"),wn&&(wn.checked=!1),Kn&&Kn.classList.remove("active"),nn&&(nn.checked=!1),kt&&kt.classList.remove("active"),cs&&(cs.checked=!1),Ii&&Ii.classList.remove("active"),Fi&&Fi.classList.add("disabled"),Lo&&Lo.classList.remove("hidden"),Do&&Do.classList.add("hidden"),ms&&(ms.value="none"),li&&li.classList.remove("active"),Io(),hs&&(hs.value="acrylic"),Co&&(Co.value="acrylic"),Ao&&(Ao.value="acrylic"),Po&&(Po.value="punching"),Ro&&(Ro.value="acrylic"),ds&&(ds.value="punching"),us&&(us.value="punching"),fs&&(fs.value="punching"),ps&&(ps.value="black_matte"),is&&is.querySelectorAll(".creature-card").forEach(e=>e.classList.remove("active"))}function vf(n){if(_f(),u.W=n.W,u.D=n.D,u.H=n.H,n.cageType&&(n.cageType==="A"||n.cageType==="A_FRONT"||n.cageType==="A_FRAMED"||n.cageType==="C"||n.cageType==="C_FRAMED")&&(u.cageType=n.cageType,Pn&&kn&&(Pn.classList.toggle("active",u.cageType==="A"),Et==null||Et.classList.toggle("active",u.cageType==="A_FRONT"),Ct==null||Ct.classList.toggle("active",u.cageType==="A_FRAMED"),kn.classList.toggle("active",u.cageType==="C"),At==null||At.classList.toggle("active",u.cageType==="C_FRAMED"),It&&(u.cageType==="A_FRAMED"?It.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":u.cageType==="C_FRAMED"?It.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":u.cageType==="A_FRONT"?(u.doorHingeSide=n.doorHingeSide||"left",It.textContent=`Type A 前開き 選択中 (${Gn()})`):It.textContent=u.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),ni&&ni.classList.toggle("hidden",u.cageType!=="C"&&u.cageType!=="C_FRAMED"),_s())),u.cageType==="C"||u.cageType==="C_FRAMED"){const s=n.frontWindowH!=null?n.frontWindowH:50;u.frontWindowH=s,ls&&(ls.value=s),as&&(as.value=s)}if(n.frameColor&&(n.frameColor==="silver"||n.frameColor==="black")&&(u.frameColor=n.frameColor,Ui&&Ni&&(Ui.classList.toggle("active",u.frameColor==="silver"),Ni.classList.toggle("active",u.frameColor==="black"))),u.cageType==="A"){const s=n.frontWideFrame||"2x";u.frontWideFrame=s,fi=s}else u.frontWideFrame="none";u.hasSideReinforcement=!!n.hasSideReinforcement,cs&&(cs.checked=u.hasSideReinforcement),Ii&&Ii.classList.toggle("active",u.hasSideReinforcement),Fi&&Fi.classList.toggle("disabled",!u.hasSideReinforcement);const e=50,t=Math.max(e,u.H-110);if(tt&&(tt.min=e,tt.max=t,tt.step=5),n.id==="hedgehog"){const s=Math.round((u.H-60)/10)*5;u.sideOpeningH=s,tt&&(tt.value=s)}else if(n.sideOpeningH!=null)u.sideOpeningH=Math.max(e,Math.min(t,n.sideOpeningH)),tt&&(tt.value=u.sideOpeningH);else if(u.hasSideReinforcement){const s=Math.round((u.H-60)/10)*5;u.sideOpeningH=s,tt&&(tt.value=s)}u.hasDoorAntiFlex=!!n.hasDoorAntiFlex,mn&&(mn.checked=u.hasDoorAntiFlex),rn&&rn.classList.toggle("active",u.hasDoorAntiFlex),u.hasSideVentCover=!!n.hasSideVentCover,An&&(An.checked=u.hasSideVentCover),_n&&_n.classList.toggle("active",u.hasSideVentCover),u.hasPerch=!!n.hasPerch,wt&&(wt.checked=u.hasPerch),Pt&&Pt.classList.toggle("active",u.hasPerch),n.panelConfig&&(u.panelConfig={...u.panelConfig,...n.panelConfig}),u.footType=n.footType||"rubber",di&&(di.checked=u.footType==="caster"),ii&&ii.classList.toggle("active",u.footType==="caster"),bn&&(bn.value=u.W),yn&&(yn.value=u.W),rs&&(rs.value=u.D),os&&(os.value=u.D),Tn&&(Tn.value=u.H),Sn&&(Sn.value=u.H),u.floorSplitCount=n.floorSplitCount!=null?n.floorSplitCount:2,ct&&(ct.value=String(u.floorSplitCount)),n.hasFloorReinforcement!=null?(u.hasFloorReinforcement=!!n.hasFloorReinforcement,on&&(on.checked=u.hasFloorReinforcement)):Us(),ct&&(ct.disabled=!u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement),u.backSplitCount=n.backSplitCount!=null?n.backSplitCount:2,ht&&(ht.value=String(u.backSplitCount)),n.hasBackReinforcement!=null?(u.hasBackReinforcement=!!n.hasBackReinforcement,Gt&&(Gt.checked=u.hasBackReinforcement)):Ya(),ht&&(ht.disabled=!u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement),u.W>940?(Ut.checked=!0,Ut.disabled=!0,Mt&&(Mt.classList.remove("disabled"),Mt.classList.add("required-locked")),Ei.textContent="幅940mm超のため必須（解除不可）",u.hasTopReinforcement=!0):(Ut.disabled=!1,Mt&&Mt.classList.remove("disabled","required-locked"),Ei.textContent="940mm以下は任意指定（W>940mmは必須）",u.hasTopReinforcement=!!n.hasTopReinforcement,Ut.checked=u.hasTopReinforcement),Mt&&Mt.classList.toggle("active",u.hasTopReinforcement),Wa(),yr(),is.querySelectorAll(".creature-card").forEach(s=>{s.classList.toggle("active",s.dataset.presetId===n.id)}),$e(),st.setViewPreset("iso",u)}function N2(n){if(!n||typeof n!="object")return!1;_f(),Number.isFinite(n.W)&&(u.W=Number(n.W),bn&&(bn.value=u.W),yn&&(yn.value=u.W)),Number.isFinite(n.D)&&(u.D=Number(n.D),rs&&(rs.value=u.D),os&&(os.value=u.D)),Number.isFinite(n.H)&&(u.H=Number(n.H),Tn&&(Tn.value=u.H),Sn&&(Sn.value=u.H));const e=["A","A_FRONT","A_FRAMED","C","C_FRAMED"];if(n.cageType&&e.includes(n.cageType)&&(u.cageType=n.cageType,Pn&&kn&&(Pn.classList.toggle("active",u.cageType==="A"),Et==null||Et.classList.toggle("active",u.cageType==="A_FRONT"),Ct==null||Ct.classList.toggle("active",u.cageType==="A_FRAMED"),kn.classList.toggle("active",u.cageType==="C"),At==null||At.classList.toggle("active",u.cageType==="C_FRAMED"),It&&(u.cageType==="A_FRAMED"?It.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":u.cageType==="C_FRAMED"?It.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":u.cageType==="A_FRONT"?(u.doorHingeSide=n.doorHingeSide||"left",It.textContent=`Type A 前開き 選択中 (${Gn()})`):It.textContent=u.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),ni&&ni.classList.toggle("hidden",u.cageType!=="C"&&u.cageType!=="C_FRAMED"),_s())),u.cageType==="C"||u.cageType==="C_FRAMED"){const o=n.frontWindowH!=null?Number(n.frontWindowH):50;u.frontWindowH=o,ls&&(ls.value=o),as&&(as.value=o)}n.doorHingeSide&&(n.doorHingeSide==="left"||n.doorHingeSide==="right")&&(u.doorHingeSide=n.doorHingeSide),n.frameColor&&(n.frameColor==="silver"||n.frameColor==="black")&&(u.frameColor=n.frameColor,Ui&&Ni&&(Ui.classList.toggle("active",u.frameColor==="silver"),Ni.classList.toggle("active",u.frameColor==="black"))),u.footType=n.footType==="caster"?"caster":"rubber",di&&(di.checked=u.footType==="caster"),ii&&ii.classList.toggle("active",u.footType==="caster"),u.cageType==="A"?(u.frontWideFrame=n.frontWideFrame||"2x",fi=u.frontWideFrame):u.frontWideFrame="none",u.hasSideReinforcement=!!n.hasSideReinforcement,cs&&(cs.checked=u.hasSideReinforcement),Ii&&Ii.classList.toggle("active",u.hasSideReinforcement),Fi&&Fi.classList.toggle("disabled",!u.hasSideReinforcement);const t=50,i=Math.max(t,u.H-110);tt&&(tt.min=t,tt.max=i),u.sideOpeningH=n.sideOpeningH!=null?Math.max(t,Math.min(i,Number(n.sideOpeningH))):120,tt&&(tt.value=u.sideOpeningH),Lo&&Do&&(Lo.classList.toggle("hidden",u.hasSideReinforcement),Do.classList.toggle("hidden",!u.hasSideReinforcement)),u.hasDoorAntiFlex=!!n.hasDoorAntiFlex,mn&&(mn.checked=u.hasDoorAntiFlex),rn&&rn.classList.toggle("active",u.hasDoorAntiFlex),u.hasSideVentCover=!!n.hasSideVentCover,An&&(An.checked=u.hasSideVentCover),_n&&_n.classList.toggle("active",u.hasSideVentCover),u.hasPerch=!!n.hasPerch,wt&&(wt.checked=u.hasPerch),Pt&&Pt.classList.toggle("active",u.hasPerch),u.hasRubberPacking=!!n.hasRubberPacking,Bn&&(Bn.checked=u.hasRubberPacking),En&&En.classList.toggle("active",u.hasRubberPacking),u.hasFloorHeaterSupport=!!n.hasFloorHeaterSupport,ui&&(ui.checked=u.hasFloorHeaterSupport),pn&&pn.classList.toggle("active",u.hasFloorHeaterSupport),u.hasBottomWideFrame=!!n.hasBottomWideFrame,u.hasTopWideFrame=u.hasBottomWideFrame&&!!n.hasTopWideFrame,wn&&(wn.checked=u.hasBottomWideFrame),Kn&&Kn.classList.toggle("active",u.hasBottomWideFrame),nn&&(nn.checked=u.hasTopWideFrame),kt&&kt.classList.toggle("active",u.hasTopWideFrame),u.floorSplitCount=n.floorSplitCount!=null?Number(n.floorSplitCount):2,ct&&(ct.value=String(u.floorSplitCount)),typeof n.hasFloorReinforcement=="boolean"?u.hasFloorReinforcement=n.hasFloorReinforcement:Us(),on&&(on.checked=u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement),ct&&(ct.disabled=!u.hasFloorReinforcement),u.backSplitCount=n.backSplitCount!=null?Number(n.backSplitCount):2,ht&&(ht.value=String(u.backSplitCount)),typeof n.hasBackReinforcement=="boolean"?u.hasBackReinforcement=n.hasBackReinforcement:Ya(),Gt&&(Gt.checked=u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement),ht&&(ht.disabled=!u.hasBackReinforcement),u.W>940?(Ut&&(Ut.checked=!0,Ut.disabled=!0),Mt&&(Mt.classList.remove("disabled"),Mt.classList.add("required-locked")),Ei&&(Ei.textContent="幅940mm超のため必須（解除不可）"),u.hasTopReinforcement=!0):(Ut&&(Ut.disabled=!1),Mt&&Mt.classList.remove("disabled","required-locked"),Ei&&(Ei.textContent="940mm以下は任意指定（W>940mmは必須）"),u.hasTopReinforcement=!!n.hasTopReinforcement,Ut&&(Ut.checked=u.hasTopReinforcement),Mt&&Mt.classList.toggle("active",u.hasTopReinforcement));const s=u.hasTopReinforcement||u.W>940;return Ua&&Na&&(Ua.classList.toggle("hidden",s),Na.classList.toggle("hidden",!s)),u.hasRoomDivider=!!n.hasRoomDivider,an&&(an.checked=u.hasRoomDivider),jt&&jt.classList.toggle("active",u.hasRoomDivider),gn&&gn.classList.toggle("hidden",!u.hasRoomDivider),u.hasRoomDivider&&wt&&(u.hasPerch=!1,wt.checked=!1,wt.disabled=!0,Pt&&Pt.classList.add("disabled")),u.ledType=n.ledType||"none",ms&&(ms.value=u.ledType),typeof n.ledPower=="boolean"&&(u.ledPower=n.ledPower),typeof n.ledBrightness=="number"&&(u.ledBrightness=n.ledBrightness),n.ledColorMode&&(u.ledColorMode=n.ledColorMode),n.ledRgbColor&&(u.ledRgbColor=n.ledRgbColor),li&&li.classList.toggle("active",u.ledType!=="none"),Io(),n.panelConfig&&typeof n.panelConfig=="object"&&(u.panelConfig={...u.panelConfig,...n.panelConfig}),hs&&u.panelConfig.floor&&(hs.value=u.panelConfig.floor),Co&&u.panelConfig.back&&(Co.value=u.panelConfig.back),Ao&&u.panelConfig.side&&(Ao.value=u.panelConfig.side),Po&&u.panelConfig.sideUpper&&(Po.value=u.panelConfig.sideUpper),Ro&&u.panelConfig.sideLower&&(Ro.value=u.panelConfig.sideLower),ds&&u.panelConfig.top&&(ds.value=u.panelConfig.top),us&&u.panelConfig.topLeft&&(us.value=u.panelConfig.topLeft),fs&&u.panelConfig.topRight&&(fs.value=u.panelConfig.topRight),ps&&u.panelConfig.partition&&(ps.value=u.panelConfig.partition),is&&is.querySelectorAll(".creature-card").forEach(r=>r.classList.remove("active")),Wa(),Va(),yr(),th(),$e(),st.setViewPreset("iso",u),typeof _r=="function"&&_r(),!0}async function Bc(n){var t,i,s,o,r,a,h;if(!n||typeof n!="string"){Zi("error","見積りIDを入力してください。");return}const e=n.trim().toUpperCase();if(!e.startsWith("EST-")||e.length<10){Zi("error","見積りIDの形式が正しくありません。（例: EST-20261005-AB12）");return}Zi("loading",`⏳ 見積ID「${e}」の仕様データを検索中...`),uo&&(uo.disabled=!0);try{let l=null,c=null;const f=(t=Ye==null?void 0:Ye.system)==null?void 0:t.gasLogEndpointUrl;let m=!1,p=!1;if(f&&f.startsWith("http"))try{const _=`${f}?estimateId=${encodeURIComponent(e)}`;console.log("[Restore] GASへ見積りデータ問い合わせ中:",_);const g=await(await fetch(_,{method:"GET",mode:"cors"})).text();if(g.includes("スクリプト関数が見つかりません")||g.includes("doGet"))m=!0,console.warn("[Restore] GAS側に doGet が未デプロイです。");else try{const d=JSON.parse(g);d.status==="success"&&d.spec?(l=d.spec,c=d,console.log("[Restore] GASから仕様データを正常に受信:",d)):d.status==="not_found"&&(p=!0,console.warn("[Restore] GAS上で該当見積りが見つかりませんでした:",d.message))}catch(d){console.warn("[Restore] レスポンスのJSONパースに失敗:",d,g.substring(0,200))}}catch(_){console.warn("[Restore] GAS通信エラー（ローカルキャッシュ検索へフォールバック）:",_)}if(!l)try{const _=localStorage.getItem(`kinato_estimate_${e}`);if(_){const v=JSON.parse(_);v&&v.spec&&(l=v.spec,c=v,console.log("[Restore] localStorageから仕様データを復元:",v))}else{const v=localStorage.getItem("kinato_latest_estimate");if(v){const g=JSON.parse(v);g&&g.estimateId===e&&g.spec&&(l=g.spec,c=g,console.log("[Restore] 最新localStorageキャッシュから仕様データを復元:",g))}}}catch(_){console.warn("[Restore] localStorage検索エラー:",_)}if(!l){m?Zi("error","⚠️ スプレッドシート側のGASに最新コード（doGet）がまだ保存・デプロイされていません。Google Apps Scriptを更新して再度お試しください。"):p?Zi("error",`❌ スプレッドシート内に見積ID「${e}」の記録が見つかりませんでした。IDをお確かめください。`):Zi("error",`❌ 見積ID「${e}」が見つかりませんでした。入力内容をお確かめください。`);return}if(N2(l),c){const _=((i=c.summary)==null?void 0:i.originalPrice)||((s=c.totals)==null?void 0:s.priceWithMarkup)||((o=c.originalTotals)==null?void 0:o.priceWithMarkup),v=((r=c.summary)==null?void 0:r.originalWeight)||((a=c.totals)==null?void 0:a.weight)||((h=c.originalTotals)==null?void 0:h.weight);console.log(`[仕様再現 検証] 見積ID: ${e} | 記録時価格: ¥${_==null?void 0:_.toLocaleString()} / 重量: ${v}kg`)}Zi("success",`✅ 見積ID「${e}」のケージ仕様・全オプションを完全再現しました！`),Di(`✅ 見積ID: ${e} の仕様を完全に読み込みました！`,4500)}catch(l){console.error("[Restore] 復元処理エラー:",l),Zi("error",`エラーが発生しました: ${l.message}`)}finally{uo&&(uo.disabled=!1)}}function Zi(n,e){sa&&(sa.className=`restore-status-msg ${n}`,sa.textContent=e,sa.classList.remove("hidden"))}uo&&As&&(uo.addEventListener("click",()=>{Bc(As.value)}),As.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),Bc(As.value))}),As.addEventListener("input",n=>{n.target.value=n.target.value.toUpperCase()}));function B2(){const n=new Date,e=n.getFullYear()+String(n.getMonth()+1).padStart(2,"0")+String(n.getDate()).padStart(2,"0"),t=Math.random().toString(36).substring(2,6).toUpperCase();return`EST-${e}-${t}`}function nh(n){if(!n)return"";if(window.location.hostname.includes("pages.dev")||window.location.hostname.includes("kinatocage"))return`https://kinato-cage-site.pages.dev/sim/?estimateId=${encodeURIComponent(n)}`;const t=new URL(window.location.href);return t.search=`?estimateId=${encodeURIComponent(n)}`,t.toString()}function ih(){try{let n=localStorage.getItem("cage_visitor_id");return n||(n="usr_"+Math.random().toString(36).substring(2,8),localStorage.setItem("cage_visitor_id",n)),n}catch{return"usr_"+Math.random().toString(36).substring(2,8)}}function xf(){try{let n=sessionStorage.getItem("cage_session_id");return n||(n="ses_"+Math.random().toString(36).substring(2,8),sessionStorage.setItem("cage_session_id",n)),n}catch{return"ses_"+Math.random().toString(36).substring(2,8)}}function O2(n){qn=B2(),eu++;let e="初期表示からの試算";if(nt){const i=[];u.W!==nt.W&&i.push(`W:${nt.W}→${u.W}`),u.D!==nt.D&&i.push(`D:${nt.D}→${u.D}`),u.H!==nt.H&&i.push(`H:${nt.H}→${u.H}`),u.cageType!==nt.cageType&&i.push(`タイプ:${u.cageType}`),u.cageType==="C"&&u.frontWindowH!==nt.frontWindowH&&i.push(`前窓高:${nt.frontWindowH}→${u.frontWindowH}`),u.cageType==="A_FRONT"&&u.doorHingeSide!==nt.doorHingeSide&&i.push(`開き:${Gn(nt.doorHingeSide)}→${Gn(u.doorHingeSide)}`),u.frameColor!==nt.frameColor&&i.push(`色:${nt.frameColor==="black"?"黒":"銀"}→${u.frameColor==="black"?"黒":"銀"}`),u.frontWideFrame!==nt.frontWideFrame&&i.push(`正面下部:${nt.frontWideFrame||"なし"}→${u.frontWideFrame||"なし"}`),u.footType!==nt.footType&&i.push(`脚:${u.footType==="caster"?"キャスター":"ゴム脚"}`),u.hasFloorReinforcement!==nt.hasFloorReinforcement&&i.push(u.hasFloorReinforcement?"床補強追加":"床補強解除"),u.hasTopReinforcement!==nt.hasTopReinforcement&&i.push(u.hasTopReinforcement?"天板補強追加":"天板補強解除"),u.hasSideReinforcement!==nt.hasSideReinforcement&&i.push(u.hasSideReinforcement?"側面補強追加":"側面補強解除"),u.hasDoorAntiFlex!==nt.hasDoorAntiFlex&&i.push(u.hasDoorAntiFlex?"扉たわみ防止追加":"扉たわみ防止解除"),u.hasSideVentCover!==nt.hasSideVentCover&&i.push(u.hasSideVentCover?"換気調整板追加":"換気調整板解除"),u.hasPerch!==nt.hasPerch&&i.push(u.hasPerch?"止まり木追加":"止まり木解除"),u.hasRubberPacking!==nt.hasRubberPacking&&i.push(u.hasRubberPacking?"ゴムパッキン追加":"ゴムパッキン解除"),u.hasFloorHeaterSupport!==nt.hasFloorHeaterSupport&&i.push(u.hasFloorHeaterSupport?"床下ヒータ支え板追加":"床下ヒータ支え板解除"),u.hasRoomDivider!==nt.hasRoomDivider&&i.push(u.hasRoomDivider?"2室分け追加":"2室分け解除"),u.hasBottomWideFrame!==nt.hasBottomWideFrame&&i.push(u.hasBottomWideFrame?"下側幅広外周追加":"下側幅広外周解除"),u.hasTopWideFrame!==nt.hasTopWideFrame&&i.push(u.hasTopWideFrame?"上側幅広外周追加":"上側幅広外周解除"),u.hasSideReinforcement&&u.sideOpeningH!==nt.sideOpeningH&&i.push(`側上部開口:${nt.sideOpeningH}→${u.sideOpeningH}`);const s=nt.panelConfig||{},o=u.panelConfig||{};o.floor!==s.floor&&i.push(`床:${dn(s.floor)}→${dn(o.floor)}`),o.back!==s.back&&i.push(`背:${dn(s.back)}→${dn(o.back)}`),u.hasSideReinforcement?(o.sideUpper!==s.sideUpper||o.sideLower!==s.sideLower)&&i.push(`側分割:${dn(o.sideUpper)}/${dn(o.sideLower)}`):o.side!==s.side&&i.push(`側:${dn(s.side)}→${dn(o.side)}`);const r=u.hasTopReinforcement||u.W>940,a=nt.hasTopReinforcement||nt.W>940;r||a?(o.topLeft!==s.topLeft||o.topRight!==s.topRight||!a)&&i.push(`天分割:${dn(o.topLeft)}/${dn(o.topRight)}`):o.top!==s.top&&i.push(`天:${dn(s.top)}→${dn(o.top)}`),u.hasRoomDivider&&o.partition!==s.partition&&i.push(`仕切り:${dn(s.partition)}→${dn(o.partition)}`),i.length>0?e=i.join(", "):e="同一条件での再計算"}const t=k2(qn,n);qd&&(qd.textContent=qn),Zd&&(Zd.textContent=`¥${n.priceWithMarkup.toLocaleString()}`),Kd&&(Kd.textContent=`${n.weight.toFixed(1)} kg`),cr&&(cr.value=t),es&&(es.value=nh(qn)),On&&(un&&un.classList.add("hidden"),Fa&&Fa.classList.add("hidden"),window.lastGeneratedEstimateImage=null,On.classList.remove("hidden")),Rs={estimateId:qn,timestamp:new Date().toISOString(),visitorId:d2,sessionId:u2,seq:eu,spec:{...u},totals:{...n},diffNote:e,elapsedSec:Math.round((Date.now()-h2)/1e3)},nt=JSON.parse(JSON.stringify(u));try{localStorage.setItem(`kinato_estimate_${qn}`,JSON.stringify(Rs)),localStorage.setItem("kinato_latest_estimate",JSON.stringify(Rs))}catch{}z2(Rs)}function sh(){return u.frameColor==="black"?"ブラック":"シルバー"}function ri(n){switch(n){case"acrylic":return"透明アクリル 3.0mm";case"black_matte":return"アクリル黒両面マット 3.0mm";case"smoke_gray":return"アクリル グレースモーク半透明 3.0mm";case"punching":return"塩ビパンチングボード 3.0mm";case"polyca":return"中空ポリカ 4.0mm";case"mesh15":return"金網15mmピッチ (黒粉体塗装)";case"mesh25":return"金網25mmピッチ (黒粉体塗装)";case"mesh30":return"金網30mmピッチ (黒粉体塗装)";default:return n||"透明アクリル 3.0mm"}}function dn(n){switch(n){case"acrylic":return"透明アクリル";case"black_matte":return"黒マット";case"smoke_gray":return"グレースモーク";case"punching":return"パンチング";case"polyca":return"中空ポリカ";case"mesh15":return"金網15mm";case"mesh25":return"金網25mm";case"mesh30":return"金網30mm";default:return n||"アクリル"}}function oh(){const n=[];u.cageType==="C"?(n.push({face:"正面扉",name:"透明アクリル 3.0mm (スライド扉)"}),n.push({face:"正面固定窓",name:`透明アクリル 3.0mm (開口高 ${u.frontWindowH}mm)`})):u.cageType==="A_FRONT"?n.push({face:"正面扉",name:`透明アクリル 3.0mm (前開き扉: ${Gn()})`}):n.push({face:"正面扉",name:"透明アクリル 3.0mm (全面スライド扉)"});const e=u.floorSplitCount===3?"3分割":"2分割";n.push({face:u.hasFloorReinforcement?`床面 (中央${e})`:"床面",name:ri(u.panelConfig.floor)});const t=u.backSplitCount===3?"3分割":"2分割";return n.push({face:u.hasBackReinforcement?`背面 (中央${t})`:"背面",name:ri(u.panelConfig.back)}),u.hasSideReinforcement?n.push({face:"側面 (左右2分割)",name:`上部: ${ri(u.panelConfig.sideUpper)} / 下部: ${ri(u.panelConfig.sideLower)}`}):n.push({face:"側面 (左右)",name:ri(u.panelConfig.side)}),u.hasTopReinforcement||u.W>940?u.panelConfig.topLeft===u.panelConfig.topRight?n.push({face:"天面 (中央2分割)",name:`${ri(u.panelConfig.topLeft)} (左右共通)`}):n.push({face:"天面 (中央2分割)",name:`左: ${ri(u.panelConfig.topLeft)} / 右: ${ri(u.panelConfig.topRight)}`}):n.push({face:"天面",name:ri(u.panelConfig.top)}),u.hasRoomDivider&&n.push({face:"仕切り板",name:ri(u.panelConfig.partition||"black_matte")}),n}function rh(){const n=[];if(u.cageType==="A_FRONT"&&n.push(`前開き扉仕様 (${Gn()})`),u.cageType==="A"&&(u.frontWideFrame==="2x"?n.push("正面下側幅広フレーム2倍幅 (40mm)"):u.frontWideFrame==="3x"&&n.push("正面下側幅広フレーム3倍幅 (60mm)")),u.hasBottomWideFrame&&n.push("下側幅広フレーム（高さ40mm・外周）"),u.hasTopWideFrame&&n.push("上側幅広フレーム（高さ40mm・外周）"),u.cageType==="C"&&n.push(`前窓固定仕様 (開口高さ ${u.frontWindowH}mm)`),u.hasSideReinforcement&&n.push(`側面補強フレーム (側面上部開口 ${u.sideOpeningH}mm・左右2分割)`),u.hasSideVentCover&&(u.hasSideReinforcement?n.push("側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)"):n.push("側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)")),u.hasFloorReinforcement){const e=u.floorSplitCount===3?"3分割仕様":"2分割仕様";u.W>940?n.push(`床面補強フレーム (幅940mm超・標準付属/${e})`):n.push(`床面補強フレーム (${e})`)}if(u.hasBackReinforcement){const e=u.backSplitCount===3?"3分割仕様":"2分割仕様";u.W>940?n.push(`背面補強フレーム (幅940mm超・標準付属/${e})`):n.push(`背面補強フレーム (${e})`)}if(u.W>940?n.push("天板中央補強フレーム (幅940mm超・標準付属/2分割仕様)"):u.hasTopReinforcement&&n.push("天板中央補強フレーム (2分割仕様)"),u.hasDoorAntiFlex&&n.push("正面スライド扉たわみ防止レール"),u.footType==="caster"&&n.push("自在キャスター仕様 (4輪・高さ66mm)"),u.hasPerch){const e=u.W-120,t=Math.floor(e/7)*7,i=Math.max(10,t-15);n.push(`止まり木（天板吊り下げ式・φ30アルミ丸棒 L=${i}mm・後付け可）`)}if(u.hasRubberPacking&&n.push("モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)"),u.hasFloorHeaterSupport&&(u.hasFloorReinforcement?u.floorSplitCount===3?n.push("床下パネルヒータ支え板 (床面3分割用・透明アクリル2.0mm 3枚＋緩衝プラダン4.0mm 3枚＋化粧ネジ付)"):n.push("床下パネルヒータ支え板 (床面2分割用・透明アクリル2.0mm 2枚＋緩衝プラダン4.0mm 2枚＋化粧ネジ付)"):n.push("床下パネルヒータ支え板 (通常床面用・透明アクリル2.0mm 1枚＋緩衝プラダン4.0mm 1枚＋化粧ネジ付)")),u.hasRoomDivider&&n.push("２室分け（後付け仕切り板仕様）"),u.ledType&&u.ledType!=="none"){const e={usb:"LED照明: USB式 白＆電球色 LED",rgbw:"LED照明: リモコン操作 RGB+W"};n.push(e[u.ledType]||"LED照明")}return n}function k2(n,e){const t=Xa(!0),i=sh(),o=oh().map(l=>`  ・${l.face}: ${l.name}`).join(`
`),r=rh(),a=r.length>0?r.map(l=>`  ・${l}`).join(`
`):"  ・標準構成（追加オプションなし）",h=nh(n);return`【ケージお見積もり仕様】
・見積ID: ${n}
・仕様再現URL:
  ${h}
・ケージ種類: ${t}
・外寸サイズ: 幅 ${u.W}mm × 奥行 ${u.D}mm × 高さ ${u.H}mm
・フレーム色: ${i}
・選択パネル素材・板厚:
${o}
・選択オプション:
${a}
・概算総重量: 約 ${e.weight.toFixed(1)} kg
・お見積り合計金額: ¥${e.priceWithMarkup.toLocaleString()}（税込・送料別）
※URLを控えることで、この仕様にてロードされます。
※まだβ版なので誤差（最大±5%程度）が出ております。詳細はDMよりお問い合わせください。
※公式サイト: https://kinato-cage-site.pages.dev/`}Qd&&On&&Qd.addEventListener("click",()=>{gr?(un&&un.classList.add("hidden"),es&&qn&&(es.value=nh(qn)),On.classList.remove("hidden")):alert("先に「見積もりと重量計算」を実行してください。")});jd&&On&&jd.addEventListener("click",()=>{On.classList.add("hidden")});Jd&&On&&Jd.addEventListener("click",()=>{On.classList.add("hidden")});On&&On.addEventListener("click",n=>{n.target===On&&On.classList.add("hidden")});Dl&&cr&&Dl.addEventListener("click",async()=>{const n=cr.value;if(n)try{await navigator.clipboard.writeText(n),io&&(io.classList.remove("hidden"),setTimeout(()=>io.classList.add("hidden"),2200));const e=Dl.querySelector(".copy-text-label");if(e){const t=e.textContent;e.textContent="済！",setTimeout(()=>{e.textContent=t},1800)}}catch{cr.select(),document.execCommand("copy"),io&&(io.classList.remove("hidden"),setTimeout(()=>io.classList.add("hidden"),2200))}});Il&&es&&Il.addEventListener("click",async()=>{const n=es.value;if(n)try{navigator.clipboard&&navigator.clipboard.writeText?await navigator.clipboard.writeText(n):(es.select(),document.execCommand("copy")),oo&&(oo.classList.remove("hidden"),setTimeout(()=>{oo.classList.add("hidden")},3e3));const e=Il.querySelector(".copy-url-label");if(e){const t=e.textContent;e.textContent="コピー完了！",setTimeout(()=>{e.textContent=t},2e3)}}catch{es.select(),document.execCommand("copy"),oo&&(oo.classList.remove("hidden"),setTimeout(()=>oo.classList.add("hidden"),3e3))}});Lc&&Lc.addEventListener("click",()=>{G2()});fo&&fo.addEventListener("click",()=>{fo.src&&window.open(fo.src,"_blank")});async function G2(){if(!gr||!Rs){alert("先に見積もり計算を実行してください。");return}const n=Lc||c2;let e="";n&&(n.classList.add("is-exporting"),e=n.innerHTML,n.innerHTML="<span>⏳ 画像を生成中...</span>");try{const t=st.captureImage?st.captureImage():st.renderer.domElement.toDataURL("image/png"),i=document.createElement("canvas");i.width=1080,i.height=1920;const s=i.getContext("2d"),o=s.createLinearGradient(0,0,0,1920);o.addColorStop(0,"#090d16"),o.addColorStop(.35,"#0f172a"),o.addColorStop(1,"#1e293b"),s.fillStyle=o,s.fillRect(0,0,1080,1920),s.strokeStyle="rgba(56, 189, 248, 0.06)",s.lineWidth=1;for(let ae=60;ae<1080;ae+=80)s.beginPath(),s.moveTo(ae,0),s.lineTo(ae,1920),s.stroke();for(let ae=60;ae<1920;ae+=80)s.beginPath(),s.moveTo(0,ae),s.lineTo(1080,ae),s.stroke();s.strokeStyle="rgba(56, 189, 248, 0.35)",s.lineWidth=2,s.strokeRect(40,40,1e3,1840);const r=ae=>new Promise(ge=>{if(!ae)return ge(null);const Ce=new Image;Ce.onload=()=>ge(Ce),Ce.onerror=()=>ge(null),Ce.src=ae}),a="./",[h,l,c,f]=await Promise.all([r(`${a}logo_kinato.png`),r(`${a}character_transparent.png`),r(t),r(`${a}qr_code_kinato.png`)]);h&&s.drawImage(h,65,65,135,135);const m=h?215:65;s.fillStyle="#ffffff",s.font='bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("きなとのケージ屋さん",m,104),s.fillStyle="#38bdf8",s.font='600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3Dオーダーメイドケージ お見積書",m,140),s.fillStyle="#f9c784",s.font="500 16px ui-monospace, SFMono-Regular, monospace",s.fillText("https://kinato-cage-site.pages.dev/",m,172),f&&(s.fillStyle="#ffffff",s.shadowColor="rgba(56, 189, 248, 0.3)",s.shadowBlur=10,Jo(s,605,67,130,130,8),s.fill(),s.shadowColor="transparent",s.shadowBlur=0,s.drawImage(f,610,72,120,120)),s.textAlign="right",s.fillStyle="#fb7185",s.font="bold 24px ui-monospace, monospace",s.fillText(qn,1015,110),s.fillStyle="#94a3b8",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const p=new Date,_=`${p.getFullYear()}/${String(p.getMonth()+1).padStart(2,"0")}/${String(p.getDate()).padStart(2,"0")} ${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`;s.fillText(`発行日時: ${_}`,1015,148),s.textAlign="left";const v=65,g=240,d=950,C=700;if(s.fillStyle="rgba(15, 23, 42, 0.75)",s.strokeStyle="rgba(56, 189, 248, 0.25)",s.lineWidth=2,Jo(s,v,g,d,C,16),s.fill(),s.stroke(),c){const ae=Math.min((d-40)/c.width,(C-40)/c.height),ge=c.width*ae,Ce=c.height*ae,Be=v+(d-ge)/2,j=g+(C-Ce)/2;s.drawImage(c,Be,j,ge,Ce)}s.fillStyle="rgba(2, 6, 23, 0.85)",s.strokeStyle="rgba(56, 189, 248, 0.5)",Jo(s,v+20,g+C-55,230,36,6),s.fill(),s.stroke(),s.fillStyle="#38bdf8",s.font='600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3D外観シミュレーション",v+35,g+C-31);const M=65,x=960,I=950,R=505;s.fillStyle="rgba(30, 41, 59, 0.65)",s.strokeStyle="rgba(148, 163, 184, 0.2)",s.lineWidth=1.5,Jo(s,M,x,I,R,16),s.fill(),s.stroke(),s.fillStyle="#f8fafc",s.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("📐 ケージ設計パラメータ",M+30,x+40),s.strokeStyle="rgba(148, 163, 184, 0.15)",s.lineWidth=1,s.beginPath(),s.moveTo(M+25,x+56),s.lineTo(M+I-25,x+56),s.stroke();const w=Xa(!0),L=sh(),y=oh(),b=rh();s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("ケージ種類",M+30,x+90),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(w,M+230,x+90),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("外寸サイズ",M+30,x+125),s.fillStyle="#38bdf8",s.font='bold 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`幅 ${u.W} mm  ×  奥行 ${u.D} mm  ×  高さ ${u.H} mm`,M+230,x+125),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("フレーム仕様",M+30,x+160),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(L,M+230,x+160),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択パネル・板厚",M+30,x+198);let A=x+198;y.forEach(ae=>{s.fillStyle="#38bdf8",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`[${ae.face}]`,M+230,A),s.fillStyle="#e2e8f0",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(ae.name,M+380,A),A+=25}),s.strokeStyle="rgba(148, 163, 184, 0.12)",s.beginPath(),s.moveTo(M+25,A+6),s.lineTo(M+I-25,A+6),s.stroke();const O=A+34;if(s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択オプション",M+30,O),b.length===0)s.fillStyle="#94a3b8",s.font='500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("標準構成（追加オプションなし）",M+230,O);else{let ae=O;b.forEach(ge=>{s.fillStyle="#fbbf24",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("✔",M+230,ae),s.fillStyle="#f8fafc",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(ge,M+255,ae),ae+=24})}const U=!!(l||f),G=65,B=1485,Y=U?650:950,z=345,N=s.createLinearGradient(G,B,G+Y,B+z);if(N.addColorStop(0,"rgba(15, 23, 42, 0.88)"),N.addColorStop(1,"rgba(30, 41, 59, 0.92)"),s.fillStyle=N,s.strokeStyle="rgba(217, 70, 239, 0.4)",s.lineWidth=2,Jo(s,G,B,Y,z,16),s.fill(),s.stroke(),s.fillStyle="#cbd5e1",s.font='600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("概算総重量 (計算値)",G+35,B+48),s.fillStyle="#38bdf8",s.font="bold 32px ui-monospace, monospace",s.fillText(`約 ${Rs.totals.weight.toFixed(1)} kg`,G+280,B+50),s.strokeStyle="rgba(148, 163, 184, 0.2)",s.beginPath(),s.moveTo(G+30,B+70),s.lineTo(G+Y-30,B+70),s.stroke(),s.fillStyle="#f1f5f9",s.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("お見積もり合計金額 (税込・送料別)",G+35,B+110),s.fillStyle="#fbbf24",s.font='bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`¥${Rs.totals.priceWithMarkup.toLocaleString()}`,G+35,B+180),s.fillStyle="#fcd34d",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※まだβ版なので誤差（最大±5%程度）が出ております。",G+35,B+220),s.fillText("　詳細はDMよりお問い合わせください。",G+35,B+244),s.fillStyle="#94a3b8",s.font='500 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※本画像はお見積もりシミュレーション結果の控えです。",G+35,B+282),s.fillText("　お問い合わせ・ご注文の際にお手元にご準備ください。",G+35,B+306),U&&l){const Be=l.height/l.width*270,j=735+10/2,le=B+(z-Be)/2+5;s.drawImage(l,j,le,270,Be)}const ee=`Cage_Estimate_${qn}.png`;try{const ae=i.toDataURL("image/png");window.lastGeneratedEstimateImage=ae,fo&&(fo.src=ae),Fa&&Fa.classList.remove("hidden");const ge=await new Promise(le=>i.toBlob(le,"image/png"));let Ce=null;if(ge&&window.File)try{Ce=new File([ge],ee,{type:"image/png"})}catch(le){console.warn("File constructor failed:",le)}const Be=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);let j=!1;if(Be&&Ce&&navigator.canShare&&navigator.canShare({files:[Ce]}))try{await navigator.share({files:[Ce],title:"きなとのケージ屋さん お見積もり結果カード",text:`ケージお見積もり結果カード（${qn}）です。`}),j=!0,console.log("Shared estimate card image via Web Share API successfully"),un&&Xi&&(Xi.textContent=ee,so&&(so.textContent="✅ 共有メニューを開きました（「画像を保存」で写真アプリに保存されます）"),un.classList.remove("hidden"))}catch(le){le.name==="AbortError"?(console.log("User closed the share sheet"),un&&Xi&&(Xi.textContent=ee,so&&(so.textContent="💡 共有メニューを閉じました。下の画像を長押しして「写真」に追加も可能です"),un.classList.remove("hidden")),j=!0):console.warn("navigator.share failed, falling back to download:",le)}if(!j){const le=document.createElement("a");le.href=ae,le.download=ee,le.target="_self",document.body.appendChild(le),le.click(),document.body.removeChild(le),console.log("Downloaded estimate card image via DataURL:",ee),un&&Xi&&(Xi.textContent=ee,so&&(so.textContent=Be?"✅ 画像をダウンロードしました（下の画像を長押しして「写真」に追加も可能です）":"✅ ダウンロード完了（保存先: ダウンロードフォルダ）"),un.classList.remove("hidden"),setTimeout(()=>{un&&un.classList.add("hidden")},7e3))}}catch(ae){console.warn("toDataURL / export failed, falling back to Blob URL:",ae),i.toBlob&&i.toBlob(ge=>{if(!ge){alert("画像の書き出しに失敗しました。");return}const Ce=URL.createObjectURL(ge),Be=document.createElement("a");Be.href=Ce,Be.download=ee,document.body.appendChild(Be),Be.click(),document.body.removeChild(Be),setTimeout(()=>URL.revokeObjectURL(Ce),1e4),un&&Xi&&(Xi.textContent=ee,un.classList.remove("hidden"))},"image/png")}}catch(t){console.error("Estimate card export failed:",t),alert("画像の生成中にエラーが発生しました: "+t.message)}finally{n&&(n.classList.remove("is-exporting"),n.innerHTML=e)}}function Jo(n,e,t,i,s,o){n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.arcTo(e+i,t,e+i,t+o,o),n.lineTo(e+i,t+s-o),n.arcTo(e+i,t+s,e+i-o,t+s,o),n.lineTo(e+o,t+s),n.arcTo(e,t+s,e,t+s-o,o),n.lineTo(e,t+o),n.arcTo(e,t,e+o,t,o),n.closePath()}function ah(){const n=window.location.hostname||"",e=window.location.port||"";return n==="localhost"||n==="127.0.0.1"||n==="[::1]"||n==="0.0.0.0"||n.endsWith(".local")||n.startsWith("192.168.")||n.startsWith("10.")||e==="5173"||e==="4173"}async function z2(n){var t;if(ah()){console.log("[Log] ローカル開発環境のため、Googleスプレッドシートへの見積もりログ保存を自動スキップしました。");return}const e=(t=Ye==null?void 0:Ye.system)==null?void 0:t.gasLogEndpointUrl;if(!e.startsWith("http")){console.warn("[Log] gasLogEndpointUrl が未設定のため、ログ送信をスキップしました。");return}try{const i=navigator.userAgent;let s="PC";/iPhone/i.test(i)?s="iPhone":/iPad/i.test(i)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?s="iPad":/Android/i.test(i)?s="Android":/Mac/i.test(i)?s="Mac":/Win/i.test(i)&&(s="Windows");let o="Browser";/Chrome/i.test(i)&&!/Edge|Edg/i.test(i)?o="Chrome":/Safari/i.test(i)&&!/Chrome/i.test(i)?o="Safari":/Edge|Edg/i.test(i)?o="Edge":/Firefox/i.test(i)&&(o="Firefox");const a=oh().map(p=>`${p.face}:${p.name}`).join(" | "),h=rh(),l=h.length>0?h.join(", "):"なし",c=sh();let f=[];try{const p=sessionStorage.getItem("cage_page_history");p&&(f=JSON.parse(p)),f.includes("見積もりシステム")||(f.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(f)))}catch{}const m={type:"estimate",timestamp:n.timestamp,estimateId:n.estimateId,visitorId:n.visitorId,sessionId:n.sessionId,seq:n.seq,device:{type:s,browser:o,screen:`${window.innerWidth}x${window.innerHeight}`},spec:{...n.spec,typeName:Xa(!0),doorHingeDisplayName:u.cageType==="A_FRONT"?Gn():void 0,frameColorDisplayName:c,panelsSummary:a,optionsSummary:l},calculated:n.totals,meta:{elapsedSec:n.elapsedSec,referrer:document.referrer||"Direct",diffNote:n.diffNote,pageHistory:f}};console.log("[Log] GASへ送信中 (type: estimate)...",m),await fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),console.log("[Log] 見積もりログをスプレッドシートへ送信完了:",n.estimateId)}catch(i){console.warn("[Log] スプレッドシート送信エラー:",i)}}function H2(n){var e;try{const t=(e=Ye==null?void 0:Ye.system)==null?void 0:e.gasLogEndpointUrl;if(!t||typeof t!="string"||!t.startsWith("http"))return;const i={type:"calc_error",timestamp:new Date().toISOString(),visitorId:ih(),sessionId:xf(),errorMessage:(n==null?void 0:n.message)||String(n),errorStack:n!=null&&n.stack?String(n.stack).substring(0,1e3):"",spec:{...u},url:window.location.href,device:{userAgent:navigator.userAgent,screen:`${window.innerWidth}x${window.innerHeight}`}};console.warn("[Log] 🚨 エラー発生をGASへ通報中...",i),fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(()=>{})}catch(t){console.warn("[Log] エラーログ自動送信失敗:",t)}}U2();M2();function W2(){try{let n=null;const e=sessionStorage.getItem("kinato_sim_initial_state");if(e)try{n=JSON.parse(e),sessionStorage.removeItem("kinato_sim_initial_state"),console.log("[Sim] sessionStorageから初期設定を読み込みました:",n)}catch(t){console.warn("[Sim] sessionStorageのパースに失敗:",t)}if(!n&&window.location.search){const t=new URLSearchParams(window.location.search);let i=null;for(const[s,o]of t.entries()){const r=s.toLowerCase();if(["estimateid","id","estimate_id","est","quoteid","quote_id","estimate"].includes(r)&&o&&typeof o=="string"&&o.trim().length>0){i=o.trim();break}}if(!i){for(const[s,o]of t.entries()){const r=(o||"").trim().toUpperCase();if(r.startsWith("EST-")||r.includes("EST-20")){const h=r.match(/EST-\d{8}-[A-Z0-9]+/i)||r.match(/EST-[A-Z0-9-]+/i);if(h){i=h[0],console.log(`[Sim] タイポ・欠落パラメータ（${s}）から見積ID「${i}」を自動救済検出しました。`);break}}const a=s.trim().toUpperCase();if(a.startsWith("EST-")||a.includes("EST-20")){const h=a.match(/EST-\d{8}-[A-Z0-9]+/i)||a.match(/EST-[A-Z0-9-]+/i);if(h){i=h[0],console.log(`[Sim] パラメータキーから見積ID「${i}」を自動救済検出しました。`);break}}}if(!i&&window.location.href){const s=window.location.href.match(/EST-\d{8}-[A-Z0-9]+/i);s&&(i=s[0],console.log(`[Sim] URL文字列全体から見積ID「${i}」を自動救済検出しました。`))}}if(i){const s=i.toUpperCase();if(As&&(As.value=s),Bc(s),window.history&&window.history.replaceState){const o=`${window.location.pathname}?estimateId=${encodeURIComponent(s)}`;window.history.replaceState({},document.title,o)}return}n={},t.has("preset")&&(n.preset=t.get("preset")),t.has("w")&&(n.W=parseInt(t.get("w"),10)),t.has("d")&&(n.D=parseInt(t.get("d"),10)),t.has("h")&&(n.H=parseInt(t.get("h"),10)),t.has("type")&&(n.cageType=t.get("type").toUpperCase()),t.has("frame")&&(n.frameColor=t.get("frame")),t.has("foot")&&(n.footType=t.get("foot")),t.has("doorAntiFlex")&&(n.hasDoorAntiFlex=t.get("doorAntiFlex")==="1"||t.get("doorAntiFlex")==="true"),t.has("sideVentCover")&&(n.hasSideVentCover=t.get("sideVentCover")==="1"||t.get("sideVentCover")==="true"),t.has("perch")&&(n.hasPerch=t.get("perch")==="1"||t.get("perch")==="true"),t.has("roomDivider")&&(n.hasRoomDivider=t.get("roomDivider")==="1"||t.get("roomDivider")==="true"),t.has("floorReinf")&&(n.hasFloorReinforcement=t.get("floorReinf")==="1"||t.get("floorReinf")==="true"),t.has("floorSplit")&&(n.floorSplitCount=parseInt(t.get("floorSplit"),10)),t.has("backReinf")&&(n.hasBackReinforcement=t.get("backReinf")==="1"||t.get("backReinf")==="true"),t.has("backSplit")&&(n.backSplitCount=parseInt(t.get("backSplit"),10)),t.has("topReinf")&&(n.hasTopReinforcement=t.get("topReinf")==="1"||t.get("topReinf")==="true"),t.has("frontWide")&&(n.frontWideFrame=t.get("frontWide")),t.has("floorHeater")&&(n.hasFloorHeaterSupport=t.get("floorHeater")==="1"||t.get("floorHeater")==="true"),t.has("wideBottom")&&(n.hasBottomWideFrame=t.get("wideBottom")==="1"||t.get("wideBottom")==="true"),t.has("wideTop")&&(n.hasTopWideFrame=t.get("wideTop")==="1"||t.get("wideTop")==="true"),window.history&&window.history.replaceState&&window.history.replaceState({},document.title,window.location.pathname),console.log("[Sim] URLパラメータから初期設定を読み込み、URLをクリーンにしました:",n)}if(!n||Object.keys(n).length===0)return;if(n.preset&&Array.isArray(Ia)){const t=Ia.find(i=>i.id===n.preset);t&&vf(t)}Number.isFinite(n.W)&&(u.W=n.W,bn&&(bn.value=u.W),yn&&(yn.value=u.W)),Number.isFinite(n.D)&&(u.D=n.D,rs&&(rs.value=u.D),os&&(os.value=u.D)),Number.isFinite(n.H)&&(u.H=n.H,Tn&&(Tn.value=u.H),Sn&&(Sn.value=u.H)),(n.cageType==="A"||n.cageType==="A_FRONT"||n.cageType==="A_FRAMED"||n.cageType==="C"||n.cageType==="C_FRAMED")&&(u.cageType=n.cageType,Pn&&kn&&(Pn.classList.toggle("active",u.cageType==="A"),Et==null||Et.classList.toggle("active",u.cageType==="A_FRONT"),Ct==null||Ct.classList.toggle("active",u.cageType==="A_FRAMED"),kn.classList.toggle("active",u.cageType==="C"),At==null||At.classList.toggle("active",u.cageType==="C_FRAMED"),It&&(u.cageType==="A_FRAMED"?It.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":u.cageType==="C_FRAMED"?It.textContent="Type C 正面枠囲い 選択中 (前窓＋高剛性枠スライド扉)":u.cageType==="A_FRONT"?(u.doorHingeSide=n.doorHingeSide||"left",It.textContent=`Type A 前開き 選択中 (${Gn()})`):It.textContent=u.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),ni&&ni.classList.toggle("hidden",u.cageType!=="C"&&u.cageType!=="C_FRAMED"),_s())),(n.frameColor==="silver"||n.frameColor==="black")&&(u.frameColor=n.frameColor,Ui&&Ni&&(Ui.classList.toggle("active",u.frameColor==="silver"),Ni.classList.toggle("active",u.frameColor==="black"))),(n.footType==="rubber"||n.footType==="caster")&&(u.footType=n.footType,di&&(di.checked=u.footType==="caster"),ii&&ii.classList.toggle("active",u.footType==="caster")),typeof n.hasDoorAntiFlex=="boolean"&&(u.hasDoorAntiFlex=n.hasDoorAntiFlex,mn&&(mn.checked=u.hasDoorAntiFlex),rn&&rn.classList.toggle("active",u.hasDoorAntiFlex)),typeof n.hasSideVentCover=="boolean"&&(u.hasSideVentCover=n.hasSideVentCover,An&&(An.checked=u.hasSideVentCover),_n&&_n.classList.toggle("active",u.hasSideVentCover)),typeof n.hasPerch=="boolean"&&(u.hasPerch=n.hasPerch,wt&&(wt.checked=u.hasPerch),Pt&&Pt.classList.toggle("active",u.hasPerch)),typeof n.hasRoomDivider=="boolean"&&(u.hasRoomDivider=n.hasRoomDivider,an&&(an.checked=u.hasRoomDivider),jt&&jt.classList.toggle("active",u.hasRoomDivider),gn&&gn.classList.toggle("hidden",!u.hasRoomDivider),u.hasRoomDivider&&wt&&(u.hasPerch=!1,wt.checked=!1,wt.disabled=!0,Pt&&Pt.classList.add("disabled"))),u.floorSplitCount=n.floorSplitCount!=null?n.floorSplitCount:u.floorSplitCount||2,ct&&(ct.value=String(u.floorSplitCount)),typeof n.hasFloorReinforcement=="boolean"?(u.hasFloorReinforcement=n.hasFloorReinforcement,on&&(on.checked=u.hasFloorReinforcement)):Us(),ct&&(ct.disabled=!u.hasFloorReinforcement),$t&&$t.classList.toggle("active",u.hasFloorReinforcement),u.backSplitCount=n.backSplitCount!=null?n.backSplitCount:u.backSplitCount||2,ht&&(ht.value=String(u.backSplitCount)),typeof n.hasBackReinforcement=="boolean"?(u.hasBackReinforcement=n.hasBackReinforcement,Gt&&(Gt.checked=u.hasBackReinforcement)):Ya(),ht&&(ht.disabled=!u.hasBackReinforcement),Bt&&Bt.classList.toggle("active",u.hasBackReinforcement),typeof n.hasFloorHeaterSupport=="boolean"&&(u.hasFloorHeaterSupport=n.hasFloorHeaterSupport,ui&&(ui.checked=u.hasFloorHeaterSupport),pn&&pn.classList.toggle("active",u.hasFloorHeaterSupport)),n.frontWideFrame&&(u.frontWideFrame=n.frontWideFrame,fi=n.frontWideFrame),u.hasBottomWideFrame=!!n.hasBottomWideFrame,u.hasTopWideFrame=u.hasBottomWideFrame&&!!n.hasTopWideFrame,wn&&(wn.checked=u.hasBottomWideFrame),Kn&&Kn.classList.toggle("active",u.hasBottomWideFrame),nn&&(nn.checked=u.hasTopWideFrame),kt&&kt.classList.toggle("active",u.hasTopWideFrame),Wa(),Va(),yr(),th(),$e(),st.setViewPreset("iso",u),typeof _r=="function"&&_r()}catch(n){console.error("[Sim] 初期状態の反映エラー:",n)}}W2();(function(){var t;if(((t=Ye==null?void 0:Ye.system)==null?void 0:t.gasLogEndpointUrl).startsWith("http"))try{let i=[];try{const f=sessionStorage.getItem("cage_page_history");f&&(i=JSON.parse(f))}catch{}(i.length===0||i[i.length-1]!=="見積もりシステム")&&(i.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(i)));let s=sessionStorage.getItem("cage_initial_referrer"),o=sessionStorage.getItem("cage_landing_page");if(!s){s=document.referrer||"Direct";const f=new URLSearchParams(window.location.search),m=f.get("origin")||f.get("utm_source")||f.get("ref");m&&(s=`${s} [Param:${m}]`),sessionStorage.setItem("cage_initial_referrer",s)}o||(o=window.location.pathname,sessionStorage.setItem("cage_landing_page",o));const r=navigator.userAgent;let a="PC";/iPhone/i.test(r)?a="iPhone":/iPad/i.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?a="iPad":/Android/i.test(r)?a="Android":/Mac/i.test(r)?a="Mac":/Win/i.test(r)&&(a="Windows");let h="Browser";/Chrome/i.test(r)&&!/Edge|Edg/i.test(r)?h="Chrome":/Safari/i.test(r)&&!/Chrome/i.test(r)?h="Safari":/Edge|Edg/i.test(r)?h="Edge":/Firefox/i.test(r)&&(h="Firefox");let l="直接 / お気に入り";const c=s.toLowerCase();c.includes("instagram.com")?l="Instagram":c.includes("t.co")||c.includes("twitter.com")||c.includes("x.com")?l="X (Twitter)":c.includes("google.")?l="Google検索":c.includes("yahoo.")?l="Yahoo!検索":c.includes("line.me")?l="LINE":c.includes("tiktok.com")&&(l="TikTok")}catch(i){console.warn("[Log] sendSimAccessLog エラー:",i)}})();(function(){var a;const e=(a=Ye==null?void 0:Ye.system)==null?void 0:a.gasLogEndpointUrl;if(!e.startsWith("http"))return;let t=Date.now(),i=!1;function s(){const h=navigator.userAgent;let l="Desktop";/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(h)?l="Tablet":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(h)&&(l="Mobile");let c="";return/iPhone/i.test(h)?c="iPhone":/iPad/i.test(h)?c="iPad":/Android/i.test(h)?c="Android":/Mac/i.test(h)?c="Mac":/Win/i.test(h)?c="Windows":/Linux/i.test(h)&&(c="Linux"),c?`${l} (${c})`:l}function o(h){if(h==="Direct"||h==="")return"直接 / お気に入り";const l=h.toLowerCase();return l.includes("instagram.com")?"Instagram":l.includes("t.co")||l.includes("twitter.com")||l.includes("x.com")?"X (Twitter)":l.includes("google.")?"Google検索":l.includes("yahoo.")?"Yahoo!検索":l.includes("line.me")?"LINE":l.includes("tiktok.com")?"TikTok":"外部Webサイト"}function r(){if(i)return;const h=Math.max(0,Math.round((Date.now()-t)/1e3)),l=ih(),c=window.location.pathname||"/sim",f=document.title||"3D見積もりシミュレーター",m=sessionStorage.getItem("cage_initial_referrer")||document.referrer||"Direct",p=sessionStorage.getItem("cage_landing_page")||c,_=o(m),v=`${window.innerWidth}x${window.innerHeight}`,g=s(),d={type:"page_view",visitorId:l,path:c,title:f,duration:h,referrerCategory:_,referrer:m,landingPage:p,screen:v,deviceType:g},C=ah(),M=new URLSearchParams(window.location.search),x=M.get("debug_log")==="true"||M.get("test_log")==="true";if(C&&!x&&!0){console.log("[SimPageViewLog] ローカル開発環境のため送信をスキップしました (テスト時はURLに ?debug_log=true を付与):",d),i=!0;return}C&&console.log("[SimPageViewLog] (テスト送信) GASへページ閲覧ログを送信:",d);const R=JSON.stringify(d);let w=!1;if(navigator.sendBeacon)try{const L=new Blob([R],{type:"text/plain;charset=UTF-8"});w=navigator.sendBeacon(e,L)}catch{w=!1}if(!w&&typeof fetch=="function")try{fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:R,keepalive:!0}).catch(()=>{})}catch{}i=!0}document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"?r():document.visibilityState==="visible"&&i&&(i=!1,t=Date.now())}),window.addEventListener("pagehide",function(){r()}),window.addEventListener("pageshow",function(h){h.persisted&&(i=!1,t=Date.now())})})();
