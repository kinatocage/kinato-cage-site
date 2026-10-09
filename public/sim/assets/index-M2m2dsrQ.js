(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="170",qs={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},of=0,Zc=1,rf=2,Yu=1,qu=2,oi=3,Gi=0,zt=1,Ut=2,Oi=0,Zs=1,Uo=2,Kc=3,jc=4,af=5,is=100,lf=101,cf=102,hf=103,uf=104,df=200,ff=201,pf=202,mf=203,yl=204,bl=205,gf=206,_f=207,vf=208,xf=209,Mf=210,yf=211,bf=212,Sf=213,Tf=214,Sl=0,Tl=1,wl=2,Qs=3,El=4,Cl=5,Al=6,Pl=7,Zu=0,wf=1,Ef=2,ki=0,Cf=1,Af=2,Pf=3,Ku=4,Rf=5,Lf=6,Df=7,ju=300,eo=301,to=302,Rl=303,Ll=304,ya=306,Dl=1e3,an=1001,Il=1002,On=1003,If=1004,ir=1005,Bt=1006,La=1007,rs=1008,mi=1009,Ju=1010,Qu=1011,Ho=1012,yc=1013,ls=1014,li=1015,Ko=1016,bc=1017,Sc=1018,no=1020,ed=35902,td=1021,nd=1022,Nn=1023,id=1024,sd=1025,Ks=1026,io=1027,od=1028,Tc=1029,rd=1030,wc=1031,Ec=1033,$r=33776,Yr=33777,qr=33778,Zr=33779,Fl=35840,Ul=35841,Nl=35842,Bl=35843,Ol=36196,kl=37492,Gl=37496,zl=37808,Hl=37809,Wl=37810,Vl=37811,Xl=37812,$l=37813,Yl=37814,ql=37815,Zl=37816,Kl=37817,jl=37818,Jl=37819,Ql=37820,ec=37821,Kr=36492,tc=36494,nc=36495,ad=36283,ic=36284,sc=36285,oc=36286,Ff=3200,Uf=3201,ld=0,Nf=1,Ui="",mn="srgb",fo="srgb-linear",ba="linear",ht="srgb",vs=7680,Jc=519,Bf=512,Of=513,kf=514,cd=515,Gf=516,zf=517,Hf=518,Wf=519,rc=35044,Qc="300 es",ci=2e3,sa=2001;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jr=Math.PI/180,oa=180/Math.PI;function ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function Vf(n,e){return(n%e+e)%e}function Da(n,e,t){return(1-t)*n+t*e}function $n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xf={DEG2RAD:jr};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*i-r*s+e.x,this.y=o*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,s,o,r,a,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l)}set(e,t,i,s,o,r,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],p=i[2],f=i[5],_=i[8],v=s[0],m=s[3],u=s[6],T=s[1],M=s[4],x=s[7],D=s[2],A=s[5],P=s[8];return o[0]=r*v+a*T+c*D,o[3]=r*m+a*M+c*A,o[6]=r*u+a*x+c*P,o[1]=l*v+h*T+d*D,o[4]=l*m+h*M+d*A,o[7]=l*u+h*x+d*P,o[2]=p*v+f*T+_*D,o[5]=p*m+f*M+_*A,o[8]=p*u+f*x+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*r-a*l,p=a*c-h*o,f=l*o-r*c,_=t*d+i*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*r)*v,e[3]=p*v,e[4]=(h*t-s*c)*v,e[5]=(s*o-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(r*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+e,-s*l,s*c,-s*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Ye;function hd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $f(){const n=ra("canvas");return n.style.display="block",n}const eh={};function Po(n){n in eh||(eh[n]=!0,console.warn(n))}function Yf(n,e,t){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function qf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(n.r=di(n.r),n.g=di(n.g),n.b=di(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(n.r=js(n.r),n.g=js(n.g),n.b=js(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ui?ba:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const th=[.64,.33,.3,.6,.15,.06],nh=[.2126,.7152,.0722],ih=[.3127,.329],sh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[fo]:{primaries:th,whitePoint:ih,transfer:ba,toXYZ:sh,fromXYZ:oh,luminanceCoefficients:nh,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:th,whitePoint:ih,transfer:ht,toXYZ:sh,fromXYZ:oh,luminanceCoefficients:nh,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let xs;class Kf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=ra("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=di(o[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jf=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Fa(s[r].image)):o.push(Fa(s[r]))}else o=Fa(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jf=0;class $t extends ms{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=an,s=an,o=Bt,r=rs,a=Nn,c=mi,l=$t.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ui(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ju;$t.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],_=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,D=(u+1)/2,A=(h+p)/4,P=(d+v)/4,R=(_+m)/4;return M>x&&M>D?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=A/i,o=P/i):x>D?x<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),i=A/s,o=R/s):D<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),i=P/o,s=R/o),this.set(i,s,o,t),this}let T=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(d-v)/T,this.z=(p-h)/T,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qf extends ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new $t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ud(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends Qf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dd extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ep extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const p=o[r+0],f=o[r+1],_=o[r+2],v=o[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(d!==v||c!==p||l!==f||h!==_){let m=1-a;const u=c*p+l*f+h*_+d*v,T=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const D=Math.sqrt(M),A=Math.atan2(D,u*T);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}const x=a*T;if(c=c*m+p*x,l=l*m+f*x,h=h*m+_*x,d=d*m+v*x,m===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=o[r],p=o[r+1],f=o[r+2],_=o[r+3];return e[t]=a*_+h*d+c*f-l*p,e[t+1]=c*_+h*p+l*d-a*f,e[t+2]=l*_+h*f+a*p-c*d,e[t+3]=h*_-a*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(o/2),p=c(i/2),f=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=p*h*d+l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d-p*f*_;break;case"YXZ":this._x=p*h*d+l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d+p*f*_;break;case"ZXY":this._x=p*h*d-l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d-p*f*_;break;case"ZYX":this._x=p*h*d-l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d+p*f*_;break;case"YZX":this._x=p*h*d+l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d-p*f*_;break;case"XZY":this._x=p*h*d-l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=i+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+i*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=r*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*s-a*i),h=2*(a*t-o*s),d=2*(o*i-r*t);return this.x=t+c*l+r*d-a*h,this.y=i+c*h+a*l-o*d,this.z=s+c*d+o*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new I,rh=new hs;class jo{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Cn):Cn.fromBufferAttribute(o,r),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),or.subVectors(this.max,vo),Ms.subVectors(e.a,vo),ys.subVectors(e.b,vo),bs.subVectors(e.c,vo),bi.subVectors(ys,Ms),Si.subVectors(bs,ys),Zi.subVectors(Ms,bs);let t=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-Zi.z,Zi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,Zi.z,0,-Zi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-Zi.y,Zi.x,0];return!Na(t,Ms,ys,bs,or)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Ms,ys,bs,or))?!1:(rr.crossVectors(bi,Si),t=[rr.x,rr.y,rr.z],Na(t,Ms,ys,bs,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new I,new I,new I,new I,new I,new I,new I,new I],Cn=new I,sr=new jo,Ms=new I,ys=new I,bs=new I,bi=new I,Si=new I,Zi=new I,vo=new I,or=new I,rr=new I,Ki=new I;function Na(n,e,t,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Ki.fromArray(n,o);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),h=i.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const tp=new jo,xo=new I,Ba=new I;class Sa{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tp.setFromPoints(e).getCenter(i);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const t=xo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(xo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(Ba)),this.expandByPoint(xo.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new I,Oa=new I,ar=new I,Ti=new I,ka=new I,lr=new I,Ga=new I;class Cc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Oa.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Oa);const o=e.distanceTo(t)*.5,r=-this.direction.dot(ar),a=Ti.dot(this.direction),c=-Ti.dot(ar),l=Ti.lengthSq(),h=Math.abs(1-r*r);let d,p,f,_;if(h>0)if(d=r*c-a,p=r*a-c,_=o*h,d>=0)if(p>=-_)if(p<=_){const v=1/h;d*=v,p*=v,f=d*(d+r*p+2*a)+p*(r*d+p+2*c)+l}else p=o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;else p=-o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-r*o+a)),p=d>0?-o:Math.min(Math.max(-o,-c),o),f=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-o,-c),o),f=p*(p+2*c)+l):(d=Math.max(0,-(r*o+a)),p=d>0?o:Math.min(Math.max(-o,-c),o),f=-d*d+p*(p+2*c)+l);else p=r>0?-o:o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oa).addScaledVector(ar,p),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(o=(e.min.y-p.y)*h,r=(e.max.y-p.y)*h):(o=(e.max.y-p.y)*h,r=(e.min.y-p.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,o){ka.subVectors(t,e),lr.subVectors(i,e),Ga.crossVectors(ka,lr);let r=this.direction.dot(Ga),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ti.subVectors(this.origin,e);const c=a*this.direction.dot(lr.crossVectors(Ti,lr));if(c<0)return null;const l=a*this.direction.dot(ka.cross(Ti));if(l<0||c+l>r)return null;const h=-a*Ti.dot(Ga);return h<0?null:this.at(h/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,s,o,r,a,c,l,h,d,p,f,_,v,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l,h,d,p,f,_,v,m)}set(e,t,i,s,o,r,a,c,l,h,d,p,f,_,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=o,u[5]=r,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),o=1/Ss.setFromMatrixColumn(e,1).length(),r=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const p=r*h,f=r*d,_=a*h,v=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=p-v*l,t[9]=-a*c,t[2]=v-p*l,t[6]=_+f*l,t[10]=r*c}else if(e.order==="YXZ"){const p=c*h,f=c*d,_=l*h,v=l*d;t[0]=p+v*a,t[4]=_*a-f,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-a,t[2]=f*a-_,t[6]=v+p*a,t[10]=r*c}else if(e.order==="ZXY"){const p=c*h,f=c*d,_=l*h,v=l*d;t[0]=p-v*a,t[4]=-r*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=r*h,t[9]=v-p*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const p=r*h,f=r*d,_=a*h,v=a*d;t[0]=c*h,t[4]=_*l-f,t[8]=p*l+v,t[1]=c*d,t[5]=v*l+p,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const p=r*c,f=r*l,_=a*c,v=a*l;t[0]=c*h,t[4]=v-p*d,t[8]=_*d+f,t[1]=d,t[5]=r*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+_,t[10]=p-v*d}else if(e.order==="XZY"){const p=r*c,f=r*l,_=a*c,v=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+v,t[5]=r*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*h,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(np,e,ip)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),wi.crossVectors(i,en),wi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),wi.crossVectors(i,en)),wi.normalize(),cr.crossVectors(en,wi),s[0]=wi.x,s[4]=cr.x,s[8]=en.x,s[1]=wi.y,s[5]=cr.y,s[9]=en.y,s[2]=wi.z,s[6]=cr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],p=i[9],f=i[13],_=i[2],v=i[6],m=i[10],u=i[14],T=i[3],M=i[7],x=i[11],D=i[15],A=s[0],P=s[4],R=s[8],S=s[12],y=s[1],w=s[5],N=s[9],F=s[13],B=s[2],U=s[6],k=s[10],K=s[14],V=s[3],ae=s[7],ie=s[11],ce=s[15];return o[0]=r*A+a*y+c*B+l*V,o[4]=r*P+a*w+c*U+l*ae,o[8]=r*R+a*N+c*k+l*ie,o[12]=r*S+a*F+c*K+l*ce,o[1]=h*A+d*y+p*B+f*V,o[5]=h*P+d*w+p*U+f*ae,o[9]=h*R+d*N+p*k+f*ie,o[13]=h*S+d*F+p*K+f*ce,o[2]=_*A+v*y+m*B+u*V,o[6]=_*P+v*w+m*U+u*ae,o[10]=_*R+v*N+m*k+u*ie,o[14]=_*S+v*F+m*K+u*ce,o[3]=T*A+M*y+x*B+D*V,o[7]=T*P+M*w+x*U+D*ae,o[11]=T*R+M*N+x*k+D*ie,o[15]=T*S+M*F+x*K+D*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],f=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+o*c*d-s*l*d-o*a*p+i*l*p+s*a*f-i*c*f)+v*(+t*c*f-t*l*p+o*r*p-s*r*f+s*l*h-o*c*h)+m*(+t*l*d-t*a*f-o*r*d+i*r*f+o*a*h-i*l*h)+u*(-s*a*h-t*c*d+t*a*p+s*r*d-i*r*p+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],f=e[11],_=e[12],v=e[13],m=e[14],u=e[15],T=d*m*l-v*p*l+v*c*f-a*m*f-d*c*u+a*p*u,M=_*p*l-h*m*l-_*c*f+r*m*f+h*c*u-r*p*u,x=h*v*l-_*d*l+_*a*f-r*v*f-h*a*u+r*d*u,D=_*d*c-h*v*c-_*a*p+r*v*p+h*a*m-r*d*m,A=t*T+i*M+s*x+o*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=T*P,e[1]=(v*p*o-d*m*o-v*s*f+i*m*f+d*s*u-i*p*u)*P,e[2]=(a*m*o-v*c*o+v*s*l-i*m*l-a*s*u+i*c*u)*P,e[3]=(d*c*o-a*p*o-d*s*l+i*p*l+a*s*f-i*c*f)*P,e[4]=M*P,e[5]=(h*m*o-_*p*o+_*s*f-t*m*f-h*s*u+t*p*u)*P,e[6]=(_*c*o-r*m*o-_*s*l+t*m*l+r*s*u-t*c*u)*P,e[7]=(r*p*o-h*c*o+h*s*l-t*p*l-r*s*f+t*c*f)*P,e[8]=x*P,e[9]=(_*d*o-h*v*o-_*i*f+t*v*f+h*i*u-t*d*u)*P,e[10]=(r*v*o-_*a*o+_*i*l-t*v*l-r*i*u+t*a*u)*P,e[11]=(h*a*o-r*d*o-h*i*l+t*d*l+r*i*f-t*a*f)*P,e[12]=D*P,e[13]=(h*v*s-_*d*s+_*i*p-t*v*p-h*i*m+t*d*m)*P,e[14]=(_*a*s-r*v*s-_*i*c+t*v*c+r*i*m-t*a*m)*P,e[15]=(r*d*s-h*a*s+h*i*c-t*d*c-r*i*p+t*a*p)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,r=e.x,a=e.y,c=e.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,r){return this.set(1,i,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,l=o+o,h=r+r,d=a+a,p=o*l,f=o*h,_=o*d,v=r*h,m=r*d,u=a*d,T=c*l,M=c*h,x=c*d,D=i.x,A=i.y,P=i.z;return s[0]=(1-(v+u))*D,s[1]=(f+x)*D,s[2]=(_-M)*D,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(p+u))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(_+M)*P,s[9]=(m-T)*P,s[10]=(1-(p+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=Ss.set(s[0],s[1],s[2]).length();const r=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const l=1/o,h=1/r,d=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),i.x=o,i.y=r,i.z=a,this}makePerspective(e,t,i,s,o,r,a=ci){const c=this.elements,l=2*o/(t-e),h=2*o/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let f,_;if(a===ci)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===sa)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,o,r,a=ci){const c=this.elements,l=1/(t-e),h=1/(i-s),d=1/(r-o),p=(t+e)*l,f=(i+s)*h;let _,v;if(a===ci)_=(r+o)*d,v=-2*d;else if(a===sa)_=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ss=new I,An=new it,np=new I(0,0,0),ip=new I(1,1,1),wi=new I,cr=new I,en=new I,ah=new it,lh=new hs;class Ct{constructor(e=0,t=0,i=0,s=Ct.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ct.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sp=0;const ch=new I,Ts=new hs,ni=new it,hr=new I,Mo=new I,op=new I,rp=new hs,hh=new I(1,0,0),uh=new I(0,1,0),dh=new I(0,0,1),fh={type:"added"},ap={type:"removed"},ws={type:"childadded",child:null},za={type:"childremoved",child:null};class Et extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new I,t=new Ct,i=new hs,s=new I(1,1,1);function o(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Ye}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hr.copy(e):hr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Mo,hr,this.up):ni.lookAt(hr,Mo,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(ni),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ap),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),p=r(e.skeletons),f=r(e.animations),_=r(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Et.DEFAULT_UP=new I(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new I,ii=new I,Ha=new I,si=new I,Es=new I,Cs=new I,ph=new I,Wa=new I,Va=new I,Xa=new I,$a=new ft,Ya=new ft,qa=new ft;class _n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Pn.subVectors(s,t),ii.subVectors(i,t),Ha.subVectors(e,t);const r=Pn.dot(Pn),a=Pn.dot(ii),c=Pn.dot(Ha),l=ii.dot(ii),h=ii.dot(Ha),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,f=(l*c-a*h)*p,_=(r*h-a*c)*p;return o.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,o,r,a,c){return this.getBarycoord(e,t,i,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,si.x),c.addScaledVector(r,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(e,t,i,s,o,r){return $a.setScalar(0),Ya.setScalar(0),qa.setScalar(0),$a.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,i),qa.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector($a,o.x),r.addScaledVector(Ya,o.y),r.addScaledVector(qa,o.z),r}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),ii.subVectors(e,t),Pn.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let r,a;Es.subVectors(s,i),Cs.subVectors(o,i),Wa.subVectors(e,i);const c=Es.dot(Wa),l=Cs.dot(Wa);if(c<=0&&l<=0)return t.copy(i);Va.subVectors(e,s);const h=Es.dot(Va),d=Cs.dot(Va);if(h>=0&&d<=h)return t.copy(s);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(i).addScaledVector(Es,r);Xa.subVectors(e,o);const f=Es.dot(Xa),_=Cs.dot(Xa);if(_>=0&&f<=_)return t.copy(o);const v=f*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(Cs,a);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return ph.subVectors(o,s),a=(d-h)/(d-h+(f-_)),t.copy(s).addScaledVector(ph,a);const u=1/(m+v+p);return r=v*u,a=p*u,t.copy(i).addScaledVector(Es,r).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Za(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=Vf(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,r=2*i-o;this.r=Za(r,o,e+1/3),this.g=Za(r,o,e),this.b=Za(r,o,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=mn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return et.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Nt(Gt.r*255,0,255))*65536+Math.round(Nt(Gt.g*255,0,255))*256+Math.round(Nt(Gt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,o=Gt.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case i:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-i)/d+2;break;case o:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=mn){et.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(ur);const i=Da(Ei.h,ur.h,t),s=Da(Ei.s,ur.s,t),o=Da(Ei.l,ur.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new qe;qe.NAMES=pd;let lp=0;class Yi extends ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ui(),this.name="",this.blending=Zs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=bl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ac extends Yi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new I,dr=new ve;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rc,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$n(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),o=ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class md extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gd extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ht extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cp=0;const dn=new it,Ka=new Et,As=new I,tn=new jo,yo=new jo,Dt=new I;class Tn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?gd:md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ye().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(i,3))}else{for(let i=0,s=t.count;i<s;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(tn.min,yo.min),tn.expandByPoint(Dt),Dt.addVectors(tn.max,yo.max),tn.expandByPoint(Dt)):(tn.expandByPoint(yo.min),tn.expandByPoint(yo.max))}tn.getCenter(i);let s=0;for(let o=0,r=e.count;o<r;o++)Dt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Dt.fromBufferAttribute(a,l),c&&(As.fromBufferAttribute(e,l),Dt.add(As)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new I,c[R]=new I;const l=new I,h=new I,d=new I,p=new ve,f=new ve,_=new ve,v=new I,m=new I;function u(R,S,y){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,y),p.fromBufferAttribute(o,R),f.fromBufferAttribute(o,S),_.fromBufferAttribute(o,y),h.sub(l),d.sub(l),f.sub(p),_.sub(p);const w=1/(f.x*_.y-_.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(w),a[R].add(v),a[S].add(v),a[y].add(v),c[R].add(m),c[S].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,S=T.length;R<S;++R){const y=T[R],w=y.start,N=y.count;for(let F=w,B=w+N;F<B;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new I,x=new I,D=new I,A=new I;function P(R){D.fromBufferAttribute(s,R),A.copy(D);const S=a[R];M.copy(S),M.sub(D.multiplyScalar(D.dot(S))).normalize(),x.crossVectors(A,S);const w=x.dot(c[R])<0?-1:1;r.setXYZW(R,M.x,M.y,M.z,w)}for(let R=0,S=T.length;R<S;++R){const y=T[R],w=y.start,N=y.count;for(let F=w,B=w+N;F<B;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let p=0,f=e.count;p<f;p+=3){const _=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),r.fromBufferAttribute(t,p+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h);let f=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let u=0;u<h;u++)p[_++]=l[f++]}return new kn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=e(p,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const o=e.morphAttributes;for(const l in o){const h=[],d=o[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new it,ji=new Cc,fr=new Sa,gh=new I,pr=new I,mr=new I,gr=new I,ja=new I,_r=new I,_h=new I,vr=new I;class q extends Et{constructor(e=new Tn,t=new Ac){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){_r.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],d=o[c];h!==0&&(ja.fromBufferAttribute(d,e),r?_r.addScaledVector(ja,h):_r.addScaledVector(ja.sub(t),h))}t.add(_r)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(o),ji.copy(e.ray).recast(e.near),!(fr.containsPoint(ji.origin)===!1&&(ji.intersectSphere(fr,gh)===null||ji.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(o).invert(),ji.copy(e.ray).applyMatrix4(mh),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,p=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=r[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,D=M;x<D;x+=3){const A=a.getX(x),P=a.getX(x+1),R=a.getX(x+2);s=xr(this,u,e,i,l,h,d,A,P,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=_,u=v;m<u;m+=3){const T=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=xr(this,r,e,i,l,h,d,T,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=r[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,D=M;x<D;x+=3){const A=x,P=x+1,R=x+2;s=xr(this,u,e,i,l,h,d,A,P,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=_,u=v;m<u;m+=3){const T=m,M=m+1,x=m+2;s=xr(this,r,e,i,l,h,d,T,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function hp(n,e,t,i,s,o,r,a){let c;if(e.side===zt?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,e.side===Gi,a),c===null)return null;vr.copy(a),vr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(vr);return l<t.near||l>t.far?null:{distance:l,point:vr.clone(),object:n}}function xr(n,e,t,i,s,o,r,a,c,l){n.getVertexPosition(a,pr),n.getVertexPosition(c,mr),n.getVertexPosition(l,gr);const h=hp(n,e,t,i,pr,mr,gr,_h);if(h){const d=new I;_n.getBarycoord(_h,pr,mr,gr,d),s&&(h.uv=_n.getInterpolatedAttribute(s,a,c,l,d,new ve)),o&&(h.uv1=_n.getInterpolatedAttribute(o,a,c,l,d,new ve)),r&&(h.normal=_n.getInterpolatedAttribute(r,a,c,l,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new I,materialIndex:0};_n.getNormal(pr,mr,gr,p.normal),h.face=p,h.barycoord=d}return h}class ke extends Tn{constructor(e=1,t=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],d=[];let p=0,f=0;_("z","y","x",-1,-1,i,t,e,r,o,0),_("z","y","x",1,-1,i,t,-e,r,o,1),_("x","z","y",1,1,e,i,t,s,r,2),_("x","z","y",1,-1,e,i,-t,s,r,3),_("x","y","z",1,-1,e,t,i,s,o,4),_("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(d,2));function _(v,m,u,T,M,x,D,A,P,R,S){const y=x/P,w=D/R,N=x/2,F=D/2,B=A/2,U=P+1,k=R+1;let K=0,V=0;const ae=new I;for(let ie=0;ie<k;ie++){const ce=ie*w-F;for(let me=0;me<U;me++){const ge=me*y-N;ae[v]=ge*T,ae[m]=ce*M,ae[u]=B,l.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[u]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(me/P),d.push(1-ie/R),K+=1}}for(let ie=0;ie<R;ie++)for(let ce=0;ce<P;ce++){const me=p+ce+U*ie,ge=p+ce+U*(ie+1),X=p+(ce+1)+U*(ie+1),Q=p+(ce+1)+U*ie;c.push(me,ge,Q),c.push(ge,X,Q),V+=6}a.addGroup(f,V,S),f+=V,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=so(n[t]);for(const s in i)e[s]=i[s]}return e}function up(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _d(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const dp={clone:so,merge:Vt};var fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Yi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vd extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new I,vh=new ve,xh=new ve;class jt extends vd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,vh,xh),t.subVectors(xh,vh)}setViewOffset(e,t,i,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Rs=1;class mp extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(Ps,Rs,e,t);s.layers=this.layers,this.add(s);const o=new jt(Ps,Rs,e,t);o.layers=this.layers,this.add(o);const r=new jt(Ps,Rs,e,t);r.layers=this.layers,this.add(r);const a=new jt(Ps,Rs,e,t);a.layers=this.layers,this.add(a);const c=new jt(Ps,Rs,e,t);c.layers=this.layers,this.add(c);const l=new jt(Ps,Rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,r,a,c]=t;for(const l of t)this.remove(l);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xd extends $t{constructor(e,t,i,s,o,r,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gp extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),o=new Gn({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Oi});o.uniforms.tEquirect.value=t;const r=new q(s,o),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=Bt),new mp(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(o)}}const Ja=new I,_p=new I,vp=new Ye;class Ii{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ja.subVectors(i,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vp.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Sa,Mr=new I;class Pc{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,o=new Ii,r=new Ii){this.planes=[e,t,i,s,o,r]}set(e,t,i,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],_=s[9],v=s[10],m=s[11],u=s[12],T=s[13],M=s[14],x=s[15];if(i[0].setComponents(c-o,p-l,m-f,x-u).normalize(),i[1].setComponents(c+o,p+l,m+f,x+u).normalize(),i[2].setComponents(c+r,p+h,m+_,x+T).normalize(),i[3].setComponents(c-r,p-h,m-_,x-T).normalize(),i[4].setComponents(c-a,p-d,m-v,x-M).normalize(),t===ci)i[5].setComponents(c+a,p+d,m+v,x+M).normalize();else if(t===sa)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Md(){let n=null,e=!1,t=null,i=null;function s(o,r){t(o,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function xp(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<d.length;f++){const _=d[p],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,_=d.length;f<_;f++){const v=d[f];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Yn extends Tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=e/a,p=t/c,f=[],_=[],v=[],m=[];for(let u=0;u<h;u++){const T=u*p-r;for(let M=0;M<l;M++){const x=M*d-o;_.push(x,-T,0),v.push(0,0,1),m.push(M/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<a;T++){const M=T+l*u,x=T+l*(u+1),D=T+1+l*(u+1),A=T+1+l*u;f.push(M,x,A),f.push(x,D,A)}this.setIndex(f),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
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
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wp=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
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
#endif`,vm=`struct PhysicalMaterial {
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
}`,xm=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s0=`float getShadowMask() {
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
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define LAMBERT
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
}`,B0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,G0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,X0=`#define TOON
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
}`,$0=`#define TOON
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
}`,Y0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,K0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Mp,alphahash_pars_fragment:yp,alphamap_fragment:bp,alphamap_pars_fragment:Sp,alphatest_fragment:Tp,alphatest_pars_fragment:wp,aomap_fragment:Ep,aomap_pars_fragment:Cp,batching_pars_vertex:Ap,batching_vertex:Pp,begin_vertex:Rp,beginnormal_vertex:Lp,bsdfs:Dp,iridescence_fragment:Ip,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:Op,color_fragment:kp,color_pars_fragment:Gp,color_pars_vertex:zp,color_vertex:Hp,common:Wp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:$p,displacementmap_vertex:Yp,emissivemap_fragment:qp,emissivemap_pars_fragment:Zp,colorspace_fragment:Kp,colorspace_pars_fragment:jp,envmap_fragment:Jp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:em,envmap_pars_vertex:tm,envmap_physical_pars_fragment:dm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:om,fog_pars_fragment:rm,gradientmap_pars_fragment:am,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:fm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:_m,lights_physical_pars_fragment:vm,lights_fragment_begin:xm,lights_fragment_maps:Mm,lights_fragment_end:ym,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:wm,map_fragment:Em,map_pars_fragment:Cm,map_particle_fragment:Am,map_particle_pars_fragment:Pm,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Dm,morphcolor_vertex:Im,morphnormal_vertex:Fm,morphtarget_pars_vertex:Um,morphtarget_vertex:Nm,normal_fragment_begin:Bm,normal_fragment_maps:Om,normal_pars_fragment:km,normal_pars_vertex:Gm,normal_vertex:zm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:$m,opaque_fragment:Ym,packing:qm,premultiplied_alpha_fragment:Zm,project_vertex:Km,dithering_fragment:jm,dithering_pars_fragment:Jm,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:n0,shadowmap_vertex:i0,shadowmask_pars_fragment:s0,skinbase_vertex:o0,skinning_pars_vertex:r0,skinning_vertex:a0,skinnormal_vertex:l0,specularmap_fragment:c0,specularmap_pars_fragment:h0,tonemapping_fragment:u0,tonemapping_pars_fragment:d0,transmission_fragment:f0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:_0,worldpos_vertex:v0,background_vert:x0,background_frag:M0,backgroundCube_vert:y0,backgroundCube_frag:b0,cube_vert:S0,cube_frag:T0,depth_vert:w0,depth_frag:E0,distanceRGBA_vert:C0,distanceRGBA_frag:A0,equirect_vert:P0,equirect_frag:R0,linedashed_vert:L0,linedashed_frag:D0,meshbasic_vert:I0,meshbasic_frag:F0,meshlambert_vert:U0,meshlambert_frag:N0,meshmatcap_vert:B0,meshmatcap_frag:O0,meshnormal_vert:k0,meshnormal_frag:G0,meshphong_vert:z0,meshphong_frag:H0,meshphysical_vert:W0,meshphysical_frag:V0,meshtoon_vert:X0,meshtoon_frag:$0,points_vert:Y0,points_frag:q0,shadow_vert:Z0,shadow_frag:K0,sprite_vert:j0,sprite_frag:J0},we={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Xn={basic:{uniforms:Vt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vt([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vt([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vt([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Vt([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Vt([we.lights,we.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Xn.physical={uniforms:Vt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const yr={r:0,b:0,g:0},Qi=new Ct,Q0=new it;function eg(n,e,t,i,s,o,r){const a=new qe(0);let c=o===!0?0:1,l,h,d=null,p=0,f=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function v(T){let M=!1;const x=_(T);x===null?u(a,c):x&&x.isColor&&(u(x,1),M=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const x=_(M);x&&(x.isCubeTexture||x.mapping===ya)?(h===void 0&&(h=new q(new ke(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:so(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qi.copy(M.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(Qi)),h.material.toneMapped=et.getTransfer(x.colorSpace)!==ht,(d!==x||p!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,p=x.version,f=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new q(new Yn(2,2),new Gn({name:"BackgroundMaterial",uniforms:so(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,p=x.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,M){T.getRGB(yr,_d(n)),i.buffers.color.setClear(yr.r,yr.g,yr.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),c=M,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(a,c)},render:v,addToRenderList:m}}function tg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let o=s,r=!1;function a(y,w,N,F,B){let U=!1;const k=d(F,N,w);o!==k&&(o=k,l(o.object)),U=f(y,F,N,B),U&&_(y,F,N,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,x(y,w,N,F),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,w,N){const F=N.wireframe===!0;let B=i[y.id];B===void 0&&(B={},i[y.id]=B);let U=B[w.id];U===void 0&&(U={},B[w.id]=U);let k=U[F];return k===void 0&&(k=p(c()),U[F]=k),k}function p(y){const w=[],N=[],F=[];for(let B=0;B<t;B++)w[B]=0,N[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,w,N,F){const B=o.attributes,U=w.attributes;let k=0;const K=N.getAttributes();for(const V in K)if(K[V].location>=0){const ie=B[V];let ce=U[V];if(ce===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ie===void 0||ie.attribute!==ce||ce&&ie.data!==ce.data)return!0;k++}return o.attributesNum!==k||o.index!==F}function _(y,w,N,F){const B={},U=w.attributes;let k=0;const K=N.getAttributes();for(const V in K)if(K[V].location>=0){let ie=U[V];ie===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor));const ce={};ce.attribute=ie,ie&&ie.data&&(ce.data=ie.data),B[V]=ce,k++}o.attributes=B,o.attributesNum=k,o.index=F}function v(){const y=o.newAttributes;for(let w=0,N=y.length;w<N;w++)y[w]=0}function m(y){u(y,0)}function u(y,w){const N=o.newAttributes,F=o.enabledAttributes,B=o.attributeDivisors;N[y]=1,F[y]===0&&(n.enableVertexAttribArray(y),F[y]=1),B[y]!==w&&(n.vertexAttribDivisor(y,w),B[y]=w)}function T(){const y=o.newAttributes,w=o.enabledAttributes;for(let N=0,F=w.length;N<F;N++)w[N]!==y[N]&&(n.disableVertexAttribArray(N),w[N]=0)}function M(y,w,N,F,B,U,k){k===!0?n.vertexAttribIPointer(y,w,N,B,U):n.vertexAttribPointer(y,w,N,F,B,U)}function x(y,w,N,F){v();const B=F.attributes,U=N.getAttributes(),k=w.defaultAttributeValues;for(const K in U){const V=U[K];if(V.location>=0){let ae=B[K];if(ae===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const ie=ae.normalized,ce=ae.itemSize,me=e.get(ae);if(me===void 0)continue;const ge=me.buffer,X=me.type,Q=me.bytesPerElement,Me=X===n.INT||X===n.UNSIGNED_INT||ae.gpuType===yc;if(ae.isInterleavedBufferAttribute){const O=ae.data,Z=O.stride,he=ae.offset;if(O.isInstancedInterleavedBuffer){for(let ue=0;ue<V.locationSize;ue++)u(V.location+ue,O.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ue=0;ue<V.locationSize;ue++)m(V.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ue=0;ue<V.locationSize;ue++)M(V.location+ue,ce/V.locationSize,X,ie,Z*Q,(he+ce/V.locationSize*ue)*Q,Me)}else{if(ae.isInstancedBufferAttribute){for(let O=0;O<V.locationSize;O++)u(V.location+O,ae.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let O=0;O<V.locationSize;O++)m(V.location+O);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let O=0;O<V.locationSize;O++)M(V.location+O,ce/V.locationSize,X,ie,ce*Q,ce/V.locationSize*O*Q,Me)}}else if(k!==void 0){const ie=k[K];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(V.location,ie);break;case 3:n.vertexAttrib3fv(V.location,ie);break;case 4:n.vertexAttrib4fv(V.location,ie);break;default:n.vertexAttrib1fv(V.location,ie)}}}}T()}function D(){R();for(const y in i){const w=i[y];for(const N in w){const F=w[N];for(const B in F)h(F[B].object),delete F[B];delete w[N]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const N in w){const F=w[N];for(const B in F)h(F[B].object),delete F[B];delete w[N]}delete i[y.id]}function P(y){for(const w in i){const N=i[w];if(N[y.id]===void 0)continue;const F=N[y.id];for(const B in F)h(F[B].object),delete F[B];delete N[y.id]}}function R(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function ng(n,e,t){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function r(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];t.update(f,i,1)}function c(l,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)r(l[_],h[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*p[v];t.update(_,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ig(n,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(P){return!(P!==Nn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const R=P===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==mi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==li&&!R)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function sg(n){const e=this;let t=null,i=0,s=!1,o=!1;const r=new Ii,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||s;return s=p,i=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||_===null||_.length===0||o&&!m)o?h(null):l();else{const T=o?0:i,M=T*4;let x=u.clippingState||null;c.value=x,x=h(_,p,M,f);for(let D=0;D!==M;++D)x[D]=t[D];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,f,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const u=f+v*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,x=f;M!==v;++M,x+=4)r.copy(d[M]).applyMatrix4(T,a),r.normal.toArray(m,x),m[x+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function og(n){let e=new WeakMap;function t(r,a){return a===Rl?r.mapping=eo:a===Ll&&(r.mapping=to),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Rl||a===Ll)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new gp(c.height);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class yd extends vd{constructor(e=-1,t=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,r=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,Mh=[.125,.215,.35,.446,.526,.582],ss=20,Qa=new yd,yh=new qe;let el=null,tl=0,nl=0,il=!1;const ns=(1+Math.sqrt(5))/2,Ls=1/ns,bh=[new I(-ns,Ls,0),new I(ns,Ls,0),new I(-Ls,0,ns),new I(Ls,0,ns),new I(0,ns,-Ls),new I(0,ns,Ls),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),this._renderer.xr.enabled=il,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ko,format:Nn,colorSpace:fo,depthBuffer:!1},s=Sh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(o)),this._blurMaterial=ag(o,e,t)}return s}_compileMaterial(e){const t=new q(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,i,s){const a=new jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(yh),h.toneMapping=ki,h.autoClear=!1;const f=new Ac({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new q(new ke,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(yh),v=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):T===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const M=this._cubeSize;br(s,T*M,u>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===eo||e.mapping===to;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new q(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;br(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,Qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=bh[(s-o-1)%bh.length];this._blur(e,o-1,o,r,a)}t.autoClear=i}_blur(e,t,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",o),this._halfBlur(r,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new q(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ss-1),v=o/_,m=isFinite(o)?1+Math.floor(h*v):ss;m>ss&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const u=[];let T=0;for(let P=0;P<ss;++P){const R=P/v,S=Math.exp(-R*R/2);u.push(S),P===0?T+=S:P<m&&(T+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-i;const x=this._sizeLods[s],D=3*x*(s>M-Hs?s-M+Hs:0),A=4*(this._cubeSize-x);br(t,D,A,3*x,2*x),c.setRenderTarget(t),c.render(d,Qa)}}function rg(n){const e=[],t=[],i=[];let s=n;const o=n-Hs+1+Mh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>n-Hs?c=Mh[r-n+Hs-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,v=3,m=2,u=1,T=new Float32Array(v*_*f),M=new Float32Array(m*_*f),x=new Float32Array(u*_*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,R=A>2?0:-1,S=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];T.set(S,v*_*A),M.set(p,m*_*A);const y=[A,A,A,A,A,A];x.set(y,u*_*A)}const D=new Tn;D.setAttribute("position",new kn(T,v)),D.setAttribute("uv",new kn(M,m)),D.setAttribute("faceIndex",new kn(x,u)),e.push(D),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sh(n,e,t){const i=new cs(n,e,t);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function br(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ag(n,e,t){const i=new Float32Array(ss),s=new I(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Th(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function wh(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Rc(){return`

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
	`}function lg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Rl||c===Ll,h=c===eo||c===to;if(l||h){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new ac(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ac(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function cg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Po("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function hg(n,e,t,i){const s={},o=new WeakMap;function r(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const v=p.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}p.removeEventListener("dispose",r),delete s[p.id];const f=o.get(p);f&&(e.remove(f),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const v=f[_];for(let m=0,u=v.length;m<u;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,_=d.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let M=0,x=T.length;M<x;M+=3){const D=T[M+0],A=T[M+1],P=T[M+2];p.push(D,A,A,P,P,D)}}else if(_!==void 0){const T=_.array;v=_.version;for(let M=0,x=T.length/3-1;M<x;M+=3){const D=M+0,A=M+1,P=M+2;p.push(D,A,A,P,P,D)}}else return;const m=new(hd(p)?gd:md)(p,1);m.version=v;const u=o.get(d);u&&e.remove(u),o.set(d,m)}function h(d){const p=o.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function ug(n,e,t){let i;function s(p){i=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function c(p,f){n.drawElements(i,f,o,p*r),t.update(f,i,1)}function l(p,f,_){_!==0&&(n.drawElementsInstanced(i,f,o,p*r,_),t.update(f,i,_))}function h(p,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,p,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];t.update(m,i,1)}function d(p,f,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/r,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,p,0,v,0,_);let u=0;for(let T=0;T<_;T++)u+=f[T]*v[T];t.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function dg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fg(n,e,t){const i=new WeakMap,s=new ft;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let D=a.attributes.position.count*x,A=1;D>e.maxTextureSize&&(A=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const P=new Float32Array(D*A*4*d),R=new dd(P,D,A,d);R.type=li,R.needsUpdate=!0;const S=x*4;for(let w=0;w<d;w++){const N=u[w],F=T[w],B=M[w],U=D*A*4*w;for(let k=0;k<N.count;k++){const K=k*S;_===!0&&(s.fromBufferAttribute(N,k),P[U+K+0]=s.x,P[U+K+1]=s.y,P[U+K+2]=s.z,P[U+K+3]=0),v===!0&&(s.fromBufferAttribute(F,k),P[U+K+4]=s.x,P[U+K+5]=s.y,P[U+K+6]=s.z,P[U+K+7]=0),m===!0&&(s.fromBufferAttribute(B,k),P[U+K+8]=s.x,P[U+K+9]=s.y,P[U+K+10]=s.z,P[U+K+11]=B.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new ve(D,A)},i.set(a,p),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function pg(n,e,t,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class bd extends $t{constructor(e,t,i,s,o,r,a,c,l,h=Ks){if(h!==Ks&&h!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ks&&(i=ls),i===void 0&&h===io&&(i=no),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:On,this.minFilter=c!==void 0?c:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sd=new $t,Eh=new bd(1,1),Td=new dd,wd=new ep,Ed=new xd,Ch=[],Ah=[],Ph=new Float32Array(16),Rh=new Float32Array(9),Lh=new Float32Array(4);function po(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=Ch[s];if(o===void 0&&(o=new Float32Array(s),Ch[s]=o),e!==0){i.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(o,a)}return o}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ta(n,e){let t=Ah[e];t===void 0&&(t=new Int32Array(e),Ah[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Rt(t,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Lt(t,i)}}function Mg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Rt(t,i))return;Rh.set(i),n.uniformMatrix3fv(this.addr,!1,Rh),Lt(t,i)}}function yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Rt(t,i))return;Ph.set(i),n.uniformMatrix4fv(this.addr,!1,Ph),Lt(t,i)}}function bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Rg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Eh.compareFunction=cd,o=Eh):o=Sd,t.setTexture2D(e||o,s)}function Lg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wd,s)}function Dg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ed,s)}function Ig(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Td,s)}function Fg(n){switch(n){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return Mg;case 35676:return yg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return Tg;case 35669:case 35673:return wg;case 5125:return Eg;case 36294:return Cg;case 36295:return Ag;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Ug(n,e){n.uniform1fv(this.addr,e)}function Ng(n,e){const t=po(e,this.size,2);n.uniform2fv(this.addr,t)}function Bg(n,e){const t=po(e,this.size,3);n.uniform3fv(this.addr,t)}function Og(n,e){const t=po(e,this.size,4);n.uniform4fv(this.addr,t)}function kg(n,e){const t=po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gg(n,e){const t=po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zg(n,e){const t=po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hg(n,e){n.uniform1iv(this.addr,e)}function Wg(n,e){n.uniform2iv(this.addr,e)}function Vg(n,e){n.uniform3iv(this.addr,e)}function Xg(n,e){n.uniform4iv(this.addr,e)}function $g(n,e){n.uniform1uiv(this.addr,e)}function Yg(n,e){n.uniform2uiv(this.addr,e)}function qg(n,e){n.uniform3uiv(this.addr,e)}function Zg(n,e){n.uniform4uiv(this.addr,e)}function Kg(n,e,t){const i=this.cache,s=e.length,o=Ta(t,s);Rt(i,o)||(n.uniform1iv(this.addr,o),Lt(i,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Sd,o[r])}function jg(n,e,t){const i=this.cache,s=e.length,o=Ta(t,s);Rt(i,o)||(n.uniform1iv(this.addr,o),Lt(i,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||wd,o[r])}function Jg(n,e,t){const i=this.cache,s=e.length,o=Ta(t,s);Rt(i,o)||(n.uniform1iv(this.addr,o),Lt(i,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Ed,o[r])}function Qg(n,e,t){const i=this.cache,s=e.length,o=Ta(t,s);Rt(i,o)||(n.uniform1iv(this.addr,o),Lt(i,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Td,o[r])}function e_(n){switch(n){case 5126:return Ug;case 35664:return Ng;case 35665:return Bg;case 35666:return Og;case 35674:return kg;case 35675:return Gg;case 35676:return zg;case 5124:case 35670:return Hg;case 35667:case 35671:return Wg;case 35668:case 35672:return Vg;case 35669:case 35673:return Xg;case 5125:return $g;case 36294:return Yg;case 36295:return qg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Qg}}class t_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fg(t.type)}}class n_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e_(t.type)}}class i_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],i)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Dh(n,e){n.seq.push(e),n.map[e.id]=e}function s_(n,e,t){const i=n.name,s=i.length;for(sl.lastIndex=0;;){const o=sl.exec(i),r=sl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Dh(t,l===void 0?new t_(a,n,e):new n_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new i_(a),Dh(t,d)),t=d}}}class Jr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);s_(o,r,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Ih(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const o_=37297;let r_=0;function a_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}const Fh=new Ye;function l_(n){et._getMatrix(Fh,et.workingColorSpace,n);const e=`mat3( ${Fh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case ba:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+a_(n.getShaderSource(e),r)}else return s}function c_(n,e){const t=l_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function h_(n,e){let t;switch(e){case Cf:t="Linear";break;case Af:t="Reinhard";break;case Pf:t="Cineon";break;case Ku:t="ACESFilmic";break;case Lf:t="AgX";break;case Df:t="Neutral";break;case Rf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sr=new I;function u_(){et.getLuminanceCoefficients(Sr);const n=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function f_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function Ro(n){return n!==""}function Nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(m_,__)}const g_=new Map;function __(n,e){let t=Ke[e];if(t===void 0){const i=g_.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(v_,x_)}function x_(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function kh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function M_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function y_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function S_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zu:e="ENVMAP_BLENDING_MULTIPLY";break;case wf:e="ENVMAP_BLENDING_MIX";break;case Ef:e="ENVMAP_BLENDING_ADD";break}return e}function T_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function w_(n,e,t,i){const s=n.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=M_(t),l=y_(t),h=b_(t),d=S_(t),p=T_(t),f=d_(t),_=f_(o),v=s.createProgram();let m,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ro).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ro).join(`
`),u.length>0&&(u+=`
`)):(m=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),u=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ki?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,c_("linearToOutputTexel",t.outputColorSpace),u_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),r=lc(r),r=Nh(r,t),r=Bh(r,t),a=lc(a),a=Nh(a,t),a=Bh(a,t),r=Oh(r),a=Oh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=T+m+r,x=T+u+a,D=Ih(s,s.VERTEX_SHADER,M),A=Ih(s,s.FRAGMENT_SHADER,x);s.attachShader(v,D),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(w){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(D).trim(),B=s.getShaderInfoLog(A).trim();let U=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,A);else{const K=Uh(s,D,"vertex"),V=Uh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+K+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||B==="")&&(k=!1);k&&(w.diagnostics={runnable:U,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:u}})}s.deleteShader(D),s.deleteShader(A),R=new Jr(s,v),S=p_(s,v)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,o_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}let E_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new A_(e),t.set(e,i)),i}}class A_{constructor(e){this.id=E_++,this.code=e,this.usedTimes=0}}function P_(n,e,t,i,s,o,r){const a=new fd,c=new C_,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,w,N,F){const B=N.fog,U=F.geometry,k=S.isMeshStandardMaterial?N.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),V=K&&K.mapping===ya?K.image.height:null,ae=_[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ie=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ce=ie!==void 0?ie.length:0;let me=0;U.morphAttributes.position!==void 0&&(me=1),U.morphAttributes.normal!==void 0&&(me=2),U.morphAttributes.color!==void 0&&(me=3);let ge,X,Q,Me;if(ae){const rt=Xn[ae];ge=rt.vertexShader,X=rt.fragmentShader}else ge=S.vertexShader,X=S.fragmentShader,c.update(S),Q=c.getVertexShaderID(S),Me=c.getFragmentShaderID(S);const O=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),he=F.isInstancedMesh===!0,ue=F.isBatchedMesh===!0,xe=!!S.map,ee=!!S.matcap,re=!!K,L=!!S.aoMap,Y=!!S.lightMap,$=!!S.bumpMap,de=!!S.normalMap,se=!!S.displacementMap,Se=!!S.emissiveMap,_e=!!S.metalnessMap,C=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,ne=S.dispersion>0,le=S.iridescence>0,te=S.sheen>0,Ee=S.transmission>0,be=b&&!!S.anisotropyMap,Te=z&&!!S.clearcoatMap,Ne=z&&!!S.clearcoatNormalMap,fe=z&&!!S.clearcoatRoughnessMap,Ce=le&&!!S.iridescenceMap,Oe=le&&!!S.iridescenceThicknessMap,Ge=te&&!!S.sheenColorMap,De=te&&!!S.sheenRoughnessMap,je=!!S.specularMap,Ze=!!S.specularColorMap,pt=!!S.specularIntensityMap,G=Ee&&!!S.transmissionMap,Ae=Ee&&!!S.thicknessMap,oe=!!S.gradientMap,pe=!!S.alphaMap,Le=S.alphaTest>0,Pe=!!S.alphaHash,Ve=!!S.extensions;let yt=ki;S.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Ot={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:ge,fragmentShader:X,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ue,batchingColor:ue&&F._colorsTexture!==null,instancing:he,instancingColor:he&&F.instanceColor!==null,instancingMorph:he&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:fo,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:ee,envMap:re,envMapMode:re&&K.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Y,bumpMap:$,normalMap:de,displacementMap:p&&se,emissiveMap:Se,normalMapObjectSpace:de&&S.normalMapType===Nf,normalMapTangentSpace:de&&S.normalMapType===ld,metalnessMap:_e,roughnessMap:C,anisotropy:b,anisotropyMap:be,clearcoat:z,clearcoatMap:Te,clearcoatNormalMap:Ne,clearcoatRoughnessMap:fe,dispersion:ne,iridescence:le,iridescenceMap:Ce,iridescenceThicknessMap:Oe,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:De,specularMap:je,specularColorMap:Ze,specularIntensityMap:pt,transmission:Ee,transmissionMap:G,thicknessMap:Ae,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Zs&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Pe,combine:S.combine,mapUv:xe&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:Y&&v(S.lightMap.channel),bumpMapUv:$&&v(S.bumpMap.channel),normalMapUv:de&&v(S.normalMap.channel),displacementMapUv:se&&v(S.displacementMap.channel),emissiveMapUv:Se&&v(S.emissiveMap.channel),metalnessMapUv:_e&&v(S.metalnessMap.channel),roughnessMapUv:C&&v(S.roughnessMap.channel),anisotropyMapUv:be&&v(S.anisotropyMap.channel),clearcoatMapUv:Te&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(S.sheenRoughnessMap.channel),specularMapUv:je&&v(S.specularMap.channel),specularColorMapUv:Ze&&v(S.specularColorMap.channel),specularIntensityMapUv:pt&&v(S.specularIntensityMap.channel),transmissionMapUv:G&&v(S.transmissionMap.channel),thicknessMapUv:Ae&&v(S.thicknessMap.channel),alphaMapUv:pe&&v(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(de||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(xe||pe),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Z,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:me,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:Se&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ut,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)y.push(w),y.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(T(y,S),M(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const y=_[S.type];let w;if(y){const N=Xn[y];w=dp.clone(N.uniforms)}else w=S.uniforms;return w}function D(S,y){let w;for(let N=0,F=h.length;N<F;N++){const B=h[N];if(B.cacheKey===y){w=B,++w.usedTimes;break}}return w===void 0&&(w=new w_(n,y,S,o),h.push(w)),w}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function P(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:R}}function R_(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function L_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zh(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function r(d,p,f,_,v,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function a(d,p,f,_,v,m){const u=r(d,p,f,_,v,m);f.transmission>0?i.push(u):f.transparent===!0?s.push(u):t.push(u)}function c(d,p,f,_,v,m){const u=r(d,p,f,_,v,m);f.transmission>0?i.unshift(u):f.transparent===!0?s.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||L_),i.length>1&&i.sort(p||Gh),s.length>1&&s.sort(p||Gh)}function h(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function D_(){let n=new WeakMap;function e(i,s){const o=n.get(i);let r;return o===void 0?(r=new zh,n.set(i,[r])):s>=o.length?(r=new zh,o.push(r)):r=o[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function I_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new qe};break;case"SpotLight":t={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function F_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let U_=0;function N_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B_(n){const e=new I_,t=F_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,o=new it,r=new it;function a(l){let h=0,d=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,_=0,v=0,m=0,u=0,T=0,M=0,x=0,D=0,A=0,P=0;l.sort(N_);for(let S=0,y=l.length;S<y;S++){const w=l[S],N=w.color,F=w.intensity,B=w.distance,U=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=N.r*F,d+=N.g*F,p+=N.b*F;else if(w.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(w.sh.coefficients[k],F);P++}else if(w.isDirectionalLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=w.shadow.matrix,T++}i.directional[f]=k,f++}else if(w.isSpotLight){const k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(N).multiplyScalar(F),k.distance=B,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,i.spot[v]=k;const K=w.shadow;if(w.map&&(i.spotLightMap[D]=w.map,D++,K.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[v]=K.matrix,w.castShadow){const V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=U,x++}v++}else if(w.isRectAreaLight){const k=e.get(w);k.color.copy(N).multiplyScalar(F),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=k,m++}else if(w.isPointLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const K=w.shadow,V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=w.shadow.matrix,M++}i.point[_]=k,_++}else if(w.isHemisphereLight){const k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(F),k.groundColor.copy(w.groundColor).multiplyScalar(F),i.hemi[u]=k,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==T||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==D||R.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,R.directionalLength=f,R.pointLength=_,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=T,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=D,R.numLightProbes=P,i.version=U_++)}function c(l,h){let d=0,p=0,f=0,_=0,v=0;const m=h.matrixWorldInverse;for(let u=0,T=l.length;u<T;u++){const M=l[u];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Hh(n){const e=new B_(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function o(h){t.push(h)}function r(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function O_(n){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new Hh(n),e.set(s,[a])):o>=r.length?(a=new Hh(n),r.push(a)):a=r[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class k_ extends Yi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G_ extends Yi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
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
}`;function W_(n,e,t){let i=new Pc;const s=new ve,o=new ve,r=new ft,a=new k_({depthPacking:Uf}),c=new G_,l={},h=t.maxTextureSize,d={[Gi]:zt,[zt]:Gi,[Ut]:Ut},p=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:z_,fragmentShader:H_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new q(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let u=this.type;this.render=function(A,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Oi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=u!==oi&&this.type===oi,B=u===oi&&this.type!==oi;for(let U=0,k=A.length;U<k;U++){const K=A[U],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ae=V.getFrameExtents();if(s.multiply(ae),o.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/ae.x),s.x=o.x*ae.x,V.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/ae.y),s.y=o.y*ae.y,V.mapSize.y=o.y)),V.map===null||F===!0||B===!0){const ce=this.type!==oi?{minFilter:On,magFilter:On}:{};V.map!==null&&V.map.dispose(),V.map=new cs(s.x,s.y,ce),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ie=V.getViewportCount();for(let ce=0;ce<ie;ce++){const me=V.getViewport(ce);r.set(o.x*me.x,o.y*me.y,o.x*me.z,o.y*me.w),N.viewport(r),V.updateMatrices(K,ce),i=V.getFrustum(),x(P,R,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===oi&&T(V,R),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,w)};function T(A,P){const R=e.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cs(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,R,p,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,R,f,v,null)}function M(A,P,R,S){let y=null;const w=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)y=w;else if(y=R.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const N=y.uuid,F=P.uuid;let B=l[N];B===void 0&&(B={},l[N]=B);let U=B[F];U===void 0&&(U=y.clone(),B[F]=U,P.addEventListener("dispose",D)),y=U}if(y.visible=P.visible,y.wireframe=P.wireframe,S===oi?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:d[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=R}return y}function x(A,P,R,S,y){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===oi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=e.update(A),B=A.material;if(Array.isArray(B)){const U=F.groups;for(let k=0,K=U.length;k<K;k++){const V=U[k],ae=B[V.materialIndex];if(ae&&ae.visible){const ie=M(A,ae,S,y);A.onBeforeShadow(n,A,P,R,F,ie,V),n.renderBufferDirect(R,null,F,ie,A,V),A.onAfterShadow(n,A,P,R,F,ie,V)}}}else if(B.visible){const U=M(A,B,S,y);A.onBeforeShadow(n,A,P,R,F,U,null),n.renderBufferDirect(R,null,F,U,A,null),A.onAfterShadow(n,A,P,R,F,U,null)}}const N=A.children;for(let F=0,B=N.length;F<B;F++)x(N[F],P,R,S,y)}function D(A){A.target.removeEventListener("dispose",D);for(const R in l){const S=l[R],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const V_={[Sl]:Tl,[wl]:Al,[El]:Pl,[Qs]:Cl,[Tl]:Sl,[Al]:wl,[Pl]:El,[Cl]:Qs};function X_(n,e){function t(){let G=!1;const Ae=new ft;let oe=null;const pe=new ft(0,0,0,0);return{setMask:function(Le){oe!==Le&&!G&&(n.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,Ve,yt,Ot){Ot===!0&&(Le*=yt,Pe*=yt,Ve*=yt),Ae.set(Le,Pe,Ve,yt),pe.equals(Ae)===!1&&(n.clearColor(Le,Pe,Ve,yt),pe.copy(Ae))},reset:function(){G=!1,oe=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,Ae=!1,oe=null,pe=null,Le=null;return{setReversed:function(Pe){if(Ae!==Pe){const Ve=e.get("EXT_clip_control");Ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const yt=Le;Le=null,this.setClear(yt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?O(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!G&&(n.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(Ae&&(Pe=V_[Pe]),pe!==Pe){switch(Pe){case Sl:n.depthFunc(n.NEVER);break;case Tl:n.depthFunc(n.ALWAYS);break;case wl:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case El:n.depthFunc(n.EQUAL);break;case Cl:n.depthFunc(n.GEQUAL);break;case Al:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(Ae&&(Pe=1-Pe),n.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,oe=null,pe=null,Le=null,Ae=!1}}}function s(){let G=!1,Ae=null,oe=null,pe=null,Le=null,Pe=null,Ve=null,yt=null,Ot=null;return{setTest:function(rt){G||(rt?O(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(rt){Ae!==rt&&!G&&(n.stencilMask(rt),Ae=rt)},setFunc:function(rt,wn,Jn){(oe!==rt||pe!==wn||Le!==Jn)&&(n.stencilFunc(rt,wn,Jn),oe=rt,pe=wn,Le=Jn)},setOp:function(rt,wn,Jn){(Pe!==rt||Ve!==wn||yt!==Jn)&&(n.stencilOp(rt,wn,Jn),Pe=rt,Ve=wn,yt=Jn)},setLocked:function(rt){G=rt},setClear:function(rt){Ot!==rt&&(n.clearStencil(rt),Ot=rt)},reset:function(){G=!1,Ae=null,oe=null,pe=null,Le=null,Pe=null,Ve=null,yt=null,Ot=null}}}const o=new t,r=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,f=[],_=null,v=!1,m=null,u=null,T=null,M=null,x=null,D=null,A=null,P=new qe(0,0,0),R=0,S=!1,y=null,w=null,N=null,F=null,B=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=K>=2);let ae=null,ie={};const ce=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),ge=new ft().fromArray(ce),X=new ft().fromArray(me);function Q(G,Ae,oe,pe){const Le=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(G,Pe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<oe;Ve++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Ae+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Pe}const Me={};Me[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),O(n.DEPTH_TEST),r.setFunc(Qs),$(!1),de(Zc),O(n.CULL_FACE),L(Oi);function O(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function Z(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function he(G,Ae){return d[G]!==Ae?(n.bindFramebuffer(G,Ae),d[G]=Ae,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ae),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ue(G,Ae){let oe=f,pe=!1;if(G){oe=p.get(Ae),oe===void 0&&(oe=[],p.set(Ae,oe));const Le=G.textures;if(oe.length!==Le.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,Ve=Le.length;Pe<Ve;Pe++)oe[Pe]=n.COLOR_ATTACHMENT0+Pe;oe.length=Le.length,pe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,pe=!0);pe&&n.drawBuffers(oe)}function xe(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const ee={[is]:n.FUNC_ADD,[lf]:n.FUNC_SUBTRACT,[cf]:n.FUNC_REVERSE_SUBTRACT};ee[hf]=n.MIN,ee[uf]=n.MAX;const re={[df]:n.ZERO,[ff]:n.ONE,[pf]:n.SRC_COLOR,[yl]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[vf]:n.DST_COLOR,[gf]:n.DST_ALPHA,[mf]:n.ONE_MINUS_SRC_COLOR,[bl]:n.ONE_MINUS_SRC_ALPHA,[xf]:n.ONE_MINUS_DST_COLOR,[_f]:n.ONE_MINUS_DST_ALPHA,[yf]:n.CONSTANT_COLOR,[bf]:n.ONE_MINUS_CONSTANT_COLOR,[Sf]:n.CONSTANT_ALPHA,[Tf]:n.ONE_MINUS_CONSTANT_ALPHA};function L(G,Ae,oe,pe,Le,Pe,Ve,yt,Ot,rt){if(G===Oi){v===!0&&(Z(n.BLEND),v=!1);return}if(v===!1&&(O(n.BLEND),v=!0),G!==af){if(G!==m||rt!==S){if((u!==is||x!==is)&&(n.blendEquation(n.FUNC_ADD),u=is,x=is),rt)switch(G){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}T=null,M=null,D=null,A=null,P.set(0,0,0),R=0,m=G,S=rt}return}Le=Le||Ae,Pe=Pe||oe,Ve=Ve||pe,(Ae!==u||Le!==x)&&(n.blendEquationSeparate(ee[Ae],ee[Le]),u=Ae,x=Le),(oe!==T||pe!==M||Pe!==D||Ve!==A)&&(n.blendFuncSeparate(re[oe],re[pe],re[Pe],re[Ve]),T=oe,M=pe,D=Pe,A=Ve),(yt.equals(P)===!1||Ot!==R)&&(n.blendColor(yt.r,yt.g,yt.b,Ot),P.copy(yt),R=Ot),m=G,S=!1}function Y(G,Ae){G.side===Ut?Z(n.CULL_FACE):O(n.CULL_FACE);let oe=G.side===zt;Ae&&(oe=!oe),$(oe),G.blending===Zs&&G.transparent===!1?L(Oi):L(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),o.setMask(G.colorWrite);const pe=G.stencilWrite;a.setTest(pe),pe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Se(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(G){y!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),y=G)}function de(G){G!==of?(O(n.CULL_FACE),G!==w&&(G===Zc?n.cullFace(n.BACK):G===rf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),w=G}function se(G){G!==N&&(k&&n.lineWidth(G),N=G)}function Se(G,Ae,oe){G?(O(n.POLYGON_OFFSET_FILL),(F!==Ae||B!==oe)&&(n.polygonOffset(Ae,oe),F=Ae,B=oe)):Z(n.POLYGON_OFFSET_FILL)}function _e(G){G?O(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function C(G){G===void 0&&(G=n.TEXTURE0+U-1),ae!==G&&(n.activeTexture(G),ae=G)}function b(G,Ae,oe){oe===void 0&&(ae===null?oe=n.TEXTURE0+U-1:oe=ae);let pe=ie[oe];pe===void 0&&(pe={type:void 0,texture:void 0},ie[oe]=pe),(pe.type!==G||pe.texture!==Ae)&&(ae!==oe&&(n.activeTexture(oe),ae=oe),n.bindTexture(G,Ae||Me[G]),pe.type=G,pe.texture=Ae)}function z(){const G=ie[ae];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(G){ge.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ge.copy(G))}function De(G){X.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),X.copy(G))}function je(G,Ae){let oe=l.get(Ae);oe===void 0&&(oe=new WeakMap,l.set(Ae,oe));let pe=oe.get(G);pe===void 0&&(pe=n.getUniformBlockIndex(Ae,G.name),oe.set(G,pe))}function Ze(G,Ae){const pe=l.get(Ae).get(G);c.get(Ae)!==pe&&(n.uniformBlockBinding(Ae,pe,G.__bindingPointIndex),c.set(Ae,pe))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,ie={},d={},p=new WeakMap,f=[],_=null,v=!1,m=null,u=null,T=null,M=null,x=null,D=null,A=null,P=new qe(0,0,0),R=0,S=!1,y=null,w=null,N=null,F=null,B=null,ge.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:O,disable:Z,bindFramebuffer:he,drawBuffers:ue,useProgram:xe,setBlending:L,setMaterial:Y,setFlipSided:$,setCullFace:de,setLineWidth:se,setPolygonOffset:Se,setScissorTest:_e,activeTexture:C,bindTexture:b,unbindTexture:z,compressedTexImage2D:ne,compressedTexImage3D:le,texImage2D:Ce,texImage3D:Oe,updateUBOMapping:je,uniformBlockBinding:Ze,texStorage2D:Ne,texStorage3D:fe,texSubImage2D:te,texSubImage3D:Ee,compressedTexSubImage2D:be,compressedTexSubImage3D:Te,scissor:Ge,viewport:De,reset:pt}}function Wh(n,e,t,i){const s=$_(i);switch(t){case td:return n*e;case id:return n*e;case sd:return n*e*2;case od:return n*e/s.components*s.byteLength;case Tc:return n*e/s.components*s.byteLength;case rd:return n*e*2/s.components*s.byteLength;case wc:return n*e*2/s.components*s.byteLength;case nd:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case Ec:return n*e*4/s.components*s.byteLength;case $r:case Yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qr:case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Bl:return Math.max(n,16)*Math.max(e,8)/4;case Fl:case Nl:return Math.max(n,8)*Math.max(e,8)/2;case Ol:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kr:case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ad:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sc:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $_(n){switch(n){case mi:case Ju:return{byteLength:1,components:1};case Ho:case Qu:case Ko:return{byteLength:2,components:1};case bc:case Sc:return{byteLength:2,components:4};case ls:case yc:case li:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Y_(n,e,t,i,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return f?new OffscreenCanvas(C,b):ra("canvas")}function v(C,b,z){let ne=1;const le=_e(C);if((le.width>z||le.height>z)&&(ne=z/Math.max(le.width,le.height)),ne<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const te=Math.floor(ne*le.width),Ee=Math.floor(ne*le.height);d===void 0&&(d=_(te,Ee));const be=b?_(te,Ee):d;return be.width=te,be.height=Ee,be.getContext("2d").drawImage(C,0,0,te,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+te+"x"+Ee+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,b,z,ne,le=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=b;if(b===n.RED&&(z===n.FLOAT&&(te=n.R32F),z===n.HALF_FLOAT&&(te=n.R16F),z===n.UNSIGNED_BYTE&&(te=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(te=n.R8UI),z===n.UNSIGNED_SHORT&&(te=n.R16UI),z===n.UNSIGNED_INT&&(te=n.R32UI),z===n.BYTE&&(te=n.R8I),z===n.SHORT&&(te=n.R16I),z===n.INT&&(te=n.R32I)),b===n.RG&&(z===n.FLOAT&&(te=n.RG32F),z===n.HALF_FLOAT&&(te=n.RG16F),z===n.UNSIGNED_BYTE&&(te=n.RG8)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(te=n.RG8UI),z===n.UNSIGNED_SHORT&&(te=n.RG16UI),z===n.UNSIGNED_INT&&(te=n.RG32UI),z===n.BYTE&&(te=n.RG8I),z===n.SHORT&&(te=n.RG16I),z===n.INT&&(te=n.RG32I)),b===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(te=n.RGB8UI),z===n.UNSIGNED_SHORT&&(te=n.RGB16UI),z===n.UNSIGNED_INT&&(te=n.RGB32UI),z===n.BYTE&&(te=n.RGB8I),z===n.SHORT&&(te=n.RGB16I),z===n.INT&&(te=n.RGB32I)),b===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),z===n.UNSIGNED_INT&&(te=n.RGBA32UI),z===n.BYTE&&(te=n.RGBA8I),z===n.SHORT&&(te=n.RGBA16I),z===n.INT&&(te=n.RGBA32I)),b===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),b===n.RGBA){const Ee=le?ba:et.getTransfer(ne);z===n.FLOAT&&(te=n.RGBA32F),z===n.HALF_FLOAT&&(te=n.RGBA16F),z===n.UNSIGNED_BYTE&&(te=Ee===ht?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(C,b){let z;return C?b===null||b===ls||b===no?z=n.DEPTH24_STENCIL8:b===li?z=n.DEPTH32F_STENCIL8:b===Ho&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ls||b===no?z=n.DEPTH_COMPONENT24:b===li?z=n.DEPTH_COMPONENT32F:b===Ho&&(z=n.DEPTH_COMPONENT16),z}function D(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==On&&C.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){const b=C.target;b.removeEventListener("dispose",A),R(b),b.isVideoTexture&&h.delete(b)}function P(C){const b=C.target;b.removeEventListener("dispose",P),y(b)}function R(C){const b=i.get(C);if(b.__webglInit===void 0)return;const z=C.source,ne=p.get(z);if(ne){const le=ne[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(C),Object.keys(ne).length===0&&p.delete(z)}i.remove(C)}function S(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const z=C.source,ne=p.get(z);delete ne[b.__cacheKey],r.memory.textures--}function y(C){const b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let le=0;le<b.__webglFramebuffer[ne].length;le++)n.deleteFramebuffer(b.__webglFramebuffer[ne][le]);else n.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[ne]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=C.textures;for(let ne=0,le=z.length;ne<le;ne++){const te=i.get(z[ne]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),r.memory.textures--),i.remove(z[ne])}i.remove(C)}let w=0;function N(){w=0}function F(){const C=w;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),w+=1,C}function B(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function U(C,b){const z=i.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,C,b);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function k(C,b){const z=i.get(C);if(C.version>0&&z.__version!==C.version){X(z,C,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function K(C,b){const z=i.get(C);if(C.version>0&&z.__version!==C.version){X(z,C,b);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function V(C,b){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Q(z,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}const ae={[Dl]:n.REPEAT,[an]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},ie={[On]:n.NEAREST,[If]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[rs]:n.LINEAR_MIPMAP_LINEAR},ce={[Bf]:n.NEVER,[Wf]:n.ALWAYS,[Of]:n.LESS,[cd]:n.LEQUAL,[kf]:n.EQUAL,[Hf]:n.GEQUAL,[Gf]:n.GREATER,[zf]:n.NOTEQUAL};function me(C,b){if(b.type===li&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===La||b.magFilter===ir||b.magFilter===rs||b.minFilter===Bt||b.minFilter===La||b.minFilter===ir||b.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ae[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ae[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ae[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ie[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===On||b.minFilter!==ir&&b.minFilter!==rs||b.type===li&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ge(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));const ne=b.source;let le=p.get(ne);le===void 0&&(le={},p.set(ne,le));const te=B(b);if(te!==C.__cacheKey){le[te]===void 0&&(le[te]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,z=!0),le[te].usedTimes++;const Ee=le[C.__cacheKey];Ee!==void 0&&(le[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(b)),C.__cacheKey=te,C.__webglTexture=le[te].texture}return z}function X(C,b,z){let ne=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=n.TEXTURE_3D);const le=ge(C,b),te=b.source;t.bindTexture(ne,C.__webglTexture,n.TEXTURE0+z);const Ee=i.get(te);if(te.version!==Ee.__version||le===!0){t.activeTexture(n.TEXTURE0+z);const be=et.getPrimaries(et.workingColorSpace),Te=b.colorSpace===Ui?null:et.getPrimaries(b.colorSpace),Ne=b.colorSpace===Ui||be===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let fe=v(b.image,!1,s.maxTextureSize);fe=Se(b,fe);const Ce=o.convert(b.format,b.colorSpace),Oe=o.convert(b.type);let Ge=M(b.internalFormat,Ce,Oe,b.colorSpace,b.isVideoTexture);me(ne,b);let De;const je=b.mipmaps,Ze=b.isVideoTexture!==!0,pt=Ee.__version===void 0||le===!0,G=te.dataReady,Ae=D(b,fe);if(b.isDepthTexture)Ge=x(b.format===io,b.type),pt&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,Ge,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ge,fe.width,fe.height,0,Ce,Oe,null));else if(b.isDataTexture)if(je.length>0){Ze&&pt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ge,je[0].width,je[0].height);for(let oe=0,pe=je.length;oe<pe;oe++)De=je[oe],Ze?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,De.width,De.height,Ce,Oe,De.data):t.texImage2D(n.TEXTURE_2D,oe,Ge,De.width,De.height,0,Ce,Oe,De.data);b.generateMipmaps=!1}else Ze?(pt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ge,fe.width,fe.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Ce,Oe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,fe.width,fe.height,0,Ce,Oe,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ge,je[0].width,je[0].height,fe.depth);for(let oe=0,pe=je.length;oe<pe;oe++)if(De=je[oe],b.format!==Nn)if(Ce!==null)if(Ze){if(G)if(b.layerUpdates.size>0){const Le=Wh(De.width,De.height,b.format,b.type);for(const Pe of b.layerUpdates){const Ve=De.data.subarray(Pe*Le/De.data.BYTES_PER_ELEMENT,(Pe+1)*Le/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Pe,De.width,De.height,1,Ce,Ve)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,De.width,De.height,fe.depth,Ce,De.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ge,De.width,De.height,fe.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,De.width,De.height,fe.depth,Ce,Oe,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ge,De.width,De.height,fe.depth,0,Ce,Oe,De.data)}else{Ze&&pt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ge,je[0].width,je[0].height);for(let oe=0,pe=je.length;oe<pe;oe++)De=je[oe],b.format!==Nn?Ce!==null?Ze?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,De.width,De.height,Ce,De.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ge,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,De.width,De.height,Ce,Oe,De.data):t.texImage2D(n.TEXTURE_2D,oe,Ge,De.width,De.height,0,Ce,Oe,De.data)}else if(b.isDataArrayTexture)if(Ze){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ge,fe.width,fe.height,fe.depth),G)if(b.layerUpdates.size>0){const oe=Wh(fe.width,fe.height,b.format,b.type);for(const pe of b.layerUpdates){const Le=fe.data.subarray(pe*oe/fe.data.BYTES_PER_ELEMENT,(pe+1)*oe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,fe.width,fe.height,1,Ce,Oe,Le)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ce,Oe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,fe.width,fe.height,fe.depth,0,Ce,Oe,fe.data);else if(b.isData3DTexture)Ze?(pt&&t.texStorage3D(n.TEXTURE_3D,Ae,Ge,fe.width,fe.height,fe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ce,Oe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,fe.width,fe.height,fe.depth,0,Ce,Oe,fe.data);else if(b.isFramebufferTexture){if(pt)if(Ze)t.texStorage2D(n.TEXTURE_2D,Ae,Ge,fe.width,fe.height);else{let oe=fe.width,pe=fe.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(n.TEXTURE_2D,Le,Ge,oe,pe,0,Ce,Oe,null),oe>>=1,pe>>=1}}else if(je.length>0){if(Ze&&pt){const oe=_e(je[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Ge,oe.width,oe.height)}for(let oe=0,pe=je.length;oe<pe;oe++)De=je[oe],Ze?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ce,Oe,De):t.texImage2D(n.TEXTURE_2D,oe,Ge,Ce,Oe,De);b.generateMipmaps=!1}else if(Ze){if(pt){const oe=_e(fe);t.texStorage2D(n.TEXTURE_2D,Ae,Ge,oe.width,oe.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Oe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ge,Ce,Oe,fe);m(b)&&u(ne),Ee.__version=te.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Q(C,b,z){if(b.image.length!==6)return;const ne=ge(C,b),le=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const te=i.get(le);if(le.version!==te.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const Ee=et.getPrimaries(et.workingColorSpace),be=b.colorSpace===Ui?null:et.getPrimaries(b.colorSpace),Te=b.colorSpace===Ui||Ee===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,fe=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let pe=0;pe<6;pe++)!Ne&&!fe?Ce[pe]=v(b.image[pe],!0,s.maxCubemapSize):Ce[pe]=fe?b.image[pe].image:b.image[pe],Ce[pe]=Se(b,Ce[pe]);const Oe=Ce[0],Ge=o.convert(b.format,b.colorSpace),De=o.convert(b.type),je=M(b.internalFormat,Ge,De,b.colorSpace),Ze=b.isVideoTexture!==!0,pt=te.__version===void 0||ne===!0,G=le.dataReady;let Ae=D(b,Oe);me(n.TEXTURE_CUBE_MAP,b);let oe;if(Ne){Ze&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,je,Oe.width,Oe.height);for(let pe=0;pe<6;pe++){oe=Ce[pe].mipmaps;for(let Le=0;Le<oe.length;Le++){const Pe=oe[Le];b.format!==Nn?Ge!==null?Ze?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Ge,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Ge,De,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,je,Pe.width,Pe.height,0,Ge,De,Pe.data)}}}else{if(oe=b.mipmaps,Ze&&pt){oe.length>0&&Ae++;const pe=_e(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,je,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(fe){Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ce[pe].width,Ce[pe].height,Ge,De,Ce[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Ce[pe].width,Ce[pe].height,0,Ge,De,Ce[pe].data);for(let Le=0;Le<oe.length;Le++){const Ve=oe[Le].image[pe].image;Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Ve.width,Ve.height,Ge,De,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,je,Ve.width,Ve.height,0,Ge,De,Ve.data)}}else{Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ge,De,Ce[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Ge,De,Ce[pe]);for(let Le=0;Le<oe.length;Le++){const Pe=oe[Le];Ze?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Ge,De,Pe.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,je,Ge,De,Pe.image[pe])}}}m(b)&&u(n.TEXTURE_CUBE_MAP),te.__version=le.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Me(C,b,z,ne,le,te){const Ee=o.convert(z.format,z.colorSpace),be=o.convert(z.type),Te=M(z.internalFormat,Ee,be,z.colorSpace),Ne=i.get(b),fe=i.get(z);if(fe.__renderTarget=b,!Ne.__hasExternalTextures){const Ce=Math.max(1,b.width>>te),Oe=Math.max(1,b.height>>te);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,te,Te,Ce,Oe,b.depth,0,Ee,be,null):t.texImage2D(le,te,Te,Ce,Oe,0,Ee,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),de(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,le,fe.__webglTexture,0,$(b)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,le,fe.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(C,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){const ne=b.depthTexture,le=ne&&ne.isDepthTexture?ne.type:null,te=x(b.stencilBuffer,le),Ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=$(b);de(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,te,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,te,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,te,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,C)}else{const ne=b.textures;for(let le=0;le<ne.length;le++){const te=ne[le],Ee=o.convert(te.format,te.colorSpace),be=o.convert(te.type),Te=M(te.internalFormat,Ee,be,te.colorSpace),Ne=$(b);z&&de(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Te,b.width,b.height):de(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Te,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Te,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(b.depthTexture);ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const le=ne.__webglTexture,te=$(b);if(b.depthTexture.format===Ks)de(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(b.depthTexture.format===io)de(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function he(C){const b=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const ne=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){const le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",le)};ne.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=ne}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Z(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=n.createRenderbuffer(),O(b.__webglDepthbuffer[ne],C,!1);else{const le=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,te)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),O(b.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(C,b,z){const ne=i.get(C);b!==void 0&&Me(ne.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&he(C)}function xe(C){const b=C.texture,z=i.get(C),ne=i.get(b);C.addEventListener("dispose",P);const le=C.textures,te=C.isWebGLCubeRenderTarget===!0,Ee=le.length>1;if(Ee||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=b.version,r.memory.textures++),te){z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[be]=[];for(let Te=0;Te<b.mipmaps.length;Te++)z.__webglFramebuffer[be][Te]=n.createFramebuffer()}else z.__webglFramebuffer[be]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let be=0;be<b.mipmaps.length;be++)z.__webglFramebuffer[be]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let be=0,Te=le.length;be<Te;be++){const Ne=i.get(le[be]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),r.memory.textures++)}if(C.samples>0&&de(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let be=0;be<le.length;be++){const Te=le[be];z.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[be]);const Ne=o.convert(Te.format,Te.colorSpace),fe=o.convert(Te.type),Ce=M(Te.internalFormat,Ne,fe,Te.colorSpace,C.isXRRenderTarget===!0),Oe=$(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ce,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,z.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),O(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),me(n.TEXTURE_CUBE_MAP,b);for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)Me(z.__webglFramebuffer[be][Te],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Te);else Me(z.__webglFramebuffer[be],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(b)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let be=0,Te=le.length;be<Te;be++){const Ne=le[be],fe=i.get(Ne);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),me(n.TEXTURE_2D,Ne),Me(z.__webglFramebuffer,C,Ne,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),m(Ne)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ne.__webglTexture),me(be,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)Me(z.__webglFramebuffer[Te],C,b,n.COLOR_ATTACHMENT0,be,Te);else Me(z.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,be,0);m(b)&&u(be),t.unbindTexture()}C.depthBuffer&&he(C)}function ee(C){const b=C.textures;for(let z=0,ne=b.length;z<ne;z++){const le=b[z];if(m(le)){const te=T(C),Ee=i.get(le).__webglTexture;t.bindTexture(te,Ee),u(te),t.unbindTexture()}}}const re=[],L=[];function Y(C){if(C.samples>0){if(de(C)===!1){const b=C.textures,z=C.width,ne=C.height;let le=n.COLOR_BUFFER_BIT;const te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(C),be=b.length>1;if(be)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const Ne=i.get(b[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,le,n.NEAREST),c===!0&&(re.length=0,L.length=0,re.push(n.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(re.push(te),L.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const Ne=i.get(b[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function $(C){return Math.min(s.maxSamples,C.samples)}function de(C){const b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(C){const b=r.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Se(C,b){const z=C.colorSpace,ne=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==fo&&z!==Ui&&(et.getTransfer(z)===ht?(ne!==Nn||le!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=U,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=ue,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=de}function q_(n,e){function t(i,s=Ui){let o;const r=et.getTransfer(s);if(i===mi)return n.UNSIGNED_BYTE;if(i===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return n.BYTE;if(i===Qu)return n.SHORT;if(i===Ho)return n.UNSIGNED_SHORT;if(i===yc)return n.INT;if(i===ls)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Ko)return n.HALF_FLOAT;if(i===td)return n.ALPHA;if(i===nd)return n.RGB;if(i===Nn)return n.RGBA;if(i===id)return n.LUMINANCE;if(i===sd)return n.LUMINANCE_ALPHA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===io)return n.DEPTH_STENCIL;if(i===od)return n.RED;if(i===Tc)return n.RED_INTEGER;if(i===rd)return n.RG;if(i===wc)return n.RG_INTEGER;if(i===Ec)return n.RGBA_INTEGER;if(i===$r||i===Yr||i===qr||i===Zr)if(r===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===$r)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===$r)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Ul||i===Nl||i===Bl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Fl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ol||i===kl||i===Gl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ol||i===kl)return r===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Gl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zl||i===Hl||i===Wl||i===Vl||i===Xl||i===$l||i===Yl||i===ql||i===Zl||i===Kl||i===jl||i===Jl||i===Ql||i===ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===zl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jl)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kr||i===tc||i===nc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Kr)return r===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===ic||i===sc||i===oc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Kr)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===no?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Z_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&p>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`;class Q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new $t,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:j_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new Yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e1 extends ms{constructor(e,t){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,_=null;const v=new Q_,m=t.getContextAttributes();let u=null,T=null;const M=[],x=[],D=new ve;let A=null;const P=new jt;P.viewport=new ft;const R=new jt;R.viewport=new ft;const S=[P,R],y=new Z_;let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new ol,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new ol,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new ol,M[X]=Q),Q.getHandSpace()};function F(X){const Q=x.indexOf(X.inputSource);if(Q===-1)return;const Me=M[Q];Me!==void 0&&(Me.update(X.inputSource,X.frame,l||r),Me.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",U);for(let X=0;X<M.length;X++){const Q=x[X];Q!==null&&(x[X]=null,M[X].disconnect(Q))}w=null,N=null,v.reset(),e.setRenderTarget(u),f=null,p=null,d=null,s=null,T=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new cs(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,Me=null,O=null;m.depth&&(O=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?io:Ks,Me=m.stencil?no:ls);const Z={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:o};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(Z),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new cs(p.textureWidth,p.textureHeight,{format:Nn,type:mi,depthTexture:new bd(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function U(X){for(let Q=0;Q<X.removed.length;Q++){const Me=X.removed[Q],O=x.indexOf(Me);O>=0&&(x[O]=null,M[O].disconnect(Me))}for(let Q=0;Q<X.added.length;Q++){const Me=X.added[Q];let O=x.indexOf(Me);if(O===-1){for(let he=0;he<M.length;he++)if(he>=x.length){x.push(Me),O=he;break}else if(x[he]===null){x[he]=Me,O=he;break}if(O===-1)break}const Z=M[O];Z&&Z.connect(Me)}}const k=new I,K=new I;function V(X,Q,Me){k.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(Me.matrixWorld);const O=k.distanceTo(K),Z=Q.projectionMatrix.elements,he=Me.projectionMatrix.elements,ue=Z[14]/(Z[10]-1),xe=Z[14]/(Z[10]+1),ee=(Z[9]+1)/Z[5],re=(Z[9]-1)/Z[5],L=(Z[8]-1)/Z[0],Y=(he[8]+1)/he[0],$=ue*L,de=ue*Y,se=O/(-L+Y),Se=se*-L;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Se),X.translateZ(se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Z[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const _e=ue+se,C=xe+se,b=$-Se,z=de+(O-Se),ne=ee*xe/C*_e,le=re*xe/C*_e;X.projectionMatrix.makePerspective(b,z,ne,le,_e,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,Me=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),y.near=R.near=P.near=Q,y.far=R.far=P.far=Me,(w!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,N=y.far),P.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,y.layers.mask=P.layers.mask|R.layers.mask;const O=X.parent,Z=y.cameras;ae(y,O);for(let he=0;he<Z.length;he++)ae(Z[he],O);Z.length===2?V(y,P,R):y.projectionMatrix.copy(P.projectionMatrix),ie(X,y,O)};function ie(X,Q,Me){Me===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=oa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ce=null;function me(X,Q){if(h=Q.getViewerPose(l||r),_=Q,h!==null){const Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let O=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,O=!0);for(let he=0;he<Me.length;he++){const ue=Me[he];let xe=null;if(f!==null)xe=f.getViewport(ue);else{const re=d.getViewSubImage(p,ue);xe=re.viewport,he===0&&(e.setRenderTargetTextures(T,re.colorTexture,p.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(T))}let ee=S[he];ee===void 0&&(ee=new jt,ee.layers.enable(he),ee.viewport=new ft,S[he]=ee),ee.matrix.fromArray(ue.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(xe.x,xe.y,xe.width,xe.height),he===0&&(y.matrix.copy(ee.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),O===!0&&y.cameras.push(ee)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const he=d.getDepthInformation(Me[0]);he&&he.isValid&&he.texture&&v.init(e,he,s.renderState)}}for(let Me=0;Me<M.length;Me++){const O=x[Me],Z=M[Me];O!==null&&Z!==void 0&&Z.update(O,Q,l||r)}ce&&ce(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ge=new Md;ge.setAnimationLoop(me),this.setAnimationLoop=function(X){ce=X},this.dispose=function(){}}}const es=new Ct,t1=new it;function n1(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,_d(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,T,M,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),d(m,u)):u.isMeshPhongMaterial?(o(m,u),h(m,u)):u.isMeshStandardMaterial?(o(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,x)):u.isMeshMatcapMaterial?(o(m,u),_(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),v(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,T,M):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===zt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===zt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const T=e.get(u),M=T.envMap,x=T.envMapRotation;M&&(m.envMap.value=M,es.copy(x),es.x*=-1,es.y*=-1,es.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(t1.makeRotationFromEuler(es)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,T,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=M*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===zt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const T=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function i1(n,e,t,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,M){const x=M.program;i.uniformBlockBinding(T,x)}function l(T,M){let x=s[T.id];x===void 0&&(_(T),x=h(T),s[T.id]=x,T.addEventListener("dispose",m));const D=M.program;i.updateUBOMapping(T,D);const A=e.render.frame;o[T.id]!==A&&(p(T),o[T.id]=A)}function h(T){const M=d();T.__bindingPointIndex=M;const x=n.createBuffer(),D=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function d(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const M=s[T.id],x=T.uniforms,D=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,P=x.length;A<P;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,y=R.length;S<y;S++){const w=R[S];if(f(w,A,S,D)===!0){const N=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let U=0;U<F.length;U++){const k=F[U],K=v(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+B,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,M,x,D){const A=T.value,P=M+"_"+x;if(D[P]===void 0)return typeof A=="number"||typeof A=="boolean"?D[P]=A:D[P]=A.clone(),!0;{const R=D[P];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return D[P]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(T){const M=T.uniforms;let x=0;const D=16;for(let P=0,R=M.length;P<R;P++){const S=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,w=S.length;y<w;y++){const N=S[y],F=Array.isArray(N.value)?N.value:[N.value];for(let B=0,U=F.length;B<U;B++){const k=F[B],K=v(k),V=x%D,ae=V%K.boundary,ie=V+ae;x+=ae,ie!==0&&D-ie<K.storage&&(x+=D-ie),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=K.storage}}}const A=x%D;return A>0&&(x+=D-A),T.__size=x,T.__cache={},this}function v(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const x=r.indexOf(M.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function u(){for(const T in s)n.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:c,update:l,dispose:u}}class s1{constructor(e={}){const{canvas:t=$f(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=ki,this.toneMappingExposure=1;const x=this;let D=!1,A=0,P=0,R=null,S=-1,y=null;const w=new ft,N=new ft;let F=null;const B=new qe(0);let U=0,k=t.width,K=t.height,V=1,ae=null,ie=null;const ce=new ft(0,0,k,K),me=new ft(0,0,k,K);let ge=!1;const X=new Pc;let Q=!1,Me=!1;const O=new it,Z=new it,he=new I,ue=new ft,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function re(){return R===null?V:1}let L=i;function Y(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),L===null){const H="webgl2";if(L=Y(H,E),L===null)throw Y(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $,de,se,Se,_e,C,b,z,ne,le,te,Ee,be,Te,Ne,fe,Ce,Oe,Ge,De,je,Ze,pt,G;function Ae(){$=new cg(L),$.init(),Ze=new q_(L,$),de=new ig(L,$,e,Ze),se=new X_(L,$),de.reverseDepthBuffer&&p&&se.buffers.depth.setReversed(!0),Se=new dg(L),_e=new R_,C=new Y_(L,$,se,_e,de,Ze,Se),b=new og(x),z=new lg(x),ne=new xp(L),pt=new tg(L,ne),le=new hg(L,ne,Se,pt),te=new pg(L,le,ne,Se),Ge=new fg(L,de,C),fe=new sg(_e),Ee=new P_(x,b,z,$,de,pt,fe),be=new n1(x,_e),Te=new D_,Ne=new O_($),Oe=new eg(x,b,z,se,te,f,c),Ce=new W_(x,te,de),G=new i1(L,Se,de,se),De=new ng(L,$,Se),je=new ug(L,$,Se),Se.programs=Ee.programs,x.capabilities=de,x.extensions=$,x.properties=_e,x.renderLists=Te,x.shadowMap=Ce,x.state=se,x.info=Se}Ae();const oe=new e1(x,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=$.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(k,K,!1))},this.getSize=function(E){return E.set(k,K)},this.setSize=function(E,H,j=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,K=H,t.width=Math.floor(E*V),t.height=Math.floor(H*V),j===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(k*V,K*V).floor()},this.setDrawingBufferSize=function(E,H,j){k=E,K=H,V=j,t.width=Math.floor(E*j),t.height=Math.floor(H*j),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(ce)},this.setViewport=function(E,H,j,J){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,H,j,J),se.viewport(w.copy(ce).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,H,j,J){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,H,j,J),se.scissor(N.copy(me).multiplyScalar(V).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){se.setScissorTest(ge=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,H=!0,j=!0){let J=0;if(E){let W=!1;if(R!==null){const ye=R.texture.format;W=ye===Ec||ye===wc||ye===Tc}if(W){const ye=R.texture.type,Re=ye===mi||ye===ls||ye===Ho||ye===no||ye===bc||ye===Sc,Ie=Oe.getClearColor(),Fe=Oe.getClearAlpha(),ze=Ie.r,Xe=Ie.g,Ue=Ie.b;Re?(_[0]=ze,_[1]=Xe,_[2]=Ue,_[3]=Fe,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=ze,v[1]=Xe,v[2]=Ue,v[3]=Fe,L.clearBufferiv(L.COLOR,0,v))}else J|=L.COLOR_BUFFER_BIT}H&&(J|=L.DEPTH_BUFFER_BIT),j&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Te.dispose(),Ne.dispose(),_e.dispose(),b.dispose(),z.dispose(),te.dispose(),pt.dispose(),G.dispose(),Ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",zc),oe.removeEventListener("sessionend",Hc),qi.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Se.autoReset,H=Ce.enabled,j=Ce.autoUpdate,J=Ce.needsUpdate,W=Ce.type;Ae(),Se.autoReset=E,Ce.enabled=H,Ce.autoUpdate=j,Ce.needsUpdate=J,Ce.type=W}function Pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ve(E){const H=E.target;H.removeEventListener("dispose",Ve),yt(H)}function yt(E){Ot(E),_e.remove(E)}function Ot(E){const H=_e.get(E).programs;H!==void 0&&(H.forEach(function(j){Ee.releaseProgram(j)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,j,J,W,ye){H===null&&(H=xe);const Re=W.isMesh&&W.matrixWorld.determinant()<0,Ie=tf(E,H,j,J,W);se.setMaterial(J,Re);let Fe=j.index,ze=1;if(J.wireframe===!0){if(Fe=le.getWireframeAttribute(j),Fe===void 0)return;ze=2}const Xe=j.drawRange,Ue=j.attributes.position;let tt=Xe.start*ze,mt=(Xe.start+Xe.count)*ze;ye!==null&&(tt=Math.max(tt,ye.start*ze),mt=Math.min(mt,(ye.start+ye.count)*ze)),Fe!==null?(tt=Math.max(tt,0),mt=Math.min(mt,Fe.count)):Ue!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,Ue.count));const _t=mt-tt;if(_t<0||_t===1/0)return;pt.setup(W,J,Ie,j,Fe);let Yt,st=De;if(Fe!==null&&(Yt=ne.get(Fe),st=je,st.setIndex(Yt)),W.isMesh)J.wireframe===!0?(se.setLineWidth(J.wireframeLinewidth*re()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(W.isLine){let Be=J.linewidth;Be===void 0&&(Be=1),se.setLineWidth(Be*re()),W.isLineSegments?st.setMode(L.LINES):W.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else W.isPoints?st.setMode(L.POINTS):W.isSprite&&st.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)st.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if($.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Be=W._multiDrawStarts,Qn=W._multiDrawCounts,ot=W._multiDrawCount,En=Fe?ne.get(Fe).bytesPerElement:1,_s=_e.get(J).currentProgram.getUniforms();for(let Qt=0;Qt<ot;Qt++)_s.setValue(L,"_gl_DrawID",Qt),st.render(Be[Qt]/En,Qn[Qt])}else if(W.isInstancedMesh)st.renderInstances(tt,_t,W.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Qn=Math.min(j.instanceCount,Be);st.renderInstances(tt,_t,Qn)}else st.render(tt,_t)};function rt(E,H,j){E.transparent===!0&&E.side===Ut&&E.forceSinglePass===!1?(E.side=zt,E.needsUpdate=!0,nr(E,H,j),E.side=Gi,E.needsUpdate=!0,nr(E,H,j),E.side=Ut):nr(E,H,j)}this.compile=function(E,H,j=null){j===null&&(j=E),u=Ne.get(j),u.init(H),M.push(u),j.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),E!==j&&E.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights();const J=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ye=W.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Ie=ye[Re];rt(Ie,j,W),J.add(Ie)}else rt(ye,j,W),J.add(ye)}),M.pop(),u=null,J},this.compileAsync=function(E,H,j=null){const J=this.compile(E,H,j);return new Promise(W=>{function ye(){if(J.forEach(function(Re){_e.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){W(E);return}setTimeout(ye,10)}$.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let wn=null;function Jn(E){wn&&wn(E)}function zc(){qi.stop()}function Hc(){qi.start()}const qi=new Md;qi.setAnimationLoop(Jn),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(E){wn=E,oe.setAnimationLoop(E),E===null?qi.stop():qi.start()},oe.addEventListener("sessionstart",zc),oe.addEventListener("sessionend",Hc),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,R),u=Ne.get(E,M.length),u.init(H),M.push(u),Z.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(Z),Me=this.localClippingEnabled,Q=fe.init(this.clippingPlanes,Me),m=Te.get(E,T.length),m.init(),T.push(m),oe.enabled===!0&&oe.isPresenting===!0){const ye=x.xr.getDepthSensingMesh();ye!==null&&Ra(ye,H,-1/0,x.sortObjects)}Ra(E,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,ie),ee=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ee&&Oe.addToRenderList(m,E),this.info.render.frame++,Q===!0&&fe.beginShadows();const j=u.state.shadowsArray;Ce.render(j,E,H),Q===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,W=m.transmissive;if(u.setupLights(),H.isArrayCamera){const ye=H.cameras;if(W.length>0)for(let Re=0,Ie=ye.length;Re<Ie;Re++){const Fe=ye[Re];Vc(J,W,E,Fe)}ee&&Oe.render(E);for(let Re=0,Ie=ye.length;Re<Ie;Re++){const Fe=ye[Re];Wc(m,E,Fe,Fe.viewport)}}else W.length>0&&Vc(J,W,E,H),ee&&Oe.render(E),Wc(m,E,H);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,H),pt.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(u=M[M.length-1],Q===!0&&fe.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ra(E,H,j,J){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){J&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const Re=te.update(E),Ie=E.material;Ie.visible&&m.push(E,Re,Ie,j,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const Re=te.update(E),Ie=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ue.copy(Re.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(Ie)){const Fe=Re.groups;for(let ze=0,Xe=Fe.length;ze<Xe;ze++){const Ue=Fe[ze],tt=Ie[Ue.materialIndex];tt&&tt.visible&&m.push(E,Re,tt,j,ue.z,Ue)}}else Ie.visible&&m.push(E,Re,Ie,j,ue.z,null)}}const ye=E.children;for(let Re=0,Ie=ye.length;Re<Ie;Re++)Ra(ye[Re],H,j,J)}function Wc(E,H,j,J){const W=E.opaque,ye=E.transmissive,Re=E.transparent;u.setupLightsView(j),Q===!0&&fe.setGlobalState(x.clippingPlanes,j),J&&se.viewport(w.copy(J)),W.length>0&&tr(W,H,j),ye.length>0&&tr(ye,H,j),Re.length>0&&tr(Re,H,j),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Vc(E,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[J.id]===void 0&&(u.state.transmissionRenderTarget[J.id]=new cs(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Ko:mi,minFilter:rs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ye=u.state.transmissionRenderTarget[J.id],Re=J.viewport||w;ye.setSize(Re.z,Re.w);const Ie=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(B),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),ee&&Oe.render(j);const Fe=x.toneMapping;x.toneMapping=ki;const ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),u.setupLightsView(J),Q===!0&&fe.setGlobalState(x.clippingPlanes,J),tr(E,j,J),C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye),$.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ue=0,tt=H.length;Ue<tt;Ue++){const mt=H[Ue],_t=mt.object,Yt=mt.geometry,st=mt.material,Be=mt.group;if(st.side===Ut&&_t.layers.test(J.layers)){const Qn=st.side;st.side=zt,st.needsUpdate=!0,Xc(_t,j,J,Yt,st,Be),st.side=Qn,st.needsUpdate=!0,Xe=!0}}Xe===!0&&(C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye))}x.setRenderTarget(Ie),x.setClearColor(B,U),ze!==void 0&&(J.viewport=ze),x.toneMapping=Fe}function tr(E,H,j){const J=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ye=E.length;W<ye;W++){const Re=E[W],Ie=Re.object,Fe=Re.geometry,ze=J===null?Re.material:J,Xe=Re.group;Ie.layers.test(j.layers)&&Xc(Ie,H,j,Fe,ze,Xe)}}function Xc(E,H,j,J,W,ye){E.onBeforeRender(x,H,j,J,W,ye),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(x,H,j,J,E,ye),W.transparent===!0&&W.side===Ut&&W.forceSinglePass===!1?(W.side=zt,W.needsUpdate=!0,x.renderBufferDirect(j,H,J,W,E,ye),W.side=Gi,W.needsUpdate=!0,x.renderBufferDirect(j,H,J,W,E,ye),W.side=Ut):x.renderBufferDirect(j,H,J,W,E,ye),E.onAfterRender(x,H,j,J,W,ye)}function nr(E,H,j){H.isScene!==!0&&(H=xe);const J=_e.get(E),W=u.state.lights,ye=u.state.shadowsArray,Re=W.state.version,Ie=Ee.getParameters(E,W.state,ye,H,j),Fe=Ee.getProgramCacheKey(Ie);let ze=J.programs;J.environment=E.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(E.isMeshStandardMaterial?z:b).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Ve),ze=new Map,J.programs=ze);let Xe=ze.get(Fe);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===Re)return Yc(E,Ie),Xe}else Ie.uniforms=Ee.getUniforms(E),E.onBeforeCompile(Ie,x),Xe=Ee.acquireProgram(Ie,Fe),ze.set(Fe,Xe),J.uniforms=Ie.uniforms;const Ue=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),Yc(E,Ie),J.needsLights=sf(E),J.lightsStateVersion=Re,J.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMap.value=W.state.directionalShadowMap,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotShadowMap.value=W.state.spotShadowMap,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMap.value=W.state.pointShadowMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function $c(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Jr.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Yc(E,H){const j=_e.get(E);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function tf(E,H,j,J,W){H.isScene!==!0&&(H=xe),C.resetTextureUnits();const ye=H.fog,Re=J.isMeshStandardMaterial?H.environment:null,Ie=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fo,Fe=(J.isMeshStandardMaterial?z:b).get(J.envMap||Re),ze=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xe=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ue=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,mt=!!j.morphAttributes.color;let _t=ki;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=Yt!==void 0?Yt.length:0,Be=_e.get(J),Qn=u.state.lights;if(Q===!0&&(Me===!0||E!==y)){const un=E===y&&J.id===S;fe.setState(J,E,un)}let ot=!1;J.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Qn.state.version||Be.outputColorSpace!==Ie||W.isBatchedMesh&&Be.batching===!1||!W.isBatchedMesh&&Be.batching===!0||W.isBatchedMesh&&Be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Be.instancingMorph===!1&&W.morphTexture!==null||Be.envMap!==Fe||J.fog===!0&&Be.fog!==ye||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==fe.numPlanes||Be.numIntersection!==fe.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==Xe||Be.morphTargets!==Ue||Be.morphNormals!==tt||Be.morphColors!==mt||Be.toneMapping!==_t||Be.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Be.__version=J.version);let En=Be.currentProgram;ot===!0&&(En=nr(J,H,W));let _s=!1,Qt=!1,go=!1;const vt=En.getUniforms(),Wn=Be.uniforms;if(se.useProgram(En.program)&&(_s=!0,Qt=!0,go=!0),J.id!==S&&(S=J.id,Qt=!0),_s||y!==E){se.buffers.depth.getReversed()?(O.copy(E.projectionMatrix),qf(O),Zf(O),vt.setValue(L,"projectionMatrix",O)):vt.setValue(L,"projectionMatrix",E.projectionMatrix),vt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Mi=vt.map.cameraPosition;Mi!==void 0&&Mi.setValue(L,he.setFromMatrixPosition(E.matrixWorld)),de.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&vt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Qt=!0,go=!0)}if(W.isSkinnedMesh){vt.setOptional(L,W,"bindMatrix"),vt.setOptional(L,W,"bindMatrixInverse");const un=W.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),vt.setValue(L,"boneTexture",un.boneTexture,C))}W.isBatchedMesh&&(vt.setOptional(L,W,"batchingTexture"),vt.setValue(L,"batchingTexture",W._matricesTexture,C),vt.setOptional(L,W,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",W._indirectTexture,C),vt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",W._colorsTexture,C));const _o=j.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0)&&Ge.update(W,j,En),(Qt||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,vt.setValue(L,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Wn.envMap.value=Fe,Wn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(Wn.envMapIntensity.value=H.environmentIntensity),Qt&&(vt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&nf(Wn,go),ye&&J.fog===!0&&be.refreshFogUniforms(Wn,ye),be.refreshMaterialUniforms(Wn,J,V,K,u.state.transmissionRenderTarget[E.id]),Jr.upload(L,$c(Be),Wn,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Jr.upload(L,$c(Be),Wn,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&vt.setValue(L,"center",W.center),vt.setValue(L,"modelViewMatrix",W.modelViewMatrix),vt.setValue(L,"normalMatrix",W.normalMatrix),vt.setValue(L,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const un=J.uniformsGroups;for(let Mi=0,yi=un.length;Mi<yi;Mi++){const qc=un[Mi];G.update(qc,En),G.bind(qc,En)}}return En}function nf(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function sf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,H,j){_e.get(E.texture).__webglTexture=H,_e.get(E.depthTexture).__webglTexture=j;const J=_e.get(E);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const j=_e.get(E);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,j=0){R=E,A=H,P=j;let J=!0,W=null,ye=!1,Re=!1;if(E){const Fe=_e.get(E);if(Fe.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Fe.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Fe.__hasExternalTextures)C.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(Fe.__boundDepthTexture!==Ue){if(Ue!==null&&_e.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Re=!0);const Xe=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?W=Xe[H][j]:W=Xe[H],ye=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?W=_e.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?W=Xe[j]:W=Xe,w.copy(E.viewport),N.copy(E.scissor),F=E.scissorTest}else w.copy(ce).multiplyScalar(V).floor(),N.copy(me).multiplyScalar(V).floor(),F=ge;if(se.bindFramebuffer(L.FRAMEBUFFER,W)&&J&&se.drawBuffers(E,W),se.viewport(w),se.scissor(N),se.setScissorTest(F),ye){const Fe=_e.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Fe.__webglTexture,j)}else if(Re){const Fe=_e.get(E.texture),ze=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,j||0,ze)}S=-1},this.readRenderTargetPixels=function(E,H,j,J,W,ye,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){se.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Fe=E.texture,ze=Fe.format,Xe=Fe.type;if(!de.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-J&&j>=0&&j<=E.height-W&&L.readPixels(H,j,J,W,Ze.convert(ze),Ze.convert(Xe),ye)}finally{const Fe=R!==null?_e.get(R).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,H,j,J,W,ye,Re){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){const Fe=E.texture,ze=Fe.format,Xe=Fe.type;if(!de.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-J&&j>=0&&j<=E.height-W){se.bindFramebuffer(L.FRAMEBUFFER,Ie);const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),L.readPixels(H,j,J,W,Ze.convert(ze),Ze.convert(Xe),0);const tt=R!==null?_e.get(R).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,tt);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Yf(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.deleteBuffer(Ue),L.deleteSync(mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,j=0){E.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const J=Math.pow(2,-j),W=Math.floor(E.image.width*J),ye=Math.floor(E.image.height*J),Re=H!==null?H.x:0,Ie=H!==null?H.y:0;C.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,Re,Ie,W,ye),se.unbindTexture()},this.copyTextureToTexture=function(E,H,j=null,J=null,W=0){E.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,E=arguments[1],H=arguments[2],W=arguments[3]||0,j=null);let ye,Re,Ie,Fe,ze,Xe,Ue,tt,mt;const _t=E.isCompressedTexture?E.mipmaps[W]:E.image;j!==null?(ye=j.max.x-j.min.x,Re=j.max.y-j.min.y,Ie=j.isBox3?j.max.z-j.min.z:1,Fe=j.min.x,ze=j.min.y,Xe=j.isBox3?j.min.z:0):(ye=_t.width,Re=_t.height,Ie=_t.depth||1,Fe=0,ze=0,Xe=0),J!==null?(Ue=J.x,tt=J.y,mt=J.z):(Ue=0,tt=0,mt=0);const Yt=Ze.convert(H.format),st=Ze.convert(H.type);let Be;H.isData3DTexture?(C.setTexture3D(H,0),Be=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(C.setTexture2DArray(H,0),Be=L.TEXTURE_2D_ARRAY):(C.setTexture2D(H,0),Be=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const Qn=L.getParameter(L.UNPACK_ROW_LENGTH),ot=L.getParameter(L.UNPACK_IMAGE_HEIGHT),En=L.getParameter(L.UNPACK_SKIP_PIXELS),_s=L.getParameter(L.UNPACK_SKIP_ROWS),Qt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe);const go=E.isDataArrayTexture||E.isData3DTexture,vt=H.isDataArrayTexture||H.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Wn=_e.get(E),_o=_e.get(H),un=_e.get(Wn.__renderTarget),Mi=_e.get(_o.__renderTarget);se.bindFramebuffer(L.READ_FRAMEBUFFER,un.__webglFramebuffer),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let yi=0;yi<Ie;yi++)go&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(E).__webglTexture,W,Xe+yi),E.isDepthTexture?(vt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(H).__webglTexture,W,mt+yi),L.blitFramebuffer(Fe,ze,ye,Re,Ue,tt,ye,Re,L.DEPTH_BUFFER_BIT,L.NEAREST)):vt?L.copyTexSubImage3D(Be,W,Ue,tt,mt+yi,Fe,ze,ye,Re):L.copyTexSubImage2D(Be,W,Ue,tt,mt+yi,Fe,ze,ye,Re);se.bindFramebuffer(L.READ_FRAMEBUFFER,null),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Be,W,Ue,tt,mt,ye,Re,Ie,Yt,st,_t.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Be,W,Ue,tt,mt,ye,Re,Ie,Yt,_t.data):L.texSubImage3D(Be,W,Ue,tt,mt,ye,Re,Ie,Yt,st,_t):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,Ue,tt,ye,Re,Yt,st,_t.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,Ue,tt,_t.width,_t.height,Yt,_t.data):L.texSubImage2D(L.TEXTURE_2D,W,Ue,tt,ye,Re,Yt,st,_t);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),L.pixelStorei(L.UNPACK_SKIP_PIXELS,En),L.pixelStorei(L.UNPACK_SKIP_ROWS,_s),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qt),W===0&&H.generateMipmaps&&L.generateMipmap(Be),se.unbindTexture()},this.copyTextureToTexture3D=function(E,H,j=null,J=null,W=0){return E.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,E=arguments[2],H=arguments[3],W=arguments[4]||0),Po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,j,J,W)},this.initRenderTarget=function(E){_e.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){A=0,P=0,R=null,se.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class Cd extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ct,this.environmentIntensity=1,this.environmentRotation=new Ct,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class o1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new I;class aa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=$n(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),o=ut(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ad extends Yi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ds;const bo=new I,Is=new I,Fs=new I,Us=new ve,So=new ve,Pd=new it,Tr=new I,To=new I,wr=new I,Vh=new ve,rl=new ve,Xh=new ve;class r1 extends Et{constructor(e=new Ad){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new o1(t,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new aa(i,3,0,!1)),Ds.setAttribute("uv",new aa(i,2,3,!1))}this.geometry=Ds,this.material=e,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Fs.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;Er(Tr.set(-.5,-.5,0),Fs,r,Is,s,o),Er(To.set(.5,-.5,0),Fs,r,Is,s,o),Er(wr.set(.5,.5,0),Fs,r,Is,s,o),Vh.set(0,0),rl.set(1,0),Xh.set(1,1);let a=e.ray.intersectTriangle(Tr,To,wr,!1,bo);if(a===null&&(Er(To.set(-.5,.5,0),Fs,r,Is,s,o),rl.set(0,1),a=e.ray.intersectTriangle(Tr,wr,To,!1,bo),a===null))return;const c=e.ray.origin.distanceTo(bo);c<e.near||c>e.far||t.push({distance:c,point:bo.clone(),uv:_n.getInterpolation(bo,Tr,To,wr,Vh,rl,Xh,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Er(n,e,t,i,s,o){Us.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(So.x=o*Us.x-s*Us.y,So.y=s*Us.x+o*Us.y):So.copy(Us),n.copy(e),n.x+=So.x,n.y+=So.y,n.applyMatrix4(Pd)}class Lc extends Yi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const la=new I,ca=new I,$h=new it,wo=new Cc,Cr=new Sa,al=new I,Yh=new I;class a1 extends Et{constructor(e=new Tn,t=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)la.fromBufferAttribute(t,s-1),ca.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=la.distanceTo(ca);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=o,e.ray.intersectsSphere(Cr)===!1)return;$h.copy(s).invert(),wo.copy(e.ray).applyMatrix4($h);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let v=f,m=_-1;v<m;v+=l){const u=h.getX(v),T=h.getX(v+1),M=Ar(this,e,wo,c,u,T);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(_-1),m=h.getX(f),u=Ar(this,e,wo,c,v,m);u&&t.push(u)}}else{const f=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let v=f,m=_-1;v<m;v+=l){const u=Ar(this,e,wo,c,v,v+1);u&&t.push(u)}if(this.isLineLoop){const v=Ar(this,e,wo,c,_-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ar(n,e,t,i,s,o){const r=n.geometry.attributes.position;if(la.fromBufferAttribute(r,s),ca.fromBufferAttribute(r,o),t.distanceSqToSegment(la,ca,al,Yh)>i)return;al.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(al);if(!(c<e.near||c>e.far))return{distance:c,point:Yh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const qh=new I,Zh=new I;class l1 extends a1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)qh.fromBufferAttribute(t,s),Zh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qh.distanceTo(Zh);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ha extends $t{constructor(e,t,i,s,o,r,a,c,l){super(e,t,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let r;t?r=t:r=e*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],p=i[s+1]-h,f=(r-h)/p;return(s+f)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=t||(r.isVector2?new ve:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],o=[],r=[],a=new I,c=new it;for(let f=0;f<=e;f++){const _=f/e;s[f]=this.getTangentAt(_,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),p<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Nt(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(t===!0){let f=Math.acos(Nt(o[0].dot(o[e]),-1,1));f/=e,s[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let _=1;_<=e;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dc extends jn{constructor(e=0,t=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ve){const i=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*d+this.aX,l=p*d+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c1 extends Dc{constructor(e,t,i,s,o,r){super(e,t,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let n=0,e=0,t=0,i=0;function s(o,r,a,c){n=o,e=a,t=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,d){let p=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+d)+(c-a)/d;p*=h,f*=h,s(r,a,p,f)},calc:function(o){const r=o*o,a=r*o;return n+e*o+t*r+i*a}}}const Pr=new I,ll=new Ic,cl=new Ic,hl=new Ic;class h1 extends jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,o=s.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Pr.subVectors(s[0],s[1]).add(s[0]),l=Pr);const d=s[a%o],p=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Pr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),ll.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,_,v,m),cl.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,_,v,m),hl.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),cl.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),hl.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return i.set(ll.calc(c),cl.calc(c),hl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kh(n,e,t,i,s){const o=(i-e)*.5,r=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+o+r)*c+(-3*t+3*i-2*o-r)*a+o*n+t}function u1(n,e){const t=1-n;return t*t*e}function d1(n,e){return 2*(1-n)*n*e}function f1(n,e){return n*n*e}function No(n,e,t,i){return u1(n,e)+d1(n,t)+f1(n,i)}function p1(n,e){const t=1-n;return t*t*t*e}function m1(n,e){const t=1-n;return 3*t*t*n*e}function g1(n,e){return 3*(1-n)*n*n*e}function _1(n,e){return n*n*n*e}function Bo(n,e,t,i,s){return p1(n,e)+m1(n,t)+g1(n,i)+_1(n,s)}class Rd extends jn{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Bo(e,s.x,o.x,r.x,a.x),Bo(e,s.y,o.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v1 extends jn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Bo(e,s.x,o.x,r.x,a.x),Bo(e,s.y,o.y,r.y,a.y),Bo(e,s.z,o.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ld extends jn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x1 extends jn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends jn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(No(e,s.x,o.x,r.x),No(e,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M1 extends jn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(No(e,s.x,o.x,r.x),No(e,s.y,o.y,r.y),No(e,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Id extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,s=this.points,o=(s.length-1)*e,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(Kh(a,c.x,l.x,h.x,d.x),Kh(a,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var cc=Object.freeze({__proto__:null,ArcCurve:c1,CatmullRomCurve3:h1,CubicBezierCurve:Rd,CubicBezierCurve3:v1,EllipseCurve:Dc,LineCurve:Ld,LineCurve3:x1,QuadraticBezierCurve:Dd,QuadraticBezierCurve3:M1,SplineCurve:Id});class y1 extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new cc[s.type]().fromJSON(s))}return this}}class Xt extends y1{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ld(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new Dd(this.currentPoint.clone(),new ve(e,t),new ve(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,r){const a=new Rd(this.currentPoint.clone(),new ve(e,t),new ve(i,s),new ve(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Id(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,o,r),this}absarc(e,t,i,s,o,r){return this.absellipse(e,t,i,i,s,o,r),this}ellipse(e,t,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,o,r,a,c),this}absellipse(e,t,i,s,o,r,a,c){const l=new Dc(e,t,i,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $e extends Tn{constructor(e=1,t=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],p=[],f=[];let _=0;const v=[],m=i/2;let u=0;T(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(p,3)),this.setAttribute("uv",new Ht(f,2));function T(){const x=new I,D=new I;let A=0;const P=(t-e)/i;for(let R=0;R<=o;R++){const S=[],y=R/o,w=y*(t-e)+e;for(let N=0;N<=s;N++){const F=N/s,B=F*c+a,U=Math.sin(B),k=Math.cos(B);D.x=w*U,D.y=-y*i+m,D.z=w*k,d.push(D.x,D.y,D.z),x.set(U,P,k).normalize(),p.push(x.x,x.y,x.z),f.push(F,1-y),S.push(_++)}v.push(S)}for(let R=0;R<s;R++)for(let S=0;S<o;S++){const y=v[S][R],w=v[S+1][R],N=v[S+1][R+1],F=v[S][R+1];(e>0||S!==0)&&(h.push(y,w,F),A+=3),(t>0||S!==o-1)&&(h.push(w,N,F),A+=3)}l.addGroup(u,A,0),u+=A}function M(x){const D=_,A=new ve,P=new I;let R=0;const S=x===!0?e:t,y=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*y,0),p.push(0,y,0),f.push(.5,.5),_++;const w=_;for(let N=0;N<=s;N++){const B=N/s*c+a,U=Math.cos(B),k=Math.sin(B);P.x=S*k,P.y=m*y,P.z=S*U,d.push(P.x,P.y,P.z),p.push(0,y,0),A.x=U*.5+.5,A.y=k*.5*y+.5,f.push(A.x,A.y),_++}for(let N=0;N<s;N++){const F=D+N,B=w+N;x===!0?h.push(B,B+1,F):h.push(B+1,B,F),R+=3}l.addGroup(u,R,x===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $e(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gt extends Xt{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Xt().fromJSON(s))}return this}}const b1={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let o=Fd(n,0,s,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,d,p,f;if(i&&(o=C1(n,e,o,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let _=t;_<s;_+=t)d=n[_],p=n[_+1],d<a&&(a=d),p<c&&(c=p),d>l&&(l=d),p>h&&(h=p);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Wo(o,r,t,a,c,f,0),r}};function Fd(n,e,t,i,s){let o,r;if(s===O1(n,e,t,i)>0)for(o=e;o<t;o+=i)r=jh(o,n[o],n[o+1],r);else for(o=t-i;o>=e;o-=i)r=jh(o,n[o],n[o+1],r);return r&&wa(r,r.next)&&(Xo(r),r=r.next),r}function us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(wa(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Wo(n,e,t,i,s,o,r){if(!n)return;!r&&o&&D1(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?T1(n,i,s,o):S1(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Xo(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=w1(us(n),e,t),Wo(n,e,t,i,s,o,2)):r===2&&E1(n,e,t,i,s,o):Wo(us(n),e,t,i,s,o,1);break}}}function S1(n){const e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;const s=e.x,o=t.x,r=i.x,a=e.y,c=t.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,p=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=p&&_.y>=d&&_.y<=f&&Ws(s,a,o,c,r,l,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function T1(n,e,t,i){const s=n.prev,o=n,r=n.next;if(Mt(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,d=o.y,p=r.y,f=a<c?a<l?a:l:c<l?c:l,_=h<d?h<p?h:p:d<p?d:p,v=a>c?a>l?a:l:c>l?c:l,m=h>d?h>p?h:p:d>p?d:p,u=hc(f,_,e,t,i),T=hc(v,m,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=u&&x&&x.z<=T;){if(M.x>=f&&M.x<=v&&M.y>=_&&M.y<=m&&M!==s&&M!==r&&Ws(a,h,c,d,l,p,M.x,M.y)&&Mt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==r&&Ws(a,h,c,d,l,p,x.x,x.y)&&Mt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=u;){if(M.x>=f&&M.x<=v&&M.y>=_&&M.y<=m&&M!==s&&M!==r&&Ws(a,h,c,d,l,p,M.x,M.y)&&Mt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==r&&Ws(a,h,c,d,l,p,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function w1(n,e,t){let i=n;do{const s=i.prev,o=i.next.next;!wa(s,o)&&Ud(s,i,i.next,o)&&Vo(s,o)&&Vo(o,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),Xo(i),Xo(i.next),i=n=o),i=i.next}while(i!==n);return us(i)}function E1(n,e,t,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&U1(r,a)){let c=Nd(r,a);r=us(r,r.next),c=us(c,c.next),Wo(r,e,t,i,s,o,0),Wo(c,e,t,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function C1(n,e,t,i){const s=[];let o,r,a,c,l;for(o=0,r=e.length;o<r;o++)a=e[o]*i,c=o<r-1?e[o+1]*i:n.length,l=Fd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(F1(l));for(s.sort(A1),o=0;o<s.length;o++)t=P1(s[o],t);return t}function A1(n,e){return n.x-e.x}function P1(n,e){const t=R1(n,e);if(!t)return e;const i=Nd(t,n);return us(i,i.next),us(t,t.next)}function R1(n,e){let t=e,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=o&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===o))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;t=s;do o>=t.x&&t.x>=c&&o!==t.x&&Ws(r<l?o:i,r,c,l,r<l?i:o,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(o-t.x),Vo(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&L1(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function L1(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function D1(n,e,t,i){let s=n;do s.z===0&&(s.z=hc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,I1(s)}function I1(n){let e,t,i,s,o,r,a,c,l=1;do{for(t=n,n=null,o=null,r=0;t;){for(r++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;t=i}o.nextZ=null,l*=2}while(r>1);return n}function hc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function F1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ws(n,e,t,i,s,o,r,a){return(s-r)*(e-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(s-r)*(i-a)}function U1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!N1(n,e)&&(Vo(n,e)&&Vo(e,n)&&B1(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||wa(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function wa(n,e){return n.x===e.x&&n.y===e.y}function Ud(n,e,t,i){const s=Lr(Mt(n,e,t)),o=Lr(Mt(n,e,i)),r=Lr(Mt(t,i,n)),a=Lr(Mt(t,i,e));return!!(s!==o&&r!==a||s===0&&Rr(n,t,e)||o===0&&Rr(n,i,e)||r===0&&Rr(t,n,i)||a===0&&Rr(t,e,i))}function Rr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lr(n){return n>0?1:n<0?-1:0}function N1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ud(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Vo(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function B1(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Nd(n,e){const t=new uc(n.i,n.x,n.y),i=new uc(e.i,e.x,e.y),s=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function jh(n,e,t,i){const s=new uc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function uc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O1(n,e,t,i){let s=0;for(let o=e,r=t-i;o<t;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class Oo{static area(e){const t=e.length;let i=0;for(let s=t-1,o=0;o<t;s=o++)i+=e[s].x*e[o].y-e[o].x*e[s].y;return i*.5}static isClockWise(e){return Oo.area(e)<0}static triangulateShape(e,t){const i=[],s=[],o=[];Jh(e),Qh(i,e);let r=e.length;t.forEach(Jh);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Qh(i,t[c]);const a=b1.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Jh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Qh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ct extends Tn{constructor(e=new gt([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];r(l)}this.setAttribute("position",new Ht(s,3)),this.setAttribute("uv",new Ht(o,2)),this.computeVertexNormals();function r(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:k1;let M,x=!1,D,A,P,R;u&&(M=u.getSpacedPoints(h),x=!0,p=!1,D=u.computeFrenetFrames(h,!1),A=new I,P=new I,R=new I),p||(m=0,f=0,_=0,v=0);const S=a.extractPoints(l);let y=S.shape;const w=S.holes;if(!Oo.isClockWise(y)){y=y.reverse();for(let ee=0,re=w.length;ee<re;ee++){const L=w[ee];Oo.isClockWise(L)&&(w[ee]=L.reverse())}}const F=Oo.triangulateShape(y,w),B=y;for(let ee=0,re=w.length;ee<re;ee++){const L=w[ee];y=y.concat(L)}function U(ee,re,L){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(re,L)}const k=y.length,K=F.length;function V(ee,re,L){let Y,$,de;const se=ee.x-re.x,Se=ee.y-re.y,_e=L.x-ee.x,C=L.y-ee.y,b=se*se+Se*Se,z=se*C-Se*_e;if(Math.abs(z)>Number.EPSILON){const ne=Math.sqrt(b),le=Math.sqrt(_e*_e+C*C),te=re.x-Se/ne,Ee=re.y+se/ne,be=L.x-C/le,Te=L.y+_e/le,Ne=((be-te)*C-(Te-Ee)*_e)/(se*C-Se*_e);Y=te+se*Ne-ee.x,$=Ee+Se*Ne-ee.y;const fe=Y*Y+$*$;if(fe<=2)return new ve(Y,$);de=Math.sqrt(fe/2)}else{let ne=!1;se>Number.EPSILON?_e>Number.EPSILON&&(ne=!0):se<-Number.EPSILON?_e<-Number.EPSILON&&(ne=!0):Math.sign(Se)===Math.sign(C)&&(ne=!0),ne?(Y=-Se,$=se,de=Math.sqrt(b)):(Y=se,$=Se,de=Math.sqrt(b/2))}return new ve(Y/de,$/de)}const ae=[];for(let ee=0,re=B.length,L=re-1,Y=ee+1;ee<re;ee++,L++,Y++)L===re&&(L=0),Y===re&&(Y=0),ae[ee]=V(B[ee],B[L],B[Y]);const ie=[];let ce,me=ae.concat();for(let ee=0,re=w.length;ee<re;ee++){const L=w[ee];ce=[];for(let Y=0,$=L.length,de=$-1,se=Y+1;Y<$;Y++,de++,se++)de===$&&(de=0),se===$&&(se=0),ce[Y]=V(L[Y],L[de],L[se]);ie.push(ce),me=me.concat(ce)}for(let ee=0;ee<m;ee++){const re=ee/m,L=f*Math.cos(re*Math.PI/2),Y=_*Math.sin(re*Math.PI/2)+v;for(let $=0,de=B.length;$<de;$++){const se=U(B[$],ae[$],Y);O(se.x,se.y,-L)}for(let $=0,de=w.length;$<de;$++){const se=w[$];ce=ie[$];for(let Se=0,_e=se.length;Se<_e;Se++){const C=U(se[Se],ce[Se],Y);O(C.x,C.y,-L)}}}const ge=_+v;for(let ee=0;ee<k;ee++){const re=p?U(y[ee],me[ee],ge):y[ee];x?(P.copy(D.normals[0]).multiplyScalar(re.x),A.copy(D.binormals[0]).multiplyScalar(re.y),R.copy(M[0]).add(P).add(A),O(R.x,R.y,R.z)):O(re.x,re.y,0)}for(let ee=1;ee<=h;ee++)for(let re=0;re<k;re++){const L=p?U(y[re],me[re],ge):y[re];x?(P.copy(D.normals[ee]).multiplyScalar(L.x),A.copy(D.binormals[ee]).multiplyScalar(L.y),R.copy(M[ee]).add(P).add(A),O(R.x,R.y,R.z)):O(L.x,L.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){const re=ee/m,L=f*Math.cos(re*Math.PI/2),Y=_*Math.sin(re*Math.PI/2)+v;for(let $=0,de=B.length;$<de;$++){const se=U(B[$],ae[$],Y);O(se.x,se.y,d+L)}for(let $=0,de=w.length;$<de;$++){const se=w[$];ce=ie[$];for(let Se=0,_e=se.length;Se<_e;Se++){const C=U(se[Se],ce[Se],Y);x?O(C.x,C.y+M[h-1].y,M[h-1].x+L):O(C.x,C.y,d+L)}}}X(),Q();function X(){const ee=s.length/3;if(p){let re=0,L=k*re;for(let Y=0;Y<K;Y++){const $=F[Y];Z($[2]+L,$[1]+L,$[0]+L)}re=h+m*2,L=k*re;for(let Y=0;Y<K;Y++){const $=F[Y];Z($[0]+L,$[1]+L,$[2]+L)}}else{for(let re=0;re<K;re++){const L=F[re];Z(L[2],L[1],L[0])}for(let re=0;re<K;re++){const L=F[re];Z(L[0]+k*h,L[1]+k*h,L[2]+k*h)}}i.addGroup(ee,s.length/3-ee,0)}function Q(){const ee=s.length/3;let re=0;Me(B,re),re+=B.length;for(let L=0,Y=w.length;L<Y;L++){const $=w[L];Me($,re),re+=$.length}i.addGroup(ee,s.length/3-ee,1)}function Me(ee,re){let L=ee.length;for(;--L>=0;){const Y=L;let $=L-1;$<0&&($=ee.length-1);for(let de=0,se=h+m*2;de<se;de++){const Se=k*de,_e=k*(de+1),C=re+Y+Se,b=re+$+Se,z=re+$+_e,ne=re+Y+_e;he(C,b,z,ne)}}}function O(ee,re,L){c.push(ee),c.push(re),c.push(L)}function Z(ee,re,L){ue(ee),ue(re),ue(L);const Y=s.length/3,$=T.generateTopUV(i,s,Y-3,Y-2,Y-1);xe($[0]),xe($[1]),xe($[2])}function he(ee,re,L,Y){ue(ee),ue(re),ue(Y),ue(re),ue(L),ue(Y);const $=s.length/3,de=T.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);xe(de[0]),xe(de[1]),xe(de[3]),xe(de[1]),xe(de[2]),xe(de[3])}function ue(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function xe(ee){o.push(ee.x),o.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return G1(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new cc[s.type]().fromJSON(s)),new ct(i,e.options)}}const k1={generateTopUV:function(n,e,t,i,s){const o=e[t*3],r=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ve(o,r),new ve(a,c),new ve(l,h)]},generateSideWallUV:function(n,e,t,i,s,o){const r=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],d=e[i*3+2],p=e[s*3],f=e[s*3+1],_=e[s*3+2],v=e[o*3],m=e[o*3+1],u=e[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new ve(r,1-c),new ve(l,1-d),new ve(p,1-_),new ve(v,1-u)]:[new ve(a,1-c),new ve(h,1-d),new ve(f,1-_),new ve(m,1-u)]}};function G1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class z1 extends Yi{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Je extends Yi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ea extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class H1 extends Ea{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ul=new it,eu=new I,tu=new I;class Fc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tu),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class W1 extends Fc{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=oa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(i!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class V1 extends Ea{constructor(e,t,i=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new W1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nu=new it,Eo=new I,dl=new I;class X1 extends Fc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Eo),dl.copy(i.position),dl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dl),i.updateMatrixWorld(),s.makeTranslation(-Eo.x,-Eo.y,-Eo.z),nu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}}class Bd extends Ea{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new X1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $1 extends Fc{constructor(){super(new yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dr extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new $1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y1 extends l1{constructor(e=10,t=10,i=4473924,s=8947848){i=new qe(i),s=new qe(s);const o=t/2,r=e/t,a=e/2,c=[],l=[];for(let p=0,f=0,_=-a;p<=t;p++,_+=r){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const v=p===o?i:s;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const h=new Tn;h.setAttribute("position",new Ht(c,3)),h.setAttribute("color",new Ht(l,3));const d=new Lc({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class q1 extends ms{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);const su={type:"change"},Uc={type:"start"},Od={type:"end"},Ir=new Cc,ou=new Ii,Z1=Math.cos(70*Xf.DEG2RAD),Pt=new I,qt=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fl=1e-6;class K1 extends q1{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new hs,this._lastTargetPosition=new I,this._quat=new hs().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iu,this._sphericalDelta=new iu,this._scale=1,this._panOffset=new I,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new I,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J1.bind(this),this._onPointerDown=j1.bind(this),this._onPointerUp=Q1.bind(this),this._onContextMenu=rv.bind(this),this._onMouseWheel=nv.bind(this),this._onKeyDown=iv.bind(this),this._onTouchStart=sv.bind(this),this._onTouchMove=ov.bind(this),this._onMouseDown=ev.bind(this),this._onMouseMove=tv.bind(this),this._interceptControlDown=av.bind(this),this._interceptControlUp=lv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(su),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),s<-Math.PI?s+=qt:s>Math.PI&&(s-=qt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Pt.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ir.origin.copy(this.object.position),Ir.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ir.direction))<Z1?this.object.lookAt(this.target):(ou.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ir.intersectPlane(ou,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fl||this._lastTargetPosition.distanceToSquared(this.target)>fl?(this.dispatchEvent(su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pt.copy(s).sub(this.target);let o=Pt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,o=t-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function j1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function J1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Q1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Od),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ev(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=dt.DOLLY;break;case qs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}break;case qs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Uc)}function tv(n){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function nv(n){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(n.preventDefault(),this.dispatchEvent(Uc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Od))}function iv(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function sv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=dt.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=dt.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Uc)}function ov(n){switch(this._trackPointer(n),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=dt.NONE}}function rv(n){this.enabled!==!1&&n.preventDefault()}function av(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class cv extends Cd{constructor(){super();const e=new ke;e.deleteAttribute("uv");const t=new Je({side:zt}),i=new Je,s=new Bd(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new q(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const r=new q(e,i);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new q(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new q(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new q(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new q(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new q(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const p=new q(e,Ns(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const f=new q(e,Ns(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const _=new q(e,Ns(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new q(e,Ns(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new q(e,Ns(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const u=new q(e,Ns(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ns(n){const e=new Ac;return e.color.setScalar(n),e}class hv{constructor(){this.aluminum=new Je({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.currentFrameColor="silver",this.acrylic=new Je({color:9684477,transparent:!0,opacity:.42,roughness:.1,metalness:.1,depthWrite:!1,side:Ut}),this.doorGlassLeft=new Je({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Ut}),this.doorGlassRight=new Je({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Ut}),this.handleMaterial=new Je({color:16777215,metalness:.75,roughness:.12,envMapIntensity:1.2}),this.screwSilver=new Je({color:11055288,metalness:.85,roughness:.22,envMapIntensity:1}),this.screwSlot=new Je({color:1842978,metalness:.1,roughness:.9}),this.grommetMaterial=new Je({color:1579035,metalness:.1,roughness:.85}),this.railMaterial=new Je({color:4738388,metalness:.15,roughness:.55}),this.endCapMaterial=new Je({color:10133670,metalness:.1,roughness:.65}),this.casterWheel=new Je({color:1579035,roughness:.7,metalness:.15}),this.casterBracket=new Je({color:14212838,roughness:.22,metalness:.85,envMapIntensity:1.2}),this.wireMesh=new Je({color:1842463,roughness:.55,metalness:.25,envMapIntensity:.9}),this.silverInnerFrame=new Je({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchAluminum=new Je({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchGrayCap=new Je({color:10133670,metalness:.1,roughness:.65}),this.perchBlackCap=new Je({color:2237222,metalness:.1,roughness:.65}),this.perchWhiteScrew=new Je({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.ventCoverAcrylic=new Je({color:9684477,transparent:!0,opacity:.5,roughness:.08,metalness:.1,depthWrite:!1,side:Ut}),this.ledAluminum=new Je({color:14212580,metalness:.8,roughness:.25,envMapIntensity:1.2}),this.ledDiffuser=new Je({color:16777215,roughness:.4,metalness:.05}),this.ledEmissive=new Je({color:16777215,emissive:16777215,emissiveIntensity:1.5,roughness:.2,metalness:0}),this.ledCable=new Je({color:13421772,roughness:.7,metalness:.05}),this.ledBracket=new Je({color:8950432,metalness:.6,roughness:.3}),this.thumbScrewMaterial=new Je({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.blackMatteAcrylic=new Je({color:1579292,roughness:.82,metalness:.04,side:Ut}),this.smokeGrayAcrylic=new Je({color:2829877,transparent:!0,opacity:.6,roughness:.12,metalness:.1,depthWrite:!1,side:Ut}),this.caulkingMaterial=new Je({color:13817821,roughness:.42,metalness:.04,envMapIntensity:.6}),this.rubberPackingMaterial=new Je({color:7502212,roughness:.78,metalness:.06,envMapIntensity:.5})}createPolycaMaterial(e,t){return new Je({map:e,bumpMap:t,bumpScale:1.2,transparent:!0,opacity:.78,roughness:.32,metalness:.1,side:Ut,depthWrite:!1})}createPunchingMaterial(e){return new Je({color:9684477,alphaMap:e,transparent:!0,opacity:.58,roughness:.35,metalness:.05,side:Ut,depthWrite:!1})}setFrameColor(e){this.currentFrameColor=e,e==="black"?(this.aluminum.color.setHex(1974308),this.aluminum.metalness=.28,this.aluminum.roughness=.42,this.aluminum.envMapIntensity=.85,this.endCapMaterial.color.setHex(2237222),this.railMaterial.color.setHex(1974050),this.thumbScrewMaterial.color.setHex(1974050)):(this.aluminum.color.setHex(12897236),this.aluminum.metalness=.85,this.aluminum.roughness=.25,this.aluminum.envMapIntensity=1.3,this.endCapMaterial.color.setHex(10133670),this.railMaterial.color.setHex(4738388),this.thumbScrewMaterial.color.setHex(16119544)),this.aluminum.needsUpdate=!0,this.endCapMaterial.needsUpdate=!0,this.railMaterial.needsUpdate=!0,this.thumbScrewMaterial.needsUpdate=!0}dispose(){this.aluminum.dispose(),this.acrylic.dispose(),this.doorGlassLeft.dispose(),this.doorGlassRight.dispose(),this.handleMaterial.dispose(),this.grommetMaterial.dispose(),this.railMaterial.dispose(),this.endCapMaterial.dispose(),this.casterWheel.dispose(),this.casterBracket.dispose(),this.wireMesh.dispose(),this.silverInnerFrame.dispose(),this.perchAluminum.dispose(),this.perchGrayCap.dispose(),this.perchBlackCap.dispose(),this.perchWhiteScrew.dispose(),this.ventCoverAcrylic.dispose(),this.thumbScrewMaterial.dispose(),this.ledAluminum.dispose(),this.ledDiffuser.dispose(),this.ledEmissive.dispose(),this.ledCable.dispose(),this.ledBracket.dispose(),this.screwSilver.dispose(),this.screwSlot.dispose(),this.blackMatteAcrylic.dispose(),this.smokeGrayAcrylic.dispose()}}function uv(){const n=new gt,e=10,t=3,i=1.8,s=5.5,o=5;n.moveTo(e,e),n.lineTo(e,t),n.lineTo(e-i,t),n.lineTo(e-i,s),n.lineTo(e-o,s),n.lineTo(e-o,-s),n.lineTo(e-i,-s),n.lineTo(e-i,-t),n.lineTo(e,-t),n.lineTo(e,-e),n.lineTo(t,-e),n.lineTo(t,-e+i),n.lineTo(s,-e+i),n.lineTo(s,-e+o),n.lineTo(-s,-e+o),n.lineTo(-s,-e+i),n.lineTo(-t,-e+i),n.lineTo(-t,-e),n.lineTo(-e,-e),n.lineTo(-e,-t),n.lineTo(-e+i,-t),n.lineTo(-e+i,-s),n.lineTo(-e+o,-s),n.lineTo(-e+o,s),n.lineTo(-e+i,s),n.lineTo(-e+i,t),n.lineTo(-e,t),n.lineTo(-e,e),n.lineTo(-t,e),n.lineTo(-t,e-i),n.lineTo(-s,e-i),n.lineTo(-s,e-o),n.lineTo(s,e-o),n.lineTo(s,e-i),n.lineTo(t,e-i),n.lineTo(t,e),n.lineTo(e,e);const r=new Xt;return r.absarc(0,0,2.25,0,Math.PI*2,!0),n.holes.push(r),n}function dv(){const n=new gt,e=10,t=20,i=3,s=1.8,o=5.5,r=5;n.moveTo(e,t),n.lineTo(e,10+i),n.lineTo(e-s,10+i),n.lineTo(e-s,10+o),n.lineTo(e-r,10+o),n.lineTo(e-r,10-o),n.lineTo(e-s,10-o),n.lineTo(e-s,10-i),n.lineTo(e,10-i),n.lineTo(e,-10+i),n.lineTo(e-s,-10+i),n.lineTo(e-s,-10+o),n.lineTo(e-r,-10+o),n.lineTo(e-r,-10-o),n.lineTo(e-s,-10-o),n.lineTo(e-s,-10-i),n.lineTo(e,-10-i),n.lineTo(e,-t),n.lineTo(i,-t),n.lineTo(i,-t+s),n.lineTo(o,-t+s),n.lineTo(o,-t+r),n.lineTo(-o,-t+r),n.lineTo(-o,-t+s),n.lineTo(-i,-t+s),n.lineTo(-i,-t),n.lineTo(-e,-t),n.lineTo(-e,-10-i),n.lineTo(-e+s,-10-i),n.lineTo(-e+s,-10-o),n.lineTo(-e+r,-10-o),n.lineTo(-e+r,-10+o),n.lineTo(-e+s,-10+o),n.lineTo(-e+s,-10+i),n.lineTo(-e,-10+i),n.lineTo(-e,10-i),n.lineTo(-e+s,10-i),n.lineTo(-e+s,10-o),n.lineTo(-e+r,10-o),n.lineTo(-e+r,10+o),n.lineTo(-e+s,10+o),n.lineTo(-e+s,10+i),n.lineTo(-e,10+i),n.lineTo(-e,t),n.lineTo(-i,t),n.lineTo(-i,t-s),n.lineTo(-o,t-s),n.lineTo(-o,t-r),n.lineTo(o,t-r),n.lineTo(o,t-s),n.lineTo(i,t-s),n.lineTo(i,t),n.lineTo(e,t);const a=new Xt;a.absarc(0,10,2.25,0,Math.PI*2,!0),n.holes.push(a);const c=new Xt;return c.absarc(0,-10,2.25,0,Math.PI*2,!0),n.holes.push(c),n}const fv=uv(),pv=dv(),mv=gv();function gv(){const n=new gt,e=10,t=30,i=3,s=1.8,o=5.5,r=5;n.moveTo(e,t),n.lineTo(e,20+i),n.lineTo(e-s,20+i),n.lineTo(e-s,20+o),n.lineTo(e-r,20+o),n.lineTo(e-r,20-o),n.lineTo(e-s,20-o),n.lineTo(e-s,20-i),n.lineTo(e,20-i),n.lineTo(e,i),n.lineTo(e-s,i),n.lineTo(e-s,o),n.lineTo(e-r,o),n.lineTo(e-r,-o),n.lineTo(e-s,-o),n.lineTo(e-s,-i),n.lineTo(e,-i),n.lineTo(e,-20+i),n.lineTo(e-s,-20+i),n.lineTo(e-s,-20+o),n.lineTo(e-r,-20+o),n.lineTo(e-r,-20-o),n.lineTo(e-s,-20-o),n.lineTo(e-s,-20-i),n.lineTo(e,-20-i),n.lineTo(e,-t),n.lineTo(i,-t),n.lineTo(i,-t+s),n.lineTo(o,-t+s),n.lineTo(o,-t+r),n.lineTo(-o,-t+r),n.lineTo(-o,-t+s),n.lineTo(-i,-t+s),n.lineTo(-i,-t),n.lineTo(-e,-t),n.lineTo(-e,-20-i),n.lineTo(-e+s,-20-i),n.lineTo(-e+s,-20-o),n.lineTo(-e+r,-20-o),n.lineTo(-e+r,-20+o),n.lineTo(-e+s,-20+o),n.lineTo(-e+s,-20+i),n.lineTo(-e,-20+i),n.lineTo(-e,-i),n.lineTo(-e+s,-i),n.lineTo(-e+s,-o),n.lineTo(-e+r,-o),n.lineTo(-e+r,o),n.lineTo(-e+s,o),n.lineTo(-e+s,i),n.lineTo(-e,i),n.lineTo(-e,20-i),n.lineTo(-e+s,20-i),n.lineTo(-e+s,20-o),n.lineTo(-e+r,20-o),n.lineTo(-e+r,20+o),n.lineTo(-e+s,20+o),n.lineTo(-e+s,20+i),n.lineTo(-e,20+i),n.lineTo(-e,t),n.lineTo(-i,t),n.lineTo(-i,t-s),n.lineTo(-o,t-s),n.lineTo(-o,t-r),n.lineTo(o,t-r),n.lineTo(o,t-s),n.lineTo(i,t-s),n.lineTo(i,t),n.lineTo(e,t);const a=new Xt;a.absarc(0,20,2.25,0,Math.PI*2,!0),n.holes.push(a);const c=new Xt;c.absarc(0,0,2.25,0,Math.PI*2,!0),n.holes.push(c);const l=new Xt;return l.absarc(0,-20,2.25,0,Math.PI*2,!0),n.holes.push(l),n}function _v(n){return new ct(fv,{depth:n,bevelEnabled:!1,steps:1})}function Fr(n="bottom"){const e=new gt,t=10,i=3,s=1.8,o=5.5,r=5;e.moveTo(t,t),n==="right"||(e.lineTo(t,i),e.lineTo(t-s,i),e.lineTo(t-s,o),e.lineTo(t-r,o),e.lineTo(t-r,-o),e.lineTo(t-s,-o),e.lineTo(t-s,-i),e.lineTo(t,-i)),e.lineTo(t,-t),n==="bottom"||(e.lineTo(i,-t),e.lineTo(i,-t+s),e.lineTo(o,-t+s),e.lineTo(o,-t+r),e.lineTo(-o,-t+r),e.lineTo(-o,-t+s),e.lineTo(-i,-t+s),e.lineTo(-i,-t)),e.lineTo(-t,-t),n==="left"||(e.lineTo(-t,-i),e.lineTo(-t+s,-i),e.lineTo(-t+s,-o),e.lineTo(-t+r,-o),e.lineTo(-t+r,o),e.lineTo(-t+s,o),e.lineTo(-t+s,i),e.lineTo(-t,i)),e.lineTo(-t,t),n==="top"||(e.lineTo(-i,t),e.lineTo(-i,t-s),e.lineTo(-o,t-s),e.lineTo(-o,t-r),e.lineTo(o,t-r),e.lineTo(o,t-s),e.lineTo(i,t-s),e.lineTo(i,t)),e.lineTo(t,t);const a=new Xt;return a.absarc(0,0,2.25,0,Math.PI*2,!0),e.holes.push(a),e}const ru={top:Fr("top"),bottom:Fr("bottom"),left:Fr("left"),right:Fr("right")};function au(n,e="bottom"){const t=ru[e]||ru.bottom;return new ct(t,{depth:n,bevelEnabled:!1,steps:1})}function vv(n){return new ct(pv,{depth:n,bevelEnabled:!1,steps:1})}function xv(n){return new ct(mv,{depth:n,bevelEnabled:!1,steps:1})}function Mv(){const n=new gt,e=7.5,t=15,i=3,s=1.5,o=5,r=4.5;n.moveTo(e,t),n.lineTo(e,i),n.lineTo(e-s,i),n.lineTo(e-s,o),n.lineTo(e-r,o),n.lineTo(e-r,-o),n.lineTo(e-s,-o),n.lineTo(e-s,-i),n.lineTo(e,-i),n.lineTo(e,-t),n.lineTo(-e,-t),n.lineTo(-e,-i),n.lineTo(-e+s,-i),n.lineTo(-e+s,-o),n.lineTo(-e+r,-o),n.lineTo(-e+r,o),n.lineTo(-e+s,o),n.lineTo(-e+s,i),n.lineTo(-e,i),n.lineTo(-e,t),n.lineTo(e,t);const a=new Xt;return a.absarc(0,0,2.5,0,Math.PI*2,!0),n.holes.push(a),n}const yv=Mv();function bv(n){return new ct(yv,{depth:n,bevelEnabled:!1,steps:1})}function Sv(){const n=new gt,e=20,t=3,i=1.8,s=5.5,o=5;n.moveTo(e,e),n.lineTo(e,10+t),n.lineTo(e-i,10+t),n.lineTo(e-i,10+s),n.lineTo(e-o,10+s),n.lineTo(e-o,10-s),n.lineTo(e-i,10-s),n.lineTo(e-i,10-t),n.lineTo(e,10-t),n.lineTo(e,-10+t),n.lineTo(e-i,-10+t),n.lineTo(e-i,-10+s),n.lineTo(e-o,-10+s),n.lineTo(e-o,-10-s),n.lineTo(e-i,-10-s),n.lineTo(e-i,-10-t),n.lineTo(e,-10-t),n.lineTo(e,-e),n.lineTo(10+t,-e),n.lineTo(10+t,-e+i),n.lineTo(10+s,-e+i),n.lineTo(10+s,-e+o),n.lineTo(10-s,-e+o),n.lineTo(10-s,-e+i),n.lineTo(10-t,-e+i),n.lineTo(10-t,-e),n.lineTo(-10+t,-e),n.lineTo(-10+t,-e+i),n.lineTo(-10+s,-e+i),n.lineTo(-10+s,-e+o),n.lineTo(-10-s,-e+o),n.lineTo(-10-s,-e+i),n.lineTo(-10-t,-e+i),n.lineTo(-10-t,-e),n.lineTo(-e,-e),n.lineTo(-e,-10-t),n.lineTo(-e+i,-10-t),n.lineTo(-e+i,-10-s),n.lineTo(-e+o,-10-s),n.lineTo(-e+o,-10+s),n.lineTo(-e+i,-10+s),n.lineTo(-e+i,-10+t),n.lineTo(-e,-10+t),n.lineTo(-e,10-t),n.lineTo(-e+i,10-t),n.lineTo(-e+i,10-s),n.lineTo(-e+o,10-s),n.lineTo(-e+o,10+s),n.lineTo(-e+i,10+s),n.lineTo(-e+i,10+t),n.lineTo(-e,10+t),n.lineTo(-e,e),n.lineTo(-10-t,e),n.lineTo(-10-t,e-i),n.lineTo(-10-s,e-i),n.lineTo(-10-s,e-o),n.lineTo(-10+s,e-o),n.lineTo(-10+s,e-i),n.lineTo(-10+t,e-i),n.lineTo(-10+t,e),n.lineTo(10-t,e),n.lineTo(10-t,e-i),n.lineTo(10-s,e-i),n.lineTo(10-s,e-o),n.lineTo(10+s,e-o),n.lineTo(10+s,e-i),n.lineTo(10+t,e-i),n.lineTo(10+t,e),n.lineTo(e,e);const r=[{x:10,y:10},{x:-10,y:10},{x:-10,y:-10},{x:10,y:-10}];for(const a of r){const c=new Xt;c.absarc(a.x,a.y,2.25,0,Math.PI*2,!0),n.holes.push(c)}return n}const Tv=Sv();function wv(n){return new ct(Tv,{depth:n,bevelEnabled:!1,steps:1})}function Ur(n,e,t=!0){const s=Math.min(2048,Math.max(256,Math.round(n*4))),o=Math.min(2048,Math.max(256,Math.round(e*4))),r=document.createElement("canvas");r.width=s,r.height=o;const a=r.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,s,o),a.fillStyle="#000000";const c=7,h=3.1/2*(s/n),d=15,p={x:35,y:35},f={x:n-35,y:35};for(let v=c/2;v<n;v+=c)for(let m=c/2;m<e;m+=c){if(t){const M=Math.hypot(v-p.x,m-p.y),x=Math.hypot(v-f.x,m-f.y);if(M<d+2.5||x<d+2.5)continue}const u=v/n*s,T=m/e*o;a.beginPath(),a.arc(u,T,h,0,Math.PI*2),a.fill()}if(t){const v=d*(s/n);a.beginPath(),a.arc(p.x/n*s,p.y/e*o,v,0,Math.PI*2),a.arc(f.x/n*s,f.y/e*o,v,0,Math.PI*2),a.fill()}const _=new ha(r);return _.wrapS=an,_.wrapT=an,_.minFilter=Bt,_.magFilter=Bt,_}function Nr(n,e){const i=Math.min(1024,Math.max(128,Math.round(n*3))),s=Math.min(2048,Math.max(256,Math.round(e*3))),o=document.createElement("canvas");o.width=i,o.height=s;const r=o.getContext("2d");r.fillStyle="rgba(235, 242, 248, 0.72)",r.fillRect(0,0,i,s);const a=document.createElement("canvas");a.width=i,a.height=s;const c=a.getContext("2d");c.fillStyle="#808080",c.fillRect(0,0,i,s);const h=6/e*s;for(let f=0;f<s;f+=h){const _=Math.min(s,f+h),v=_-f,m=r.createLinearGradient(0,f,0,_);m.addColorStop(0,"rgba(140, 165, 185, 0.95)"),m.addColorStop(.18,"rgba(255, 255, 255, 1.0)"),m.addColorStop(.5,"rgba(220, 235, 248, 0.55)"),m.addColorStop(.82,"rgba(240, 248, 255, 0.80)"),m.addColorStop(1,"rgba(140, 165, 185, 0.95)"),r.fillStyle=m,r.fillRect(0,f,i,v);const u=Math.max(1.5,Math.round(h*.12));r.fillStyle="rgba(90, 115, 135, 0.85)",r.fillRect(0,f,i,u);const T=Math.max(1.5,Math.round(h*.16));r.fillStyle="rgba(255, 255, 255, 0.98)",r.fillRect(0,f+u,i,T);const M=c.createLinearGradient(0,f,0,_);M.addColorStop(0,"#1a1a1a"),M.addColorStop(.2,"#f0f0f0"),M.addColorStop(.5,"#999999"),M.addColorStop(.8,"#d8d8d8"),M.addColorStop(1,"#1a1a1a"),c.fillStyle=M,c.fillRect(0,f,i,v)}const d=new ha(o);d.wrapS=an,d.wrapT=an,d.minFilter=Bt,d.magFilter=Bt;const p=new ha(a);return p.wrapS=an,p.wrapT=an,p.minFilter=Bt,p.magFilter=Bt,{map:d,bumpMap:p}}function Rn(n,e,t=!1,i=!1){return t?n==="2040"?"AFS-2040-5":"AFS-2020-5":n==="4040"?e==="black"?"AFS-4040-4-BK":"AFS-4040-4":n==="2060"?"AFS-2060-4":n==="2040"?i&&e==="silver"?"AFSF-2040-4":e==="black"?"AFS-2040-4-BK":"AFS-2040-4":i&&e==="silver"?"AFSF-2020-4":e==="black"?"AFS-2020-4-BK":"AFS-2020-4"}function xt(n,e,t,i=!1,s=!1){const o=Math.round(e);return`${Rn(n,t,i,s)}-${o}`}class Ev{constructor(e){this.materials=e,this.root=new lt,this.root.name="CageRoot",this.frameGroup=new lt,this.frameGroup.name="Frames",this.root.add(this.frameGroup),this.panelGroup=new lt,this.panelGroup.name="Panels",this.root.add(this.panelGroup),this.doorGroup=new lt,this.doorGroup.name="Doors",this.root.add(this.doorGroup),this.feetGroup=new lt,this.feetGroup.name="Feet",this.root.add(this.feetGroup),this.perchGroup=new lt,this.perchGroup.name="Perch",this.root.add(this.perchGroup),this.caulkingGroup=new lt,this.caulkingGroup.name="Caulking",this.root.add(this.caulkingGroup),this.rubberPackingGroup=new lt,this.rubberPackingGroup.name="RubberPacking",this.root.add(this.rubberPackingGroup),this.dividerGroup=new lt,this.dividerGroup.name="RoomDivider",this.root.add(this.dividerGroup),this.ledGroup=new lt,this.ledGroup.name="LED",this.root.add(this.ledGroup),this.params={W:750,D:450,H:300,cageType:"A",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,hasFloorReinforcement:!1,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorHeaterSupport:!1,hasPerch:!1,hasRubberPacking:!1,hasRoomDivider:!1,ledType:"none",ledPower:!0,ledBrightness:1,ledColorMode:"white",ledRgbColor:"#ffffff",frontWideFrame:"2x",doorHingeSide:"left",footType:"rubber",showPanels:!0,doorState:"closed",frameColor:"silver",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}},this.activeGeometries=[],this.activeTextures=[],this.activeMaterials=[],this.partsList=[]}disposeResources(){for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.activeTextures)e.dispose();this.activeTextures=[];for(const e of this.activeMaterials)e.dispose();this.activeMaterials=[]}clearGroup(e){for(;e.children.length>0;){const t=e.children[0];e.remove(t)}}addFrameMember(e,t,i,s,o="",r=null,a="bottom",c=null){let l;e==="4040"?l=wv(t):e==="2060"?l=xv(t):e==="2040"?l=vv(t):e==="2020_flat"?l=au(t,a):l=_v(t),l.translate(0,0,-t/2),this.activeGeometries.push(l);const h=new q(l,r||this.materials.aluminum);return h.position.copy(i),h.rotation.copy(s),h.castShadow=!0,h.receiveShadow=!0,h.name=o,(c||this.frameGroup).add(h),h}addDoorEndCap(e,t,i,s=null,o=null,r=null){const h=new gt;h.moveTo(-20/2+2,-20/2),h.lineTo(20/2-2,-20/2),h.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),h.lineTo(20/2,20/2-2),h.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),h.lineTo(-20/2+2,20/2),h.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),h.lineTo(-20/2,-20/2+2),h.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const d={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},p=new ct(h,d);p.translate(0,0,-1.5),this.activeGeometries.push(p);const f=new q(p,o||this.materials.endCapMaterial);return f.position.set(e,t,i),s&&f.rotation.copy(s),f.castShadow=!0,f.receiveShadow=!0,f.name="扉用エンドキャップ",(r||this.frameGroup).add(f),f}addEndCap2040(e,t,i,s=null,o=null,r=null){const h=new gt;h.moveTo(-40/2+2,-20/2),h.lineTo(40/2-2,-20/2),h.absarc(40/2-2,-20/2+2,2,-Math.PI/2,0,!1),h.lineTo(40/2,20/2-2),h.absarc(40/2-2,20/2-2,2,0,Math.PI/2,!1),h.lineTo(-40/2+2,20/2),h.absarc(-40/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),h.lineTo(-40/2,-20/2+2),h.absarc(-40/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const d={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},p=new ct(h,d);p.translate(0,0,-1.5),this.activeGeometries.push(p);const f=new q(p,o||this.materials.endCapMaterial);return f.position.set(e,t,i),s&&f.rotation.copy(s),f.castShadow=!0,f.receiveShadow=!0,f.name="2040スペーサー用エンドキャップ",(r||this.frameGroup).add(f),f}getLatchBlackMaterial(){return this.latchBlackMaterial||(this.latchBlackMaterial=new Je({color:1579034,roughness:.5,metalness:.15,name:"CP294N_Black"}),this.activeMaterials.push(this.latchBlackMaterial)),this.latchBlackMaterial}createSlideLatchMesh(e){const t=new lt,i=this.getLatchBlackMaterial(),s=new gt,o=25,r=70,a=3;s.moveTo(-o/2+a,-r/2),s.lineTo(o/2-a,-r/2),s.quadraticCurveTo(o/2,-r/2,o/2,-r/2+a),s.lineTo(o/2,r/2-a),s.quadraticCurveTo(o/2,r/2,o/2-a,r/2),s.lineTo(-o/2+a,r/2),s.quadraticCurveTo(-o/2,r/2,-o/2,r/2-a),s.lineTo(-o/2,-r/2+a),s.quadraticCurveTo(-o/2,-r/2,-o/2+a,-r/2);const c=new ct(s,{depth:8,bevelEnabled:!1});this.activeGeometries.push(c);const l=new q(c,i);l.position.set(0,0,0),l.castShadow=!0,t.add(l);for(const N of[-25,25]){const F=new $e(3.5,3.5,3,16);F.rotateX(Math.PI/2),this.activeGeometries.push(F);const B=new q(F,i);B.position.set(0,N,8.5),t.add(B)}const h=new lt;h.position.set(0,0,8),t.add(h),t.userData.knobPivot=h;const d=e?-1:1,p=e?1:-1,f=new ke(12,28,6);this.activeGeometries.push(f);const _=new q(f,i);_.position.set(0,0,3),h.add(_);const v=new ke(16,22,2.5);this.activeGeometries.push(v);const m=new q(v,i);m.position.set(d*10,0,.5),m.castShadow=!0,h.add(m);const u=new gt;e?(u.moveTo(0,0),u.lineTo(-11,0),u.lineTo(-15,-2.8),u.lineTo(-12,-2.8),u.lineTo(-7,0),u.closePath()):(u.moveTo(0,0),u.lineTo(11,0),u.lineTo(15,-2.8),u.lineTo(12,-2.8),u.lineTo(7,0),u.closePath());const T=new ct(u,{depth:14,bevelEnabled:!1});T.translate(0,0,-7),T.rotateX(-Math.PI/2),this.activeGeometries.push(T);const M=new q(T,i);M.position.set(0,0,-.75),M.castShadow=!0,h.add(M);const x=new ke(10,24,16);this.activeGeometries.push(x);const D=new q(x,i);D.position.set(p*4,0,8),D.castShadow=!0,h.add(D);const A=new gt;A.moveTo(0,0),A.lineTo(p*8,4),A.lineTo(p*5,10),A.lineTo(p*-2,8),A.closePath();const P=new ct(A,{depth:22,bevelEnabled:!1});P.translate(0,0,-11),P.rotateX(-Math.PI/2),this.activeGeometries.push(P);const R=new q(P,i);R.position.set(p*4,0,16),R.castShadow=!0,h.add(R);const S=new gt;S.moveTo(0,-9),S.lineTo(12,-9),S.quadraticCurveTo(18,-9,18,0),S.quadraticCurveTo(18,9,12,9),S.lineTo(0,9),S.closePath();const y=new ct(S,{depth:3,bevelEnabled:!1});this.activeGeometries.push(y);const w=new q(y,i);return e||(w.rotation.y=Math.PI),w.position.set(p*6,0,10),w.castShadow=!0,h.add(w),t}createStrikerAssembly(e){const t=new lt,i=this.materials.acrylic,s=this.getLatchBlackMaterial(),o=e?1:-1;for(const f of[-10,10]){const _=new $e(10,10,5,24);_.rotateX(Math.PI/2),this.activeGeometries.push(_);const v=new q(_,i);v.position.set(o*10,f,2.5),t.add(v);const m=new $e(3.5,3.5,2.5,16);m.rotateX(Math.PI/2),this.activeGeometries.push(m);const u=new q(m,s);u.position.set(o*10,f,7.5),t.add(u)}const r=new gt,c=27/2,h=38-c;if(e){r.moveTo(0,-c),r.lineTo(h,-c),r.absarc(h,0,c,-Math.PI/2,Math.PI/2,!1),r.lineTo(0,c),r.closePath();const f=7.5,_=h-1,v=h-7.5,m=new Xt;m.moveTo(v,-f),m.lineTo(_,-f),m.absarc(_,0,f,-Math.PI/2,Math.PI/2,!1),m.lineTo(v,f),m.closePath(),r.holes.push(m);for(const u of[-10,10]){const T=new Xt;T.absarc(10,u,2.2,0,Math.PI*2,!0),r.holes.push(T)}}else{r.moveTo(0,-c),r.lineTo(-h,-c),r.absarc(-h,0,c,-Math.PI/2,-Math.PI*1.5,!0),r.lineTo(0,c),r.closePath();const f=7.5,_=-h+1,v=-h+7.5,m=new Xt;m.moveTo(v,-f),m.lineTo(_,-f),m.absarc(_,0,f,-Math.PI/2,-Math.PI*1.5,!0),m.lineTo(v,f),m.closePath(),r.holes.push(m);for(const u of[-10,10]){const T=new Xt;T.absarc(-10,u,2.2,0,Math.PI*2,!0),r.holes.push(T)}}const d=new ct(r,{depth:1.5,bevelEnabled:!1});this.activeGeometries.push(d);const p=new q(d,s);return p.position.set(0,0,5),p.castShadow=!0,t.add(p),t}addEndCap(e,t,i){const a=new gt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},l=new ct(a,c);l.translate(0,0,-1.5),this.activeGeometries.push(l);const h=new q(l,this.materials.endCapMaterial);return h.position.set(e,t,i),h.castShadow=!0,h.receiveShadow=!0,h.name="M4エンドキャップ",this.frameGroup.add(h),h}createWireMesh(e,t,i){const s=new lt;s.name=`WireMesh_P${i}_${e}x${t}`;const o=1.6,r=Math.max(2,Math.floor(t/i)+1),a=-((r-1)*i)/2,c=new $e(o,o,e,8);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);for(let p=0;p<r;p++){const f=new q(c,this.materials.wireMesh);f.position.set(0,o,a+p*i),f.castShadow=!0,s.add(f)}const l=Math.max(2,Math.floor(e/i)+1),h=-((l-1)*i)/2,d=new $e(o,o,t,8);d.rotateX(Math.PI/2),this.activeGeometries.push(d);for(let p=0;p<l;p++){const f=new q(d,this.materials.wireMesh);f.position.set(h+p*i,-o,0),f.castShadow=!0,s.add(f)}return s}update(e){if(e&&e.panelConfig){this.params.panelConfig=Object.assign({},this.params.panelConfig,e.panelConfig);const R={...e};delete R.panelConfig,Object.assign(this.params,R)}else e&&Object.assign(this.params,e);const{W:t,D:i,H:s,cageType:o,frontWindowH:r,hasSideReinforcement:a,sideOpeningH:c,showPanels:l,frameColor:h,hasFloorReinforcement:d,hasTopReinforcement:p,footType:f,doorHingeSide:_,hasFloorHeaterSupport:v}=this.params,m=h==="silver";h&&this.materials.setFrameColor(h),this.clearGroup(this.frameGroup),this.clearGroup(this.panelGroup),this.clearGroup(this.doorGroup),this.clearGroup(this.feetGroup),this.clearGroup(this.perchGroup),this.clearGroup(this.dividerGroup),this.clearGroup(this.caulkingGroup),this.clearGroup(this.rubberPackingGroup),this.clearGroup(this.ledGroup),this.disposeResources(),this._doorAnim=null,this.partsList=[];const u=new Ct(0,0,0),T=new Ct(0,Math.PI/2,0),M=new Ct(Math.PI/2,0,0),x=Math.max(10,s-40),D=Math.max(10,i-6);if(o==="A_FRAMED"){this.addFrameMember("2020",D,new I(-t/2+10,10,0),u,"床・左2020"),this.addFrameMember("2020",D,new I(t/2-10,10,0),u,"床・右2020"),this.recordPart(xt("2020",D,h),D,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const R=Math.max(10,t-40);this.addFrameMember("4040",R,new I(0,20,i/2-20),T,"床・正面4040 (枠囲い下部)"),this.recordPart(xt("4040",R,h),R,1,"正面下部 40x40枠囲い (AFS-4040-4)","frame");const S=Math.max(10,t-40);if(this.addFrameMember("2020",S,new I(0,10,-i/2+10),T,"床・背面2020"),this.recordPart(xt("2020",S,h),S,1,"床面 背面","frame"),d){const O=Math.max(10,i-60),Z=m?"2020_flat":"2020";this.addFrameMember(Z,O,new I(0,10,-10),u,"床・中央補強2020",null,"top"),this.recordPart(xt("2020",O,h,!1,!0),O,1,"床面 中央補強 (2分割・D-60mm)","frame")}const y=s/2;this.addFrameMember("2020",x,new I(-t/2+10,y,-i/2+10),M,"柱・奥左2020"),this.addFrameMember("2020",x,new I(t/2-10,y,-i/2+10),M,"柱・奥右2020"),this.recordPart(xt("2020",x,h),x,2,"柱 (奥2隅)","frame"),this.addFrameMember("2040",x,new I(-t/2+10,y,i/2-20),M,"柱・手前左2040"),this.addFrameMember("2040",x,new I(t/2-10,y,i/2-20),M,"柱・手前右2040"),this.recordPart(xt("2040",x,h),x,2,"柱・正面枠囲い (2040・奥行40mm)","frame");const w=p||t>940,N=this.params.panelConfig||{};let F=!1;if(w){const O=!!(N.topLeft&&N.topLeft.startsWith("mesh")),Z=!!(N.topRight&&N.topRight.startsWith("mesh"));F=O||Z}else F=!!(N.top&&N.top.startsWith("mesh"));const B=m&&F,U=B?"AFS-2020-5":Rn("2020",h),k=`${U}-${D}`,K=B?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",D,new I(-t/2+10,s-10,0),u,"天面・左2020"),this.addFrameMember("2020",D,new I(t/2-10,s-10,0),u,"天面・右2020"),this.recordPart(k,D,2,K,"frame",{partCode:U,lengthMm:D,unitType:"m"});const V=Math.max(10,t-40),ae=B?"AFS-2020-5":Rn("2020",h),ie=`${ae}-${V}`,ce=B?"天面 背面 (天面金網受用・AFS-2020-5)":"天面 背面";this.addFrameMember("2020",V,new I(0,s-10,-i/2+10),T,"天面・背面2020"),this.recordPart(ie,V,1,ce,"frame",{partCode:ae,lengthMm:V,unitType:"m"});const me=B?"AFS-2040-5":Rn("2040",h),ge=`${me}-${R}`,X=B?"正面上部 2040横向き (天面金網受用・AFS-2040-5)":"正面上部 2040横向き (奥行40mm・AFS-2040-4)",Q=new it().makeBasis(new I(0,1,0),new I(0,0,1),new I(1,0,0)),Me=new Ct().setFromRotationMatrix(Q);if(this.addFrameMember("2040",R,new I(0,s-10,i/2-20),Me,"天面・手前2040 (横向き枠囲い上部)"),this.recordPart(ge,R,1,X,"frame",{partCode:me,lengthMm:R,unitType:"m"}),p||t>940){const O=Math.max(10,i-60),Z=B?"AFS-2020-5":Rn("2020",h,!1,!0),he=`${Z}-${O}`,ue=B?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割・D-60mm)",xe=m&&!B?"2020_flat":"2020";this.addFrameMember(xe,O,new I(0,s-10,-10),u,"天面・中央補強2020",null,"bottom"),this.recordPart(he,O,1,ue,"frame",{partCode:Z,lengthMm:O,unitType:"m"})}}else if(o==="A"||o==="A_FRONT"){this.addFrameMember("2020",D,new I(-t/2+10,10,0),u,"床・左2020"),this.addFrameMember("2020",D,new I(t/2-10,10,0),u,"床・右2020"),this.recordPart(xt("2020",D,h),D,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const R=Math.max(10,t-40),S=this.params.frontWideFrame||"2x";S==="3x"?h==="black"?(this.addFrameMember("2040",R,new I(0,20,i/2-10),T,"床・正面2040 (3倍幅下段)"),this.recordPart(xt("2040",R,"black"),R,1,"床面 正面 3倍幅下段 (40mm幅・ブラック)","frame"),this.addFrameMember("2020",R,new I(0,50,i/2-10),T,"床・正面2020 (3倍幅上段)"),this.recordPart(xt("2020",R,"black"),R,1,"床面 正面 3倍幅上段 (20mm幅・ブラック2段構成)","frame")):(this.addFrameMember("2060",R,new I(0,30,i/2-10),T,"床・正面2060 (3倍幅)"),this.recordPart(xt("2060",R,"silver"),R,1,"床面 正面 3倍幅 (AFS-2060-4)","frame")):S==="2x"?(this.addFrameMember("2040",R,new I(0,20,i/2-10),T,"床・正面2040 (2倍幅)"),this.recordPart(xt("2040",R,h),R,1,"床面 正面 2倍幅 (AFS-2040・内側)","frame")):(this.addFrameMember("2020",R,new I(0,10,i/2-10),T,"床・正面2020 (標準幅)"),this.recordPart(xt("2020",R,h),R,1,"床面 正面 (標準2020)","frame"));const y=Math.max(10,t-40);if(this.addFrameMember("2020",y,new I(0,10,-i/2+10),T,"床・背面2020"),this.recordPart(xt("2020",y,h),y,1,"床面 背面","frame"),d){const ge=Math.max(10,i-40),X=m?"2020_flat":"2020";this.addFrameMember(X,ge,new I(0,10,0),u,"床・中央補強2020",null,"top"),this.recordPart(xt("2020",ge,h,!1,!0),ge,1,"床面 中央補強 (2分割)","frame")}const w=s/2;this.addFrameMember("2020",x,new I(-t/2+10,w,i/2-10),M,"柱・手前左"),this.addFrameMember("2020",x,new I(t/2-10,w,i/2-10),M,"柱・手前右"),this.addFrameMember("2020",x,new I(-t/2+10,w,-i/2+10),M,"柱・奥左"),this.addFrameMember("2020",x,new I(t/2-10,w,-i/2+10),M,"柱・奥右"),this.recordPart(xt("2020",x,h),x,4,"柱 (4隅・床奥行き乗せ)","frame");const N=p||t>940,F=this.params.panelConfig||{};let B=!1;if(N){const ge=!!(F.topLeft&&F.topLeft.startsWith("mesh")),X=!!(F.topRight&&F.topRight.startsWith("mesh"));B=ge||X}else B=!!(F.top&&F.top.startsWith("mesh"));const U=m&&B,k=U?"AFS-2020-5":Rn("2020",h),K=`${k}-${D}`,V=U?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",D,new I(-t/2+10,s-10,0),u,"天面・左2020"),this.addFrameMember("2020",D,new I(t/2-10,s-10,0),u,"天面・右2020"),this.recordPart(K,D,2,V,"frame",{partCode:k,lengthMm:D,unitType:"m"});const ae=Math.max(10,t-40),ie=U?"AFS-2020-5":Rn("2020",h),ce=`${ie}-${ae}`,me=U?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";if(this.addFrameMember("2020",ae,new I(0,s-10,-i/2+10),T,"天面・背面2020"),this.addFrameMember("2020",ae,new I(0,s-10,i/2-10),T,"天面・手前2020"),this.recordPart(ce,ae,2,me,"frame",{partCode:ie,lengthMm:ae,unitType:"m"}),p||t>940){const ge=Math.max(10,i-40),X=U?"AFS-2020-5":Rn("2020",h,!1,!0),Q=`${X}-${ge}`,Me=U?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",O=m&&!U?"2020_flat":"2020";this.addFrameMember(O,ge,new I(0,s-10,0),u,"天面・中央補強2020",null,"bottom"),this.recordPart(Q,ge,1,Me,"frame",{partCode:X,lengthMm:ge,unitType:"m"})}}else{this.addFrameMember("2020",D,new I(-t/2+10,10,0),u,"床・左2020"),this.addFrameMember("2020",D,new I(t/2-10,10,0),u,"床・右2020"),this.recordPart(xt("2020",D,h),D,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const R=Math.max(10,t-40);if(this.addFrameMember("2020",R,new I(0,10,i/2-10),T,"床・手前2020"),this.addFrameMember("2020",R,new I(0,10,-i/2+10),T,"床・背面2020"),this.recordPart(xt("2020",R,h),R,2,"床面 前後","frame"),d){const X=Math.max(10,i-40),Q=m?"2020_flat":"2020";this.addFrameMember(Q,X,new I(0,10,0),u,"床・中央補強2020",null,"top"),this.recordPart(xt("2020",X,h,!1,!0),X,1,"床面 中央補強 (2分割)","frame")}const S=s/2;this.addFrameMember("2020",x,new I(-t/2+10,S,i/2-10),M,"柱・手前左"),this.addFrameMember("2020",x,new I(t/2-10,S,i/2-10),M,"柱・手前右"),this.addFrameMember("2020",x,new I(-t/2+10,S,-i/2+10),M,"柱・奥左"),this.addFrameMember("2020",x,new I(t/2-10,S,-i/2+10),M,"柱・奥右"),this.recordPart(xt("2020",x,h),x,4,"柱 (4隅)","frame");const y=p||t>940,w=this.params.panelConfig||{};let N=!1;if(y){const X=!!(w.topLeft&&w.topLeft.startsWith("mesh")),Q=!!(w.topRight&&w.topRight.startsWith("mesh"));N=X||Q}else N=!!(w.top&&w.top.startsWith("mesh"));const F=m&&N,B=F?"AFS-2020-5":Rn("2020",h),U=`${B}-${D}`,k=F?"天面 左右通し (天面金網受用・AFS-2020-5)":"天面 左右通し (前後3mm短縮・キャップ取付)";this.addFrameMember("2020",D,new I(-t/2+10,s-10,0),u,"天面・左2020"),this.addFrameMember("2020",D,new I(t/2-10,s-10,0),u,"天面・右2020"),this.recordPart(U,D,2,k,"frame",{partCode:B,lengthMm:D,unitType:"m"});const K=Math.max(10,t-40),V=F?"AFS-2020-5":Rn("2020",h),ae=`${V}-${K}`,ie=F?"天面 前後 (天面金網受用・AFS-2020-5)":"天面 前後";if(this.addFrameMember("2020",K,new I(0,s-10,-i/2+10),T,"天面・背面2020"),this.addFrameMember("2020",K,new I(0,s-10,i/2-10),T,"天面・手前2020"),this.recordPart(ae,K,2,ie,"frame",{partCode:V,lengthMm:K,unitType:"m"}),p||t>940){const X=Math.max(10,i-40),Q=F?"AFS-2020-5":Rn("2020",h,!1,!0),Me=`${Q}-${X}`,O=F?"天面 中央補強 (天面金網受用・AFS-2020-5)":"天面 中央補強 (2分割)",Z=m&&!F?"2020_flat":"2020";this.addFrameMember(Z,X,new I(0,s-10,0),u,"天面・中央補強2020",null,"bottom"),this.recordPart(Me,X,1,O,"frame",{partCode:Q,lengthMm:X,unitType:"m"})}const ce=20+r+10,me=Math.max(10,t-40),ge=m?"2020_flat":"2020";this.addFrameMember(ge,me,new I(0,ce,i/2-10),T,"正面・中桟2020",null,"right"),this.recordPart(xt("2020",me,h,!1,!0),me,1,"正面 中桟 (レール受け)","frame")}const A=[{x:-t/2+10,y:10,z:i/2-1.5},{x:t/2-10,y:10,z:i/2-1.5},{x:-t/2+10,y:s-10,z:i/2-1.5},{x:t/2-10,y:s-10,z:i/2-1.5},{x:-t/2+10,y:10,z:-i/2+1.5},{x:t/2-10,y:10,z:-i/2+1.5},{x:-t/2+10,y:s-10,z:-i/2+1.5},{x:t/2-10,y:s-10,z:-i/2+1.5}];for(const R of A)this.addEndCap(R.x,R.y,R.z);const P=m?"ECP-2020-4-GY":"ECP-2020-4";if(this.recordPart(P,"-",8,"奥行きフレーム両端 (前後計8箇所)","frame",{partCode:P,lengthMm:null,unitType:"piece"}),a){const R=o==="A_FRAMED",S=Math.max(10,R?i-60:i-40),y=R?-10:0,w=c,F=20+Math.max(10,s-60-w)+10,B=m?"2020_flat":"2020";this.addFrameMember(B,S,new I(-t/2+10,F,y),u,"側面補強・左2020",null,"right"),this.addFrameMember(B,S,new I(t/2-10,F,y),u,"側面補強・右2020",null,"left");const U=R?" (D-60mm)":"";this.recordPart(xt("2020",S,h,!1,!0),S,2,`側面 補強フレーム (左右${U})`,"frame")}this.buildPanels(T,u),this.buildDoors(),this.buildDoorPartsRecord(),this.params.footType==="caster"?this.buildCasters():this.buildFeet(),this.params.hasPerch&&this.buildPerch(),this.buildCaulking(),this.params.hasRubberPacking&&this.buildRubberPacking(),this.params.hasRoomDivider&&this.buildRoomDivider(),this.params.ledType&&this.params.ledType!=="none"&&this.buildLed(),this.panelGroup.visible=l,this.doorGroup.visible=l,this.caulkingGroup.visible=l,this.rubberPackingGroup.visible=l,this.dividerGroup.visible=l,this.ledGroup.visible=!0}buildPanels(e,t){const{W:i,D:s,H:o,cageType:r,frontWindowH:a,hasSideReinforcement:c,sideOpeningH:l,hasFloorReinforcement:h,hasTopReinforcement:d,frameColor:p}=this.params,f=this.params.panelConfig||{},_=3,v=f.floor||"acrylic",m=f.back||"acrylic",u=f.side||"acrylic",T=f.sideUpper||"punching",M=f.sideLower||"acrylic",x=f.top||"punching",D=f.topLeft||"punching",A=f.topRight||"punching",P=r==="A_FRAMED",R=P?s-50:s-30,S=P?-10:0,y=v==="black_matte",w=v==="smoke_gray";let N=this.materials.acrylic,F="透明アクリル 3.0mm 底板",B="acrylic_extrusion_3_0";if(y?(N=this.materials.blackMatteAcrylic,F="アクリル黒両面マット 3.0mm 底板",B="acrylic_black_matte_3_0"):w&&(N=this.materials.smokeGrayAcrylic,F="アクリル グレースモーク半透明 3.0mm 底板",B="acrylic_smoke_gray_3_0"),h){const O=(i-60)/2,Z=Math.round(O+10),he=new ke(Z,_,R);this.activeGeometries.push(he);const ue=new q(he,N);ue.position.set(-O/2-10,20-_/2,S),this.panelGroup.add(ue);const xe=new q(he,N);xe.position.set(O/2+10,20-_/2,S),this.panelGroup.add(xe),this.recordPart(F,`${Z} x ${R} mm`,2,"床面 (2分割)","panel",{panelCode:B,partCode:B,widthMm:Z,heightMm:R,unitType:"m2"})}else{const O=i-30,Z=new ke(O,_,R);this.activeGeometries.push(Z);const he=new q(Z,N);he.position.set(0,20-_/2,S),this.panelGroup.add(he),this.recordPart(F,`${O} x ${R} mm`,1,"床面 (1枚)","panel",{panelCode:B,partCode:B,widthMm:O,heightMm:R,unitType:"m2"})}if(this.params.hasFloorHeaterSupport){const O=p==="black"?"ブラック":"ホワイト",Z=2,he=4;if(h){const ue=Math.round(i/2+9),xe=s-2,ee=80,re=80,L=20,Y=Math.max(10,xe-180),$=new gt;$.moveTo(ee,-xe/2),$.lineTo(ue,-xe/2),$.lineTo(ue,xe/2-Y),$.lineTo(ue-L,xe/2-Y),$.lineTo(ue-L,xe/2),$.lineTo(ee,xe/2),$.lineTo(0,xe/2-re),$.lineTo(0,-xe/2+re),$.closePath();const de={depth:Z,bevelEnabled:!1},se=new ct($,de);se.rotateX(Math.PI/2),this.activeGeometries.push(se);const Se=new q(se,this.materials.acrylic);Se.position.set(-i/2+1,0,0),Se.castShadow=!0,this.panelGroup.add(Se);const _e=se.clone();_e.rotateY(Math.PI),this.activeGeometries.push(_e);const C=new q(_e,this.materials.acrylic);C.position.set(i/2-1,0,0),C.castShadow=!0,this.panelGroup.add(C);const b=[{x:-i/2+10,z:-s/2+90},{x:-i/2+90,z:-s/2+10},{x:-i/2+10,z:s/2-90},{x:-i/2+90,z:s/2-10},{x:0,z:-s/2+90},{x:-80,z:-s/2+10},{x:-80,z:s/2-10},{x:i/2-10,z:s/2-90},{x:i/2-90,z:s/2-10},{x:i/2-10,z:-s/2+90},{x:i/2-90,z:-s/2+10},{x:0,z:s/2-90},{x:80,z:s/2-10},{x:80,z:-s/2+10}];for(const Ce of b)this.addBottomThumbScrew(Ce.x,-Z,Ce.z);const z=(i-60)/2,ne=Math.max(10,Math.round(z-10)),le=Math.max(10,Math.round((P?s-60:s-40)-10)),{map:te,bumpMap:Ee}=Nr(ne,le);this.activeTextures.push(te,Ee);const be=this.materials.createPolycaMaterial(te,Ee);this.activeMaterials.push(be);const Te=new ke(ne,he,le);this.activeGeometries.push(Te);const Ne=new q(Te,be);Ne.position.set(-z/2-10,he/2,S),this.panelGroup.add(Ne);const fe=new q(Te,be);fe.position.set(z/2+10,he/2,S),this.panelGroup.add(fe),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${ue} x ${xe} mm`,2,"床面外側固定 (2枚互い違い配置・斜めカット各2箇所・切欠き各1箇所・φ6穴各7箇所)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:ue,heightMm:xe,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${ne} x ${le} mm`,2,"床下パネルヒータ緩衝用 (間口-10mm・2枚)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:ne,heightMm:le,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${O})`,"外径φ15mm / M4 (手締め・工具不要)",14,"床下パネルヒータ支え板 固定用 (計14箇所)","other")}else{const ue=i-2,xe=s-2,ee=80,re=new gt,L=ue/2,Y=xe/2;re.moveTo(-L+ee,-Y),re.lineTo(L-ee,-Y),re.lineTo(L,-Y+ee),re.lineTo(L,Y-ee),re.lineTo(L-ee,Y),re.lineTo(-L+ee,Y),re.lineTo(-L,Y-ee),re.lineTo(-L,-Y+ee),re.closePath();const $={depth:Z,bevelEnabled:!1},de=new ct(re,$);de.rotateX(Math.PI/2),this.activeGeometries.push(de);const se=new q(de,this.materials.acrylic);se.position.set(0,0,0),se.castShadow=!0,this.panelGroup.add(se);const Se=[{x:-L+90,z:-Y+9},{x:-L+9,z:-Y+90},{x:L-90,z:-Y+9},{x:L-9,z:-Y+90},{x:-L+90,z:Y-9},{x:-L+9,z:Y-90},{x:L-90,z:Y-9},{x:L-9,z:Y-90},{x:0,z:-Y+9},{x:0,z:Y-9}];for(const Ee of Se)this.addBottomThumbScrew(Ee.x,-Z,Ee.z);const _e=Math.max(10,Math.round(i-40-10)),C=Math.max(10,Math.round((P?s-60:s-40)-10)),{map:b,bumpMap:z}=Nr(_e,C);this.activeTextures.push(b,z);const ne=this.materials.createPolycaMaterial(b,z);this.activeMaterials.push(ne);const le=new ke(_e,he,C);this.activeGeometries.push(le);const te=new q(le,ne);te.position.set(0,he/2,S),this.panelGroup.add(te),this.recordPart("床下パネルヒータ支え板 (透明アクリル 2.0mm)",`${ue} x ${xe} mm`,1,"床面外側固定 (4隅斜めカット80mm・φ6穴10箇所)","panel",{panelCode:"acrylic_extrusion_2_0",partCode:"acrylic_extrusion_2_0",widthMm:ue,heightMm:xe,unitType:"m2"}),this.recordPart("床下パネルヒータ用 緩衝プラダン 4.0mm",`${_e} x ${C} mm`,1,"床下パネルヒータ緩衝用 (間口-10mm)","panel",{panelCode:"danplate_4_0",partCode:"danplate_4_0",widthMm:_e,heightMm:C,unitType:"m2"}),this.recordPart(`No.1 化粧つまみネジ (${O})`,"外径φ15mm / M4 (手締め・工具不要)",10,"床下パネルヒータ支え板 固定用 (計10箇所)","other")}}const U=i-30,k=o-30;if(m==="punching"){const O=Ur(U,k,!1);this.activeTextures.push(O);const Z=this.materials.createPunchingMaterial(O);this.activeMaterials.push(Z);const he=new Yn(U,k);this.activeGeometries.push(he);const ue=new q(he,Z);ue.position.set(0,o/2,-s/2+10),this.panelGroup.add(ue),this.recordPart("塩ビパンチングボード 透明 3.0mm 背板",`${U} x ${k} mm`,1,"背面 (通気パネル・φ3.1-P7)","panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:U,heightMm:k,unitType:"m2"})}else if(m==="polyca"){const{map:O,bumpMap:Z}=Nr(U,k);this.activeTextures.push(O,Z);const he=this.materials.createPolycaMaterial(O,Z);this.activeMaterials.push(he);const ue=new ke(U,k,4);this.activeGeometries.push(ue);const xe=new q(ue,he);xe.position.set(0,o/2,-s/2+10),this.panelGroup.add(xe),this.recordPart("中空ポリカ 4.0mm 背板",`${U} x ${k} mm`,1,"背面 (中空ポリカ・横筋)","panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:U,heightMm:k,unitType:"m2"})}else if(m==="black_matte"){const O=new ke(U,k,_);this.activeGeometries.push(O);const Z=new q(O,this.materials.blackMatteAcrylic);Z.position.set(0,o/2,-s/2+10),this.panelGroup.add(Z),this.recordPart("アクリル黒両面マット 3.0mm 背板",`${U} x ${k} mm`,1,"背面","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:U,heightMm:k,unitType:"m2"})}else if(m==="smoke_gray"){const O=new ke(U,k,_);this.activeGeometries.push(O);const Z=new q(O,this.materials.smokeGrayAcrylic);Z.position.set(0,o/2,-s/2+10),this.panelGroup.add(Z),this.recordPart("アクリル グレースモーク半透明 3.0mm 背板",`${U} x ${k} mm`,1,"背面","panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:U,heightMm:k,unitType:"m2"})}else{const O=new ke(U,k,_);this.activeGeometries.push(O);const Z=new q(O,this.materials.acrylic);Z.position.set(0,o/2,-s/2+10),this.panelGroup.add(Z),this.recordPart("透明アクリル 3.0mm 背板",`${U} x ${k} mm`,1,"背面","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:U,heightMm:k,unitType:"m2"})}const K=d||i>940,V=!K&&x==="punching",ae=K&&D==="punching"&&A==="punching";let ie="back_top_2";if(V?ie="top_single_2":ae&&(ie="top_split_4"),ie==="back_top_2"){const O=o-20-35,Z=-s/2+10,he=new $e(19,19,4.5,32);he.rotateX(Math.PI/2),this.activeGeometries.push(he);const ue=-(i-40)/2+35,xe=(i-40)/2-35,ee=new q(he,this.materials.grommetMaterial);ee.position.set(ue,O,Z),this.panelGroup.add(ee);const re=new q(he,this.materials.grommetMaterial);re.position.set(xe,O,Z),this.panelGroup.add(re);const L=K?"背面板 上部左右2箇所 (天面仕様・端から35mm)":"背面板 上部左右 (端から35mm)";this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,L,"other")}const ce=P?s-50:s-30,me=P?-10:0,ge=(O,Z,he,ue,xe)=>{const ee=xe?`${xe}・`:"",re=xe?`${xe} `:"";if(ue==="punching"){const L=Ur(O,Z,!1);this.activeTextures.push(L);const Y=this.materials.createPunchingMaterial(L);this.activeMaterials.push(Y);const $=new Yn(O,Z);$.rotateY(Math.PI/2),this.activeGeometries.push($);const de=new q($,Y);de.position.set(-i/2+10,he,me),this.panelGroup.add(de);const se=new q($,Y);se.position.set(i/2-10,he,me),this.panelGroup.add(se),this.recordPart(`塩ビパンチングボード 透明 3.0mm 側板 (${ee}φ3.1-P7)`,`${O} x ${Z} mm`,2,`左右側面 ${re}(通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:O,heightMm:Z,unitType:"m2"})}else if(ue==="polyca"){const{map:L,bumpMap:Y}=Nr(O,Z);this.activeTextures.push(L,Y);const $=this.materials.createPolycaMaterial(L,Y);this.activeMaterials.push($);const de=new ke(4,Z,O);this.activeGeometries.push(de);const se=new q(de,$);se.position.set(-i/2+10,he,me),this.panelGroup.add(se);const Se=new q(de,$);Se.position.set(i/2-10,he,me),this.panelGroup.add(Se),this.recordPart(`中空ポリカ 4.0mm 側板 (${ee}奥行筋)`,`${O} x ${Z} mm`,2,`左右側面 ${re}(中空ポリカ)`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:O,heightMm:Z,unitType:"m2"})}else if(ue==="black_matte"){const L=new ke(_,Z,O);this.activeGeometries.push(L);const Y=new q(L,this.materials.blackMatteAcrylic);Y.position.set(-i/2+10,he,me),this.panelGroup.add(Y);const $=new q(L,this.materials.blackMatteAcrylic);$.position.set(i/2-10,he,me),this.panelGroup.add($),this.recordPart(`アクリル黒両面マット 3.0mm 側板 (${ee})`,`${O} x ${Z} mm`,2,`左右側面 ${re}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:O,heightMm:Z,unitType:"m2"})}else if(ue==="smoke_gray"){const L=new ke(_,Z,O);this.activeGeometries.push(L);const Y=new q(L,this.materials.smokeGrayAcrylic);Y.position.set(-i/2+10,he,me),this.panelGroup.add(Y);const $=new q(L,this.materials.smokeGrayAcrylic);$.position.set(i/2-10,he,me),this.panelGroup.add($),this.recordPart(`アクリル グレースモーク半透明 3.0mm 側板 (${ee})`,`${O} x ${Z} mm`,2,`左右側面 ${re}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:O,heightMm:Z,unitType:"m2"})}else{const L=new ke(_,Z,O);this.activeGeometries.push(L);const Y=new q(L,this.materials.acrylic);Y.position.set(-i/2+10,he,me),this.panelGroup.add(Y);const $=new q(L,this.materials.acrylic);$.position.set(i/2-10,he,me),this.panelGroup.add($),this.recordPart(`透明アクリル 3.0mm 側板 (${ee})`,`${O} x ${Z} mm`,2,`左右側面 ${re}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:O,heightMm:Z,unitType:"m2"})}};if(c){const O=l,Z=Math.max(10,o-60-O),he=Math.round(Z+10),ue=Math.round(O+10);ge(ce,he,20+Z/2,M,"下部");const xe=o-20-O/2;if(ge(ce,ue,xe,T,"上部"),this.params.hasSideVentCover&&T==="punching"){const re=O+10,L=s-2,Y=new ke(1.5,re,L);this.activeGeometries.push(Y);const $=-i/2-1.5/2,de=i/2+1.5/2,se=new q(Y,this.materials.ventCoverAcrylic);se.position.set($,xe,0),se.castShadow=!0,this.panelGroup.add(se);const Se=new q(Y,this.materials.ventCoverAcrylic);Se.position.set(de,xe,0),Se.castShadow=!0,this.panelGroup.add(Se);const _e=(s-2)/2-9,C=-(s-2)/2+9,b=xe+re/2-40,z=xe-re/2+40,ne=[{y:b,z:_e},{y:b,z:C},{y:z,z:_e},{y:z,z:C}];for(const te of ne)this.addThumbScrew(-i/2-1.5,te.y,te.z,-1),this.addThumbScrew(i/2+1.5,te.y,te.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${re} x ${L} mm`,2,"左右側面上部 外張り (φ6mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:re,heightMm:L,unitType:"m2"});const le=p==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${le})`,"外径φ15mm / M4 (手締め・工具不要)",8,"側面換気量調整板 固定用 (左右計8箇所)","other")}}else{const O=o-30;if(ge(ce,O,o/2,u,""),this.params.hasSideVentCover&&u==="punching"){const he=o-40,ue=Math.round(he/2+10),xe=s-2,ee=new ke(1.5,ue,xe);this.activeGeometries.push(ee);const re=-i/2-1.5/2,L=i/2+1.5/2,Y=10+ue/2,$=o-10-ue/2,de=new q(ee,this.materials.ventCoverAcrylic);de.position.set(re,Y,0),de.castShadow=!0,this.panelGroup.add(de);const se=new q(ee,this.materials.ventCoverAcrylic);se.position.set(L,Y,0),se.castShadow=!0,this.panelGroup.add(se);const Se=new q(ee,this.materials.ventCoverAcrylic);Se.position.set(re,$,0),Se.castShadow=!0,this.panelGroup.add(Se);const _e=new q(ee,this.materials.ventCoverAcrylic);_e.position.set(L,$,0),_e.castShadow=!0,this.panelGroup.add(_e);const C=(s-2)/2-9,b=-(s-2)/2+9,z=Math.max(25,10+Math.min(30,ue*.2)),ne=Math.min(o/2-15,o/2-Math.min(25,ue*.2)),le=Math.max(o/2+15,o/2+Math.min(25,ue*.2)),te=Math.min(o-25,o-10-Math.min(30,ue*.2)),Ee=[{y:ne,z:C},{y:ne,z:b},{y:z,z:C},{y:z,z:b},{y:te,z:C},{y:te,z:b},{y:le,z:C},{y:le,z:b}];for(const Te of Ee)this.addThumbScrew(-i/2-1.5,Te.y,Te.z,-1),this.addThumbScrew(i/2+1.5,Te.y,Te.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${ue} x ${xe} mm`,4,"左右側面外張り (上下各2枚・φ6mm穴加工4箇所/枚・保温換気調整)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:ue,heightMm:xe,unitType:"m2"});const be=p==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${be})`,"外径φ15mm / M4 (手締め・工具不要)",16,"側面換気量調整板 固定用 (左右計16箇所)","other")}}const X=(O,Z,he,ue,xe,ee=!1)=>{const re=ue&&ue.startsWith("mesh"),L=p==="black";if(re){const Y=parseInt(ue.replace("mesh",""),10);if(L){const $=Math.max(10,Math.round(Z-6)),de=Math.max(10,Math.round(O-46)),se=he-O/2+10,Se=he+O/2-10;this.addFrameMember("2020",$,new I(se,o-10,Q),t,`天面インナー左2020 (${xe})`,this.materials.silverInnerFrame),this.addFrameMember("2020",$,new I(Se,o-10,Q),t,`天面インナー右2020 (${xe})`,this.materials.silverInnerFrame);const _e=Q+Z/2-10,C=Q-Z/2+10;this.addFrameMember("2020",de,new I(he,o-10,_e),e,`天面インナー前2020 (${xe})`,this.materials.silverInnerFrame),this.addFrameMember("2020",de,new I(he,o-10,C),e,`天面インナー後2020 (${xe})`,this.materials.silverInnerFrame),this.recordPart(xt("2020",$,"silver",!0),$,2,`天面 金網取付用インナーフレーム左右 (${xe}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:$,unitType:"m"}),this.recordPart(xt("2020",de,"silver",!0),de,2,`天面 金網取付用インナーフレーム前後 (${xe}・黒ケージ専用)`,"frame",{partCode:"AFS-2020-5",lengthMm:de,unitType:"m"});const b=Math.max(10,Math.round(O-30)),z=Math.max(10,Math.round(Z-30)),ne=this.createWireMesh(b,z,Y);ne.position.set(he,o-10,Q),this.panelGroup.add(ne);const le=`FENP${Y}-A${b}-B${z}`,te=`wire_mesh_${Y}`;this.recordPart(`金網 ${Y}mmピッチ（黒粉体塗装） (型番: ${le})`,`${b} x ${z} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${xe})`,"panel",{panelCode:te,partCode:te,widthMm:b,heightMm:z,unitType:"m2"})}else{const $=Math.max(10,Math.round(O+10)),de=Math.max(10,Math.round(Z+10)),se=this.createWireMesh($,de,Y);se.position.set(he,o-10,Q),this.panelGroup.add(se);const Se=`FENP${Y}-A${$}-B${de}`,_e=`wire_mesh_${Y}`;this.recordPart(`金網 ${Y}mmピッチ（黒粉体塗装） (型番: ${Se})`,`${$} x ${de} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${xe})`,"panel",{panelCode:_e,partCode:_e,widthMm:$,heightMm:de,unitType:"m2"})}}else if(ue==="acrylic"){const Y=Math.round(O+10),$=Math.round(Z+10),de=new ke(Y,_,$);this.activeGeometries.push(de);const se=new q(de,this.materials.acrylic);se.position.set(he,o-20+_/2,Q),this.panelGroup.add(se),this.recordPart("透明アクリル 3.0mm 天板",`${Y} x ${$} mm`,1,`天面 (${xe})`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:Y,heightMm:$,unitType:"m2"})}else{const Y=Math.round(O+10),$=Math.round(Z+10),de=Ur(Y,$,ee);this.activeTextures.push(de);const se=this.materials.createPunchingMaterial(de);this.activeMaterials.push(se);const Se=new Yn(Y,$);Se.rotateX(-Math.PI/2),this.activeGeometries.push(Se);const _e=new q(Se,se);if(_e.position.set(he,o-20+_/2,Q),this.panelGroup.add(_e),this.recordPart("塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)",`${Y} x ${$} mm`,1,`天面 (${xe}・通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:Y,heightMm:$,unitType:"m2"}),ee){const C=new $e(19,19,4.5,32);this.activeGeometries.push(C);const b=o-20+_/2,z=Q-$/2+35,ne=he-Y/2+35,le=he+Y/2-35,te=new q(C,this.materials.grommetMaterial);te.position.set(ne,b,z),this.panelGroup.add(te);const Ee=new q(C,this.materials.grommetMaterial);Ee.position.set(le,b,z),this.panelGroup.add(Ee)}}},Q=P?-10:0,Me=P?s-60:s-40;if(K){const O=(i-60)/2,Z=-O/2-10,he=O/2+10,ue=ie==="top_split_4";X(O,Me,Z,D,"左側",ue),X(O,Me,he,A,"右側",ue),ie==="top_split_4"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",4,"天面板 奥側各2箇所 (計4箇所・端から35mm)","other")}else{const O=ie==="top_single_2";X(i-40,Me,0,x,"全面",O),ie==="top_single_2"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,"天面板 奥側左右 (端から35mm)","other")}if(r==="C"){const O=i-30,Z=a+10,he=new ke(O,Z,_);this.activeGeometries.push(he);const ue=new q(he,this.materials.acrylic);ue.position.set(0,20+a/2,s/2-10),this.panelGroup.add(ue),this.recordPart("透明アクリル 3.0mm 前窓",`${O} x ${Z} mm`,1,"正面 下部はめ殺し固定窓","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:O,heightMm:Z,unitType:"m2"})}}buildGlassRails(e,t,i,s){const{frameColor:o}=this.params,r=new gt;r.moveTo(-8,2.5),r.lineTo(-6.5,2.5),r.lineTo(-6.5,7),r.lineTo(-5,7),r.lineTo(-5,2),r.lineTo(-1.5,2),r.lineTo(-1.5,7),r.lineTo(1.5,7),r.lineTo(1.5,2),r.lineTo(5,2),r.lineTo(5,7),r.lineTo(6.5,7),r.lineTo(6.5,2.5),r.lineTo(8,2.5),r.lineTo(8,0),r.lineTo(-8,0),r.closePath();const a={depth:e,bevelEnabled:!1,steps:1},c=new ct(r,a);c.translate(0,0,-e/2),c.rotateY(-Math.PI/2),this.activeGeometries.push(c);const l=new q(c,this.materials.railMaterial);l.position.set(0,t,s),l.castShadow=!0,l.receiveShadow=!0,l.name="下側ガラスレール",this.doorGroup.add(l);const h=new gt;h.moveTo(-8,12-2.5),h.lineTo(-6.5,12-2.5),h.lineTo(-6.5,0),h.lineTo(-5,0),h.lineTo(-5,11),h.lineTo(-1.5,11),h.lineTo(-1.5,0),h.lineTo(1.5,0),h.lineTo(1.5,11),h.lineTo(5,11),h.lineTo(5,0),h.lineTo(6.5,0),h.lineTo(6.5,12-2.5),h.lineTo(8,12-2.5),h.lineTo(8,12),h.lineTo(-8,12),h.closePath();const d={depth:e,bevelEnabled:!1,steps:1},p=new ct(h,d);p.translate(0,0,-e/2),p.rotateY(-Math.PI/2),this.activeGeometries.push(p);const f=new q(p,this.materials.railMaterial);f.position.set(0,i-12,s),f.castShadow=!0,f.receiveShadow=!0,f.name="上側ガラスレール",this.doorGroup.add(f)}buildAntiFlexRails(e,t,i,s,o,r){const a=Math.max(10,t-25),c=new gt;c.moveTo(-8,2.5),c.lineTo(-6.5,2.5),c.lineTo(-6.5,7),c.lineTo(-5,7),c.lineTo(-5,2),c.lineTo(-1.5,2),c.lineTo(-1.5,7),c.lineTo(1.5,7),c.lineTo(1.5,2),c.lineTo(5,2),c.lineTo(5,7),c.lineTo(6.5,7),c.lineTo(6.5,2.5),c.lineTo(8,2.5),c.lineTo(8,0),c.lineTo(-8,0),c.closePath();const l={depth:a,bevelEnabled:!1,steps:1},h=(i+7+s-12)/2,d=new ct(c,l);d.translate(0,0,-a/2);const p=new it().set(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);d.applyMatrix4(p),this.activeGeometries.push(d);const f=new q(d,this.materials.railMaterial);f.position.set(-e/2,h,o),f.castShadow=!0,f.receiveShadow=!0,f.name="左側たわみ防止レール",this.doorGroup.add(f);const _=new ct(c,l);_.translate(0,0,-a/2);const v=new it().set(0,-1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);_.applyMatrix4(v),this.activeGeometries.push(_);const m=new q(_,this.materials.railMaterial);m.position.set(e/2,h,o),m.castShadow=!0,m.receiveShadow=!0,m.name="右側たわみ防止レール",this.doorGroup.add(m)}buildFramedDoors(){const{W:e,D:t,H:i,doorState:s,frameColor:o}=this.params,r=o==="silver",a=Math.max(10,e-40),c=Math.max(10,i-60),l=Math.max(10,Math.round(a/2+12)),h=Math.max(10,c-42),d=Math.max(10,l-64),p=Math.max(10,h+10),f=(i+20)/2,_=51,v=i-31,m=3,u=2,T=-a/2+u+m+l/2,M=a/2-u-m-l/2,x=Math.max(0,l-85);let D=T,A=M;s==="left_open"?D=T+x:s==="right_open"&&(A=M-x);let P=D,R=A;this._doorAnim&&!this._doorAnim.isFrontOpen&&(P=this._doorAnim.currentLeftX??D,R=this._doorAnim.currentRightX??A);const S=t/2-30,y=t/2-10,w=r?this.materials.aluminum:this.materials.blackFrame,N=r?this.materials.perchGrayCap:this.materials.endCapMaterial,F=new it().makeBasis(new I(0,0,-1),new I(0,1,0),new I(1,0,0)),B=new Ct().setFromRotationMatrix(F),U=new it().makeBasis(new I(0,0,1),new I(1,0,0),new I(0,1,0)),k=new Ct().setFromRotationMatrix(U),K=me=>{const ge=new lt;this.addFrameMember(r?"2020_flat":"2020",l,new I(0,_,0),B,"扉下フレーム2020",w,"right",ge),this.addFrameMember(r?"2020_flat":"2020",l,new I(0,v,0),B,"扉上フレーム2020",w,"right",ge),this.addFrameMember("2040",h,new I(-l/2+17,f,0),k,"扉左縦フレーム2040",w,null,ge),this.addFrameMember("2040",h,new I(l/2-17,f,0),k,"扉右縦フレーム2040",w,null,ge);const X=new ke(d,p,3);this.activeGeometries.push(X);const Q=new q(X,this.materials.acrylic);Q.position.set(0,f,0),Q.castShadow=!0,ge.add(Q);const Me=new Ct(0,-Math.PI/2,0),O=new Ct(0,Math.PI/2,0);if(this.addDoorEndCap(-l/2-1.5,_,0,Me,N,ge),this.addDoorEndCap(l/2+1.5,_,0,O,N,ge),this.addDoorEndCap(-l/2-1.5,v,0,Me,N,ge),this.addDoorEndCap(l/2+1.5,v,0,O,N,ge),me){this.addFrameMember("2040",94,new I(-l/2+17,f,20),k,"左扉スペーサー2040",w,null,ge);const Z=new Ct(-Math.PI/2,0,0),he=new Ct(Math.PI/2,0,0);this.addEndCap2040(-l/2+17,f+47+1.5,20,Z,N,ge),this.addEndCap2040(-l/2+17,f-47-1.5,20,he,N,ge);const ue=this.createSlideLatchMesh(!0);ue.position.set(-l/2+17,f,30),ge.add(ue),ge.userData.latchKnob=ue.userData.knobPivot}else{const Z=this.createSlideLatchMesh(!1);Z.position.set(l/2-17,f,10),ge.add(Z),ge.userData.latchKnob=Z.userData.knobPivot}return ge},V=K(!0);V.position.set(P,0,S),this.doorGroup.add(V);const ae=K(!1);ae.position.set(R,0,y),this.doorGroup.add(ae);const ie=this.createStrikerAssembly(!0);ie.position.set(-e/2,f,t/2),this.doorGroup.add(ie);const ce=this.createStrikerAssembly(!1);ce.position.set(e/2,f,t/2),this.doorGroup.add(ce),this._doorAnim={isFramed:!0,leftDoor:V,rightDoor:ae,leftLatchKnob:V.userData.latchKnob,rightLatchKnob:ae.userData.latchKnob,baseLeftCenterX:T,baseRightCenterX:M,leftKnobGroup:null,rightKnobGroup:null,lockGroup:null,leftKnobOffsetX:0,rightKnobOffsetX:0,lockOffsetX:0,currentLeftX:P,currentRightX:R,targetLeftX:D,targetRightX:A,animating:P!==D||R!==A,startLeftX:P,startRightX:R,startTime:performance.now(),duration:1600}}buildDoors(){this.clearGroup(this.doorGroup);const{W:e,D:t,H:i,cageType:s,frontWindowH:o,doorState:r,hasDoorAntiFlex:a,frameColor:c}=this.params;if(s==="A_FRAMED"){this.buildFramedDoors();return}if(s==="A_FRONT"){this.buildFrontOpenDoor();return}const l=e-40;let h=(l+30)/2;a&&(h-=2);let d=0;const p=i-20;if(s==="A"){const ge=this.params.frontWideFrame||"2x";ge==="3x"?d=60:ge==="2x"?d=40:d=20}else d=40+o;const f=Math.max(10,p-d),_=t/2-10;this.buildGlassRails(l,d,p,_),a&&this.buildAntiFlexRails(l,f,d,p,_,c);const v=Math.max(10,f-9),m=d+2.5+v/2,u=3,T=new ke(h,v,u);this.activeGeometries.push(T);const M=Math.max(0,h-50),x=_-3.25,D=_+3.25,A=a?2:0,P=-l/2+A+h/2,R=l/2-A-h/2;let S=P,y=R;r==="left_open"?S=P+M:r==="right_open"&&(y=R-M);let w=S,N=y;this._doorAnim&&(w=this._doorAnim.currentLeftX,N=this._doorAnim.currentRightX);const F=new q(T,this.materials.doorGlassLeft);F.position.set(w,m,x),F.castShadow=!1,this.doorGroup.add(F);const B=-h/2+15,U=this.addKnobScrew(w+B,m,x+u/2),k=new q(T,this.materials.doorGlassRight);k.position.set(N,m,D),k.castShadow=!1,this.doorGroup.add(k);const K=h/2-15,V=this.addKnobScrew(N+K,m,D+u/2),ie=m-v/2+20,ce=-h/2+15,me=this.addDoorLock(N+ce,ie,D+u/2);this._doorAnim={leftDoor:F,rightDoor:k,leftKnobGroup:U,rightKnobGroup:V,lockGroup:me,leftKnobOffsetX:B,rightKnobOffsetX:K,lockOffsetX:ce,currentLeftX:w,currentRightX:N,targetLeftX:S,targetRightX:y,animating:w!==S||N!==y,startLeftX:w,startRightX:N,startTime:performance.now(),duration:3e3}}addCountersunkPhillipsScrew(e,t,i,s,o=0){const r=new $e(3.5,2,1.2,16);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const a=new q(r,this.materials.screwSilver);a.position.set(t,i,s),e.add(a);const c=new ke(3.8,.7,.4),l=new ke(.7,3.8,.4);this.activeGeometries.push(c,l);const h=new q(c,this.materials.screwSlot),d=new q(l,this.materials.screwSlot);h.position.set(t,i,s+.5),d.position.set(t,i,s+.5),o!==0&&(h.rotation.z=o,d.rotation.z=o),e.add(h),e.add(d)}buildFrontOpenDoor(){const{W:e,D:t,H:i,doorState:s}=this.params;let o=40;const r=this.params.frontWideFrame||"2x";r==="3x"?o=60:r==="2x"?o=40:o=20;const a=i-20,c=o-18,l=a+18,h=l-c,d=(c+l)/2,p=e-2-21.3,f=3,_=t/2,v=-e/2+21.3,m=e/2-2,u=(v+m)/2,T=c+h*1/4,M=c+h*3/4,x=19,D=52,A=-h/4+D/2,P=-h/4-D/2,R=h/4+D/2,S=h/4-D/2,y=10,w=p/2,N=h/2,F=Math.min(y,w/4,N/4),B=this.params.doorHingeSide==="right",U=new gt;B?(U.moveTo(-w+F,-N),U.lineTo(w-F,-N),U.absarc(w-F,-N+F,F,-Math.PI/2,0,!1),U.lineTo(w,N-F),U.absarc(w-F,N-F,F,0,Math.PI/2,!1),U.lineTo(-w+F,N),U.absarc(-w+F,N-F,F,Math.PI/2,Math.PI,!1),U.lineTo(-w,R),U.lineTo(-w+x,R),U.lineTo(-w+x,S),U.lineTo(-w,S),U.lineTo(-w,A),U.lineTo(-w+x,A),U.lineTo(-w+x,P),U.lineTo(-w,P),U.lineTo(-w,-N+F),U.absarc(-w+F,-N+F,F,Math.PI,Math.PI*1.5,!1)):(U.moveTo(-w+F,-N),U.lineTo(w-F,-N),U.absarc(w-F,-N+F,F,-Math.PI/2,0,!1),U.lineTo(w,P),U.lineTo(w-x,P),U.lineTo(w-x,A),U.lineTo(w,A),U.lineTo(w,S),U.lineTo(w-x,S),U.lineTo(w-x,R),U.lineTo(w,R),U.lineTo(w,N-F),U.absarc(w-F,N-F,F,0,Math.PI/2,!1),U.lineTo(-w+F,N),U.absarc(-w+F,N-F,F,Math.PI/2,Math.PI,!1),U.lineTo(-w,-N+F),U.absarc(-w+F,-N+F,F,Math.PI,Math.PI*1.5,!1));const k={steps:1,depth:f,bevelEnabled:!1},K=new ct(U,k);this.activeGeometries.push(K);const V=new q(K,this.materials.doorGlassRight);V.castShadow=!1;const ae=B?e/2-10-11.25:-e/2+10+11.25,ie=_+f,ce=new lt;ce.name="FrontOpenDoorPivot",ce.position.set(ae,0,ie),V.position.set(u-ae,d,-f),ce.add(V);const me=B?e/2-10:-e/2+10,ge=B?-e/2+10:e/2-10;this.addHingeTH31(me,ae,M,_,f,ce,B),this.addHingeTH31(me,ae,T,_,f,ce,B);const X=[];this.addLockC1249(ge,M,_,f,ae,ce,X,B),this.addLockC1249(ge,T,_,f,ae,ce,X,B),this.doorGroup.add(ce);const Q=s==="open"||s==="left_open"||s==="right_open",Me=Q?B?Math.PI*(120/180):-Math.PI*(120/180):0,O=Q?B?-Math.PI*1.5:Math.PI*1.5:0;let Z=Me,he=O;this._doorAnim&&typeof this._doorAnim.currentRotY=="number"&&(Z=this._doorAnim.currentRotY,he=this._doorAnim.currentLockRotZ??O),ce.rotation.y=Z;for(const ue of X)ue.rotation.z=he;this._doorAnim={isFrontOpen:!0,doorPivot:ce,lockPivots:X,currentRotY:Z,targetRotY:Me,currentLockRotZ:he,targetLockRotZ:O,startRotY:Z,startLockRotZ:he,animating:Math.abs(Z-Me)>.001||Math.abs(he-O)>.001,startTime:performance.now(),duration:2200}}addHingeTH31(e,t,i,s,o,r,a=!1){const c=this.materials.handleMaterial,l=s+o,h=new ke(16,52,o);this.activeGeometries.push(h);const d=new q(h,this.materials.acrylic);d.position.set(e,i,s+o/2),this.doorGroup.add(d);const p=new ke(18,50,1.5);this.activeGeometries.push(p);const f=new q(p,c),_=a?t+9:t-9;f.position.set(_,i,l+.75),f.castShadow=!0,this.doorGroup.add(f);const v=e;for(const A of[-17,8.5])this.addCountersunkPhillipsScrew(this.doorGroup,v,i+A,l+1.5,Math.PI/4);const m=new $e(2.5,2.5,50,16);this.activeGeometries.push(m);const u=new q(m,c);u.position.set(0,i,0),r.add(u);const T=new ke(18,50,1.5);this.activeGeometries.push(T);const M=new q(T,c),x=a?-9:9;M.position.set(x,i,.75),M.castShadow=!0,r.add(M);const D=a?-11.25:11.25;for(const A of[-8.5,17])this.addCountersunkPhillipsScrew(r,D,i+A,1.5,Math.PI/6)}addLockC1249(e,t,i,s,o,r,a,c=!1){const l=this.materials.handleMaterial,h=i+s,d=new ke(16,48,s);this.activeGeometries.push(d);const p=new q(d,this.materials.acrylic);p.position.set(e,t,i+s/2),this.doorGroup.add(p);const f=new ke(16,46,2);this.activeGeometries.push(f);const _=new q(f,l);_.position.set(e,t,h+1),this.doorGroup.add(_);for(const B of[-15,15])this.addCountersunkPhillipsScrew(this.doorGroup,e,t+B,h+2,Math.PI/4);const v=new ke(14,16,12);this.activeGeometries.push(v);const m=new q(v,l);m.position.set(e,t,h+2+6),this.doorGroup.add(m);const T=(c?-this.params.W/2+29:this.params.W/2-29)-o,M=new ke(16,46,2);this.activeGeometries.push(M);const x=new q(M,l);x.position.set(T,t,1),r.add(x);for(const B of[-15,15])this.addCountersunkPhillipsScrew(r,T,t+B,2,Math.PI/3);const D=new lt;D.name="LockArmPivot",D.position.set(T,t,2);const A=new $e(3,3,3,16);A.rotateX(Math.PI/2),this.activeGeometries.push(A);const P=new q(A,l);P.position.set(0,0,1.5),D.add(P);const R=new ke(38,14,2.5);this.activeGeometries.push(R);const S=new q(R,l),y=c?-19:19;S.position.set(y,0,6),D.add(S);const w=new $e(3.5,3.5,14,16);w.rotateX(Math.PI/2),this.activeGeometries.push(w);const N=new q(w,l),F=c?-18:18;N.position.set(F,0,13),D.add(N),r.add(D),a&&a.push(D)}buildFramedDoorPartsRecord(){const{W:e,H:t,frameColor:i}=this.params,s=i==="silver",o=Math.max(10,e-40),r=Math.max(10,t-60),a=Math.max(10,Math.round(o/2+12)),c=Math.max(10,r-42),l=Math.max(10,a-64),h=Math.max(10,c+10),d=s?"AFSF-2020-4":"AFS-2020-4-BK",p=`${d}-${a}`;this.recordPart(p,`${a} mm`,4,"正面枠囲い扉 幅方向フレーム (上下各2本・計4本)","frame",{partCode:d,lengthMm:a,unitType:"m"});const f=s?"AFSF-2040-4":"AFS-2040-4-BK",_=`${f}-${c}`;this.recordPart(_,`${c} mm`,4,"正面枠囲い扉 高さ方向フレーム (左右各2本・計4本)","frame",{partCode:f,lengthMm:c,unitType:"m"});const v=s?"ECP-2020-4-GY":"ECP-2020-4",m=s?"ECP-2020-4-GY (グレー)":"ECP-2020-4 (ブラック)";this.recordPart(v,"-",8,`正面枠囲い扉 幅フレーム端部 (${m})`,"rail_cap",{partCode:v,unitType:"piece"}),this.recordPart("透明アクリル 3.0mm 扉板",`${l} x ${h} mm`,2,"正面枠囲い扉 (透明押出板3.0mm)","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:l,heightMm:h,unitType:"m2"});const u=a-22,T=14;this.recordPart("アクリル黒両面マット 3.0mm (スライド部材)",`${u} x ${T} mm`,4,"正面枠囲い扉 スライド用部材 (厚さ3mm)","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:u,heightMm:T,unitType:"m2"});const M=s?"AFS-2040-4":"AFS-2040-4-BK",x=`${M}-94`;this.recordPart(x,"94 mm",1,"正面枠囲い扉 左扉ラッチ高さ合わせ用スペーサーフレーム","frame",{partCode:M,lengthMm:94,unitType:"m"});const D=s?"ECP-2040-4-GY":"ECP-2040-4",A=s?"ECP-2040-4-GY (グレー)":"ECP-2040-4 (ブラック)";this.recordPart(D,"-",2,`正面枠囲い扉 左扉スペーサー端部 (${A})`,"rail_cap",{partCode:D,unitType:"piece"}),this.recordPart("タキゲン CP-294N スライドラッチ","70 x 25 mm",2,"正面枠囲い扉 ワンタッチスライドラッチ (左右各1個)","other",{partCode:"CP-294N",unitType:"piece"}),this.recordPart("アクリル丸板 透明 φ20mm t5mm (穴加工済)","φ20 x t5 mm",4,"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)","other",{partCode:"ACRYLIC-ROUND-20-5",unitType:"piece"})}buildDoorPartsRecord(){const{W:e,H:t,cageType:i,frontWindowH:s,hasDoorAntiFlex:o,frameColor:r}=this.params;if(i==="A_FRAMED"){this.buildFramedDoorPartsRecord();return}if(i==="A_FRONT"){const u=e-2-21.3;let T=40;const M=this.params.frontWideFrame||"2x";M==="3x"?T=60:M==="2x"?T=40:T=20;const D=Math.max(10,t-20-T)+36,A=this.params.doorHingeSide==="right",P=A?"正面 右ヒンジ・左打掛オープン扉":"正面 左ヒンジ・右打掛オープン扉";this.recordPart("透明アクリル扉 3.0mm（正面）（前開き）",`${Math.round(u*10)/10} x ${Math.round(D)} mm`,1,`${P} (切欠き・穴加工済)`,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(u*10)/10,heightMm:Math.round(D),unitType:"m2"});const R=A?"前開き扉 右ヒンジ (2箇所)":"前開き扉 左ヒンジ (2箇所)";this.recordPart("TH-31 ステンレス蝶番","50 x 36 mm (SUS304)",2,R,"rail_cap",{partCode:"TH-31",lengthMm:null,unitType:"piece"});const S=A?"前開き扉 左打掛ロック (2箇所)":"前開き扉 右打掛ロック (2箇所)";this.recordPart("C-1249-4 ステンレス打掛","58 x 46 mm (SUS304)",2,S,"rail_cap",{partCode:"C-1249-4",lengthMm:null,unitType:"piece"});const y=A?"前開き扉 右ヒンジ固定座 (フレーム隙間埋め用)":"前開き扉 左ヒンジ固定座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ヒンジ座板 (切削加工)","16 x 52 mm",2,y,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:52,unitType:"m2"});const w=A?"前開き扉 左打掛受具座 (フレーム隙間埋め用)":"前開き扉 右打掛受具座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ロック受座板 (切削加工)","16 x 48 mm",2,w,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:48,unitType:"m2"});return}const a=e-40;let c=(a+30)/2;o&&(c-=2);let l=0;const h=t-20;if(i==="A"){const u=this.params.frontWideFrame||"2x";u==="3x"?l=60:u==="2x"?l=40:l=20}else l=40+s;const d=Math.max(10,h-l),p=Math.max(10,d-9),f=a,_=r==="black"?"BK":"GY",v=`PGRU-03-4-${_}`,m=`PGRL-03-4-${_}`;if(this.recordPart(v,f,1,"正面開口 上部 (間口高12mm縮小)","frame",{partCode:v,lengthMm:f,unitType:"m"}),this.recordPart(m,f,1,"正面開口 下部 (間口高7mm縮小)","frame",{partCode:m,lengthMm:f,unitType:"m"}),o){const u=Math.max(10,d-25);this.recordPart(m,u,2,"正面スライド扉 左右端 (扉たわみ防止)","frame",{partCode:m,lengthMm:u,unitType:"m"})}this.recordPart("透明アクリル扉 3.0mm（正面）（スライド扉）",`${Math.round(c)} x ${Math.round(p)} mm`,2,"正面 引き違い (重なり30mm)","panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(c),heightMm:Math.round(p),unitType:"m2"}),this.recordPart("段付きローレットノブ (SUS303, RNSFS4)","外径φ16 / ボスφ8 / 全長9.5mm",2,"扉端から15mm・上下中央","other"),this.recordPart("プッシュ式スライド扉鍵 (C-108)","外径φ18.5mm / 全長30mm (キー付)",1,"右スライド扉 下部 (端から15mm・下端から20mm)","other")}updateDoorAnimation(){if(!this._doorAnim||!this._doorAnim.animating)return;const e=this._doorAnim,t=performance.now()-e.startTime,i=Math.min(1,t/e.duration),s=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;if(e.isFrontOpen){if(e.targetRotY!==0){const r=Math.min(1,Math.max(0,i/.35)),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*a;const c=Math.min(1,Math.max(0,(i-.35)/.65)),l=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*l}else{const r=Math.min(1,Math.max(0,i/.65)),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*a;const c=Math.min(1,Math.max(0,(i-.65)/.35)),l=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*l}if(e.doorPivot&&(e.doorPivot.rotation.y=e.currentRotY),e.lockPivots)for(const r of e.lockPivots)r.rotation.z=e.currentLockRotZ;i>=1&&(e.animating=!1);return}if(e.isFramed){e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX);const o=e.targetLeftX!==e.startLeftX,r=e.targetRightX!==e.startRightX,a=.28;if(o&&e.leftLatchKnob){const c=e.targetLeftX>e.baseLeftCenterX;let l=0;if(c)if(i<.18){const h=i/.18;l=a*(h*h*(3-2*h))}else if(i<.35)l=a;else if(i<.48){const h=(i-.35)/.13;l=a*(1-h*h*(3-2*h))}else l=0;else if(i<.65)l=0;else if(i<.82){const h=(i-.65)/.17;l=a*(h*h*(3-2*h))}else if(i<.9){const h=(i-.82)/.08;l=a*(1-h*h)}else l=0;e.leftLatchKnob.rotation.y=l}else e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0);if(r&&e.rightLatchKnob){const c=e.targetRightX<e.baseRightCenterX;let l=0;if(c)if(i<.18){const h=i/.18;l=a*(h*h*(3-2*h))}else if(i<.35)l=a;else if(i<.48){const h=(i-.35)/.13;l=a*(1-h*h*(3-2*h))}else l=0;else if(i<.65)l=0;else if(i<.82){const h=(i-.65)/.17;l=a*(h*h*(3-2*h))}else if(i<.9){const h=(i-.82)/.08;l=a*(1-h*h)}else l=0;e.rightLatchKnob.rotation.y=-l}else e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0);i>=1&&(e.animating=!1,e.leftLatchKnob&&(e.leftLatchKnob.rotation.y=0),e.rightLatchKnob&&(e.rightLatchKnob.rotation.y=0));return}e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.leftKnobGroup&&(e.leftKnobGroup.position.x=e.currentLeftX+e.leftKnobOffsetX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX),e.rightKnobGroup&&(e.rightKnobGroup.position.x=e.currentRightX+e.rightKnobOffsetX),e.lockGroup&&(e.lockGroup.position.x=e.currentRightX+e.lockOffsetX),i>=1&&(e.animating=!1)}addKnobScrew(e,t,i){const s=new lt;s.position.set(e,t,i);const o=new $e(4,4,6,24);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const r=new q(o,this.materials.handleMaterial);r.position.set(0,0,3),r.castShadow=!0,s.add(r);const a=new $e(8,8,3.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const c=new q(a,this.materials.handleMaterial);c.position.set(0,0,6+1.75),c.castShadow=!0,s.add(c);const l=new $e(2,2,3,16);l.rotateX(Math.PI/2),this.activeGeometries.push(l);const h=new q(l,this.materials.grommetMaterial);return h.position.set(0,0,9.5-1.5+.1),s.add(h),this.doorGroup.add(s),s}addDoorLock(e,t,i){const s=new lt;s.position.set(e,t,i);const o=new $e(9.25,9.25,2.5,32);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const r=new q(o,this.materials.handleMaterial);r.position.set(0,0,1.25),r.castShadow=!0,s.add(r);const a=new $e(7.75,7.75,20.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const c=new q(a,this.materials.handleMaterial);c.position.set(0,0,2.5+10.25),c.castShadow=!0,s.add(c);const l=new $e(5.5,5.5,.8,32);l.rotateX(Math.PI/2),this.activeGeometries.push(l);const h=new q(l,this.materials.handleMaterial);h.position.set(0,0,23+.4),s.add(h);const d=new ke(1.4,6.5,1.2);this.activeGeometries.push(d);const p=new q(d,this.materials.grommetMaterial);return p.position.set(0,0,23.6),s.add(p),this.doorGroup.add(s),s}addThumbScrew(e,t,i,s){const o=new lt;o.position.set(e,t,i);const r=new $e(4,4,1.5,24);r.rotateZ(Math.PI/2),this.activeGeometries.push(r);const a=new q(r,this.materials.thumbScrewMaterial);a.position.set(s*.75,0,0),a.castShadow=!0,o.add(a);const c=new $e(7.5,7.5,4.5,24);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);const l=new q(c,this.materials.thumbScrewMaterial);l.position.set(s*(1.5+2.25),0,0),l.castShadow=!0,o.add(l);const h=new $e(3,3,.2,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);const d=new q(h,this.materials.grommetMaterial);return d.position.set(-s*.1,0,0),o.add(d),this.panelGroup.add(o),o}addBottomThumbScrew(e,t,i){const s=new lt;s.position.set(e,t,i);const o=new $e(4,4,1.5,24);this.activeGeometries.push(o);const r=new q(o,this.materials.thumbScrewMaterial);r.position.set(0,-.75,0),r.castShadow=!0,s.add(r);const a=new $e(7.5,7.5,4.5,24);this.activeGeometries.push(a);const c=new q(a,this.materials.thumbScrewMaterial);c.position.set(0,-3.75,0),c.castShadow=!0,s.add(c);const l=new $e(3,3,.2,16);this.activeGeometries.push(l);const h=new q(l,this.materials.grommetMaterial);return h.position.set(0,.1,0),s.add(h),this.panelGroup.add(s),s}buildFeet(){const{W:e,D:t}=this.params,i=11,s=-i/2,o=[-e/2+10,e/2-10],r=[t/2-50,-t/2+50],a=new $e(9,7.5,i,32);this.activeGeometries.push(a);const c=new $e(4,4,4,24);this.activeGeometries.push(c);const l=new $e(3.5,3.5,.8,24);this.activeGeometries.push(l);for(const h of o)for(const d of r){const p=new q(a,this.materials.grommetMaterial);p.position.set(h,s,d),p.castShadow=!0,p.receiveShadow=!0,this.feetGroup.add(p);const f=new q(c,this.materials.railMaterial);f.position.set(h,-i+2,d),this.feetGroup.add(f);const _=new q(l,this.materials.handleMaterial);_.position.set(h,-i+3.6,d),this.feetGroup.add(_)}this.recordPart("ゴム脚 (黒)","外径φ18(上)/φ15(下) x H11mm (M4用座金入)",4,"床面 奥行きフレーム下面 (前後端から50mm・接地用)","other")}buildCasters(){const{W:e,D:t}=this.params,i=[-e/2+10,e/2-10],s=[t/2-7-20,-(t/2-7)+20],o=new ke(20,3,40);this.activeGeometries.push(o);const r=new $e(10,10,12,24);this.activeGeometries.push(r);const a=new ke(2.5,28,22);this.activeGeometries.push(a);const c=new ke(2.5,28,22);this.activeGeometries.push(c);const l=new $e(25,25,20,32);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);const h=new $e(4,4,24,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);for(const d of i)for(const p of s){const f=new lt;f.position.set(d,0,p);const _=new q(o,this.materials.casterBracket);_.position.set(0,-1.5,0),_.castShadow=!0,f.add(_);const v=new q(r,this.materials.casterBracket);v.position.set(0,-9,0),f.add(v);const m=new q(a,this.materials.casterBracket);m.position.set(-10,-27,0),f.add(m);const u=new q(c,this.materials.casterBracket);u.position.set(10,-27,0),f.add(u);const T=new q(l,this.materials.casterWheel);T.position.set(0,-41,0),T.castShadow=!0,T.receiveShadow=!0,f.add(T);const M=new q(h,this.materials.casterBracket);M.position.set(0,-41,0),f.add(M),this.feetGroup.add(f)}this.recordPart("自在キャスター","車輪径φ50 / 取付高66mm",4,"床面 奥行きフレーム下面 (端から7mm控え)","other")}addPerch2020GrayCap(e,t,i){const a=new gt;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},l=new ct(a,c);l.translate(0,0,-1.5),this.activeGeometries.push(l);const h=new q(l,this.materials.perchGrayCap);return h.position.set(e,t,i),h.castShadow=!0,h.receiveShadow=!0,h.name="止まり木・ECP-2020-4-GY",this.perchGroup.add(h),h}addPerch1530BlackCap(e,t,i){const a=new gt;a.moveTo(-7.5+1,-15),a.lineTo(7.5-1,-15),a.absarc(7.5-1,-14,1,-Math.PI/2,0,!1),a.lineTo(7.5,14),a.absarc(7.5-1,14,1,0,Math.PI/2,!1),a.lineTo(-7.5+1,15),a.absarc(-7.5+1,14,1,Math.PI/2,Math.PI,!1),a.lineTo(-7.5,-14),a.absarc(-7.5+1,-14,1,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.2,bevelThickness:.2},l=new ct(a,c);l.rotateX(Math.PI/2),l.translate(0,-1.5,0),this.activeGeometries.push(l);const h=new q(l,this.materials.perchBlackCap);return h.position.set(e,t,i),h.castShadow=!0,h.receiveShadow=!0,h.name="止まり木・ECP-1530-6",this.perchGroup.add(h),h}addPerchThumbScrew(e,t,i){const r=new $e(5,5,5,24);r.translate(0,5/2,0),this.activeGeometries.push(r);const a=new q(r,this.materials.perchWhiteScrew);return a.position.set(e,t,i),a.castShadow=!0,a.name="止まり木・M3つまみネジ",this.perchGroup.add(a),a}buildPerch(){const{W:e,D:t,H:i}=this.params,s=e-120,o=Math.floor(s/7)*7,r=Math.max(10,o-15),a=Math.max(10,Math.round(i/2)),c=Math.max(0,a-50-15),l=Math.max(10,Math.floor(c/20)*10),h=15+l,d=this.materials.perchAluminum,p=this.materials.handleMaterial,f=o/2,_=i-20-10,v=90,m=new Ct(0,0,0),u=[-f,f];for(const R of u){const S=au(v,"bottom");S.translate(0,0,-v/2),this.activeGeometries.push(S);const y=new q(S,d);y.position.set(R,_,0),y.rotation.copy(m),y.castShadow=!0,y.receiveShadow=!0,y.name="止まり木・天板固定フレーム2020",this.perchGroup.add(y),this.addPerch2020GrayCap(R,_,v/2),this.addPerch2020GrayCap(R,_,-v/2);const w=[25,-25];for(const N of w)this.addPerchThumbScrew(R,i-20,N)}const T=i-40,M=T-a/2,x=T-a;for(const R of u){const S=bv(a);S.translate(0,0,-a/2),S.rotateX(Math.PI/2),this.activeGeometries.push(S);const y=new q(S,d);y.position.set(R,M,0),y.castShadow=!0,y.receiveShadow=!0,y.name="止まり木・吊り下げフレーム1530",this.perchGroup.add(y),this.addPerch1530BlackCap(R,x,0);const w=[x+15,x+15+l,x+15+2*l];for(let N=0;N<w.length;N++){const F=w[N],B=R>0?1:-1,U=new $e(3,3,.4,16);U.rotateZ(Math.PI/2),this.activeGeometries.push(U);const k=new q(U,this.materials.railMaterial);k.position.set(R+B*7.4,F,0),this.perchGroup.add(k)}}const D=x+h,A=new $e(15,15,r,32);A.rotateZ(Math.PI/2),this.activeGeometries.push(A);const P=new q(A,d);P.position.set(0,D,0),P.castShadow=!0,P.receiveShadow=!0,P.name="止まり木・アルミ丸パイプASTP-30",this.perchGroup.add(P);for(const R of u){const S=R>0?1:-1,y=new $e(5,5,3.5,16);y.rotateZ(Math.PI/2),this.activeGeometries.push(y);const w=new q(y,p);w.position.set(R+S*9.2,D,0),w.castShadow=!0,this.perchGroup.add(w)}this.recordPart("AFSF-2020-4-90",90,2,"止まり木 天板固定フレーム (溝なし下面・シルバー)","frame"),this.recordPart(`AFS-1530-6-${a}`,a,2,"止まり木 垂直吊り下げフレーム (高さ調整3穴加工・シルバー)","frame"),this.recordPart(`ASTP-30-${r}`,r,1,"止まり木 φ30アルミ丸パイプ (シルバー)","frame"),this.recordPart("ECP-2020-4-GY","20x20mm (グレー)",4,"止まり木 天板固定フレーム両端用エンドキャップ","rail_cap"),this.recordPart("ECP-1530-6","15x30mm (ブラック)",2,"止まり木 吊り下げフレーム下端用エンドキャップ","rail_cap"),this.recordPart("M3x8 つまみネジ (白)","M3 x L8mm",4,"止まり木 天板パンチング固定用つまみネジ","other"),this.recordPart("M6 ボルト","M6 x L20mm",2,"止まり木 φ30丸棒固定用ボルト","other")}buildCaulking(){const{W:e,D:t,hasFloorReinforcement:i}=this.params,s=this.materials.caulkingMaterial,o=5,r=3,a=T=>{const M=new gt;M.moveTo(0,0),M.lineTo(o,0),M.lineTo(0,r),M.closePath();const x=new ct(M,{depth:T,bevelEnabled:!1});return x.translate(0,0,-T/2),this.activeGeometries.push(x),x},c=Math.max(10,e-40),l=a(c),h=new q(l,s);h.rotation.y=-Math.PI/2,h.position.set(0,20,-t/2+20),this.caulkingGroup.add(h);const d=a(c),p=new q(d,s);p.rotation.y=Math.PI/2,p.position.set(0,20,t/2-20),this.caulkingGroup.add(p);const f=Math.max(10,t-50),_=a(f),v=new q(_,s);v.position.set(-e/2+20,20,0),this.caulkingGroup.add(v);const m=a(f),u=new q(m,s);if(u.rotation.y=Math.PI,u.position.set(e/2-20,20,0),this.caulkingGroup.add(u),i){const T=a(f),M=new q(T,s);M.rotation.y=Math.PI,M.position.set(-10,20,0),this.caulkingGroup.add(M);const x=a(f),D=new q(x,s);D.position.set(10,20,0),this.caulkingGroup.add(D)}}buildRubberPacking(){const{W:e,D:t,H:i,hasSideReinforcement:s,sideOpeningH:o}=this.params,r=this.params.panelConfig||{},a=this.materials.rubberPackingMaterial;let c=0;const l=(_,v,m,u,T,M,x)=>{const D=new ke(_,v,m);this.activeGeometries.push(D);const A=new q(D,a);A.position.set(u,T,M),this.rubberPackingGroup.add(A),c+=x},h=1.6,d=3;if((r.back||"acrylic")!=="polyca"){const _=Math.max(10,e-40),v=Math.max(10,i-40),m=-t/2+20+h/2;l(_,d,h,0,20+d/2,m,_),l(d,v,h,-e/2+20+d/2,i/2,m,v),l(d,v,h,e/2-20-d/2,i/2,m,v)}const f=Math.max(10,t-40);if(s){const _=r.sideLower||"acrylic",v=r.sideUpper||"punching",m=Math.max(10,o),u=Math.max(10,i-60-m);if(_!=="polyca")for(const T of[-1,1]){const M=T*(e/2-20)-T*(h/2),x=20+u/2;l(h,d,f,M,20+d/2,0,f),l(h,u,d,M,x,-t/2+20+d/2,u),l(h,u,d,M,x,t/2-20-d/2,u)}if(v!=="polyca")for(const T of[-1,1]){const M=T*(e/2-20)-T*(h/2),x=20+u+20,D=x+m/2;l(h,d,f,M,x+d/2,0,f),l(h,m,d,M,D,-t/2+20+d/2,m),l(h,m,d,M,D,t/2-20-d/2,m)}}else if((r.side||"acrylic")!=="polyca"){const v=Math.max(10,i-40);for(const m of[-1,1]){const u=m*(e/2-20)-m*(h/2);l(h,d,f,u,20+d/2,0,f),l(h,v,d,u,i/2,-t/2+20+d/2,v),l(h,v,d,u,i/2,t/2-20-d/2,v)}}if(c>0){const _=Math.ceil(c/1e3);this.recordPart("モレ対策ゴムパッキン (グレー)",`${_} m`,1,`側面・背面 隙間モレ抑制用 (実施工長: ${Math.round(c)}mm / 1m単位積算)`,"other",{partCode:"NSCP1H-S-6",lengthMm:_*1e3,unitType:"m"})}}buildRoomDivider(){const{W:e,D:t,H:i,cageType:s,frontWideFrame:o,frontWindowH:r}=this.params,c=(this.params.panelConfig||{}).partition||"black_matte",l=Math.max(10,t-32),h=Math.max(10,i-23.5),d=3;let p=this.materials.blackMatteAcrylic,f="acrylic_black_matte_3_0",_="アクリル黒両面マット 3.0mm";if(c==="acrylic")p=this.materials.acrylic,f="acrylic_extrusion_3_0",_="透明アクリル 3.0mm";else if(c==="smoke_gray")p=this.materials.smokeGrayAcrylic,f="acrylic_smoke_gray_3_0",_="アクリル グレースモーク半透明 3.0mm";else if(c==="punching"){const Y=Ur(l,h,!1);this.activeTextures.push(Y),p=this.materials.createPunchingMaterial(Y),this.activeMaterials.push(p),f="pvc_punching_3_0",_="塩ビパンチングボード 透明 3.0mm"}const v=t/2-20,m=v-l,u=11.5,T=u+h,M=18,x=new gt;x.moveTo(v,u+M),x.lineTo(v,T),x.lineTo(m+M,T),x.lineTo(m,T-M),x.lineTo(m,u+M),x.lineTo(m+M,u),x.lineTo(v-M,u),x.lineTo(v,u+M);const D=new ct(x,{depth:d,bevelEnabled:!1}),A=D.attributes.position;for(let Y=0;Y<A.count;Y++){const $=A.getX(Y),de=A.getY(Y),se=A.getZ(Y);A.setXYZ(Y,se-d/2,de,$)}A.needsUpdate=!0;const P=D.attributes.uv;if(P){for(let Y=0;Y<P.count;Y++){const $=A.getZ(Y),de=A.getY(Y),se=($-m)/l,Se=(de-u)/h;P.setXY(Y,se,Se)}P.needsUpdate=!0}D.computeVertexNormals(),this.activeGeometries.push(D);const R=new q(D,p);R.castShadow=!0,R.receiveShadow=!0,R.name="２室分け仕切り板",this.dividerGroup.add(R),this.recordPart(`２室分け仕切り板 (${_})`,`${l} x ${h}`,1,`２室分け仕切り板後付け仕様 (${_})`,"panel",{panelCode:f,partCode:f,widthMm:l,heightMm:h});let S=30;if(s==="A"||s==="A_FRONT"){const Y=o||"2x";Y==="3x"?S=50:Y==="2x"?S=30:S=10}else S=20+(r||50)+10;const y=18,w=18,N=18,F=3.5,B=new gt;B.moveTo(0,0),B.lineTo(-w,0),B.lineTo(-w,-F),B.lineTo(-F,-F),B.lineTo(-F,-N),B.lineTo(0,-N),B.closePath();const U=new ct(B,{depth:y,bevelEnabled:!1}),k=U.attributes.position;for(let Y=0;Y<k.count;Y++){const $=k.getX(Y),de=k.getY(Y),se=k.getZ(Y);k.setXYZ(Y,-d/2+$,S-y/2+se,v+de)}k.needsUpdate=!0,U.computeVertexNormals(),this.activeGeometries.push(U);const K=new q(U,this.materials.perchAluminum);K.castShadow=!0,K.name="２室分け・ABL-2015-4",this.dividerGroup.add(K);const V=-d/2-w/2,ae=S,ie=v-F-1,ce=new $e(3.5,3.5,1.8,16);ce.rotateX(Math.PI/2),ce.translate(V,ae,ie),this.activeGeometries.push(ce);const me=new q(ce,this.materials.handleMaterial);me.name="２室分け・フレーム固定プラスネジ",this.dividerGroup.add(me);const ge=new ke(4,.8,.5);ge.translate(V,ae,ie-.7),this.activeGeometries.push(ge);const X=new q(ge,this.materials.wireMesh);this.dividerGroup.add(X);const Q=new ke(.8,4,.5);Q.translate(V,ae,ie-.7),this.activeGeometries.push(Q);const Me=new q(Q,this.materials.wireMesh);this.dividerGroup.add(Me);const O=-d/2-F-2.5,Z=S,he=v-N/2,ue=new $e(4.8,4.8,5,18);ue.rotateZ(Math.PI/2),ue.translate(O,Z,he),this.activeGeometries.push(ue);const xe=new q(ue,this.materials.perchWhiteScrew);xe.name="２室分け・M3つまみネジ(ブラケット固定)",this.dividerGroup.add(xe);const ee=i-20+d,re=ee+2,L=[{x:-3.5,z:-t/2+50},{x:3.5,z:-t/2+65},{x:-3.5,z:t/2-60},{x:3.5,z:t/2-75}];for(const Y of L){const $=new $e(4.5,4.5,4,16);$.translate(Y.x,re,Y.z),this.activeGeometries.push($);const de=new q($,this.materials.perchWhiteScrew);de.name="２室分け・天板M3つまみネジ",this.dividerGroup.add(de);const se=new $e(1.5,1.5,7,12);se.translate(Y.x,ee-3.5,Y.z),this.activeGeometries.push(se);const Se=new q(se,this.materials.handleMaterial);this.dividerGroup.add(Se)}this.recordPart("ABL-2015-4","20x15x15mm",1,"２室分け L字ブラケット ABL-2015-4 (シルバー)","rail_cap",{partCode:"ABL-2015-4",unitType:"piece"}),this.recordPart("M3 つまみネジ (白)","M3 x L8mm",5,"２室分け固定・倒れ防止用つまみネジ","other"),this.recordPart("M4 皿ネジ","M4 x L8mm",1,"２室分けフレーム固定用皿ネジ","other")}buildLed(){const{W:e,D:t,H:i,ledType:s,ledPower:o,ledBrightness:r=1,ledColorMode:a,ledRgbColor:c}=this.params;if(!s||s==="none")return;const l=i-32,h=i-20,d=(_,v,m,u,T,M,x)=>{const P=h-(l-m/2),R=(h+(l-m/2))/2;for(const X of[-1,1]){const Q=X*(_/2-35),Me=new ke(12,P,2.5);Me.translate(Q,R,u),this.activeGeometries.push(Me);const O=new q(Me,this.materials.ledBracket);O.name="LED天板吊り下げステー金具",this.ledGroup.add(O);const Z=new $e(2.5,2.5,3,12);Z.rotateX(Math.PI/2),Z.translate(Q,h-4,u+2.5/2),this.activeGeometries.push(Z);const he=new q(Z,this.materials.perchAluminum);this.ledGroup.add(he)}const S=new ke(_,m*.65,v);S.translate(0,l+m*.175,u),this.activeGeometries.push(S);const y=new q(S,this.materials.ledAluminum);y.name="LEDアルミボディ",this.ledGroup.add(y);const w=m*.45,N=v-2,F=l-m*.25;let B;B=new ke(_-4,w,N),B.translate(0,F,u),this.activeGeometries.push(B);const U=this.materials.ledEmissive.clone();if(x){const X=new qe(M);U.color=X,U.emissive=X,U.emissiveIntensity=Math.max(.5,(r||1)*4)}else U.color=new qe(15791094),U.emissive=new qe(0),U.emissiveIntensity=0;const k=new q(B,U);k.name="LED発光ディフューザー",this.ledGroup.add(k);const K=2.5;for(const X of[-1,1]){const Q=X*(_/2+K/2),Me=new ke(K,m+.8,v+.8);Me.translate(Q,l,u),this.activeGeometries.push(Me);const O=new q(Me,this.materials.perchGrayCap);this.ledGroup.add(O)}const V=1.8,ae=_/2+K,ie=e/2-25,ce=Math.max(10,ie-ae),me=new $e(V,V,ce,8);me.rotateZ(Math.PI/2),me.translate(ae+ce/2,l+2,u),this.activeGeometries.push(me);const ge=new q(me,this.materials.ledCable);ge.name="LED給電コード",this.ledGroup.add(ge)},p=(_,v,m=350,u=-t/2+55)=>{if(!o||v<=0)return;const T=new qe(_),M=e-44,x=t-44,D=i-44,A=i/2,P=new I(-M/2,22,-x/2),R=new I(M/2,i-22,x/2),S=new I(0,i-32,u),y=`
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,w=`
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
      `,N=new ke(M,D,x);N.translate(0,A,0),this.activeGeometries.push(N);const F=new Gn({vertexShader:y,fragmentShader:w,uniforms:{uColor:{value:T},uBoxMin:{value:P},uBoxMax:{value:R},uLightPos:{value:S},uBarL:{value:m},uIntensity:{value:v}},transparent:!0,blending:Uo,depthWrite:!1,side:zt});this.activeMaterials.push(F);const B=new q(N,F);B.name="ケージ室内大気グラデーションフォグ",this.ledGroup.add(B);const U=`
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
      `,k=new Yn(M,x);k.rotateX(-Math.PI/2),k.translate(0,20.6,0),this.activeGeometries.push(k);const K=new Gn({vertexShader:y,fragmentShader:U,uniforms:{uColor:{value:T},uBoxMin:{value:P},uBoxMax:{value:R},uLightPos:{value:S},uBarL:{value:m},uIntensity:{value:v}},transparent:!0,blending:Uo,depthWrite:!1});this.activeMaterials.push(K);const V=new q(k,K);V.name="床面LED受光グラデーション",this.ledGroup.add(V);const ae=`
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
      `,ie=new Yn(M,D);ie.translate(0,A,-t/2+20.6),this.activeGeometries.push(ie);const ce=new Gn({vertexShader:y,fragmentShader:ae,uniforms:{uColor:{value:T},uBoxMin:{value:P},uBoxMax:{value:R},uLightPos:{value:S},uBarL:{value:m},uIntensity:{value:v}},transparent:!0,blending:Uo,depthWrite:!1});this.activeMaterials.push(ce);const me=new q(ie,ce);me.name="背面LED受光グラデーション",this.ledGroup.add(me)},f=-t/2+55;switch(s){case"usb":{const _=Math.min(350,e-60);let v=16777215;a==="warm"?v=16754470:a==="all"&&(v=16769202),d(_,18,13,f,!1,v,!!o),p(v,r,_,f),this.recordPart("USB 二色60LEDアルミライトバー [4023]","350mm",1,"USB給電アルミライトバー (白＆電球色 3パターン切替)","other",{partCode:"LED-4023",unitType:"piece",isLedOption:!0,ledKey:"ledUsb"});break}case"rgbw":{const _=Math.min(530,e-60),v=c||"#ffffff";d(_,18,13,f,!1,v,!!o),p(v,r*1.15,_,f),this.recordPart("RGB+W LEDライトバー 30LED [6839]","530mm",1,"RGBフルカラー+独立ホワイト素子アルミバー","other",{partCode:"LED-6839",unitType:"piece",isLedOption:!0,ledKey:"ledRgbw"}),this.recordPart("RGB+W 専用コントローラー [8166]","リモコン付属",1,"調光・調色RFリモコン式コントローラー","other",{partCode:"LED-8166",unitType:"piece",isLedOption:!0}),this.recordPart("ACアダプター 12V 1.5A [6207]","12V 1.5A",1,"DC12V電源アダプター","other",{partCode:"LED-6207",unitType:"piece",isLedOption:!0}),this.recordPart("RGB+W用 5pin延長コード1m [6433]","1m",1,"配線取り回し用 5pin延長コード","other",{partCode:"LED-6433",unitType:"piece",isLedOption:!0});break}}}recordPart(e,t,i,s,o="other",r={}){const a=typeof t=="number"?`${Math.round(t)} mm`:t,c=typeof t=="number"?Math.round(t):r.lengthMm||null;let l=e;if(typeof t=="number"&&e.includes("-")){const h=e.split("-");isNaN(h[h.length-1])||(l=h.slice(0,-1).join("-"))}this.partsList.push({name:e,size:a,count:i,note:s,category:o,lengthMm:c,partCode:r.partCode||l,unitType:r.unitType||(typeof t=="number"?"m":"piece"),...r})}getPartsSummary(){return this.partsList}}class Cv{constructor(){this.group=new lt,this.group.name="DimensionLines",this.lineMaterial=new Lc({color:165063,linewidth:2,depthTest:!1,transparent:!0,opacity:.85}),this.textSprites=[],this.activeGeometries=[]}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e)}for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.textSprites)e.material.map&&e.material.map.dispose(),e.material.dispose();this.textSprites=[]}createTextSprite(e,t="#38bdf8",i="#ffffff",s="rgba(20, 26, 38, 0.88)"){const o=document.createElement("canvas");o.width=384,o.height=120;const r=o.getContext("2d");r.fillStyle=s,r.strokeStyle=t,r.lineWidth=4;const a=24;r.beginPath(),r.roundRect(10,10,364,100,a),r.fill(),r.stroke(),r.font="bold 44px sans-serif",r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.fillText(e,192,60);const c=new ha(o);c.minFilter=Bt;const l=new Ad({map:c,depthTest:!1,transparent:!0}),h=new r1(l);return h.scale.set(90,30,1),this.textSprites.push(h),h}update(e){this.clear();const{W:t,D:i,H:s,cageType:o,frontWindowH:r,hasSideReinforcement:a,sideOpeningH:c}=e,l=5,h=i/2+55,d=this.createTextSprite(`W: ${t} mm`,"#38bdf8","#ffffff");d.position.set(0,l,h),this.group.add(d);const p=t/2+55,f=5,_=this.createTextSprite(`D: ${i} mm`,"#38bdf8","#ffffff");_.position.set(p,f,0),this.group.add(_);const v=-t/2-55,m=i/2,u=this.createTextSprite(`H: ${s} mm`,"#38bdf8","#ffffff");if(u.position.set(v,s/2,m),this.group.add(u),o==="C"){const T=t/2+50,M=i/2+10,x=20+r/2,D=this.createTextSprite(`前窓: ${r} mm`,"#fb923c","#ffffff","rgba(35, 20, 12, 0.9)");D.scale.set(80,27,1),D.position.set(T,x,M),this.group.add(D)}if(a){const T=-t/2-50,M=0,x=c,D=s-20-x/2,A=this.createTextSprite(`側面上部開口: ${x} mm`,"#34d399","#ffffff","rgba(12, 32, 24, 0.9)");A.scale.set(95,27,1),A.position.set(T,D,M),this.group.add(A)}}setVisible(e){this.group.visible=e}}class Av{constructor(e){this.container=e,this.width=e.clientWidth,this.height=e.clientHeight,this.scene=new Cd,this.scene.background=null,this.camera=new jt(40,this.width/this.height,1,8e3),this.camera.position.set(-1130,740,1070),this.isAutoRotating=!1,this._autoRotateAngle=0,this._autoRotateSpeed=.003,this._lastAutoParams=null,this.renderer=new s1({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qu,this.renderer.toneMapping=Ku,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement);const t=new ac(this.renderer);t.compileEquirectangularShader();const i=t.fromScene(new cv,.04).texture;this.scene.environment=i,this.controls=new K1(this.camera,this.renderer.domElement),this.controls.target.set(-60,100,-15),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI-.05,this.controls.minDistance=200,this.controls.maxDistance=4e3,this.setupLighting(),this.setupFloorGrid(),this.materials=new hv,this.cageModel=new Ev(this.materials),this.scene.add(this.cageModel.root),this.dimensions=new Cv,this.scene.add(this.dimensions.group),window.addEventListener("resize",()=>this.onResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupLighting(){this.studioLights=[];const e=new H1(16777215,1975344,.38);e.position.set(0,1e3,0),this.scene.add(e),this.studioLights.push({light:e,baseIntensity:.38});const t=new Dr(16777215,1.35);t.position.set(1e3,1600,1200),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=100,t.shadow.camera.far=4e3;const i=1e3;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.bias=-5e-4,t.shadow.radius=3.5,this.scene.add(t),this.studioLights.push({light:t,baseIntensity:1.35});const s=new Dr(16777215,.65);s.position.set(0,1200,0),this.scene.add(s),this.studioLights.push({light:s,baseIntensity:.65});const o=new Dr(16777215,.5);o.position.set(-1e3,1e3,-1200),this.scene.add(o),this.studioLights.push({light:o,baseIntensity:.5});const r=new Dr(2765376,.25);r.position.set(0,-1e3,0),this.scene.add(r),this.studioLights.push({light:r,baseIntensity:.25}),this.ledLightGroup=new lt,this.scene.add(this.ledLightGroup),this.isDarkroomMode=!1,this.manualDarkroomOverride=null}setupFloorGrid(){this.gridHelper=new Y1(2400,24,5924219,3028291),this.gridHelper.position.y=-10,this.scene.add(this.gridHelper);const e=new Yn(3e3,3e3),t=new z1({opacity:.35});this.floor=new q(e,t),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-10.1,this.floor.receiveShadow=!0,this.scene.add(this.floor)}applyDarkroomMode(e){this.isDarkroomMode=e;const t=e?.05:1;if(this.studioLights)for(const i of this.studioLights)i.light.intensity=i.baseIntensity*t;this.gridHelper&&(this.gridHelper.material.opacity=e?.15:.85,this.gridHelper.material.transparent=!0),this.container&&this.container.classList.toggle("darkroom-active",e)}setDarkroomOverride(e){this.manualDarkroomOverride=e,this._lastAutoParams&&this.updateLedLighting(this._lastAutoParams)}updateLedLighting(e){for(;this.ledLightGroup.children.length>0;){const v=this.ledLightGroup.children[0];v.target&&v.target.parent&&v.target.parent.remove(v.target),this.ledLightGroup.remove(v),v.dispose&&v.dispose()}const{W:t,D:i,H:s,ledType:o,ledPower:r,ledBrightness:a=1,ledColorMode:c,ledRgbColor:l}=e,h=o&&o!=="none"&&!!r,d=this.manualDarkroomOverride!==null?this.manualDarkroomOverride:h;if(this.applyDarkroomMode(d),!h)return;const p=s-34,f=-i/2+55,_=(v,m,u,T,M=1)=>{const x=new V1(T,a*6.5*M);x.position.set(v,m,u),x.angle=Math.PI/2.3,x.penumbra=.85,x.decay=1.2,x.distance=Math.max(s*2,800);const D=new Et;D.position.set(v,20,0),this.scene.add(D),x.target=D,this.ledLightGroup.add(x);const A=new Bd(T,a*2.8*M,Math.max(t,i)*2.2);A.position.set(v,s*.65,u+25),this.ledLightGroup.add(A)};if(o==="usb"){let v=16777215;c==="warm"?v=16754470:c==="all"&&(v=16769722),_(0,p,f,v)}else if(o==="high_cri_white")_(0,p,f,16579578);else if(o==="red")_(0,p,f,16717636,1.4);else if(o==="white_and_red"){const v=c==="all"||c==="both"||c==="white",m=c==="all"||c==="both"||c==="red";v&&_(0,p,-i/2+85,16579578,1),m&&_(0,p,-i/2+45,16717636,1.3)}else o==="rgbw"&&_(0,p,f,l||"#ffffff",1.2)}setFrameColor(e){this.materials.setFrameColor(e)}update(e){this._lastAutoParams=e;const t=e.footType==="caster"?-66:-11;this.gridHelper&&(this.gridHelper.position.y=t),this.floor&&(this.floor.position.y=t-.1),this.cageModel.update(e),this.dimensions.update(e),this.updateLedLighting(e);const i=e.H/2;this.controls.target.set(0,i,0)}setDimensionsVisible(e){this.dimensions.setVisible(e)}setPanelsVisible(e){this.cageModel.panelGroup.visible=e,this.cageModel.doorGroup.visible=e}setDoorState(e){this.cageModel.params.doorState=e,this.cageModel.buildDoors()}setViewPreset(e,t){const i=t.H||300,s=t.W||750,o=t.D||450,r=i/2,a=Math.max(s,o,i)*2.2;switch(this.controls.target.set(0,r,0),e){case"front":this.controls.target.set(0,r,0),this.camera.position.set(0,r,a);break;case"iso":default:{const l=Math.max(s,o,i)*1.5;this.controls.target.set(0,i*.45,0),this.camera.position.set(-l*.82,i*1.05+l*.55,l*.82);break}case"top":this.controls.target.set(0,r,0),this.camera.position.set(0,r+a*1.3,1);break;case"side":this.controls.target.set(0,r,0),this.camera.position.set(a,r,0);break;case"bottom":this.controls.target.set(0,r,0),this.camera.position.set(a*.4,-a*.7,a*.6);break}this.controls.update()}onResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setAutoRotate(e,t){if(this.isAutoRotating=e,e){const i=this.controls.target,s=this.camera.position.x-i.x,o=this.camera.position.y-i.y,r=this.camera.position.z-i.z,a=Math.sqrt(s*s+o*o+r*r);this._autoRotateAngle=Math.atan2(r,s),this._autoRotatePhi=Math.asin(Math.max(-1,Math.min(1,o/a))),this._autoTargetYOffset=0,this._autoRadiusScale=1,this._lastAutoParams=t?{...t}:null,this.controls.enableDamping=!1,this.controls.enabled=!1,this._setupAutoRotateDrag()}else this.controls.enabled=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this._teardownAutoRotateDrag()}_setupAutoRotateDrag(){const e=this.renderer.domElement;this._dragState={active:!1,button:-1,lastY:0},this._onPointerDown=t=>{this._dragState.active=!0,this._dragState.button=t.button,this._dragState.lastY=t.clientY,t.preventDefault()},this._onPointerMove=t=>{if(!this._dragState.active)return;const i=t.clientY-this._dragState.lastY;this._dragState.lastY=t.clientY;const s=.005;if(this._dragState.button===0)this._autoRotatePhi-=i*s,this._autoRotatePhi=Math.max(-.05,Math.min(Math.PI/2-.05,this._autoRotatePhi));else if(this._dragState.button===2){const o=this._lastAutoParams&&this._lastAutoParams.H||300;this._autoTargetYOffset-=i*.5;const r=o*.8;this._autoTargetYOffset=Math.max(-r,Math.min(r,this._autoTargetYOffset))}},this._onPointerUp=()=>{this._dragState.active=!1,this._dragState.button=-1},this._onWheel=t=>{t.preventDefault();const i=.001;this._autoRadiusScale*=1+t.deltaY*i,this._autoRadiusScale=Math.max(.3,Math.min(3,this._autoRadiusScale))},e.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),e.addEventListener("wheel",this._onWheel,{passive:!1}),this._onContextMenu=t=>t.preventDefault(),e.addEventListener("contextmenu",this._onContextMenu)}_teardownAutoRotateDrag(){const e=this.renderer.domElement;this._onPointerDown&&e.removeEventListener("pointerdown",this._onPointerDown),this._onPointerMove&&window.removeEventListener("pointermove",this._onPointerMove),this._onPointerUp&&window.removeEventListener("pointerup",this._onPointerUp),this._onWheel&&e.removeEventListener("wheel",this._onWheel),this._onContextMenu&&e.removeEventListener("contextmenu",this._onContextMenu),this._onPointerDown=null,this._onPointerMove=null,this._onPointerUp=null,this._onWheel=null,this._onContextMenu=null}_calcAutoRotateCamera(e){const t=e&&e.W||750,i=e&&e.D||450,s=e&&e.H||300,o=Math.max(t,i,s)*1.45,r=s*.5;return{radius:o,targetY:r}}animate(){if(requestAnimationFrame(this.animate),this.cageModel.updateDoorAnimation(),this.isAutoRotating&&this._lastAutoParams){this._autoRotateAngle+=this._autoRotateSpeed;const{radius:e,targetY:t}=this._calcAutoRotateCamera(this._lastAutoParams),i=e*(this._autoRadiusScale||1),s=this._autoRotatePhi,o=Math.cos(s),r=Math.cos(this._autoRotateAngle)*i*o,a=Math.sin(this._autoRotateAngle)*i*o,c=t+(this._autoTargetYOffset||0)+i*Math.sin(s),l=t+(this._autoTargetYOffset||0);this.camera.position.set(r,c,a),this.camera.lookAt(0,l,0)}else this.controls.update();this.renderer.render(this.scene,this.camera)}getPartsSummary(){return this.cageModel.getPartsSummary()}captureImage(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}}const He={frames:{"AFS-2020-4":{name:"2020標準フレーム (シルバー)",unit:"m",weightPerMeter:.437,pricePerMeter:801,note:"標準4面溝あり"},"AFSF-2020-4":{name:"2020フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.44,pricePerMeter:801,note:"補強・中桟用 1面フラット"},"AFSW-2020-4":{name:"2020フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.444,pricePerMeter:801,note:"2面フラット"},"AFS-2040-4":{name:"2040フレーム (シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面2倍幅・40mm高"},"AFSF-2040-4":{name:"2040フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.712,pricePerMeter:1394,note:"40mm幅 1面フラット"},"AFST-2040-4":{name:"2040フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.715,pricePerMeter:1394,note:"40mm幅 2面フラット"},"AFS-2060-4":{name:"2060フレーム (シルバー)",unit:"m",weightPerMeter:1.09,pricePerMeter:1923,note:"正面3倍幅・60mm高"},"AFS-4040-4":{name:"4040フレーム (シルバー)",unit:"m",weightPerMeter:1.188,pricePerMeter:2095,note:"正面下部 40x40枠囲い用"},"AFS-2020-4-BK":{name:"2020フレーム (ブラック)",unit:"m",weightPerMeter:.437,pricePerMeter:1037,note:"ブラックアルマイト"},"AFS-2040-4-BK":{name:"2040フレーム (ブラック)",unit:"m",weightPerMeter:.752,pricePerMeter:1809,note:"ブラックアルマイト 40mm高"},"AFS-4040-4-BK":{name:"4040フレーム (ブラック)",unit:"m",weightPerMeter:1.188,pricePerMeter:2710,note:"正面下部 40x40枠囲い用 (ブラック)"},"AFS-2020-5":{name:"2020フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.404,pricePerMeter:822,note:"天面金網受用 (5シリーズ)"},"AFS-2040-5":{name:"2040フレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面枠囲い天面金網用 (シルバー・5シリーズ)"},"AFS-1530-6":{name:"1530フレーム (シルバー)",unit:"m",weightPerMeter:.684,pricePerMeter:1273,note:"止まり木垂直吊り下げ用フレーム"},"ASTP-30":{name:"φ30アルミパイプ (シルバー)",unit:"m",weightPerMeter:.795,pricePerMeter:1874,note:"止まり木丸棒"}},rails:{"PGRU-03-4-GY":{name:"上側ガラスレール (グレー)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部"},"PGRU-03-4-BK":{name:"上側ガラスレール (ブラック)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部 (黒ケージ連動)"},"PGRL-03-4-GY":{name:"下側ガラスレール (グレー)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用"},"PGRL-03-4-BK":{name:"下側ガラスレール (ブラック)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用 (黒ケージ連動)"}},packings:{"NSCP1H-S-6":{name:"モレ対策ゴムパッキン (グレー)",unit:"m",weightPerMeter:.035,pricePerMeter:841/6,note:"側面・背面 隙間モレ抑制用"}},caps:{"ECP-2020-4":{name:"2020用エンドキャップ",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"奥行きフレーム両端用"},"ECP-2020-4-GY":{name:"2020用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"止まり木天板固定フレーム両端用"},"ECP-1530-6":{name:"1530用エンドキャップ (ブラック)",unit:"piece",weightPerPiece:.0016,pricePerPiece:143,note:"止まり木吊り下げフレーム下端用"},"ABL-2015-4":{name:"L字ブラケット ABL-2015-4 (シルバー)",unit:"piece",weightPerPiece:.0041,pricePerPiece:201,note:"2室分け仕切り板固定用L字ブラケット (シルバー固定)"},"ECP-2040-4":{name:"2040用エンドキャップ",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (ブラック)"},"ECP-2040-4-GY":{name:"2040用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0022,pricePerPiece:143,note:"正面枠囲い左扉スペーサーフレーム両端用 (グレー)"}},hardware:{"TH-31":{name:"TH-31 ステンレス蝶番",unit:"piece",weightPerPiece:.028,pricePerPiece:347,note:"前開き扉用 ステンレス製平蝶番 (下部2箇所)"},"C-1249-4":{name:"C-1249-4 ステンレス打掛",unit:"piece",weightPerPiece:.05,pricePerPiece:660,note:"前開き扉用 ステンレス製打掛錠 (上部2箇所)"},"CP-294N":{name:"タキゲン CP-294N スライドラッチ",unit:"piece",weightPerPiece:.055,pricePerPiece:792,note:"正面枠囲い扉用 ワンタッチスライドラッチ (左右各1個)"},"ACRYLIC-ROUND-20-5":{name:"アクリル丸板 透明 φ20mm t5mm (穴加工済)",unit:"piece",weightPerPiece:.002,pricePerPiece:190,note:"正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)"},"GROMMET-30":{name:"配線用ゴムグロメット (φ30穴用, 黒)",unit:"piece",weightPerPiece:.005,pricePerPiece:80,note:"天面板 奥側配線用グロメット"},RNSFS4:{name:"段付きローレットノブ (SUS303, RNSFS4)",unit:"piece",weightPerPiece:.012,pricePerPiece:350,note:"引き違い扉用 ステンレスつまみ"},"C-108":{name:"プッシュ式スライド扉鍵 (C-108)",unit:"piece",weightPerPiece:.045,pricePerPiece:800,note:"右スライド扉 下部プッシュ式シリンダー錠"},"RUBBER-FOOT":{name:"ゴム脚 (黒)",unit:"piece",weightPerPiece:.008,pricePerPiece:60,note:"床面接地用ゴム脚 (座金入り)"},"CASTER-50":{name:"自在キャスター",unit:"piece",weightPerPiece:.12,pricePerPiece:200,note:"車輪径φ50 自在キャスター"},"SCREW-M4-KNOB":{name:"No.1 化粧つまみネジ (ホワイト)",unit:"piece",weightPerPiece:.0025,pricePerPiece:25,note:"床下パネルヒータ支え板・換気量調整板用 手締め化粧ネジ"},"SCREW-M3-KNOB":{name:"M3 つまみネジ (白)",unit:"piece",weightPerPiece:.002,pricePerPiece:25,note:"止まり木・仕切り板用 固定つまみネジ"},"BOLT-M6-20":{name:"M6 ボルト",unit:"piece",weightPerPiece:.008,pricePerPiece:30,note:"止まり木 φ30丸棒固定用ボルト"},"SCREW-M4-FLAT":{name:"M4 皿ネジ",unit:"piece",weightPerPiece:.003,pricePerPiece:15,note:"仕切り板フレーム固定用皿ネジ"}},panels:{acrylic_extrusion_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:7568,note:"標準透明パネル (床・背・側面・天面・固定窓 / acrylic_extrusion_price_config.jsより自動積算)"},acrylic_cast_3_0:{name:"透明アクリル 3.0mm (キャスト板・正面扉専用)",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:14652,note:"正面扉専用 (キャスト板 / acrylic_cast_price_config.jsより自動積算: 穴加工2箇所310円+磨き4辺2056円=計2366円/枚込)"},polyca_4_0:{name:"中空ポリカ 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.9,pricePerM2:7500,note:"高断熱・軽量中空ポリカーボネート"},danplate_4_0:{name:"プラダン 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.66,pricePerM2:1e3,note:"床下パネルヒータ用 緩衝プラダン"},pvc_punching_3_0:{name:"塩ビパンチングボード 透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:4.3,pricePerM2:20092,note:"通気孔パネル (φ3.1-P7 / pvc_punching_price_config.js価格表より自動積算)"},acrylic_black_matte_3_0:{name:"アクリル黒両面マット 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10344,baseCostPerPiece:400,note:"低反射・マットブラックアクリル (acrylic_black_matte_price_config.jsより自動積算 / スライド部材は固定原価+400円)"},acrylic_smoke_gray_3_0:{name:"アクリル グレースモーク半透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10976,note:"暗め半透明スモークアクリル (コモグラス 530K / acrylic_smoke_gray_price_config.jsより自動積算)"},acrylic_extrusion_1_5:{name:"透明アクリル 1.5mm",thicknessMm:1.5,unit:"m2",weightPerM2:1.8,pricePerM2:4336,note:"側面換気量調整板等 (acrylic_extrusion_price_config.jsより自動積算)"},acrylic_extrusion_2_0:{name:"透明アクリル 2.0mm",thicknessMm:2,unit:"m2",weightPerM2:2.4,pricePerM2:5296,note:"予備・薄物パネル (acrylic_extrusion_price_config.jsより自動積算)"},wire_mesh_15:{name:"金網15mmピッチ（黒粉体塗装）",pitchMm:15,unit:"m2",weightPerM2:8.9,pricePerM2:42712,note:"天面金網 (FENP15, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_25:{name:"金網25mmピッチ（黒粉体塗装）",pitchMm:25,unit:"m2",weightPerM2:6.2,pricePerM2:25627,note:"天面金網 (FENP25, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"},wire_mesh_30:{name:"金網30mmピッチ（黒粉体塗装）",pitchMm:30,unit:"m2",weightPerM2:4.4,pricePerM2:14949,note:"天面金網 (FENP30, 線径φ3.2 / fenp_price_config.js価格表より自動積算)"}},options:{labor:{splitFloor:{name:"床面2分割 加工工賃",price:500,note:"床面中央補強フレーム追加に伴う2分割加工工賃"},splitTop:{name:"天面2分割 加工工賃",price:500,note:"天面中央補強フレーム追加に伴う2分割加工工賃 (幅940mm超の必須時を含む)"},typeC:{name:"Type C (前窓＋扉) 加工工賃",price:500,note:"下部アクリル固定窓および扉加工に伴う加工工賃"},splitSide:{name:"側面2分割 加工工賃",price:1e3,note:"側面補強フレーム追加に伴う左右側面の上下2分割加工工賃"},frontWide3x:{name:"正面下側幅広フレーム3倍幅 加工工賃",price:500,note:"正面下側フレームの3倍幅(60mm)特殊加工工賃"},perch:{name:"止まり木 加工工賃",price:1e3,note:"天板付け止まり木 穴あけ・組み立て加工工賃"},rubberPacking:{name:"モレ対策ゴムパッキン 加工工賃",price:800,note:"側面・背面隙間モレ抑制ゴムパッキン施工工賃 (施工面数に関わらず一律)"},roomDivider:{name:"2室分け仕切り板 加工工賃",price:500,note:"仕切り板C面カット・取付穴あけ・組み立て加工工賃"},frontOpenDoor:{name:"TypeA 前開き 加工工賃",price:3e3,note:"前開き扉 切欠き・穴あけ加工工賃"},frontFramedDoor:{name:"TypeA 正面枠囲い 加工工賃",price:3e3,note:"正面枠囲いアルミ扉・ラッチ組み立て加工工賃"},floorHeaterSupport:{name:"床下パネルヒータ支え板 加工工賃",price:1e3,note:"床下パネルヒータ支え板 取り付け・加工工賃"}},items:{caster:{name:"自在キャスター仕様 (4輪)",price:1500,cost:800,note:"車輪径φ50 / 取付高66mm (標準ゴム脚からの変更)"},sideVentCover:{name:"側面換気量調整板 (つまみネジ付)",price:500,cost:200,holeCostPerPiece:94,holesPerPanel:4,note:"t1.5透明アクリル外張り＋φ6mm穴加工4箇所/枚＋No.1化粧つまみネジ (穴加工費は原価に積み上げ)"},ledUsb:{name:"LED照明: USB式 白＆電球色 LED",price:3e3,cost:1980,length:350,weight:.12,note:"USB 二色60LEDアルミライトバー [4023] (USB-A給電・3パターン切替)"},ledRgbw:{name:"LED照明: リモコン操作 RGB+W",price:6500,cost:5490,length:530,weight:.35,note:"RGB+W 30LED[6839] + 専用コントローラー[8166] + 12Vアダプター[6207] + 5pin延長コード1m[6433]"},floorHeaterSupport:{name:"床下パネルヒータ支え板",holeCostPerPiece:112,diagonalCutCost:239,cornerCutCost:587,screwCostPerPiece:25,note:"透明アクリル2mm＋緩衝プラダン4mm＋穴加工＋斜めカット＋切欠き＋化粧ネジ"}}},pricing:{markupRate:1.3,roundingUnit:100,note:"基本販売価格 = Math.ceil((baseMaterialsCost * markupRate) / roundingUnit) * roundingUnit"},system:{gasLogEndpointUrl:"https://script.google.com/macros/s/AKfycbwWv5VmeJGCnvvD0U3WTJBkT3ZnrFIj1qUHXXMlF2TA3vn2hSu9J1zp-9fc4PY_whjp/exec",shop:{name:"Animal SHOP きなと",subtitle:"3Dケージ設計・見積もりシミュレーター",logoUrl:"/logo_kinato.png",characterUrl:"/character_transparent.png",contactUrl:""}}},ua=[{id:"standard",name:"標準仕様",icon:"📐",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","標準枠2倍幅"],desc:"サイズやオプション変更してカスタマイズしてください。"},{id:"leopard_gecko",name:"レオパ向け",icon:"🦎",W:540,D:400,H:200,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)"],desc:"保温性ありのレオパちゃんにゆったりサイズ"},{id:"ball_python",name:"ボールパイソン向け",icon:"🐍",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","ロータイプ"],desc:"保温性抜群のロータイプケージ"},{id:"carpet_python",name:"カーペットパイソン",icon:"🐍",W:900,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:50,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type C (前窓50)","ブラック","黒アクリル(側・背)","たわみ防止レール"],desc:"のびのび多彩なレイアウトを組める広々サイズ"},{id:"tortoise",name:"リクガメ",icon:"🐢",W:900,D:500,H:500,cageType:"C",frameColor:"silver",frontWindowH:120,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"mesh30",topLeft:"mesh30",topRight:"mesh30"},tags:["Type C (前窓120)","シルバー","天板金網30mm","たわみ防止レール"],desc:"熱源ライトを安心しておける天板金網仕様"},{id:"bearded_dragon",name:"フトアゴヒゲトカゲ",icon:"🦎",W:800,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:80,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!0,sideOpeningH:200,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"mesh25",topLeft:"mesh25",topRight:"mesh25"},tags:["Type C (前窓80)","ブラック","天板金網25mm","側面2分割","たわみ防止レール"],desc:"通気性も確保しつつ、熱源ライト乗せれる金網仕様"},{id:"hedgehog",name:"ハリネズミ",icon:"🦔",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","側面2分割","換気量調整板"],desc:"側面、背面中空ポリカ・側面2分割・換気量調整板仕様"},{id:"hamster",name:"ハムスター向け",icon:"🐹",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"3x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","正面幅広3倍","中空ポリカ","換気量調整板"],desc:"正面幅広フレーム3倍＆中空ポリカ・換気量調整板仕様"},{id:"sugar_glider",name:"フクロモモンガ",icon:"🐿️",W:350,D:350,H:500,cageType:"A_FRONT",frameColor:"silver",frontWideFrame:"none",hasSideReinforcement:!1,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"punching",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},doorHingeSide:"left",tags:["Type A (前開き)","シルバー","側面パンチング","換気量調整板"],desc:"W350×D350×H500mm前開き仕様。側面全面パンチング＆外張り側面換気量調整板で通気・保温を両立"}],Pv=1.6,Rv=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"}],Lv=[{min:100,max:400,label:"100〜400"},{min:401,max:500,label:"401〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"},{min:1801,max:1900,label:"1801〜1900"},{min:1901,max:2e3,label:"1901〜2000"}],Dv={15:[[4970,null,null,null,null,null,null,null],[5240,5290,null,null,null,null,null,null],[7730,7850,7920,null,null,null,null,null],[7920,7980,8040,8110,null,null,null,null],[8040,8070,8110,8170,8230,null,null,null],[8730,8790,8860,8930,8990,9060,null,null],[8990,9060,9120,9200,9260,9320,9400,null],[10440,10500,10540,10570,10610,10640,10680,10710]],25:[[2760,null,null,null,null,null,null,null],[3720,3770,null,null,null,null,null,null],[5280,5410,5470,null,null,null,null,null],[5470,5530,5600,5660,null,null,null,null],[5600,5630,5660,5720,5790,null,null,null],[5950,6020,6080,6150,6220,6280,null,null],[6220,6280,6350,6420,6480,6550,6620,null],[7080,7140,7180,7210,7250,7280,7320,7350],[9910,10910,11460,12030,12400,12780,13170,13830],[10420,11470,12040,12650,13040,13440,13850,14540],[10940,12040,12650,13290,13690,14110,14540,15280],[11500,12650,13290,13970,14390,14830,15280,16040],[12080,13280,13950,14660,15100,15560,16030,16840],[12680,13950,14660,15390,15860,16340,16830,17680],[13070,14390,15110,15870,16350,16840,17360,18230],[13470,14830,15570,16360,16850,17370,17890,18800],[13880,15280,16040,16850,17370,17890,18440,19360]],30:[[2750,null,null,null,null,null,null,null],[2770,2800,null,null,null,null,null,null],[2800,2820,2860,null,null,null,null,null],[2820,2860,2880,2900,null,null,null,null],[2860,2880,2900,2920,2940,null,null,null],[3100,3150,3190,3230,3280,3150,null,null],[3150,3190,3230,3280,3320,3360,3470,null],[3370,3410,3450,3500,3530,3560,3590,3650],[5060,5830,6990,7350,7500,7580,7740,7900],[5580,6420,7710,8100,8260,8350,8520,8690],[5860,6740,8100,8510,8680,8780,8960,9150],[6040,6950,8350,8770,8950,9040,9230,9420],[6230,7160,8600,9030,9220,9310,9500,9700],[6420,7380,8860,9310,9500,9610,9810,10010],[6620,7610,9140,9600,9800,9900,10100,10310],[6810,7840,9420,9890,10090,10200,10410,10620],[6950,8e3,9610,10090,10300,10410,10620,10840]]};function lu(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Iv(n,e,t){const i=parseInt(n,10),s=Dv[i];if(!s)return null;const o=Math.max(e,t),r=Math.min(e,t),a=lu(o,Lv),c=lu(r,Rv);if(a===-1||c===-1)return null;if(a>=s.length){const d=s[s.length-1];return d[Math.min(c,d.length-1)]||null}const l=s[a];if(!l)return null;const h=l[c];if(h!=null)return h;for(let d=c;d>=0;d--)if(l[d]!=null)return l[d];return null}function Fv(n,e,t){const i=Iv(n,e,t);return i==null?null:Math.round(i*Pv)}function Jo(n,e,t,i,s){if(!n||!e||!t||!i||!s)return null;const o=Math.max(n,e),r=Math.min(n,e),a=i.map(P=>P.max),c=t.map(P=>P.max);let l=0;for(;l<a.length-1&&r>a[l+1];)l++;let h=0;for(;h<c.length-1&&o>c[h+1];)h++;const d=a[l],p=a[Math.min(l+1,a.length-1)],f=c[h],_=c[Math.min(h+1,c.length-1)],v=p===d?0:Math.max(0,Math.min(1,(r-d)/(p-d))),m=_===f?0:Math.max(0,Math.min(1,(o-f)/(_-f))),u=(P,R)=>{const S=Math.max(0,Math.min(P,c.length-1)),y=Math.max(0,Math.min(R,a.length-1)),w=s[S];if(!w)return 0;const N=w[y];if(N!=null)return N;for(let F=y;F>=0;F--)if(w[F]!=null)return w[F];return 0},T=u(h,l),M=u(h,l+1),x=u(h+1,l),D=u(h+1,l+1),A=(1-v)*(1-m)*T+v*(1-m)*M+(1-v)*m*x+v*m*D;return Math.round(A)}const cu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],hu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],uu=[[345,null,null,null,null,null,null,null,null,null,null,null,null,null],[446,611,null,null,null,null,null,null,null,null,null,null,null,null],[560,762,979,null,null,null,null,null,null,null,null,null,null,null],[661,929,1180,1450,null,null,null,null,null,null,null,null,null,null],[778,1079,1399,1701,2022,null,null,null,null,null,null,null,null,null],[878,1248,1600,1972,2324,2697,null,null,null,null,null,null,null,null],[997,1399,1821,2223,2646,3049,3474,null,null,null,null,null,null,null],[1097,1569,2022,2496,2948,3424,3877,4355,null,null,null,null,null,null],[1217,1720,2244,2747,3273,3776,4305,4808,5339,null,null,null,null,null],[1439,2043,2669,3273,3903,4506,5138,5741,6345,7583,null,null,null,null],[1663,2368,3098,3802,4534,5238,5943,6647,7382,8790,10233,null,null,null],[1891,2695,3528,4333,5138,5943,6778,7583,8388,10032,11641,13288,null,null],[2120,3025,3931,4836,5772,6678,7583,8489,9428,11239,13087,14897,16749,null],[2321,3327,4364,5370,6376,7382,8422,9428,10434,12483,14495,16548,18560,20617],[2553,3660,4766,5873,7014,8120,9227,10333,11477,13690,15944,18158,20416,22629],[2754,3962,5203,6410,7617,8824,10069,11276,12483,14938,17353,19812,22227,24691],[2990,4297,5605,6913,8258,9566,10873,12181,13530,16146,18806,21422,24087,26703],[3191,4599,6045,7453,8861,10270,11719,13128,14536,17398,20215,23081,25898,28770],[3429,4938,6447,7956,9506,11015,12524,14033,15587,18605,21673,24691,27764,30782],[3630,5240,6890,8500,10110,11719,13374,14983,16593,19862,23081,26356,29575,32854],[3872,5583,7293,9003,10758,12468,14179,15889,17649,21069,24545,27965,31446,34866],[4074,5884,7740,9551,11362,13173,15033,16844,18655,22332,25953,29635,33256,36944]];function du(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Uv(n,e){const t=Jo(n,e,hu,cu,uu);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=du(i,hu),r=du(s,cu);if(o===-1||r===-1)return null;const a=uu[o];if(!a)return null;const c=a[r];if(c!=null)return c;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const fu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],pu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],mu={"1.5":[[149,null,null,null,null,null,null,null,null,null,null,null,null,null],[167,206,null,null,null,null,null,null,null,null,null,null,null,null],[197,233,281,null,null,null,null,null,null,null,null,null,null,null],[215,272,318,377,null,null,null,null,null,null,null,null,null,null],[245,299,368,422,492,null,null,null,null,null,null,null,null,null],[263,341,404,483,546,627,null,null,null,null,null,null,null,null],[295,368,455,528,618,690,781,null,null,null,null,null,null,null],[313,410,492,590,672,772,853,955,null,null,null,null,null,null],[347,437,545,636,745,835,946,1037,1150,null,null,null,null,null],[400,509,636,745,873,982,1113,1222,1331,1573,null,null,null,null],[454,581,728,855,1004,1131,1258,1385,1537,1791,2072,null,null,null],[510,656,823,968,1113,1258,1428,1573,1718,2035,2326,2645,null,null],[569,732,895,1059,1246,1409,1573,1736,1927,2253,2609,2936,3294,null],[605,787,992,1174,1355,1537,1745,1927,2108,2500,2863,3258,3621,4019],[665,865,1065,1264,1491,1691,1890,2090,2319,2718,3149,3548,3983,4382],[702,919,1164,1382,1600,1818,2064,2282,2500,2968,3403,3874,4309,4784],[765,1001,1237,1473,1738,1974,2210,2446,2714,3185,3692,4164,4675,5147],[801,1055,1338,1593,1847,2101,2387,2641,2895,3438,3946,4494,5002,5553],[867,1139,1411,1683,1988,2260,2532,2804,3112,3656,4240,4784,5372,5916],[903,1193,1516,1806,2096,2387,2712,3003,3293,3913,4494,5117,5698,6326],[971,1280,1588,1897,2240,2549,2857,3166,3514,4131,4791,5408,6072,6689],[1007,1334,1696,2023,2349,2676,3042,3368,3695,4391,5045,5745,6399,7104]],"2.0":[[172,null,null,null,null,null,null,null,null,null,null,null,null,null],[195,242,null,null,null,null,null,null,null,null,null,null,null,null],[231,276,335,null,null,null,null,null,null,null,null,null,null,null],[253,324,380,453,null,null,null,null,null,null,null,null,null,null],[290,358,442,509,594,null,null,null,null,null,null,null,null,null],[312,408,487,583,662,759,null,null,null,null,null,null,null,null],[351,442,549,640,748,839,950,null,null,null,null,null,null,null],[374,492,594,714,816,939,1041,1164,null,null,null,null,null,null],[413,526,658,771,905,1018,1153,1266,1404,null,null,null,null,null],[477,612,769,905,1063,1198,1359,1495,1631,1930,null,null,null,null],[543,701,882,1040,1223,1382,1540,1699,1885,2202,2548,null,null,null],[610,791,997,1178,1359,1540,1749,1930,2111,2503,2865,3260,null,null],[680,884,1088,1291,1523,1727,1930,2134,2367,2775,3215,3622,4066,null],[726,952,1206,1432,1659,1885,2141,2367,2594,3079,3532,4020,4473,4966],[799,1048,1297,1546,1824,2073,2322,2571,2853,3351,3885,4382,4920,5418],[844,1116,1417,1689,1960,2232,2536,2808,3079,3658,4201,4784,5328,5915],[919,1213,1508,1802,2129,2423,2717,3011,3342,3930,4558,5147,5779,6367],[965,1281,1631,1948,2265,2581,2934,3251,3568,4241,4875,5553,6186,6868],[1043,1382,1722,2061,2436,2776,3115,3455,3834,4513,5236,5915,6641,7320],[1088,1450,1848,2210,2572,2934,3336,3698,4060,4828,5553,6325,7049,7827],[1169,1554,1939,2323,2748,3133,3517,3902,4331,5100,5917,6687,7510,8279],[1215,1622,2069,2476,2884,3291,3742,4150,4557,5420,6234,7103,7917,8790]],"3.0":[[212,null,null,null,null,null,null,null,null,null,null,null,null,null],[246,311,null,null,null,null,null,null,null,null,null,null,null,null],[294,362,446,null,null,null,null,null,null,null,null,null,null,null],[328,429,514,617,null,null,null,null,null,null,null,null,null,null],[378,480,600,702,823,null,null,null,null,null,null,null,null,null],[412,549,668,806,925,1065,null,null,null,null,null,null,null,null],[464,600,755,891,1048,1184,1343,null,null,null,null,null,null,null],[498,670,823,997,1150,1326,1479,1658,null,null,null,null,null,null],[551,721,912,1082,1275,1445,1641,1811,2009,null,null,null,null,null],[640,844,1071,1275,1505,1709,1941,2145,2349,2788,null,null,null,null],[731,969,1233,1471,1737,1975,2213,2451,2720,3196,3706,null,null,null],[825,1097,1397,1669,1941,2213,2516,2788,3060,3638,4182,4763,null,null],[921,1227,1533,1839,2176,2482,2788,3094,3434,4046,4695,5307,5960,null],[989,1329,1700,2040,2380,2720,3094,3434,3774,4491,5171,5892,6572,7297],[1088,1462,1836,2210,2618,2992,3366,3740,4151,4899,5688,6436,7229,7977],[1156,1564,2006,2414,2822,3230,3675,4083,4491,5348,6164,7025,7841,8707],[1258,1700,2142,2584,3063,3505,3947,4389,4872,5756,6685,7569,8503,9387],[1326,1802,2315,2791,3267,3743,4260,4736,5212,6209,7161,8163,9115,10122],[1431,1941,2451,2961,3512,4022,4532,5042,5597,6617,7687,8707,9782,10802],[1499,2043,2628,3172,3716,4260,4849,5393,5937,7075,8163,9306,10394,11542],[1608,2186,2764,3342,3965,4543,5121,5699,6327,7483,8694,9850,11066,12222],[1676,2288,2945,3557,4169,4781,5443,6055,6667,7946,9170,10454,11678,12968]]};function gu(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Nv(n,e,t){const i=parseFloat(n).toFixed(1),s=mu[i]||mu["3.0"];if(!s)return null;const o=Jo(e,t,pu,fu,s);if(o!=null&&o>0)return o;const r=Math.max(e,t),a=Math.min(e,t),c=gu(r,pu),l=gu(a,fu);if(c===-1||l===-1)return null;const h=s[c];if(!h)return null;const d=h[l];if(d!=null)return d;for(let p=l;p>=0;p--)if(h[p]!=null)return h[p];return null}const _u=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],vu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],xu=[[242,null,null,null,null,null,null,null,null,null,null,null,null,null],[290,377,null,null,null,null,null,null,null,null,null,null,null,null],[353,451,564,null,null,null,null,null,null,null,null,null,null,null],[402,540,662,802,null,null,null,null,null,null,null,null,null,null],[467,613,777,923,1089,null,null,null,null,null,null,null,null,null],[515,704,875,1064,1235,1427,null,null,null,null,null,null,null,null],[582,777,991,1186,1402,1597,1815,null,null,null,null,null,null,null],[631,869,1089,1329,1549,1791,2010,2256,null,null,null,null,null,null],[699,942,1207,1451,1718,1962,2231,2475,2747,null,null,null,null,null],[817,1110,1425,1718,2036,2329,2650,2942,3235,3851,null,null,null,null],[938,1279,1646,1988,2357,2698,3040,3381,3753,4436,5153,null,null,null],[1061,1451,1869,2259,2650,3040,3461,3851,4241,5055,5835,6653,null,null],[1187,1626,2064,2503,2973,3412,3851,4290,4763,5640,6555,7433,8351,null],[1284,1772,2290,2778,3266,3753,4275,4763,5250,6262,7238,8254,9229,10249],[1413,1949,2486,3022,3592,4129,4665,5201,5775,6848,7961,9034,10152,11225],[1510,2095,2715,3300,3885,4470,5092,5677,6262,7474,8644,9859,11030,12250],[1642,2276,2910,3544,4214,4848,5482,6116,6791,8059,9372,10640,11957,13225],[1739,2422,3142,3824,4507,5190,5913,6596,7279,8689,10054,11470,12835,14255],[1874,2605,3337,4068,4841,5572,6303,7035,7811,9274,10787,12250,13768,15231],[1971,2752,3573,4353,5133,5913,6739,7519,8299,9909,11470,13085,14646,16266],[2110,2939,3768,4597,5471,6300,7129,7958,8837,10495,12207,13865,15583,17241],[2207,3085,4008,4886,5763,6641,7569,8446,9324,11135,12890,14706,16461,18282]];function Mu(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Bv(n,e){const t=Jo(n,e,vu,_u,xu);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Mu(i,vu),r=Mu(s,_u);if(o===-1||r===-1)return null;const a=xu[o];if(!a)return null;const c=a[r];if(c!=null)return c;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const yu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],bu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Su=[[248,null,null,null,null,null,null,null,null,null,null,null,null,null],[300,393,null,null,null,null,null,null,null,null,null,null,null,null],[367,471,591,null,null,null,null,null,null,null,null,null,null,null],[419,565,695,844,null,null,null,null,null,null,null,null,null,null],[487,643,818,974,1149,null,null,null,null,null,null,null,null,null],[539,739,922,1123,1306,1509,null,null,null,null,null,null,null,null],[609,818,1045,1254,1483,1692,1923,null,null,null,null,null,null,null],[661,915,1149,1405,1639,1897,2132,2392,null,null,null,null,null,null],[732,993,1275,1535,1819,2079,2366,2627,2915,null,null,null,null,null],[858,1170,1506,1819,2158,2470,2811,3124,3437,4093,null,null,null,null],[985,1350,1741,2105,2498,2863,3228,3593,3989,4719,5482,null,null,null],[1115,1532,1977,2394,2811,3228,3676,4093,4510,5378,6212,7083,null,null],[1247,1716,2186,2655,3155,3624,4093,4562,5065,6004,6979,7917,8896,null],[1352,1873,2425,2946,3468,3989,4544,5065,5587,6666,7709,8792,9835,10922],[1487,2060,2634,3207,3814,4388,4961,5534,6145,7292,8479,9626,10818,11965],[1591,2217,2876,3502,4127,4753,5415,6041,6666,7958,9209,10505,11756,13057],[1729,2407,3085,3762,4477,5154,5832,6510,7228,8584,9984,11339,12744,14100],[1834,2563,3330,4060,4790,5519,6290,7020,7750,9254,10714,12223,13683,15197],[1975,2757,3539,4320,5143,5925,6707,7489,8316,9880,11493,13057,14676,16240],[2079,2913,3788,4622,5456,6290,7169,8003,8837,10555,12223,13946,15614,17342],[2224,3110,3997,4883,5814,6700,7586,8472,9408,11181,13008,14780,16612,18385],[2329,3267,4250,5188,6127,7065,8053,8991,9930,11861,13738,15674,17551,19493]];function Tu(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Ov(n,e){const t=Jo(n,e,bu,yu,Su);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Tu(i,bu),r=Tu(s,yu);if(o===-1||r===-1)return null;const a=Su[o];if(!a)return null;const c=a[r];if(c!=null)return c;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}const kv=[{maxHalfPerimeter:250,pricePerEdge:121},{maxHalfPerimeter:350,pricePerEdge:146},{maxHalfPerimeter:480,pricePerEdge:175},{maxHalfPerimeter:550,pricePerEdge:210},{maxHalfPerimeter:650,pricePerEdge:252},{maxHalfPerimeter:780,pricePerEdge:302},{maxHalfPerimeter:880,pricePerEdge:362},{maxHalfPerimeter:980,pricePerEdge:435},{maxHalfPerimeter:1150,pricePerEdge:522},{maxHalfPerimeter:1350,pricePerEdge:626},{maxHalfPerimeter:1500,pricePerEdge:752},{maxHalfPerimeter:1800,pricePerEdge:902}];function Gv(n,e){const t=(n||0)+(e||0);for(const i of kv)if(t<=i.maxHalfPerimeter)return i.pricePerEdge;return 902}function kd(n,e){return Gv(n,e)*4+485}const wu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"}],Eu=[{min:10,max:100,label:"10〜100"},{min:101,max:150,label:"101〜150"},{min:151,max:200,label:"151〜200"},{min:201,max:250,label:"201〜250"},{min:251,max:300,label:"251〜300"},{min:301,max:350,label:"301〜350"},{min:351,max:400,label:"351〜400"},{min:401,max:450,label:"401〜450"},{min:451,max:500,label:"451〜500"},{min:501,max:600,label:"501〜600"},{min:601,max:700,label:"601〜700"},{min:701,max:800,label:"701〜800"},{min:801,max:900,label:"801〜900"},{min:901,max:1e3,label:"901〜1000"},{min:1001,max:1100,label:"1001〜1100"},{min:1101,max:1200,label:"1101〜1200"},{min:1201,max:1300,label:"1201〜1300"},{min:1301,max:1400,label:"1301〜1400"},{min:1401,max:1500,label:"1401〜1500"},{min:1501,max:1600,label:"1501〜1600"},{min:1601,max:1700,label:"1601〜1700"},{min:1701,max:1800,label:"1701〜1800"}],Cu=[[287,null,null,null,null,null,null,null,null,null,null,null,null,null],[359,481,null,null,null,null,null,null,null,null,null,null,null,null],[445,588,747,null,null,null,null,null,null,null,null,null,null,null],[516,712,891,1088,null,null,null,null,null,null,null,null,null,null],[604,819,1052,1267,1501,null,null,null,null,null,null,null,null,null],[676,945,1195,1465,1716,1988,null,null,null,null,null,null,null,null],[765,1052,1358,1645,1952,2239,2549,null,null,null,null,null,null,null],[837,1179,1501,1845,2167,2513,2835,3184,null,null,null,null,null,null],[928,1286,1666,2024,2405,2764,3148,3506,3893,null,null,null,null,null],[1092,1522,1975,2405,2861,3291,3749,4179,4610,5501,null,null,null,null],[1258,1760,2288,2790,3319,3821,4323,4825,5357,6361,7398,null,null,null],[1428,2001,2603,3176,3749,4323,4927,5501,6074,7255,8402,9585,null,null],[1599,2244,2889,3534,4210,4856,5501,6146,6825,8115,9442,10732,12063,null],[1743,2459,3207,3924,4641,5357,6108,6825,7542,9012,10446,11920,13354,14832],[1917,2705,3494,4282,5105,5893,6681,7470,8295,9872,11490,13067,14689,16266],[2060,2920,3814,4675,5535,6395,7292,8152,9012,10773,12493,14259,15979,17749],[2238,3169,4101,5033,6002,6933,7865,8797,9770,11633,13542,15405,17319,19183],[2381,3384,4425,5428,6432,7435,8480,9483,10487,12538,14545,16602,18609,20671],[2561,3636,4712,5787,6903,7978,9053,10128,11248,13399,15599,17749,19954,22105],[2705,3851,5039,6186,7333,8480,9671,10818,11965,14309,16602,18951,21244,23598],[2889,4107,5326,6544,7808,9026,10245,11463,12732,15169,17661,20098,22595,25032],[3032,4322,5658,6948,8238,9528,10868,12158,13449,16084,18664,21304,23885,26531]];function Au(n,e){for(let t=0;t<e.length;t++)if(n>=e[t].min&&n<=e[t].max)return t;return n<e[0].min?0:n>e[e.length-1].max?e.length-1:-1}function Gd(n,e){const t=Jo(n,e,Eu,wu,Cu);if(t!=null&&t>0)return t;const i=Math.max(n,e),s=Math.min(n,e),o=Au(i,Eu),r=Au(s,wu);if(o===-1||r===-1)return null;const a=Cu[o];if(!a)return null;const c=a[r];if(c!=null)return c;for(let l=r;l>=0;l--)if(a[l]!=null)return a[l];return null}function zv(n,e){const t=Gd(n,e);if(t==null)return null;const i=kd(n,e);return t+i}function Hv(n,e=""){const t=n||"",i=e||"";return t==="acrylic_cast_3_0"||i.includes("キャスト")?{materialName:"透明アクリル キャスト板 3.0mm (または コモグラス押出)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3316",hazaiyaExtrusionUrl:"https://www.hazaiya.co.jp/estimate/board/3302",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_extrusion_3_0"||i.includes("透明アクリル 3.0mm")&&!i.includes("キャスト")?{materialName:"透明アクリル 押出板 3.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_extrusion_2_0"||i.includes("2.0mm")?{materialName:"透明アクリル 押出板 2.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:2,isHazaiyaOrder:!0}:t==="acrylic_extrusion_1_5"||i.includes("1.5mm")?{materialName:"透明アクリル 押出板 1.5mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:1.5,isHazaiyaOrder:!0}:t==="pvc_punching_3_0"||i.includes("塩ビパンチング")?{materialName:"塩ビ透明パンチングボード (φ3.1-P7, 3.0mm厚)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/4018",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_black_matte_3_0"||i.includes("黒両面マット")?{materialName:"アクリル黒両面マット 3.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3468",thicknessMm:3,isHazaiyaOrder:!0}:t==="acrylic_smoke_gray_3_0"||i.includes("グレースモーク")?{materialName:"アクリル グレースモーク半透明 3.0mm (コモグラス 530K)",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3356",thicknessMm:3,isHazaiyaOrder:!0}:t==="danplate_4_0"||i.includes("プラダン")?{materialName:"緩衝プラダン 4.0mm (市販品・別手配)",hazaiyaUrl:"※ホームセンター等にて市販品を手配（直線カットのみ）",thicknessMm:4,isHazaiyaOrder:!1}:t==="polyca_4_0"||i.includes("中空ポリカ")?{materialName:"ツインカーボ（中空ポリカーボネート） 4.0mm",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate/board/3303",thicknessMm:4,isHazaiyaOrder:!0}:{materialName:i||"アクリル板",hazaiyaUrl:"https://www.hazaiya.co.jp/estimate",thicknessMm:3,isHazaiyaOrder:!0}}function zd(n,e){if(!n||!Array.isArray(n))return[];Number(e.W||540),Number(e.D||400),Number(e.H||400);const t=e.cageType||"A";e.hasDoorAntiFlex,e.frontWideFrame,Number(e.frontWindowH||100);const i=n.filter(o=>o.category==="panel"),s=[];for(const o of i){const r=o.name||"",a=Hv(o.panelCode||o.partCode,r);let c=o.widthMm,l=o.heightMm;if((!c||!l)&&o.size){const h=o.size.match(/([\d.]+)\s*[x×]\s*([\d.]+)/);h&&(c=parseFloat(h[1]),l=parseFloat(h[2]))}if(c=Math.round((c||0)*10)/10,l=Math.round((l||0)*10)/10,(t==="A"||t==="C")&&(r.includes("スライド扉")||r.includes("扉")&&!r.includes("前開き"))){const h=Math.round(l/2*10)/10,d=e.frontDoorMaterial==="cast";s.push({key:"front_slide_doors",title:`${r}（2枚構成・同一加工）`,materialName:d?"透明アクリル キャスト板 3.0mm":"アクリル押出-コモグラス 3.0mm",doorMaterialType:d?"cast":"extrusion",hazaiyaUrl:d?"https://www.hazaiya.co.jp/estimate/board/3316":"https://www.hazaiya.co.jp/estimate/board/3302",hazaiyaExtrusionUrl:"https://www.hazaiya.co.jp/estimate/board/3302",hazaiyaCastUrl:"https://www.hazaiya.co.jp/estimate/board/3316",widthMm:c,heightMm:l,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"ABCD全4辺「磨き仕上げ」",holes:[{desc:"引き手ノブ穴 (段付きローレットノブ用)",corner:"C",x:15,y:h,base:`A辺(左)より15.0mm / D辺(下)より${h.toFixed(1)}mm (高さ寸法の1/2)`,diameterMm:4.1,taperMm:0},{desc:"プッシュ式スライド錠穴 (C-108用)",corner:"D",x:15.5,y:25,base:"角D(右下)より左方向へ15.5mm / 上方向へ25.0mm",diameterMm:10.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】2枚同一仕様で発注（1枚を裏返して使用）。はざいや加工数量割引適用"});continue}if(r.includes("前開き")&&r.includes("扉")){const h=e.doorHingeSide==="right",d=Math.round(l*1/4*10)/10,p=Math.round(l*3/4*10)/10;s.push({key:"front_open_door",title:`${r}（${h?"右ヒンジ左打掛":"左ヒンジ右打掛"}）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:3,quantity:1,needsMachining:!0,edgeFinishing:"ABCD全4辺「磨き仕上げ」",corners:[{desc:"4隅角丸",spec:"角A, 角B, 角C, 角D すべて R10 (10.0mm角丸)"}],notches:[{desc:h?"A辺(左・打掛受側) 切欠き2箇所":"C辺(右・打掛受側) 切欠き2箇所",spec:`下側(D辺より${d}mm中心) & 上側(D辺より${p}mm中心): 各 幅19.0mm x 高さ52.0mm`}],holes:[{desc:"TH-31蝶番固定用穴 (4箇所)",base:`${h?"C辺(右)":"A辺(左)"}端より11.25mm / 各ヒンジ中心より dy=-8.5mm, +17.0mm`,diameterMm:3.5,taperMm:0},{desc:"C-1249-4打掛固定用穴 (4箇所)",base:`${h?"A辺(左)":"C辺(右)"}端より9.7mm / 各打掛中心より dy=-15.0mm, +15.0mm`,diameterMm:3.5,taperMm:0}],notes:"【★加工あり】4隅R10角丸 / 切欠き2箇所 / 蝶番・打掛固定穴計8箇所"});continue}if(r.includes("ヒンジ座板")){s.push({key:"hinge_spacer",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c||16,heightMm:l||52,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"蝶番フレーム固定穴",base:"幅中心(8mm) / 上下中心より dy=-17.0mm, +8.5mm",diameterMm:3.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】前開き扉蝶番フレーム取付スペーサー（フレーム溝固定用・2枚）"});continue}if(r.includes("ロック受座板")){s.push({key:"lock_spacer",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c||16,heightMm:l||48,thicknessMm:3,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"打掛受具フレーム固定穴",base:"幅中心(8mm) / 上下中心より dy=-15.0mm, +15.0mm",diameterMm:3.5,taperMm:0}],corners:[],notches:[],notes:"【★加工あり】前開き扉打掛受具フレーム取付スペーサー（フレーム溝固定用・2枚）"});continue}if(r.includes("側面換気量調整板")||r.includes("換気量調整板")){s.push({key:"side_vent_cover",title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:1.5,quantity:o.count||2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",holes:[{desc:"角A側",base:"A辺(左)より9.0mm / B辺(上)より40.0mm",diameterMm:6,taperMm:0},{desc:"角B側",base:"C辺(右)より9.0mm / B辺(上)より40.0mm",diameterMm:6,taperMm:0},{desc:"角C側",base:"A辺(左)より9.0mm / D辺(下)より40.0mm",diameterMm:6,taperMm:0},{desc:"角D側",base:"C辺(右)より9.0mm / D辺(下)より40.0mm",diameterMm:6,taperMm:0}],corners:[],notches:[],notes:`【★加工あり】1枚あたりφ6.0mm丸穴4箇所 (計${(o.count||2)*4}穴) / No.1化粧つまみネジ固定用`});continue}if(r.includes("床下パネルヒータ支え板")&&!r.includes("プラダン")){if(o.count===2||o.note&&o.note.includes("2枚")){const d=Math.max(10,l-180);s.push({key:"floor_heater_support_2",title:`${r}（2枚構成・床補強あり）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:2,quantity:2,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",corners:[{desc:"外側角A(左上)斜めカット",corner:"A",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"外側角C(左下)斜めカット",corner:"C",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"}],notches:[{desc:"角D(右下)配線逃がし切欠き",corner:"D",type:"corner_notch",sizeX:20,sizeY:d,spec:`幅20.0mm x 長さ${d.toFixed(1)}mm 角落とし`}],holes:[{desc:"角A斜め脇 奥",corner:"A",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / A辺(左)より90.0mm"},{desc:"角A斜め脇 左",corner:"A",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / B辺(上)より90.0mm"},{desc:"角C斜め脇 手前",corner:"C",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / A辺(左)より90.0mm"},{desc:"角C斜め脇 左",corner:"C",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / D辺(下)より90.0mm"},{desc:"中央フレーム溝部",corner:"B",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / B辺(上)より90.0mm"},{desc:"奥フレーム固定",corner:"B",x:80,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / C辺(右)より80.0mm"},{desc:"手前フレーム固定",corner:"D",x:80,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / C辺(右)より80.0mm"}],notes:"【★加工あり】2枚互い違い(180度反転)配置。1枚あたりφ6.0mm丸穴7箇所・斜めカット2箇所・切欠き1箇所"})}else{const d=Math.round(c/2*10)/10;s.push({key:"floor_heater_support_1",title:`${r}（1枚構成・通常床面）`,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:2,quantity:1,needsMachining:!0,edgeFinishing:"仕上げなし（ノコカット）",corners:[{desc:"角A(左上)斜めカット",corner:"A",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角B(右上)斜めカット",corner:"B",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角C(左下)斜めカット",corner:"C",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"},{desc:"角D(右下)斜めカット",corner:"D",type:"bevel",sizeX:80,sizeY:80,spec:"80.0 x 80.0 mm 斜めカット"}],notches:[],holes:[{desc:"奥フレーム長辺中央",corner:"A",x:d,y:9,diameterMm:6,taperMm:0,base:`B辺(上)より9.0mm / 角A(左)より${d}mm (中央)`},{desc:"手前フレーム長辺中央",corner:"C",x:d,y:9,diameterMm:6,taperMm:0,base:`D辺(下)より9.0mm / 角C(左)より${d}mm (中央)`},{desc:"角A斜め脇 奥",corner:"A",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / A辺(左)より90.0mm"},{desc:"角A斜め脇 左",corner:"A",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / B辺(上)より90.0mm"},{desc:"角B斜め脇 奥",corner:"B",x:90,y:9,diameterMm:6,taperMm:0,base:"B辺(上)より9.0mm / C辺(右)より90.0mm"},{desc:"角B斜め脇 右",corner:"B",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / B辺(上)より90.0mm"},{desc:"角C斜め脇 手前",corner:"C",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / A辺(左)より90.0mm"},{desc:"角C斜め脇 左",corner:"C",x:9,y:90,diameterMm:6,taperMm:0,base:"A辺(左)より9.0mm / D辺(下)より90.0mm"},{desc:"角D斜め脇 手前",corner:"D",x:90,y:9,diameterMm:6,taperMm:0,base:"D辺(下)より9.0mm / C辺(右)より90.0mm"},{desc:"角D斜め脇 右",corner:"D",x:9,y:90,diameterMm:6,taperMm:0,base:"C辺(右)より9.0mm / D辺(下)より90.0mm"}],notes:"【★加工あり】4隅80x80mm斜めカット / φ6.0mm丸穴10箇所 (端から9mm溝位置)"})}continue}s.push({key:`standard_panel_${s.length}`,title:r,materialName:a.materialName,hazaiyaUrl:a.hazaiyaUrl,widthMm:c,heightMm:l,thicknessMm:a.thicknessMm,quantity:o.count||1,needsMachining:!1,edgeFinishing:"仕上げなし（ノコカット）",holes:[],corners:[],notches:[],notes:`${o.note||"直線カットのみ"} / 【切断のみ (加工なし)】`})}return s}function Wv(n,e={}){if(!n||n.length===0)return"【はざいや発注リスト】対象のパネル部材はありません。";const t=[],i=n.reduce((o,r)=>o+(r.quantity||1),0),s=n.filter(o=>o.needsMachining).length;return t.push("================================================================"),t.push("【アクリルショップ はざいや様向け パネル一括発注リスト（全パネル網羅版）】"),e.W&&e.D&&e.H&&t.push(`対象ケージ: W${e.W} x D${e.D} x H${e.H} mm (Type ${e.cageType||"A"})`),t.push(`発注品目数: ${n.length} 品目 (合計枚数: ${i} 枚 / うち加工あり: ${s} 品目)`),t.push("※ 2重発注防止のため、本リストを上から順に1回だけカートへ追加してください。"),t.push("※ 基準: A辺=左辺, B辺=上辺, C辺=右辺, D辺=下辺 / 角A=左上, 角B=右上, 角C=左下, 角D=右下"),t.push(`================================================================
`),n.forEach((o,r)=>{const a=o.needsMachining?"【★加工あり】":"【切断のみ (加工なし)】";t.push(`■ [${r+1}/${n.length}] ${o.title}  ${a}`),t.push(`・素材: ${o.materialName}`),t.push(`・発注URL: ${o.hazaiyaUrl}`),t.push(`・仕上がり寸法: ヨコ ${o.widthMm} mm x タテ ${o.heightMm} mm (厚み ${o.thicknessMm} mm)`),t.push(`・発注数量: ${o.quantity} 枚`),t.push(`・切断面仕上げ: ${o.edgeFinishing}`),o.needsMachining&&(o.corners&&o.corners.length>0&&(t.push("・コーナー加工:"),o.corners.forEach(c=>{const l=c.spec||(c.sizeX&&c.sizeY?`${c.sizeX} x ${c.sizeY} mm 斜めカット`:"指定あり");t.push(`   - ${c.desc}: ${l}`)})),o.notches&&o.notches.length>0&&(t.push("・切欠き加工:"),o.notches.forEach(c=>{const l=c.spec||(c.sizeX&&c.sizeY?`幅${c.sizeX}mm x 長さ${c.sizeY}mm`:"指定あり");t.push(`   - ${c.desc}: ${l}`)})),o.holes&&o.holes.length>0&&(t.push("・穴あけ加工:"),o.holes.forEach((c,l)=>{const h=c.base||(c.corner?`角${c.corner}基準 (X:${c.x}mm, Y:${c.y}mm)`:"図面指定");t.push(`   (${l+1}) [${c.desc}] 基準: ${h} ➜ 直径 φ${c.diameterMm} mm (テーパー深さ ${c.taperMm||0} mm)`)}))),o.notes&&t.push(`・備考: ${o.notes}`),t.push(`----------------------------------------------------------------
`)}),t.join(`
`)}const Vv=document.getElementById("canvas-container"),Js=document.getElementById("creature-preset-grid"),os=document.getElementById("input-restore-estimate-id"),Vs=document.getElementById("btn-restore-estimate"),Br=document.getElementById("restore-status-msg"),Xv=document.getElementById("btn-save-image");document.getElementById("btn-copy-spec");document.getElementById("inquiry-spec-textarea");document.getElementById("copy-toast");const vn=document.getElementById("estimate-result-modal"),Pu=document.getElementById("modal-estimate-id"),Ru=document.getElementById("modal-price-total"),Lu=document.getElementById("modal-weight-total"),ko=document.getElementById("modal-spec-textarea"),pl=document.getElementById("btn-copy-spec-modal"),Bs=document.getElementById("modal-copy-toast"),dc=document.getElementById("btn-save-image-modal"),Du=document.getElementById("btn-close-modal"),Iu=document.getElementById("btn-dismiss-modal"),Fu=document.getElementById("btn-open-estimate-modal"),Kt=document.getElementById("modal-download-success"),Os=document.getElementById("download-success-title"),Ai=document.getElementById("download-filename-label"),da=document.getElementById("modal-preview-section"),Xs=document.getElementById("modal-preview-img");let Ni=null,as=null;const $v=Date.now(),Hd=Qd(),fc=ef();let Uu=0,nt=null;function gi(n,e=5e3){let t=document.getElementById("app-notice-toast");t||(t=document.createElement("div"),t.id="app-notice-toast",t.className="app-notice-toast hidden",document.body.appendChild(t)),t.textContent=n,t.classList.remove("hidden"),requestAnimationFrame(()=>{t.classList.add("show")}),t._timer&&clearTimeout(t._timer),t._timer=setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.classList.add("hidden"),300)},e)}const nn=document.getElementById("slider-w"),sn=document.getElementById("input-w"),zi=document.getElementById("slider-d"),Hi=document.getElementById("input-d"),on=document.getElementById("slider-h"),rn=document.getElementById("input-h"),Zn=document.getElementById("row-front-window"),Wi=document.getElementById("slider-fw"),Vi=document.getElementById("input-fw"),oo=document.getElementById("toggle-side-reinforce"),ds=document.getElementById("card-side-reinforce"),fs=document.getElementById("box-side-h"),at=document.getElementById("input-side-h"),bn=document.getElementById("btn-type-a"),Tt=document.getElementById("btn-type-a-front"),wt=document.getElementById("btn-type-a-framed"),Hn=document.getElementById("btn-type-c"),Ft=document.getElementById("type-badge");let Or=null,Lo=null,Qr=null,Do=null,ea=null,Io=null,ta=null,Fo=null,pc=null,Wd=[];const _i=document.getElementById("btn-frame-silver"),vi=document.getElementById("btn-frame-black"),ml=document.getElementById("section-front-door-hinge"),fi=document.getElementById("btn-hinge-left"),pi=document.getElementById("btn-hinge-right"),Xi=document.getElementById("toggle-caster"),xi=document.getElementById("card-caster"),ln=document.getElementById("toggle-floor-reinforce"),$o=document.getElementById("card-floor-reinforce"),mc=document.getElementById("floor-reinf-sub"),It=document.getElementById("toggle-top-reinforce"),In=document.getElementById("card-top-reinforce"),hi=document.getElementById("top-reinf-sub"),xn=document.getElementById("toggle-door-anti-flex"),cn=document.getElementById("card-door-anti-flex"),zn=document.getElementById("toggle-side-vent-cover"),yn=document.getElementById("card-side-vent-cover"),Co=document.getElementById("vent-cover-badge"),kr=document.getElementById("vent-cover-sub"),St=document.getElementById("toggle-perch"),bt=document.getElementById("card-perch"),ri=document.getElementById("toggle-front-wide-2x"),Ln=document.getElementById("card-front-wide-2x"),Gr=document.getElementById("front-wide-2x-sub"),ai=document.getElementById("toggle-front-wide-3x"),Dn=document.getElementById("card-front-wide-3x"),zr=document.getElementById("front-wide-3x-sub"),qn=document.getElementById("toggle-rubber-packing"),Un=document.getElementById("card-rubber-packing"),Pi=document.getElementById("rubber-packing-badge"),Nu=document.getElementById("rubber-packing-sub"),$i=document.getElementById("toggle-floor-heater-support"),gn=document.getElementById("card-floor-heater-support"),ts=document.getElementById("floor-heater-support-badge"),Yv=document.getElementById("floor-heater-support-sub"),gl=document.getElementById("floor-warning-banner"),Bu=document.getElementById("seismic-warning-banner"),qv=document.getElementById("seismic-warning-text"),Vd=document.getElementById("btn-door-closed"),Xd=document.getElementById("btn-door-left"),$d=document.getElementById("btn-door-right"),na=document.getElementById("btn-front-door-closed"),ia=document.getElementById("btn-front-door-open"),Hr=document.getElementById("slide-door-group"),Ou=document.getElementById("front-door-group"),ku=document.getElementById("door-control-title"),Yd=[Vd,Xd,$d,na,ia].filter(Boolean),_l=document.getElementById("reinforce-tip"),vl=document.getElementById("reinforce-text"),Gu=document.getElementById("current-spec-summary");document.getElementById("cost-hud-card");const $s=document.getElementById("cost-hud-result"),Ri=document.getElementById("hud-cost-total"),Li=document.getElementById("hud-weight-total"),Fn=document.getElementById("btn-calc-estimate"),gc=document.querySelectorAll(".preset-btn:not(#btn-auto-rotate)"),_c=document.getElementById("btn-auto-rotate"),Zv=document.getElementById("btn-reset-specs"),xl=document.getElementById("panel-config-toggle-btn"),zu=document.getElementById("panel-config-container"),Ml=document.getElementById("options-toggle-btn"),Hu=document.getElementById("options-container"),ro=document.getElementById("select-panel-floor"),fa=document.getElementById("select-panel-back"),pa=document.getElementById("select-panel-side"),ma=document.getElementById("select-panel-side-upper"),ga=document.getElementById("select-panel-side-lower"),ao=document.getElementById("select-panel-top"),lo=document.getElementById("select-panel-top-left"),co=document.getElementById("select-panel-top-right"),ho=document.getElementById("select-panel-partition"),_a=document.getElementById("row-panel-side"),va=document.getElementById("row-panel-side-split"),xa=document.getElementById("row-panel-top"),Ma=document.getElementById("row-panel-top-split"),Mn=document.getElementById("row-panel-partition"),hn=document.getElementById("toggle-room-divider"),Jt=document.getElementById("card-room-divider"),Fi=document.getElementById("room-divider-sub"),Ys=document.getElementById("perch-sub"),ks=document.getElementById("card-led-option"),uo=document.getElementById("select-led-type"),Gs=document.getElementById("led-controller-panel"),Go=document.getElementById("btn-led-power-on"),zo=document.getElementById("btn-led-power-off"),fn=document.getElementById("led-row-usb-modes"),pn=document.getElementById("led-row-rgb-palette"),Bn=document.getElementById("btn-toggle-darkroom"),g={W:750,D:450,H:300,cageType:"A",frameColor:"silver",footType:"rubber",hasFloorReinforcement:!1,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasPerch:!1,hasRubberPacking:!1,hasFloorHeaterSupport:!1,hasRoomDivider:!1,ledType:"none",ledPower:!0,ledBrightness:1,ledColorMode:"all",ledRgbColor:"#ffffff",frontWideFrame:"2x",doorHingeSide:"left",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,showPanels:!0,showDimensions:!0,doorState:"closed",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}};let Kn="2x",Nc=!1;const Qe=new Av(Vv);window.viewer=Qe;const qd=750*450;function Kv(n,e,t,i){const s=Math.min(n,e)/10,o=t/10,r=s/Math.sqrt(o),a=i==="caster"?4.2:3.8,c=r<a;return{ratio:r,threshold:a,isProneToToppling:c,footType:i}}function We(){Qe.update(g),Qe.setPanelsVisible(g.showPanels),Qe.setDimensionsVisible(g.showDimensions),Nc&&(Qe._lastAutoParams={...g});const n=g.W*g.D;n>qd&&!g.hasFloorReinforcement?(gl.classList.remove("hidden"),_l.classList.remove("reinforced"),vl.textContent=`床面積: ${(n/1e4).toFixed(0)}c㎡ (> 750×450mm) 床面補強なし：アクリルたわみ防止のため床面中央補強フレーム (2分割) を推奨します`):g.hasFloorReinforcement?(gl.classList.add("hidden"),_l.classList.add("reinforced"),vl.textContent="床面中央補強フレーム（2分割）が配置されています"):(gl.classList.add("hidden"),_l.classList.remove("reinforced"),vl.textContent=`床面積: ${(n/1e4).toFixed(0)}c㎡ (≦ 750×450mm) 床面補強フレームなし（標準枠）`);const t=Kv(g.W,g.D,g.H,g.footType);if(t.isProneToToppling){Bu.classList.remove("hidden");const i=g.footType==="caster"?"キャスター装備（車輪向きによる支点変化を考慮した安全目安: 4.2）":"安全目安: 3.8";qv.innerHTML=`<strong>転倒注意：</strong>耐震安定値 <span class="metric-tag">${t.ratio.toFixed(2)}</span> ＜ 基準 ${t.threshold}（${i}）。地震等で転倒しやすいため、壁固定等の転倒防止対策を推奨します`}else Bu.classList.add("hidden");sx(),Ca(),Qo(),Jv(),jv(),ix(),Kd()}function jv(){g.hasSideReinforcement?(_a.classList.add("hidden"),va.classList.remove("hidden")):(_a.classList.remove("hidden"),va.classList.add("hidden"));const n=g.hasTopReinforcement||g.W>940;n?(xa.classList.add("hidden"),Ma.classList.remove("hidden")):(xa.classList.remove("hidden"),Ma.classList.add("hidden")),ro&&(ro.value=g.panelConfig.floor||"acrylic"),fa.value=g.panelConfig.back,pa.value=g.panelConfig.side,ma.value=g.panelConfig.sideUpper,ga.value=g.panelConfig.sideLower,ao.value=g.panelConfig.top,lo.value=g.panelConfig.topLeft,co.value=g.panelConfig.topRight;const e=document.getElementById("panel-summary-badge");if(e){let t="パンチング";const i=n?g.panelConfig.topLeft:g.panelConfig.top;i.startsWith("mesh")?t=`金網${i.replace("mesh","")}mm`:i==="acrylic"&&(t="アクリル天面");let s="背面アクリル";g.panelConfig.back==="punching"?s="背面パンチング":g.panelConfig.back==="polyca"?s="背面中空ポリカ":g.panelConfig.back==="black_matte"?s="背面ブラックマット":g.panelConfig.back==="smoke_gray"&&(s="背面グレースモーク"),e.textContent=`${s} / ${t}`}}function Qo(){const n=g.hasSideReinforcement&&g.panelConfig.sideUpper==="punching",e=!g.hasSideReinforcement&&g.panelConfig.side==="punching";n||e?(zn.disabled=!1,yn.classList.remove("disabled"),Co.classList.add("ready"),Co.textContent="選択可能",e?kr.textContent="冬場の保温・換気調整用。左右上下4枚外張り":kr.textContent="冬場の保温・換気調整用。左右外張り"):(zn.checked=!1,g.hasSideVentCover=!1,zn.disabled=!0,yn.classList.add("disabled"),yn.classList.remove("active"),Co.classList.remove("ready"),g.hasSideReinforcement?(Co.textContent="要上部パンチング",kr.textContent="※側面上部が塩ビパンチングパネル時に選択できます"):(Co.textContent="要側面パンチング",kr.textContent="※側面パネルが塩ビパンチング時に選択できます"))}function Ca(){if(g.cageType==="C"||g.cageType==="A_FRAMED")ri.checked=!1,ri.disabled=!0,Ln.classList.remove("active"),Ln.classList.add("disabled"),Gr.textContent=g.cageType==="A_FRAMED"?"※正面枠囲いは正面下部40x40固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）",ai.checked=!1,ai.disabled=!0,Dn.classList.remove("active"),Dn.classList.add("disabled"),zr.textContent=g.cageType==="A_FRAMED"?"※正面枠囲いは正面下部40x40固定のため選択不可":"※Type Cは前窓構造のため選択不可（Type A専用）";else{const e=g.frameColor==="black"?"高さ60mm(ブラック: 40mm+20mm 2段重ね)使用。深床材・高剛性仕様":"高さ60mmフレーム使用。深床材・高剛性仕様";g.frontWideFrame==="2x"?(ri.checked=!0,ri.disabled=!1,Ln.classList.add("active"),Ln.classList.remove("disabled"),Gr.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",ai.checked=!1,ai.disabled=!0,Dn.classList.remove("active"),Dn.classList.add("disabled"),zr.textContent="※2倍幅がONのため選択不可（2倍幅を外すと選択可能）"):g.frontWideFrame==="3x"?(ri.checked=!1,ri.disabled=!0,Ln.classList.remove("active"),Ln.classList.add("disabled"),Gr.textContent="※3倍幅がONのため選択不可（3倍幅を外すと選択可能）",ai.checked=!0,ai.disabled=!1,Dn.classList.add("active"),Dn.classList.remove("disabled"),zr.textContent=e):(ri.checked=!1,ri.disabled=!1,Ln.classList.remove("active"),Ln.classList.remove("disabled"),Gr.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",ai.checked=!1,ai.disabled=!1,Dn.classList.remove("active"),Dn.classList.remove("disabled"),zr.textContent=e)}}function Jv(){const n=g.panelConfig.back==="polyca";let e=!1;g.hasSideReinforcement?e=g.panelConfig.sideLower==="polyca"&&g.panelConfig.sideUpper==="polyca":e=g.panelConfig.side==="polyca",n&&e?(qn.checked=!1,g.hasRubberPacking=!1,qn.disabled=!0,Un.classList.add("disabled"),Un.classList.remove("active"),Pi.textContent="中空ポリカのみ時は施工不可",Pi.className="option-cond-badge",Pi.classList.remove("hidden"),Nu.textContent="※中空ポリカ仕様には施工できません（アクリル等の面がある場合に選択可）"):(qn.disabled=!1,Un.classList.remove("disabled"),g.hasRubberPacking?(Un.classList.add("active"),qn.checked=!0):(Un.classList.remove("active"),qn.checked=!1),n||(g.hasSideReinforcement?g.panelConfig.sideLower==="polyca"||g.panelConfig.sideUpper==="polyca":g.panelConfig.side==="polyca")?(Pi.textContent="中空ポリカ除く面に施工",Pi.className="option-cond-badge info",Pi.classList.remove("hidden"),Nu.textContent="側面・背面からの水漏れの抑制（中空ポリカ面を除くアクリル面に施工）"):(Pi.textContent="",Pi.classList.add("hidden"))),ts&&Yv&&(g.hasFloorReinforcement?(ts.textContent="床面2分割用 (2枚)",ts.className="option-cond-badge info",ts.classList.remove("hidden")):(ts.textContent="通常床面用 (1枚)",ts.className="option-cond-badge",ts.classList.remove("hidden")))}function er(n){if(!n)return null;if(He.panels&&He.panels[n])return He.panels[n];if(He.frames&&He.frames[n])return He.frames[n];if(He.rails&&He.rails[n])return He.rails[n];if(He.caps&&He.caps[n])return He.caps[n];if(He.packings&&He.packings[n])return He.packings[n];if(He.hardware&&He.hardware[n])return He.hardware[n];for(const e of[He.panels,He.frames,He.rails,He.caps,He.packings,He.hardware])if(e){for(const[t,i]of Object.entries(e))if(n===t||n.startsWith(t)||t.startsWith(n)||i.name&&(i.name===n||n.includes(i.name)||i.name.includes(n)))return i}return null}function Wu(n){const e=n.name||"";return e.includes("前窓")?2:e.includes("扉")?1:e.includes("底板")||e.includes("床面")&&!e.includes("支え板")&&!e.includes("プラダン")?3:e.includes("側板")||e.includes("側面")?e.includes("換気量調整板")?7:4:e.includes("背板")||e.includes("背面")?5:e.includes("天板")||e.includes("天面")||e.includes("金網")?6:e.includes("換気量調整板")?7:e.includes("床下パネルヒータ支え板")?8:e.includes("プラダン")?9:10}function Vu(n){const e=n.partCode||n.name||"";return e.startsWith("ECP")||e.includes("キャップ")?3:e.startsWith("PGRU")||e.startsWith("PGRL")||e.includes("レール")?2:1}function Zd(n){var a,c,l,h,d,p,f,_;const e=er(n.panelCode||n.partCode||n.name);let t=n.widthMm,i=n.heightMm;if((!t||!i)&&n.size){const v=n.size.match(/(\d+(?:\.\d+)?)\s*[x×]\s*(\d+(?:\.\d+)?)/);v&&(t=parseFloat(v[1]),i=parseFloat(v[2]))}let s=0,o=0,r=0;if(e&&e.unit==="m2"&&t&&i){const v=t/1e3*(i/1e3),m=n.panelCode&&n.panelCode.startsWith("wire_mesh_")||n.partCode&&n.partCode.startsWith("wire_mesh_")||e.pitchMm!=null,u=n.panelCode==="pvc_punching_3_0"||n.partCode==="pvc_punching_3_0"||n.name&&n.name.includes("塩ビパンチング"),T=n.panelCode&&n.panelCode.startsWith("acrylic_extrusion_")||n.partCode&&n.partCode.startsWith("acrylic_extrusion_")||n.panelCode==="acrylic_extrusion_3_0"||n.panelCode==="acrylic_extrusion_2_0"||n.panelCode==="acrylic_extrusion_1_5",M=n.panelCode==="acrylic_black_matte_3_0"||n.partCode==="acrylic_black_matte_3_0"||n.name&&n.name.includes("黒両面マット"),x=n.panelCode==="acrylic_smoke_gray_3_0"||n.partCode==="acrylic_smoke_gray_3_0"||n.name&&n.name.includes("グレースモーク"),D=n.panelCode==="acrylic_cast_3_0"||n.partCode==="acrylic_cast_3_0"||n.name&&n.name.includes("キャスト");if(m){const A=e.pitchMm||(n.panelCode?parseInt(n.panelCode.replace("wire_mesh_",""),10):25),P=Fv(A,t,i);s=P??Math.round(e.pricePerM2*v)}else if(u){const A=Uv(t,i);s=A??Math.round(e.pricePerM2*v)}else if(T){const A=e.thicknessMm||3,P=Nv(A,t,i);s=P??Math.round(e.pricePerM2*v)}else if(M){const A=Bv(t,i);s=A??Math.round(e.pricePerM2*v)}else if(x){const A=Ov(t,i);s=A??Math.round(e.pricePerM2*v)}else if(D)if(n.name&&n.name.includes("扉")){const P=zv(t,i),R=kd(t,i);s=P??Math.round(e.pricePerM2*v)+R}else{const P=Gd(t,i);s=P??Math.round(e.pricePerM2*v)}else s=Math.round(e.pricePerM2*v);if(n.name&&n.name.includes("換気量調整板")){const A=(l=(c=(a=He.options)==null?void 0:a.items)==null?void 0:c.sideVentCover)==null?void 0:l.holeCostPerPiece,P=(p=(d=(h=He.options)==null?void 0:h.items)==null?void 0:d.sideVentCover)==null?void 0:p.holesPerPanel;s+=P*A}if(n.name&&n.name.includes("床下パネルヒータ支え板")){const A=((_=(f=He.options)==null?void 0:f.items)==null?void 0:_.floorHeaterSupport)||{},P=A.holeCostPerPiece??112,R=A.diagonalCutCost??239,S=A.cornerCutCost??587;if(n.count===2||n.note&&n.note.includes("2枚")){const w=7*P+2*R+1*S;s+=w}else{const w=10*P+4*R;s+=w}}e.baseCostPerPiece&&(s+=e.baseCostPerPiece),o=s*n.count,e.baseCost&&(o+=e.baseCost),r=(e.weightPerM2||0)*v*n.count}return{singleCost:s,totalCost:o,totalWeight:r}}function Qv(n){var r,a,c;const e=n.partCode||n.name||"",t=er(e);let i=0,s=0,o=0;if(t)if(t.unit==="m"){const h=(n.lengthMm||0)/1e3;i=Math.round(t.pricePerMeter*h),s=i*n.count,o=(t.weightPerMeter||0)*h*n.count}else i=t.pricePerPiece||0,s=i*n.count,o=(t.weightPerPiece||0)*n.count;else{const l=n.name||"";l.includes("化粧つまみネジ")||l.includes("No.1")?(i=(c=(a=(r=He.options)==null?void 0:r.items)==null?void 0:a.floorHeaterSupport)==null?void 0:c.screwCostPerPiece,s=i*n.count,o=.0025*n.count):l.includes("ゴムグロメット")?(i=80,s=i*n.count,o=.005*n.count):l.includes("ローレットノブ")||l.includes("つまみ")&&l.includes("ノブ")?(i=350,s=i*n.count,o=.012*n.count):l.includes("鍵")||l.includes("C-108")?(i=800,s=i*n.count,o=.045*n.count):l.includes("キャスター")?(i=200,s=i*n.count,o=.12*n.count):l.includes("ゴム脚")?(i=60,s=i*n.count,o=.008*n.count):l.includes("M3")&&l.includes("つまみネジ")?(i=25,s=i*n.count,o=.002*n.count):l.includes("M6")&&l.includes("ボルト")?(i=30,s=i*n.count,o=.008*n.count):l.includes("M4")&&l.includes("皿ネジ")?(i=15,s=i*n.count,o=.003*n.count):l.includes("LED")&&(l.includes("USB")||l.includes("白＆電球色")?(i=1980,o=.12):(i=5490,o=.35),s=i*n.count)}return{singleCost:i,totalCost:s,totalWeight:o}}async function Xu(n){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(n);else{const e=document.createElement("textarea");e.value=n,e.style.position="fixed",e.style.left="-9999px",e.style.top="0",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}finally{e.remove()}}}function ex(n){if(!n||n.length===0)return"";const e=[],t=[];for(const l of n){const h=l.partCode||l.name||"";h.startsWith("PGRU")||h.startsWith("PGRL")||l.name&&l.name.includes("レール")?t.push(l):e.push(l)}const i=[],s=[];for(const l of e){const h=l.partCode||l.name||"";h.startsWith("ECP")||h.includes("キャップ")||l.lengthMm==null||l.lengthMm===0?s.push(l):i.push(l)}i.sort((l,h)=>{const d=l.lengthMm||0,p=h.lengthMm||0;return p!==d?p-d:(l.partCode||l.name).localeCompare(h.partCode||h.name)}),s.sort((l,h)=>(l.partCode||l.name).localeCompare(h.partCode||h.name));const o=[...i,...s],r=[];let a=0;for(const l of o){const h=er(l.partCode);let d=0,p=0;if(h)if(h.unit==="m"){const m=(l.lengthMm||0)/1e3;d=Math.round(h.pricePerMeter*m),p=d*l.count}else d=h.pricePerPiece||0,p=d*l.count;a+=p;let f=l.partCode||l.name;const _=l.lengthMm!=null&&l.lengthMm>0?Math.round(l.lengthMm):null;_!=null&&(f.endsWith(`-${_}`)||(f=`${f}-${_}`)),r.push(`${f}	${l.count}`)}r.push(`${a.toLocaleString()}円`),t.sort((l,h)=>{const d=(l.partCode||l.name||"").startsWith("PGRU"),p=(h.partCode||h.name||"").startsWith("PGRU");if(d&&!p)return-1;if(!d&&p)return 1;const f=l.lengthMm||0;return(h.lengthMm||0)-f});const c=[];for(const l of t){const h=l.partCode||l.name,d=l.lengthMm!=null?Math.round(l.lengthMm):0;c.push(`${h} ${d}mm x${l.count}`)}return c.length>0?`${r.join(`
`)}

${c.join(`
`)}`:r.join(`
`)}function Kd(){if(!Lo||!Qr)return;const n=Qe.getPartsSummary(),e=[],t=[],i=[];for(const u of n)u.partCode==="NSCP1H-S-6"||u.name&&u.name.includes("ゴムパッキン")?i.push(u):u.category==="panel"?t.push(u):u.category==="frame"||u.category==="rail_cap"||u.category==="hardware"?e.push(u):i.push(u);const s=new Map;for(const u of e){const T=u.partCode||u.name,M=u.lengthMm!=null?Math.round(u.lengthMm):null,x=`${T}__${M??"none"}`;if(s.has(x)){const D=s.get(x);D.count+=u.count}else s.set(x,{...u,partCode:T,lengthMm:M,count:u.count})}const o=Array.from(s.values());Wd=o,o.sort((u,T)=>{const M=Vu(u),x=Vu(T);return M!==x?M-x:(u.partCode||u.name).localeCompare(T.partCode||T.name)}),Qr.innerHTML="",Do&&(Do.innerHTML="");let r=0,a=0,c=0;for(const u of o){c+=u.count;const T=er(u.partCode);let M=0,x=0,D=0,A="-";if(T)if(T.unit==="m"){const R=u.lengthMm||0,w=(u.partCode&&(u.partCode.startsWith("PGRU")||u.partCode.startsWith("PGRL"))?Math.ceil(R/250)*250:R)/1e3;A=`${u.lengthMm||Math.round(w*1e3)} mm`,M=Math.round(T.pricePerMeter*w),x=M*u.count,D=T.weightPerMeter*(R/1e3)*u.count}else A="-",M=T.pricePerPiece||0,x=M*u.count,D=(T.weightPerPiece||0)*u.count;else A=u.size||"-";r+=x,a+=D;const P=document.createElement("tr");P.className="bom-cat-frame",P.innerHTML=`
      <td><strong>${u.partCode||u.name}</strong></td>
      <td style="text-align: right; font-family: monospace;">${A}</td>
      <td style="text-align: center; font-family: monospace;">${u.count}</td>
      <td style="text-align: right; font-family: monospace;">¥${x.toLocaleString()}</td>
      <td style="text-align: right; font-family: monospace;">${D.toFixed(3)} kg</td>
    `,Qr.appendChild(P)}if(Do){const u=document.createElement("tr");u.innerHTML=`
      <td><strong>フレーム等 合計</strong></td>
      <td style="text-align: center;">-</td>
      <td style="text-align: center; font-family: monospace;"><strong>${c}点</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>¥${r.toLocaleString()}</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>${a.toFixed(3)} kg</strong></td>
    `,Do.appendChild(u)}t.sort((u,T)=>{const M=Wu(u),x=Wu(T);return M-x}),[...t];let l=0,h=0,d=0;if(ea){ea.innerHTML="",Io&&(Io.innerHTML="");for(const u of t){d+=u.count;const{totalCost:T,totalWeight:M}=Zd(u);l+=T,h+=M;const D=u.name&&(u.name.includes("扉")||u.name.includes("換気量調整板")||u.name.includes("ヒンジ座板")||u.name.includes("ロック受座板")||u.name.includes("床下パネルヒータ支え板")&&!u.name.includes("プラダン"))?'<span style="display: inline-block; background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px; font-weight: bold;">★加工あり</span>':'<span style="display: inline-block; background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px;">切断のみ</span>',A=document.createElement("tr");A.className="bom-cat-panel",A.innerHTML=`
        <td><strong>${u.name}</strong></td>
        <td>${u.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${u.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${T.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${M.toFixed(3)} kg</td>
        <td>${D}${u.note||"-"}</td>
      `,ea.appendChild(A)}if(Io){const u=document.createElement("tr");u.innerHTML=`
        <td><strong>パネル 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${d}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${l.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${h.toFixed(3)} kg</strong></td>
        <td>-</td>
      `,Io.appendChild(u)}}let p=0,f=0,_=0;if(ta){ta.innerHTML="",Fo&&(Fo.innerHTML="");for(const u of i){_+=u.count;const{totalCost:T,totalWeight:M}=Qv(u);p+=T,f+=M;const x=document.createElement("tr");x.className=`bom-cat-${u.category||"other"}`,x.innerHTML=`
        <td><strong>${u.name}</strong></td>
        <td>${u.size||"-"}</td>
        <td style="text-align: center; font-family: monospace;">${u.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${T.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${M.toFixed(3)} kg</td>
        <td>${u.note||"-"}</td>
      `,ta.appendChild(x)}if(Fo){const u=document.createElement("tr");u.innerHTML=`
        <td><strong>その他部材 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${_}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${p.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${f.toFixed(3)} kg</strong></td>
        <td>-</td>
      `,Fo.appendChild(u)}}const v=document.getElementById("bom-hazaiya-preview-body"),m=document.getElementById("hazaiya-parts-badge");if(v){const u=zd(n,g),T=u.reduce((x,D)=>x+(D.quantity||1),0),M=u.filter(x=>x.needsMachining).length;if(m&&(m.textContent=`${u.length}品目 (${T}枚 / 加工あり${M}点)`),u.length===0)v.innerHTML='<p style="color: #94a3b8; font-style: italic; margin: 4px 0;">※対象のパネル部材はありません。</p>';else{let x="";u.forEach((D,A)=>{const P=D.needsMachining,R=P?"rgba(245, 158, 11, 0.35)":"rgba(56, 189, 248, 0.25)",S=P?'<span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; font-weight: bold;">★加工あり</span>':'<span style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem;">切断のみ</span>';x+=`
          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${R}; border-radius: 4px; padding: 6px 10px; margin-bottom: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; flex-wrap: wrap; gap: 4px;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <strong style="color: ${P?"#fbbf24":"#e2e8f0"};">[${A+1}/${u.length}] ${D.title}</strong>
                ${S}
              </div>
              <span style="font-family: monospace; font-size: 0.7rem; color: #38bdf8;">${D.widthMm} x ${D.heightMm} mm (t${D.thicknessMm}mm) × ${D.quantity}枚</span>
            </div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 3px;">
              素材: <span style="color: #cbd5e1;">${D.materialName}</span> | 仕上げ: <span style="color: #cbd5e1;">${D.edgeFinishing}</span>
            </div>
        `,P&&(D.corners&&D.corners.length>0&&(x+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・コーナー: '+D.corners.map(y=>`<span style="color: #fca5a5;">${y.desc}(${y.spec})</span>`).join(", ")+"</div>"),D.notches&&D.notches.length>0&&(x+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・切欠き: '+D.notches.map(y=>`<span style="color: #fca5a5;">${y.desc}(${y.spec})</span>`).join(", ")+"</div>"),D.holes&&D.holes.length>0&&(x+='<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・穴あけ: '+D.holes.map((y,w)=>`<span style="color: #93c5fd;">(${w+1}) ${y.desc} [${y.base} ➜ φ${y.diameterMm}mm]</span>`).join("<br>&nbsp;&nbsp;")+"</div>")),x+="</div>"}),v.innerHTML=x}}pc&&(pc.textContent=`${n.length}品目 / フレーム計${c}点 / パネル計${d}点 / その他計${_}点`)}function tx(){try{return}catch(n){console.warn("[Debug] setupDebugBOMIfRequested エラー:",n)}}let Yo=!1;function nx(){var Y,$,de,se,Se,_e,C,b,z,ne,le,te,Ee,be,Te;const n=Qe.getPartsSummary();let e=0,t=0,i=0,s=0;for(const Ne of n)if(Ne.category==="frame"||Ne.category==="rail_cap"||Ne.category==="hardware"||Ne.category==="other"){const fe=er(Ne.partCode||Ne.name);if(fe)if(fe.unit==="m"){const Ce=Ne.lengthMm||0,De=(Ne.partCode&&(Ne.partCode.startsWith("PGRU")||Ne.partCode.startsWith("PGRL"))?Math.ceil(Ce/250)*250:Ce)/1e3,je=Math.round(fe.pricePerMeter*De);e+=je*Ne.count,t+=fe.weightPerMeter*(Ce/1e3)*Ne.count}else e+=(fe.pricePerPiece||0)*Ne.count,t+=(fe.weightPerPiece||0)*Ne.count}else if(Ne.category==="panel"){const{totalCost:fe,totalWeight:Ce}=Zd(Ne);i+=fe,s+=Ce}const o=He.options||{},r=o.labor||{},a=o.items||{},c=!!g.hasFloorReinforcement,l=!!(g.hasTopReinforcement||g.W>940),h=g.cageType==="C",d=!!g.hasSideReinforcement,p=g.cageType==="A"&&g.frontWideFrame==="3x",f=g.footType==="caster",_=!!g.hasSideVentCover,v=!!g.hasPerch,m=!!g.hasRubberPacking,u=!!g.hasRoomDivider,T=g.cageType==="A_FRONT",M=g.cageType==="A_FRAMED",x=!!g.hasFloorHeaterSupport,D=c?((Y=r.splitFloor)==null?void 0:Y.price)??500:0,A=l?(($=r.splitTop)==null?void 0:$.price)??500:0,P=h?((de=r.typeC)==null?void 0:de.price)??500:0,R=d?((se=r.splitSide)==null?void 0:se.price)??1e3:0,S=p?((Se=r.frontWide3x)==null?void 0:Se.price)??500:0,y=v?((_e=r.perch)==null?void 0:_e.price)??1e3:0,w=m?((C=r.rubberPacking)==null?void 0:C.price)??800:0,N=u?((b=r.roomDivider)==null?void 0:b.price)??500:0,F=T?((z=r.frontOpenDoor)==null?void 0:z.price)??3e3:0,B=M?((ne=r.frontFramedDoor)==null?void 0:ne.price)??3e3:0,U=x?((le=r.floorHeaterSupport)==null?void 0:le.price)??1e3:0,k=D+A+P+R+S+y+w+N+F+B+U,K=f?((te=a.caster)==null?void 0:te.price)??1500:0,V=f?((Ee=a.caster)==null?void 0:Ee.cost)??800:0,ae=_?((be=a.sideVentCover)==null?void 0:be.price)??500:0,ie=_?((Te=a.sideVentCover)==null?void 0:Te.cost)??200:0,ce=_?ie:0;let me=0,ge=0,X=0;if(g.ledType&&g.ledType!=="none"){const fe={usb:a.ledUsb,rgbw:a.ledRgbw}[g.ledType];fe&&(me=fe.price||0,ge=fe.cost||0,X=fe.weight||.15)}const Q=K+ae+me,Me=V+ce+ge,O=He.pricing||{},Z=typeof O.markupRate=="number"?O.markupRate:1.3,he=typeof O.roundingUnit=="number"?O.roundingUnit:100,ue=e+i,xe=Math.ceil(ue*Z/he)*he,ee=ue+Me,re=xe+Q+k,L=t+s+X;return{rawCost:ee,priceWithMarkup:re,weight:L}}let Bi=null;function ix(){if(Bi&&(Bi.aborted=!0,Bi=null,Fn)){Fn.classList.remove("is-calculating");const n=Fn.querySelector(".calc-btn-title");n&&(n.textContent="見積もりと重量計算（β版）")}(Yo||$s&&!$s.classList.contains("hidden"))&&(Yo=!1,$s&&$s.classList.add("hidden"))}async function qo(){Bi&&(Bi.aborted=!0);const n={aborted:!1};if(Bi=n,$s&&$s.classList.remove("hidden"),Ri&&(Ri.classList.remove("value-appear"),Ri.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>部材積算中...</span>
      </span>
    `),Li&&(Li.classList.remove("value-appear"),Li.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>重量計算中...</span>
      </span>
    `),Fn){Fn.classList.add("is-calculating");const r=Fn.querySelector(".calc-btn-title");r&&(r.textContent="部材積算・構造検証中...")}const e=5e3,t=Math.floor(Math.random()*5001),i=e+t,s=100,o=Math.floor(i/s);try{for(let a=0;a<o;a++)if(await new Promise(c=>setTimeout(c,s)),n.aborted)return;const r=nx();Ri&&(Ri.textContent=`¥${r.priceWithMarkup.toLocaleString()}`,Ri.classList.add("value-appear")),Li&&(Li.textContent=`${r.weight.toFixed(1)} kg`,Li.classList.add("value-appear")),Yo=!0,xx(r)}catch(r){console.error("Structural simulation error:",r),Ri&&(Ri.innerHTML='<span style="color: #ef4444; font-size: 0.82rem; font-weight: 600;">⚠️ 計算中にエラーが発生しました</span>'),Li&&(Li.innerHTML='<span style="color: #94a3b8; font-size: 0.85rem;">-</span>'),Tx(r)}finally{if(Bi===n&&(Bi=null,Fn)){Fn.classList.remove("is-calculating");const r=Fn.querySelector(".calc-btn-title");r&&(r.textContent="見積もりと重量計算（β版）")}}}function Sn(n=g.doorHingeSide){return n==="right"?"左打掛、右ヒンジ":"左ヒンジ、右打掛"}function Aa(n=!1){if(g.cageType==="A_FRAMED")return n?"Type A 正面枠囲い（高剛性アルミ枠スライド扉仕様）":"Type A 正面枠囲い";if(g.cageType==="A_FRONT"){const e=Sn();return n?`Type A 前開き (${e})`:`Type A 前開き (${e})`}else if(g.cageType==="C")return n?"Type C（下部前窓＋扉仕様）":"Type C（前窓＋扉）";return n?"Type A（全面スライド扉仕様）":"Type A（全面スライド扉）"}function sx(){if(!Gu)return;const n=Aa(!1),e=`W${g.W} × D${g.D} × H${g.H} mm`,t=[];if(g.cageType==="A"){const i=g.frontWideFrame==="3x"?"正面3倍幅":g.frontWideFrame==="2x"?"正面2倍幅":"正面標準幅";t.push(i)}if(t.push(g.hasFloorReinforcement?"床補強: あり":"床補強: なし"),(g.hasTopReinforcement||g.W>940)&&t.push("天板補強: あり"),g.hasSideReinforcement&&t.push(`側面補強(上部開口): ${g.sideOpeningH}mm`),g.hasDoorAntiFlex&&t.push("扉たわみ防止"),g.hasSideVentCover&&t.push("換気調整板"),g.hasPerch&&t.push("止まり木"),g.hasRoomDivider&&t.push("２室分け"),g.ledType&&g.ledType!=="none"){const i={usb:"LED: USB式",rgbw:"LED: RGB+W"};t.push(i[g.ledType]||"LED照明")}t.push(g.footType==="caster"?"キャスター":"ゴム脚"),Gu.innerHTML=`
    <div class="spec-line-primary">${n} | ${e}</div>
    <div class="spec-line-sub">${t.join(" / ")}</div>
  `}function Pa(n,e,t,i){n.addEventListener("input",s=>{const o=parseInt(s.target.value,10);e.value=o,g[t]=o,i&&i(o),We()}),e.addEventListener("change",s=>{let o=parseInt(s.target.value,10);const r=parseInt(n.min,10),a=parseInt(n.max,10),c=parseInt(n.step,10)||10;isNaN(o)&&(o=r),o=Math.round(o/c)*c,o=Math.max(r,Math.min(a,o)),e.value=o,n.value=o,g[t]=o,i&&i(o),We()})}function ps(){if(g.W>940)ln.checked=!0,ln.disabled=!0,$o.classList.add("disabled"),mc.textContent="幅940mm超のため必須（解除不可）",g.hasFloorReinforcement=!0;else{ln.disabled=!1,$o.classList.remove("disabled"),mc.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください";const n=g.W*g.D>qd;g.hasFloorReinforcement=n,ln.checked=n}}Pa(nn,sn,"W",n=>{ps(),n>940?(It.checked=!0,It.disabled=!0,In.classList.add("disabled"),hi.textContent="幅940mm超のため必須（解除不可）",g.hasTopReinforcement=!0):(It.disabled=!1,In.classList.remove("disabled"),hi.textContent="940mm以下は任意指定（W>940mmは必須）",It.checked=!1,g.hasTopReinforcement=!1)});Pa(zi,Hi,"D",()=>{ps()});Pa(on,rn,"H",n=>{const e=Math.max(30,n-120);Wi.max=e,Vi.max=e,g.frontWindowH>e&&(g.frontWindowH=e,Wi.value=e,Vi.value=e);const t=50,i=Math.max(t,n-110),s=Math.round((n-60)/20)*10;at.min=t,at.max=i,g.hasSideReinforcement?g.sideOpeningH>i?(g.sideOpeningH=i,at.value=i):g.sideOpeningH<t&&(g.sideOpeningH=t,at.value=t):(g.sideOpeningH=s,at.value=s)});Pa(Wi,Vi,"frontWindowH");at.addEventListener("change",n=>{let e=parseInt(n.target.value,10);const t=50,i=Math.max(t,g.H-110),s=10;isNaN(e)&&(e=t),e=Math.round(e/s)*s,e=Math.max(t,Math.min(i,e)),at.value=e,g.sideOpeningH=e,We()});oo.addEventListener("change",n=>{if(g.hasSideReinforcement=n.target.checked,g.hasSideReinforcement){ds.classList.add("active"),fs.classList.remove("disabled");const e=50,t=Math.max(e,g.H-110);at.min=e,at.max=t;const i=Math.round((g.H-60)/20)*10;(g.sideOpeningH<e||g.sideOpeningH>t)&&(g.sideOpeningH=i,at.value=i)}else ds.classList.remove("active"),fs.classList.add("disabled");We()});ln.addEventListener("change",n=>{g.hasFloorReinforcement=n.target.checked,We()});It.addEventListener("change",n=>{g.hasTopReinforcement=n.target.checked,We()});function ox(){if(!xn||!cn)return;const n=g.cageType==="A_FRONT",e=g.cageType==="A_FRAMED",t=document.getElementById("door-anti-flex-sub");n||e?(g.hasDoorAntiFlex&&(g.hasDoorAntiFlex=!1,xn.checked=!1),xn.disabled=!0,cn.classList.add("disabled"),cn.classList.remove("active"),t&&(t.textContent=e?"※正面枠囲い仕様（扉なし）のため選択不可":"※前開き（横開き扉）仕様のためスライド扉用レールは選択不可")):(xn.disabled=!1,cn.classList.remove("disabled"),t&&(t.textContent="強力生体向け。左右端に縦レールを追加し内側からの変形を防止"))}function vc(){if(!hn||!Jt)return;const n=g.cageType==="A_FRONT",e=g.cageType==="A_FRAMED",t=g.hasPerch;n||t||e?(g.hasRoomDivider&&(g.hasRoomDivider=!1,hn.checked=!1,Mn&&Mn.classList.add("hidden")),hn.disabled=!0,Jt.classList.add("disabled"),Jt.classList.remove("active"),Fi&&(e?Fi.textContent="※正面枠囲い仕様では2室分け仕切り板は選択不可":n?Fi.textContent="※前開き仕様では2室分け仕切り板は選択不可":Fi.textContent="※止まり木オプション選択時は利用できません")):(hn.disabled=!1,Jt.classList.remove("disabled"),Fi&&(Fi.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"))}xn.addEventListener("change",n=>{if(g.cageType==="A_FRONT"){n.target.checked=!1,g.hasDoorAntiFlex=!1;return}g.hasDoorAntiFlex=n.target.checked,n.target.checked?cn.classList.add("active"):cn.classList.remove("active"),We()});zn.addEventListener("change",n=>{g.hasSideVentCover=n.target.checked,n.target.checked?yn.classList.add("active"):yn.classList.remove("active"),We()});St&&St.addEventListener("change",n=>{g.hasPerch=n.target.checked,n.target.checked?(bt&&bt.classList.add("active"),vc(),(g.panelConfig.top!=="punching"||g.panelConfig.topLeft!=="punching"||g.panelConfig.topRight!=="punching")&&(g.panelConfig.top="punching",g.panelConfig.topLeft="punching",g.panelConfig.topRight="punching",ao&&(ao.value="punching"),lo&&(lo.value="punching"),co&&(co.value="punching"),gi("※天面パンチングボードの穴を利用して固定するため、天面を塩ビパンチングに変更しました。金網天板との組み合わせは直接DMにてご相談ください。",6e3))):(bt&&bt.classList.remove("active"),vc()),We()});hn&&hn.addEventListener("change",n=>{g.hasRoomDivider=n.target.checked,n.target.checked?(Jt&&Jt.classList.add("active"),Mn&&Mn.classList.remove("hidden"),St&&(g.hasPerch&&(g.hasPerch=!1,St.checked=!1,bt&&bt.classList.remove("active")),St.disabled=!0),bt&&bt.classList.add("disabled"),Ys&&(Ys.textContent="※２室分けオプション選択時は利用できません"),(g.panelConfig.top!=="punching"||g.panelConfig.topLeft!=="punching"||g.panelConfig.topRight!=="punching")&&gi("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3)):(Jt&&Jt.classList.remove("active"),Mn&&Mn.classList.add("hidden"),St&&(St.disabled=!1),bt&&bt.classList.remove("disabled"),Ys&&(Ys.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応")),We()});ho&&ho.addEventListener("change",n=>{g.panelConfig.partition=n.target.value,We()});ri.addEventListener("change",n=>{n.target.checked?(g.frontWideFrame="2x",Kn="2x"):(g.frontWideFrame="none",Kn="none"),We()});ai.addEventListener("change",n=>{n.target.checked?(g.frontWideFrame="3x",Kn="3x"):(g.frontWideFrame="none",Kn="none"),We()});qn.addEventListener("change",n=>{g.hasRubberPacking=n.target.checked,n.target.checked?Un.classList.add("active"):Un.classList.remove("active"),We()});$i&&$i.addEventListener("change",n=>{g.hasFloorHeaterSupport=n.target.checked,n.target.checked?gn==null||gn.classList.add("active"):gn==null||gn.classList.remove("active"),We()});bn.addEventListener("click",()=>{g.cageType="A",g.frontWideFrame=Kn,bn.classList.add("active"),Tt==null||Tt.classList.remove("active"),wt==null||wt.classList.remove("active"),Hn.classList.remove("active"),Zn.classList.add("hidden"),Ft.textContent="Type A 選択中 (全面スライド扉)",gs(),We()});Tt==null||Tt.addEventListener("click",()=>{g.cageType="A_FRONT",g.frontWideFrame=Kn,Tt.classList.add("active"),bn.classList.remove("active"),wt==null||wt.classList.remove("active"),Hn.classList.remove("active"),Zn.classList.add("hidden"),Ft.textContent=`Type A 前開き 選択中 (${Sn()})`,gs(),We()});wt==null||wt.addEventListener("click",()=>{g.cageType="A_FRAMED",wt.classList.add("active"),bn.classList.remove("active"),Tt==null||Tt.classList.remove("active"),Hn.classList.remove("active"),Zn.classList.add("hidden"),Ft.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)",gs(),We()});Hn.addEventListener("click",()=>{g.cageType="C",g.frontWideFrame="none",Hn.classList.add("active"),bn.classList.remove("active"),Tt==null||Tt.classList.remove("active"),wt==null||wt.classList.remove("active"),Zn.classList.remove("hidden"),Ft.textContent="Type C 選択中 (前窓＋扉)",gs(),We()});const rx=600,ax=700,lx=900,cx=450,hx=300,ux=200,dx=1800,fx=900;function px(){const n=g.cageType==="A_FRONT",e=g.cageType==="A_FRAMED",t=e?lx:hx,i=e?cx:ux,s=n?rx:dx,o=n?ax:fx;nn&&sn&&(nn.min=t,sn.min=t,nn.max=s,sn.max=s,g.W<t?(g.W=t,nn.value=t,sn.value=t,ps()):g.W>s&&(g.W=s,nn.value=s,sn.value=s,ps())),on&&rn&&(on.min=i,rn.min=i,on.max=o,rn.max=o,g.H<i?(g.H=i,on.value=i,rn.value=i):g.H>o&&(g.H=o,on.value=o,rn.value=o))}function gs(){const n=g.cageType==="A_FRONT",e=g.cageType==="A_FRAMED";px(),ox(),vc(),Ln==null||Ln.classList.toggle("hidden",e||g.cageType==="C"),Dn==null||Dn.classList.toggle("hidden",e||g.cageType==="C"),ml&&(n?(ml.classList.remove("hidden"),fi==null||fi.classList.toggle("active",g.doorHingeSide!=="right"),pi==null||pi.classList.toggle("active",g.doorHingeSide==="right")):ml.classList.add("hidden"));const t=Hr?Hr.closest(".control-section"):null;t&&t.classList.remove("hidden"),Hr&&Ou&&(Hr.style.display=n?"none":"grid",Ou.style.display=n?"grid":"none"),ku&&(ku.textContent=n?"前開き扉 開閉":"引き違いスライド扉 開閉");const i=g.doorState||"closed";Yd.forEach(s=>{s.classList.toggle("active",s.getAttribute("data-mode")===i)})}fi&&fi.addEventListener("click",()=>{g.doorHingeSide="left",fi.classList.add("active"),pi==null||pi.classList.remove("active"),g.cageType==="A_FRONT"&&(Ft.textContent=`Type A 前開き 選択中 (${Sn()})`),We()});pi&&pi.addEventListener("click",()=>{g.doorHingeSide="right",pi.classList.add("active"),fi==null||fi.classList.remove("active"),g.cageType==="A_FRONT"&&(Ft.textContent=`Type A 前開き 選択中 (${Sn()})`),We()});_i.addEventListener("click",()=>{g.frameColor="silver",_i.classList.add("active"),vi.classList.remove("active"),We()});vi.addEventListener("click",()=>{g.frameColor="black",vi.classList.add("active"),_i.classList.remove("active"),We()});Xi.addEventListener("change",n=>{g.footType=n.target.checked?"caster":"rubber",n.target.checked?xi.classList.add("active"):xi.classList.remove("active"),We()});function Zo(){g.ledType&&g.ledType!=="none"?(ks==null||ks.classList.add("active"),Gs==null||Gs.classList.remove("hidden"),g.ledType==="usb"?(fn==null||fn.classList.remove("hidden"),pn==null||pn.classList.add("hidden")):g.ledType==="rgbw"?(fn==null||fn.classList.add("hidden"),pn==null||pn.classList.remove("hidden")):(fn==null||fn.classList.add("hidden"),pn==null||pn.classList.add("hidden"))):(ks==null||ks.classList.remove("active"),Gs==null||Gs.classList.add("hidden")),Go&&zo&&(g.ledPower?(Go.classList.add("active"),zo.classList.remove("active")):(Go.classList.remove("active"),zo.classList.add("active"))),Bn&&Bn.classList.toggle("active",!!Qe.isDarkroomMode)}uo&&uo.addEventListener("change",n=>{g.ledType=n.target.value,g.ledType!=="none"&&(g.ledPower=!0),Qe.setDarkroomOverride(null),Zo(),We(),Bn&&Bn.classList.toggle("active",!!Qe.isDarkroomMode)});Go&&zo&&(Go.addEventListener("click",()=>{g.ledPower=!0,Qe.setDarkroomOverride(null),Zo(),We(),Bn&&Bn.classList.toggle("active",!!Qe.isDarkroomMode)}),zo.addEventListener("click",()=>{g.ledPower=!1,Qe.setDarkroomOverride(null),Zo(),We(),Bn&&Bn.classList.toggle("active",!!Qe.isDarkroomMode)}));fn&&fn.querySelectorAll(".btn-led-mode").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.usbMode;g.ledColorMode=t,fn.querySelectorAll(".btn-led-mode").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),We()})});pn&&pn.querySelectorAll(".btn-color-dot").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.color;g.ledRgbColor=t,pn.querySelectorAll(".btn-color-dot").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),We()})});Bn&&Bn.addEventListener("click",()=>{const n=!Qe.isDarkroomMode;Qe.setDarkroomOverride(n),Bn.classList.toggle("active",n)});let Wr=null;function mo(n){g.doorState=n,Yd.forEach(t=>{t.getAttribute("data-mode")===n?t.classList.add("active"):t.classList.remove("active")});const e=document.querySelector(".door-mode-group");e.classList.add("door-animating"),Wr&&clearTimeout(Wr),Wr=setTimeout(()=>{e.classList.remove("door-animating"),Wr=null},3100),Qe.setDoorState(n)}Vd.addEventListener("click",()=>mo("closed"));Xd.addEventListener("click",()=>mo("left_open"));$d.addEventListener("click",()=>mo("right_open"));na==null||na.addEventListener("click",()=>mo("closed"));ia==null||ia.addEventListener("click",()=>mo("open"));function jd(n){Nc=n,Qe.setAutoRotate(n,g),n?(_c.classList.add("active","rotating"),gc.forEach(e=>e.classList.remove("active"))):_c.classList.remove("active","rotating")}_c.addEventListener("click",()=>{jd(!Nc)});gc.forEach(n=>{n.addEventListener("click",()=>{jd(!1),gc.forEach(t=>t.classList.remove("active")),n.classList.add("active");const e=n.getAttribute("data-view");Qe.setViewPreset(e,g)})});Zv.addEventListener("click",()=>{g.W=750,g.D=450,g.H=300,g.cageType="A",g.frontWindowH=50,g.hasSideReinforcement=!1,g.sideOpeningH=120,mo("closed"),nn.value=750,sn.value=750,zi.value=450,Hi.value=450,on.value=300,rn.value=300,Wi.value=50,Vi.value=50,oo.checked=!1,ds.classList.remove("active"),fs.classList.add("disabled"),at.min=50,at.max=190,at.value=120,ln.checked=!1,ln.disabled=!1,$o.classList.remove("disabled"),mc.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください",g.hasFloorReinforcement=!1,It.checked=!1,It.disabled=!1,In.classList.remove("disabled"),hi.textContent="940mm以下は任意指定（W>940mmは必須）",g.hasTopReinforcement=!1,Xi.checked=!1,xi.classList.remove("active"),g.footType="rubber",xn.checked=!1,cn.classList.remove("active"),g.hasDoorAntiFlex=!1,zn.checked=!1,yn.classList.remove("active"),g.hasSideVentCover=!1,St&&(St.checked=!1,St.disabled=!1),bt&&bt.classList.remove("active","disabled"),Ys&&(Ys.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応"),g.hasPerch=!1,hn&&(hn.checked=!1,hn.disabled=!1),Jt&&Jt.classList.remove("active","disabled"),Fi&&(Fi.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"),Mn&&Mn.classList.add("hidden"),ho&&(ho.value="black_matte"),g.hasRoomDivider=!1,qn&&(qn.checked=!1),Un&&Un.classList.remove("active"),g.hasRubberPacking=!1,$i&&($i.checked=!1),gn&&gn.classList.remove("active"),g.hasFloorHeaterSupport=!1,g.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"},g.ledType="none",g.ledPower=!0,g.ledBrightness=1,g.ledColorMode="all",g.ledRgbColor="#ffffff",uo&&(uo.value="none"),Qe.setDarkroomOverride(null),Zo(),g.frontWideFrame="2x",Kn="2x",bn.click(),Qe.setViewPreset("iso",g),We()});ro&&ro.addEventListener("change",n=>{g.panelConfig.floor=n.target.value,We()});fa.addEventListener("change",n=>{g.panelConfig.back=n.target.value,We()});pa.addEventListener("change",n=>{g.panelConfig.side=n.target.value,We()});ma.addEventListener("change",n=>{g.panelConfig.sideUpper=n.target.value,Qo(),We()});ga.addEventListener("change",n=>{g.panelConfig.sideLower=n.target.value,We()});ao.addEventListener("change",n=>{g.panelConfig.top=n.target.value,g.hasPerch&&n.target.value!=="punching"?gi("※止まり木は天面パンチングボードの穴を利用します。金網天板やアクリル天板との組み合わせは直接DMにてご相談ください。",5e3):g.hasRoomDivider&&n.target.value!=="punching"&&gi("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),We()});lo.addEventListener("change",n=>{g.panelConfig.topLeft=n.target.value,g.hasPerch&&n.target.value!=="punching"?gi("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):g.hasRoomDivider&&n.target.value!=="punching"&&gi("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),We()});co.addEventListener("change",n=>{g.panelConfig.topRight=n.target.value,g.hasPerch&&n.target.value!=="punching"?gi("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):g.hasRoomDivider&&n.target.value!=="punching"&&gi("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),We()});const $u=document.querySelectorAll(".sidebar-tab"),mx=document.querySelectorAll(".tab-pane");$u.forEach(n=>{n.addEventListener("click",()=>{const e=n.getAttribute("data-tab");$u.forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),n.classList.add("active"),n.setAttribute("aria-selected","true"),mx.forEach(t=>{t.id===e?t.classList.add("active"):t.classList.remove("active")}),Qe&&typeof Qe.onResize=="function"&&setTimeout(()=>Qe.onResize(),50)})});let Vr=!0;xl&&xl.addEventListener("click",()=>{Vr=!Vr,xl.classList.toggle("active",Vr),zu&&zu.classList.toggle("hidden",!Vr)});let Xr=!0;Ml&&Ml.addEventListener("click",()=>{Xr=!Xr,Ml.classList.toggle("active",Xr),Hu&&Hu.classList.toggle("hidden",!Xr)});at&&(at.min=50,at.max=Math.max(50,g.H-110),at.value=g.sideOpeningH);We();Qe.setViewPreset("iso",g);Fn&&Fn.addEventListener("click",()=>{qo()});function gx(){!Js||!Array.isArray(ua)||(Js.innerHTML="",ua.forEach(n=>{const e=document.createElement("button");e.className="creature-card",e.dataset.presetId=n.id,e.title=`${n.name} (${n.W}×${n.D}×${n.H}mm)`;const t=Array.isArray(n.tags)&&n.tags.length>0?`<div class="creature-card-tags">
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
    `,e.addEventListener("click",()=>{Jd(n)}),Js.appendChild(e)}))}function Jd(n){if(g.W=n.W,g.D=n.D,g.H=n.H,n.cageType&&(n.cageType==="A"||n.cageType==="A_FRONT"||n.cageType==="A_FRAMED"||n.cageType==="C")&&(g.cageType=n.cageType,bn&&Hn&&(bn.classList.toggle("active",g.cageType==="A"),Tt==null||Tt.classList.toggle("active",g.cageType==="A_FRONT"),wt==null||wt.classList.toggle("active",g.cageType==="A_FRAMED"),Hn.classList.toggle("active",g.cageType==="C"),Ft&&(g.cageType==="A_FRAMED"?Ft.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":g.cageType==="A_FRONT"?(g.doorHingeSide=n.doorHingeSide||"left",Ft.textContent=`Type A 前開き 選択中 (${Sn()})`):Ft.textContent=g.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Zn&&Zn.classList.toggle("hidden",g.cageType!=="C"),gs())),g.cageType==="C"){const s=n.frontWindowH!=null?n.frontWindowH:50;g.frontWindowH=s,Vi&&(Vi.value=s),Wi&&(Wi.value=s)}if(n.frameColor&&(n.frameColor==="silver"||n.frameColor==="black")&&(g.frameColor=n.frameColor,_i&&vi&&(_i.classList.toggle("active",g.frameColor==="silver"),vi.classList.toggle("active",g.frameColor==="black"))),g.cageType==="A"){const s=n.frontWideFrame||"2x";g.frontWideFrame=s,Kn=s}else g.frontWideFrame="none";g.hasSideReinforcement=!!n.hasSideReinforcement,oo&&(oo.checked=g.hasSideReinforcement),ds&&ds.classList.toggle("active",g.hasSideReinforcement),fs&&fs.classList.toggle("disabled",!g.hasSideReinforcement);const e=50,t=Math.max(e,g.H-110);if(at&&(at.min=e,at.max=t),n.sideOpeningH!=null)g.sideOpeningH=Math.max(e,Math.min(t,n.sideOpeningH)),at&&(at.value=g.sideOpeningH);else if(g.hasSideReinforcement){const s=Math.round((g.H-60)/20)*10;g.sideOpeningH=s,at&&(at.value=s)}g.hasDoorAntiFlex=!!n.hasDoorAntiFlex,xn&&(xn.checked=g.hasDoorAntiFlex),cn&&cn.classList.toggle("active",g.hasDoorAntiFlex),g.hasSideVentCover=!!n.hasSideVentCover,zn&&(zn.checked=g.hasSideVentCover),yn&&yn.classList.toggle("active",g.hasSideVentCover),g.hasPerch=!!n.hasPerch,St&&(St.checked=g.hasPerch),bt&&bt.classList.toggle("active",g.hasPerch),n.panelConfig&&(g.panelConfig={...g.panelConfig,...n.panelConfig}),g.footType=n.footType||"rubber",Xi&&(Xi.checked=g.footType==="caster"),xi&&xi.classList.toggle("active",g.footType==="caster"),sn&&(sn.value=g.W),nn&&(nn.value=g.W),Hi&&(Hi.value=g.D),zi&&(zi.value=g.D),rn&&(rn.value=g.H),on&&(on.value=g.H),n.hasFloorReinforcement!=null?(g.hasFloorReinforcement=!!n.hasFloorReinforcement,ln&&(ln.checked=g.hasFloorReinforcement)):ps(),g.W>940?(It.checked=!0,It.disabled=!0,In.classList.add("disabled"),hi.textContent="幅940mm超のため必須（解除不可）",g.hasTopReinforcement=!0):(It.disabled=!1,In.classList.remove("disabled"),hi.textContent="940mm以下は任意指定（W>940mmは必須）",g.hasTopReinforcement=!!n.hasTopReinforcement,It.checked=g.hasTopReinforcement),Ca(),Qo(),Js.querySelectorAll(".creature-card").forEach(s=>{s.classList.toggle("active",s.dataset.presetId===n.id)}),We(),Qe.setViewPreset("iso",g)}function _x(n){if(!n||typeof n!="object")return!1;Number.isFinite(n.W)&&(g.W=Number(n.W),sn&&(sn.value=g.W),nn&&(nn.value=g.W)),Number.isFinite(n.D)&&(g.D=Number(n.D),Hi&&(Hi.value=g.D),zi&&(zi.value=g.D)),Number.isFinite(n.H)&&(g.H=Number(n.H),rn&&(rn.value=g.H),on&&(on.value=g.H));const e=["A","A_FRONT","A_FRAMED","C"];if(n.cageType&&e.includes(n.cageType)&&(g.cageType=n.cageType,bn&&Hn&&(bn.classList.toggle("active",g.cageType==="A"),Tt==null||Tt.classList.toggle("active",g.cageType==="A_FRONT"),wt==null||wt.classList.toggle("active",g.cageType==="A_FRAMED"),Hn.classList.toggle("active",g.cageType==="C"),Ft&&(g.cageType==="A_FRAMED"?Ft.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":g.cageType==="A_FRONT"?(g.doorHingeSide=n.doorHingeSide||"left",Ft.textContent=`Type A 前開き 選択中 (${Sn()})`):Ft.textContent=g.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Zn&&Zn.classList.toggle("hidden",g.cageType!=="C"),gs())),g.cageType==="C"){const i=n.frontWindowH!=null?Number(n.frontWindowH):50;g.frontWindowH=i,Vi&&(Vi.value=i),Wi&&(Wi.value=i)}if(n.doorHingeSide&&(n.doorHingeSide==="left"||n.doorHingeSide==="right")&&(g.doorHingeSide=n.doorHingeSide),n.frameColor&&(n.frameColor==="silver"||n.frameColor==="black")&&(g.frameColor=n.frameColor,_i&&vi&&(_i.classList.toggle("active",g.frameColor==="silver"),vi.classList.toggle("active",g.frameColor==="black"))),n.footType&&(n.footType==="caster"||n.footType==="rubber")&&(g.footType=n.footType,Xi&&(Xi.checked=g.footType==="caster"),xi&&xi.classList.toggle("active",g.footType==="caster")),g.cageType==="A"&&n.frontWideFrame?(g.frontWideFrame=n.frontWideFrame,Kn=n.frontWideFrame):g.cageType!=="A"&&(g.frontWideFrame="none"),typeof n.hasSideReinforcement=="boolean"){g.hasSideReinforcement=n.hasSideReinforcement,oo&&(oo.checked=g.hasSideReinforcement),ds&&ds.classList.toggle("active",g.hasSideReinforcement),fs&&fs.classList.toggle("disabled",!g.hasSideReinforcement);const i=50,s=Math.max(i,g.H-110);at&&(at.min=i,at.max=s),n.sideOpeningH!=null&&(g.sideOpeningH=Math.max(i,Math.min(s,Number(n.sideOpeningH))),at&&(at.value=g.sideOpeningH))}_a&&va&&(_a.classList.toggle("hidden",g.hasSideReinforcement),va.classList.toggle("hidden",!g.hasSideReinforcement)),typeof n.hasDoorAntiFlex=="boolean"&&(g.hasDoorAntiFlex=n.hasDoorAntiFlex,xn&&(xn.checked=g.hasDoorAntiFlex),cn&&cn.classList.toggle("active",g.hasDoorAntiFlex)),typeof n.hasSideVentCover=="boolean"&&(g.hasSideVentCover=n.hasSideVentCover,zn&&(zn.checked=g.hasSideVentCover),yn&&yn.classList.toggle("active",g.hasSideVentCover)),typeof n.hasPerch=="boolean"&&(g.hasPerch=n.hasPerch,St&&(St.checked=g.hasPerch),bt&&bt.classList.toggle("active",g.hasPerch)),typeof n.hasRubberPacking=="boolean"&&(g.hasRubberPacking=n.hasRubberPacking,qn&&(qn.checked=g.hasRubberPacking),Un&&Un.classList.toggle("active",g.hasRubberPacking)),typeof n.hasFloorHeaterSupport=="boolean"&&(g.hasFloorHeaterSupport=n.hasFloorHeaterSupport,$i&&($i.checked=g.hasFloorHeaterSupport),gn&&gn.classList.toggle("active",g.hasFloorHeaterSupport)),typeof n.hasFloorReinforcement=="boolean"?(g.hasFloorReinforcement=n.hasFloorReinforcement,ln&&(ln.checked=g.hasFloorReinforcement),$o&&$o.classList.toggle("active",g.hasFloorReinforcement)):ps(),g.W>940?(It&&(It.checked=!0,It.disabled=!0),In&&In.classList.add("disabled"),hi&&(hi.textContent="幅940mm超のため必須（解除不可）"),g.hasTopReinforcement=!0):(It&&(It.disabled=!1),In&&In.classList.remove("disabled"),hi&&(hi.textContent="940mm以下は任意指定（W>940mmは必須）"),g.hasTopReinforcement=!!n.hasTopReinforcement,It&&(It.checked=g.hasTopReinforcement),In&&In.classList.toggle("active",g.hasTopReinforcement));const t=g.hasTopReinforcement||g.W>940;return xa&&Ma&&(xa.classList.toggle("hidden",t),Ma.classList.toggle("hidden",!t)),typeof n.hasRoomDivider=="boolean"&&(g.hasRoomDivider=n.hasRoomDivider,hn&&(hn.checked=g.hasRoomDivider),Jt&&Jt.classList.toggle("active",g.hasRoomDivider),Mn&&Mn.classList.toggle("hidden",!g.hasRoomDivider),g.hasRoomDivider&&St&&(g.hasPerch=!1,St.checked=!1,St.disabled=!0,bt&&bt.classList.add("disabled"))),n.ledType&&(g.ledType=n.ledType,uo&&(uo.value=g.ledType),typeof n.ledPower=="boolean"&&(g.ledPower=n.ledPower),typeof n.ledBrightness=="number"&&(g.ledBrightness=n.ledBrightness),n.ledColorMode&&(g.ledColorMode=n.ledColorMode),n.ledRgbColor&&(g.ledRgbColor=n.ledRgbColor),Zo()),n.panelConfig&&typeof n.panelConfig=="object"&&(g.panelConfig={...g.panelConfig,...n.panelConfig},ro&&g.panelConfig.floor&&(ro.value=g.panelConfig.floor),fa&&g.panelConfig.back&&(fa.value=g.panelConfig.back),pa&&g.panelConfig.side&&(pa.value=g.panelConfig.side),ma&&g.panelConfig.sideUpper&&(ma.value=g.panelConfig.sideUpper),ga&&g.panelConfig.sideLower&&(ga.value=g.panelConfig.sideLower),ao&&g.panelConfig.top&&(ao.value=g.panelConfig.top),lo&&g.panelConfig.topLeft&&(lo.value=g.panelConfig.topLeft),co&&g.panelConfig.topRight&&(co.value=g.panelConfig.topRight),ho&&g.panelConfig.partition&&(ho.value=g.panelConfig.partition)),Js&&Js.querySelectorAll(".creature-card").forEach(s=>s.classList.remove("active")),Ca(),Qo(),We(),Qe.setViewPreset("iso",g),typeof qo=="function"&&qo(),!0}async function xc(n){var t,i,s,o,r,a,c;if(!n||typeof n!="string"){Di("error","見積りIDを入力してください。");return}const e=n.trim().toUpperCase();if(!e.startsWith("EST-")||e.length<10){Di("error","見積りIDの形式が正しくありません。（例: EST-20261005-AB12）");return}Di("loading",`⏳ 見積ID「${e}」の仕様データを検索中...`),Vs&&(Vs.disabled=!0);try{let l=null,h=null;const d=(t=He==null?void 0:He.system)==null?void 0:t.gasLogEndpointUrl;let p=!1,f=!1;if(d&&d.startsWith("http"))try{const _=`${d}?estimateId=${encodeURIComponent(e)}`;console.log("[Restore] GASへ見積りデータ問い合わせ中:",_);const m=await(await fetch(_,{method:"GET",mode:"cors"})).text();if(m.includes("スクリプト関数が見つかりません")||m.includes("doGet"))p=!0,console.warn("[Restore] GAS側に doGet が未デプロイです。");else try{const u=JSON.parse(m);u.status==="success"&&u.spec?(l=u.spec,h=u,console.log("[Restore] GASから仕様データを正常に受信:",u)):u.status==="not_found"&&(f=!0,console.warn("[Restore] GAS上で該当見積りが見つかりませんでした:",u.message))}catch(u){console.warn("[Restore] レスポンスのJSONパースに失敗:",u,m.substring(0,200))}}catch(_){console.warn("[Restore] GAS通信エラー（ローカルキャッシュ検索へフォールバック）:",_)}if(!l)try{const _=localStorage.getItem(`kinato_estimate_${e}`);if(_){const v=JSON.parse(_);v&&v.spec&&(l=v.spec,h=v,console.log("[Restore] localStorageから仕様データを復元:",v))}else{const v=localStorage.getItem("kinato_latest_estimate");if(v){const m=JSON.parse(v);m&&m.estimateId===e&&m.spec&&(l=m.spec,h=m,console.log("[Restore] 最新localStorageキャッシュから仕様データを復元:",m))}}}catch(_){console.warn("[Restore] localStorage検索エラー:",_)}if(!l){p?Di("error","⚠️ スプレッドシート側のGASに最新コード（doGet）がまだ保存・デプロイされていません。Google Apps Scriptを更新して再度お試しください。"):f?Di("error",`❌ スプレッドシート内に見積ID「${e}」の記録が見つかりませんでした。IDをお確かめください。`):Di("error",`❌ 見積ID「${e}」が見つかりませんでした。入力内容をお確かめください。`);return}if(_x(l),h){const _=((i=h.summary)==null?void 0:i.originalPrice)||((s=h.totals)==null?void 0:s.priceWithMarkup)||((o=h.originalTotals)==null?void 0:o.priceWithMarkup),v=((r=h.summary)==null?void 0:r.originalWeight)||((a=h.totals)==null?void 0:a.weight)||((c=h.originalTotals)==null?void 0:c.weight);console.log(`[仕様再現 検証] 見積ID: ${e} | 記録時価格: ¥${_==null?void 0:_.toLocaleString()} / 重量: ${v}kg`)}Di("success",`✅ 見積ID「${e}」のケージ仕様・全オプションを完全再現しました！`),gi(`✅ 見積ID: ${e} の仕様を完全に読み込みました！`,4500)}catch(l){console.error("[Restore] 復元処理エラー:",l),Di("error",`エラーが発生しました: ${l.message}`)}finally{Vs&&(Vs.disabled=!1)}}function Di(n,e){Br&&(Br.className=`restore-status-msg ${n}`,Br.textContent=e,Br.classList.remove("hidden"))}Vs&&os&&(Vs.addEventListener("click",()=>{xc(os.value)}),os.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),xc(os.value))}),os.addEventListener("input",n=>{n.target.value=n.target.value.toUpperCase()}));function vx(){const n=new Date,e=n.getFullYear()+String(n.getMonth()+1).padStart(2,"0")+String(n.getDate()).padStart(2,"0"),t=Math.random().toString(36).substring(2,6).toUpperCase();return`EST-${e}-${t}`}function Qd(){try{let n=localStorage.getItem("cage_visitor_id");return n||(n="usr_"+Math.random().toString(36).substring(2,8),localStorage.setItem("cage_visitor_id",n)),n}catch{return"usr_"+Math.random().toString(36).substring(2,8)}}function ef(){try{let n=sessionStorage.getItem("cage_session_id");return n||(n="ses_"+Math.random().toString(36).substring(2,8),sessionStorage.setItem("cage_session_id",n)),n}catch{return"ses_"+Math.random().toString(36).substring(2,8)}}function xx(n){Ni=vx(),Uu++;let e="初期表示からの試算";if(nt){const i=[];g.W!==nt.W&&i.push(`W:${nt.W}→${g.W}`),g.D!==nt.D&&i.push(`D:${nt.D}→${g.D}`),g.H!==nt.H&&i.push(`H:${nt.H}→${g.H}`),g.cageType!==nt.cageType&&i.push(`タイプ:${g.cageType}`),g.cageType==="C"&&g.frontWindowH!==nt.frontWindowH&&i.push(`前窓高:${nt.frontWindowH}→${g.frontWindowH}`),g.cageType==="A_FRONT"&&g.doorHingeSide!==nt.doorHingeSide&&i.push(`開き:${Sn(nt.doorHingeSide)}→${Sn(g.doorHingeSide)}`),g.frameColor!==nt.frameColor&&i.push(`色:${nt.frameColor==="black"?"黒":"銀"}→${g.frameColor==="black"?"黒":"銀"}`),g.frontWideFrame!==nt.frontWideFrame&&i.push(`正面下部:${nt.frontWideFrame||"なし"}→${g.frontWideFrame||"なし"}`),g.footType!==nt.footType&&i.push(`脚:${g.footType==="caster"?"キャスター":"ゴム脚"}`),g.hasFloorReinforcement!==nt.hasFloorReinforcement&&i.push(g.hasFloorReinforcement?"床補強追加":"床補強解除"),g.hasTopReinforcement!==nt.hasTopReinforcement&&i.push(g.hasTopReinforcement?"天板補強追加":"天板補強解除"),g.hasSideReinforcement!==nt.hasSideReinforcement&&i.push(g.hasSideReinforcement?"側面補強追加":"側面補強解除"),g.hasDoorAntiFlex!==nt.hasDoorAntiFlex&&i.push(g.hasDoorAntiFlex?"扉たわみ防止追加":"扉たわみ防止解除"),g.hasSideVentCover!==nt.hasSideVentCover&&i.push(g.hasSideVentCover?"換気調整板追加":"換気調整板解除"),g.hasPerch!==nt.hasPerch&&i.push(g.hasPerch?"止まり木追加":"止まり木解除"),g.hasRubberPacking!==nt.hasRubberPacking&&i.push(g.hasRubberPacking?"ゴムパッキン追加":"ゴムパッキン解除"),g.hasFloorHeaterSupport!==nt.hasFloorHeaterSupport&&i.push(g.hasFloorHeaterSupport?"床下ヒータ支え板追加":"床下ヒータ支え板解除"),g.hasRoomDivider!==nt.hasRoomDivider&&i.push(g.hasRoomDivider?"2室分け追加":"2室分け解除"),g.hasSideReinforcement&&g.sideOpeningH!==nt.sideOpeningH&&i.push(`側上部開口:${nt.sideOpeningH}→${g.sideOpeningH}`);const s=nt.panelConfig||{},o=g.panelConfig||{};o.floor!==s.floor&&i.push(`床:${Zt(s.floor)}→${Zt(o.floor)}`),o.back!==s.back&&i.push(`背:${Zt(s.back)}→${Zt(o.back)}`),g.hasSideReinforcement?(o.sideUpper!==s.sideUpper||o.sideLower!==s.sideLower)&&i.push(`側分割:${Zt(o.sideUpper)}/${Zt(o.sideLower)}`):o.side!==s.side&&i.push(`側:${Zt(s.side)}→${Zt(o.side)}`);const r=g.hasTopReinforcement||g.W>940,a=nt.hasTopReinforcement||nt.W>940;r||a?(o.topLeft!==s.topLeft||o.topRight!==s.topRight||!a)&&i.push(`天分割:${Zt(o.topLeft)}/${Zt(o.topRight)}`):o.top!==s.top&&i.push(`天:${Zt(s.top)}→${Zt(o.top)}`),g.hasRoomDivider&&o.partition!==s.partition&&i.push(`仕切り:${Zt(s.partition)}→${Zt(o.partition)}`),i.length>0?e=i.join(", "):e="同一条件での再計算"}const t=Mx(Ni,n);Pu&&(Pu.textContent=Ni),Ru&&(Ru.textContent=`¥${n.priceWithMarkup.toLocaleString()}`),Lu&&(Lu.textContent=`${n.weight.toFixed(1)} kg`),ko&&(ko.value=t),vn&&(Kt&&Kt.classList.add("hidden"),da&&da.classList.add("hidden"),window.lastGeneratedEstimateImage=null,vn.classList.remove("hidden")),as={estimateId:Ni,timestamp:new Date().toISOString(),visitorId:Hd,sessionId:fc,seq:Uu,spec:{...g},totals:{...n},diffNote:e,elapsedSec:Math.round((Date.now()-$v)/1e3)},nt=JSON.parse(JSON.stringify(g));try{localStorage.setItem(`kinato_estimate_${Ni}`,JSON.stringify(as)),localStorage.setItem("kinato_latest_estimate",JSON.stringify(as))}catch{}Sx(as)}function Bc(){return g.frameColor==="black"?"ブラック":"シルバー"}function Vn(n){switch(n){case"acrylic":return"透明アクリル 3.0mm";case"black_matte":return"アクリル黒両面マット 3.0mm";case"smoke_gray":return"アクリル グレースモーク半透明 3.0mm";case"punching":return"塩ビパンチングボード 3.0mm";case"polyca":return"中空ポリカ 4.0mm";case"mesh15":return"金網15mmピッチ (黒粉体塗装)";case"mesh25":return"金網25mmピッチ (黒粉体塗装)";case"mesh30":return"金網30mmピッチ (黒粉体塗装)";default:return n||"透明アクリル 3.0mm"}}function Zt(n){switch(n){case"acrylic":return"透明アクリル";case"black_matte":return"黒マット";case"smoke_gray":return"グレースモーク";case"punching":return"パンチング";case"polyca":return"中空ポリカ";case"mesh15":return"金網15mm";case"mesh25":return"金網25mm";case"mesh30":return"金網30mm";default:return n||"アクリル"}}function Oc(){const n=[];return g.cageType==="C"?(n.push({face:"正面扉",name:"透明アクリル 3.0mm (スライド扉)"}),n.push({face:"正面固定窓",name:`透明アクリル 3.0mm (開口高 ${g.frontWindowH}mm)`})):g.cageType==="A_FRONT"?n.push({face:"正面扉",name:`透明アクリル 3.0mm (前開き扉: ${Sn()})`}):n.push({face:"正面扉",name:"透明アクリル 3.0mm (全面スライド扉)"}),n.push({face:g.hasFloorReinforcement?"床面 (中央2分割)":"床面",name:Vn(g.panelConfig.floor)}),n.push({face:"背面",name:Vn(g.panelConfig.back)}),g.hasSideReinforcement?n.push({face:"側面 (左右2分割)",name:`上部: ${Vn(g.panelConfig.sideUpper)} / 下部: ${Vn(g.panelConfig.sideLower)}`}):n.push({face:"側面 (左右)",name:Vn(g.panelConfig.side)}),g.hasTopReinforcement||g.W>940?g.panelConfig.topLeft===g.panelConfig.topRight?n.push({face:"天面 (中央2分割)",name:`${Vn(g.panelConfig.topLeft)} (左右共通)`}):n.push({face:"天面 (中央2分割)",name:`左: ${Vn(g.panelConfig.topLeft)} / 右: ${Vn(g.panelConfig.topRight)}`}):n.push({face:"天面",name:Vn(g.panelConfig.top)}),g.hasRoomDivider&&n.push({face:"仕切り板",name:Vn(g.panelConfig.partition||"black_matte")}),n}function kc(){const n=[];if(g.cageType==="A_FRONT"&&n.push(`前開き扉仕様 (${Sn()})`),g.cageType==="A"&&(g.frontWideFrame==="2x"?n.push("正面下側幅広フレーム2倍幅 (40mm)"):g.frontWideFrame==="3x"&&n.push("正面下側幅広フレーム3倍幅 (60mm)")),g.cageType==="C"&&n.push(`前窓固定仕様 (開口高さ ${g.frontWindowH}mm)`),g.hasSideReinforcement&&n.push(`側面補強フレーム (側面上部開口 ${g.sideOpeningH}mm・左右2分割)`),g.hasSideVentCover&&(g.hasSideReinforcement?n.push("側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)"):n.push("側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)")),g.hasFloorReinforcement&&n.push("床面中央補強フレーム (2分割仕様)"),g.W>940?n.push("天板中央補強フレーム (幅940mm超・標準付属/2分割仕様)"):g.hasTopReinforcement&&n.push("天板中央補強フレーム (2分割仕様)"),g.hasDoorAntiFlex&&n.push("正面スライド扉たわみ防止レール"),g.footType==="caster"&&n.push("自在キャスター仕様 (4輪・高さ66mm)"),g.hasPerch){const e=g.W-120,t=Math.floor(e/7)*7,i=Math.max(10,t-15);n.push(`止まり木（天板吊り下げ式・φ30アルミ丸棒 L=${i}mm・後付け可）`)}if(g.hasRubberPacking&&n.push("モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)"),g.hasFloorHeaterSupport&&(g.hasFloorReinforcement?n.push("床下パネルヒータ支え板 (床面2分割用・透明アクリル2.0mm 2枚＋緩衝プラダン4.0mm 2枚＋化粧ネジ付)"):n.push("床下パネルヒータ支え板 (通常床面用・透明アクリル2.0mm 1枚＋緩衝プラダン4.0mm 1枚＋化粧ネジ付)")),g.hasRoomDivider&&n.push("２室分け（後付け仕切り板仕様）"),g.ledType&&g.ledType!=="none"){const e={usb:"LED照明: USB式 白＆電球色 LED",rgbw:"LED照明: リモコン操作 RGB+W"};n.push(e[g.ledType]||"LED照明")}return n}function Mx(n,e){const t=Aa(!0),i=Bc(),o=Oc().map(c=>`  ・${c.face}: ${c.name}`).join(`
`),r=kc(),a=r.length>0?r.map(c=>`  ・${c}`).join(`
`):"  ・標準構成（追加オプションなし）";return`【ケージお見積もり仕様】
・見積ID: ${n}
・ケージ種類: ${t}
・外寸サイズ: 幅 ${g.W}mm × 奥行 ${g.D}mm × 高さ ${g.H}mm
・フレーム色: ${i}
・選択パネル素材・板厚:
${o}
・選択オプション:
${a}
・概算総重量: 約 ${e.weight.toFixed(1)} kg
・お見積り合計金額: ¥${e.priceWithMarkup.toLocaleString()}（税込・送料別）
※まだβ版なので誤差（最大±8%程度）が出ております。詳細はDMよりお問い合わせください。
※公式サイト: https://kinato-cage-site.pages.dev/`}Fu&&vn&&Fu.addEventListener("click",()=>{Yo?(Kt&&Kt.classList.add("hidden"),vn.classList.remove("hidden")):alert("先に「見積もりと重量計算」を実行してください。")});Du&&vn&&Du.addEventListener("click",()=>{vn.classList.add("hidden")});Iu&&vn&&Iu.addEventListener("click",()=>{vn.classList.add("hidden")});vn&&vn.addEventListener("click",n=>{n.target===vn&&vn.classList.add("hidden")});pl&&ko&&pl.addEventListener("click",async()=>{const n=ko.value;if(n)try{await navigator.clipboard.writeText(n),Bs&&(Bs.classList.remove("hidden"),setTimeout(()=>Bs.classList.add("hidden"),2200));const e=pl.querySelector(".copy-text-label");if(e){const t=e.textContent;e.textContent="済！",setTimeout(()=>{e.textContent=t},1800)}}catch{ko.select(),document.execCommand("copy"),Bs&&(Bs.classList.remove("hidden"),setTimeout(()=>Bs.classList.add("hidden"),2200))}});dc&&dc.addEventListener("click",()=>{yx()});Xs&&Xs.addEventListener("click",()=>{Xs.src&&window.open(Xs.src,"_blank")});async function yx(){if(!Yo||!as){alert("先に見積もり計算を実行してください。");return}const n=dc||Xv;let e="";n&&(n.classList.add("is-exporting"),e=n.innerHTML,n.innerHTML="<span>⏳ 画像を生成中...</span>");try{const t=Qe.captureImage?Qe.captureImage():Qe.renderer.domElement.toDataURL("image/png"),i=document.createElement("canvas");i.width=1080,i.height=1920;const s=i.getContext("2d"),o=s.createLinearGradient(0,0,0,1920);o.addColorStop(0,"#090d16"),o.addColorStop(.35,"#0f172a"),o.addColorStop(1,"#1e293b"),s.fillStyle=o,s.fillRect(0,0,1080,1920),s.strokeStyle="rgba(56, 189, 248, 0.06)",s.lineWidth=1;for(let ie=60;ie<1080;ie+=80)s.beginPath(),s.moveTo(ie,0),s.lineTo(ie,1920),s.stroke();for(let ie=60;ie<1920;ie+=80)s.beginPath(),s.moveTo(0,ie),s.lineTo(1080,ie),s.stroke();s.strokeStyle="rgba(56, 189, 248, 0.35)",s.lineWidth=2,s.strokeRect(40,40,1e3,1840);const r=ie=>new Promise(ce=>{if(!ie)return ce(null);const me=new Image;me.onload=()=>ce(me),me.onerror=()=>ce(null),me.src=ie}),a="./",[c,l,h,d]=await Promise.all([r(`${a}logo_kinato.png`),r(`${a}character_transparent.png`),r(t),r(`${a}qr_code_kinato.png`)]);c&&s.drawImage(c,65,65,135,135);const p=c?215:65;s.fillStyle="#ffffff",s.font='bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("きなとのケージ屋さん",p,104),s.fillStyle="#38bdf8",s.font='600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3Dオーダーメイドケージ お見積書",p,140),s.fillStyle="#f9c784",s.font="500 16px ui-monospace, SFMono-Regular, monospace",s.fillText("https://kinato-cage-site.pages.dev/",p,172),d&&(s.fillStyle="#ffffff",s.shadowColor="rgba(56, 189, 248, 0.3)",s.shadowBlur=10,Ao(s,605,67,130,130,8),s.fill(),s.shadowColor="transparent",s.shadowBlur=0,s.drawImage(d,610,72,120,120)),s.textAlign="right",s.fillStyle="#fb7185",s.font="bold 24px ui-monospace, monospace",s.fillText(Ni,1015,110),s.fillStyle="#94a3b8",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const f=new Date,_=`${f.getFullYear()}/${String(f.getMonth()+1).padStart(2,"0")}/${String(f.getDate()).padStart(2,"0")} ${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}`;s.fillText(`発行日時: ${_}`,1015,148),s.textAlign="left";const v=65,m=240,u=950,T=700;if(s.fillStyle="rgba(15, 23, 42, 0.75)",s.strokeStyle="rgba(56, 189, 248, 0.25)",s.lineWidth=2,Ao(s,v,m,u,T,16),s.fill(),s.stroke(),h){const ie=Math.min((u-40)/h.width,(T-40)/h.height),ce=h.width*ie,me=h.height*ie,ge=v+(u-ce)/2,X=m+(T-me)/2;s.drawImage(h,ge,X,ce,me)}s.fillStyle="rgba(2, 6, 23, 0.85)",s.strokeStyle="rgba(56, 189, 248, 0.5)",Ao(s,v+20,m+T-55,230,36,6),s.fill(),s.stroke(),s.fillStyle="#38bdf8",s.font='600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3D外観シミュレーション",v+35,m+T-31);const M=65,x=960,D=950,A=505;s.fillStyle="rgba(30, 41, 59, 0.65)",s.strokeStyle="rgba(148, 163, 184, 0.2)",s.lineWidth=1.5,Ao(s,M,x,D,A,16),s.fill(),s.stroke(),s.fillStyle="#f8fafc",s.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("📐 ケージ設計パラメータ",M+30,x+40),s.strokeStyle="rgba(148, 163, 184, 0.15)",s.lineWidth=1,s.beginPath(),s.moveTo(M+25,x+56),s.lineTo(M+D-25,x+56),s.stroke();const P=Aa(!0),R=Bc(),S=Oc(),y=kc();s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("ケージ種類",M+30,x+90),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(P,M+230,x+90),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("外寸サイズ",M+30,x+125),s.fillStyle="#38bdf8",s.font='bold 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`幅 ${g.W} mm  ×  奥行 ${g.D} mm  ×  高さ ${g.H} mm`,M+230,x+125),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("フレーム仕様",M+30,x+160),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(R,M+230,x+160),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択パネル・板厚",M+30,x+198);let w=x+198;S.forEach(ie=>{s.fillStyle="#38bdf8",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`[${ie.face}]`,M+230,w),s.fillStyle="#e2e8f0",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(ie.name,M+380,w),w+=25}),s.strokeStyle="rgba(148, 163, 184, 0.12)",s.beginPath(),s.moveTo(M+25,w+6),s.lineTo(M+D-25,w+6),s.stroke();const N=w+34;if(s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択オプション",M+30,N),y.length===0)s.fillStyle="#94a3b8",s.font='500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("標準構成（追加オプションなし）",M+230,N);else{let ie=N;y.forEach(ce=>{s.fillStyle="#fbbf24",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("✔",M+230,ie),s.fillStyle="#f8fafc",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(ce,M+255,ie),ie+=24})}const F=!!(l||d),B=65,U=1485,k=F?650:950,K=345,V=s.createLinearGradient(B,U,B+k,U+K);if(V.addColorStop(0,"rgba(15, 23, 42, 0.88)"),V.addColorStop(1,"rgba(30, 41, 59, 0.92)"),s.fillStyle=V,s.strokeStyle="rgba(217, 70, 239, 0.4)",s.lineWidth=2,Ao(s,B,U,k,K,16),s.fill(),s.stroke(),s.fillStyle="#cbd5e1",s.font='600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("概算総重量 (計算値)",B+35,U+48),s.fillStyle="#38bdf8",s.font="bold 32px ui-monospace, monospace",s.fillText(`約 ${as.totals.weight.toFixed(1)} kg`,B+280,U+50),s.strokeStyle="rgba(148, 163, 184, 0.2)",s.beginPath(),s.moveTo(B+30,U+70),s.lineTo(B+k-30,U+70),s.stroke(),s.fillStyle="#f1f5f9",s.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("お見積もり合計金額 (税込・送料別)",B+35,U+110),s.fillStyle="#fbbf24",s.font='bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`¥${as.totals.priceWithMarkup.toLocaleString()}`,B+35,U+180),s.fillStyle="#fcd34d",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※まだβ版なので誤差（最大±8%程度）が出ております。",B+35,U+220),s.fillText("　詳細はDMよりお問い合わせください。",B+35,U+244),s.fillStyle="#94a3b8",s.font='500 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※本画像はお見積もりシミュレーション結果の控えです。",B+35,U+282),s.fillText("　お問い合わせ・ご注文の際にお手元にご準備ください。",B+35,U+306),F&&l){const ge=l.height/l.width*270,X=735+10/2,Q=U+(K-ge)/2+5;s.drawImage(l,X,Q,270,ge)}const ae=`Cage_Estimate_${Ni}.png`;try{const ie=i.toDataURL("image/png");window.lastGeneratedEstimateImage=ie,Xs&&(Xs.src=ie),da&&da.classList.remove("hidden");const ce=await new Promise(Q=>i.toBlob(Q,"image/png"));let me=null;if(ce&&window.File)try{me=new File([ce],ae,{type:"image/png"})}catch(Q){console.warn("File constructor failed:",Q)}const ge=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);let X=!1;if(ge&&me&&navigator.canShare&&navigator.canShare({files:[me]}))try{await navigator.share({files:[me],title:"きなとのケージ屋さん お見積もり結果カード",text:`ケージお見積もり結果カード（${Ni}）です。`}),X=!0,console.log("Shared estimate card image via Web Share API successfully"),Kt&&Ai&&(Ai.textContent=ae,Os&&(Os.textContent="✅ 共有メニューを開きました（「画像を保存」で写真アプリに保存されます）"),Kt.classList.remove("hidden"))}catch(Q){Q.name==="AbortError"?(console.log("User closed the share sheet"),Kt&&Ai&&(Ai.textContent=ae,Os&&(Os.textContent="💡 共有メニューを閉じました。下の画像を長押しして「写真」に追加も可能です"),Kt.classList.remove("hidden")),X=!0):console.warn("navigator.share failed, falling back to download:",Q)}if(!X){const Q=document.createElement("a");Q.href=ie,Q.download=ae,Q.target="_self",document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),console.log("Downloaded estimate card image via DataURL:",ae),Kt&&Ai&&(Ai.textContent=ae,Os&&(Os.textContent=ge?"✅ 画像をダウンロードしました（下の画像を長押しして「写真」に追加も可能です）":"✅ ダウンロード完了（保存先: ダウンロードフォルダ）"),Kt.classList.remove("hidden"),setTimeout(()=>{Kt&&Kt.classList.add("hidden")},7e3))}}catch(ie){console.warn("toDataURL / export failed, falling back to Blob URL:",ie),i.toBlob&&i.toBlob(ce=>{if(!ce){alert("画像の書き出しに失敗しました。");return}const me=URL.createObjectURL(ce),ge=document.createElement("a");ge.href=me,ge.download=ae,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge),setTimeout(()=>URL.revokeObjectURL(me),1e4),Kt&&Ai&&(Ai.textContent=ae,Kt.classList.remove("hidden"))},"image/png")}}catch(t){console.error("Estimate card export failed:",t),alert("画像の生成中にエラーが発生しました: "+t.message)}finally{n&&(n.classList.remove("is-exporting"),n.innerHTML=e)}}function Ao(n,e,t,i,s,o){n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.arcTo(e+i,t,e+i,t+o,o),n.lineTo(e+i,t+s-o),n.arcTo(e+i,t+s,e+i-o,t+s,o),n.lineTo(e+o,t+s),n.arcTo(e,t+s,e,t+s-o,o),n.lineTo(e,t+o),n.arcTo(e,t,e+o,t,o),n.closePath()}const bx=!0;function Gc(){const n=window.location.hostname||"",e=window.location.port||"";return n==="localhost"||n==="127.0.0.1"||n==="[::1]"||n==="0.0.0.0"||n.endsWith(".local")||n.startsWith("192.168.")||n.startsWith("10.")||e==="5173"||e==="4173"}async function Sx(n){var t;if(Gc()){console.log("[Log] ローカル開発環境のため、Googleスプレッドシートへの見積もりログ保存を自動スキップしました。");return}const e=(t=He==null?void 0:He.system)==null?void 0:t.gasLogEndpointUrl;if(!e.startsWith("http")){console.warn("[Log] gasLogEndpointUrl が未設定のため、ログ送信をスキップしました。");return}try{const i=navigator.userAgent;let s="PC";/iPhone/i.test(i)?s="iPhone":/iPad/i.test(i)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?s="iPad":/Android/i.test(i)?s="Android":/Mac/i.test(i)?s="Mac":/Win/i.test(i)&&(s="Windows");let o="Browser";/Chrome/i.test(i)&&!/Edge|Edg/i.test(i)?o="Chrome":/Safari/i.test(i)&&!/Chrome/i.test(i)?o="Safari":/Edge|Edg/i.test(i)?o="Edge":/Firefox/i.test(i)&&(o="Firefox");const a=Oc().map(f=>`${f.face}:${f.name}`).join(" | "),c=kc(),l=c.length>0?c.join(", "):"なし",h=Bc();let d=[];try{const f=sessionStorage.getItem("cage_page_history");f&&(d=JSON.parse(f)),d.includes("見積もりシステム")||(d.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(d)))}catch{}const p={type:"estimate",timestamp:n.timestamp,estimateId:n.estimateId,visitorId:n.visitorId,sessionId:n.sessionId,seq:n.seq,device:{type:s,browser:o,screen:`${window.innerWidth}x${window.innerHeight}`},spec:{...n.spec,typeName:Aa(!0),doorHingeDisplayName:g.cageType==="A_FRONT"?Sn():void 0,frameColorDisplayName:h,panelsSummary:a,optionsSummary:l},calculated:n.totals,meta:{elapsedSec:n.elapsedSec,referrer:document.referrer||"Direct",diffNote:n.diffNote,pageHistory:d}};console.log("[Log] GASへ送信中 (type: estimate)...",p),await fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),console.log("[Log] 見積もりログをスプレッドシートへ送信完了:",n.estimateId)}catch(i){console.warn("[Log] スプレッドシート送信エラー:",i)}}function Tx(n){var e;try{const t=(e=He==null?void 0:He.system)==null?void 0:e.gasLogEndpointUrl;if(!t||typeof t!="string"||!t.startsWith("http"))return;const i={type:"calc_error",timestamp:new Date().toISOString(),visitorId:Qd(),sessionId:ef(),errorMessage:(n==null?void 0:n.message)||String(n),errorStack:n!=null&&n.stack?String(n.stack).substring(0,1e3):"",spec:{...g},url:window.location.href,device:{userAgent:navigator.userAgent,screen:`${window.innerWidth}x${window.innerHeight}`}};console.warn("[Log] 🚨 エラー発生をGASへ通報中...",i),fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(()=>{})}catch(t){console.warn("[Log] エラーログ自動送信失敗:",t)}}gx();tx();function wx(){try{let n=null;const e=sessionStorage.getItem("kinato_sim_initial_state");if(e)try{n=JSON.parse(e),sessionStorage.removeItem("kinato_sim_initial_state"),console.log("[Sim] sessionStorageから初期設定を読み込みました:",n)}catch(t){console.warn("[Sim] sessionStorageのパースに失敗:",t)}if(!n&&window.location.search){const t=new URLSearchParams(window.location.search);if(t.has("estimateId")||t.has("id")){const i=t.get("estimateId")||t.get("id");os&&(os.value=i),xc(i),window.history&&window.history.replaceState&&window.history.replaceState({},document.title,window.location.pathname);return}n={},t.has("preset")&&(n.preset=t.get("preset")),t.has("w")&&(n.W=parseInt(t.get("w"),10)),t.has("d")&&(n.D=parseInt(t.get("d"),10)),t.has("h")&&(n.H=parseInt(t.get("h"),10)),t.has("type")&&(n.cageType=t.get("type").toUpperCase()),t.has("frame")&&(n.frameColor=t.get("frame")),t.has("foot")&&(n.footType=t.get("foot")),t.has("doorAntiFlex")&&(n.hasDoorAntiFlex=t.get("doorAntiFlex")==="1"||t.get("doorAntiFlex")==="true"),t.has("sideVentCover")&&(n.hasSideVentCover=t.get("sideVentCover")==="1"||t.get("sideVentCover")==="true"),t.has("perch")&&(n.hasPerch=t.get("perch")==="1"||t.get("perch")==="true"),t.has("roomDivider")&&(n.hasRoomDivider=t.get("roomDivider")==="1"||t.get("roomDivider")==="true"),t.has("floorReinf")&&(n.hasFloorReinforcement=t.get("floorReinf")==="1"||t.get("floorReinf")==="true"),t.has("topReinf")&&(n.hasTopReinforcement=t.get("topReinf")==="1"||t.get("topReinf")==="true"),t.has("frontWide")&&(n.frontWideFrame=t.get("frontWide")),t.has("floorHeater")&&(n.hasFloorHeaterSupport=t.get("floorHeater")==="1"||t.get("floorHeater")==="true"),window.history&&window.history.replaceState&&window.history.replaceState({},document.title,window.location.pathname),console.log("[Sim] URLパラメータから初期設定を読み込み、URLをクリーンにしました:",n)}if(!n||Object.keys(n).length===0)return;if(n.preset&&Array.isArray(ua)){const t=ua.find(i=>i.id===n.preset);t&&Jd(t)}Number.isFinite(n.W)&&(g.W=n.W,sn&&(sn.value=g.W),nn&&(nn.value=g.W)),Number.isFinite(n.D)&&(g.D=n.D,Hi&&(Hi.value=g.D),zi&&(zi.value=g.D)),Number.isFinite(n.H)&&(g.H=n.H,rn&&(rn.value=g.H),on&&(on.value=g.H)),(n.cageType==="A"||n.cageType==="A_FRONT"||n.cageType==="A_FRAMED"||n.cageType==="C")&&(g.cageType=n.cageType,bn&&Hn&&(bn.classList.toggle("active",g.cageType==="A"),Tt==null||Tt.classList.toggle("active",g.cageType==="A_FRONT"),wt==null||wt.classList.toggle("active",g.cageType==="A_FRAMED"),Hn.classList.toggle("active",g.cageType==="C"),Ft&&(g.cageType==="A_FRAMED"?Ft.textContent="Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)":g.cageType==="A_FRONT"?(g.doorHingeSide=n.doorHingeSide||"left",Ft.textContent=`Type A 前開き 選択中 (${Sn()})`):Ft.textContent=g.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Zn&&Zn.classList.toggle("hidden",g.cageType!=="C"),gs())),(n.frameColor==="silver"||n.frameColor==="black")&&(g.frameColor=n.frameColor,_i&&vi&&(_i.classList.toggle("active",g.frameColor==="silver"),vi.classList.toggle("active",g.frameColor==="black"))),(n.footType==="rubber"||n.footType==="caster")&&(g.footType=n.footType,Xi&&(Xi.checked=g.footType==="caster"),xi&&xi.classList.toggle("active",g.footType==="caster")),typeof n.hasDoorAntiFlex=="boolean"&&(g.hasDoorAntiFlex=n.hasDoorAntiFlex,xn&&(xn.checked=g.hasDoorAntiFlex),cn&&cn.classList.toggle("active",g.hasDoorAntiFlex)),typeof n.hasSideVentCover=="boolean"&&(g.hasSideVentCover=n.hasSideVentCover,zn&&(zn.checked=g.hasSideVentCover),yn&&yn.classList.toggle("active",g.hasSideVentCover)),typeof n.hasPerch=="boolean"&&(g.hasPerch=n.hasPerch,St&&(St.checked=g.hasPerch),bt&&bt.classList.toggle("active",g.hasPerch)),typeof n.hasRoomDivider=="boolean"&&(g.hasRoomDivider=n.hasRoomDivider,hn&&(hn.checked=g.hasRoomDivider),Jt&&Jt.classList.toggle("active",g.hasRoomDivider),Mn&&Mn.classList.toggle("hidden",!g.hasRoomDivider),g.hasRoomDivider&&St&&(g.hasPerch=!1,St.checked=!1,St.disabled=!0,bt&&bt.classList.add("disabled"))),typeof n.hasFloorReinforcement=="boolean"?(g.hasFloorReinforcement=n.hasFloorReinforcement,ln&&(ln.checked=g.hasFloorReinforcement)):ps(),typeof n.hasFloorHeaterSupport=="boolean"&&(g.hasFloorHeaterSupport=n.hasFloorHeaterSupport,$i&&($i.checked=g.hasFloorHeaterSupport),gn&&gn.classList.toggle("active",g.hasFloorHeaterSupport)),n.frontWideFrame&&(g.frontWideFrame=n.frontWideFrame,Kn=n.frontWideFrame),Ca(),Qo(),We(),Qe.setViewPreset("iso",g),typeof qo=="function"&&qo()}catch(n){console.error("[Sim] 初期状態の反映エラー:",n)}}wx();(function(){var t;const e=(t=He==null?void 0:He.system)==null?void 0:t.gasLogEndpointUrl;if(e.startsWith("http"))try{let i=[];try{const p=sessionStorage.getItem("cage_page_history");p&&(i=JSON.parse(p))}catch{}(i.length===0||i[i.length-1]!=="見積もりシステム")&&(i.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(i)));let s=sessionStorage.getItem("cage_initial_referrer"),o=sessionStorage.getItem("cage_landing_page");if(!s){s=document.referrer||"Direct";const p=new URLSearchParams(window.location.search),f=p.get("origin")||p.get("utm_source")||p.get("ref");f&&(s=`${s} [Param:${f}]`),sessionStorage.setItem("cage_initial_referrer",s)}o||(o=window.location.pathname,sessionStorage.setItem("cage_landing_page",o));const r=navigator.userAgent;let a="PC";/iPhone/i.test(r)?a="iPhone":/iPad/i.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?a="iPad":/Android/i.test(r)?a="Android":/Mac/i.test(r)?a="Mac":/Win/i.test(r)&&(a="Windows");let c="Browser";/Chrome/i.test(r)&&!/Edge|Edg/i.test(r)?c="Chrome":/Safari/i.test(r)&&!/Chrome/i.test(r)?c="Safari":/Edge|Edg/i.test(r)?c="Edge":/Firefox/i.test(r)&&(c="Firefox");let l="直接 / お気に入り";const h=s.toLowerCase();h.includes("instagram.com")?l="Instagram":h.includes("t.co")||h.includes("twitter.com")||h.includes("x.com")?l="X (Twitter)":h.includes("google.")?l="Google検索":h.includes("yahoo.")?l="Yahoo!検索":h.includes("line.me")?l="LINE":h.includes("tiktok.com")?l="TikTok":s!=="Direct"&&(l="外部Webサイト");const d={type:"web_access",visitorId:Hd,sessionId:fc,referrer:s,referrerCategory:l,landingPage:o,pageHistory:i,pageCount:i.length,device:{type:a,browser:c,screen:`${window.innerWidth}x${window.innerHeight}`}};if(Gc()&&bx){console.log("[Log] ローカル開発環境のため、シミュレーター訪問ログ送信をスキップしました。");return}fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),keepalive:!0}).then(()=>{console.log("[Log] シミュレーター訪問ログをGASへ送信完了 (セッション:",fc,")")}).catch(p=>{console.warn("[Log] シミュレーター訪問ログ送信エラー:",p)})}catch(i){console.warn("[Log] sendSimAccessLog エラー:",i)}})();
