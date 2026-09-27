(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="170",Ts={ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zd=0,ol=1,Kd=2,zh=1,Hh=2,On=3,Mi=0,Gt=1,Ct=2,_i=0,bs=1,al=2,cl=3,ll=4,jd=5,Ii=100,Jd=101,Qd=102,eu=103,tu=104,nu=200,iu=201,su=202,ru=203,Da=204,Ia=205,ou=206,au=207,cu=208,lu=209,hu=210,du=211,uu=212,fu=213,pu=214,Ua=0,Fa=1,Na=2,As=3,Oa=4,Ba=5,ka=6,Ga=7,Vh=0,mu=1,gu=2,vi=0,_u=1,vu=2,xu=3,Wh=4,Mu=5,yu=6,Su=7,Xh=300,Cs=301,Rs=302,za=303,Ha=304,Do=306,Va=1e3,jt=1001,Wa=1002,_n=1003,Tu=1004,Sr=1005,Lt=1006,zo=1007,Ni=1008,Jn=1009,Yh=1010,$h=1011,ar=1012,Dc=1013,Bi=1014,zn=1015,gr=1016,Ic=1017,Uc=1018,Ps=1020,qh=35902,Zh=1021,Kh=1022,un=1023,jh=1024,Jh=1025,Es=1026,Ls=1027,Qh=1028,Fc=1029,ed=1030,Nc=1031,Oc=1033,ao=33776,co=33777,lo=33778,ho=33779,Xa=35840,Ya=35841,$a=35842,qa=35843,Za=36196,Ka=37492,ja=37496,Ja=37808,Qa=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,cc=37818,lc=37819,hc=37820,dc=37821,uo=36492,uc=36494,fc=36495,td=36283,pc=36284,mc=36285,gc=36286,bu=3200,Eu=3201,nd=0,wu=1,pi="",en="srgb",Bs="srgb-linear",Io="linear",rt="srgb",qi=7680,hl=519,Au=512,Cu=513,Ru=514,id=515,Pu=516,Lu=517,Du=518,Iu=519,_c=35044,dl="300 es",Hn=2e3,vo=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fo=Math.PI/180,vc=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Uu(i,e){return(i%e+e)%e}function Ho(i,e,t){return(1-t)*i+t*e}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fu={DEG2RAD:fo};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],_=s[0],m=s[3],u=s[6],A=s[1],S=s[4],v=s[7],U=s[2],C=s[5],P=s[8];return r[0]=o*_+a*A+c*U,r[3]=o*m+a*S+c*C,r[6]=o*u+a*v+c*P,r[1]=l*_+h*A+d*U,r[4]=l*m+h*S+d*C,r[7]=l*u+h*v+d*P,r[2]=p*_+f*A+g*U,r[5]=p*m+f*S+g*C,r[8]=p*u+f*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,p=a*c-h*r,f=l*r-o*c,g=t*d+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new He;function sd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nu(){const i=xo("canvas");return i.style.display="block",i}const ul={};function er(i){i in ul||(ul[i]=!0,console.warn(i))}function Ou(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Bu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ku(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?Io:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fl=[.64,.33,.3,.6,.15,.06],pl=[.2126,.7152,.0722],ml=[.3127,.329],gl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Bs]:{primaries:fl,whitePoint:ml,transfer:Io,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:pl,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:fl,whitePoint:ml,transfer:rt,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:pl,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let Zi;class Gu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=xo("canvas")),Zi.width=e.width,Zi.height=e.height;const n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zu=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wo(s[o].image)):r.push(Wo(s[o]))}else r=Wo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hu=0;class zt extends Yi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=jt,s=jt,r=Lt,o=Ni,a=un,c=Jn,l=zt.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Vn(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Xh;zt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,v=(f+1)/2,U=(u+1)/2,C=(h+p)/4,P=(d+_)/4,D=(g+m)/4;return S>v&&S>U?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=P/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=D/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=P/r,s=D/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(p-h)*(p-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-_)/A,this.z=(p-h)/A,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class od extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const p=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==p||l!==f||h!==g){let m=1-a;const u=c*p+l*f+h*g+d*_,A=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const U=Math.sqrt(S),C=Math.atan2(U,u*A);m=Math.sin(m*C)/U,a=Math.sin(a*C)/U}const v=a*A;if(c=c*m+p*v,l=l*m+f*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=U,l*=U,h*=U,d*=U}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*p,e[t+1]=c*g+h*p+l*d-a*f,e[t+2]=l*g+h*f+a*p-c*d,e[t+3]=h*g-a*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),p=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=n+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new L,vl=new Gi;class _r{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),br.subVectors(this.max,Vs),Ki.subVectors(e.a,Vs),ji.subVectors(e.b,Vs),Ji.subVectors(e.c,Vs),ii.subVectors(ji,Ki),si.subVectors(Ji,ji),wi.subVectors(Ki,Ji);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-wi.z,wi.y,ii.z,0,-ii.x,si.z,0,-si.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!Yo(t,Ki,ji,Ji,br)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,Ki,ji,Ji,br))?!1:(Er.crossVectors(ii,si),t=[Er.x,Er.y,Er.z],Yo(t,Ki,ji,Ji,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,Tr=new _r,Ki=new L,ji=new L,Ji=new L,ii=new L,si=new L,wi=new L,Vs=new L,br=new L,Er=new L,Ai=new L;function Yo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Xu=new _r,Ws=new L,$o=new L;class Uo{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add($o)),this.expandByPoint(Ws.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new L,qo=new L,wr=new L,ri=new L,Zo=new L,Ar=new L,Ko=new L;class Bc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qo.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=ri.dot(this.direction),c=-ri.dot(wr),l=ri.lengthSq(),h=Math.abs(1-o*o);let d,p,f,g;if(h>0)if(d=o*c-a,p=o*a-c,g=r*h,d>=0)if(p>=-g)if(p<=g){const _=1/h;d*=_,p*=_,f=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qo).addScaledVector(wr,p),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){Zo.subVectors(t,e),Ar.subVectors(n,e),Ko.crossVectors(Zo,Ar);let o=this.direction.dot(Ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const c=a*this.direction.dot(Ar.crossVectors(ri,Ar));if(c<0)return null;const l=a*this.direction.dot(Zo.cross(ri));if(l<0||c+l>o)return null;const h=-a*ri.dot(Ko);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,r,o,a,c,l,h,d,p,f,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,p,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,d,p,f,g,_,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,f=c*d,g=l*h,_=l*d;t[0]=p+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,f=c*d,g=l*h,_=l*d;t[0]=p-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=p*l+_,t[1]=c*d,t[5]=_*l+p,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-p*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=p-_*d}else if(e.order==="XZY"){const p=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yu,e,$u)}lookAt(e,t,n){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),oi.crossVectors(n,qt),oi.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),oi.crossVectors(n,qt)),oi.normalize(),Cr.crossVectors(qt,oi),s[0]=oi.x,s[4]=Cr.x,s[8]=qt.x,s[1]=oi.y,s[5]=Cr.y,s[9]=qt.y,s[2]=oi.z,s[6]=Cr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],_=n[6],m=n[10],u=n[14],A=n[3],S=n[7],v=n[11],U=n[15],C=s[0],P=s[4],D=s[8],T=s[12],M=s[1],w=s[5],F=s[9],I=s[13],O=s[2],k=s[6],Y=s[10],ne=s[14],X=s[3],le=s[7],se=s[11],de=s[15];return r[0]=o*C+a*M+c*O+l*X,r[4]=o*P+a*w+c*k+l*le,r[8]=o*D+a*F+c*Y+l*se,r[12]=o*T+a*I+c*ne+l*de,r[1]=h*C+d*M+p*O+f*X,r[5]=h*P+d*w+p*k+f*le,r[9]=h*D+d*F+p*Y+f*se,r[13]=h*T+d*I+p*ne+f*de,r[2]=g*C+_*M+m*O+u*X,r[6]=g*P+_*w+m*k+u*le,r[10]=g*D+_*F+m*Y+u*se,r[14]=g*T+_*I+m*ne+u*de,r[3]=A*C+S*M+v*O+U*X,r[7]=A*P+S*w+v*k+U*le,r[11]=A*D+S*F+v*Y+U*se,r[15]=A*T+S*I+v*ne+U*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],f=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+r*c*d-s*l*d-r*a*p+n*l*p+s*a*f-n*c*f)+_*(+t*c*f-t*l*p+r*o*p-s*o*f+s*l*h-r*c*h)+m*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+u*(-s*a*h-t*c*d+t*a*p+s*o*d-n*o*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],f=e[11],g=e[12],_=e[13],m=e[14],u=e[15],A=d*m*l-_*p*l+_*c*f-a*m*f-d*c*u+a*p*u,S=g*p*l-h*m*l-g*c*f+o*m*f+h*c*u-o*p*u,v=h*_*l-g*d*l+g*a*f-o*_*f-h*a*u+o*d*u,U=g*d*c-h*_*c-g*a*p+o*_*p+h*a*m-o*d*m,C=t*A+n*S+s*v+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=A*P,e[1]=(_*p*r-d*m*r-_*s*f+n*m*f+d*s*u-n*p*u)*P,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*u+n*c*u)*P,e[3]=(d*c*r-a*p*r-d*s*l+n*p*l+a*s*f-n*c*f)*P,e[4]=S*P,e[5]=(h*m*r-g*p*r+g*s*f-t*m*f-h*s*u+t*p*u)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*u-t*c*u)*P,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*f+t*c*f)*P,e[8]=v*P,e[9]=(g*d*r-h*_*r-g*n*f+t*_*f+h*n*u-t*d*u)*P,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*u+t*a*u)*P,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*P,e[12]=U*P,e[13]=(h*_*s-g*d*s+g*n*p-t*_*p-h*n*m+t*d*m)*P,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*P,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*p+t*a*p)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,p=r*l,f=r*h,g=r*d,_=o*h,m=o*d,u=a*d,A=c*l,S=c*h,v=c*d,U=n.x,C=n.y,P=n.z;return s[0]=(1-(_+u))*U,s[1]=(f+v)*U,s[2]=(g-S)*U,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(p+u))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+S)*P,s[9]=(m-A)*P,s[10]=(1-(p+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);const l=1/r,h=1/o,d=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Hn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let f,g;if(a===Hn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Hn){const c=this.elements,l=1/(t-e),h=1/(n-s),d=1/(o-r),p=(t+e)*l,f=(n+s)*h;let g,_;if(a===Hn)g=(o+r)*d,_=-2*d;else if(a===vo)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new L,ln=new lt,Yu=new L(0,0,0),$u=new L(1,1,1),oi=new L,Cr=new L,qt=new L,xl=new lt,Ml=new Gi;class Yt{constructor(e=0,t=0,n=0,s=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const yl=new L,es=new Gi,Un=new lt,Rr=new L,Xs=new L,Zu=new L,Ku=new Gi,Sl=new L(1,0,0),Tl=new L(0,1,0),bl=new L(0,0,1),El={type:"added"},ju={type:"removed"},ts={type:"childadded",child:null},jo={type:"childremoved",child:null};class St extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new L,t=new Yt,n=new Gi,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new He}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Sl,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sl,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Xs,Rr,this.up):Un.lookAt(Rr,Xs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Un),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(El),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ju),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(El),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new L(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new L,Fn=new L,Jo=new L,Nn=new L,ns=new L,is=new L,wl=new L,Qo=new L,ea=new L,ta=new L,na=new ct,ia=new ct,sa=new ct;class tn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Fn.subVectors(n,t),Jo.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Fn),c=hn.dot(Jo),l=Fn.dot(Fn),h=Fn.dot(Jo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const p=1/d,f=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,n),sa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(na,r.x),o.addScaledVector(ia,r.y),o.addScaledVector(sa,r.z),o}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Fn.subVectors(e,t),hn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),Qo.subVectors(e,n);const c=ns.dot(Qo),l=is.dot(Qo);if(c<=0&&l<=0)return t.copy(n);ea.subVectors(e,s);const h=ns.dot(ea),d=is.dot(ea);if(h>=0&&d<=h)return t.copy(s);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ns,o);ta.subVectors(e,r);const f=ns.dot(ta),g=is.dot(ta);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(is,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return wl.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(wl,a);const u=1/(m+_+p);return o=_*u,a=p*u,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Uu(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ra(o,r,e+1/3),this.g=ra(o,r,e),this.b=ra(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return je.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Rt(Ut.r*255,0,255))*65536+Math.round(Rt(Ut.g*255,0,255))*256+Math.round(Rt(Ut.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=en){je.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Pr);const n=Ho(ai.h,Pr.h,t),s=Ho(ai.s,Pr.s,t),r=Ho(ai.l,Pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ye;Ye.NAMES=cd;let Ju=0;class bi extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Vn(),this.name="",this.blending=bs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ia,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kc extends bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new L,Lr=new pe;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),e}}class ld extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hd extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qu=0;const Qt=new lt,oa=new St,ss=new L,Zt=new _r,Ys=new _r,Et=new L;class rn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?hd:ld)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Zt.min,Ys.min),Zt.expandByPoint(Et),Et.addVectors(Zt.max,Ys.max),Zt.expandByPoint(Et)):(Zt.expandByPoint(Ys.min),Zt.expandByPoint(Ys.max))}Zt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Et.fromBufferAttribute(a,l),c&&(ss.fromBufferAttribute(e,l),Et.add(ss)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new L,c[D]=new L;const l=new L,h=new L,d=new L,p=new pe,f=new pe,g=new pe,_=new L,m=new L;function u(D,T,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,M),p.fromBufferAttribute(r,D),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(p),g.sub(p);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[D].add(_),a[T].add(_),a[M].add(_),c[D].add(m),c[T].add(m),c[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,T=A.length;D<T;++D){const M=A[D],w=M.start,F=M.count;for(let I=w,O=w+F;I<O;I+=3)u(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new L,v=new L,U=new L,C=new L;function P(D){U.fromBufferAttribute(s,D),C.copy(U);const T=a[D];S.copy(T),S.sub(U.multiplyScalar(U.dot(T))).normalize(),v.crossVectors(C,T);const w=v.dot(c[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,w)}for(let D=0,T=A.length;D<T;++D){const M=A[D],w=M.start,F=M.count;for(let I=w,O=w+F;I<O;I+=3)P(e.getX(I+0)),P(e.getX(I+1)),P(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new vn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=e(p,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new lt,Ci=new Bc,Dr=new Uo,Cl=new L,Ir=new L,Ur=new L,Fr=new L,aa=new L,Nr=new L,Rl=new L,Or=new L;class Q extends St{constructor(e=new rn,t=new kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(aa.fromBufferAttribute(d,e),o?Nr.addScaledVector(aa,h):Nr.addScaledVector(aa.sub(t),h))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Dr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Dr,Cl)===null||Ci.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Al.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Al),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],u=o[m.materialIndex],A=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=A,U=S;v<U;v+=3){const C=a.getX(v),P=a.getX(v+1),D=a.getX(v+2);s=Br(this,u,e,n,l,h,d,C,P,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,u=_;m<u;m+=3){const A=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=Br(this,o,e,n,l,h,d,A,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],u=o[m.materialIndex],A=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=A,U=S;v<U;v+=3){const C=v,P=v+1,D=v+2;s=Br(this,u,e,n,l,h,d,C,P,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,u=_;m<u;m+=3){const A=m,S=m+1,v=m+2;s=Br(this,o,e,n,l,h,d,A,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ef(i,e,t,n,s,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Mi,a),c===null)return null;Or.copy(a),Or.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Or);return l<t.near||l>t.far?null:{distance:l,point:Or.clone(),object:i}}function Br(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ir),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Fr);const h=ef(i,e,t,n,Ir,Ur,Fr,Rl);if(h){const d=new L;tn.getBarycoord(Rl,Ir,Ur,Fr,d),s&&(h.uv=tn.getInterpolatedAttribute(s,a,c,l,d,new pe)),r&&(h.uv1=tn.getInterpolatedAttribute(r,a,c,l,d,new pe)),o&&(h.normal=tn.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new L,materialIndex:0};tn.getNormal(Ir,Ur,Fr,p.normal),h.face=p,h.barycoord=d}return h}class Xe extends rn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(d,2));function g(_,m,u,A,S,v,U,C,P,D,T){const M=v/P,w=U/D,F=v/2,I=U/2,O=C/2,k=P+1,Y=D+1;let ne=0,X=0;const le=new L;for(let se=0;se<Y;se++){const de=se*w-I;for(let Me=0;Me<k;Me++){const Z=Me*M-F;le[_]=Z*A,le[m]=de*S,le[u]=O,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[u]=C>0?1:-1,h.push(le.x,le.y,le.z),d.push(Me/P),d.push(1-se/D),ne+=1}}for(let se=0;se<D;se++)for(let de=0;de<P;de++){const Me=p+de+k*se,Z=p+de+k*(se+1),N=p+(de+1)+k*(se+1),V=p+(de+1)+k*se;c.push(Me,Z,V),c.push(Z,N,V),X+=6}a.addGroup(f,X,T),f+=X,p+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=Ds(i[t]);for(const s in n)e[s]=n[s]}return e}function tf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const nf={clone:Ds,merge:kt};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ud extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new L,Pl=new pe,Ll=new pe;class Kt extends ud{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Pl,Ll),t.subVectors(Ll,Pl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class of extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new Kt(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new Kt(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new Kt(rs,os,e,t);a.layers=this.layers,this.add(a);const c=new Kt(rs,os,e,t);c.layers=this.layers,this.add(c);const l=new Kt(rs,os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fd extends zt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class af extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:_i});r.uniforms.tEquirect.value=t;const o=new Q(s,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Lt),new of(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ca=new L,cf=new L,lf=new He;class fi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ca.subVectors(n,t).cross(cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lf.getNormalMatrix(e),s=this.coplanarPoint(ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Uo,kr=new L;class Gc{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],g=s[9],_=s[10],m=s[11],u=s[12],A=s[13],S=s[14],v=s[15];if(n[0].setComponents(c-r,p-l,m-f,v-u).normalize(),n[1].setComponents(c+r,p+l,m+f,v+u).normalize(),n[2].setComponents(c+o,p+h,m+g,v+A).normalize(),n[3].setComponents(c-o,p-h,m-g,v-A).normalize(),n[4].setComponents(c-a,p-d,m-_,v-S).normalize(),t===Hn)n[5].setComponents(c+a,p+d,m+_,v+S).normalize();else if(t===vo)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(kr.x=s.normal.x>0?e.max.x:e.min.x,kr.y=s.normal.y>0?e.max.y:e.min.y,kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hf(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class xi extends rn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,p=t/c,f=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const A=u*p-o;for(let S=0;S<l;S++){const v=S*d-r;g.push(v,-A,0),_.push(0,0,1),m.push(S/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<a;A++){const S=A+l*u,v=A+l*(u+1),U=A+1+l*(u+1),C=A+1+l*u;f.push(S,v,C),f.push(v,U,C)}this.setIndex(f),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nf=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,lp=`struct PhysicalMaterial {
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
}`,hp=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,xm=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Om=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:df,alphahash_pars_fragment:uf,alphamap_fragment:ff,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:vf,batching_pars_vertex:xf,batching_vertex:Mf,begin_vertex:yf,beginnormal_vertex:Sf,bsdfs:Tf,iridescence_fragment:bf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Rf,color_fragment:Pf,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:If,common:Uf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:kf,emissivemap_pars_fragment:Gf,colorspace_fragment:zf,colorspace_pars_fragment:Hf,envmap_fragment:Vf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:ip,envmap_vertex:$f,fog_vertex:qf,fog_pars_vertex:Zf,fog_fragment:Kf,fog_pars_fragment:jf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:Qf,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:ap,lights_physical_fragment:cp,lights_physical_pars_fragment:lp,lights_fragment_begin:hp,lights_fragment_maps:dp,lights_fragment_end:up,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:Mp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:Tp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:wp,morphtarget_vertex:Ap,normal_fragment_begin:Cp,normal_fragment_maps:Rp,normal_pars_fragment:Pp,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:kp,premultiplied_alpha_fragment:Gp,project_vertex:zp,dithering_fragment:Hp,dithering_pars_fragment:Vp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:$p,shadowmap_vertex:qp,shadowmask_pars_fragment:Zp,skinbase_vertex:Kp,skinning_pars_vertex:jp,skinning_vertex:Jp,skinnormal_vertex:Qp,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:om,uv_pars_vertex:am,uv_vertex:cm,worldpos_vertex:lm,background_vert:hm,background_frag:dm,backgroundCube_vert:um,backgroundCube_frag:fm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:xm,equirect_vert:Mm,equirect_frag:ym,linedashed_vert:Sm,linedashed_frag:Tm,meshbasic_vert:bm,meshbasic_frag:Em,meshlambert_vert:wm,meshlambert_frag:Am,meshmatcap_vert:Cm,meshmatcap_frag:Rm,meshnormal_vert:Pm,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Im,meshphysical_vert:Um,meshphysical_frag:Fm,meshtoon_vert:Nm,meshtoon_frag:Om,points_vert:Bm,points_frag:km,shadow_vert:Gm,shadow_frag:zm,sprite_vert:Hm,sprite_frag:Vm},Se={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Tn={basic:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:kt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:kt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:kt([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:kt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:kt([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:kt([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:kt([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:kt([Se.lights,Se.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Tn.physical={uniforms:kt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Gr={r:0,b:0,g:0},Pi=new Yt,Wm=new lt;function Xm(i,e,t,n,s,r,o){const a=new Ye(0);let c=r===!0?0:1,l,h,d=null,p=0,f=null;function g(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:e).get(S)),S}function _(A){let S=!1;const v=g(A);v===null?u(a,c):v&&v.isColor&&(u(v,1),S=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===Do)?(h===void 0&&(h=new Q(new Xe(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Ds(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pi.copy(S.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(Pi)),h.material.toneMapped=je.getTransfer(v.colorSpace)!==rt,(d!==v||p!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,p=v.version,f=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Q(new xi(2,2),new yi({name:"BackgroundMaterial",uniforms:Ds(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=je.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,f=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function u(A,S){A.getRGB(Gr,dd(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(A,S=1){a.set(A),c=S,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,u(a,c)},render:_,addToRenderList:m}}function Ym(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(M,w,F,I,O){let k=!1;const Y=d(I,F,w);r!==Y&&(r=Y,l(r.object)),k=f(M,I,F,O),k&&g(M,I,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(M,w,F,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,w,F){const I=F.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let k=O[w.id];k===void 0&&(k={},O[w.id]=k);let Y=k[I];return Y===void 0&&(Y=p(c()),k[I]=Y),Y}function p(M){const w=[],F=[],I=[];for(let O=0;O<t;O++)w[O]=0,F[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,w,F,I){const O=r.attributes,k=w.attributes;let Y=0;const ne=F.getAttributes();for(const X in ne)if(ne[X].location>=0){const se=O[X];let de=k[X];if(de===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(M,w,F,I){const O={},k=w.attributes;let Y=0;const ne=F.getAttributes();for(const X in ne)if(ne[X].location>=0){let se=k[X];se===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const de={};de.attribute=se,se&&se.data&&(de.data=se.data),O[X]=de,Y++}r.attributes=O,r.attributesNum=Y,r.index=I}function _(){const M=r.newAttributes;for(let w=0,F=M.length;w<F;w++)M[w]=0}function m(M){u(M,0)}function u(M,w){const F=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;F[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),O[M]!==w&&(i.vertexAttribDivisor(M,w),O[M]=w)}function A(){const M=r.newAttributes,w=r.enabledAttributes;for(let F=0,I=w.length;F<I;F++)w[F]!==M[F]&&(i.disableVertexAttribArray(F),w[F]=0)}function S(M,w,F,I,O,k,Y){Y===!0?i.vertexAttribIPointer(M,w,F,O,k):i.vertexAttribPointer(M,w,F,I,O,k)}function v(M,w,F,I){_();const O=I.attributes,k=F.getAttributes(),Y=w.defaultAttributeValues;for(const ne in k){const X=k[ne];if(X.location>=0){let le=O[ne];if(le===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const se=le.normalized,de=le.itemSize,Me=e.get(le);if(Me===void 0)continue;const Z=Me.buffer,N=Me.type,V=Me.bytesPerElement,ce=N===i.INT||N===i.UNSIGNED_INT||le.gpuType===Dc;if(le.isInterleavedBufferAttribute){const J=le.data,ve=J.stride,ye=le.offset;if(J.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)u(X.location+ge,J.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ge=0;ge<X.locationSize;ge++)S(X.location+ge,de/X.locationSize,N,se,ve*V,(ye+de/X.locationSize*ge)*V,ce)}else{if(le.isInstancedBufferAttribute){for(let J=0;J<X.locationSize;J++)u(X.location+J,le.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let J=0;J<X.locationSize;J++)m(X.location+J);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let J=0;J<X.locationSize;J++)S(X.location+J,de/X.locationSize,N,se,de*V,de/X.locationSize*J*V,ce)}}else if(Y!==void 0){const se=Y[ne];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(X.location,se);break;case 3:i.vertexAttrib3fv(X.location,se);break;case 4:i.vertexAttrib4fv(X.location,se);break;default:i.vertexAttrib1fv(X.location,se)}}}}A()}function U(){D();for(const M in n){const w=n[M];for(const F in w){const I=w[F];for(const O in I)h(I[O].object),delete I[O];delete w[F]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const F in w){const I=w[F];for(const O in I)h(I[O].object),delete I[O];delete w[F]}delete n[M.id]}function P(M){for(const w in n){const F=n[w];if(F[M.id]===void 0)continue;const I=F[M.id];for(const O in I)h(I[O].object),delete I[O];delete F[M.id]}}function D(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function $m(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*p[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Jn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!D)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:U,maxSamples:C}}function Zm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new fi,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const A=r?0:n,S=A*4;let v=u.clippingState||null;c.value=v,v=h(g,p,S,f);for(let U=0;U!==S;++U)v[U]=t[U];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const u=f+_*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(A,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Km(i){let e=new WeakMap;function t(o,a){return a===za?o.mapping=Cs:a===Ha&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===Ha)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new af(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class md extends ud{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,Dl=[.125,.215,.35,.446,.526,.582],Ui=20,la=new md,Il=new Ye;let ha=null,da=0,ua=0,fa=!1;const Di=(1+Math.sqrt(5))/2,as=1/Di,Ul=[new L(-Di,as,0),new L(Di,as,0),new L(-as,0,Di),new L(as,0,Di),new L(0,Di,-as),new L(0,Di,as),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ha=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ha,da,ua),this._renderer.xr.enabled=fa,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:gr,format:un,colorSpace:Bs,depthBuffer:!1},s=Fl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jm(r)),this._blurMaterial=Jm(r,e,t)}return s}_compileMaterial(e){const t=new Q(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,s){const a=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Il),h.toneMapping=vi,h.autoClear=!1;const f=new kc({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Q(new Xe,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Il),_=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):A===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const S=this._cubeSize;zr(s,A*S,u>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Cs||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ul[(s-r-1)%Ul.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Q(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const u=[];let A=0;for(let P=0;P<Ui;++P){const D=P/_,T=Math.exp(-D*D/2);u.push(T),P===0?A+=T:P<m&&(A+=2*T)}for(let P=0;P<u.length;P++)u[P]=u[P]/A;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-n;const v=this._sizeLods[s],U=3*v*(s>S-vs?s-S+vs:0),C=4*(this._cubeSize-v);zr(t,U,C,3*v,2*v),c.setRenderTarget(t),c.render(d,la)}}function jm(i){const e=[],t=[],n=[];let s=i;const r=i-vs+1+Dl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-vs?c=Dl[o-i+vs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,u=1,A=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(u*g*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,D=C>2?0:-1,T=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];A.set(T,_*g*C),S.set(p,m*g*C);const M=[C,C,C,C,C,C];v.set(M,u*g*C)}const U=new rn;U.setAttribute("position",new vn(A,_)),U.setAttribute("uv",new vn(S,m)),U.setAttribute("faceIndex",new vn(v,u)),e.push(U),s>vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fl(i,e,t){const n=new ki(i,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jm(i,e,t){const n=new Float32Array(Ui),s=new L(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Nl(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ol(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function Qm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===za||c===Ha,h=c===Cs||c===Rs;if(l||h){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new xc(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new xc(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function eg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tg(i,e,t,n){const s={},r=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete s[p.id];const f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,u=_.length;m<u;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const A=f.array;_=f.version;for(let S=0,v=A.length;S<v;S+=3){const U=A[S+0],C=A[S+1],P=A[S+2];p.push(U,C,C,P,P,U)}}else if(g!==void 0){const A=g.array;_=g.version;for(let S=0,v=A.length/3-1;S<v;S+=3){const U=S+0,C=S+1,P=S+2;p.push(U,C,C,P,P,U)}}else return;const m=new(sd(p)?hd:ld)(p,1);m.version=_;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const p=r.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function ng(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),t.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*o,g),t.update(f,n,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,n,1)}function d(p,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/o,f[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,_,0,g);let u=0;for(let A=0;A<g;A++)u+=f[A]*_[A];t.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ig(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sg(i,e,t){const n=new WeakMap,s=new ct;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==d){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let U=a.attributes.position.count*v,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*C*4*d),D=new od(P,U,C,d);D.type=zn,D.needsUpdate=!0;const T=v*4;for(let w=0;w<d;w++){const F=u[w],I=A[w],O=S[w],k=U*C*4*w;for(let Y=0;Y<F.count;Y++){const ne=Y*T;g===!0&&(s.fromBufferAttribute(F,Y),P[k+ne+0]=s.x,P[k+ne+1]=s.y,P[k+ne+2]=s.z,P[k+ne+3]=0),_===!0&&(s.fromBufferAttribute(I,Y),P[k+ne+4]=s.x,P[k+ne+5]=s.y,P[k+ne+6]=s.z,P[k+ne+7]=0),m===!0&&(s.fromBufferAttribute(O,Y),P[k+ne+8]=s.x,P[k+ne+9]=s.y,P[k+ne+10]=s.z,P[k+ne+11]=O.itemSize===4?s.w:1)}}p={count:d,texture:D,size:new pe(U,C)},n.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function rg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class gd extends zt{constructor(e,t,n,s,r,o,a,c,l,h=Es){if(h!==Es&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Bi),n===void 0&&h===Ls&&(n=Ps),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _d=new zt,Bl=new gd(1,1),vd=new od,xd=new Wu,Md=new fd,kl=[],Gl=[],zl=new Float32Array(16),Hl=new Float32Array(9),Vl=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=kl[s];if(r===void 0&&(r=new Float32Array(s),kl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function og(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),bt(t,n)}}function dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,n))return;Hl.set(n),i.uniformMatrix3fv(this.addr,!1,Hl),bt(t,n)}}function ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,n))return;zl.set(n),i.uniformMatrix4fv(this.addr,!1,zl),bt(t,n)}}function fg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function _g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function yg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bl.compareFunction=id,r=Bl):r=_d,t.setTexture2D(e||r,s)}function Sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xd,s)}function Tg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Md,s)}function bg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vd,s)}function Eg(i){switch(i){case 5126:return og;case 35664:return ag;case 35665:return cg;case 35666:return lg;case 35674:return hg;case 35675:return dg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return bg}}function wg(i,e){i.uniform1fv(this.addr,e)}function Ag(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function Cg(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function Rg(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function Pg(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lg(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dg(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ig(i,e){i.uniform1iv(this.addr,e)}function Ug(i,e){i.uniform2iv(this.addr,e)}function Fg(i,e){i.uniform3iv(this.addr,e)}function Ng(i,e){i.uniform4iv(this.addr,e)}function Og(i,e){i.uniform1uiv(this.addr,e)}function Bg(i,e){i.uniform2uiv(this.addr,e)}function kg(i,e){i.uniform3uiv(this.addr,e)}function Gg(i,e){i.uniform4uiv(this.addr,e)}function zg(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_d,r[o])}function Hg(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xd,r[o])}function Vg(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Md,r[o])}function Wg(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vd,r[o])}function Xg(i){switch(i){case 5126:return wg;case 35664:return Ag;case 35665:return Cg;case 35666:return Rg;case 35674:return Pg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ig;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Ng;case 5125:return Og;case 36294:return Bg;case 36295:return kg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}class Yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}}class qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Wl(i,e){i.seq.push(e),i.map[e.id]=e}function Zg(i,e,t){const n=i.name,s=n.length;for(pa.lastIndex=0;;){const r=pa.exec(n),o=pa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wl(t,l===void 0?new Yg(a,i,e):new $g(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new qg(a),Wl(t,d)),t=d}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Zg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Xl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kg=37297;let jg=0;function Jg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yl=new He;function Qg(i){je._getMatrix(Yl,je.workingColorSpace,i);const e=`mat3( ${Yl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Io:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $l(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jg(i.getShaderSource(e),o)}else return s}function e0(i,e){const t=Qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t0(i,e){let t;switch(e){case _u:t="Linear";break;case vu:t="Reinhard";break;case xu:t="Cineon";break;case Wh:t="ACESFilmic";break;case yu:t="AgX";break;case Su:t="Neutral";break;case Mu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new L;function n0(){je.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function s0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function tr(i){return i!==""}function ql(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(o0,c0)}const a0=new Map;function c0(i,e){let t=We[e];if(t===void 0){const n=a0.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}const l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(l0,h0)}function h0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function d0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function u0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Rs:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function p0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case mu:e="ENVMAP_BLENDING_MIX";break;case gu:e="ENVMAP_BLENDING_ADD";break}return e}function m0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g0(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=d0(t),l=u0(t),h=f0(t),d=p0(t),p=m0(t),f=i0(t),g=s0(r),_=s.createProgram();let m,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),u.length>0&&(u+=`
`)):(m=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),u=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?We.tonemapping_pars_fragment:"",t.toneMapping!==vi?t0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,e0("linearToOutputTexel",t.outputColorSpace),n0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=Mc(o),o=ql(o,t),o=Zl(o,t),a=Mc(a),a=ql(a,t),a=Zl(a,t),o=Kl(o),a=Kl(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=A+m+o,v=A+u+a,U=Xl(s,s.VERTEX_SHADER,S),C=Xl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,U),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(w){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(U).trim(),O=s.getShaderInfoLog(C).trim();let k=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,C);else{const ne=$l(s,U,"vertex"),X=$l(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+ne+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||O==="")&&(Y=!1);Y&&(w.diagnostics={runnable:k,programLog:F,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:u}})}s.deleteShader(U),s.deleteShader(C),D=new po(s,_),T=r0(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Kg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=C,this}let _0=0;class v0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x0(e),t.set(e,n)),n}}class x0{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}}function M0(i,e,t,n,s,r,o){const a=new ad,c=new v0,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,M,w,F,I){const O=F.fog,k=I.geometry,Y=T.isMeshStandardMaterial?F.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),X=ne&&ne.mapping===Do?ne.image.height:null,le=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=se!==void 0?se.length:0;let Me=0;k.morphAttributes.position!==void 0&&(Me=1),k.morphAttributes.normal!==void 0&&(Me=2),k.morphAttributes.color!==void 0&&(Me=3);let Z,N,V,ce;if(le){const it=Tn[le];Z=it.vertexShader,N=it.fragmentShader}else Z=T.vertexShader,N=T.fragmentShader,c.update(T),V=c.getVertexShaderID(T),ce=c.getFragmentShaderID(T);const J=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),ye=I.isInstancedMesh===!0,ge=I.isBatchedMesh===!0,xe=!!T.map,W=!!T.matcap,ee=!!ne,R=!!T.aoMap,re=!!T.lightMap,te=!!T.bumpMap,fe=!!T.normalMap,ae=!!T.displacementMap,Ae=!!T.emissiveMap,ue=!!T.metalnessMap,E=!!T.roughnessMap,y=T.anisotropy>0,H=T.clearcoat>0,K=T.dispersion>0,oe=T.iridescence>0,ie=T.sheen>0,De=T.transmission>0,Te=y&&!!T.anisotropyMap,Re=H&&!!T.clearcoatMap,$e=H&&!!T.clearcoatNormalMap,me=H&&!!T.clearcoatRoughnessMap,Pe=oe&&!!T.iridescenceMap,Oe=oe&&!!T.iridescenceThicknessMap,Be=ie&&!!T.sheenColorMap,Le=ie&&!!T.sheenRoughnessMap,qe=!!T.specularMap,Ve=!!T.specularColorMap,ht=!!T.specularIntensityMap,B=De&&!!T.transmissionMap,be=De&&!!T.thicknessMap,j=!!T.gradientMap,he=!!T.alphaMap,Ce=T.alphaTest>0,Ee=!!T.alphaHash,Ge=!!T.extensions;let _t=vi;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(_t=i.toneMapping);const Dt={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Z,fragmentShader:N,defines:T.defines,customVertexShaderID:V,customFragmentShaderID:ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ge,batchingColor:ge&&I._colorsTexture!==null,instancing:ye,instancingColor:ye&&I.instanceColor!==null,instancingMorph:ye&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Bs,alphaToCoverage:!!T.alphaToCoverage,map:xe,matcap:W,envMap:ee,envMapMode:ee&&ne.mapping,envMapCubeUVHeight:X,aoMap:R,lightMap:re,bumpMap:te,normalMap:fe,displacementMap:p&&ae,emissiveMap:Ae,normalMapObjectSpace:fe&&T.normalMapType===wu,normalMapTangentSpace:fe&&T.normalMapType===nd,metalnessMap:ue,roughnessMap:E,anisotropy:y,anisotropyMap:Te,clearcoat:H,clearcoatMap:Re,clearcoatNormalMap:$e,clearcoatRoughnessMap:me,dispersion:K,iridescence:oe,iridescenceMap:Pe,iridescenceThicknessMap:Oe,sheen:ie,sheenColorMap:Be,sheenRoughnessMap:Le,specularMap:qe,specularColorMap:Ve,specularIntensityMap:ht,transmission:De,transmissionMap:B,thicknessMap:be,gradientMap:j,opaque:T.transparent===!1&&T.blending===bs&&T.alphaToCoverage===!1,alphaMap:he,alphaTest:Ce,alphaHash:Ee,combine:T.combine,mapUv:xe&&_(T.map.channel),aoMapUv:R&&_(T.aoMap.channel),lightMapUv:re&&_(T.lightMap.channel),bumpMapUv:te&&_(T.bumpMap.channel),normalMapUv:fe&&_(T.normalMap.channel),displacementMapUv:ae&&_(T.displacementMap.channel),emissiveMapUv:Ae&&_(T.emissiveMap.channel),metalnessMapUv:ue&&_(T.metalnessMap.channel),roughnessMapUv:E&&_(T.roughnessMap.channel),anisotropyMapUv:Te&&_(T.anisotropyMap.channel),clearcoatMapUv:Re&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(T.sheenRoughnessMap.channel),specularMapUv:qe&&_(T.specularMap.channel),specularColorMapUv:Ve&&_(T.specularColorMap.channel),specularIntensityMapUv:ht&&_(T.specularIntensityMap.channel),transmissionMapUv:B&&_(T.transmissionMap.channel),thicknessMapUv:be&&_(T.thicknessMap.channel),alphaMapUv:he&&_(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(xe||he),fog:!!O,useFog:T.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:xe&&T.map.isVideoTexture===!0&&je.getTransfer(T.map.colorSpace)===rt,decodeVideoTextureEmissive:Ae&&T.emissiveMap.isVideoTexture===!0&&je.getTransfer(T.emissiveMap.colorSpace)===rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ct,flipSided:T.side===Gt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function u(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)M.push(w),M.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(A(M,T),S(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function A(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function S(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const M=g[T.type];let w;if(M){const F=Tn[M];w=nf.clone(F.uniforms)}else w=T.uniforms;return w}function U(T,M){let w;for(let F=0,I=h.length;F<I;F++){const O=h[F];if(O.cacheKey===M){w=O,++w.usedTimes;break}}return w===void 0&&(w=new g0(i,M,T,r),h.push(w)),w}function C(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function P(T){c.remove(T)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:U,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:D}}function y0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function S0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ql(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,p,f,g,_,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function a(d,p,f,g,_,m){const u=o(d,p,f,g,_,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):t.push(u)}function c(d,p,f,g,_,m){const u=o(d,p,f,g,_,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||S0),n.length>1&&n.sort(p||Jl),s.length>1&&s.sort(p||Jl)}function h(){for(let d=e,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function T0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ql,i.set(n,[o])):s>=r.length?(o=new Ql,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function b0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ye};break;case"SpotLight":t={position:new L,direction:new L,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function E0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let w0=0;function A0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C0(i){const e=new b0,t=E0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new lt,o=new lt;function a(l){let h=0,d=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,u=0,A=0,S=0,v=0,U=0,C=0,P=0;l.sort(A0);for(let T=0,M=l.length;T<M;T++){const w=l[T],F=w.color,I=w.intensity,O=w.distance,k=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*I,d+=F.g*I,p+=F.b*I;else if(w.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(w.sh.coefficients[Y],I);P++}else if(w.isDirectionalLight){const Y=e.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ne=w.shadow,X=t.get(w);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=w.shadow.matrix,A++}n.directional[f]=Y,f++}else if(w.isSpotLight){const Y=e.get(w);Y.position.setFromMatrixPosition(w.matrixWorld),Y.color.copy(F).multiplyScalar(I),Y.distance=O,Y.coneCos=Math.cos(w.angle),Y.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Y.decay=w.decay,n.spot[_]=Y;const ne=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,ne.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[_]=ne.matrix,w.castShadow){const X=t.get(w);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=k,v++}_++}else if(w.isRectAreaLight){const Y=e.get(w);Y.color.copy(F).multiplyScalar(I),Y.halfWidth.set(w.width*.5,0,0),Y.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=Y,m++}else if(w.isPointLight){const Y=e.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),Y.distance=w.distance,Y.decay=w.decay,w.castShadow){const ne=w.shadow,X=t.get(w);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,X.shadowCameraNear=ne.camera.near,X.shadowCameraFar=ne.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=w.shadow.matrix,S++}n.point[g]=Y,g++}else if(w.isHemisphereLight){const Y=e.get(w);Y.skyColor.copy(w.color).multiplyScalar(I),Y.groundColor.copy(w.groundColor).multiplyScalar(I),n.hemi[u]=Y,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==A||D.numPointShadows!==S||D.numSpotShadows!==v||D.numSpotMaps!==U||D.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=A,D.numPointShadows=S,D.numSpotShadows=v,D.numSpotMaps=U,D.numLightProbes=P,n.version=w0++)}function c(l,h){let d=0,p=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,A=l.length;u<A;u++){const S=l[u];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function eh(i){const e=new C0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function R0(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new eh(i),e.set(s,[a])):r>=o.length?(a=new eh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class P0 extends bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L0 extends bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
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
}`;function U0(i,e,t){let n=new Gc;const s=new pe,r=new pe,o=new ct,a=new P0({depthPacking:Eu}),c=new L0,l={},h=t.maxTextureSize,d={[Mi]:Gt,[Gt]:Mi,[Ct]:Ct},p=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:D0,fragmentShader:I0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Q(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let u=this.type;this.render=function(C,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_i),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=u!==On&&this.type===On,O=u===On&&this.type!==On;for(let k=0,Y=C.length;k<Y;k++){const ne=C[k],X=ne.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const le=X.getFrameExtents();if(s.multiply(le),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,X.mapSize.y=r.y)),X.map===null||I===!0||O===!0){const de=this.type!==On?{minFilter:_n,magFilter:_n}:{};X.map!==null&&X.map.dispose(),X.map=new ki(s.x,s.y,de),X.map.texture.name=ne.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const se=X.getViewportCount();for(let de=0;de<se;de++){const Me=X.getViewport(de);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),F.viewport(o),X.updateMatrices(ne,de),n=X.getFrustum(),v(P,D,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===On&&A(X,D),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,w)};function A(C,P){const D=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ki(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,D,p,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,D,f,_,null)}function S(C,P,D,T){let M=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const F=M.uuid,I=P.uuid;let O=l[F];O===void 0&&(O={},l[F]=O);let k=O[I];k===void 0&&(k=M.clone(),O[I]=k,P.addEventListener("dispose",U)),M=k}if(M.visible=P.visible,M.wireframe=P.wireframe,T===On?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=D}return M}function v(C,P,D,T,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===On)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const I=e.update(C),O=C.material;if(Array.isArray(O)){const k=I.groups;for(let Y=0,ne=k.length;Y<ne;Y++){const X=k[Y],le=O[X.materialIndex];if(le&&le.visible){const se=S(C,le,T,M);C.onBeforeShadow(i,C,P,D,I,se,X),i.renderBufferDirect(D,null,I,se,C,X),C.onAfterShadow(i,C,P,D,I,se,X)}}}else if(O.visible){const k=S(C,O,T,M);C.onBeforeShadow(i,C,P,D,I,k,null),i.renderBufferDirect(D,null,I,k,C,null),C.onAfterShadow(i,C,P,D,I,k,null)}}const F=C.children;for(let I=0,O=F.length;I<O;I++)v(F[I],P,D,T,M)}function U(C){C.target.removeEventListener("dispose",U);for(const D in l){const T=l[D],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const F0={[Ua]:Fa,[Na]:ka,[Oa]:Ga,[As]:Ba,[Fa]:Ua,[ka]:Na,[Ga]:Oa,[Ba]:As};function N0(i,e){function t(){let B=!1;const be=new ct;let j=null;const he=new ct(0,0,0,0);return{setMask:function(Ce){j!==Ce&&!B&&(i.colorMask(Ce,Ce,Ce,Ce),j=Ce)},setLocked:function(Ce){B=Ce},setClear:function(Ce,Ee,Ge,_t,Dt){Dt===!0&&(Ce*=_t,Ee*=_t,Ge*=_t),be.set(Ce,Ee,Ge,_t),he.equals(be)===!1&&(i.clearColor(Ce,Ee,Ge,_t),he.copy(be))},reset:function(){B=!1,j=null,he.set(-1,0,0,0)}}}function n(){let B=!1,be=!1,j=null,he=null,Ce=null;return{setReversed:function(Ee){if(be!==Ee){const Ge=e.get("EXT_clip_control");be?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const _t=Ce;Ce=null,this.setClear(_t)}be=Ee},getReversed:function(){return be},setTest:function(Ee){Ee?J(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Ee){j!==Ee&&!B&&(i.depthMask(Ee),j=Ee)},setFunc:function(Ee){if(be&&(Ee=F0[Ee]),he!==Ee){switch(Ee){case Ua:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Ee}},setLocked:function(Ee){B=Ee},setClear:function(Ee){Ce!==Ee&&(be&&(Ee=1-Ee),i.clearDepth(Ee),Ce=Ee)},reset:function(){B=!1,j=null,he=null,Ce=null,be=!1}}}function s(){let B=!1,be=null,j=null,he=null,Ce=null,Ee=null,Ge=null,_t=null,Dt=null;return{setTest:function(it){B||(it?J(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(it){be!==it&&!B&&(i.stencilMask(it),be=it)},setFunc:function(it,on,Pn){(j!==it||he!==on||Ce!==Pn)&&(i.stencilFunc(it,on,Pn),j=it,he=on,Ce=Pn)},setOp:function(it,on,Pn){(Ee!==it||Ge!==on||_t!==Pn)&&(i.stencilOp(it,on,Pn),Ee=it,Ge=on,_t=Pn)},setLocked:function(it){B=it},setClear:function(it){Dt!==it&&(i.clearStencil(it),Dt=it)},reset:function(){B=!1,be=null,j=null,he=null,Ce=null,Ee=null,Ge=null,_t=null,Dt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,f=[],g=null,_=!1,m=null,u=null,A=null,S=null,v=null,U=null,C=null,P=new Ye(0,0,0),D=0,T=!1,M=null,w=null,F=null,I=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=ne>=2);let le=null,se={};const de=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Z=new ct().fromArray(de),N=new ct().fromArray(Me);function V(B,be,j,he){const Ce=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(B,Ee),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<j;Ge++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(be+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Ee}const ce={};ce[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(As),te(!1),fe(ol),J(i.CULL_FACE),R(_i);function J(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ve(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ye(B,be){return d[B]!==be?(i.bindFramebuffer(B,be),d[B]=be,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=be),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=be),!0):!1}function ge(B,be){let j=f,he=!1;if(B){j=p.get(be),j===void 0&&(j=[],p.set(be,j));const Ce=B.textures;if(j.length!==Ce.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Ge=Ce.length;Ee<Ge;Ee++)j[Ee]=i.COLOR_ATTACHMENT0+Ee;j.length=Ce.length,he=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,he=!0);he&&i.drawBuffers(j)}function xe(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const W={[Ii]:i.FUNC_ADD,[Jd]:i.FUNC_SUBTRACT,[Qd]:i.FUNC_REVERSE_SUBTRACT};W[eu]=i.MIN,W[tu]=i.MAX;const ee={[nu]:i.ZERO,[iu]:i.ONE,[su]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[cu]:i.DST_COLOR,[ou]:i.DST_ALPHA,[ru]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[lu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[fu]:i.CONSTANT_ALPHA,[pu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(B,be,j,he,Ce,Ee,Ge,_t,Dt,it){if(B===_i){_===!0&&(ve(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),B!==jd){if(B!==m||it!==T){if((u!==Ii||v!==Ii)&&(i.blendEquation(i.FUNC_ADD),u=Ii,v=Ii),it)switch(B){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}A=null,S=null,U=null,C=null,P.set(0,0,0),D=0,m=B,T=it}return}Ce=Ce||be,Ee=Ee||j,Ge=Ge||he,(be!==u||Ce!==v)&&(i.blendEquationSeparate(W[be],W[Ce]),u=be,v=Ce),(j!==A||he!==S||Ee!==U||Ge!==C)&&(i.blendFuncSeparate(ee[j],ee[he],ee[Ee],ee[Ge]),A=j,S=he,U=Ee,C=Ge),(_t.equals(P)===!1||Dt!==D)&&(i.blendColor(_t.r,_t.g,_t.b,Dt),P.copy(_t),D=Dt),m=B,T=!1}function re(B,be){B.side===Ct?ve(i.CULL_FACE):J(i.CULL_FACE);let j=B.side===Gt;be&&(j=!j),te(j),B.blending===bs&&B.transparent===!1?R(_i):R(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const he=B.stencilWrite;a.setTest(he),he&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function fe(B){B!==Zd?(J(i.CULL_FACE),B!==w&&(B===ol?i.cullFace(i.BACK):B===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),w=B}function ae(B){B!==F&&(Y&&i.lineWidth(B),F=B)}function Ae(B,be,j){B?(J(i.POLYGON_OFFSET_FILL),(I!==be||O!==j)&&(i.polygonOffset(be,j),I=be,O=j)):ve(i.POLYGON_OFFSET_FILL)}function ue(B){B?J(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function E(B){B===void 0&&(B=i.TEXTURE0+k-1),le!==B&&(i.activeTexture(B),le=B)}function y(B,be,j){j===void 0&&(le===null?j=i.TEXTURE0+k-1:j=le);let he=se[j];he===void 0&&(he={type:void 0,texture:void 0},se[j]=he),(he.type!==B||he.texture!==be)&&(le!==j&&(i.activeTexture(j),le=j),i.bindTexture(B,be||ce[B]),he.type=B,he.texture=be)}function H(){const B=se[le];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(B){Z.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Z.copy(B))}function Le(B){N.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),N.copy(B))}function qe(B,be){let j=l.get(be);j===void 0&&(j=new WeakMap,l.set(be,j));let he=j.get(B);he===void 0&&(he=i.getUniformBlockIndex(be,B.name),j.set(B,he))}function Ve(B,be){const he=l.get(be).get(B);c.get(be)!==he&&(i.uniformBlockBinding(be,he,B.__bindingPointIndex),c.set(be,he))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,se={},d={},p=new WeakMap,f=[],g=null,_=!1,m=null,u=null,A=null,S=null,v=null,U=null,C=null,P=new Ye(0,0,0),D=0,T=!1,M=null,w=null,F=null,I=null,O=null,Z.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ve,bindFramebuffer:ye,drawBuffers:ge,useProgram:xe,setBlending:R,setMaterial:re,setFlipSided:te,setCullFace:fe,setLineWidth:ae,setPolygonOffset:Ae,setScissorTest:ue,activeTexture:E,bindTexture:y,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:oe,texImage2D:Pe,texImage3D:Oe,updateUBOMapping:qe,uniformBlockBinding:Ve,texStorage2D:$e,texStorage3D:me,texSubImage2D:ie,texSubImage3D:De,compressedTexSubImage2D:Te,compressedTexSubImage3D:Re,scissor:Be,viewport:Le,reset:ht}}function th(i,e,t,n){const s=O0(n);switch(t){case Zh:return i*e;case jh:return i*e;case Jh:return i*e*2;case Qh:return i*e/s.components*s.byteLength;case Fc:return i*e/s.components*s.byteLength;case ed:return i*e*2/s.components*s.byteLength;case Nc:return i*e*2/s.components*s.byteLength;case Kh:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case Oc:return i*e*4/s.components*s.byteLength;case ao:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:case qa:return Math.max(i,16)*Math.max(e,8)/4;case Xa:case $a:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uo:case uc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case td:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O0(i){switch(i){case Jn:case Yh:return{byteLength:1,components:1};case ar:case $h:case gr:return{byteLength:2,components:1};case Ic:case Uc:return{byteLength:2,components:4};case Bi:case Dc:case zn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B0(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):xo("canvas")}function _(E,y,H){let K=1;const oe=ue(E);if((oe.width>H||oe.height>H)&&(K=H/Math.max(oe.width,oe.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ie=Math.floor(K*oe.width),De=Math.floor(K*oe.height);d===void 0&&(d=g(ie,De));const Te=y?g(ie,De):d;return Te.width=ie,Te.height=De,Te.getContext("2d").drawImage(E,0,0,ie,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ie+"x"+De+")."),Te}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,y,H,K,oe=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=y;if(y===i.RED&&(H===i.FLOAT&&(ie=i.R32F),H===i.HALF_FLOAT&&(ie=i.R16F),H===i.UNSIGNED_BYTE&&(ie=i.R8)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.R8UI),H===i.UNSIGNED_SHORT&&(ie=i.R16UI),H===i.UNSIGNED_INT&&(ie=i.R32UI),H===i.BYTE&&(ie=i.R8I),H===i.SHORT&&(ie=i.R16I),H===i.INT&&(ie=i.R32I)),y===i.RG&&(H===i.FLOAT&&(ie=i.RG32F),H===i.HALF_FLOAT&&(ie=i.RG16F),H===i.UNSIGNED_BYTE&&(ie=i.RG8)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RG8UI),H===i.UNSIGNED_SHORT&&(ie=i.RG16UI),H===i.UNSIGNED_INT&&(ie=i.RG32UI),H===i.BYTE&&(ie=i.RG8I),H===i.SHORT&&(ie=i.RG16I),H===i.INT&&(ie=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),H===i.UNSIGNED_INT&&(ie=i.RGB32UI),H===i.BYTE&&(ie=i.RGB8I),H===i.SHORT&&(ie=i.RGB16I),H===i.INT&&(ie=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),H===i.UNSIGNED_INT&&(ie=i.RGBA32UI),H===i.BYTE&&(ie=i.RGBA8I),H===i.SHORT&&(ie=i.RGBA16I),H===i.INT&&(ie=i.RGBA32I)),y===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),y===i.RGBA){const De=oe?Io:je.getTransfer(K);H===i.FLOAT&&(ie=i.RGBA32F),H===i.HALF_FLOAT&&(ie=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ie=De===rt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(E,y){let H;return E?y===null||y===Bi||y===Ps?H=i.DEPTH24_STENCIL8:y===zn?H=i.DEPTH32F_STENCIL8:y===ar&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bi||y===Ps?H=i.DEPTH_COMPONENT24:y===zn?H=i.DEPTH_COMPONENT32F:y===ar&&(H=i.DEPTH_COMPONENT16),H}function U(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==_n&&E.minFilter!==Lt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function C(E){const y=E.target;y.removeEventListener("dispose",C),D(y),y.isVideoTexture&&h.delete(y)}function P(E){const y=E.target;y.removeEventListener("dispose",P),M(y)}function D(E){const y=n.get(E);if(y.__webglInit===void 0)return;const H=E.source,K=p.get(H);if(K){const oe=K[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(E),Object.keys(K).length===0&&p.delete(H)}n.remove(E)}function T(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const H=E.source,K=p.get(H);delete K[y.__cacheKey],o.memory.textures--}function M(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let oe=0;oe<y.__webglFramebuffer[K].length;oe++)i.deleteFramebuffer(y.__webglFramebuffer[K][oe]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=E.textures;for(let K=0,oe=H.length;K<oe;K++){const ie=n.get(H[K]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(E)}let w=0;function F(){w=0}function I(){const E=w;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),w+=1,E}function O(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function k(E,y){const H=n.get(E);if(E.isVideoTexture&&ae(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(H,E,y);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function Y(E,y){const H=n.get(E);if(E.version>0&&H.__version!==E.version){N(H,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function ne(E,y){const H=n.get(E);if(E.version>0&&H.__version!==E.version){N(H,E,y);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function X(E,y){const H=n.get(E);if(E.version>0&&H.__version!==E.version){V(H,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}const le={[Va]:i.REPEAT,[jt]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},se={[_n]:i.NEAREST,[Tu]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[zo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},de={[Au]:i.NEVER,[Iu]:i.ALWAYS,[Cu]:i.LESS,[id]:i.LEQUAL,[Ru]:i.EQUAL,[Du]:i.GEQUAL,[Pu]:i.GREATER,[Lu]:i.NOTEQUAL};function Me(E,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Lt||y.magFilter===zo||y.magFilter===Sr||y.magFilter===Ni||y.minFilter===Lt||y.minFilter===zo||y.minFilter===Sr||y.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,le[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,le[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,le[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,se[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,de[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_n||y.minFilter!==Sr&&y.minFilter!==Ni||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Z(E,y){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",C));const K=y.source;let oe=p.get(K);oe===void 0&&(oe={},p.set(K,oe));const ie=O(y);if(ie!==E.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[ie].usedTimes++;const De=oe[E.__cacheKey];De!==void 0&&(oe[E.__cacheKey].usedTimes--,De.usedTimes===0&&T(y)),E.__cacheKey=ie,E.__webglTexture=oe[ie].texture}return H}function N(E,y,H){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const oe=Z(E,y),ie=y.source;t.bindTexture(K,E.__webglTexture,i.TEXTURE0+H);const De=n.get(ie);if(ie.version!==De.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);const Te=je.getPrimaries(je.workingColorSpace),Re=y.colorSpace===pi?null:je.getPrimaries(y.colorSpace),$e=y.colorSpace===pi||Te===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let me=_(y.image,!1,s.maxTextureSize);me=Ae(y,me);const Pe=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type);let Be=S(y.internalFormat,Pe,Oe,y.colorSpace,y.isVideoTexture);Me(K,y);let Le;const qe=y.mipmaps,Ve=y.isVideoTexture!==!0,ht=De.__version===void 0||oe===!0,B=ie.dataReady,be=U(y,me);if(y.isDepthTexture)Be=v(y.format===Ls,y.type),ht&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Be,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Be,me.width,me.height,0,Pe,Oe,null));else if(y.isDataTexture)if(qe.length>0){Ve&&ht&&t.texStorage2D(i.TEXTURE_2D,be,Be,qe[0].width,qe[0].height);for(let j=0,he=qe.length;j<he;j++)Le=qe[j],Ve?B&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Le.width,Le.height,Pe,Oe,Le.data):t.texImage2D(i.TEXTURE_2D,j,Be,Le.width,Le.height,0,Pe,Oe,Le.data);y.generateMipmaps=!1}else Ve?(ht&&t.texStorage2D(i.TEXTURE_2D,be,Be,me.width,me.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Pe,Oe,me.data)):t.texImage2D(i.TEXTURE_2D,0,Be,me.width,me.height,0,Pe,Oe,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Be,qe[0].width,qe[0].height,me.depth);for(let j=0,he=qe.length;j<he;j++)if(Le=qe[j],y.format!==un)if(Pe!==null)if(Ve){if(B)if(y.layerUpdates.size>0){const Ce=th(Le.width,Le.height,y.format,y.type);for(const Ee of y.layerUpdates){const Ge=Le.data.subarray(Ee*Ce/Le.data.BYTES_PER_ELEMENT,(Ee+1)*Ce/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ee,Le.width,Le.height,1,Pe,Ge)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Le.width,Le.height,me.depth,Pe,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Be,Le.width,Le.height,me.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Le.width,Le.height,me.depth,Pe,Oe,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Be,Le.width,Le.height,me.depth,0,Pe,Oe,Le.data)}else{Ve&&ht&&t.texStorage2D(i.TEXTURE_2D,be,Be,qe[0].width,qe[0].height);for(let j=0,he=qe.length;j<he;j++)Le=qe[j],y.format!==un?Pe!==null?Ve?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Le.width,Le.height,Pe,Oe,Le.data):t.texImage2D(i.TEXTURE_2D,j,Be,Le.width,Le.height,0,Pe,Oe,Le.data)}else if(y.isDataArrayTexture)if(Ve){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Be,me.width,me.height,me.depth),B)if(y.layerUpdates.size>0){const j=th(me.width,me.height,y.format,y.type);for(const he of y.layerUpdates){const Ce=me.data.subarray(he*j/me.data.BYTES_PER_ELEMENT,(he+1)*j/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,me.width,me.height,1,Pe,Oe,Ce)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,Oe,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,Pe,Oe,me.data);else if(y.isData3DTexture)Ve?(ht&&t.texStorage3D(i.TEXTURE_3D,be,Be,me.width,me.height,me.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,Oe,me.data)):t.texImage3D(i.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,Pe,Oe,me.data);else if(y.isFramebufferTexture){if(ht)if(Ve)t.texStorage2D(i.TEXTURE_2D,be,Be,me.width,me.height);else{let j=me.width,he=me.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Be,j,he,0,Pe,Oe,null),j>>=1,he>>=1}}else if(qe.length>0){if(Ve&&ht){const j=ue(qe[0]);t.texStorage2D(i.TEXTURE_2D,be,Be,j.width,j.height)}for(let j=0,he=qe.length;j<he;j++)Le=qe[j],Ve?B&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Pe,Oe,Le):t.texImage2D(i.TEXTURE_2D,j,Be,Pe,Oe,Le);y.generateMipmaps=!1}else if(Ve){if(ht){const j=ue(me);t.texStorage2D(i.TEXTURE_2D,be,Be,j.width,j.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Oe,me)}else t.texImage2D(i.TEXTURE_2D,0,Be,Pe,Oe,me);m(y)&&u(K),De.__version=ie.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function V(E,y,H){if(y.image.length!==6)return;const K=Z(E,y),oe=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);const ie=n.get(oe);if(oe.version!==ie.__version||K===!0){t.activeTexture(i.TEXTURE0+H);const De=je.getPrimaries(je.workingColorSpace),Te=y.colorSpace===pi?null:je.getPrimaries(y.colorSpace),Re=y.colorSpace===pi||De===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const $e=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!$e&&!me?Pe[he]=_(y.image[he],!0,s.maxCubemapSize):Pe[he]=me?y.image[he].image:y.image[he],Pe[he]=Ae(y,Pe[he]);const Oe=Pe[0],Be=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),qe=S(y.internalFormat,Be,Le,y.colorSpace),Ve=y.isVideoTexture!==!0,ht=ie.__version===void 0||K===!0,B=oe.dataReady;let be=U(y,Oe);Me(i.TEXTURE_CUBE_MAP,y);let j;if($e){Ve&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,qe,Oe.width,Oe.height);for(let he=0;he<6;he++){j=Pe[he].mipmaps;for(let Ce=0;Ce<j.length;Ce++){const Ee=j[Ce];y.format!==un?Be!==null?Ve?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ee.width,Ee.height,Be,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,qe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ee.width,Ee.height,Be,Le,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,qe,Ee.width,Ee.height,0,Be,Le,Ee.data)}}}else{if(j=y.mipmaps,Ve&&ht){j.length>0&&be++;const he=ue(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,qe,he.width,he.height)}for(let he=0;he<6;he++)if(me){Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,Be,Le,Pe[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,qe,Pe[he].width,Pe[he].height,0,Be,Le,Pe[he].data);for(let Ce=0;Ce<j.length;Ce++){const Ge=j[Ce].image[he].image;Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,Ge.width,Ge.height,Be,Le,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,qe,Ge.width,Ge.height,0,Be,Le,Ge.data)}}else{Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Be,Le,Pe[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,qe,Be,Le,Pe[he]);for(let Ce=0;Ce<j.length;Ce++){const Ee=j[Ce];Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,Be,Le,Ee.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,qe,Be,Le,Ee.image[he])}}}m(y)&&u(i.TEXTURE_CUBE_MAP),ie.__version=oe.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ce(E,y,H,K,oe,ie){const De=r.convert(H.format,H.colorSpace),Te=r.convert(H.type),Re=S(H.internalFormat,De,Te,H.colorSpace),$e=n.get(y),me=n.get(H);if(me.__renderTarget=y,!$e.__hasExternalTextures){const Pe=Math.max(1,y.width>>ie),Oe=Math.max(1,y.height>>ie);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,Re,Pe,Oe,y.depth,0,De,Te,null):t.texImage2D(oe,ie,Re,Pe,Oe,0,De,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),fe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,oe,me.__webglTexture,0,te(y)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,oe,me.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(E,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const K=y.depthTexture,oe=K&&K.isDepthTexture?K.type:null,ie=v(y.stencilBuffer,oe),De=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=te(y);fe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ie,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,E)}else{const K=y.textures;for(let oe=0;oe<K.length;oe++){const ie=K[oe],De=r.convert(ie.format,ie.colorSpace),Te=r.convert(ie.type),Re=S(ie.internalFormat,De,Te,ie.colorSpace),$e=te(y);H&&fe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Re,y.width,y.height):fe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,Re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Re,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);const oe=K.__webglTexture,ie=te(y);if(y.depthTexture.format===Es)fe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(y.depthTexture.format===Ls)fe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ye(E){const y=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const oe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",oe)};K.addEventListener("dispose",oe),y.__depthDisposeCallback=oe}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ve(y.__webglFramebuffer,E)}else if(H){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),J(y.__webglDepthbuffer[K],E,!1);else{const oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),J(y.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(E,y,H){const K=n.get(E);y!==void 0&&ce(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ye(E)}function xe(E){const y=E.texture,H=n.get(E),K=n.get(y);E.addEventListener("dispose",P);const oe=E.textures,ie=E.isWebGLCubeRenderTarget===!0,De=oe.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++),ie){H.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[Te]=[];for(let Re=0;Re<y.mipmaps.length;Re++)H.__webglFramebuffer[Te][Re]=i.createFramebuffer()}else H.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let Te=0;Te<y.mipmaps.length;Te++)H.__webglFramebuffer[Te]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(De)for(let Te=0,Re=oe.length;Te<Re;Te++){const $e=n.get(oe[Te]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&fe(E)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Te=0;Te<oe.length;Te++){const Re=oe[Te];H.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Te]);const $e=r.convert(Re.format,Re.colorSpace),me=r.convert(Re.type),Pe=S(Re.internalFormat,$e,me,Re.colorSpace,E.isXRRenderTarget===!0),Oe=te(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Pe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,H.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),J(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Me(i.TEXTURE_CUBE_MAP,y);for(let Te=0;Te<6;Te++)if(y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)ce(H.__webglFramebuffer[Te][Re],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Re);else ce(H.__webglFramebuffer[Te],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(y)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let Te=0,Re=oe.length;Te<Re;Te++){const $e=oe[Te],me=n.get($e);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Me(i.TEXTURE_2D,$e),ce(H.__webglFramebuffer,E,$e,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),m($e)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Te=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,K.__webglTexture),Me(Te,y),y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)ce(H.__webglFramebuffer[Re],E,y,i.COLOR_ATTACHMENT0,Te,Re);else ce(H.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,Te,0);m(y)&&u(Te),t.unbindTexture()}E.depthBuffer&&ye(E)}function W(E){const y=E.textures;for(let H=0,K=y.length;H<K;H++){const oe=y[H];if(m(oe)){const ie=A(E),De=n.get(oe).__webglTexture;t.bindTexture(ie,De),u(ie),t.unbindTexture()}}}const ee=[],R=[];function re(E){if(E.samples>0){if(fe(E)===!1){const y=E.textures,H=E.width,K=E.height;let oe=i.COLOR_BUFFER_BIT;const ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(E),Te=y.length>1;if(Te)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const $e=n.get(y[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,oe,i.NEAREST),c===!0&&(ee.length=0,R.length=0,ee.push(i.COLOR_ATTACHMENT0+Re),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ee.push(ie),R.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const $e=n.get(y[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function te(E){return Math.min(s.maxSamples,E.samples)}function fe(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ae(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ae(E,y){const H=E.colorSpace,K=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==Bs&&H!==pi&&(je.getTransfer(H)===rt?(K!==un||oe!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=ne,this.setTextureCube=X,this.rebindTextures=ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=fe}function k0(i,e){function t(n,s=pi){let r;const o=je.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.BYTE;if(n===$h)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Dc)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===gr)return i.HALF_FLOAT;if(n===Zh)return i.ALPHA;if(n===Kh)return i.RGB;if(n===un)return i.RGBA;if(n===jh)return i.LUMINANCE;if(n===Jh)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Qh)return i.RED;if(n===Fc)return i.RED_INTEGER;if(n===ed)return i.RG;if(n===Nc)return i.RG_INTEGER;if(n===Oc)return i.RGBA_INTEGER;if(n===ao||n===co||n===lo||n===ho)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===Ya||n===$a||n===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ka)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===uc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===td||n===pc||n===mc||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class G0 extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V0=`
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

}`;class W0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yi({vertexShader:H0,fragmentShader:V0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X0 extends Yi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null;const _=new W0,m=t.getContextAttributes();let u=null,A=null;const S=[],v=[],U=new pe;let C=null;const P=new Kt;P.viewport=new ct;const D=new Kt;D.viewport=new ct;const T=[P,D],M=new G0;let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=S[N];return V===void 0&&(V=new ma,S[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=S[N];return V===void 0&&(V=new ma,S[N]=V),V.getGripSpace()},this.getHand=function(N){let V=S[N];return V===void 0&&(V=new ma,S[N]=V),V.getHandSpace()};function I(N){const V=v.indexOf(N.inputSource);if(V===-1)return;const ce=S[V];ce!==void 0&&(ce.update(N.inputSource,N.frame,l||o),ce.dispatchEvent({type:N.type,data:N.inputSource}))}function O(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let N=0;N<S.length;N++){const V=v[N];V!==null&&(v[N]=null,S[N].disconnect(V))}w=null,F=null,_.reset(),e.setRenderTarget(u),f=null,p=null,d=null,s=null,A=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new ki(f.framebufferWidth,f.framebufferHeight,{format:un,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,ce=null,J=null;m.depth&&(J=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=m.stencil?Ls:Es,ce=m.stencil?Ps:Bi);const ve={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),A=new ki(p.textureWidth,p.textureHeight,{format:un,type:Jn,depthTexture:new gd(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(N){for(let V=0;V<N.removed.length;V++){const ce=N.removed[V],J=v.indexOf(ce);J>=0&&(v[J]=null,S[J].disconnect(ce))}for(let V=0;V<N.added.length;V++){const ce=N.added[V];let J=v.indexOf(ce);if(J===-1){for(let ye=0;ye<S.length;ye++)if(ye>=v.length){v.push(ce),J=ye;break}else if(v[ye]===null){v[ye]=ce,J=ye;break}if(J===-1)break}const ve=S[J];ve&&ve.connect(ce)}}const Y=new L,ne=new L;function X(N,V,ce){Y.setFromMatrixPosition(V.matrixWorld),ne.setFromMatrixPosition(ce.matrixWorld);const J=Y.distanceTo(ne),ve=V.projectionMatrix.elements,ye=ce.projectionMatrix.elements,ge=ve[14]/(ve[10]-1),xe=ve[14]/(ve[10]+1),W=(ve[9]+1)/ve[5],ee=(ve[9]-1)/ve[5],R=(ve[8]-1)/ve[0],re=(ye[8]+1)/ye[0],te=ge*R,fe=ge*re,ae=J/(-R+re),Ae=ae*-R;if(V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ae),N.translateZ(ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ve[10]===-1)N.projectionMatrix.copy(V.projectionMatrix),N.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const ue=ge+ae,E=xe+ae,y=te-Ae,H=fe+(J-Ae),K=W*xe/E*ue,oe=ee*xe/E*ue;N.projectionMatrix.makePerspective(y,H,K,oe,ue,E),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function le(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let V=N.near,ce=N.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),M.near=D.near=P.near=V,M.far=D.far=P.far=ce,(w!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far),P.layers.mask=N.layers.mask|2,D.layers.mask=N.layers.mask|4,M.layers.mask=P.layers.mask|D.layers.mask;const J=N.parent,ve=M.cameras;le(M,J);for(let ye=0;ye<ve.length;ye++)le(ve[ye],J);ve.length===2?X(M,P,D):M.projectionMatrix.copy(P.projectionMatrix),se(N,M,J)};function se(N,V,ce){ce===null?N.matrix.copy(V.matrixWorld):(N.matrix.copy(ce.matrixWorld),N.matrix.invert(),N.matrix.multiply(V.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(V.projectionMatrix),N.projectionMatrixInverse.copy(V.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=vc*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(N){c=N,p!==null&&(p.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let de=null;function Me(N,V){if(h=V.getViewerPose(l||o),g=V,h!==null){const ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let J=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let ye=0;ye<ce.length;ye++){const ge=ce[ye];let xe=null;if(f!==null)xe=f.getViewport(ge);else{const ee=d.getViewSubImage(p,ge);xe=ee.viewport,ye===0&&(e.setRenderTargetTextures(A,ee.colorTexture,p.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(A))}let W=T[ye];W===void 0&&(W=new Kt,W.layers.enable(ye),W.viewport=new ct,T[ye]=W),W.matrix.fromArray(ge.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(ge.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(xe.x,xe.y,xe.width,xe.height),ye===0&&(M.matrix.copy(W.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push(W)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const ye=d.getDepthInformation(ce[0]);ye&&ye.isValid&&ye.texture&&_.init(e,ye,s.renderState)}}for(let ce=0;ce<S.length;ce++){const J=v[ce],ve=S[ce];J!==null&&ve!==void 0&&ve.update(J,V,l||o)}de&&de(N,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const Z=new pd;Z.setAnimationLoop(Me),this.setAnimationLoop=function(N){de=N},this.dispose=function(){}}}const Li=new Yt,Y0=new lt;function $0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,dd(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,A,S,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,A,S):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Gt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Gt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const A=e.get(u),S=A.envMap,v=A.envMapRotation;S&&(m.envMap.value=S,Li.copy(v),Li.x*=-1,Li.y*=-1,Li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(Li)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,A,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*A,m.scale.value=S*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,A){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Gt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const A=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,S){const v=S.program;n.uniformBlockBinding(A,v)}function l(A,S){let v=s[A.id];v===void 0&&(g(A),v=h(A),s[A.id]=v,A.addEventListener("dispose",m));const U=S.program;n.updateUBOMapping(A,U);const C=e.render.frame;r[A.id]!==C&&(p(A),r[A.id]=C)}function h(A){const S=d();A.__bindingPointIndex=S;const v=i.createBuffer(),U=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const S=s[A.id],v=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,P=v.length;C<P;C++){const D=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,M=D.length;T<M;T++){const w=D[T];if(f(w,C,T,U)===!0){const F=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let k=0;k<I.length;k++){const Y=I[k],ne=_(Y);typeof Y=="number"||typeof Y=="boolean"?(w.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,F+O,w.__data)):Y.isMatrix3?(w.__data[0]=Y.elements[0],w.__data[1]=Y.elements[1],w.__data[2]=Y.elements[2],w.__data[3]=0,w.__data[4]=Y.elements[3],w.__data[5]=Y.elements[4],w.__data[6]=Y.elements[5],w.__data[7]=0,w.__data[8]=Y.elements[6],w.__data[9]=Y.elements[7],w.__data[10]=Y.elements[8],w.__data[11]=0):(Y.toArray(w.__data,O),O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,S,v,U){const C=A.value,P=S+"_"+v;if(U[P]===void 0)return typeof C=="number"||typeof C=="boolean"?U[P]=C:U[P]=C.clone(),!0;{const D=U[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return U[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(A){const S=A.uniforms;let v=0;const U=16;for(let P=0,D=S.length;P<D;P++){const T=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,w=T.length;M<w;M++){const F=T[M],I=Array.isArray(F.value)?F.value:[F.value];for(let O=0,k=I.length;O<k;O++){const Y=I[O],ne=_(Y),X=v%U,le=X%ne.boundary,se=X+le;v+=le,se!==0&&U-se<ne.storage&&(v+=U-se),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=ne.storage}}}const C=v%U;return C>0&&(v+=U-C),A.__size=v,A.__cache={},this}function _(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){const S=A.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}class Z0{constructor(e={}){const{canvas:t=Nu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const A=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=vi,this.toneMappingExposure=1;const v=this;let U=!1,C=0,P=0,D=null,T=-1,M=null;const w=new ct,F=new ct;let I=null;const O=new Ye(0);let k=0,Y=t.width,ne=t.height,X=1,le=null,se=null;const de=new ct(0,0,Y,ne),Me=new ct(0,0,Y,ne);let Z=!1;const N=new Gc;let V=!1,ce=!1;const J=new lt,ve=new lt,ye=new L,ge=new ct,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let W=!1;function ee(){return D===null?X:1}let R=n;function re(b,G){return t.getContext(b,G)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lc}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),R===null){const G="webgl2";if(R=re(G,b),R===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let te,fe,ae,Ae,ue,E,y,H,K,oe,ie,De,Te,Re,$e,me,Pe,Oe,Be,Le,qe,Ve,ht,B;function be(){te=new eg(R),te.init(),Ve=new k0(R,te),fe=new qm(R,te,e,Ve),ae=new N0(R,te),fe.reverseDepthBuffer&&p&&ae.buffers.depth.setReversed(!0),Ae=new ig(R),ue=new y0,E=new B0(R,te,ae,ue,fe,Ve,Ae),y=new Km(v),H=new Qm(v),K=new hf(R),ht=new Ym(R,K),oe=new tg(R,K,Ae,ht),ie=new rg(R,oe,K,Ae),Be=new sg(R,fe,E),me=new Zm(ue),De=new M0(v,y,H,te,fe,ht,me),Te=new $0(v,ue),Re=new T0,$e=new R0(te),Oe=new Xm(v,y,H,ae,ie,f,c),Pe=new U0(v,ie,fe),B=new q0(R,Ae,fe,ae),Le=new $m(R,te,Ae),qe=new ng(R,te,Ae),Ae.programs=De.programs,v.capabilities=fe,v.extensions=te,v.properties=ue,v.renderLists=Re,v.shadowMap=Pe,v.state=ae,v.info=Ae}be();const j=new X0(v,R);this.xr=j,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(Y,ne,!1))},this.getSize=function(b){return b.set(Y,ne)},this.setSize=function(b,G,$=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,ne=G,t.width=Math.floor(b*X),t.height=Math.floor(G*X),$===!0&&(t.style.width=b+"px",t.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(Y*X,ne*X).floor()},this.setDrawingBufferSize=function(b,G,$){Y=b,ne=G,X=$,t.width=Math.floor(b*$),t.height=Math.floor(G*$),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(de)},this.setViewport=function(b,G,$,q){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,G,$,q),ae.viewport(w.copy(de).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Me)},this.setScissor=function(b,G,$,q){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,G,$,q),ae.scissor(F.copy(Me).multiplyScalar(X).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(b){ae.setScissorTest(Z=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(b=!0,G=!0,$=!0){let q=0;if(b){let z=!1;if(D!==null){const _e=D.texture.format;z=_e===Oc||_e===Nc||_e===Fc}if(z){const _e=D.texture.type,we=_e===Jn||_e===Bi||_e===ar||_e===Ps||_e===Ic||_e===Uc,Ie=Oe.getClearColor(),Ue=Oe.getClearAlpha(),ke=Ie.r,ze=Ie.g,Fe=Ie.b;we?(g[0]=ke,g[1]=ze,g[2]=Fe,g[3]=Ue,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=ke,_[1]=ze,_[2]=Fe,_[3]=Ue,R.clearBufferiv(R.COLOR,0,_))}else q|=R.COLOR_BUFFER_BIT}G&&(q|=R.DEPTH_BUFFER_BIT),$&&(q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Re.dispose(),$e.dispose(),ue.dispose(),y.dispose(),H.dispose(),ie.dispose(),ht.dispose(),B.dispose(),De.dispose(),j.dispose(),j.removeEventListener("sessionstart",Jc),j.removeEventListener("sessionend",Qc),Ei.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const b=Ae.autoReset,G=Pe.enabled,$=Pe.autoUpdate,q=Pe.needsUpdate,z=Pe.type;be(),Ae.autoReset=b,Pe.enabled=G,Pe.autoUpdate=$,Pe.needsUpdate=q,Pe.type=z}function Ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ge(b){const G=b.target;G.removeEventListener("dispose",Ge),_t(G)}function _t(b){Dt(b),ue.remove(b)}function Dt(b){const G=ue.get(b).programs;G!==void 0&&(G.forEach(function($){De.releaseProgram($)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,$,q,z,_e){G===null&&(G=xe);const we=z.isMesh&&z.matrixWorld.determinant()<0,Ie=Yd(b,G,$,q,z);ae.setMaterial(q,we);let Ue=$.index,ke=1;if(q.wireframe===!0){if(Ue=oe.getWireframeAttribute($),Ue===void 0)return;ke=2}const ze=$.drawRange,Fe=$.attributes.position;let Je=ze.start*ke,dt=(ze.start+ze.count)*ke;_e!==null&&(Je=Math.max(Je,_e.start*ke),dt=Math.min(dt,(_e.start+_e.count)*ke)),Ue!==null?(Je=Math.max(Je,0),dt=Math.min(dt,Ue.count)):Fe!=null&&(Je=Math.max(Je,0),dt=Math.min(dt,Fe.count));const ut=dt-Je;if(ut<0||ut===1/0)return;ht.setup(z,q,Ie,$,Ue);let Ht,tt=Le;if(Ue!==null&&(Ht=K.get(Ue),tt=qe,tt.setIndex(Ht)),z.isMesh)q.wireframe===!0?(ae.setLineWidth(q.wireframeLinewidth*ee()),tt.setMode(R.LINES)):tt.setMode(R.TRIANGLES);else if(z.isLine){let Ne=q.linewidth;Ne===void 0&&(Ne=1),ae.setLineWidth(Ne*ee()),z.isLineSegments?tt.setMode(R.LINES):z.isLineLoop?tt.setMode(R.LINE_LOOP):tt.setMode(R.LINE_STRIP)}else z.isPoints?tt.setMode(R.POINTS):z.isSprite&&tt.setMode(R.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)tt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ne=z._multiDrawStarts,Ln=z._multiDrawCounts,nt=z._multiDrawCount,an=Ue?K.get(Ue).bytesPerElement:1,$i=ue.get(q).currentProgram.getUniforms();for(let $t=0;$t<nt;$t++)$i.setValue(R,"_gl_DrawID",$t),tt.render(Ne[$t]/an,Ln[$t])}else if(z.isInstancedMesh)tt.renderInstances(Je,ut,z.count);else if($.isInstancedBufferGeometry){const Ne=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ln=Math.min($.instanceCount,Ne);tt.renderInstances(Je,ut,Ln)}else tt.render(Je,ut)};function it(b,G,$){b.transparent===!0&&b.side===Ct&&b.forceSinglePass===!1?(b.side=Gt,b.needsUpdate=!0,yr(b,G,$),b.side=Mi,b.needsUpdate=!0,yr(b,G,$),b.side=Ct):yr(b,G,$)}this.compile=function(b,G,$=null){$===null&&($=b),u=$e.get($),u.init(G),S.push(u),$.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),b!==$&&b.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();const q=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const _e=z.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ie=_e[we];it(Ie,$,z),q.add(Ie)}else it(_e,$,z),q.add(_e)}),S.pop(),u=null,q},this.compileAsync=function(b,G,$=null){const q=this.compile(b,G,$);return new Promise(z=>{function _e(){if(q.forEach(function(we){ue.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){z(b);return}setTimeout(_e,10)}te.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let on=null;function Pn(b){on&&on(b)}function Jc(){Ei.stop()}function Qc(){Ei.start()}const Ei=new pd;Ei.setAnimationLoop(Pn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(b){on=b,j.setAnimationLoop(b),b===null?Ei.stop():Ei.start()},j.addEventListener("sessionstart",Jc),j.addEventListener("sessionend",Qc),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(G),G=j.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,G,D),u=$e.get(b,S.length),u.init(G),S.push(u),ve.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),N.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,V=me.init(this.clippingPlanes,ce),m=Re.get(b,A.length),m.init(),A.push(m),j.enabled===!0&&j.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&Go(_e,G,-1/0,v.sortObjects)}Go(b,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,se),W=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,W&&Oe.addToRenderList(m,b),this.info.render.frame++,V===!0&&me.beginShadows();const $=u.state.shadowsArray;Pe.render($,b,G),V===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(u.setupLights(),G.isArrayCamera){const _e=G.cameras;if(z.length>0)for(let we=0,Ie=_e.length;we<Ie;we++){const Ue=_e[we];tl(q,z,b,Ue)}W&&Oe.render(b);for(let we=0,Ie=_e.length;we<Ie;we++){const Ue=_e[we];el(m,b,Ue,Ue.viewport)}}else z.length>0&&tl(q,z,b,G),W&&Oe.render(b),el(m,b,G);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(v,b,G),ht.resetDefaultState(),T=-1,M=null,S.pop(),S.length>0?(u=S[S.length-1],V===!0&&me.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Go(b,G,$,q){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||N.intersectsSprite(b)){q&&ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ve);const we=ie.update(b),Ie=b.material;Ie.visible&&m.push(b,we,Ie,$,ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||N.intersectsObject(b))){const we=ie.update(b),Ie=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ge.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ge.copy(we.boundingSphere.center)),ge.applyMatrix4(b.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){const Ue=we.groups;for(let ke=0,ze=Ue.length;ke<ze;ke++){const Fe=Ue[ke],Je=Ie[Fe.materialIndex];Je&&Je.visible&&m.push(b,we,Je,$,ge.z,Fe)}}else Ie.visible&&m.push(b,we,Ie,$,ge.z,null)}}const _e=b.children;for(let we=0,Ie=_e.length;we<Ie;we++)Go(_e[we],G,$,q)}function el(b,G,$,q){const z=b.opaque,_e=b.transmissive,we=b.transparent;u.setupLightsView($),V===!0&&me.setGlobalState(v.clippingPlanes,$),q&&ae.viewport(w.copy(q)),z.length>0&&Mr(z,G,$),_e.length>0&&Mr(_e,G,$),we.length>0&&Mr(we,G,$),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function tl(b,G,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new ki(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?gr:Jn,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const _e=u.state.transmissionRenderTarget[q.id],we=q.viewport||w;_e.setSize(we.z,we.w);const Ie=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),W&&Oe.render($);const Ue=v.toneMapping;v.toneMapping=vi;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),V===!0&&me.setGlobalState(v.clippingPlanes,q),Mr(b,$,q),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e),te.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Fe=0,Je=G.length;Fe<Je;Fe++){const dt=G[Fe],ut=dt.object,Ht=dt.geometry,tt=dt.material,Ne=dt.group;if(tt.side===Ct&&ut.layers.test(q.layers)){const Ln=tt.side;tt.side=Gt,tt.needsUpdate=!0,nl(ut,$,q,Ht,tt,Ne),tt.side=Ln,tt.needsUpdate=!0,ze=!0}}ze===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e))}v.setRenderTarget(Ie),v.setClearColor(O,k),ke!==void 0&&(q.viewport=ke),v.toneMapping=Ue}function Mr(b,G,$){const q=G.isScene===!0?G.overrideMaterial:null;for(let z=0,_e=b.length;z<_e;z++){const we=b[z],Ie=we.object,Ue=we.geometry,ke=q===null?we.material:q,ze=we.group;Ie.layers.test($.layers)&&nl(Ie,G,$,Ue,ke,ze)}}function nl(b,G,$,q,z,_e){b.onBeforeRender(v,G,$,q,z,_e),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(v,G,$,q,b,_e),z.transparent===!0&&z.side===Ct&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,v.renderBufferDirect($,G,q,z,b,_e),z.side=Mi,z.needsUpdate=!0,v.renderBufferDirect($,G,q,z,b,_e),z.side=Ct):v.renderBufferDirect($,G,q,z,b,_e),b.onAfterRender(v,G,$,q,z,_e)}function yr(b,G,$){G.isScene!==!0&&(G=xe);const q=ue.get(b),z=u.state.lights,_e=u.state.shadowsArray,we=z.state.version,Ie=De.getParameters(b,z.state,_e,G,$),Ue=De.getProgramCacheKey(Ie);let ke=q.programs;q.environment=b.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(b.isMeshStandardMaterial?H:y).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",Ge),ke=new Map,q.programs=ke);let ze=ke.get(Ue);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===we)return sl(b,Ie),ze}else Ie.uniforms=De.getUniforms(b),b.onBeforeCompile(Ie,v),ze=De.acquireProgram(Ie,Ue),ke.set(Ue,ze),q.uniforms=Ie.uniforms;const Fe=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=me.uniform),sl(b,Ie),q.needsLights=qd(b),q.lightsStateVersion=we,q.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=ze,q.uniformsList=null,ze}function il(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=po.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function sl(b,G){const $=ue.get(b);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Yd(b,G,$,q,z){G.isScene!==!0&&(G=xe),E.resetTextureUnits();const _e=G.fog,we=q.isMeshStandardMaterial?G.environment:null,Ie=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Bs,Ue=(q.isMeshStandardMaterial?H:y).get(q.envMap||we),ke=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!$.morphAttributes.position,Je=!!$.morphAttributes.normal,dt=!!$.morphAttributes.color;let ut=vi;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ut=v.toneMapping);const Ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tt=Ht!==void 0?Ht.length:0,Ne=ue.get(q),Ln=u.state.lights;if(V===!0&&(ce===!0||b!==M)){const Jt=b===M&&q.id===T;me.setState(q,b,Jt)}let nt=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ln.state.version||Ne.outputColorSpace!==Ie||z.isBatchedMesh&&Ne.batching===!1||!z.isBatchedMesh&&Ne.batching===!0||z.isBatchedMesh&&Ne.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ne.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ne.instancing===!1||!z.isInstancedMesh&&Ne.instancing===!0||z.isSkinnedMesh&&Ne.skinning===!1||!z.isSkinnedMesh&&Ne.skinning===!0||z.isInstancedMesh&&Ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ne.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ne.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ne.instancingMorph===!1&&z.morphTexture!==null||Ne.envMap!==Ue||q.fog===!0&&Ne.fog!==_e||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==me.numPlanes||Ne.numIntersection!==me.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==ze||Ne.morphTargets!==Fe||Ne.morphNormals!==Je||Ne.morphColors!==dt||Ne.toneMapping!==ut||Ne.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Ne.__version=q.version);let an=Ne.currentProgram;nt===!0&&(an=yr(q,G,z));let $i=!1,$t=!1,zs=!1;const ft=an.getUniforms(),yn=Ne.uniforms;if(ae.useProgram(an.program)&&($i=!0,$t=!0,zs=!0),q.id!==T&&(T=q.id,$t=!0),$i||M!==b){ae.buffers.depth.getReversed()?(J.copy(b.projectionMatrix),Bu(J),ku(J),ft.setValue(R,"projectionMatrix",J)):ft.setValue(R,"projectionMatrix",b.projectionMatrix),ft.setValue(R,"viewMatrix",b.matrixWorldInverse);const ti=ft.map.cameraPosition;ti!==void 0&&ti.setValue(R,ye.setFromMatrixPosition(b.matrixWorld)),fe.logarithmicDepthBuffer&&ft.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,$t=!0,zs=!0)}if(z.isSkinnedMesh){ft.setOptional(R,z,"bindMatrix"),ft.setOptional(R,z,"bindMatrixInverse");const Jt=z.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),ft.setValue(R,"boneTexture",Jt.boneTexture,E))}z.isBatchedMesh&&(ft.setOptional(R,z,"batchingTexture"),ft.setValue(R,"batchingTexture",z._matricesTexture,E),ft.setOptional(R,z,"batchingIdTexture"),ft.setValue(R,"batchingIdTexture",z._indirectTexture,E),ft.setOptional(R,z,"batchingColorTexture"),z._colorsTexture!==null&&ft.setValue(R,"batchingColorTexture",z._colorsTexture,E));const Hs=$.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Be.update(z,$,an),($t||Ne.receiveShadow!==z.receiveShadow)&&(Ne.receiveShadow=z.receiveShadow,ft.setValue(R,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(yn.envMap.value=Ue,yn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(yn.envMapIntensity.value=G.environmentIntensity),$t&&(ft.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&$d(yn,zs),_e&&q.fog===!0&&Te.refreshFogUniforms(yn,_e),Te.refreshMaterialUniforms(yn,q,X,ne,u.state.transmissionRenderTarget[b.id]),po.upload(R,il(Ne),yn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(po.upload(R,il(Ne),yn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(R,"center",z.center),ft.setValue(R,"modelViewMatrix",z.modelViewMatrix),ft.setValue(R,"normalMatrix",z.normalMatrix),ft.setValue(R,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Jt=q.uniformsGroups;for(let ti=0,ni=Jt.length;ti<ni;ti++){const rl=Jt[ti];B.update(rl,an),B.bind(rl,an)}}return an}function $d(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function qd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,G,$){ue.get(b.texture).__webglTexture=G,ue.get(b.depthTexture).__webglTexture=$;const q=ue.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){const $=ue.get(b);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,$=0){D=b,C=G,P=$;let q=!0,z=null,_e=!1,we=!1;if(b){const Ue=ue.get(b);if(Ue.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(R.FRAMEBUFFER,null),q=!1;else if(Ue.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Ue.__hasExternalTextures)E.rebindTextures(b,ue.get(b.texture).__webglTexture,ue.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(Ue.__boundDepthTexture!==Fe){if(Fe!==null&&ue.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const ze=ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?z=ze[G][$]:z=ze[G],_e=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?z=ue.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[$]:z=ze,w.copy(b.viewport),F.copy(b.scissor),I=b.scissorTest}else w.copy(de).multiplyScalar(X).floor(),F.copy(Me).multiplyScalar(X).floor(),I=Z;if(ae.bindFramebuffer(R.FRAMEBUFFER,z)&&q&&ae.drawBuffers(b,z),ae.viewport(w),ae.scissor(F),ae.setScissorTest(I),_e){const Ue=ue.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue.__webglTexture,$)}else if(we){const Ue=ue.get(b.texture),ke=G||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.__webglTexture,$||0,ke)}T=-1},this.readRenderTargetPixels=function(b,G,$,q,z,_e,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){ae.bindFramebuffer(R.FRAMEBUFFER,Ie);try{const Ue=b.texture,ke=Ue.format,ze=Ue.type;if(!fe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-q&&$>=0&&$<=b.height-z&&R.readPixels(G,$,q,z,Ve.convert(ke),Ve.convert(ze),_e)}finally{const Ue=D!==null?ue.get(D).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,G,$,q,z,_e,we){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){const Ue=b.texture,ke=Ue.format,ze=Ue.type;if(!fe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-q&&$>=0&&$<=b.height-z){ae.bindFramebuffer(R.FRAMEBUFFER,Ie);const Fe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.bufferData(R.PIXEL_PACK_BUFFER,_e.byteLength,R.STREAM_READ),R.readPixels(G,$,q,z,Ve.convert(ke),Ve.convert(ze),0);const Je=D!==null?ue.get(D).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,Je);const dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ou(R,dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_e),R.deleteBuffer(Fe),R.deleteSync(dt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,$=0){b.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-$),z=Math.floor(b.image.width*q),_e=Math.floor(b.image.height*q),we=G!==null?G.x:0,Ie=G!==null?G.y:0;E.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,$,0,0,we,Ie,z,_e),ae.unbindTexture()},this.copyTextureToTexture=function(b,G,$=null,q=null,z=0){b.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],G=arguments[2],z=arguments[3]||0,$=null);let _e,we,Ie,Ue,ke,ze,Fe,Je,dt;const ut=b.isCompressedTexture?b.mipmaps[z]:b.image;$!==null?(_e=$.max.x-$.min.x,we=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Ue=$.min.x,ke=$.min.y,ze=$.isBox3?$.min.z:0):(_e=ut.width,we=ut.height,Ie=ut.depth||1,Ue=0,ke=0,ze=0),q!==null?(Fe=q.x,Je=q.y,dt=q.z):(Fe=0,Je=0,dt=0);const Ht=Ve.convert(G.format),tt=Ve.convert(G.type);let Ne;G.isData3DTexture?(E.setTexture3D(G,0),Ne=R.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(E.setTexture2DArray(G,0),Ne=R.TEXTURE_2D_ARRAY):(E.setTexture2D(G,0),Ne=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const Ln=R.getParameter(R.UNPACK_ROW_LENGTH),nt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),an=R.getParameter(R.UNPACK_SKIP_PIXELS),$i=R.getParameter(R.UNPACK_SKIP_ROWS),$t=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ze);const zs=b.isDataArrayTexture||b.isData3DTexture,ft=G.isDataArrayTexture||G.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const yn=ue.get(b),Hs=ue.get(G),Jt=ue.get(yn.__renderTarget),ti=ue.get(Hs.__renderTarget);ae.bindFramebuffer(R.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ni=0;ni<Ie;ni++)zs&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ue.get(b).__webglTexture,z,ze+ni),b.isDepthTexture?(ft&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ue.get(G).__webglTexture,z,dt+ni),R.blitFramebuffer(Ue,ke,_e,we,Fe,Je,_e,we,R.DEPTH_BUFFER_BIT,R.NEAREST)):ft?R.copyTexSubImage3D(Ne,z,Fe,Je,dt+ni,Ue,ke,_e,we):R.copyTexSubImage2D(Ne,z,Fe,Je,dt+ni,Ue,ke,_e,we);ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Ne,z,Fe,Je,dt,_e,we,Ie,Ht,tt,ut.data):G.isCompressedArrayTexture?R.compressedTexSubImage3D(Ne,z,Fe,Je,dt,_e,we,Ie,Ht,ut.data):R.texSubImage3D(Ne,z,Fe,Je,dt,_e,we,Ie,Ht,tt,ut):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,z,Fe,Je,_e,we,Ht,tt,ut.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,z,Fe,Je,ut.width,ut.height,Ht,ut.data):R.texSubImage2D(R.TEXTURE_2D,z,Fe,Je,_e,we,Ht,tt,ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ln),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,an),R.pixelStorei(R.UNPACK_SKIP_ROWS,$i),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$t),z===0&&G.generateMipmaps&&R.generateMipmap(Ne),ae.unbindTexture()},this.copyTextureToTexture3D=function(b,G,$=null,q=null,z=0){return b.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,b=arguments[2],G=arguments[3],z=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,$,q,z)},this.initRenderTarget=function(b){ue.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),ae.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,ae.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class yd extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class K0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new L;class Mo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sd extends bi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const $s=new L,ls=new L,hs=new L,ds=new pe,qs=new pe,Td=new lt,Vr=new L,Zs=new L,Wr=new L,nh=new pe,ga=new pe,ih=new pe;class j0 extends St{constructor(e=new Sd){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new K0(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Mo(n,3,0,!1)),cs.setAttribute("uv",new Mo(n,2,3,!1))}this.geometry=cs,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),Td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-hs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Xr(Vr.set(-.5,-.5,0),hs,o,ls,s,r),Xr(Zs.set(.5,-.5,0),hs,o,ls,s,r),Xr(Wr.set(.5,.5,0),hs,o,ls,s,r),nh.set(0,0),ga.set(1,0),ih.set(1,1);let a=e.ray.intersectTriangle(Vr,Zs,Wr,!1,$s);if(a===null&&(Xr(Zs.set(-.5,.5,0),hs,o,ls,s,r),ga.set(0,1),a=e.ray.intersectTriangle(Vr,Wr,Zs,!1,$s),a===null))return;const c=e.ray.origin.distanceTo($s);c<e.near||c>e.far||t.push({distance:c,point:$s.clone(),uv:tn.getInterpolation($s,Vr,Zs,Wr,nh,ga,ih,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(i,e,t,n,s,r){ds.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(qs.x=r*ds.x-s*ds.y,qs.y=s*ds.x+r*ds.y):qs.copy(ds),i.copy(e),i.x+=qs.x,i.y+=qs.y,i.applyMatrix4(Td)}class Hc extends bi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yo=new L,So=new L,sh=new lt,Ks=new Bc,Yr=new Uo,_a=new L,rh=new L;class J0 extends St{constructor(e=new rn,t=new Hc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yo.fromBufferAttribute(t,s-1),So.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yo.distanceTo(So);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;sh.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const u=h.getX(_),A=h.getX(_+1),S=$r(this,e,Ks,c,u,A);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),u=$r(this,e,Ks,c,_,m);u&&t.push(u)}}else{const f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const u=$r(this,e,Ks,c,_,_+1);u&&t.push(u)}if(this.isLineLoop){const _=$r(this,e,Ks,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $r(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(yo.fromBufferAttribute(o,s),So.fromBufferAttribute(o,r),t.distanceSqToSegment(yo,So,_a,rh)>n)return;_a.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_a);if(!(c<e.near||c>e.far))return{distance:c,point:rh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const oh=new L,ah=new L;class Q0 extends J0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)oh.fromBufferAttribute(t,s),ah.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oh.distanceTo(ah);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class To extends zt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,f=(o-h)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new pe:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,s=[],r=[],o=[],a=new L,c=new lt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vc extends Rn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*d+this.aX,l=p*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class e_ extends Vc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;p*=h,f*=h,s(o,a,p,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const qr=new L,va=new Wc,xa=new Wc,Ma=new Wc;class t_ extends Rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),l=qr);const d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),va.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,g,_,m),xa.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,g,_,m),Ma.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),xa.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),Ma.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(va.calc(c),xa.calc(c),Ma.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ch(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function n_(i,e){const t=1-i;return t*t*e}function i_(i,e){return 2*(1-i)*i*e}function s_(i,e){return i*i*e}function nr(i,e,t,n){return n_(i,e)+i_(i,t)+s_(i,n)}function r_(i,e){const t=1-i;return t*t*t*e}function o_(i,e){const t=1-i;return 3*t*t*i*e}function a_(i,e){return 3*(1-i)*i*i*e}function c_(i,e){return i*i*i*e}function ir(i,e,t,n,s){return r_(i,e)+o_(i,t)+a_(i,n)+c_(i,s)}class bd extends Rn{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class l_ extends Rn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ed extends Rn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h_ extends Rn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wd extends Rn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d_ extends Rn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ad extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ch(a,c.x,l.x,h.x,d.x),ch(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var yc=Object.freeze({__proto__:null,ArcCurve:e_,CatmullRomCurve3:t_,CubicBezierCurve:bd,CubicBezierCurve3:l_,EllipseCurve:Vc,LineCurve:Ed,LineCurve3:h_,QuadraticBezierCurve:wd,QuadraticBezierCurve3:d_,SplineCurve:Ad});class u_ extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new yc[s.type]().fromJSON(s))}return this}}class An extends u_{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ed(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new wd(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new bd(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ad(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Vc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ke extends rn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],p=[],f=[];let g=0;const _=[],m=n/2;let u=0;A(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(f,2));function A(){const v=new L,U=new L;let C=0;const P=(t-e)/n;for(let D=0;D<=r;D++){const T=[],M=D/r,w=M*(t-e)+e;for(let F=0;F<=s;F++){const I=F/s,O=I*c+a,k=Math.sin(O),Y=Math.cos(O);U.x=w*k,U.y=-M*n+m,U.z=w*Y,d.push(U.x,U.y,U.z),v.set(k,P,Y).normalize(),p.push(v.x,v.y,v.z),f.push(I,1-M),T.push(g++)}_.push(T)}for(let D=0;D<s;D++)for(let T=0;T<r;T++){const M=_[T][D],w=_[T+1][D],F=_[T+1][D+1],I=_[T][D+1];(e>0||T!==0)&&(h.push(M,w,I),C+=3),(t>0||T!==r-1)&&(h.push(w,F,I),C+=3)}l.addGroup(u,C,0),u+=C}function S(v){const U=g,C=new pe,P=new L;let D=0;const T=v===!0?e:t,M=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),g++;const w=g;for(let F=0;F<=s;F++){const O=F/s*c+a,k=Math.cos(O),Y=Math.sin(O);P.x=T*Y,P.y=m*M,P.z=T*k,d.push(P.x,P.y,P.z),p.push(0,M,0),C.x=k*.5+.5,C.y=Y*.5*M+.5,f.push(C.x,C.y),g++}for(let F=0;F<s;F++){const I=U+F,O=w+F;v===!0?h.push(O,O+1,I):h.push(O+1,O,I),D+=3}l.addGroup(u,D,v===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ft extends An{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new An().fromJSON(s))}return this}}const f_={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Cd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,p,f;if(n&&(r=v_(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)d=i[g],p=i[g+1],d<a&&(a=d),p<c&&(c=p),d>l&&(l=d),p>h&&(h=p);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return cr(r,o,t,a,c,f,0),o}};function Cd(i,e,t,n,s){let r,o;if(s===R_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=lh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=lh(r,i[r],i[r+1],o);return o&&No(o,o.next)&&(hr(o),o=o.next),o}function zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(No(t,t.next)||gt(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&T_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?m_(i,n,s,r):p_(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),hr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=g_(zi(i),e,t),cr(i,e,t,n,s,r,2)):o===2&&__(i,e,t,n,s,r):cr(zi(i),e,t,n,s,r,1);break}}}function p_(i){const e=i.prev,t=i,n=i.next;if(gt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,p=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&xs(s,a,r,c,o,l,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function m_(i,e,t,n){const s=i.prev,r=i,o=i.next;if(gt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,p=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<p?h:p:d<p?d:p,_=a>c?a>l?a:l:c>l?c:l,m=h>d?h>p?h:p:d>p?d:p,u=Sc(f,g,e,t,n),A=Sc(_,m,e,t,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=u&&v&&v.z<=A;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&xs(a,h,c,d,l,p,S.x,S.y)&&gt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&xs(a,h,c,d,l,p,v.x,v.y)&&gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=u;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&xs(a,h,c,d,l,p,S.x,S.y)&&gt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=A;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&xs(a,h,c,d,l,p,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function g_(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!No(s,r)&&Rd(s,n,n.next,r)&&lr(s,r)&&lr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),hr(n),hr(n.next),n=i=r),n=n.next}while(n!==i);return zi(n)}function __(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&w_(o,a)){let c=Pd(o,a);o=zi(o,o.next),c=zi(c,c.next),cr(o,e,t,n,s,r,0),cr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function v_(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Cd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(E_(l));for(s.sort(x_),r=0;r<s.length;r++)t=M_(s[r],t);return t}function x_(i,e){return i.x-e.x}function M_(i,e){const t=y_(i,e);if(!t)return e;const n=Pd(t,i);return zi(n,n.next),zi(t,t.next)}function y_(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&xs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),lr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&S_(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function S_(i,e){return gt(i.prev,i,e.prev)<0&&gt(e.next,i,i.next)<0}function T_(i,e,t,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,b_(s)}function b_(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function E_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function w_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!A_(i,e)&&(lr(i,e)&&lr(e,i)&&C_(i,e)&&(gt(i.prev,i,e.prev)||gt(i,e.prev,e))||No(i,e)&&gt(i.prev,i,i.next)>0&&gt(e.prev,e,e.next)>0)}function gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function No(i,e){return i.x===e.x&&i.y===e.y}function Rd(i,e,t,n){const s=Kr(gt(i,e,t)),r=Kr(gt(i,e,n)),o=Kr(gt(t,n,i)),a=Kr(gt(t,n,e));return!!(s!==r&&o!==a||s===0&&Zr(i,t,e)||r===0&&Zr(i,n,e)||o===0&&Zr(t,i,n)||a===0&&Zr(t,e,n))}function Zr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Kr(i){return i>0?1:i<0?-1:0}function A_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function lr(i,e){return gt(i.prev,i,i.next)<0?gt(i,e,i.next)>=0&&gt(i,i.prev,e)>=0:gt(i,e,i.prev)<0||gt(i,i.next,e)<0}function C_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Pd(i,e){const t=new Tc(i.i,i.x,i.y),n=new Tc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function lh(i,e,t,n){const s=new Tc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function R_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class sr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return sr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];hh(e),dh(n,e);let o=e.length;t.forEach(hh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,dh(n,t[c]);const a=f_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function hh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class wt extends rn{constructor(e=new Ft([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ot(s,3)),this.setAttribute("uv",new Ot(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:P_;let S,v=!1,U,C,P,D;u&&(S=u.getSpacedPoints(h),v=!0,p=!1,U=u.computeFrenetFrames(h,!1),C=new L,P=new L,D=new L),p||(m=0,f=0,g=0,_=0);const T=a.extractPoints(l);let M=T.shape;const w=T.holes;if(!sr.isClockWise(M)){M=M.reverse();for(let W=0,ee=w.length;W<ee;W++){const R=w[W];sr.isClockWise(R)&&(w[W]=R.reverse())}}const I=sr.triangulateShape(M,w),O=M;for(let W=0,ee=w.length;W<ee;W++){const R=w[W];M=M.concat(R)}function k(W,ee,R){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(ee,R)}const Y=M.length,ne=I.length;function X(W,ee,R){let re,te,fe;const ae=W.x-ee.x,Ae=W.y-ee.y,ue=R.x-W.x,E=R.y-W.y,y=ae*ae+Ae*Ae,H=ae*E-Ae*ue;if(Math.abs(H)>Number.EPSILON){const K=Math.sqrt(y),oe=Math.sqrt(ue*ue+E*E),ie=ee.x-Ae/K,De=ee.y+ae/K,Te=R.x-E/oe,Re=R.y+ue/oe,$e=((Te-ie)*E-(Re-De)*ue)/(ae*E-Ae*ue);re=ie+ae*$e-W.x,te=De+Ae*$e-W.y;const me=re*re+te*te;if(me<=2)return new pe(re,te);fe=Math.sqrt(me/2)}else{let K=!1;ae>Number.EPSILON?ue>Number.EPSILON&&(K=!0):ae<-Number.EPSILON?ue<-Number.EPSILON&&(K=!0):Math.sign(Ae)===Math.sign(E)&&(K=!0),K?(re=-Ae,te=ae,fe=Math.sqrt(y)):(re=ae,te=Ae,fe=Math.sqrt(y/2))}return new pe(re/fe,te/fe)}const le=[];for(let W=0,ee=O.length,R=ee-1,re=W+1;W<ee;W++,R++,re++)R===ee&&(R=0),re===ee&&(re=0),le[W]=X(O[W],O[R],O[re]);const se=[];let de,Me=le.concat();for(let W=0,ee=w.length;W<ee;W++){const R=w[W];de=[];for(let re=0,te=R.length,fe=te-1,ae=re+1;re<te;re++,fe++,ae++)fe===te&&(fe=0),ae===te&&(ae=0),de[re]=X(R[re],R[fe],R[ae]);se.push(de),Me=Me.concat(de)}for(let W=0;W<m;W++){const ee=W/m,R=f*Math.cos(ee*Math.PI/2),re=g*Math.sin(ee*Math.PI/2)+_;for(let te=0,fe=O.length;te<fe;te++){const ae=k(O[te],le[te],re);J(ae.x,ae.y,-R)}for(let te=0,fe=w.length;te<fe;te++){const ae=w[te];de=se[te];for(let Ae=0,ue=ae.length;Ae<ue;Ae++){const E=k(ae[Ae],de[Ae],re);J(E.x,E.y,-R)}}}const Z=g+_;for(let W=0;W<Y;W++){const ee=p?k(M[W],Me[W],Z):M[W];v?(P.copy(U.normals[0]).multiplyScalar(ee.x),C.copy(U.binormals[0]).multiplyScalar(ee.y),D.copy(S[0]).add(P).add(C),J(D.x,D.y,D.z)):J(ee.x,ee.y,0)}for(let W=1;W<=h;W++)for(let ee=0;ee<Y;ee++){const R=p?k(M[ee],Me[ee],Z):M[ee];v?(P.copy(U.normals[W]).multiplyScalar(R.x),C.copy(U.binormals[W]).multiplyScalar(R.y),D.copy(S[W]).add(P).add(C),J(D.x,D.y,D.z)):J(R.x,R.y,d/h*W)}for(let W=m-1;W>=0;W--){const ee=W/m,R=f*Math.cos(ee*Math.PI/2),re=g*Math.sin(ee*Math.PI/2)+_;for(let te=0,fe=O.length;te<fe;te++){const ae=k(O[te],le[te],re);J(ae.x,ae.y,d+R)}for(let te=0,fe=w.length;te<fe;te++){const ae=w[te];de=se[te];for(let Ae=0,ue=ae.length;Ae<ue;Ae++){const E=k(ae[Ae],de[Ae],re);v?J(E.x,E.y+S[h-1].y,S[h-1].x+R):J(E.x,E.y,d+R)}}}N(),V();function N(){const W=s.length/3;if(p){let ee=0,R=Y*ee;for(let re=0;re<ne;re++){const te=I[re];ve(te[2]+R,te[1]+R,te[0]+R)}ee=h+m*2,R=Y*ee;for(let re=0;re<ne;re++){const te=I[re];ve(te[0]+R,te[1]+R,te[2]+R)}}else{for(let ee=0;ee<ne;ee++){const R=I[ee];ve(R[2],R[1],R[0])}for(let ee=0;ee<ne;ee++){const R=I[ee];ve(R[0]+Y*h,R[1]+Y*h,R[2]+Y*h)}}n.addGroup(W,s.length/3-W,0)}function V(){const W=s.length/3;let ee=0;ce(O,ee),ee+=O.length;for(let R=0,re=w.length;R<re;R++){const te=w[R];ce(te,ee),ee+=te.length}n.addGroup(W,s.length/3-W,1)}function ce(W,ee){let R=W.length;for(;--R>=0;){const re=R;let te=R-1;te<0&&(te=W.length-1);for(let fe=0,ae=h+m*2;fe<ae;fe++){const Ae=Y*fe,ue=Y*(fe+1),E=ee+re+Ae,y=ee+te+Ae,H=ee+te+ue,K=ee+re+ue;ye(E,y,H,K)}}}function J(W,ee,R){c.push(W),c.push(ee),c.push(R)}function ve(W,ee,R){ge(W),ge(ee),ge(R);const re=s.length/3,te=A.generateTopUV(n,s,re-3,re-2,re-1);xe(te[0]),xe(te[1]),xe(te[2])}function ye(W,ee,R,re){ge(W),ge(ee),ge(re),ge(ee),ge(R),ge(re);const te=s.length/3,fe=A.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);xe(fe[0]),xe(fe[1]),xe(fe[3]),xe(fe[1]),xe(fe[2]),xe(fe[3])}function ge(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function xe(W){r.push(W.x),r.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return L_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yc[s.type]().fromJSON(s)),new wt(n,e.options)}}const P_={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new pe(r,o),new pe(a,c),new pe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],p=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pe(o,1-c),new pe(l,1-d),new pe(p,1-g),new pe(_,1-u)]:[new pe(a,1-c),new pe(h,1-d),new pe(f,1-g),new pe(m,1-u)]}};function L_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class D_ extends bi{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class st extends bi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xc extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class I_ extends Xc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ya=new lt,uh=new L,fh=new L;class Ld{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ph=new lt,js=new L,Sa=new L;class U_ extends Ld{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),Sa.copy(n.position),Sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sa),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph)}}class F_ extends Xc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new U_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class N_ extends Ld{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jr extends Xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new N_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class O_ extends Q0{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ye(n),s=new Ye(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let p=0,f=0,g=-a;p<=t;p++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=p===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new rn;h.setAttribute("position",new Ot(c,3)),h.setAttribute("color",new Ot(l,3));const d=new Hc({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class B_ extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);const gh={type:"change"},Yc={type:"start"},Dd={type:"end"},Jr=new Bc,_h=new fi,k_=Math.cos(70*Fu.DEG2RAD),Mt=new L,Vt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ta=1e-6;class G_ extends B_{constructor(e,t=null){super(e,t),this.state=at.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Gi,this._lastTargetPosition=new L,this._quat=new Gi().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mh,this._sphericalDelta=new mh,this._scale=1,this._panOffset=new L,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new L,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=H_.bind(this),this._onPointerDown=z_.bind(this),this._onPointerUp=V_.bind(this),this._onContextMenu=K_.bind(this),this._onMouseWheel=Y_.bind(this),this._onKeyDown=$_.bind(this),this._onTouchStart=q_.bind(this),this._onTouchMove=Z_.bind(this),this._onMouseDown=W_.bind(this),this._onMouseMove=X_.bind(this),this._interceptControlDown=j_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gh),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Vt:n>Math.PI&&(n-=Vt),s<-Math.PI?s+=Vt:s>Math.PI&&(s-=Vt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Jr.origin.copy(this.object.position),Jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jr.direction))<k_?this.object.lookAt(this.target):(_h.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jr.intersectPlane(_h,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ta||this._lastTargetPosition.distanceToSquared(this.target)>Ta?(this.dispatchEvent(gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vt/60*this.autoRotateSpeed*e:Vt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Mt.copy(s).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function z_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function H_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function V_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dd),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function W_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case Ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case Ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Yc)}function X_(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Y_(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent(Yc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Dd))}function $_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function q_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Yc)}function Z_(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function K_(i){this.enabled!==!1&&i.preventDefault()}function j_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Q_ extends yd{constructor(){super();const e=new Xe;e.deleteAttribute("uv");const t=new st({side:Gt}),n=new st,s=new F_(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Q(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Q(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Q(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Q(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Q(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Q(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new Q(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const p=new Q(e,us(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const f=new Q(e,us(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Q(e,us(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Q(e,us(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Q(e,us(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const u=new Q(e,us(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function us(i){const e=new kc;return e.color.setScalar(i),e}class ev{constructor(){this.aluminum=new st({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.currentFrameColor="silver",this.acrylic=new st({color:9684477,transparent:!0,opacity:.42,roughness:.1,metalness:.1,depthWrite:!1,side:Ct}),this.doorGlassLeft=new st({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Ct}),this.doorGlassRight=new st({color:9684477,transparent:!0,opacity:.48,roughness:.08,metalness:.1,depthWrite:!1,side:Ct}),this.handleMaterial=new st({color:16777215,metalness:.75,roughness:.12,envMapIntensity:1.2}),this.screwSilver=new st({color:11055288,metalness:.85,roughness:.22,envMapIntensity:1}),this.screwSlot=new st({color:1842978,metalness:.1,roughness:.9}),this.grommetMaterial=new st({color:1579035,metalness:.1,roughness:.85}),this.railMaterial=new st({color:4738388,metalness:.15,roughness:.55}),this.endCapMaterial=new st({color:10133670,metalness:.1,roughness:.65}),this.casterWheel=new st({color:1579035,roughness:.7,metalness:.15}),this.casterBracket=new st({color:14212838,roughness:.22,metalness:.85,envMapIntensity:1.2}),this.wireMesh=new st({color:1842463,roughness:.55,metalness:.25,envMapIntensity:.9}),this.silverInnerFrame=new st({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchAluminum=new st({color:12897236,metalness:.85,roughness:.25,envMapIntensity:1.3}),this.perchGrayCap=new st({color:10133670,metalness:.1,roughness:.65}),this.perchBlackCap=new st({color:2237222,metalness:.1,roughness:.65}),this.perchWhiteScrew=new st({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.ventCoverAcrylic=new st({color:9684477,transparent:!0,opacity:.5,roughness:.08,metalness:.1,depthWrite:!1,side:Ct}),this.thumbScrewMaterial=new st({color:16119544,roughness:.35,metalness:.1,envMapIntensity:1}),this.blackMatteAcrylic=new st({color:1579292,roughness:.82,metalness:.04,side:Ct}),this.smokeGrayAcrylic=new st({color:2829877,transparent:!0,opacity:.6,roughness:.12,metalness:.1,depthWrite:!1,side:Ct}),this.caulkingMaterial=new st({color:13817821,roughness:.42,metalness:.04,envMapIntensity:.6}),this.rubberPackingMaterial=new st({color:7502212,roughness:.78,metalness:.06,envMapIntensity:.5})}createPolycaMaterial(e,t){return new st({map:e,bumpMap:t,bumpScale:1.2,transparent:!0,opacity:.78,roughness:.32,metalness:.1,side:Ct,depthWrite:!1})}createPunchingMaterial(e){return new st({color:9684477,alphaMap:e,transparent:!0,opacity:.58,roughness:.35,metalness:.05,side:Ct,depthWrite:!1})}setFrameColor(e){this.currentFrameColor=e,e==="black"?(this.aluminum.color.setHex(1974308),this.aluminum.metalness=.28,this.aluminum.roughness=.42,this.aluminum.envMapIntensity=.85,this.endCapMaterial.color.setHex(2237222),this.railMaterial.color.setHex(1974050),this.thumbScrewMaterial.color.setHex(1974050)):(this.aluminum.color.setHex(12897236),this.aluminum.metalness=.85,this.aluminum.roughness=.25,this.aluminum.envMapIntensity=1.3,this.endCapMaterial.color.setHex(10133670),this.railMaterial.color.setHex(4738388),this.thumbScrewMaterial.color.setHex(16119544)),this.aluminum.needsUpdate=!0,this.endCapMaterial.needsUpdate=!0,this.railMaterial.needsUpdate=!0,this.thumbScrewMaterial.needsUpdate=!0}dispose(){this.aluminum.dispose(),this.acrylic.dispose(),this.doorGlassLeft.dispose(),this.doorGlassRight.dispose(),this.handleMaterial.dispose(),this.grommetMaterial.dispose(),this.railMaterial.dispose(),this.endCapMaterial.dispose(),this.casterWheel.dispose(),this.casterBracket.dispose(),this.wireMesh.dispose(),this.silverInnerFrame.dispose(),this.perchAluminum.dispose(),this.perchGrayCap.dispose(),this.perchBlackCap.dispose(),this.perchWhiteScrew.dispose(),this.ventCoverAcrylic.dispose(),this.thumbScrewMaterial.dispose(),this.screwSilver.dispose(),this.screwSlot.dispose(),this.blackMatteAcrylic.dispose(),this.smokeGrayAcrylic.dispose()}}function tv(){const i=new Ft,e=10,t=3,n=1.8,s=5.5,r=5;i.moveTo(e,e),i.lineTo(e,t),i.lineTo(e-n,t),i.lineTo(e-n,s),i.lineTo(e-r,s),i.lineTo(e-r,-s),i.lineTo(e-n,-s),i.lineTo(e-n,-t),i.lineTo(e,-t),i.lineTo(e,-e),i.lineTo(t,-e),i.lineTo(t,-e+n),i.lineTo(s,-e+n),i.lineTo(s,-e+r),i.lineTo(-s,-e+r),i.lineTo(-s,-e+n),i.lineTo(-t,-e+n),i.lineTo(-t,-e),i.lineTo(-e,-e),i.lineTo(-e,-t),i.lineTo(-e+n,-t),i.lineTo(-e+n,-s),i.lineTo(-e+r,-s),i.lineTo(-e+r,s),i.lineTo(-e+n,s),i.lineTo(-e+n,t),i.lineTo(-e,t),i.lineTo(-e,e),i.lineTo(-t,e),i.lineTo(-t,e-n),i.lineTo(-s,e-n),i.lineTo(-s,e-r),i.lineTo(s,e-r),i.lineTo(s,e-n),i.lineTo(t,e-n),i.lineTo(t,e),i.lineTo(e,e);const o=new An;return o.absarc(0,0,2.25,0,Math.PI*2,!0),i.holes.push(o),i}function nv(){const i=new Ft,e=10,t=20,n=3,s=1.8,r=5.5,o=5;i.moveTo(e,t),i.lineTo(e,10+n),i.lineTo(e-s,10+n),i.lineTo(e-s,10+r),i.lineTo(e-o,10+r),i.lineTo(e-o,10-r),i.lineTo(e-s,10-r),i.lineTo(e-s,10-n),i.lineTo(e,10-n),i.lineTo(e,-10+n),i.lineTo(e-s,-10+n),i.lineTo(e-s,-10+r),i.lineTo(e-o,-10+r),i.lineTo(e-o,-10-r),i.lineTo(e-s,-10-r),i.lineTo(e-s,-10-n),i.lineTo(e,-10-n),i.lineTo(e,-t),i.lineTo(n,-t),i.lineTo(n,-t+s),i.lineTo(r,-t+s),i.lineTo(r,-t+o),i.lineTo(-r,-t+o),i.lineTo(-r,-t+s),i.lineTo(-n,-t+s),i.lineTo(-n,-t),i.lineTo(-e,-t),i.lineTo(-e,-10-n),i.lineTo(-e+s,-10-n),i.lineTo(-e+s,-10-r),i.lineTo(-e+o,-10-r),i.lineTo(-e+o,-10+r),i.lineTo(-e+s,-10+r),i.lineTo(-e+s,-10+n),i.lineTo(-e,-10+n),i.lineTo(-e,10-n),i.lineTo(-e+s,10-n),i.lineTo(-e+s,10-r),i.lineTo(-e+o,10-r),i.lineTo(-e+o,10+r),i.lineTo(-e+s,10+r),i.lineTo(-e+s,10+n),i.lineTo(-e,10+n),i.lineTo(-e,t),i.lineTo(-n,t),i.lineTo(-n,t-s),i.lineTo(-r,t-s),i.lineTo(-r,t-o),i.lineTo(r,t-o),i.lineTo(r,t-s),i.lineTo(n,t-s),i.lineTo(n,t),i.lineTo(e,t);const a=new An;a.absarc(0,10,2.25,0,Math.PI*2,!0),i.holes.push(a);const c=new An;return c.absarc(0,-10,2.25,0,Math.PI*2,!0),i.holes.push(c),i}const iv=tv(),sv=nv(),rv=ov();function ov(){const i=new Ft,e=10,t=30,n=3,s=1.8,r=5.5,o=5;i.moveTo(e,t),i.lineTo(e,20+n),i.lineTo(e-s,20+n),i.lineTo(e-s,20+r),i.lineTo(e-o,20+r),i.lineTo(e-o,20-r),i.lineTo(e-s,20-r),i.lineTo(e-s,20-n),i.lineTo(e,20-n),i.lineTo(e,n),i.lineTo(e-s,n),i.lineTo(e-s,r),i.lineTo(e-o,r),i.lineTo(e-o,-r),i.lineTo(e-s,-r),i.lineTo(e-s,-n),i.lineTo(e,-n),i.lineTo(e,-20+n),i.lineTo(e-s,-20+n),i.lineTo(e-s,-20+r),i.lineTo(e-o,-20+r),i.lineTo(e-o,-20-r),i.lineTo(e-s,-20-r),i.lineTo(e-s,-20-n),i.lineTo(e,-20-n),i.lineTo(e,-t),i.lineTo(n,-t),i.lineTo(n,-t+s),i.lineTo(r,-t+s),i.lineTo(r,-t+o),i.lineTo(-r,-t+o),i.lineTo(-r,-t+s),i.lineTo(-n,-t+s),i.lineTo(-n,-t),i.lineTo(-e,-t),i.lineTo(-e,-20-n),i.lineTo(-e+s,-20-n),i.lineTo(-e+s,-20-r),i.lineTo(-e+o,-20-r),i.lineTo(-e+o,-20+r),i.lineTo(-e+s,-20+r),i.lineTo(-e+s,-20+n),i.lineTo(-e,-20+n),i.lineTo(-e,-n),i.lineTo(-e+s,-n),i.lineTo(-e+s,-r),i.lineTo(-e+o,-r),i.lineTo(-e+o,r),i.lineTo(-e+s,r),i.lineTo(-e+s,n),i.lineTo(-e,n),i.lineTo(-e,20-n),i.lineTo(-e+s,20-n),i.lineTo(-e+s,20-r),i.lineTo(-e+o,20-r),i.lineTo(-e+o,20+r),i.lineTo(-e+s,20+r),i.lineTo(-e+s,20+n),i.lineTo(-e,20+n),i.lineTo(-e,t),i.lineTo(-n,t),i.lineTo(-n,t-s),i.lineTo(-r,t-s),i.lineTo(-r,t-o),i.lineTo(r,t-o),i.lineTo(r,t-s),i.lineTo(n,t-s),i.lineTo(n,t),i.lineTo(e,t);const a=new An;a.absarc(0,20,2.25,0,Math.PI*2,!0),i.holes.push(a);const c=new An;c.absarc(0,0,2.25,0,Math.PI*2,!0),i.holes.push(c);const l=new An;return l.absarc(0,-20,2.25,0,Math.PI*2,!0),i.holes.push(l),i}function av(i){return new wt(iv,{depth:i,bevelEnabled:!1,steps:1})}function Qr(i="bottom"){const e=new Ft,t=10,n=3,s=1.8,r=5.5,o=5;e.moveTo(t,t),i==="right"||(e.lineTo(t,n),e.lineTo(t-s,n),e.lineTo(t-s,r),e.lineTo(t-o,r),e.lineTo(t-o,-r),e.lineTo(t-s,-r),e.lineTo(t-s,-n),e.lineTo(t,-n)),e.lineTo(t,-t),i==="bottom"||(e.lineTo(n,-t),e.lineTo(n,-t+s),e.lineTo(r,-t+s),e.lineTo(r,-t+o),e.lineTo(-r,-t+o),e.lineTo(-r,-t+s),e.lineTo(-n,-t+s),e.lineTo(-n,-t)),e.lineTo(-t,-t),i==="left"||(e.lineTo(-t,-n),e.lineTo(-t+s,-n),e.lineTo(-t+s,-r),e.lineTo(-t+o,-r),e.lineTo(-t+o,r),e.lineTo(-t+s,r),e.lineTo(-t+s,n),e.lineTo(-t,n)),e.lineTo(-t,t),i==="top"||(e.lineTo(-n,t),e.lineTo(-n,t-s),e.lineTo(-r,t-s),e.lineTo(-r,t-o),e.lineTo(r,t-o),e.lineTo(r,t-s),e.lineTo(n,t-s),e.lineTo(n,t)),e.lineTo(t,t);const a=new An;return a.absarc(0,0,2.25,0,Math.PI*2,!0),e.holes.push(a),e}const vh={top:Qr("top"),bottom:Qr("bottom"),left:Qr("left"),right:Qr("right")};function xh(i,e="bottom"){const t=vh[e]||vh.bottom;return new wt(t,{depth:i,bevelEnabled:!1,steps:1})}function cv(i){return new wt(sv,{depth:i,bevelEnabled:!1,steps:1})}function lv(i){return new wt(rv,{depth:i,bevelEnabled:!1,steps:1})}function hv(){const i=new Ft,e=7.5,t=15,n=3,s=1.5,r=5,o=4.5;i.moveTo(e,t),i.lineTo(e,n),i.lineTo(e-s,n),i.lineTo(e-s,r),i.lineTo(e-o,r),i.lineTo(e-o,-r),i.lineTo(e-s,-r),i.lineTo(e-s,-n),i.lineTo(e,-n),i.lineTo(e,-t),i.lineTo(-e,-t),i.lineTo(-e,-n),i.lineTo(-e+s,-n),i.lineTo(-e+s,-r),i.lineTo(-e+o,-r),i.lineTo(-e+o,r),i.lineTo(-e+s,r),i.lineTo(-e+s,n),i.lineTo(-e,n),i.lineTo(-e,t),i.lineTo(e,t);const a=new An;return a.absarc(0,0,2.5,0,Math.PI*2,!0),i.holes.push(a),i}const dv=hv();function uv(i){return new wt(dv,{depth:i,bevelEnabled:!1,steps:1})}function eo(i,e,t=!0){const s=Math.min(2048,Math.max(256,Math.round(i*4))),r=Math.min(2048,Math.max(256,Math.round(e*4))),o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,s,r),a.fillStyle="#000000";const c=7,h=3.1/2*(s/i),d=15,p={x:35,y:35},f={x:i-35,y:35};for(let _=c/2;_<i;_+=c)for(let m=c/2;m<e;m+=c){if(t){const S=Math.hypot(_-p.x,m-p.y),v=Math.hypot(_-f.x,m-f.y);if(S<d+2.5||v<d+2.5)continue}const u=_/i*s,A=m/e*r;a.beginPath(),a.arc(u,A,h,0,Math.PI*2),a.fill()}if(t){const _=d*(s/i);a.beginPath(),a.arc(p.x/i*s,p.y/e*r,_,0,Math.PI*2),a.arc(f.x/i*s,f.y/e*r,_,0,Math.PI*2),a.fill()}const g=new To(o);return g.wrapS=jt,g.wrapT=jt,g.minFilter=Lt,g.magFilter=Lt,g}function Mh(i,e){const n=Math.min(1024,Math.max(128,Math.round(i*3))),s=Math.min(2048,Math.max(256,Math.round(e*3))),r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d");o.fillStyle="rgba(235, 242, 248, 0.72)",o.fillRect(0,0,n,s);const a=document.createElement("canvas");a.width=n,a.height=s;const c=a.getContext("2d");c.fillStyle="#808080",c.fillRect(0,0,n,s);const h=6/e*s;for(let f=0;f<s;f+=h){const g=Math.min(s,f+h),_=g-f,m=o.createLinearGradient(0,f,0,g);m.addColorStop(0,"rgba(140, 165, 185, 0.95)"),m.addColorStop(.18,"rgba(255, 255, 255, 1.0)"),m.addColorStop(.5,"rgba(220, 235, 248, 0.55)"),m.addColorStop(.82,"rgba(240, 248, 255, 0.80)"),m.addColorStop(1,"rgba(140, 165, 185, 0.95)"),o.fillStyle=m,o.fillRect(0,f,n,_);const u=Math.max(1.5,Math.round(h*.12));o.fillStyle="rgba(90, 115, 135, 0.85)",o.fillRect(0,f,n,u);const A=Math.max(1.5,Math.round(h*.16));o.fillStyle="rgba(255, 255, 255, 0.98)",o.fillRect(0,f+u,n,A);const S=c.createLinearGradient(0,f,0,g);S.addColorStop(0,"#1a1a1a"),S.addColorStop(.2,"#f0f0f0"),S.addColorStop(.5,"#999999"),S.addColorStop(.8,"#d8d8d8"),S.addColorStop(1,"#1a1a1a"),c.fillStyle=S,c.fillRect(0,f,n,_)}const d=new To(r);d.wrapS=jt,d.wrapT=jt,d.minFilter=Lt,d.magFilter=Lt;const p=new To(a);return p.wrapS=jt,p.wrapT=jt,p.minFilter=Lt,p.magFilter=Lt,{map:d,bumpMap:p}}function fv(i,e,t=!1,n=!1){return t?"AFS-2020-5":i==="2060"?"AFS-2060-4":i==="2040"?e==="black"?"AFS-2040-4-BK":"AFS-2040-4":n&&e==="silver"?"AFSF-2020-4":e==="black"?"AFS-2020-4-BK":"AFS-2020-4"}function mt(i,e,t,n=!1,s=!1){const r=Math.round(e);return`${fv(i,t,n,s)}-${r}`}class pv{constructor(e){this.materials=e,this.root=new vt,this.root.name="CageRoot",this.frameGroup=new vt,this.frameGroup.name="Frames",this.root.add(this.frameGroup),this.panelGroup=new vt,this.panelGroup.name="Panels",this.root.add(this.panelGroup),this.doorGroup=new vt,this.doorGroup.name="Doors",this.root.add(this.doorGroup),this.feetGroup=new vt,this.feetGroup.name="Feet",this.root.add(this.feetGroup),this.perchGroup=new vt,this.perchGroup.name="Perch",this.root.add(this.perchGroup),this.caulkingGroup=new vt,this.caulkingGroup.name="Caulking",this.root.add(this.caulkingGroup),this.rubberPackingGroup=new vt,this.rubberPackingGroup.name="RubberPacking",this.root.add(this.rubberPackingGroup),this.dividerGroup=new vt,this.dividerGroup.name="RoomDivider",this.root.add(this.dividerGroup),this.params={W:750,D:450,H:300,cageType:"A",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,hasFloorReinforcement:!1,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasPerch:!1,hasRubberPacking:!1,hasRoomDivider:!1,frontWideFrame:"2x",doorHingeSide:"left",footType:"rubber",showPanels:!0,doorState:"closed",frameColor:"silver",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}},this.activeGeometries=[],this.activeTextures=[],this.activeMaterials=[],this.partsList=[]}disposeResources(){for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.activeTextures)e.dispose();this.activeTextures=[];for(const e of this.activeMaterials)e.dispose();this.activeMaterials=[]}clearGroup(e){for(;e.children.length>0;){const t=e.children[0];e.remove(t)}}addFrameMember(e,t,n,s,r="",o=null,a="bottom"){let c;e==="2060"?c=lv(t):e==="2040"?c=cv(t):e==="2020_flat"?c=xh(t,a):c=av(t),c.translate(0,0,-t/2),this.activeGeometries.push(c);const l=new Q(c,o||this.materials.aluminum);return l.position.copy(n),l.rotation.copy(s),l.castShadow=!0,l.receiveShadow=!0,l.name=r,this.frameGroup.add(l),l}addEndCap(e,t,n){const a=new Ft;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},l=new wt(a,c);l.translate(0,0,-1.5),this.activeGeometries.push(l);const h=new Q(l,this.materials.endCapMaterial);return h.position.set(e,t,n),h.castShadow=!0,h.receiveShadow=!0,h.name="M4エンドキャップ",this.frameGroup.add(h),h}createWireMesh(e,t,n){const s=new vt;s.name=`WireMesh_P${n}_${e}x${t}`;const r=1.6,o=Math.max(2,Math.floor(t/n)+1),a=-((o-1)*n)/2,c=new Ke(r,r,e,8);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);for(let p=0;p<o;p++){const f=new Q(c,this.materials.wireMesh);f.position.set(0,r,a+p*n),f.castShadow=!0,s.add(f)}const l=Math.max(2,Math.floor(e/n)+1),h=-((l-1)*n)/2,d=new Ke(r,r,t,8);d.rotateX(Math.PI/2),this.activeGeometries.push(d);for(let p=0;p<l;p++){const f=new Q(d,this.materials.wireMesh);f.position.set(h+p*n,-r,0),f.castShadow=!0,s.add(f)}return s}update(e){if(e&&e.panelConfig){this.params.panelConfig=Object.assign({},this.params.panelConfig,e.panelConfig);const C={...e};delete C.panelConfig,Object.assign(this.params,C)}else e&&Object.assign(this.params,e);const{W:t,D:n,H:s,cageType:r,frontWindowH:o,hasSideReinforcement:a,sideOpeningH:c,showPanels:l,frameColor:h,hasFloorReinforcement:d,hasTopReinforcement:p,footType:f,doorHingeSide:g}=this.params,_=h==="silver";h&&this.materials.setFrameColor(h),this.clearGroup(this.frameGroup),this.clearGroup(this.panelGroup),this.clearGroup(this.doorGroup),this.clearGroup(this.feetGroup),this.clearGroup(this.perchGroup),this.clearGroup(this.dividerGroup),this.clearGroup(this.caulkingGroup),this.clearGroup(this.rubberPackingGroup),this.disposeResources(),this._doorAnim=null,this.partsList=[];const m=new Yt(0,0,0),u=new Yt(0,Math.PI/2,0),A=new Yt(Math.PI/2,0,0),S=Math.max(10,s-40),v=Math.max(10,n-6);if(r==="A"||r==="A_FRONT"){this.addFrameMember("2020",v,new L(-t/2+10,10,0),m,"床・左2020"),this.addFrameMember("2020",v,new L(t/2-10,10,0),m,"床・右2020"),this.recordPart(mt("2020",v,h),v,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const C=Math.max(10,t-40),P=this.params.frontWideFrame||"2x";P==="3x"?h==="black"?(this.addFrameMember("2040",C,new L(0,20,n/2-10),u,"床・正面2040 (3倍幅下段)"),this.recordPart(mt("2040",C,"black"),C,1,"床面 正面 3倍幅下段 (40mm幅・ブラック)","frame"),this.addFrameMember("2020",C,new L(0,50,n/2-10),u,"床・正面2020 (3倍幅上段)"),this.recordPart(mt("2020",C,"black"),C,1,"床面 正面 3倍幅上段 (20mm幅・ブラック2段構成)","frame")):(this.addFrameMember("2060",C,new L(0,30,n/2-10),u,"床・正面2060 (3倍幅)"),this.recordPart(mt("2060",C,"silver"),C,1,"床面 正面 3倍幅 (AFS-2060-4)","frame")):P==="2x"?(this.addFrameMember("2040",C,new L(0,20,n/2-10),u,"床・正面2040 (2倍幅)"),this.recordPart(mt("2040",C,h),C,1,"床面 正面 2倍幅 (AFS-2040・内側)","frame")):(this.addFrameMember("2020",C,new L(0,10,n/2-10),u,"床・正面2020 (標準幅)"),this.recordPart(mt("2020",C,h),C,1,"床面 正面 (標準2020)","frame"));const D=Math.max(10,t-40);if(this.addFrameMember("2020",D,new L(0,10,-n/2+10),u,"床・背面2020"),this.recordPart(mt("2020",D,h),D,1,"床面 背面","frame"),d){const w=Math.max(10,n-40),F=_?"2020_flat":"2020";this.addFrameMember(F,w,new L(0,10,0),m,"床・中央補強2020",null,"top"),this.recordPart(mt("2020",w,h,!1,!0),w,1,"床面 中央補強 (2分割)","frame")}const T=s/2;this.addFrameMember("2020",S,new L(-t/2+10,T,n/2-10),A,"柱・手前左"),this.addFrameMember("2020",S,new L(t/2-10,T,n/2-10),A,"柱・手前右"),this.addFrameMember("2020",S,new L(-t/2+10,T,-n/2+10),A,"柱・奥左"),this.addFrameMember("2020",S,new L(t/2-10,T,-n/2+10),A,"柱・奥右"),this.recordPart(mt("2020",S,h),S,4,"柱 (4隅・床奥行き乗せ)","frame"),this.addFrameMember("2020",v,new L(-t/2+10,s-10,0),m,"天面・左2020"),this.addFrameMember("2020",v,new L(t/2-10,s-10,0),m,"天面・右2020"),this.recordPart(mt("2020",v,h),v,2,"天面 左右通し (前後3mm短縮・キャップ取付)","frame");const M=Math.max(10,t-40);if(this.addFrameMember("2020",M,new L(0,s-10,-n/2+10),u,"天面・背面2020"),this.addFrameMember("2020",M,new L(0,s-10,n/2-10),u,"天面・手前2020"),this.recordPart(mt("2020",M,h),M,2,"天面 前後","frame"),p||t>940){const w=Math.max(10,n-40),F=_?"2020_flat":"2020";this.addFrameMember(F,w,new L(0,s-10,0),m,"天面・中央補強2020",null,"bottom"),this.recordPart(mt("2020",w,h,!1,!0),w,1,"天面 中央補強 (2分割)","frame")}}else{this.addFrameMember("2020",v,new L(-t/2+10,10,0),m,"床・左2020"),this.addFrameMember("2020",v,new L(t/2-10,10,0),m,"床・右2020"),this.recordPart(mt("2020",v,h),v,2,"床面 左右通し (前後3mm短縮・キャップ取付)","frame");const C=Math.max(10,t-40);if(this.addFrameMember("2020",C,new L(0,10,n/2-10),u,"床・手前2020"),this.addFrameMember("2020",C,new L(0,10,-n/2+10),u,"床・背面2020"),this.recordPart(mt("2020",C,h),C,2,"床面 前後","frame"),d){const F=Math.max(10,n-40),I=_?"2020_flat":"2020";this.addFrameMember(I,F,new L(0,10,0),m,"床・中央補強2020",null,"top"),this.recordPart(mt("2020",F,h,!1,!0),F,1,"床面 中央補強 (2分割)","frame")}const P=s/2;this.addFrameMember("2020",S,new L(-t/2+10,P,n/2-10),A,"柱・手前左"),this.addFrameMember("2020",S,new L(t/2-10,P,n/2-10),A,"柱・手前右"),this.addFrameMember("2020",S,new L(-t/2+10,P,-n/2+10),A,"柱・奥左"),this.addFrameMember("2020",S,new L(t/2-10,P,-n/2+10),A,"柱・奥右"),this.recordPart(mt("2020",S,h),S,4,"柱 (4隅)","frame"),this.addFrameMember("2020",v,new L(-t/2+10,s-10,0),m,"天面・左2020"),this.addFrameMember("2020",v,new L(t/2-10,s-10,0),m,"天面・右2020"),this.recordPart(mt("2020",v,h),v,2,"天面 左右通し (前後3mm短縮・キャップ取付)","frame");const D=Math.max(10,t-40);if(this.addFrameMember("2020",D,new L(0,s-10,-n/2+10),u,"天面・背面2020"),this.addFrameMember("2020",D,new L(0,s-10,n/2-10),u,"天面・手前2020"),this.recordPart(mt("2020",D,h),D,2,"天面 前後","frame"),p||t>940){const F=Math.max(10,n-40),I=_?"2020_flat":"2020";this.addFrameMember(I,F,new L(0,s-10,0),m,"天面・中央補強2020",null,"bottom"),this.recordPart(mt("2020",F,h,!1,!0),F,1,"天面 中央補強 (2分割)","frame")}const T=20+o+10,M=Math.max(10,t-40),w=_?"2020_flat":"2020";this.addFrameMember(w,M,new L(0,T,n/2-10),u,"正面・中桟2020",null,"right"),this.recordPart(mt("2020",M,h,!1,!0),M,1,"正面 中桟 (レール受け)","frame")}const U=[{x:-t/2+10,y:10,z:n/2-1.5},{x:t/2-10,y:10,z:n/2-1.5},{x:-t/2+10,y:s-10,z:n/2-1.5},{x:t/2-10,y:s-10,z:n/2-1.5},{x:-t/2+10,y:10,z:-n/2+1.5},{x:t/2-10,y:10,z:-n/2+1.5},{x:-t/2+10,y:s-10,z:-n/2+1.5},{x:t/2-10,y:s-10,z:-n/2+1.5}];for(const C of U)this.addEndCap(C.x,C.y,C.z);if(this.recordPart("ECP-2020-4","-",8,"奥行きフレーム両端 (前後計8箇所)","frame",{partCode:"ECP-2020-4",lengthMm:null,unitType:"piece"}),a){const C=Math.max(10,n-40),P=c,T=20+Math.max(10,s-60-P)+10,M=_?"2020_flat":"2020";this.addFrameMember(M,C,new L(-t/2+10,T,0),m,"側面補強・左2020",null,"right"),this.addFrameMember(M,C,new L(t/2-10,T,0),m,"側面補強・右2020",null,"left"),this.recordPart(mt("2020",C,h,!1,!0),C,2,"側面 補強フレーム (左右)","frame")}this.buildPanels(u,m),this.buildDoors(),this.buildDoorPartsRecord(),this.params.footType==="caster"?this.buildCasters():this.buildFeet(),this.params.hasPerch&&this.buildPerch(),this.buildCaulking(),this.params.hasRubberPacking&&this.buildRubberPacking(),this.params.hasRoomDivider&&this.buildRoomDivider(),this.panelGroup.visible=l,this.doorGroup.visible=l,this.caulkingGroup.visible=l,this.rubberPackingGroup.visible=l,this.dividerGroup.visible=l}buildPanels(e,t){const{W:n,D:s,H:r,cageType:o,frontWindowH:a,hasSideReinforcement:c,sideOpeningH:l,hasFloorReinforcement:h,hasTopReinforcement:d,frameColor:p}=this.params,f=this.params.panelConfig||{},g=3,_=f.floor||"acrylic",m=f.back||"acrylic",u=f.side||"acrylic",A=f.sideUpper||"punching",S=f.sideLower||"acrylic",v=f.top||"punching",U=f.topLeft||"punching",C=f.topRight||"punching",P=s-30,D=_==="black_matte",T=_==="smoke_gray";let M=this.materials.acrylic,w="透明アクリル 3.0mm 底板",F="acrylic_extrusion_3_0";if(D?(M=this.materials.blackMatteAcrylic,w="アクリル黒両面マット 3.0mm 底板",F="acrylic_black_matte_3_0"):T&&(M=this.materials.smokeGrayAcrylic,w="アクリル グレースモーク半透明 3.0mm 底板",F="acrylic_smoke_gray_3_0"),h){const Z=(n-60)/2,N=Math.round(Z+10),V=new Xe(N,g,P);this.activeGeometries.push(V);const ce=new Q(V,M);ce.position.set(-Z/2-10,20-g/2,0),this.panelGroup.add(ce);const J=new Q(V,M);J.position.set(Z/2+10,20-g/2,0),this.panelGroup.add(J),this.recordPart(w,`${N} x ${P} mm`,2,"床面 (2分割)","panel",{panelCode:F,partCode:F,widthMm:N,heightMm:P,unitType:"m2"})}else{const Z=n-30,N=new Xe(Z,g,P);this.activeGeometries.push(N);const V=new Q(N,M);V.position.set(0,20-g/2,0),this.panelGroup.add(V),this.recordPart(w,`${Z} x ${P} mm`,1,"床面 (1枚)","panel",{panelCode:F,partCode:F,widthMm:Z,heightMm:P,unitType:"m2"})}const I=n-30,O=r-30;if(m==="punching"){const Z=eo(I,O,!1);this.activeTextures.push(Z);const N=this.materials.createPunchingMaterial(Z);this.activeMaterials.push(N);const V=new xi(I,O);this.activeGeometries.push(V);const ce=new Q(V,N);ce.position.set(0,r/2,-s/2+10),this.panelGroup.add(ce),this.recordPart("塩ビパンチングボード 透明 3.0mm 背板",`${I} x ${O} mm`,1,"背面 (通気パネル・φ3.1-P7)","panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:I,heightMm:O,unitType:"m2"})}else if(m==="polyca"){const{map:Z,bumpMap:N}=Mh(I,O);this.activeTextures.push(Z,N);const V=this.materials.createPolycaMaterial(Z,N);this.activeMaterials.push(V);const ce=new Xe(I,O,4);this.activeGeometries.push(ce);const J=new Q(ce,V);J.position.set(0,r/2,-s/2+10),this.panelGroup.add(J),this.recordPart("中空ポリカ 4.0mm 背板",`${I} x ${O} mm`,1,"背面 (中空ポリカ・横筋)","panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:I,heightMm:O,unitType:"m2"})}else if(m==="black_matte"){const Z=new Xe(I,O,g);this.activeGeometries.push(Z);const N=new Q(Z,this.materials.blackMatteAcrylic);N.position.set(0,r/2,-s/2+10),this.panelGroup.add(N),this.recordPart("アクリル黒両面マット 3.0mm 背板",`${I} x ${O} mm`,1,"背面","panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:I,heightMm:O,unitType:"m2"})}else if(m==="smoke_gray"){const Z=new Xe(I,O,g);this.activeGeometries.push(Z);const N=new Q(Z,this.materials.smokeGrayAcrylic);N.position.set(0,r/2,-s/2+10),this.panelGroup.add(N),this.recordPart("アクリル グレースモーク半透明 3.0mm 背板",`${I} x ${O} mm`,1,"背面","panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:I,heightMm:O,unitType:"m2"})}else{const Z=new Xe(I,O,g);this.activeGeometries.push(Z);const N=new Q(Z,this.materials.acrylic);N.position.set(0,r/2,-s/2+10),this.panelGroup.add(N),this.recordPart("透明アクリル 3.0mm 背板",`${I} x ${O} mm`,1,"背面","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:I,heightMm:O,unitType:"m2"})}const k=d||n>940,Y=!k&&v==="punching",ne=k&&U==="punching"&&C==="punching";let X="back_top_2";if(Y?X="top_single_2":ne&&(X="top_split_4"),X==="back_top_2"){const Z=r-20-35,N=-s/2+10,V=new Ke(19,19,4.5,32);V.rotateX(Math.PI/2),this.activeGeometries.push(V);const ce=-(n-40)/2+35,J=(n-40)/2-35,ve=new Q(V,this.materials.grommetMaterial);ve.position.set(ce,Z,N),this.panelGroup.add(ve);const ye=new Q(V,this.materials.grommetMaterial);ye.position.set(J,Z,N),this.panelGroup.add(ye);const ge=k?"背面板 上部左右2箇所 (天面仕様・端から35mm)":"背面板 上部左右 (端から35mm)";this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,ge,"other")}const le=s-30,se=(Z,N,V,ce,J)=>{const ve=J?`${J}・`:"",ye=J?`${J} `:"";if(ce==="punching"){const ge=eo(Z,N,!1);this.activeTextures.push(ge);const xe=this.materials.createPunchingMaterial(ge);this.activeMaterials.push(xe);const W=new xi(Z,N);W.rotateY(Math.PI/2),this.activeGeometries.push(W);const ee=new Q(W,xe);ee.position.set(-n/2+10,V,0),this.panelGroup.add(ee);const R=new Q(W,xe);R.position.set(n/2-10,V,0),this.panelGroup.add(R),this.recordPart(`塩ビパンチングボード 透明 3.0mm 側板 (${ve}φ3.1-P7)`,`${Z} x ${N} mm`,2,`左右側面 ${ye}(通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:Z,heightMm:N,unitType:"m2"})}else if(ce==="polyca"){const{map:ge,bumpMap:xe}=Mh(Z,N);this.activeTextures.push(ge,xe);const W=this.materials.createPolycaMaterial(ge,xe);this.activeMaterials.push(W);const ee=new Xe(4,N,Z);this.activeGeometries.push(ee);const R=new Q(ee,W);R.position.set(-n/2+10,V,0),this.panelGroup.add(R);const re=new Q(ee,W);re.position.set(n/2-10,V,0),this.panelGroup.add(re),this.recordPart(`中空ポリカ 4.0mm 側板 (${ve}奥行筋)`,`${Z} x ${N} mm`,2,`左右側面 ${ye}(中空ポリカ)`,"panel",{panelCode:"polyca_4_0",partCode:"polyca_4_0",widthMm:Z,heightMm:N,unitType:"m2"})}else if(ce==="black_matte"){const ge=new Xe(g,N,Z);this.activeGeometries.push(ge);const xe=new Q(ge,this.materials.blackMatteAcrylic);xe.position.set(-n/2+10,V,0),this.panelGroup.add(xe);const W=new Q(ge,this.materials.blackMatteAcrylic);W.position.set(n/2-10,V,0),this.panelGroup.add(W),this.recordPart(`アクリル黒両面マット 3.0mm 側板 (${ve})`,`${Z} x ${N} mm`,2,`左右側面 ${ye}`,"panel",{panelCode:"acrylic_black_matte_3_0",partCode:"acrylic_black_matte_3_0",widthMm:Z,heightMm:N,unitType:"m2"})}else if(ce==="smoke_gray"){const ge=new Xe(g,N,Z);this.activeGeometries.push(ge);const xe=new Q(ge,this.materials.smokeGrayAcrylic);xe.position.set(-n/2+10,V,0),this.panelGroup.add(xe);const W=new Q(ge,this.materials.smokeGrayAcrylic);W.position.set(n/2-10,V,0),this.panelGroup.add(W),this.recordPart(`アクリル グレースモーク半透明 3.0mm 側板 (${ve})`,`${Z} x ${N} mm`,2,`左右側面 ${ye}`,"panel",{panelCode:"acrylic_smoke_gray_3_0",partCode:"acrylic_smoke_gray_3_0",widthMm:Z,heightMm:N,unitType:"m2"})}else{const ge=new Xe(g,N,Z);this.activeGeometries.push(ge);const xe=new Q(ge,this.materials.acrylic);xe.position.set(-n/2+10,V,0),this.panelGroup.add(xe);const W=new Q(ge,this.materials.acrylic);W.position.set(n/2-10,V,0),this.panelGroup.add(W),this.recordPart(`透明アクリル 3.0mm 側板 (${ve})`,`${Z} x ${N} mm`,2,`左右側面 ${ye}`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:Z,heightMm:N,unitType:"m2"})}};if(c){const Z=l,N=Math.max(10,r-60-Z),V=Math.round(N+10),ce=Math.round(Z+10);se(le,V,20+N/2,S,"下部");const J=r-20-Z/2;if(se(le,ce,J,A,"上部"),this.params.hasSideVentCover&&A==="punching"){const ye=Z+10,ge=s-2,xe=new Xe(1.5,ye,ge);this.activeGeometries.push(xe);const W=-n/2-1.5/2,ee=n/2+1.5/2,R=new Q(xe,this.materials.ventCoverAcrylic);R.position.set(W,J,0),R.castShadow=!0,this.panelGroup.add(R);const re=new Q(xe,this.materials.ventCoverAcrylic);re.position.set(ee,J,0),re.castShadow=!0,this.panelGroup.add(re);const te=(s-2)/2-9,fe=-(s-2)/2+9,ae=J+ye/2-40,Ae=J-ye/2+40,ue=[{y:ae,z:te},{y:ae,z:fe},{y:Ae,z:te},{y:Ae,z:fe}];for(const y of ue)this.addThumbScrew(-n/2-1.5,y.y,y.z,-1),this.addThumbScrew(n/2+1.5,y.y,y.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${ye} x ${ge} mm`,2,"左右側面上部 外張り (保温・換気量調整用)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:ye,heightMm:ge,unitType:"m2"});const E=p==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${E})`,"外径φ15mm / M4 (手締め・工具不要)",8,"側面換気量調整板 固定用 (左右計8箇所)","other")}}else{const Z=r-30;if(se(le,Z,r/2,u,""),this.params.hasSideVentCover&&u==="punching"){const V=r-40,ce=Math.round(V/2+10),J=s-2,ve=new Xe(1.5,ce,J);this.activeGeometries.push(ve);const ye=-n/2-1.5/2,ge=n/2+1.5/2,xe=10+ce/2,W=r-10-ce/2,ee=new Q(ve,this.materials.ventCoverAcrylic);ee.position.set(ye,xe,0),ee.castShadow=!0,this.panelGroup.add(ee);const R=new Q(ve,this.materials.ventCoverAcrylic);R.position.set(ge,xe,0),R.castShadow=!0,this.panelGroup.add(R);const re=new Q(ve,this.materials.ventCoverAcrylic);re.position.set(ye,W,0),re.castShadow=!0,this.panelGroup.add(re);const te=new Q(ve,this.materials.ventCoverAcrylic);te.position.set(ge,W,0),te.castShadow=!0,this.panelGroup.add(te);const fe=(s-2)/2-9,ae=-(s-2)/2+9,Ae=Math.max(25,10+Math.min(30,ce*.2)),ue=Math.min(r/2-15,r/2-Math.min(25,ce*.2)),E=Math.max(r/2+15,r/2+Math.min(25,ce*.2)),y=Math.min(r-25,r-10-Math.min(30,ce*.2)),H=[{y:ue,z:fe},{y:ue,z:ae},{y:Ae,z:fe},{y:Ae,z:ae},{y,z:fe},{y,z:ae},{y:E,z:fe},{y:E,z:ae}];for(const oe of H)this.addThumbScrew(-n/2-1.5,oe.y,oe.z,-1),this.addThumbScrew(n/2+1.5,oe.y,oe.z,1);this.recordPart("側面換気量調整板 (透明アクリル 1.5mm)",`${ce} x ${J} mm`,4,"左右側面外張り (上下各2枚・保温・換気量調整用)","panel",{panelCode:"acrylic_extrusion_1_5",partCode:"acrylic_extrusion_1_5",widthMm:ce,heightMm:J,unitType:"m2"});const K=p==="black"?"ブラック":"ホワイト";this.recordPart(`No.1 化粧つまみネジ (${K})`,"外径φ15mm / M4 (手締め・工具不要)",16,"側面換気量調整板 固定用 (左右計16箇所)","other")}}const de=(Z,N,V,ce,J,ve=!1)=>{const ye=ce&&ce.startsWith("mesh"),ge=p==="black";if(ye){const xe=parseInt(ce.replace("mesh",""),10);if(ge){const W=Math.max(10,Math.round(N-6)),ee=Math.max(10,Math.round(Z-46)),R=V-Z/2+10,re=V+Z/2-10;this.addFrameMember("2020",W,new L(R,r-10,0),t,`天面インナー左2020 (${J})`,this.materials.silverInnerFrame),this.addFrameMember("2020",W,new L(re,r-10,0),t,`天面インナー右2020 (${J})`,this.materials.silverInnerFrame);const te=N/2-10,fe=-N/2+10;this.addFrameMember("2020",ee,new L(V,r-10,te),e,`天面インナー前2020 (${J})`,this.materials.silverInnerFrame),this.addFrameMember("2020",ee,new L(V,r-10,fe),e,`天面インナー後2020 (${J})`,this.materials.silverInnerFrame),this.recordPart(mt("2020",W,"silver",!0),W,2,`天面 金網取付用インナーフレーム左右 (${J}・黒ケージ専用)`,"frame"),this.recordPart(mt("2020",ee,"silver",!0),ee,2,`天面 金網取付用インナーフレーム前後 (${J}・黒ケージ専用)`,"frame");const ae=Math.max(10,Math.round(Z-30)),Ae=Math.max(10,Math.round(N-30)),ue=this.createWireMesh(ae,Ae,xe);ue.position.set(V,r-10,0),this.panelGroup.add(ue);const E=`FENP${xe}-A${ae}-B${Ae}`,y=`wire_mesh_${xe}`;this.recordPart(`金網 ${xe}mmピッチ（黒粉体塗装） (型番: ${E})`,`${ae} x ${Ae} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${J})`,"panel",{panelCode:y,partCode:y,widthMm:ae,heightMm:Ae,unitType:"m2"})}else{const W=Math.max(10,Math.round(Z+10)),ee=Math.max(10,Math.round(N+10)),R=this.createWireMesh(W,ee,xe);R.position.set(V,r-10,0),this.panelGroup.add(R);const re=`FENP${xe}-A${W}-B${ee}`,te=`wire_mesh_${xe}`;this.recordPart(`金網 ${xe}mmピッチ（黒粉体塗装） (型番: ${re})`,`${W} x ${ee} mm (線径φ3.2, SS400黒塗装)`,1,`天面 (${J})`,"panel",{panelCode:te,partCode:te,widthMm:W,heightMm:ee,unitType:"m2"})}}else if(ce==="acrylic"){const xe=Math.round(Z+10),W=Math.round(N+10),ee=new Xe(xe,g,W);this.activeGeometries.push(ee);const R=new Q(ee,this.materials.acrylic);R.position.set(V,r-20+g/2,0),this.panelGroup.add(R),this.recordPart("透明アクリル 3.0mm 天板",`${xe} x ${W} mm`,1,`天面 (${J})`,"panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:xe,heightMm:W,unitType:"m2"})}else{const xe=Math.round(Z+10),W=Math.round(N+10),ee=eo(xe,W,ve);this.activeTextures.push(ee);const R=this.materials.createPunchingMaterial(ee);this.activeMaterials.push(R);const re=new xi(xe,W);re.rotateX(-Math.PI/2),this.activeGeometries.push(re);const te=new Q(re,R);if(te.position.set(V,r-20+g/2,0),this.panelGroup.add(te),this.recordPart("塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)",`${xe} x ${W} mm`,1,`天面 (${J}・通気パネル)`,"panel",{panelCode:"pvc_punching_3_0",partCode:"pvc_punching_3_0",widthMm:xe,heightMm:W,unitType:"m2"}),ve){const fe=new Ke(19,19,4.5,32);this.activeGeometries.push(fe);const ae=r-20+g/2,Ae=-W/2+35,ue=V-xe/2+35,E=V+xe/2-35,y=new Q(fe,this.materials.grommetMaterial);y.position.set(ue,ae,Ae),this.panelGroup.add(y);const H=new Q(fe,this.materials.grommetMaterial);H.position.set(E,ae,Ae),this.panelGroup.add(H)}}},Me=s-40;if(k){const Z=(n-60)/2,N=-Z/2-10,V=Z/2+10,ce=X==="top_split_4";de(Z,Me,N,U,"左側",ce),de(Z,Me,V,C,"右側",ce),X==="top_split_4"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",4,"天面板 奥側各2箇所 (計4箇所・端から35mm)","other")}else{const Z=X==="top_single_2";de(n-40,Me,0,v,"全面",Z),X==="top_single_2"&&this.recordPart("配線用ゴムグロメット (φ30穴用, 黒)","外径38mm / 穴径30mm",2,"天面板 奥側左右 (端から35mm)","other")}if(o==="C"){const Z=n-30,N=a+10,V=new Xe(Z,N,g);this.activeGeometries.push(V);const ce=new Q(V,this.materials.acrylic);ce.position.set(0,20+a/2,s/2-10),this.panelGroup.add(ce),this.recordPart("透明アクリル 3.0mm 前窓",`${Z} x ${N} mm`,1,"正面 下部はめ殺し固定窓","panel",{panelCode:"acrylic_extrusion_3_0",partCode:"acrylic_extrusion_3_0",widthMm:Z,heightMm:N,unitType:"m2"})}}buildGlassRails(e,t,n,s){const{frameColor:r}=this.params,o=new Ft;o.moveTo(-8,2.5),o.lineTo(-6.5,2.5),o.lineTo(-6.5,7),o.lineTo(-5,7),o.lineTo(-5,2),o.lineTo(-1.5,2),o.lineTo(-1.5,7),o.lineTo(1.5,7),o.lineTo(1.5,2),o.lineTo(5,2),o.lineTo(5,7),o.lineTo(6.5,7),o.lineTo(6.5,2.5),o.lineTo(8,2.5),o.lineTo(8,0),o.lineTo(-8,0),o.closePath();const a={depth:e,bevelEnabled:!1,steps:1},c=new wt(o,a);c.translate(0,0,-e/2),c.rotateY(-Math.PI/2),this.activeGeometries.push(c);const l=new Q(c,this.materials.railMaterial);l.position.set(0,t,s),l.castShadow=!0,l.receiveShadow=!0,l.name="下側ガラスレール",this.doorGroup.add(l);const h=new Ft;h.moveTo(-8,12-2.5),h.lineTo(-6.5,12-2.5),h.lineTo(-6.5,0),h.lineTo(-5,0),h.lineTo(-5,11),h.lineTo(-1.5,11),h.lineTo(-1.5,0),h.lineTo(1.5,0),h.lineTo(1.5,11),h.lineTo(5,11),h.lineTo(5,0),h.lineTo(6.5,0),h.lineTo(6.5,12-2.5),h.lineTo(8,12-2.5),h.lineTo(8,12),h.lineTo(-8,12),h.closePath();const d={depth:e,bevelEnabled:!1,steps:1},p=new wt(h,d);p.translate(0,0,-e/2),p.rotateY(-Math.PI/2),this.activeGeometries.push(p);const f=new Q(p,this.materials.railMaterial);f.position.set(0,n-12,s),f.castShadow=!0,f.receiveShadow=!0,f.name="上側ガラスレール",this.doorGroup.add(f)}buildAntiFlexRails(e,t,n,s,r,o){const a=Math.max(10,t-25),c=new Ft;c.moveTo(-8,2.5),c.lineTo(-6.5,2.5),c.lineTo(-6.5,7),c.lineTo(-5,7),c.lineTo(-5,2),c.lineTo(-1.5,2),c.lineTo(-1.5,7),c.lineTo(1.5,7),c.lineTo(1.5,2),c.lineTo(5,2),c.lineTo(5,7),c.lineTo(6.5,7),c.lineTo(6.5,2.5),c.lineTo(8,2.5),c.lineTo(8,0),c.lineTo(-8,0),c.closePath();const l={depth:a,bevelEnabled:!1,steps:1},h=(n+7+s-12)/2,d=new wt(c,l);d.translate(0,0,-a/2);const p=new lt().set(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);d.applyMatrix4(p),this.activeGeometries.push(d);const f=new Q(d,this.materials.railMaterial);f.position.set(-e/2,h,r),f.castShadow=!0,f.receiveShadow=!0,f.name="左側たわみ防止レール",this.doorGroup.add(f);const g=new wt(c,l);g.translate(0,0,-a/2);const _=new lt().set(0,-1,0,0,0,0,1,0,1,0,0,0,0,0,0,1);g.applyMatrix4(_),this.activeGeometries.push(g);const m=new Q(g,this.materials.railMaterial);m.position.set(e/2,h,r),m.castShadow=!0,m.receiveShadow=!0,m.name="右側たわみ防止レール",this.doorGroup.add(m)}buildDoors(){this.clearGroup(this.doorGroup);const{W:e,D:t,H:n,cageType:s,frontWindowH:r,doorState:o,hasDoorAntiFlex:a,frameColor:c}=this.params;if(s==="A_FRONT"){this.buildFrontOpenDoor();return}const l=e-40;let h=(l+30)/2;a&&(h-=2);let d=0;const p=n-20;if(s==="A"){const Z=this.params.frontWideFrame||"2x";Z==="3x"?d=60:Z==="2x"?d=40:d=20}else d=40+r;const f=Math.max(10,p-d),g=t/2-10;this.buildGlassRails(l,d,p,g),a&&this.buildAntiFlexRails(l,f,d,p,g,c);const _=Math.max(10,f-9),m=d+2.5+_/2,u=3,A=new Xe(h,_,u);this.activeGeometries.push(A);const S=Math.max(0,h-50),v=g-3.25,U=g+3.25,C=a?2:0,P=-l/2+C+h/2,D=l/2-C-h/2;let T=P,M=D;o==="left_open"?T=P+S:o==="right_open"&&(M=D-S);let w=T,F=M;this._doorAnim&&(w=this._doorAnim.currentLeftX,F=this._doorAnim.currentRightX);const I=new Q(A,this.materials.doorGlassLeft);I.position.set(w,m,v),I.castShadow=!1,this.doorGroup.add(I);const O=-h/2+15,k=this.addKnobScrew(w+O,m,v+u/2),Y=new Q(A,this.materials.doorGlassRight);Y.position.set(F,m,U),Y.castShadow=!1,this.doorGroup.add(Y);const ne=h/2-15,X=this.addKnobScrew(F+ne,m,U+u/2),se=m-_/2+20,de=-h/2+15,Me=this.addDoorLock(F+de,se,U+u/2);this._doorAnim={leftDoor:I,rightDoor:Y,leftKnobGroup:k,rightKnobGroup:X,lockGroup:Me,leftKnobOffsetX:O,rightKnobOffsetX:ne,lockOffsetX:de,currentLeftX:w,currentRightX:F,targetLeftX:T,targetRightX:M,animating:w!==T||F!==M,startLeftX:w,startRightX:F,startTime:performance.now(),duration:3e3}}addCountersunkPhillipsScrew(e,t,n,s,r=0){const o=new Ke(3.5,2,1.2,16);o.rotateX(Math.PI/2),this.activeGeometries.push(o);const a=new Q(o,this.materials.screwSilver);a.position.set(t,n,s),e.add(a);const c=new Xe(3.8,.7,.4),l=new Xe(.7,3.8,.4);this.activeGeometries.push(c,l);const h=new Q(c,this.materials.screwSlot),d=new Q(l,this.materials.screwSlot);h.position.set(t,n,s+.5),d.position.set(t,n,s+.5),r!==0&&(h.rotation.z=r,d.rotation.z=r),e.add(h),e.add(d)}buildFrontOpenDoor(){const{W:e,D:t,H:n,doorState:s}=this.params;let r=40;const o=this.params.frontWideFrame||"2x";o==="3x"?r=60:o==="2x"?r=40:r=20;const a=n-20,c=r-18,l=a+18,h=l-c,d=(c+l)/2,p=e-2-21.3,f=3,g=t/2,_=-e/2+21.3,m=e/2-2,u=(_+m)/2,A=c+h*1/4,S=c+h*3/4,v=19,U=52,C=-h/4+U/2,P=-h/4-U/2,D=h/4+U/2,T=h/4-U/2,M=10,w=p/2,F=h/2,I=Math.min(M,w/4,F/4),O=this.params.doorHingeSide==="right",k=new Ft;O?(k.moveTo(-w+I,-F),k.lineTo(w-I,-F),k.absarc(w-I,-F+I,I,-Math.PI/2,0,!1),k.lineTo(w,F-I),k.absarc(w-I,F-I,I,0,Math.PI/2,!1),k.lineTo(-w+I,F),k.absarc(-w+I,F-I,I,Math.PI/2,Math.PI,!1),k.lineTo(-w,D),k.lineTo(-w+v,D),k.lineTo(-w+v,T),k.lineTo(-w,T),k.lineTo(-w,C),k.lineTo(-w+v,C),k.lineTo(-w+v,P),k.lineTo(-w,P),k.lineTo(-w,-F+I),k.absarc(-w+I,-F+I,I,Math.PI,Math.PI*1.5,!1)):(k.moveTo(-w+I,-F),k.lineTo(w-I,-F),k.absarc(w-I,-F+I,I,-Math.PI/2,0,!1),k.lineTo(w,P),k.lineTo(w-v,P),k.lineTo(w-v,C),k.lineTo(w,C),k.lineTo(w,T),k.lineTo(w-v,T),k.lineTo(w-v,D),k.lineTo(w,D),k.lineTo(w,F-I),k.absarc(w-I,F-I,I,0,Math.PI/2,!1),k.lineTo(-w+I,F),k.absarc(-w+I,F-I,I,Math.PI/2,Math.PI,!1),k.lineTo(-w,-F+I),k.absarc(-w+I,-F+I,I,Math.PI,Math.PI*1.5,!1));const Y={steps:1,depth:f,bevelEnabled:!1},ne=new wt(k,Y);this.activeGeometries.push(ne);const X=new Q(ne,this.materials.doorGlassRight);X.castShadow=!1;const le=O?e/2-10-11.25:-e/2+10+11.25,se=g+f,de=new vt;de.name="FrontOpenDoorPivot",de.position.set(le,0,se),X.position.set(u-le,d,-f),de.add(X);const Me=O?e/2-10:-e/2+10,Z=O?-e/2+10:e/2-10;this.addHingeTH31(Me,le,S,g,f,de,O),this.addHingeTH31(Me,le,A,g,f,de,O);const N=[];this.addLockC1249(Z,S,g,f,le,de,N,O),this.addLockC1249(Z,A,g,f,le,de,N,O),this.doorGroup.add(de);const V=s==="open"||s==="left_open"||s==="right_open",ce=V?O?Math.PI*(120/180):-Math.PI*(120/180):0,J=V?O?-Math.PI*1.5:Math.PI*1.5:0;let ve=ce,ye=J;this._doorAnim&&typeof this._doorAnim.currentRotY=="number"&&(ve=this._doorAnim.currentRotY,ye=this._doorAnim.currentLockRotZ??J),de.rotation.y=ve;for(const ge of N)ge.rotation.z=ye;this._doorAnim={isFrontOpen:!0,doorPivot:de,lockPivots:N,currentRotY:ve,targetRotY:ce,currentLockRotZ:ye,targetLockRotZ:J,startRotY:ve,startLockRotZ:ye,animating:Math.abs(ve-ce)>.001||Math.abs(ye-J)>.001,startTime:performance.now(),duration:2200}}addHingeTH31(e,t,n,s,r,o,a=!1){const c=this.materials.handleMaterial,l=s+r,h=new Xe(16,52,r);this.activeGeometries.push(h);const d=new Q(h,this.materials.acrylic);d.position.set(e,n,s+r/2),this.doorGroup.add(d);const p=new Xe(18,50,1.5);this.activeGeometries.push(p);const f=new Q(p,c),g=a?t+9:t-9;f.position.set(g,n,l+.75),f.castShadow=!0,this.doorGroup.add(f);const _=e;for(const C of[-17,8.5])this.addCountersunkPhillipsScrew(this.doorGroup,_,n+C,l+1.5,Math.PI/4);const m=new Ke(2.5,2.5,50,16);this.activeGeometries.push(m);const u=new Q(m,c);u.position.set(0,n,0),o.add(u);const A=new Xe(18,50,1.5);this.activeGeometries.push(A);const S=new Q(A,c),v=a?-9:9;S.position.set(v,n,.75),S.castShadow=!0,o.add(S);const U=a?-11.25:11.25;for(const C of[-8.5,17])this.addCountersunkPhillipsScrew(o,U,n+C,1.5,Math.PI/6)}addLockC1249(e,t,n,s,r,o,a,c=!1){const l=this.materials.handleMaterial,h=n+s,d=new Xe(16,48,s);this.activeGeometries.push(d);const p=new Q(d,this.materials.acrylic);p.position.set(e,t,n+s/2),this.doorGroup.add(p);const f=new Xe(16,46,2);this.activeGeometries.push(f);const g=new Q(f,l);g.position.set(e,t,h+1),this.doorGroup.add(g);for(const O of[-15,15])this.addCountersunkPhillipsScrew(this.doorGroup,e,t+O,h+2,Math.PI/4);const _=new Xe(14,16,12);this.activeGeometries.push(_);const m=new Q(_,l);m.position.set(e,t,h+2+6),this.doorGroup.add(m);const A=(c?-this.params.W/2+29:this.params.W/2-29)-r,S=new Xe(16,46,2);this.activeGeometries.push(S);const v=new Q(S,l);v.position.set(A,t,1),o.add(v);for(const O of[-15,15])this.addCountersunkPhillipsScrew(o,A,t+O,2,Math.PI/3);const U=new vt;U.name="LockArmPivot",U.position.set(A,t,2);const C=new Ke(3,3,3,16);C.rotateX(Math.PI/2),this.activeGeometries.push(C);const P=new Q(C,l);P.position.set(0,0,1.5),U.add(P);const D=new Xe(38,14,2.5);this.activeGeometries.push(D);const T=new Q(D,l),M=c?-19:19;T.position.set(M,0,6),U.add(T);const w=new Ke(3.5,3.5,14,16);w.rotateX(Math.PI/2),this.activeGeometries.push(w);const F=new Q(w,l),I=c?-18:18;F.position.set(I,0,13),U.add(F),o.add(U),a&&a.push(U)}buildDoorPartsRecord(){const{W:e,H:t,cageType:n,frontWindowH:s,hasDoorAntiFlex:r,frameColor:o}=this.params;if(n==="A_FRONT"){const u=e-2-21.3;let A=40;const S=this.params.frontWideFrame||"2x";S==="3x"?A=60:S==="2x"?A=40:A=20;const U=Math.max(10,t-20-A)+36,C=this.params.doorHingeSide==="right",P=C?"正面 右ヒンジ・左打掛オープン扉":"正面 左ヒンジ・右打掛オープン扉";this.recordPart("前開きアクリル扉 3.0mm (切欠き・穴加工済)",`${Math.round(u*10)/10} x ${Math.round(U)} mm`,1,P,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(u*10)/10,heightMm:Math.round(U),unitType:"m2"});const D=C?"前開き扉 右ヒンジ (2箇所)":"前開き扉 左ヒンジ (2箇所)";this.recordPart("TH-31 ステンレス蝶番","50 x 36 mm (SUS304)",2,D,"rail_cap",{partCode:"TH-31",lengthMm:null,unitType:"piece"});const T=C?"前開き扉 左打掛ロック (2箇所)":"前開き扉 右打掛ロック (2箇所)";this.recordPart("C-1249-4 ステンレス打掛","58 x 46 mm (SUS304)",2,T,"rail_cap",{partCode:"C-1249-4",lengthMm:null,unitType:"piece"});const M=C?"前開き扉 右ヒンジ固定座 (フレーム隙間埋め用)":"前開き扉 左ヒンジ固定座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ヒンジ座板 (切削加工)","16 x 52 mm",2,M,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:52,unitType:"m2"});const w=C?"前開き扉 左打掛受具座 (フレーム隙間埋め用)":"前開き扉 右打掛受具座 (フレーム隙間埋め用)";this.recordPart("透明アクリル 3.0mm ロック受座板 (切削加工)","16 x 48 mm",2,w,"panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:16,heightMm:48,unitType:"m2"});return}const a=e-40;let c=(a+30)/2;r&&(c-=2);let l=0;const h=t-20;if(n==="A"){const u=this.params.frontWideFrame||"2x";u==="3x"?l=60:u==="2x"?l=40:l=20}else l=40+s;const d=Math.max(10,h-l),p=Math.max(10,d-9),f=a,g=o==="black"?"BK":"GY",_=`PGRU-03-4-${g}`,m=`PGRL-03-4-${g}`;if(this.recordPart(_,f,1,"正面開口 上部 (間口高12mm縮小)","frame",{partCode:_,lengthMm:f,unitType:"m"}),this.recordPart(m,f,1,"正面開口 下部 (間口高7mm縮小)","frame",{partCode:m,lengthMm:f,unitType:"m"}),r){const u=Math.max(10,d-25);this.recordPart(m,u,2,"正面スライド扉 左右端 (扉たわみ防止)","frame",{partCode:m,lengthMm:u,unitType:"m"})}this.recordPart("透明アクリル扉 3.0mm",`${Math.round(c)} x ${Math.round(p)} mm`,2,"正面 引き違い (重なり30mm)","panel",{panelCode:"acrylic_cast_3_0",partCode:"acrylic_cast_3_0",widthMm:Math.round(c),heightMm:Math.round(p),unitType:"m2"}),this.recordPart("段付きローレットノブ (SUS303, RNSFS4)","外径φ16 / ボスφ8 / 全長9.5mm",2,"扉端から15mm・上下中央","other"),this.recordPart("プッシュ式スライド扉鍵 (C-108)","外径φ18.5mm / 全長30mm (キー付)",1,"右スライド扉 下部 (端から15mm・下端から20mm)","other")}updateDoorAnimation(){if(!this._doorAnim||!this._doorAnim.animating)return;const e=this._doorAnim,t=performance.now()-e.startTime,n=Math.min(1,t/e.duration),s=n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;if(e.isFrontOpen){if(e.targetRotY!==0){const o=Math.min(1,Math.max(0,n/.35)),a=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*a;const c=Math.min(1,Math.max(0,(n-.35)/.65)),l=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*l}else{const o=Math.min(1,Math.max(0,n/.65)),a=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;e.currentRotY=e.startRotY+(e.targetRotY-e.startRotY)*a;const c=Math.min(1,Math.max(0,(n-.65)/.35)),l=c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;e.currentLockRotZ=e.startLockRotZ+(e.targetLockRotZ-e.startLockRotZ)*l}if(e.doorPivot&&(e.doorPivot.rotation.y=e.currentRotY),e.lockPivots)for(const o of e.lockPivots)o.rotation.z=e.currentLockRotZ;n>=1&&(e.animating=!1);return}e.currentLeftX=e.startLeftX+(e.targetLeftX-e.startLeftX)*s,e.currentRightX=e.startRightX+(e.targetRightX-e.startRightX)*s,e.leftDoor&&(e.leftDoor.position.x=e.currentLeftX),e.leftKnobGroup&&(e.leftKnobGroup.position.x=e.currentLeftX+e.leftKnobOffsetX),e.rightDoor&&(e.rightDoor.position.x=e.currentRightX),e.rightKnobGroup&&(e.rightKnobGroup.position.x=e.currentRightX+e.rightKnobOffsetX),e.lockGroup&&(e.lockGroup.position.x=e.currentRightX+e.lockOffsetX),n>=1&&(e.animating=!1)}addKnobScrew(e,t,n){const s=new vt;s.position.set(e,t,n);const r=new Ke(4,4,6,24);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const o=new Q(r,this.materials.handleMaterial);o.position.set(0,0,3),o.castShadow=!0,s.add(o);const a=new Ke(8,8,3.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const c=new Q(a,this.materials.handleMaterial);c.position.set(0,0,6+1.75),c.castShadow=!0,s.add(c);const l=new Ke(2,2,3,16);l.rotateX(Math.PI/2),this.activeGeometries.push(l);const h=new Q(l,this.materials.grommetMaterial);return h.position.set(0,0,9.5-1.5+.1),s.add(h),this.doorGroup.add(s),s}addDoorLock(e,t,n){const s=new vt;s.position.set(e,t,n);const r=new Ke(9.25,9.25,2.5,32);r.rotateX(Math.PI/2),this.activeGeometries.push(r);const o=new Q(r,this.materials.handleMaterial);o.position.set(0,0,1.25),o.castShadow=!0,s.add(o);const a=new Ke(7.75,7.75,20.5,32);a.rotateX(Math.PI/2),this.activeGeometries.push(a);const c=new Q(a,this.materials.handleMaterial);c.position.set(0,0,2.5+10.25),c.castShadow=!0,s.add(c);const l=new Ke(5.5,5.5,.8,32);l.rotateX(Math.PI/2),this.activeGeometries.push(l);const h=new Q(l,this.materials.handleMaterial);h.position.set(0,0,23+.4),s.add(h);const d=new Xe(1.4,6.5,1.2);this.activeGeometries.push(d);const p=new Q(d,this.materials.grommetMaterial);return p.position.set(0,0,23.6),s.add(p),this.doorGroup.add(s),s}addThumbScrew(e,t,n,s){const r=new vt;r.position.set(e,t,n);const o=new Ke(4,4,1.5,24);o.rotateZ(Math.PI/2),this.activeGeometries.push(o);const a=new Q(o,this.materials.thumbScrewMaterial);a.position.set(s*.75,0,0),a.castShadow=!0,r.add(a);const c=new Ke(7.5,7.5,4.5,24);c.rotateZ(Math.PI/2),this.activeGeometries.push(c);const l=new Q(c,this.materials.thumbScrewMaterial);l.position.set(s*(1.5+2.25),0,0),l.castShadow=!0,r.add(l);const h=new Ke(3,3,.2,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);const d=new Q(h,this.materials.grommetMaterial);return d.position.set(-s*.1,0,0),r.add(d),this.panelGroup.add(r),r}buildFeet(){const{W:e,D:t}=this.params,n=11,s=-n/2,r=[-e/2+10,e/2-10],o=[t/2-50,-t/2+50],a=new Ke(9,7.5,n,32);this.activeGeometries.push(a);const c=new Ke(4,4,4,24);this.activeGeometries.push(c);const l=new Ke(3.5,3.5,.8,24);this.activeGeometries.push(l);for(const h of r)for(const d of o){const p=new Q(a,this.materials.grommetMaterial);p.position.set(h,s,d),p.castShadow=!0,p.receiveShadow=!0,this.feetGroup.add(p);const f=new Q(c,this.materials.railMaterial);f.position.set(h,-n+2,d),this.feetGroup.add(f);const g=new Q(l,this.materials.handleMaterial);g.position.set(h,-n+3.6,d),this.feetGroup.add(g)}this.recordPart("ゴム脚 (黒)","外径φ18(上)/φ15(下) x H11mm (M4用座金入)",4,"床面 奥行きフレーム下面 (前後端から50mm・接地用)","other")}buildCasters(){const{W:e,D:t}=this.params,n=[-e/2+10,e/2-10],s=[t/2-7-20,-(t/2-7)+20],r=new Xe(20,3,40);this.activeGeometries.push(r);const o=new Ke(10,10,12,24);this.activeGeometries.push(o);const a=new Xe(2.5,28,22);this.activeGeometries.push(a);const c=new Xe(2.5,28,22);this.activeGeometries.push(c);const l=new Ke(25,25,20,32);l.rotateZ(Math.PI/2),this.activeGeometries.push(l);const h=new Ke(4,4,24,16);h.rotateZ(Math.PI/2),this.activeGeometries.push(h);for(const d of n)for(const p of s){const f=new vt;f.position.set(d,0,p);const g=new Q(r,this.materials.casterBracket);g.position.set(0,-1.5,0),g.castShadow=!0,f.add(g);const _=new Q(o,this.materials.casterBracket);_.position.set(0,-9,0),f.add(_);const m=new Q(a,this.materials.casterBracket);m.position.set(-10,-27,0),f.add(m);const u=new Q(c,this.materials.casterBracket);u.position.set(10,-27,0),f.add(u);const A=new Q(l,this.materials.casterWheel);A.position.set(0,-41,0),A.castShadow=!0,A.receiveShadow=!0,f.add(A);const S=new Q(h,this.materials.casterBracket);S.position.set(0,-41,0),f.add(S),this.feetGroup.add(f)}this.recordPart("自在キャスター","車輪径φ50 / 取付高66mm",4,"床面 奥行きフレーム下面 (端から7mm控え)","other")}addPerch2020GrayCap(e,t,n){const a=new Ft;a.moveTo(-20/2+2,-20/2),a.lineTo(20/2-2,-20/2),a.absarc(20/2-2,-20/2+2,2,-Math.PI/2,0,!1),a.lineTo(20/2,20/2-2),a.absarc(20/2-2,20/2-2,2,0,Math.PI/2,!1),a.lineTo(-20/2+2,20/2),a.absarc(-20/2+2,20/2-2,2,Math.PI/2,Math.PI,!1),a.lineTo(-20/2,-20/2+2),a.absarc(-20/2+2,-20/2+2,2,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.25,bevelThickness:.25},l=new wt(a,c);l.translate(0,0,-1.5),this.activeGeometries.push(l);const h=new Q(l,this.materials.perchGrayCap);return h.position.set(e,t,n),h.castShadow=!0,h.receiveShadow=!0,h.name="止まり木・ECP-2020-4-GY",this.perchGroup.add(h),h}addPerch1530BlackCap(e,t,n){const a=new Ft;a.moveTo(-7.5+1,-15),a.lineTo(7.5-1,-15),a.absarc(7.5-1,-14,1,-Math.PI/2,0,!1),a.lineTo(7.5,14),a.absarc(7.5-1,14,1,0,Math.PI/2,!1),a.lineTo(-7.5+1,15),a.absarc(-7.5+1,14,1,Math.PI/2,Math.PI,!1),a.lineTo(-7.5,-14),a.absarc(-7.5+1,-14,1,Math.PI,Math.PI*1.5,!1);const c={depth:3,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.2,bevelThickness:.2},l=new wt(a,c);l.rotateX(Math.PI/2),l.translate(0,-1.5,0),this.activeGeometries.push(l);const h=new Q(l,this.materials.perchBlackCap);return h.position.set(e,t,n),h.castShadow=!0,h.receiveShadow=!0,h.name="止まり木・ECP-1530-6",this.perchGroup.add(h),h}addPerchThumbScrew(e,t,n){const o=new Ke(5,5,5,24);o.translate(0,5/2,0),this.activeGeometries.push(o);const a=new Q(o,this.materials.perchWhiteScrew);return a.position.set(e,t,n),a.castShadow=!0,a.name="止まり木・M3つまみネジ",this.perchGroup.add(a),a}buildPerch(){const{W:e,D:t,H:n}=this.params,s=e-120,r=Math.floor(s/7)*7,o=Math.max(10,r-15),a=Math.max(10,Math.round(n/2)),c=Math.max(0,a-50-15),l=Math.max(10,Math.floor(c/20)*10),h=15+l,d=this.materials.perchAluminum,p=this.materials.handleMaterial,f=r/2,g=n-20-10,_=90,m=new Yt(0,0,0),u=[-f,f];for(const D of u){const T=xh(_,"bottom");T.translate(0,0,-_/2),this.activeGeometries.push(T);const M=new Q(T,d);M.position.set(D,g,0),M.rotation.copy(m),M.castShadow=!0,M.receiveShadow=!0,M.name="止まり木・天板固定フレーム2020",this.perchGroup.add(M),this.addPerch2020GrayCap(D,g,_/2),this.addPerch2020GrayCap(D,g,-_/2);const w=[25,-25];for(const F of w)this.addPerchThumbScrew(D,n-20,F)}const A=n-40,S=A-a/2,v=A-a;for(const D of u){const T=uv(a);T.translate(0,0,-a/2),T.rotateX(Math.PI/2),this.activeGeometries.push(T);const M=new Q(T,d);M.position.set(D,S,0),M.castShadow=!0,M.receiveShadow=!0,M.name="止まり木・吊り下げフレーム1530",this.perchGroup.add(M),this.addPerch1530BlackCap(D,v,0);const w=[v+15,v+15+l,v+15+2*l];for(let F=0;F<w.length;F++){const I=w[F],O=D>0?1:-1,k=new Ke(3,3,.4,16);k.rotateZ(Math.PI/2),this.activeGeometries.push(k);const Y=new Q(k,this.materials.railMaterial);Y.position.set(D+O*7.4,I,0),this.perchGroup.add(Y)}}const U=v+h,C=new Ke(15,15,o,32);C.rotateZ(Math.PI/2),this.activeGeometries.push(C);const P=new Q(C,d);P.position.set(0,U,0),P.castShadow=!0,P.receiveShadow=!0,P.name="止まり木・アルミ丸パイプASTP-30",this.perchGroup.add(P);for(const D of u){const T=D>0?1:-1,M=new Ke(5,5,3.5,16);M.rotateZ(Math.PI/2),this.activeGeometries.push(M);const w=new Q(M,p);w.position.set(D+T*9.2,U,0),w.castShadow=!0,this.perchGroup.add(w)}this.recordPart("AFSF-2020-4-90",90,2,"止まり木 天板固定フレーム (溝なし下面・シルバー)","frame"),this.recordPart(`AFS-1530-6-${a}`,a,2,"止まり木 垂直吊り下げフレーム (高さ調整3穴加工・シルバー)","frame"),this.recordPart(`ASTP-30-${o}`,o,1,"止まり木 φ30アルミ丸パイプ (シルバー)","frame"),this.recordPart("ECP-2020-4-GY","20x20mm (グレー)",4,"止まり木 天板固定フレーム両端用エンドキャップ","rail_cap"),this.recordPart("ECP-1530-6","15x30mm (ブラック)",2,"止まり木 吊り下げフレーム下端用エンドキャップ","rail_cap"),this.recordPart("M3x8 つまみネジ (白)","M3 x L8mm",4,"止まり木 天板パンチング固定用つまみネジ","other"),this.recordPart("M6 ボルト","M6 x L20mm",2,"止まり木 φ30丸棒固定用ボルト","other")}buildCaulking(){const{W:e,D:t,hasFloorReinforcement:n}=this.params,s=this.materials.caulkingMaterial,r=5,o=3,a=A=>{const S=new Ft;S.moveTo(0,0),S.lineTo(r,0),S.lineTo(0,o),S.closePath();const v=new wt(S,{depth:A,bevelEnabled:!1});return v.translate(0,0,-A/2),this.activeGeometries.push(v),v},c=Math.max(10,e-40),l=a(c),h=new Q(l,s);h.rotation.y=-Math.PI/2,h.position.set(0,20,-t/2+20),this.caulkingGroup.add(h);const d=a(c),p=new Q(d,s);p.rotation.y=Math.PI/2,p.position.set(0,20,t/2-20),this.caulkingGroup.add(p);const f=Math.max(10,t-50),g=a(f),_=new Q(g,s);_.position.set(-e/2+20,20,0),this.caulkingGroup.add(_);const m=a(f),u=new Q(m,s);if(u.rotation.y=Math.PI,u.position.set(e/2-20,20,0),this.caulkingGroup.add(u),n){const A=a(f),S=new Q(A,s);S.rotation.y=Math.PI,S.position.set(-10,20,0),this.caulkingGroup.add(S);const v=a(f),U=new Q(v,s);U.position.set(10,20,0),this.caulkingGroup.add(U)}}buildRubberPacking(){const{W:e,D:t,H:n,hasSideReinforcement:s,sideOpeningH:r}=this.params,o=this.params.panelConfig||{},a=this.materials.rubberPackingMaterial;let c=0;const l=(g,_,m,u,A,S,v)=>{const U=new Xe(g,_,m);this.activeGeometries.push(U);const C=new Q(U,a);C.position.set(u,A,S),this.rubberPackingGroup.add(C),c+=v},h=1.6,d=3;if((o.back||"acrylic")!=="polyca"){const g=Math.max(10,e-40),_=Math.max(10,n-40),m=-t/2+20+h/2;l(g,d,h,0,20+d/2,m,g),l(d,_,h,-e/2+20+d/2,n/2,m,_),l(d,_,h,e/2-20-d/2,n/2,m,_)}const f=Math.max(10,t-40);if(s){const g=o.sideLower||"acrylic",_=o.sideUpper||"punching",m=Math.max(10,r),u=Math.max(10,n-60-m);if(g!=="polyca")for(const A of[-1,1]){const S=A*(e/2-20)-A*(h/2),v=20+u/2;l(h,d,f,S,20+d/2,0,f),l(h,u,d,S,v,-t/2+20+d/2,u),l(h,u,d,S,v,t/2-20-d/2,u)}if(_!=="polyca")for(const A of[-1,1]){const S=A*(e/2-20)-A*(h/2),v=20+u+20,U=v+m/2;l(h,d,f,S,v+d/2,0,f),l(h,m,d,S,U,-t/2+20+d/2,m),l(h,m,d,S,U,t/2-20-d/2,m)}}else if((o.side||"acrylic")!=="polyca"){const _=Math.max(10,n-40);for(const m of[-1,1]){const u=m*(e/2-20)-m*(h/2);l(h,d,f,u,20+d/2,0,f),l(h,_,d,u,n/2,-t/2+20+d/2,_),l(h,_,d,u,n/2,t/2-20-d/2,_)}}if(c>0){const g=Math.ceil(c/1e3);this.recordPart("モレ対策ゴムパッキン (グレー)",`${g} m`,1,`側面・背面 隙間モレ抑制用 (実施工長: ${Math.round(c)}mm / 1m単位積算)`,"rail_cap",{partCode:"NSCP1H-S-6",lengthMm:g*1e3,unitType:"m"})}}buildRoomDivider(){const{W:e,D:t,H:n,cageType:s,frontWideFrame:r,frontWindowH:o}=this.params,c=(this.params.panelConfig||{}).partition||"black_matte",l=Math.max(10,t-32),h=Math.max(10,n-23.5),d=3;let p=this.materials.blackMatteAcrylic,f="acrylic_black_matte_3_0",g="アクリル黒両面マット 3.0mm";if(c==="acrylic")p=this.materials.acrylic,f="acrylic_extrusion_3_0",g="透明アクリル 3.0mm";else if(c==="smoke_gray")p=this.materials.smokeGrayAcrylic,f="acrylic_smoke_gray_3_0",g="アクリル グレースモーク半透明 3.0mm";else if(c==="punching"){const re=eo(l,h,!1);this.activeTextures.push(re),p=this.materials.createPunchingMaterial(re),this.activeMaterials.push(p),f="pvc_punching_3_0",g="塩ビパンチングボード 透明 3.0mm"}const _=t/2-20,m=_-l,u=11.5,A=u+h,S=18,v=new Ft;v.moveTo(_,u+S),v.lineTo(_,A),v.lineTo(m+S,A),v.lineTo(m,A-S),v.lineTo(m,u+S),v.lineTo(m+S,u),v.lineTo(_-S,u),v.lineTo(_,u+S);const U=new wt(v,{depth:d,bevelEnabled:!1}),C=U.attributes.position;for(let re=0;re<C.count;re++){const te=C.getX(re),fe=C.getY(re),ae=C.getZ(re);C.setXYZ(re,ae-d/2,fe,te)}C.needsUpdate=!0;const P=U.attributes.uv;if(P){for(let re=0;re<P.count;re++){const te=C.getZ(re),fe=C.getY(re),ae=(te-m)/l,Ae=(fe-u)/h;P.setXY(re,ae,Ae)}P.needsUpdate=!0}U.computeVertexNormals(),this.activeGeometries.push(U);const D=new Q(U,p);D.castShadow=!0,D.receiveShadow=!0,D.name="２室分け仕切り板",this.dividerGroup.add(D),this.recordPart(`２室分け仕切り板 (${g})`,`${l} x ${h}`,1,`２室分け仕切り板後付け仕様 (${g})`,"panel",{panelCode:f,partCode:f,widthMm:l,heightMm:h});let T=30;if(s==="A"||s==="A_FRONT"){const re=r||"2x";re==="3x"?T=50:re==="2x"?T=30:T=10}else T=20+(o||50)+10;const M=18,w=18,F=18,I=3.5,O=new Ft;O.moveTo(0,0),O.lineTo(-w,0),O.lineTo(-w,-I),O.lineTo(-I,-I),O.lineTo(-I,-F),O.lineTo(0,-F),O.closePath();const k=new wt(O,{depth:M,bevelEnabled:!1}),Y=k.attributes.position;for(let re=0;re<Y.count;re++){const te=Y.getX(re),fe=Y.getY(re),ae=Y.getZ(re);Y.setXYZ(re,-d/2+te,T-M/2+ae,_+fe)}Y.needsUpdate=!0,k.computeVertexNormals(),this.activeGeometries.push(k);const ne=new Q(k,this.materials.perchAluminum);ne.castShadow=!0,ne.name="２室分け・ABL-2015-4",this.dividerGroup.add(ne);const X=-d/2-w/2,le=T,se=_-I-1,de=new Ke(3.5,3.5,1.8,16);de.rotateX(Math.PI/2),de.translate(X,le,se),this.activeGeometries.push(de);const Me=new Q(de,this.materials.handleMaterial);Me.name="２室分け・フレーム固定プラスネジ",this.dividerGroup.add(Me);const Z=new Xe(4,.8,.5);Z.translate(X,le,se-.7),this.activeGeometries.push(Z);const N=new Q(Z,this.materials.wireMesh);this.dividerGroup.add(N);const V=new Xe(.8,4,.5);V.translate(X,le,se-.7),this.activeGeometries.push(V);const ce=new Q(V,this.materials.wireMesh);this.dividerGroup.add(ce);const J=-d/2-I-2.5,ve=T,ye=_-F/2,ge=new Ke(4.8,4.8,5,18);ge.rotateZ(Math.PI/2),ge.translate(J,ve,ye),this.activeGeometries.push(ge);const xe=new Q(ge,this.materials.perchWhiteScrew);xe.name="２室分け・M3つまみネジ(ブラケット固定)",this.dividerGroup.add(xe);const W=n-20+d,ee=W+2,R=[{x:-3.5,z:-t/2+50},{x:3.5,z:-t/2+65},{x:-3.5,z:t/2-60},{x:3.5,z:t/2-75}];for(const re of R){const te=new Ke(4.5,4.5,4,16);te.translate(re.x,ee,re.z),this.activeGeometries.push(te);const fe=new Q(te,this.materials.perchWhiteScrew);fe.name="２室分け・天板M3つまみネジ",this.dividerGroup.add(fe);const ae=new Ke(1.5,1.5,7,12);ae.translate(re.x,W-3.5,re.z),this.activeGeometries.push(ae);const Ae=new Q(ae,this.materials.handleMaterial);this.dividerGroup.add(Ae)}this.recordPart("ABL-2015-4","20x15x15mm",1,"２室分け L字ブラケット ABL-2015-4 (シルバー)","rail_cap",{partCode:"ABL-2015-4",unitType:"piece"}),this.recordPart("M3 つまみネジ (白)","M3 x L8mm",5,"２室分け固定・倒れ防止用つまみネジ","other"),this.recordPart("M4 皿ネジ","M4 x L8mm",1,"２室分けフレーム固定用皿ネジ","other")}recordPart(e,t,n,s,r="other",o={}){const a=typeof t=="number"?`${Math.round(t)} mm`:t,c=typeof t=="number"?Math.round(t):o.lengthMm||null;let l=e;if(typeof t=="number"&&e.includes("-")){const h=e.split("-");isNaN(h[h.length-1])||(l=h.slice(0,-1).join("-"))}this.partsList.push({name:e,size:a,count:n,note:s,category:r,lengthMm:c,partCode:o.partCode||l,unitType:o.unitType||(typeof t=="number"?"m":"piece"),...o})}getPartsSummary(){return this.partsList}}class mv{constructor(){this.group=new vt,this.group.name="DimensionLines",this.lineMaterial=new Hc({color:165063,linewidth:2,depthTest:!1,transparent:!0,opacity:.85}),this.textSprites=[],this.activeGeometries=[]}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];this.group.remove(e)}for(const e of this.activeGeometries)e.dispose();this.activeGeometries=[];for(const e of this.textSprites)e.material.map&&e.material.map.dispose(),e.material.dispose();this.textSprites=[]}createTextSprite(e,t="#38bdf8",n="#ffffff",s="rgba(20, 26, 38, 0.88)"){const r=document.createElement("canvas");r.width=384,r.height=120;const o=r.getContext("2d");o.fillStyle=s,o.strokeStyle=t,o.lineWidth=4;const a=24;o.beginPath(),o.roundRect(10,10,364,100,a),o.fill(),o.stroke(),o.font="bold 44px sans-serif",o.fillStyle=n,o.textAlign="center",o.textBaseline="middle",o.fillText(e,192,60);const c=new To(r);c.minFilter=Lt;const l=new Sd({map:c,depthTest:!1,transparent:!0}),h=new j0(l);return h.scale.set(90,30,1),this.textSprites.push(h),h}update(e){this.clear();const{W:t,D:n,H:s,cageType:r,frontWindowH:o,hasSideReinforcement:a,sideOpeningH:c}=e,l=5,h=n/2+55,d=this.createTextSprite(`W: ${t} mm`,"#38bdf8","#ffffff");d.position.set(0,l,h),this.group.add(d);const p=t/2+55,f=5,g=this.createTextSprite(`D: ${n} mm`,"#38bdf8","#ffffff");g.position.set(p,f,0),this.group.add(g);const _=-t/2-55,m=n/2,u=this.createTextSprite(`H: ${s} mm`,"#38bdf8","#ffffff");if(u.position.set(_,s/2,m),this.group.add(u),r==="C"){const A=t/2+50,S=n/2+10,v=20+o/2,U=this.createTextSprite(`前窓: ${o} mm`,"#fb923c","#ffffff","rgba(35, 20, 12, 0.9)");U.scale.set(80,27,1),U.position.set(A,v,S),this.group.add(U)}if(a){const A=-t/2-50,S=0,v=c,U=s-20-v/2,C=this.createTextSprite(`側面上部開口: ${v} mm`,"#34d399","#ffffff","rgba(12, 32, 24, 0.9)");C.scale.set(95,27,1),C.position.set(A,U,S),this.group.add(C)}}setVisible(e){this.group.visible=e}}class gv{constructor(e){this.container=e,this.width=e.clientWidth,this.height=e.clientHeight,this.scene=new yd,this.scene.background=null,this.camera=new Kt(40,this.width/this.height,1,8e3),this.camera.position.set(-1130,740,1070),this.isAutoRotating=!1,this._autoRotateAngle=0,this._autoRotateSpeed=.003,this._lastAutoParams=null,this.renderer=new Z0({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hh,this.renderer.toneMapping=Wh,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement);const t=new xc(this.renderer);t.compileEquirectangularShader();const n=t.fromScene(new Q_,.04).texture;this.scene.environment=n,this.controls=new G_(this.camera,this.renderer.domElement),this.controls.target.set(-60,100,-15),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI-.05,this.controls.minDistance=200,this.controls.maxDistance=4e3,this.setupLighting(),this.setupFloorGrid(),this.materials=new ev,this.cageModel=new pv(this.materials),this.scene.add(this.cageModel.root),this.dimensions=new mv,this.scene.add(this.dimensions.group),window.addEventListener("resize",()=>this.onResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setupLighting(){const e=new I_(16777215,1975344,.38);e.position.set(0,1e3,0),this.scene.add(e);const t=new jr(16777215,1.35);t.position.set(1e3,1600,1200),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=100,t.shadow.camera.far=4e3;const n=1e3;t.shadow.camera.left=-n,t.shadow.camera.right=n,t.shadow.camera.top=n,t.shadow.camera.bottom=-n,t.shadow.bias=-5e-4,t.shadow.radius=3.5,this.scene.add(t);const s=new jr(16777215,.65);s.position.set(0,1200,0),this.scene.add(s);const r=new jr(16777215,.5);r.position.set(-1e3,1e3,-1200),this.scene.add(r);const o=new jr(2765376,.25);o.position.set(0,-1e3,0),this.scene.add(o)}setupFloorGrid(){this.gridHelper=new O_(2400,24,5924219,3028291),this.gridHelper.position.y=-10,this.scene.add(this.gridHelper);const e=new xi(3e3,3e3),t=new D_({opacity:.35});this.floor=new Q(e,t),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=-10.1,this.floor.receiveShadow=!0,this.scene.add(this.floor)}setFrameColor(e){this.materials.setFrameColor(e)}update(e){const t=e.footType==="caster"?-66:-11;this.gridHelper&&(this.gridHelper.position.y=t),this.floor&&(this.floor.position.y=t-.1),this.cageModel.update(e),this.dimensions.update(e);const n=e.H/2;this.controls.target.set(0,n,0)}setDimensionsVisible(e){this.dimensions.setVisible(e)}setPanelsVisible(e){this.cageModel.panelGroup.visible=e,this.cageModel.doorGroup.visible=e}setDoorState(e){this.cageModel.params.doorState=e,this.cageModel.buildDoors()}setViewPreset(e,t){const n=t.H||300,s=t.W||750,r=t.D||450,o=n/2,a=Math.max(s,r,n)*2.2;switch(this.controls.target.set(0,o,0),e){case"front":this.controls.target.set(0,o,0),this.camera.position.set(0,o,a);break;case"iso":default:{const l=Math.max(s,r,n)*1.5;this.controls.target.set(0,n*.45,0),this.camera.position.set(-l*.82,n*1.05+l*.55,l*.82);break}case"top":this.controls.target.set(0,o,0),this.camera.position.set(0,o+a*1.3,1);break;case"side":this.controls.target.set(0,o,0),this.camera.position.set(a,o,0);break;case"bottom":this.controls.target.set(0,o,0),this.camera.position.set(a*.4,-a*.7,a*.6);break}this.controls.update()}onResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}setAutoRotate(e,t){if(this.isAutoRotating=e,e){const n=this.controls.target,s=this.camera.position.x-n.x,r=this.camera.position.y-n.y,o=this.camera.position.z-n.z,a=Math.sqrt(s*s+r*r+o*o);this._autoRotateAngle=Math.atan2(o,s),this._autoRotatePhi=Math.asin(Math.max(-1,Math.min(1,r/a))),this._autoTargetYOffset=0,this._autoRadiusScale=1,this._lastAutoParams=t?{...t}:null,this.controls.enableDamping=!1,this.controls.enabled=!1,this._setupAutoRotateDrag()}else this.controls.enabled=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this._teardownAutoRotateDrag()}_setupAutoRotateDrag(){const e=this.renderer.domElement;this._dragState={active:!1,button:-1,lastY:0},this._onPointerDown=t=>{this._dragState.active=!0,this._dragState.button=t.button,this._dragState.lastY=t.clientY,t.preventDefault()},this._onPointerMove=t=>{if(!this._dragState.active)return;const n=t.clientY-this._dragState.lastY;this._dragState.lastY=t.clientY;const s=.005;if(this._dragState.button===0)this._autoRotatePhi-=n*s,this._autoRotatePhi=Math.max(-.05,Math.min(Math.PI/2-.05,this._autoRotatePhi));else if(this._dragState.button===2){const r=this._lastAutoParams&&this._lastAutoParams.H||300;this._autoTargetYOffset-=n*.5;const o=r*.8;this._autoTargetYOffset=Math.max(-o,Math.min(o,this._autoTargetYOffset))}},this._onPointerUp=()=>{this._dragState.active=!1,this._dragState.button=-1},this._onWheel=t=>{t.preventDefault();const n=.001;this._autoRadiusScale*=1+t.deltaY*n,this._autoRadiusScale=Math.max(.3,Math.min(3,this._autoRadiusScale))},e.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),e.addEventListener("wheel",this._onWheel,{passive:!1}),this._onContextMenu=t=>t.preventDefault(),e.addEventListener("contextmenu",this._onContextMenu)}_teardownAutoRotateDrag(){const e=this.renderer.domElement;this._onPointerDown&&e.removeEventListener("pointerdown",this._onPointerDown),this._onPointerMove&&window.removeEventListener("pointermove",this._onPointerMove),this._onPointerUp&&window.removeEventListener("pointerup",this._onPointerUp),this._onWheel&&e.removeEventListener("wheel",this._onWheel),this._onContextMenu&&e.removeEventListener("contextmenu",this._onContextMenu),this._onPointerDown=null,this._onPointerMove=null,this._onPointerUp=null,this._onWheel=null,this._onContextMenu=null}_calcAutoRotateCamera(e){const t=e&&e.W||750,n=e&&e.D||450,s=e&&e.H||300,r=Math.max(t,n,s)*1.45,o=s*.5;return{radius:r,targetY:o}}animate(){if(requestAnimationFrame(this.animate),this.cageModel.updateDoorAnimation(),this.isAutoRotating&&this._lastAutoParams){this._autoRotateAngle+=this._autoRotateSpeed;const{radius:e,targetY:t}=this._calcAutoRotateCamera(this._lastAutoParams),n=e*(this._autoRadiusScale||1),s=this._autoRotatePhi,r=Math.cos(s),o=Math.cos(this._autoRotateAngle)*n*r,a=Math.sin(this._autoRotateAngle)*n*r,c=t+(this._autoTargetYOffset||0)+n*Math.sin(s),l=t+(this._autoTargetYOffset||0);this.camera.position.set(o,c,a),this.camera.lookAt(0,l,0)}else this.controls.update();this.renderer.render(this.scene,this.camera)}getPartsSummary(){return this.cageModel.getPartsSummary()}captureImage(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}}const Qe={frames:{"AFS-2020-4":{name:"2020標準フレーム (シルバー)",unit:"m",weightPerMeter:.437,pricePerMeter:801,note:"標準4面溝あり"},"AFSF-2020-4":{name:"2020フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.44,pricePerMeter:801,note:"補強・中桟用 1面フラット"},"AFSW-2020-4":{name:"2020フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.444,pricePerMeter:801,note:"2面フラット"},"AFS-2040-4":{name:"2040フレーム (シルバー)",unit:"m",weightPerMeter:.752,pricePerMeter:1394,note:"正面2倍幅・40mm高"},"AFSF-2040-4":{name:"2040フレーム 溝なし1面 (シルバー)",unit:"m",weightPerMeter:.712,pricePerMeter:1394,note:"40mm幅 1面フラット"},"AFST-2040-4":{name:"2040フレーム 溝なし2面 (シルバー)",unit:"m",weightPerMeter:.715,pricePerMeter:1394,note:"40mm幅 2面フラット"},"AFS-2060-4":{name:"2060フレーム (シルバー)",unit:"m",weightPerMeter:1.09,pricePerMeter:1923,note:"正面3倍幅・60mm高"},"AFS-2020-4-BK":{name:"2020フレーム (ブラック)",unit:"m",weightPerMeter:.437,pricePerMeter:1037,note:"ブラックアルマイト"},"AFS-2040-4-BK":{name:"2040フレーム (ブラック)",unit:"m",weightPerMeter:.752,pricePerMeter:1809,note:"ブラックアルマイト 40mm高"},"AFS-2020-5":{name:"2020インナーフレーム (金網受用・シルバー)",unit:"m",weightPerMeter:.404,pricePerMeter:822,note:"黒ケージ金網取付用インナー"},"AFS-1530-6":{name:"1530フレーム (シルバー)",unit:"m",weightPerMeter:.684,pricePerMeter:1273,note:"止まり木垂直吊り下げ用フレーム"},"ASTP-30":{name:"φ30アルミパイプ (シルバー)",unit:"m",weightPerMeter:.795,pricePerMeter:1874,note:"止まり木丸棒"}},rails:{"PGRU-03-4-GY":{name:"上側ガラスレール (グレー)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部"},"PGRU-03-4-BK":{name:"上側ガラスレール (ブラック)",unit:"m",weightPerMeter:.087,pricePerMeter:683,note:"正面開口上部 (黒ケージ連動)"},"PGRL-03-4-GY":{name:"下側ガラスレール (グレー)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用"},"PGRL-03-4-BK":{name:"下側ガラスレール (ブラック)",unit:"m",weightPerMeter:.0575,pricePerMeter:593.5,note:"正面開口下部・たわみ防止レール兼用 (黒ケージ連動)"}},packings:{"NSCP1H-S-6":{name:"モレ対策ゴムパッキン (グレー)",unit:"m",weightPerMeter:.035,pricePerMeter:841/6,note:"側面・背面 隙間モレ抑制用"}},caps:{"ECP-2020-4":{name:"2020用エンドキャップ",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"奥行きフレーム両端用"},"ECP-2020-4-GY":{name:"2020用エンドキャップ (グレー)",unit:"piece",weightPerPiece:.0011,pricePerPiece:143,note:"止まり木天板固定フレーム両端用"},"ECP-1530-6":{name:"1530用エンドキャップ (ブラック)",unit:"piece",weightPerPiece:.0016,pricePerPiece:143,note:"止まり木吊り下げフレーム下端用"},"ABL-2015-4":{name:"L字ブラケット ABL-2015-4 (シルバー)",unit:"piece",weightPerPiece:.0041,pricePerPiece:201,note:"2室分け仕切り板固定用L字ブラケット (シルバー固定)"}},hardware:{"TH-31":{name:"TH-31 ステンレス蝶番",unit:"piece",weightPerPiece:.028,pricePerPiece:347,note:"前開き扉用 ステンレス製平蝶番 (下部2箇所)"},"C-1249-4":{name:"C-1249-4 ステンレス打掛",unit:"piece",weightPerPiece:.05,pricePerPiece:660,note:"前開き扉用 ステンレス製打掛錠 (上部2箇所)"}},panels:{acrylic_extrusion_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:7568,note:"標準透明パネル (床・背・側面・天面・固定窓)"},acrylic_cast_3_0:{name:"透明アクリル 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:14652,baseCost:1500,note:"正面扉専用 (高透明・高平滑パネル・固定原価+1500円含む)"},polyca_4_0:{name:"中空ポリカ 4.0mm",thicknessMm:4,unit:"m2",weightPerM2:.9,pricePerM2:7500,note:"高断熱・軽量中空ポリカーボネート"},pvc_punching_3_0:{name:"塩ビパンチングボード 透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:4.3,pricePerM2:20092,note:"通気孔パネル (φ3.1-P7)"},acrylic_black_matte_3_0:{name:"アクリル黒両面マット 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10344,note:"低反射・マットブラックアクリル"},acrylic_smoke_gray_3_0:{name:"アクリル グレースモーク半透明 3.0mm",thicknessMm:3,unit:"m2",weightPerM2:3.6,pricePerM2:10976,note:"暗め半透明スモークアクリル (コモグラス 530K グレースモーク)"},acrylic_extrusion_1_5:{name:"透明アクリル 1.5mm",thicknessMm:1.5,unit:"m2",weightPerM2:1.8,pricePerM2:4336,note:"側面換気量調整板等"},acrylic_extrusion_2_0:{name:"透明アクリル 2.0mm",thicknessMm:2,unit:"m2",weightPerM2:2.4,pricePerM2:5296,note:"予備・薄物パネル"},wire_mesh_15:{name:"金網15mmピッチ（黒粉体塗装）",pitchMm:15,unit:"m2",weightPerM2:8.9,pricePerM2:42712,note:"天面金網 (FENP15, 線径φ3.2)"},wire_mesh_25:{name:"金網25mmピッチ（黒粉体塗装）",pitchMm:25,unit:"m2",weightPerM2:6.2,pricePerM2:25627,note:"天面金網 (FENP25, 線径φ3.2)"},wire_mesh_30:{name:"金網30mmピッチ（黒粉体塗装）",pitchMm:30,unit:"m2",weightPerM2:4.4,pricePerM2:14949,note:"天面金網 (FENP30, 線径φ3.2)"}},options:{labor:{splitFloor:{price:500},splitTop:{price:500},typeC:{price:500},splitSide:{price:1e3},frontWide3x:{price:500},perch:{price:1e3},rubberPacking:{price:800},roomDivider:{price:500},frontOpenDoor:{price:3e3}},items:{caster:{price:1500,cost:800},sideVentCover:{price:500,cost:200}}},pricing:{markupRate:1.4,roundingUnit:100},system:{gasLogEndpointUrl:"https://script.google.com/macros/s/AKfycbwWv5VmeJGCnvvD0U3WTJBkT3ZnrFIj1qUHXXMlF2TA3vn2hSu9J1zp-9fc4PY_whjp/exec"}},bo=[{id:"standard",name:"標準仕様",icon:"📐",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","標準枠2倍幅"],desc:"サイズやオプション変更してカスタマイズしてください。"},{id:"leopard_gecko",name:"レオパ向け",icon:"🦎",W:540,D:400,H:200,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)"],desc:"保温性ありのレオパちゃんにゆったりサイズ"},{id:"ball_python",name:"ボールパイソン向け",icon:"🐍",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","ロータイプ"],desc:"保温性抜群のロータイプケージ"},{id:"carpet_python",name:"カーペットパイソン",icon:"🐍",W:900,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:50,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type C (前窓50)","ブラック","黒アクリル(側・背)","たわみ防止レール"],desc:"のびのび多彩なレイアウトを組める広々サイズ"},{id:"tortoise",name:"リクガメ",icon:"🐢",W:900,D:500,H:500,cageType:"C",frameColor:"silver",frontWindowH:120,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!1,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"mesh30",topLeft:"mesh30",topRight:"mesh30"},tags:["Type C (前窓120)","シルバー","天板金網30mm","たわみ防止レール"],desc:"熱源ライトを安心しておける天板金網仕様"},{id:"bearded_dragon",name:"フトアゴヒゲトカゲ",icon:"🦎",W:800,D:450,H:450,cageType:"C",frameColor:"black",frontWindowH:80,frontWideFrame:"none",hasDoorAntiFlex:!0,hasSideReinforcement:!0,sideOpeningH:200,hasSideVentCover:!1,hasFloorReinforcement:!0,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"black_matte",back:"black_matte",side:"black_matte",sideUpper:"punching",sideLower:"black_matte",top:"mesh25",topLeft:"mesh25",topRight:"mesh25"},tags:["Type C (前窓80)","ブラック","天板金網25mm","側面2分割","たわみ防止レール"],desc:"通気性も確保しつつ、熱源ライト乗せれる金網仕様"},{id:"hedgehog",name:"ハリネズミ",icon:"🦔",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"2x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","中空ポリカ(側・背)","側面2分割","換気量調整板"],desc:"側面、背面中空ポリカ・側面2分割・換気量調整板仕様"},{id:"hamster",name:"ハムスター向け",icon:"🐹",W:750,D:450,H:300,cageType:"A",frameColor:"silver",frontWideFrame:"3x",hasSideReinforcement:!0,sideOpeningH:120,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"polyca",side:"polyca",sideUpper:"punching",sideLower:"polyca",top:"punching",topLeft:"punching",topRight:"punching"},tags:["Type A","シルバー","正面幅広3倍","中空ポリカ","換気量調整板"],desc:"正面幅広フレーム3倍＆中空ポリカ・換気量調整板仕様"},{id:"sugar_glider",name:"フクロモモンガ",icon:"🐿️",W:350,D:350,H:500,cageType:"A_FRONT",frameColor:"silver",frontWideFrame:"none",hasSideReinforcement:!1,hasSideVentCover:!0,hasDoorAntiFlex:!1,hasFloorReinforcement:!1,hasTopReinforcement:!1,footType:"rubber",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"punching",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching"},doorHingeSide:"left",tags:["Type A (前開き)","シルバー","側面パンチング","換気量調整板"],desc:"W350×D350×H500mm前開き仕様。側面全面パンチング＆外張り側面換気量調整板で通気・保温を両立"}],_v=document.getElementById("canvas-container"),mo=document.getElementById("creature-preset-grid"),vv=document.getElementById("btn-save-image");document.getElementById("btn-copy-spec");document.getElementById("inquiry-spec-textarea");document.getElementById("copy-toast");const nn=document.getElementById("estimate-result-modal"),yh=document.getElementById("modal-estimate-id"),Sh=document.getElementById("modal-price-total"),Th=document.getElementById("modal-weight-total"),rr=document.getElementById("modal-spec-textarea"),ba=document.getElementById("btn-copy-spec-modal"),fs=document.getElementById("modal-copy-toast"),bc=document.getElementById("btn-save-image-modal"),bh=document.getElementById("btn-close-modal"),Eh=document.getElementById("btn-dismiss-modal"),wh=document.getElementById("btn-open-estimate-modal"),Xt=document.getElementById("modal-download-success"),ps=document.getElementById("download-success-title"),li=document.getElementById("download-filename-label"),Eo=document.getElementById("modal-preview-section"),Ms=document.getElementById("modal-preview-img");let Oi=null,or=null;const xv=Date.now(),Id=Bv(),Ec=kv();let Ah=0,et=null;function Si(i,e=5e3){let t=document.getElementById("app-notice-toast");t||(t=document.createElement("div"),t.id="app-notice-toast",t.className="app-notice-toast hidden",document.body.appendChild(t)),t.textContent=i,t.classList.remove("hidden"),requestAnimationFrame(()=>{t.classList.add("show")}),t._timer&&clearTimeout(t._timer),t._timer=setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.classList.add("hidden"),300)},e)}const Xn=document.getElementById("slider-w"),Yn=document.getElementById("input-w"),Is=document.getElementById("slider-d"),Us=document.getElementById("input-d"),$n=document.getElementById("slider-h"),qn=document.getElementById("input-h"),Hi=document.getElementById("row-front-window"),Fs=document.getElementById("slider-fw"),Ns=document.getElementById("input-fw"),wo=document.getElementById("toggle-side-reinforce"),dr=document.getElementById("card-side-reinforce"),ur=document.getElementById("box-side-h"),pt=document.getElementById("input-side-h"),Qn=document.getElementById("btn-type-a"),Nt=document.getElementById("btn-type-a-front"),Ti=document.getElementById("btn-type-c"),xn=document.getElementById("type-badge"),Vi=document.getElementById("btn-frame-silver"),Wi=document.getElementById("btn-frame-black"),Ea=document.getElementById("section-front-door-hinge"),Zn=document.getElementById("btn-hinge-left"),Kn=document.getElementById("btn-hinge-right"),Os=document.getElementById("toggle-caster"),Xi=document.getElementById("card-caster"),fn=document.getElementById("toggle-floor-reinforce"),wc=document.getElementById("card-floor-reinforce"),Ac=document.getElementById("floor-reinf-sub"),pn=document.getElementById("toggle-top-reinforce"),fr=document.getElementById("card-top-reinforce"),pr=document.getElementById("top-reinf-sub"),En=document.getElementById("toggle-door-anti-flex"),mn=document.getElementById("card-door-anti-flex"),jn=document.getElementById("toggle-side-vent-cover"),Cn=document.getElementById("card-side-vent-cover"),Js=document.getElementById("vent-cover-badge"),to=document.getElementById("vent-cover-sub"),Pt=document.getElementById("toggle-perch"),At=document.getElementById("card-perch"),Bn=document.getElementById("toggle-front-wide-2x"),hi=document.getElementById("card-front-wide-2x"),no=document.getElementById("front-wide-2x-sub"),kn=document.getElementById("toggle-front-wide-3x"),di=document.getElementById("card-front-wide-3x"),io=document.getElementById("front-wide-3x-sub"),mi=document.getElementById("toggle-rubber-packing"),Gn=document.getElementById("card-rubber-packing"),ui=document.getElementById("rubber-packing-badge"),wa=document.getElementById("rubber-packing-sub"),Aa=document.getElementById("floor-warning-banner"),Ch=document.getElementById("seismic-warning-banner"),Mv=document.getElementById("seismic-warning-text"),Ud=document.getElementById("btn-door-closed"),Fd=document.getElementById("btn-door-left"),Nd=document.getElementById("btn-door-right"),go=document.getElementById("btn-front-door-closed"),_o=document.getElementById("btn-front-door-open"),Rh=document.getElementById("slide-door-group"),Ph=document.getElementById("front-door-group"),Lh=document.getElementById("door-control-title"),Od=[Ud,Fd,Nd,go,_o].filter(Boolean),Ca=document.getElementById("reinforce-tip"),Ra=document.getElementById("reinforce-text"),Dh=document.getElementById("current-spec-summary");document.getElementById("cost-hud-card");const ys=document.getElementById("cost-hud-result"),ms=document.getElementById("hud-cost-total"),gs=document.getElementById("hud-weight-total"),dn=document.getElementById("btn-calc-estimate"),Cc=document.querySelectorAll(".preset-btn:not(#btn-auto-rotate)"),Rc=document.getElementById("btn-auto-rotate"),yv=document.getElementById("btn-reset-specs"),Pa=document.getElementById("panel-config-toggle-btn"),Ih=document.getElementById("panel-config-container"),La=document.getElementById("options-toggle-btn"),Uh=document.getElementById("options-container"),Ao=document.getElementById("select-panel-floor"),Bd=document.getElementById("select-panel-back"),kd=document.getElementById("select-panel-side"),Gd=document.getElementById("select-panel-side-upper"),zd=document.getElementById("select-panel-side-lower"),Co=document.getElementById("select-panel-top"),Ro=document.getElementById("select-panel-top-left"),Po=document.getElementById("select-panel-top-right"),Lo=document.getElementById("select-panel-partition"),Fh=document.getElementById("row-panel-side"),Nh=document.getElementById("row-panel-side-split"),Oh=document.getElementById("row-panel-top"),Bh=document.getElementById("row-panel-top-split"),wn=document.getElementById("row-panel-partition"),gn=document.getElementById("toggle-room-divider"),sn=document.getElementById("card-room-divider"),Fi=document.getElementById("room-divider-sub"),Ss=document.getElementById("perch-sub"),x={W:750,D:450,H:300,cageType:"A",frameColor:"silver",footType:"rubber",hasFloorReinforcement:!1,hasTopReinforcement:!1,hasDoorAntiFlex:!1,hasSideVentCover:!1,hasPerch:!1,hasRubberPacking:!1,hasRoomDivider:!1,frontWideFrame:"2x",doorHingeSide:"left",frontWindowH:50,hasSideReinforcement:!1,sideOpeningH:120,showPanels:!0,showDimensions:!0,doorState:"closed",panelConfig:{front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"}};let ei="2x",$c=!1;const yt=new gv(_v);window.viewer=yt;const Hd=750*450;function Sv(i,e,t,n){const s=Math.min(i,e)/10,r=t/10,o=s/Math.sqrt(r),a=n==="caster"?4.2:3.8,c=o<a;return{ratio:o,threshold:a,isProneToToppling:c,footType:n}}function Ze(){yt.update(x),yt.setPanelsVisible(x.showPanels),yt.setDimensionsVisible(x.showDimensions),$c&&(yt._lastAutoParams={...x});const i=x.W*x.D;i>Hd&&!x.hasFloorReinforcement?(Aa.classList.remove("hidden"),Ca.classList.remove("reinforced"),Ra.textContent=`床面積: ${(i/1e4).toFixed(0)}c㎡ (> 750×450mm) 床面補強なし：アクリルたわみ防止のため床面中央補強フレーム (2分割) を推奨します`):x.hasFloorReinforcement?(Aa.classList.add("hidden"),Ca.classList.add("reinforced"),Ra.textContent="床面中央補強フレーム（2分割）が配置されています"):(Aa.classList.add("hidden"),Ca.classList.remove("reinforced"),Ra.textContent=`床面積: ${(i/1e4).toFixed(0)}c㎡ (≦ 750×450mm) 床面補強フレームなし（標準枠）`);const t=Sv(x.W,x.D,x.H,x.footType);if(t.isProneToToppling){Ch.classList.remove("hidden");const n=x.footType==="caster"?"キャスター装備（車輪向きによる支点変化を考慮した安全目安: 4.2）":"安全目安: 3.8";Mv.innerHTML=`<strong>転倒注意：</strong>耐震安定値 <span class="metric-tag">${t.ratio.toFixed(2)}</span> ＜ 基準 ${t.threshold}（${n}）。地震等で転倒しやすいため、壁固定等の転倒防止対策を推奨します`}else Ch.classList.add("hidden");Cv(),qc(),Oo(),bv(),Tv(),wv()}function Tv(){x.hasSideReinforcement?(Fh.classList.add("hidden"),Nh.classList.remove("hidden")):(Fh.classList.remove("hidden"),Nh.classList.add("hidden"));const i=x.hasTopReinforcement||x.W>940;i?(Oh.classList.add("hidden"),Bh.classList.remove("hidden")):(Oh.classList.remove("hidden"),Bh.classList.add("hidden")),Ao&&(Ao.value=x.panelConfig.floor||"acrylic"),Bd.value=x.panelConfig.back,kd.value=x.panelConfig.side,Gd.value=x.panelConfig.sideUpper,zd.value=x.panelConfig.sideLower,Co.value=x.panelConfig.top,Ro.value=x.panelConfig.topLeft,Po.value=x.panelConfig.topRight;const e=document.getElementById("panel-summary-badge");if(e){let t="パンチング";const n=i?x.panelConfig.topLeft:x.panelConfig.top;n.startsWith("mesh")?t=`金網${n.replace("mesh","")}mm`:n==="acrylic"&&(t="アクリル天面");let s="背面アクリル";x.panelConfig.back==="punching"?s="背面パンチング":x.panelConfig.back==="polyca"?s="背面中空ポリカ":x.panelConfig.back==="black_matte"?s="背面ブラックマット":x.panelConfig.back==="smoke_gray"&&(s="背面グレースモーク"),e.textContent=`${s} / ${t}`}}function Oo(){const i=x.hasSideReinforcement&&x.panelConfig.sideUpper==="punching",e=!x.hasSideReinforcement&&x.panelConfig.side==="punching";i||e?(jn.disabled=!1,Cn.classList.remove("disabled"),Js.classList.add("ready"),Js.textContent="選択可能",e?to.textContent="冬場の保温・換気調整用。左右上下4枚外張り":to.textContent="冬場の保温・換気調整用。左右外張り"):(jn.checked=!1,x.hasSideVentCover=!1,jn.disabled=!0,Cn.classList.add("disabled"),Cn.classList.remove("active"),Js.classList.remove("ready"),x.hasSideReinforcement?(Js.textContent="要上部パンチング",to.textContent="※側面上部が塩ビパンチングパネル時に選択できます"):(Js.textContent="要側面パンチング",to.textContent="※側面パネルが塩ビパンチング時に選択できます"))}function qc(){if(x.cageType==="C")Bn.checked=!1,Bn.disabled=!0,hi.classList.remove("active"),hi.classList.add("disabled"),no.textContent="※Type Cは前窓構造のため選択不可（Type A専用）",kn.checked=!1,kn.disabled=!0,di.classList.remove("active"),di.classList.add("disabled"),io.textContent="※Type Cは前窓構造のため選択不可（Type A専用）";else{const e=x.frameColor==="black"?"高さ60mm(ブラック: 40mm+20mm 2段重ね)使用。深床材・高剛性仕様":"高さ60mmフレーム使用。深床材・高剛性仕様";x.frontWideFrame==="2x"?(Bn.checked=!0,Bn.disabled=!1,hi.classList.add("active"),hi.classList.remove("disabled"),no.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",kn.checked=!1,kn.disabled=!0,di.classList.remove("active"),di.classList.add("disabled"),io.textContent="※2倍幅がONのため選択不可（2倍幅を外すと選択可能）"):x.frontWideFrame==="3x"?(Bn.checked=!1,Bn.disabled=!0,hi.classList.remove("active"),hi.classList.add("disabled"),no.textContent="※3倍幅がONのため選択不可（3倍幅を外すと選択可能）",kn.checked=!0,kn.disabled=!1,di.classList.add("active"),di.classList.remove("disabled"),io.textContent=e):(Bn.checked=!1,Bn.disabled=!1,hi.classList.remove("active"),hi.classList.remove("disabled"),no.textContent="高さ40mmフレーム使用。床材厚みを隠し高剛性化",kn.checked=!1,kn.disabled=!1,di.classList.remove("active"),di.classList.remove("disabled"),io.textContent=e)}}function bv(){const i=x.panelConfig.back==="polyca";let e=!1;x.hasSideReinforcement?e=x.panelConfig.sideLower==="polyca"&&x.panelConfig.sideUpper==="polyca":e=x.panelConfig.side==="polyca",i&&e?(mi.checked=!1,x.hasRubberPacking=!1,mi.disabled=!0,Gn.classList.add("disabled"),Gn.classList.remove("active"),ui.textContent="中空ポリカのみ時は施工不可",ui.className="option-cond-badge",ui.classList.remove("hidden"),wa.textContent="※中空ポリカ仕様には施工できません（アクリル等の面がある場合に選択可）"):(mi.disabled=!1,Gn.classList.remove("disabled"),x.hasRubberPacking?(Gn.classList.add("active"),mi.checked=!0):(Gn.classList.remove("active"),mi.checked=!1),i||(x.hasSideReinforcement?x.panelConfig.sideLower==="polyca"||x.panelConfig.sideUpper==="polyca":x.panelConfig.side==="polyca")?(ui.textContent="中空ポリカ除く面に施工",ui.className="option-cond-badge info",ui.classList.remove("hidden"),wa.textContent="側面・背面からの水漏れの抑制（中空ポリカ面を除くアクリル面に施工）"):(ui.textContent="",ui.classList.add("hidden"),wa.textContent="側面・背面からの水漏れの抑制（完全に水漏れなしを保証するものではありません）"))}function kh(i){if(!i)return null;if(Qe.panels&&Qe.panels[i])return Qe.panels[i];if(Qe.frames&&Qe.frames[i])return Qe.frames[i];if(Qe.rails&&Qe.rails[i])return Qe.rails[i];if(Qe.caps&&Qe.caps[i])return Qe.caps[i];if(Qe.packings&&Qe.packings[i])return Qe.packings[i];if(Qe.hardware&&Qe.hardware[i])return Qe.hardware[i];for(const e of[Qe.panels,Qe.frames,Qe.rails,Qe.caps,Qe.packings,Qe.hardware])if(e){for(const[t,n]of Object.entries(e))if(i===t||i.startsWith(t)||t.startsWith(i)||n.name&&(n.name===i||i.includes(n.name)||n.name.includes(i)))return n}return null}let mr=!1;function Ev(){var J,ve,ye,ge,xe,W,ee,R,re,te,fe,ae,Ae;const i=yt.getPartsSummary();let e=0,t=0,n=0,s=0;for(const ue of i)if(ue.category==="frame"||ue.category==="rail_cap"||ue.category==="hardware"){const E=kh(ue.partCode||ue.name);if(E)if(E.unit==="m"){const y=ue.lengthMm||0,oe=(ue.partCode&&(ue.partCode.startsWith("PGRU")||ue.partCode.startsWith("PGRL"))?Math.ceil(y/250)*250:y)/1e3,ie=Math.round(E.pricePerMeter*oe);e+=ie*ue.count,t+=E.weightPerMeter*(y/1e3)*ue.count}else e+=(E.pricePerPiece||0)*ue.count,t+=(E.weightPerPiece||0)*ue.count}else if(ue.category==="panel"){const E=kh(ue.panelCode||ue.partCode||ue.name);let y=ue.widthMm,H=ue.heightMm;if((y==null||H==null)&&ue.size){const K=ue.size.match(/(\d+)\s*[x×]\s*(\d+)/);K&&(y=parseInt(K[1],10),H=parseInt(K[2],10))}if(E&&E.unit==="m2"&&y&&H){const K=y/1e3*(H/1e3);if(!(ue.panelCode==="acrylic_extrusion_1_5"||ue.name&&ue.name.includes("換気量調整板"))){const ie=Math.round(E.pricePerM2*K);n+=ie*ue.count,E.baseCost&&(n+=E.baseCost)}s+=E.weightPerM2*K*ue.count}}const r=Qe.options||{},o=r.labor||{},a=r.items||{},c=!!x.hasFloorReinforcement,l=!!(x.hasTopReinforcement||x.W>940),h=x.cageType==="C",d=!!x.hasSideReinforcement,p=x.cageType==="A"&&x.frontWideFrame==="3x",f=x.footType==="caster",g=!!x.hasSideVentCover,_=!!x.hasPerch,m=!!x.hasRubberPacking,u=!!x.hasRoomDivider,A=x.cageType==="A_FRONT",S=c?((J=o.splitFloor)==null?void 0:J.price)??500:0,v=l?((ve=o.splitTop)==null?void 0:ve.price)??500:0,U=h?((ye=o.typeC)==null?void 0:ye.price)??500:0,C=d?((ge=o.splitSide)==null?void 0:ge.price)??1e3:0,P=p?((xe=o.frontWide3x)==null?void 0:xe.price)??500:0,D=_?((W=o.perch)==null?void 0:W.price)??1e3:0,T=m?((ee=o.rubberPacking)==null?void 0:ee.price)??800:0,M=u?((R=o.roomDivider)==null?void 0:R.price)??500:0,w=A?((re=o.frontOpenDoor)==null?void 0:re.price)??3e3:0,F=S+v+U+C+P+D+T+M+w,I=f?((te=a.caster)==null?void 0:te.price)??1500:0,O=f?((fe=a.caster)==null?void 0:fe.cost)??800:0,k=g?((ae=a.sideVentCover)==null?void 0:ae.price)??500:0,Y=g?((Ae=a.sideVentCover)==null?void 0:Ae.cost)??200:0,ne=I+k,X=O+Y,le=Qe.pricing||{},se=typeof le.markupRate=="number"?le.markupRate:1.4,de=typeof le.roundingUnit=="number"?le.roundingUnit:100,Me=e+n,Z=Math.ceil(Me*se/de)*de,N=Me+X,V=Z+ne+F,ce=t+s;return{rawCost:N,priceWithMarkup:V,weight:ce}}let gi=null;function wv(){if(gi&&(gi.aborted=!0,gi=null,dn)){dn.classList.remove("is-calculating");const i=dn.querySelector(".calc-btn-title");i&&(i.textContent="見積もりと重量計算（β版）")}(mr||ys&&!ys.classList.contains("hidden"))&&(mr=!1,ys&&ys.classList.add("hidden"))}async function Av(){gi&&(gi.aborted=!0);const i={aborted:!1};if(gi=i,ys&&ys.classList.remove("hidden"),ms&&(ms.classList.remove("value-appear"),ms.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>部材積算中...</span>
      </span>
    `),gs&&(gs.classList.remove("value-appear"),gs.innerHTML=`
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>重量計算中...</span>
      </span>
    `),dn){dn.classList.add("is-calculating");const o=dn.querySelector(".calc-btn-title");o&&(o.textContent="部材積算・構造検証中...")}const e=5e3,t=Math.floor(Math.random()*5001),n=e+t,s=100,r=Math.floor(n/s);try{for(let a=0;a<r;a++)if(await new Promise(c=>setTimeout(c,s)),i.aborted)return;const o=Ev();ms&&(ms.textContent=`¥${o.priceWithMarkup.toLocaleString()}`,ms.classList.add("value-appear")),gs&&(gs.textContent=`${o.weight.toFixed(1)} kg`,gs.classList.add("value-appear")),mr=!0,Gv(o)}catch(o){console.error("Structural simulation error:",o)}finally{if(gi===i&&(gi=null,dn)){dn.classList.remove("is-calculating");const o=dn.querySelector(".calc-btn-title");o&&(o.textContent="見積もりと重量計算（β版）")}}}function Mn(i=x.doorHingeSide){return i==="right"?"左打掛、右ヒンジ":"左ヒンジ、右打掛"}function Bo(i=!1){if(x.cageType==="A_FRONT"){const e=Mn();return i?`Type A 前開き (${e})`:`Type A 前開き (${e})`}else if(x.cageType==="C")return i?"Type C（下部前窓＋扉仕様）":"Type C（前窓＋扉）";return i?"Type A（全面スライド扉仕様）":"Type A（全面スライド扉）"}function Cv(){if(!Dh)return;const i=Bo(!1),e=`W${x.W} × D${x.D} × H${x.H} mm`,t=[];if(x.cageType==="A"){const n=x.frontWideFrame==="3x"?"正面3倍幅":x.frontWideFrame==="2x"?"正面2倍幅":"正面標準幅";t.push(n)}t.push(x.hasFloorReinforcement?"床補強: あり":"床補強: なし"),(x.hasTopReinforcement||x.W>940)&&t.push("天板補強: あり"),x.hasSideReinforcement&&t.push(`側面補強(上部開口): ${x.sideOpeningH}mm`),x.hasDoorAntiFlex&&t.push("扉たわみ防止"),x.hasSideVentCover&&t.push("換気調整板"),x.hasPerch&&t.push("止まり木"),x.hasRoomDivider&&t.push("２室分け"),t.push(x.footType==="caster"?"キャスター":"ゴム脚"),Dh.innerHTML=`
    <div class="spec-line-primary">${i} | ${e}</div>
    <div class="spec-line-sub">${t.join(" / ")}</div>
  `}function ko(i,e,t,n){i.addEventListener("input",s=>{const r=parseInt(s.target.value,10);e.value=r,x[t]=r,n&&n(r),Ze()}),e.addEventListener("change",s=>{let r=parseInt(s.target.value,10);const o=parseInt(i.min,10),a=parseInt(i.max,10),c=parseInt(i.step,10)||10;isNaN(r)&&(r=o),r=Math.round(r/c)*c,r=Math.max(o,Math.min(a,r)),e.value=r,i.value=r,x[t]=r,n&&n(r),Ze()})}function vr(){if(x.W>940)fn.checked=!0,fn.disabled=!0,wc.classList.add("disabled"),Ac.textContent="幅940mm超のため必須（解除不可）",x.hasFloorReinforcement=!0;else{fn.disabled=!1,wc.classList.remove("disabled"),Ac.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください";const i=x.W*x.D>Hd;x.hasFloorReinforcement=i,fn.checked=i}}ko(Xn,Yn,"W",i=>{vr(),i>940?(pn.checked=!0,pn.disabled=!0,fr.classList.add("disabled"),pr.textContent="幅940mm超のため必須（解除不可）",x.hasTopReinforcement=!0):(pn.disabled=!1,fr.classList.remove("disabled"),pr.textContent="940mm以下は任意指定（W>940mmは必須）",pn.checked=!1,x.hasTopReinforcement=!1)});ko(Is,Us,"D",()=>{vr()});ko($n,qn,"H",i=>{const e=Math.max(30,i-120);Fs.max=e,Ns.max=e,x.frontWindowH>e&&(x.frontWindowH=e,Fs.value=e,Ns.value=e);const t=50,n=Math.max(t,i-110),s=Math.round((i-60)/20)*10;pt.min=t,pt.max=n,x.hasSideReinforcement?x.sideOpeningH>n?(x.sideOpeningH=n,pt.value=n):x.sideOpeningH<t&&(x.sideOpeningH=t,pt.value=t):(x.sideOpeningH=s,pt.value=s)});ko(Fs,Ns,"frontWindowH");pt.addEventListener("change",i=>{let e=parseInt(i.target.value,10);const t=50,n=Math.max(t,x.H-110),s=10;isNaN(e)&&(e=t),e=Math.round(e/s)*s,e=Math.max(t,Math.min(n,e)),pt.value=e,x.sideOpeningH=e,Ze()});wo.addEventListener("change",i=>{if(x.hasSideReinforcement=i.target.checked,x.hasSideReinforcement){dr.classList.add("active"),ur.classList.remove("disabled");const e=50,t=Math.max(e,x.H-110);pt.min=e,pt.max=t;const n=Math.round((x.H-60)/20)*10;(x.sideOpeningH<e||x.sideOpeningH>t)&&(x.sideOpeningH=n,pt.value=n)}else dr.classList.remove("active"),ur.classList.add("disabled");Ze()});fn.addEventListener("change",i=>{x.hasFloorReinforcement=i.target.checked,Ze()});pn.addEventListener("change",i=>{x.hasTopReinforcement=i.target.checked,Ze()});function Rv(){if(!En||!mn)return;const i=x.cageType==="A_FRONT",e=document.getElementById("door-anti-flex-sub");i?(x.hasDoorAntiFlex&&(x.hasDoorAntiFlex=!1,En.checked=!1),En.disabled=!0,mn.classList.add("disabled"),mn.classList.remove("active"),e&&(e.textContent="※前開き（横開き扉）仕様のためスライド扉用レールは選択不可")):(En.disabled=!1,mn.classList.remove("disabled"),e&&(e.textContent="強力生体向け。左右端に縦レールを追加し内側からの変形を防止"))}function Pc(){if(!gn||!sn)return;const i=x.cageType==="A_FRONT",e=x.hasPerch;i||e?(x.hasRoomDivider&&(x.hasRoomDivider=!1,gn.checked=!1,wn&&wn.classList.add("hidden")),gn.disabled=!0,sn.classList.add("disabled"),sn.classList.remove("active"),Fi&&(i?Fi.textContent="※前開き仕様では2室分け仕切り板は選択不可":Fi.textContent="※止まり木オプション選択時は利用できません")):(gn.disabled=!1,sn.classList.remove("disabled"),Fi&&(Fi.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"))}En.addEventListener("change",i=>{if(x.cageType==="A_FRONT"){i.target.checked=!1,x.hasDoorAntiFlex=!1;return}x.hasDoorAntiFlex=i.target.checked,i.target.checked?mn.classList.add("active"):mn.classList.remove("active"),Ze()});jn.addEventListener("change",i=>{x.hasSideVentCover=i.target.checked,i.target.checked?Cn.classList.add("active"):Cn.classList.remove("active"),Ze()});Pt&&Pt.addEventListener("change",i=>{x.hasPerch=i.target.checked,i.target.checked?(At&&At.classList.add("active"),Pc(),(x.panelConfig.top!=="punching"||x.panelConfig.topLeft!=="punching"||x.panelConfig.topRight!=="punching")&&(x.panelConfig.top="punching",x.panelConfig.topLeft="punching",x.panelConfig.topRight="punching",Co&&(Co.value="punching"),Ro&&(Ro.value="punching"),Po&&(Po.value="punching"),Si("※天面パンチングボードの穴を利用して固定するため、天面を塩ビパンチングに変更しました。金網天板との組み合わせは直接DMにてご相談ください。",6e3))):(At&&At.classList.remove("active"),Pc()),Ze()});gn&&gn.addEventListener("change",i=>{x.hasRoomDivider=i.target.checked,i.target.checked?(sn&&sn.classList.add("active"),wn&&wn.classList.remove("hidden"),Pt&&(x.hasPerch&&(x.hasPerch=!1,Pt.checked=!1,At&&At.classList.remove("active")),Pt.disabled=!0),At&&At.classList.add("disabled"),Ss&&(Ss.textContent="※２室分けオプション選択時は利用できません"),(x.panelConfig.top!=="punching"||x.panelConfig.topLeft!=="punching"||x.panelConfig.topRight!=="punching")&&Si("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3)):(sn&&sn.classList.remove("active"),wn&&wn.classList.add("hidden"),Pt&&(Pt.disabled=!1),At&&At.classList.remove("disabled"),Ss&&(Ss.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応")),Ze()});Lo&&Lo.addEventListener("change",i=>{x.panelConfig.partition=i.target.value,Ze()});Bn.addEventListener("change",i=>{i.target.checked?(x.frontWideFrame="2x",ei="2x"):(x.frontWideFrame="none",ei="none"),Ze()});kn.addEventListener("change",i=>{i.target.checked?(x.frontWideFrame="3x",ei="3x"):(x.frontWideFrame="none",ei="none"),Ze()});mi.addEventListener("change",i=>{x.hasRubberPacking=i.target.checked,i.target.checked?Gn.classList.add("active"):Gn.classList.remove("active"),Ze()});Qn.addEventListener("click",()=>{x.cageType="A",x.frontWideFrame=ei,Qn.classList.add("active"),Nt==null||Nt.classList.remove("active"),Ti.classList.remove("active"),Hi.classList.add("hidden"),xn.textContent="Type A 選択中 (全面スライド扉)",xr(),Ze()});Nt==null||Nt.addEventListener("click",()=>{x.cageType="A_FRONT",x.frontWideFrame=ei,Nt.classList.add("active"),Qn.classList.remove("active"),Ti.classList.remove("active"),Hi.classList.add("hidden"),xn.textContent=`Type A 前開き 選択中 (${Mn()})`,xr(),Ze()});Ti.addEventListener("click",()=>{x.cageType="C",x.frontWideFrame="none",Ti.classList.add("active"),Qn.classList.remove("active"),Nt==null||Nt.classList.remove("active"),Hi.classList.remove("hidden"),xn.textContent="Type C 選択中 (前窓＋扉)",xr(),Ze()});const Pv=600,Lv=700,Dv=1800,Iv=900;function Uv(){const i=x.cageType==="A_FRONT",e=i?Pv:Dv,t=i?Lv:Iv;Xn&&Yn&&(Xn.max=e,Yn.max=e,x.W>e&&(x.W=e,Xn.value=e,Yn.value=e,vr())),$n&&qn&&($n.max=t,qn.max=t,x.H>t&&(x.H=t,$n.value=t,qn.value=t))}function xr(){const i=x.cageType==="A_FRONT";Uv(),Rv(),Pc(),Ea&&(i?(Ea.classList.remove("hidden"),Zn==null||Zn.classList.toggle("active",x.doorHingeSide!=="right"),Kn==null||Kn.classList.toggle("active",x.doorHingeSide==="right")):Ea.classList.add("hidden")),Rh&&Ph&&(Rh.style.display=i?"none":"grid",Ph.style.display=i?"grid":"none"),Lh&&(Lh.textContent=i?"前開き扉 開閉":"引き違いスライド扉 開閉");const e=x.doorState||"closed";Od.forEach(t=>{t.classList.toggle("active",t.getAttribute("data-mode")===e)})}Zn&&Zn.addEventListener("click",()=>{x.doorHingeSide="left",Zn.classList.add("active"),Kn==null||Kn.classList.remove("active"),x.cageType==="A_FRONT"&&(xn.textContent=`Type A 前開き 選択中 (${Mn()})`),Ze()});Kn&&Kn.addEventListener("click",()=>{x.doorHingeSide="right",Kn.classList.add("active"),Zn==null||Zn.classList.remove("active"),x.cageType==="A_FRONT"&&(xn.textContent=`Type A 前開き 選択中 (${Mn()})`),Ze()});Vi.addEventListener("click",()=>{x.frameColor="silver",Vi.classList.add("active"),Wi.classList.remove("active"),Ze()});Wi.addEventListener("click",()=>{x.frameColor="black",Wi.classList.add("active"),Vi.classList.remove("active"),Ze()});Os.addEventListener("change",i=>{x.footType=i.target.checked?"caster":"rubber",i.target.checked?Xi.classList.add("active"):Xi.classList.remove("active"),Ze()});let so=null;function Gs(i){x.doorState=i,Od.forEach(t=>{t.getAttribute("data-mode")===i?t.classList.add("active"):t.classList.remove("active")});const e=document.querySelector(".door-mode-group");e.classList.add("door-animating"),so&&clearTimeout(so),so=setTimeout(()=>{e.classList.remove("door-animating"),so=null},3100),yt.setDoorState(i)}Ud.addEventListener("click",()=>Gs("closed"));Fd.addEventListener("click",()=>Gs("left_open"));Nd.addEventListener("click",()=>Gs("right_open"));go==null||go.addEventListener("click",()=>Gs("closed"));_o==null||_o.addEventListener("click",()=>Gs("open"));function Vd(i){$c=i,yt.setAutoRotate(i,x),i?(Rc.classList.add("active","rotating"),Cc.forEach(e=>e.classList.remove("active"))):Rc.classList.remove("active","rotating")}Rc.addEventListener("click",()=>{Vd(!$c)});Cc.forEach(i=>{i.addEventListener("click",()=>{Vd(!1),Cc.forEach(t=>t.classList.remove("active")),i.classList.add("active");const e=i.getAttribute("data-view");yt.setViewPreset(e,x)})});yv.addEventListener("click",()=>{x.W=750,x.D=450,x.H=300,x.cageType="A",x.frontWindowH=50,x.hasSideReinforcement=!1,x.sideOpeningH=120,Gs("closed"),Xn.value=750,Yn.value=750,Is.value=450,Us.value=450,$n.value=300,qn.value=300,Fs.value=50,Ns.value=50,wo.checked=!1,dr.classList.remove("active"),ur.classList.add("disabled"),pt.min=50,pt.max=190,pt.value=120,fn.checked=!1,fn.disabled=!1,wc.classList.remove("disabled"),Ac.textContent="床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください",x.hasFloorReinforcement=!1,pn.checked=!1,pn.disabled=!1,fr.classList.remove("disabled"),pr.textContent="940mm以下は任意指定（W>940mmは必須）",x.hasTopReinforcement=!1,Os.checked=!1,Xi.classList.remove("active"),x.footType="rubber",En.checked=!1,mn.classList.remove("active"),x.hasDoorAntiFlex=!1,jn.checked=!1,Cn.classList.remove("active"),x.hasSideVentCover=!1,Pt&&(Pt.checked=!1,Pt.disabled=!1),At&&At.classList.remove("active","disabled"),Ss&&(Ss.textContent="天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応"),x.hasPerch=!1,gn&&(gn.checked=!1,gn.disabled=!1),sn&&sn.classList.remove("active","disabled"),Fi&&(Fi.textContent="正面扉戸の隙間が7mmあります。小さい生体にはご注意ください"),wn&&wn.classList.add("hidden"),Lo&&(Lo.value="black_matte"),x.hasRoomDivider=!1,mi&&(mi.checked=!1),Gn&&Gn.classList.remove("active"),x.hasRubberPacking=!1,x.panelConfig={front:"acrylic",floor:"acrylic",back:"acrylic",side:"acrylic",sideUpper:"punching",sideLower:"acrylic",top:"punching",topLeft:"punching",topRight:"punching",partition:"black_matte"},x.frontWideFrame="2x",ei="2x",Qn.click(),yt.setViewPreset("iso",x),Ze()});Ao&&Ao.addEventListener("change",i=>{x.panelConfig.floor=i.target.value,Ze()});Bd.addEventListener("change",i=>{x.panelConfig.back=i.target.value,Ze()});kd.addEventListener("change",i=>{x.panelConfig.side=i.target.value,Ze()});Gd.addEventListener("change",i=>{x.panelConfig.sideUpper=i.target.value,Oo(),Ze()});zd.addEventListener("change",i=>{x.panelConfig.sideLower=i.target.value,Ze()});Co.addEventListener("change",i=>{x.panelConfig.top=i.target.value,x.hasPerch&&i.target.value!=="punching"?Si("※止まり木は天面パンチングボードの穴を利用します。金網天板やアクリル天板との組み合わせは直接DMにてご相談ください。",5e3):x.hasRoomDivider&&i.target.value!=="punching"&&Si("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),Ze()});Ro.addEventListener("change",i=>{x.panelConfig.topLeft=i.target.value,x.hasPerch&&i.target.value!=="punching"?Si("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):x.hasRoomDivider&&i.target.value!=="punching"&&Si("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),Ze()});Po.addEventListener("change",i=>{x.panelConfig.topRight=i.target.value,x.hasPerch&&i.target.value!=="punching"?Si("※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。",5e3):x.hasRoomDivider&&i.target.value!=="punching"&&Si("天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。",7e3),Ze()});const Gh=document.querySelectorAll(".sidebar-tab"),Fv=document.querySelectorAll(".tab-pane");Gh.forEach(i=>{i.addEventListener("click",()=>{const e=i.getAttribute("data-tab");Gh.forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),i.classList.add("active"),i.setAttribute("aria-selected","true"),Fv.forEach(t=>{t.id===e?t.classList.add("active"):t.classList.remove("active")}),yt&&typeof yt.onResize=="function"&&setTimeout(()=>yt.onResize(),50)})});let ro=!0;Pa&&Pa.addEventListener("click",()=>{ro=!ro,Pa.classList.toggle("active",ro),Ih&&Ih.classList.toggle("hidden",!ro)});let oo=!0;La&&La.addEventListener("click",()=>{oo=!oo,La.classList.toggle("active",oo),Uh&&Uh.classList.toggle("hidden",!oo)});pt&&(pt.min=50,pt.max=Math.max(50,x.H-110),pt.value=x.sideOpeningH);Ze();yt.setViewPreset("iso",x);dn&&dn.addEventListener("click",()=>{Av()});function Nv(){!mo||!Array.isArray(bo)||(mo.innerHTML="",bo.forEach(i=>{const e=document.createElement("button");e.className="creature-card",e.dataset.presetId=i.id,e.title=`${i.name} (${i.W}×${i.D}×${i.H}mm)`;const t=Array.isArray(i.tags)&&i.tags.length>0?`<div class="creature-card-tags">
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
    `,e.addEventListener("click",()=>{Wd(i)}),mo.appendChild(e)}))}function Wd(i){if(x.W=i.W,x.D=i.D,x.H=i.H,i.cageType&&(i.cageType==="A"||i.cageType==="A_FRONT"||i.cageType==="C")&&(x.cageType=i.cageType,Qn&&Ti&&(Qn.classList.toggle("active",x.cageType==="A"),Nt==null||Nt.classList.toggle("active",x.cageType==="A_FRONT"),Ti.classList.toggle("active",x.cageType==="C"),xn&&(x.cageType==="A_FRONT"?(x.doorHingeSide=i.doorHingeSide||"left",xn.textContent=`Type A 前開き 選択中 (${Mn()})`):xn.textContent=x.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Hi&&Hi.classList.toggle("hidden",x.cageType!=="C"),xr())),x.cageType==="C"){const s=i.frontWindowH!=null?i.frontWindowH:50;x.frontWindowH=s,Ns&&(Ns.value=s),Fs&&(Fs.value=s)}if(i.frameColor&&(i.frameColor==="silver"||i.frameColor==="black")&&(x.frameColor=i.frameColor,Vi&&Wi&&(Vi.classList.toggle("active",x.frameColor==="silver"),Wi.classList.toggle("active",x.frameColor==="black"))),x.cageType==="A"){const s=i.frontWideFrame||"2x";x.frontWideFrame=s,ei=s}else x.frontWideFrame="none";x.hasSideReinforcement=!!i.hasSideReinforcement,wo&&(wo.checked=x.hasSideReinforcement),dr&&dr.classList.toggle("active",x.hasSideReinforcement),ur&&ur.classList.toggle("disabled",!x.hasSideReinforcement);const e=50,t=Math.max(e,x.H-110);if(pt&&(pt.min=e,pt.max=t),i.sideOpeningH!=null)x.sideOpeningH=Math.max(e,Math.min(t,i.sideOpeningH)),pt&&(pt.value=x.sideOpeningH);else if(x.hasSideReinforcement){const s=Math.round((x.H-60)/20)*10;x.sideOpeningH=s,pt&&(pt.value=s)}x.hasDoorAntiFlex=!!i.hasDoorAntiFlex,En&&(En.checked=x.hasDoorAntiFlex),mn&&mn.classList.toggle("active",x.hasDoorAntiFlex),x.hasSideVentCover=!!i.hasSideVentCover,jn&&(jn.checked=x.hasSideVentCover),Cn&&Cn.classList.toggle("active",x.hasSideVentCover),x.hasPerch=!!i.hasPerch,Pt&&(Pt.checked=x.hasPerch),At&&At.classList.toggle("active",x.hasPerch),i.panelConfig&&(x.panelConfig={...x.panelConfig,...i.panelConfig}),x.footType=i.footType||"rubber",Os&&(Os.checked=x.footType==="caster"),Xi&&Xi.classList.toggle("active",x.footType==="caster"),Yn&&(Yn.value=x.W),Xn&&(Xn.value=x.W),Us&&(Us.value=x.D),Is&&(Is.value=x.D),qn&&(qn.value=x.H),$n&&($n.value=x.H),i.hasFloorReinforcement!=null?(x.hasFloorReinforcement=!!i.hasFloorReinforcement,fn&&(fn.checked=x.hasFloorReinforcement)):vr(),x.W>940?(pn.checked=!0,pn.disabled=!0,fr.classList.add("disabled"),pr.textContent="幅940mm超のため必須（解除不可）",x.hasTopReinforcement=!0):(pn.disabled=!1,fr.classList.remove("disabled"),pr.textContent="940mm以下は任意指定（W>940mmは必須）",x.hasTopReinforcement=!!i.hasTopReinforcement,pn.checked=x.hasTopReinforcement),qc(),Oo(),mo.querySelectorAll(".creature-card").forEach(s=>{s.classList.toggle("active",s.dataset.presetId===i.id)}),Ze(),yt.setViewPreset("iso",x)}function Ov(){const i=new Date,e=i.getFullYear()+String(i.getMonth()+1).padStart(2,"0")+String(i.getDate()).padStart(2,"0"),t=Math.random().toString(36).substring(2,6).toUpperCase();return`EST-${e}-${t}`}function Bv(){try{let i=localStorage.getItem("cage_visitor_id");return i||(i="usr_"+Math.random().toString(36).substring(2,8),localStorage.setItem("cage_visitor_id",i)),i}catch{return"usr_"+Math.random().toString(36).substring(2,8)}}function kv(){try{let i=sessionStorage.getItem("cage_session_id");return i||(i="ses_"+Math.random().toString(36).substring(2,8),sessionStorage.setItem("cage_session_id",i)),i}catch{return"ses_"+Math.random().toString(36).substring(2,8)}}function Gv(i){Oi=Ov(),Ah++;let e="初期表示からの試算";if(et){const n=[];x.W!==et.W&&n.push(`W:${et.W}→${x.W}`),x.D!==et.D&&n.push(`D:${et.D}→${x.D}`),x.H!==et.H&&n.push(`H:${et.H}→${x.H}`),x.cageType!==et.cageType&&n.push(`タイプ:${x.cageType}`),x.cageType==="C"&&x.frontWindowH!==et.frontWindowH&&n.push(`前窓高:${et.frontWindowH}→${x.frontWindowH}`),x.cageType==="A_FRONT"&&x.doorHingeSide!==et.doorHingeSide&&n.push(`開き:${Mn(et.doorHingeSide)}→${Mn(x.doorHingeSide)}`),x.frameColor!==et.frameColor&&n.push(`色:${et.frameColor==="black"?"黒":"銀"}→${x.frameColor==="black"?"黒":"銀"}`),x.frontWideFrame!==et.frontWideFrame&&n.push(`正面下部:${et.frontWideFrame||"なし"}→${x.frontWideFrame||"なし"}`),x.footType!==et.footType&&n.push(`脚:${x.footType==="caster"?"キャスター":"ゴム脚"}`),x.hasFloorReinforcement!==et.hasFloorReinforcement&&n.push(x.hasFloorReinforcement?"床補強追加":"床補強解除"),x.hasTopReinforcement!==et.hasTopReinforcement&&n.push(x.hasTopReinforcement?"天板補強追加":"天板補強解除"),x.hasSideReinforcement!==et.hasSideReinforcement&&n.push(x.hasSideReinforcement?"側面補強追加":"側面補強解除"),x.hasDoorAntiFlex!==et.hasDoorAntiFlex&&n.push(x.hasDoorAntiFlex?"扉たわみ防止追加":"扉たわみ防止解除"),x.hasSideVentCover!==et.hasSideVentCover&&n.push(x.hasSideVentCover?"換気調整板追加":"換気調整板解除"),x.hasPerch!==et.hasPerch&&n.push(x.hasPerch?"止まり木追加":"止まり木解除"),x.hasRubberPacking!==et.hasRubberPacking&&n.push(x.hasRubberPacking?"ゴムパッキン追加":"ゴムパッキン解除"),x.hasRoomDivider!==et.hasRoomDivider&&n.push(x.hasRoomDivider?"2室分け追加":"2室分け解除"),x.hasSideReinforcement&&x.sideOpeningH!==et.sideOpeningH&&n.push(`側上部開口:${et.sideOpeningH}→${x.sideOpeningH}`);const s=et.panelConfig||{},r=x.panelConfig||{};r.floor!==s.floor&&n.push(`床:${Wt(s.floor)}→${Wt(r.floor)}`),r.back!==s.back&&n.push(`背:${Wt(s.back)}→${Wt(r.back)}`),x.hasSideReinforcement?(r.sideUpper!==s.sideUpper||r.sideLower!==s.sideLower)&&n.push(`側分割:${Wt(r.sideUpper)}/${Wt(r.sideLower)}`):r.side!==s.side&&n.push(`側:${Wt(s.side)}→${Wt(r.side)}`);const o=x.hasTopReinforcement||x.W>940,a=et.hasTopReinforcement||et.W>940;o||a?(r.topLeft!==s.topLeft||r.topRight!==s.topRight||!a)&&n.push(`天分割:${Wt(r.topLeft)}/${Wt(r.topRight)}`):r.top!==s.top&&n.push(`天:${Wt(s.top)}→${Wt(r.top)}`),x.hasRoomDivider&&r.partition!==s.partition&&n.push(`仕切り:${Wt(s.partition)}→${Wt(r.partition)}`),n.length>0?e=n.join(", "):e="同一条件での再計算"}const t=zv(Oi,i);yh&&(yh.textContent=Oi),Sh&&(Sh.textContent=`¥${i.priceWithMarkup.toLocaleString()}`),Th&&(Th.textContent=`${i.weight.toFixed(1)} kg`),rr&&(rr.value=t),nn&&(Xt&&Xt.classList.add("hidden"),Eo&&Eo.classList.add("hidden"),window.lastGeneratedEstimateImage=null,nn.classList.remove("hidden")),or={estimateId:Oi,timestamp:new Date().toISOString(),visitorId:Id,sessionId:Ec,seq:Ah,spec:{...x},totals:{...i},diffNote:e,elapsedSec:Math.round((Date.now()-xv)/1e3)},et=JSON.parse(JSON.stringify(x)),Wv(or)}function Zc(){return x.frameColor==="black"?"ブラック":"シルバー"}function Sn(i){switch(i){case"acrylic":return"透明アクリル 3.0mm";case"black_matte":return"アクリル黒両面マット 3.0mm";case"smoke_gray":return"アクリル グレースモーク半透明 3.0mm";case"punching":return"塩ビパンチングボード 3.0mm";case"polyca":return"中空ポリカ 4.0mm";case"mesh15":return"金網15mmピッチ (黒粉体塗装)";case"mesh25":return"金網25mmピッチ (黒粉体塗装)";case"mesh30":return"金網30mmピッチ (黒粉体塗装)";default:return i||"透明アクリル 3.0mm"}}function Wt(i){switch(i){case"acrylic":return"透明アクリル";case"black_matte":return"黒マット";case"smoke_gray":return"グレースモーク";case"punching":return"パンチング";case"polyca":return"中空ポリカ";case"mesh15":return"金網15mm";case"mesh25":return"金網25mm";case"mesh30":return"金網30mm";default:return i||"アクリル"}}function Kc(){const i=[];return x.cageType==="C"?(i.push({face:"正面扉",name:"透明アクリル 3.0mm (スライド扉)"}),i.push({face:"正面固定窓",name:`透明アクリル 3.0mm (開口高 ${x.frontWindowH}mm)`})):x.cageType==="A_FRONT"?i.push({face:"正面扉",name:`透明アクリル 3.0mm (前開き扉: ${Mn()})`}):i.push({face:"正面扉",name:"透明アクリル 3.0mm (全面スライド扉)"}),i.push({face:x.hasFloorReinforcement?"床面 (中央2分割)":"床面",name:Sn(x.panelConfig.floor)}),i.push({face:"背面",name:Sn(x.panelConfig.back)}),x.hasSideReinforcement?i.push({face:"側面 (左右2分割)",name:`上部: ${Sn(x.panelConfig.sideUpper)} / 下部: ${Sn(x.panelConfig.sideLower)}`}):i.push({face:"側面 (左右)",name:Sn(x.panelConfig.side)}),x.hasTopReinforcement||x.W>940?x.panelConfig.topLeft===x.panelConfig.topRight?i.push({face:"天面 (中央2分割)",name:`${Sn(x.panelConfig.topLeft)} (左右共通)`}):i.push({face:"天面 (中央2分割)",name:`左: ${Sn(x.panelConfig.topLeft)} / 右: ${Sn(x.panelConfig.topRight)}`}):i.push({face:"天面",name:Sn(x.panelConfig.top)}),x.hasRoomDivider&&i.push({face:"仕切り板",name:Sn(x.panelConfig.partition||"black_matte")}),i}function jc(){const i=[];if(x.cageType==="A_FRONT"&&i.push(`前開き扉仕様 (${Mn()})`),x.cageType==="A"&&(x.frontWideFrame==="2x"?i.push("正面下側幅広フレーム2倍幅 (40mm)"):x.frontWideFrame==="3x"&&i.push("正面下側幅広フレーム3倍幅 (60mm)")),x.cageType==="C"&&i.push(`前窓固定仕様 (開口高さ ${x.frontWindowH}mm)`),x.hasSideReinforcement&&i.push(`側面補強フレーム (側面上部開口 ${x.sideOpeningH}mm・左右2分割)`),x.hasSideVentCover&&(x.hasSideReinforcement?i.push("側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)"):i.push("側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)")),x.hasFloorReinforcement&&i.push("床面中央補強フレーム (2分割仕様)"),x.W>940?i.push("天板中央補強フレーム (幅940mm超・標準付属/2分割仕様)"):x.hasTopReinforcement&&i.push("天板中央補強フレーム (2分割仕様)"),x.hasDoorAntiFlex&&i.push("正面スライド扉たわみ防止レール"),x.footType==="caster"&&i.push("自在キャスター仕様 (4輪・高さ66mm)"),x.hasPerch){const e=x.W-120,t=Math.floor(e/7)*7,n=Math.max(10,t-15);i.push(`止まり木（天板吊り下げ式・φ30アルミ丸棒 L=${n}mm・後付け可）`)}return x.hasRubberPacking&&i.push("モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)"),x.hasRoomDivider&&i.push("２室分け（後付け仕切り板仕様）"),i}function zv(i,e){const t=Bo(!0),n=Zc(),r=Kc().map(c=>`  ・${c.face}: ${c.name}`).join(`
`),o=jc(),a=o.length>0?o.map(c=>`  ・${c}`).join(`
`):"  ・標準構成（追加オプションなし）";return`【ケージお見積もり仕様】
・見積ID: ${i}
・ケージ種類: ${t}
・外寸サイズ: 幅 ${x.W}mm × 奥行 ${x.D}mm × 高さ ${x.H}mm
・フレーム色: ${n}
・選択パネル素材・板厚:
${r}
・選択オプション:
${a}
・概算総重量: 約 ${e.weight.toFixed(1)} kg
・お見積り合計金額: ¥${e.priceWithMarkup.toLocaleString()}（税込・送料別）
※まだβ版なので誤差（最大±15%程度）が出ております。詳細はDMよりお問い合わせください。
※公式サイト: https://kinato-cage-site.pages.dev/`}wh&&nn&&wh.addEventListener("click",()=>{mr?(Xt&&Xt.classList.add("hidden"),nn.classList.remove("hidden")):alert("先に「見積もりと重量計算」を実行してください。")});bh&&nn&&bh.addEventListener("click",()=>{nn.classList.add("hidden")});Eh&&nn&&Eh.addEventListener("click",()=>{nn.classList.add("hidden")});nn&&nn.addEventListener("click",i=>{i.target===nn&&nn.classList.add("hidden")});ba&&rr&&ba.addEventListener("click",async()=>{const i=rr.value;if(i)try{await navigator.clipboard.writeText(i),fs&&(fs.classList.remove("hidden"),setTimeout(()=>fs.classList.add("hidden"),2200));const e=ba.querySelector(".copy-text-label");if(e){const t=e.textContent;e.textContent="済！",setTimeout(()=>{e.textContent=t},1800)}}catch{rr.select(),document.execCommand("copy"),fs&&(fs.classList.remove("hidden"),setTimeout(()=>fs.classList.add("hidden"),2200))}});bc&&bc.addEventListener("click",()=>{Hv()});Ms&&Ms.addEventListener("click",()=>{Ms.src&&window.open(Ms.src,"_blank")});async function Hv(){if(!mr||!or){alert("先に見積もり計算を実行してください。");return}const i=bc||vv;let e="";i&&(i.classList.add("is-exporting"),e=i.innerHTML,i.innerHTML="<span>⏳ 画像を生成中...</span>");try{const t=yt.captureImage?yt.captureImage():yt.renderer.domElement.toDataURL("image/png"),n=document.createElement("canvas");n.width=1080,n.height=1920;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,1920);r.addColorStop(0,"#090d16"),r.addColorStop(.35,"#0f172a"),r.addColorStop(1,"#1e293b"),s.fillStyle=r,s.fillRect(0,0,1080,1920),s.strokeStyle="rgba(56, 189, 248, 0.06)",s.lineWidth=1;for(let se=60;se<1080;se+=80)s.beginPath(),s.moveTo(se,0),s.lineTo(se,1920),s.stroke();for(let se=60;se<1920;se+=80)s.beginPath(),s.moveTo(0,se),s.lineTo(1080,se),s.stroke();s.strokeStyle="rgba(56, 189, 248, 0.35)",s.lineWidth=2,s.strokeRect(40,40,1e3,1840);const o=se=>new Promise(de=>{if(!se)return de(null);const Me=new Image;Me.onload=()=>de(Me),Me.onerror=()=>de(null),Me.src=se}),a="./",[c,l,h,d]=await Promise.all([o(`${a}logo_kinato.png`),o(`${a}character_transparent.png`),o(t),o(`${a}qr_code_kinato.png`)]);c&&s.drawImage(c,65,65,135,135);const p=c?215:65;s.fillStyle="#ffffff",s.font='bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("きなとのケージ屋さん",p,104),s.fillStyle="#38bdf8",s.font='600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3Dオーダーメイドケージ お見積書",p,140),s.fillStyle="#f9c784",s.font="500 16px ui-monospace, SFMono-Regular, monospace",s.fillText("https://kinato-cage-site.pages.dev/",p,172),d&&(s.fillStyle="#ffffff",s.shadowColor="rgba(56, 189, 248, 0.3)",s.shadowBlur=10,Qs(s,605,67,130,130,8),s.fill(),s.shadowColor="transparent",s.shadowBlur=0,s.drawImage(d,610,72,120,120)),s.textAlign="right",s.fillStyle="#fb7185",s.font="bold 24px ui-monospace, monospace",s.fillText(Oi,1015,110),s.fillStyle="#94a3b8",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const f=new Date,g=`${f.getFullYear()}/${String(f.getMonth()+1).padStart(2,"0")}/${String(f.getDate()).padStart(2,"0")} ${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}`;s.fillText(`発行日時: ${g}`,1015,148),s.textAlign="left";const _=65,m=240,u=950,A=700;if(s.fillStyle="rgba(15, 23, 42, 0.75)",s.strokeStyle="rgba(56, 189, 248, 0.25)",s.lineWidth=2,Qs(s,_,m,u,A,16),s.fill(),s.stroke(),h){const se=Math.min((u-40)/h.width,(A-40)/h.height),de=h.width*se,Me=h.height*se,Z=_+(u-de)/2,N=m+(A-Me)/2;s.drawImage(h,Z,N,de,Me)}s.fillStyle="rgba(2, 6, 23, 0.85)",s.strokeStyle="rgba(56, 189, 248, 0.5)",Qs(s,_+20,m+A-55,230,36,6),s.fill(),s.stroke(),s.fillStyle="#38bdf8",s.font='600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("3D外観シミュレーション",_+35,m+A-31);const S=65,v=960,U=950,C=505;s.fillStyle="rgba(30, 41, 59, 0.65)",s.strokeStyle="rgba(148, 163, 184, 0.2)",s.lineWidth=1.5,Qs(s,S,v,U,C,16),s.fill(),s.stroke(),s.fillStyle="#f8fafc",s.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("📐 ケージ設計パラメータ",S+30,v+40),s.strokeStyle="rgba(148, 163, 184, 0.15)",s.lineWidth=1,s.beginPath(),s.moveTo(S+25,v+56),s.lineTo(S+U-25,v+56),s.stroke();const P=Bo(!0),D=Zc(),T=Kc(),M=jc();s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("ケージ種類",S+30,v+90),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(P,S+230,v+90),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("外寸サイズ",S+30,v+125),s.fillStyle="#38bdf8",s.font='bold 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`幅 ${x.W} mm  ×  奥行 ${x.D} mm  ×  高さ ${x.H} mm`,S+230,v+125),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("フレーム仕様",S+30,v+160),s.fillStyle="#f1f5f9",s.font='500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(D,S+230,v+160),s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択パネル・板厚",S+30,v+198);let w=v+198;T.forEach(se=>{s.fillStyle="#38bdf8",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`[${se.face}]`,S+230,w),s.fillStyle="#e2e8f0",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(se.name,S+380,w),w+=25}),s.strokeStyle="rgba(148, 163, 184, 0.12)",s.beginPath(),s.moveTo(S+25,w+6),s.lineTo(S+U-25,w+6),s.stroke();const F=w+34;if(s.fillStyle="#94a3b8",s.font='600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("選択オプション",S+30,F),M.length===0)s.fillStyle="#94a3b8",s.font='500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("標準構成（追加オプションなし）",S+230,F);else{let se=F;M.forEach(de=>{s.fillStyle="#fbbf24",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("✔",S+230,se),s.fillStyle="#f8fafc",s.font='500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(de,S+255,se),se+=24})}const I=!!(l||d),O=65,k=1485,Y=I?650:950,ne=345,X=s.createLinearGradient(O,k,O+Y,k+ne);if(X.addColorStop(0,"rgba(15, 23, 42, 0.88)"),X.addColorStop(1,"rgba(30, 41, 59, 0.92)"),s.fillStyle=X,s.strokeStyle="rgba(217, 70, 239, 0.4)",s.lineWidth=2,Qs(s,O,k,Y,ne,16),s.fill(),s.stroke(),s.fillStyle="#cbd5e1",s.font='600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("概算総重量 (計算値)",O+35,k+48),s.fillStyle="#38bdf8",s.font="bold 32px ui-monospace, monospace",s.fillText(`約 ${or.totals.weight.toFixed(1)} kg`,O+280,k+50),s.strokeStyle="rgba(148, 163, 184, 0.2)",s.beginPath(),s.moveTo(O+30,k+70),s.lineTo(O+Y-30,k+70),s.stroke(),s.fillStyle="#f1f5f9",s.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("お見積もり合計金額 (税込・送料別)",O+35,k+110),s.fillStyle="#fbbf24",s.font='bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText(`¥${or.totals.priceWithMarkup.toLocaleString()}`,O+35,k+180),s.fillStyle="#fcd34d",s.font='600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※まだβ版なので誤差（最大±15%程度）が出ております。",O+35,k+220),s.fillText("　詳細はDMよりお問い合わせください。",O+35,k+244),s.fillStyle="#94a3b8",s.font='500 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',s.fillText("※本画像はお見積もりシミュレーション結果の控えです。",O+35,k+282),s.fillText("　お問い合わせ・ご注文の際にお手元にご準備ください。",O+35,k+306),I&&l){const Z=l.height/l.width*270,N=735+10/2,V=k+(ne-Z)/2+5;s.drawImage(l,N,V,270,Z)}const le=`Cage_Estimate_${Oi}.png`;try{const se=n.toDataURL("image/png");window.lastGeneratedEstimateImage=se,Ms&&(Ms.src=se),Eo&&Eo.classList.remove("hidden");const de=await new Promise(V=>n.toBlob(V,"image/png"));let Me=null;if(de&&window.File)try{Me=new File([de],le,{type:"image/png"})}catch(V){console.warn("File constructor failed:",V)}const Z=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);let N=!1;if(Z&&Me&&navigator.canShare&&navigator.canShare({files:[Me]}))try{await navigator.share({files:[Me],title:"きなとのケージ屋さん お見積もり結果カード",text:`ケージお見積もり結果カード（${Oi}）です。`}),N=!0,console.log("Shared estimate card image via Web Share API successfully"),Xt&&li&&(li.textContent=le,ps&&(ps.textContent="✅ 共有メニューを開きました（「画像を保存」で写真アプリに保存されます）"),Xt.classList.remove("hidden"))}catch(V){V.name==="AbortError"?(console.log("User closed the share sheet"),Xt&&li&&(li.textContent=le,ps&&(ps.textContent="💡 共有メニューを閉じました。下の画像を長押しして「写真」に追加も可能です"),Xt.classList.remove("hidden")),N=!0):console.warn("navigator.share failed, falling back to download:",V)}if(!N){const V=document.createElement("a");V.href=se,V.download=le,V.target="_self",document.body.appendChild(V),V.click(),document.body.removeChild(V),console.log("Downloaded estimate card image via DataURL:",le),Xt&&li&&(li.textContent=le,ps&&(ps.textContent=Z?"✅ 画像をダウンロードしました（下の画像を長押しして「写真」に追加も可能です）":"✅ ダウンロード完了（保存先: ダウンロードフォルダ）"),Xt.classList.remove("hidden"),setTimeout(()=>{Xt&&Xt.classList.add("hidden")},7e3))}}catch(se){console.warn("toDataURL / export failed, falling back to Blob URL:",se),n.toBlob&&n.toBlob(de=>{if(!de){alert("画像の書き出しに失敗しました。");return}const Me=URL.createObjectURL(de),Z=document.createElement("a");Z.href=Me,Z.download=le,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),setTimeout(()=>URL.revokeObjectURL(Me),1e4),Xt&&li&&(li.textContent=le,Xt.classList.remove("hidden"))},"image/png")}}catch(t){console.error("Estimate card export failed:",t),alert("画像の生成中にエラーが発生しました: "+t.message)}finally{i&&(i.classList.remove("is-exporting"),i.innerHTML=e)}}function Qs(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.lineTo(e+n-r,t),i.arcTo(e+n,t,e+n,t+r,r),i.lineTo(e+n,t+s-r),i.arcTo(e+n,t+s,e+n-r,t+s,r),i.lineTo(e+r,t+s),i.arcTo(e,t+s,e,t+s-r,r),i.lineTo(e,t+r),i.arcTo(e,t,e+r,t,r),i.closePath()}const Vv=!0;function Xd(){const i=window.location.hostname||"",e=window.location.port||"";return i==="localhost"||i==="127.0.0.1"||i==="[::1]"||i==="0.0.0.0"||i.endsWith(".local")||i.startsWith("192.168.")||i.startsWith("10.")||e==="5173"||e==="4173"}async function Wv(i){var t;if(Xd()){console.log("[Log] ローカル開発環境のため、Googleスプレッドシートへの見積もりログ保存を自動スキップしました。");return}const e=(t=Qe==null?void 0:Qe.system)==null?void 0:t.gasLogEndpointUrl;if(!e.startsWith("http")){console.warn("[Log] gasLogEndpointUrl が未設定のため、ログ送信をスキップしました。");return}try{const n=navigator.userAgent;let s="PC";/iPhone/i.test(n)?s="iPhone":/iPad/i.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?s="iPad":/Android/i.test(n)?s="Android":/Mac/i.test(n)?s="Mac":/Win/i.test(n)&&(s="Windows");let r="Browser";/Chrome/i.test(n)&&!/Edge|Edg/i.test(n)?r="Chrome":/Safari/i.test(n)&&!/Chrome/i.test(n)?r="Safari":/Edge|Edg/i.test(n)?r="Edge":/Firefox/i.test(n)&&(r="Firefox");const a=Kc().map(f=>`${f.face}:${f.name}`).join(" | "),c=jc(),l=c.length>0?c.join(", "):"なし",h=Zc();let d=[];try{const f=sessionStorage.getItem("cage_page_history");f&&(d=JSON.parse(f)),d.includes("見積もりシステム")||(d.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(d)))}catch{}const p={type:"estimate",timestamp:i.timestamp,estimateId:i.estimateId,visitorId:i.visitorId,sessionId:i.sessionId,seq:i.seq,device:{type:s,browser:r,screen:`${window.innerWidth}x${window.innerHeight}`},spec:{...i.spec,typeName:Bo(!0),doorHingeDisplayName:x.cageType==="A_FRONT"?Mn():void 0,frameColorDisplayName:h,panelsSummary:a,optionsSummary:l},calculated:i.totals,meta:{elapsedSec:i.elapsedSec,referrer:document.referrer||"Direct",diffNote:i.diffNote,pageHistory:d}};console.log("[Log] GASへ送信中 (type: estimate)...",p),await fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),console.log("[Log] 見積もりログをスプレッドシートへ送信完了:",i.estimateId)}catch(n){console.warn("[Log] スプレッドシート送信エラー:",n)}}Nv();function Xv(){try{let i=null;const e=sessionStorage.getItem("kinato_sim_initial_state");if(e)try{i=JSON.parse(e),sessionStorage.removeItem("kinato_sim_initial_state"),console.log("[Sim] sessionStorageから初期設定を読み込みました:",i)}catch(t){console.warn("[Sim] sessionStorageのパースに失敗:",t)}if(!i&&window.location.search){const t=new URLSearchParams(window.location.search);i={},t.has("preset")&&(i.preset=t.get("preset")),t.has("w")&&(i.W=parseInt(t.get("w"),10)),t.has("d")&&(i.D=parseInt(t.get("d"),10)),t.has("h")&&(i.H=parseInt(t.get("h"),10)),t.has("type")&&(i.cageType=t.get("type").toUpperCase()),t.has("frame")&&(i.frameColor=t.get("frame")),t.has("foot")&&(i.footType=t.get("foot")),t.has("doorAntiFlex")&&(i.hasDoorAntiFlex=t.get("doorAntiFlex")==="1"||t.get("doorAntiFlex")==="true"),t.has("sideVentCover")&&(i.hasSideVentCover=t.get("sideVentCover")==="1"||t.get("sideVentCover")==="true"),t.has("perch")&&(i.hasPerch=t.get("perch")==="1"||t.get("perch")==="true"),t.has("roomDivider")&&(i.hasRoomDivider=t.get("roomDivider")==="1"||t.get("roomDivider")==="true"),t.has("floorReinf")&&(i.hasFloorReinforcement=t.get("floorReinf")==="1"||t.get("floorReinf")==="true"),t.has("topReinf")&&(i.hasTopReinforcement=t.get("topReinf")==="1"||t.get("topReinf")==="true"),t.has("frontWide")&&(i.frontWideFrame=t.get("frontWide")),window.history&&window.history.replaceState&&window.history.replaceState({},document.title,window.location.pathname),console.log("[Sim] URLパラメータから初期設定を読み込み、URLをクリーンにしました:",i)}if(!i||Object.keys(i).length===0)return;if(i.preset&&Array.isArray(bo)){const t=bo.find(n=>n.id===i.preset);t&&Wd(t)}Number.isFinite(i.W)&&(x.W=i.W,Yn&&(Yn.value=x.W),Xn&&(Xn.value=x.W)),Number.isFinite(i.D)&&(x.D=i.D,Us&&(Us.value=x.D),Is&&(Is.value=x.D)),Number.isFinite(i.H)&&(x.H=i.H,qn&&(qn.value=x.H),$n&&($n.value=x.H)),(i.cageType==="A"||i.cageType==="A_FRONT"||i.cageType==="C")&&(x.cageType=i.cageType,Qn&&Ti&&(Qn.classList.toggle("active",x.cageType==="A"),Nt==null||Nt.classList.toggle("active",x.cageType==="A_FRONT"),Ti.classList.toggle("active",x.cageType==="C"),xn&&(x.cageType==="A_FRONT"?(x.doorHingeSide=i.doorHingeSide||"left",xn.textContent=`Type A 前開き 選択中 (${Mn()})`):xn.textContent=x.cageType==="A"?"Type A 選択中 (全面スライド扉)":"Type C 選択中 (前窓＋扉)"),Hi&&Hi.classList.toggle("hidden",x.cageType!=="C"),xr())),(i.frameColor==="silver"||i.frameColor==="black")&&(x.frameColor=i.frameColor,Vi&&Wi&&(Vi.classList.toggle("active",x.frameColor==="silver"),Wi.classList.toggle("active",x.frameColor==="black"))),(i.footType==="rubber"||i.footType==="caster")&&(x.footType=i.footType,Os&&(Os.checked=x.footType==="caster"),Xi&&Xi.classList.toggle("active",x.footType==="caster")),typeof i.hasDoorAntiFlex=="boolean"&&(x.hasDoorAntiFlex=i.hasDoorAntiFlex,En&&(En.checked=x.hasDoorAntiFlex),mn&&mn.classList.toggle("active",x.hasDoorAntiFlex)),typeof i.hasSideVentCover=="boolean"&&(x.hasSideVentCover=i.hasSideVentCover,jn&&(jn.checked=x.hasSideVentCover),Cn&&Cn.classList.toggle("active",x.hasSideVentCover)),typeof i.hasPerch=="boolean"&&(x.hasPerch=i.hasPerch,Pt&&(Pt.checked=x.hasPerch),At&&At.classList.toggle("active",x.hasPerch)),typeof i.hasRoomDivider=="boolean"&&(x.hasRoomDivider=i.hasRoomDivider,gn&&(gn.checked=x.hasRoomDivider),sn&&sn.classList.toggle("active",x.hasRoomDivider),wn&&wn.classList.toggle("hidden",!x.hasRoomDivider),x.hasRoomDivider&&Pt&&(x.hasPerch=!1,Pt.checked=!1,Pt.disabled=!0,At&&At.classList.add("disabled"))),typeof i.hasFloorReinforcement=="boolean"?(x.hasFloorReinforcement=i.hasFloorReinforcement,fn&&(fn.checked=x.hasFloorReinforcement)):vr(),i.frontWideFrame&&(x.frontWideFrame=i.frontWideFrame,ei=i.frontWideFrame),qc(),Oo(),Ze(),yt.setViewPreset("iso",x),typeof calcEstimate=="function"&&calcEstimate()}catch(i){console.error("[Sim] 初期状態の反映エラー:",i)}}Xv();(function(){var t;const e=(t=Qe==null?void 0:Qe.system)==null?void 0:t.gasLogEndpointUrl;if(e.startsWith("http"))try{let n=[];try{const p=sessionStorage.getItem("cage_page_history");p&&(n=JSON.parse(p))}catch{}(n.length===0||n[n.length-1]!=="見積もりシステム")&&(n.push("見積もりシステム"),sessionStorage.setItem("cage_page_history",JSON.stringify(n)));let s=sessionStorage.getItem("cage_initial_referrer"),r=sessionStorage.getItem("cage_landing_page");if(!s){s=document.referrer||"Direct";const p=new URLSearchParams(window.location.search),f=p.get("origin")||p.get("utm_source")||p.get("ref");f&&(s=`${s} [Param:${f}]`),sessionStorage.setItem("cage_initial_referrer",s)}r||(r=window.location.pathname,sessionStorage.setItem("cage_landing_page",r));const o=navigator.userAgent;let a="PC";/iPhone/i.test(o)?a="iPhone":/iPad/i.test(o)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?a="iPad":/Android/i.test(o)?a="Android":/Mac/i.test(o)?a="Mac":/Win/i.test(o)&&(a="Windows");let c="Browser";/Chrome/i.test(o)&&!/Edge|Edg/i.test(o)?c="Chrome":/Safari/i.test(o)&&!/Chrome/i.test(o)?c="Safari":/Edge|Edg/i.test(o)?c="Edge":/Firefox/i.test(o)&&(c="Firefox");let l="直接 / お気に入り";const h=s.toLowerCase();h.includes("instagram.com")?l="Instagram":h.includes("t.co")||h.includes("twitter.com")||h.includes("x.com")?l="X (Twitter)":h.includes("google.")?l="Google検索":h.includes("yahoo.")?l="Yahoo!検索":h.includes("line.me")?l="LINE":h.includes("tiktok.com")?l="TikTok":s!=="Direct"&&(l="外部Webサイト");const d={type:"web_access",visitorId:Id,sessionId:Ec,referrer:s,referrerCategory:l,landingPage:r,pageHistory:n,pageCount:n.length,device:{type:a,browser:c,screen:`${window.innerWidth}x${window.innerHeight}`}};if(Xd()&&Vv){console.log("[Log] ローカル開発環境のため、シミュレーター訪問ログ送信をスキップしました。");return}fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),keepalive:!0}).then(()=>{console.log("[Log] シミュレーター訪問ログをGASへ送信完了 (セッション:",Ec,")")}).catch(p=>{console.warn("[Log] シミュレーター訪問ログ送信エラー:",p)})}catch(n){console.warn("[Log] sendSimAccessLog エラー:",n)}})();
